import React from 'react';
import { PlanetData } from '../../data/planets';
import { cn } from '../../utils/cn';
import { Orbit } from 'lucide-react';
import { motion } from 'motion/react';

interface PlanetSidebarProps {
  planets: PlanetData[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}

export function PlanetSidebar({ planets, selectedId, onSelect }: PlanetSidebarProps) {
  return (
    <div className="w-64 h-full bg-[#0E0E12]/90 backdrop-blur-xl border-r border-white/10 flex flex-col z-20 overflow-y-auto custom-scrollbar">
      <div className="p-6">
        <h2 className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-4 font-bold font-['ABeeZee',sans-serif]">Navegação</h2>
        
        <button
          onClick={() => onSelect(null)}
          className={cn(
            "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
            selectedId === null 
              ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]" 
              : "text-white/60 hover:text-white hover:bg-white/5"
          )}
        >
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-colors border border-white/5",
            selectedId === null ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" : "bg-white/5 text-white/40 group-hover:text-white"
          )}>
            <Orbit size={18} />
          </div>
          <span className="font-medium text-sm">Sistema Solar</span>
          {selectedId === null && (
            <motion.div layoutId="active-indicator" className="absolute left-0 w-1 h-8 rounded-r-full bg-cyan-400" />
          )}
        </button>
      </div>

      <div className="flex-1 px-6 pb-6 space-y-2">
        <h2 className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-4 font-bold font-['ABeeZee',sans-serif]">Planetas</h2>
        
        {planets.map((planet) => (
          <button
            key={planet.id}
            onClick={() => onSelect(planet.id)}
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group relative",
              selectedId === planet.id 
                ? "bg-white/10 text-white" 
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <div 
              className="w-8 h-8 rounded-full shadow-lg border border-white/10 shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: planet.color }}
            />
            <span className="font-medium text-sm text-left truncate flex-1">{planet.name}</span>
            
            {selectedId === planet.id && (
               <motion.div 
                 layoutId="active-indicator"
                 className="absolute left-0 w-1 h-8 rounded-r-full"
                 style={{ backgroundColor: planet.color }}
               />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
