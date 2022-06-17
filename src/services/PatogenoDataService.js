import http from "../http-common";

class PatogenoDataService {

  getAll() {
    return http.get("/patogenos");
  }

  get(id_sintoma) {
    return http.get(`/patogenos/${id_sintoma}`);
  }

}

export default new PatogenoDataService();
