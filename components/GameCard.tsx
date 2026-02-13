import React from 'react';

export const GameCard = ({ game, onClick }) => {
  return (
    <div 
      onClick={() => onClick(game)}
      className="group relative bg-[#111114] border border-[#27272a] rounded-2xl overflow-hidden cursor-pointer hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
    >
      <div className="aspect-video relative overflow-hidden bg-zinc-900">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="w-full bg-violet-600 text-white font-black py-2.5 rounded-xl text-center scale-95 group-hover:scale-100 transition-all shadow-lg uppercase tracking-widest text-[10px]">
            PLAY NOW
          </div>
        </div>
        {game.isPopular && (
          <div className="absolute top-3 left-3 bg-amber-500 text-black text-[9px] font-black uppercase px-2 py-1 rounded-md">
            POPULAR
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-white group-hover:text-violet-400 transition-colors text-lg">
            {game.title}
          </h3>
          <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded-md font-bold uppercase">
            {game.category}
          </span>
        </div>
        <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
          {game.description}
        </p>
      </div>
    </div>
  );
};