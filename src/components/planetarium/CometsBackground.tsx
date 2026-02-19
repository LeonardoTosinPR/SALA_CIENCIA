import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Comet {
  id: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
}

export function CometsBackground() {
  const [comets, setComets] = useState<Comet[]>([]);

  useEffect(() => {
    // Generate initial comets
    const generateComets = () => {
      const newComets = Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100, // Random vertical position
        delay: Math.random() * 10, // Random start delay
        duration: 3 + Math.random() * 5, // Random duration
        size: 1 + Math.random() * 2 // Random size
      }));
      setComets(newComets);
    };

    generateComets();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {comets.map((comet) => (
        <CometItem key={comet.id} comet={comet} />
      ))}
    </div>
  );
}

function CometItem({ comet }: { comet: Comet }) {
  return (
    <motion.div
      initial={{ 
        x: '-10%', 
        y: -50, 
        opacity: 0 
      }}
      animate={{ 
        x: '120vw', 
        y: 100, // Slight diagonal movement
        opacity: [0, 1, 1, 0] 
      }}
      transition={{ 
        duration: comet.duration, 
        delay: comet.delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 10 + 5,
        ease: "linear"
      }}
      style={{
        top: `${comet.top}%`,
        position: 'absolute',
      }}
      className="flex items-center"
    >
      {/* Comet Head */}
      <div 
        className="rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{ width: comet.size, height: comet.size }}
      />
      {/* Comet Tail */}
      <div 
        className="h-[1px] bg-gradient-to-r from-white/0 via-white/50 to-white/0 transform origin-left"
        style={{ 
          width: comet.size * 100,
          marginLeft: -comet.size * 2 // Pull tail behind
        }} 
      />
    </motion.div>
  );
}
