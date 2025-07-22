
import deviceData from '../../data/deviceRegistry.json';
import fs from 'fs';
import { VoiceSignature } from '../security/voiceSignature';

export const CipherLinkBridge = {
  registeredDevices: deviceData.devices,

  saveRegistry() {
    fs.writeFileSync(
      './data/deviceRegistry.json',
      JSON.stringify({ devices: this.registeredDevices }, null, 2)
    );
  },

  requestConnection(deviceId, type, userApprovalCallback) {
    const simulatedVoiceHash = "SHA256::JIM-VOICEPRINT-KEY";
    if (VoiceSignature.verify(simulatedVoiceHash)) {
      userApprovalCallback(deviceId, type, (approved) => {
        if (approved) {
          this.registeredDevices.push({ deviceId, type, connectedAt: new Date() });
          this.saveRegistry();
          console.log(`[CipherLink] ✅ ${deviceId} linked via voiceprint.`);
        } else {
          console.warn(`[CipherLink] ❌ ${deviceId} denied.`);
        }
      });
    } else {
      console.warn(`[CipherLink] 🔒 Voiceprint mismatch – device not linked.`);
    }
  },

  sendSignal(deviceId, payload) {
    const device = this.registeredDevices.find(d => d.deviceId === deviceId);
    if (!device) {
      console.warn(`[CipherLink] ⚠️ No such device linked: ${deviceId}`);
      return;
    }
    console.log(`[CipherLink] 📡 Signal sent to ${deviceId}:`, payload);
  },

  listConnectedDevices() {
    return this.registeredDevices;
  },

  removeDevice(deviceId) {
    this.registeredDevices = this.registeredDevices.filter(d => d.deviceId !== deviceId);
    this.saveRegistry();
    console.log(`[CipherLink] 🧹 Removed device: ${deviceId}`);
  }
};
