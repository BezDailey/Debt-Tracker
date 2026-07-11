import express from 'express';
import cors from 'cors';

const app = express();
// API_PORT pins the API's port in dev (independent of the frontend's PORT);
// PORT is the fallback so production hosts (e.g. Heroku) can assign one.
const PORT = Number(process.env.API_PORT ?? process.env.PORT) || 3001;

// Allow the frontend (a different origin in dev) to call this API directly.
app.use(cors());
// Parse incoming JSON request bodies into req.body.
app.use(express.json());

// Health check — a trivial endpoint the frontend hits to prove the wiring works.
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'debt-tracker-api' });
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
