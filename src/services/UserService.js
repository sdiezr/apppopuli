import axios from 'axios';
const API_URL = 'http://localhost:8081/api/users/';

class UserService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        contact: user.contact,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'create', {
      contact: user.contact,
      password: user.password
    });
  }
}
export default new UserService();
