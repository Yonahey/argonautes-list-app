import axios from "axios";

export const apiBaseUrl = axios.create({
	baseURL: "http://localhost:5000",
});

export const getArgonautes = async () => {
	return apiBaseUrl.get("/getArgonautesList");
};
