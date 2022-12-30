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
    await queryInterface.bulkInsert("Airports", [
      {
        name: "Indira Gandhi International Airport",
        city_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "IGI AIRPORT",
        city_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Airports Authority of India",
        city_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        city_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Juhu Airport",
        city_id: 3,
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
    await queryInterface.bulkDelete("Airports", null, {});
  },
};
