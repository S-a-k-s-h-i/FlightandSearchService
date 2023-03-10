const express = require("express");

const { FlightMiddlewares } = require("../../middlewares/index");

const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const FlightController = require("../../controllers/flight-controller");
const AirplaneController = require("../../controllers/airplane-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.delete("/city/:id", CityController.destroy);
router.get("/city", CityController.getAll);
router.post("/cities", CityController.createMultiple);

router.post("/airport", AirportController.create);
router.get("/airport/:id", AirportController.get);
router.patch("/airport/:id", AirportController.update);
router.delete("/airport/:id", AirportController.destroy);

router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  FlightController.create
);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
router.patch("/flights/:id", FlightController.update);

router.post("/airplanes", AirplaneController.create);

module.exports = router;
