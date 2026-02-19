import React from 'react';
import { cn } from '../utils/cn';
import { Rocket, School, Users } from 'lucide-react';

interface HeaderProps {
  currentView: 'planetarium' | 'museum' | 'credits';
  onViewChange: (view: 'planetarium' | 'museum' | 'credits') => void;
}

export function Header({ currentView, onViewChange }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-transparent pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto">
        <div className="font-['Days_One',sans-serif] tracking-widest flex flex-col items-start leading-none text-white cursor-pointer" onClick={() => onViewChange('planetarium')}>
          <span className="text-xs opacity-80 mb-1 ml-0.5">PROJETO</span>
          <span className="text-2xl font-bold">SALA CIÊNCIA</span>
        </div>
      </div>

      <nav className="flex items-center gap-6 bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 pointer-events-auto shadow-lg">
        <button
          onClick={() => onViewChange('planetarium')}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-all duration-300 px-3 py-1.5 rounded-full",
            currentView === 'planetarium' 
              ? "text-cyan-400 bg-white/10" 
              : "text-white/60 hover:text-white"
          )}
        >
          <Rocket size={16} />
          Planetário
        </button>
        
        <div className="w-px h-4 bg-white/10" />
        
        <button
          onClick={() => onViewChange('museum')}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-all duration-300 px-3 py-1.5 rounded-full",
            currentView === 'museum' 
              ? "text-purple-400 bg-white/10" 
              : "text-white/60 hover:text-white"
          )}
        >
          <School size={16} />
          Museu Digital
        </button>

        <div className="w-px h-4 bg-white/10" />

        <button
          onClick={() => onViewChange('credits')}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-all duration-300 px-3 py-1.5 rounded-full",
            currentView === 'credits' 
              ? "text-yellow-400 bg-white/10" 
              : "text-white/60 hover:text-white"
          )}
        >
          <Users size={16} />
          Créditos
        </button>
      </nav>

      <div className="w-[150px] text-right text-xs text-white/40 pointer-events-auto hidden md:block">
        Versão Educacional 2.0
      </div>
    </header>
  );
}
