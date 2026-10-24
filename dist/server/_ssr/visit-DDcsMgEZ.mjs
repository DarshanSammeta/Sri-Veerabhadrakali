import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as PageIntro } from "./PageIntro-C4XmP5lA.mjs";
import { t as Btn } from "./TempleLink-Bm2YnCEZ.mjs";
import { t as Visit } from "./Visit-DWYYJpIJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/visit-DDcsMgEZ.js
var import_jsx_runtime = require_jsx_runtime();
function VisitContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visit, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "Travel and accessibility"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "Nearest transport connections, parking arrangements and step-free access are awaiting confirmation. Please confirm official directions before travelling."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
					href: "/contact",
					children: ["Contact the Temple ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			})
		]
	})] });
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Plan Your Visit",
		description: "Address, directions, facilities and travel information."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitContent, {})] });
}
//#endregion
export { Page as component };
