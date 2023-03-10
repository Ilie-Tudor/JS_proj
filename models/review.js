"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "user_id" });
      this.belongsTo(models.Product, { foreignKey: "product_id" });
    }
  }
  Review.init(
    {
      product_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        references: { model: "Products", key: "product_id" }
      },
      user_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        references: { model: "Users", key: "user_id" }
      },
      rating: { type: DataTypes.INTEGER, allowNull: false },
      review_summary: { type: DataTypes.STRING, allowNull: false },
      content: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "Review"
    }
  );
  return Review;
};
