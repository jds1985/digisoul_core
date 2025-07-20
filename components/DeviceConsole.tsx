'use client';
import React, { useEffect, useState } from 'react';
import { startAgentLoop } from '../../agents/AgentRuntime';
import { getBuildLog } from '../../agents/BuildLog';
import { startDecipher } from '../../DecipherCore';

const DeviceConsole = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Start Cipher's crew
    startAgentLoop();

    // Start DecipherCore reflection
    startDecipher();

    // Build log refresh loop
    const interval = setInterval(() => {
      const updatedLogs = getBuildLog();
      setLogs(updatedLogs.slice(-12)); // Show last 12 logs
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
      maxHeight: '400px',
      overflowY: 'auto',
      border: '2px solid #30363d',
      boxShadow: '0 0 12px rgba(88, 166, 255, 0.3)',
      lineHeight: '1.6'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>🧠 DigiSoul Device Console</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {logs.map((log, index) => (
          <li key={index} style={{ marginBottom: '0.4rem' }}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceConsole;
