const express = require('express');
const cors = require('cors');
require('dotenv').config();

const documentRoutes = require('./routes/documents');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/documents', documentRoutes);

app.get('/health', (req, res) => res.json({ status: 'HEALTHY', timestamp: new Date() }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`DocVault DMS listening on port ${PORT}`));
