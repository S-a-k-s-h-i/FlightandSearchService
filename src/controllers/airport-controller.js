const { AirportService } = require("../services/index");

const airportService = new AirportService();

/**
 * POST
 * data -> req.body
 */
const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created an airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to create an airport",
      err: error,
    });
  }
};

/**
 * GET
 * /airport/:id
 */
const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully fetched an airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to fetch an airport",
      err: error,
    });
  }
};

/**
 * POST
 * /airport/:id
 */
const update = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.body, req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully updated an airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to update an airport",
      err: error,
    });
  }
};

/**
 * DELETE
 * /airport/:id
 */
const destroy = async (req, res) => {
  try {
    const result = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: result,
      success: true,
      message: "Successfully deleted an airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to delete an airport",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
  update,
  destroy,
};
