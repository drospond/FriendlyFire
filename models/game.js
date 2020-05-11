module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
      name: DataTypes.STRING,
      platform: DataTypes.STRING
    });
  
    Game.associate = function (models) {
      Game.belongsToMany(models.User, {
        through: "UserGame",
        foreignKey: "gameId",
      });
    };
  
    return Game;
  };