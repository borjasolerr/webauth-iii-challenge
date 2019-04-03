const express = require('express');
const DB = require('../data/dbQueries');

const routes = express.Router();

/*
GET ALL USERS
*/
routes.get('/', async (req, res, next) => {
  try {
    const getEveryUser = await DB.getAllUsers();
    res.status(200).json(getEveryUser);
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
