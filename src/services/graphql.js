import axios from "axios";
import config from "../config";

const api = axios.create({
  baseURL: config.authUrl,
});

api.interceptors.request.use((config) => {
  if (config.headers === undefined) {
    config.headers = {};
  }

  config.headers.Authorization = `Bearer ${
    localStorage.getItem("token") || ""
  }`;

  return config;
});

export default class authService {
  static async register(email, password) {
    const query = `
			mutation {
				register(email: "${email}", password: "${password}") {
					access_token
				}
			}
		`;
    return api.post("", { query });
  }

  static async login(email, password) {
    const query = `
			mutation {
				login(email: "${email}", password: "${password}") {
					access_token
				}
			}`;
    return api.post("", { query });
  }

  static async checkAuth() {
    const query = `
					query {
						auth {
							access_token
						}
					}`;
    return api.get(`?query=${encodeURIComponent(query)}`);
  }
}
