const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  const email = req.body.email.trim();
  const password = req.body.password.trim();
  const handle = req.body.handle.trim();
  const discord = req.body.discord.trim();

  db.User.create({ email, password, handle, discord })
    .then(() => {
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        success: false,
        message: "Failed to create new user.",
      });
    });
});

router.get("/:id", (req,res) => {
    db.User.findOne({
        where: {
            id: req.params.id
        }
    }).then((user)=> res.json(user))
})
module.exports = router;
