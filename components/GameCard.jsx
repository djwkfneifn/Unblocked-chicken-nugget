
import React from 'react';

export const GameCard = ({ game, onClick }) => {
  return (
    <div 
      onClick={() => onClick(game)}
      className="group relative bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden cursor-pointer hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-violet-500/10"
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 rounded-lg transition-colors">
            Play Now
          </button>
        </div>
        {game.isPopular && (
          <div className="absolute top-2 left-2 bg-amber-500 text-black text-[10px] font-black uppercase px-2 py-1 rounded-sm shadow-sm">
            Popular
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-zinc-100 group-hover:text-violet-400 transition-colors">
            {game.title}
          </h3>
          <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full border border-zinc-700">
            {game.category}
          </span>
        </div>
        <p className="text-sm text-zinc-500 line-clamp-2">
          {game.description}
        </p>
      </div>
    </div>
  );
};
