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
    User.belongsToMany(User, { through: "Friend", as: "friend1", foreignKey: "userId1"});
    User.belongsToMany(User, { through: "Friend", as: "friend2", foreignKey: "userId2"});
  };

  return User;
};

