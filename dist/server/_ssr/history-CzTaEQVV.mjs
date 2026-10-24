import { t as PENDING } from "./temple-D2raIs_f.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as PageIntro } from "./PageIntro-C4XmP5lA.mjs";
import { t as heritage_default } from "./heritage-Tm6LqIwa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/history-CzTaEQVV.js
var import_jsx_runtime = require_jsx_runtime();
function HistoryContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				width: 1200,
				height: 1008,
				src: heritage_default,
				alt: "Representative stone-pillared temple architecture",
				className: "h-72 w-full rounded-3xl object-cover md:h-96"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Representative imagery — authorised temple photographs are awaited."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 md:grid-cols-[1fr_2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: "A history to preserve"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-8",
					children: [
						"Origins and founding",
						"Architecture and heritage",
						"Traditions through generations"
					].map((title) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted-foreground",
						children: [PENDING, ". Dates, founding accounts and historical claims will be included only after verification against temple records."]
					})] }, title))
				})]
			})
		]
	}) });
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Temple History and Heritage",
		description: "The temple\\u2019s origins, heritage and traditions, documented with care."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryContent, {})] });
}
//#endregion
export { Page as component };
