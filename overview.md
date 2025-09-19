# ⏱️ Worklog Extension for Azure DevOps

The **Worklog Extension** makes it easy to track your work time directly in a Work Item.  
Instead of manually maintaining totals, you can **add or remove time in hours and minutes**.  
The extension automatically calculates the total sum and writes each change as a **History entry** in the Work Item.

---

## ✨ Features

- ➕ **Add time**: in hours and minutes  
- ➖ **Remove time**: in hours and minutes  
- 📊 **Automatic summation** in the `Logged Time` field  
- 🕑 **History entries** document every change (fully traceable)  
- 🔒 Works with standard permissions (`vso.work_write`)  

---

## 🖼️ Screenshots

![Worklog Control](images/screenshot1.png)  
*The Worklog Control directly in the Work Item*

![History Updates](images/screenshot2.png)  
*Every change automatically appears in the History*

---

## 🚀 Usage

1. Open a Work Item (e.g., Task or Bug).  
2. The **Worklog Control** appears in the form.  
3. Enter hours/minutes and click ➕ or ➖.  
4. The total sum is automatically saved in the **Logged Time** field.  
5. Each entry is recorded in the **History** of the Work Item.  

---

## 📦 Installation

1. Install extension from the Marketplace  
2. Add a **Custom Field** `Logged Time` (Type: Integer) in your process  
   - RefName: `Custom.LoggedTime`  
   - Display name: `Logged Time`  
3. Place field in Work Item layout  
4. Done 🎉 – the control is ready to use  

---

## ⚙️ Prerequisites

- Azure DevOps Services (Cloud)  
- Permissions to customize the process (for the `Custom.LoggedTime` field)  

---

## 📌 Note

The extension is intentionally **kept simple**:  
It doesn't serve as a complete time tracking system, but as a **lightweight logging tool** for teams that want to document work time quickly and transparently.
