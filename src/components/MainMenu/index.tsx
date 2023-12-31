import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import { useNavigate, useLocation } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";

const items = [
	{
		label: "选项一",
		key: "/home/about",
		icon: <PieChartOutlined />,
	},
	{
		label: "选项二",
		key: "/pagefather",
		icon: <UserOutlined />,
		children: [
			{
				label: "子选项一",
				key: "/home/page",
			},
			{
				label: "子选项二",
				key: "/page2",
			},
		],
	},
	{
		label: "选项三",
		key: "/page1father",
		icon: <UserOutlined />,
		children: [
			{
				label: "子选项一",
				key: "/page1-1",
			},
			{
				label: "子选项二",
				key: "/page1-2",
			},
		],
	},
];

const MainMenu: React.FC = function () {
	const navigateTo = useNavigate();
	const currentRoute = useLocation();

	const firstOpenKey: string = useMemo((): string => {
		let firstOpenKey: string = "";

		function findKey(obj: { key: string }) {
			return obj.key === currentRoute.pathname;
		}

		for (let i = 0; i < items.length; i++) {
			if (items[i]["children"] && items[i]["children"]!.find(findKey)) {
				firstOpenKey = items[i].key;
				break;
			}
		}
		return firstOpenKey;
	}, [currentRoute]);

	const [openKeys, setOpenKeys] = useState([firstOpenKey]);

	const menuClick = useCallback(
		(e: { key: string }) => {
			navigateTo(e.key);
		},
		[navigateTo],
	);

	const handleOpenChange = useCallback((keys: string[]) => {
		setOpenKeys([keys[keys.length - 1]]);
	}, []);

	return (
		<Menu
			theme='dark'
			defaultSelectedKeys={[currentRoute.pathname]}
			mode='inline'
			items={items}
			onClick={menuClick}
			onOpenChange={handleOpenChange}
			openKeys={openKeys}
		/>
	);
};

export default MainMenu;
