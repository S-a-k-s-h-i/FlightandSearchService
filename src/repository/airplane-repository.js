const { Airplane } = require("../models/index");

class AirplaneRepository {
  async createAirplane(data) {
    try {
      const airplane = await Airplane.create(data);
      return airplane;
    } catch (error) {
      console.log("Something went wront at the repository layer");
      throw error;
    }
  }

  async getAirplane(airplaneId) {
    try {
      const airplane = await Airplane.findByPk(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }
}

module.exports = AirplaneRepository;
