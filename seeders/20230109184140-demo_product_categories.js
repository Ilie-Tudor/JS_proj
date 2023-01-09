"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Product_Categories", [
      {
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670a",
        category_name: "Laptops",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670b",
        category_name: "Phones",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: "b158c5f0-86c4-4be5-9d4e-4eea37d2670c",
        category_name: "Headphones",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Product_Categories", null, {});
  },
};
