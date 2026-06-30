// src/components/AppHeader.tsx

import { InstallButton } from './InstallButton';

type Props = { favoritesCount: number };

export function AppHeader({ favoritesCount }: Props) {
  return (
    <header style={styles.header}>
      <div>
        <h1 style={styles.h1}>🎬 Filmes Populares</h1>
        {favoritesCount > 0 && (
          <p style={styles.badge}>★ {favoritesCount} favorito{favoritesCount !== 1 ? 's' : ''}</p>
        )}
      </div>
      <InstallButton />
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px 0 12px',
  },
  h1: { color: '#01b4e4', margin: 0 },
  badge: { margin: '4px 0 0', color: '#e4a001', fontSize: 13 },
};
