import React, { useState, useEffect, useRef } from 'react';

const Problem = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef();

  const problems = [
    {
      icon: "👥",
      title: "慢性的人材不足による事業継続危機",
      description: "採用困難・離職率増加で業務が回らない現実",
      solution: "AIチャットボット・自動化システムで人材1.5名分の労働力を代替"
    },
    {
      icon: "⚡",
      title: "大企業との競争力格差拡大", 
      description: "デジタル化遅れで市場から取り残される恐怖",
      solution: "BI×AIによる大企業レベルの分析・予測システムを低コストで実現"
    },
    {
      icon: "🔄",
      title: "次世代承継への絶望",
      description: "若い世代が魅力を感じない「古い体質」からの脱却不可能",
      solution: "最先端AI企業への変革で承継候補者の企業への興味・誇り向上"
    },
    {
      icon: "💰",
      title: "補助金・融資頼みの限界",
      description: "根本的な競争力不足を一時しのぎでしかカバーできない",
      solution: "AI効率化による根本的競争力強化で自律的成長を実現"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observerRef.current?.observe(card));
    
    return () => {
      cards.forEach(card => observerRef.current?.unobserve(card));
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI活用、その悩み、
            <span className="text-gradient">私たちが解決します</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            経営存続レベルの深刻な課題から日常業務の効率化まで、
            AIによる戦略的解決策をご提案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm card-hover transition-all duration-700 ${
                visibleCards.has(String(index)) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="text-6xl mb-6">{problem.icon}</div>
              
              {/* Problem */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-red-400">
                  課題: {problem.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {problem.description}
                </p>
              </div>
              
              {/* Solution */}
              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">
                  AI解決策
                </h4>
                <p className="text-gray-200">
                  {problem.solution}
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;