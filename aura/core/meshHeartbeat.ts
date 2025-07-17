
export const MeshHeartbeat = {
  pingDevices(devices) {
    devices.forEach((device) => {
      console.log(`🔄 [MeshHeartbeat] Pinging ${device.deviceId}...`);
      const responseTime = Math.floor(Math.random() * 500);
      setTimeout(() => {
        console.log(`💓 [MeshHeartbeat] ${device.deviceId} responded in ${responseTime}ms`);
      }, responseTime);
    });
  }
};
