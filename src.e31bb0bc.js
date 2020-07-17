// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\slider-img-3-480.jpg":[["slider-img-3-480.7d3a42a1.jpg","images/slider-img-3-480.jpg"],"images/slider-img-3-480.jpg"],"./..\\images\\slider-img-3@2x-480.jpg":[["slider-img-3@2x-480.01f92ac5.jpg","images/slider-img-3@2x-480.jpg"],"images/slider-img-3@2x-480.jpg"],"./..\\images\\slider-img-3-768.jpg":[["slider-img-3-768.07d9bc34.jpg","images/slider-img-3-768.jpg"],"images/slider-img-3-768.jpg"],"./..\\images\\slider-img-3@2x-768.jpg":[["slider-img-3@2x-768.ed448cda.jpg","images/slider-img-3@2x-768.jpg"],"images/slider-img-3@2x-768.jpg"],"./..\\images\\slider-img-3-1200.jpg":[["slider-img-3-1200.be06c6cd.jpg","images/slider-img-3-1200.jpg"],"images/slider-img-3-1200.jpg"],"./..\\images\\slider-img-3@2x-1200.jpg":[["slider-img-3@2x-1200.f2dca816.jpg","images/slider-img-3@2x-1200.jpg"],"images/slider-img-3@2x-1200.jpg"],"./..\\images\\slider-img-2-768.jpg":[["slider-img-2-768.e32707a9.jpg","images/slider-img-2-768.jpg"],"images/slider-img-2-768.jpg"],"./..\\images\\slider-img-2@2x-768.jpg":[["slider-img-2@2x-768.16b5fd16.jpg","images/slider-img-2@2x-768.jpg"],"images/slider-img-2@2x-768.jpg"],"./..\\images\\slider-img-2-1200.jpg":[["slider-img-2-1200.481ccfe8.jpg","images/slider-img-2-1200.jpg"],"images/slider-img-2-1200.jpg"],"./..\\images\\slider-img-2@2x-1200.jpg":[["slider-img-2@2x-1200.c5272dc3.jpg","images/slider-img-2@2x-1200.jpg"],"images/slider-img-2@2x-1200.jpg"],"./..\\images\\slider-img-1-768.jpg":[["slider-img-1-768.f34c8014.jpg","images/slider-img-1-768.jpg"],"images/slider-img-1-768.jpg"],"./..\\images\\slider-img-1@2x-768.jpg":[["slider-img-1@2x-768.9cd82e16.jpg","images/slider-img-1@2x-768.jpg"],"images/slider-img-1@2x-768.jpg"],"./..\\images\\slider-img-1-1200.jpg":[["slider-img-1-1200.84ffebd3.jpg","images/slider-img-1-1200.jpg"],"images/slider-img-1-1200.jpg"],"./..\\images\\slider-img-1@2x-1200.jpg":[["slider-img-1@2x-1200.2ce48de6.jpg","images/slider-img-1@2x-1200.jpg"],"images/slider-img-1@2x-1200.jpg"],"./..\\images\\price-mobile.png":[["price-mobile.e35cd7c7.png","images/price-mobile.png"],"images/price-mobile.png"],"./..\\images\\price-mobile@2x.png":[["price-mobile@2x.6ab5179e.png","images/price-mobile@2x.png"],"images/price-mobile@2x.png"],"./..\\images\\price-tablet.png":[["price-tablet.0683cb44.png","images/price-tablet.png"],"images/price-tablet.png"],"./..\\images\\price-tablet@2x.png":[["price-tablet@2x.5fe3f9fe.png","images/price-tablet@2x.png"],"images/price-tablet@2x.png"],"./..\\images\\price-desktop.png":[["price-desktop.8ec380a6.png","images/price-desktop.png"],"images/price-desktop.png"],"./..\\images\\price-desktop@2x.png":[["price-desktop@2x.544a22d2.png","images/price-desktop@2x.png"],"images/price-desktop@2x.png"],"./..\\images\\plus.svg":[["plus.500a6d38.svg","images/plus.svg"],"images/plus.svg"],"./..\\images\\bg-contacts-mobi.png":[["bg-contacts-mobi.57b6cbda.png","images/bg-contacts-mobi.png"],"images/bg-contacts-mobi.png"],"./..\\images\\bg-contacts-mobi@2x.png":[["bg-contacts-mobi@2x.9ff101e4.png","images/bg-contacts-mobi@2x.png"],"images/bg-contacts-mobi@2x.png"],"./..\\images\\bg-contacts-tablet.png":[["bg-contacts-tablet.01f163bf.png","images/bg-contacts-tablet.png"],"images/bg-contacts-tablet.png"],"./..\\images\\bg-contacts-tablet@2x.png":[["bg-contacts-tablet@2x.73031c2f.png","images/bg-contacts-tablet@2x.png"],"images/bg-contacts-tablet@2x.png"],"./..\\images\\bg-contacts-desktop.png":[["bg-contacts-desktop.d4db3139.png","images/bg-contacts-desktop.png"],"images/bg-contacts-desktop.png"],"./..\\images\\bg-contacts-desktop@2x.png":[["bg-contacts-desktop@2x.b9190afe.png","images/bg-contacts-desktop@2x.png"],"images/bg-contacts-desktop@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52241" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map