import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 20000,
});

instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(err) => {
		return Promise.reject(err);
	},
);

instance.interceptors.request.use(
	(res) => {
		return res.data;
	},
	(err) => {
		return Promise.reject(err);
	},
);

export default instance;
