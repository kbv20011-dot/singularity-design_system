import React from 'react';

interface NeuroCoreLogoProps {
  className?: string;
}

const NeuroCoreLogo: React.FC<NeuroCoreLogoProps> = ({ className = 'w-14 h-14' }) => {
  return (
    <div className={`relative flex items-center justify-center group cursor-pointer ${className}`}>
      {/* External Ambient Glow */}
      <div className="absolute inset-0 bg-violet-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-125"></div>

      {/* Main Glass Sphere Body */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/90 via-white/10 to-violet-500/10 shadow-[inset_-4px_-4px_10px_rgba(124,58,237,0.2),inset_4px_4px_10px_rgba(255,255,255,0.95),0_8px_20px_rgba(0,0,0,0.05)] border border-white/30 overflow-hidden flex items-center justify-center">
        {/* THE ICON INSIDE */}
        <div className="relative z-10 text-violet-700 filter blur-[0.8px] opacity-90 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 ease-out">
          {/* Abstract Singularity Spark Icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="url(#sparkGradient)"
            className="drop-shadow-[0_4px_8px_rgba(124,58,237,0.4)]"
          >
            <defs>
              <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" /> {/* violet-500 */}
                <stop offset="100%" stopColor="#4c1d95" /> {/* violet-900 */}
              </linearGradient>
            </defs>
            <path d="M12 2C12 2 13.5 8.5 14 10C15.5 10.5 22 12 22 12C22 12 15.5 13.5 14 14C13.5 15.5 12 22 12 22C12 22 10.5 15.5 10 14C8.5 13.5 2 12 2 12C2 12 8.5 10.5 10 10C10.5 8.5 12 2 12 2Z" />
          </svg>
        </div>

        {/* Specular Highlight (Top Left) */}
        <div className="absolute top-[15%] left-[20%] w-[35%] h-[20%] bg-gradient-to-b from-white to-transparent opacity-90 rounded-full blur-[1px] -rotate-12 z-20 pointer-events-none"></div>

        {/* Secondary Reflection (Bottom Right) */}
        <div className="absolute bottom-[15%] right-[20%] w-[25%] h-[25%] bg-violet-400/20 rounded-full blur-md z-20 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default NeuroCoreLogo;
