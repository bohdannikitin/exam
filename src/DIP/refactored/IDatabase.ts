export interface IDatabase {
  connect(): void;
  query(sql: string): void;
}
