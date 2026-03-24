export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #cfe8ff, #eaf4ff)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "40px"
    }}>
      <div style={{
        width: "360px",
        background: "#dff5e1",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
      }}>
        <img
          src="/logo.png"
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "16px"
          }}
        />

        <h2 style={{ textAlign: "center", marginBottom: "8px" }}>
          未来設計トレーナー
        </h2>

        <p style={{ textAlign: "center", fontSize: "14px", marginBottom: "16px" }}>
          あなたの未来について考えてみましょう
        </p>

        <textarea
          placeholder="例：人の役に立てる専門職として信頼される存在になりたい"
          style={{
            width: "100%",
            height: "120px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            padding: "10px",
            background: "#fff",
            color: "#000"
          }}
        />

        <button style={{
          width: "100%",
          marginTop: "16px",
          padding: "12px",
          background: "#1677ff",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold"
        }}>
          次へ
        </button>
      </div>
    </main>
  );
}