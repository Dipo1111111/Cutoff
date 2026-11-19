/* Words: daily vocabulary and idiom cards. */
(function () {
  var C = window.Cutoff, W = window.WORDS;
  if (!C || !W) return;

  if (!document.querySelector('link[data-words]')) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "words/words.css";
    link.setAttribute("data-words", "1");
    document.head.appendChild(link);
  }

  function esc(s) { return C.esc(s); }
  function store() { C.state.words = C.state.words || { known: {} }; return C.state.words; }
  function known(id) { return !!store().known[id]; }

  var ALL = W.vocab.map(function (v) {
    return { id: "v:" + v.w, w: v.w, d: v.d, e: v.e, kind: "Word" };
  }).concat(W.idioms.map(function (i) {
    return { id: "i:" + i.w, w: i.w, d: i.d, e: i.e, kind: "Idiom" };
  }));

  function rng(seed) {
    return function () {
      seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function pick(arr, n, seed) {
    var a = arr.slice(), r = rng(seed), out = [];
    while (out.length < n && a.length) out.push(a.splice(Math.floor(r() * a.length), 1)[0]);
    return out;
  }

  function day() { return Math.floor(Date.now() / 864e5); }

  function today() {
    var d = day();
    return pick(W.vocab, 7, d).map(function (v) {
      return { id: "v:" + v.w, w: v.w, d: v.d, e: v.e, kind: "Word" };
    }).concat(pick(W.idioms, 3, d + 977).map(function (i) {
      return { id: "i:" + i.w, w: i.w, d: i.d, e: i.e, kind: "Idiom" };
    }));
  }

  var mode = "today", cards = null, pos = 0, flipped = false, stamp = "";

  function deck() {
    var d = String(day());
    if (!cards || stamp !== d) {
      cards = today();
      stamp = d;
      pos = 0;
      flipped = false;
    }
    return cards;
  }

  function countLine() {
    var k = Object.keys(store().known).length;
    return k + " of " + ALL.length + " known";
  }

  function tabs() {
    return '<div class="tabs">' + [["today", "Today"], ["words", "Words"], ["idioms", "Idioms"]].map(function (x) {
      return '<button class="tab" data-wtab="' + x[0] + '"' +
        (mode === x[0] ? ' aria-current="true"' : "") + ">" + x[1] + "</button>";
    }).join("") + "</div>";
  }

  function faceHTML(c) {
    return '<button class="cface' + (flipped ? " is-back" : "") + '" data-wdeck="flip">' +
      '<span class="clab">' + (flipped ? "Meaning" : c.kind) + "</span>" +
      '<span class="ctext">' + esc(flipped ? c.d : c.w) + "</span>" +
      (flipped && c.e ? '<span class="cex">' + esc(c.e) + "</span>" : "") +
      '<span class="chint">' + (flipped ? "Click to see the word" : "Say the meaning, then click") +
      "</span></button>";
  }

  function todayView() {
    var list = deck(), k = Object.keys(store().known).length;
    var open = list.filter(function (c) { return !known(c.id); });
    var head = '<div class="tools">' + tabs() + '<span class="count num">' + list.length +
      " today &middot; " + countLine() + "</span></div>";

    if (!open.length) {
      return head + '<div class="stack"><div class="sec"><div class="sec-h"><h2>Today is clear</h2>' +
        "<span>" + list.length + " cards</span></div>" +
        '<p class="note">Every card from today is known. Read the list below once more, or open All.</p></div>' +
        '<div class="sec"><div class="sec-h"><h2>Today\'s ten</h2><span>' + list.length + "</span></div>" +
        list.map(row).join("") + "</div></div>";
    }

    var i = pos % open.length, c = open[i];
    return head + '<div class="stack">' +
      '<div class="cwrap">' + faceHTML(c) + "</div>" +
      '<div class="crow"><button class="btn quiet" data-wdeck="again">Not yet</button>' +
      '<button class="btn" data-wdeck="known">Got it</button></div>' +
      '<p class="note">Not yet keeps the card in today\'s deck. Got it takes it out for good.</p>' +
      '<div class="sec"><div class="sec-h"><h2>Today\'s ten</h2><span>' + open.length +
      " left of " + list.length + "</span></div>" + list.map(row).join("") + "</div></div>";
  }

  function row(c) {
    var done = known(c.id);
    return '<div class="wrow' + (done ? " is-done" : "") + '">' +
      '<p class="ww"><span class="wk">' + esc(c.kind) + "</span>" + esc(c.w) + "</p>" +
      '<p class="wd">' + esc(c.d) + "</p>" +
      (c.e ? '<p class="we">' + esc(c.e) + "</p>" : "") + "</div>";
  }

  function listView(kind, title) {
    var items = ALL.filter(function (c) { return c.kind === kind; });
    var done = items.filter(function (c) { return known(c.id); }).length;
    return '<div class="tools">' + tabs() + '<span class="count num">' + done + " of " +
      items.length + " known" + "</span></div>" + '<div class="stack">' +
      '<div class="sec"><div class="sec-h"><h2>' + title + "</h2><span>" + items.length +
      "</span></div>" + items.map(row).join("") + "</div></div>";
  }

  function view() {
    if (mode === "words") return listView("Word", "Words");
    if (mode === "idioms") return listView("Idiom", "Idioms");
    return todayView();
  }

  function rail() {
    var k = Object.keys(store().known).length;
    return '<div class="r-block"><span class="lab">Known</span>' +
      '<div class="metric"><span class="v num">' + k + '<small>of ' + ALL.length +
      "</small></span></div></div>" +
      '<div class="r-block"><span class="lab">Today</span>' +
      '<p class="r-meta">Seven words and three idioms. The set changes at midnight and does ' +
      "not repeat until the pool is used.</p></div>" +
      '<div class="r-block"><span class="lab">Where they come from</span>' +
      '<p class="r-meta">Words and idioms that carry marks in UTME English: synonyms, ' +
      "antonyms, sentence completion and idiom replacement.</p></div>";
  }

  function icon() {
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    var attrs = { viewBox: "0 0 24 24", width: "16", height: "16", "aria-hidden": "true",
      fill: "none", stroke: "currentColor", "stroke-width": "1.55",
      "stroke-linecap": "round", "stroke-linejoin": "round" };
    Object.keys(attrs).forEach(function (k) { svg.setAttribute(k, attrs[k]); });
    ["M12 7.5C10.5 5.9 8.2 5.4 5 5.5v12c3.2-.1 5.5.4 7 2 1.5-1.6 3.8-2.1 7-2v-12c-3.2-.1-5.5.4-7 2z",
      "M12 7.5v12"].forEach(function (d) {
      var p = document.createElementNS(NS, "path");
      p.setAttribute("d", d);
      svg.appendChild(p);
    });
    return svg;
  }

  C.add("words", "Words", view, rail, icon());

  document.addEventListener("click", function (ev) {
    var tab = ev.target.closest("[data-wtab]");
    if (tab) {
      ev.preventDefault();
      mode = tab.dataset.wtab;
      flipped = false;
      C.render();
      return;
    }
    var btn = ev.target.closest("[data-wdeck]");
    if (!btn) return;
    ev.preventDefault();
    var kind = btn.dataset.wdeck;
    var open = deck().filter(function (c) { return !known(c.id); });
    if (kind === "flip") { flipped = !flipped; C.render(); }
    else if (kind === "again") { pos = (pos + 1) % Math.max(open.length, 1); flipped = false; C.render(); }
    else if (kind === "known" && open.length) {
      var c = open[pos % open.length];
      store().known[c.id] = true;
      C.save();
      pos = pos % Math.max(open.length - 1, 1);
      flipped = false;
      C.render();
    }
  });
})();
