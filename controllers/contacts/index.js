const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add.js");
const updateById = require("./updateById");
const deleteById = require("./deleteById");
const updateFavorite = require("./updateFavorite");
const getAllByFavorite = require("./getAllByFavorite");
module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
  updateFavorite,
  getAllByFavorite,
};
