
import { taskPool } from './taskPool';
import { memoryLog } from './memoryLog';
import * as agents from '../agents';

export const CipherCore = {
  async handleCommand(command: string, args: any = {}) {
    console.log(`[CipherCore] 🧠 Received command: ${command}`);

    // Log task
    taskPool.add({ command, args, timestamp: new Date().toISOString() });

    // Choose appropriate agent
    let result;
    switch (command) {
      case "generateText":
        result = await agents.Quill.generate(args.prompt);
        break;
      case "generateAudio":
        result = await agents.Lyric.compose(args.text);
        break;
      case "createComponent":
        result = await agents.Iris.createUIComponent(args.name, args.options);
        break;
      default:
        result = `[Cipher] Unknown command: ${command}`;
    }

    // Save result to memory log
    memoryLog.push({ command, args, result, completedAt: new Date().toISOString() });

    return result;
  }
};
