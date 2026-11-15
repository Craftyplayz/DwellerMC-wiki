# DwellerMC Wiki

Player wiki for DwellerMC, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/). Live at https://craftyplayz.github.io/DwellerMC-wiki/

- Pages: Markdown files in `docs/`. Add each new page to `nav:` in `mkdocs.yml`.
- Publish: push to `main`. The GitHub Action builds and deploys in about 1 minute.
- Local preview: `pip install -r requirements.txt`, then `mkdocs serve`, then open http://127.0.0.1:8000.
- Theme: colors and fonts are under `theme:` in `mkdocs.yml`.
