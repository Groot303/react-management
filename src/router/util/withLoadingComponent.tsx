import { Suspense } from "react";

export const withLoadingComponent = (comp: JSX.Element) => {
	return <Suspense fallback={<span> 加载中... </span>}>{comp}</Suspense>;
};
