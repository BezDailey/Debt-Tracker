import { useEffect, useState } from 'react';

type Health = { status: string; service: string };

export default function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Health) => setHealth(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Debt Tracker</h1>
      <p>Frontend + backend scaffold is running.</p>

      <h2>API health check</h2>
      {error && <p style={{ color: 'crimson' }}>Error: {error}</p>}
      {!error && !health && <p>Checking…</p>}
      {health && (
        <pre style={{ background: '#f4f4f5', padding: '1rem', borderRadius: 8 }}>
          {JSON.stringify(health, null, 2)}
        </pre>
      )}
    </main>
  );
}
