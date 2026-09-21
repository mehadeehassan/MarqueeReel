import { useEffect, useRef, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import MovieModal from "../components/MovieModal.jsx";

const BASE_URL = "https://api.tvmaze.com";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);
  const requestId = useRef(0);

  // Fetch shows whenever the search query changes. TVMaze's two endpoints
  // return different shapes, so the search response is flattened to match
  // the plain show objects that /shows already returns.
  useEffect(() => {
    const currentRequest = ++requestId.current;
    const trimmed = query.trim();
    const url = trimmed
      ? `${BASE_URL}/search/shows?q=${encodeURIComponent(trimmed)}`
      : `${BASE_URL}/shows`;

    setStatus("loading");
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`TVMaze responded with ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (currentRequest !== requestId.current) return; // stale response
        const normalized = trimmed ? data.map((entry) => entry.show) : data;
        setShows(normalized);
        setStatus("success");
      })
      .catch((err) => {
        if (currentRequest !== requestId.current) return;
        setError(err.message || "Something went wrong fetching shows.");
        setStatus("error");
      });
  }, [query]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="font-display text-3xl tracking-tightest text-marquee-paper sm:text-4xl">
        Browse shows
      </h1>

      <div className="relative mt-6 max-w-lg">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-marquee-muted"
        >
          🔍
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a show by title…"
          aria-label="Search for a show by title"
          className="w-full rounded-sm border border-marquee-line bg-marquee-panel py-3 pl-11 pr-4 text-marquee-paper placeholder:text-marquee-muted focus:border-marquee-gold focus:outline-none"
        />
      </div>

      <div className="mt-8">
        {status === "loading" && (
          <p className="text-marquee-muted">Loading shows…</p>
        )}

        {status === "error" && (
          <p className="text-marquee-crimson">
            Couldn't load shows: {error}. Try again in a moment.
          </p>
        )}

        {status === "success" && shows.length === 0 && (
          <p className="text-marquee-muted">
            No shows match "{query}". Try a different title.
          </p>
        )}

        {status === "success" && shows.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shows.map((show) => (
              <MovieCard key={show.id} show={show} onSelect={setSelectedShow} />
            ))}
          </div>
        )}
      </div>

      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </section>
  );
}
