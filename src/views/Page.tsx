import { useSelector, useDispatch } from "react-redux";
import NumStatus from "@/store/NumStatus";
import { createSelector } from "reselect";

import { AnyAction } from "redux";

const Page: React.FC = function () {
	// 获取仓库数据
	// useSelector传入一个箭头函数，会导致每次num更新都返回一个新的对象，地址引用不一样，所以如果传到其他子组件会造成不必要的渲染
	// const { num } = useSelector((state: RootState) => ({
	// 	num: state.handleNumReducer.num,
	// }));
	// 用reselect库创建记忆化的选择器，用来优化
	const numVal = (state: RootState) => state.handleNumReducer.num;

	const selectObjFn = createSelector([numVal], (num) => ({ num }));
	// 只有num值改变才会重新执行selectObjFn
	const { num } = useSelector(selectObjFn);

	// 修改仓库数据
	const dispatch = useDispatch();

	function addOne() {
		dispatch({ type: "addOne" });
	}
	function addTen() {
		dispatch({ type: "addTen", payload: 10 });
	}
	function addhundred() {
		dispatch({ type: "addhundred", payload: 100 });
	}

	function asyncAddOne() {
		dispatch(NumStatus.asyncAction.asyncAddOne as unknown as AnyAction);
	}
	return (
		<>
			<div>这是page页面</div>
			<h1>{num}</h1>

			<button onClick={addOne}>点击加一</button>
			<button onClick={addTen}>点击加十</button>
			<button onClick={addhundred}>点击加一百</button>
			<button onClick={asyncAddOne}>异步加一</button>
		</>
	);
};

export default Page;
