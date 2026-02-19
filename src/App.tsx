import React, { useState } from 'react';
import { PlanetariumView } from './components/planetarium/PlanetariumView';
import { MuseumView } from './components/museum/MuseumView';
import { CreditsView } from './components/CreditsView';
import { Header } from './components/Header';
import { AnimatePresence } from 'motion/react';

/**
 * App Component - Ponto de entrada principal
 * Gerencia a navegação entre as três seções principais:
 * 1. Planetário (Sistema Solar 3D/2D)
 * 2. Museu Digital (Salas temáticas)
 * 3. Créditos (Informações institucionais)
 */
export default function App() {
  const [currentView, setCurrentView] = useState<'planetarium' | 'museum' | 'credits'>('planetarium');

  return (
    <div className="w-full h-screen bg-[#0E0E12] text-white overflow-hidden font-sans">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="w-full h-full pt-[80px] relative">
        <AnimatePresence mode="wait">
          {currentView === 'planetarium' && (
            <div key="planetarium" className="w-full h-full">
               <PlanetariumView />
            </div>
          )}
          
          {currentView === 'museum' && (
            <div key="museum" className="w-full h-full overflow-hidden">
               <MuseumView />
            </div>
          )}

          {currentView === 'credits' && (
             <div key="credits" className="w-full h-full overflow-hidden">
                <CreditsView />
             </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
