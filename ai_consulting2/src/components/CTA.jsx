import React, { useState } from 'react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, company });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-t from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          今すぐ<span className="text-gradient">AI変革</span>を始めませんか？
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          無料経営診断で、あなたの会社にとって最適なAI導入戦略をご提案します。
          3ヶ月で確実な成果を実感してください。
        </p>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-700/50 backdrop-blur-sm mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="株式会社○○"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="example@company.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                ご相談内容（任意）
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="現在抱えている課題や、興味のあるAI活用分野について教えてください"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              無料経営診断を依頼する
            </button>
          </form>
        </div>

        {/* Additional CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <button className="flex items-center justify-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            実績レポートをダウンロード
          </button>
          
          <button className="flex items-center justify-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            お電話でのご相談
          </button>
        </div>

        {/* Trust Signals */}
        <div className="border-t border-gray-700/50 pt-12">
          <p className="text-sm text-gray-400 mb-6">
            導入実績企業（一部抜粋）
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold">PayPayカード</div>
            <div className="text-lg font-semibold">住宅・不動産業界100社超</div>
            <div className="text-lg font-semibold">金融・エネルギー分野</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 text-gradient">
            LOVANT VICTORIA
          </div>
          <p className="text-gray-400 mb-8">
            生成AIで、経営判断の"迷い"を"確信"に変える
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">会社概要</a>
            <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-500">
            © 2025 LOVANT VICTORIA. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CTA;