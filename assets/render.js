/* ═══════════════════════════════════════════════════════════════════════
   Student Artifact Gallery — rendering and language handling.
   Identical across both course sites. Nothing course-specific belongs here;
   put that in data/config.js.
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  var CFG = window.SITE_CONFIG || {};
  var RECORDS = window.ARTIFACTS || [];

  /* ── Language ─────────────────────────────────────────────────────────
     Same mechanism as the past-projects gallery, and deliberately the same
     localStorage key: all three sites sit on the yutong010.github.io origin,
     so a visitor who picks 中文 on one gets 中文 on the others.
     ─────────────────────────────────────────────────────────────────── */

  var LANG_KEY = "gallery-lang";

  function initialLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    var nav = (navigator.language || "") + " " + (navigator.languages || []).join(" ");
    return /zh/i.test(nav) ? "zh" : "en";
  }

  var lang = initialLang();

  function setLang(next) {
    if (next !== "en" && next !== "zh") return;
    lang = next;
    try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
    document.documentElement.lang = next === "zh" ? "zh-Hans" : "en";
    paint();
  }

  /* ── Page copy ────────────────────────────────────────────────────────
     Every visible string lives here in both languages. If you add a string
     to index.html, add it here too — a missing key renders as English.
     ─────────────────────────────────────────────────────────────────── */

  var T = {
    tagline: {
      en: "Student Artifact Gallery",
      zh: "学生作品站",
    },
    termLine: {
      en: "FALL 2026",
      zh: "2026 秋",
    },
    cadence: {
      en: "UPDATED THROUGH THE TERM",
      zh: "学期内滚动更新",
    },
    intro: {
      en: "Artifacts from this course's in-class labs and assignments, built by " +
          "students and published to the open web. Every line below opens.",
      zh: "这里收录的是这门课的课堂 lab 与作业作品，都由学生自己搭建并发布到公网。下面每一条都能点开，现在就能上手试。",
    },
    emptyLead: { en: "Nothing here yet", zh: "这里还是空的" },
    emptyRest: {
      en: " — artifacts land here as the term goes on. Check back.",
      zh: " —— 学期推进的过程中会陆续有东西落到这里。回头再来看看。",
    },
    instructorTag: { en: "instructor demo", zh: "教师演示" },
    deadTag: { en: "link dead", zh: "链接已失效" },
    deadNote: {
      en: "Kept on the page. It was built, and that stays true even after the host went away.",
      zh: "保留在页面上。它当时确实做出来了，托管失效不改变这件事。",
    },
    footBuilt: {
      en: "Everything linked here was built by the person credited. This page only points at it.",
      zh: "本页链接的每一件作品都由署名者本人制作，本页只负责指路。",
    },
    linkPast: { en: "Past group projects", zh: "往届小组项目" },
    standing: {
      en: "Maintained by Yutong Guo. {collection} artifacts only.",
      zh: "本站由郭羽童维护，只收录{collection}作品集。",
    },
    sourceLabels: {
      en: { "lab": "Lab", "AS1": "Assignment 1", "AS2": "Assignment 2", "project": "Group Project" },
      zh: { "lab": "课堂 Lab", "AS1": "作业一", "AS2": "作业二", "project": "小组项目" },
    },
  };

  function t(key) {
    var entry = T[key];
    if (!entry) return "";
    return entry[lang] || entry.en || "";
  }

  /* ── Small DOM helpers ────────────────────────────────────────────── */

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function hostOf(u) {
    try { return new URL(u).hostname.replace(/^www\./, ""); }
    catch (e) { return ""; }
  }

  function pad(n) { return String(n).padStart(2, "0"); }

  /* ── The consent gate ─────────────────────────────────────────────────
     Spec section 6: consent empty means the record does not render. This is
     the one rule in the file with no escape hatch. Records that fail it are
     dropped here, before anything reaches the DOM.
     ─────────────────────────────────────────────────────────────────── */

  function publishable(records) {
    var out = [];
    var withheld = 0;
    for (var i = 0; i < records.length; i++) {
      var r = records[i];
      if (r && r.consent === "granted" && r.url) out.push(r);
      else withheld += 1;
    }
    if (withheld) {
      console.info("[gallery] " + withheld + " record(s) withheld: consent not granted.");
    }
    return out;
  }

  /* ── one_liner length check — a build-time nag, not a runtime failure ── */

  function checkOneLiners(records) {
    records.forEach(function (r) {
      var en = (r.one_liner && r.one_liner.en) || "";
      var zh = (r.one_liner && r.one_liner.zh) || "";
      if (en && en.trim().split(/\s+/).length > 18) {
        console.warn("[gallery] one_liner.en over 18 words: " + r.id);
      }
      if (zh && zh.length > 40) {
        console.warn("[gallery] one_liner.zh over 40 chars: " + r.id);
      }
      if (!en || !zh) {
        console.warn("[gallery] one_liner missing a language: " + r.id);
      }
    });
  }

  /* ── Source label: "lab 1" -> "Lab 1" / "课堂 Lab 1" ───────────────── */

  function sourceLabel(source) {
    if (!source) return "";
    var map = T.sourceLabels[lang] || T.sourceLabels.en;
    var m = /^lab\s*(\d+)$/i.exec(source);
    if (m) return map.lab + " " + m[1];
    return map[source] || source;
  }

  /* ── Rendering ────────────────────────────────────────────────────── */

  function renderEntry(record, index) {
    var dead = record.status === "dead";
    var entry = el("article", "entry" + (dead ? " entry-dead" : ""));

    entry.appendChild(el("span", "num", pad(index)));

    var body = el("div");

    var h2 = el("h2");
    if (dead) {
      h2.appendChild(document.createTextNode(record.title));
      h2.appendChild(el("span", "dead-flag", t("deadTag")));
    } else {
      var a = el("a", null, record.title);
      a.href = record.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      h2.appendChild(a);
    }
    body.appendChild(h2);

    var line = record.one_liner && (record.one_liner[lang] || record.one_liner.en);
    if (line) body.appendChild(el("p", "desc", line));
    if (dead) body.appendChild(el("p", "desc", t("deadNote")));

    var tags = el("div", "tags");
    if (record.type) tags.appendChild(el("span", "tag tag-type", record.type));
    if (record.platform) tags.appendChild(el("span", "tag", record.platform));
    (record.ai_stack || []).forEach(function (s) {
      tags.appendChild(el("span", "tag", s));
    });
    if (tags.childNodes.length) body.appendChild(tags);

    entry.appendChild(body);

    if (record.credit) {
      var isInstructor = record.role === "instructor";
      var by = el("span", "by" + (isInstructor ? " by-instructor" : ""),
                  record.credit + (isInstructor ? " · " + t("instructorTag") : ""));
      entry.appendChild(by);
    }

    var host = hostOf(record.url);
    entry.appendChild(el("span", "host", host));

    entry.appendChild(el("span", "go", dead ? "×" : "↗"));

    return entry;
  }

  function renderList(records) {
    var main = document.getElementById("list");
    main.textContent = "";

    if (!records.length) {
      var empty = el("p", "empty");
      empty.appendChild(el("span", "b", t("emptyLead")));
      empty.appendChild(document.createTextNode(t("emptyRest")));
      main.appendChild(empty);
      return;
    }

    // Group consecutive records sharing a source label
    var groups = [];
    records.forEach(function (r) {
      var last = groups[groups.length - 1];
      if (last && last.source === r.source) last.items.push(r);
      else groups.push({ source: r.source, items: [r] });
    });

    var index = 0;
    groups.forEach(function (g) {
      if (g.source) main.appendChild(el("div", "group", sourceLabel(g.source)));
      var box = el("div", "entries");
      g.items.forEach(function (r) {
        index += 1;
        box.appendChild(renderEntry(r, index));
      });
      main.appendChild(box);
    });
  }

  /* ── Paint everything that carries language ───────────────────────── */

  function paint() {
    var name = (CFG.courseName && (CFG.courseName[lang] || CFG.courseName.en)) || "";

    document.getElementById("courseName").textContent = name;
    document.getElementById("tagline").textContent = t("tagline");
    document.getElementById("termLine").textContent = t("termLine");
    document.getElementById("cadence").textContent = t("cadence");
    document.getElementById("intro").textContent = t("intro");
    document.getElementById("footBuilt").textContent = t("footBuilt");
    document.getElementById("standing").textContent =
      t("standing").replace("{collection}", CFG.collection || "");
    document.getElementById("linkPast").textContent = t("linkPast");

    document.title = name + " — " + t("tagline") + " · " + t("termLine");

    var btnEn = document.getElementById("langEn");
    var btnZh = document.getElementById("langZh");
    btnEn.className = "lang-btn" + (lang === "en" ? " is-on" : "");
    btnZh.className = "lang-btn" + (lang === "zh" ? " is-on" : "");
    btnEn.setAttribute("aria-pressed", String(lang === "en"));
    btnZh.setAttribute("aria-pressed", String(lang === "zh"));

    renderList(publishable(RECORDS));
  }

  /* ── Boot ─────────────────────────────────────────────────────────── */

  function boot() {
    // Course accent, set before first paint so nothing flashes the default
    if (CFG.accent) document.documentElement.style.setProperty("--accent", CFG.accent);
    if (CFG.accentDim) document.documentElement.style.setProperty("--accent-dim", CFG.accentDim);

    document.getElementById("kicker-text").textContent = CFG.kicker || "";

    // Favicon carries the course accent too, so index.html stays identical
    // across the two sites and only data/config.js differs.
    var icon = document.getElementById("favicon");
    if (icon && CFG.accent) {
      icon.href = "data:image/svg+xml," + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
        '<rect width="64" height="64" rx="10" fill="#0b0b0e"/>' +
        '<text x="32" y="45" font-family="Arial,sans-serif" font-weight="700" ' +
        'font-size="36" fill="' + CFG.accent + '" text-anchor="middle">A</text></svg>'
      );
    }

    var past = document.getElementById("linkPast");
    if (CFG.links && CFG.links.pastProjects) past.href = CFG.links.pastProjects;

    // The sibling course's gallery is linked only once it exists
    var sib = document.getElementById("linkSibling");
    if (CFG.links && CFG.links.siblingGallery) {
      sib.href = CFG.links.siblingGallery;
      sib.textContent = (CFG.links.siblingLabel && CFG.links.siblingLabel[lang]) ||
                        (CFG.links.siblingLabel && CFG.links.siblingLabel.en) || "";
      sib.hidden = false;
    } else {
      sib.hidden = true;
    }

    document.getElementById("langEn").addEventListener("click", function () { setLang("en"); });
    document.getElementById("langZh").addEventListener("click", function () { setLang("zh"); });

    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    checkOneLiners(RECORDS);
    paint();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
