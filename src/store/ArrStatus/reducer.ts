import handleNum from "../NumStatus";
const defaultState = {
	...handleNum.state,
};

const reducer = function (
	state = defaultState,
	action: { type: string; payload: number },
) {
	console.log("reducer执行了");
	const newState = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		case "ADD_ONE":
			handleNum.action.addOne(newState);
			break;
		case "ADD_TEN":
			handleNum.action.addTen(newState, action);

			break;
		default:
			break;
	}
	return newState;
};

export default reducer;
