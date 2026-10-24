import { QueryClient } from "@tanstack/react-query";
import { createRouter, Link } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: () => (
      <div className="px-5 pt-32 pb-20 text-center">
        <h1 className="text-4xl">Sri Veerabhadrakali Temple</h1>
        <p className="mt-4">This page could not be loaded.</p>
        <Link to="/" className="mt-6 inline-block text-primary">
          Return Home
        </Link>
      </div>
    ),
  });

  return router;
};
