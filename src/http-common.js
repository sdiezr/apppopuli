import axios from "axios";

export default axios.create({
  baseURL: "https://test.apppopuli.es/api",
  headers: {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
  "Content-type": "application/json"
  }
});