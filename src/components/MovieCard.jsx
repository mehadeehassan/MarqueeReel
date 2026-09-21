import { MdDateRange } from "react-icons/md";

function formatYear(dateString) {
  if (!dateString) return "TBA";
  return new Date(dateString).getFullYear();
}

export default function MovieCard({ show, onSelect }) {
  const poster = show.image?.medium;
  const rating = show.rating?.average;

  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-marquee-line bg-marquee-panel">
      <div className="aspect-2/3 w-full bg-marquee-line">
        {poster ? (
          <img
            src={poster}
            alt={`Poster for ${show.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-4 text-center text-sm text-marquee-muted">
            No poster available
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-lg leading-tight tracking-tightest text-marquee-paper">
          {show.name}
        </h3>
        <p className="text-sm text-marquee-muted flex items-center">
          {rating ? `⭐ ${rating}` : "⭐ N/A"} {" "} &nbsp;|&nbsp; {" "} <span className="flex items-center gap-1"><MdDateRange />{formatYear(show.premiered)}</span>
        </p>
        <button
          type="button"
          onClick={() => onSelect(show)}
          className="mt-auto rounded-sm border border-marquee-gold py-2 text-sm font-semibold text-marquee-gold transition-colors hover:bg-marquee-gold hover:text-marquee-bg"
        >
          See details
        </button>
      </div>
    </article>
  );
}
