// src/App.tsx

import { usePopularMovies, isTokenMissing } from './hooks/useTmdb';
import { MovieCard } from './components/MovieCard';

export default function App() {
  const { movies, loading, error } = usePopularMovies();

  if (isTokenMissing) {
    return (
      <main style={styles.center}>
        <h2>Token TMDB não configurado</h2>
        <p>
          Copie <code>.env.example</code> para <code>.env.local</code> e preencha{' '}
          <code>VITE_TMDB_TOKEN</code>.
        </p>
        <p>
          Gere em:{' '}
          <a href="https://www.themoviedb.org/settings/api" style={{ color: '#01b4e4' }}>
            themoviedb.org/settings/api
          </a>
        </p>
      </main>
    );
  }

  if (loading) return <main style={styles.center}><p>Carregando…</p></main>;
  if (error)   return <main style={styles.center}><p>Erro: {error}</p></main>;

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.h1}>🎬 Filmes Populares</h1>
        <p style={{ color: '#90a4ae', margin: 0 }}>{movies.length} filmes</p>
      </header>

      {/* ── TODO (bônus) ────────────────────────────────────────────────────
          Adicione um <input> de busca que filtra `movies` pelo título.
          Use useState pra guardar o termo e Array.filter pra filtrar.
          ─────────────────────────────────────────────────────────────────── */}

      <section>
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: { maxWidth: 720, margin: '0 auto', padding: '0 16px 40px' },
  center: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 40 },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0' },
  h1: { color: '#01b4e4', margin: 0 },
};
