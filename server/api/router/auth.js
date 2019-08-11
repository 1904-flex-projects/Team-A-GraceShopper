const router = require('express').Router();
const { User, Session } = require('../../db/index');

// check auth status
router.get('/', (req, res) => {
  console.log('request', req.session.userId, req.session.userType);
  res.send({
    loggedIn:
      typeof req.session.userId === 'string' &&
      req.session.userType === 'registered',
  });
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email, password } });
      if (!user) {
        res.sendStatus(401);
        console.log('Log in failed; invalid credentials');
      } else if (req.session.userId && req.session.userType === 'registered') {
        res.sendStatus(200);
        console.log('Already logged in as:', user.id);
      } else {
        const guestUserSession = await Session.findByPk(req.session.id);
        await guestUserSession.update({
          userId: user.id,
        });

        req.session.userType = 'registered';
        res.redirect('/');
      }
    } else {
      res.sendStatus(500);
      console.log('Email and password required');
    }
  } catch (e) {
    res.sendStatus(500);
    console.log('Error logging in', e);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const guestUser = await User.findOne({ where: { id: req.session.userId } });
    const {
      firstName,
      lastName,
      email,
      password,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      phone,
    } = req.body;

    if (firstName && lastName && email && password) {
      const user = await User.findOne({ where: { email } });
      if (user) {
        res.sendStatus(401);
        console.log('Email already exists in the system');
      } else {
        const registeredUser = await guestUser.update({
          type: 'registered',
          firstName,
          lastName,
          email,
          password,
          addressLine1,
          addressLine2,
          city,
          state,
          zipCode,
          phone,
        });
        console.log('Signed up and logged in as:', registeredUser.id);
        req.session.userType = 'registered';
        res.redirect('/');
      }
    } else {
      res.sendStatus(500);
      console.log('Required fields missing for signup');
    }
  } catch (e) {
    console.log('Error signing up', e);
  }
});

router.post('/logout', async (req, res) => {
  try {
    // Clear the session from the database.
    const session = await Session.findByPk(req.session.id);
    await session.destroy();
    // Clear the session from memory...
    req.session.destroy(err => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.clearCookie(process.env.SESH_NAME);
        res.redirect('/');
      }
    });
  } catch (e) {
    res.sendStatus(500);
    console.log('Error logging out', e);
  }
});

module.exports = router;
