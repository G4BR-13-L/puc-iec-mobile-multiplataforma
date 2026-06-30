// src/hooks/useTmdb.ts — React wrapper em cima do service

import { useState, useEffect } from 'react';
import { fetchPopularMovies, isTokenMissing, posterUrl } from '../services/tmdb';
import type { Movie } from '../types/movie';

export { isTokenMissing, posterUrl };

export function usePopularMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ── TODO 2 ─────────────────────────────────────────────────────────────
  // Use useEffect para chamar fetchPopularMovies() ao montar o componente.
  // Gerencie loading=true antes de chamar e loading=false no finally.
  // Em caso de erro, salve a mensagem em setError(err.message).
  // ───────────────────────────────────────────────────────────────────────

  return { movies, loading, error };
}
