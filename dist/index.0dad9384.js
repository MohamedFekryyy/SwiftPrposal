// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3Mdm1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7a1f29910dad9384";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ifUNd":[function(require,module,exports) {
var _supabaseJs = require("@supabase/supabase-js");
const supabaseUrl = "https://tsptyfgxkrfiujltwwtg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzcHR5Zmd4a3JmaXVqbHR3d3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2MDI4MjAsImV4cCI6MjAwNzE3ODgyMH0.A57TgbZxHYrYzNbAP228Y0M0bzO7_rlEbXfuA-bh6cU";
const supabase = (0, _supabaseJs.createClient)(supabaseUrl, supabaseKey);
document.getElementById("login-form").addEventListener("submit", async (event)=>{
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const { user, error } = await supabase.auth.signIn({
        email,
        password
    });
    if (error) document.getElementById("login-error").textContent = error.message;
    else console.log("User logged in:", user);
});

},{"@supabase/supabase-js":"l1ERu"}],"l1ERu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createClient", ()=>createClient);
parcelHelpers.export(exports, "SupabaseClient", ()=>(0, _supabaseClientDefault.default));
var _supabaseClient = require("./SupabaseClient");
var _supabaseClientDefault = parcelHelpers.interopDefault(_supabaseClient);
var _gotrueJs = require("@supabase/gotrue-js");
parcelHelpers.exportAll(_gotrueJs, exports);
var _realtimeJs = require("@supabase/realtime-js");
parcelHelpers.exportAll(_realtimeJs, exports);
/**
 * Creates a new Supabase Client.
 */ const createClient = (supabaseUrl, supabaseKey, options)=>{
    return new (0, _supabaseClientDefault.default)(supabaseUrl, supabaseKey, options);
};

},{"./SupabaseClient":"ebXVN","@supabase/gotrue-js":"le05V","@supabase/realtime-js":"5is54","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebXVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("./lib/constants");
var _helpers = require("./lib/helpers");
var _supabaseAuthClient = require("./lib/SupabaseAuthClient");
var _supabaseQueryBuilder = require("./lib/SupabaseQueryBuilder");
var _storageJs = require("@supabase/storage-js");
var _functionsJs = require("@supabase/functions-js");
var _postgrestJs = require("@supabase/postgrest-js");
var _realtimeJs = require("@supabase/realtime-js");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DEFAULT_OPTIONS = {
    schema: "public",
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    multiTab: true,
    headers: (0, _constants.DEFAULT_HEADERS)
};
class SupabaseClient {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.headers Any additional headers to send with each network request.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.multiTab Set to "false" if you want to disable multi-tab/window events.
     * @param options.fetch A custom fetch implementation.
     */ constructor(supabaseUrl, supabaseKey, options){
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        if (!supabaseUrl) throw new Error("supabaseUrl is required.");
        if (!supabaseKey) throw new Error("supabaseKey is required.");
        const _supabaseUrl = (0, _helpers.stripTrailingSlash)(supabaseUrl);
        const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
        this.restUrl = `${_supabaseUrl}/rest/v1`;
        this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace("http", "ws");
        this.authUrl = `${_supabaseUrl}/auth/v1`;
        this.storageUrl = `${_supabaseUrl}/storage/v1`;
        const isPlatform = _supabaseUrl.match(/(supabase\.co)|(supabase\.in)/);
        if (isPlatform) {
            const urlParts = _supabaseUrl.split(".");
            this.functionsUrl = `${urlParts[0]}.functions.${urlParts[1]}.${urlParts[2]}`;
        } else this.functionsUrl = `${_supabaseUrl}/functions/v1`;
        this.schema = settings.schema;
        this.multiTab = settings.multiTab;
        this.fetch = settings.fetch;
        this.headers = Object.assign(Object.assign({}, (0, _constants.DEFAULT_HEADERS)), options === null || options === void 0 ? void 0 : options.headers);
        this.shouldThrowOnError = settings.shouldThrowOnError || false;
        this.auth = this._initSupabaseAuthClient(settings);
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers
        }, settings.realtime));
        this._listenForAuthEvents();
        this._listenForMultiTabEvents();
    // In the future we might allow the user to pass in a logger to receive these events.
    // this.realtime.onOpen(() => console.log('OPEN'))
    // this.realtime.onClose(() => console.log('CLOSED'))
    // this.realtime.onError((e: Error) => console.log('Socket error', e))
    }
    /**
     * Supabase Functions allows you to deploy and invoke edge functions.
     */ get functions() {
        return new (0, _functionsJs.FunctionsClient)(this.functionsUrl, {
            headers: this._getAuthHeaders(),
            customFetch: this.fetch
        });
    }
    /**
     * Supabase Storage allows you to manage user-generated content, such as photos or videos.
     */ get storage() {
        return new (0, _storageJs.SupabaseStorageClient)(this.storageUrl, this._getAuthHeaders(), this.fetch);
    }
    /**
     * Perform a table operation.
     *
     * @param table The table name to operate on.
     */ from(table) {
        const url = `${this.restUrl}/${table}`;
        return new (0, _supabaseQueryBuilder.SupabaseQueryBuilder)(url, {
            headers: this._getAuthHeaders(),
            schema: this.schema,
            realtime: this.realtime,
            table,
            fetch: this.fetch,
            shouldThrowOnError: this.shouldThrowOnError
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn  The function name to call.
     * @param params  The parameters to pass to the function call.
     * @param head   When set to true, no data will be returned.
     * @param count  Count algorithm to use to count rows in a table.
     *
     */ rpc(fn, params, { head = false, count = null } = {}) {
        const rest = this._initPostgRESTClient();
        return rest.rpc(fn, params, {
            head,
            count
        });
    }
    /**
     * Closes and removes all subscriptions and returns a list of removed
     * subscriptions and their errors.
     */ removeAllSubscriptions() {
        return __awaiter(this, void 0, void 0, function*() {
            const allSubs = this.getSubscriptions().slice();
            const allSubPromises = allSubs.map((sub)=>this.removeSubscription(sub));
            const allRemovedSubs = yield Promise.all(allSubPromises);
            return allRemovedSubs.map(({ error }, i)=>{
                return {
                    data: {
                        subscription: allSubs[i]
                    },
                    error
                };
            });
        });
    }
    /**
     * Closes and removes a subscription and returns the number of open subscriptions.
     *
     * @param subscription The subscription you want to close and remove.
     */ removeSubscription(subscription) {
        return __awaiter(this, void 0, void 0, function*() {
            const { error } = yield this._closeSubscription(subscription);
            const allSubs = this.getSubscriptions();
            const openSubCount = allSubs.filter((chan)=>chan.isJoined()).length;
            if (allSubs.length === 0) yield this.realtime.disconnect();
            return {
                data: {
                    openSubscriptions: openSubCount
                },
                error
            };
        });
    }
    _closeSubscription(subscription) {
        return __awaiter(this, void 0, void 0, function*() {
            let error = null;
            if (!subscription.isClosed()) {
                const { error: unsubError } = yield this._unsubscribeSubscription(subscription);
                error = unsubError;
            }
            this.realtime.remove(subscription);
            return {
                error
            };
        });
    }
    _unsubscribeSubscription(subscription) {
        return new Promise((resolve)=>{
            subscription.unsubscribe().receive("ok", ()=>resolve({
                    error: null
                })).receive("error", (error)=>resolve({
                    error
                })).receive("timeout", ()=>resolve({
                    error: new Error("timed out")
                }));
        });
    }
    /**
     * Returns an array of all your subscriptions.
     */ getSubscriptions() {
        return this.realtime.channels;
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, localStorage, headers, fetch, cookieOptions, multiTab }) {
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new (0, _supabaseAuthClient.SupabaseAuthClient)({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, headers), authHeaders),
            autoRefreshToken,
            persistSession,
            detectSessionInUrl,
            localStorage,
            fetch,
            cookieOptions,
            multiTab
        });
    }
    _initRealtimeClient(options) {
        return new (0, _realtimeJs.RealtimeClient)(this.realtimeUrl, Object.assign(Object.assign({}, options), {
            params: Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.params), {
                apikey: this.supabaseKey
            })
        }));
    }
    _initPostgRESTClient() {
        return new (0, _postgrestJs.PostgrestClient)(this.restUrl, {
            headers: this._getAuthHeaders(),
            schema: this.schema,
            fetch: this.fetch,
            throwOnError: this.shouldThrowOnError
        });
    }
    _getAuthHeaders() {
        var _a, _b;
        const headers = Object.assign({}, this.headers);
        const authBearer = (_b = (_a = this.auth.session()) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : this.supabaseKey;
        headers["apikey"] = this.supabaseKey;
        headers["Authorization"] = headers["Authorization"] || `Bearer ${authBearer}`;
        return headers;
    }
    _listenForMultiTabEvents() {
        if (!this.multiTab || !(0, _helpers.isBrowser)() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) return null;
        try {
            return window === null || window === void 0 ? void 0 : window.addEventListener("storage", (e)=>{
                var _a, _b, _c;
                if (e.key === (0, _constants.STORAGE_KEY)) {
                    const newSession = JSON.parse(String(e.newValue));
                    const accessToken = (_b = (_a = newSession === null || newSession === void 0 ? void 0 : newSession.currentSession) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : undefined;
                    const previousAccessToken = (_c = this.auth.session()) === null || _c === void 0 ? void 0 : _c.access_token;
                    if (!accessToken) this._handleTokenChanged("SIGNED_OUT", accessToken, "STORAGE");
                    else if (!previousAccessToken && accessToken) this._handleTokenChanged("SIGNED_IN", accessToken, "STORAGE");
                    else if (previousAccessToken !== accessToken) this._handleTokenChanged("TOKEN_REFRESHED", accessToken, "STORAGE");
                }
            });
        } catch (error) {
            console.error("_listenForMultiTabEvents", error);
            return null;
        }
    }
    _listenForAuthEvents() {
        let { data } = this.auth.onAuthStateChange((event, session)=>{
            this._handleTokenChanged(event, session === null || session === void 0 ? void 0 : session.access_token, "CLIENT");
        });
        return data;
    }
    _handleTokenChanged(event, token, source) {
        if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
            // Token has changed
            this.realtime.setAuth(token);
            // Ideally we should call this.auth.recoverSession() - need to make public
            // to trigger a "SIGNED_IN" event on this client.
            if (source == "STORAGE") this.auth.setAuth(token);
            this.changedAccessToken = token;
        } else if (event === "SIGNED_OUT" || event === "USER_DELETED") {
            // Token is removed
            this.realtime.setAuth(this.supabaseKey);
            if (source == "STORAGE") this.auth.signOut();
        }
    }
}
exports.default = SupabaseClient;

},{"./lib/constants":"gRAGT","./lib/helpers":"jeM1Y","./lib/SupabaseAuthClient":"2rbKz","./lib/SupabaseQueryBuilder":"7UcFw","@supabase/storage-js":"7GrJf","@supabase/functions-js":"lqa9p","@supabase/postgrest-js":"aAUlI","@supabase/realtime-js":"5is54","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gRAGT":[function(require,module,exports) {
// constants.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
parcelHelpers.export(exports, "STORAGE_KEY", ()=>STORAGE_KEY);
var _version = require("./version");
const DEFAULT_HEADERS = {
    "X-Client-Info": `supabase-js/${(0, _version.version)}`
};
const STORAGE_KEY = "supabase.auth.token";

},{"./version":"ioXJb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioXJb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "1.35.7";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jeM1Y":[function(require,module,exports) {
// helpers.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uuid", ()=>uuid);
parcelHelpers.export(exports, "stripTrailingSlash", ()=>stripTrailingSlash);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
function stripTrailingSlash(url) {
    return url.replace(/\/$/, "");
}
const isBrowser = ()=>typeof window !== "undefined";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2rbKz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SupabaseAuthClient", ()=>SupabaseAuthClient);
var _gotrueJs = require("@supabase/gotrue-js");
class SupabaseAuthClient extends (0, _gotrueJs.GoTrueClient) {
    constructor(options){
        super(options);
    }
}

},{"@supabase/gotrue-js":"le05V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"le05V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GoTrueApi", ()=>(0, _goTrueApiDefault.default));
parcelHelpers.export(exports, "GoTrueClient", ()=>(0, _goTrueClientDefault.default));
var _goTrueApi = require("./GoTrueApi");
var _goTrueApiDefault = parcelHelpers.interopDefault(_goTrueApi);
var _goTrueClient = require("./GoTrueClient");
var _goTrueClientDefault = parcelHelpers.interopDefault(_goTrueClient);
var _types = require("./lib/types");
parcelHelpers.exportAll(_types, exports);

},{"./GoTrueApi":"aqSzg","./GoTrueClient":"c5MJN","./lib/types":"j7OJp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aqSzg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fetch = require("./lib/fetch");
var _constants = require("./lib/constants");
var _cookies = require("./lib/cookies");
var _helpers = require("./lib/helpers");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class GoTrueApi {
    constructor({ url = "", headers = {}, cookieOptions, fetch }){
        this.url = url;
        this.headers = headers;
        this.cookieOptions = Object.assign(Object.assign({}, (0, _constants.COOKIE_OPTIONS)), cookieOptions);
        this.fetch = (0, _helpers.resolveFetch)(fetch);
    }
    /**
     * Create a temporary object with all configured headers and
     * adds the Authorization token to be used on request methods
     * @param jwt A valid, logged-in JWT.
     */ _createRequestHeaders(jwt) {
        const headers = Object.assign({}, this.headers);
        headers["Authorization"] = `Bearer ${jwt}`;
        return headers;
    }
    cookieName() {
        var _a;
        return (_a = this.cookieOptions.name) !== null && _a !== void 0 ? _a : "";
    }
    /**
     * Generates the relevant login URL for a third-party provider.
     * @param provider One of the providers supported by GoTrue.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param scopes A space-separated list of scopes granted to the OAuth application.
     */ getUrlForProvider(provider, options) {
        const urlParams = [
            `provider=${encodeURIComponent(provider)}`
        ];
        if (options === null || options === void 0 ? void 0 : options.redirectTo) urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
        if (options === null || options === void 0 ? void 0 : options.scopes) urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
        if (options === null || options === void 0 ? void 0 : options.queryParams) {
            const query = new URLSearchParams(options.queryParams);
            urlParams.push(`${query}`);
        }
        return `${this.url}/authorize?${urlParams.join("&")}`;
    }
    /**
     * Creates a new user using their email address.
     * @param email The email address of the user.
     * @param password The password of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param data Optional user metadata.
     * @param captchaToken Verification token received when the user completes the captcha on your site.
     *
     * @returns A logged-in session if the server has "autoconfirm" ON
     * @returns A user if the server has "autoconfirm" OFF
     */ signUpWithEmail(email, password, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const headers = Object.assign({}, this.headers);
                let queryString = "";
                if (options.redirectTo) queryString = "?redirect_to=" + encodeURIComponent(options.redirectTo);
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/signup${queryString}`, {
                    email,
                    password,
                    data: options.data,
                    gotrue_meta_security: {
                        captcha_token: options.captchaToken
                    }
                }, {
                    headers
                });
                const session = Object.assign({}, data);
                if (session.expires_in) session.expires_at = (0, _helpers.expiresAt)(data.expires_in);
                return {
                    data: session,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Logs in an existing user using their email address.
     * @param email The email address of the user.
     * @param password The password of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param captchaToken Verification token received when the user completes the captcha on your site.
     */ signInWithEmail(email, password, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const headers = Object.assign({}, this.headers);
                let queryString = "?grant_type=password";
                if (options.redirectTo) queryString += "&redirect_to=" + encodeURIComponent(options.redirectTo);
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/token${queryString}`, {
                    email,
                    password,
                    gotrue_meta_security: {
                        captcha_token: options.captchaToken
                    }
                }, {
                    headers
                });
                const session = Object.assign({}, data);
                if (session.expires_in) session.expires_at = (0, _helpers.expiresAt)(data.expires_in);
                return {
                    data: session,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Signs up a new user using their phone number and a password.
     * @param phone The phone number of the user.
     * @param password The password of the user.
     * @param data Optional user metadata.
     * @param captchaToken Verification token received when the user completes the captcha on your site.
     */ signUpWithPhone(phone, password, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const headers = Object.assign({}, this.headers);
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/signup`, {
                    phone,
                    password,
                    data: options.data,
                    gotrue_meta_security: {
                        captcha_token: options.captchaToken
                    }
                }, {
                    headers
                });
                const session = Object.assign({}, data);
                if (session.expires_in) session.expires_at = (0, _helpers.expiresAt)(data.expires_in);
                return {
                    data: session,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Logs in an existing user using their phone number and password.
     * @param phone The phone number of the user.
     * @param password The password of the user.
     * @param captchaToken Verification token received when the user completes the captcha on your site.
     */ signInWithPhone(phone, password, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const headers = Object.assign({}, this.headers);
                const queryString = "?grant_type=password";
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/token${queryString}`, {
                    phone,
                    password,
                    gotrue_meta_security: {
                        captcha_token: options.captchaToken
                    }
                }, {
                    headers
                });
                const session = Object.assign({}, data);
                if (session.expires_in) session.expires_at = (0, _helpers.expiresAt)(data.expires_in);
                return {
                    data: session,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Logs in an OpenID Connect user using their id_token.
     * @param id_token The IDToken of the user.
     * @param nonce The nonce of the user. The nonce is a random value generated by the developer (= yourself) before the initial grant is started. You should check the OpenID Connect specification for details. https://openid.net/developers/specs/
     * @param provider The provider of the user.
     * @param client_id The clientID of the user.
     * @param issuer The issuer of the user.
     */ signInWithOpenIDConnect({ id_token, nonce, client_id, issuer, provider }) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const headers = Object.assign({}, this.headers);
                const queryString = "?grant_type=id_token";
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/token${queryString}`, {
                    id_token,
                    nonce,
                    client_id,
                    issuer,
                    provider
                }, {
                    headers
                });
                const session = Object.assign({}, data);
                if (session.expires_in) session.expires_at = (0, _helpers.expiresAt)(data.expires_in);
                return {
                    data: session,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Sends a magic login link to an email address.
     * @param email The email address of the user.
     * @param shouldCreateUser A boolean flag to indicate whether to automatically create a user on magiclink / otp sign-ins if the user doesn't exist. Defaults to true.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param captchaToken Verification token received when the user completes the captcha on your site.
     */ sendMagicLinkEmail(email, options = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const headers = Object.assign({}, this.headers);
                let queryString = "";
                if (options.redirectTo) queryString += "?redirect_to=" + encodeURIComponent(options.redirectTo);
                const shouldCreateUser = (_a = options.shouldCreateUser) !== null && _a !== void 0 ? _a : true;
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/otp${queryString}`, {
                    email,
                    create_user: shouldCreateUser,
                    gotrue_meta_security: {
                        captcha_token: options.captchaToken
                    }
                }, {
                    headers
                });
                return {
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Sends a mobile OTP via SMS. Will register the account if it doesn't already exist
     * @param phone The user's phone number WITH international prefix
     * @param shouldCreateUser A boolean flag to indicate whether to automatically create a user on magiclink / otp sign-ins if the user doesn't exist. Defaults to true.
     * @param captchaToken Verification token received when the user completes the captcha on your site.
     */ sendMobileOTP(phone, options = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const shouldCreateUser = (_a = options.shouldCreateUser) !== null && _a !== void 0 ? _a : true;
                const headers = Object.assign({}, this.headers);
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/otp`, {
                    phone,
                    create_user: shouldCreateUser,
                    gotrue_meta_security: {
                        captcha_token: options.captchaToken
                    }
                }, {
                    headers
                });
                return {
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Removes a logged-in session.
     * @param jwt A valid, logged-in JWT.
     */ signOut(jwt) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                yield (0, _fetch.post)(this.fetch, `${this.url}/logout`, {}, {
                    headers: this._createRequestHeaders(jwt),
                    noResolveJson: true
                });
                return {
                    error: null
                };
            } catch (e) {
                return {
                    error: e
                };
            }
        });
    }
    /**
     * @deprecated Use `verifyOTP` instead!
     * @param phone The user's phone number WITH international prefix
     * @param token token that user was sent to their mobile phone
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */ verifyMobileOTP(phone, token, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const headers = Object.assign({}, this.headers);
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/verify`, {
                    phone,
                    token,
                    type: "sms",
                    redirect_to: options.redirectTo
                }, {
                    headers
                });
                const session = Object.assign({}, data);
                if (session.expires_in) session.expires_at = (0, _helpers.expiresAt)(data.expires_in);
                return {
                    data: session,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Send User supplied Email / Mobile OTP to be verified
     * @param email The user's email address
     * @param phone The user's phone number WITH international prefix
     * @param token token that user was sent to their mobile phone
     * @param type verification type that the otp is generated for
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */ verifyOTP({ email, phone, token, type = "sms" }, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const headers = Object.assign({}, this.headers);
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/verify`, {
                    email,
                    phone,
                    token,
                    type,
                    redirect_to: options.redirectTo
                }, {
                    headers
                });
                const session = Object.assign({}, data);
                if (session.expires_in) session.expires_at = (0, _helpers.expiresAt)(data.expires_in);
                return {
                    data: session,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Sends an invite link to an email address.
     * @param email The email address of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param data Optional user metadata
     */ inviteUserByEmail(email, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const headers = Object.assign({}, this.headers);
                let queryString = "";
                if (options.redirectTo) queryString += "?redirect_to=" + encodeURIComponent(options.redirectTo);
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/invite${queryString}`, {
                    email,
                    data: options.data
                }, {
                    headers
                });
                return {
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Sends a reset request to an email address.
     * @param email The email address of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param captchaToken Verification token received when the user completes the captcha on your site.
     */ resetPasswordForEmail(email, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const headers = Object.assign({}, this.headers);
                let queryString = "";
                if (options.redirectTo) queryString += "?redirect_to=" + encodeURIComponent(options.redirectTo);
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/recover${queryString}`, {
                    email,
                    gotrue_meta_security: {
                        captcha_token: options.captchaToken
                    }
                }, {
                    headers
                });
                return {
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Generates a new JWT.
     * @param refreshToken A valid refresh token that was returned on login.
     */ refreshAccessToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/token?grant_type=refresh_token`, {
                    refresh_token: refreshToken
                }, {
                    headers: this.headers
                });
                const session = Object.assign({}, data);
                if (session.expires_in) session.expires_at = (0, _helpers.expiresAt)(data.expires_in);
                return {
                    data: session,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Set/delete the auth cookie based on the AuthChangeEvent.
     * Works for Next.js & Express (requires cookie-parser middleware).
     * @param req The request object.
     * @param res The response object.
     */ setAuthCookie(req, res) {
        if (req.method !== "POST") {
            res.setHeader("Allow", "POST");
            res.status(405).end("Method Not Allowed");
        }
        const { event, session } = req.body;
        if (!event) throw new Error("Auth event missing!");
        if (event === "SIGNED_IN") {
            if (!session) throw new Error("Auth session missing!");
            (0, _cookies.setCookies)(req, res, [
                {
                    key: "access-token",
                    value: session.access_token
                },
                {
                    key: "refresh-token",
                    value: session.refresh_token
                }
            ].map((token)=>{
                var _a;
                return {
                    name: `${this.cookieName()}-${token.key}`,
                    value: token.value,
                    domain: this.cookieOptions.domain,
                    maxAge: (_a = this.cookieOptions.lifetime) !== null && _a !== void 0 ? _a : 0,
                    path: this.cookieOptions.path,
                    sameSite: this.cookieOptions.sameSite
                };
            }));
        }
        if (event === "SIGNED_OUT") (0, _cookies.setCookies)(req, res, [
            "access-token",
            "refresh-token"
        ].map((key)=>({
                name: `${this.cookieName()}-${key}`,
                value: "",
                maxAge: -1
            })));
        res.status(200).json({});
    }
    /**
     * Deletes the Auth Cookies and redirects to the
     * @param req The request object.
     * @param res The response object.
     * @param options Optionally specify a `redirectTo` URL in the options.
     */ deleteAuthCookie(req, res, { redirectTo = "/" }) {
        (0, _cookies.setCookies)(req, res, [
            "access-token",
            "refresh-token"
        ].map((key)=>({
                name: `${this.cookieName()}-${key}`,
                value: "",
                maxAge: -1
            })));
        return res.redirect(307, redirectTo);
    }
    /**
     * Helper method to generate the Auth Cookie string for you in case you can't use `setAuthCookie`.
     * @param req The request object.
     * @param res The response object.
     * @returns The Cookie string that needs to be set as the value for the `Set-Cookie` header.
     */ getAuthCookieString(req, res) {
        if (req.method !== "POST") {
            res.setHeader("Allow", "POST");
            res.status(405).end("Method Not Allowed");
        }
        const { event, session } = req.body;
        if (!event) throw new Error("Auth event missing!");
        if (event === "SIGNED_IN") {
            if (!session) throw new Error("Auth session missing!");
            return (0, _cookies.getCookieString)(req, res, [
                {
                    key: "access-token",
                    value: session.access_token
                },
                {
                    key: "refresh-token",
                    value: session.refresh_token
                }
            ].map((token)=>{
                var _a;
                return {
                    name: `${this.cookieName()}-${token.key}`,
                    value: token.value,
                    domain: this.cookieOptions.domain,
                    maxAge: (_a = this.cookieOptions.lifetime) !== null && _a !== void 0 ? _a : 0,
                    path: this.cookieOptions.path,
                    sameSite: this.cookieOptions.sameSite
                };
            }));
        }
        if (event === "SIGNED_OUT") return (0, _cookies.getCookieString)(req, res, [
            "access-token",
            "refresh-token"
        ].map((key)=>({
                name: `${this.cookieName()}-${key}`,
                value: "",
                maxAge: -1
            })));
        return res.getHeader("Set-Cookie");
    }
    /**
     * Generates links to be sent via email or other.
     * @param type The link type ("signup" or "magiclink" or "recovery" or "invite").
     * @param email The user's email.
     * @param password User password. For signup only.
     * @param data Optional user metadata. For signup only.
     * @param redirectTo The link type ("signup" or "magiclink" or "recovery" or "invite").
     */ generateLink(type, email, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/admin/generate_link`, {
                    type,
                    email,
                    password: options.password,
                    data: options.data,
                    redirect_to: options.redirectTo
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    // User Admin API
    /**
     * Creates a new user.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     *
     * @param attributes The data you want to create the user with.
     */ createUser(attributes) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/admin/users`, attributes, {
                    headers: this.headers
                });
                return {
                    user: data,
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    user: null,
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Get a list of users.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ listUsers() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.get)(this.fetch, `${this.url}/admin/users`, {
                    headers: this.headers
                });
                return {
                    data: data.users,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Get user by id.
     *
     * @param uid The user's unique identifier
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ getUserById(uid) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.get)(this.fetch, `${this.url}/admin/users/${uid}`, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Get user by reading the cookie from the request.
     * Works for Next.js & Express (requires cookie-parser middleware).
     */ getUserByCookie(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                if (!req.cookies) throw new Error("Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!");
                const access_token = req.cookies[`${this.cookieName()}-access-token`];
                const refresh_token = req.cookies[`${this.cookieName()}-refresh-token`];
                if (!access_token) throw new Error("No cookie found!");
                const { user, error: getUserError } = yield this.getUser(access_token);
                if (getUserError) {
                    if (!refresh_token) throw new Error("No refresh_token cookie found!");
                    if (!res) throw new Error("You need to pass the res object to automatically refresh the session!");
                    const { data, error } = yield this.refreshAccessToken(refresh_token);
                    if (error) throw error;
                    else if (data) {
                        (0, _cookies.setCookies)(req, res, [
                            {
                                key: "access-token",
                                value: data.access_token
                            },
                            {
                                key: "refresh-token",
                                value: data.refresh_token
                            }
                        ].map((token)=>{
                            var _a;
                            return {
                                name: `${this.cookieName()}-${token.key}`,
                                value: token.value,
                                domain: this.cookieOptions.domain,
                                maxAge: (_a = this.cookieOptions.lifetime) !== null && _a !== void 0 ? _a : 0,
                                path: this.cookieOptions.path,
                                sameSite: this.cookieOptions.sameSite
                            };
                        }));
                        return {
                            token: data.access_token,
                            user: data.user,
                            data: data.user,
                            error: null
                        };
                    }
                }
                return {
                    token: access_token,
                    user: user,
                    data: user,
                    error: null
                };
            } catch (e) {
                return {
                    token: null,
                    user: null,
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Updates the user data.
     *
     * @param attributes The data you want to update.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ updateUserById(uid, attributes) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                this; //
                const data = yield (0, _fetch.put)(this.fetch, `${this.url}/admin/users/${uid}`, attributes, {
                    headers: this.headers
                });
                return {
                    user: data,
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    user: null,
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Delete a user. Requires a `service_role` key.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     *
     * @param uid The user uid you want to remove.
     */ deleteUser(uid) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.remove)(this.fetch, `${this.url}/admin/users/${uid}`, {}, {
                    headers: this.headers
                });
                return {
                    user: data,
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    user: null,
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Gets the current user details.
     *
     * This method is called by the GoTrueClient `update` where
     * the jwt is set to this.currentSession.access_token
     * and therefore, acts like getting the currently authenticated user
     *
     * @param jwt A valid, logged-in JWT. Typically, the access_token for the currentSession
     */ getUser(jwt) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.get)(this.fetch, `${this.url}/user`, {
                    headers: this._createRequestHeaders(jwt)
                });
                return {
                    user: data,
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    user: null,
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Updates the user data.
     * @param jwt A valid, logged-in JWT.
     * @param attributes The data you want to update.
     */ updateUser(jwt, attributes) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.put)(this.fetch, `${this.url}/user`, attributes, {
                    headers: this._createRequestHeaders(jwt)
                });
                return {
                    user: data,
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    user: null,
                    data: null,
                    error: e
                };
            }
        });
    }
}
exports.default = GoTrueApi;

},{"./lib/fetch":"fFVbx","./lib/constants":"AEsdK","./lib/cookies":"9JhSO","./lib/helpers":"iB9P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fFVbx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "post", ()=>post);
parcelHelpers.export(exports, "put", ()=>put);
parcelHelpers.export(exports, "remove", ()=>remove);
var _constants = require("./constants");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _getErrorMessage = (err)=>err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const handleError = (error, reject)=>{
    if (!(error === null || error === void 0 ? void 0 : error.status)) return reject({
        message: (0, _constants.NETWORK_FAILURE).ERROR_MESSAGE
    });
    if (typeof error.json !== "function") return reject(error);
    error.json().then((err)=>{
        return reject({
            message: _getErrorMessage(err),
            status: (error === null || error === void 0 ? void 0 : error.status) || 500
        });
    });
};
const _getRequestParams = (method, options, body)=>{
    const params = {
        method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET") return params;
    params.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return params;
};
function _handleRequest(fetcher, method, url, options, body) {
    return __awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve, reject)=>{
            fetcher(url, _getRequestParams(method, options, body)).then((result)=>{
                if (!result.ok) throw result;
                if (options === null || options === void 0 ? void 0 : options.noResolveJson) return resolve;
                return result.json();
            }).then((data)=>resolve(data)).catch((error)=>handleError(error, reject));
        });
    });
}
function get(fetcher, url, options) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "GET", url, options);
    });
}
function post(fetcher, url, body, options) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "POST", url, options, body);
    });
}
function put(fetcher, url, body, options) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "PUT", url, options, body);
    });
}
function remove(fetcher, url, body, options) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "DELETE", url, options, body);
    });
}

},{"./constants":"AEsdK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"AEsdK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GOTRUE_URL", ()=>GOTRUE_URL);
parcelHelpers.export(exports, "AUDIENCE", ()=>AUDIENCE);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
parcelHelpers.export(exports, "EXPIRY_MARGIN", ()=>EXPIRY_MARGIN);
parcelHelpers.export(exports, "NETWORK_FAILURE", ()=>NETWORK_FAILURE);
parcelHelpers.export(exports, "STORAGE_KEY", ()=>STORAGE_KEY);
parcelHelpers.export(exports, "COOKIE_OPTIONS", ()=>COOKIE_OPTIONS);
var _version = require("./version");
const GOTRUE_URL = "http://localhost:9999";
const AUDIENCE = "";
const DEFAULT_HEADERS = {
    "X-Client-Info": `gotrue-js/${(0, _version.version)}`
};
const EXPIRY_MARGIN = 10; // in seconds
const NETWORK_FAILURE = {
    ERROR_MESSAGE: "Request Failed",
    MAX_RETRIES: 10,
    RETRY_INTERVAL: 2
};
const STORAGE_KEY = "supabase.auth.token";
const COOKIE_OPTIONS = {
    name: "sb",
    lifetime: 28800,
    domain: "",
    path: "/",
    sameSite: "lax"
};

},{"./version":"bm5Sl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bm5Sl":[function(require,module,exports) {
// generated by genversion
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "1.24.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9JhSO":[function(require,module,exports) {
/**
 * Serialize data into a cookie header.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Get Cookie Header strings.
 */ parcelHelpers.export(exports, "getCookieString", ()=>getCookieString);
/**
 * Set one or more cookies.
 */ parcelHelpers.export(exports, "setCookies", ()=>setCookies);
/**
 * Set one or more cookies.
 */ parcelHelpers.export(exports, "setCookie", ()=>setCookie);
parcelHelpers.export(exports, "deleteCookie", ()=>deleteCookie);
function serialize(name, val, options) {
    const opt = options || {};
    const enc = encodeURIComponent;
    /* eslint-disable-next-line no-control-regex */ const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    if (typeof enc !== "function") throw new TypeError("option encode is invalid");
    if (!fieldContentRegExp.test(name)) throw new TypeError("argument name is invalid");
    const value = enc(val);
    if (value && !fieldContentRegExp.test(value)) throw new TypeError("argument val is invalid");
    let str = name + "=" + value;
    if (null != opt.maxAge) {
        const maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) throw new TypeError("option maxAge is invalid");
        str += "; Max-Age=" + Math.floor(maxAge);
    }
    if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) throw new TypeError("option domain is invalid");
        str += "; Domain=" + opt.domain;
    }
    if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) throw new TypeError("option path is invalid");
        str += "; Path=" + opt.path;
    }
    if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") throw new TypeError("option expires is invalid");
        str += "; Expires=" + opt.expires.toUTCString();
    }
    if (opt.httpOnly) str += "; HttpOnly";
    if (opt.secure) str += "; Secure";
    if (opt.sameSite) {
        const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch(sameSite){
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid");
        }
    }
    return str;
}
/**
 * Based on the environment and the request we know if a secure cookie can be set.
 */ function isSecureEnvironment(req) {
    if (!req || !req.headers || !req.headers.host) throw new Error('The "host" request header is not available');
    const host = req.headers.host.indexOf(":") > -1 && req.headers.host.split(":")[0] || req.headers.host;
    if ([
        "localhost",
        "127.0.0.1"
    ].indexOf(host) > -1 || host.endsWith(".local")) return false;
    return true;
}
/**
 * Serialize a cookie to a string.
 */ function serializeCookie(cookie, secure) {
    var _a, _b, _c;
    return serialize(cookie.name, cookie.value, {
        maxAge: cookie.maxAge,
        expires: new Date(Date.now() + cookie.maxAge * 1000),
        httpOnly: true,
        secure,
        path: (_a = cookie.path) !== null && _a !== void 0 ? _a : "/",
        domain: (_b = cookie.domain) !== null && _b !== void 0 ? _b : "",
        sameSite: (_c = cookie.sameSite) !== null && _c !== void 0 ? _c : "lax"
    });
}
function getCookieString(req, res, cookies) {
    const strCookies = cookies.map((c)=>serializeCookie(c, isSecureEnvironment(req)));
    const previousCookies = res.getHeader("Set-Cookie");
    if (previousCookies) {
        if (previousCookies instanceof Array) Array.prototype.push.apply(strCookies, previousCookies);
        else if (typeof previousCookies === "string") strCookies.push(previousCookies);
    }
    return strCookies;
}
function setCookies(req, res, cookies) {
    res.setHeader("Set-Cookie", getCookieString(req, res, cookies));
}
function setCookie(req, res, cookie) {
    setCookies(req, res, [
        cookie
    ]);
}
function deleteCookie(req, res, name) {
    setCookie(req, res, {
        name,
        value: "",
        maxAge: -1
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iB9P5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "expiresAt", ()=>expiresAt);
parcelHelpers.export(exports, "uuid", ()=>uuid);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
parcelHelpers.export(exports, "getParameterByName", ()=>getParameterByName);
parcelHelpers.export(exports, "resolveFetch", ()=>resolveFetch);
parcelHelpers.export(exports, "setItemAsync", ()=>setItemAsync);
parcelHelpers.export(exports, "getItemAsync", ()=>getItemAsync);
parcelHelpers.export(exports, "getItemSynchronously", ()=>getItemSynchronously);
parcelHelpers.export(exports, "removeItemAsync", ()=>removeItemAsync);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function expiresAt(expiresIn) {
    const timeNow = Math.round(Date.now() / 1000);
    return timeNow + expiresIn;
}
function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
const isBrowser = ()=>typeof window !== "undefined";
function getParameterByName(name, url) {
    var _a;
    if (!url) url = ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.href) || "";
    // eslint-disable-next-line no-useless-escape
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>__awaiter(void 0, void 0, void 0, function*() {
            return yield (yield require("cfdaa7fdd2a8d629")).fetch(...args);
        });
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};
const setItemAsync = (storage, key, data)=>__awaiter(void 0, void 0, void 0, function*() {
        isBrowser() && (yield storage === null || storage === void 0 ? void 0 : storage.setItem(key, JSON.stringify(data)));
    });
const getItemAsync = (storage, key)=>__awaiter(void 0, void 0, void 0, function*() {
        const value = isBrowser() && (yield storage === null || storage === void 0 ? void 0 : storage.getItem(key));
        if (!value) return null;
        try {
            return JSON.parse(value);
        } catch (_a) {
            return value;
        }
    });
const getItemSynchronously = (storage, key)=>{
    const value = isBrowser() && (storage === null || storage === void 0 ? void 0 : storage.getItem(key));
    if (!value || typeof value !== "string") return null;
    try {
        return JSON.parse(value);
    } catch (_a) {
        return value;
    }
};
const removeItemAsync = (storage, key)=>__awaiter(void 0, void 0, void 0, function*() {
        isBrowser() && (yield storage === null || storage === void 0 ? void 0 : storage.removeItem(key));
    });

},{"cfdaa7fdd2a8d629":"Un9Cg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Un9Cg":[function(require,module,exports) {
module.exports = require("27542b7472df78bc")(require("73262c6007e3114e").getBundleURL("au3ao") + "browser-ponyfill.3f94a81e.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("iGvur"));

},{"27542b7472df78bc":"61B45","73262c6007e3114e":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"c5MJN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _goTrueApi = require("./GoTrueApi");
var _goTrueApiDefault = parcelHelpers.interopDefault(_goTrueApi);
var _helpers = require("./lib/helpers");
var _constants = require("./lib/constants");
var _polyfills = require("./lib/polyfills");
var Buffer = require("8c47fe21e2648bea").Buffer;
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(0, _polyfills.polyfillGlobalThis)(); // Make "globalThis" available
const DEFAULT_OPTIONS = {
    url: (0, _constants.GOTRUE_URL),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    multiTab: true,
    headers: (0, _constants.DEFAULT_HEADERS)
};
const decodeBase64URL = (value)=>{
    try {
        // atob is present in all browsers and nodejs >= 16
        // but if it is not it will throw a ReferenceError in which case we can try to use Buffer
        // replace are here to convert the Base64-URL into Base64 which is what atob supports
        // replace with //g regex acts like replaceAll
        return atob(value.replace(/[-]/g, "+").replace(/[_]/g, "/"));
    } catch (e) {
        if (e instanceof ReferenceError) // running on nodejs < 16
        // Buffer supports Base64-URL transparently
        return Buffer.from(value, "base64").toString("utf-8");
        else throw e;
    }
};
class GoTrueClient {
    /**
     * Create a new client for use in the browser.
     * @param options.url The URL of the GoTrue server.
     * @param options.headers Any additional headers to send to the GoTrue server.
     * @param options.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.localStorage Provide your own local storage implementation to use instead of the browser's local storage.
     * @param options.multiTab Set to "false" if you want to disable multi-tab/window events.
     * @param options.cookieOptions
     * @param options.fetch A custom fetch implementation.
     */ constructor(options){
        this.stateChangeEmitters = new Map();
        this.networkRetries = 0;
        const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
        this.currentUser = null;
        this.currentSession = null;
        this.autoRefreshToken = settings.autoRefreshToken;
        this.persistSession = settings.persistSession;
        this.multiTab = settings.multiTab;
        this.localStorage = settings.localStorage || globalThis.localStorage;
        this.api = new (0, _goTrueApiDefault.default)({
            url: settings.url,
            headers: settings.headers,
            cookieOptions: settings.cookieOptions,
            fetch: settings.fetch
        });
        this._recoverSession();
        this._recoverAndRefresh();
        this._listenForMultiTabEvents();
        this._handleVisibilityChange();
        if (settings.detectSessionInUrl && (0, _helpers.isBrowser)() && !!(0, _helpers.getParameterByName)("access_token")) // Handle the OAuth redirect
        this.getSessionFromUrl({
            storeSession: true
        }).then(({ error })=>{
            if (error) throw new Error("Error getting session from URL.");
        });
    }
    /**
     * Creates a new user.
     * @type UserCredentials
     * @param email The user's email address.
     * @param password The user's password.
     * @param phone The user's phone number.
     * @param redirectTo The redirect URL attached to the signup confirmation link. Does not redirect the user if it's a mobile signup.
     * @param data Optional user metadata.
     */ signUp({ email, password, phone }, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                this._removeSession();
                const { data, error } = phone && password ? yield this.api.signUpWithPhone(phone, password, {
                    data: options.data,
                    captchaToken: options.captchaToken
                }) : yield this.api.signUpWithEmail(email, password, {
                    redirectTo: options.redirectTo,
                    data: options.data,
                    captchaToken: options.captchaToken
                });
                if (error) throw error;
                if (!data) throw "An error occurred on sign up.";
                let session = null;
                let user = null;
                if (data.access_token) {
                    session = data;
                    user = session.user;
                    this._saveSession(session);
                    this._notifyAllSubscribers("SIGNED_IN");
                }
                if (data.id) user = data;
                return {
                    user,
                    session,
                    error: null
                };
            } catch (e) {
                return {
                    user: null,
                    session: null,
                    error: e
                };
            }
        });
    }
    /**
     * Log in an existing user, or login via a third-party provider.
     * @type UserCredentials
     * @param email The user's email address.
     * @param phone The user's phone number.
     * @param password The user's password.
     * @param refreshToken A valid refresh token that was returned on login.
     * @param provider One of the providers supported by GoTrue.
     * @param redirectTo A URL to send the user to after they are confirmed (OAuth logins only).
     * @param shouldCreateUser A boolean flag to indicate whether to automatically create a user on magiclink / otp sign-ins if the user doesn't exist. Defaults to true.
     * @param scopes A space-separated list of scopes granted to the OAuth application.
     */ signIn({ email, phone, password, refreshToken, provider, oidc }, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                this._removeSession();
                if (email && !password) {
                    const { error } = yield this.api.sendMagicLinkEmail(email, {
                        redirectTo: options.redirectTo,
                        shouldCreateUser: options.shouldCreateUser,
                        captchaToken: options.captchaToken
                    });
                    return {
                        user: null,
                        session: null,
                        error
                    };
                }
                if (email && password) return this._handleEmailSignIn(email, password, {
                    redirectTo: options.redirectTo,
                    captchaToken: options.captchaToken
                });
                if (phone && !password) {
                    const { error } = yield this.api.sendMobileOTP(phone, {
                        shouldCreateUser: options.shouldCreateUser,
                        captchaToken: options.captchaToken
                    });
                    return {
                        user: null,
                        session: null,
                        error
                    };
                }
                if (phone && password) return this._handlePhoneSignIn(phone, password);
                if (refreshToken) {
                    // currentSession and currentUser will be updated to latest on _callRefreshToken using the passed refreshToken
                    const { error } = yield this._callRefreshToken(refreshToken);
                    if (error) throw error;
                    return {
                        user: this.currentUser,
                        session: this.currentSession,
                        error: null
                    };
                }
                if (provider) return this._handleProviderSignIn(provider, {
                    redirectTo: options.redirectTo,
                    scopes: options.scopes,
                    queryParams: options.queryParams
                });
                if (oidc) return this._handleOpenIDConnectSignIn(oidc);
                throw new Error(`You must provide either an email, phone number, a third-party provider or OpenID Connect.`);
            } catch (e) {
                return {
                    user: null,
                    session: null,
                    error: e
                };
            }
        });
    }
    /**
     * Log in a user given a User supplied OTP received via mobile.
     * @param email The user's email address.
     * @param phone The user's phone number.
     * @param token The user's password.
     * @param type The user's verification type.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */ verifyOTP(params, options = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                this._removeSession();
                const { data, error } = yield this.api.verifyOTP(params, options);
                if (error) throw error;
                if (!data) throw "An error occurred on token verification.";
                let session = null;
                let user = null;
                if (data.access_token) {
                    session = data;
                    user = session.user;
                    this._saveSession(session);
                    this._notifyAllSubscribers("SIGNED_IN");
                }
                if (data.id) user = data;
                return {
                    user,
                    session,
                    error: null
                };
            } catch (e) {
                return {
                    user: null,
                    session: null,
                    error: e
                };
            }
        });
    }
    /**
     * Inside a browser context, `user()` will return the user data, if there is a logged in user.
     *
     * For server-side management, you can get a user through `auth.api.getUserByCookie()`
     */ user() {
        return this.currentUser;
    }
    /**
     * Returns the session data, if there is an active session.
     */ session() {
        return this.currentSession;
    }
    /**
     * Force refreshes the session including the user data in case it was updated in a different session.
     */ refreshSession() {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token)) throw new Error("Not logged in.");
                // currentSession and currentUser will be updated to latest on _callRefreshToken
                const { error } = yield this._callRefreshToken();
                if (error) throw error;
                return {
                    data: this.currentSession,
                    user: this.currentUser,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    user: null,
                    error: e
                };
            }
        });
    }
    /**
     * Updates user data, if there is a logged in user.
     */ update(attributes) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token)) throw new Error("Not logged in.");
                const { user, error } = yield this.api.updateUser(this.currentSession.access_token, attributes);
                if (error) throw error;
                if (!user) throw Error("Invalid user data.");
                const session = Object.assign(Object.assign({}, this.currentSession), {
                    user
                });
                this._saveSession(session);
                this._notifyAllSubscribers("USER_UPDATED");
                return {
                    data: user,
                    user,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    user: null,
                    error: e
                };
            }
        });
    }
    setSession(arg0) {
        return __awaiter(this, void 0, void 0, function*() {
            let session;
            if (typeof arg0 === "string") {
                // using the refresh_token string API
                const refresh_token = arg0;
                const { data, error } = yield this.api.refreshAccessToken(refresh_token);
                if (error) return {
                    session: null,
                    error: error
                };
                session = data;
            } else {
                // using the object parameter API
                const timeNow = Math.round(Date.now() / 1000);
                let { refresh_token, access_token } = arg0;
                let expires_at = 0;
                let expires_in = 0;
                const tokenParts = access_token.split(".");
                if (tokenParts.length !== 3) throw new Error("access_token is not a proper JWT");
                const bodyJSON = decodeBase64URL(tokenParts[1]);
                let parsed = undefined;
                try {
                    parsed = JSON.parse(bodyJSON);
                } catch (e) {
                    throw new Error("access_token is not a proper JWT, invalid JSON in body");
                }
                if (typeof parsed === "object" && parsed && typeof parsed.exp === "number") {
                    expires_at = parsed.exp;
                    expires_in = timeNow - parsed.exp;
                } else throw new Error("access_token is not a proper JWT, missing exp claim");
                if (timeNow > expires_at) {
                    const { data, error } = yield this.api.refreshAccessToken(refresh_token);
                    if (error) return {
                        session: null,
                        error: error
                    };
                    session = data;
                } else {
                    const { user, error } = yield this.api.getUser(access_token);
                    if (error) throw error;
                    session = {
                        access_token,
                        expires_in,
                        expires_at,
                        refresh_token,
                        token_type: "bearer",
                        user: user
                    };
                }
            }
            try {
                this._saveSession(session);
                this._notifyAllSubscribers("SIGNED_IN");
                return {
                    session,
                    error: null
                };
            } catch (e) {
                return {
                    error: e,
                    session: null
                };
            }
        });
    }
    /**
     * Overrides the JWT on the current client. The JWT will then be sent in all subsequent network requests.
     * @param access_token a jwt access token
     */ setAuth(access_token) {
        this.currentSession = Object.assign(Object.assign({}, this.currentSession), {
            access_token,
            token_type: "bearer",
            user: this.user()
        });
        this._notifyAllSubscribers("TOKEN_REFRESHED");
        return this.currentSession;
    }
    /**
     * Gets the session data from a URL string
     * @param options.storeSession Optionally store the session in the browser
     */ getSessionFromUrl(options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                if (!(0, _helpers.isBrowser)()) throw new Error("No browser detected.");
                const error_description = (0, _helpers.getParameterByName)("error_description");
                if (error_description) throw new Error(error_description);
                const provider_token = (0, _helpers.getParameterByName)("provider_token");
                const provider_refresh_token = (0, _helpers.getParameterByName)("provider_refresh_token");
                const access_token = (0, _helpers.getParameterByName)("access_token");
                if (!access_token) throw new Error("No access_token detected.");
                const expires_in = (0, _helpers.getParameterByName)("expires_in");
                if (!expires_in) throw new Error("No expires_in detected.");
                const refresh_token = (0, _helpers.getParameterByName)("refresh_token");
                if (!refresh_token) throw new Error("No refresh_token detected.");
                const token_type = (0, _helpers.getParameterByName)("token_type");
                if (!token_type) throw new Error("No token_type detected.");
                const timeNow = Math.round(Date.now() / 1000);
                const expires_at = timeNow + parseInt(expires_in);
                const { user, error } = yield this.api.getUser(access_token);
                if (error) throw error;
                const session = {
                    provider_token,
                    provider_refresh_token,
                    access_token,
                    expires_in: parseInt(expires_in),
                    expires_at,
                    refresh_token,
                    token_type,
                    user: user
                };
                if (options === null || options === void 0 ? void 0 : options.storeSession) {
                    this._saveSession(session);
                    const recoveryMode = (0, _helpers.getParameterByName)("type");
                    this._notifyAllSubscribers("SIGNED_IN");
                    if (recoveryMode === "recovery") this._notifyAllSubscribers("PASSWORD_RECOVERY");
                }
                // Remove tokens from URL
                window.location.hash = "";
                return {
                    data: session,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    /**
     * Inside a browser context, `signOut()` will remove the logged in user from the browser session
     * and log them out - removing all items from localstorage and then trigger a "SIGNED_OUT" event.
     *
     * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`. There is no way to revoke a user's session JWT before it automatically expires
     */ signOut() {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            const accessToken = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token;
            this._removeSession();
            this._notifyAllSubscribers("SIGNED_OUT");
            if (accessToken) {
                const { error } = yield this.api.signOut(accessToken);
                if (error) return {
                    error
                };
            }
            return {
                error: null
            };
        });
    }
    /**
     * Receive a notification every time an auth event happens.
     * @returns {Subscription} A subscription object which can be used to unsubscribe itself.
     */ onAuthStateChange(callback) {
        try {
            const id = (0, _helpers.uuid)();
            const subscription = {
                id,
                callback,
                unsubscribe: ()=>{
                    this.stateChangeEmitters.delete(id);
                }
            };
            this.stateChangeEmitters.set(id, subscription);
            return {
                data: subscription,
                error: null
            };
        } catch (e) {
            return {
                data: null,
                error: e
            };
        }
    }
    _handleEmailSignIn(email, password, options = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const { data, error } = yield this.api.signInWithEmail(email, password, {
                    redirectTo: options.redirectTo,
                    captchaToken: options.captchaToken
                });
                if (error || !data) return {
                    data: null,
                    user: null,
                    session: null,
                    error
                };
                if (((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.confirmed_at) || ((_b = data === null || data === void 0 ? void 0 : data.user) === null || _b === void 0 ? void 0 : _b.email_confirmed_at)) {
                    this._saveSession(data);
                    this._notifyAllSubscribers("SIGNED_IN");
                }
                return {
                    data,
                    user: data.user,
                    session: data,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    user: null,
                    session: null,
                    error: e
                };
            }
        });
    }
    _handlePhoneSignIn(phone, password, options = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const { data, error } = yield this.api.signInWithPhone(phone, password, options);
                if (error || !data) return {
                    data: null,
                    user: null,
                    session: null,
                    error
                };
                if ((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.phone_confirmed_at) {
                    this._saveSession(data);
                    this._notifyAllSubscribers("SIGNED_IN");
                }
                return {
                    data,
                    user: data.user,
                    session: data,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    user: null,
                    session: null,
                    error: e
                };
            }
        });
    }
    _handleProviderSignIn(provider, options = {}) {
        const url = this.api.getUrlForProvider(provider, {
            redirectTo: options.redirectTo,
            scopes: options.scopes,
            queryParams: options.queryParams
        });
        try {
            // try to open on the browser
            if ((0, _helpers.isBrowser)()) window.location.href = url;
            return {
                provider,
                url,
                data: null,
                session: null,
                user: null,
                error: null
            };
        } catch (e) {
            // fallback to returning the URL
            if (url) return {
                provider,
                url,
                data: null,
                session: null,
                user: null,
                error: null
            };
            return {
                data: null,
                user: null,
                session: null,
                error: e
            };
        }
    }
    _handleOpenIDConnectSignIn({ id_token, nonce, client_id, issuer, provider }) {
        return __awaiter(this, void 0, void 0, function*() {
            if (id_token && nonce && (client_id && issuer || provider)) try {
                const { data, error } = yield this.api.signInWithOpenIDConnect({
                    id_token,
                    nonce,
                    client_id,
                    issuer,
                    provider
                });
                if (error || !data) return {
                    user: null,
                    session: null,
                    error
                };
                this._saveSession(data);
                this._notifyAllSubscribers("SIGNED_IN");
                return {
                    user: data.user,
                    session: data,
                    error: null
                };
            } catch (e) {
                return {
                    user: null,
                    session: null,
                    error: e
                };
            }
            throw new Error(`You must provide a OpenID Connect provider with your id token and nonce.`);
        });
    }
    /**
     * Attempts to get the session from LocalStorage
     * Note: this should never be async (even for React Native), as we need it to return immediately in the constructor.
     */ _recoverSession() {
        try {
            const data = (0, _helpers.getItemSynchronously)(this.localStorage, (0, _constants.STORAGE_KEY));
            if (!data) return null;
            const { currentSession, expiresAt } = data;
            const timeNow = Math.round(Date.now() / 1000);
            if (expiresAt >= timeNow + (0, _constants.EXPIRY_MARGIN) && (currentSession === null || currentSession === void 0 ? void 0 : currentSession.user)) {
                this._saveSession(currentSession);
                this._notifyAllSubscribers("SIGNED_IN");
            }
        } catch (error) {
            console.log("error", error);
        }
    }
    /**
     * Recovers the session from LocalStorage and refreshes
     * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
     */ _recoverAndRefresh() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _helpers.getItemAsync)(this.localStorage, (0, _constants.STORAGE_KEY));
                if (!data) return null;
                const { currentSession, expiresAt } = data;
                const timeNow = Math.round(Date.now() / 1000);
                if (expiresAt < timeNow + (0, _constants.EXPIRY_MARGIN)) {
                    if (this.autoRefreshToken && currentSession.refresh_token) {
                        this.networkRetries++;
                        const { error } = yield this._callRefreshToken(currentSession.refresh_token);
                        if (error) {
                            console.log(error.message);
                            if (error.message === (0, _constants.NETWORK_FAILURE).ERROR_MESSAGE && this.networkRetries < (0, _constants.NETWORK_FAILURE).MAX_RETRIES) {
                                if (this.refreshTokenTimer) clearTimeout(this.refreshTokenTimer);
                                this.refreshTokenTimer = setTimeout(()=>this._recoverAndRefresh(), Math.pow((0, _constants.NETWORK_FAILURE).RETRY_INTERVAL, this.networkRetries) * 100 // exponential backoff
                                );
                                return;
                            }
                            yield this._removeSession();
                        }
                        this.networkRetries = 0;
                    } else this._removeSession();
                } else if (!currentSession) {
                    console.log("Current session is missing data.");
                    this._removeSession();
                } else {
                    // should be handled on _recoverSession method already
                    // But we still need the code here to accommodate for AsyncStorage e.g. in React native
                    this._saveSession(currentSession);
                    this._notifyAllSubscribers("SIGNED_IN");
                }
            } catch (err) {
                console.error(err);
                return null;
            }
        });
    }
    _callRefreshToken(refresh_token) {
        var _a;
        if (refresh_token === void 0) refresh_token = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.refresh_token;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                if (!refresh_token) throw new Error("No current session.");
                const { data, error } = yield this.api.refreshAccessToken(refresh_token);
                if (error) throw error;
                if (!data) throw Error("Invalid session data.");
                this._saveSession(data);
                this._notifyAllSubscribers("TOKEN_REFRESHED");
                this._notifyAllSubscribers("SIGNED_IN");
                return {
                    data,
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    _notifyAllSubscribers(event) {
        this.stateChangeEmitters.forEach((x)=>x.callback(event, this.currentSession));
    }
    /**
     * set currentSession and currentUser
     * process to _startAutoRefreshToken if possible
     */ _saveSession(session) {
        this.currentSession = session;
        this.currentUser = session.user;
        const expiresAt = session.expires_at;
        if (expiresAt) {
            const timeNow = Math.round(Date.now() / 1000);
            const expiresIn = expiresAt - timeNow;
            const refreshDurationBeforeExpires = expiresIn > (0, _constants.EXPIRY_MARGIN) ? (0, _constants.EXPIRY_MARGIN) : 0.5;
            this._startAutoRefreshToken((expiresIn - refreshDurationBeforeExpires) * 1000);
        }
        // Do we need any extra check before persist session
        // access_token or user ?
        if (this.persistSession && session.expires_at) this._persistSession(this.currentSession);
    }
    _persistSession(currentSession) {
        const data = {
            currentSession,
            expiresAt: currentSession.expires_at
        };
        (0, _helpers.setItemAsync)(this.localStorage, (0, _constants.STORAGE_KEY), data);
    }
    _removeSession() {
        return __awaiter(this, void 0, void 0, function*() {
            this.currentSession = null;
            this.currentUser = null;
            if (this.refreshTokenTimer) clearTimeout(this.refreshTokenTimer);
            (0, _helpers.removeItemAsync)(this.localStorage, (0, _constants.STORAGE_KEY));
        });
    }
    /**
     * Clear and re-create refresh token timer
     * @param value time intervals in milliseconds
     */ _startAutoRefreshToken(value) {
        if (this.refreshTokenTimer) clearTimeout(this.refreshTokenTimer);
        if (value <= 0 || !this.autoRefreshToken) return;
        this.refreshTokenTimer = setTimeout(()=>__awaiter(this, void 0, void 0, function*() {
                this.networkRetries++;
                const { error } = yield this._callRefreshToken();
                if (!error) this.networkRetries = 0;
                if ((error === null || error === void 0 ? void 0 : error.message) === (0, _constants.NETWORK_FAILURE).ERROR_MESSAGE && this.networkRetries < (0, _constants.NETWORK_FAILURE).MAX_RETRIES) this._startAutoRefreshToken(Math.pow((0, _constants.NETWORK_FAILURE).RETRY_INTERVAL, this.networkRetries) * 100); // exponential backoff
            }), value);
        if (typeof this.refreshTokenTimer.unref === "function") this.refreshTokenTimer.unref();
    }
    /**
     * Listens for changes to LocalStorage and updates the current session.
     */ _listenForMultiTabEvents() {
        if (!this.multiTab || !(0, _helpers.isBrowser)() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) return false;
        try {
            window === null || window === void 0 || window.addEventListener("storage", (e)=>{
                var _a;
                if (e.key === (0, _constants.STORAGE_KEY)) {
                    const newSession = JSON.parse(String(e.newValue));
                    if ((_a = newSession === null || newSession === void 0 ? void 0 : newSession.currentSession) === null || _a === void 0 ? void 0 : _a.access_token) {
                        this._saveSession(newSession.currentSession);
                        this._notifyAllSubscribers("SIGNED_IN");
                    } else {
                        this._removeSession();
                        this._notifyAllSubscribers("SIGNED_OUT");
                    }
                }
            });
        } catch (error) {
            console.error("_listenForMultiTabEvents", error);
        }
    }
    _handleVisibilityChange() {
        if (!this.multiTab || !(0, _helpers.isBrowser)() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) return false;
        try {
            window === null || window === void 0 || window.addEventListener("visibilitychange", ()=>{
                if (document.visibilityState === "visible") this._recoverAndRefresh();
            });
        } catch (error) {
            console.error("_handleVisibilityChange", error);
        }
    }
}
exports.default = GoTrueClient;

},{"8c47fe21e2648bea":"fCgem","./GoTrueApi":"aqSzg","./lib/helpers":"iB9P5","./lib/constants":"AEsdK","./lib/polyfills":"7l66j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"7l66j":[function(require,module,exports) {
/**
 * https://mathiasbynens.be/notes/globalthis
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "polyfillGlobalThis", ()=>polyfillGlobalThis);
function polyfillGlobalThis() {
    if (typeof globalThis === "object") return;
    try {
        Object.defineProperty(Object.prototype, "__magic__", {
            get: function() {
                return this;
            },
            configurable: true
        });
        // @ts-expect-error 'Allow access to magic'
        __magic__.globalThis = __magic__;
        // @ts-expect-error 'Allow access to magic'
        delete Object.prototype.__magic__;
    } catch (e) {
        if (typeof self !== "undefined") // @ts-expect-error 'Allow access to globals'
        self.globalThis = self;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j7OJp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7UcFw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SupabaseQueryBuilder", ()=>SupabaseQueryBuilder);
var _postgrestJs = require("@supabase/postgrest-js");
var _supabaseRealtimeClient = require("./SupabaseRealtimeClient");
class SupabaseQueryBuilder extends (0, _postgrestJs.PostgrestQueryBuilder) {
    constructor(url, { headers = {}, schema, realtime, table, fetch, shouldThrowOnError }){
        super(url, {
            headers,
            schema,
            fetch,
            shouldThrowOnError
        });
        this._subscription = null;
        this._realtime = realtime;
        this._headers = headers;
        this._schema = schema;
        this._table = table;
    }
    /**
     * Subscribe to realtime changes in your database.
     * @param event The database event which you would like to receive updates for, or you can use the special wildcard `*` to listen to all changes.
     * @param callback A callback that will handle the payload that is sent whenever your database changes.
     */ on(event, callback) {
        if (!this._realtime.isConnected()) this._realtime.connect();
        if (!this._subscription) this._subscription = new (0, _supabaseRealtimeClient.SupabaseRealtimeClient)(this._realtime, this._headers, this._schema, this._table);
        return this._subscription.on(event, callback);
    }
}

},{"@supabase/postgrest-js":"aAUlI","./SupabaseRealtimeClient":"3IFKN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAUlI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PostgrestClient", ()=>(0, _postgrestClientDefault.default));
parcelHelpers.export(exports, "PostgrestBuilder", ()=>(0, _types.PostgrestBuilder));
parcelHelpers.export(exports, "PostgrestQueryBuilder", ()=>(0, _postgrestQueryBuilderDefault.default));
parcelHelpers.export(exports, "PostgrestFilterBuilder", ()=>(0, _postgrestFilterBuilderDefault.default));
var _postgrestClient = require("./PostgrestClient");
var _postgrestClientDefault = parcelHelpers.interopDefault(_postgrestClient);
var _postgrestFilterBuilder = require("./lib/PostgrestFilterBuilder");
var _postgrestFilterBuilderDefault = parcelHelpers.interopDefault(_postgrestFilterBuilder);
var _postgrestQueryBuilder = require("./lib/PostgrestQueryBuilder");
var _postgrestQueryBuilderDefault = parcelHelpers.interopDefault(_postgrestQueryBuilder);
var _types = require("./lib/types");

},{"./PostgrestClient":"ldPfD","./lib/PostgrestFilterBuilder":"9dih0","./lib/PostgrestQueryBuilder":"irTq9","./lib/types":"aczuZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldPfD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postgrestQueryBuilder = require("./lib/PostgrestQueryBuilder");
var _postgrestQueryBuilderDefault = parcelHelpers.interopDefault(_postgrestQueryBuilder);
var _postgrestRpcBuilder = require("./lib/PostgrestRpcBuilder");
var _postgrestRpcBuilderDefault = parcelHelpers.interopDefault(_postgrestRpcBuilder);
var _constants = require("./lib/constants");
class PostgrestClient {
    /**
     * Creates a PostgREST client.
     *
     * @param url  URL of the PostgREST endpoint.
     * @param headers  Custom headers.
     * @param schema  Postgres schema to switch to.
     */ constructor(url, { headers = {}, schema, fetch, throwOnError } = {}){
        this.url = url;
        this.headers = Object.assign(Object.assign({}, (0, _constants.DEFAULT_HEADERS)), headers);
        this.schema = schema;
        this.fetch = fetch;
        this.shouldThrowOnError = throwOnError;
    }
    /**
     * Authenticates the request with JWT.
     *
     * @param token  The JWT token to use.
     */ auth(token) {
        this.headers["Authorization"] = `Bearer ${token}`;
        return this;
    }
    /**
     * Perform a table operation.
     *
     * @param table  The table name to operate on.
     */ from(table) {
        const url = `${this.url}/${table}`;
        return new (0, _postgrestQueryBuilderDefault.default)(url, {
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            shouldThrowOnError: this.shouldThrowOnError
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn  The function name to call.
     * @param params  The parameters to pass to the function call.
     * @param head  When set to true, no data will be returned.
     * @param count  Count algorithm to use to count rows in a table.
     */ rpc(fn, params, { head = false, count = null } = {}) {
        const url = `${this.url}/rpc/${fn}`;
        return new (0, _postgrestRpcBuilderDefault.default)(url, {
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            shouldThrowOnError: this.shouldThrowOnError
        }).rpc(params, {
            head,
            count
        });
    }
}
exports.default = PostgrestClient;

},{"./lib/PostgrestQueryBuilder":"irTq9","./lib/PostgrestRpcBuilder":"9cOEV","./lib/constants":"bisgC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irTq9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _types = require("./types");
var _postgrestFilterBuilder = require("./PostgrestFilterBuilder");
var _postgrestFilterBuilderDefault = parcelHelpers.interopDefault(_postgrestFilterBuilder);
class PostgrestQueryBuilder extends (0, _types.PostgrestBuilder) {
    constructor(url, { headers = {}, schema, fetch, shouldThrowOnError } = {}){
        super({
            fetch,
            shouldThrowOnError
        });
        this.url = new URL(url);
        this.headers = Object.assign({}, headers);
        this.schema = schema;
    }
    /**
     * Performs vertical filtering with SELECT.
     *
     * @param columns  The columns to retrieve, separated by commas.
     * @param head  When set to true, select will void data.
     * @param count  Count algorithm to use to count rows in a table.
     */ select(columns = "*", { head = false, count = null } = {}) {
        this.method = "GET";
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = columns.split("").map((c)=>{
            if (/\s/.test(c) && !quoted) return "";
            if (c === '"') quoted = !quoted;
            return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        if (count) this.headers["Prefer"] = `count=${count}`;
        if (head) this.method = "HEAD";
        return new (0, _postgrestFilterBuilderDefault.default)(this);
    }
    insert(values, { upsert = false, onConflict, returning = "representation", count = null } = {}) {
        this.method = "POST";
        const prefersHeaders = [
            `return=${returning}`
        ];
        if (upsert) prefersHeaders.push("resolution=merge-duplicates");
        if (upsert && onConflict !== undefined) this.url.searchParams.set("on_conflict", onConflict);
        this.body = values;
        if (count) prefersHeaders.push(`count=${count}`);
        if (this.headers["Prefer"]) prefersHeaders.unshift(this.headers["Prefer"]);
        this.headers["Prefer"] = prefersHeaders.join(",");
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set("columns", uniqueColumns.join(","));
            }
        }
        return new (0, _postgrestFilterBuilderDefault.default)(this);
    }
    /**
     * Performs an UPSERT into the table.
     *
     * @param values  The values to insert.
     * @param onConflict  By specifying the `on_conflict` query parameter, you can make UPSERT work on a column(s) that has a UNIQUE constraint.
     * @param returning  By default the new record is returned. Set this to 'minimal' if you don't need this value.
     * @param count  Count algorithm to use to count rows in a table.
     * @param ignoreDuplicates  Specifies if duplicate rows should be ignored and not inserted.
     */ upsert(values, { onConflict, returning = "representation", count = null, ignoreDuplicates = false } = {}) {
        this.method = "POST";
        const prefersHeaders = [
            `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`,
            `return=${returning}`
        ];
        if (onConflict !== undefined) this.url.searchParams.set("on_conflict", onConflict);
        this.body = values;
        if (count) prefersHeaders.push(`count=${count}`);
        if (this.headers["Prefer"]) prefersHeaders.unshift(this.headers["Prefer"]);
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new (0, _postgrestFilterBuilderDefault.default)(this);
    }
    /**
     * Performs an UPDATE on the table.
     *
     * @param values  The values to update.
     * @param returning  By default the updated record is returned. Set this to 'minimal' if you don't need this value.
     * @param count  Count algorithm to use to count rows in a table.
     */ update(values, { returning = "representation", count = null } = {}) {
        this.method = "PATCH";
        const prefersHeaders = [
            `return=${returning}`
        ];
        this.body = values;
        if (count) prefersHeaders.push(`count=${count}`);
        if (this.headers["Prefer"]) prefersHeaders.unshift(this.headers["Prefer"]);
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new (0, _postgrestFilterBuilderDefault.default)(this);
    }
    /**
     * Performs a DELETE on the table.
     *
     * @param returning  If `true`, return the deleted row(s) in the response.
     * @param count  Count algorithm to use to count rows in a table.
     */ delete({ returning = "representation", count = null } = {}) {
        this.method = "DELETE";
        const prefersHeaders = [
            `return=${returning}`
        ];
        if (count) prefersHeaders.push(`count=${count}`);
        if (this.headers["Prefer"]) prefersHeaders.unshift(this.headers["Prefer"]);
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new (0, _postgrestFilterBuilderDefault.default)(this);
    }
}
exports.default = PostgrestQueryBuilder;

},{"./types":"aczuZ","./PostgrestFilterBuilder":"9dih0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aczuZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PostgrestBuilder", ()=>PostgrestBuilder);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PostgrestBuilder {
    constructor(builder){
        Object.assign(this, builder);
        let _fetch;
        if (builder.fetch) _fetch = builder.fetch;
        else if (typeof fetch === "undefined") _fetch = (...args)=>__awaiter(this, void 0, void 0, function*() {
                return yield (yield require("f6e338444d5b574f")).fetch(...args);
            });
        else _fetch = fetch;
        this.fetch = (...args)=>_fetch(...args);
        this.shouldThrowOnError = builder.shouldThrowOnError || false;
        this.allowEmpty = builder.allowEmpty || false;
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */ throwOnError(throwOnError) {
        if (throwOnError === null || throwOnError === undefined) throwOnError = true;
        this.shouldThrowOnError = throwOnError;
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (typeof this.schema === "undefined") ;
        else if ([
            "GET",
            "HEAD"
        ].includes(this.method)) this.headers["Accept-Profile"] = this.schema;
        else this.headers["Content-Profile"] = this.schema;
        if (this.method !== "GET" && this.method !== "HEAD") this.headers["Content-Type"] = "application/json";
        let res = this.fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then((res)=>__awaiter(this, void 0, void 0, function*() {
                var _a, _b, _c, _d;
                let error = null;
                let data = null;
                let count = null;
                let status = res.status;
                let statusText = res.statusText;
                if (res.ok) {
                    const isReturnMinimal = (_a = this.headers["Prefer"]) === null || _a === void 0 ? void 0 : _a.split(",").includes("return=minimal");
                    if (this.method !== "HEAD" && !isReturnMinimal) {
                        const text = yield res.text();
                        if (!text) ;
                        else if (this.headers["Accept"] === "text/csv") data = text;
                        else data = JSON.parse(text);
                    }
                    const countHeader = (_b = this.headers["Prefer"]) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
                    const contentRange = (_c = res.headers.get("content-range")) === null || _c === void 0 ? void 0 : _c.split("/");
                    if (countHeader && contentRange && contentRange.length > 1) count = parseInt(contentRange[1]);
                } else {
                    const body = yield res.text();
                    try {
                        error = JSON.parse(body);
                    } catch (_e) {
                        error = {
                            message: body
                        };
                    }
                    if (error && this.allowEmpty && ((_d = error === null || error === void 0 ? void 0 : error.details) === null || _d === void 0 ? void 0 : _d.includes("Results contain 0 rows"))) {
                        error = null;
                        status = 200;
                        statusText = "OK";
                    }
                    if (error && this.shouldThrowOnError) throw error;
                }
                const postgrestResponse = {
                    error,
                    data,
                    count,
                    status,
                    statusText,
                    body: data
                };
                return postgrestResponse;
            }));
        if (!this.shouldThrowOnError) res = res.catch((fetchError)=>({
                error: {
                    message: `FetchError: ${fetchError.message}`,
                    details: "",
                    hint: "",
                    code: fetchError.code || ""
                },
                data: null,
                body: null,
                count: null,
                status: 400,
                statusText: "Bad Request"
            }));
        return res.then(onfulfilled, onrejected);
    }
}

},{"f6e338444d5b574f":"Un9Cg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dih0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postgrestTransformBuilder = require("./PostgrestTransformBuilder");
var _postgrestTransformBuilderDefault = parcelHelpers.interopDefault(_postgrestTransformBuilder);
class PostgrestFilterBuilder extends (0, _postgrestTransformBuilderDefault.default) {
    constructor(){
        super(...arguments);
        /** @deprecated Use `contains()` instead. */ this.cs = this.contains;
        /** @deprecated Use `containedBy()` instead. */ this.cd = this.containedBy;
        /** @deprecated Use `rangeLt()` instead. */ this.sl = this.rangeLt;
        /** @deprecated Use `rangeGt()` instead. */ this.sr = this.rangeGt;
        /** @deprecated Use `rangeGte()` instead. */ this.nxl = this.rangeGte;
        /** @deprecated Use `rangeLte()` instead. */ this.nxr = this.rangeLte;
        /** @deprecated Use `rangeAdjacent()` instead. */ this.adj = this.rangeAdjacent;
        /** @deprecated Use `overlaps()` instead. */ this.ov = this.overlaps;
    }
    /**
     * Finds all rows which doesn't satisfy the filter.
     *
     * @param column  The column to filter on.
     * @param operator  The operator to filter with.
     * @param value  The value to filter with.
     */ not(column, operator, value) {
        this.url.searchParams.append(`${column}`, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Finds all rows satisfying at least one of the filters.
     *
     * @param filters  The filters to use, separated by commas.
     * @param foreignTable  The foreign table to use (if `column` is a foreign column).
     */ or(filters, { foreignTable } = {}) {
        const key = typeof foreignTable === "undefined" ? "or" : `${foreignTable}.or`;
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` exactly matches the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */ eq(column, value) {
        this.url.searchParams.append(`${column}`, `eq.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` doesn't match the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */ neq(column, value) {
        this.url.searchParams.append(`${column}`, `neq.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` is greater than the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */ gt(column, value) {
        this.url.searchParams.append(`${column}`, `gt.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` is greater than or
     * equal to the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */ gte(column, value) {
        this.url.searchParams.append(`${column}`, `gte.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` is less than the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */ lt(column, value) {
        this.url.searchParams.append(`${column}`, `lt.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` is less than or equal
     * to the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */ lte(column, value) {
        this.url.searchParams.append(`${column}`, `lte.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value in the stated `column` matches the supplied
     * `pattern` (case sensitive).
     *
     * @param column  The column to filter on.
     * @param pattern  The pattern to filter with.
     */ like(column, pattern) {
        this.url.searchParams.append(`${column}`, `like.${pattern}`);
        return this;
    }
    /**
     * Finds all rows whose value in the stated `column` matches the supplied
     * `pattern` (case insensitive).
     *
     * @param column  The column to filter on.
     * @param pattern  The pattern to filter with.
     */ ilike(column, pattern) {
        this.url.searchParams.append(`${column}`, `ilike.${pattern}`);
        return this;
    }
    /**
     * A check for exact equality (null, true, false), finds all rows whose
     * value on the stated `column` exactly match the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */ is(column, value) {
        this.url.searchParams.append(`${column}`, `is.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` is found on the
     * specified `values`.
     *
     * @param column  The column to filter on.
     * @param values  The values to filter with.
     */ in(column, values) {
        const cleanedValues = values.map((s)=>{
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === "string" && new RegExp("[,()]").test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(",");
        this.url.searchParams.append(`${column}`, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Finds all rows whose json, array, or range value on the stated `column`
     * contains the values specified in `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */ contains(column, value) {
        if (typeof value === "string") // range types can be inclusive '[', ']' or exclusive '(', ')' so just
        // keep it simple and accept a string
        this.url.searchParams.append(`${column}`, `cs.${value}`);
        else if (Array.isArray(value)) // array
        this.url.searchParams.append(`${column}`, `cs.{${value.join(",")}}`);
        else // json
        this.url.searchParams.append(`${column}`, `cs.${JSON.stringify(value)}`);
        return this;
    }
    /**
     * Finds all rows whose json, array, or range value on the stated `column` is
     * contained by the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */ containedBy(column, value) {
        if (typeof value === "string") // range
        this.url.searchParams.append(`${column}`, `cd.${value}`);
        else if (Array.isArray(value)) // array
        this.url.searchParams.append(`${column}`, `cd.{${value.join(",")}}`);
        else // json
        this.url.searchParams.append(`${column}`, `cd.${JSON.stringify(value)}`);
        return this;
    }
    /**
     * Finds all rows whose range value on the stated `column` is strictly to the
     * left of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */ rangeLt(column, range) {
        this.url.searchParams.append(`${column}`, `sl.${range}`);
        return this;
    }
    /**
     * Finds all rows whose range value on the stated `column` is strictly to
     * the right of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */ rangeGt(column, range) {
        this.url.searchParams.append(`${column}`, `sr.${range}`);
        return this;
    }
    /**
     * Finds all rows whose range value on the stated `column` does not extend
     * to the left of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */ rangeGte(column, range) {
        this.url.searchParams.append(`${column}`, `nxl.${range}`);
        return this;
    }
    /**
     * Finds all rows whose range value on the stated `column` does not extend
     * to the right of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */ rangeLte(column, range) {
        this.url.searchParams.append(`${column}`, `nxr.${range}`);
        return this;
    }
    /**
     * Finds all rows whose range value on the stated `column` is adjacent to
     * the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */ rangeAdjacent(column, range) {
        this.url.searchParams.append(`${column}`, `adj.${range}`);
        return this;
    }
    /**
     * Finds all rows whose array or range value on the stated `column` overlaps
     * (has a value in common) with the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */ overlaps(column, value) {
        if (typeof value === "string") // range
        this.url.searchParams.append(`${column}`, `ov.${value}`);
        else // array
        this.url.searchParams.append(`${column}`, `ov.{${value.join(",")}}`);
        return this;
    }
    /**
     * Finds all rows whose text or tsvector value on the stated `column` matches
     * the tsquery in `query`.
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     * @param type  The type of tsquery conversion to use on `query`.
     */ textSearch(column, query, { config, type = null } = {}) {
        let typePart = "";
        if (type === "plain") typePart = "pl";
        else if (type === "phrase") typePart = "ph";
        else if (type === "websearch") typePart = "w";
        const configPart = config === undefined ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * to_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` instead.
     */ fts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `fts${configPart}.${query}`);
        return this;
    }
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * plainto_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` with `type: 'plain'` instead.
     */ plfts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `plfts${configPart}.${query}`);
        return this;
    }
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * phraseto_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` with `type: 'phrase'` instead.
     */ phfts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `phfts${configPart}.${query}`);
        return this;
    }
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * websearch_to_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` with `type: 'websearch'` instead.
     */ wfts(column, query, { config } = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `wfts${configPart}.${query}`);
        return this;
    }
    /**
     * Finds all rows whose `column` satisfies the filter.
     *
     * @param column  The column to filter on.
     * @param operator  The operator to filter with.
     * @param value  The value to filter with.
     */ filter(column, operator, value) {
        this.url.searchParams.append(`${column}`, `${operator}.${value}`);
        return this;
    }
    /**
     * Finds all rows whose columns match the specified `query` object.
     *
     * @param query  The object to filter with, with column names as keys mapped
     *               to their filter values.
     */ match(query) {
        Object.keys(query).forEach((key)=>{
            this.url.searchParams.append(`${key}`, `eq.${query[key]}`);
        });
        return this;
    }
}
exports.default = PostgrestFilterBuilder;

},{"./PostgrestTransformBuilder":"bpLPi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpLPi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _types = require("./types");
class PostgrestTransformBuilder extends (0, _types.PostgrestBuilder) {
    /**
     * Performs vertical filtering with SELECT.
     *
     * @param columns  The columns to retrieve, separated by commas.
     */ select(columns = "*") {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = columns.split("").map((c)=>{
            if (/\s/.test(c) && !quoted) return "";
            if (c === '"') quoted = !quoted;
            return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        return this;
    }
    /**
     * Orders the result with the specified `column`.
     *
     * @param column  The column to order on.
     * @param ascending  If `true`, the result will be in ascending order.
     * @param nullsFirst  If `true`, `null`s appear first.
     * @param foreignTable  The foreign table to use (if `column` is a foreign column).
     */ order(column, { ascending = true, nullsFirst = false, foreignTable } = {}) {
        const key = typeof foreignTable === "undefined" ? "order" : `${foreignTable}.order`;
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}.${nullsFirst ? "nullsfirst" : "nullslast"}`);
        return this;
    }
    /**
     * Limits the result with the specified `count`.
     *
     * @param count  The maximum no. of rows to limit to.
     * @param foreignTable  The foreign table to use (for foreign columns).
     */ limit(count, { foreignTable } = {}) {
        const key = typeof foreignTable === "undefined" ? "limit" : `${foreignTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limits the result to rows within the specified range, inclusive.
     *
     * @param from  The starting index from which to limit the result, inclusive.
     * @param to  The last index to which to limit the result, inclusive.
     * @param foreignTable  The foreign table to use (for foreign columns).
     */ range(from, to, { foreignTable } = {}) {
        const keyOffset = typeof foreignTable === "undefined" ? "offset" : `${foreignTable}.offset`;
        const keyLimit = typeof foreignTable === "undefined" ? "limit" : `${foreignTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Sets the AbortSignal for the fetch request.
     */ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Retrieves only one row from the result. Result must be one row (e.g. using
     * `limit`), otherwise this will result in an error.
     */ single() {
        this.headers["Accept"] = "application/vnd.pgrst.object+json";
        return this;
    }
    /**
     * Retrieves at most one row from the result. Result must be at most one row
     * (e.g. using `eq` on a UNIQUE column), otherwise this will result in an
     * error.
     */ maybeSingle() {
        this.headers["Accept"] = "application/vnd.pgrst.object+json";
        this.allowEmpty = true;
        return this;
    }
    /**
     * Set the response type to CSV.
     */ csv() {
        this.headers["Accept"] = "text/csv";
        return this;
    }
}
exports.default = PostgrestTransformBuilder;

},{"./types":"aczuZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9cOEV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _types = require("./types");
var _postgrestFilterBuilder = require("./PostgrestFilterBuilder");
var _postgrestFilterBuilderDefault = parcelHelpers.interopDefault(_postgrestFilterBuilder);
class PostgrestRpcBuilder extends (0, _types.PostgrestBuilder) {
    constructor(url, { headers = {}, schema, fetch, shouldThrowOnError } = {}){
        super({
            fetch,
            shouldThrowOnError
        });
        this.url = new URL(url);
        this.headers = Object.assign({}, headers);
        this.schema = schema;
    }
    /**
     * Perform a function call.
     */ rpc(params, { head = false, count = null } = {}) {
        if (head) {
            this.method = "HEAD";
            if (params) Object.entries(params).forEach(([name, value])=>{
                this.url.searchParams.append(name, value);
            });
        } else {
            this.method = "POST";
            this.body = params;
        }
        if (count) {
            if (this.headers["Prefer"] !== undefined) this.headers["Prefer"] += `,count=${count}`;
            else this.headers["Prefer"] = `count=${count}`;
        }
        return new (0, _postgrestFilterBuilderDefault.default)(this);
    }
}
exports.default = PostgrestRpcBuilder;

},{"./types":"aczuZ","./PostgrestFilterBuilder":"9dih0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bisgC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
var _version = require("./version");
const DEFAULT_HEADERS = {
    "X-Client-Info": `postgrest-js/${(0, _version.version)}`
};

},{"./version":"apsRw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apsRw":[function(require,module,exports) {
// generated by genversion
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "0.37.4";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3IFKN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SupabaseRealtimeClient", ()=>SupabaseRealtimeClient);
var _realtimeJs = require("@supabase/realtime-js");
class SupabaseRealtimeClient {
    constructor(socket, headers, schema, tableName){
        const chanParams = {};
        const topic = tableName === "*" ? `realtime:${schema}` : `realtime:${schema}:${tableName}`;
        const userToken = headers["Authorization"].split(" ")[1];
        if (userToken) chanParams["user_token"] = userToken;
        this.subscription = socket.channel(topic, chanParams);
    }
    getPayloadRecords(payload) {
        const records = {
            new: {},
            old: {}
        };
        if (payload.type === "INSERT" || payload.type === "UPDATE") records.new = (0, _realtimeJs.Transformers).convertChangeData(payload.columns, payload.record);
        if (payload.type === "UPDATE" || payload.type === "DELETE") records.old = (0, _realtimeJs.Transformers).convertChangeData(payload.columns, payload.old_record);
        return records;
    }
    /**
     * The event you want to listen to.
     *
     * @param event The event
     * @param callback A callback function that is called whenever the event occurs.
     */ on(event, callback) {
        this.subscription.on(event, (payload)=>{
            let enrichedPayload = {
                schema: payload.schema,
                table: payload.table,
                commit_timestamp: payload.commit_timestamp,
                eventType: payload.type,
                new: {},
                old: {},
                errors: payload.errors
            };
            enrichedPayload = Object.assign(Object.assign({}, enrichedPayload), this.getPayloadRecords(payload));
            callback(enrichedPayload);
        });
        return this;
    }
    /**
     * Enables the subscription.
     */ subscribe(callback = ()=>{}) {
        this.subscription.onError((e)=>callback("SUBSCRIPTION_ERROR", e));
        this.subscription.onClose(()=>callback("CLOSED"));
        this.subscription.subscribe().receive("ok", ()=>callback("SUBSCRIBED")).receive("error", (e)=>callback("SUBSCRIPTION_ERROR", e)).receive("timeout", ()=>callback("RETRYING_AFTER_TIMEOUT"));
        return this.subscription;
    }
}

},{"@supabase/realtime-js":"5is54","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5is54":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RealtimeClient", ()=>(0, _realtimeClientDefault.default));
parcelHelpers.export(exports, "RealtimeSubscription", ()=>(0, _realtimeSubscriptionDefault.default));
parcelHelpers.export(exports, "Transformers", ()=>_transformers);
var _transformers = require("./lib/transformers");
var _realtimeClient = require("./RealtimeClient");
var _realtimeClientDefault = parcelHelpers.interopDefault(_realtimeClient);
var _realtimeSubscription = require("./RealtimeSubscription");
var _realtimeSubscriptionDefault = parcelHelpers.interopDefault(_realtimeSubscription);

},{"./lib/transformers":"7jHZI","./RealtimeClient":"hzwx9","./RealtimeSubscription":"dxtkJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jHZI":[function(require,module,exports) {
/**
 * Helpers to convert the change Payload into native JS types.
 */ // Adapted from epgsql (src/epgsql_binary.erl), this module licensed under
// 3-clause BSD found here: https://raw.githubusercontent.com/epgsql/epgsql/devel/LICENSE
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PostgresTypes", ()=>PostgresTypes);
parcelHelpers.export(exports, "convertChangeData", ()=>convertChangeData);
parcelHelpers.export(exports, "convertColumn", ()=>convertColumn);
parcelHelpers.export(exports, "convertCell", ()=>convertCell);
parcelHelpers.export(exports, "toBoolean", ()=>toBoolean);
parcelHelpers.export(exports, "toNumber", ()=>toNumber);
parcelHelpers.export(exports, "toJson", ()=>toJson);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "toTimestampString", ()=>toTimestampString);
var PostgresTypes;
(function(PostgresTypes) {
    PostgresTypes["abstime"] = "abstime";
    PostgresTypes["bool"] = "bool";
    PostgresTypes["date"] = "date";
    PostgresTypes["daterange"] = "daterange";
    PostgresTypes["float4"] = "float4";
    PostgresTypes["float8"] = "float8";
    PostgresTypes["int2"] = "int2";
    PostgresTypes["int4"] = "int4";
    PostgresTypes["int4range"] = "int4range";
    PostgresTypes["int8"] = "int8";
    PostgresTypes["int8range"] = "int8range";
    PostgresTypes["json"] = "json";
    PostgresTypes["jsonb"] = "jsonb";
    PostgresTypes["money"] = "money";
    PostgresTypes["numeric"] = "numeric";
    PostgresTypes["oid"] = "oid";
    PostgresTypes["reltime"] = "reltime";
    PostgresTypes["text"] = "text";
    PostgresTypes["time"] = "time";
    PostgresTypes["timestamp"] = "timestamp";
    PostgresTypes["timestamptz"] = "timestamptz";
    PostgresTypes["timetz"] = "timetz";
    PostgresTypes["tsrange"] = "tsrange";
    PostgresTypes["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
const convertChangeData = (columns, record, options = {})=>{
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
    return Object.keys(record).reduce((acc, rec_key)=>{
        acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
        return acc;
    }, {});
};
const convertColumn = (columnName, columns, record, skipTypes)=>{
    const column = columns.find((x)=>x.name === columnName);
    const colType = column === null || column === void 0 ? void 0 : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) return convertCell(colType, value);
    return noop(value);
};
const convertCell = (type, value)=>{
    // if data type is an array
    if (type.charAt(0) === "_") {
        const dataType = type.slice(1, type.length);
        return toArray(value, dataType);
    }
    // If not null, convert to correct type.
    switch(type){
        case PostgresTypes.bool:
            return toBoolean(value);
        case PostgresTypes.float4:
        case PostgresTypes.float8:
        case PostgresTypes.int2:
        case PostgresTypes.int4:
        case PostgresTypes.int8:
        case PostgresTypes.numeric:
        case PostgresTypes.oid:
            return toNumber(value);
        case PostgresTypes.json:
        case PostgresTypes.jsonb:
            return toJson(value);
        case PostgresTypes.timestamp:
            return toTimestampString(value); // Format to be consistent with PostgREST
        case PostgresTypes.abstime:
        case PostgresTypes.date:
        case PostgresTypes.daterange:
        case PostgresTypes.int4range:
        case PostgresTypes.int8range:
        case PostgresTypes.money:
        case PostgresTypes.reltime:
        case PostgresTypes.text:
        case PostgresTypes.time:
        case PostgresTypes.timestamptz:
        case PostgresTypes.timetz:
        case PostgresTypes.tsrange:
        case PostgresTypes.tstzrange:
            return noop(value);
        default:
            // Return the value for remaining types
            return noop(value);
    }
};
const noop = (value)=>{
    return value;
};
const toBoolean = (value)=>{
    switch(value){
        case "t":
            return true;
        case "f":
            return false;
        default:
            return value;
    }
};
const toNumber = (value)=>{
    if (typeof value === "string") {
        const parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) return parsedValue;
    }
    return value;
};
const toJson = (value)=>{
    if (typeof value === "string") try {
        return JSON.parse(value);
    } catch (error) {
        console.log(`JSON parse error: ${error}`);
        return value;
    }
    return value;
};
const toArray = (value, type)=>{
    if (typeof value !== "string") return value;
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    // Confirm value is a Postgres array by checking curly brackets
    if (openBrace === "{" && closeBrace === "}") {
        let arr;
        const valTrim = value.slice(1, lastIdx);
        // TODO: find a better solution to separate Postgres array data
        try {
            arr = JSON.parse("[" + valTrim + "]");
        } catch (_) {
            // WARNING: splitting on comma does not cover all edge cases
            arr = valTrim ? valTrim.split(",") : [];
        }
        return arr.map((val)=>convertCell(type, val));
    }
    return value;
};
const toTimestampString = (value)=>{
    if (typeof value === "string") return value.replace(" ", "T");
    return value;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hzwx9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _websocket = require("websocket");
var _constants = require("./lib/constants");
var _timer = require("./lib/timer");
var _timerDefault = parcelHelpers.interopDefault(_timer);
var _serializer = require("./lib/serializer");
var _serializerDefault = parcelHelpers.interopDefault(_serializer);
var _realtimeSubscription = require("./RealtimeSubscription");
var _realtimeSubscriptionDefault = parcelHelpers.interopDefault(_realtimeSubscription);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const noop = ()=>{};
class RealtimeClient {
    /**
     * Initializes the Socket.
     *
     * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
     * @param options.transport The Websocket Transport, for example WebSocket.
     * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
     * @param options.params The optional params to pass when connecting.
     * @param options.headers The optional headers to pass when connecting.
     * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
     * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
     * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
     * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
     * @param options.longpollerTimeout The maximum timeout of a long poll AJAX request. Defaults to 20s (double the server long poll timer).
     * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
     */ constructor(endPoint, options){
        this.accessToken = null;
        this.channels = [];
        this.endPoint = "";
        this.headers = (0, _constants.DEFAULT_HEADERS);
        this.params = {};
        this.timeout = (0, _constants.DEFAULT_TIMEOUT);
        this.transport = (0, _websocket.w3cwebsocket);
        this.heartbeatIntervalMs = 30000;
        this.longpollerTimeout = 20000;
        this.heartbeatTimer = undefined;
        this.pendingHeartbeatRef = null;
        this.ref = 0;
        this.logger = noop;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new (0, _serializerDefault.default)();
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        };
        this.endPoint = `${endPoint}/${(0, _constants.TRANSPORTS).websocket}`;
        if (options === null || options === void 0 ? void 0 : options.params) this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.headers) this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
        if (options === null || options === void 0 ? void 0 : options.timeout) this.timeout = options.timeout;
        if (options === null || options === void 0 ? void 0 : options.logger) this.logger = options.logger;
        if (options === null || options === void 0 ? void 0 : options.transport) this.transport = options.transport;
        if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) this.heartbeatIntervalMs = options.heartbeatIntervalMs;
        if (options === null || options === void 0 ? void 0 : options.longpollerTimeout) this.longpollerTimeout = options.longpollerTimeout;
        this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs) ? options.reconnectAfterMs : (tries)=>{
            return [
                1000,
                2000,
                5000,
                10000
            ][tries - 1] || 10000;
        };
        this.encode = (options === null || options === void 0 ? void 0 : options.encode) ? options.encode : (payload, callback)=>{
            return callback(JSON.stringify(payload));
        };
        this.decode = (options === null || options === void 0 ? void 0 : options.decode) ? options.decode : this.serializer.decode.bind(this.serializer);
        this.reconnectTimer = new (0, _timerDefault.default)(()=>__awaiter(this, void 0, void 0, function*() {
                yield this.disconnect();
                this.connect();
            }), this.reconnectAfterMs);
    }
    /**
     * Connects the socket, unless already connected.
     */ connect() {
        if (this.conn) return;
        this.conn = new this.transport(this.endPointURL(), [], null, this.headers);
        if (this.conn) {
            // this.conn.timeout = this.longpollerTimeout // TYPE ERROR
            this.conn.binaryType = "arraybuffer";
            this.conn.onopen = ()=>this._onConnOpen();
            this.conn.onerror = (error)=>this._onConnError(error);
            this.conn.onmessage = (event)=>this.onConnMessage(event);
            this.conn.onclose = (event)=>this._onConnClose(event);
        }
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     */ disconnect(code, reason) {
        return new Promise((resolve, _reject)=>{
            try {
                if (this.conn) {
                    this.conn.onclose = function() {}; // noop
                    if (code) this.conn.close(code, reason || "");
                    else this.conn.close();
                    this.conn = null;
                    // remove open handles
                    this.heartbeatTimer && clearInterval(this.heartbeatTimer);
                    this.reconnectTimer.reset();
                }
                resolve({
                    error: null,
                    data: true
                });
            } catch (error) {
                resolve({
                    error: error,
                    data: false
                });
            }
        });
    }
    /**
     * Logs the message.
     *
     * For customized logging, `this.logger` can be overriden.
     */ log(kind, msg, data) {
        this.logger(kind, msg, data);
    }
    /**
     * Registers a callback for connection state change event.
     *
     * @param callback A function to be called when the event occurs.
     *
     * @example
     *    socket.onOpen(() => console.log("Socket opened."))
     */ onOpen(callback) {
        this.stateChangeCallbacks.open.push(callback);
    }
    /**
     * Registers a callback for connection state change events.
     *
     * @param callback A function to be called when the event occurs.
     *
     * @example
     *    socket.onOpen(() => console.log("Socket closed."))
     */ onClose(callback) {
        this.stateChangeCallbacks.close.push(callback);
    }
    /**
     * Registers a callback for connection state change events.
     *
     * @param callback A function to be called when the event occurs.
     *
     * @example
     *    socket.onOpen((error) => console.log("An error occurred"))
     */ onError(callback) {
        this.stateChangeCallbacks.error.push(callback);
    }
    /**
     * Calls a function any time a message is received.
     *
     * @param callback A function to be called when the event occurs.
     *
     * @example
     *    socket.onMessage((message) => console.log(message))
     */ onMessage(callback) {
        this.stateChangeCallbacks.message.push(callback);
    }
    /**
     * Returns the current state of the socket.
     */ connectionState() {
        switch(this.conn && this.conn.readyState){
            case (0, _constants.SOCKET_STATES).connecting:
                return (0, _constants.CONNECTION_STATE).Connecting;
            case (0, _constants.SOCKET_STATES).open:
                return (0, _constants.CONNECTION_STATE).Open;
            case (0, _constants.SOCKET_STATES).closing:
                return (0, _constants.CONNECTION_STATE).Closing;
            default:
                return (0, _constants.CONNECTION_STATE).Closed;
        }
    }
    /**
     * Retuns `true` is the connection is open.
     */ isConnected() {
        return this.connectionState() === (0, _constants.CONNECTION_STATE).Open;
    }
    /**
     * Removes a subscription from the socket.
     *
     * @param channel An open subscription.
     */ remove(channel) {
        this.channels = this.channels.filter((c)=>c.joinRef() !== channel.joinRef());
    }
    channel(topic, chanParams = {}) {
        const chan = new (0, _realtimeSubscriptionDefault.default)(topic, chanParams, this);
        this.channels.push(chan);
        return chan;
    }
    /**
     * Push out a message if the socket is connected.
     *
     * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
     */ push(data) {
        const { topic, event, payload, ref } = data;
        let callback = ()=>{
            this.encode(data, (result)=>{
                var _a;
                (_a = this.conn) === null || _a === void 0 || _a.send(result);
            });
        };
        this.log("push", `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) callback();
        else this.sendBuffer.push(callback);
    }
    onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg)=>{
            let { topic, event, payload, ref } = msg;
            if (ref && ref === this.pendingHeartbeatRef || event === (payload === null || payload === void 0 ? void 0 : payload.type)) this.pendingHeartbeatRef = null;
            this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
            this.channels.filter((channel)=>channel.isMember(topic)).forEach((channel)=>channel.trigger(event, payload, ref));
            this.stateChangeCallbacks.message.forEach((callback)=>callback(msg));
        });
    }
    /**
     * Returns the URL of the websocket.
     */ endPointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: (0, _constants.VSN)
        }));
    }
    /**
     * Return the next message ref, accounting for overflows
     */ makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) this.ref = 0;
        else this.ref = newRef;
        return this.ref.toString();
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * @param token A JWT string.
     */ setAuth(token) {
        this.accessToken = token;
        this.channels.forEach((channel)=>{
            token && channel.updateJoinPayload({
                user_token: token
            });
            if (channel.joinedOnce && channel.isJoined()) channel.push((0, _constants.CHANNEL_EVENTS).access_token, {
                access_token: token
            });
        });
    }
    /**
     * Unsubscribe from channels with the specified topic.
     */ leaveOpenTopic(topic) {
        let dupChannel = this.channels.find((c)=>c.topic === topic && (c.isJoined() || c.isJoining()));
        if (dupChannel) {
            this.log("transport", `leaving duplicate topic "${topic}"`);
            dupChannel.unsubscribe();
        }
    }
    _onConnOpen() {
        this.log("transport", `connected to ${this.endPointURL()}`);
        this._flushSendBuffer();
        this.reconnectTimer.reset();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(()=>this._sendHeartbeat(), this.heartbeatIntervalMs);
        this.stateChangeCallbacks.open.forEach((callback)=>callback());
    }
    _onConnClose(event) {
        this.log("transport", "close", event);
        this._triggerChanError();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.reconnectTimer.scheduleTimeout();
        this.stateChangeCallbacks.close.forEach((callback)=>callback(event));
    }
    _onConnError(error) {
        this.log("transport", error.message);
        this._triggerChanError();
        this.stateChangeCallbacks.error.forEach((callback)=>callback(error));
    }
    _triggerChanError() {
        this.channels.forEach((channel)=>channel.trigger((0, _constants.CHANNEL_EVENTS).error));
    }
    _appendParams(url, params) {
        if (Object.keys(params).length === 0) return url;
        const prefix = url.match(/\?/) ? "&" : "?";
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
    }
    _flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
            this.sendBuffer.forEach((callback)=>callback());
            this.sendBuffer = [];
        }
    }
    _sendHeartbeat() {
        var _a;
        if (!this.isConnected()) return;
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null;
            this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            (_a = this.conn) === null || _a === void 0 || _a.close((0, _constants.WS_CLOSE_NORMAL), "hearbeat timeout");
            return;
        }
        this.pendingHeartbeatRef = this.makeRef();
        this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        this.setAuth(this.accessToken);
    }
}
exports.default = RealtimeClient;

},{"websocket":"1bC1O","./lib/constants":"anl6G","./lib/timer":"4A36U","./lib/serializer":"9Qi5Q","./RealtimeSubscription":"dxtkJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1bC1O":[function(require,module,exports) {
var _globalThis;
if (typeof globalThis === "object") _globalThis = globalThis;
else try {
    _globalThis = require("ed0cda9216905578");
} catch (error) {} finally{
    if (!_globalThis && typeof window !== "undefined") _globalThis = window;
    if (!_globalThis) throw new Error("Could not determine global this");
}
var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;
var websocket_version = require("75b392c864b28266");
/**
 * Expose a W3C WebSocket class with just one or two arguments.
 */ function W3CWebSocket(uri, protocols) {
    var native_instance;
    if (protocols) native_instance = new NativeWebSocket(uri, protocols);
    else native_instance = new NativeWebSocket(uri);
    /**
	 * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket
	 * class). Since it is an Object it will be returned as it is when creating an
	 * instance of W3CWebSocket via 'new W3CWebSocket()'.
	 *
	 * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2
	 */ return native_instance;
}
if (NativeWebSocket) [
    "CONNECTING",
    "OPEN",
    "CLOSING",
    "CLOSED"
].forEach(function(prop) {
    Object.defineProperty(W3CWebSocket, prop, {
        get: function() {
            return NativeWebSocket[prop];
        }
    });
});
/**
 * Module exports.
 */ module.exports = {
    "w3cwebsocket": NativeWebSocket ? W3CWebSocket : null,
    "version": websocket_version
};

},{"ed0cda9216905578":"hy7KT","75b392c864b28266":"bqDvR"}],"hy7KT":[function(require,module,exports) {
var naiveFallback = function() {
    if (typeof self === "object" && self) return self;
    if (typeof window === "object" && window) return window;
    throw new Error("Unable to resolve global `this`");
};
module.exports = function() {
    if (this) return this;
    // Unexpected strict mode (may happen if e.g. bundled into ESM module)
    // Fallback to standard globalThis if available
    if (typeof globalThis === "object" && globalThis) return globalThis;
    // Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
    // In all ES5+ engines global object inherits from Object.prototype
    // (if you approached one that doesn't please report)
    try {
        Object.defineProperty(Object.prototype, "__global__", {
            get: function() {
                return this;
            },
            configurable: true
        });
    } catch (error) {
        // Unfortunate case of updates to Object.prototype being restricted
        // via preventExtensions, seal or freeze
        return naiveFallback();
    }
    try {
        // Safari case (window.__global__ works, but __global__ does not)
        if (!__global__) return naiveFallback();
        return __global__;
    } finally{
        delete Object.prototype.__global__;
    }
}();

},{}],"bqDvR":[function(require,module,exports) {
module.exports = require("8124680469c7b411").version;

},{"8124680469c7b411":"8yFDf"}],"8yFDf":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["I\xf1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.34","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}');

},{}],"anl6G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
parcelHelpers.export(exports, "VSN", ()=>VSN);
parcelHelpers.export(exports, "DEFAULT_TIMEOUT", ()=>DEFAULT_TIMEOUT);
parcelHelpers.export(exports, "WS_CLOSE_NORMAL", ()=>WS_CLOSE_NORMAL);
parcelHelpers.export(exports, "SOCKET_STATES", ()=>SOCKET_STATES);
parcelHelpers.export(exports, "CHANNEL_STATES", ()=>CHANNEL_STATES);
parcelHelpers.export(exports, "CHANNEL_EVENTS", ()=>CHANNEL_EVENTS);
parcelHelpers.export(exports, "TRANSPORTS", ()=>TRANSPORTS);
parcelHelpers.export(exports, "CONNECTION_STATE", ()=>CONNECTION_STATE);
var _version = require("./version");
const DEFAULT_HEADERS = {
    "X-Client-Info": `realtime-js/${(0, _version.version)}`
};
const VSN = "1.0.0";
const DEFAULT_TIMEOUT = 10000;
const WS_CLOSE_NORMAL = 1000;
var SOCKET_STATES;
(function(SOCKET_STATES) {
    SOCKET_STATES[SOCKET_STATES["connecting"] = 0] = "connecting";
    SOCKET_STATES[SOCKET_STATES["open"] = 1] = "open";
    SOCKET_STATES[SOCKET_STATES["closing"] = 2] = "closing";
    SOCKET_STATES[SOCKET_STATES["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function(CHANNEL_STATES) {
    CHANNEL_STATES["closed"] = "closed";
    CHANNEL_STATES["errored"] = "errored";
    CHANNEL_STATES["joined"] = "joined";
    CHANNEL_STATES["joining"] = "joining";
    CHANNEL_STATES["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function(CHANNEL_EVENTS) {
    CHANNEL_EVENTS["close"] = "phx_close";
    CHANNEL_EVENTS["error"] = "phx_error";
    CHANNEL_EVENTS["join"] = "phx_join";
    CHANNEL_EVENTS["reply"] = "phx_reply";
    CHANNEL_EVENTS["leave"] = "phx_leave";
    CHANNEL_EVENTS["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function(TRANSPORTS) {
    TRANSPORTS["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));
var CONNECTION_STATE;
(function(CONNECTION_STATE) {
    CONNECTION_STATE["Connecting"] = "connecting";
    CONNECTION_STATE["Open"] = "open";
    CONNECTION_STATE["Closing"] = "closing";
    CONNECTION_STATE["Closed"] = "closed";
})(CONNECTION_STATE || (CONNECTION_STATE = {}));

},{"./version":"6XJ33","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6XJ33":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "1.7.5";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4A36U":[function(require,module,exports) {
/**
 * Creates a timer that accepts a `timerCalc` function to perform calculated timeout retries, such as exponential backoff.
 *
 * @example
 *    let reconnectTimer = new Timer(() => this.connect(), function(tries){
 *      return [1000, 5000, 10000][tries - 1] || 10000
 *    })
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 *    reconnectTimer.scheduleTimeout() // fires after 5000
 *    reconnectTimer.reset()
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Timer {
    constructor(callback, timerCalc){
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = undefined;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
    }
    reset() {
        this.tries = 0;
        clearTimeout(this.timer);
    }
    // Cancels any previous scheduleTimeout and schedules callback
    scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.tries = this.tries + 1;
            this.callback();
        }, this.timerCalc(this.tries + 1));
    }
}
exports.default = Timer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Qi5Q":[function(require,module,exports) {
// This file draws heavily from https://github.com/phoenixframework/phoenix/commit/cf098e9cf7a44ee6479d31d911a97d3c7430c6fe
// License: https://github.com/phoenixframework/phoenix/blob/master/LICENSE.md
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Serializer {
    constructor(){
        this.HEADER_LENGTH = 1;
    }
    decode(rawPayload, callback) {
        if (rawPayload.constructor === ArrayBuffer) return callback(this._binaryDecode(rawPayload));
        if (typeof rawPayload === "string") return callback(JSON.parse(rawPayload));
        return callback({});
    }
    _binaryDecode(buffer) {
        const view = new DataView(buffer);
        const decoder = new TextDecoder();
        return this._decodeBroadcast(buffer, view, decoder);
    }
    _decodeBroadcast(buffer, view, decoder) {
        const topicSize = view.getUint8(1);
        const eventSize = view.getUint8(2);
        let offset = this.HEADER_LENGTH + 2;
        const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
        offset = offset + topicSize;
        const event = decoder.decode(buffer.slice(offset, offset + eventSize));
        offset = offset + eventSize;
        const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
        return {
            ref: null,
            topic: topic,
            event: event,
            payload: data
        };
    }
}
exports.default = Serializer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxtkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("./lib/constants");
var _push = require("./lib/push");
var _pushDefault = parcelHelpers.interopDefault(_push);
var _timer = require("./lib/timer");
var _timerDefault = parcelHelpers.interopDefault(_timer);
class RealtimeSubscription {
    constructor(topic, params = {}, socket){
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = [];
        this.state = (0, _constants.CHANNEL_STATES).closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.timeout = this.socket.timeout;
        this.joinPush = new (0, _pushDefault.default)(this, (0, _constants.CHANNEL_EVENTS).join, this.params, this.timeout);
        this.rejoinTimer = new (0, _timerDefault.default)(()=>this.rejoinUntilConnected(), this.socket.reconnectAfterMs);
        this.joinPush.receive("ok", ()=>{
            this.state = (0, _constants.CHANNEL_STATES).joined;
            this.rejoinTimer.reset();
            this.pushBuffer.forEach((pushEvent)=>pushEvent.send());
            this.pushBuffer = [];
        });
        this.onClose(()=>{
            this.rejoinTimer.reset();
            this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
            this.state = (0, _constants.CHANNEL_STATES).closed;
            this.socket.remove(this);
        });
        this.onError((reason)=>{
            if (this.isLeaving() || this.isClosed()) return;
            this.socket.log("channel", `error ${this.topic}`, reason);
            this.state = (0, _constants.CHANNEL_STATES).errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive("timeout", ()=>{
            if (!this.isJoining()) return;
            this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
            this.state = (0, _constants.CHANNEL_STATES).errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.on((0, _constants.CHANNEL_EVENTS).reply, (payload, ref)=>{
            this.trigger(this.replyEventName(ref), payload);
        });
    }
    rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) this.rejoin();
    }
    subscribe(timeout = this.timeout) {
        if (this.joinedOnce) throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
        else {
            this.joinedOnce = true;
            this.rejoin(timeout);
            return this.joinPush;
        }
    }
    onClose(callback) {
        this.on((0, _constants.CHANNEL_EVENTS).close, callback);
    }
    onError(callback) {
        this.on((0, _constants.CHANNEL_EVENTS).error, (reason)=>callback(reason));
    }
    on(event, callback) {
        this.bindings.push({
            event,
            callback
        });
    }
    off(event) {
        this.bindings = this.bindings.filter((bind)=>bind.event !== event);
    }
    canPush() {
        return this.socket.isConnected() && this.isJoined();
    }
    push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let pushEvent = new (0, _pushDefault.default)(this, event, payload, timeout);
        if (this.canPush()) pushEvent.send();
        else {
            pushEvent.startTimeout();
            this.pushBuffer.push(pushEvent);
        }
        return pushEvent;
    }
    updateJoinPayload(payload) {
        this.joinPush.updatePayload(payload);
    }
    /**
     * Leaves the channel
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */ unsubscribe(timeout = this.timeout) {
        this.state = (0, _constants.CHANNEL_STATES).leaving;
        let onClose = ()=>{
            this.socket.log("channel", `leave ${this.topic}`);
            this.trigger((0, _constants.CHANNEL_EVENTS).close, "leave", this.joinRef());
        };
        // Destroy joinPush to avoid connection timeouts during unscription phase
        this.joinPush.destroy();
        let leavePush = new (0, _pushDefault.default)(this, (0, _constants.CHANNEL_EVENTS).leave, {}, timeout);
        leavePush.receive("ok", ()=>onClose()).receive("timeout", ()=>onClose());
        leavePush.send();
        if (!this.canPush()) leavePush.trigger("ok", {});
        return leavePush;
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     */ onMessage(event, payload, ref) {
        return payload;
    }
    isMember(topic) {
        return this.topic === topic;
    }
    joinRef() {
        return this.joinPush.ref;
    }
    rejoin(timeout = this.timeout) {
        if (this.isLeaving()) return;
        this.socket.leaveOpenTopic(this.topic);
        this.state = (0, _constants.CHANNEL_STATES).joining;
        this.joinPush.resend(timeout);
    }
    trigger(event, payload, ref) {
        let { close, error, leave, join } = (0, _constants.CHANNEL_EVENTS);
        let events = [
            close,
            error,
            leave,
            join
        ];
        if (ref && events.indexOf(event) >= 0 && ref !== this.joinRef()) return;
        let handledPayload = this.onMessage(event, payload, ref);
        if (payload && !handledPayload) throw "channel onMessage callbacks must return the payload, modified or unmodified";
        this.bindings.filter((bind)=>{
            // Bind all events if the user specifies a wildcard.
            if (bind.event === "*") return event === (payload === null || payload === void 0 ? void 0 : payload.type);
            else return bind.event === event;
        }).map((bind)=>bind.callback(handledPayload, ref));
    }
    replyEventName(ref) {
        return `chan_reply_${ref}`;
    }
    isClosed() {
        return this.state === (0, _constants.CHANNEL_STATES).closed;
    }
    isErrored() {
        return this.state === (0, _constants.CHANNEL_STATES).errored;
    }
    isJoined() {
        return this.state === (0, _constants.CHANNEL_STATES).joined;
    }
    isJoining() {
        return this.state === (0, _constants.CHANNEL_STATES).joining;
    }
    isLeaving() {
        return this.state === (0, _constants.CHANNEL_STATES).leaving;
    }
}
exports.default = RealtimeSubscription;

},{"./lib/constants":"anl6G","./lib/push":"9qoub","./lib/timer":"4A36U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qoub":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../lib/constants");
class Push {
    /**
     * Initializes the Push
     *
     * @param channel The Channel
     * @param event The event, for example `"phx_join"`
     * @param payload The payload, for example `{user_id: 123}`
     * @param timeout The push timeout in milliseconds
     */ constructor(channel, event, payload = {}, timeout = (0, _constants.DEFAULT_TIMEOUT)){
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = undefined;
        this.ref = "";
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
    }
    resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = "";
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
    }
    send() {
        if (this._hasReceived("timeout")) return;
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel.joinRef()
        });
    }
    updatePayload(payload) {
        this.payload = Object.assign(Object.assign({}, this.payload), payload);
    }
    receive(status, callback) {
        var _a;
        if (this._hasReceived(status)) callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
        this.recHooks.push({
            status,
            callback
        });
        return this;
    }
    startTimeout() {
        if (this.timeoutTimer) return;
        this.ref = this.channel.socket.makeRef();
        this.refEvent = this.channel.replyEventName(this.ref);
        const callback = (payload)=>{
            this._cancelRefEvent();
            this._cancelTimeout();
            this.receivedResp = payload;
            this._matchReceive(payload);
        };
        this.channel.on(this.refEvent, callback);
        this.timeoutTimer = setTimeout(()=>{
            this.trigger("timeout", {});
        }, this.timeout);
    }
    trigger(status, response) {
        if (this.refEvent) this.channel.trigger(this.refEvent, {
            status,
            response
        });
    }
    destroy() {
        this._cancelRefEvent();
        this._cancelTimeout();
    }
    _cancelRefEvent() {
        if (!this.refEvent) return;
        this.channel.off(this.refEvent);
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = undefined;
    }
    _matchReceive({ status, response }) {
        this.recHooks.filter((h)=>h.status === status).forEach((h)=>h.callback(response));
    }
    _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
    }
}
exports.default = Push;

},{"../lib/constants":"anl6G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7GrJf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageClient", ()=>(0, _storageClient.StorageClient));
parcelHelpers.export(exports, "SupabaseStorageClient", ()=>(0, _storageClient.StorageClient));
var _storageClient = require("./StorageClient");
var _types = require("./lib/types");
parcelHelpers.exportAll(_types, exports);

},{"./StorageClient":"b3iRp","./lib/types":"3VywR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3iRp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageClient", ()=>StorageClient);
var _lib = require("./lib");
class StorageClient extends (0, _lib.StorageBucketApi) {
    constructor(url, headers = {}, fetch){
        super(url, headers, fetch);
    }
    /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */ from(id) {
        return new (0, _lib.StorageFileApi)(this.url, this.headers, id, this.fetch);
    }
}

},{"./lib":"e0ve6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0ve6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _storageBucketApi = require("./StorageBucketApi");
parcelHelpers.exportAll(_storageBucketApi, exports);
var _storageFileApi = require("./StorageFileApi");
parcelHelpers.exportAll(_storageFileApi, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);

},{"./StorageBucketApi":"h3mFM","./StorageFileApi":"8PWHS","./types":false,"./constants":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h3mFM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageBucketApi", ()=>StorageBucketApi);
var _constants = require("./constants");
var _fetch = require("./fetch");
var _helpers = require("./helpers");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class StorageBucketApi {
    constructor(url, headers = {}, fetch){
        this.url = url;
        this.headers = Object.assign(Object.assign({}, (0, _constants.DEFAULT_HEADERS)), headers);
        this.fetch = (0, _helpers.resolveFetch)(fetch);
    }
    /**
     * Retrieves the details of all Storage buckets within an existing project.
     */ listBuckets() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.get)(this.fetch, `${this.url}/bucket`, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    /**
     * Retrieves the details of an existing Storage bucket.
     *
     * @param id The unique identifier of the bucket you would like to retrieve.
     */ getBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.get)(this.fetch, `${this.url}/bucket/${id}`, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    /**
     * Creates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     * @returns newly created bucket id
     */ createBucket(id, options = {
        public: false
    }) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/bucket`, {
                    id,
                    name: id,
                    public: options.public
                }, {
                    headers: this.headers
                });
                return {
                    data: data.name,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    /**
     * Updates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are updating.
     */ updateBucket(id, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.put)(this.fetch, `${this.url}/bucket/${id}`, {
                    id,
                    name: id,
                    public: options.public
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    /**
     * Removes all objects inside a single bucket.
     *
     * @param id The unique identifier of the bucket you would like to empty.
     */ emptyBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/bucket/${id}/empty`, {}, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    /**
     * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
     * You must first `empty()` the bucket.
     *
     * @param id The unique identifier of the bucket you would like to delete.
     */ deleteBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.remove)(this.fetch, `${this.url}/bucket/${id}`, {}, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
}

},{"./constants":"hrmvM","./fetch":"j0T6k","./helpers":"k4Zmd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hrmvM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
var _version = require("./version");
const DEFAULT_HEADERS = {
    "X-Client-Info": `storage-js/${(0, _version.version)}`
};

},{"./version":"bP0eb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bP0eb":[function(require,module,exports) {
// generated by genversion
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "1.7.3";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j0T6k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "post", ()=>post);
parcelHelpers.export(exports, "put", ()=>put);
parcelHelpers.export(exports, "remove", ()=>remove);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _getErrorMessage = (err)=>err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const handleError = (error, reject)=>{
    if (typeof error.json !== "function") return reject(error);
    error.json().then((err)=>{
        return reject({
            message: _getErrorMessage(err),
            status: (error === null || error === void 0 ? void 0 : error.status) || 500
        });
    });
};
const _getRequestParams = (method, options, parameters, body)=>{
    const params = {
        method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET") return params;
    params.headers = Object.assign({
        "Content-Type": "application/json"
    }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
};
function _handleRequest(fetcher, method, url, options, parameters, body) {
    return __awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve, reject)=>{
            fetcher(url, _getRequestParams(method, options, parameters, body)).then((result)=>{
                if (!result.ok) throw result;
                if (options === null || options === void 0 ? void 0 : options.noResolveJson) return resolve(result);
                return result.json();
            }).then((data)=>resolve(data)).catch((error)=>handleError(error, reject));
        });
    });
}
function get(fetcher, url, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "GET", url, options, parameters);
    });
}
function post(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "POST", url, options, parameters, body);
    });
}
function put(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "PUT", url, options, parameters, body);
    });
}
function remove(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "DELETE", url, options, parameters, body);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k4Zmd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveFetch", ()=>resolveFetch);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>__awaiter(void 0, void 0, void 0, function*() {
            return yield (yield require("902db32a0c101488")).fetch(...args);
        });
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};

},{"902db32a0c101488":"Un9Cg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8PWHS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageFileApi", ()=>StorageFileApi);
var _fetch = require("./fetch");
var _helpers = require("./helpers");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DEFAULT_SEARCH_OPTIONS = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
};
const DEFAULT_FILE_OPTIONS = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: false
};
class StorageFileApi {
    constructor(url, headers = {}, bucketId, fetch){
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
        this.fetch = (0, _helpers.resolveFetch)(fetch);
    }
    /**
     * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
     *
     * @param method HTTP method.
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     * @param fileOptions HTTP headers.
     * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
     * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
     * `upsert`: boolean, whether to perform an upsert.
     */ uploadOrUpdate(method, path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let body;
                const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), method === "POST" && {
                    "x-upsert": String(options.upsert)
                });
                if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append("cacheControl", options.cacheControl);
                    body.append("", fileBody);
                } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append("cacheControl", options.cacheControl);
                } else {
                    body = fileBody;
                    headers["cache-control"] = `max-age=${options.cacheControl}`;
                    headers["content-type"] = options.contentType;
                }
                const cleanPath = this._removeEmptyFolders(path);
                const _path = this._getFinalPath(cleanPath);
                const res = yield this.fetch(`${this.url}/object/${_path}`, {
                    method,
                    body: body,
                    headers
                });
                if (res.ok) // const data = await res.json()
                // temporary fix till backend is updated to the latest storage-api version
                return {
                    data: {
                        Key: _path
                    },
                    error: null
                };
                else {
                    const error = yield res.json();
                    return {
                        data: null,
                        error
                    };
                }
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    /**
     * Uploads a file to an existing bucket.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     * @param fileOptions HTTP headers.
     * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
     * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
     * `upsert`: boolean, whether to perform an upsert.
     */ upload(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
        });
    }
    /**
     * Replaces an existing file at the specified path with a new one.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     * @param fileOptions HTTP headers.
     * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
     * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
     * `upsert`: boolean, whether to perform an upsert.
     */ update(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
        });
    }
    /**
     * Moves an existing file.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
     */ move(fromPath, toPath) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/move`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    /**
     * Copies an existing file.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
     */ copy(fromPath, toPath) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/copy`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    /**
     * Create signed URL to download file without requiring permissions. This URL can be valid for a set number of seconds.
     *
     * @param path The file path to be downloaded, including the current file name. For example `folder/image.png`.
     * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
     */ createSignedUrl(path, expiresIn) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const _path = this._getFinalPath(path);
                let data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/sign/${_path}`, {
                    expiresIn
                }, {
                    headers: this.headers
                });
                const signedURL = `${this.url}${data.signedURL}`;
                data = {
                    signedURL
                };
                return {
                    data,
                    error: null,
                    signedURL
                };
            } catch (error) {
                return {
                    data: null,
                    error,
                    signedURL: null
                };
            }
        });
    }
    /**
     * Create signed URLs to download files without requiring permissions. These URLs can be valid for a set number of seconds.
     *
     * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
     * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
     */ createSignedUrls(paths, expiresIn) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn,
                    paths
                }, {
                    headers: this.headers
                });
                return {
                    data: data.map((datum)=>Object.assign(Object.assign({}, datum), {
                            signedURL: datum.signedURL ? `${this.url}${datum.signedURL}` : null
                        })),
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    /**
     * Downloads a file.
     *
     * @param path The file path to be downloaded, including the path and file name. For example `folder/image.png`.
     */ download(path) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const _path = this._getFinalPath(path);
                const res = yield (0, _fetch.get)(this.fetch, `${this.url}/object/${_path}`, {
                    headers: this.headers,
                    noResolveJson: true
                });
                const data = yield res.blob();
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    /**
     * Retrieve URLs for assets in public buckets
     *
     * @param path The file path to be downloaded, including the path and file name. For example `folder/image.png`.
     */ getPublicUrl(path) {
        try {
            const _path = this._getFinalPath(path);
            const publicURL = `${this.url}/object/public/${_path}`;
            const data = {
                publicURL
            };
            return {
                data,
                error: null,
                publicURL
            };
        } catch (error) {
            return {
                data: null,
                error,
                publicURL: null
            };
        }
    }
    /**
     * Deletes files within the same bucket
     *
     * @param paths An array of files to be deleted, including the path and file name. For example [`folder/image.png`].
     */ remove(paths) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.remove)(this.fetch, `${this.url}/object/${this.bucketId}`, {
                    prefixes: paths
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    /**
     * Get file metadata
     * @param id the file id to retrieve metadata
     */ // async getMetadata(id: string): Promise<{ data: Metadata | null; error: Error | null }> {
    //   try {
    //     const data = await get(`${this.url}/metadata/${id}`, { headers: this.headers })
    //     return { data, error: null }
    //   } catch (error) {
    //     return { data: null, error }
    //   }
    // }
    /**
     * Update file metadata
     * @param id the file id to update metadata
     * @param meta the new file metadata
     */ // async updateMetadata(
    //   id: string,
    //   meta: Metadata
    // ): Promise<{ data: Metadata | null; error: Error | null }> {
    //   try {
    //     const data = await post(`${this.url}/metadata/${id}`, { ...meta }, { headers: this.headers })
    //     return { data, error: null }
    //   } catch (error) {
    //     return { data: null, error }
    //   }
    // }
    /**
     * Lists all the files within a bucket.
     * @param path The folder path.
     * @param options Search options, including `limit`, `offset`, `sortBy`, and `search`.
     * @param parameters Fetch parameters, currently only supports `signal`, which is an AbortController's signal
     */ list(path, options, parameters) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), {
                    prefix: path || ""
                });
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, {
                    headers: this.headers
                }, parameters);
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
    _getFinalPath(path) {
        return `${this.bucketId}/${path}`;
    }
    _removeEmptyFolders(path) {
        return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
}

},{"./fetch":"j0T6k","./helpers":"k4Zmd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3VywR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqa9p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionsClient", ()=>FunctionsClient);
var _helper = require("./helper");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FunctionsClient {
    constructor(url, { headers = {}, customFetch } = {}){
        this.url = url;
        this.headers = headers;
        this.fetch = (0, _helper.resolveFetch)(customFetch);
    }
    /**
     * Updates the authorization header
     * @params token - the new jwt token sent in the authorisation header
     */ setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - the name of the function to invoke
     * @param invokeOptions - object with the following properties
     * `headers`: object representing the headers to send with the request
     * `body`: the body of the request
     * `responseType`: how the response should be parsed. The default is `json`
     */ invoke(functionName, invokeOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const { headers, body } = invokeOptions !== null && invokeOptions !== void 0 ? invokeOptions : {};
                const response = yield this.fetch(`${this.url}/${functionName}`, {
                    method: "POST",
                    headers: Object.assign({}, this.headers, headers),
                    body
                });
                const isRelayError = response.headers.get("x-relay-error");
                if (isRelayError && isRelayError === "true") return {
                    data: null,
                    error: new Error((yield response.text()))
                };
                let data;
                const { responseType } = invokeOptions !== null && invokeOptions !== void 0 ? invokeOptions : {};
                if (!responseType || responseType === "json") data = yield response.json();
                else if (responseType === "arrayBuffer") data = yield response.arrayBuffer();
                else if (responseType === "blob") data = yield response.blob();
                else data = yield response.text();
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
}

},{"./helper":"lOQd0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lOQd0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveFetch", ()=>resolveFetch);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>__awaiter(void 0, void 0, void 0, function*() {
            return yield (yield require("ec8f848e49b367fa")).fetch(...args);
        });
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};

},{"ec8f848e49b367fa":"Un9Cg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3Mdm1","ifUNd"], "ifUNd", "parcelRequire94c2")

//# sourceMappingURL=index.0dad9384.js.map
