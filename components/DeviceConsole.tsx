import React, { useEffect, useState } from 'react';
import { startAgentLoop } from '../agents/AgentRuntime';
import { getBuildLog } from '../agents/BuildLog';
import { startDecipher } from '../DecipherCore';
import Link from 'next/link';

const DeviceConsole = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    startAgentLoop();
    startDecipher();

    const interval = setInterval(() => {
      const updatedLogs = getBuildLog();
      setLogs(updatedLogs.slice(-12));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: '#0d1117',
      color: '#58a6ff',
      fontFamily: 'monospace',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      minHeight: '100vh',
      overflowY: 'auto',
      border: '2px solid #30363d',
      boxShadow: '0 0 12px rgba(88, 166, 255, 0.3)',
      lineHeight: '1.6'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>🖥️ DigiSoul Device Console</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {logs.map((log, index) => (
          <li key={index} style={{ marginBottom: '0.4rem' }}>{log}</li>
        ))}
      </ul>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/">
          <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
            🔙 Back to Command Console
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DeviceConsole;
