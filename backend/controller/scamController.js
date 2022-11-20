const Scam = require('../models/scam');

module.exports = {
  add(req, res) {
    return Scam.create({
      id: req.body.id,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      category: req.body.category,
      description: req.body.description,
    });
  },
};
