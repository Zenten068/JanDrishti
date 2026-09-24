# JanDrishti 🏙️

## Citizen-Verified Civic Issue Resolution Platform

> **Report. Resolve. Verify.**

JanDrishti is a web-based civic technology platform designed to make local civic issue reporting and resolution more transparent and accountable.

Citizens can report problems such as potholes, broken streetlights, water leakage, garbage accumulation, blocked public spaces, and other infrastructure issues. Administrators can review these reports, manage their progress, take corrective action, and provide resolution evidence.


The key feature of JanDrishti is **Citizen Verification of Claimed Resolutions**.

An issue is not considered completely resolved simply because an administrator marks it as "Resolved". The citizen who reported the issue gets an opportunity to verify whether the problem has actually been fixed.

---

## 📌 Problem Statement

Civic issues are common in local communities, but the process of reporting and tracking these problems can lack transparency.

In many existing workflows:

* Citizens report an issue.
* Authorities take action.
* The issue is marked as resolved.
* The citizen may have no structured way to confirm whether the problem was actually fixed.

This creates a gap between **administrative resolution** and **actual resolution experienced by citizens**.

JanDrishti addresses this gap by introducing a citizen verification stage after an administrator claims that an issue has been resolved.

---

## 💡 Proposed Solution

JanDrishti connects citizens and administrators through a structured civic issue lifecycle.

```text
Citizen Reports Issue
        ↓
Administrative Review
        ↓
Issue Assignment
        ↓
Corrective Action
        ↓
Resolution Evidence
        ↓
Citizen Verification
        ↓
 ┌───────────────┐
 │               │
 ▼               ▼
Verified      Not Verified
 │               │
 ▼               ▼
Closed         Reopened
```

This workflow creates a transparent record of:

* Original issue report
* Issue location
* Administrative actions
* Resolution evidence
* Citizen verification
* Reopening requests
* Final resolution status

---

# 🎯 Objectives

1. Provide a centralized platform for reporting civic issues.
2. Allow citizens to submit descriptions, photographs, and location information.
3. Provide administrators with a dashboard for managing reported issues.
4. Maintain a structured lifecycle for every civic issue.
5. Allow administrators to provide details about corrective actions.
6. Allow administrators to upload resolution evidence.
7. Introduce citizen verification of claimed resolutions.
8. Allow citizens to classify resolutions as:

   * ✅ Resolved
   * ⚠️ Partially Resolved
   * ❌ Not Resolved
9. Allow unresolved issues to be reopened.
10. Maintain a history of issue updates and verification decisions.
11. Provide analytics for monitoring civic issues.
12. Visualize reported issues using interactive maps.
13. Encourage citizen participation in local civic management.
14. Support the principles of **SDG 11 – Sustainable Cities and Communities**.

---

# ✨ Key Features

## 👤 Citizen Module

Citizens can:

* Register and log in
* Report civic issues
* Select issue categories
* Add descriptions
* Upload photographs
* Provide issue location
* View submitted issues
* Track issue status
* View issue history
* View administrator updates
* View resolution evidence
* Verify claimed resolutions
* Mark issues as:

  * ✅ Resolved
  * ⚠️ Partially Resolved
  * ❌ Not Resolved
* Request reopening of unresolved issues

---

## 🛠️ Admin Module

Administrators can:

* Securely log in
* View reported issues
* Search and filter issues
* View complete issue details
* View uploaded photographs
* View issue locations
* Update issue status
* Assign issues
* Add action details
* Upload resolution evidence
* Review citizen verification
* Reopen disputed issues
* Monitor issue statistics

---

# 📍 Location & Mapping

JanDrishti uses location information to provide a geographical view of reported civic problems.

Planned mapping functionality includes:

* Interactive issue map
* Issue markers
* Location-based issue viewing
* Issue information through map markers
* Civic problem visualization

### Mapping Technology

* Leaflet.js
* OpenStreetMap

---

# 🔍 Citizen Resolution Verification

The core feature of JanDrishti is the **Citizen Verification Workflow**.

When an administrator marks an issue as resolved, the citizen receives the opportunity to verify the claimed resolution.

### Verification Flow

```text
Issue Reported
      ↓
Admin Review
      ↓
Issue Assigned
      ↓
Corrective Action
      ↓
Resolution Evidence
      ↓
Citizen Verification
      ↓
 ┌───────────────┐
 │               │
 ▼               ▼
Resolved     Not Resolved
 │               │
 ▼               ▼
Closed        Reopened
```

Citizens can select:

| Verification          | Result                                      |
| --------------------- | ------------------------------------------- |
| ✅ Resolved            | Issue can proceed toward closure            |
| ⚠️ Partially Resolved | Issue can be reopened for additional action |
| ❌ Not Resolved        | Issue is reopened                           |

This prevents an issue from being considered successfully resolved solely on the basis of an administrative status update.

---

# 🔄 Issue Lifecycle

Every issue follows a structured lifecycle.

```text
Reported
   ↓
Under Review
   ↓
Assigned
   ↓
In Progress
   ↓
Resolution Submitted
   ↓
Citizen Verification
   ↓
 ┌───────────────┐
 │               │
 ▼               ▼
Verified       Reopened
 │               │
 ▼               │
Closed ←─────────┘
```

### Issue Statuses

* `Reported`
* `Under Review`
* `Assigned`
* `In Progress`
* `Resolved`
* `Reopened`
* `Closed`

