export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "0.5rem" }}>Time Aware MCP Server</h1>
      <p style={{ color: "#666", marginBottom: "2rem", textAlign: "center" }}>
        Makes ChatGPT Plus time-aware across all conversations.
      </p>
      <div
        style={{
          background: "#f5f5f5",
          padding: "1.5rem 2rem",
          borderRadius: "8px",
          maxWidth: "500px",
        }}
      >
        <p style={{ marginBottom: "0.5rem", fontWeight: 600 }}>
          MCP Endpoint:
        </p>
        <code
          style={{
            fontSize: "0.9rem",
            wordBreak: "break-all",
          }}
        >
          /api/mcp
        </code>
        <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#666" }}>
          Use your deployment URL + /api/mcp as the Connector URL in ChatGPT:
          Settings → Connectors → Create
        </p>
      </div>
    </main>
  );
}
