#!/bin/sh
# Rebuild notes.html at the project root from index.html.
# It must sit in the root: Safari blocks file:// pages from reading a parent folder.
set -e
cd "$(dirname "$0")/.."
python3 - <<'PY'
src = open("index.html").read()
src = src.replace("<title>Cutoff</title>", "<title>Cutoff — notes</title>")
src = src.replace(
    '<script src="app.js"></script>',
    '<script src="app.js"></script>\n'
    '<script src="notes/data.js"></script>\n'
    '<script src="notes/quiz.js"></script>\n'
    '<script src="notes/boot.js"></script>')
open("notes.html", "w").write(src)
PY
echo "notes.html rebuilt at the project root"
