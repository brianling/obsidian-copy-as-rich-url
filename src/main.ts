import { Plugin, Notice, TFile } from 'obsidian';

const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default class CopyAsRichUrlPlugin extends Plugin {
  async onload() {
    const doCopy = async () => {
      const file: TFile | null = this.app.workspace.getActiveFile();
      if (!file) {
        new Notice('No active note');
        return;
      }
      const vault = this.app.vault.getName();
      const pathNoExt = file.path.replace(/\.md$/, '');
      const url = `obsidian://open?vault=${encodeURIComponent(vault)}&file=${encodeURIComponent(pathNoExt)}`;
      const title = file.basename;

      const html = `<a href="${escapeHtml(url)}">${escapeHtml(title)}</a>`;
      const plain = `${title}\n${url}`;

      try {
        const item = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([plain], { type: 'text/plain' }),
        });
        await navigator.clipboard.write([item]);
      } catch (e) {
        await navigator.clipboard.writeText(plain);
      }
      new Notice('Rich URL copied');
    };

    this.addCommand({
      id: 'copy-as-rich-url',
      name: 'Copy current note as rich URL',
      callback: doCopy,
    });

    this.addRibbonIcon('link', 'Copy as Rich URL', doCopy);
  }
}
