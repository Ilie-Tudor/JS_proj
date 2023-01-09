"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product, { foreignKey: "category_id" });
    }
  }
  Product_Category.init(
    {
      category_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      category_name: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Product_Category",
    }
  );
  return Product_Category;
};
