import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as PageIntro } from "./PageIntro-C4XmP5lA.mjs";
import { t as Faq } from "./Faq-Brf6mFag.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-wWOzCyAA.js
var import_jsx_runtime = require_jsx_runtime();
function FaqContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}) });
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Frequently Asked Questions",
		description: "Answers being verified by the temple administration."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqContent, {})] });
}
//#endregion
export { Page as component };
