# Memory — Cutoff study board

Last updated: 2026-11-18 00:15

## Recurring context

- Project root: `/Users/igbojuwooladipupo/Documents/jamb stuff/cutoff`. The plan source of truth is `../STUDY_PLAN.md` (parent folder, not in the repo).
- Exam: JAMB UTME, 15 March 2027. Plan runs 17 weeks from 16 November 2026. 87 numbered topics: Physics 40, Mathematics 23, Biology 24, plus 6 English blocks.
- Stack: three files plus data. `index.html` (shell only: `.side`, `main#view`, `aside#rail`), `styles.css` (all tokens in `:root`), `app.js` (state, views, rails, charts), `plan.js` (topic data). Opens with `open index.html`. No server, no build, no network.
- Storage: `localStorage` key `utme.board.v1`.
- Hard rule, also in `AGENTS.md`: no inline CSS. No `<style>`, no `style=`, no `.style.` in JS, no CSS in template strings. Check with `grep -c "style=" index.html app.js` (must be 0).
- Type: Geist Serif for headings and the wordmark only. Inter Tight for every other role. Tabular numerals on all data.
- Palette: `--ground #FFFFFF`, `--side #0B0C0E` (black sidebar), `--side-2 #F2F4F7` (rail), `--ink #0F141B`, `--accent #2F6FE4`, `--line #DCE3ED`. 60 white / 30 black structure / 10 azure.
- Gates: learned = 10 questions, 6 correct, 12 minutes. Locked = 10 fresh questions, 8 correct, 10 minutes, 7 days after learned.
- Repo: `https://github.com/Dipo1111111/Cutoff`, branch `main`, pushed at commit `6ff86a6`. `_proof/` and `.DS_Store` are gitignored. `memory.md` is now tracked.
- Notes module, tracked and public since the owner changed his mind on 17 November. Entry point `notes.html` at the project root. Files: `data.js` (`window.NOTES`, text for each topic), `quiz.js` (`window.QUIZ`, checks, cards, final test), `boot.js` (list, reader, cards, test, rail, nav item, stylesheet injection), `notes.css`, `sync.sh` (rebuilds `notes.html` from `index.html`).
- Extension point: `window.Cutoff` in `app.js` with `add(id, label, view, rail, icon)`. A module registers a screen and a nav item at load. `add` takes a real SVG element, never HTML, and the icon needs `width` and `height` attributes.
- Test tools outside the repo, rebuilt as needed because `/tmp` gets cleared: `/tmp/cdp.mjs <file> <png> <W> <H>` for true-viewport screenshots, `/tmp/v.mjs <file> <W>` for a per-screen error and width sweep, `/tmp/modes.mjs` for the three note modes. Remote debugging needs a random port near 10000-12800 and up to 70 retries before Chrome answers.

## What was built

Full working board, five screens with a right rail each:

- Week (`viewWeek`): week stepper, subject rows with a one-click 3-state tick, Re-test button on learned rows, Day block with two subject menus and a 2 h / 3 h switch.
- Plan (`viewPlan`): week × subject matrix, sticky header, 13 rows.
- Progress: three-cell number panel (score now, work left, next checkpoint), donut, per-subject bars, checkpoint chart in marks out of 400.
- Remaining: three-column list of unlocked topics.
- Settings: export, import, erase, plus fixed plan facts.

Rails rewritten this session: fixed shape of action, then counts, then reference. Week holds Next, week band with counts, the day, gates. Plan holds grid key, topics-by-tier bars, totals. Progress holds how a topic earns marks and how a subject earns marks. Remaining holds due list and per-subject bars.

Also built: `README.md`, `.gitignore`, git repo initialised and pushed, black sidebar with inline SVG nav icons (calendar, grid, bars, list, sliders), one-word nav labels (Week, Plan, Progress, Remaining, Settings), new ring-with-gap logo mark.

## Decisions made

- Projection is now proportional, not tier weighted. Each subject holds 100 marks. Score = locked topics ÷ total topics × 100 per subject. `TIER_W` and `ENG_W` are gone, and the tier-weighting copy is removed everywhere. Reason: the owner could not explain or trust the weighting.
- Chart draws in marks (0–400) and labels its two lines inline ("Plan", "You"). No separate key. Reason: the key forced the owner to decode a legend.
- The board never schedules. The two subjects in the Day block come from two menus, defaulting to the two subjects with most open work this week. Choice is stored in `state.pick`. No rotation.
- Active and hover in the sidebar share one treatment: white text, weight 600 for the open screen. No fill, no bar, no chip.
- Scrollbars are hidden everywhere; the wheel still scrolls. Desktop locks the page and scrolls `main` only. Below 821 px it becomes a single scrolling block.
- Explanatory paragraphs live in the right rail, not the main column.

## Problems solved

