"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart.init(
    {
      user_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        references: { model: "Users", key: "user_id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      product_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        references: { model: "Products", key: "product_id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }
    },
    {
      sequelize,
      modelName: "Cart"
    }
  );
  return Cart;
};
