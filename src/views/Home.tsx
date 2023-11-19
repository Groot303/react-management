import { Breadcrumb, Layout, theme } from "antd";

import { useState } from "react";
import { Outlet } from "react-router-dom";

import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = function () {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: "100vh" }}>
			{/* 左侧边栏 */}
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<div className='demo-logo-vertical'>广东工业大学</div>
				<MainMenu />
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
