import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gadget Dash — Theft Shield by Suraj Ishwar" },
      {
        name: "description",
        content:
          "Premium smart bike security system. Real-time tracking, instant alerts, engine lock and tamper detection. Stay one step ahead of thieves.",
      },
      { property: "og:title", content: "Gadget Dash — Theft Shield" },
      {
        property: "og:description",
        content: "Premium smart bike security. 95% theft risk reduction, 2-year warranty, trusted by 1,500+ riders.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
