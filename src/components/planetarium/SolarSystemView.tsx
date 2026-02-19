import React from 'react';
import { PLANETS } from '../../data/planets';
import { motion } from 'motion/react';
import { CometsBackground } from './CometsBackground';

interface SolarSystemViewProps {
  onSelectPlanet: (id: string) => void;
}

export function SolarSystemView({ onSelectPlanet }: SolarSystemViewProps) {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      <CometsBackground />
      
      {/* Sun */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#FDB813] shadow-[0_0_60px_rgba(253,184,19,0.6)] animate-pulse" />
        <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Sol</div>
      </div>

      {/* Orbits and Planets */}
      <div className="absolute inset-0 flex items-center justify-center scale-75 md:scale-100 origin-center">
        {PLANETS.map((planet, index) => {
          // Adjust orbit sizes to fit better with sidebar
          const orbitSize = 140 + (index * 60); 
          const duration = planet.orbitSpeed;
          
          return (
            <div 
              key={planet.id}
              className="absolute rounded-full border border-white/5 hover:border-white/20 transition-colors"
              style={{
                width: orbitSize * 2,
                height: orbitSize * 2,
              }}
            >
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: duration, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{
                  transformOrigin: '50% 50%',
                }}
              >
                {/* 
                  Positioning Logic:
                  - The parent div rotates.
                  - We place the planet at the very top center of this rotating div.
                  - left-1/2 centers it horizontally.
                  - top-0 places it at the top edge.
                  - -translate-x-1/2 centers the planet element itself.
                  - -translate-y-1/2 moves the planet UP so its center aligns with the border line (top:0).
                */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Counter-rotate the planet wrapper so the label stays upright */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ 
                      duration: duration, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                     <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPlanet(planet.id);
                      }}
                      className="group relative flex flex-col items-center justify-center"
                     >
                        <div 
                          className="rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                          style={{
                            backgroundColor: planet.color,
                            width: Math.max(12, index * 2 + 10), 
                            height: Math.max(12, index * 2 + 10),
                          }}
                        />
                        {/* Always visible label */}
                        <div className="mt-2 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-[2px] border border-white/5 text-[10px] md:text-[11px] text-white/90 whitespace-nowrap tracking-wide font-medium group-hover:bg-black/80 group-hover:text-white transition-all shadow-sm">
                          {planet.name}
                        </div>
                     </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      
      <div className="absolute bottom-10 right-10 text-right pointer-events-none z-20">
        <p className="text-white/30 text-xs tracking-widest uppercase">
          Visualização do Sistema
        </p>
      </div>
    </div>
  );
}
