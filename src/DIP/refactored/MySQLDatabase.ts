import { IDatabase } from './IDatabase';

export class MySQLDatabase implements IDatabase {
  connect(): void {
    console.log('[MySQL] Підключення...');
  }

  query(sql: string): void {
    console.log(`[MySQL] ${sql}`);
  }
}
