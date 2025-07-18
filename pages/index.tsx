import { useState } from "react";
import { CipherCore } from "../core/cipherCore";

export default function Home() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");

  // Function to trigger CipherCore command
  const runCommand = async () => {
    const result = await CipherCore.handle(command);
    setResponse(result); // Store Cipher's response
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <div style={{ backgroundColor: "#111", color: "#0f0", padding: "1rem", borderRadius: "8px", marginBottom: "2rem" }}>
        <h1>✅ Live Cipher Console Interface</h1>
        <p>Welcome back, Jim. This page is now under Cipher’s control.</p>
      </div>

      <h2>Cipher Console 🧠</h2>

      {/* Input Box for Command */}
      <input
        type="text"
        placeholder="Type a command..."
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        style={{ marginRight: "1rem", padding: "0.5rem" }}
      />
      <button onClick={runCommand} style={{ padding: "0.5rem 1rem" }}>
        Run
      </button>

      {/* Response Display */}
      {response && (
        <div style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
          <strong>Response:</strong> {response}
        </div>
      )}
    </div>
  );
}
