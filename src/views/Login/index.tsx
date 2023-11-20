import loginStyle from "./login.module.scss";

import { Input, Button, Space } from "antd";
import { ChangeEvent, useState } from "react";

const Login: React.FC = function () {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function usernameChange(e: ChangeEvent<HTMLInputElement>) {
		console.log(11);
		setUsername(e.target.value);
	}

	function passwardChange(e: ChangeEvent<HTMLInputElement>) {
		console.log(22);
		setPassword(e.target.value);
	}

	function handleLogin() {
		console.log(username, password);
	}
	return (
		<>
			<div className={loginStyle.login}>
				<Space direction='vertical' size='middle' style={{ display: "flex" }}>
					<Input placeholder='用户名' onChange={usernameChange} />
					<Input.Password placeholder='密码' onChange={passwardChange} />
					<Button type='primary' block onClick={handleLogin}>
						登录
					</Button>
				</Space>
			</div>
		</>
	);
};

export default Login;
