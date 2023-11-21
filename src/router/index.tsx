import { Navigate } from "react-router-dom";

import Home from "@/views/Home";
import Login from "@/views/Login";

import { About, Page } from "./lazyLoading";
import { withLoadingComponent } from "./util/withLoadingComponent";

const routes = [
	{
		path: "/",
		element: <Navigate to='home' />,
	},
	{
		path: "/home",
		element: <Home />,
		children: [
			{
				path: "/home/about",
				element: withLoadingComponent(<About />),
			},
			{
				path: "/home/page",
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
		element: <Navigate to='home' />,
	},
];

export default routes;
