# MIS3011 — Student Artifact Gallery, Fall 2026

Public index of artifacts built by students in *Advanced AI for Business*
(MIS3011), CUHK-Shenzhen SME. Every entry links to something you can open.

Live: not published yet. See **Going live** below.

## Adding an artifact

Edit `data/artifacts.js`. Nothing else. Do not add entries by editing `index.html`.

The template and the field list are at the top of that file. Four rules matter:

1. **`consent` must be `"granted"`** or the entry does not render. There is no
   override. Records awaiting consent stay in the file with `consent: "pending"`
   so you can see what is outstanding.
2. **No names, student IDs, emails, or company names** anywhere in the file. The
   `credit` field carries the string the student chose for themselves — real
   name, given name only, or `"Anonymous"` — recorded when consent was asked.
3. **`one_liner` is capped** at 18 English words / 40 Chinese characters, and
   says who it helps and what problem it solves, not the tech stack. Open the
   console; `render.js` warns when an entry is over.
4. **Uncertain? `confidence: "low"`.** Do not guess a value.

## Layout

| Path | What it is |
|---|---|
| `index.html` | Structure only. **Identical to the IBA6316/MDS5370 site.** |
| `assets/site.css` | Styles. **Identical to the other site.** |
| `assets/render.js` | Rendering, language handling, consent gate. **Identical.** |
| `data/config.js` | Course identity and accent colour. **The only file that differs.** |
| `data/artifacts.js` | The records. |

To stand up a gallery for another course: copy the repo, rewrite
`data/config.js`, empty `data/artifacts.js`.

## Language

The visitor's system language picks the default (`navigator.language` matched
against `/zh/i`); the EN / 中文 toggle overrides it and the choice is kept in
`localStorage` under `gallery-lang`. That is the same key the past-projects
gallery uses, and all three sites share the `yutong010.github.io` origin, so a
visitor who picks 中文 on one gets 中文 on the others.

Page copy lives in the `T` dictionary at the top of `render.js`, in both
languages. Artifact titles are not translated; their `one_liner` is written in
both.

## Going live

GitHub Pages is **off** on purpose. Before turning it on:

1. Reachability has not been tested on the campus network or on 4G. Test both.
2. Settings → Pages → Deploy from branch `main` / root.
3. Once both course sites are live, set `links.siblingGallery` in each
   `data/config.js` to the other's URL. Until then `render.js` hides that link
   rather than shipping a dead one.

## Dead links

An artifact whose host goes away gets `status: "dead"`. It stays on the page,
greyed and unclickable. It was built; that stays true after the hosting lapses.
