const { CityService } = require("../services/index");
const { SuccessCodes } = require("../utils/errorCodes");

const cityService = new CityService();

/**
 * POST
 * /city
 * data-> req.body
 */
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to create city",
      err: error,
    });
  }
};

/**
 * GET
 * /city/:id
 */
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: city,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to get a city",
      err: error,
    });
  }
};

/**
 * PATCH
 * /city/:id
 * data-> req.body
 */
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.body, req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: city,
      success: true,
      message: "Successfully updated a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to update city",
      err: error,
    });
  }
};

/**
 * DELETE
 * /city/:id
 */
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to delete city",
      err: error,
    });
  }
};

/**
 * GET
 * /city
 */
const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(SuccessCodes.OK).json({
      data: cities,
      success: true,
      message: "Successfully fetched all cities",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to get all cities",
      err: error,
    });
  }
};

/**
 * POST
 * /cities
 */
const createMultiple = async (req, res) => {
  try {
    const cities = await cityService.createMultipleCity(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: cities,
      success: true,
      message: "Successfuly created multiple cities",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to add multiple cities",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
  update,
  destroy,
  getAll,
  createMultiple,
};
