const express = require('express');
const countryRouter = require('./country.router');
const cityRouter = require('./city.router');
const userRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use(countryRouter);
router.use(cityRouter);
router.use(userRouter);

module.exports = router;