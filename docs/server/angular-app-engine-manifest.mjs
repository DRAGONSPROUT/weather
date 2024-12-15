
export default {
  basePath: '/weather/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
