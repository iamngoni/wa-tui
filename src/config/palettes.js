/** Named colour palettes for the TUI (hex strings, blessed-safe). Foreground-only — terminal background comes from the host (e.g. VS Code theme). */

const PALETTES = {
  ocean: {
    label: 'Ocean (default)',
    fg: '#68C5DB',
    fgDim: '#448FA3',
    accent: '#0197F6',
    selfMsg: '#68C5DB',
    peerMsg: '#448FA3',
    error: '#D7263D',
    unread: '#D7263D'
  },
  matrix: {
    label: 'Matrix',
    fg: '#3dff7a',
    fgDim: '#2a8f4a',
    accent: '#00ff66',
    selfMsg: '#7dff9a',
    peerMsg: '#5fcc7a',
    error: '#ff3333',
    unread: '#ff4444'
  },
  amber: {
    label: 'Amber terminal',
    fg: '#eebb6d',
    fgDim: '#9a7a4a',
    accent: '#ffb020',
    selfMsg: '#ffcc77',
    peerMsg: '#c9a060',
    error: '#e05040',
    unread: '#ff6644'
  },
  nord: {
    label: 'Nord frost',
    fg: '#eceff4',
    fgDim: '#88c0d0',
    accent: '#81a1c1',
    selfMsg: '#8fbcbb',
    peerMsg: '#d8dee9',
    error: '#bf616a',
    unread: '#bf616a'
  },
  paper: {
    label: 'Paper (light)',
    fg: '#2c2824',
    fgDim: '#6b6560',
    accent: '#2563eb',
    selfMsg: '#1d6b4a',
    peerMsg: '#4a5568',
    error: '#b91c1c',
    unread: '#b91c1c'
  }
};

/** Stable order in the settings picker. */
const PALETTE_ORDER = ['ocean', 'matrix', 'amber', 'nord', 'paper'];

const DEFAULT_PALETTE_ID = 'ocean';

function normalizePaletteId(id) {
  if (id && typeof id === 'string' && PALETTES[id]) return id;
  return DEFAULT_PALETTE_ID;
}

function buildTheme(paletteId) {
  const id = normalizePaletteId(paletteId);
  const p = PALETTES[id];
  return {
    paletteId: id,
    fg: p.fg,
    fgDim: p.fgDim,
    accent: p.accent,
    selfMsg: p.selfMsg,
    peerMsg: p.peerMsg,
    error: p.error,
    unread: p.unread
  };
}

module.exports = {
  PALETTES,
  PALETTE_ORDER,
  DEFAULT_PALETTE_ID,
  normalizePaletteId,
  buildTheme
};
