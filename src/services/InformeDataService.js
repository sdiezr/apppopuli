import http from "../http-common";

class InformeDataService {

  create(data) {
    return http.post("/informes", data);
  }

}

export default new InformeDataService();
