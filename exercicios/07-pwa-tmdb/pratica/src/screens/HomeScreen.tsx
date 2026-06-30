// src/screens/HomeScreen.tsx

import { useState, useRef } from 'react';
import { usePopularMovies, isTokenMissing } from '../hooks/useTmdb';
import { useFavorites } from '../hooks/useFavorites';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { AppHeader } from '../components/AppHeader';
import { MovieCard } from '../components/MovieCard';
import { MovieCardSkeleton } from '../components/MovieCardSkeleton';
import { ErrorScreen } from './ErrorScreen';
import { TokenMissingScreen } from './TokenMissingScreen';

export function HomeScreen() {
  const { movies, loading, error, hasMore, loadMore } = usePopularMovies();
  const { isFavorite, toggle, count } = useFavorites();
  const [search, setSearch] = useState('');
  const sentinelRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll(sentinelRef, loadMore);

  if (isTokenMissing) return <TokenMissingScreen />;
  if (error) return <ErrorScreen error={error} />;

  const visible = search.trim()
    ? movies.filter((m) => m.title.toLowerCase().includes(search.toLowerCase()))
    : movies;

  return (
    <main style={styles.main}>
      <AppHeader favoritesCount={count} />

      <input
        type="search"
        placeholder="Buscar filme…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchInput}
        aria-label="Buscar filme"
      />

      <section>
        {visible.length === 0 && search && (
          <p style={{ color: '#90a4ae', textAlign: 'center', padding: 24 }}>
            Nenhum resultado para "{search}"
          </p>
        )}
        {visible.map((m) => (
          <MovieCard
            key={m.id}
            movie={m}
            isFavorite={isFavorite(m.id)}
            onToggleFavorite={toggle}
          />
        ))}
      </section>

      {loading && (
        <section aria-label="Carregando mais filmes">
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
        </section>
      )}

      {/* Sentinel — IntersectionObserver dispara loadMore quando chegar aqui */}
      {hasMore && !loading && <div ref={sentinelRef} style={{ height: 1 }} />}
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: { maxWidth: 720, margin: '0 auto', padding: '0 16px 40px' },
  searchInput: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '10px 14px',
    borderRadius: 6,
    border: '1px solid #2a3f55',
    background: '#1c2d40',
    color: '#e5e5e5',
    fontSize: 14,
    marginBottom: 16,
    outline: 'none',
  },
};
