/* ═══════════════════════════════════════════════════════════════════════
   COURSE IDENTITY — the only file that differs between the two course sites.
   index.html, assets/site.css and assets/render.js are byte-identical across
   both; to stand up a new course gallery, copy the repo and edit this file.
   ═══════════════════════════════════════════════════════════════════════ */

window.SITE_CONFIG = {
  course: "MIS3011",
  level: "UG",
  term: "2026F",

  // Shown in the small monospace line above the title
  kicker: "MIS3011 · CUHK-Shenzhen · SME",

  // Named in the footer line: "本站由郭羽童维护，只收录…作品集。"
  collection: "MIS3011·Fall2026",

  // Shown in the footer as a mailto link
  contactEmail: "guoyutong@cuhk.edu.cn",

  courseName: {
    en: "Advanced AI for Business",
    zh: "面向商务实践者的高级人工智能",
  },

  // Accent colour. The two sites differ here so they are told apart at a glance.
  accent: "#ccff4d",
  accentDim: "#a8d63e",

  // Cross-links (spec section 2: the sites do not merge, but they reference each other)
  links: {
    pastProjects: "https://yutong010.github.io/sme-ai-project-gallery/",
    // The other course's artifact gallery. Left null until that site is live —
    // render.js hides the link rather than shipping a dead one.
    siblingGallery: null,
    siblingLabel: { en: "IBA6316 · MDS5370 gallery", zh: "IBA6316 · MDS5370 作品站" },
  },
};
