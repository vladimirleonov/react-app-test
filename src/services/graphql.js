import axios from "axios";
import config from "../config";
import { store } from "../redux/index";

const api = axios.create({
    baseURL: config.authUrl
    // withCredentials: true
});

api.interceptors.request.use((config) => {
    if (config.headers === undefined) {
        config.headers = {};
    }

    const accessToken = store.getState().auth.data.accessToken;

    config.headers.Authorization = `Bearer ${accessToken || ""}`;
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
}
