export class MySQLDatabase {
  connect(): void {
    console.log('[MySQL] Підключення до бази даних...');
  }

  query(sql: string): void {
    console.log(`[MySQL] Запит: ${sql}`);
  }
}
