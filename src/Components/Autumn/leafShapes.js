export const LEAF_PATHS = {
  maple: `M50 3
    C52 13 56 21 63 26
    C62 29 62 32 63 35
    C70 30 78 27 86 28
    C80 37 76 44 75 52
    C83 50 90 52 96 57
    C86 62 79 69 76 78
    C69 74 62 72 56 74
    C55 83 53 91 50 98
    C47 91 45 83 44 74
    C38 72 31 74 24 78
    C21 69 14 62 4 57
    C10 52 17 50 25 52
    C24 44 20 37 14 28
    C22 27 30 30 37 35
    C38 32 38 29 37 26
    C44 21 48 13 50 3 Z`,
  oak: `M50 3
    C56 11 64 14 72 13
    C76 21 83 26 92 27
    C87 35 84 42 85 49
    C92 53 96 60 93 69
    C85 70 78 74 74 82
    C75 90 69 97 60 98
    C57 92 54 88 50 87
    C46 88 43 92 40 98
    C31 97 25 90 26 82
    C22 74 15 70 7 69
    C4 60 8 53 15 49
    C16 42 13 35 8 27
    C17 26 24 21 28 13
    C36 14 44 11 50 3 Z`,
  birch: `M50 4
    C60 16 72 28 79 44
    C86 60 82 78 70 89
    C63 96 56 99 50 99
    C44 99 37 96 30 89
    C18 78 14 60 21 44
    C28 28 40 16 50 4 Z`,
}

export const LEAF_VEINS = {
  maple:
    'M50 90 L50 32 M50 56 L38 40 M50 56 L62 40 M50 68 L31 61 M50 68 L69 61 M50 79 L38 72 M50 79 L62 72',
  oak: 'M50 92 L50 24 M50 48 L36 40 M50 48 L64 40 M50 62 L32 58 M50 62 L68 58 M50 76 L38 70 M50 76 L62 70',
  birch: 'M50 94 L50 18 M50 40 L36 32 M50 40 L64 32 M50 58 L32 52 M50 58 L68 52 M50 74 L37 68 M50 74 L63 68',
}

export const LEAF_TONES = {
  gold: { top: '#ffe79a', mid: '#f5b73f', bottom: '#b96a10', vein: '#77400b' },
  amber: { top: '#ffd06a', mid: '#ee8c22', bottom: '#a8430a', vein: '#682a06' },
  crimson: { top: '#ffb07c', mid: '#e2482b', bottom: '#871d12', vein: '#4a0f09' },
  rust: { top: '#f6c177', mid: '#c26a16', bottom: '#713a0b', vein: '#3d1e05' },
  olive: { top: '#f7e08b', mid: '#c9a527', bottom: '#7a6a12', vein: '#463d07' },
  copper: { top: '#ffd0a1', mid: '#d87634', bottom: '#8a3810', vein: '#4c1d07' },
}

const TONE_ENTRIES = Object.entries(LEAF_TONES)

