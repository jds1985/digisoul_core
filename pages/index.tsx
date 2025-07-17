
import DeviceConsole from '../components/DeviceConsole';
import DeviceApproval from '../components/DeviceApproval';
import QRPairing from '../components/QRPairing';

export default function Home() {
  return (
    <div className="p-8 bg-black min-h-screen text-white space-y-8">
      <h1 className="text-3xl font-bold">🧠 DigiSoul Command Console</h1>

      <DeviceApproval onApprove={(id, type) => {
        console.log(`[UI] Approved device: ${id} (${type})`);
        // Add real linkage logic here if needed
      }} />

      <QRPairing deviceId="vault-phone-001" deviceType="ZeoOS" />

      <DeviceConsole />
    </div>
  );
}
