
# Azure DevOps Worklog Extension

A Work Item Control to log work time in **hours & minutes**.  
- Keeps the **total sum** in the Custom Field `Custom.LoggedTime` (in minutes).  
- Writes each log entry as a **comment** in the **History** ("Sessions").

## Quick Start

1. **Prerequisites**
   - Node.js 18+
   - (Optional) Azure DevOps `tfx-cli`: `npm i -g tfx-cli` (or locally via npm scripts)

2. **Install**
   ```bash
   npm install
   ```

3. **Build**
   ```bash
   npm run build
   ```
   The result is placed in `dist/` (HTML + JS Bundle).

4. **Build VSIX Package**
   ```bash
   npm run pack
   ```
   This creates `package/worklog-extension-0.0.1.vsix`, which you can publish in Azure DevOps or install in your organization.

## Integration in Work Item Form

- Add a **Custom Field** `Custom.LoggedTime` (integer) to your project — it stores the minutes.
- Open the **Process** settings and add the **Custom Control** "Worklog Control" to the desired Work Item Type.

## Notes

- The SDK is loaded via CDN: `https://unpkg.com/azure-devops-extension-sdk@latest`.
- Comments (Sessions) appear in the **History** tab of the Work Item.
- You can adjust the field ID in `src/index.ts` via `FIELD_REF_NAME`.

## Development

```bash
npm run dev
```
Starts Webpack in watch mode and rebuilds on changes (still outputs to `dist/`).

---

Good luck! ✨
