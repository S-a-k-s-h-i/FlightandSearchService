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
      console.log("Something went wront at the repository layer");
      throw error;
    }
  }
  /**
   * flightNumber
   * departure_airport_id
   * arrival_airport_id
   * airplane_id
   * arrivalTime
   * departureTime
   * airport_id
   * price
   * boardingGate
   * totalSeats -> airplane repo
   */
}

module.exports = FlightService;
