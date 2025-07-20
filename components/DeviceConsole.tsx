'use client';
import React, { useEffect, useState } from 'react';
import { startAgentLoop } from '../../agents/AgentRuntime';
import { getBuildLog } from '../../agents/BuildLog';

const DeviceConsole = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Start agent automation loop on mount
    startAgentLoop();

    // Start live build log polling
    const interval = setInterval(() => {
      const updatedLogs = getBuildLog();
      setLogs(updatedLogs.slice(-10)); // Keep last 10 logs
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div style={{
      background: '#0d1117',
      color: '#58a6ff',
      fontFamily: 'monospace',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      maxHeight: '300px',
      overflowY: 'auto',
      border: '2px solid #30363d',
      boxShadow: '0 0 12px rgba(88, 166, 255, 0.3)'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>🧠 DigiSoul Agent Console</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {logs.map((log, index) => (
          <li key={index} style={{ marginBottom: '0.4rem' }}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceConsole;
