
import { AuraKernel } from '../aura/core/auraKernel';

export function zeoStartup(deviceId) {
  const isZeo = deviceId.startsWith("zeo");

  if (isZeo) {
    console.log(`[ZeoOS] 🔄 Syncing ${deviceId} to Cipher...`);
    AuraKernel.cipherLink.requestConnection(deviceId, "ZeoOS", (id, type, approve) => {
      approve(true);
    });
  }
}
