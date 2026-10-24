import { r as news } from "./temple-D2raIs_f.mjs";
import { K as notFound, _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news_._slug-C5FXkUOX.js
function pageHead(title, description, path, article = false) {
	const fullTitle = `${title} — Sri Veerabhadrakali Temple`;
	return {
		meta: [
			{ title: fullTitle },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: fullTitle
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: article ? "article" : "website"
			},
			{
				property: "og:url",
				content: path
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: path
		}]
	};
}
var $$splitErrorComponentImporter = () => import("./news_._slug-BvRLnNOi.mjs");
var $$splitNotFoundComponentImporter = () => import("./news_._slug-DjmdFdzM.mjs");
var $$splitComponentImporter = () => import("./news_._slug-Cr_f2vgT.mjs");
var Route = createFileRoute("/news_/$slug")({
	loader: ({ params }) => {
		const article = news.find((n) => n.slug === params.slug);
		if (!article) throw notFound();
		return article;
	},
	head: ({ loaderData, params }) => pageHead(loaderData?.title ?? "Announcement unavailable", loaderData?.excerpt ?? "The requested announcement is unavailable.", `/news/${params.slug}`, true),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { pageHead as n, Route as t };
