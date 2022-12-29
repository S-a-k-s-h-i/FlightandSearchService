const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }

  async updateCity(data, cityId) {
    try {
      const city = await this.cityRepository.updateCity(data, cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      const result = await this.cityRepository.deleteCity(cityId);
      return result;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
}

module.exports = CityService;