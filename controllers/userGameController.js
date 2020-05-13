const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  const newUserGame = {
    gameId: req.body.gameId,
    userId: req.body.userId,
  };
  db.UserGame.create(newUserGame)
    .then(() => {
      res.json([
        newUserGame,
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
        message: "Failed to create UserGame.",
      });
    });
});

router.delete("/:gameId/:userId", (req, res) => {
  db.UserGame.destroy({
      where: {
        gameId: req.params.gameId,
        userId: req.params.userId
      }
    })
    .then(() => {
      res.json(
        {
          success: true,
        },
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        success: false,
        message: "Failed to delete UserGame.",
      });
    });
});

module.exports = router