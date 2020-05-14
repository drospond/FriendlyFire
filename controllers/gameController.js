const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/:id", (req, res) => {
  db.Game.findOne({
    where: {
      id: req.params.id,
    },
  }).then((user) => res.json(user));
});

router.get("/", (req, res) => {
  let newObjectToQuery = {};
  if (req.query.name) {
    newObjectToQuery.name = req.query.name;
  }
  if (req.query.platform) {
    newObjectToQuery.platform = req.query.platform;
  }
  db.Game.findOne({
    where: newObjectToQuery,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  const newGame = {
    name: req.body.name,
    platform: req.body.platform,
  };
  db.Game.create(newGame)
    .then(() => {
      res.json([
        newGame,
        {
          success: true,
        },
      ]);
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
