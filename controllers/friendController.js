const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
    console.log("req body: ", req.body);
    const newFriend = {
      user1Id: req.body.user1Id,
      user2Id: req.body.user2Id,
    };
    db.Friend.create(newFriend)
      .then(() => {
        res.json([
          newFriend,
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
          message: "Failed to create friend.",
        });
      });
  });


module.exports = router;
