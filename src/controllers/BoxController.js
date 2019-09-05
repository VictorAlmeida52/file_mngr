const Box = require("../models/Box");

class BoxController {
  async store(req, res) {
    const box_find = await Box.findOne({ title: req.body.title });

    if (box_find) {
      return res.json(box1);
    } else {
      const box = await Box.create(req.body);
      return res.json(box);
    }
  }

  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: "files",
      options: { sorty: { createdAt: -1 } }
    });

    return res.json(box);
  }
}

module.exports = new BoxController();
