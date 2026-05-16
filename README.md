# Тест 21 — Dependency Inversion Principle (DIP)

## Суть

> Модулі верхнього рівня не повинні залежати від модулів нижнього рівня.
> Обидва повинні залежати від абстракцій.

## Антипатерн

`OrderService` сам створює `new MySQLDatabase()` всередині.
Якщо потрібно змінити базу — треба редагувати `OrderService`.

```
OrderService ──depends on──> MySQLDatabase  ← конкретний клас
```

## Рефакторинг

Вводимо інтерфейс `IDatabase`. `OrderService` отримує його через конструктор.

```
OrderService ──depends on──> IDatabase (інтерфейс)
                                  ▲
                    MySQLDatabase  MongoDatabase
```

Тепер можна підставити будь-яку реалізацію без зміни `OrderService`.

## Запуск

```bash
npm install
npm run antipattern
npm run refactored
```

## Вивід (refactored)

```
=== З MySQL ===
[MySQL] Підключення...
[MySQL] INSERT INTO orders ...
Замовлення на 2x Laptop створено

=== З MongoDB ===
[MongoDB] Підключення...
[MongoDB] INSERT INTO orders ...
Замовлення на 5x Phone створено
```
