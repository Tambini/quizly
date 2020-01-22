const { Router } = require('express');
const { User } = require('../models');
const { hashPassword, genToken, checkPassword, restrict } = require('../services/auth');

const userRouter = Router();

const buildAuthResponse = (user) => {
  const userData = {
    username: user.username,
    id: user.id
  }

  const token = genToken(userData);

  return {
    user: userData,
    token
  }
}

userRouter.get('/all', async (req, res) => {
  try {
    const userList = await User.findAll();
    res.json(userList);
  } catch (e) {
    console.error(e.message);
    res.json(e.message);
  }
});

userRouter.get('/admins', async (req, res) => {
  try {
    const adminList = await User.findAll({
      where: {
        admin: true
      }
    })
    res.json(adminList);
  } catch (e) {
    console.error(e.message);
    res.json(e.message);
  }
});

userRouter.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByPk(id);
    await deletedUser.destroy();
    res.json({ deletedUser });
  } catch (e) {
    console.error(e);
    res.json({ err: e.message });
  }
});


userRouter.post('/register', async (req, res, next) => { // check if user already exists on front-end do that before hitting this.
  try {
    const password_digest = await hashPassword(req.body.password);
    const username = req.body.username; // const { username } = req.body;
    const usernameExist = await User.findOne({
      where: {
        username: req.body.username
      }
    })
    if (usernameExist) {
      res.send("EXISTS");
    } else {
      const user = await User.create({
        username,
        password_digest,
        admin: req.body.admin
      });
      const respData = buildAuthResponse(user);
      res.json(respData);
    }
  } catch (err) {
    next(err);
  }
});

userRouter.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username // --- For the future: what if there are more than one of the same username? we should do a check when you register if it already exists!
      }
    })
    if (await checkPassword(req.body.password, user.password_digest)) {
      const respData = buildAuthResponse(user);
      res.json(respData);
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (e) {
    next(e);
  }
});

userRouter.get('/verify', restrict, (req, res) => {
  const user = res.locals.user;
  res.json(user);
});

module.exports = userRouter;