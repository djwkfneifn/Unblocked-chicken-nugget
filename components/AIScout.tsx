
import React, { useState } from 'react';
import { getGameRecommendation } from '../services/geminiService';
import { Game } from '../types';
import { GAMES_DATA } from '../constants';

interface AIScoutProps {
  onGameSelect: (game: Game) => void;
}

export const AIScout: React.FC<AIScoutProps> = ({ onGameSelect }) => {
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<{ game: Game; reason: string } | null>(null);

  const handleScout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setLoading(true);
    const res = await getGameRecommendation(mood);
    if (res) {
      const game = GAMES_DATA.find(g => g.id === res.recommendedGameId);
      if (game) {
        setSuggestion({ game, reason: res.reason });
      }
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/30 rounded-2xl p-6 mb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <svg className="w-32 h-32 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
        </svg>
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-2">
          <span className="bg-violet-600 text-white p-1 rounded">AI</span> 
          Pixel Scout
        </h2>
        <p className="text-zinc-400 mb-6 text-sm">Tell me what kind of challenge you're looking for, or how you're feeling!</p>

        <form onSubmit={handleScout} className="flex gap-2 max-w-xl">
          <input 
            type="text" 
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="I'm feeling bored and want a quick puzzle..."
            className="flex-grow bg-[#09090b]/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
          />
          <button 
            type="submit"
            disabled={loading}
            className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3 rounded-xl transition-all disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Scout'}
          </button>
        </form>

        {suggestion && (
          <div className="mt-6 flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 animate-in fade-in slide-in-from-top-4">
            <img src={suggestion.game.thumbnail} className="w-16 h-16 rounded-lg object-cover" alt="" />
            <div className="flex-grow">
              <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-1">Recommended for you</p>
              <h4 className="text-lg font-bold text-white leading-none mb-1">{suggestion.game.title}</h4>
              <p className="text-sm text-zinc-400">{suggestion.reason}</p>
            </div>
            <button 
              onClick={() => onGameSelect(suggestion.game)}
              className="px-4 py-2 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Play
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
