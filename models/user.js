module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
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
      as: "User1",
      foreignKey: "user1Id",
    });
    User.belongsToMany(User, {
      through: "Friends",
      as: "User2",
      foreignKey: "user2Id",
    });
  };

  return User;
};
