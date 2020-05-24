const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  const email = req.body.email.trim();
  const password = req.body.password.trim();
  const handle = req.body.handle.trim();
//will need to abstract if error handling eventually, getting pretty bulky
  db.User.create({ email, password, handle })
    .then(() => {
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      if(err.errors[0].validatorName==="is"){
        res.status(400);
        return res.json({
          success: false,
          message: "Password must be atleast 8 characters, contain atleast one letter and number, and can't contain an \" ' \".",
        });
      }
      if(err.errors[0].validatorName==="isEmail"){
        res.status(400);
        return res.json({
          success: false,
          message: "Enter a valid email address.",
        });
      };
      let errorType = [];
      errorType.push(err.original.sqlMessage.split("'")[0]);
      errorType.push(err.original.sqlMessage.split("'")[3]);
      if (
        errorType[0] === "Duplicate entry " &&
        errorType[1] === "users.handle"
      ) {
        res.status(403);
        res.json({
          success: false,
          message: "Username already exists.",
        });
      } else if (
        errorType[0] === "Duplicate entry " &&
        errorType[1] === "users.email"
      ) {
        res.status(403);
        res.json({
          success: false,
          message: "Account already exists with that email.",
        });
      } else {
        res.status(500);
        res.json({
          success: false,
          message: "Failed to create new user.",
        });
      }
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
    // email: req.body.email.trim(),
    // password: req.body.password.trim(),
    // handle: req.body.handle.trim(),
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

router.delete("/:id", (req, res) => {
  db.User.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.json({
      success: true,
    });
  });
});

module.exports = router;
