import {
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";

import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("Option 1", "/about", <PieChartOutlined />),
	getItem("User", "sub1", <UserOutlined />, [
		getItem("Tom", "/page"),
		getItem("Bill", "4"),
		getItem("Alex", "5"),
	]),
	getItem("Team", "sub2", <TeamOutlined />, [
		getItem("Team 1", "6"),
		getItem("Team 2", "8"),
	]),
	getItem("Files", "9", <FileOutlined />),
];

const Home: React.FC = function () {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const navigateTo = useNavigate();
	function menuClick(e: { key: string }) {
		navigateTo(e.key);
	}

	return (
		<Layout style={{ minHeight: "100vh" }}>
			{/* 左侧边栏 */}
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<div className='demo-logo-vertical'>广东工业大学</div>
				<Menu
					theme='dark'
					defaultSelectedKeys={["1"]}
					mode='inline'
					items={items}
					onClick={menuClick}
				/>
			</Sider>
			{/* 右边布局 */}
			<Layout>
				{/* 头部 */}
				<Header style={{ paddingLeft: "16px", background: colorBgContainer }}>
					<Breadcrumb style={{ margin: "16px 0" }}>
						{/* <Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item> */}
					</Breadcrumb>
				</Header>
				{/* 内容 */}
				<Content
					style={{
						margin: "16px 16px 0",
						background: colorBgContainer,
						height: "100%",
					}}
				>
					<Outlet />
				</Content>
				<Footer
					style={{ textAlign: "center", padding: "0px", lineHeight: "48px" }}
				>
					Ant Design ©2023 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export default Home;
