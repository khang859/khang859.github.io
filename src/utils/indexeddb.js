import Dexie from 'dexie';

export const db = new Dexie('lastKnown');

db.version(1).stores({
  lastKnown: '++id, name, lastKnown',
});

export const recipeDb = new Dexie('recipes');

recipeDb.version(1).stores({
  recipe: '++id, name, recipe',
});