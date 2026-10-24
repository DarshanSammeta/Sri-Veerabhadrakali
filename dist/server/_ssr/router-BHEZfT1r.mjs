import { n as __toESM } from "../_runtime.mjs";
import { i as temple } from "./temple-D2raIs_f.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Mail, i as Search, l as Menu, s as Phone, t as X, u as MapPin } from "../_libs/lucide-react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { n as pageHead, t as Route$14 } from "./news_._slug-C5FXkUOX.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BHEZfT1r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DKYd4R4x.css";
var logo_default = "/assets/logo-BTl3VuKM.png";
var navLinks = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "About Temple",
		href: "/about"
	},
	{
		label: "Darshan",
		href: "/darshan"
	},
	{
		label: "Festivals",
		href: "/festivals"
	},
	{
		label: "Gallery",
		href: "/gallery"
	},
	{
		label: "Temple History",
		href: "/history"
	},
	{
		label: "Contact",
		href: "/contact"
	}
];
function Logo({ light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex min-w-0 items-center gap-2.5",
		"aria-label": "Sri Veerabhadrakali Temple home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-card shadow-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: logo_default,
				alt: "",
				width: 36,
				height: 36,
				className: "h-8 w-8"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block truncate font-serif text-lg font-bold", light ? "text-forest-foreground" : "text-foreground"),
				children: "Sri Veerabhadrakali"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[10px] font-semibold uppercase tracking-[0.3em] text-primary",
				children: "Temple"
			})]
		})]
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 40);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	const solid = scrolled || open || pathname !== "/";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", solid ? "bg-background/95 shadow-card backdrop-blur" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 xl:flex xl:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: !solid }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main",
					className: "hidden xl:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex items-center gap-6",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.href,
							activeOptions: { exact: true },
							activeProps: { "aria-current": "page" },
							className: cn("text-sm font-medium transition-colors hover:text-primary", pathname === l.href ? "text-primary" : solid ? "text-foreground" : "text-forest-foreground"),
							children: l.label
						}) }, l.href))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							title: "Find answers",
							"aria-label": "Find answers",
							className: cn("hidden h-9 w-9 place-items-center rounded-full border sm:grid", solid ? "text-foreground" : "border-forest-foreground/40 text-forest-foreground"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							title: "Contact the temple",
							"aria-label": "Contact the temple",
							className: cn("hidden h-9 w-9 place-items-center rounded-full border sm:grid", solid ? "text-foreground" : "border-forest-foreground/40 text-forest-foreground"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/visit",
							className: "hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-saffron sm:inline-flex",
							children: "Plan Your Visit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							type: "button",
							className: cn("grid h-10 w-10 place-items-center rounded-full xl:hidden", solid ? "text-foreground" : "text-forest-foreground"),
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((o) => !o),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Mobile",
			className: "max-h-[calc(100dvh-70px)] overflow-y-auto border-t bg-background px-5 pb-6 xl:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.href,
					activeOptions: { exact: true },
					activeProps: {
						"aria-current": "page",
						className: "text-primary"
					},
					onClick: () => setOpen(false),
					className: "block border-b py-3 font-medium hover:text-primary",
					children: l.label
				}) }, l.href))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/visit",
				onClick: () => setOpen(false),
				className: "mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
				children: "Plan Your Visit"
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-forest text-forest-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm text-forest-foreground/70",
					children: "A sacred home of devotion, where faith, tradition and divine grace come together."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-forest-foreground/70",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.href,
						className: "hover:text-primary",
						children: l.label
					}) }, l.href))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl",
					children: "Temple Information"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-forest-foreground/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sevas",
							className: "hover:text-primary",
							children: "Sevas & Offerings"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/festivals",
							className: "hover:text-primary",
							children: "Festivals"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/news",
							className: "hover:text-primary",
							children: "News & Updates"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							className: "hover:text-primary",
							children: "FAQ"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm text-forest-foreground/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 text-primary" }),
									" ",
									temple.address ?? "Address — TBC"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 text-primary" }),
									" ",
									temple.phone ?? "Phone — TBC"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-primary" }),
									" ",
									temple.email ?? "Email — TBC"
								]
							})
						]
					}),
					temple.social.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex gap-3",
						children: temple.social.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							className: "hover:text-primary",
							children: s.label
						}) }, s.href))
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-forest-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-forest-foreground/60 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Sri Veerabhadrakali Temple. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy-policy",
						className: "hover:text-primary",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms-and-conditions",
						className: "hover:text-primary",
						children: "Terms and Conditions"
					})]
				})]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-serif text-xl",
					children: "Sri Veerabhadrakali Temple"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2 text-sm font-medium text-foreground hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				property: "og:site_name",
				content: "Sri Veerabhadrakali Temple"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$12 = () => import("./routes-ufc54ZeJ.mjs");
