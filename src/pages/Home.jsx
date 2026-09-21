import Hero from "../components/Hero.jsx";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <Hero />

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <FeatureNote
          label="Search"
          copy="Look up any title and get results as you type."
        />
        <FeatureNote
          label="Compare"
          copy="See ratings and premiere years side by side before picking."
        />
        <FeatureNote
          label="Details"
          copy="Open a show for its full synopsis, genre, and network."
        />
      </div>
    </section>
  );
}

function FeatureNote({ label, copy }) {
  return (
    <div className="border-l-2 border-marquee-gold pl-4">
      <h2 className="font-display text-xl tracking-tightest text-marquee-paper">
        {label}
      </h2>
      <p className="mt-1 text-sm text-marquee-muted">{copy}</p>
    </div>
  );
}
