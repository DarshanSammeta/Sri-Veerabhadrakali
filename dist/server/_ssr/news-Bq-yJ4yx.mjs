import { r as news } from "./temple-D2raIs_f.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as PageIntro } from "./PageIntro-C4XmP5lA.mjs";
import { t as devotees_default } from "./devotees-Dc57wRAA.mjs";
import { t as lamps_default } from "./lamps-C9h1_qzW.mjs";
import { t as festival_default } from "./festival-uePU4xzv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-Bq-yJ4yx.js
var import_jsx_runtime = require_jsx_runtime();
function NewsContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-5 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-7 md:grid-cols-3",
			children: news.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-3xl border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: [
						festival_default,
						lamps_default,
						devotees_default
					][i],
					alt: "Representative devotional imagery",
					loading: "lazy",
					className: "h-52 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: n.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl",
							children: n.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: n.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted-foreground",
							children: n.date ?? "Date awaiting confirmation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/news/$slug",
							params: { slug: n.slug },
							className: "mt-5 inline-flex items-center gap-2 font-semibold text-primary",
							children: ["Read announcement ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})]
			}, n.slug))
		})
	}) });
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Temple News and Announcements",
		description: "Updates awaiting approval by the temple administration."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsContent, {})] });
}
//#endregion
export { Page as component };
