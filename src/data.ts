export const heroContent = {
  title: 'Rex Goliath',
  subtitle: 'His Royal Majesty is back.',
  imageUrl: '/assets/rex-goliath-logo.png',
  description: `America's most unhinged rooster is out of retirement, and this time? He's mad
  as hell.  Experience the unapologetic flavor burst of Rex Goliath.`,
};

export type Wine = {
  id: number;
  linkImg: string;
  isNew?: boolean;
  wineName: string;
  isFinished?: boolean;
  progress?: number;
};

export const wines = [
  {
    id: 1,
    linkImg: '/assets/red-wine.jpg',
    isNew: true,
    wineName: 'Wine',
    isFinished: true,
  },
  {
    id: 2,
    linkImg: '/assets/red-wine.jpg',
    wineName: 'Wine',
    isFinished: true,
  },
  {
    id: 3,
    linkImg: '/assets/red-wine.jpg',
    wineName: 'Wine',
    isNew: true,
    isFinished: true,
  },
  {
    id: 4,
    linkImg: '/assets/red-wine.jpg',
    wineName: 'Wine',
    isFinished: true,
  },
  {
    id: 5,
    linkImg: '/assets/red-wine.jpg',
    wineName: 'Wine',
    isNew: true,
    isFinished: true,
  },
  {
    id: 6,
    linkImg: '/assets/red-wine.jpg',
    wineName: 'Wine',
    isFinished: true,
  },
  {
    id: 7,
    linkImg: '/assets/red-wine.jpg',
    wineName: 'Wine',
    isFinished: true,
  },
  {
    id: 8,
    linkImg: '/assets/red-wine.jpg',
    wineName: 'Wine',
    isFinished: true,
  },
  {
    id: 1,
    linkImg: '/assets/red-wine.jpg',
    progress: 22,
    wineName: 'Wine',
  },
  {
    id: 2,
    linkImg: '/assets/red-wine.jpg',
    progress: 22,
    wineName: 'Wine',
  },
  {
    id: 3,
    linkImg: '/assets/red-wine.jpg',
    progress: 22,
    wineName: 'Wine',
  },
  {
    id: 4,
    linkImg: '/assets/red-wine.jpg',
    progress: 22,
    wineName: 'Wine',
  },
  {
    id: 5,
    linkImg: '/assets/red-wine.jpg',
    progress: 22,
    wineName: 'Wine',
  },
  {
    id: 6,
    linkImg: '/assets/red-wine.jpg',
    progress: 22,
    wineName: 'Wine',
  },
  {
    id: 7,
    linkImg: '/assets/red-wine.jpg',
    progress: 22,
    wineName: 'Wine',
  },
  {
    id: 8,
    linkImg: '/assets/red-wine.jpg',
    progress: 22,
    wineName: 'Wine',
  },
];