function leafSvg(kind, tone) {
  const colors = LEAF_TONES[tone]
  const path = LEAF_PATHS[kind]
  const veins = LEAF_VEINS[kind]

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="fill" x1="18" y1="4" x2="82" y2="98" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="${colors.top}"/>
        <stop offset="0.48" stop-color="${colors.mid}"/>
        <stop offset="1" stop-color="${colors.bottom}"/>
      </linearGradient>
      <radialGradient id="shine" cx="0.34" cy="0.22" r="0.72">
        <stop offset="0" stop-color="#fff9e3" stop-opacity="0.62"/>
        <stop offset="0.55" stop-color="#fff9e3" stop-opacity="0.14"/>
        <stop offset="1" stop-color="#fff9e3" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <path d="${path}" fill="url(#fill)"/>
    <path d="${path}" fill="url(#shine)"/>
    <path d="${path}" fill="none" stroke="${colors.vein}" stroke-opacity="0.28" stroke-width="0.9"/>
    <g fill="none" stroke="${colors.vein}" stroke-opacity="0.42" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">
      <path d="${veins}"/>
    </g>
    <path d="M50 92 L50 99" stroke="${colors.vein}" stroke-width="2.4" stroke-linecap="round" stroke-opacity="0.8"/>
  </svg>`
}

const toDataUri = (svg) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`

export const AUTUMN_LEAVES = [
  { id: 'maple-gold', kind: 'maple', tone: 'gold' },
  { id: 'maple-amber', kind: 'maple', tone: 'amber' },
  { id: 'maple-crimson', kind: 'maple', tone: 'crimson' },
  { id: 'maple-rust', kind: 'maple', tone: 'rust' },
  { id: 'maple-copper', kind: 'maple', tone: 'copper' },
  { id: 'oak-gold', kind: 'oak', tone: 'gold' },
  { id: 'oak-amber', kind: 'oak', tone: 'amber' },
  { id: 'oak-crimson', kind: 'oak', tone: 'crimson' },
  { id: 'oak-rust', kind: 'oak', tone: 'rust' },
  { id: 'oak-olive', kind: 'oak', tone: 'olive' },
  { id: 'birch-gold', kind: 'birch', tone: 'gold' },
  { id: 'birch-amber', kind: 'birch', tone: 'amber' },
  { id: 'birch-copper', kind: 'birch', tone: 'copper' },
  { id: 'birch-rust', kind: 'birch', tone: 'rust' },
].map((leaf) => ({
  ...leaf,
  src: toDataUri(leafSvg(leaf.kind, leaf.tone)),
}))

export const AUTUMN_LEAF_SOURCES = AUTUMN_LEAVES.map((leaf) => leaf.src)

export const GROUND_TWIG = toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 64">
  <defs>
    <linearGradient id="wood" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6f4a28"/>
      <stop offset="1" stop-color="#3a2210"/>
    </linearGradient>
  </defs>
  <g fill="none" stroke="url(#wood)" stroke-linecap="round">
    <path d="M4 50 C32 38 62 34 92 38 C120 42 144 34 176 14" stroke-width="4.2"/>
    <path d="M58 36 C54 24 46 15 34 9" stroke-width="2.6"/>
    <path d="M104 40 C110 28 120 20 134 14" stroke-width="2.4"/>
    <path d="M26 44 C20 38 14 35 6 34" stroke-width="1.8"/>
  </g>
  <g fill="#c9842f" opacity="0.9">
    <ellipse cx="34" cy="9" rx="4.6" ry="2.4" transform="rotate(-36 34 9)"/>
    <ellipse cx="132" cy="14" rx="4" ry="2.2" transform="rotate(28 132 14)"/>
  </g>
  <g fill="#8a4b16" opacity="0.55">
    <circle cx="66" cy="36" r="1.5"/>
    <circle cx="118" cy="36" r="1.3"/>
    <circle cx="90" cy="38" r="1.2"/>
  </g>
</svg>`)

export const GROUND_TWIG_SMALL = toDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 48">
  <defs>
    <linearGradient id="wood" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6b4524"/>
      <stop offset="1" stop-color="#35200f"/>
    </linearGradient>
  </defs>
  <g fill="none" stroke="url(#wood)" stroke-linecap="round">
    <path d="M3 38 C24 28 48 26 72 30 C92 33 106 26 118 14" stroke-width="3.2"/>
    <path d="M44 28 C40 19 32 13 22 9" stroke-width="2"/>
    <path d="M82 31 C88 23 94 18 104 14" stroke-width="1.8"/>
  </g>
  <g fill="#d08a35" opacity="0.85">
    <ellipse cx="22" cy="9" rx="3.6" ry="1.9" transform="rotate(-32 22 9)"/>
    <ellipse cx="103" cy="14" rx="3.2" ry="1.8" transform="rotate(26 103 14)"/>
  </g>
</svg>`)

export const TONE_LIST = TONE_ENTRIES.map(([id, colors]) => ({ id, ...colors }))
