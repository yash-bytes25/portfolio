import React from 'react';

export const GrainOverlay: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{
        background: 'radial-gradient(circle at 50% 50%, transparent 70%, rgba(10, 12, 14, 0.4) 100%)',
      }}
      aria-hidden="true"
    />
  );
};
