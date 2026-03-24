"use client";

import { useState } from "react";

export default function Home() {
  const questions = [
    "将来どのような人でありたいですか？",
    "大切にしていきたい価値観は何ですか？",
    "その考え方はどのような社会の場面で活かされますか？",
    "これからどんな経験をしてみたいですか？",
    "その機会を広げるためにどんな行動をしますか？",
  ];

  const placeholders = [
    "例：人の役に立てる専門職として信頼される存在になりたい",
    "例：人との信頼関係を大切にしたい",
    "例：患者さんや利用者と関わる現場で活かせる",
    "例：実際の現場を見る経験や、人と関わる活動をしてみたい",
    "例：病院見学やインターンに参加してみる",
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(5).fill(""));
  const [phase, setPhase] = useState<
    "question" | "reflection" | "action" | "finish"
  >("question");

  const [reflection, setReflection] = useState({
    notice: "",
    good: "",
    improve: "",
  });

  const [action, setAction] = useState("");

  const handleChange = (value: string) => {
    const updated = [...answers];
    updated[step] = value;
    setAnswers(updated);
  };

  const next = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setPhase("reflection");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start pt-10 bg-gradient-to-br from-[#0b1e3a] to-[#1e3a5f]">
      
      {/* ===== カード ===== */}
      <div className="w-full max-w-[390px] bg-green-100/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl">

        {/* ===== ロゴ ===== */}
        <div className="mb-4">
          <img
            src="/logo.png"
            alt="K-career"
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* ===== 質問 ===== */}
        {phase === "question" && (
          <>
            <h1 className="text-xl font-bold text-center mb-4 text-green-800">
              未来設計トレーナー
            </h1>

            <p className="text-sm text-green-700 mb-6 text-center">
              あなたの未来について考えてみましょう
            </p>

            <div className="mb-4 text-sm text-green-700">
              Q{step + 1} / 5
            </div>

            <div className="mb-4 font-medium text-green-900">
              {questions[step]}
            </div>

            {/* 入力欄（白） */}
            <textarea
              value={answers[step]}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full h-32 border border-gray-300 rounded-lg p-3 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder={placeholders[step]}
            />

            <button
              onClick={next}
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              次へ
            </button>
          </>
        )}

        {/* ===== 振り返り ===== */}
        {phase === "reflection" && (
          <>
            <h1 className="text-xl font-bold text-center mb-4 text-green-800">
              振り返り
            </h1>

            {["notice", "good", "improve"].map((key, i) => {
              const labels = ["今回の気づき", "良かった点", "改善したい点"];
              const values = [reflection.notice, reflection.good, reflection.improve];

              return (
                <div className="mb-4" key={key}>
                  <p className="text-sm mb-1 text-green-800">{labels[i]}</p>
                  <textarea
                    className="w-full h-24 border border-gray-300 rounded-lg p-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-300"
                    value={values[i]}
                    onChange={(e) =>
                      setReflection({
                        ...reflection,
                        [key]: e.target.value,
                      })
                    }
                    placeholder="自由に書いてみましょう"
                  />
                </div>
              );
            })}

            <button
              onClick={() => setPhase("action")}
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg"
            >
              次へ
            </button>
          </>
        )}

        {/* ===== 行動 ===== */}
        {phase === "action" && (
          <>
            <h1 className="text-xl font-bold text-center mb-4 text-green-800">
              次の行動を考える
            </h1>

            <textarea
              className="w-full h-32 border border-gray-300 rounded-lg p-3 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-300"
              value={action}
              onChange={(e) => setAction(e.target.value)}
              placeholder="例：見学に行く／話を聞く／調べる"
            />

            <button
              onClick={() => setPhase("finish")}
              className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg"
            >
              完了
            </button>
          </>
        )}

        {/* ===== 完了 ===== */}
        {phase === "finish" && (
          <>
            <h1 className="text-xl font-bold text-center mb-4 text-green-800">
              完了しました
            </h1>

            <button
              onClick={() =>
                (window.location.href = "https://kc-lp.vercel.app")
              }
              className="w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              アプリ選択へ戻る
            </button>
          </>
        )}
      </div>
    </div>
  );
}