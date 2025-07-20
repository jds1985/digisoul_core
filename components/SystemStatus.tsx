import { useEffect, useState } from 'react';

export default function SystemStatus() {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setUptime(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#ccc' }}>
      <div>🧠 Uptime: {Math.floor(uptime / 60)}m {uptime % 60}s</div>
      <div>🔄 Agents: 5 active</div>
      <div>⚡ Cipher Pulse: Stable</div>
    </div>
  );
}
