module.exports = function (sequelize, DataTypes) {
    const UserGame = sequelize.define(
      "UserGame",
      {
        gameId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
      },
    //   {
    //     indexes: [
    //       {
    //         unique: true,
    //         fields: ["user1Id", "user2Id"],
    //       },
    //     ],
    //   }
    );
  
    // Friend.associate = function (models) {
    //   Friend.belongsTo(models.User, { as: "User1" });
    //   Friend.belongsTo(models.User, { as: "User2" });
    // };
  
    // Friend.removeAttribute('id');
  
    return UserGame;
  };
  