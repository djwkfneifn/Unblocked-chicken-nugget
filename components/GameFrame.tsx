
import React from 'react';
import { Game } from '../types';

interface GameFrameProps {
  game: Game;
  onClose: () => void;
}

export const GameFrame: React.FC<GameFrameProps> = ({ game, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col animate-in fade-in zoom-in duration-300">
      {/* Top Bar */}
      <div className="h-16 bg-[#09090b] border-b border-zinc-800 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-full transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-zinc-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div>
            <h2 className="font-bold text-lg text-white leading-none mb-1">{game.title}</h2>
            <p className="text-xs text-zinc-500 font-mono">PixelVault v1.0.4</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white text-sm font-medium rounded-lg transition-all"
          >
            Close Game
          </button>
        </div>
      </div>

      {/* Game Iframe */}
      <div className="flex-grow bg-[#111] relative overflow-hidden">
        <iframe 
          src={game.url}
          className="w-full h-full border-none shadow-2xl"
          title={game.title}
          allow="autoplay; fullscreen; keyboard; gamepad"
          allowFullScreen
        />
        
        {/* Anti-Block Indicator / Overlay */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-zinc-400 pointer-events-none">
          SECURE IFRAME TUNNEL ACTIVE
        </div>
      </div>
    </div>
  );
};
