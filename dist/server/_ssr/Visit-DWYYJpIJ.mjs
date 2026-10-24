import { i as temple, t as PENDING } from "./temple-D2raIs_f.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Clock, d as Mail, s as Phone, u as MapPin, v as CircleCheck, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Btn } from "./TempleLink-Bm2YnCEZ.mjs";
import { t as Reveal } from "./Reveal-C9qk2ya6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Visit-DWYYJpIJ.js
var import_jsx_runtime = require_jsx_runtime();
function Placeholder({ value }) {
	return value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: value }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "italic text-muted-foreground",
		children: PENDING
	});
}
function Visit() {
	const mapSrc = temple.mapsQuery ? `https://www.google.com/maps?q=${encodeURIComponent(temple.mapsQuery)}&output=embed` : null;
	const dirHref = temple.mapsQuery ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(temple.mapsQuery)}` : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "visit",
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "✦ Plan Your Visit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl leading-tight md:text-5xl",
					children: "Plan Your Visit to Sri Veerabhadrakali Temple"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Everything you need for a peaceful darshan. Details below are being verified by the temple office."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, { value: temple.address })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-6 w-6 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Darshan Timings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, { value: temple.timings[0]?.value ?? null })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-6 w-6 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: "Contact Number"
							}), temple.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${temple.phone}`,
								children: temple.phone
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Placeholder, { value: null })] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: dirHref ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: dirHref,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-primary font-semibold",
						children: "Get Directions"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
						href: "/visit",
						children: ["Visitor Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				}),
				mapSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Temple location map",
					src: mapSrc,
					loading: "lazy",
					className: "mt-8 h-64 w-full rounded-3xl border-0"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-forest p-8 text-forest-foreground shadow-soft md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-3xl",
						children: "Visitor Information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-3",
						children: temple.timings.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-forest-foreground/15 pb-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right text-forest-foreground/70",
								children: t.value ?? "TBC"
							})]
						}, t.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-8 font-serif text-xl",
						children: "Facilities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid grid-cols-2 gap-2 text-sm",
						children: temple.facilities.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }),
								" ",
								f.name,
								!f.confirmed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-forest-foreground/50",
									children: "(TBC)"
								})
							]
						}, f.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-8 font-serif text-xl",
						children: "Visitor Guidance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-forest-foreground/75",
						children: "Please maintain silence and decorum inside the temple. Dress code and photography rules will be shared by the temple office."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl bg-forest-foreground/10 p-5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }),
								" ",
								temple.phone ?? "Phone — TBC"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }),
								" ",
								temple.email ?? "Email — TBC"
							]
						})]
					})
				]
			}) })]
		})
	});
}
//#endregion
export { Visit as t };
