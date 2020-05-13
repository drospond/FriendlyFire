module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
      name: {type: DataTypes.STRING, allowNull: false},
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