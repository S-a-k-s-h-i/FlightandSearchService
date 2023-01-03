const { ClientErrorsCodes } = require("../utils/errorCodes");

const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.departure_airport_id ||
    !req.body.arrival_airport_id ||
    !req.body.airplane_id ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    return res.status(ClientErrorsCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for creating a flight",
      error: "Missing mandatory fields for creating a flight",
    });
  }
  next();
};

module.exports = {
  validateCreateFlight,
};
