# Atividade 7 — PWA: filmes populares instalável e offline

**Disciplina:** Arquitetura de Aplicações Móveis e Multiplataforma  
**Entrega:** fork + PR no repositório da disciplina  
**Valor:** 15 pontos

---

## Contexto

Nesta atividade você vai construir uma **Progressive Web App** que lista filmes populares do TMDB, pode ser instalada e funciona **offline** com dados em cache.

A PWA usa as mesmas tecnologias do exercício da Aula 4 (Service Worker, Web App Manifest), mas agora aplicada ao domínio de filmes — o mesmo que usamos no RN e no KMP.

---

## Setup

```bash
cd exercicios/07-pwa-tmdb/pratica
```

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Configure o token:**
   ```bash
   cp .env.example .env.local
   # edite .env.local e coloque seu VITE_TMDB_TOKEN
   ```
3. **Rode em modo dev:**
   ```bash
   npm run dev
   # abre http://localhost:5173
   ```
   A tela inicial mostra "Token TMDB não configurado" enquanto o token não estiver configurado.

---

## O que você vai implementar

### Parte A — Busca de dados (8 pts)

**Arquivo:** `src/hooks/useTmdb.ts`

Implemente os **TODOs 1 e 2**:

**TODO 1** — `fetchPopularMovies()`:
```typescript
const res = await fetch(`${BASE}/movie/popular?language=pt-BR&page=1`, {
  headers: { Authorization: `Bearer ${TOKEN}` }
});
const data: MoviesResponse = await res.json();
return data.results;
```

**TODO 2** — `useEffect` no hook `usePopularMovies`:
- Chame `fetchPopularMovies()` ao montar
- Gerencie `loading` e `error`

**Critério A (8 pts):** filmes aparecem na tela com título, nota e ano.

### Parte B — Offline com Service Worker (7 pts)

**Arquivo:** `vite.config.ts`

Implemente o **TODO 3** — adicione `runtimeCaching` no Workbox para cachear respostas da TMDB API com estratégia `NetworkFirst`.

**Teste:**
```bash
npm run build && npm run preview
# abre DevTools → Application → Service Workers → "Offline"
# recarregue — filmes continuam aparecendo
```

**Critério B1 (4 pts):** Service Worker registrado e ativo (aparece em DevTools).  
**Critério B2 (3 pts):** app carrega filmes em modo offline após primeira visita.

---

## Entrega

1. Faça o fork (se ainda não fez)
2. Implemente os TODOs
3. PR com título: `feat(a7-pwa): <seu-login>`
4. O bot comenta o score automático

---

## Links úteis

- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)
- [Workbox Strategies](https://developer.chrome.com/docs/workbox/caching-strategies-overview/)
- [TMDB API — Movie Popular](https://developer.themoviedb.org/reference/movie-popular-list)
- [MDN — Service Worker API](https://developer.mozilla.org/pt-BR/docs/Web/API/Service_Worker_API)
