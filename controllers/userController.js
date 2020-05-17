const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  const email = req.body.email.trim();
  const password = req.body.password.trim();
  const handle = req.body.handle.trim();

  db.User.create({ email, password, handle})
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

router.get("/:id", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((user) => res.json(user));
});
router.get("/handle/:handle", (req, res) => {
  db.User.findOne({
    where: {
      handle: req.params.handle,
    },
  }).then((user) => res.json(user));
});

router.put("/:id", (req, res) => {
  const updatedUser = {
    email: req.body.email.trim(),
    password: req.body.password.trim(),
    handle: req.body.handle.trim(),
    discord: req.body.discord.trim(),
  };

  db.User.update(updatedUser, {
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.json(updatedUser);
  });
});

module.exports = router;
