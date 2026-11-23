import { createFileRoute, redirect } from "@tanstack/react-router";

/** Retired page. Kept so existing links land on the bakery-partner tab. */
export const Route = createFileRoute("/bakeries")({
  beforeLoad: () => {
    throw redirect({ to: "/get-involved", search: { tab: "bakery" }, statusCode: 301 });
  },
});
