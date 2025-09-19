
import * as SDK from "azure-devops-extension-sdk";

SDK.init();

let totalMinutes = 0;
const FIELD_REF_NAME = "Custom.LoggedTime";

function formatMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

function updateDisplay() {
  const total = document.getElementById("total");
  if (total) total.textContent = `Gesamt: ${formatMinutes(totalMinutes)}`;
}

async function getFormService(): Promise<any> {
  return await SDK.getService<any>("ms.vss-work-web.work-item-form");
}

async function saveToField() {
  const svc = await getFormService();
  await svc.setFieldValue(FIELD_REF_NAME, totalMinutes);
}

function readInputMinutes(): number {
  const h = parseInt((document.getElementById("hours") as HTMLInputElement)?.value || "0", 10) || 0;
  const m = parseInt((document.getElementById("minutes") as HTMLInputElement)?.value || "0", 10) || 0;
  return Math.max(0, h * 60 + m);
}

function clearInputs() {
  const hours = (document.getElementById("hours") as HTMLInputElement);
  const minutes = (document.getElementById("minutes") as HTMLInputElement);
  if (hours) hours.value = "";
  if (minutes) minutes.value = "";
}

async function onAdd() {
  const addMinutes = readInputMinutes();
  if (addMinutes <= 0) return;
  totalMinutes += addMinutes;
  updateDisplay();
  await saveToField();
  clearInputs();
}

async function onRemove() {
  const removeMinutes = readInputMinutes();
  if (removeMinutes <= 0) return;
  totalMinutes = Math.max(0, totalMinutes - removeMinutes);
  updateDisplay();
  await saveToField();
  clearInputs();
}

async function initFromField() {
  const svc = await getFormService();
  const value = await svc.getFieldValue(FIELD_REF_NAME);
  totalMinutes = (typeof value === "number" && !isNaN(value)) ? value : 0;
  updateDisplay();
}

function wireUi() {
  document.getElementById("add")?.addEventListener("click", () => { onAdd(); });
  document.getElementById("remove")?.addEventListener("click", () => { onRemove(); });
}

SDK.ready().then(async () => {
  wireUi();
  await initFromField();
});
