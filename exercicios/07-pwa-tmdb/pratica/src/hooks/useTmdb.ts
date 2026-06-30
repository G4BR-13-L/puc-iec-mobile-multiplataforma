// src/hooks/useTmdb.ts — hook de dados TMDB

import { useState, useEffect } from 'react';
import type { Movie, MoviesResponse } from '../types/movie';

const TOKEN = import.meta.env.VITE_TMDB_TOKEN as string;
const BASE = 'https://api.themoviedb.org/3';

export const isTokenMissing = !TOKEN || TOKEN === 'cole_seu_token_aqui';

// ── TODO 1 ─────────────────────────────────────────────────────────────────
// Implemente a função fetchPopularMovies abaixo.
//
// Endpoint: GET https://api.themoviedb.org/3/movie/popular
// Headers: { Authorization: `Bearer ${TOKEN}` }
// Query params: language=pt-BR&page=1
//
// Dica: use fetch() nativo (não precisa de axios aqui).
//
// async function fetchPopularMovies(): Promise<Movie[]> { ... }
// ───────────────────────────────────────────────────────────────────────────

async function fetchPopularMovies(): Promise<Movie[]> {
  // TODO 1: substitua o stub abaixo pela chamada real
  return [];
}

export function usePopularMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ── TODO 2 ───────────────────────────────────────────────────────────────
  // Use useEffect para chamar fetchPopularMovies() ao montar o componente.
  // Gerencie loading e error adequadamente.
  // ─────────────────────────────────────────────────────────────────────────

  return { movies, loading, error };
}

export const posterUrl = (path: string | null) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null;
