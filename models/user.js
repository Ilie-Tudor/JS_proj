"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Product, {
        through: models.Cart,
        foreignKey: "user_id",
        as: "cart"
      });
      this.belongsToMany(models.Product, {
        through: models.Review,
        foreignKey: "user_id",
        as: "review"
      });
      this.belongsToMany(models.Product, {
        through: models.Favorite,
        foreignKey: "user_id",
        as: "favorite"
      });
      this.hasMany(models.Review, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      display_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING
      },
      postal_code: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "User"
    }
  );
  return User;
};
