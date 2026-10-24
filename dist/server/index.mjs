globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-hr1dSm_Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"539-H3CAQhZmdbw92uPf/fsiQWaq3UM\"",
		"mtime": "2026-10-24T08:42:30.564Z",
		"size": 1337,
		"path": "../client/assets/about-hr1dSm_Z.js"
	},
	"/assets/arrow-right-D5uPfPaw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-Oa7EvSSPM6o9I07fNapZSWFKLfA\"",
		"mtime": "2026-10-24T08:42:30.565Z",
		"size": 154,
		"path": "../client/assets/arrow-right-D5uPfPaw.js"
	},
	"/assets/chevron-right-Di0Iq44t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-vnWcSU8EW6ths4LvOeOYAGMrGHY\"",
		"mtime": "2026-10-24T08:42:30.565Z",
		"size": 119,
		"path": "../client/assets/chevron-right-Di0Iq44t.js"
	},
	"/assets/devotees-D_fLcju2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-tOA8nrgIAAVd37gmnCxG3GNBEio\"",
		"mtime": "2026-10-24T08:42:30.565Z",
		"size": 53,
		"path": "../client/assets/devotees-D_fLcju2.js"
	},
	"/assets/devotees-jDys92-N.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bd99-2USKJdXSvA+KYVByqHfiuYzWd/I\"",
		"mtime": "2026-10-24T08:42:30.575Z",
		"size": 179609,
		"path": "../client/assets/devotees-jDys92-N.jpg"
	},
	"/assets/darshan-DNaWka1V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63b-ZiU8/n2vZNk9B9Ev7n58NcwgrkU\"",
		"mtime": "2026-10-24T08:42:30.565Z",
		"size": 1595,
		"path": "../client/assets/darshan-DNaWka1V.js"
	},
	"/assets/contact-DLUh_oJo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"774-YhAICdMOwS8jvsydIPF2q9QKfzA\"",
		"mtime": "2026-10-24T08:42:30.565Z",
		"size": 1908,
		"path": "../client/assets/contact-DLUh_oJo.js"
	},
	"/assets/faq-Chcf2Qwn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"195-nhWcWPQV2tKavLs0ginwwfoyyew\"",
		"mtime": "2026-10-24T08:42:30.566Z",
		"size": 405,
		"path": "../client/assets/faq-Chcf2Qwn.js"
	},
	"/assets/experiences-Bj_AjIfV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c7-weK8lIgI8bcTzA+rbj14YWxhp40\"",
		"mtime": "2026-10-24T08:42:30.566Z",
		"size": 5319,
		"path": "../client/assets/experiences-Bj_AjIfV.js"
	},
	"/assets/festival-Rnpe37_W.jpg": {
		"type": "image/jpeg",
		"etag": "\"37c43-+O2QhlJPfLmYcnSrN9/2Wc+EU7A\"",
		"mtime": "2026-10-24T08:42:30.576Z",
		"size": 228419,
		"path": "../client/assets/festival-Rnpe37_W.jpg"
	},
	"/assets/dist-BbqqjqLP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e6b-JM4uSr48Flck8HIuDl55PNBGON0\"",
		"mtime": "2026-10-24T08:42:30.566Z",
		"size": 7787,
		"path": "../client/assets/dist-BbqqjqLP.js"
	},
	"/assets/Faq-kYRmVZnw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4202-qd9mnVzpWbSyI10IlOHp3QbBYm4\"",
		"mtime": "2026-10-24T08:42:30.538Z",
		"size": 16898,
		"path": "../client/assets/Faq-kYRmVZnw.js"
	},
	"/assets/festival-zl73v7yX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-Ul/9H8WH7v6QkI2mZfWUhjSIK00\"",
		"mtime": "2026-10-24T08:42:30.566Z",
		"size": 53,
		"path": "../client/assets/festival-zl73v7yX.js"
	},
	"/assets/festivals-dRUK0uWY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58b-vTJcPmSkFSPnwG8S1h5eAP8m65g\"",
		"mtime": "2026-10-24T08:42:30.566Z",
		"size": 1419,
		"path": "../client/assets/festivals-dRUK0uWY.js"
	},
	"/assets/Gallery-BCzGXSBU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"78a3-Q+HTXq+l02SHLydvNPO5yoL9tc0\"",
		"mtime": "2026-10-24T08:42:30.538Z",
		"size": 30883,
		"path": "../client/assets/Gallery-BCzGXSBU.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"1ba6-HfeWor7j/f2sZa+vAxwv7R9cpAo\"",
		"mtime": "2026-10-24T07:13:33.604Z",
		"size": 7078,
		"path": "../client/favicon.png"
	},
	"/assets/heritage-CQrBmwYy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-odgyjj0kOPr6hstsmxmxDs6/ftM\"",
		"mtime": "2026-10-24T08:42:30.567Z",
		"size": 53,
		"path": "../client/assets/heritage-CQrBmwYy.js"
	},
	"/assets/gallery-C44_UFmF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ec-77BsenGqFH8X3q/nn8+v+miB9kw\"",
		"mtime": "2026-10-24T08:42:30.567Z",
		"size": 748,
		"path": "../client/assets/gallery-C44_UFmF.js"
	},
	"/assets/hero-Cjo68_1c.jpg": {
		"type": "image/jpeg",
		"etag": "\"48669-Ht9tHFS3hndipurjCaDBFJ+iek0\"",
		"mtime": "2026-10-24T08:42:30.577Z",
		"size": 296553,
		"path": "../client/assets/hero-Cjo68_1c.jpg"
	},
	"/assets/history-BPYASA0t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"585-pN/GpDmRfA/wsXd1RaE6ivt9d2g\"",
		"mtime": "2026-10-24T08:42:30.567Z",
		"size": 1413,
		"path": "../client/assets/history-BPYASA0t.js"
	},
	"/assets/heritage-QA6Kukl_.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f684-mh0tbtSOWY2VkU448Bo1eX+15oA\"",
		"mtime": "2026-10-24T08:42:30.577Z",
		"size": 194180,
		"path": "../client/assets/heritage-QA6Kukl_.jpg"
	},
	"/assets/lamps-DYhKW92W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32-Cg3CjpaSNUwfjE5klHEJN30rybo\"",
		"mtime": "2026-10-24T08:42:30.567Z",
		"size": 50,
		"path": "../client/assets/lamps-DYhKW92W.js"
	},
	"/assets/lamps-Da3ZRqnz.jpg": {
		"type": "image/jpeg",
		"etag": "\"237ea-1y69O7Pe7jSjDnhpiMlQp+y3VDw\"",
		"mtime": "2026-10-24T08:42:30.578Z",
		"size": 145386,
		"path": "../client/assets/lamps-Da3ZRqnz.jpg"
	},
	"/assets/index-FNXem4QZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"61ba6-WQQpMQI3X7TOYAIwICJjdwfT4O0\"",
		"mtime": "2026-10-24T08:42:30.538Z",
		"size": 400294,
		"path": "../client/assets/index-FNXem4QZ.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-24T07:13:38.310Z",
		"size": 160,
		"path": "../client/robots.txt"
	},
	"/assets/legal-CtCZ7Ii2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"938-VLaM0zZB8Zqv9LVqMkWJMFPpdH4\"",
		"mtime": "2026-10-24T08:42:30.567Z",
		"size": 2360,
		"path": "../client/assets/legal-CtCZ7Ii2.js"
	},
	"/assets/landscape-fCOzBI9x.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d269-YOz++0SKRLTZfuOdPUDYEOex2EU\"",
		"mtime": "2026-10-24T08:42:30.578Z",
		"size": 184937,
		"path": "../client/assets/landscape-fCOzBI9x.jpg"
	},
	"/assets/link-C9Z9Tb6I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e34-kB1oIpwSUIVBPEOAGKyQeHNmmxY\"",
		"mtime": "2026-10-24T08:42:30.568Z",
		"size": 20020,
		"path": "../client/assets/link-C9Z9Tb6I.js"
	},
	"/assets/logo-BTl3VuKM.png": {
		"type": "image/png",
		"etag": "\"4781-OyYRSTds6UF0JFlaWzl+Z3ZdHpw\"",
		"mtime": "2026-10-24T08:42:30.579Z",
		"size": 18305,
		"path": "../client/assets/logo-BTl3VuKM.png"
	},
	"/assets/news-CTSizmxR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e1-6NMtMA37NGlYx5M+n/WFtX7qHA0\"",
		"mtime": "2026-10-24T08:42:30.568Z",
		"size": 1505,
		"path": "../client/assets/news-CTSizmxR.js"
	},
	"/assets/news_._slug-DntbZtQr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32d-/x1AN0xoGjMu9J9XSz22UtfbHUA\"",
		"mtime": "2026-10-24T08:42:30.568Z",
		"size": 813,
		"path": "../client/assets/news_._slug-DntbZtQr.js"
	},
	"/assets/news_._slug-G0KtyxAz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14b-hyTY6vH/6l9WGtc/qzYzfnydXQc\"",
		"mtime": "2026-10-24T08:42:30.568Z",
		"size": 331,
		"path": "../client/assets/news_._slug-G0KtyxAz.js"
	},
	"/assets/news_._slug-DwwgLtxl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"153-iMMmops8cupXpL3pW1BF1F7zbEo\"",
		"mtime": "2026-10-24T08:42:30.568Z",
		"size": 339,
		"path": "../client/assets/news_._slug-DwwgLtxl.js"
	},
	"/assets/PageIntro-D8spiv7U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"330-Mnq+dQHzwM/YobEORTqSz7z0nNE\"",
		"mtime": "2026-10-24T08:42:30.538Z",
		"size": 816,
		"path": "../client/assets/PageIntro-D8spiv7U.js"
	},
	"/assets/Reveal-dH_q0Ndl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"370-iDr5o2kz589ZR7YRD4oQMAmnz60\"",
		"mtime": "2026-10-24T08:42:30.539Z",
		"size": 880,
		"path": "../client/assets/Reveal-dH_q0Ndl.js"
	},
	"/assets/privacy-policy-DZNSSPI6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34b-q63hav/f1aXw3qdK5CDBtg+FxqI\"",
		"mtime": "2026-10-24T08:42:30.568Z",
		"size": 843,
		"path": "../client/assets/privacy-policy-DZNSSPI6.js"
	},
	"/assets/ritual-C386yl_2.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e4ff-D+geRAguWW0OrBMJGVZBZ7GN1P4\"",
		"mtime": "2026-10-24T08:42:30.580Z",
		"size": 189695,
		"path": "../client/assets/ritual-C386yl_2.jpg"
	},
	"/assets/routes-C5R85WXl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"40c2-12FVjyIdYJvbo6tP6lCQcTNfvlo\"",
		"mtime": "2026-10-24T08:42:30.569Z",
		"size": 16578,
		"path": "../client/assets/routes-C5R85WXl.js"
	},
	"/assets/sevas-BfLhev3k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"690-wNI5K37xi/0M2HqkAXtK3JlZm4I\"",
		"mtime": "2026-10-24T08:42:30.569Z",
		"size": 1680,
		"path": "../client/assets/sevas-BfLhev3k.js"
	},
	"/assets/styles-DKYd4R4x.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"912a-ZNG8ZsXjdcKn6RyGh0DlxZwZGxk\"",
		"mtime": "2026-10-24T08:42:30.581Z",
		"size": 37162,
		"path": "../client/assets/styles-DKYd4R4x.css"
	},
	"/assets/TempleLink-NZXNmSlr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23a-iBz7D8UWciRYlkmZNpXS4t6SySo\"",
		"mtime": "2026-10-24T08:42:30.563Z",
		"size": 570,
		"path": "../client/assets/TempleLink-NZXNmSlr.js"
	},
	"/assets/terms-and-conditions-Cq8Hf2i4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"348-t4pt41FZcim/NcpXkNzJPSYVyOk\"",
		"mtime": "2026-10-24T08:42:30.569Z",
		"size": 840,
		"path": "../client/assets/terms-and-conditions-Cq8Hf2i4.js"
	},
	"/assets/visit-DAiJjZG1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3df-oNxVvzXmx2rp3e0LlXLzlnxy1QY\"",
		"mtime": "2026-10-24T08:42:30.574Z",
		"size": 991,
		"path": "../client/assets/visit-DAiJjZG1.js"
	},
	"/assets/Visit-DCXPy31l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1086-8GcuMUFmS3IayaZvdcpNVKWGETE\"",
		"mtime": "2026-10-24T08:42:30.563Z",
		"size": 4230,
		"path": "../client/assets/Visit-DCXPy31l.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_kRE7Gw = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_kRE7Gw
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
