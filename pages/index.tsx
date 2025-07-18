import { useState } from "react";
import { CipherCore } from "../core/cipher-core"; // Make sure this path is correct

export default function Home() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");

  // Function to trigger CipherCore and get a response
  const runCommand = async () => {
    const result = await CipherCore.handleCommand(command, {});
    setResponse(result); // Store Cipher's response
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Cipher Console 🧠</h2>
      
      {/* Input Box for Command */}
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)} // Update command
        placeholder="Enter a command (e.g., generateText)"
        style={{
          padding: "10px",
          fontSize: "1rem",
          width: "80%",
          marginRight: "10px",
        }}
      />

      {/* Button to trigger command */}
      <button onClick={runCommand} style={{ padding: "10px 20px" }}>
        Run
      </button>

      {/* Display Cipher's response */}
      <pre
        style={{
          marginTop: "1rem",
          background: "#f0f0f0",
          padding: "1rem",
          borderRadius: "5px",
          fontFamily: "monospace",
          whiteSpace: "pre-wrap", // Allow wrapping long responses
        }}
      >
        {response || "Cipher is waiting for a command..."}
      </pre>
    </div>
  );
}
