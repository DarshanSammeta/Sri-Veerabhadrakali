import { i as temple, t as PENDING } from "./temple-D2raIs_f.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as PageIntro } from "./PageIntro-C4XmP5lA.mjs";
import { t as Btn } from "./TempleLink-Bm2YnCEZ.mjs";
import { t as devotees_default } from "./devotees-Dc57wRAA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-LJ4tq4_N.js
var import_jsx_runtime = require_jsx_runtime();
function ContactContent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "Temple office"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-7 space-y-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold",
						children: "Address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-muted-foreground",
						children: temple.address ?? "To be confirmed by temple administration"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-muted-foreground",
						children: temple.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${temple.phone}`,
							children: temple.phone
						}) : PENDING
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-muted-foreground",
						children: temple.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${temple.email}`,
							children: temple.email
						}) : PENDING
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted-foreground",
				children: "Online enquiries are not available. An official email or phone number will be listed once confirmed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
					href: "/faq",
					children: ["Frequently Asked Questions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			width: 1200,
			height: 912,
			src: devotees_default,
			alt: "Representative devotee with a prayer offering",
			className: "aspect-square w-full rounded-3xl object-cover"
		})]
	}) });
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Contact the Temple",
		description: "Official contact information will appear here after verification."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactContent, {})] });
}
//#endregion
export { Page as component };
