
import React, { useState, useMemo } from 'react';
import { GAMES_DATA, CATEGORIES } from './constants';
import { Game, Category } from './types';
import { GameCard } from './components/GameCard';
import { GameFrame } from './components/GameFrame';
import { AIScout } from './components/AIScout';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGame, setActiveGame] = useState<Game | null>(null);

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(game => {
      const matchesCategory = selectedCategory === Category.ALL || game.category === selectedCategory;
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedCategory(Category.ALL)}>
            <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/20">
              <span className="text-white font-black text-xl">P</span>
            </div>
            <div>
              <h1 className="text-xl font-black text-white tracking-tighter">PIXELVAULT</h1>
              <p className="text-[10px] text-violet-400 font-mono tracking-widest leading-none">UNBLOCKED HUB</p>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-[#18181b] border border-zinc-800 rounded-full px-4 py-2 w-full max-w-md ml-8 focus-within:border-violet-500/50 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search games, tags, genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none text-zinc-100 px-3 w-full focus:outline-none text-sm placeholder:text-zinc-600"
            />
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-400">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               {GAMES_DATA.length} Games Online
             </div>
             <button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 p-2.5 rounded-xl transition-all border border-zinc-700">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               </svg>
             </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 mt-12">
        
        <AIScout onGameSelect={(game) => setActiveGame(game)} />

        {/* Categories Bar */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat 
                ? 'bg-violet-600 text-white border-violet-500 shadow-lg shadow-violet-500/20 scale-105' 
                : 'bg-[#18181b] text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
           <div>
              <h2 className="text-3xl font-black text-white tracking-tight">
                {selectedCategory === Category.ALL ? 'Most Played' : selectedCategory}
              </h2>
              <p className="text-zinc-500 text-sm">Showing {filteredGames.length} results</p>
           </div>
           <div className="flex items-center gap-2">
             <span className="text-xs text-zinc-600 font-mono">SORT BY:</span>
             <select className="bg-transparent text-zinc-400 text-xs font-bold focus:outline-none cursor-pointer">
               <option>RELEVANCE</option>
               <option>NEWEST</option>
               <option>ALPHABETICAL</option>
             </select>
           </div>
        </div>

        {/* Game Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map(game => (
              <GameCard 
                key={game.id} 
                game={game} 
                onClick={(g) => setActiveGame(g)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center mb-4 border border-zinc-800">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            <h3 className="text-xl font-bold text-zinc-400">No games found</h3>
            <p className="text-zinc-600 text-sm mt-1">Try searching for something else or browse different categories.</p>
          </div>
        )}
      </main>

      {/* Game Modal */}
      {activeGame && (
        <GameFrame 
          game={activeGame} 
          onClose={() => setActiveGame(null)} 
        />
      )}

      {/* Footer */}
      <footer className="mt-32 py-12 border-t border-zinc-900 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-center md:text-left">
             <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
               <div className="w-6 h-6 bg-violet-600 rounded flex items-center justify-center">
                 <span className="text-white font-black text-xs">P</span>
               </div>
               <span className="font-black text-lg text-white tracking-tighter">PIXELVAULT</span>
             </div>
             <p className="text-zinc-500 text-sm max-w-sm">The world's premium destination for high-quality, unblocked web entertainment.</p>
           </div>

           <div className="flex items-center gap-8 text-sm font-bold text-zinc-500">
             <a href="#" className="hover:text-violet-400 transition-colors">Discord</a>
             <a href="#" className="hover:text-violet-400 transition-colors">GitHub</a>
             <a href="#" className="hover:text-violet-400 transition-colors">Privacy</a>
             <a href="#" className="hover:text-violet-400 transition-colors">Terms</a>
           </div>

           <p className="text-[10px] text-zinc-700 font-mono">© 2025 PIXELVAULT_DIGITAL. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
