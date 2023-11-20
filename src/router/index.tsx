import { Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "@/views/Home";
import Login from "@/views/Login";

//懒加载
// import About from "@/views/About"

const About = lazy(() => import("@/views/About"));
const Page = lazy(() => import("@/views/Page"));

const withLoadingComponent = (comp: JSX.Element) => {
	return <Suspense fallback={<span> 加载中... </span>}>{comp}</Suspense>;
};

const routes = [
	{
		path: "/",
		element: <Navigate to='about' />,
	},
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "/about",
				element: withLoadingComponent(<About />),
			},
			{
				path: "/page",
				element: withLoadingComponent(<Page />),
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "*",
		element: <Navigate to='about' />,
	},
];

export default routes;
