import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-marquee-line bg-marquee-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-2xl tracking-tightest text-marquee-paper"
        >
          <span aria-hidden="true" className="text-marquee-gold">
            ▮▯
          </span>
          MarqueeReel
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hidden text-sm font-medium sm:block ${
                isActive ? "text-marquee-gold" : "text-marquee-muted hover:text-marquee-paper"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `rounded-sm border px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-marquee-gold bg-marquee-gold text-marquee-bg"
                  : "border-marquee-gold text-marquee-gold hover:bg-marquee-gold hover:text-marquee-bg"
              }`
            }
          >
            Browse shows
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
