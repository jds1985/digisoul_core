// pages/device.tsx
'use client';
import React from 'react';
import DeviceConsole from '../components/DeviceConsole';

export default function DevicePage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>🖥️ Device Console</h1>
      <p>Real-time activity feed from Cipher and agent builders.</p>
      <DeviceConsole />
      <a href="/" style={{ marginTop: '2rem', display: 'inline-block' }}>
        🔙 Back to Command Console
      </a>
    </div>
  );
}
