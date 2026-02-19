import React, { useState } from 'react';
import { SolarSystemView } from './SolarSystemView';
import { PlanetDetailView } from './PlanetDetailView';
import { PlanetSidebar } from './PlanetSidebar';
import { PLANETS } from '../../data/planets';
import { AnimatePresence, motion } from 'motion/react';

export function PlanetariumView() {
  const [selectedPlanetId, setSelectedPlanetId] = useState<string | null>(null);

  const selectedPlanet = PLANETS.find(p => p.id === selectedPlanetId);

  return (
    <div className="w-full h-full flex bg-[#0E0E12] overflow-hidden relative">
      {/* Background Stars/Space effect global for continuity */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B1E2B] via-[#0E0E12] to-[#000000] z-0 pointer-events-none" />

      {/* Sidebar */}
      <PlanetSidebar 
        planets={PLANETS} 
        selectedId={selectedPlanetId} 
        onSelect={setSelectedPlanetId} 
      />

      {/* Main Content Area */}
      <div className="flex-1 relative h-full z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          {!selectedPlanet ? (
            <motion.div 
              key="solar-system"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <SolarSystemView onSelectPlanet={setSelectedPlanetId} />
            </motion.div>
          ) : (
            <motion.div 
              key="planet-detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <PlanetDetailView 
                planet={selectedPlanet} 
                onBack={() => setSelectedPlanetId(null)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
