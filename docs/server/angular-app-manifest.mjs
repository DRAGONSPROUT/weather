
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 14390, hash: '2b2b91baec1902e9e98c4cf14dfdcf5f7f0d5719c1300709c958e44d759003cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7964, hash: '73db7919bd6f9c740d8614b8474cc7a3b51b209e8e6836fbc578ef9849d79d05', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24727, hash: 'de6a038cef581a465e7103a6f5a6e03d35596769e40788a75e8b95a7e6efe4be', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
