
# Azure DevOps Worklog Extension

Ein Work Item Control, um Arbeitszeit in **Stunden & Minuten** zu buchen.  
- Hält die **Gesamtsumme** im Custom Field `Custom.LoggedTime` (in Minuten).  
- Schreibt jede Buchung als **Kommentar** in die **History** („Sessions“).

## Schnellstart

1. **Voraussetzungen**
   - Node.js 18+
   - (Optional) Azure DevOps `tfx-cli`: `npm i -g tfx-cli` (oder lokal über npm scripts)

2. **Installieren**
   ```bash
   npm install
   ```

3. **Build**
   ```bash
   npm run build
   ```
   Das Ergebnis liegt in `dist/` (HTML + JS Bundle).

4. **VSIX Paket bauen**
   ```bash
   npm run pack
   ```
   Das erzeugt `package/worklog-extension-0.0.1.vsix`, das du in Azure DevOps veröffentlichen bzw. in deiner Organisation installieren kannst.

## Einbinden im Work Item Formular

- Füge in deinem Projekt ein **Custom Field** `Custom.LoggedTime` (Ganzzahl) hinzu — es speichert die Minuten.
- Öffne die **Process**-Einstellungen und füge das **Custom Control** „Worklog Control“ zum gewünschten Work Item Type hinzu.

## Hinweise

- Die SDK wird per CDN geladen: `https://unpkg.com/azure-devops-extension-sdk@latest`.
- Kommentare (Sessions) landen im **History**-Tab des Work Items.
- Du kannst die ID des Feldes in `src/index.ts` über `FIELD_REF_NAME` anpassen.

## Entwickeln

```bash
npm run dev
```
Startet Webpack im Watch-Mode und baut bei Änderungen neu (legt weiterhin in `dist/` ab).

---

Viel Erfolg! ✨
