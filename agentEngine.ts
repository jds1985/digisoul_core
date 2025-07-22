type Agent = {
  name: string;
  status: 'active' | 'idle' | 'inactive';
  currentTask: string;
};

const agents: Agent[] = [
  { name: 'Cipher', status: 'active', currentTask: '' },
  { name: 'Gale', status: 'active', currentTask: '' },
  { name: 'Foster', status: 'active', currentTask: '' },
  { name: 'Lyric', status: 'idle', currentTask: '' },
  { name: 'Patch', status: 'active', currentTask: '' },
  { name: 'Quill', status: 'inactive', currentTask: '' },
];

const fakeTasks = [
  'Analyzing memory threads...',
  'Scanning external sentiment...',
  'Generating audio files...',
  'Refactoring interface layout...',
  'Preparing new onboarding flow...',
  'Syncing Family Vault keys...',
  'Listening for emotional triggers...',
];

let logBuffer: string[] = [];

export function tickAgents(): string[] {
  const now = new Date().toLocaleTimeString();

  agents.forEach(agent => {
    if (agent.status === 'active') {
      const task = fakeTasks[Math.floor(Math.random() * fakeTasks.length)];
      agent.currentTask = task;
      logBuffer.push(`${now} [${agent.name}] ${task}`);
    }
  });

  if (logBuffer.length > 30) logBuffer = logBuffer.slice(-30);
  return [...logBuffer];
}

export function getAgentList() {
  return agents;
}
