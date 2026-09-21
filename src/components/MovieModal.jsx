import { useEffect } from 'react';
import { MdDateRange } from 'react-icons/md';

function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<\/p>/gi, ' ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatYear(dateString) {
  if (!dateString) return 'TBA';
  return new Date(dateString).getFullYear();
}

export default function MovieModal({ show, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!show) return null;

  const backdrop = show.image?.original || show.image?.medium;
  const rating = show.rating?.average;
  const genres = show.genres?.length ? show.genres.join(', ') : 'Not listed';

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sm border border-marquee-line bg-marquee-panel"
      >
        <div className="relative">
          {backdrop ? (
            <img
              src={backdrop}
              alt={`Backdrop for ${show.name}`}
              className="h-56 w-full object-cover sm:h-72"
            />
          ) : (
            <div className="flex h-56 w-full items-center justify-center bg-marquee-line text-marquee-muted sm:h-72">
              No image available
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-marquee-bg/80 text-marquee-paper hover:bg-marquee-crimson"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6">
          <h2
            id="modal-title"
            className="font-display text-3xl leading-tight tracking-tightest text-marquee-paper"
          >
            {show.name}
          </h2>

          <p className="text-sm text-marquee-muted flex items-center">
            {rating ? `⭐ Rating: ${rating}` : '⭐ Rating: N/A'} &nbsp;|&nbsp;
            <span className="flex items-center gap-1">
              Premiered: <MdDateRange />
              {formatYear(show.premiered)}
            </span>
          </p>

          <div>
            <h3 className="mb-1 text-sm font-semibold text-marquee-gold">Overview</h3>
            <p className="text-sm leading-relaxed text-marquee-paper/90">
              {stripHtml(show.summary) || 'No summary available.'}
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-3 border-t border-marquee-line pt-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-marquee-muted">Genre</dt>
              <dd className="text-marquee-paper">{genres}</dd>
            </div>
            <div>
              <dt className="text-marquee-muted">Network</dt>
              <dd className="text-marquee-paper">
                {show.network?.name || show.webChannel?.name || 'Not listed'}
              </dd>
            </div>
            <div>
              <dt className="text-marquee-muted">Status</dt>
              <dd className="text-marquee-paper">{show.status || 'Unknown'}</dd>
            </div>
            <div>
              <dt className="text-marquee-muted">Runtime</dt>
              <dd className="text-marquee-paper">
                {show.runtime ? `${show.runtime} min` : 'Not listed'}
              </dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={onClose}
            className="mt-2 self-start rounded-sm border border-marquee-crimson px-5 py-2 text-sm font-semibold text-marquee-crimson transition-colors hover:bg-marquee-crimson hover:text-marquee-paper"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}
