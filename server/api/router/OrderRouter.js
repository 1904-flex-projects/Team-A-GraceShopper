const router = require('express').Router();
const { Order, User, Product, OrderProduct } = require('../../db/index');

// API/orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        { model: Product, through: { attributes: ['productQuantity'] } },
      ],
    });
    res.json(orders);
  } catch (e) {
    console.error(e);
  }
});

router.post('/', async (req, res) => {
  //   try {
  //     const { id, user, session, orderTotal, product } = req.body;
  //     const order = await Order.create({id, orderTotal});
  //     if (req.userId) {
  //       await Order.update{(user);
  //     }
  //     const orderProducts = await OrderProduct.create();
  //     await order.addProduct
  //     const joinedOrder = Order.findByPk(order.id, {include: [OrderProduct]});
  //     res.json(joinedOrder);
  //   } catch (e) {
  //     console.error(e);
  //   }
});

// /api/orders/:id (specific order, which includes products)
router.get('/orders/:id', async (req, res) => {
  try {
    const { amount } = req.body;
    const [ products ] = req.body;
    const sessionId = req.session.id;
    const userId = req.session.userId;
    const [order, wasCreated] = await Order.findOrCreate({where: {userId, status: 'pending'}, defaults: {sessionId, orderTotal: amount}});
    if (!wasCreated) {
      await order.update({orderTotal: order.orderTotal + amount});
    }
    products.forEach(async (productObj) => {
      const { product, quantity } = productObj;
      if (!wasCreated) {
        const orderHasProduct = order.hasProduct(product);
        if (orderHasProduct) {
          const joinRow = await OrderProduct.findOne({
            where: {
              orderId: order.id,
              productId: product.id,
            }
          });
          await joinRow.update({
            productQuantity: joinRow.productQuantity + quantity
          });
        }
      } else {
        await order.addProduct(product, { productQuantity: quantity });
      }
    })
    res.sendStatus(200).send('Order posted successfully:', order.id);
  } catch (e) {
    console.error(e);
  }
});

// NOT TESTED YET
// // /api/orders/:id (specific order, which includes products)
// router.get('/orders/:id', async (req, res) => {
//   try {
//     const order = await Order.findOne({
//       where: { id: req.params.id },
//       include: { models: ['OrderProduct', 'Product', 'Session'] },
//     });
//     res.json(order);
//   } catch (e) {
//     console.log(e =>
//       console.error(`Could not get Order:${req.params.id} from database`, e)
//     );
//     res.sendStatus(500);
//   }
// });

// /api/users/:id/orders (all orders of a user)
// router.get('/users/:id/orders', async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     const orders = await user.getOrders();
//     res.json(orders);
//   } catch (e) {
//     console.log(e =>
//       console.error(
//         `Could not get User:${req.params.id}'s Orders from database`,
//         e
//       )
//     );
//     res.sendStatus(500);
//   }
// });

// /api/users/:id/orders/:id (specific order of a user, which includes products)
router.get('/users/:id/orders/:orderId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    const orders = await user.getOrders();
    const order = orders.filter(_order => _order.id === req.params.orderId)[0];
    res.json(order);
  } catch (e) {
    console.log(e =>
      console.error(
        `Could not get User:${req.params.id}'s Order:${req.params.userId} from database`,
        e
      )
    );
    res.sendStatus(500);
  }
});

// API/orders
router.post('/orders', async (req, res, next) => {
  try {
    const { user, session, orderTotal, products } = req.body;
    const order = await Order.create({ user, session, orderTotal });
    const orderProducts = await products.map(product => {
      return OrderProduct.create({
        productId: product.id,
        productQuantity: product.productQuantity,
      });
    });
    orderProducts.map(orderProduct =>
      orderProduct.update({ orderId: order.id })
    );
  } catch (error) {
    console.error(error);
  }
});

//post routes

//update routes
// router.get('/users/:id/orders/:orderId', async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     const orders = await user.getOrders();
//     const order = orders.filter(_order => _order.id === req.params.orderId)[0];
//     res.json(order);
//   } catch (e) {
//     console.log(e =>
//       console.error(
//         `Could not get User:${req.params.id}'s Order:${
//           req.params.userId
//         } from database`,
//         e
//       )
//     );
//     res.sendStatus(500);
//   }
// });

module.exports = router;
