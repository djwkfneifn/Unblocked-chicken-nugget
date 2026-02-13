import { Category, Game } from './types';

export const GAMES_DATA: Game[] = [
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