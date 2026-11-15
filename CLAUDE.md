# DwellerMC-wiki

Player wiki for DwellerMC (MkDocs Material), deployed by GitHub Actions on push to `main`. The shared rules live in `../CLAUDE.md` on the owner's machine; this file carries the essentials for a session that has only this repo.

- Pages describe what the plugin code does now (repos DwellerCore, DwellerBiomes, DwellerStructures), with values from the repo default configs. If the live server differs, state the repo default and say so.
- Every number lives once, in `DW` at the top of `docs/javascripts/dweller.js`, with the same formulas as the code. After changing it run `node tools/tables.js` and paste each printed table into the page its heading names, then re-check numbers typed by hand in page text. `node tools/check.js` compares `DW` with the plugin repos when they are checked out next to this one.
- New page: add to `nav:` in `mkdocs.yml`, link it from every related page (ores, depth and biomes link each other, for example).
- Style: a normal community wiki. No meta statements about accuracy or maintenance, no "unverified" markers (leave unsure facts out), no em dashes, no filler. Third-party plugin pages end with a short "Links" section to official docs. Never link to the admin wiki.
- Build before committing: `pip install -r requirements.txt`, then `mkdocs build --strict` (on the owner's Windows machine: `python3.14 -m mkdocs build --strict`). The deploy runs the same strict build, so a broken build means a broken site.
