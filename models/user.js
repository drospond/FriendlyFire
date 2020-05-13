module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    handle: { type: DataTypes.STRING, allowNull: false, unique: true },
    discord: DataTypes.STRING,
  });

  User.associate = function (models) {
    User.belongsToMany(models.Game, {
      through: "UserGame",
      foreignKey: "userId",
    });
    User.belongsToMany(User, {
      through: "Friends",
      as: "user1",
      foreignKey: "user1Id",
    });
    User.belongsToMany(User, {
      through: "Friends",
      as: "user2",
      foreignKey: "user2Id",
    });
  };

  return User;
};
