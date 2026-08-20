# Frontend reconstruction

Static frontend implementation based on `../trigger/DESIGN_INDEX_gdweb-26357.md`.

## Run

```bash
cd frontend
python3 -m http.server 4321
```

Open <http://127.0.0.1:4321/>.

The local raster assets were generated specifically for this reconstruction. They replace unavailable proprietary source imagery while preserving the visual role, crop, luminance, and section geometry described by the DESIGN_INDEX.

## Live deployment

Changes to this directory on `main` are deployed by GitHub Actions to:

<https://yyeongjin.github.io/secret_mcp_use/>

The deployment artifact contains this directory only. Screenshots are intentionally not tracked because the live site reflects the current frontend source.
