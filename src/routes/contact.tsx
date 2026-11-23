import { createFileRoute, redirect } from "@tanstack/react-router";

/** Retired page. Contact details now live in the site footer. */
export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "contact", statusCode: 301 });
  },
});
