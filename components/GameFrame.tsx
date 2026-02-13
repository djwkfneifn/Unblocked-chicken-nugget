import React from 'react';

export const GameFrame = ({ game, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col animate-in fade-in duration-300">
      <div className="h-16 bg-[#09090b] border-b border-zinc-800 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-xl transition-colors text-zinc-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h2 className="font-black text-lg text-white leading-none tracking-tight uppercase">{game.title}</h2>
        </div>

        <button 
          onClick={onClose}
          className="px-5 py-2.5 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white text-[10px] font-black rounded-xl transition-all uppercase tracking-widest border border-red-600/20"
        >
          QUIT
        </button>
      </div>

      <div className="flex-grow bg-[#000] relative overflow-hidden">
        <iframe 
          src={game.url}
          className="w-full h-full border-none"
          title={game.title}
          allow="autoplay; fullscreen; keyboard; gamepad"
          allowFullScreen
        />
      </div>
    </div>
  );
};