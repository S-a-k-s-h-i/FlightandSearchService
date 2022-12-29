const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw error;
    }
  }

  async updateCity(data, cityId) {
    try {
      //Below approac will work but will not return the updated data
      //If we use Pg then returning:true can be used otherwise not
      //   const city = await City.update(data, {
      //     where: {
      //       id: cityId,
      //     },
      //   });

      //For getting the updated data in mysql
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CityRepository;
