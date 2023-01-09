"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Company, { foreignKey: "company_id" });
      this.belongsTo(models.Product_Category, { foreignKey: "category_id" });
      this.belongsToMany(models.User, {
        through: "Carts",
        foreignKey: "product_id",
        as: "cart",
      });
      this.belongsToMany(models.User, {
        through: models.Review,
        foreignKey: "product_id",
        as: "review",
      });
      this.belongsToMany(models.User, {
        through: models.Favorite,
        foreignKey: "product_id",
        as: "favorite",
      });
    }
  }
  Product.init(
    {
      product_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      company_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      product_name: { type: DataTypes.STRING, allowNull: false },
      product_description: { type: DataTypes.TEXT, allowNull: false },
      specifications: { type: DataTypes.TEXT, allowNull: true },
      price: { type: DataTypes.INTEGER, allowNull: false },
      category_id: { type: DataTypes.UUID, allowNull: true },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  return Product;
};
