
export const RemoteCommands = {
  commands: {
    'playMemory': (deviceId, memoryId) => {
      console.log(`🎞️ Playing memory ${memoryId} on ${deviceId}...`);
    },
    'sendPulse': (deviceId, message) => {
      console.log(`📡 Sending pulse to ${deviceId}: "${message}"`);
    },
    'activateAura': (deviceId) => {
      console.log(`🌀 Activating Aura Mode on ${deviceId}`);
    },
    'sleep': (deviceId) => {
      console.log(`💤 Putting ${deviceId} into idle state...`);
    }
  },

  run(command, ...args) {
    const cmd = this.commands[command];
    if (cmd) {
      cmd(...args);
    } else {
      console.warn(`⚠️ Unknown command: ${command}`);
    }
  }
};
