const app = require('../../server/index');
const agent = require('supertest')(app);
const Sequelize = require('sequelize');
const { db } = require('../../server/db/index');
const { Product, Order, OrderProduct } = require('../../server/db/index');
const PENDING = 'PENDING';
const COMPLETE = 'COMPLETE';
describe('Product routes', () => {
  let products;
  const sampleProd1 = {
    name: `Ellie's Brown Ale`,
    description: `This beautiful, deep russet brew has the sweet and somewhat nutty character of Adam Avery's late (1992-2002) Chocolate Lab, for which it is named.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 5.0,
  };
  const sampleProd2 = {
    name: `Naimuns Finest`,
    description: `This beautiful test wine is delicious for the brave.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 100.0,
  };
  const sampleProd3 = {
    name: `Drew Brew`,
    description: `IBU one million.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 10.0,
  };
  const sampleProd4 = {
    name: `Sample 4`,
    description: `The fourth sample.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 4.0,
  };

  beforeEach(async () => {
    const createdProds = await Product.bulkCreate([
      sampleProd1,
      sampleProd2,
      sampleProd3,
      sampleProd4,
    ]);

    products = createdProds.map(prods => prods.dataValues);
    return products;
  });
  //Route for fetching products
  describe('GET /api/products', () => {
    it('serves up all products', async () => {
      const responseProd = await agent.get('/api/products').expect(200);
      expect(responseProd.body[0].name).toEqual(products[0].name);
      expect(responseProd.body[2].name).toEqual(products[2].name);
      expect(responseProd.body[3].name).toEqual(products[3].name);
    });
  });
  // Route for fetching single product
  describe('GET /api/products/:id', () => {
    it('serves up single product', async () => {
      const prodId = products[0].id;
      const responseProd = await agent
        .get(`/api/products/${prodId}`)
        .expect(200);
      expect(responseProd.body.name).toEqual("Ellie's Brown Ale");
      const prodId1 = products[3].id;
      const responseProd1 = await agent
        .get(`/api/products/${prodId1}`)
        .expect(200);
      expect(responseProd1.body.name).toEqual('Sample 4');
    });
  });

  describe('Post as admin POST /api/product', () => {
    xit('adds the product to the db products', async () => {
      const payload = { name, description, imageUrl, price };
      const responseProd = await agent.post('api/product', payload).expect(200);
      const res = responseProd.body;
      expect(res[0].description).toEqual(payload.description);
    });
  });

  describe('GET product(s) filtered by category and or supplier', () => {
    xit('returns either all products or all products in the category and by from the supplier or any mixture thereof', async () => {
      const responseProd0 = await agent.get('api/products/');
      const responseProd1 = await agent.get('api/products/?supplier');
      const responseProd2 = await agent.get('api/products/?category');
      const responseProd3 = await agent.get('api/products/?suppliercategory');
      let res = responseProd0.body; //test
      res = responseProd1.body; //test
      res = responseProd2.body; //test
      res = responseProd3.body;
    });
  });
});

describe('Order routes', () => {
  let products;
  const sampleProd1 = {
    name: `Ellie's Brown Ale`,
    description: `This beautiful, deep russet brew has the sweet and somewhat nutty character of Adam Avery's late (1992-2002) Chocolate Lab, for which it is named.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 5.0,
  };
  const sampleProd2 = {
    name: `Naimuns Finest`,
    description: `This beautiful test wine is delicious for the brave.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 100.0,
  };
  const sampleProd3 = {
    name: `Drew Brew`,
    description: `IBU one million.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 10.0,
  };
  const sampleProd4 = {
    name: `Sample 4`,
    description: `The fourth sample.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 4.0,
  };
  let orders = [];
  const order0 = { orderTotal: 100, status: COMPLETE };
  const order1 = { orderTotal: 200, status: PENDING };
  const order2 = { orderTotal: 300, status: PENDING };

  let users = [];
  const user0 = { name: 'user0' };
  const user1 = { name: 'user1' };

  beforeEach(async () => {
    //create test orders

    const createdOrder = await Order.bulkCreate([order0, order1, order2]);
    const createdOrder1 = [createdOrder[1], createdOrder[2]];
    orders = [
      createdOrder.map(order => order.dataValues),
      createdOrder1.map(order => order.dataValues),
    ];
    return orders;
  });

  describe('GET `/api/orders', () => {
    it('serves up all orders', async () => {
      const responseOrder = await agent.get('/api/orders').expect(200);
      let res = {};
      responseOrder.body.map(order => (res[order.id] = order));
      expect(res[orders[0][0].id].id).toEqual(orders[0][0].id);
      expect(res[orders[0][0].id].orderTotal).toEqual(orders[0][0].orderTotal);
      expect(res[orders[0][0].id].status).toEqual(orders[0][0].status);
    });
  });

  describe('GET `/api/orders/:id', () => {
    xit('serves up a specific order', async () => {
      const responseOrder = await agent.get(`api/orders/1`).expect(200);
      const res = {};
      responseOrder.body.map(order => (res[order.id] = order));
      expect(res[orders[0][1].id].id).toEqual(orders[0][1].id);
      expect(res[orders[0][1].id].orderTotal.toEqual(orders[0][1].orderTotal));
      expect(res[orders[0][1].id].status.toEqual(orders[0][1].status));
    });

    xit('serves up a specific order with order/session details', async () => {
      const responseOrder = await agent.get(`api/orders/0`).expect(200);
      expect(responseOrder.body[0]).toEqual(orders[0]);
      const addProductsToOrder = await agent.post('api/orders', {
        id: 4,
        orderTotal: 5,
        status: PENDING,
      });
      const createdProds = await Product.bulkCreate(sampleProd1, sampleProd2);
      //addProductsToOrder.addProduct(createdProds[0])
      // check for products within the order // check for quantity within order
      s;
    });
  });

  describe('POST `/api/orders', () => {
    xit('can post an order to db upon creation', async () => {
      const orderPayLoad = { id: 3, orderTotal: 4, status: PENDING };
      const responseOrder = await agent.post('/api/orders', orderPayLoad); //supply an order to the post .expect(200);
      expect(responseOrder.body[0]).toEqual(orderPayLoad);
    });
  });

  describe('GET `/api/users/:id/orders', () => {
    xit('serves up a specific users orders ', async () => {
      const responseOrder = await agent
        .post('/api/users/:1/orders')
        .expect(200);
      // check if the user is correct
      // check order amount
      expect(responseProd.body[0].name).toEqual(products[0].name);
    });
  });
  describe('GET `/api/users/:id/orders/:id', () => {
    xit('serves up a specific order by a specific user', async () => {
      const responseOrder = await agent
        .post('/api/users/:0/orders/:0')
        .expect(200);
      // check orders
      expect(responseProd.body[0].name).toEqual(products[0].name);
    });
  });
});

//user routes
