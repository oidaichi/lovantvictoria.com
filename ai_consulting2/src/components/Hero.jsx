import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            LOVANT VICTORIA
          </div>
          <div className="hidden md:flex space-x-8 text-white/80">
            <a href="#strengths" className="hover:text-white transition-colors">強み</a>
            <a href="#solutions" className="hover:text-white transition-colors">ソリューション</a>
            <a href="#members" className="hover:text-white transition-colors">メンバー</a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          生成AIで、経営判断の
          <span className="block text-gradient">"迷い"を"確信"に変える</span>
        </h1>
        
        <div className="text-xl md:text-2xl mb-8 text-white/80 max-w-4xl mx-auto">
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
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 glow-effect">
            無料経営診断を依頼する
          </button>
          <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-full transition-all duration-300">
            実績レポートをダウンロード
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
        <div className="text-sm mt-2">Scroll</div>
      </div>
    </section>
  );
};

export default Hero;