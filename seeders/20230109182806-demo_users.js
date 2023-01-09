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
    return queryInterface.bulkInsert("Users", [
      {
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670a",
        user_name: "John",
        email: "john@gmail.com",
        password: "John",
        display_name: "John",
        address: "john's address",
        postal_code: "013388",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670b",
        user_name: "Mihai",
        email: "Mihai@gmail.com",
        password: "Mihai",
        display_name: "Mihai",
        address: "Mihai's address",
        postal_code: "013388",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670c",
        user_name: "Clara",
        email: "Clara@gmail.com",
        password: "Clara",
        display_name: "Clara",
        address: "Clara's address",
        postal_code: "013388",
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
    return queryInterface.bulkDelete("Users", null, {});
  },
};
