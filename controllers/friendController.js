const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

router.post("/", (req, res) => {
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

router.delete("/:user1Id/:user2Id", (req, res) => {
  db.Friend.destroy({
      where: {
        user1Id: req.params.user1Id,
        user2Id: req.params.user2Id
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
        message: "Failed to delete friend.",
      });
    });
});

router.get("/find", (req, res) => {
  let newObjectToQuery = {};
  if (req.query.name) {
    newObjectToQuery.handle = req.query.name;
  }
  db.User.findOne({
    where: newObjectToQuery,
    attributes: ["id", "handle", "discord"]
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/findAll", (req, res) => {
  db.User.findAll({
    attributes: ["id", "handle", "discord"]
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/", (req, res) => {
  const userId = 4;
  db.Friend.findAll({
    where: {
      [Op.or]: {
        user1Id: userId,
        user2Id: userId
      }
    },
    include:[{
      model: db.User,
      as: "User1",
      attributes: ["id", "handle", "discord"]
    },
    {
      model: db.User,
      as: "User2",
      attributes: ["id", "handle", "discord"]
    }]
  })
    .then((result) => {
      const friendsArray = result.map((friendship)=>{
        if(friendship.User1.id !== userId){
          return friendship.User1;
        }
        if(friendship.User2.id !== userId){
          return friendship.User2;
        }
      })
      res.json(friendsArray);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
