// 这种写法类似于 vuex 的 store
// 处理数据的逻辑卸载这里和 reducer 分离，避免 reducer 太臃肿难以维护

const store = {
	state: {
		num: 10,
	},
	action: {
		addOne(newState: { num: number }) {
			newState.num++;
		},
		addTen(
			newState: { num: number },
			action: { type: string; payload: number },
		) {
			newState.num += action.payload;
		},
		addhundred(
			newState: { num: number },
			action: { type: string; payload: number },
		) {
			newState.num += action.payload;
		},
	},
	asyncAction: {
		asyncAddOne(dispath: (obj: { type: string; payload?: number }) => void) {
			setTimeout(() => {
				dispath({ type: "addOne" });
			}, 1000);
		},
	},
	actionName: {
		// addOne: "addOne",
		// addTen: "addTen",
	},
};

// 自动生成 actionName
type ActionName = {
	[key: string]: string;
};

const _actionName: ActionName = {};
for (const key in store.action) {
	_actionName[key] = key + "";
}

store.actionName = _actionName;

export default store;
