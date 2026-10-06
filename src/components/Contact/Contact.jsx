import usePortfolioData from "../../hooks/usePortfolioData";
import localPortrait from "../../assets/profile.png";
import { SectionTitle } from "../ui";
import { Link } from "react-router-dom";

const Contact = ({ preview = false }) => {
  const { contactData, heroData } = usePortfolioData();
  const contactItems = [
    { label: "Email", value: contactData.email, detail: "For work & general enquiries", href: contactData.email ? `mailto:${contactData.email}` : "" },
    { label: "Phone", value: contactData.phone, detail: "Available for a conversation", href: contactData.phone ? `tel:${contactData.phone.replace(/\s/g, "")}` : "" },
    { label: "Telegram", value: contactData.telegram, detail: "Find me on Telegram", href: contactData.telegram ? `https://t.me/${contactData.telegram.replace(/^@/, "")}` : "" },
  ].filter((item) => item.value);
  return (
  <section id="contact" className={`relative mx-auto max-w-7xl scroll-mt-24 px-6 md:px-16 ${preview ? "py-20" : "pb-24 pt-12 md:pb-32 md:pt-16"}`}>
    <div aria-hidden="true" className="pointer-events-none absolute right-10 top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

    {preview ? (
      <>
        <SectionTitle title="Get in touch" withEndDot />
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1c36] to-[#071225] p-7 md:p-10">
          <div aria-hidden="true" className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-sky-300/10" />
          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">Contact details</p>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">Let&apos;s stay connected.</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">A quick look at where to find me and how to reach me.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {contactData.email && <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">{contactData.email}</span>}
              {contactData.location && <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">{contactData.location}</span>}
              <Link to="/contact" className="rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-200">View contact page ↗</Link>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="relative mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">Contact <span className="text-slate-600">/</span> 01</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">Find me around the web<span className="text-blue-400">.</span></h2>
          </div>
          <span className="font-mono text-[11px] tracking-wide text-slate-500 sm:pb-1 sm:text-xs">21° 58&apos; N <span className="text-slate-700">/</span> 96° 05&apos; E</span>
        </div>

          <div className="relative grid min-w-0 gap-4 md:gap-5 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div className="group relative flex min-h-[390px] min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1a31] p-6 sm:p-8 md:min-h-[440px] md:p-9">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_18%,rgba(56,189,248,0.19),transparent_46%),linear-gradient(145deg,transparent_40%,rgba(37,99,235,0.1))]" />
            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div>
                <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-xs text-emerald-200"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />Based in {contactData.location || "Myanmar"}</span>
                <h3 className="mt-7 max-w-sm text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-tight text-white">Good work starts with a real conversation.</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">{heroData.title} · Open to ideas, collaboration, and thoughtful conversations.</p>
              </div>
              <div className="mt-8 flex items-end justify-between gap-3">
                <div><p className="text-xs uppercase tracking-[0.2em] text-slate-500">Local time zone</p><p className="mt-1 font-mono text-sm text-slate-200">MMT · UTC +06:30</p></div>
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-sky-200/10 sm:h-32 sm:w-32" style={{ width: "clamp(7rem, 22vw, 8rem)", height: "clamp(7rem, 22vw, 8rem)" }}><img src={contactData.photoUrl || heroData.photoUrl || localPortrait} alt={`Portrait of ${heroData.name}`} className="!m-0 !block !h-full !w-full max-w-none object-cover object-[30%_75%]" style={{ width: "100%", height: "100%" }} /></div>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-4 md:gap-5">
            <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 md:p-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:tracking-[0.24em]">Reach out directly</p><span className="font-mono text-[10px] text-slate-600 sm:text-xs">{String(contactItems.length).padStart(2, "0")} CHANNELS</span></div>
              <div className="divide-y divide-white/[0.08]">
                {contactItems.map((item, index) => (
                  <div key={item.label} className="flex items-center gap-4 py-7 first:pt-4 last:pb-4 sm:py-8">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-300/15 bg-sky-300/[0.07] font-mono text-xs text-sky-200">0{index + 1}</span>
                    <div className="min-w-0"><p className="text-xs leading-5 text-slate-500">{item.label} <span className="px-1 text-slate-700">/</span> {item.detail}</p>{item.href ? <a href={item.href} target={item.label === "Telegram" ? "_blank" : undefined} rel={item.label === "Telegram" ? "noreferrer" : undefined} className="mt-1 block break-all text-sm font-medium text-slate-100 transition-colors hover:text-sky-200 sm:break-normal sm:truncate sm:text-base md:text-lg">{item.value}</a> : <p className="mt-1 break-all text-sm font-medium text-slate-100 sm:text-base md:text-lg">{item.value}</p>}</div>
                    <span aria-hidden="true" className="ml-auto text-slate-600">↗</span>
                  </div>
                ))}
                {contactItems.length === 0 && <p className="py-5 text-sm text-slate-400">Contact details will appear here soon.</p>}
              </div>
            </div>
            <div className="mt-1 flex flex-1 items-center justify-between gap-4 rounded-3xl border border-sky-300/15 bg-sky-300/[0.06] px-5 py-6 sm:px-6 md:mt-2 md:px-8">
              <div><p className="text-xs uppercase tracking-[0.22em] text-sky-200/70">Current location</p><p className="mt-1 text-lg font-medium text-white">{contactData.location || "Myanmar"}</p></div>
              <span aria-hidden="true" className="text-2xl text-sky-200">⌖</span>
            </div>
          </div>
        </div>
      </>
    )}
  </section>
  );
};

export default Contact;
