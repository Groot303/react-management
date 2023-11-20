// 类型声明文件中不用使用import引入其他文件
// import store from "@/store";

// TS 提供 ReturnType 获取相应的类型
type RootState = ReturnType<typeof import("@/store").getState>;

interface Window {
	__REDUX_DEVTOOLS_EXTENSION__: function;
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function;
}