var TITLE = "Sri Veerabhadrakali Temple — Darshan, Sevas, Festivals & Visit";
var DESC = "Discover the sacred heritage, darshan, sevas, festivals and visitor information of Sri Veerabhadrakali Temple.";
var Route$12 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESC
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESC
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "HinduTemple",
				name: "Sri Veerabhadrakali Temple"
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./about-BDTyuFC_.mjs");
var Route$11 = createFileRoute("/about")({
	head: () => pageHead("About the Temple", "A place for prayer, devotion and sacred tradition.", "/about"),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./contact-LJ4tq4_N.mjs");
var Route$10 = createFileRoute("/contact")({
	head: () => pageHead("Contact the Temple", "Official contact information will appear here after verification.", "/contact"),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./darshan-BPge7mir.mjs");
var Route$9 = createFileRoute("/darshan")({
	head: () => pageHead("Darshan Information", "Timings and guidance for a peaceful temple visit.", "/darshan"),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./faq-wWOzCyAA.mjs");
var Route$8 = createFileRoute("/faq")({
	head: () => pageHead("Frequently Asked Questions", "Answers being verified by the temple administration.", "/faq"),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./festivals-DElYN-Vo.mjs");
var Route$7 = createFileRoute("/festivals")({
	head: () => pageHead("Festivals and Celebrations", "Festival dates and programmes will be shared once confirmed.", "/festivals"),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./gallery-CwxuRfL9.mjs");
var Route$6 = createFileRoute("/gallery")({
	head: () => pageHead("Temple Gallery", "Representative imagery — to be replaced with authorised photographs of the temple.", "/gallery"),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./history-CzTaEQVV.mjs");
var Route$5 = createFileRoute("/history")({
	head: () => pageHead("Temple History and Heritage", "The temple’s origins, heritage and traditions, documented with care.", "/history"),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./news-Bq-yJ4yx.mjs");
var Route$4 = createFileRoute("/news")({
	head: () => pageHead("Temple News and Announcements", "Updates awaiting approval by the temple administration.", "/news"),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./privacy-policy-BoBkahdl.mjs");
var Route$3 = createFileRoute("/privacy-policy")({
	head: () => pageHead("Privacy Policy", "Website privacy notice — subject to approval by the temple administration.", "/privacy-policy"),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./sevas-UvLenPlA.mjs");
var Route$2 = createFileRoute("/sevas")({
	head: () => pageHead("Sevas and Offerings", "Devotional offerings — availability and details await confirmation.", "/sevas"),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./terms-and-conditions-Bv3MfApk.mjs");
var Route$1 = createFileRoute("/terms-and-conditions")({
	head: () => pageHead("Terms and Conditions", "Website terms — subject to approval by the temple administration.", "/terms-and-conditions"),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./visit-DDcsMgEZ.mjs");
var Route = createFileRoute("/visit")({
	head: () => pageHead("Plan Your Visit", "Address, directions, facilities and travel information.", "/visit"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$12.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$13
	}),
	AboutRoute: Route$11.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$13
	}),
	ContactRoute: Route$10.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$13
	}),
	DarshanRoute: Route$9.update({
		id: "/darshan",
		path: "/darshan",
		getParentRoute: () => Route$13
	}),
	FaqRoute: Route$8.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$13
	}),
	FestivalsRoute: Route$7.update({
		id: "/festivals",
		path: "/festivals",
		getParentRoute: () => Route$13
	}),
	GalleryRoute: Route$6.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$13
	}),
	HistoryRoute: Route$5.update({
		id: "/history",
		path: "/history",
		getParentRoute: () => Route$13
	}),
	NewsRoute: Route$4.update({
		id: "/news",
		path: "/news",
		getParentRoute: () => Route$13
	}),
	PrivacyPolicyRoute: Route$3.update({
		id: "/privacy-policy",
		path: "/privacy-policy",
		getParentRoute: () => Route$13
	}),
	SevasRoute: Route$2.update({
		id: "/sevas",
		path: "/sevas",
		getParentRoute: () => Route$13
	}),
	TermsAndConditionsRoute: Route$1.update({
		id: "/terms-and-conditions",
		path: "/terms-and-conditions",
		getParentRoute: () => Route$13
	}),
	VisitRoute: Route.update({
		id: "/visit",
		path: "/visit",
		getParentRoute: () => Route$13
	}),
	NewsSlugRoute: Route$14.update({
		id: "/news_/$slug",
		path: "/news/$slug",
		getParentRoute: () => Route$13
	})
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		defaultErrorComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 pt-32 pb-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl",
					children: "Sri Veerabhadrakali Temple"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4",
					children: "This page could not be loaded."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-block text-primary",
					children: "Return Home"
				})
			]
		})
	});
};
//#endregion
export { getRouter };
