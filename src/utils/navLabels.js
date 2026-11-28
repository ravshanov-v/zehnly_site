const NAV_LABEL_KEYS = {
  '/': 'nav.home',
  '/oquv-maskanlari': 'nav.studyCenters',
  '/zakovat': 'nav.zakovat',
  '/reyting': 'nav.leaderboard',
  '/ai-yordamchi': 'nav.ai',
}

export function getNavLabel(route, t) {
  return NAV_LABEL_KEYS[route.path] ? t(NAV_LABEL_KEYS[route.path]) : route.label
}
