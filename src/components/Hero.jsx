import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="marquee-lights rounded-sm border border-marquee-line bg-marquee-panel px-6 py-14 text-center sm:px-16 sm:py-20">
      <p className="text-sm font-medium tracking-wide text-marquee-gold">
        Now showing
      </p>
      <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-tightest text-marquee-paper sm:text-7xl">
        Find your next
        <br />
        binge-worthy show
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base text-marquee-muted sm:text-lg">
        Search thousands of series, check ratings before you commit, and
        queue up your next watch — all in one place.
      </p>
      <Link
        to="/movies"
        className="mt-8 inline-block rounded-sm bg-marquee-gold px-8 py-3 text-sm font-semibold text-marquee-bg transition-transform hover:scale-[1.02]"
      >
        Explore now
      </Link>
    </div>
  );
}
