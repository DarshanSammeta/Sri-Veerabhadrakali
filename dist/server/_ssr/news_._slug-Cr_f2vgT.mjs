import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageIntro } from "./PageIntro-C4XmP5lA.mjs";
import { t as Route } from "./news_._slug-C5FXkUOX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news_._slug-Cr_f2vgT.js
var import_jsx_runtime = require_jsx_runtime();
function Article() {
	const article = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: article.title,
		description: article.category
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-5 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Administrator-confirmation placeholder"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: article.date ?? "Publication date awaiting confirmation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-6 text-muted-foreground",
				children: article.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/news",
				className: "mt-10 inline-block font-semibold text-primary",
				children: "Back to announcements"
			})
		]
	})] });
}
//#endregion
export { Article as component };
