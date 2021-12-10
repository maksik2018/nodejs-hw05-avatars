const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const getAllByFavorite = async (req, res) => {
  const { _id, favorite } = req.user;

  const result = await Contact.find({ owner: _id, favorite: true });

  res.json({
    status: "success",
    code: 200,
    data: {
      result: result,
    },
  });
};

module.exports = getAllByFavorite;
