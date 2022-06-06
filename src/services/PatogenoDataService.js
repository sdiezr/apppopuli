import http from "../http-common";

class PatogenoDataService {

  getAll() {
    return http.get("/patogenos");
  }

}

export default new PatogenoDataService();
