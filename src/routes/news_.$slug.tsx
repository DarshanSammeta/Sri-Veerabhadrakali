import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { news } from "@/content/temple";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
export const Route = createFileRoute("/news_/$slug")({
  loader: ({ params }) => {
    const article = news.find((n) => n.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData, params }) =>
    pageHead(
      loaderData?.title ?? "Announcement unavailable",
      loaderData?.excerpt ?? "The requested announcement is unavailable.",
      `/news/${params.slug}`,
      true,
    ),
  component: Article,
  notFoundComponent: () => (
    <div className="px-5 pt-32 pb-20 text-center">
      <h1 className="text-4xl">Announcement not found</h1>
      <Link to="/news" className="mt-6 inline-block text-primary">
        All announcements
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="px-5 pt-32 pb-20 text-center">
      <h1 className="text-4xl">Announcement unavailable</h1>
      <Link to="/news" className="mt-6 inline-block text-primary">
        All announcements
      </Link>
    </div>
  ),
});
function Article() {
  const article = Route.useLoaderData();
  return (
    <>
      <PageIntro title={article.title} description={article.category} />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className="eyebrow">Administrator-confirmation placeholder</p>
        <p className="mt-4 text-sm text-muted-foreground">
          {article.date ?? "Publication date awaiting confirmation"}
        </p>
        <div className="mt-8 space-y-6 text-muted-foreground">
          {article.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link to="/news" className="mt-10 inline-block font-semibold text-primary">
          Back to announcements
        </Link>
      </article>
    </>
  );
}
