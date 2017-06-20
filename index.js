/* eslint-env node */
const EngineAddon = require('ember-engines/lib/engine-addon');
'use strict';

module.exports = EngineAddon.extend({
  name: 'davros-engine',
  lazyLoading: false
};
