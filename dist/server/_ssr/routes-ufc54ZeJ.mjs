import { a as testimonials, r as news, t as PENDING } from "./temple-D2raIs_f.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as CalendarDays, _ as Clock, h as Flame, n as Users, o as Quote, p as Info, r as Sparkles, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as heritage_default } from "./heritage-Tm6LqIwa.mjs";
import { t as Btn } from "./TempleLink-Bm2YnCEZ.mjs";
import { t as devotees_default } from "./devotees-Dc57wRAA.mjs";
import { t as lamps_default } from "./lamps-C9h1_qzW.mjs";
import { n as SectionHead, t as Reveal } from "./Reveal-C9qk2ya6.mjs";
import { t as Faq } from "./Faq-Brf6mFag.mjs";
import { t as festival_default } from "./festival-uePU4xzv.mjs";
import { a as hero_default, c as sevas, i as heritagePoints, n as experiences, o as highlights, r as galleryImages, s as landscape_default, t as events } from "./experiences-YDxHlEIX.mjs";
import { t as Gallery } from "./Gallery-D0L9ZqY1.mjs";
import { t as Visit } from "./Visit-DWYYJpIJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ufc54ZeJ.js
var import_jsx_runtime = require_jsx_runtime();
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative min-h-[680px] overflow-hidden md:min-h-[760px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "Towering temple gopuram at sunset with devotees in the courtyard",
				width: 1920,
				height: 1088,
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-overlay-dark" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex max-w-7xl flex-col gap-8 px-5 pb-28 pt-32 md:flex-row md:items-end md:justify-between md:pt-44",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-xl rounded-3xl bg-forest/90 p-8 text-forest-foreground shadow-soft md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow rounded-full bg-primary/15 px-3 py-1",
							children: "✦ Sacred Heritage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-4xl leading-[1.05] md:text-6xl",
							children: "Experience the Divine Power of Sri Veerabhadrakali"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-forest-foreground/80",
							children: "Discover the sacred history, divine presence, timeless traditions, and spiritual significance of Sri Veerabhadrakali Temple."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
								href: "/about",
								children: ["Explore Temple ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								href: "/visit",
								variant: "outline",
								children: "Plan Your Darshan"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-3 border-t border-forest-foreground/15 pt-5 text-sm text-forest-foreground/75",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-5 w-5 text-primary" }), " Daily worship · Festivals · Sevas"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "hidden w-72 rounded-2xl bg-card p-4 text-card-foreground shadow-soft md:block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							width: 1008,
							height: 1008,
							src: lamps_default,
							alt: "Brass oil lamps glowing over marigold decorations",
							loading: "lazy",
							className: "h-36 w-full rounded-xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-serif text-lg font-bold",
							children: "Today's Darshan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-primary" }),
								" Timings ",
								PENDING.toLowerCase()
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-16 bg-background curve-top" })
		]
	});
}
function Welcome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "mx-auto max-w-7xl px-5 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2 md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "✦ Welcome"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl leading-tight md:text-5xl",
					children: "Welcome to Sri Veerabhadrakali Temple"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground md:text-lg",
					children: "A sacred destination where faith, tradition, and divine grace come together."
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: highlights.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `group h-full rounded-3xl border p-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-soft ${i === 1 ? "bg-peach" : "bg-card"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground transition group-hover:bg-saffron",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h.icon, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-2xl",
							children: h.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: h.text
						})
					]
				}) }, h.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					href: "/about",
					children: "About the Temple"
				})
			})
		]
	});
}
function HeritageSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "history",
		className: "bg-peach py-20 curve-top",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "✦ Temple Heritage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl leading-tight md:text-5xl",
						children: "A Sacred Legacy of Faith and Devotion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground",
						children: "Sri Veerabhadrakali Temple is a place of worship where devotees gather to offer prayers, take part in rituals and seek the grace of the Goddess."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 rounded-xl border border-dashed border-primary/40 bg-card p-4 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mr-1 inline h-4 w-4 text-primary" }), " The temple's verified history and origins will be added here by the temple administration."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
							href: "/history",
							children: ["Explore Temple History ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: heritage_default,
						alt: "Carved stone pillared corridor lit by oil lamps",
						loading: "lazy",
						width: 1200,
						height: 1008,
						className: "aspect-[5/4] w-full rounded-3xl object-cover shadow-soft"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-6 left-6 rounded-2xl bg-forest px-6 py-4 text-forest-foreground shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-2xl font-bold",
							children: "Heritage"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-forest-foreground/70",
							children: "Faith · Culture · Devotion"
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: heritagePoints.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "flex items-center gap-4 rounded-2xl bg-card p-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl",
						children: p.title
					})]
				}, p.title))
			})]
		})
	});
}
function Experiences() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "darshan",
		className: "bg-peach pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Experiences",
				title: "Discover the Divine Experiences"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 space-y-8",
				children: experiences.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `grid overflow-hidden rounded-3xl shadow-card md:grid-cols-2 ${e.dark ? "bg-forest text-forest-foreground" : "bg-card"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `overflow-hidden ${i % 2 ? "md:order-2" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: e.img,
							alt: e.alt,
							loading: "lazy",
							className: "h-64 w-full object-cover transition duration-700 hover:scale-105 md:h-full md:min-h-80"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center p-8 md:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow",
								children: [
									"0",
									i + 1,
									" — Experience"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-3xl md:text-4xl",
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-4 ${e.dark ? "text-forest-foreground/80" : "text-muted-foreground"}`,
								children: e.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
									href: e.id === "celebrations" ? "/festivals" : e.id === "rituals" ? "/sevas" : "/darshan",
									children: [
										e.cta,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})
							})
						]
					})]
				}) }, e.id))
			})]
		})
	});
}
function Sevas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sevas",
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Sevas",
					title: "Sacred Sevas and Offerings",
					text: "Availability, timings and offerings for each seva will be confirmed by the temple office."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: sevas.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto aspect-square w-full max-w-56 overflow-hidden rounded-full border-4 border-peach shadow-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.img,
									alt: s.title,
									loading: "lazy",
									className: "h-full w-full object-cover transition duration-700 group-hover:scale-110"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-2xl",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: s.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sevas",
								className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all",
								children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						]
					}) }, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						href: "/sevas",
						children: "View All Sevas"
					})
				})
			]
		})
	});
}
function Strip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-gradient-orange py-6 text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-4 px-5 font-serif text-2xl font-semibold md:text-3xl",
			children: [
				"Divine Darshan",
				"Sacred Sevas",
				"Festivals",
				"Spiritual Heritage"
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" }),
					" ",
					t
				]
			}, t))
		})
	});
}
function GallerySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Photo Gallery",
					title: "Glimpses of Divine Devotion",
					text: "Representative imagery — to be replaced with authorised photographs of the temple."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { images: galleryImages })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
						href: "/gallery",
						children: ["View Temple Gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			]
		})
	});
}
function Festivals() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "festivals",
		className: "bg-peach py-24 curve-top",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Events",
				title: "Celebrate Our Sacred Festivals"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 space-y-8",
				children: events.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid items-stretch gap-6 md:grid-cols-[1fr_1.2fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex flex-col justify-center rounded-3xl bg-card p-8 shadow-card ${i % 2 ? "md:order-2" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-serif text-5xl font-bold text-primary/30",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-3xl",
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: e.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex items-center gap-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-primary" }),
									" Dates ",
									PENDING.toLowerCase()
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
									href: "/festivals",
									children: "Discover More"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: e.img,
							alt: e.title,
							loading: "lazy",
							className: "h-72 w-full object-cover transition duration-700 hover:scale-105 md:h-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute right-4 top-4 rounded-full bg-forest px-4 py-1.5 text-xs font-semibold text-forest-foreground",
							children: "Festival"
						})]
					})]
				}) }, e.title))
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "testimonials",
		className: "bg-gradient-orange py-24 text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2 md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-primary-foreground",
					children: "✦ Testimonials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl leading-tight md:text-5xl",
					children: "Voices of Faith and Devotion"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary-foreground/85",
					children: "Shared with permission by devotees. These placeholders will be replaced with approved testimonials."
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "h-full rounded-3xl bg-card p-8 text-card-foreground shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-8 w-8 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-4 font-serif text-xl italic leading-snug",
							children: t.quote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-full bg-peach text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: t.location ?? "Location optional"
							})] })]
						})
					]
				}) }, i))
			})]
		})
	});
}
function NewsSection() {
	const imgs = [
		festival_default,
		lamps_default,
		devotees_default
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "news",
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Updates",
				title: "Latest Temple News and Updates"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: news.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group h-full overflow-hidden rounded-3xl border bg-card shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: imgs[i],
							alt: n.category,
							loading: "lazy",
							className: "h-52 w-full object-cover transition duration-700 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground",
							children: n.category
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }),
									" ",
									n.date ?? "Date to be published"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-2xl",
								children: n.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: n.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/news/$slug",
								params: { slug: n.slug },
								className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary",
								children: ["Read More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						]
					})]
				}) }, n.category))
			})]
		})
	});
}
function Banner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				width: 1920,
				height: 912,
				src: landscape_default,
				alt: "Temple tower reflected in a sacred tank at sunrise",
				loading: "lazy",
				className: "ken-burns absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-overlay-dark" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-6xl px-5 py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-xl text-forest-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "✦ Sacred Journey"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl leading-tight md:text-5xl",
							children: "A Sacred Journey of Faith, Tradition and Devotion"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-forest-foreground/80",
							children: "Experience the spiritual atmosphere and timeless traditions of Sri Veerabhadrakali Temple."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
								href: "/about",
								children: ["Explore the Temple ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					]
				})
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Welcome, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeritageSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experiences, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sevas, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Festivals, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visit, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {})
	] });
}
//#endregion
export { Index as component };
