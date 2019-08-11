const router = require('express').Router();
const { Product, Category, Supplier } = require('../../db/index');

// api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Supplier }, { model: Category }],
    });
    res.json(products);
  } catch (error) {
    console.error(error);
  }
});

// api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const prodId = req.params.id;
    const product = await Product.findByPk(prodId, {
      include: [{ model: Supplier }, { model: Category }],
    });
    res.json(product);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
