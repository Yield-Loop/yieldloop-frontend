import React from 'react';

const HowLqd: React.FC = () => {
  console.log('HowLqd component is rendering');
  
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" style={{ 
      background: '#1A1B3A',
      backgroundImage: 'url(/ellipse.png)',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center m">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
          How Liquid Restaking Works
        </h2>
        
        <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          <span>Ready to get started?</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HowLqd;
