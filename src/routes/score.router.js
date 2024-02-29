const { getAll, create, getOne, remove, update } = require('../controllers/score.controllers');
const express = require('express');

const scoreRouter = express.Router();

scoreRouter.route('/scores')
    .get(getAll)
    .post(create);

scoreRouter.route('/scores/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = scoreRouter;