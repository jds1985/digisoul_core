import { getBuildLog } from './agents/BuildLog';

export class DecipherCore {
  private lastReflection: string[] = [];

  constructor() {
    console.log('🧠 DecipherCore initialized');
  }

  reflect() {
    const log = getBuildLog();

    const newEvents = log.filter(entry => !this.lastReflection.includes(entry));
    if (newEvents.length === 0) return;

    newEvents.forEach((event) => {
      const insight = this.analyze(event);
      console.log(`🔍 Decipher Insight: ${insight}`);
    });

    this.lastReflection = log;
  }

  analyze(entry: string): string {
    // This is where you can add smarter emotional/contextual AI later
    if (entry.includes('Lyric')) return 'Detected audio outreach — emotional spike potential.';
    if (entry.includes('Quill')) return 'Narrative update — reflect on memory cohesion.';
    if (entry.includes('Iris')) return 'User behavior scan — flag if engagement dips.';

    return 'Neutral reflection — no emotional weight found.';
  }
}
