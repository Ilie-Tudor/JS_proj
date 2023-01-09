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
    return queryInterface.bulkInsert("Carts", [
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8215d9",
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8212d9",
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670b",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8219d9",
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670c",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8214d9",
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8217d9",
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670b",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8210d9",
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670c",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8211d9",
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8216d9",
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670b",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8213d9",
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670c",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: "5c593620-f0ba-3d2b-a9b9-04d6eb8218d9",
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670a",
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
    return queryInterface.bulkDelete("Carts", null, {});
  },
};
