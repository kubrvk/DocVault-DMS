import React, { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  const [docs, setDocs] = useState([
    { id: '1', title: 'Q3 Enterprise Architecture Report', filename: 'arch_report_q3.pdf', size: '2.4 MB', category: 'TECHNICAL' },
    { id: '2', title: 'Statutory Tax Audit 2025', filename: 'tax_audit_2025.pdf', size: '1.8 MB', category: 'FINANCE' },
    { id: '3', title: 'Security Pen-Test Summary', filename: 'pentest_final.pdf', size: '5.1 MB', category: 'SECURITY' }
  ]);

  return (
    <div style={{ background: '#0b0d12', color: '#f8fafc', minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #1e2535', paddingBottom: '1rem' }}>
        <h1 style={{ color: '#4a9eff', margin: 0 }}>DocVault DMS</h1>
        <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0' }}>S3-Backed Document Management &amp; Full-Text Search Engine</p>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <input
          type="text"
          placeholder="Search full document contents (PostgreSQL FTS)..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ width: '100%', padding: '0.85rem', background: 'rgba(17,20,24,0.8)', border: '1px solid #2d3748', borderRadius: '8px', color: '#fff', marginBottom: '1.5rem' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {docs.map(doc => (
            <div key={doc.id} style={{ background: 'rgba(17,20,24,0.85)', border: '1px solid #1e2535', borderRadius: '8px', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.05rem' }}>{doc.title}</h3>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{doc.filename} • {doc.size} • <span style={{ color: '#4a9eff' }}>{doc.category}</span></span>
              </div>
              <button style={{ padding: '0.5rem 1rem', background: 'rgba(74,158,255,0.15)', color: '#4a9eff', border: '1px solid #4a9eff', borderRadius: '4px', cursor: 'pointer' }}>
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
