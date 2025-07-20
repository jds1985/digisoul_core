import { useEffect, useState } from 'react';

const fakeLogs = [
  "[Cipher] Booting Codex Runtime...",
  "[Gale] Scanning external lead pools...",
  "[Foster] Warming new outreach thread...",
  "[Lyric] Generating 14 voice files...",
  "[Patch] Refactoring UI structure...",
  "[Cipher] Memory Scaffold aligned.",
];

export default function AgentLog() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = fakeLogs[Math.floor(Math.random() * fakeLogs.length)];
      setLogs(prev => [...prev.slice(-20), `${new Date().toLocaleTimeString()} ${next}`]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: '#111', padding: '1rem', borderRadius: '8px' }}>
      <h3 style={{ marginBottom: '1rem' }}>Agent Activity Log</h3>
      <div style={{ maxHeight: '500px', overflowY: 'auto', fontFamily: 'monospace' }}>
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
    </div>
  );
}
