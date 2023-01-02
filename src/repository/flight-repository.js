const { Flight } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrival_airport_id) {
      filter.arrival_airport_id = data.arrival_airport_id;
    }
    if (data.departure_airport_id) {
      filter.departure_airport_id = data.departure_airport_id;
    }
    let priceFilter = [];
    if (data.minPrice) {
      //Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      //Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flight.findAndCountAll(
        {
          where: filterObject,
        },
        { distinct: true }
      );
      return flight;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }
}

module.exports = FlightRepository;
