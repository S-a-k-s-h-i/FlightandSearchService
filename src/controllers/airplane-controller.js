const { AirplaneService } = require("../services/index");
const { SuccessCodes } = require("../utils/errorCodes");

const airplaneService = new AirplaneService();

/**
 * POST
 * /airplanes/
 */
const create = async (req, res) => {
  try {
    const airplane = await airplaneService.create(req.body);
    res.status(SuccessCodes.CREATED).json({
      data: airplane,
      success: true,
      message: "Successfully created an airplane",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "Failed to create an airplane",
      err: error,
    });
  }
};

module.exports = {
  create,
};
