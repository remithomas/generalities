'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _countryCodes = require('./dist/countryCodes');

Object.keys(_countryCodes).forEach(function (key) {
    if (key === 'default' || key === '__esModule') return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _countryCodes[key];
        }
    });
});
