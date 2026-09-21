export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-marquee-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-sm text-marquee-muted sm:flex-row sm:justify-between">
        <p className="font-display text-lg tracking-tightest text-marquee-paper">
          MarqueeReel
        </p>
        <p>© {year} MarqueeReel. Show data courtesy of TVMaze.</p>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-marquee-gold"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
