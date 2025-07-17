
import { CipherLinkBridge } from './cipherLinkBridge';
import { MeshHeartbeat } from './meshHeartbeat';
import { RemoteCommands } from './remoteCommands';

export const AuraKernel = {
  init() {
    console.log("🔥 AuraKernel initiated");
  },
  cipherLink: CipherLinkBridge,
  heartbeat: MeshHeartbeat,
  remote: RemoteCommands
};
