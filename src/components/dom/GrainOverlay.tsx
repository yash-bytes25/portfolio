import React from 'react';

export const GrainOverlay: React.FC = () => {
  return (
    <>
      {/* Film grain noise overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Deep cinematic vignette & subtle atmospheric depth */}
      <div 
        className="fixed inset-0 pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(6, 6, 8, 0.8) 100%)',
        }}
        aria-hidden="true"
      />
    </>
  );
};

