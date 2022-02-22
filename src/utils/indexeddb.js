// db.js
import Dexie from 'dexie';

export const db = new Dexie('lastKnown');

db.version(1).stores({
  lastKnown: '++id, name, lastKnown', // Primary key and indexed props
});