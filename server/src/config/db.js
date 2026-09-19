const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://docvault_user:docvault_secure_password@localhost:5434/docvault_db'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};
