
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/weather/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/weather"
  }
],
  assets: {
    'index.csr.html': {size: 14398, hash: '5083299018002eb719d02998b3937dd0be5bba02c91b2ce01944ea9c09a9a91f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7972, hash: 'b749da5c8c797e04d7d4384b8570673c245e892a9bbeff594ee00acfaec56667', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24735, hash: '1a5ebc9c19c5bfc89ef76237428b7241fa8caa711b98a663b187bdd74821f05d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
