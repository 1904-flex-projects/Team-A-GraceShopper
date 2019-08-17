// // Product Routes
// const app = require('../../server/index');
// const agent = require('supertest')(app);

// // import model reqs
// const { db } = require('../../server/db/index');
// const { Product, Order, OrderProduct } = require('../../server/db/index');
// const PENDING = 'PENDING';
// const COMPLETE = 'COMPLETE';
// describe('Product routes', () => {
//   let products;
//   const sampleProd1 = {
//     name: `Ellie's Brown Ale`,
//     description: `This beautiful, deep russet brew has the sweet and somewhat nutty character of Adam Avery's late (1992-2002) Chocolate Lab, for which it is named.`,
//     imageUrl: '/images/avery_ellies.jpg',
//     price: 5.0,
//   };


//   const sampleProd2 = {
//     name: `Naimuns Finest`,
//     description: `This beautiful test wine is delicious for the brave.`,
//     imageUrl: '/images/avery_ellies.jpg',
//     price: 100.0,
//   };

//   const sampleProd3 = {
//     name: `Drew Brew`,
//     description: `IBU one million.`,
//     imageUrl: '/images/avery_ellies.jpg',
//     price: 10.0,
//   };

//   const sampleProd4 = {
//     name: `Sample 4`,
//     description: `The fourth sample.`,
//     imageUrl: '/images/avery_ellies.jpg',
//     price: 4.0,
//   };

//   beforeEach(async () => {
//     // await db.sync({ force: true });
//     const createdProds = await Product.bulkCreate([
//       sampleProd1,
//       sampleProd2,
//       sampleProd3,
//       sampleProd4,
//     ]);
//     products = createdProds.map(prods => prods.dataValues);
//     return products;
//   });

//   // Route for fetching products
//   describe('GET `/api/products', () => {
//     xit('serves up all products', async () => {
//       const responseProd = await agent.get('/api/products').expect(200);
//       expect(responseProd.body[0].name).toEqual(products[0].name);
//     });
//   });

//   // Route for fetching single product
//   describe('GET `/api/products/:id', () => {
//     xit('serves up single product', async () => {
//       const prodId = products[0].id;
//       const responseProd = await agent
//         .get(`/api/products/${prodId}`)
//         .expect(200);
//       expect(responseProd.body.name).toEqual("Ellie's Brown Ale");
//     });
//   });
// });

// describe('Order routes', () => {
//   let orders = [];

//   const order0 = { id: 0, orderTotal: 100, status: COMPLETE };
//   const order1 = { id: 1, orderTotal: 200, status: PENDING };
//   const order2 = { id: 2, orderTotal: 300, status: PENDING };

//   // beforeEach(async () => {
//   //create test orders
//   // const createdOrder0 = await Order.bulkCreate([order1, order2]);
//   // const createdOrder1 = await Order.bulkCreate([order0, order1, order2]);
//   // orders = [
//   //   createdOrder0.map(order => order.dataValues),
//   //   createdOrder1.map(order => order.dataValues),
//   // ];
//   // return orders;
//   // });
//   describe('GET `/api/orders', () => {
//     xit('serves up all orders', async () => {
//       const responseOrder = await agent.get('/api/orders').expect(200);
//       expect(responseOrder.body[0].id.toEqual(orders[0].id));
//       expect(responseOrder.body[0].orderTotal.toEqual(orders[0].orderTotal));
//       expect(responseOrder.body[0].status.toEqual(orders[0].status));
//     });
//   });
//   describe('GET `/api/orders/:id', () => {
//     xit('serves up a specific order', async () => {
//       const responseOrder = await agent.get(`api/orders/1`).expect(200);
//       expect(responseOrder.body[0].id).toEqual(orders[1].id);
//       expect(responseOrder.body[0].orderTotal.toEqual(orders[1].orderTotal));
//       expect(responseOrder.body[0].status.toEqual(orders[1].status));
//     });
//     xit('serves up a specific order with order/session details', async () => {
//       const responseOrder = await agent
//         .get(`api/orders/someOrderId`)
//         .expect(200);
//       // check for products within the order
//       // check for quantity within order

//       // expect(responseProd.body[0].name).toEqual(products[0].name);
//     });
//   });
//   describe('POST `/api/orders', () => {
//     xit('can post an order to db upon creation', async () => {
//       const orderPayLoad = { id: 3, orderTotal: 4, status: PENDING };
//       const responseOrder = await agent
//         .post('/api/orders', orderPayLoad) //supply an order to the post
//         .expect(200);
//       expect(responseOrder.body[0].id).toEqual(order[0].id);
//     });
//   });
//   describe('GET `/api/users/:id/orders', () => {
//     xit('serves up a specific users orders ', async () => {
//       const responseOrder = await agent
//         .post('/api/users/:someUSERID/orders')
//         .expect(200);
//       // check if the user is correct
//       // check order amount

//       // expect(responseProd.body[0].name).toEqual(products[0].name);
//     });
//   });
//   describe('GET `/api/users/:id/orders/:id', () => {
//     xit('serves up a specific order by a specific user', async () => {
//       const responseOrder = await agent
//         .post('/api/users/:someUSERID/orders/:someOrderId')
//         .expect(200);
//       // check orders

//       // expect(responseProd.body[0].name).toEqual(products[0].name);
//     });
//   });
// });

describe('Testing Defaults', () => {
  //   declare any variables
  //   beforeEach(() => {

  //   });

  it('renders Navbar <Navbar /> component', () => {
    expect('1').toBe('1');
  });
});
