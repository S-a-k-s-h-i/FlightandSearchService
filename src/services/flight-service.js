const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/compareTime");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    if (!compareTime(data.arrivalTime, data.departureTime))
      throw "Arrival time cannot be less than departure time";
    try {
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplane_id
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wront at the service layer");
      throw error;
    }
  }

  async getAllFlights(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wront at the service layer");
      throw error;
    }
  }
}

module.exports = FlightService;