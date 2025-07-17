import React, { useEffect, useState } from 'react';

export default function DeviceConsole() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch('/data/deviceRegistry.json')
      .then((res) => res.json())
      .then((data) => setDevices(data.devices));
  }, []);

  return (
    <div className="p-4 bg-black text-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">🔌 Connected Devices</h2>
      {devices.length === 0 && <p>No devices linked yet.</p>}
      <ul>
        {devices.map((device, i) => (
          <li key={i} className="mb-2 border-b border-gray-700 pb-2">
            <div>📱 <strong>{device.deviceId}</strong></div>
            <div>Type: {device.type}</div>
            <div>Linked: {new Date(device.connectedAt).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
