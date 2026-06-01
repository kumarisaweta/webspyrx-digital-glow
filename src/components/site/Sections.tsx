import {
  Globe, Code2, Smartphone, Workflow, LayoutTemplate, TrendingUp,
  Target, Shield, Eye, Rocket, Handshake, Lock,
  Search, Compass, Palette, Hammer, Bug, PlayCircle, LineChart,
  Star, Mail, Instagram, ArrowRight, Sparkles,
} from "lucide-react";
import { useState } from "react";
import { GlowOrbs, Particles } from "./Background";
import { Reveal } from "./Reveal";

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-28 overflow-hidden">
      <GlowOrbs />
      <Particles count={28} />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-[0.2em]">
            <Sparkles size={14} className="text-[color:var(--hot)]" />
            <span className="text-gradient-brand">DIGITAL AGENCY</span>
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            We Build{" "}
            <span className="text-gradient-brand animate-shimmer">Digital Infrastructure</span>
            <br className="hidden md:block" />
            That Powers Growth
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Webspyrx partners with ambitious teams to design, build and scale premium
            web, mobile, and automation products — engineered for performance and built to last.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-white shadow-soft hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all"
            >
              Start Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium text-foreground glass hover:border-[color:var(--vibrant)] transition"
            >
              View Our Work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  { icon: Globe, title: "Website Development", desc: "Marketing sites and brand experiences engineered for speed, SEO, and conversion." },
  { icon: Code2, title: "Web Application Development", desc: "Custom SaaS, dashboards and platforms built on modern, scalable architecture." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-feeling iOS and Android apps with elegant interfaces and rock-solid performance." },
  { icon: Workflow, title: "Business Automation", desc: "Automate workflows, integrations and operations so your team can focus on growth." },
  { icon: LayoutTemplate, title: "Landing Page Development", desc: "High-converting landing pages crafted around your offer, audience and analytics." },
  { icon: TrendingUp, title: "Digital Growth Solutions", desc: "Data-driven growth systems across SEO, content and performance marketing." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="SERVICES"
          title={<>What We <span className="text-gradient-brand">Craft</span></>}
          sub="A full-stack agency offering — from concept to launch to long-term growth."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group glass hover-lift rounded-2xl p-7 h-full">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center glow-purple">
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center text-sm text-foreground/80 group-hover:text-gradient-brand transition">
                  Learn more <ArrowRight size={14} className="ml-1.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY ---------- */
const reasons = [
  { icon: Target, title: "Business-First Approach", desc: "We start with outcomes, not features — every decision ties back to your revenue." },
  { icon: Shield, title: "Enterprise-Grade Quality", desc: "Code, design and process standards built for teams that can't afford to break." },
  { icon: Eye, title: "Transparent Process", desc: "Live dashboards, weekly demos, clear pricing. No surprises, ever." },
  { icon: Rocket, title: "Future-Ready Solutions", desc: "Architectures that bend, scale and absorb change as your business evolves." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We grow alongside you — from MVP to market leader." },
  { icon: Lock, title: "Security and Reliability", desc: "Security-first engineering with monitoring, backups and uptime baked in." },
];

export function Why() {
  return (
    <section id="about" className="relative py-28 bg-card/40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="WHY WEBSPYRX"
          title={<>Built for teams who <span className="text-gradient-brand">refuse to settle</span></>}
          sub="Six reasons ambitious founders choose us as their digital partner."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="glass hover-lift rounded-2xl p-7 h-full">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-lg bg-gradient-brand grid place-items-center">
                    <r.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-base font-semibold">{r.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
const steps = [
  { icon: Search, title: "Discovery", desc: "We audit your business, audience and goals to surface real opportunities." },
  { icon: Compass, title: "Strategy", desc: "A clear roadmap with priorities, success metrics and a phased delivery plan." },
  { icon: Palette, title: "Design", desc: "Brand-aligned interfaces engineered for clarity, usability and conversion." },
  { icon: Hammer, title: "Development", desc: "Production-grade engineering with modern stacks and rigorous code review." },
  { icon: Bug, title: "Testing", desc: "Automated and human QA across devices, performance and accessibility." },
  { icon: PlayCircle, title: "Launch", desc: "Smooth, monitored deployments with rollback plans and zero-downtime cutover." },
  { icon: LineChart, title: "Growth", desc: "Continuous iteration informed by analytics, experiments and user feedback." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="OUR PROCESS"
          title={<>A proven path from <span className="text-gradient-brand">idea to impact</span></>}
          sub="Seven steps. Zero guesswork."
        />
        <div className="mt-20 relative">
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, #3B82F6, #8B5CF6, #EC4899, transparent)" }}
          />
          <div className="space-y-12">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
                    <div
                      className={`pl-14 md:pl-0 ${
                        left ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <div className="glass rounded-2xl p-6 hover-lift">
                        <div className="text-xs tracking-[0.2em] text-gradient-brand font-medium">
                          STEP {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                    <div
                      className="absolute left-5 md:left-1/2 top-6 -translate-x-1/2 h-10 w-10 rounded-full bg-gradient-brand grid place-items-center glow-purple ring-4 ring-background"
                    >
                      <s.icon size={16} className="text-white" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO ---------- */
const projects = [
  { title: "Nimbus Finance", tag: "FinTech Platform", grad: "linear-gradient(135deg,#3B82F6,#8B5CF6)" },
  { title: "Halo Health", tag: "Healthcare App", grad: "linear-gradient(135deg,#8B5CF6,#EC4899)" },
  { title: "Forge Commerce", tag: "Headless eCommerce", grad: "linear-gradient(135deg,#EC4899,#3B82F6)" },
  { title: "Atlas Logistics", tag: "Operations Suite", grad: "linear-gradient(135deg,#3B82F6,#EC4899)" },
  { title: "Lumen Studio", tag: "Creative Portfolio", grad: "linear-gradient(135deg,#8B5CF6,#3B82F6)" },
  { title: "Vault Analytics", tag: "SaaS Dashboard", grad: "linear-gradient(135deg,#EC4899,#8B5CF6)" },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-28 bg-card/40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title={<>Projects that <span className="text-gradient-brand">moved the needle</span></>}
          sub="A glimpse at what we've shipped for partners across industries."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group relative rounded-2xl overflow-hidden glass hover-lift">
                <div className="aspect-[4/3] relative" style={{ background: p.grad }}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.35), transparent 60%)" }} />
                </div>
                <div className="p-6">
                  <div className="text-xs tracking-[0.2em] text-muted-foreground">{p.tag}</div>
                  <div className="mt-1 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground transition" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { name: "Aarav Mehta", role: "Founder, Nimbus Finance", quote: "Webspyrx rebuilt our platform from scratch and tripled signup conversion within a quarter. The craft is unreal." },
  { name: "Sofia Reyes", role: "CPO, Halo Health", quote: "They feel like an extension of our team — strategic, fast, and ruthlessly focused on outcomes." },
  { name: "Daniel Cho", role: "CEO, Forge Commerce", quote: "Premium engineering, premium design, zero drama. Easily the best agency we've worked with." },
  { name: "Maya Iyer", role: "Head of Growth, Vault", quote: "From discovery to launch, every milestone felt effortless. Our dashboards have never looked better." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="relative py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title={<>Trusted by <span className="text-gradient-brand">builders worldwide</span></>}
        />
        <Reveal>
          <div className="mt-14 glass rounded-3xl p-10 md:p-14 relative">
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} size={18} fill="#EC4899" className="text-[#EC4899]" />
              ))}
            </div>
            <p className="mt-6 text-xl md:text-2xl font-medium leading-relaxed">
              “{t.quote}”
            </p>
            <div className="mt-8">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Show testimonial ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "w-8 bg-gradient-brand" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "How long does a typical project take?", a: "Most engagements run 6–14 weeks depending on scope. We share a detailed timeline after the discovery phase." },
  { q: "Do you work with early-stage startups?", a: "Yes — we love partnering with founders from MVP through scale, with pricing models tailored to the stage." },
  { q: "What does pricing look like?", a: "Projects are fixed-scope or retainer-based. We share transparent estimates after a short discovery call." },
  { q: "Will I own the code and design?", a: "Always. You receive full IP ownership, complete repositories and design source files at handoff." },
  { q: "Do you offer ongoing support?", a: "Yes — most clients continue with us on growth retainers covering iteration, performance and new features." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28 bg-card/40">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Answers to <span className="text-gradient-brand">common questions</span></>}
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="glass rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between text-left px-6 py-5"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-medium">{f.q}</span>
                    <span
                      className={`h-7 w-7 rounded-full bg-gradient-brand grid place-items-center text-white transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <GlowOrbs />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title={<>Let's build something <span className="text-gradient-brand">extraordinary</span></>}
          sub="Tell us about your project and we'll get back within one business day."
        />
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="glass rounded-2xl p-8 h-full flex flex-col gap-6">
              <a href="mailto:official.webspyrx@gmail.com" className="flex items-start gap-4 group">
                <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center glow-purple">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] text-muted-foreground">EMAIL</div>
                  <div className="mt-1 font-medium group-hover:text-gradient-brand transition">
                    official.webspyrx@gmail.com
                  </div>
                </div>
              </a>
              <a href="https://instagram.com/webspyrx" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center glow-pink">
                  <Instagram size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] text-muted-foreground">INSTAGRAM</div>
                  <div className="mt-1 font-medium group-hover:text-gradient-brand transition">@webspyrx</div>
                </div>
              </a>
              <div className="mt-auto pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Prefer a quick call? Mention it in your message and we'll send over a calendar link.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 4000);
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="glass rounded-2xl p-8 space-y-5"
            >
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Company" name="company" />
              <div>
                <label className="text-xs tracking-[0.2em] text-muted-foreground">PROJECT DETAILS</label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  className="mt-2 w-full rounded-xl bg-background/40 border border-border focus:border-[color:var(--vibrant)] focus:outline-none px-4 py-3 text-sm transition"
                  placeholder="Tell us about your goals…"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-white shadow-soft hover:shadow-[0_0_50px_rgba(236,72,153,0.45)] transition"
              >
                {sent ? "Message sent ✓" : "Send Message"}
                {!sent && <ArrowRight size={16} />}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs tracking-[0.2em] text-muted-foreground">{label.toUpperCase()}</label>
      <input
        required
        type={type}
        name={name}
        className="mt-2 w-full rounded-xl bg-background/40 border border-border focus:border-[color:var(--vibrant)] focus:outline-none px-4 py-3 text-sm transition"
      />
    </div>
  );
}

/* ---------- FOOTER ---------- */
export function Footer() {
  const cols = [
    { title: "Company", links: ["About", "Careers", "Process", "Contact"] },
    { title: "Services", links: ["Web Development", "Mobile Apps", "Automation", "Growth"] },
    { title: "Resources", links: ["Blog", "Case Studies", "Pricing", "FAQ"] },
    { title: "Contact", links: ["official.webspyrx@gmail.com", "@webspyrx", "Schedule a Call"] },
  ];
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-gradient-brand" />
            <span className="text-lg font-semibold">
              Web<span className="text-gradient-brand">spyrx</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Digital infrastructure that powers growth.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs tracking-[0.2em] text-muted-foreground">{c.title.toUpperCase()}</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-foreground/80 hover:text-gradient-brand transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Webspyrx. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- SHARED ---------- */
function SectionHeading({
  eyebrow, title, sub,
}: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <Reveal>
        <div className="text-xs tracking-[0.25em] text-gradient-brand font-medium">{eyebrow}</div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={160}>
          <p className="mt-4 text-muted-foreground">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
