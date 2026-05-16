import { IDatabase } from './IDatabase';

export class MongoDatabase implements IDatabase {
  connect(): void {
    console.log('[MongoDB] Підключення...');
  }

  query(sql: string): void {
    console.log(`[MongoDB] ${sql}`);
  }
}
