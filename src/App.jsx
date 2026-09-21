import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";

function App() {
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    testConnection();
  }, []);

  async function testConnection() {
    const { error } = await supabase
      .from("profiles")
      .select("id")
      .limit(1);

    if (error) {
      console.log(error);
      setError(error.message);
      return;
    }

    setConnected(true);
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>JanDrishti</h1>

      {connected && (
        <p style={{ color: "green" }}>
          ✅ Supabase connected successfully!
        </p>
      )}

      {error && (
        <p style={{ color: "red" }}>
          ❌ Supabase connection error: {error}
        </p>
      )}
    </div>
  );
}

export default App;