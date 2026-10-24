import { n as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as ChevronLeft, g as Expand, t as X, y as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Gallery-D0L9ZqY1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gallery({ images }) {
	const [idx, setIdx] = (0, import_react.useState)(null);
	const [opener, setOpener] = (0, import_react.useState)(null);
	const step = (0, import_react.useCallback)((d) => setIdx((i) => i === null ? null : (i + d + images.length) % images.length), [images.length]);
	(0, import_react.useEffect)(() => {
		if (idx === null) return;
		const key = (e) => {
			if (e.key === "ArrowRight") step(1);
			if (e.key === "ArrowLeft") step(-1);
		};
		window.addEventListener("keydown", key);
		return () => window.removeEventListener("keydown", key);
	}, [idx, step]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open: idx !== null,
		onOpenChange: (open) => {
			if (!open) setIdx(null);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-3",
			children: images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				onClick: (e) => {
					setOpener(e.currentTarget);
					setIdx(i);
				},
				className: cn("group relative h-auto overflow-hidden rounded-2xl p-0", img.className),
				"aria-label": `Open image: ${img.caption}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img.src,
						alt: img.alt,
						loading: "lazy",
						width: 1200,
						height: 1e3,
						sizes: "(max-width: 768px) 50vw, 33vw",
						className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-forest/0 transition group-hover:bg-forest/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute bottom-3 left-3 right-3 flex items-center justify-between whitespace-normal text-left text-sm font-semibold text-forest-foreground opacity-0 transition group-hover:opacity-100",
						children: [img.caption, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expand, {})]
					})
				]
			}, img.src))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-[60] bg-forest/95" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			"aria-describedby": void 0,
			onCloseAutoFocus: (e) => {
				e.preventDefault();
				opener?.focus();
			},
			className: "fixed inset-0 z-[61] flex items-center justify-center p-4 outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: "Image viewer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "secondary",
						"aria-label": "Close",
						title: "Close",
						className: "absolute top-4 right-4 h-11 w-11 rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					onClick: () => step(-1),
					"aria-label": "Previous image",
					title: "Previous image",
					className: "absolute left-3 top-1/2 h-11 w-11 rounded-full md:left-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "max-w-5xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: idx === null ? void 0 : images[idx]?.src,
						alt: idx === null ? "" : images[idx]?.alt,
						className: "max-h-[78dvh] max-w-full rounded-2xl object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-3 text-center text-forest-foreground",
						children: [
							idx === null ? "" : images[idx]?.caption,
							" · ",
							idx === null ? 0 : idx + 1,
							" /",
							" ",
							images.length
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					onClick: () => step(1),
					"aria-label": "Next image",
					title: "Next image",
					className: "absolute right-3 top-1/2 h-11 w-11 rounded-full md:right-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
				})
			]
		})] })]
	});
}
//#endregion
export { Gallery as t };
