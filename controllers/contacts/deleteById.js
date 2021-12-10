const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const deleteById = async (req, res) => {
  // try {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw new NotFound(`contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: {
      result,
    },
  });
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = deleteById;
