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
    return queryInterface.bulkInsert("Reviews", [
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8219d9",
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670a",
        rating: 2,
        review_summary: "Multumit de achizitie",
        content: "Pret corect",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Reviews", null, {});
  }
};
