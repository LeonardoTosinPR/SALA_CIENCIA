import React from 'react';
import { PlanetData, PLANETS } from '../../data/planets';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PlanetDetailViewProps {
  planet: PlanetData;
  onBack: () => void;
}

export function PlanetDetailView({ planet, onBack }: PlanetDetailViewProps) {
  // Find adjacent planets for the "orbiting" background elements
  const planetIndex = PLANETS.findIndex(p => p.id === planet.id);
  const prevPlanet = PLANETS[planetIndex - 1];
  const nextPlanet = PLANETS[planetIndex + 1];

  return (
    <div className="w-full h-full relative overflow-y-auto custom-scrollbar flex flex-col items-center pt-10 pb-10">
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 h-full flex flex-col items-center">
        
        {/* Planet Title */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-['Days_One',sans-serif] text-white tracking-[0.2em] uppercase mb-2 drop-shadow-lg">
            {planet.name}
          </h1>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-4xl mb-12"
        >
          <Stat label="Diâmetro" value={planet.diameter} delay={0.1} />
          <Stat label="Duração do Dia" value={planet.dayLength} delay={0.2} />
          <Stat label="Temperatura" value={planet.temperature} delay={0.3} />
          <Stat label="Clima" value={planet.climate} delay={0.4} />
        </motion.div>

        {/* Planet Visual */}
        <div className="flex-1 w-full min-h-[400px] flex items-center justify-center relative mb-12">
          
          {/* Orbit Rings Background - Subtle */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
             <div className="w-[600px] h-[600px] rounded-full border border-white/20" />
             <div className="w-[900px] h-[900px] rounded-full border border-white/10 absolute" />
          </div>

          {/* Adjacent Planets (Decoration) */}
          {prevPlanet && (
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              transition={{ delay: 0.6 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 opacity-40 scale-50 blur-[2px]"
            >
              <div 
                className="w-20 h-20 rounded-full shadow-lg"
                style={{ backgroundColor: prevPlanet.color }} 
              />
            </motion.div>
          )}

          {nextPlanet && (
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.4 }}
              transition={{ delay: 0.6 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 opacity-40 scale-50 blur-[2px]"
            >
              <div 
                className="w-20 h-20 rounded-full shadow-lg"
                style={{ backgroundColor: nextPlanet.color }} 
              />
            </motion.div>
          )}

          {/* Main Planet */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-20 group"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-full blur-[80px] opacity-30 mix-blend-screen"
                style={{ backgroundColor: planet.color }}
              />
              
              {/* Planet Image */}
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-[inset_-40px_-20px_100px_rgba(0,0,0,0.8)]">
                <ImageWithFallback 
                  src={planet.image} 
                  alt={planet.name}
                  className="w-full h-full object-cover animate-[spin_60s_linear_infinite]" 
                />
                {/* Shadow Overlay for 3D effect */}
                <div className="absolute inset-0 rounded-full shadow-[inset_20px_10px_50px_rgba(255,255,255,0.1),inset_-50px_-20px_90px_rgba(0,0,0,0.9)]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl text-center"
        >
          <p className="text-white/80 leading-relaxed text-lg md:text-xl font-light">
            {planet.description}
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/40 uppercase tracking-widest font-['ABeeZee',sans-serif]">
            <span className="w-2 h-2 rounded-full bg-white/20" />
            Distância do Sol: <span className="text-white font-bold">{planet.distance}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Stat({ label, value, delay }: { label: string, value: string, delay: number }) {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 + delay }}
      className="flex flex-col items-center bg-white/5 rounded-2xl p-4 border border-white/5 hover:bg-white/10 transition-colors"
    >
      <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest mb-2 font-['ABeeZee',sans-serif]">{label}</span>
      <span className="text-lg md:text-xl text-white font-medium text-center break-words w-full">{value}</span>
    </motion.div>
  );
}
