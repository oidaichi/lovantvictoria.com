import React from 'react';

const Strengths = () => {
  const competitors = [
    {
      company: "A社",
      scope: "部門横断のITオペレーション、カスタマーサービスなど幅広く",
      tech: "独自AIプラットフォーム「watsonx Granite」を中心に自社＋他社モデルを併用",
      approach: "大規模プロジェクト向けにテンプレート化＆自動化ツールを提供",
      industry: "金融・製造・小売などグローバル大手中心",
      support: "プロジェクト納品後はオプション契約が必要"
    },
    {
      company: "B社", 
      scope: "生成AI専門タスクフォースによる参入判断～ガバナンス構築まで、監査・税務・法務と連携",
      tech: "AI利活用のリスク管理・ガバナンス強化に注力、研究機関との共同研究実績あり",
      approach: "法務・税務・M&Aなど専門領域と組み合わせた横断的支援",
      industry: "グローバルCEO意識調査などで得た知見を基に、業界横断的にガバナンス構築",
      support: "プロジェクト期間中のフォロー＋リスクレビューは標準提供"
    },
    {
      company: "LOVANT VICTORIA",
      scope: "AI導入～社内定着・人材育成までワンストップで伴走",
      tech: "BI×ChatGPT連携による即時ダッシュボード＆自動レポート構築",
      approach: "現場主義ワークショップ＋ROIシミュレーションで経営判断を加速",
      industry: "住宅・不動産100社超、金融・エネルギー領域にも豊富な導入実績",
      support: "KPI設計～6ヶ月以上の定期レビュー＆次期ロードマップ策定まで"
    }
  ];

  const strengths = [
    {
      icon: "🤝",
      title: "完全伴走型コンサルティング",
      description: "KPI設計から効果測定、次期ロードマップまで半年以上フォロー"
    },
    {
      icon: "📊",
      title: "BI×ChatGPT自動分析",
      description: '生データから即時に経営指標を可視化、次の一手を"見える化"'
    },
    {
      icon: "🛠️",
      title: "業務棚卸→具体提案ワークショップ",
      description: "部門ごとの業務フロー可視化とROIシミュレーションで投資判断をサポート"
    }
  ];

  return (
    <section id="strengths" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            LOVANT VICTORIAが、CEOとともに
            <span className="text-gradient">"成果"をコミットする理由</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm card-hover text-center"
              >
                <div className="text-6xl mb-6">{strength.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {strength.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            弊社の<span className="text-gradient">強み</span>
          </h3>
          
          <div className="overflow-x-auto">
            <div className="min-w-full bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl border border-gray-700/50 backdrop-blur-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="p-6 text-left text-lg font-semibold text-gray-300">項目</th>
                    {competitors.map((comp, index) => (
                      <th 
                        key={index} 
                        className={`p-6 text-center text-lg font-semibold ${
                          comp.company === 'LOVANT VICTORIA' 
                            ? 'text-gradient' 
                            : 'text-gray-300'
                        }`}
                      >
                        {comp.company}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {['scope', 'tech', 'approach', 'industry', 'support'].map((field, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-gray-700/30 last:border-b-0">
                      <td className="p-6 font-semibold text-gray-300">
                        {field === 'scope' && 'コンサル範囲'}
                        {field === 'tech' && '技術プラットフォーム'}
                        {field === 'approach' && '提案アプローチ'}
                        {field === 'industry' && '業界特化'}
                        {field === 'support' && 'サポート期間'}
                      </td>
                      {competitors.map((comp, colIndex) => (
                        <td 
                          key={colIndex} 
                          className={`p-6 text-sm ${
                            comp.company === 'LOVANT VICTORIA'
                              ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white font-medium'
                              : 'text-gray-400'
                          }`}
                        >
                          {comp[field]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths;