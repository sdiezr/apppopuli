import http from "../http-common";

class InformeDataService {

  create(data) {
    return http.post("/informes", data);
  }

  getAll() {
    return http.get("/informes");
  }

}

export default new InformeDataService();
