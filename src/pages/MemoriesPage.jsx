import { useEffect, useState } from "react";
import aboutPhoto from "../assets/about-photo.webp";
import contactPhoto from "../assets/contact-photo.webp";
import educationPhoto from "../assets/education.jpg";
import profilePhoto from "../assets/profile.png";

const photos = [
  { src: aboutPhoto, title: "Curiosity in practice", caption: "A little moment from the journey.", shape: "md:col-span-2 md:row-span-2" },
  { src: educationPhoto, title: "Learning along the way", caption: "Every new skill starts with a first step.", shape: "" },
  { src: profilePhoto, title: "A day to remember", caption: "Collecting the moments that matter.", shape: "" },
  { src: contactPhoto, title: "Making connections", caption: "Good things happen when we grow together.", shape: "md:col-span-2" },
];

// Add video files here when they are ready. Cards become playable automatically
// as soon as a video has a non-empty src.
const videos = [
  { title: "A little look back", caption: "A video memory is on its way.", src: "", poster: aboutPhoto },
  { title: "Moments in motion", caption: "This spot is ready for another memory.", src: "", poster: contactPhoto },
];

const MemoriesPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!selectedPhoto) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPhoto]);

  return (
    <div className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[34rem] w-[44rem] -translate-x-1/2 rounded-full bg-blue-500/[0.12] blur-[120px]" />
      <header className="mx-auto max-w-7xl px-6 pb-14 pt-16 md:px-16 md:pb-20 md:pt-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">Little moments, big memories</p>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Memories<span className="text-blue-400">.</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">A collection of moments from learning, creating, and spending time with the people around me.</p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-300"><span className="h-1.5 w-1.5 rounded-full bg-sky-300" /> Photo journal</span>
        </div>
      </header>

      <section aria-labelledby="memory-photos" className="mx-auto max-w-7xl px-6 pb-20 md:px-16 md:pb-28">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">01 / Gallery</p><h2 id="memory-photos" className="mt-2 text-2xl font-semibold text-white">Captured moments</h2></div>
          <span className="text-sm text-slate-500">{String(photos.length).padStart(2, "0")} photos</span>
        </div>
        <div className="grid auto-rows-[230px] gap-4 sm:grid-cols-2 md:auto-rows-[250px] md:grid-cols-4">
          {photos.map((photo) => (
            <button key={photo.title} type="button" onClick={() => setSelectedPhoto(photo)} aria-label={`View photo: ${photo.title}`} className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1930] text-left ${photo.shape}`}>
              <img src={photo.src} alt={photo.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/90 via-[#020817]/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                <div><h3 className="font-semibold text-white">{photo.title}</h3><p className="mt-1 text-sm text-slate-300">{photo.caption}</p></div>
                <span aria-hidden="true" className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition group-hover:bg-white/20">↗</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section aria-labelledby="memory-videos" className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-20">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">02 / Video</p><h2 id="memory-videos" className="mt-2 text-2xl font-semibold text-white">Moving memories</h2></div>
            <span className="text-sm text-slate-500">Coming soon</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {videos.map((video) => (
              <article key={video.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#071225] shadow-[0_18px_55px_rgba(0,0,0,0.2)]">
                {video.src ? (
                  <video src={video.src} poster={video.poster} controls preload="metadata" className="aspect-video w-full bg-black" aria-label={video.title} />
                ) : (
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#0b1930]">
                    <img src={video.poster} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/65 via-transparent to-[#020817]/10" />
                    <span aria-hidden="true" className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-white/35 bg-slate-950/35 pl-1 text-2xl text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-sm">▶</span>
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-slate-950/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">Video coming soon</span>
                  </div>
                )}
                <div className="p-5 sm:p-6"><h3 className="font-semibold text-white">{video.title}</h3><p className="mt-1 text-sm text-slate-400">{video.caption}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div role="dialog" aria-modal="true" aria-label={selectedPhoto.title} onClick={() => setSelectedPhoto(null)} className="fixed inset-0 z-[70] flex items-center justify-center bg-[#020817]/90 p-5 backdrop-blur-md">
          <button type="button" autoFocus onClick={() => setSelectedPhoto(null)} aria-label="Close photo" className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white hover:bg-white/20">×</button>
          <figure onClick={(event) => event.stopPropagation()} className="max-h-full max-w-5xl">
            <img src={selectedPhoto.src} alt={selectedPhoto.title} className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl" />
            <figcaption className="pt-4 text-center"><p className="font-semibold text-white">{selectedPhoto.title}</p><p className="mt-1 text-sm text-slate-400">{selectedPhoto.caption}</p></figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default MemoriesPage;
