import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import routes from "./router";

function ToLogin() {
	const navigateTo = useNavigate();

	useEffect(() => {
		navigateTo("login");
	}, [navigateTo]);

	return <div></div>;
}

function BeforeRouterEnter() {
	const outlet = useRoutes(routes);
	const location = useLocation();

	const token = localStorage.getItem("token");
	console.log(token);
	if (location.pathname === "/home" && !token) {
		alert("请您先登录");
		return <ToLogin />;
	}

	return outlet;
}

function App() {
	return (
		<>
			{/* <div> 顶级组件</div>
      <Button type="primary">123</Button>
      <FullscreenExitOutlined />
      <br />
      <NavLink to="/home">home</NavLink>
      <NavLink to="/about">about</NavLink> */}
			<BeforeRouterEnter></BeforeRouterEnter>
		</>
	);
}

export default App;
