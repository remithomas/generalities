'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _countryCodes = require('./countryCodes');

Object.keys(_countryCodes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _countryCodes[key];
    }
  });
});

var _httpCodes = require('./httpCodes');

Object.keys(_httpCodes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _httpCodes[key];
    }
  });
});

var _httpMethods = require('./httpMethods');

Object.keys(_httpMethods).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _httpMethods[key];
    }
  });
});

var _languageCodes = require('./languageCodes');

Object.keys(_languageCodes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _languageCodes[key];
    }
  });
});
//# sourceMappingURL=index.js.map