class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong at the Service layer");
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.repository.get(id);
      return response;
    } catch (error) {
      console.log("Something went wrong at the Service layer");
      throw error;
    }
  }

  async update(data, id) {
    try {
      const response = await this.repository.update(data, id);
      return response;
    } catch (error) {
      console.log("Something went wrong at the Service layer");
      throw error;
    }
  }

  async delete(id) {
    try {
      const response = await this.repository.delete(id);
      return response;
    } catch (error) {
      console.log("Something went wrong at the Service layer");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      console.log("Something went wrong at the Service layer");
      throw error;
    }
  }
}

module.exports = CrudService;
