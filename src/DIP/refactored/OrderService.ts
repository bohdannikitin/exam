import { IDatabase } from './IDatabase';

// Тепер OrderService залежить від абстракції IDatabase, а не від конкретного класу
export class OrderService {
  constructor(private db: IDatabase) {}

  placeOrder(product: string, qty: number): void {
    this.db.connect();
    this.db.query(`INSERT INTO orders (product, qty) VALUES ('${product}', ${qty})`);
    console.log(`Замовлення на ${qty}x ${product} створено`);
  }
}
