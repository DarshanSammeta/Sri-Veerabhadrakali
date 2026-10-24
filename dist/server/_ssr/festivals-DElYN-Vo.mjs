import { t as PENDING } from "./temple-D2raIs_f.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as PageIntro } from "./PageIntro-C4XmP5lA.mjs";
import { t as Btn } from "./TempleLink-Bm2YnCEZ.mjs";
import { t as events } from "./experiences-YDxHlEIX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/festivals-DElYN-Vo.js
var import_jsx_runtime = require_jsx_runtime();
function FestivalsContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl space-y-10 px-5 py-16",
		children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "grid gap-8 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: e.img,
				alt: `Representative imagery: ${e.title}`,
				loading: "lazy",
				className: "h-72 w-full rounded-3xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "self-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Awaiting confirmation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl",
						children: e.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "This is a provisional festival category, not a confirmed temple programme."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-muted-foreground",
						children: [
							"Dates and celebration details: ",
							PENDING.toLowerCase(),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
							href: "/news",
							children: ["Temple Announcements ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				]
			})]
		}, e.title))
	}) });
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Festivals and Celebrations",
		description: "Festival dates and programmes will be shared once confirmed."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FestivalsContent, {})] });
}
//#endregion
export { Page as component };
