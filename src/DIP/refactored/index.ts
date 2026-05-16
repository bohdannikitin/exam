import { OrderService } from './OrderService';
import { MySQLDatabase } from './MySQLDatabase';
import { MongoDatabase } from './MongoDatabase';

console.log('=== З MySQL ===');
const mysqlService = new OrderService(new MySQLDatabase());
mysqlService.placeOrder('Laptop', 2);

console.log('\n=== З MongoDB ===');
const mongoService = new OrderService(new MongoDatabase());
mongoService.placeOrder('Phone', 5);
