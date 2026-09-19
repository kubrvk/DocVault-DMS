const express = require('express');
const router = express.Router();
const multer = require('multer');
const crypto = require('crypto');
const db = require('../config/db');
const { s3Client, BUCKET, generatePresignedDownloadUrl } = require('../config/s3');
const { PutObjectCommand } = require('@aws-sdk/client-s3');

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } });

// Full-text search endpoint
router.get('/search', async (req, res) => {
  try {
    const { q, category } = req.query;
    let sql = 'SELECT id, title, original_filename, file_size_bytes, mime_type, category, created_at FROM documents WHERE 1=1';
    const params = [];

    if (q) {
      params.push(q);
      sql += ` AND tsv_content @@ plainto_tsquery('english', $${params.length})`;
    }
    if (category) {
      params.push(category);
      sql += ` AND category = $${params.length}`;
    }

    sql += ' ORDER BY created_at DESC LIMIT 50';
    const result = await db.query(sql, params);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Download link generator
router.get('/:id/download-link', async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await db.query('SELECT s3_key, original_filename FROM documents WHERE id = $1', [id]);
    if (doc.rows.length === 0) return res.status(404).json({ error: 'Document not found' });

    const downloadUrl = await generatePresignedDownloadUrl(doc.rows[0].s3_key);
    res.json({ downloadUrl, filename: doc.rows[0].original_filename });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
