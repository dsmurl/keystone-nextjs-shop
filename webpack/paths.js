const path = require('path');

const appRoot = path.resolve(__dirname, '..');

module.exports = {
  node_modules: path.join(appRoot, 'node_modules'),
  app: {
    name: 'glass-shop',
    config: path.join(appRoot, 'config'),
    client: path.join(appRoot, 'client'),
    dest: path.join(appRoot, 'server', 'public'),
  },
  template: {
    path: path.join(appRoot, 'server', 'views'),
    in: '_index.ejs',
    out: 'index.ejs',
  },
  styles: {
    client: path.join(appRoot, 'client', 'styles'),
  },
  assets: {
    src: path.join(appRoot, 'src', 'assets', '**', '*'),
    dest: path.join(appRoot, 'server', 'public', '**', '*'),
  },
};
