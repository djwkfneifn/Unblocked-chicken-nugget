import React, { useState, useMemo } from 'react';
import { GAMES_DATA, CATEGORIES } from './constants';
import { Category } from './types';
import { GameCard } from './components/GameCard';
import { GameFrame } from './components/GameFrame';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(Category.ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGame, setActiveGame] = useState(null);

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(game => {
      const matchesCategory = selectedCategory === Category.ALL || game.category === selectedCategory;
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col">
      <nav className="sticky top-0 z-40 bg-[#09090b]/90 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => {
              setSelectedCategory(Category.ALL);
              setSearchQuery('');
            }}
          >
            <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-xl">P</span>
            </div>
            <div>
              <h1 className="text-xl font-black text-white tracking-tighter leading-none">PIXELVAULT</h1>
              <p className="text-[10px] text-violet-400 font-mono tracking-widest uppercase mt-0.5">UNBLOCKED HUB</p>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-zinc-900/50 border border-zinc-800 rounded-2xl px-4 py-2.5 w-full max-w-md ml-8 focus-within:border-violet-500/50 focus-within:bg-zinc-900 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none text-zinc-100 px-3 w-full focus:outline-none text-sm placeholder:text-zinc-600"
            />
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
               {GAMES_DATA.length} Online
             </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 mt-12 w-full flex-grow">
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat 
                ? 'bg-violet-600 text-white border-violet-500 shadow-xl shadow-violet-500/20 scale-105' 
                : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-end justify-between mb-8 border-l-4 border-violet-600 pl-4">
           <div>
              <h2 className="text-4xl font-black text-white tracking-tight">
                {selectedCategory === Category.ALL ? 'Top Titles' : selectedCategory}
              </h2>
              <p className="text-zinc-500 text-sm mt-1">High-speed unblocked web games</p>
           </div>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredGames.map(game => (
              <GameCard 
                key={game.id} 
                game={game} 
                onClick={(g) => setActiveGame(g)}
              />
            ))}
          </div>
        ) : (
          <div className="py-32 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-zinc-300">No matching games</h3>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedCategory(Category.ALL)}}
              className="mt-6 text-violet-400 font-bold hover:text-violet-300 underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      {activeGame && (
        <GameFrame 
          game={activeGame} 
          onClose={() => setActiveGame(null)} 
        />
      )}

      <footer className="mt-20 py-12 border-t border-zinc-900/50 bg-[#070709] px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
               <span className="text-white font-black text-sm">P</span>
             </div>
             <span className="font-black text-xl text-white tracking-tighter">PIXELVAULT</span>
           </div>
           <p className="text-[10px] text-zinc-700 font-mono tracking-widest uppercase">© 2025 PIXELVAULT PROJECT</p>
        </div>
      </footer>
    </div>
  );
};

export default App;