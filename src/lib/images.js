// Unsplash photo ids. Photo.jsx falls back to a seeded placeholder if one fails to load.
export const IMG = {
  hero: 'photo-1523050854058-8df90110c9f1',
  classroom: 'photo-1503676260728-1c00da094a0b',
  kids: 'photo-1427504494785-3a9ca7044f45',
  teacher: 'photo-1509062522246-3755977927d7',
  library: 'photo-1481627834876-b7833e8f5570',
  lab: 'photo-1532094349884-543bc11b234d',
  robotics: 'photo-1485827404703-89b55fcc595e',
  art: 'photo-1513364776144-60967b0f800f',
  track: 'photo-1461896836934-ffe607ba8211',
  football: 'photo-1574629810360-7efbbe195018',
  campus: 'photo-1562774053-701939374585',
  study: 'photo-1522202176988-66273c2fd55f',
  music: 'photo-1511671782779-c97d3d27a1d4',
  group: 'photo-1529156069898-49953e39b3ac',
  reading: 'photo-1503454537195-1dcabb73ffb9',
  man1: 'photo-1560250097-0b93528c311a',
  woman1: 'photo-1573496359142-b8d87734a5a2',
  man2: 'photo-1519085360753-af0119f7cbe7',
  woman2: 'photo-1580489944761-15a19d654956',
}
export const u = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`
export const srcSet = (id) => [640, 1000, 1600].map((w) => `${u(id, w)} ${w}w`).join(', ')
export const fallback = (id, w = 1000) => `https://picsum.photos/seed/${id}/${w}/${Math.round(w * 0.75)}`
