import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news_._slug-BvRLnNOi.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ reset }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "px-5 pt-32 pb-20 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-4xl",
		children: "Announcement unavailable"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/news",
		className: "mt-6 inline-block text-primary",
		children: "All announcements"
	})]
});
//#endregion
export { SplitErrorComponent as errorComponent };
