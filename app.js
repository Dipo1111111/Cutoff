/* Cutoff - local UTME board. No server, no network, no scheduling.
   Storage: localStorage "utme.board.v1". Export a JSON copy from Progress. */
(function () {
  "use strict";

  var P = window.PLAN;
  var KEY = "utme.board.v1";
  var DAY = 86400000;
  var TIER_W = { 1: 3, 2: 2, 3: 1 };
  var DAYPLAN = {
    2: [["Subject A", 50, "s1"], ["Subject B", 50, "s2"], ["English", 20, "s3"]],
    3: [["Subject A", 60, "s1"], ["Subject B", 60, "s2"], ["English", 30, "s3"],
        ["Recall yesterday", 30, "s4"]]
  };
  var ENG_W = [0.34, 0.17, 0.13, 0.16, 0.12, 0.08];

  /* ---------- state ---------- */

  function currentWeek() {
    var start = new Date(P.start + "T00:00:00");
    var n = Math.floor((Date.now() - start.getTime()) / (7 * DAY)) + 1;
    return Math.max(2, Math.min(P.totalWeeks, n));
  }

  function blank() {
    return { v: 1, week: currentWeek(), hours: 3, topics: {}, eng: {} };
  }

  var state = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      var s = JSON.parse(raw);
      if (!s || s.v !== 1) return blank();
      s.topics = s.topics || {};
      s.eng = s.eng || {};
      s.week = Math.max(1, Math.min(P.totalWeeks, s.week || currentWeek()));
      s.hours = s.hours === 2 ? 2 : 3;
      return s;
    } catch (e) { return blank(); }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ---------- plan ---------- */

  var ALL = [];
  P.subjects.forEach(function (sub) {
    sub.topics.forEach(function (t) {
      ALL.push({ id: sub.id + ":" + t[0], sub: sub.id, subName: sub.name,
        n: t[0], name: t[1], week: t[2], tier: t[3], hours: t[4] });
    });
  });
  var ENG = P.english.map(function (e) {
    return { id: e.id, sub: "eng", subName: "English", n: 0, name: e.name,
      note: e.note, from: e.w[0], to: e.w[1], week: e.w[0], tier: 1, hours: 0.4 };
  });
  var EVERY = ALL.concat(ENG);

  function byId(id) {
    for (var i = 0; i < EVERY.length; i++) if (EVERY[i].id === id) return EVERY[i];
    return null;
  }
  function rec(id) {
    return (id.indexOf("eng") === 0 ? state.eng : state.topics)[id] || null;
  }
  function status(id) {
    var r = rec(id);
    return !r ? "new" : (r.state === "locked" ? "locked" : "learned");
  }
  function daysSince(iso) {
    return iso ? Math.floor((Date.now() - new Date(iso).getTime()) / DAY) : 0;
  }
  function isDue(id) {
    var r = rec(id);
    return !!r && r.state === "learned" && daysSince(r.learnedAt) >= P.gates.locked.gap;
  }
  function weekItems(w) {
    var out = [];
    P.subjects.forEach(function (sub) {
      sub.topics.forEach(function (t) {
        if (t[2] === w) out.push(byId(sub.id + ":" + t[0]));
      });
    });
    ENG.forEach(function (e) { if (w >= e.from && w <= e.to) out.push(e); });
    return out;
  }
  function firstOpen(w) {
    var items = weekItems(w);
    for (var i = 0; i < items.length; i++) if (status(items[i].id) === "new") return items[i];
    return null;
  }
  function dueList() {
    return EVERY.filter(function (t) { return isDue(t.id); })
      .sort(function (a, b) { return a.week - b.week; });
  }
  function counts() {
    var l = 0, n = 0;
    EVERY.forEach(function (t) {
      var s = status(t.id);
      if (s === "locked") l++; else if (s === "learned") n++;
    });
    return { locked: l, learned: n, total: EVERY.length };
  }
  function contentCounts() {
    var l = 0, n = 0;
    ALL.forEach(function (t) {
      var s = status(t.id);
      if (s === "locked") l++; else if (s === "learned") n++;
    });
    return { locked: l, learned: n, total: ALL.length };
  }
  function subById(id) {
    for (var i = 0; i < P.subjects.length; i++) if (P.subjects[i].id === id) return P.subjects[i];
    return null;
  }
  function lockedIn(id) {
    var sb = subById(id), l = 0;
    if (!sb) return 0;
    sb.topics.forEach(function (t) { if (status(sb.id + ":" + t[0]) === "locked") l++; });
    return l;
  }
  var SUBJ_NAME = { phy: "Physics", mat: "Mathematics", bio: "Biology" };

  function projected() {
    var score = 0, parts = {};
    P.subjects.forEach(function (sb) {
      var got = 0, all = 0;
      sb.topics.forEach(function (t) {
        all += 1;
        if (status(sb.id + ":" + t[0]) === "locked") got += 1;
      });
      parts[sb.id] = all ? Math.round(got / all * P.marks[sb.id]) : 0;
      score += parts[sb.id];
    });
    var eng = 0;
    ENG.forEach(function (e) { if (status(e.id) === "locked") eng += 1; });
    parts.eng = Math.round(eng / ENG.length * P.marks.eng);
    score += parts.eng;
    return { total: score, parts: parts };
  }
  function hoursDone() {
    var t = 0;
    ALL.forEach(function (x) {
      if (status(x.id) !== "new") t += x.hours;
    });
    ENG.forEach(function (e) {
      if (status(e.id) !== "new") t += e.hours;
    });
    return Math.round(t);
  }

  function hoursLeft() {
    var h = 0;
    ALL.forEach(function (t) { if (status(t.id) !== "locked") h += t.hours; });
    return Math.round(h);
  }
  function nextCheckpoint() {
    for (var i = 0; i < P.checkpoints.length; i++)
      if (P.checkpoints[i][0] >= state.week) return P.checkpoints[i];
    return P.checkpoints[P.checkpoints.length - 1];
  }

  /* ---------- helpers ---------- */

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function clock(sec) {
    return sec == null ? "" : Math.floor(sec / 60) + ":" + pad(sec % 60);
  }
  function pctClass(x) {
    return "p" + Math.max(0, Math.min(100, Math.round(x * 20) * 5));
  }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function short(s) { return s.length > 24 ? s.slice(0, 22).replace(/[, ]+$/, "") + "\u2026" : s; }

  function tick(t, s) {
    var cls = s === "locked" ? "tick done" : s === "learned" ? "tick learned" : "tick";
    var label = s === "locked" ? "Locked. Click to move back to learned"
      : s === "learned" ? "Learned. Click to clear"
      : "Not started. Click to mark learned";
    return '<button class="' + cls + '" data-act="tick" data-id="' + t.id +
      '" aria-label="' + label + '" title="' + label + '"></button>';
  }

  function rowAct(t) {
    if (status(t.id) !== "learned") return "";
    return '<button class="row-act" data-act="open" data-id="' + t.id + '">Re-test</button>';
  }

  function stateText(t) {
    var s = status(t.id);
    if (s === "locked") return '<span class="st">locked</span>';
    if (s === "learned") {
      if (isDue(t.id)) return '<span class="st due">due</span>';
      return '<span class="st">learned ' + Math.max(0, daysSince(rec(t.id).learnedAt)) + " d</span>";
    }
    return "";
  }

  function meta(t) {
    var s = status(t.id);
    if (s === "new") return t.sub === "eng" ? esc(t.note) : t.hours.toFixed(1) + " h";
    var r = rec(t.id);
    if (s === "locked" && r.lockedTry)
      return r.lockedTry.score + "/10 &middot; " + clock(r.lockedTry.secs);
    return t.sub === "eng" ? esc(t.note) : t.hours.toFixed(1) + " h";
  }

  function detail(t) {
    var r = rec(t.id), s = status(t.id), g = P.gates;
    var h = '<div class="detail"><div class="detail-t">' + esc(t.name) + "</div>";
    if (s === "new") {
      h += '<p class="detail-g">Mark it learned after 10 closed-book questions at ' +
        g.learned.pass + " of 10, inside " + g.learned.minutes + " minutes.</p>";
      h += '<div class="detail-row"><button class="btn sm" data-act="learn" data-id="' +
        t.id + '">Mark learned</button></div>';
    }
    if (s === "learned") {
      var wait = g.locked.gap - daysSince(r.learnedAt);
      h += '<p class="detail-g">Re-test: 10 fresh questions, ' + g.locked.pass +
        " of 10, inside " + g.locked.minutes + " minutes, " + g.locked.gap +
        " days after learned. Marked " + Math.max(0, daysSince(r.learnedAt)) + " days ago" +
        (wait > 0 ? " &middot; " + wait + " to go." : " &middot; ready.") + "</p>";
      h += '<div class="detail-row">' +
        '<div class="field narrow"><label for="d-sc">Correct</label><select id="d-sc">' +
        [0,1,2,3,4,5,6,7,8,9,10].map(function (n) {
          return '<option value="' + n + '"' + (n === g.locked.pass ? " selected" : "") + ">" + n + "</option>";
        }).join("") + "</select></div>" +
        '<div class="field narrow"><label for="d-m">Min</label><input id="d-m" type="number" min="0" max="90" value="9"></div>' +
        '<div class="field narrow"><label for="d-s">Sec</label><input id="d-s" type="number" min="0" max="59" value="0"></div>' +
        '<button class="btn sm" data-act="lock" data-id="' + t.id + '">Log re-test</button></div>' +
        '<p class="detail-note" id="d-note"></p>';
    }
    if (s === "locked") {
      h += '<p class="detail-g">Locked ' + Math.max(0, daysSince(r.lockedAt)) + " days ago" +
        (r.lockedTry ? " &middot; " + r.lockedTry.score + " of 10 in " + clock(r.lockedTry.secs) : "") +
        "</p>";
      h += '<div class="detail-row"><button class="btn sm quiet" data-act="unlock" data-id="' +
        t.id + '">Back to learned</button></div>';
    }
    if (r && s !== "new") {
      h += '<div class="detail-row"><button class="linkbtn" data-act="reset" data-id="' +
        t.id + '">Reset</button></div>';
    }
    return h + "</div>";
  }

  /* ---------- charts ---------- */

  function donut(locked, learned, total) {
    var R = 48, C = 2 * Math.PI * R, off = 0, out = "";
    [[locked, "lk"], [learned, "lr"], [Math.max(0, total - locked - learned), "rm"]]
      .forEach(function (sg) {
        var len = total ? sg[0] / total * C : 0;
        if (len <= 0) return;
        out += '<circle class="seg ' + sg[1] + '" cx="60" cy="60" r="' + R +
          '" stroke-dasharray="' + len.toFixed(2) + " " + (C - len).toFixed(2) +
          '" stroke-dashoffset="' + (-off).toFixed(2) + '"></circle>';
        off += len;
      });
    return '<svg class="donut" viewBox="0 0 120 120" role="img" aria-label="' + locked +
      ' locked, ' + learned + ' learned, ' + Math.max(0, total - locked - learned) +
      ' left"><g transform="rotate(-90 60 60)">' + out + "</g></svg>";
  }

  function lineChart(cps, mine) {
    var W = 620, H = 180, L = 34, R = 64, T = 16, B = 26;
    var MAX = 400;
    var x = function (i) { return L + i * (W - L - R) / (cps.length - 1); };
    var y = function (v) { return T + (1 - v / MAX) * (H - T - B); };
    var grid = "", i;
    for (i = 0; i <= 4; i++) {
      var v = i * 100;
      grid += '<line class="grid" x1="' + L + '" y1="' + y(v) + '" x2="' + (W - R) +
        '" y2="' + y(v) + '"></line><text class="ax" x="' + (L - 8) + '" y="' + (y(v) + 3.5) +
        '" text-anchor="end">' + v + "</text>";
    }
    var tPts = cps.map(function (c, k) { return x(k) + "," + y(c[1] * 4); }).join(" ");
    var pPts = cps.map(function (c, k) { return x(k) + "," + y(mine); }).join(" ");
    var last = cps[cps.length - 1];
    return '<svg class="chart" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' +
      "Your marks against the plan at each checkpoint" + '">' + grid +
      '<polyline class="target" points="' + tPts + '"></polyline>' +
      cps.map(function (c, k) {
        return '<circle class="dot" cx="' + x(k) + '" cy="' + y(c[1] * 4) + '" r="2.4"></circle>';
      }).join("") +
      '<polyline class="proj" points="' + pPts + '"></polyline>' +
      cps.map(function (c, k) {
        return '<text class="ax" x="' + x(k) + '" y="' + (H - 6) + '" text-anchor="middle">wk ' +
          c[0] + "</text>";
      }).join("") +
      '<text class="tag tag-plan" x="' + (W - R + 9) + '" y="' + (y(last[1] * 4) + 3.5) +
      '" text-anchor="start">Plan</text>' +
      '<text class="tag tag-you" x="' + (W - R + 9) + '" y="' + (y(mine) + 3.5) +
      '" text-anchor="start">You</text></svg>';
  }


  /* ---------- views ---------- */

  var openId = null;

  function toolsWeek(w, items) {
    return '<div class="tools">' +
      '<div class="wk"><button data-act="wk" data-d="-1" aria-label="Previous week"' +
      (w <= 1 ? " disabled" : "") + ">&minus;</button>" +
      '<span class="num">Week ' + pad(w) + '</span><button data-act="wk" data-d="1" ' +
      'aria-label="Next week"' + (w >= P.totalWeeks ? " disabled" : "") + ">+</button></div>" +
      '<span class="count">' + items.length + " topics &middot; " +
      Math.round(items.reduce(function (a, t) { return a + (t.hours || 0); }, 0)) +
      " h</span></div>";
  }

  function daySubjects() {
    var ids = ["phy", "mat", "bio"];
    var open = ids.map(function (id) {
      var n = weekItems(state.week).filter(function (t) {
        return t.sub === id && status(t.id) !== "locked";
      }).length;
      return { id: id, n: n };
    });
    open.sort(function (a, b) { return b.n - a.n; });
    var pick = state.pick || {};
    return [
      ids.indexOf(pick.a) >= 0 ? pick.a : open[0].id,
      ids.indexOf(pick.b) >= 0 ? pick.b : open[1].id
    ];
  }

  function dayBlock() {
    var plan = DAYPLAN[state.hours] || DAYPLAN[3];
    var total = plan.reduce(function (a, r) { return a + r[1]; }, 0);
    var pair = daySubjects();
    var NAME = { phy: "Physics", mat: "Mathematics", bio: "Biology" };
    plan = plan.map(function (r) {
      if (r[0] === "Subject A") return [NAME[pair[0]], r[1], r[2]];
      if (r[0] === "Subject B") return [NAME[pair[1]], r[1], r[2]];
      return r;
    });
    var h = '<div class="day"><div class="sec-h"><h2>Day</h2>' +
      '<div class="day-pick"><span class="dp-lab">Subjects</span>' +
      '<select data-pick="a" aria-label="First subject">' +
      [["phy", "Physics"], ["mat", "Mathematics"], ["bio", "Biology"]].map(function (o) {
        return '<option value="' + o[0] + '"' + (pair[0] === o[0] ? " selected" : "") + ">" +
          o[1] + "</option>";
      }).join("") + "</select>" +
      '<select data-pick="b" aria-label="Second subject">' +
      [["phy", "Physics"], ["mat", "Mathematics"], ["bio", "Biology"]].map(function (o) {
        return '<option value="' + o[0] + '"' + (pair[1] === o[0] ? " selected" : "") + ">" +
          o[1] + "</option>";
      }).join("") + "</select>" +
      '<div class="seg-switch"><button data-act="hours" data-h="2"' +
      (state.hours === 2 ? ' aria-pressed="true"' : "") + ">2 h</button>" +
      '<button data-act="hours" data-h="3"' +
      (state.hours === 3 ? ' aria-pressed="true"' : "") + ">3 h</button></div></div></div>";
    h += '<div class="day-bar">' + plan.map(function (r) {
      return '<span class="' + r[2] + " d" + r[1] + '"></span>';
    }).join("") + "</div>";
    h += '<div class="day-list">' + plan.map(function (r) {
      return '<div><i class="' + r[2] + '"></i><span>' + r[0] + "</span><b>" + r[1] +
        " min</b></div>";
    }).join("") + "</div>";
    return h + "</div>";
  }

  function viewWeek() {
    var w = state.week;
    var items = weekItems(w);
    var h = toolsWeek(w, items) + '<div class="stack">';
    if (!items.length) {
      return h + '<p class="empty">No topics in this week. Week one holds the paper diagnostic.</p></div>';
    }
    P.subjects.forEach(function (sb) {
      var rows = sb.topics.filter(function (t) { return t[2] === w; });
      if (!rows.length) return;
      h += '<div class="grp"><div class="grp-h"><span>' + sb.name + "</span><span>" +
        lockedIn(sb.id) + " / " + sb.topics.length + "</span></div>";
      rows.forEach(function (t) {
        var it = byId(sb.id + ":" + t[0]);
        h += '<div class="row">' + tick(it, status(it.id)) +
          '<button class="row-main" data-act="open" data-id="' + it.id + '">' +
          '<span class="t">' + (sb.id === "bio" ? "B" : "") + t[0] + " &middot; " + esc(t[1]) +
          '</span><span class="m">' + meta(it) + "</span>" + stateText(it) + "</button>" +
          rowAct(it) + "</div>";
        if (openId === it.id) h += detail(it);
      });
      h += "</div>";
    });
    var engRows = ENG.filter(function (e) { return w >= e.from && w <= e.to; });
    if (engRows.length) {
      var el = ENG.filter(function (e) { return status(e.id) === "locked"; }).length;
      h += '<div class="grp"><div class="grp-h"><span>English</span><span>' + el +
        " / " + ENG.length + "</span></div>";
      engRows.forEach(function (e) {
        h += '<div class="row">' + tick(e, status(e.id)) +
          '<button class="row-main" data-act="open" data-id="' + e.id + '">' +
          '<span class="t">' + esc(e.name) + '</span><span class="m note">' + esc(e.note) +
          "</span>" + stateText(e) + "</button></div>";
        if (openId === e.id) h += detail(e);
      });
      h += "</div>";
    }
    h += dayBlock();
    return h + "</div>";
  }

  function viewPlan() {
    var weeks = [];
    ALL.forEach(function (t) { if (weeks.indexOf(t.week) < 0) weeks.push(t.week); });
    weeks.sort(function (a, b) { return a - b; });
    var h = '<div class="tools"><span class="count">' + ALL.length +
      ' topics &middot; ' + weeks.length + ' content weeks</span><span class="spacer"></span>' +
      '<span class="count">Tick to mark learned</span></div>';
    h += '<div class="mx"><div class="mx-h"><span></span><span>Physics</span>' +
      "<span>Mathematics</span><span>Biology</span></div>";
    weeks.forEach(function (w) {
      h += '<div class="mx-r"><span class="mx-wk">Wk ' + w + "</span>";
      P.subjects.forEach(function (sb) {
        var rows = sb.topics.filter(function (t) { return t[2] === w; });
        h += '<div class="mx-c" data-sub="' + sb.name + '">' + rows.map(function (t) {
          var it = byId(sb.id + ":" + t[0]);
          var s = status(it.id);
          return '<div class="mini ' + (s === "locked" ? "lk" : s === "learned" ? "learn" : "") +
            '">' + tick(it, s) + "<span>" + esc(t[1]) + "</span></div>";
        }).join("") + "</div>";
      });
      h += "</div>";
    });
    return h + "</div>";
  }

  function viewProgress() {
    var p = projected();
    var c = contentCounts();
    var cp2 = nextCheckpoint();
    var h = '<div class="tools"><span class="count">' + c.locked + " of " + c.total +
      " locked &middot; " + hoursDone() + " h done</span></div>";
    h += '<div class="numpanel">' +
      '<div class="np"><span class="lab">Score now</span><b class="num">' + p.total +
      '<small>/400</small></b><span class="np-n">from locked topics</span></div>' +
      '<div class="np"><span class="lab">Work left</span><b class="num">' + hoursLeft() +
      '<small>h</small></b><span class="np-n">from this week on</span></div>' +
      '<div class="np"><span class="lab">Week ' + cp2[0] + ' target</span><b class="num">' +
      cp2[1] + '<small>%</small></b><span class="np-n">' + Math.round(cp2[1] * 4) +
      " marks of 400</span></div></div>";
    h += '<div class="viz"><div class="donut-wrap">' + donut(c.locked, c.learned, c.total) +
      '<div class="donut-mid"><span class="big">' + c.locked + '</span><span class="of">of ' +
      c.total + "</span></div></div><div>" +
      '<div class="legend"><span><i class="sw" data-k="lk"></i>Locked<b>' + c.locked +
      "</b></span><span><i class=\"sw\" data-k=\"lr\"></i>Learned<b>" + c.learned +
      "</b></span><span><i class=\"sw\" data-k=\"rm\"></i>Left<b>" +
      (c.total - c.locked - c.learned) + "</b></span></div>" +
      '<div class="bars">';
    P.subjects.forEach(function (sb) {
      h += '<div class="bar-row"><span class="bn">' + sb.name + '</span><span class="bar"><i class="' +
        pctClass(p.parts[sb.id] / P.marks[sb.id]) + '"></i></span><span class="bv">' +
        p.parts[sb.id] + " / " + P.marks[sb.id] + "</span></div>";
    });
    h += '<div class="bar-row"><span class="bn">English</span><span class="bar"><i class="' +
      pctClass(p.parts.eng / P.marks.eng) + '"></i></span><span class="bv">' + p.parts.eng +
      " / " + P.marks.eng + "</span></div></div></div></div>";

    h += '<div class="sec"><div class="sec-h"><h2>Marks at each checkpoint</h2></div>' +
      lineChart(P.checkpoints, p.total) + "</div>";
    return h;
  }

  function viewLeft() {
    var left = ALL.filter(function (t) { return status(t.id) !== "locked"; });
    var h = '<div class="tools"><span class="count">' + left.length +
      ' topics left &middot; ' + hoursLeft() + " h</span></div>";
    if (!left.length) return h + '<p class="empty">Every topic is locked.</p>';
    h += '<div class="cols3">';
    P.subjects.forEach(function (sb) {
      var rows = left.filter(function (t) { return t.sub === sb.id; });
      h += '<div class="grp"><div class="grp-h"><span>' + sb.name + "</span><span>" +
        (sb.topics.length - lockedIn(sb.id)) + " left</span></div>";
      rows.forEach(function (t) {
        h += '<div class="row">' + tick(t, status(t.id)) +
          '<button class="row-main" data-act="open" data-id="' + t.id + '"><span class="t">' +
          (sb.id === "bio" ? "B" : "") + t.n + " &middot; " + esc(t.name) +
          '</span><span class="m">' + meta(t) + "</span></button></div>";
      });
      h += "</div>";
    });
    var engLeft = ENG.filter(function (e) { return status(e.id) !== "locked"; });
    h += '<div class="grp"><div class="grp-h"><span>English</span><span>' + engLeft.length +
      " left</span></div>" + ENG.map(function (e) {
        return '<div class="row">' + tick(e, status(e.id)) +
          '<button class="row-main" data-act="open" data-id="' + e.id + '"><span class="t">' +
          esc(e.name) + '</span><span class="m">wk ' + e.from + "&ndash;" + e.to +
          "</span>" + stateText(e) + "</button></div>";
      }).join("") + "</div>";
    return h + "</div>";
  }

  /* ---------- rail ---------- */

  function railWeek() {
    var w = state.week, items = weekItems(w), due = dueList(), next = firstOpen(w);
    var target = due.length ? due[0] : next;
    var h = '<div class="r-block r-act"><span class="lab">Next</span>';
    if (target) {
      h += '<p class="r-next">' + esc(target.name) + "</p>" +
        '<p class="r-meta">' + (due.length ? "Seven days have passed. Re-test due."
          : target.sub === "eng" ? esc(target.note) : target.hours.toFixed(1) + " h of work") +
        "</p>" + '<button class="btn wide" data-act="' + (due.length ? "open" : "learn") +
        '" data-id="' + target.id + '">' + (due.length ? "Log re-test" : "Mark learned") +
        "</button>";
    } else {
      h += '<p class="r-next">Nothing open</p><p class="r-meta">This week is clear.</p>';
    }
    h += "</div>";

    var st = items.map(function (t) { return status(t.id); });
    var lk = st.filter(function (s) { return s === "locked"; }).length;
    var lr = st.filter(function (s) { return s === "learned"; }).length;
    var rm = st.length - lk - lr;
    h += '<div class="r-block"><span class="lab">Week ' + pad2(w) + " in view</span>" +
      '<div class="r-band"><div class="band">' +
      (lk ? '<span class="lk ' + pctClass(lk / st.length) + '"></span>' : "") +
      (lr ? '<span class="lr ' + pctClass(lr / st.length) + '"></span>' : "") +
      (rm ? '<span class="rm ' + pctClass(rm / st.length) + '"></span>' : "") +
      '</div><div class="r-counts"><span>Locked<b>' + lk + "</b></span><span>Learned<b>" +
      lr + "</b></span><span>Left<b>" + rm + "</b></span></div></div></div>";

    var pair = daySubjects();
    h += '<div class="r-block"><span class="lab">The day</span>' +
      '<div class="r-list">' +
      '<div><span>' + SUBJ_NAME[pair[0]] + "</span><b>" +
      (state.hours === 2 ? 50 : 60) + " min</b></div>" +
      '<div><span>' + SUBJ_NAME[pair[1]] + "</span><b>" +
      (state.hours === 2 ? 50 : 60) + " min</b></div>" +
      '<div><span>English</span><b>' + (state.hours === 2 ? 20 : 30) + " min</b></div>" +
      (state.hours === 2 ? "" : '<div><span>Recall yesterday</span><b>30 min</b></div>') +
      "</div>" +
      '<p class="r-meta">Pick the two subjects in the menus above. The board keeps your ' +
      "choice. It does not change it for you.</p>" +
      '<p class="r-meta">Saturday: one timed paper. Sunday: errors and re-tests only.</p></div>';

    h += '<div class="r-block"><span class="lab">Gates</span><div class="gates">' +
      "<p><b>Learned</b>" + P.gates.learned.questions + " questions, closed book, " +
      P.gates.learned.pass + " of 10, inside " + P.gates.learned.minutes + " minutes.</p>" +
      "<p><b>Locked</b>" + P.gates.locked.questions + " fresh questions, " +
      P.gates.locked.pass + " of 10, inside " + P.gates.locked.minutes + " minutes, " +
      P.gates.locked.gap + " days later.</p></div></div>";
    return h;
  }


  function railPlan() {
    var tiers = [0, 0, 0];
    ALL.forEach(function (t) { tiers[t.tier - 1] += 1; });
    var h = '<div class="r-block"><span class="lab">Read the grid</span>' +
      '<div class="r-key">' +
      '<div><i class="k-dot k-lk"></i><span>Locked</span><b>second pass</b></div>' +
      '<div><i class="k-dot k-lr"></i><span>Learned</span><b>first pass</b></div>' +
      '<div><i class="k-dot k-rm"></i><span>Left</span><b>not started</b></div>' +
      "</div></div>";
    h += '<div class="r-block"><span class="lab">Topics by tier</span><div class="r-bars">';
    [3, 2, 1].forEach(function (t, i) {
      var n = tiers[t - 1];
      h += '<div class="r-bar"><span>Tier ' + t + "</span>" +
        '<span class="tr"><i class="' + pctClass(n / (ALL.length || 1)) + '"></i></span>' +
        '<b class="num">' + n + "</b></div>";
    });
    h += "</div>" + '<p class="r-meta">Weight 3, 2, 1. Tier 1 is the most frequent ' +
      "in past papers.</p></div>";
    h += '<div class="r-block"><span class="lab">Totals</span>' +
      '<p class="r-meta"><b>' + ALL.length + " topics.</b> " + ENG.length +
      " English blocks across 17 weeks, " + Math.round(hoursLeft() + hoursDone()) +
      " h of content.</p></div>";
    return h;
  }


  function railProgress() {
    return '<div class="r-block"><span class="lab">How a topic earns marks</span>' +
      '<p class="r-meta">Learn the topic. Answer 10 new questions. Get 8 right inside 10 ' +
      "minutes. Take the second test 7 days later. A locked topic adds marks.</p></div>" +
      '<div class="r-block"><span class="lab">How a subject earns marks</span>' +
      '<p class="r-meta">Each subject gives 100 marks. The share of locked topics sets your ' +
      "score. 20 of 40 topics give 50 marks.</p></div>";
  }




  function viewSettings() {
    var h = '';
    h += '<div class="stack"><div class="sec"><div class="sec-h"><h2>Data</h2>' +
      "<span>this browser</span></div><div class=\"set-list\">" +
      '<div class="set-row"><span class="set-t">Export a copy</span>' +
      '<span class="set-n">Download every mark as a JSON file. Keep it as a backup.</span>' +
      '<button class="btn sm quiet" data-act="export">Export</button></div>' +
      '<div class="set-row"><span class="set-t">Import a copy</span>' +
      '<span class="set-n">Replace the marks in this browser with a file.</span>' +
      '<label class="btn sm quiet" for="import">Choose file</label>' +
      '<input id="import" type="file" accept="application/json" hidden></div>' +
      '<div class="set-row"><span class="set-t">Erase every mark</span>' +
      '<span class="set-n">Clear this browser. This cannot be undone.</span>' +
      '<button class="btn sm quiet" data-act="wipe">Erase</button></div></div></div>';

    h += '<div class="sec"><div class="sec-h"><h2>Plan</h2><span>fixed</span></div>' +
      '<div class="set-list">' +
      '<div class="set-row"><span class="set-t">Exam</span>' +
      '<span class="set-n">Computer Science, four subjects.</span>' +
      '<b class="set-v num">15 Mar 2027</b></div>' +
      '<div class="set-row"><span class="set-t">Content</span>' +
      '<span class="set-n">All numbered topics in the syllabus.</span>' +
      '<b class="set-v num">' + ALL.length + " topics</b></div>" +
      '<div class="set-row"><span class="set-t">English</span>' +
      '<span class="set-n">A daily track instead of numbered topics.</span>' +
      '<b class="set-v num">' + ENG.length + " blocks</b></div>" +
      '<div class="set-row"><span class="set-t">Source</span>' +
      '<span class="set-n">The plan this board renders.</span>' +
      '<b class="set-v">STUDY_PLAN.md</b></div></div></div></div>';
    return h;
  }

  function railSettings() {
    return '<div class="r-block"><span class="lab">Day length</span>' +
      '<p class="r-meta">The daily template on Week uses this value.</p>' +
      '<div class="seg-switch"><button data-act="hours" data-h="2"' +
      (state.hours === 2 ? ' aria-pressed="true"' : "") + ">2 h</button>" +
      '<button data-act="hours" data-h="3"' +
      (state.hours === 3 ? ' aria-pressed="true"' : "") + ">3 h</button></div></div>" +
      '<div class="r-block"><span class="lab">Storage</span>' +
      '<p class="r-meta">Marks are kept in this browser under one key. ' +
      "No account, no server, no network.</p></div>";
  }


  function railLeft() {
    var due = dueList();
    var h = '<div class="r-block"><span class="lab">Due now</span>';
    if (due.length) {
      h += '<div class="r-list">' + due.slice(0, 6).map(function (t) {
        return "<div><span>" + esc(short(t.name)) + "</span><b>" +
          Math.max(0, daysSince(rec(t.id).learnedAt)) + " d</b></div>";
      }).join("") + "</div>";
    } else {
      h += '<p class="r-meta">Nothing is due. A topic comes due seven days after you mark ' +
        "it learned.</p>";
    }
    h += "</div>";
    h += '<div class="r-block"><span class="lab">Remaining</span><div class="r-bars">';
    P.subjects.forEach(function (sb) {
      var left = sb.topics.length - lockedIn(sb.id);
      h += '<div class="r-bar"><span>' + sb.name + "</span>" +
        '<span class="tr"><i class="' + pctClass(left / sb.topics.length) + '"></i></span>' +
        '<b class="num">' + left + "</b></div>";
    });
    var engLeft = ENG.filter(function (e) { return status(e.id) !== "locked"; }).length;
    h += '<div class="r-bar"><span>English</span><span class="tr"><i class="' +
      pctClass(engLeft / ENG.length) + '"></i></span><b class="num">' + engLeft + "</b></div>";
    h += "</div></div>";
    return h;
  }


  /* ---------- render ---------- */

  var VIEWS = { week: viewWeek, plan: viewPlan, progress: viewProgress,
    left: viewLeft, settings: viewSettings };
  var RAILS = { week: railWeek, plan: railPlan, progress: railProgress,
    left: railLeft, settings: railSettings };

  function screen() {
    var h = (location.hash || "#week").slice(1);
    return VIEWS[h] ? h : "week";
  }

  function render() {
    var s = screen();
    document.getElementById("view").innerHTML = VIEWS[s]();
    document.getElementById("rail").innerHTML = RAILS[s]();

    Array.prototype.forEach.call(document.querySelectorAll(".nav a"), function (a) {
      if (a.dataset.screen === s) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  /* ---------- actions ---------- */

  function bag(id) { return id.indexOf("eng") === 0 ? state.eng : state.topics; }

  function toggle(id) {
    var b = bag(id), s = status(id);
    openId = null;
    if (s === "new") b[id] = { state: "learned", learnedAt: new Date().toISOString(), tries: [] };
    else if (s === "learned") delete b[id];
    else {
      b[id].state = "learned";
      delete b[id].lockedAt;
      delete b[id].lockedTry;
    }
    save();
    render();
  }

  function learn(id) {
    bag(id)[id] = { state: "learned", learnedAt: new Date().toISOString(), tries: [] };
    save();
    openId = null;
    render();
  }

  function logGate(id, score, secs) {
    var r = bag(id)[id];
    if (!r) return "Mark it learned first.";
    var g = P.gates.locked;
    if (daysSince(r.learnedAt) < g.gap)
      return "Not yet. " + (g.gap - daysSince(r.learnedAt)) + " days remain.";
    var pass = score >= g.pass && secs <= g.minutes * 60;
    (r.tries = r.tries || []).push({ at: new Date().toISOString(), score: score, secs: secs, pass: pass });
    if (pass) {
      r.state = "locked";
      r.lockedAt = new Date().toISOString();
      r.lockedTry = { score: score, secs: secs };
      save();
      openId = null;
      render();
      return "";
    }
    save();
    return score < g.pass ? "Short of " + g.pass + " of 10. Still learned." : "Too slow. Still learned.";
  }

  document.addEventListener("click", function (ev) {
    var el = ev.target.closest("[data-act],[data-screen]");
    if (!el) return;

    if (el.dataset.screen) {
      ev.preventDefault();
      openId = null;
      if (location.hash === "#" + el.dataset.screen) render();
      else location.hash = "#" + el.dataset.screen;
      return;
    }

    var act = el.dataset.act, id = el.dataset.id;

    if (act === "tick") { toggle(id); return; }
    if (act === "open") {
      openId = openId === id ? null : id;
      render();
      var t = document.querySelector(".detail");
      if (t) t.scrollIntoView({ block: "nearest" });
      return;
    }
    if (act === "learn") { learn(id); return; }
    if (act === "lock") {
      var score = parseInt(document.getElementById("d-sc").value, 10);
      var m = parseInt(document.getElementById("d-m").value, 10) || 0;
      var sec = parseInt(document.getElementById("d-s").value, 10) || 0;
      var msg = logGate(id, score, m * 60 + sec);
      if (msg) { var n = document.getElementById("d-note"); if (n) n.textContent = msg; }
      return;
    }
    if (act === "unlock" || act === "reset") {
      var b = bag(id);
      if (act === "reset") delete b[id];
      else {
        b[id].state = "learned";
        delete b[id].lockedAt;
        delete b[id].lockedTry;
      }
      save();
      openId = null;
      render();
      return;
    }
    if (act === "hours") {
      state.hours = parseInt(el.dataset.h, 10) === 2 ? 2 : 3;
      save();
      render();
      return;
    }
    if (act === "wk") {
      state.week = Math.max(1, Math.min(P.totalWeeks, state.week + parseInt(el.dataset.d, 10)));
      save();
      openId = null;
      render();
      return;
    }
    if (act === "export") {
      var blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "cutoff-" + new Date().toISOString().slice(0, 10) + ".json";
      a.click();
      URL.revokeObjectURL(a.href);
      return;
    }
    if (act === "wipe") {
      if (!confirm("Erase every mark in this browser?")) return;
      state = blank();
      save();
      render();
    }
  });

  document.addEventListener("change", function (ev) {
    if (ev.target && ev.target.dataset && ev.target.dataset.pick) {
      state.pick = state.pick || {};
      state.pick[ev.target.dataset.pick] = ev.target.value;
      save();
      render();
      return;
    }
    if (!ev.target || ev.target.id !== "import") return;
    var f = ev.target.files && ev.target.files[0];
    if (!f) return;
    var fr = new FileReader();
    fr.onload = function () {
      try {
        var s = JSON.parse(fr.result);
        if (!s || s.v !== 1) throw new Error("bad");
        state = s;
        state.topics = state.topics || {};
        state.eng = state.eng || {};
        save();
        render();
      } catch (e) { alert("That file is not a board export."); }
    };
    fr.readAsText(f);
  });

  window.addEventListener("hashchange", function () { openId = null; render(); });
  render();
})();
