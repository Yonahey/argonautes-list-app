import axios from "axios";

export const apiBaseUrl = axios.create({
	baseURL: "http://localhost:5000",
});

export const getArgonautes = async () => {
	return apiBaseUrl.get("/getArgonautesList");
};

export const addArgonautes = async ({argonauteName}) => {
	console.log(argonauteName);
	return apiBaseUrl.post("/createArgonaute", {argonauteName});
};

export const deleteArgonautes = async ({argonauteId}) => {
	console.log(argonauteId);
	return apiBaseUrl.delete(`/deleteArgonaute/${argonauteId}`);
};
