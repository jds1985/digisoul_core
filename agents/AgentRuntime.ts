import { AgentConfig } from './AgentConfig';
import { Iris, Lyric, Quill } from './index';
import { Agent } from './types';

// Explicitly type the agents as Agent
const allAgents: Record<string, Agent> = {
  Iris: Iris,
  Lyric: Lyric,
  Quill: Quill
};

export const runAgents = () => {
  Object.entries(AgentConfig).forEach(([name, config]) => {
    if (config.active && allAgents[name]) {
      console.log(`🟢 Running agent: ${name}`);
      allAgents[name].activate();
    } else {
      console.log(`⚪ Agent ${name} is inactive or not found`);
    }
  });
};
