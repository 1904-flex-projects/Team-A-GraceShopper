const router = require('express').Router();
const { Product, Category, Supplier } = require('../../db/index');

// POST API/products
router.post('/', async (req, res, next) => {
  try {
    const { name, description, imageUrl, price, category, supplier } = req.body;
    const product = await Product.create({name, description, imageUrl, price, categoryId: category.id, supplierId: supplier.id});
    res.sendStatus(200).send('Product created successfully:', product);
  } catch (error) {
    console.error(error);
  }
})

// GET API/products
router.get('/', async (req, res, next) => {
  try {
    const { categoryId, supplierId } = req.query;
    let whereCondition = {};
    if (categoryId) {
      whereCondition.categoryId = categoryId;
    }
    if (supplierId) {
      whereCondition.supplierId = supplierId;
    }
    const products = await Product.findAll({ include: [Supplier, Category], where: whereCondition });
    res.json(products);
  } catch (error) {
    console.error(error);
  }
});

// GET API/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id, { include: [Supplier, Category]});
    res.json(product);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
