import RestAPI from "./restAPI";

export default class AuthService extends RestAPI {

  async login(payload) {
    return this.post("/auth/login", payload, false);
  }

  async check() {
    return await this.get("/auth/check");
  }
} 