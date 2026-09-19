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

- [Project Overview](#-project-overview)
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

# 🌆 Project Overview

Cities and local communities continuously face civic issues such as damaged roads, broken streetlights, water leakage, blocked pathways, waste accumulation, and accessibility problems.

Digital reporting systems can make it easier for citizens to communicate these problems. However, the process should not necessarily end when an authority or administrator marks a complaint as "Resolved".

There is a need for a transparent mechanism through which citizens can verify whether the reported problem was actually addressed.

JanDrishti focuses on this gap.

The platform creates a complete civic issue lifecycle:

```text
Citizen Reports Issue
        ↓
Admin Reviews Issue
        ↓
Issue Assigned
        ↓
Action Taken
        ↓
Resolution Evidence Added
        ↓
Citizen Verification
        ↓
 ┌──────────────────────┐
 │                      │
 ▼                      ▼
Verified            Not Resolved
 │                      │
 ▼                      ▼
Closed             Reopen / Escalate
