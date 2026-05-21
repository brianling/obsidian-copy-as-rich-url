# Copy as Rich URL

Obsidian plugin that copies the current note as a **rich hyperlink** (title + `obsidian://` URL) to the system clipboard. When you paste into a rich-text editor like FuseBase, Notion, Confluence, Slack, or Gmail, it becomes a single clickable link with the note's title as anchor text.

## Why

Obsidian's built-in "Copy Obsidian URL" only puts the raw URL on the clipboard. If you paste that into FuseBase, it shows the ugly `obsidian://...` string. This plugin writes both `text/html` (with a proper `<a>` tag) and `text/plain` to the clipboard, so rich-text editors render a clean clickable link.

## Usage

1. Open the note you want to link to.
2. Click the **🔗 Copy as Rich URL** icon in the left ribbon, or run the command palette command `Copy as Rich URL: Copy current note as rich URL`, or bind a hotkey.
3. Paste anywhere — rich-text editors get a hyperlink, plain-text editors get `title\nURL`.

## Install

### Manual

1. Download `manifest.json` and `main.js` from the latest [release](../../releases).
2. Drop both files into `<your-vault>/.obsidian/plugins/copy-as-rich-url/`.
3. In Obsidian: Settings → Community plugins → Reload → enable **Copy as Rich URL**.

### BRAT (beta installer)

Add this repo URL in the **BRAT** plugin.

## Develop

```bash
npm install
npm run dev       # watch mode, rebuilds main.js on change
npm run build     # one-shot production build
```

The plugin folder lives at `<vault>/.obsidian/plugins/copy-as-rich-url/`. Reload the plugin in Obsidian (toggle off/on) after each rebuild.

## License

MIT
