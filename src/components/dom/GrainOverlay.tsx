import React from 'react';

export const GrainOverlay: React.FC = () => {
  return (
    <>
      {/* Film grain noise overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Deep laboratory vignette & subtle atmospheric depth */}
      <div 
        className="fixed inset-0 pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 65%, rgba(8, 9, 10, 0.7) 100%)',
        }}
        aria-hidden="true"
      />
    </>
  );
};

