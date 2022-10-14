'use strict';
var path = require('path');
var config = {
  target: 'web',
  resolve: {
    modules: ['/usr/share/nodejs','/usr/lib/nodejs', '.'],
  },
  resolveLoader: {
    modules: ['/usr/share/nodejs','/usr/lib/nodejs'],
  },
  output: {
    libraryTarget: 'umd'
  }
}
module.exports = config;
