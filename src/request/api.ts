import request from "./index";

export const getList = () => {
	return request.get("/business/list");
};
