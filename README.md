# DocVault-DMS

<img align="left" width="40%" src="https://raw.githubusercontent.com/kubrvk/portfolio/main/img/galeri/site/8.jpg"/>

<h3><a href="https://github.com/kubrvk/DocVault-DMS"><img src="https://img.shields.io/badge/GitHub-kubrvk%2FDocVault-DMS-000000?style=flat-square&logo=github&logoColor=white" height="25"/></a></h3>

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badges&logo=react&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badges&logo=nodedotjs&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badges&logo=postgresql&logoColor=white) ![S3/MinIO](https://img.shields.io/badge/MinIO_S3-C72C48?style=for-the-badges&logo=minio&logoColor=white)

<br>

Enterprise document management system with S3-compatible storage, full-text search, and version control.

<br clear="left"/>

---

## Technical Details

| Component | Specification |
|---|---|
| Backend Architecture | Node.js & Express REST API |
| Object Storage | AWS S3 / MinIO (Presigned Secure Download URLs) |
| Database | PostgreSQL with Full-Text Search (tsvector & tsquery) |
| Authentication | JWT (JSON Web Tokens) with Fine-Grained Permissions |
| Frontend UI | React, In-Browser PDF Previewing & Tagging System |

---

## Code Overview & Architecture

```text
DocVault-DMS/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Document upload, search & versioning
│   │   ├── middleware/    # Auth token verification & file validation
│   │   ├── models/        # PostgreSQL schema models
│   │   └── storage/       # S3 / MinIO client configuration
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/    # PDF Viewer, SearchBar, DocumentGrid
│   │   └── pages/         # Archive dashboard & document details
│   └── package.json
└── README.md
```

---

## License & Author

Developed by **[Beraat Yetkin](https://github.com/kubrvk)**. All rights reserved.
