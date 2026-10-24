import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as PageIntro } from "./PageIntro-C4XmP5lA.mjs";
import { r as galleryImages } from "./experiences-YDxHlEIX.mjs";
import { t as Gallery } from "./Gallery-D0L9ZqY1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CwxuRfL9.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { images: galleryImages }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2",
			children: galleryImages.map((img) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [img.caption, " — representative image"] }, img.src))
		})]
	}) });
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Temple Gallery",
		description: "Representative imagery \\u2014 to be replaced with authorised photographs of the temple."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryContent, {})] });
}
//#endregion
export { Page as component };
