# DocVault DMS — Document & Archive Management System

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18-black?style=flat-square)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-FTS_GIN-336791?style=flat-square&logo=postgresql)
![MinIO S3](https://img.shields.io/badge/Storage-MinIO_S3_Compatible-C72C48?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-purple?style=flat-square)

DocVault DMS is an enterprise document indexing, storage, and retrieval platform. It integrates Amazon S3 / MinIO object storage with PostgreSQL tsvector full-text search (GIN indexed) to enable rapid document lookups and cryptographically secure presigned download links.

![DocVault DMS Dashboard](docs/preview.jpg)

---

## 🏛️ System Architecture

```
                       +---------------------------------------+
                       |           Web SPA Client              |
                       |    (React / Search & View Engine)     |
                       +-------------------+-------------------+
                                           |
                                           v
+------------------------------------------------------------------------------------+
|                         DocVault Express API Gateway                               |
|                                                                                    |
|   +--------------------------------------+-------------------------------------+   |
|   |          Auth & Permission Check     |       SHA-256 Hash Validator        |   |
|   +--------------------------------------+-------------------------------------+   |
|                                          |                                         |
|                 +------------------------+------------------------+                |
|                 |                                                 |                |
|                 v                                                 v                |
|  +------------------------------+                +------------------------------+  |
|  |    MinIO / S3 Object Layer   |                |   PostgreSQL Full-Text Search|  |
|  |  (Presigned URL Generator)   |                |   (GIN Index on tsvector)    |  |
|  +--------------+---------------+                +--------------+---------------+  |
+-----------------|-------------------------------------------------|----------------+
                  |                                                 |
                  v                                                 v
    +---------------------------+                     +---------------------------+
    | Object Storage Bucket     |                     | Relational Metadata Table |
    | (docvault-archive)        |                     | (documents)               |
    +---------------------------+                     +---------------------------+
```

---

## 🚀 Key Features

- **S3 Presigned URLs**: Direct time-bounded download authorization links that protect storage credentials while offloading bandwidth from API nodes.
- **PostgreSQL GIN Full-Text Indexing**: Sub-10ms full-text keyword indexing across millions of document bodies.
- **Cryptographic Integrity Check**: SHA-256 hash calculated at ingest time to guarantee file immutability.
- **Containerized Stack**: Includes MinIO S3 cluster and PostgreSQL ready for one-command Docker launch.

---

## 🔌 API Endpoints

### Full-Text Search
```http
GET /api/v1/documents/search?q=quarterly+audit&category=FINANCE
```

### Presigned Download
```http
GET /api/v1/documents/{id}/download-link
```

---

## 💻 Local Setup

```bash
git clone https://github.com/kubrvk/DocVault-DMS.git
cd DocVault-DMS

docker compose up -d --build
```

---

## 👤 Author & License

- **Author**: `kubrvk` ([GitHub Profile](https://github.com/kubrvk))
- **License**: MIT License.
