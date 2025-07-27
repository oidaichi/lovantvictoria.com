import React, { useState } from 'react';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      category: "経営存続レベルの課題",
      color: "from-red-500 to-orange-500",
      items: [
        {
          title: "人材代替・業務自動化",
          description: "AIチャットボット・文書作成・検査システムで従業員1-2名分の業務を代替",
          results: "年間100万円～500万円の人件費削減"
        },
        {
          title: "デジタルリープ戦略",
          description: "BI×AI連携で大企業レベルのデータ分析・意思決定支援を低コスト実現",
          results: "売上30%向上・廃棄ロス50%削減"
        },
        {
          title: "最先端企業への変革",
          description: "全社AI研修・業界特化AI導入で次世代承継魅力向上",
          results: "承継候補者の企業への誇り向上"
        }
      ]
    },
    {
      category: "日常業務レベルの課題",
      color: "from-blue-500 to-purple-500",
      items: [
        {
          title: "業務ナレッジのAI化",
          description: "熟練者判断をAI再現・属人化排除で業務継続性確保",
          results: "キーパーソン依存度90%削減"
        },
        {
          title: "アナログ業務完全デジタル化",
          description: "Excel自動化・画像検査・議事録生成で生産性3倍向上",
          results: "業務時間70%短縮・精度向上"
        },
        {
          title: "AI顧客対応システム",
          description: "24時間チャットボット・音声認識で対応品質標準化",
          results: "顧客満足度20-40%改善"
        }
      ]
    },
    {
      category: "財務・資金レベルの課題",
      color: "from-emerald-500 to-teal-500",
      items: [
        {
          title: "AI効率化による収益改善",
          description: "人件費削減・品質向上・在庫最適化で利益構造根本改善",
          results: "利益率15%向上・年間200万円～1000万円増収"
        },
        {
          title: "低リスク段階的AI導入",
          description: "助成金活用・効果測定・完全伴走で投資失敗リスク排除",
          results: "ROI120-180%達成・投資リスク95%削減"
        },
        {
          title: "企業価値最大化",
          description: "AI先進企業化・業務標準化で承継価値向上",
          results: "企業価値評価30-50%向上"
        }
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            LOVANT VICTORIAの
            <span className="text-gradient">AI戦略的解決策</span>
          </h2>
          <p className="text-xl text-gray-300">
            課題レベル別の包括的AIソリューション
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {solutions.map((solution, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${solution.color} text-white shadow-lg`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {solution.category}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative">
          {solutions.map((solution, tabIndex) => (
            <div
              key={tabIndex}
              className={`transition-all duration-500 ${
                activeTab === tabIndex 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solution.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-sm card-hover group"
                  >
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${solution.color} text-white text-sm font-semibold`}>
                        効果: {item.results}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;