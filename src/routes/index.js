const express = require('express');
const countryRouter = require('./country.router');
const cityRouter = require('./city.router');
const userRouter = require('./user.router');
const studentRouter = require('./student.router');
const courseRouter = require('./course.router');
const router = express.Router();

// colocar las rutas aquí
router.use(countryRouter);
router.use(cityRouter);
router.use(userRouter);
router.use(studentRouter);
router.use(courseRouter);

module.exports = router;