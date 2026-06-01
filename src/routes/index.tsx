import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import {
  Hero, Services, Why, Process, Portfolio, Testimonials, FAQ, Contact, Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webspyrx — Digital Infrastructure That Powers Growth" },
      {
        name: "description",
        content:
          "Webspyrx is a premium digital agency designing and engineering web, mobile and automation products built to scale.",
      },
      { property: "og:title", content: "Webspyrx — Premium Digital Agency" },
      {
        property: "og:description",
        content:
          "We design, build and scale premium digital products for ambitious teams.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Why />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
