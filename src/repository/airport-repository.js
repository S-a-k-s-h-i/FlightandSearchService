const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, address, city_id }) {
    try {
      const airport = await Airport.create({
        name,
        address,
        city_id,
      });
      return airport;
    } catch (error) {
      throw error;
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      throw error;
    }
  }

  async updateAirport(data, airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      if (data.name) airport.name = data.name;
      if (data.address) airport.address = data.address;
      if (data.city_id) airport.city_id = data.city_id;
      await airport.save();
      return airport;
    } catch (error) {
      throw error;
    }
  }

  async deleteAirport(airportId) {
    try {
      const result = await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AirportRepository;
