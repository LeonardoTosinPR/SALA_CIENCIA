import React, { useState } from 'react';
import { Room, Hotspot } from '../../data/museum';
import { ChevronLeft, Info, X, ChevronRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { cn } from '../../utils/cn';

interface MuseumRoomViewProps {
  room: Room;
  onBack: () => void;
}

export function MuseumRoomView({ room, onBack }: MuseumRoomViewProps) {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  const handleOpenHotspot = (hotspot: Hotspot) => {
    setActiveHotspot(hotspot);
    setActiveSection(0);
  };

  return (
    <div className="w-full h-full relative bg-[#1A1A24] overflow-hidden">
      {/* Header Bar */}
      <div className="absolute top-0 left-0 w-full p-6 z-40 flex items-center justify-between pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black/70 transition-colors border border-white/10"
        >
          <ChevronLeft size={18} />
          Voltar ao Lobby
        </button>
        <div className="bg-black/50 backdrop-blur-md text-white px-6 py-2 rounded-full font-['Days_One',sans-serif] border border-white/10 shadow-lg">
          {room.name}
        </div>
      </div>

      {/* Interactive Room Image */}
      <div className="w-full h-full relative flex items-center justify-center bg-black">
        <div className="relative w-full h-full max-w-[1920px] max-h-[1080px] overflow-hidden">
          <ImageWithFallback 
            src={room.image} 
            alt={room.name}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay to dim image slightly so UI pops */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* Hotspots Layer */}
          <div className="absolute inset-0">
            {room.hotspots.map((hotspot, index) => (
              <motion.button
                key={hotspot.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + (index * 0.1), type: "spring" }}
                onClick={() => handleOpenHotspot(hotspot)}
                style={{ 
                  left: `${hotspot.x}%`, 
                  top: `${hotspot.y}%` 
                }}
                className="absolute -ml-6 -mt-6 group cursor-pointer z-20"
              >
                {/* Hotspot Visual */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                   <div className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-75" />
                   <div className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/80 shadow-[0_0_15px_rgba(255,255,255,0.5)] flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:bg-white/20 hover:border-white">
                      <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
                   </div>
                </div>

                {/* Tooltip Label */}
                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-white/10 transform translate-y-2 group-hover:translate-y-0">
                  {hotspot.label}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Large Content Popup */}
      <AnimatePresence>
        {activeHotspot && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#1E1E26] w-full max-w-5xl h-[85vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveHotspot(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white p-2 rounded-full bg-black/20 hover:bg-white/10 transition-colors z-50"
              >
                <X size={24} />
              </button>

              {/* Sidebar / Navigation */}
              <div className="w-full md:w-1/3 lg:w-1/4 bg-[#15151A] border-r border-white/5 flex flex-col">
                <div className="p-8 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white font-['Days_One',sans-serif] leading-tight">
                    {activeHotspot.content.title}
                  </h2>
                  <p className="text-white/50 text-sm mt-2 font-medium">
                    {activeHotspot.content.description}
                  </p>
                  <div className="mt-4 inline-block px-3 py-1 rounded bg-white/5 text-white/70 text-xs border border-white/5 uppercase tracking-wider">
                    {activeHotspot.content.category}
                  </div>
                </div>

                {/* Section Tabs */}
                <div className="flex-1 overflow-y-auto custom-scrollbar px-4 py-2 space-y-2">
                  {activeHotspot.content.sections.map((section, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSection(idx)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl transition-all duration-300 border",
                        activeSection === idx
                          ? "bg-purple-600/20 border-purple-500/50 text-white"
                          : "bg-transparent border-transparent text-white/40 hover:bg-white/5 hover:text-white/80"
                      )}
                    >
                      <div className="flex items-center justify-between">
                         <span className="font-medium text-sm line-clamp-1">{section.title}</span>
                         {activeSection === idx && <ChevronRight size={14} className="text-purple-400" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 bg-[#1E1E26] flex flex-col relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12 relative z-10">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-6 font-['ABeeZee',sans-serif]">
                      {activeHotspot.content.sections[activeSection].title}
                    </h3>
                    
                    <div className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed space-y-6">
                      {activeHotspot.content.sections[activeSection].content.split('\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Navigation hints */}
                    <div className="mt-12 flex items-center gap-4 pt-8 border-t border-white/5">
                      {activeSection > 0 && (
                        <button 
                          onClick={() => setActiveSection(activeSection - 1)}
                          className="text-white/40 hover:text-white text-sm flex items-center gap-2 transition-colors"
                        >
                          <ChevronLeft size={16} /> Anterior
                        </button>
                      )}
                      <div className="flex-1" />
                      {activeSection < activeHotspot.content.sections.length - 1 && (
                        <button 
                          onClick={() => setActiveSection(activeSection + 1)}
                          className="text-white/40 hover:text-white text-sm flex items-center gap-2 transition-colors"
                        >
                          Próximo <ChevronRight size={16} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