- Rows, the entry form, and mini buttons turned black on hover because they used `var(--side)` after the sidebar became black. Now use `--card` / `--line-2`.
- Mobile had no scroll. Two causes: the grid shell had a fixed height, and the `overflow:hidden` rule sat after the mobile block, so it applied at every width. Fixed by `display:block` below 821 px, `overflow:hidden` only above, and `grid-template-columns:minmax(0,1fr)` to stop 409 px width overflow.
- SVG nav icons exploded to full size when a CSS block replacement deleted the `.nav a svg` size rule.
- `.nav a[aria-current]` chips and azure tints were rejected twice; the final state is text-only.
- Freestanding `+` string concatenation caused several syntax errors when editing rail templates. Always run `node --check app.js` after a template edit.
- Chart labels clipped at the right edge. Fixed by raising the chart right inset to 64 and using a dedicated `.chart .tag` class, because the `.lab` class forces uppercase.

## Current state

Everything works. All five screens render with no runtime or console errors. Mobile scroll verified at 390 × 844. Repo pushed.

Notes are public. The module is built and working: `notes.html` at the project root opens the same app with a sixth nav item. It must stay in the root: Safari blocks a file:// page from reading a parent folder, which once broke the page (no CSS, giant logo). Rebuild it with `./notes/sync.sh` after any change to `index.html`. One note exists, `phy:1` Measurements and Units, 4,890 words, covering every objective in the JAMB syllabus for topic 1 (base and derived units, instruments, area and volume, mass and weight, time, dimensions and homogeneity, limits of dimensions, accuracy and error, significant figures, standard form, worked examples, traps, syllabus coverage table). Density and relative density are deliberately left to topic 11, Liquid at Rest.

The note has three modes under tabs on the note screen: Read, Cards, Test. `notes/quiz.js` holds 39 section checks (two per section, 20 blocks), 40 cards and a 66-question multiple-choice test with a 85 % pass line, a best score per topic and a miss list with reasons. State lives under the same key, in `state.notes`, namespaced `c:<topic>:<section>`, `k:<topic>`, `t:<topic>` and `read:<topic>`.

Read mode mounts one check block after the last element of each section. The mount walks siblings until the next `h2`, so the section markup needs no marker. A pick is stored as the option index, not a boolean, so both the right option and the wrong pick can be marked.

`README.md` now describes the board, the notes folder and storage.

## Words screen

`words/` holds the English deck. `data.js` has 227 words and 40 idioms with a meaning and an example sentence each. `words.js` registers the Words screen: two tabs, Today and All. Today gives seven words and three idioms, fixed by the day number so the set changes at midnight, and lists all ten with meanings under the card. Again keeps a card in the deck; Got it records it in `state.words.known` and drops it. `words.css` carries its own copy of the card and section styles, so it does not depend on `notes.css`.

## Biology note 1

`bio:1` Living Organisms, Cells and Levels of Organisation. 2,175 words, sections s0 to s10: study habits, the seven characteristics, living against non-living, cells and the microscope, plant cell, animal cell, comparison, specialised cells, the five levels, unicellular organisms, traps and a coverage table. Ten check blocks, 40 cards, 40 exam questions. Every fact is tied to one of the five syllabus objectives; nothing outside the syllabus is kept.

The notes list screen now groups by subject prefix (Physics, Biology) and numbers each row by its plan id.

## English oral note

`eng:4` Oral English: Sounds, Rhymes and Stress. 1,826 words, sections s0 to s10, built from Section C of the Use of English syllabus: vowels (monophthongs, diphthongs, triphthongs), consonants and clusters, rhymes and homophones, word stress, emphatic stress. Ten check blocks, 35 cards, 40 exam questions. The syllabus gives ten marks to this section, two questions on each of five patterns, and the note follows that order.

Keys match the plan ids where possible: `phy:1`, `bio:1`, `eng:4`, because `plan.js` names the English blocks `eng1` to `eng6` and the oral work is block four.

## Pushed

Commit `f5de6c6` adds the words deck and the biology note. Commit `9c86d67` adds `notes.html`, `notes/` and the extension hook, and updates `README.md`, `app.js`, `index.html`, `styles.css`. Local `HEAD` equals `origin/main`. `notes/` was removed from `.git/info/exclude`, and the copy that said git ignores the folder is gone.

## Next session starts with

Write the next note the same way: add an entry to `notes/data.js` keyed by the topic id used in `plan.js` (`phy:2`, `mat:1`, `bio:1`, `eng:1`), then reload. Run `./notes/sync.sh` only if `index.html` changed.

Waiting on the logo verdict (ring with a gap at the top right). If he rejects it, the shapes already rejected are the pie with a wedge, the card with a cut corner, the sliced square, and the disc with a diagonal slot.

## Open questions

- The repo is public, so the notes, the cards and the test are readable by anyone with the link. The owner asked for this and knows.
- Is the new ring mark accepted?
- Should the Progress rail lose its two explanation blocks entirely?
- Plan questions that predate the build: is Biology accepted for Computer Science at the target schools, what are the school cut-offs, and is the 2027 syllabus confirmed?
- Settings rows still keep a one-line subtitle in the main column. The owner asked for all explanatory text in the rail; these were left as an exception and never confirmed.
