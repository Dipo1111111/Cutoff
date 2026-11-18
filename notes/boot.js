/* Private module. Loaded only by notes.html. Never tracked by git. */
(function () {
  var C = window.Cutoff, N = window.NOTES, Q = window.QUIZ || {};
  if (!C || !N) return;

  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "notes/notes.css";
  document.head.appendChild(link);

  var openKey = null, mode = "read";

  function esc(s) { return C.esc(s); }
  function meta() { C.state.notes = C.state.notes || {}; return C.state.notes; }
  function read(key) { return !!meta()["read:" + key]; }
  function checkStore(key, sec) {
    var m = meta();
    m["c:" + key + ":" + sec] = m["c:" + key + ":" + sec] || {};
    return m["c:" + key + ":" + sec];
  }
  function cardsKnown(key) {
    var m = meta();
    m["k:" + key] = m["k:" + key] || {};
    return m["k:" + key];
  }
  function best(key) { return meta()["t:" + key] || null; }

  /* ---------- list ---------- */
  function listView() {
    var keys = Object.keys(N);
    var h = '<div class="tools"><span class="count">' + keys.length + " notes &middot; " +
      keys.filter(read).length + " read</span></div>";
    h += '<div class="stack">';
    h += '<div class="sec"><div class="sec-h"><h2>Physics</h2><span>' +
      keys.length + " written</span></div>" + keys.map(function (k, i) {
        var n = N[k], q = Q[k] || {}, done = read(k);
        return '<button class="nlist" data-note="open" data-key="' + k + '">' +
          '<span class="nlist-n num">' + ("0" + (i + 1)).slice(-2) + "</span>" +
          '<span class="nlist-b"><span class="nlist-t">' + esc(n.title) + "</span>" +
          '<span class="nlist-s">' + esc(n.sub) + "</span></span>" +
          '<span class="nlist-m num">' + n.words + " words" + (done ? " &middot; read" : "") +
          "</span></button>";
      }).join("") + "</div>";
    h += '<div class="sec"><div class="sec-h"><h2>Not written yet</h2><span>rest of the plan</span></div>' +
      '<p class="note">Open a topic on Week, read its note here, then tick the topic. ' +
      "Notes live in <b>notes/</b> and rebuild with <b>notes/sync.sh</b> when the shell changes.</p></div>";
    return h + "</div>";
  }

  /* ---------- read ---------- */
  function tabs(key) {
    var t = [["read", "Read"], ["cards", "Cards"], ["test", "Test"]];
    return '<div class="tabs">' + t.map(function (x) {
      return '<button class="tab" data-tab="' + x[0] + '"' +
        (mode === x[0] ? ' aria-current="true"' : "") + ">" + x[1] + "</button>";
    }).join("") + "</div>";
  }

  function docView() {
    var n = N[openKey];
    return '<div class="tools"><button class="mini-key" data-note="back">All notes</button>' +
      tabs(openKey) + '<span class="count">' + esc(n.title) + "</span></div>" +
      '<article class="doc"><header class="doc-head"><p class="doc-kicker num">' +
      esc(n.kicker) + "</p><h1>" + esc(n.title) + "</h1>" +
      '<p class="doc-lede">' + n.lede + "</p></header>" + n.html +
      '<footer class="doc-foot"><button class="btn" data-note="read" data-key="' + openKey +
      '">' + (read(openKey) ? "Marked read" : "Mark as read") + "</button></footer></article>";
  }

  function checkHTML(key, sec, items) {
    var st = checkStore(key, sec);
    var done = Object.keys(st).length;
    return '<div class="qbox" data-sec="' + sec + '" data-key="' + key + '">' +
      '<div class="qbox-h"><span class="lab">Check this section</span>' +
      '<span class="qbox-s num">' + done + " of " + items.length + "</span></div>" +
      items.map(function (it, qi) {
        var picked = st[qi];
        var cls = picked === undefined ? "" : picked === it.a ? " q-ok" : " q-no";
        return '<div class="q' + cls + '"><p class="q-t"><b>' + (qi + 1) + ".</b> " +
          esc(it.q) + "</p><div class=\"q-o\">" + it.o.map(function (op, oi) {
            var mark = "";
            if (picked !== undefined) {
              if (oi === it.a) mark = " is-right";
              else if (oi === picked) mark = " is-wrong";
            }
            return '<button class="q-o-b' + mark + '" data-pick="' + oi +
              '" data-qi="' + qi + '">' + esc(op) + "</button>";
          }).join("") + "</div>" +
          '<p class="q-w">' + (picked === undefined ? "" : esc(it.w)) + "</p></div>";
      }).join("") + "</div>";
  }

  function mountChecks(key) {
    var data = Q[key];
    if (!data || !data.checks) return;
    Object.keys(data.checks).forEach(function (sec) {
      var h = document.getElementById(sec);
      if (!h) return;
      var last = h;
      while (last.nextElementSibling && last.nextElementSibling.tagName !== "H2") {
        last = last.nextElementSibling;
      }
      last.insertAdjacentHTML("afterend", checkHTML(key, sec, data.checks[sec]));
    });
  }

  /* ---------- cards ---------- */
  var deck = null, deckPos = 0, flipped = false;

  function shuffled(n) {
    var a = [], i;
    for (i = 0; i < n; i++) a.push(i);
    for (i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i];
      a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function cardsView() {
    var cards = (Q[openKey] || {}).cards || [];
    if (!cards.length) return '<p class="empty">No cards for this topic yet.</p>';
    if (!deck) { deck = shuffled(cards.length); deckPos = 0; flipped = false; }
    var known = cardsKnown(openKey);
    var knownCount = cards.filter(function (c, i) { return known[i]; }).length;
    var idx = deck[deckPos];
    if (idx === undefined) {
      return '<div class="tools">' + tabs(openKey) + "</div>" +
        '<div class="stack"><div class="sec"><div class="sec-h"><h2>Deck clear</h2>' +
        "<span>" + knownCount + " of " + cards.length + "</span></div>" +
        '<p class="note">Every card is marked known. Run the deck again, or take the test.</p>' +
        '<p><button class="btn" data-deck="restart">Run the deck again</button></p></div></div>';
    }
    var c = cards[idx];
    return '<div class="tools">' + tabs(openKey) +
      '<span class="count num">' + (deckPos + 1) + " / " + deck.length +
      " &middot; " + knownCount + " known</span></div>" +
      '<div class="stack">' +
      '<div class="cwrap"><button class="cface' + (flipped ? " is-back" : "") +
      '" data-deck="flip"><span class="clab">' +
      (flipped ? "Answer" : "Question") + "</span><span class=\"ctext\">" +
      esc(flipped ? c.a : c.q) + "</span>" +
      '<span class="chint">' + (flipped ? "Click to see the question" : "Click to flip") +
      "</span></button></div>" +
      '<div class="crow"><button class="btn quiet" data-deck="again">Again</button>' +
      '<button class="btn" data-deck="known">Got it</button></div>' +
      '<p class="note">Again puts the card back at the end of the deck. Got it keeps it out ' +
      "until you restart.</p></div>";
  }

  /* ---------- test ---------- */
  var answers = {}, submitted = false;

  function testView() {
    var items = (Q[openKey] || {}).exam || [];
    if (!items.length) return '<p class="empty">No test for this topic yet.</p>';
    var b = best(openKey);
    if (submitted) return testResult(items);

    return '<div class="tools">' + tabs(openKey) +
      '<span class="count num">' + items.length + " questions" + (b ? " &middot; best " +
      b.score + " %" : "") + "</span></div>" +
      '<div class="stack"><div class="sec"><p class="note">Answer all ' + items.length +
      " questions. Wrong answers are listed at the end with the reason. 85 % or better means " +
      "the topic is solid.</p></div>" +
      items.map(function (it, i) {
        return '<div class="tq"><p class="tq-t"><b class="num">' + (i + 1) + ".</b> " +
          esc(it.q) + "</p><div class=\"tq-o\">" + it.o.map(function (op, oi) {
            return '<button class="tq-b' + (answers[i] === oi ? " is-pick" : "") +
              '" data-ans="' + i + '" data-oi="' + oi + '">' + esc(op) + "</button>";
          }).join("") + "</div></div>";
      }).join("") +
      '<div class="tfoot"><button class="btn" data-test="submit">Submit ' + items.length +
      " answers</button><span class=\"count num\">" + Object.keys(answers).length +
      " answered</span></div></div>";
  }

  function testResult(items) {
    var right = 0, wrong = [];
    items.forEach(function (it, i) {
      if (answers[i] === it.a) right++;
      else wrong.push({ i: i, it: it, got: answers[i] });
    });
    var pct = Math.round(right / items.length * 100);
    var prev = best(openKey);
    if (!prev || pct > prev.score) {
      meta()["t:" + openKey] = { score: pct, right: right, total: items.length };
      C.save();
    }
    var msg = pct >= 85 ? "Solid. This topic is exam ready."
      : pct >= 70 ? "Close. Re-read the sections below and run the test again."
      : "Not yet. Read the note again, then the cards, then come back.";
    return '<div class="tools">' + tabs(openKey) + "</div>" +
      '<div class="stack"><div class="res"><span class="lab">Your score</span>' +
      '<b class="res-n num">' + pct + "<small>%</small></b>" +
      '<p class="res-m">' + right + " of " + items.length + " correct. " + msg + "</p>" +
      (prev ? '<p class="r-meta">Best so far: ' + prev.score + " %</p>" : "") +
      '<div class="res-a"><button class="btn" data-test="again">Take it again</button>' +
      '<button class="btn quiet" data-test="review">Review the ' + wrong.length + " misses</button>" +
      "</div></div>" +
      (wrong.length ? '<div class="sec"><div class="sec-h"><h2>What you missed</h2><span>' +
        wrong.length + "</span></div>" + wrong.map(function (w) {
          return '<div class="miss"><p class="miss-q"><b class="num">' + (w.i + 1) + ".</b> " +
            esc(w.it.q) + "</p>" +
            '<p class="miss-a"><span class="lab">Right answer</span>' +
            esc(w.it.o[w.it.a]) + "</p>" +
            '<p class="miss-w">' + esc(w.it.w) + "</p></div>";
        }).join("") + "</div>" : "") + "</div>";
  }

  /* ---------- rail ---------- */
  function railView() {
    if (!openKey) {
      return '<div class="r-block"><span class="lab">What this is</span>' +
        '<p class="r-meta">Long notes for one topic at a time. Each section ends with two ' +
        "questions. Cards drill the facts. The test checks the whole topic.</p></div>" +
        '<div class="r-block"><span class="lab">Where they live</span>' +
        '<p class="r-meta"><b>notes/</b> in this folder. The page loads <b>data.js</b> and ' +
        "<b>quiz.js</b>; <b>sync.sh</b> rebuilds <b>notes.html</b>.</p></div>";
    }
    var n = N[openKey], q = Q[openKey] || {};
    if (mode === "read") {
      return '<div class="r-block"><span class="lab">On this page</span><div class="toc-list">' +
        n.toc.map(function (t) {
          return '<a class="toc-a" href="#" data-toc="' + t[0] + '">' + esc(t[1]) + "</a>";
        }).join("") + "</div></div>" +
        '<div class="r-block"><span class="lab">Topic</span>' +
        '<p class="r-meta">' + esc(n.kicker) + " &middot; " + n.words + " words</p></div>";
    }
    if (mode === "cards") {
      var total = (q.cards || []).length;
      var k = Object.keys(cardsKnown(openKey)).length;
      return '<div class="r-block"><span class="lab">Deck</span>' +
        '<div class="metric"><span class="v num">' + k + "<small>of " + total +
        " known</small></span></div></div>" +
        '<div class="r-block"><span class="lab">How to run it</span>' +
        '<p class="r-meta">Read the question, answer it out loud, then flip. If the answer ' +
        "came slowly, press Again.</p></div>";
    }
    var b = best(openKey);
    return '<div class="r-block"><span class="lab">Test</span>' +
      '<div class="metric"><span class="v num">' + (b ? b.score : "-") +
      "<small>" + (b ? "best score" : "not taken") + "</small></span></div></div>" +
      '<div class="r-block"><span class="lab">Target</span>' +
      '<p class="r-meta"><b>85 %.</b> Below that, re-read the sections you missed and run ' +
      "the cards before you try again.</p></div>";
  }

  function syncToc() {
    var main = document.querySelector("main");
    if (!main) return;
    var links = document.querySelectorAll(".toc-a");
    if (!links.length) return;
    var heads = Array.prototype.slice.call(document.querySelectorAll(".doc h2"));
    if (!heads.length) return;
    var offset = main.getBoundingClientRect().top + 90;
    var current = heads[0].id;
    heads.forEach(function (h) {
      if (h.getBoundingClientRect().top <= offset) current = h.id;
    });
    var winScrolls = document.documentElement.scrollHeight > window.innerHeight + 4;
    var atEnd = winScrolls
      ? window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 6
      : main.scrollTop + main.clientHeight >= main.scrollHeight - 6;
    if (atEnd) current = heads[heads.length - 1].id;
    Array.prototype.forEach.call(links, function (a) {
      if (a.dataset.toc === current) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  var spying = false;
  function startSpy() {
    if (spying) return;
    spying = true;
    var run = false;
    function onScroll() {
      if (run) return;
      run = true;
      window.requestAnimationFrame(function () { run = false; syncToc(); });
    }
    var main = document.querySelector("main");
    if (main) main.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  function noteIcon() {
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    var attrs = { viewBox: "0 0 24 24", width: "16", height: "16", "aria-hidden": "true",
      fill: "none", stroke: "currentColor", "stroke-width": "1.55",
      "stroke-linecap": "round", "stroke-linejoin": "round" };
    Object.keys(attrs).forEach(function (k) { svg.setAttribute(k, attrs[k]); });
    ["M4.5 4.5h9l6 6v9h-15z", "M13.5 4.5v6h6", "M7.5 14h9", "M7.5 17h6"].forEach(function (d) {
      var p = document.createElementNS(NS, "path");
      p.setAttribute("d", d);
      svg.appendChild(p);
    });
    return svg;
  }

  function view() {
    if (!openKey) return listView();
    if (mode === "cards") return cardsView();
    if (mode === "test") return testView();
    return docView();
  }

  function afterRender() {
    if (openKey && mode === "read") mountChecks(openKey);
    syncToc();
    startSpy();
  }

  function go(reset) {
    var main = document.querySelector("main");
    var top = main ? main.scrollTop : 0, wtop = window.scrollY;
    C.render();
    if (reset) {
      if (main) main.scrollTop = 0;
      window.scrollTo(0, 0);
    } else {
      if (main) main.scrollTop = top;
      window.scrollTo(0, wtop);
    }
    afterRender();
  }

  C.add("notes", "Notes", view, railView, noteIcon());

  document.addEventListener("click", function (ev) {
    var toc = ev.target.closest("[data-toc]");
    if (toc) {
      ev.preventDefault();
      var h = document.getElementById(toc.dataset.toc);
      if (h) h.scrollIntoView({ block: "start" });
      return;
    }

    var tab = ev.target.closest("[data-tab]");
    if (tab) {
      ev.preventDefault();
      mode = tab.dataset.tab;
      deck = null; answers = {}; submitted = false;
      go(true);
      return;
    }

    var pick = ev.target.closest("[data-pick]");
    if (pick) {
      ev.preventDefault();
      var box = pick.closest(".qbox");
      var items = (Q[box.dataset.key] || {}).checks[box.dataset.sec];
      var st = checkStore(box.dataset.key, box.dataset.sec);
      st[pick.dataset.qi] = Number(pick.dataset.pick);
      C.save();
      var holder = document.createElement("div");
      holder.innerHTML = checkHTML(box.dataset.key, box.dataset.sec, items);
      box.replaceWith(holder.firstElementChild);
      return;
    }

    var deckBtn = ev.target.closest("[data-deck]");
    if (deckBtn) {
      ev.preventDefault();
      var kind = deckBtn.dataset.deck;
      if (kind === "flip") flipped = !flipped;
      else if (kind === "restart") { deck = null; flipped = false; }
      else if (kind === "again") {
        deck.push(deck[deckPos]);
        deckPos++;
        flipped = false;
      } else if (kind === "known") {
        cardsKnown(openKey)[deck[deckPos]] = true;
        C.save();
        deckPos++;
        flipped = false;
      }
      go();
      return;
    }

    var ans = ev.target.closest("[data-ans]");
    if (ans) {
      ev.preventDefault();
      var qi = Number(ans.dataset.ans), oi = Number(ans.dataset.oi);
      answers[qi] = oi;
      var tq = ans.closest(".tq");
      Array.prototype.forEach.call(tq.querySelectorAll(".tq-b"), function (b) {
        if (Number(b.dataset.oi) === oi) b.classList.add("is-pick");
        else b.classList.remove("is-pick");
      });
      var cnt = document.querySelector(".tfoot .count");
      if (cnt) cnt.textContent = Object.keys(answers).length + " answered";
      return;
    }

    var testBtn = ev.target.closest("[data-test]");
    if (testBtn) {
      ev.preventDefault();
      var t = testBtn.dataset.test;
      if (t === "submit") { submitted = true; go(); }
      else if (t === "again") { answers = {}; submitted = false; go(); }
      else if (t === "review") { submitted = true; go(); }
      return;
    }

    var el = ev.target.closest("[data-note]");
    if (!el) return;
    var kind2 = el.dataset.note;
    var moved = false;
    if (kind2 === "open") { openKey = el.dataset.key; mode = "read"; moved = true; }
    else if (kind2 === "back") { openKey = null; mode = "read"; moved = true; }
    else if (kind2 === "read") { meta()["read:" + el.dataset.key] = true; C.save(); }
    else return;
    ev.preventDefault();
    go(moved);
  });

  C.render();
  afterRender();
})();
