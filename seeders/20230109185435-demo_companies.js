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
    return queryInterface.bulkInsert("Companies", [
      {
        company_id: "3d593620-f0ba-3d2b-a9b9-04d6eb8227d9",
        company_name: "Durgan, Koepp and Parisian",
        email: "jamie.kohler@example.org",
        company_token: "700989",
        password: "706537",
        cui: "858950",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_id: "6f8cd063-3945-324c-b3c1-714b716ea55b",
        company_name: "Spencer Ltd",
        email: "ischowalter@example.org",
        company_token: "376148",
        password: "603253",
        cui: "716146",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_id: "8016f83b-075b-3b4d-9db2-0c3a2db73235",
        company_name: "Schuster-Schumm",
        email: "guido.runte@example.org",
        company_token: "573826",
        password: "689588",
        cui: "208533",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_id: "a3235348-00f0-3452-949c-a8dde53c5af9",
        company_name: "Renner Ltd",
        email: "juvenal82@example.com",
        company_token: "276897",
        password: "428995",
        cui: "543462",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_id: "b091b74c-8dbe-34a6-a813-31a46c15e7ae",
        company_name: "Morissette, Champlin and Schuster",
        email: "breitenberg.cedrick@example.org",
        company_token: "564987",
        password: "207602",
        cui: "423734",
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
    return queryInterface.bulkDelete("Companies", null, {});
  },
};
