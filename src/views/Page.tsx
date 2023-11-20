import { useSelector, useDispatch } from "react-redux";
import NumStatus from "@/store/NumStatus";

import { AnyAction } from "redux";

const Page: React.FC = function () {
	// 获取仓库数据
	const { num } = useSelector((state: RootState) => {
		return {
			num: state.handleNumReducer.num,
		};
	});

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
