import { MySQLDatabase } from './MySQLDatabase';

// Порушення DIP: OrderService напряму залежить від MySQLDatabase
// Якщо захочемо замінити MySQL на MongoDB — прийдеться переписувати цей клас
export class OrderService {
  private db = new MySQLDatabase();

  placeOrder(product: string, qty: number): void {
    this.db.connect();
    this.db.query(`INSERT INTO orders (product, qty) VALUES ('${product}', ${qty})`);
    console.log(`Замовлення на ${qty}x ${product} створено`);
  }
}

const service = new OrderService();
service.placeOrder('Laptop', 2);
