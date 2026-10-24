import { t as PENDING } from "./temple-D2raIs_f.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as PageIntro } from "./PageIntro-C4XmP5lA.mjs";
import { t as heritage_default } from "./heritage-Tm6LqIwa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BDTyuFC_.js
var import_jsx_runtime = require_jsx_runtime();
function AboutContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			width: 1200,
			height: 1008,
			src: heritage_default,
			alt: "Representative carved temple corridor",
			className: "aspect-[5/4] w-full rounded-3xl object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "Sri Veerabhadrakali Temple"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "This website brings together temple information for devotees and visitors. The temple administration will confirm its overview, mission and spiritual significance before publication."
			}),
			[
				"Mission and community",
				"Traditions and worship",
				"Spiritual significance"
			].map((title) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-muted-foreground",
					children: [PENDING, ". Approved information will be shared here."]
				})]
			}, title))
		] })]
	}) });
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "About the Temple",
		description: "A place for prayer, devotion and sacred tradition."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutContent, {})] });
}
//#endregion
export { Page as component };
