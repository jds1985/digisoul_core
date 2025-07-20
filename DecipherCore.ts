import { getBuildLog } from './BuildLog';

export class DecipherCore {
  private lastReflection: string[] = [];

  constructor() {
    console.log('🧠 DecipherCore initialized');
  }

  reflect() {
    const log = getBuildLog();
    const newEvents = log.filter(entry => !this.lastReflection.includes(entry));

    if (newEvents.length > 0) {
      console.log(`🔍 Reflecting on ${newEvents.length} new events`);
      // You could expand this with analysis or memory hooks
      this.lastReflection = log;
    }
  }
}

// 🧠 Exported function to start the DecipherCore loop
let core: DecipherCore | null = null;

export const startDecipher = () => {
  if (!core) {
    core = new DecipherCore();
    setInterval(() => core?.reflect(), 5000); // Reflect every 5 seconds
  }
};
