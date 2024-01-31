import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Nutella Crepe',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['Crepe'],
  },
  {
    id: '2',
    name: 'Lotus Crepe',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/food-2.jpg',
    tags: ['Crepe'],
  },
  {
    id: '3',
    name: 'Saj Zaatar',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    tags: ['Saj'],
  },
  {
    id: '4',
    name: 'Saj Jbne',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/food-4.jpg',
    tags: ['Saj'],
  },
  {
    id: '5',
    name: 'Apple Shisha',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['Shisha'],
  },
  {
    id: '6',
    name: 'Lemon Shisha',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['Shisha'],
  },
];


export const sample_tags: Tag[] = [
  { name: 'All' },
  { name: 'Crepe'},
  { name: 'Saj'},
  { name: 'Shisha' },
];