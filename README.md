# pizza

[View website](https://pizza-cafe.herokuapp.com/)

Status: In Progress

The project was created with the aim of learning Node.js and for a better understanding of the Back-end using JS.
The application uses two databases.

MongoDB - data is taken to load content on the client side, store orders and list of couriers.

PostgreSQL - Stores data about the cafe chain and employees.

When an order comes from the client to the server, the order is generated for recording into the database. To do this, information about the cafe is taken from the PostgreSQL database, the courier is determined and the delivery time is calculated. After the order data is saved to the database, the delivery time is sent to the client to form a response about the successful ordering.

## Front-end
- Pug
- CSS
- JS

## Back-end
- Node.js
- Express
- MongoDB 
- PostgreSQL
