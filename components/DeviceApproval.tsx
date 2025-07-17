import React, { useState } from 'react';

export default function DeviceApproval({ onApprove }) {
  const [deviceId, setDeviceId] = useState('');
  const [deviceType, setDeviceType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deviceId && deviceType) {
      onApprove(deviceId, deviceType);
      setDeviceId('');
      setDeviceType('');
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
      <h3 className="text-lg font-bold mb-2">🔐 Approve New Device</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Device ID"
          value={deviceId}
          onChange={(e) => setDeviceId(e.target.value)}
          className="w-full p-2 mb-2 bg-gray-800 border border-gray-700 rounded"
        />
        <input
          type="text"
          placeholder="Device Type"
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
          className="w-full p-2 mb-2 bg-gray-800 border border-gray-700 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
        >
          Approve + Register
        </button>
      </form>
    </div>
  );
}
