const MaintCustomer = require("../models/Maintenance.model");

module.exports = {
  createCustomer: (req, res) => {
    MaintCustomer.create(req.body)
      .then((newMCustomer) => {
        console.log(newMCustomer);
        res.json(newMCustomer);
      })
      .catch((err) => res.status(400).json({ err }));
  },
};
