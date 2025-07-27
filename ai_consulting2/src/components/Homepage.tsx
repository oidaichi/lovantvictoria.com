import React, { useState, useEffect } from 'react';
import type { MarkdownContent } from '../types/content';

interface HomepageProps {
  content: MarkdownContent;
}

const Homepage: React.FC<HomepageProps> = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, company });
  };

  // Parse content for structured data
  const parseContent = () => {
    const sections = content.body.split('##').filter(section => section.trim());
    return {
      problems: extractProblems(content.body),
      solutions: extractSolutions(content.body),
      strengths: extractStrengths(content.body),
      comparison: extractComparisonTable(content.body)
    };
  };

  const extractProblems = (body: string) => {
    const problemMatches = body.match(/#### 課題\d+：([^#]+?)(?=####|###|##|$)/gs);
    return problemMatches?.map((match, index) => {
      const titleMatch = match.match(/#### 課題\d+：(.+?)(?:\n|$)/);
      const descMatch = match.match(/#### 課題\d+：.+?\n(.+?)(?:\n|$)/);
      const solutionMatch = match.match(/##### AI解決策：(.+?)(?:\n|$)/);
      
      return {
        id: index,
        title: titleMatch?.[1]?.trim() || '',
        description: descMatch?.[1]?.trim() || '',
        solution: solutionMatch?.[1]?.trim() || '',
        icon: ['👥', '⚡', '🔄', '💰', '🛠️', '📋', '🎯', '📈'][index] || '🤖'
      };
    }) || [];
  };

  const extractSolutions = (body: string) => {
    const categories = [
      { name: '経営存続レベルの課題', color: 'from-red-500 to-orange-500' },
      { name: '日常業務レベルの課題', color: 'from-blue-500 to-purple-500' },
      { name: '財務・資金レベルの課題', color: 'from-emerald-500 to-teal-500' }
    ];

    return categories.map((category, catIndex) => ({
      category: category.name,
      color: category.color,
      items: extractProblems(body).slice(catIndex * 4, (catIndex + 1) * 4).map(problem => ({
        title: problem.solution,
        description: problem.title,
        results: `効果実績${catIndex + 1}`
      }))
    }));
  };

  const extractStrengths = (body: string) => {
    return [
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
  };

  const extractComparisonTable = (body: string) => {
    const tableMatch = body.match(/\| 項目.+?\|[\s\S]*?(?=\n\n|$)/);
    if (!tableMatch) return null;
    
    const rows = tableMatch[0].split('\n').filter(row => row.includes('|'));
    const headers = rows[0].split('|').map(h => h.trim()).filter(h => h);
    const dataRows = rows.slice(2).map(row => 
      row.split('|').map(cell => cell.trim()).filter(cell => cell)
    );

    return { headers, dataRows };
  };

  const { problems, solutions, strengths, comparison } = parseContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">LOVANT VICTORIA</div>
            <div className="hidden md:flex space-x-8 text-gray-800/80">
              <a href="#problems" className="hover:text-gray-800 transition-colors">課題解決</a>
              <a href="#solutions" className="hover:text-gray-800 transition-colors">ソリューション</a>
              <a href="#strengths" className="hover:text-gray-800 transition-colors">強み</a>
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-gray-800">
            {content.frontmatter.title.split('"')[1]}
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              "迷い"を"確信"に変える
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 text-gray-800/80 max-w-4xl mx-auto">
            導入3ヶ月で
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-emerald-400">+3億円</div>
                <div className="text-sm">営業利益向上（PayPayカード）</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">100社超</div>
                <div className="text-sm">住宅・不動産業界で即戦力化</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-gray-800 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
              {content.frontmatter.cta_primary}
            </button>
            <button className="border border-white/30 text-gray-800 hover:bg-white/10 font-semibold py-4 px-8 rounded-full transition-all duration-300">
              {content.frontmatter.cta_secondary}
            </button>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              AI活用、その悩み、
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                私たちが解決します
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              経営存続レベルの深刻な課題から日常業務の効率化まで、AIによる戦略的解決策をご提案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.slice(0, 4).map((problem, index) => (
              <div
                key={problem.id}
                className="relative p-8 rounded-3xl bg-white shadow-lg border border-gray-200 hover:transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-6xl mb-6">{problem.icon}</div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-red-600">
                    課題: {problem.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{problem.description}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold mb-3 text-emerald-600">AI解決策</h4>
                  <p className="text-gray-700">{problem.solution}</p>
                </div>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              LOVANT VICTORIAの
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI戦略的解決策
              </span>
            </h2>
            <p className="text-xl text-gray-600">課題レベル別の包括的AIソリューション</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['経営存続レベル', '日常業務レベル', '財務・資金レベル'].map((level, index) => (
              <div
                key={index}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-200 backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${
                  index === 0 ? 'from-red-500 to-orange-500' :
                  index === 1 ? 'from-blue-500 to-purple-500' :
                  'from-emerald-500 to-teal-500'
                } opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{level}の課題</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {index === 0 && 'AI効率化による根本的競争力強化で自律的成長を実現'}
                    {index === 1 && 'アナログ業務の完全デジタル化で生産性を3倍向上'}
                    {index === 2 && 'AI効率化による利益構造の根本改善で収益最大化'}
                  </p>
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${
                    index === 0 ? 'from-red-500 to-orange-500' :
                    index === 1 ? 'from-blue-500 to-purple-500' :
                    'from-emerald-500 to-teal-500'
                  } text-gray-800 text-sm font-semibold`}>
                    効果: {index === 0 && '業務効率30-70%向上'}
                    {index === 1 && 'キーパーソン依存度90%削減'}
                    {index === 2 && '利益率15%向上'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
              LOVANT VICTORIAが、CEOとともに
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                "成果"をコミットする理由
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-3xl bg-white border border-gray-200 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 text-center"
                >
                  <div className="text-6xl mb-6">{strength.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{strength.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          {comparison && (
            <div className="mb-20">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                弊社の<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">強み</span>
              </h3>
              
              <div className="overflow-x-auto">
                <div className="min-w-full bg-white rounded-3xl border border-gray-200 shadow-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        {comparison.headers.map((header, index) => (
                          <th 
                            key={index} 
                            className={`p-6 text-center text-lg font-semibold ${
                              header === 'LOVANT VICTORIA' 
                                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                                : 'text-gray-700'
                            }`}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.dataRows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-gray-200 last:border-b-0">
                          {row.map((cell, cellIndex) => (
                            <td 
                              key={cellIndex} 
                              className={`p-4 text-sm ${
                                cellIndex === 3 // LOVANT VICTORIA column
                                  ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-medium'
                                  : cellIndex === 0 
                                    ? 'font-semibold text-gray-700' // First column (category)
                                    : 'text-gray-600'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            今すぐ<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI変革</span>を始めませんか？
          </h2>
          
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            無料経営診断で、あなたの会社にとって最適なAI導入戦略をご提案します。
            3ヶ月で確実な成果を実感してください。
          </p>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-200 backdrop-blur-sm mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="株式会社○○"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="example@company.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  ご相談内容（任意）
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="現在抱えている課題や、興味のあるAI活用分野について教えてください"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                無料経営診断を依頼する
              </button>
            </form>
          </div>

          {/* Trust Signals */}
          <div className="border-t border-gray-200 pt-12">
            <p className="text-sm text-gray-600 mb-6">導入実績企業（一部抜粋）</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold text-gray-700">PayPayカード</div>
              <div className="text-lg font-semibold text-gray-700">住宅・不動産業界100社超</div>
              <div className="text-lg font-semibold text-gray-700">金融・エネルギー分野</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-200">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              LOVANT VICTORIA
            </div>
            <p className="text-gray-600 mb-8">
              生成AIで、経営判断の"迷い"を"確信"に変える
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-800 transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-gray-800 transition-colors">利用規約</a>
              <a href="#" className="hover:text-gray-800 transition-colors">会社概要</a>
              <a href="#" className="hover:text-gray-800 transition-colors">お問い合わせ</a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-xs text-gray-500">
              © 2025 LOVANT VICTORIA. All rights reserved.
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Homepage;
















