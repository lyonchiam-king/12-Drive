import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

// Ensure data directory exists for spreadsheet export
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const csvFilePath = path.join(dataDir, 'enquiries.csv');
if (!fs.existsSync(csvFilePath)) {
  const header = 'Timestamp,Name,Phone,Postcode,Experience Level,Preferred Time,Notes\n';
  fs.writeFileSync(csvFilePath, header, 'utf8');
}

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', business: '12 Drive Manchester M18' });
});

// Enquiries endpoint - Appends to CSV spreadsheet & logs enquiry
app.post('/api/enquiries', (req, res) => {
  try {
    const { name, phone, postcode, experienceLevel, preferredTime, notes } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and Phone number are required.' });
    }

    const timestamp = new Date().toISOString();
    const cleanName = (name || '').replace(/,/g, ' ');
    const cleanPhone = (phone || '').replace(/,/g, ' ');
    const cleanPostcode = (postcode || 'M18').replace(/,/g, ' ');
    const cleanExp = (experienceLevel || 'Not specified').replace(/,/g, ' ');
    const cleanTime = (preferredTime || 'Not specified').replace(/,/g, ' ');
    const cleanNotes = (notes || '').replace(/[\r\n,]/g, ' ');

    const row = `"${timestamp}","${cleanName}","${cleanPhone}","${cleanPostcode}","${cleanExp}","${cleanTime}","${cleanNotes}"\n`;

    fs.appendFileSync(csvFilePath, row, 'utf8');

    console.log(`[12 Drive Enquiry Recorded] ${timestamp} - ${cleanName} (${cleanPhone})`);

    return res.status(200).json({
      success: true,
      message: 'Enquiry successfully logged to spreadsheet.',
      timestamp,
      enquiry: { name, phone, postcode, experienceLevel, preferredTime },
    });
  } catch (err: any) {
    console.error('Error recording enquiry:', err);
    return res.status(500).json({ error: 'Internal server error recording enquiry.' });
  }
});

// Downloadable spreadsheet for owner
app.get('/api/enquiries/export.csv', (_req, res) => {
  if (fs.existsSync(csvFilePath)) {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="12_Drive_Enquiries_M18.csv"');
    return res.sendFile(csvFilePath);
  }
  return res.status(404).send('No enquiries recorded yet.');
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`12 Drive Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
