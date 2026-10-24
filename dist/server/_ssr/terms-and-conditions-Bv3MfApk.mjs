import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as PageIntro } from "./PageIntro-C4XmP5lA.mjs";
import { t as Btn } from "./TempleLink-Bm2YnCEZ.mjs";
import { n as termsSections } from "./legal-C6oX4Igt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-and-conditions-Bv3MfApk.js
var import_jsx_runtime = require_jsx_runtime();
function TermsAndConditionsContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl space-y-8 px-5 py-16",
		children: [termsSections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl",
			children: s.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted-foreground",
			children: s.text
		})] }, s.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
			href: "/contact",
			children: ["Contact Information ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
		})]
	}) });
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Terms and Conditions",
		description: "Website terms \\u2014 subject to approval by the temple administration."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermsAndConditionsContent, {})] });
}
//#endregion
export { Page as component };
