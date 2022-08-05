import axios from "axios";


export default class RestAPI {

  constructor() {
    this.baseUrl = 'https://ms-discord-upy5mhs63a-rj.a.run.app';
    this.token = this.getToken();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  generateHeaders(auth) {
    let headers = {};
    if (auth) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    return {
      headers
    }
  }

  async get(url, auth = true) {
    const headers = this.generateHeaders(auth);
    return axios.get(`${this.baseUrl}${url}`, headers)
      .then(res => res.data);
  }

  async post(url, payload, auth = true) {
    const headers = this.generateHeaders(auth);
    return axios.post(`${this.baseUrl}${url}`, payload, headers)
      .then(res => res.data);
  }

  async delete(url, auth = true) {
    const headers = this.generateHeaders(auth);
    return axios.delete(`${this.baseUrl}${url}`, headers)
      .then(res => res.data);
  }

  async put(url, payload, auth = true) {
    const headers = this.generateHeaders(auth = true);
    return axios.put(`${this.baseUrl}${url}`, payload, headers)
      .then(res => res.data);
  }
}