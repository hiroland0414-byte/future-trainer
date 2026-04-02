"use client";

import { useEffect, useState } from "react";

export default function PrintPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("print_data");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  if (!data) {
    return <div style={{ padding: 40 }}>データがありません</div>;
  }

  const LP_URL =
    process.env.NEXT_PUBLIC_LP_URL || "https://kc-lp.vercel.app";

  return (
    <main
      style={{
        padding: 40,
        background: "#fff",
        color: "#000",
        fontFamily: "sans-serif",
        lineHeight: 1.8,
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>
        トレーニング振り返りシート
      </h1>

      {/* ===== 質問＋回答 ===== */}
      {data.questions.map((q: string, i: number) => (
        <section
          key={i}
          style={{
            marginBottom: 40,
            pageBreakInside: "avoid",
          }}
        >
          <div style={{ fontWeight: 900, marginBottom: 8 }}>
            【質問 {i + 1}】
          </div>

          <div
            style={{
              padding: 10,
              background: "#f1f5f9",
              borderRadius: 6,
              marginBottom: 10,
            }}
          >
            {q}
          </div>

          <div style={{ fontWeight: 900, marginBottom: 8 }}>
            【回答】
          </div>

          <div
            style={{
              minHeight: 80,
              padding: 12,
              border: "1px solid #ccc",
              borderRadius: 6,
              whiteSpace: "pre-wrap",
            }}
          >
            {data.answers[i] || "（未入力）"}
          </div>

          {/* 振り返り欄 */}
          <div style={{ marginTop: 10, fontSize: 12 }}>
            【振り返りメモ】
          </div>

          <div
            style={{
              height: 40,
              borderBottom: "1px dashed #aaa",
              marginTop: 6,
            }}
          />
        </section>
      ))}

      {/* ===== 操作ボタン ===== */}
      <div
        className="no-print"
        style={{
          marginTop: 40,
          display: "flex",
          gap: 10,
          justifyContent: "center",
        }}
      >
        {/* 戻る */}
        <button
          onClick={() => {
            window.location.href = LP_URL;
          }}
          style={{
            padding: "12px 24px",
            borderRadius: 10,
            background: "#1677ff",
            color: "#fff",
            border: "none",
            fontWeight: 700,
          }}
        >
          アプリ選択へ戻る
        </button>

        {/* PDF保存 */}
        <button
          onClick={() => window.print()}
          style={{
            padding: "12px 24px",
            borderRadius: 10,
            background: "#16a34a",
            color: "#fff",
            border: "none",
            fontWeight: 700,
          }}
        >
          PDFとして保存
        </button>
      </div>

      {/* 印刷制御 */}
      <style>
        {`
          @media print {
            .no-print {
              display: none;
            }
          }
        `}
      </style>
    </main>
  );
}