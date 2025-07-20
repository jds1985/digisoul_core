import AgentLog from '@/components/AgentLog';
import AgentListPanel from '@/components/AgentListPanel';
import SystemStatus from '@/components/SystemStatus';

export default function CommandConsole() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#0c0c0c', color: '#00ffcc' }}>
      <aside style={{ width: '300px', borderRight: '1px solid #222', padding: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Agent Roster</h2>
        <AgentListPanel />
      </aside>

      <main style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
        <SystemStatus />
        <h1 style={{ fontSize: '2rem', margin: '1rem 0' }}>Live Command Console</h1>
        <AgentLog />
      </main>
    </div>
  );
}
