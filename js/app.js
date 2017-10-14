/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	__webpack_require__(5);
	
	var isSupportedBrowser = Modernizr.flexwrap && (Modernizr.flexbox || Modernizr.flexboxtweener);
	
	if (!isSupportedBrowser) {
	  window.location.href = '/browser-update.html';
	}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	/*! modernizr 3.5.0 (Custom Build) | MIT *
	 * https://modernizr.com/download/?-backgroundcliptext-flexbox-flexboxlegacy-flexboxtweener-flexwrap-setclasses !*/
	"use strict";
	
	!(function (e, n, t) {
	  function r(e, n) {
	    return typeof e === n;
	  }function o() {
	    var e, n, t, o, s, i, l;for (var a in C) if (C.hasOwnProperty(a)) {
	      if ((e = [], n = C[a], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) i = e[s], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = o : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = o), x.push((o ? "" : "no-") + l.join("-"));
	    }
	  }function s(e) {
	    var n = S.className,
	        t = Modernizr._config.classPrefix || "";if ((b && (n = n.baseVal), Modernizr._config.enableJSClass)) {
	      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");n = n.replace(r, "$1" + t + "js$2");
	    }Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), b ? S.className.baseVal = n : S.className = n);
	  }function i(e, n) {
	    return !! ~("" + e).indexOf(n);
	  }function l() {
	    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : b ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
	  }function a(e) {
	    return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
	      return n + t.toUpperCase();
	    }).replace(/^-/, "");
	  }function f(e, n) {
	    return function () {
	      return e.apply(n, arguments);
	    };
	  }function u(e, n, t) {
	    var o;for (var s in e) if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? f(o, t || n) : o);return !1;
	  }function d(e) {
	    return e.replace(/([A-Z])/g, function (e, n) {
	      return "-" + n.toLowerCase();
	    }).replace(/^ms-/, "-ms-");
	  }function c(n, t, r) {
	    var o;if ("getComputedStyle" in e) {
	      o = getComputedStyle.call(e, n, t);var s = e.console;if (null !== o) r && (o = o.getPropertyValue(r));else if (s) {
	        var i = s.error ? "error" : "log";s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
	      }
	    } else o = !t && n.currentStyle && n.currentStyle[r];return o;
	  }function p() {
	    var e = n.body;return e || (e = l(b ? "svg" : "body"), e.fake = !0), e;
	  }function m(e, t, r, o) {
	    var s,
	        i,
	        a,
	        f,
	        u = "modernizr",
	        d = l("div"),
	        c = p();if (parseInt(r, 10)) for (; r--;) a = l("div"), a.id = o ? o[r] : u + (r + 1), d.appendChild(a);return s = l("style"), s.type = "text/css", s.id = "s" + u, (c.fake ? c : d).appendChild(s), c.appendChild(d), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), d.id = u, c.fake && (c.style.background = "", c.style.overflow = "hidden", f = S.style.overflow, S.style.overflow = "hidden", S.appendChild(c)), i = t(d, e), c.fake ? (c.parentNode.removeChild(c), S.style.overflow = f, S.offsetHeight) : d.parentNode.removeChild(d), !!i;
	  }function g(n, r) {
	    var o = n.length;if ("CSS" in e && "supports" in e.CSS) {
	      for (; o--;) if (e.CSS.supports(d(n[o]), r)) return !0;return !1;
	    }if ("CSSSupportsRule" in e) {
	      for (var s = []; o--;) s.push("(" + d(n[o]) + ":" + r + ")");return s = s.join(" or "), m("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
	        return "absolute" == c(e, null, "position");
	      });
	    }return t;
	  }function y(e, n, o, s) {
	    function f() {
	      d && (delete E.style, delete E.modElem);
	    }if ((s = r(s, "undefined") ? !1 : s, !r(o, "undefined"))) {
	      var u = g(e, o);if (!r(u, "undefined")) return u;
	    }for (var d, c, p, m, y, v = ["modernizr", "tspan", "samp"]; !E.style && v.length;) d = !0, E.modElem = l(v.shift()), E.style = E.modElem.style;for (p = e.length, c = 0; p > c; c++) if ((m = e[c], y = E.style[m], i(m, "-") && (m = a(m)), E.style[m] !== t)) {
	      if (s || r(o, "undefined")) return f(), "pfx" == n ? m : !0;try {
	        E.style[m] = o;
	      } catch (h) {}if (E.style[m] != y) return f(), "pfx" == n ? m : !0;
	    }return f(), !1;
	  }function v(e, n, t, o, s) {
	    var i = e.charAt(0).toUpperCase() + e.slice(1),
	        l = (e + " " + P.join(i + " ") + i).split(" ");return r(n, "string") || r(n, "undefined") ? y(l, n, o, s) : (l = (e + " " + T.join(i + " ") + i).split(" "), u(l, n, t));
	  }function h(e, n, r) {
	    return v(e, t, t, n, r);
	  }var x = [],
	      C = [],
	      w = { _version: "3.5.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function on(e, n) {
	      var t = this;setTimeout(function () {
	        n(t[e]);
	      }, 0);
	    }, addTest: function addTest(e, n, t) {
	      C.push({ name: e, fn: n, options: t });
	    }, addAsyncTest: function addAsyncTest(e) {
	      C.push({ name: null, fn: e });
	    } },
	      Modernizr = function Modernizr() {};Modernizr.prototype = w, Modernizr = new Modernizr();var S = n.documentElement,
	      b = "svg" === S.nodeName.toLowerCase(),
	      _ = "Moz O ms Webkit",
	      T = w._config.usePrefixes ? _.toLowerCase().split(" ") : [];w._domPrefixes = T;var P = w._config.usePrefixes ? _.split(" ") : [];w._cssomPrefixes = P;var z = { elem: l("modernizr") };Modernizr._q.push(function () {
	    delete z.elem;
	  });var E = { style: z.elem.style };Modernizr._q.unshift(function () {
	    delete E.style;
	  }), w.testAllProps = v, w.testAllProps = h, Modernizr.addTest("flexboxlegacy", h("boxDirection", "reverse", !0)), Modernizr.addTest("flexboxtweener", h("flexAlign", "end", !0)), Modernizr.addTest("backgroundcliptext", function () {
	    return h("backgroundClip", "text");
	  }), Modernizr.addTest("flexbox", h("flexBasis", "1px", !0)), Modernizr.addTest("flexwrap", h("flexWrap", "wrap", !0)), o(), s(x), delete w.addTest, delete w.addAsyncTest;for (var N = 0; N < Modernizr._q.length; N++) Modernizr._q[N]();e.Modernizr = Modernizr;
	})(window, document);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map