
import { Category } from './types.js';

export const GAMES_DATA = [
  {
    id: '2048',
    title: '2048',
    description: 'Merge the numbers to reach the 2048 tile!',
    thumbnail: 'https://picsum.photos/seed/2048/400/300',
    url: 'https://play2048.co/',
    category: Category.PUZZLE,
    tags: ['math', 'logic', 'classic'],
    isPopular: true
  },
  {
    id: 'hextris',
    title: 'Hextris',
    description: 'A fast-paced puzzle game inspired by Tetris on a hexagon.',
    thumbnail: 'https://picsum.photos/seed/hextris/400/300',
    url: 'https://hextris.io/',
    category: Category.ARCADE,
    tags: ['fast', 'puzzle', 'skill'],
    isPopular: true
  },
  {
    id: 'pacman',
    title: 'Pacman Web',
    description: 'The legendary arcade classic brought to your browser.',
    thumbnail: 'https://picsum.photos/seed/pacman/400/300',
    url: 'https://macek.github.io/google_pacman/',
    category: Category.ARCADE,
    tags: ['retro', 'classic', 'maze']
  },
  {
    id: 'snake',
    title: 'Classic Snake',
    description: 'Simple, addictive, and eternally fun.',
    thumbnail: 'https://picsum.photos/seed/snake/400/300',
    url: 'https://snake.io/',
    category: Category.ARCADE,
    tags: ['retro', 'casual'],
    isPopular: true
  },
  {
    id: 'tower-game',
    title: 'Tower Block',
    description: 'Stack blocks as high as you can!',
    thumbnail: 'https://picsum.photos/seed/tower/400/300',
    url: 'https://www.towergame.app/',
    category: Category.PUZZLE,
    tags: ['stack', 'physics']
  },
  {
    id: 'flappy-bird',
    title: 'Flappy Bird Clone',
    description: 'Don\'t hit the pipes! A test of patience and timing.',
    thumbnail: 'https://picsum.photos/seed/flappy/400/300',
    url: 'https://flappybird.io/',
    category: Category.ACTION,
    tags: ['hard', 'timing']
  },
  {
    id: 'tetris',
    title: 'Web Tetris',
    description: 'The ultimate brick-stacking puzzle game.',
    thumbnail: 'https://picsum.photos/seed/tetris/400/300',
    url: 'https://tetris.com/play-tetris',
    category: Category.PUZZLE,
    tags: ['blocks', 'retro', 'strategy']
  },
  {
    id: 'chess',
    title: 'Lichess',
    description: 'Play chess against friends or computer.',
    thumbnail: 'https://picsum.photos/seed/chess/400/300',
    url: 'https://lichess.org/embed/game/new?bg=dark',
    category: Category.STRATEGY,
    tags: ['board', 'multiplayer']
  }
];

export const CATEGORIES = Object.values(Category);
