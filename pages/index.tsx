// pages/index.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function CommandConsole() {
  const [deviceID, setDeviceID] = useState('');
  const [deviceType, setDeviceType] = useState('');

  const handleRegister = () => {
    console.log(`✅ Registered device: ${deviceID} (${deviceType})`);
    // Optional: Save to Firebase or backend
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1>🧠 DigiSoul Command Console</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>🔐 Approve New Device</h2>
        <input
          type="text"
          placeholder="Device ID"
          value={deviceID}
          onChange={(e) => setDeviceID(e.target.value)}
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Device Type"
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <button onClick={handleRegister} style={{ padding: '0.5rem 1rem' }}>Approve + Register</button>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>📸 Scan to Link Device</h2>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?data=vault-phone-001&type=ZeoOS&size=150x150"
          alt="QR Code"
        />
        <p><strong>ID:</strong> vault-phone-001</p>
        <p><strong>Type:</strong> ZeoOS</p>
      </section>

      <section>
        <h2>🔌 Connected Devices</h2>
        <p>No devices linked yet.</p>
      </section>

      <Link href="/device">
        <button style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          background: '#58a6ff',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          boxShadow: '0 0 10px rgba(88, 166, 255, 0.5)'
        }}>
          🧠 View Device Console
        </button>
      </Link>
    </div>
  );
}
