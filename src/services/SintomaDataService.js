import http from "../http-common";

class SintomaDataService {

  getAll() {
    return http.get("/sintomas");
  }

}

export default new SintomaDataService();
