# DocVault DMS
> Cryptographic Cloud Document Vault • Google Drive & Box Architecture

[![Live Demo](https://img.shields.io/badge/Live_Demo-docvaultdms.web.app-0284c7?style=for-the-badge)](https://docvaultdms.web.app)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Technology](https://img.shields.io/badge/Technology-Vanilla_ES6%2B-yellow?style=for-the-badge)](https://developer.mozilla.org)
[![Interface](https://img.shields.io/badge/Interface-Cloud_Vault_Sidebar-082f49?style=for-the-badge)](https://developer.mozilla.org)
[![Language Support](https://img.shields.io/badge/Language-English_%7C_Turkish-green?style=for-the-badge)](https://docvaultdms.web.app)

---

## Previews

### 1. Cryptographic Document Repository & Cloud Storage
Google Drive / Box-style directory navigation sidebar, live S3 storage quota meter, SHA-256 integrity digests, and document deletion actions:
![DocVault DMS Vault Preview](docs/preview-dashboard.png)

### 2. Zero-Knowledge Cyber Gateway Login Portal
Cyber radial grid background, glassmorphic card, SHA-256 HMAC and AES-256 GCM security status indicators, and clearance tier selector:
![DocVault DMS Login Preview](docs/preview-login.png)

---

## Key Features

### Cryptographic Cloud Vault Architecture
- Cloud Storage Navigation: Left sidebar featuring an active S3 storage capacity card, folder filters (Contracts, Financial Audits, Architecture Projects, Policy & Compliance), and classification levels (Confidential, Restricted, Internal, Public).
- SHA-256 Integrity Verification: Computes cryptographic hash fingerprints for uploaded records and simulates Amazon S3 pre-signed secure download links.
- Zero-Knowledge Security Gateway: Simulates client-side encryption and Hardware Security Module (HSM) clearance authentication.

### Document Deletion & Reactive Storage Quota Reduction
- Prominent delete action on every document record triggering an explicit confirmation dialog.
- Reactive quota reduction: deleting a record immediately reclaims capacity from the S3 storage pool, updates the progress meter, and logs an audit record.
- LocalStorage synchronization ensures purged records remain removed across browser reloads.

### Session Persistence & Zero-Flicker Initialization
- Preserves clearance session across browser refreshes via localStorage.
- Inline authentication check prevents login screen flashes upon page reload.
- Secure sign-out action clears session tokens and restores the cyber gateway.
- Pre-filled credentials with instant role switches (Vault Administrator, Compliance Officer, Legal Counsel, Staff).

### Bilingual Support (English | Turkish)
- Instant language toggle switching all document categories, confidentiality levels, audit records, and modals without page reload.
- Default language is English.

---

## Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| UI & Layout | HTML5, CSS3 Glassmorphism | Frosted glass cards, dark radial cyber grid |
| Business Logic | Vanilla ES6+ JavaScript | Storage quota calculations, SHA-256 digest simulation, filtering |
| Icons | Bootstrap Icons v1.11.3 | Cryptographic and file-type icons |
| Storage | HTML5 localStorage | Encrypted document metadata, audit logs, session state |
| Hosting | Firebase Hosting | Secure HTTPS global edge distribution |

---

## Directory Structure

```
DocVault-DMS/
├── index.html              # Complete single-page application
├── docs/                   # Documentation assets and screenshots
│   ├── preview-dashboard.png # High-resolution repository preview
│   └── preview-login.png     # High-resolution login portal preview
└── README.md               # Project documentation
```

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/kubrvk/DocVault-DMS.git
   cd DocVault-DMS
   ```
2. Open `index.html` directly in your browser:
   ```bash
   start index.html
   ```
3. Alternatively, serve with any local HTTP server:
   ```bash
   npx serve .
   ```
4. Access `http://localhost:3000` in your browser.
   - To bypass login and view the vault directly: `http://localhost:3000/?demo=1`

---

## Live System

- Live URL: [https://docvaultdms.web.app](https://docvaultdms.web.app)
- Direct Dashboard Link: [https://docvaultdms.web.app/?demo=1](https://docvaultdms.web.app/?demo=1)

---

## Author

Developed by Beraat Yetkin
- GitHub: [@kubrvk](https://github.com/kubrvk)
- Repository: [DocVault-DMS](https://github.com/kubrvk/DocVault-DMS)
- Portfolio: [Beraat Yetkin Portfolio](https://github.com/kubrvk/portfolio)
