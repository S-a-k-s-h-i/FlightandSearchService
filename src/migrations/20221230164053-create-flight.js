"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      departure_airport_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      arrival_airport_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      airplane_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      arrivalTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      departureTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      airport_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      boardingGate: {
        type: Sequelize.STRING,
      },
      totalSeats: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
