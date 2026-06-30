// src/components/MovieCard.tsx

import type { Movie } from '../types/movie';
import { posterUrl } from '../hooks/useTmdb';

type Props = { movie: Movie };

export function MovieCard({ movie }: Props) {
  const img = posterUrl(movie.poster_path);
  const year = movie.release_date?.slice(0, 4) ?? '—';

  return (
    <article style={styles.card}>
      {img && (
        <img
          src={img}
          alt={movie.title}
          width={120}
          height={180}
          loading="lazy"
          style={styles.poster}
        />
      )}
      <div style={styles.info}>
        <h3 style={styles.title}>{movie.title}</h3>
        <p style={styles.meta}>
          ⭐ {movie.vote_average.toFixed(1)} · {year}
        </p>
        <p style={styles.overview}>{movie.overview.slice(0, 140)}…</p>
      </div>
    </article>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    display: 'flex',
    gap: 16,
    padding: 16,
    borderRadius: 8,
    background: '#1c2d40',
    marginBottom: 12,
  },
  poster: { borderRadius: 4, objectFit: 'cover', flexShrink: 0 },
  info: { flex: 1 },
  title: { margin: '0 0 4px', color: '#01b4e4', fontSize: 16 },
  meta: { margin: '0 0 8px', color: '#90a4ae', fontSize: 13 },
  overview: { margin: 0, color: '#cfd8dc', fontSize: 13, lineHeight: 1.5 },
};
