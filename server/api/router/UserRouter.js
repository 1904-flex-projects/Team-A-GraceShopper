const router = require('express').Router();
const { User, Session } = require('../../db/index');

// /api/users
// getting ALL registered users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({ where: { type: 'registered' } });
    res.json(users);
  } catch {
    next();
  }
});

// /api/users/:id
router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    res.json(user);
  } catch {
    next();
  }
});

// /api/users/:id
router.post('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    // res.json
  } catch {
    next();
  }
});

module.exports = router;
