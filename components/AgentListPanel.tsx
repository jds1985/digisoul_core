const agents = [
  { name: 'Cipher', status: 'active' },
  { name: 'Gale', status: 'active' },
  { name: 'Foster', status: 'active' },
  { name: 'Lyric', status: 'idle' },
  { name: 'Patch', status: 'active' },
  { name: 'Quill', status: 'inactive' },
];

export default function AgentListPanel() {
  return (
    <ul>
      {agents.map((agent, index) => (
        <li key={index} style={{ marginBottom: '0.5rem' }}>
          <strong>{agent.name}</strong> — 
          <span style={{ color: agent.status === 'active' ? '#0f0' : '#888' }}> {agent.status}</span>
        </li>
      ))}
    </ul>
  );
}
