import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
	const outLet = useRoutes(routes);

	return (
		<>
			{/* <div> 顶级组件</div>
      <Button type="primary">123</Button>
      <FullscreenExitOutlined />
      <br />
      <NavLink to="/home">home</NavLink>
      <NavLink to="/about">about</NavLink> */}

			{outLet}
		</>
	);
}

export default App;
