const router = require('express').Router();
const { Order, User, Product, OrderProduct } = require('../../db/index');

// GET API/orders
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

// POST API/orders
router.post('/', async (req, res) => {
  try {
    const { addUpdateCart } = Order;
    const { orderProducts } = req.body;
    const userId = req.session.userId;
    const order = await addUpdateCart(orderProducts, userId);
    res.sendStatus(200).send('Order posted successfully:', order);
  } catch (error) {
    console.error(error);
  }
});

// /api/orders/:id (specific order, which includes products)
// router.get('/orders/:id', async (req, res) => {
//   try {
//   } catch (error) {
//     console.error(error);
//   }
// });

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
