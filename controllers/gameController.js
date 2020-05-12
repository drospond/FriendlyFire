const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models");

router.get("/:id", (req, res) => {
  db.Game.findOne({
    where: {
      id: req.params.id,
    },
  }).then((user) => res.json(user));
});

router.post("/", (req, res) => {
  const newGame = {
    name: req.body.name,
    platform: req.body.platform
  };
  db.Game.create(newGame)
    .then(() => {
      res.json([newGame,{
        success: true,
      }]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        success: false,
        message: "Failed to create game.",
      });
    });
});

module.exports = router;
