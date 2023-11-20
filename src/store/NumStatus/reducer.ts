import handleNum from "./index";

const defaultState = {
	...handleNum.state,
};

const handleNumReducer = function (
	state = defaultState,
	action: { type: string; payload: number },
) {
	console.log("reducer执行了", action);
	const newState = JSON.parse(JSON.stringify(state));

	// 优化 switch...case... 当传入类型和 actionName 匹配时，自动执行相应的action操作
	for (const key in handleNum.actionName) {
		if (
			action.type ===
			handleNum.actionName[key as keyof typeof handleNum.actionName]
		) {
			handleNum.action[key as keyof typeof handleNum.action](newState, action);
			break;
		}
	}

	// switch (action.type) {
	// 	case "addOne":
	// 		handleNum.action.addOne(newState);
	// 		break;
	// 	case "addTen":
	// 		handleNum.action.addTen(newState, action);

	// 		break;
	// 	default:
	// 		break;
	// }
	return newState;
};

export default handleNumReducer;
