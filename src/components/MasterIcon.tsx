import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface MasterIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  glowColor?: string;
}

export const MasterIcon: React.FC<MasterIconProps> = ({ 
  icon: Icon, 
  size = 24, 
  className = "", 
  glowColor = "#C8A96B" 
}) => {
  return (
    <div className={`relative flex items-center justify-center group/master-icon ${className}`}>
      {/* 3D Orbiting Rings */}
      <div 
        className="absolute inset-[-10px] rounded-full border border-black/5 dark:border-white/5 group-hover/master-icon:border-[#C8A96B]/30 transition-all duration-700 animate-[spin_12s_linear_infinite]"
        style={{ borderWidth: '0.5px' }}
      >
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-[#C8A96B] rounded-full shadow-[0_0_10px_#C8A96B]" />
      </div>
      
      <div 
        className="absolute inset-[-16px] rounded-full border border-black/5 dark:border-white/5 border-dashed group-hover/master-icon:border-[#C8A96B]/20 transition-all duration-700 animate-[spin_20s_linear_infinite_reverse]"
        style={{ borderWidth: '0.5px' }}
      ></div>

      {/* 3D Glass Surface */}
      <div className="absolute inset-[-4px] bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover/master-icon:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />

      {/* Glow Aura */}
      <div 
        className="absolute inset-0 bg-[#C8A96B] blur-[20px] opacity-0 group-hover/master-icon:opacity-40 transition-opacity duration-700 rounded-full"
        style={{ backgroundColor: glowColor }}
      ></div>

      {/* Main Icon */}
      <div className="relative z-10 transition-all duration-700 group-hover/master-icon:scale-110 group-hover/master-icon:drop-shadow-[0_0_15px_rgba(200,169,107,0.6)]">
        <Icon 
          size={size} 
          className="text-black dark:text-white group-hover/master-icon:text-[#C8A96B] transition-colors duration-500" 
          strokeWidth={1}
        />
      </div>

      {/* Energy Pulse HUD */}
      <div className="absolute inset-[-6px] overflow-hidden rounded-full opacity-0 group-hover/master-icon:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C8A96B]/20 to-transparent translate-x-[-100%] translate-y-[-100%] group-hover/master-icon:translate-x-[100%] group-hover/master-icon:translate-y-[100%] transition-transform duration-2000 ease-in-out"></div>
      </div>
    </div>
  );
};
