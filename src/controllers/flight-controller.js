const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../utils/errorCodes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestBody = {
      flightNumber: req.body.flightNumber,
      departure_airport_id: req.body.departure_airport_id,
      arrival_airport_id: req.body.arrival_airport_id,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
    };
    const flight = await flightService.createFlight(flightRequestBody);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to create a flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.body);
    return res.status(SuccessCodes.OK).json({
      data: flights,
      success: true,
      message: "Successfully fetched the flights",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to fetch flights",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
