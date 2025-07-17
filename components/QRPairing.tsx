import QRCode from 'react-qr-code';
import React from 'react';

export default function QRPairing({ deviceId, deviceType }) {
  const payload = {
    id: deviceId,
    type: deviceType,
    timestamp: Date.now()
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-2">📷 Scan to Link Device</h3>
      <QRCode value={JSON.stringify(payload)} size={160} />
      <p className="text-sm mt-2">ID: {deviceId}</p>
      <p className="text-sm">Type: {deviceType}</p>
    </div>
  );
}
