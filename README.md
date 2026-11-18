# Cutoff

A study board for one JAMB UTME attempt.

- `index.html` opens the board: Week, Plan, Progress, Remaining, Settings.
- `notes.html` opens the board with the Notes screen too.

## Notes

`notes/` holds long notes for one topic at a time.

- `data.js` holds the text, keyed by plan id (`phy:1`, `mat:1`, `bio:1`, `eng:1`).
- `quiz.js` holds three sets: two check questions per section, a flashcard deck, and a final test.
- `boot.js` draws the reader, the cards and the test.
- `notes.css` styles them.
- `sync.sh` rebuilds `notes.html` from `index.html` after the shell changes.

Notes open on the file system. No server, no build step, no network.

## Storage

State stays in `localStorage` under `utme.board.v1`. Export and import it on Settings.
