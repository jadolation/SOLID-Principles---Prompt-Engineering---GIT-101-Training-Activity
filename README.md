# 🚀 Modern Developer Workflow: From Monolith to Modular
**February 14, 2026 | Training Seminar**

Welcome to the official repository for the Modern Developer Workflow training seminar! This hands-on session is designed to help student interns transition from writing "code that just works" to engineering maintainable systems using modern version control and AI tools.

---

## 🎤 Speakers & Topics

| Topic | Speaker | Focus |
| :--- | :--- | :--- |
| **SOLID Principles** | Carl Estrada | Writing maintainable, scalable, and modular code. |
| **Prompt Engineering** | Reynaldo Jr. Ferrer | Leveraging AI to accelerate refactoring and learning. |
| **Git 101** | Jan Dale Zarate | Version control, VS Code integration, and team collaboration. |

---

## 🛠️ The Activity: The Monolithic Guestbook Refactor

In this repository, you will find `index.html`. It contains a functional guestbook application, but it is a **Monolith**—the Structure (HTML), Styling (CSS), and Logic (JavaScript) are all tangled together in one file. This violates the Single Responsibility Principle (part of SOLID).

**Your Mission:** Use Git to manage your workflow and Prompt Engineering to refactor this code into modular files.

### 🏃‍♂️ Step-by-Step Instructions

#### **1. Setup (Git 101)**
1. **Fork** this repository to your own GitHub account using the "Fork" button at the top right.
2. **Clone** your new repository to your local machine using VS Code:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
Open the cloned folder in VS Code and test index.html in your browser to see how it works.

2. Branching Out (Git 101)
Never work directly on main! Create a new feature branch for your refactor:

Bash
git checkout -b feat/solid-refactor
(In VS Code: Click the branch name main in the bottom-left corner -> "Create new branch" -> name it feat/solid-refactor)

3. The AI Refactor (Prompt Engineering & SOLID)
Open index.html and look at the code.

Open your preferred AI tool (ChatGPT, Gemini, Copilot).

Use this prompt to generate the modular code:

"Act as a Senior Software Engineer. I have a monolithic HTML file. Please refactor this code to follow SOLID principles by separating concerns. Extract the CSS into a style.css file and the JavaScript into a script.js file. Keep the HTML structure in index.html and link the new files properly. Here is the code: [Paste your code here]"

Create the new files in VS Code, paste the AI-generated code, and save everything.

4. Verification
Refresh the page in your browser. Add your name and one thing you learned today to the guestbook to ensure the application still works!

5. Saving & Sharing (Git 101)
Now that your code is modular, it's time to save your snapshots and push them to the cloud.

Stage your changes (click the + next to your modified/new files in the VS Code Source Control tab).

Commit your changes with a descriptive message:

Bash
git commit -m "Refactor: extract CSS and JS to apply SOLID principles"
Push your branch to GitHub:

Bash
git push origin feat/solid-refactor
(In VS Code: Click "Publish Branch" or "Sync Changes")

🆘 Git Survival Cheat Sheet for VS Code
U (Green): Untracked. Git doesn't know this new file exists yet. Stage it!

M (Yellow): Modified. You changed an existing file. Stage it!

Stage (+): Putting your items in the "shopping cart."

Commit: "Buying" the items and getting a receipt (a permanent save point).

Push: Uploading your save points to GitHub.

Pull: Downloading updates from your team.

Merge Conflict (C / Red): You and a teammate edited the exact same line. Don't panic! Open the file and click "Accept Current Change" or "Accept Incoming Change."

Maintained by Jan Dale Zarate (SLU Intern) for the 2026 Intern Training Program of Makerspace Innovhub OPC.
