import React, { useState } from 'react';
import { MUSEUM_ROOMS } from '../../data/museum';
import { MuseumRoomView } from './MuseumRoomView';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight, BookOpen, FlaskConical, Atom } from 'lucide-react';
import { cn } from '../../utils/cn';

export function MuseumView() {
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  const selectedRoom = MUSEUM_ROOMS.find(r => r.id === selectedRoomId);

  if (selectedRoom) {
    return <MuseumRoomView room={selectedRoom} onBack={() => setSelectedRoomId(null)} />;
  }

  const getRoomIcon = (id: string) => {
    if (id.includes('chemistry')) return <FlaskConical className="w-5 h-5" />;
    if (id.includes('physics')) return <Atom className="w-5 h-5" />;
    return <BookOpen className="w-5 h-5" />;
  };

  const getRoomGradient = (id: string) => {
    if (id.includes('chemistry')) return 'bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent';
    if (id.includes('physics')) return 'bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent';
    return 'bg-gradient-to-br from-amber-500/10 via-transparent to-transparent';
  };

  const getAccentColor = (id: string) => {
     if (id.includes('chemistry')) return 'text-emerald-400 group-hover:text-emerald-300';
     if (id.includes('physics')) return 'text-cyan-400 group-hover:text-cyan-300';
     return 'text-amber-400 group-hover:text-amber-300';
  }

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center p-8 bg-[#0F1014] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0F1014] to-black">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-4 backdrop-blur-sm">
           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
           Ambientes Interativos
        </div>
        <h1 className="text-4xl md:text-6xl font-['Days_One',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 mb-6 tracking-tight">
          Museu Digital
        </h1>
        <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          Selecione uma sala para explorar experimentos virtuais, visualizar conceitos em 3D e aprofundar seus conhecimentos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4 z-10">
        {MUSEUM_ROOMS.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            onClick={() => setSelectedRoomId(room.id)}
            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/20 shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-[#181820]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <ImageWithFallback 
                src={room.image} 
                alt={room.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className={cn("absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500", getRoomGradient(room.id))} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1014] via-[#0F1014]/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
              <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                <div className={cn("inline-flex items-center justify-center p-3 rounded-xl bg-white/10 backdrop-blur-md mb-4 border border-white/10", getAccentColor(room.id))}>
                  {getRoomIcon(room.id)}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 font-['Days_One',sans-serif] leading-tight group-hover:text-white transition-colors">
                  {room.name}
                </h3>
                
                <p className="text-white/60 text-sm line-clamp-2 mb-6 group-hover:text-white/80 transition-colors">
                   {room.id === 'lab-chemistry' && 'Atomística, Reações, Eletroquímica e muito mais.'}
                   {room.id === 'lab-physics' && 'Mecânica, Óptica, Eletricidade e Termologia.'}
                   {room.id === 'classroom-math' && 'Geometria, Estatística, Geografia e Astronomia.'}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                  {room.hotspots.length} Tópicos
                </span>
                <button className={cn("flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:translate-x-1", getAccentColor(room.id))}>
                  Explorar
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
