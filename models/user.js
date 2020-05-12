module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    handle: DataTypes.STRING,
    discord: DataTypes.STRING,
  });

  User.associate = function (models) {
    User.belongsToMany(models.Game, {
      through: "UserGame",
      foreignKey: "userId",
    });
    User.belongsToMany(User, { through: "Friends", as: "user1", foreignKey: "user1Id"});
    User.belongsToMany(User, { through: "Friends", as: "user2", foreignKey: "user2Id"});
  };
  

  return User;
};

