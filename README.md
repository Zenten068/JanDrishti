# JanDrishti 🏙️
## Citizen-Verified Civic Issue Resolution Platform

> **Report. Resolve. Verify.**

JanDrishti is a web-based civic technology platform designed to improve transparency, citizen participation, and accountability in the resolution of local civic issues.

The platform allows citizens to report civic problems such as potholes, broken streetlights, water leakage, waste accumulation, blocked public spaces, accessibility issues, and other local infrastructure problems.

Administrators can review submitted reports, manage their progress, update issue statuses, and provide evidence after taking corrective action.

The key feature of JanDrishti is **Citizen Verification of Claimed Resolutions**.

Instead of considering an issue completely resolved simply because an administrator marks it as "Resolved", JanDrishti introduces an additional verification stage where the citizen can confirm whether the issue has actually been resolved.

---

# 📌 Table of Contents

- [Problem Statement](#-problem-statement)
- [Proposed Solution](#-proposed-solution)
- [Project Objectives](#-project-objectives)
- [Key Features](#-key-features)
- [How JanDrishti Works](#-how-jandrishti-works)
- [Issue Lifecycle](#-issue-lifecycle)
- [Citizen Module](#-citizen-module)
- [Admin Module](#-admin-module)
- [Resolution Verification](#-resolution-verification)
- [Dashboard and Analytics](#-dashboard-and-analytics)
- [SDG Alignment](#-sdg-alignment)
- [System Architecture](#-system-architecture)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Database Design](#-database-design)
- [API Overview](#-api-overview)
- [Security and Privacy](#-security-and-privacy)
- [Testing and Evaluation](#-testing-and-evaluation)
- [Community Engagement](#-community-engagement)
- [Future Scope](#-future-scope)
- [Project Status](#-project-status)
- [Team](#-team)
- [License](#-license)

---

# 📌 Problem Statement

Local communities regularly experience civic issues such as damaged roads, broken streetlights, water leakage, waste accumulation, blocked footpaths, accessibility problems, and damaged public infrastructure.

Although digital platforms can help citizens report these problems, the reporting process does not always provide a clear mechanism for citizens to verify whether an issue has actually been resolved.

An issue may be marked as **"Resolved"** after administrative action, while the citizen may still experience the same problem or find that the issue has only been partially addressed.

JanDrishti aims to address this gap by introducing a **citizen verification stage after administrative resolution**.

The platform provides a structured workflow where citizens can:

- Report an issue.
- Track its progress.
- View resolution evidence.
- Verify the claimed resolution.
- Mark an issue as resolved, partially resolved, or not resolved.
- Request reopening when the problem has not been adequately addressed.

---

# 💡 Proposed Solution

JanDrishti provides a digital platform connecting citizens and administrators through a transparent civic issue-resolution workflow.

The system consists of two major interfaces:

### 👤 Citizen Portal

Citizens can:

- Register and log in.
- Report civic issues.
- Upload photographs.
- Provide issue descriptions.
- Select issue categories.
- Provide location information.
- Track issue progress.
- View resolution evidence.
- Verify the resolution.
- Request reopening if the issue remains unresolved.

### 🛠️ Admin Portal

Administrators can:

- View submitted issues.
- Review issue information.
- Manage reported issues.
- Update issue status.
- Add action/resolution details.
- Upload resolution evidence.
- Review citizen verification.
- Reopen disputed issues.
- Monitor issue statistics.

The central workflow is:

```text
Report
   ↓
Review
   ↓
Assign
   ↓
Action
   ↓
Resolution Evidence
   ↓
Citizen Verification
   ↓
Verified / Not Resolved
   ↓
Close / Reopen
