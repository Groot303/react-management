import {
	legacy_createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from "redux";
import reduxThunk from "redux-thunk";

import handleNumReducer from "./NumStatus/reducer";
import handleArrReducer from "./ArrStatus/reducer";

const reducers = combineReducers({
	handleNumReducer,
	handleArrReducer,
});

// const store = legacy_createStore(
// 	reducers,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	: compose;
//把仓库数据，浏览器redux-dev-tools,还有reduxThunk插件关联在store中
const store = legacy_createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk)),
);
export default store;
