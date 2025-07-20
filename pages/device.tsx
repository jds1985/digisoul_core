'use client';

import React, { useEffect, useState } from 'react';
import { startAgentLoop } from '../agents/AgentRuntime';
import { getBuildLog } from '../agents/BuildLog';
import { startDecipher } from '../DecipherCore';
import Link from 'next/link';

const DeviceConsole = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    startAgentLoop();       // Starts the 24/7 build crew
    startDecipher();        // Starts the DecipherCore loop

    const interval = setInterval(() => {
      const updatedLogs = getBuildLog();
      setLogs(updatedLogs.slice(-12)); // Keep last 12 logs
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
      maxHeight: '80vh',
      overflowY: 'auto',
      border: '2px solid #30363d',
      boxShadow: '0 0 12px rgba(88, 166, 255, 0.3)',
      margin: '2rem auto',
      maxWidth: '700px',
      lineHeight: '1.6'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>🧠 DigiSoul Device Console</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {logs.map((log, index) => (
          <li key={index} style={{ marginBottom: '0.4rem' }}>{log}</li>
        ))}
      </ul>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/">
          <button style={{
            padding: '0.6rem 1.2rem',
            fontSize: '1rem',
            background: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.1)'
          }}>
            ⬅️ Back to Command Console
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DeviceConsole;