---

# 📊 Dashboard & Analytics

The administrator dashboard will provide an overview of civic issues.

Possible metrics include:

* Total Issues
* Pending Issues
* Issues Under Review
* Issues In Progress
* Resolved Issues
* Reopened Issues
* Closed Issues
* Citizen Verification Rate
* Resolution Verification Outcomes
* Issues by Category
* Issues by Location

---

# 🏗️ System Architecture

```text
┌──────────────────────────────┐
│          Citizens            │
│                              │
│  Report / Track / Verify     │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       React Frontend         │
│                              │
│ Citizen Portal               │
│ Admin Dashboard              │
│ Issue Management             │
│ Map Interface                │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│          Supabase            │
│                              │
│ Authentication               │
│ PostgreSQL Database          │
│ Storage                      │
│ Row Level Security           │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│     Application Data         │
│                              │
│ Users                        │
│ Issues                       │
│ Updates                      │
│ Evidence                     │
│ Verification                 │
└──────────────────────────────┘
```

---

# 🧰 Technology Stack

## Frontend

* React.js
* Vite
* JavaScript
* HTML
* CSS

## Backend / Platform Services

* Supabase
* Supabase Authentication
* PostgreSQL
* Supabase Storage

## Mapping

* Leaflet.js
* OpenStreetMap

## Development Tools

* Visual Studio Code
* Git
* GitHub
* npm

---

# 🗄️ Database Design

The application is designed around the following core entities:

```text
profiles
    │
    ▼
issues
    │
    ├──────────────► issue_updates
    │
    ├──────────────► resolution_evidence
    │
    └──────────────► citizen_verifications
```

### Main Tables

#### `profiles`

Stores user information and roles.

Possible fields:

```text
id
name
email
role
created_at
```

Roles:

```text
citizen
admin
```

---

#### `issues`

Stores civic issue reports.

Possible fields:

```text
id
user_id
title
description
category
image_url
latitude
longitude
status
created_at
updated_at
```

---

#### `issue_updates`

Stores administrative updates and actions.

Possible fields:

```text
id
issue_id
admin_id
status
action_description
created_at
```

---

#### `resolution_evidence`

Stores evidence submitted by administrators after corrective action.

Possible fields:

```text
id
issue_id
admin_id
evidence_url
description
created_at
```

---

#### `citizen_verifications`

Stores citizen responses to claimed resolutions.

Possible fields:

```text
id
issue_id
citizen_id
verification_status
comment
created_at
```

Possible verification values:

```text
resolved
partially_resolved
not_resolved
```

---

# 🔐 Security & Privacy

JanDrishti will use Supabase security mechanisms to protect application data.

Security considerations include:

* Authentication through Supabase Auth
* Role-based access control
* Row Level Security
* Protected administrator operations
* Controlled database access
* Secure file storage
* Environment variables for sensitive configuration
* Validation of user-submitted data

Sensitive credentials and environment variables should never be committed to the repository.

---

# 🧪 Testing & Evaluation

The system can be evaluated using:

### Functional Testing

* User registration
* Login
* Issue reporting
* Image upload
* Issue tracking
* Admin status updates
* Resolution evidence upload
* Citizen verification
* Issue reopening

### Performance

* Page load time
* Database response time
* Image upload performance
* API response time

### Usability

* Ease of issue reporting
* Dashboard usability
* Navigation
* Mobile responsiveness
* Verification workflow clarity

### Reliability

* Data persistence
* Authentication reliability
* Issue lifecycle consistency
* Verification accuracy

---

# 🌍 SDG Alignment

JanDrishti supports:

### SDG 11 — Sustainable Cities and Communities

The project promotes:

* Citizen participation
* Better civic issue reporting
* Transparent issue tracking
* Community involvement
* Improved accountability
* Sustainable urban management

---

# 🚀 Future Scope

Potential future improvements include:

* Mobile application
* Push notifications
* Email notifications
* AI-assisted issue categorization
* Duplicate issue detection
* Automatic image analysis
* Heatmaps for civic problems
* Advanced analytics
* Government department integration
* Multilingual support
* Public issue transparency portal
* Citizen reputation / contribution system
* Predictive identification of recurring civic issues

---

# 📂 Project Structure

```text
JanDrishti/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── layouts/
│   │
│   ├── services/
│   │
│   ├── hooks/
│   │
│   ├── lib/
│   │   └── supabaseClient.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 📈 Project Status

### Current Stage

🟡 **Development**

The current repository contains the initial React/Vite project structure and Supabase client configuration.

### Development Roadmap

```text
[x] Project Setup
[x] React + Vite Setup
[x] GitHub Repository
[x] Supabase Client Setup

[ ] Authentication
[ ] User Profiles
[ ] Citizen Dashboard
[ ] Admin Dashboard
[ ] Issue Reporting
[ ] Issue Management
[ ] Image Upload
[ ] Issue Status Workflow
[ ] Resolution Evidence
[ ] Citizen Verification
[ ] Issue Reopening
[ ] Interactive Map
[ ] Analytics Dashboard
[ ] Testing
[ ] Deployment
```

---

# 👥 Team

**JanDrishti Development Team**

> Building technology for more transparent and participatory civic management.

---

# 📄 License

This project is currently being developed as an academic/project initiative.

---

## ⭐ JanDrishti

**Report. Resolve. Verify.**

A civic issue is not truly resolved until the citizen can verify it.
