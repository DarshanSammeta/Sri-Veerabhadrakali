import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TempleLink-Bm2YnCEZ.js
var import_jsx_runtime = require_jsx_runtime();
function Btn({ href, children, variant = "primary" }) {
	const style = {
		primary: "bg-primary text-primary-foreground hover:bg-saffron",
		outline: "border border-forest-foreground/50 bg-transparent text-forest-foreground hover:bg-forest-foreground hover:text-forest",
		light: "bg-card text-primary hover:bg-forest hover:text-forest-foreground"
	}[variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		className: `h-auto whitespace-normal rounded-full px-6 py-3 ${style}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: href,
			children
		})
	});
}
//#endregion
export { Btn as t };
