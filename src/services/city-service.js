const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await CityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }

  async updateCity(data, cityId) {
    try {
      const city = await CityRepository.updateCity(data, cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      const result = await CityRepository.deleteCity(cityId);
      return result;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
}
