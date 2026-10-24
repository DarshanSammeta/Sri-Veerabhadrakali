import { i as temple } from "./temple-D2raIs_f.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as PageIntro } from "./PageIntro-C4XmP5lA.mjs";
import { t as Btn } from "./TempleLink-Bm2YnCEZ.mjs";
import { t as lamps_default } from "./lamps-C9h1_qzW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/darshan-BPge7mir.js
var import_jsx_runtime = require_jsx_runtime();
function DarshanContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "Darshan timings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-6",
				children: temple.timings.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold",
						children: t.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-muted-foreground",
						children: t.value ?? "To be confirmed by temple administration"
					})]
				}, t.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 text-3xl",
				children: "Visitor guidance"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "Please maintain silence and respect other devotees. Dress code, photography rules, accessibility arrangements and special-day procedures are awaiting administrator confirmation."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
					href: "/visit",
					children: ["Plan Your Visit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			width: 1008,
			height: 1008,
			src: lamps_default,
			alt: "Representative brass oil lamps",
			className: "aspect-[4/5] w-full rounded-3xl object-cover"
		})]
	}) });
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Darshan Information",
		description: "Timings and guidance for a peaceful temple visit."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DarshanContent, {})] });
}
//#endregion
export { Page as component };
