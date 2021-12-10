const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const getById = async (req, res) => {
  // try {
  const { contactId } = req.params;
  // const { id } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    throw new NotFound(`contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      contact,
    },
  });
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = getById;
