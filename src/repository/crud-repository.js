class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = this.model.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  async get(modelId) {
    try {
      const result = this.model.findByPk(modelId);
      return result;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  async getAll() {
    try {
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  async update(data, modelId) {
    try {
      const result = this.model.update(data, {
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  async delete(modelId) {
    try {
      await this.model.destroy({
        where: {
          id: modelId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }
}

module.exports = CrudRepository;
