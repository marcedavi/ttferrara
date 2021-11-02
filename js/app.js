(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // resources/js/swiper-bundle.min.js
  var require_swiper_bundle_min = __commonJS({
    "resources/js/swiper-bundle.min.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis != "undefined" ? globalThis : e || self).Swiper = t();
      }(exports, function() {
        "use strict";
        function e(e2) {
          return e2 !== null && typeof e2 == "object" && "constructor" in e2 && e2.constructor === Object;
        }
        function t(s3 = {}, a2 = {}) {
          Object.keys(a2).forEach((i2) => {
            s3[i2] === void 0 ? s3[i2] = a2[i2] : e(a2[i2]) && e(s3[i2]) && Object.keys(a2[i2]).length > 0 && t(s3[i2], a2[i2]);
          });
        }
        const s2 = { body: {}, addEventListener() {
        }, removeEventListener() {
        }, activeElement: { blur() {
        }, nodeName: "" }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({ initEvent() {
        } }), createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {
        }, getElementsByTagName: () => [] }), createElementNS: () => ({}), importNode: () => null, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
        function a() {
          const e2 = typeof document != "undefined" ? document : {};
          return t(e2, s2), e2;
        }
        const i = { document: s2, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() {
        }, pushState() {
        }, go() {
        }, back() {
        } }, CustomEvent: function() {
          return this;
        }, addEventListener() {
        }, removeEventListener() {
        }, getComputedStyle: () => ({ getPropertyValue: () => "" }), Image() {
        }, Date() {
        }, screen: {}, setTimeout() {
        }, clearTimeout() {
        }, matchMedia: () => ({}), requestAnimationFrame: (e2) => typeof setTimeout == "undefined" ? (e2(), null) : setTimeout(e2, 0), cancelAnimationFrame(e2) {
          typeof setTimeout != "undefined" && clearTimeout(e2);
        } };
        function r() {
          const e2 = typeof window != "undefined" ? window : {};
          return t(e2, i), e2;
        }
        class n extends Array {
          constructor(e2) {
            super(...e2 || []), function(e3) {
              const t2 = e3.__proto__;
              Object.defineProperty(e3, "__proto__", { get: () => t2, set(e4) {
                t2.__proto__ = e4;
              } });
            }(this);
          }
        }
        function l(e2 = []) {
          const t2 = [];
          return e2.forEach((e3) => {
            Array.isArray(e3) ? t2.push(...l(e3)) : t2.push(e3);
          }), t2;
        }
        function o(e2, t2) {
          return Array.prototype.filter.call(e2, t2);
        }
        function d(e2, t2) {
          const s3 = r(), i2 = a();
          let l2 = [];
          if (!t2 && e2 instanceof n)
            return e2;
          if (!e2)
            return new n(l2);
          if (typeof e2 == "string") {
            const s4 = e2.trim();
            if (s4.indexOf("<") >= 0 && s4.indexOf(">") >= 0) {
              let e3 = "div";
              s4.indexOf("<li") === 0 && (e3 = "ul"), s4.indexOf("<tr") === 0 && (e3 = "tbody"), s4.indexOf("<td") !== 0 && s4.indexOf("<th") !== 0 || (e3 = "tr"), s4.indexOf("<tbody") === 0 && (e3 = "table"), s4.indexOf("<option") === 0 && (e3 = "select");
              const t3 = i2.createElement(e3);
              t3.innerHTML = s4;
              for (let e4 = 0; e4 < t3.childNodes.length; e4 += 1)
                l2.push(t3.childNodes[e4]);
            } else
              l2 = function(e3, t3) {
                if (typeof e3 != "string")
                  return [e3];
                const s5 = [], a2 = t3.querySelectorAll(e3);
                for (let e4 = 0; e4 < a2.length; e4 += 1)
                  s5.push(a2[e4]);
                return s5;
              }(e2.trim(), t2 || i2);
          } else if (e2.nodeType || e2 === s3 || e2 === i2)
            l2.push(e2);
          else if (Array.isArray(e2)) {
            if (e2 instanceof n)
              return e2;
            l2 = e2;
          }
          return new n(function(e3) {
            const t3 = [];
            for (let s4 = 0; s4 < e3.length; s4 += 1)
              t3.indexOf(e3[s4]) === -1 && t3.push(e3[s4]);
            return t3;
          }(l2));
        }
        d.fn = n.prototype;
        const c = { addClass: function(...e2) {
          const t2 = l(e2.map((e3) => e3.split(" ")));
          return this.forEach((e3) => {
            e3.classList.add(...t2);
          }), this;
        }, removeClass: function(...e2) {
          const t2 = l(e2.map((e3) => e3.split(" ")));
          return this.forEach((e3) => {
            e3.classList.remove(...t2);
          }), this;
        }, hasClass: function(...e2) {
          const t2 = l(e2.map((e3) => e3.split(" ")));
          return o(this, (e3) => t2.filter((t3) => e3.classList.contains(t3)).length > 0).length > 0;
        }, toggleClass: function(...e2) {
          const t2 = l(e2.map((e3) => e3.split(" ")));
          this.forEach((e3) => {
            t2.forEach((t3) => {
              e3.classList.toggle(t3);
            });
          });
        }, attr: function(e2, t2) {
          if (arguments.length === 1 && typeof e2 == "string")
            return this[0] ? this[0].getAttribute(e2) : void 0;
          for (let s3 = 0; s3 < this.length; s3 += 1)
            if (arguments.length === 2)
              this[s3].setAttribute(e2, t2);
            else
              for (const t3 in e2)
                this[s3][t3] = e2[t3], this[s3].setAttribute(t3, e2[t3]);
          return this;
        }, removeAttr: function(e2) {
          for (let t2 = 0; t2 < this.length; t2 += 1)
            this[t2].removeAttribute(e2);
          return this;
        }, transform: function(e2) {
          for (let t2 = 0; t2 < this.length; t2 += 1)
            this[t2].style.transform = e2;
          return this;
        }, transition: function(e2) {
          for (let t2 = 0; t2 < this.length; t2 += 1)
            this[t2].style.transitionDuration = typeof e2 != "string" ? `${e2}ms` : e2;
          return this;
        }, on: function(...e2) {
          let [t2, s3, a2, i2] = e2;
          function r2(e3) {
            const t3 = e3.target;
            if (!t3)
              return;
            const i3 = e3.target.dom7EventData || [];
            if (i3.indexOf(e3) < 0 && i3.unshift(e3), d(t3).is(s3))
              a2.apply(t3, i3);
            else {
              const e4 = d(t3).parents();
              for (let t4 = 0; t4 < e4.length; t4 += 1)
                d(e4[t4]).is(s3) && a2.apply(e4[t4], i3);
            }
          }
          function n2(e3) {
            const t3 = e3 && e3.target && e3.target.dom7EventData || [];
            t3.indexOf(e3) < 0 && t3.unshift(e3), a2.apply(this, t3);
          }
          typeof e2[1] == "function" && ([t2, a2, i2] = e2, s3 = void 0), i2 || (i2 = false);
          const l2 = t2.split(" ");
          let o2;
          for (let e3 = 0; e3 < this.length; e3 += 1) {
            const t3 = this[e3];
            if (s3)
              for (o2 = 0; o2 < l2.length; o2 += 1) {
                const e4 = l2[o2];
                t3.dom7LiveListeners || (t3.dom7LiveListeners = {}), t3.dom7LiveListeners[e4] || (t3.dom7LiveListeners[e4] = []), t3.dom7LiveListeners[e4].push({ listener: a2, proxyListener: r2 }), t3.addEventListener(e4, r2, i2);
              }
            else
              for (o2 = 0; o2 < l2.length; o2 += 1) {
                const e4 = l2[o2];
                t3.dom7Listeners || (t3.dom7Listeners = {}), t3.dom7Listeners[e4] || (t3.dom7Listeners[e4] = []), t3.dom7Listeners[e4].push({ listener: a2, proxyListener: n2 }), t3.addEventListener(e4, n2, i2);
              }
          }
          return this;
        }, off: function(...e2) {
          let [t2, s3, a2, i2] = e2;
          typeof e2[1] == "function" && ([t2, a2, i2] = e2, s3 = void 0), i2 || (i2 = false);
          const r2 = t2.split(" ");
          for (let e3 = 0; e3 < r2.length; e3 += 1) {
            const t3 = r2[e3];
            for (let e4 = 0; e4 < this.length; e4 += 1) {
              const r3 = this[e4];
              let n2;
              if (!s3 && r3.dom7Listeners ? n2 = r3.dom7Listeners[t3] : s3 && r3.dom7LiveListeners && (n2 = r3.dom7LiveListeners[t3]), n2 && n2.length)
                for (let e5 = n2.length - 1; e5 >= 0; e5 -= 1) {
                  const s4 = n2[e5];
                  a2 && s4.listener === a2 || a2 && s4.listener && s4.listener.dom7proxy && s4.listener.dom7proxy === a2 ? (r3.removeEventListener(t3, s4.proxyListener, i2), n2.splice(e5, 1)) : a2 || (r3.removeEventListener(t3, s4.proxyListener, i2), n2.splice(e5, 1));
                }
            }
          }
          return this;
        }, trigger: function(...e2) {
          const t2 = r(), s3 = e2[0].split(" "), a2 = e2[1];
          for (let i2 = 0; i2 < s3.length; i2 += 1) {
            const r2 = s3[i2];
            for (let s4 = 0; s4 < this.length; s4 += 1) {
              const i3 = this[s4];
              if (t2.CustomEvent) {
                const s5 = new t2.CustomEvent(r2, { detail: a2, bubbles: true, cancelable: true });
                i3.dom7EventData = e2.filter((e3, t3) => t3 > 0), i3.dispatchEvent(s5), i3.dom7EventData = [], delete i3.dom7EventData;
              }
            }
          }
          return this;
        }, transitionEnd: function(e2) {
          const t2 = this;
          return e2 && t2.on("transitionend", function s3(a2) {
            a2.target === this && (e2.call(this, a2), t2.off("transitionend", s3));
          }), this;
        }, outerWidth: function(e2) {
          if (this.length > 0) {
            if (e2) {
              const e3 = this.styles();
              return this[0].offsetWidth + parseFloat(e3.getPropertyValue("margin-right")) + parseFloat(e3.getPropertyValue("margin-left"));
            }
            return this[0].offsetWidth;
          }
          return null;
        }, outerHeight: function(e2) {
          if (this.length > 0) {
            if (e2) {
              const e3 = this.styles();
              return this[0].offsetHeight + parseFloat(e3.getPropertyValue("margin-top")) + parseFloat(e3.getPropertyValue("margin-bottom"));
            }
            return this[0].offsetHeight;
          }
          return null;
        }, styles: function() {
          const e2 = r();
          return this[0] ? e2.getComputedStyle(this[0], null) : {};
        }, offset: function() {
          if (this.length > 0) {
            const e2 = r(), t2 = a(), s3 = this[0], i2 = s3.getBoundingClientRect(), n2 = t2.body, l2 = s3.clientTop || n2.clientTop || 0, o2 = s3.clientLeft || n2.clientLeft || 0, d2 = s3 === e2 ? e2.scrollY : s3.scrollTop, c2 = s3 === e2 ? e2.scrollX : s3.scrollLeft;
            return { top: i2.top + d2 - l2, left: i2.left + c2 - o2 };
          }
          return null;
        }, css: function(e2, t2) {
          const s3 = r();
          let a2;
          if (arguments.length === 1) {
            if (typeof e2 != "string") {
              for (a2 = 0; a2 < this.length; a2 += 1)
                for (const t3 in e2)
                  this[a2].style[t3] = e2[t3];
              return this;
            }
            if (this[0])
              return s3.getComputedStyle(this[0], null).getPropertyValue(e2);
          }
          if (arguments.length === 2 && typeof e2 == "string") {
            for (a2 = 0; a2 < this.length; a2 += 1)
              this[a2].style[e2] = t2;
            return this;
          }
          return this;
        }, each: function(e2) {
          return e2 ? (this.forEach((t2, s3) => {
            e2.apply(t2, [t2, s3]);
          }), this) : this;
        }, html: function(e2) {
          if (e2 === void 0)
            return this[0] ? this[0].innerHTML : null;
          for (let t2 = 0; t2 < this.length; t2 += 1)
            this[t2].innerHTML = e2;
          return this;
        }, text: function(e2) {
          if (e2 === void 0)
            return this[0] ? this[0].textContent.trim() : null;
          for (let t2 = 0; t2 < this.length; t2 += 1)
            this[t2].textContent = e2;
          return this;
        }, is: function(e2) {
          const t2 = r(), s3 = a(), i2 = this[0];
          let l2, o2;
          if (!i2 || e2 === void 0)
            return false;
          if (typeof e2 == "string") {
            if (i2.matches)
              return i2.matches(e2);
            if (i2.webkitMatchesSelector)
              return i2.webkitMatchesSelector(e2);
            if (i2.msMatchesSelector)
              return i2.msMatchesSelector(e2);
            for (l2 = d(e2), o2 = 0; o2 < l2.length; o2 += 1)
              if (l2[o2] === i2)
                return true;
            return false;
          }
          if (e2 === s3)
            return i2 === s3;
          if (e2 === t2)
            return i2 === t2;
          if (e2.nodeType || e2 instanceof n) {
            for (l2 = e2.nodeType ? [e2] : e2, o2 = 0; o2 < l2.length; o2 += 1)
              if (l2[o2] === i2)
                return true;
            return false;
          }
          return false;
        }, index: function() {
          let e2, t2 = this[0];
          if (t2) {
            for (e2 = 0; (t2 = t2.previousSibling) !== null; )
              t2.nodeType === 1 && (e2 += 1);
            return e2;
          }
        }, eq: function(e2) {
          if (e2 === void 0)
            return this;
          const t2 = this.length;
          if (e2 > t2 - 1)
            return d([]);
          if (e2 < 0) {
            const s3 = t2 + e2;
            return d(s3 < 0 ? [] : [this[s3]]);
          }
          return d([this[e2]]);
        }, append: function(...e2) {
          let t2;
          const s3 = a();
          for (let a2 = 0; a2 < e2.length; a2 += 1) {
            t2 = e2[a2];
            for (let e3 = 0; e3 < this.length; e3 += 1)
              if (typeof t2 == "string") {
                const a3 = s3.createElement("div");
                for (a3.innerHTML = t2; a3.firstChild; )
                  this[e3].appendChild(a3.firstChild);
              } else if (t2 instanceof n)
                for (let s4 = 0; s4 < t2.length; s4 += 1)
                  this[e3].appendChild(t2[s4]);
              else
                this[e3].appendChild(t2);
          }
          return this;
        }, prepend: function(e2) {
          const t2 = a();
          let s3, i2;
          for (s3 = 0; s3 < this.length; s3 += 1)
            if (typeof e2 == "string") {
              const a2 = t2.createElement("div");
              for (a2.innerHTML = e2, i2 = a2.childNodes.length - 1; i2 >= 0; i2 -= 1)
                this[s3].insertBefore(a2.childNodes[i2], this[s3].childNodes[0]);
            } else if (e2 instanceof n)
              for (i2 = 0; i2 < e2.length; i2 += 1)
                this[s3].insertBefore(e2[i2], this[s3].childNodes[0]);
            else
              this[s3].insertBefore(e2, this[s3].childNodes[0]);
          return this;
        }, next: function(e2) {
          return this.length > 0 ? e2 ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e2) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
        }, nextAll: function(e2) {
          const t2 = [];
          let s3 = this[0];
          if (!s3)
            return d([]);
          for (; s3.nextElementSibling; ) {
            const a2 = s3.nextElementSibling;
            e2 ? d(a2).is(e2) && t2.push(a2) : t2.push(a2), s3 = a2;
          }
          return d(t2);
        }, prev: function(e2) {
          if (this.length > 0) {
            const t2 = this[0];
            return e2 ? t2.previousElementSibling && d(t2.previousElementSibling).is(e2) ? d([t2.previousElementSibling]) : d([]) : t2.previousElementSibling ? d([t2.previousElementSibling]) : d([]);
          }
          return d([]);
        }, prevAll: function(e2) {
          const t2 = [];
          let s3 = this[0];
          if (!s3)
            return d([]);
          for (; s3.previousElementSibling; ) {
            const a2 = s3.previousElementSibling;
            e2 ? d(a2).is(e2) && t2.push(a2) : t2.push(a2), s3 = a2;
          }
          return d(t2);
        }, parent: function(e2) {
          const t2 = [];
          for (let s3 = 0; s3 < this.length; s3 += 1)
            this[s3].parentNode !== null && (e2 ? d(this[s3].parentNode).is(e2) && t2.push(this[s3].parentNode) : t2.push(this[s3].parentNode));
          return d(t2);
        }, parents: function(e2) {
          const t2 = [];
          for (let s3 = 0; s3 < this.length; s3 += 1) {
            let a2 = this[s3].parentNode;
            for (; a2; )
              e2 ? d(a2).is(e2) && t2.push(a2) : t2.push(a2), a2 = a2.parentNode;
          }
          return d(t2);
        }, closest: function(e2) {
          let t2 = this;
          return e2 === void 0 ? d([]) : (t2.is(e2) || (t2 = t2.parents(e2).eq(0)), t2);
        }, find: function(e2) {
          const t2 = [];
          for (let s3 = 0; s3 < this.length; s3 += 1) {
            const a2 = this[s3].querySelectorAll(e2);
            for (let e3 = 0; e3 < a2.length; e3 += 1)
              t2.push(a2[e3]);
          }
          return d(t2);
        }, children: function(e2) {
          const t2 = [];
          for (let s3 = 0; s3 < this.length; s3 += 1) {
            const a2 = this[s3].children;
            for (let s4 = 0; s4 < a2.length; s4 += 1)
              e2 && !d(a2[s4]).is(e2) || t2.push(a2[s4]);
          }
          return d(t2);
        }, filter: function(e2) {
          return d(o(this, e2));
        }, remove: function() {
          for (let e2 = 0; e2 < this.length; e2 += 1)
            this[e2].parentNode && this[e2].parentNode.removeChild(this[e2]);
          return this;
        } };
        function p(e2, t2 = 0) {
          return setTimeout(e2, t2);
        }
        function u() {
          return Date.now();
        }
        function h(e2, t2 = "x") {
          const s3 = r();
          let a2, i2, n2;
          const l2 = function(e3) {
            const t3 = r();
            let s4;
            return t3.getComputedStyle && (s4 = t3.getComputedStyle(e3, null)), !s4 && e3.currentStyle && (s4 = e3.currentStyle), s4 || (s4 = e3.style), s4;
          }(e2);
          return s3.WebKitCSSMatrix ? (i2 = l2.transform || l2.webkitTransform, i2.split(",").length > 6 && (i2 = i2.split(", ").map((e3) => e3.replace(",", ".")).join(", ")), n2 = new s3.WebKitCSSMatrix(i2 === "none" ? "" : i2)) : (n2 = l2.MozTransform || l2.OTransform || l2.MsTransform || l2.msTransform || l2.transform || l2.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a2 = n2.toString().split(",")), t2 === "x" && (i2 = s3.WebKitCSSMatrix ? n2.m41 : a2.length === 16 ? parseFloat(a2[12]) : parseFloat(a2[4])), t2 === "y" && (i2 = s3.WebKitCSSMatrix ? n2.m42 : a2.length === 16 ? parseFloat(a2[13]) : parseFloat(a2[5])), i2 || 0;
        }
        function m(e2) {
          return typeof e2 == "object" && e2 !== null && e2.constructor && Object.prototype.toString.call(e2).slice(8, -1) === "Object";
        }
        function f(...e2) {
          const t2 = Object(e2[0]), s3 = ["__proto__", "constructor", "prototype"];
          for (let i2 = 1; i2 < e2.length; i2 += 1) {
            const r2 = e2[i2];
            if (r2 != null && (a2 = r2, !(typeof window != "undefined" && window.HTMLElement !== void 0 ? a2 instanceof HTMLElement : a2 && (a2.nodeType === 1 || a2.nodeType === 11)))) {
              const e3 = Object.keys(Object(r2)).filter((e4) => s3.indexOf(e4) < 0);
              for (let s4 = 0, a3 = e3.length; s4 < a3; s4 += 1) {
                const a4 = e3[s4], i3 = Object.getOwnPropertyDescriptor(r2, a4);
                i3 !== void 0 && i3.enumerable && (m(t2[a4]) && m(r2[a4]) ? r2[a4].__swiper__ ? t2[a4] = r2[a4] : f(t2[a4], r2[a4]) : !m(t2[a4]) && m(r2[a4]) ? (t2[a4] = {}, r2[a4].__swiper__ ? t2[a4] = r2[a4] : f(t2[a4], r2[a4])) : t2[a4] = r2[a4]);
              }
            }
          }
          var a2;
          return t2;
        }
        function g(e2, t2, s3) {
          e2.style.setProperty(t2, s3);
        }
        function v({ swiper: e2, targetPosition: t2, side: s3 }) {
          const a2 = r(), i2 = -e2.translate;
          let n2, l2 = null;
          const o2 = e2.params.speed;
          e2.wrapperEl.style.scrollSnapType = "none", a2.cancelAnimationFrame(e2.cssModeFrameID);
          const d2 = t2 > i2 ? "next" : "prev", c2 = (e3, t3) => d2 === "next" && e3 >= t3 || d2 === "prev" && e3 <= t3, p2 = () => {
            n2 = new Date().getTime(), l2 === null && (l2 = n2);
            const r2 = Math.max(Math.min((n2 - l2) / o2, 1), 0), d3 = 0.5 - Math.cos(r2 * Math.PI) / 2;
            let u2 = i2 + d3 * (t2 - i2);
            if (c2(u2, t2) && (u2 = t2), e2.wrapperEl.scrollTo({ [s3]: u2 }), c2(u2, t2))
              return e2.wrapperEl.style.overflow = "hidden", e2.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                e2.wrapperEl.style.overflow = "", e2.wrapperEl.scrollTo({ [s3]: u2 });
              }), void a2.cancelAnimationFrame(e2.cssModeFrameID);
            e2.cssModeFrameID = a2.requestAnimationFrame(p2);
          };
          p2();
        }
        let w, b, x;
        function y() {
          return w || (w = function() {
            const e2 = r(), t2 = a();
            return { smoothScroll: t2.documentElement && "scrollBehavior" in t2.documentElement.style, touch: !!("ontouchstart" in e2 || e2.DocumentTouch && t2 instanceof e2.DocumentTouch), passiveListener: function() {
              let t3 = false;
              try {
                const s3 = Object.defineProperty({}, "passive", { get() {
                  t3 = true;
                } });
                e2.addEventListener("testPassiveListener", null, s3);
              } catch (e3) {
              }
              return t3;
            }(), gestures: "ongesturestart" in e2 };
          }()), w;
        }
        function E(e2 = {}) {
          return b || (b = function({ userAgent: e3 } = {}) {
            const t2 = y(), s3 = r(), a2 = s3.navigator.platform, i2 = e3 || s3.navigator.userAgent, n2 = { ios: false, android: false }, l2 = s3.screen.width, o2 = s3.screen.height, d2 = i2.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c2 = i2.match(/(iPad).*OS\s([\d_]+)/);
            const p2 = i2.match(/(iPod)(.*OS\s([\d_]+))?/), u2 = !c2 && i2.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h2 = a2 === "Win32";
            let m2 = a2 === "MacIntel";
            return !c2 && m2 && t2.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l2}x${o2}`) >= 0 && (c2 = i2.match(/(Version)\/([\d.]+)/), c2 || (c2 = [0, 1, "13_0_0"]), m2 = false), d2 && !h2 && (n2.os = "android", n2.android = true), (c2 || u2 || p2) && (n2.os = "ios", n2.ios = true), n2;
          }(e2)), b;
        }
        function T() {
          return x || (x = function() {
            const e2 = r();
            return { isSafari: function() {
              const t2 = e2.navigator.userAgent.toLowerCase();
              return t2.indexOf("safari") >= 0 && t2.indexOf("chrome") < 0 && t2.indexOf("android") < 0;
            }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e2.navigator.userAgent) };
          }()), x;
        }
        Object.keys(c).forEach((e2) => {
          Object.defineProperty(d.fn, e2, { value: c[e2], writable: true });
        });
        var C = { on(e2, t2, s3) {
          const a2 = this;
          if (typeof t2 != "function")
            return a2;
          const i2 = s3 ? "unshift" : "push";
          return e2.split(" ").forEach((e3) => {
            a2.eventsListeners[e3] || (a2.eventsListeners[e3] = []), a2.eventsListeners[e3][i2](t2);
          }), a2;
        }, once(e2, t2, s3) {
          const a2 = this;
          if (typeof t2 != "function")
            return a2;
          function i2(...s4) {
            a2.off(e2, i2), i2.__emitterProxy && delete i2.__emitterProxy, t2.apply(a2, s4);
          }
          return i2.__emitterProxy = t2, a2.on(e2, i2, s3);
        }, onAny(e2, t2) {
          const s3 = this;
          if (typeof e2 != "function")
            return s3;
          const a2 = t2 ? "unshift" : "push";
          return s3.eventsAnyListeners.indexOf(e2) < 0 && s3.eventsAnyListeners[a2](e2), s3;
        }, offAny(e2) {
          const t2 = this;
          if (!t2.eventsAnyListeners)
            return t2;
          const s3 = t2.eventsAnyListeners.indexOf(e2);
          return s3 >= 0 && t2.eventsAnyListeners.splice(s3, 1), t2;
        }, off(e2, t2) {
          const s3 = this;
          return s3.eventsListeners ? (e2.split(" ").forEach((e3) => {
            t2 === void 0 ? s3.eventsListeners[e3] = [] : s3.eventsListeners[e3] && s3.eventsListeners[e3].forEach((a2, i2) => {
              (a2 === t2 || a2.__emitterProxy && a2.__emitterProxy === t2) && s3.eventsListeners[e3].splice(i2, 1);
            });
          }), s3) : s3;
        }, emit(...e2) {
          const t2 = this;
          if (!t2.eventsListeners)
            return t2;
          let s3, a2, i2;
          typeof e2[0] == "string" || Array.isArray(e2[0]) ? (s3 = e2[0], a2 = e2.slice(1, e2.length), i2 = t2) : (s3 = e2[0].events, a2 = e2[0].data, i2 = e2[0].context || t2), a2.unshift(i2);
          return (Array.isArray(s3) ? s3 : s3.split(" ")).forEach((e3) => {
            t2.eventsAnyListeners && t2.eventsAnyListeners.length && t2.eventsAnyListeners.forEach((t3) => {
              t3.apply(i2, [e3, ...a2]);
            }), t2.eventsListeners && t2.eventsListeners[e3] && t2.eventsListeners[e3].forEach((e4) => {
              e4.apply(i2, a2);
            });
          }), t2;
        } };
        function $({ swiper: e2, runCallbacks: t2, direction: s3, step: a2 }) {
          const { activeIndex: i2, previousIndex: r2 } = e2;
          let n2 = s3;
          if (n2 || (n2 = i2 > r2 ? "next" : i2 < r2 ? "prev" : "reset"), e2.emit(`transition${a2}`), t2 && i2 !== r2) {
            if (n2 === "reset")
              return void e2.emit(`slideResetTransition${a2}`);
            e2.emit(`slideChangeTransition${a2}`), n2 === "next" ? e2.emit(`slideNextTransition${a2}`) : e2.emit(`slidePrevTransition${a2}`);
          }
        }
        function S(e2) {
          const t2 = this, s3 = a(), i2 = r(), n2 = t2.touchEventsData, { params: l2, touches: o2, enabled: c2 } = t2;
          if (!c2)
            return;
          if (t2.animating && l2.preventInteractionOnTransition)
            return;
          !t2.animating && l2.cssMode && l2.loop && t2.loopFix();
          let p2 = e2;
          p2.originalEvent && (p2 = p2.originalEvent);
          let h2 = d(p2.target);
          if (l2.touchEventsTarget === "wrapper" && !h2.closest(t2.wrapperEl).length)
            return;
          if (n2.isTouchEvent = p2.type === "touchstart", !n2.isTouchEvent && "which" in p2 && p2.which === 3)
            return;
          if (!n2.isTouchEvent && "button" in p2 && p2.button > 0)
            return;
          if (n2.isTouched && n2.isMoved)
            return;
          !!l2.noSwipingClass && l2.noSwipingClass !== "" && p2.target && p2.target.shadowRoot && e2.path && e2.path[0] && (h2 = d(e2.path[0]));
          const m2 = l2.noSwipingSelector ? l2.noSwipingSelector : `.${l2.noSwipingClass}`, f2 = !(!p2.target || !p2.target.shadowRoot);
          if (l2.noSwiping && (f2 ? function(e3, t3 = this) {
            return function t4(s4) {
              return s4 && s4 !== a() && s4 !== r() ? (s4.assignedSlot && (s4 = s4.assignedSlot), s4.closest(e3) || t4(s4.getRootNode().host)) : null;
            }(t3);
          }(m2, p2.target) : h2.closest(m2)[0]))
            return void (t2.allowClick = true);
          if (l2.swipeHandler && !h2.closest(l2.swipeHandler)[0])
            return;
          o2.currentX = p2.type === "touchstart" ? p2.targetTouches[0].pageX : p2.pageX, o2.currentY = p2.type === "touchstart" ? p2.targetTouches[0].pageY : p2.pageY;
          const g2 = o2.currentX, v2 = o2.currentY, w2 = l2.edgeSwipeDetection || l2.iOSEdgeSwipeDetection, b2 = l2.edgeSwipeThreshold || l2.iOSEdgeSwipeThreshold;
          if (w2 && (g2 <= b2 || g2 >= i2.innerWidth - b2)) {
            if (w2 !== "prevent")
              return;
            e2.preventDefault();
          }
          if (Object.assign(n2, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: void 0, startMoving: void 0 }), o2.startX = g2, o2.startY = v2, n2.touchStartTime = u(), t2.allowClick = true, t2.updateSize(), t2.swipeDirection = void 0, l2.threshold > 0 && (n2.allowThresholdMove = false), p2.type !== "touchstart") {
            let e3 = true;
            h2.is(n2.focusableElements) && (e3 = false), s3.activeElement && d(s3.activeElement).is(n2.focusableElements) && s3.activeElement !== h2[0] && s3.activeElement.blur();
            const a2 = e3 && t2.allowTouchMove && l2.touchStartPreventDefault;
            !l2.touchStartForcePreventDefault && !a2 || h2[0].isContentEditable || p2.preventDefault();
          }
          t2.emit("touchStart", p2);
        }
        function M(e2) {
          const t2 = a(), s3 = this, i2 = s3.touchEventsData, { params: r2, touches: n2, rtlTranslate: l2, enabled: o2 } = s3;
          if (!o2)
            return;
          let c2 = e2;
          if (c2.originalEvent && (c2 = c2.originalEvent), !i2.isTouched)
            return void (i2.startMoving && i2.isScrolling && s3.emit("touchMoveOpposite", c2));
          if (i2.isTouchEvent && c2.type !== "touchmove")
            return;
          const p2 = c2.type === "touchmove" && c2.targetTouches && (c2.targetTouches[0] || c2.changedTouches[0]), h2 = c2.type === "touchmove" ? p2.pageX : c2.pageX, m2 = c2.type === "touchmove" ? p2.pageY : c2.pageY;
          if (c2.preventedByNestedSwiper)
            return n2.startX = h2, void (n2.startY = m2);
          if (!s3.allowTouchMove)
            return s3.allowClick = false, void (i2.isTouched && (Object.assign(n2, { startX: h2, startY: m2, currentX: h2, currentY: m2 }), i2.touchStartTime = u()));
          if (i2.isTouchEvent && r2.touchReleaseOnEdges && !r2.loop) {
            if (s3.isVertical()) {
              if (m2 < n2.startY && s3.translate <= s3.maxTranslate() || m2 > n2.startY && s3.translate >= s3.minTranslate())
                return i2.isTouched = false, void (i2.isMoved = false);
            } else if (h2 < n2.startX && s3.translate <= s3.maxTranslate() || h2 > n2.startX && s3.translate >= s3.minTranslate())
              return;
          }
          if (i2.isTouchEvent && t2.activeElement && c2.target === t2.activeElement && d(c2.target).is(i2.focusableElements))
            return i2.isMoved = true, void (s3.allowClick = false);
          if (i2.allowTouchCallbacks && s3.emit("touchMove", c2), c2.targetTouches && c2.targetTouches.length > 1)
            return;
          n2.currentX = h2, n2.currentY = m2;
          const f2 = n2.currentX - n2.startX, g2 = n2.currentY - n2.startY;
          if (s3.params.threshold && Math.sqrt(f2 ** 2 + g2 ** 2) < s3.params.threshold)
            return;
          if (i2.isScrolling === void 0) {
            let e3;
            s3.isHorizontal() && n2.currentY === n2.startY || s3.isVertical() && n2.currentX === n2.startX ? i2.isScrolling = false : f2 * f2 + g2 * g2 >= 25 && (e3 = 180 * Math.atan2(Math.abs(g2), Math.abs(f2)) / Math.PI, i2.isScrolling = s3.isHorizontal() ? e3 > r2.touchAngle : 90 - e3 > r2.touchAngle);
          }
          if (i2.isScrolling && s3.emit("touchMoveOpposite", c2), i2.startMoving === void 0 && (n2.currentX === n2.startX && n2.currentY === n2.startY || (i2.startMoving = true)), i2.isScrolling)
            return void (i2.isTouched = false);
          if (!i2.startMoving)
            return;
          s3.allowClick = false, !r2.cssMode && c2.cancelable && c2.preventDefault(), r2.touchMoveStopPropagation && !r2.nested && c2.stopPropagation(), i2.isMoved || (r2.loop && !r2.cssMode && s3.loopFix(), i2.startTranslate = s3.getTranslate(), s3.setTransition(0), s3.animating && s3.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i2.allowMomentumBounce = false, !r2.grabCursor || s3.allowSlideNext !== true && s3.allowSlidePrev !== true || s3.setGrabCursor(true), s3.emit("sliderFirstMove", c2)), s3.emit("sliderMove", c2), i2.isMoved = true;
          let v2 = s3.isHorizontal() ? f2 : g2;
          n2.diff = v2, v2 *= r2.touchRatio, l2 && (v2 = -v2), s3.swipeDirection = v2 > 0 ? "prev" : "next", i2.currentTranslate = v2 + i2.startTranslate;
          let w2 = true, b2 = r2.resistanceRatio;
          if (r2.touchReleaseOnEdges && (b2 = 0), v2 > 0 && i2.currentTranslate > s3.minTranslate() ? (w2 = false, r2.resistance && (i2.currentTranslate = s3.minTranslate() - 1 + (-s3.minTranslate() + i2.startTranslate + v2) ** b2)) : v2 < 0 && i2.currentTranslate < s3.maxTranslate() && (w2 = false, r2.resistance && (i2.currentTranslate = s3.maxTranslate() + 1 - (s3.maxTranslate() - i2.startTranslate - v2) ** b2)), w2 && (c2.preventedByNestedSwiper = true), !s3.allowSlideNext && s3.swipeDirection === "next" && i2.currentTranslate < i2.startTranslate && (i2.currentTranslate = i2.startTranslate), !s3.allowSlidePrev && s3.swipeDirection === "prev" && i2.currentTranslate > i2.startTranslate && (i2.currentTranslate = i2.startTranslate), s3.allowSlidePrev || s3.allowSlideNext || (i2.currentTranslate = i2.startTranslate), r2.threshold > 0) {
            if (!(Math.abs(v2) > r2.threshold || i2.allowThresholdMove))
              return void (i2.currentTranslate = i2.startTranslate);
            if (!i2.allowThresholdMove)
              return i2.allowThresholdMove = true, n2.startX = n2.currentX, n2.startY = n2.currentY, i2.currentTranslate = i2.startTranslate, void (n2.diff = s3.isHorizontal() ? n2.currentX - n2.startX : n2.currentY - n2.startY);
          }
          r2.followFinger && !r2.cssMode && ((r2.freeMode && r2.freeMode.enabled && s3.freeMode || r2.watchSlidesProgress) && (s3.updateActiveIndex(), s3.updateSlidesClasses()), s3.params.freeMode && r2.freeMode.enabled && s3.freeMode && s3.freeMode.onTouchMove(), s3.updateProgress(i2.currentTranslate), s3.setTranslate(i2.currentTranslate));
        }
        function P(e2) {
          const t2 = this, s3 = t2.touchEventsData, { params: a2, touches: i2, rtlTranslate: r2, slidesGrid: n2, enabled: l2 } = t2;
          if (!l2)
            return;
          let o2 = e2;
          if (o2.originalEvent && (o2 = o2.originalEvent), s3.allowTouchCallbacks && t2.emit("touchEnd", o2), s3.allowTouchCallbacks = false, !s3.isTouched)
            return s3.isMoved && a2.grabCursor && t2.setGrabCursor(false), s3.isMoved = false, void (s3.startMoving = false);
          a2.grabCursor && s3.isMoved && s3.isTouched && (t2.allowSlideNext === true || t2.allowSlidePrev === true) && t2.setGrabCursor(false);
          const d2 = u(), c2 = d2 - s3.touchStartTime;
          if (t2.allowClick && (t2.updateClickedSlide(o2), t2.emit("tap click", o2), c2 < 300 && d2 - s3.lastClickTime < 300 && t2.emit("doubleTap doubleClick", o2)), s3.lastClickTime = u(), p(() => {
            t2.destroyed || (t2.allowClick = true);
          }), !s3.isTouched || !s3.isMoved || !t2.swipeDirection || i2.diff === 0 || s3.currentTranslate === s3.startTranslate)
            return s3.isTouched = false, s3.isMoved = false, void (s3.startMoving = false);
          let h2;
          if (s3.isTouched = false, s3.isMoved = false, s3.startMoving = false, h2 = a2.followFinger ? r2 ? t2.translate : -t2.translate : -s3.currentTranslate, a2.cssMode)
            return;
          if (t2.params.freeMode && a2.freeMode.enabled)
            return void t2.freeMode.onTouchEnd({ currentPos: h2 });
          let m2 = 0, f2 = t2.slidesSizesGrid[0];
          for (let e3 = 0; e3 < n2.length; e3 += e3 < a2.slidesPerGroupSkip ? 1 : a2.slidesPerGroup) {
            const t3 = e3 < a2.slidesPerGroupSkip - 1 ? 1 : a2.slidesPerGroup;
            n2[e3 + t3] !== void 0 ? h2 >= n2[e3] && h2 < n2[e3 + t3] && (m2 = e3, f2 = n2[e3 + t3] - n2[e3]) : h2 >= n2[e3] && (m2 = e3, f2 = n2[n2.length - 1] - n2[n2.length - 2]);
          }
          const g2 = (h2 - n2[m2]) / f2, v2 = m2 < a2.slidesPerGroupSkip - 1 ? 1 : a2.slidesPerGroup;
          if (c2 > a2.longSwipesMs) {
            if (!a2.longSwipes)
              return void t2.slideTo(t2.activeIndex);
            t2.swipeDirection === "next" && (g2 >= a2.longSwipesRatio ? t2.slideTo(m2 + v2) : t2.slideTo(m2)), t2.swipeDirection === "prev" && (g2 > 1 - a2.longSwipesRatio ? t2.slideTo(m2 + v2) : t2.slideTo(m2));
          } else {
            if (!a2.shortSwipes)
              return void t2.slideTo(t2.activeIndex);
            t2.navigation && (o2.target === t2.navigation.nextEl || o2.target === t2.navigation.prevEl) ? o2.target === t2.navigation.nextEl ? t2.slideTo(m2 + v2) : t2.slideTo(m2) : (t2.swipeDirection === "next" && t2.slideTo(m2 + v2), t2.swipeDirection === "prev" && t2.slideTo(m2));
          }
        }
        function k() {
          const e2 = this, { params: t2, el: s3 } = e2;
          if (s3 && s3.offsetWidth === 0)
            return;
          t2.breakpoints && e2.setBreakpoint();
          const { allowSlideNext: a2, allowSlidePrev: i2, snapGrid: r2 } = e2;
          e2.allowSlideNext = true, e2.allowSlidePrev = true, e2.updateSize(), e2.updateSlides(), e2.updateSlidesClasses(), (t2.slidesPerView === "auto" || t2.slidesPerView > 1) && e2.isEnd && !e2.isBeginning && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true), e2.autoplay && e2.autoplay.running && e2.autoplay.paused && e2.autoplay.run(), e2.allowSlidePrev = i2, e2.allowSlideNext = a2, e2.params.watchOverflow && r2 !== e2.snapGrid && e2.checkOverflow();
        }
        function z(e2) {
          const t2 = this;
          t2.enabled && (t2.allowClick || (t2.params.preventClicks && e2.preventDefault(), t2.params.preventClicksPropagation && t2.animating && (e2.stopPropagation(), e2.stopImmediatePropagation())));
        }
        function O() {
          const e2 = this, { wrapperEl: t2, rtlTranslate: s3, enabled: a2 } = e2;
          if (!a2)
            return;
          let i2;
          e2.previousTranslate = e2.translate, e2.isHorizontal() ? e2.translate = -t2.scrollLeft : e2.translate = -t2.scrollTop, e2.translate === -0 && (e2.translate = 0), e2.updateActiveIndex(), e2.updateSlidesClasses();
          const r2 = e2.maxTranslate() - e2.minTranslate();
          i2 = r2 === 0 ? 0 : (e2.translate - e2.minTranslate()) / r2, i2 !== e2.progress && e2.updateProgress(s3 ? -e2.translate : e2.translate), e2.emit("setTranslate", e2.translate, false);
        }
        let I = false;
        function L() {
        }
        const A = (e2, t2) => {
          const s3 = a(), { params: i2, touchEvents: r2, el: n2, wrapperEl: l2, device: o2, support: d2 } = e2, c2 = !!i2.nested, p2 = t2 === "on" ? "addEventListener" : "removeEventListener", u2 = t2;
          if (d2.touch) {
            const t3 = !(r2.start !== "touchstart" || !d2.passiveListener || !i2.passiveListeners) && { passive: true, capture: false };
            n2[p2](r2.start, e2.onTouchStart, t3), n2[p2](r2.move, e2.onTouchMove, d2.passiveListener ? { passive: false, capture: c2 } : c2), n2[p2](r2.end, e2.onTouchEnd, t3), r2.cancel && n2[p2](r2.cancel, e2.onTouchEnd, t3);
          } else
            n2[p2](r2.start, e2.onTouchStart, false), s3[p2](r2.move, e2.onTouchMove, c2), s3[p2](r2.end, e2.onTouchEnd, false);
          (i2.preventClicks || i2.preventClicksPropagation) && n2[p2]("click", e2.onClick, true), i2.cssMode && l2[p2]("scroll", e2.onScroll), i2.updateOnWindowResize ? e2[u2](o2.ios || o2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, true) : e2[u2]("observerUpdate", k, true);
        };
        const D = (e2, t2) => e2.grid && t2.grid && t2.grid.rows > 1;
        var G = { init: true, direction: "horizontal", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: false, updateOnWindowResize: true, resizeObserver: true, nested: false, createElements: false, enabled: true, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: false, userAgent: null, url: null, edgeSwipeDetection: false, edgeSwipeThreshold: 20, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: false, centeredSlides: false, centeredSlidesBounds: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, centerInsufficientSlides: false, watchOverflow: true, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 0, touchMoveStopPropagation: false, touchStartPreventDefault: true, touchStartForcePreventDefault: false, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, preloadImages: true, updateOnImagesReady: true, loop: false, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: false, loopPreventsSlide: true, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: true, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: true, _emitClasses: false };
        function N(e2, t2) {
          return function(s3 = {}) {
            const a2 = Object.keys(s3)[0], i2 = s3[a2];
            typeof i2 == "object" && i2 !== null ? (["navigation", "pagination", "scrollbar"].indexOf(a2) >= 0 && e2[a2] === true && (e2[a2] = { auto: true }), a2 in e2 && "enabled" in i2 ? (e2[a2] === true && (e2[a2] = { enabled: true }), typeof e2[a2] != "object" || "enabled" in e2[a2] || (e2[a2].enabled = true), e2[a2] || (e2[a2] = { enabled: false }), f(t2, s3)) : f(t2, s3)) : f(t2, s3);
          };
        }
        const B = { eventsEmitter: C, update: { updateSize: function() {
          const e2 = this;
          let t2, s3;
          const a2 = e2.$el;
          t2 = e2.params.width !== void 0 && e2.params.width !== null ? e2.params.width : a2[0].clientWidth, s3 = e2.params.height !== void 0 && e2.params.height !== null ? e2.params.height : a2[0].clientHeight, t2 === 0 && e2.isHorizontal() || s3 === 0 && e2.isVertical() || (t2 = t2 - parseInt(a2.css("padding-left") || 0, 10) - parseInt(a2.css("padding-right") || 0, 10), s3 = s3 - parseInt(a2.css("padding-top") || 0, 10) - parseInt(a2.css("padding-bottom") || 0, 10), Number.isNaN(t2) && (t2 = 0), Number.isNaN(s3) && (s3 = 0), Object.assign(e2, { width: t2, height: s3, size: e2.isHorizontal() ? t2 : s3 }));
        }, updateSlides: function() {
          const e2 = this;
          function t2(t3) {
            return e2.isHorizontal() ? t3 : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[t3];
          }
          function s3(e3, s4) {
            return parseFloat(e3.getPropertyValue(t2(s4)) || 0);
          }
          const a2 = e2.params, { $wrapperEl: i2, size: r2, rtlTranslate: n2, wrongRTL: l2 } = e2, o2 = e2.virtual && a2.virtual.enabled, d2 = o2 ? e2.virtual.slides.length : e2.slides.length, c2 = i2.children(`.${e2.params.slideClass}`), p2 = o2 ? e2.virtual.slides.length : c2.length;
          let u2 = [];
          const h2 = [], m2 = [];
          let f2 = a2.slidesOffsetBefore;
          typeof f2 == "function" && (f2 = a2.slidesOffsetBefore.call(e2));
          let v2 = a2.slidesOffsetAfter;
          typeof v2 == "function" && (v2 = a2.slidesOffsetAfter.call(e2));
          const w2 = e2.snapGrid.length, b2 = e2.slidesGrid.length;
          let x2 = a2.spaceBetween, y2 = -f2, E2 = 0, T2 = 0;
          if (r2 === void 0)
            return;
          typeof x2 == "string" && x2.indexOf("%") >= 0 && (x2 = parseFloat(x2.replace("%", "")) / 100 * r2), e2.virtualSize = -x2, n2 ? c2.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : c2.css({ marginRight: "", marginBottom: "", marginTop: "" }), a2.centeredSlides && a2.cssMode && (g(e2.wrapperEl, "--swiper-centered-offset-before", ""), g(e2.wrapperEl, "--swiper-centered-offset-after", ""));
          const C2 = a2.grid && a2.grid.rows > 1 && e2.grid;
          let $2;
          C2 && e2.grid.initSlides(p2);
          const S2 = a2.slidesPerView === "auto" && a2.breakpoints && Object.keys(a2.breakpoints).filter((e3) => a2.breakpoints[e3].slidesPerView !== void 0).length > 0;
          for (let i3 = 0; i3 < p2; i3 += 1) {
            $2 = 0;
            const n3 = c2.eq(i3);
            if (C2 && e2.grid.updateSlide(i3, n3, p2, t2), n3.css("display") !== "none") {
              if (a2.slidesPerView === "auto") {
                S2 && (c2[i3].style[t2("width")] = "");
                const r3 = getComputedStyle(n3[0]), l3 = n3[0].style.transform, o3 = n3[0].style.webkitTransform;
                if (l3 && (n3[0].style.transform = "none"), o3 && (n3[0].style.webkitTransform = "none"), a2.roundLengths)
                  $2 = e2.isHorizontal() ? n3.outerWidth(true) : n3.outerHeight(true);
                else {
                  const e3 = s3(r3, "width"), t3 = s3(r3, "padding-left"), a3 = s3(r3, "padding-right"), i4 = s3(r3, "margin-left"), l4 = s3(r3, "margin-right"), o4 = r3.getPropertyValue("box-sizing");
                  if (o4 && o4 === "border-box")
                    $2 = e3 + i4 + l4;
                  else {
                    const { clientWidth: s4, offsetWidth: r4 } = n3[0];
                    $2 = e3 + t3 + a3 + i4 + l4 + (r4 - s4);
                  }
                }
                l3 && (n3[0].style.transform = l3), o3 && (n3[0].style.webkitTransform = o3), a2.roundLengths && ($2 = Math.floor($2));
              } else
                $2 = (r2 - (a2.slidesPerView - 1) * x2) / a2.slidesPerView, a2.roundLengths && ($2 = Math.floor($2)), c2[i3] && (c2[i3].style[t2("width")] = `${$2}px`);
              c2[i3] && (c2[i3].swiperSlideSize = $2), m2.push($2), a2.centeredSlides ? (y2 = y2 + $2 / 2 + E2 / 2 + x2, E2 === 0 && i3 !== 0 && (y2 = y2 - r2 / 2 - x2), i3 === 0 && (y2 = y2 - r2 / 2 - x2), Math.abs(y2) < 1e-3 && (y2 = 0), a2.roundLengths && (y2 = Math.floor(y2)), T2 % a2.slidesPerGroup == 0 && u2.push(y2), h2.push(y2)) : (a2.roundLengths && (y2 = Math.floor(y2)), (T2 - Math.min(e2.params.slidesPerGroupSkip, T2)) % e2.params.slidesPerGroup == 0 && u2.push(y2), h2.push(y2), y2 = y2 + $2 + x2), e2.virtualSize += $2 + x2, E2 = $2, T2 += 1;
            }
          }
          if (e2.virtualSize = Math.max(e2.virtualSize, r2) + v2, n2 && l2 && (a2.effect === "slide" || a2.effect === "coverflow") && i2.css({ width: `${e2.virtualSize + a2.spaceBetween}px` }), a2.setWrapperSize && i2.css({ [t2("width")]: `${e2.virtualSize + a2.spaceBetween}px` }), C2 && e2.grid.updateWrapperSize($2, u2, t2), !a2.centeredSlides) {
            const t3 = [];
            for (let s4 = 0; s4 < u2.length; s4 += 1) {
              let i3 = u2[s4];
              a2.roundLengths && (i3 = Math.floor(i3)), u2[s4] <= e2.virtualSize - r2 && t3.push(i3);
            }
            u2 = t3, Math.floor(e2.virtualSize - r2) - Math.floor(u2[u2.length - 1]) > 1 && u2.push(e2.virtualSize - r2);
          }
          if (u2.length === 0 && (u2 = [0]), a2.spaceBetween !== 0) {
            const s4 = e2.isHorizontal() && n2 ? "marginLeft" : t2("marginRight");
            c2.filter((e3, t3) => !a2.cssMode || t3 !== c2.length - 1).css({ [s4]: `${x2}px` });
          }
          if (a2.centeredSlides && a2.centeredSlidesBounds) {
            let e3 = 0;
            m2.forEach((t4) => {
              e3 += t4 + (a2.spaceBetween ? a2.spaceBetween : 0);
            }), e3 -= a2.spaceBetween;
            const t3 = e3 - r2;
            u2 = u2.map((e4) => e4 < 0 ? -f2 : e4 > t3 ? t3 + v2 : e4);
          }
          if (a2.centerInsufficientSlides) {
            let e3 = 0;
            if (m2.forEach((t3) => {
              e3 += t3 + (a2.spaceBetween ? a2.spaceBetween : 0);
            }), e3 -= a2.spaceBetween, e3 < r2) {
              const t3 = (r2 - e3) / 2;
              u2.forEach((e4, s4) => {
                u2[s4] = e4 - t3;
              }), h2.forEach((e4, s4) => {
                h2[s4] = e4 + t3;
              });
            }
          }
          if (Object.assign(e2, { slides: c2, snapGrid: u2, slidesGrid: h2, slidesSizesGrid: m2 }), a2.centeredSlides && a2.cssMode && !a2.centeredSlidesBounds) {
            g(e2.wrapperEl, "--swiper-centered-offset-before", -u2[0] + "px"), g(e2.wrapperEl, "--swiper-centered-offset-after", e2.size / 2 - m2[m2.length - 1] / 2 + "px");
            const t3 = -e2.snapGrid[0], s4 = -e2.slidesGrid[0];
            e2.snapGrid = e2.snapGrid.map((e3) => e3 + t3), e2.slidesGrid = e2.slidesGrid.map((e3) => e3 + s4);
          }
          p2 !== d2 && e2.emit("slidesLengthChange"), u2.length !== w2 && (e2.params.watchOverflow && e2.checkOverflow(), e2.emit("snapGridLengthChange")), h2.length !== b2 && e2.emit("slidesGridLengthChange"), a2.watchSlidesProgress && e2.updateSlidesOffset();
        }, updateAutoHeight: function(e2) {
          const t2 = this, s3 = [], a2 = t2.virtual && t2.params.virtual.enabled;
          let i2, r2 = 0;
          typeof e2 == "number" ? t2.setTransition(e2) : e2 === true && t2.setTransition(t2.params.speed);
          const n2 = (e3) => a2 ? t2.slides.filter((t3) => parseInt(t3.getAttribute("data-swiper-slide-index"), 10) === e3)[0] : t2.slides.eq(e3)[0];
          if (t2.params.slidesPerView !== "auto" && t2.params.slidesPerView > 1)
            if (t2.params.centeredSlides)
              t2.visibleSlides.each((e3) => {
                s3.push(e3);
              });
            else
              for (i2 = 0; i2 < Math.ceil(t2.params.slidesPerView); i2 += 1) {
                const e3 = t2.activeIndex + i2;
                if (e3 > t2.slides.length && !a2)
                  break;
                s3.push(n2(e3));
              }
          else
            s3.push(n2(t2.activeIndex));
          for (i2 = 0; i2 < s3.length; i2 += 1)
            if (s3[i2] !== void 0) {
              const e3 = s3[i2].offsetHeight;
              r2 = e3 > r2 ? e3 : r2;
            }
          r2 && t2.$wrapperEl.css("height", `${r2}px`);
        }, updateSlidesOffset: function() {
          const e2 = this, t2 = e2.slides;
          for (let s3 = 0; s3 < t2.length; s3 += 1)
            t2[s3].swiperSlideOffset = e2.isHorizontal() ? t2[s3].offsetLeft : t2[s3].offsetTop;
        }, updateSlidesProgress: function(e2 = this && this.translate || 0) {
          const t2 = this, s3 = t2.params, { slides: a2, rtlTranslate: i2, snapGrid: r2 } = t2;
          if (a2.length === 0)
            return;
          a2[0].swiperSlideOffset === void 0 && t2.updateSlidesOffset();
          let n2 = -e2;
          i2 && (n2 = e2), a2.removeClass(s3.slideVisibleClass), t2.visibleSlidesIndexes = [], t2.visibleSlides = [];
          for (let e3 = 0; e3 < a2.length; e3 += 1) {
            const l2 = a2[e3];
            let o2 = l2.swiperSlideOffset;
            s3.cssMode && s3.centeredSlides && (o2 -= a2[0].swiperSlideOffset);
            const d2 = (n2 + (s3.centeredSlides ? t2.minTranslate() : 0) - o2) / (l2.swiperSlideSize + s3.spaceBetween), c2 = (n2 - r2[0] + (s3.centeredSlides ? t2.minTranslate() : 0) - o2) / (l2.swiperSlideSize + s3.spaceBetween), p2 = -(n2 - o2), u2 = p2 + t2.slidesSizesGrid[e3];
            (p2 >= 0 && p2 < t2.size - 1 || u2 > 1 && u2 <= t2.size || p2 <= 0 && u2 >= t2.size) && (t2.visibleSlides.push(l2), t2.visibleSlidesIndexes.push(e3), a2.eq(e3).addClass(s3.slideVisibleClass)), l2.progress = i2 ? -d2 : d2, l2.originalProgress = i2 ? -c2 : c2;
          }
          t2.visibleSlides = d(t2.visibleSlides);
        }, updateProgress: function(e2) {
          const t2 = this;
          if (e2 === void 0) {
            const s4 = t2.rtlTranslate ? -1 : 1;
            e2 = t2 && t2.translate && t2.translate * s4 || 0;
          }
          const s3 = t2.params, a2 = t2.maxTranslate() - t2.minTranslate();
          let { progress: i2, isBeginning: r2, isEnd: n2 } = t2;
          const l2 = r2, o2 = n2;
          a2 === 0 ? (i2 = 0, r2 = true, n2 = true) : (i2 = (e2 - t2.minTranslate()) / a2, r2 = i2 <= 0, n2 = i2 >= 1), Object.assign(t2, { progress: i2, isBeginning: r2, isEnd: n2 }), (s3.watchSlidesProgress || s3.centeredSlides && s3.autoHeight) && t2.updateSlidesProgress(e2), r2 && !l2 && t2.emit("reachBeginning toEdge"), n2 && !o2 && t2.emit("reachEnd toEdge"), (l2 && !r2 || o2 && !n2) && t2.emit("fromEdge"), t2.emit("progress", i2);
        }, updateSlidesClasses: function() {
          const e2 = this, { slides: t2, params: s3, $wrapperEl: a2, activeIndex: i2, realIndex: r2 } = e2, n2 = e2.virtual && s3.virtual.enabled;
          let l2;
          t2.removeClass(`${s3.slideActiveClass} ${s3.slideNextClass} ${s3.slidePrevClass} ${s3.slideDuplicateActiveClass} ${s3.slideDuplicateNextClass} ${s3.slideDuplicatePrevClass}`), l2 = n2 ? e2.$wrapperEl.find(`.${s3.slideClass}[data-swiper-slide-index="${i2}"]`) : t2.eq(i2), l2.addClass(s3.slideActiveClass), s3.loop && (l2.hasClass(s3.slideDuplicateClass) ? a2.children(`.${s3.slideClass}:not(.${s3.slideDuplicateClass})[data-swiper-slide-index="${r2}"]`).addClass(s3.slideDuplicateActiveClass) : a2.children(`.${s3.slideClass}.${s3.slideDuplicateClass}[data-swiper-slide-index="${r2}"]`).addClass(s3.slideDuplicateActiveClass));
          let o2 = l2.nextAll(`.${s3.slideClass}`).eq(0).addClass(s3.slideNextClass);
          s3.loop && o2.length === 0 && (o2 = t2.eq(0), o2.addClass(s3.slideNextClass));
          let d2 = l2.prevAll(`.${s3.slideClass}`).eq(0).addClass(s3.slidePrevClass);
          s3.loop && d2.length === 0 && (d2 = t2.eq(-1), d2.addClass(s3.slidePrevClass)), s3.loop && (o2.hasClass(s3.slideDuplicateClass) ? a2.children(`.${s3.slideClass}:not(.${s3.slideDuplicateClass})[data-swiper-slide-index="${o2.attr("data-swiper-slide-index")}"]`).addClass(s3.slideDuplicateNextClass) : a2.children(`.${s3.slideClass}.${s3.slideDuplicateClass}[data-swiper-slide-index="${o2.attr("data-swiper-slide-index")}"]`).addClass(s3.slideDuplicateNextClass), d2.hasClass(s3.slideDuplicateClass) ? a2.children(`.${s3.slideClass}:not(.${s3.slideDuplicateClass})[data-swiper-slide-index="${d2.attr("data-swiper-slide-index")}"]`).addClass(s3.slideDuplicatePrevClass) : a2.children(`.${s3.slideClass}.${s3.slideDuplicateClass}[data-swiper-slide-index="${d2.attr("data-swiper-slide-index")}"]`).addClass(s3.slideDuplicatePrevClass)), e2.emitSlidesClasses();
        }, updateActiveIndex: function(e2) {
          const t2 = this, s3 = t2.rtlTranslate ? t2.translate : -t2.translate, { slidesGrid: a2, snapGrid: i2, params: r2, activeIndex: n2, realIndex: l2, snapIndex: o2 } = t2;
          let d2, c2 = e2;
          if (c2 === void 0) {
            for (let e3 = 0; e3 < a2.length; e3 += 1)
              a2[e3 + 1] !== void 0 ? s3 >= a2[e3] && s3 < a2[e3 + 1] - (a2[e3 + 1] - a2[e3]) / 2 ? c2 = e3 : s3 >= a2[e3] && s3 < a2[e3 + 1] && (c2 = e3 + 1) : s3 >= a2[e3] && (c2 = e3);
            r2.normalizeSlideIndex && (c2 < 0 || c2 === void 0) && (c2 = 0);
          }
          if (i2.indexOf(s3) >= 0)
            d2 = i2.indexOf(s3);
          else {
            const e3 = Math.min(r2.slidesPerGroupSkip, c2);
            d2 = e3 + Math.floor((c2 - e3) / r2.slidesPerGroup);
          }
          if (d2 >= i2.length && (d2 = i2.length - 1), c2 === n2)
            return void (d2 !== o2 && (t2.snapIndex = d2, t2.emit("snapIndexChange")));
          const p2 = parseInt(t2.slides.eq(c2).attr("data-swiper-slide-index") || c2, 10);
          Object.assign(t2, { snapIndex: d2, realIndex: p2, previousIndex: n2, activeIndex: c2 }), t2.emit("activeIndexChange"), t2.emit("snapIndexChange"), l2 !== p2 && t2.emit("realIndexChange"), (t2.initialized || t2.params.runCallbacksOnInit) && t2.emit("slideChange");
        }, updateClickedSlide: function(e2) {
          const t2 = this, s3 = t2.params, a2 = d(e2.target).closest(`.${s3.slideClass}`)[0];
          let i2, r2 = false;
          if (a2) {
            for (let e3 = 0; e3 < t2.slides.length; e3 += 1)
              if (t2.slides[e3] === a2) {
                r2 = true, i2 = e3;
                break;
              }
          }
          if (!a2 || !r2)
            return t2.clickedSlide = void 0, void (t2.clickedIndex = void 0);
          t2.clickedSlide = a2, t2.virtual && t2.params.virtual.enabled ? t2.clickedIndex = parseInt(d(a2).attr("data-swiper-slide-index"), 10) : t2.clickedIndex = i2, s3.slideToClickedSlide && t2.clickedIndex !== void 0 && t2.clickedIndex !== t2.activeIndex && t2.slideToClickedSlide();
        } }, translate: { getTranslate: function(e2 = this.isHorizontal() ? "x" : "y") {
          const { params: t2, rtlTranslate: s3, translate: a2, $wrapperEl: i2 } = this;
          if (t2.virtualTranslate)
            return s3 ? -a2 : a2;
          if (t2.cssMode)
            return a2;
          let r2 = h(i2[0], e2);
          return s3 && (r2 = -r2), r2 || 0;
        }, setTranslate: function(e2, t2) {
          const s3 = this, { rtlTranslate: a2, params: i2, $wrapperEl: r2, wrapperEl: n2, progress: l2 } = s3;
          let o2, d2 = 0, c2 = 0;
          s3.isHorizontal() ? d2 = a2 ? -e2 : e2 : c2 = e2, i2.roundLengths && (d2 = Math.floor(d2), c2 = Math.floor(c2)), i2.cssMode ? n2[s3.isHorizontal() ? "scrollLeft" : "scrollTop"] = s3.isHorizontal() ? -d2 : -c2 : i2.virtualTranslate || r2.transform(`translate3d(${d2}px, ${c2}px, 0px)`), s3.previousTranslate = s3.translate, s3.translate = s3.isHorizontal() ? d2 : c2;
          const p2 = s3.maxTranslate() - s3.minTranslate();
          o2 = p2 === 0 ? 0 : (e2 - s3.minTranslate()) / p2, o2 !== l2 && s3.updateProgress(e2), s3.emit("setTranslate", s3.translate, t2);
        }, minTranslate: function() {
          return -this.snapGrid[0];
        }, maxTranslate: function() {
          return -this.snapGrid[this.snapGrid.length - 1];
        }, translateTo: function(e2 = 0, t2 = this.params.speed, s3 = true, a2 = true, i2) {
          const r2 = this, { params: n2, wrapperEl: l2 } = r2;
          if (r2.animating && n2.preventInteractionOnTransition)
            return false;
          const o2 = r2.minTranslate(), d2 = r2.maxTranslate();
          let c2;
          if (c2 = a2 && e2 > o2 ? o2 : a2 && e2 < d2 ? d2 : e2, r2.updateProgress(c2), n2.cssMode) {
            const e3 = r2.isHorizontal();
            if (t2 === 0)
              l2[e3 ? "scrollLeft" : "scrollTop"] = -c2;
            else {
              if (!r2.support.smoothScroll)
                return v({ swiper: r2, targetPosition: -c2, side: e3 ? "left" : "top" }), true;
              l2.scrollTo({ [e3 ? "left" : "top"]: -c2, behavior: "smooth" });
            }
            return true;
          }
          return t2 === 0 ? (r2.setTransition(0), r2.setTranslate(c2), s3 && (r2.emit("beforeTransitionStart", t2, i2), r2.emit("transitionEnd"))) : (r2.setTransition(t2), r2.setTranslate(c2), s3 && (r2.emit("beforeTransitionStart", t2, i2), r2.emit("transitionStart")), r2.animating || (r2.animating = true, r2.onTranslateToWrapperTransitionEnd || (r2.onTranslateToWrapperTransitionEnd = function(e3) {
            r2 && !r2.destroyed && e3.target === this && (r2.$wrapperEl[0].removeEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd), r2.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r2.onTranslateToWrapperTransitionEnd), r2.onTranslateToWrapperTransitionEnd = null, delete r2.onTranslateToWrapperTransitionEnd, s3 && r2.emit("transitionEnd"));
          }), r2.$wrapperEl[0].addEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd), r2.$wrapperEl[0].addEventListener("webkitTransitionEnd", r2.onTranslateToWrapperTransitionEnd))), true;
        } }, transition: { setTransition: function(e2, t2) {
          const s3 = this;
          s3.params.cssMode || s3.$wrapperEl.transition(e2), s3.emit("setTransition", e2, t2);
        }, transitionStart: function(e2 = true, t2) {
          const s3 = this, { params: a2 } = s3;
          a2.cssMode || (a2.autoHeight && s3.updateAutoHeight(), $({ swiper: s3, runCallbacks: e2, direction: t2, step: "Start" }));
        }, transitionEnd: function(e2 = true, t2) {
          const s3 = this, { params: a2 } = s3;
          s3.animating = false, a2.cssMode || (s3.setTransition(0), $({ swiper: s3, runCallbacks: e2, direction: t2, step: "End" }));
        } }, slide: { slideTo: function(e2 = 0, t2 = this.params.speed, s3 = true, a2, i2) {
          if (typeof e2 != "number" && typeof e2 != "string")
            throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e2}] given.`);
          if (typeof e2 == "string") {
            const t3 = parseInt(e2, 10);
            if (!isFinite(t3))
              throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e2}] given.`);
            e2 = t3;
          }
          const r2 = this;
          let n2 = e2;
          n2 < 0 && (n2 = 0);
          const { params: l2, snapGrid: o2, slidesGrid: d2, previousIndex: c2, activeIndex: p2, rtlTranslate: u2, wrapperEl: h2, enabled: m2 } = r2;
          if (r2.animating && l2.preventInteractionOnTransition || !m2 && !a2 && !i2)
            return false;
          const f2 = Math.min(r2.params.slidesPerGroupSkip, n2);
          let g2 = f2 + Math.floor((n2 - f2) / r2.params.slidesPerGroup);
          g2 >= o2.length && (g2 = o2.length - 1), (p2 || l2.initialSlide || 0) === (c2 || 0) && s3 && r2.emit("beforeSlideChangeStart");
          const w2 = -o2[g2];
          if (r2.updateProgress(w2), l2.normalizeSlideIndex)
            for (let e3 = 0; e3 < d2.length; e3 += 1) {
              const t3 = -Math.floor(100 * w2), s4 = Math.floor(100 * d2[e3]), a3 = Math.floor(100 * d2[e3 + 1]);
              d2[e3 + 1] !== void 0 ? t3 >= s4 && t3 < a3 - (a3 - s4) / 2 ? n2 = e3 : t3 >= s4 && t3 < a3 && (n2 = e3 + 1) : t3 >= s4 && (n2 = e3);
            }
          if (r2.initialized && n2 !== p2) {
            if (!r2.allowSlideNext && w2 < r2.translate && w2 < r2.minTranslate())
              return false;
            if (!r2.allowSlidePrev && w2 > r2.translate && w2 > r2.maxTranslate() && (p2 || 0) !== n2)
              return false;
          }
          let b2;
          if (b2 = n2 > p2 ? "next" : n2 < p2 ? "prev" : "reset", u2 && -w2 === r2.translate || !u2 && w2 === r2.translate)
            return r2.updateActiveIndex(n2), l2.autoHeight && r2.updateAutoHeight(), r2.updateSlidesClasses(), l2.effect !== "slide" && r2.setTranslate(w2), b2 !== "reset" && (r2.transitionStart(s3, b2), r2.transitionEnd(s3, b2)), false;
          if (l2.cssMode) {
            const e3 = r2.isHorizontal(), s4 = u2 ? w2 : -w2;
            if (t2 === 0) {
              const t3 = r2.virtual && r2.params.virtual.enabled;
              t3 && (r2.wrapperEl.style.scrollSnapType = "none", r2._immediateVirtual = true), h2[e3 ? "scrollLeft" : "scrollTop"] = s4, t3 && requestAnimationFrame(() => {
                r2.wrapperEl.style.scrollSnapType = "", r2._swiperImmediateVirtual = false;
              });
            } else {
              if (!r2.support.smoothScroll)
                return v({ swiper: r2, targetPosition: s4, side: e3 ? "left" : "top" }), true;
              h2.scrollTo({ [e3 ? "left" : "top"]: s4, behavior: "smooth" });
            }
            return true;
          }
          return t2 === 0 ? (r2.setTransition(0), r2.setTranslate(w2), r2.updateActiveIndex(n2), r2.updateSlidesClasses(), r2.emit("beforeTransitionStart", t2, a2), r2.transitionStart(s3, b2), r2.transitionEnd(s3, b2)) : (r2.setTransition(t2), r2.setTranslate(w2), r2.updateActiveIndex(n2), r2.updateSlidesClasses(), r2.emit("beforeTransitionStart", t2, a2), r2.transitionStart(s3, b2), r2.animating || (r2.animating = true, r2.onSlideToWrapperTransitionEnd || (r2.onSlideToWrapperTransitionEnd = function(e3) {
            r2 && !r2.destroyed && e3.target === this && (r2.$wrapperEl[0].removeEventListener("transitionend", r2.onSlideToWrapperTransitionEnd), r2.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r2.onSlideToWrapperTransitionEnd), r2.onSlideToWrapperTransitionEnd = null, delete r2.onSlideToWrapperTransitionEnd, r2.transitionEnd(s3, b2));
          }), r2.$wrapperEl[0].addEventListener("transitionend", r2.onSlideToWrapperTransitionEnd), r2.$wrapperEl[0].addEventListener("webkitTransitionEnd", r2.onSlideToWrapperTransitionEnd))), true;
        }, slideToLoop: function(e2 = 0, t2 = this.params.speed, s3 = true, a2) {
          const i2 = this;
          let r2 = e2;
          return i2.params.loop && (r2 += i2.loopedSlides), i2.slideTo(r2, t2, s3, a2);
        }, slideNext: function(e2 = this.params.speed, t2 = true, s3) {
          const a2 = this, { animating: i2, enabled: r2, params: n2 } = a2;
          if (!r2)
            return a2;
          let l2 = n2.slidesPerGroup;
          n2.slidesPerView === "auto" && n2.slidesPerGroup === 1 && n2.slidesPerGroupAuto && (l2 = Math.max(a2.slidesPerViewDynamic("current", true), 1));
          const o2 = a2.activeIndex < n2.slidesPerGroupSkip ? 1 : l2;
          if (n2.loop) {
            if (i2 && n2.loopPreventsSlide)
              return false;
            a2.loopFix(), a2._clientLeft = a2.$wrapperEl[0].clientLeft;
          }
          return a2.slideTo(a2.activeIndex + o2, e2, t2, s3);
        }, slidePrev: function(e2 = this.params.speed, t2 = true, s3) {
          const a2 = this, { params: i2, animating: r2, snapGrid: n2, slidesGrid: l2, rtlTranslate: o2, enabled: d2 } = a2;
          if (!d2)
            return a2;
          if (i2.loop) {
            if (r2 && i2.loopPreventsSlide)
              return false;
            a2.loopFix(), a2._clientLeft = a2.$wrapperEl[0].clientLeft;
          }
          function c2(e3) {
            return e3 < 0 ? -Math.floor(Math.abs(e3)) : Math.floor(e3);
          }
          const p2 = c2(o2 ? a2.translate : -a2.translate), u2 = n2.map((e3) => c2(e3));
          let h2 = n2[u2.indexOf(p2) - 1];
          if (h2 === void 0 && i2.cssMode) {
            let e3;
            n2.forEach((t3, s4) => {
              p2 >= t3 && (e3 = s4);
            }), e3 !== void 0 && (h2 = n2[e3 > 0 ? e3 - 1 : e3]);
          }
          let m2 = 0;
          return h2 !== void 0 && (m2 = l2.indexOf(h2), m2 < 0 && (m2 = a2.activeIndex - 1), i2.slidesPerView === "auto" && i2.slidesPerGroup === 1 && i2.slidesPerGroupAuto && (m2 = m2 - a2.slidesPerViewDynamic("previous", true) + 1, m2 = Math.max(m2, 0))), a2.slideTo(m2, e2, t2, s3);
        }, slideReset: function(e2 = this.params.speed, t2 = true, s3) {
          return this.slideTo(this.activeIndex, e2, t2, s3);
        }, slideToClosest: function(e2 = this.params.speed, t2 = true, s3, a2 = 0.5) {
          const i2 = this;
          let r2 = i2.activeIndex;
          const n2 = Math.min(i2.params.slidesPerGroupSkip, r2), l2 = n2 + Math.floor((r2 - n2) / i2.params.slidesPerGroup), o2 = i2.rtlTranslate ? i2.translate : -i2.translate;
          if (o2 >= i2.snapGrid[l2]) {
            const e3 = i2.snapGrid[l2];
            o2 - e3 > (i2.snapGrid[l2 + 1] - e3) * a2 && (r2 += i2.params.slidesPerGroup);
          } else {
            const e3 = i2.snapGrid[l2 - 1];
            o2 - e3 <= (i2.snapGrid[l2] - e3) * a2 && (r2 -= i2.params.slidesPerGroup);
          }
          return r2 = Math.max(r2, 0), r2 = Math.min(r2, i2.slidesGrid.length - 1), i2.slideTo(r2, e2, t2, s3);
        }, slideToClickedSlide: function() {
          const e2 = this, { params: t2, $wrapperEl: s3 } = e2, a2 = t2.slidesPerView === "auto" ? e2.slidesPerViewDynamic() : t2.slidesPerView;
          let i2, r2 = e2.clickedIndex;
          if (t2.loop) {
            if (e2.animating)
              return;
            i2 = parseInt(d(e2.clickedSlide).attr("data-swiper-slide-index"), 10), t2.centeredSlides ? r2 < e2.loopedSlides - a2 / 2 || r2 > e2.slides.length - e2.loopedSlides + a2 / 2 ? (e2.loopFix(), r2 = s3.children(`.${t2.slideClass}[data-swiper-slide-index="${i2}"]:not(.${t2.slideDuplicateClass})`).eq(0).index(), p(() => {
              e2.slideTo(r2);
            })) : e2.slideTo(r2) : r2 > e2.slides.length - a2 ? (e2.loopFix(), r2 = s3.children(`.${t2.slideClass}[data-swiper-slide-index="${i2}"]:not(.${t2.slideDuplicateClass})`).eq(0).index(), p(() => {
              e2.slideTo(r2);
            })) : e2.slideTo(r2);
          } else
            e2.slideTo(r2);
        } }, loop: { loopCreate: function() {
          const e2 = this, t2 = a(), { params: s3, $wrapperEl: i2 } = e2, r2 = d(i2.children()[0].parentNode);
          r2.children(`.${s3.slideClass}.${s3.slideDuplicateClass}`).remove();
          let n2 = r2.children(`.${s3.slideClass}`);
          if (s3.loopFillGroupWithBlank) {
            const e3 = s3.slidesPerGroup - n2.length % s3.slidesPerGroup;
            if (e3 !== s3.slidesPerGroup) {
              for (let a2 = 0; a2 < e3; a2 += 1) {
                const e4 = d(t2.createElement("div")).addClass(`${s3.slideClass} ${s3.slideBlankClass}`);
                r2.append(e4);
              }
              n2 = r2.children(`.${s3.slideClass}`);
            }
          }
          s3.slidesPerView !== "auto" || s3.loopedSlides || (s3.loopedSlides = n2.length), e2.loopedSlides = Math.ceil(parseFloat(s3.loopedSlides || s3.slidesPerView, 10)), e2.loopedSlides += s3.loopAdditionalSlides, e2.loopedSlides > n2.length && (e2.loopedSlides = n2.length);
          const l2 = [], o2 = [];
          n2.each((t3, s4) => {
            const a2 = d(t3);
            s4 < e2.loopedSlides && o2.push(t3), s4 < n2.length && s4 >= n2.length - e2.loopedSlides && l2.push(t3), a2.attr("data-swiper-slide-index", s4);
          });
          for (let e3 = 0; e3 < o2.length; e3 += 1)
            r2.append(d(o2[e3].cloneNode(true)).addClass(s3.slideDuplicateClass));
          for (let e3 = l2.length - 1; e3 >= 0; e3 -= 1)
            r2.prepend(d(l2[e3].cloneNode(true)).addClass(s3.slideDuplicateClass));
        }, loopFix: function() {
          const e2 = this;
          e2.emit("beforeLoopFix");
          const { activeIndex: t2, slides: s3, loopedSlides: a2, allowSlidePrev: i2, allowSlideNext: r2, snapGrid: n2, rtlTranslate: l2 } = e2;
          let o2;
          e2.allowSlidePrev = true, e2.allowSlideNext = true;
          const d2 = -n2[t2] - e2.getTranslate();
          if (t2 < a2) {
            o2 = s3.length - 3 * a2 + t2, o2 += a2;
            e2.slideTo(o2, 0, false, true) && d2 !== 0 && e2.setTranslate((l2 ? -e2.translate : e2.translate) - d2);
          } else if (t2 >= s3.length - a2) {
            o2 = -s3.length + t2 + a2, o2 += a2;
            e2.slideTo(o2, 0, false, true) && d2 !== 0 && e2.setTranslate((l2 ? -e2.translate : e2.translate) - d2);
          }
          e2.allowSlidePrev = i2, e2.allowSlideNext = r2, e2.emit("loopFix");
        }, loopDestroy: function() {
          const { $wrapperEl: e2, params: t2, slides: s3 } = this;
          e2.children(`.${t2.slideClass}.${t2.slideDuplicateClass},.${t2.slideClass}.${t2.slideBlankClass}`).remove(), s3.removeAttr("data-swiper-slide-index");
        } }, grabCursor: { setGrabCursor: function(e2) {
          const t2 = this;
          if (t2.support.touch || !t2.params.simulateTouch || t2.params.watchOverflow && t2.isLocked || t2.params.cssMode)
            return;
          const s3 = t2.params.touchEventsTarget === "container" ? t2.el : t2.wrapperEl;
          s3.style.cursor = "move", s3.style.cursor = e2 ? "-webkit-grabbing" : "-webkit-grab", s3.style.cursor = e2 ? "-moz-grabbin" : "-moz-grab", s3.style.cursor = e2 ? "grabbing" : "grab";
        }, unsetGrabCursor: function() {
          const e2 = this;
          e2.support.touch || e2.params.watchOverflow && e2.isLocked || e2.params.cssMode || (e2[e2.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "");
        } }, events: { attachEvents: function() {
          const e2 = this, t2 = a(), { params: s3, support: i2 } = e2;
          e2.onTouchStart = S.bind(e2), e2.onTouchMove = M.bind(e2), e2.onTouchEnd = P.bind(e2), s3.cssMode && (e2.onScroll = O.bind(e2)), e2.onClick = z.bind(e2), i2.touch && !I && (t2.addEventListener("touchstart", L), I = true), A(e2, "on");
        }, detachEvents: function() {
          A(this, "off");
        } }, breakpoints: { setBreakpoint: function() {
          const e2 = this, { activeIndex: t2, initialized: s3, loopedSlides: a2 = 0, params: i2, $el: r2 } = e2, n2 = i2.breakpoints;
          if (!n2 || n2 && Object.keys(n2).length === 0)
            return;
          const l2 = e2.getBreakpoint(n2, e2.params.breakpointsBase, e2.el);
          if (!l2 || e2.currentBreakpoint === l2)
            return;
          const o2 = (l2 in n2 ? n2[l2] : void 0) || e2.originalParams, d2 = D(e2, i2), c2 = D(e2, o2), p2 = i2.enabled;
          d2 && !c2 ? (r2.removeClass(`${i2.containerModifierClass}grid ${i2.containerModifierClass}grid-column`), e2.emitContainerClasses()) : !d2 && c2 && (r2.addClass(`${i2.containerModifierClass}grid`), (o2.grid.fill && o2.grid.fill === "column" || !o2.grid.fill && i2.grid.fill === "column") && r2.addClass(`${i2.containerModifierClass}grid-column`), e2.emitContainerClasses());
          const u2 = o2.direction && o2.direction !== i2.direction, h2 = i2.loop && (o2.slidesPerView !== i2.slidesPerView || u2);
          u2 && s3 && e2.changeDirection(), f(e2.params, o2);
          const m2 = e2.params.enabled;
          Object.assign(e2, { allowTouchMove: e2.params.allowTouchMove, allowSlideNext: e2.params.allowSlideNext, allowSlidePrev: e2.params.allowSlidePrev }), p2 && !m2 ? e2.disable() : !p2 && m2 && e2.enable(), e2.currentBreakpoint = l2, e2.emit("_beforeBreakpoint", o2), h2 && s3 && (e2.loopDestroy(), e2.loopCreate(), e2.updateSlides(), e2.slideTo(t2 - a2 + e2.loopedSlides, 0, false)), e2.emit("breakpoint", o2);
        }, getBreakpoint: function(e2, t2 = "window", s3) {
          if (!e2 || t2 === "container" && !s3)
            return;
          let a2 = false;
          const i2 = r(), n2 = t2 === "window" ? i2.innerHeight : s3.clientHeight, l2 = Object.keys(e2).map((e3) => {
            if (typeof e3 == "string" && e3.indexOf("@") === 0) {
              const t3 = parseFloat(e3.substr(1));
              return { value: n2 * t3, point: e3 };
            }
            return { value: e3, point: e3 };
          });
          l2.sort((e3, t3) => parseInt(e3.value, 10) - parseInt(t3.value, 10));
          for (let e3 = 0; e3 < l2.length; e3 += 1) {
            const { point: r2, value: n3 } = l2[e3];
            t2 === "window" ? i2.matchMedia(`(min-width: ${n3}px)`).matches && (a2 = r2) : n3 <= s3.clientWidth && (a2 = r2);
          }
          return a2 || "max";
        } }, checkOverflow: { checkOverflow: function() {
          const e2 = this, { isLocked: t2, params: s3 } = e2, { slidesOffsetBefore: a2 } = s3;
          if (a2) {
            const t3 = e2.slides.length - 1, s4 = e2.slidesGrid[t3] + e2.slidesSizesGrid[t3] + 2 * a2;
            e2.isLocked = e2.size > s4;
          } else
            e2.isLocked = e2.snapGrid.length === 1;
          s3.allowSlideNext === true && (e2.allowSlideNext = !e2.isLocked), s3.allowSlidePrev === true && (e2.allowSlidePrev = !e2.isLocked), t2 && t2 !== e2.isLocked && (e2.isEnd = false), t2 !== e2.isLocked && e2.emit(e2.isLocked ? "lock" : "unlock");
        } }, classes: { addClasses: function() {
          const e2 = this, { classNames: t2, params: s3, rtl: a2, $el: i2, device: r2, support: n2 } = e2, l2 = function(e3, t3) {
            const s4 = [];
            return e3.forEach((e4) => {
              typeof e4 == "object" ? Object.keys(e4).forEach((a3) => {
                e4[a3] && s4.push(t3 + a3);
              }) : typeof e4 == "string" && s4.push(t3 + e4);
            }), s4;
          }(["initialized", s3.direction, { "pointer-events": !n2.touch }, { "free-mode": e2.params.freeMode && s3.freeMode.enabled }, { autoheight: s3.autoHeight }, { rtl: a2 }, { grid: s3.grid && s3.grid.rows > 1 }, { "grid-column": s3.grid && s3.grid.rows > 1 && s3.grid.fill === "column" }, { android: r2.android }, { ios: r2.ios }, { "css-mode": s3.cssMode }, { centered: s3.cssMode && s3.centeredSlides }], s3.containerModifierClass);
          t2.push(...l2), i2.addClass([...t2].join(" ")), e2.emitContainerClasses();
        }, removeClasses: function() {
          const { $el: e2, classNames: t2 } = this;
          e2.removeClass(t2.join(" ")), this.emitContainerClasses();
        } }, images: { loadImage: function(e2, t2, s3, a2, i2, n2) {
          const l2 = r();
          let o2;
          function c2() {
            n2 && n2();
          }
          d(e2).parent("picture")[0] || e2.complete && i2 ? c2() : t2 ? (o2 = new l2.Image(), o2.onload = c2, o2.onerror = c2, a2 && (o2.sizes = a2), s3 && (o2.srcset = s3), t2 && (o2.src = t2)) : c2();
        }, preloadImages: function() {
          const e2 = this;
          function t2() {
            e2 != null && e2 && !e2.destroyed && (e2.imagesLoaded !== void 0 && (e2.imagesLoaded += 1), e2.imagesLoaded === e2.imagesToLoad.length && (e2.params.updateOnImagesReady && e2.update(), e2.emit("imagesReady")));
          }
          e2.imagesToLoad = e2.$el.find("img");
          for (let s3 = 0; s3 < e2.imagesToLoad.length; s3 += 1) {
            const a2 = e2.imagesToLoad[s3];
            e2.loadImage(a2, a2.currentSrc || a2.getAttribute("src"), a2.srcset || a2.getAttribute("srcset"), a2.sizes || a2.getAttribute("sizes"), true, t2);
          }
        } } }, X = {};
        class H {
          constructor(...e2) {
            let t2, s3;
            if (e2.length === 1 && e2[0].constructor && Object.prototype.toString.call(e2[0]).slice(8, -1) === "Object" ? s3 = e2[0] : [t2, s3] = e2, s3 || (s3 = {}), s3 = f({}, s3), t2 && !s3.el && (s3.el = t2), s3.el && d(s3.el).length > 1) {
              const e3 = [];
              return d(s3.el).each((t3) => {
                const a3 = f({}, s3, { el: t3 });
                e3.push(new H(a3));
              }), e3;
            }
            const a2 = this;
            a2.__swiper__ = true, a2.support = y(), a2.device = E({ userAgent: s3.userAgent }), a2.browser = T(), a2.eventsListeners = {}, a2.eventsAnyListeners = [], a2.modules = [...a2.__modules__], s3.modules && Array.isArray(s3.modules) && a2.modules.push(...s3.modules);
            const i2 = {};
            a2.modules.forEach((e3) => {
              e3({ swiper: a2, extendParams: N(s3, i2), on: a2.on.bind(a2), once: a2.once.bind(a2), off: a2.off.bind(a2), emit: a2.emit.bind(a2) });
            });
            const r2 = f({}, G, i2);
            return a2.params = f({}, r2, X, s3), a2.originalParams = f({}, a2.params), a2.passedParams = f({}, s3), a2.params && a2.params.on && Object.keys(a2.params.on).forEach((e3) => {
              a2.on(e3, a2.params.on[e3]);
            }), a2.params && a2.params.onAny && a2.onAny(a2.params.onAny), a2.$ = d, Object.assign(a2, { enabled: a2.params.enabled, el: t2, classNames: [], slides: d(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: () => a2.params.direction === "horizontal", isVertical: () => a2.params.direction === "vertical", activeIndex: 0, realIndex: 0, isBeginning: true, isEnd: false, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: false, allowSlideNext: a2.params.allowSlideNext, allowSlidePrev: a2.params.allowSlidePrev, touchEvents: function() {
              const e3 = ["touchstart", "touchmove", "touchend", "touchcancel"], t3 = ["pointerdown", "pointermove", "pointerup"];
              return a2.touchEventsTouch = { start: e3[0], move: e3[1], end: e3[2], cancel: e3[3] }, a2.touchEventsDesktop = { start: t3[0], move: t3[1], end: t3[2] }, a2.support.touch || !a2.params.simulateTouch ? a2.touchEventsTouch : a2.touchEventsDesktop;
            }(), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: a2.params.focusableElements, lastClickTime: u(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: true, allowTouchMove: a2.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), a2.emit("_swiper"), a2.params.init && a2.init(), a2;
          }
          enable() {
            const e2 = this;
            e2.enabled || (e2.enabled = true, e2.params.grabCursor && e2.setGrabCursor(), e2.emit("enable"));
          }
          disable() {
            const e2 = this;
            e2.enabled && (e2.enabled = false, e2.params.grabCursor && e2.unsetGrabCursor(), e2.emit("disable"));
          }
          setProgress(e2, t2) {
            const s3 = this;
            e2 = Math.min(Math.max(e2, 0), 1);
            const a2 = s3.minTranslate(), i2 = (s3.maxTranslate() - a2) * e2 + a2;
            s3.translateTo(i2, t2 === void 0 ? 0 : t2), s3.updateActiveIndex(), s3.updateSlidesClasses();
          }
          emitContainerClasses() {
            const e2 = this;
            if (!e2.params._emitClasses || !e2.el)
              return;
            const t2 = e2.el.className.split(" ").filter((t3) => t3.indexOf("swiper") === 0 || t3.indexOf(e2.params.containerModifierClass) === 0);
            e2.emit("_containerClasses", t2.join(" "));
          }
          getSlideClasses(e2) {
            const t2 = this;
            return e2.className.split(" ").filter((e3) => e3.indexOf("swiper-slide") === 0 || e3.indexOf(t2.params.slideClass) === 0).join(" ");
          }
          emitSlidesClasses() {
            const e2 = this;
            if (!e2.params._emitClasses || !e2.el)
              return;
            const t2 = [];
            e2.slides.each((s3) => {
              const a2 = e2.getSlideClasses(s3);
              t2.push({ slideEl: s3, classNames: a2 }), e2.emit("_slideClass", s3, a2);
            }), e2.emit("_slideClasses", t2);
          }
          slidesPerViewDynamic(e2 = "current", t2 = false) {
            const { params: s3, slides: a2, slidesGrid: i2, slidesSizesGrid: r2, size: n2, activeIndex: l2 } = this;
            let o2 = 1;
            if (s3.centeredSlides) {
              let e3, t3 = a2[l2].swiperSlideSize;
              for (let s4 = l2 + 1; s4 < a2.length; s4 += 1)
                a2[s4] && !e3 && (t3 += a2[s4].swiperSlideSize, o2 += 1, t3 > n2 && (e3 = true));
              for (let s4 = l2 - 1; s4 >= 0; s4 -= 1)
                a2[s4] && !e3 && (t3 += a2[s4].swiperSlideSize, o2 += 1, t3 > n2 && (e3 = true));
            } else if (e2 === "current")
              for (let e3 = l2 + 1; e3 < a2.length; e3 += 1) {
                (t2 ? i2[e3] + r2[e3] - i2[l2] < n2 : i2[e3] - i2[l2] < n2) && (o2 += 1);
              }
            else
              for (let e3 = l2 - 1; e3 >= 0; e3 -= 1) {
                i2[l2] - i2[e3] < n2 && (o2 += 1);
              }
            return o2;
          }
          update() {
            const e2 = this;
            if (!e2 || e2.destroyed)
              return;
            const { snapGrid: t2, params: s3 } = e2;
            function a2() {
              const t3 = e2.rtlTranslate ? -1 * e2.translate : e2.translate, s4 = Math.min(Math.max(t3, e2.maxTranslate()), e2.minTranslate());
              e2.setTranslate(s4), e2.updateActiveIndex(), e2.updateSlidesClasses();
            }
            let i2;
            s3.breakpoints && e2.setBreakpoint(), e2.updateSize(), e2.updateSlides(), e2.updateProgress(), e2.updateSlidesClasses(), e2.params.freeMode && e2.params.freeMode.enabled ? (a2(), e2.params.autoHeight && e2.updateAutoHeight()) : (i2 = (e2.params.slidesPerView === "auto" || e2.params.slidesPerView > 1) && e2.isEnd && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true), i2 || a2()), s3.watchOverflow && t2 !== e2.snapGrid && e2.checkOverflow(), e2.emit("update");
          }
          changeDirection(e2, t2 = true) {
            const s3 = this, a2 = s3.params.direction;
            return e2 || (e2 = a2 === "horizontal" ? "vertical" : "horizontal"), e2 === a2 || e2 !== "horizontal" && e2 !== "vertical" || (s3.$el.removeClass(`${s3.params.containerModifierClass}${a2}`).addClass(`${s3.params.containerModifierClass}${e2}`), s3.emitContainerClasses(), s3.params.direction = e2, s3.slides.each((t3) => {
              e2 === "vertical" ? t3.style.width = "" : t3.style.height = "";
            }), s3.emit("changeDirection"), t2 && s3.update()), s3;
          }
          mount(e2) {
            const t2 = this;
            if (t2.mounted)
              return true;
            const s3 = d(e2 || t2.params.el);
            if (!(e2 = s3[0]))
              return false;
            e2.swiper = t2;
            const i2 = () => `.${(t2.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r2 = (() => {
              if (e2 && e2.shadowRoot && e2.shadowRoot.querySelector) {
                const t3 = d(e2.shadowRoot.querySelector(i2()));
                return t3.children = (e3) => s3.children(e3), t3;
              }
              return s3.children(i2());
            })();
            if (r2.length === 0 && t2.params.createElements) {
              const e3 = a().createElement("div");
              r2 = d(e3), e3.className = t2.params.wrapperClass, s3.append(e3), s3.children(`.${t2.params.slideClass}`).each((e4) => {
                r2.append(e4);
              });
            }
            return Object.assign(t2, { $el: s3, el: e2, $wrapperEl: r2, wrapperEl: r2[0], mounted: true, rtl: e2.dir.toLowerCase() === "rtl" || s3.css("direction") === "rtl", rtlTranslate: t2.params.direction === "horizontal" && (e2.dir.toLowerCase() === "rtl" || s3.css("direction") === "rtl"), wrongRTL: r2.css("display") === "-webkit-box" }), true;
          }
          init(e2) {
            const t2 = this;
            if (t2.initialized)
              return t2;
            return t2.mount(e2) === false || (t2.emit("beforeInit"), t2.params.breakpoints && t2.setBreakpoint(), t2.addClasses(), t2.params.loop && t2.loopCreate(), t2.updateSize(), t2.updateSlides(), t2.params.watchOverflow && t2.checkOverflow(), t2.params.grabCursor && t2.enabled && t2.setGrabCursor(), t2.params.preloadImages && t2.preloadImages(), t2.params.loop ? t2.slideTo(t2.params.initialSlide + t2.loopedSlides, 0, t2.params.runCallbacksOnInit, false, true) : t2.slideTo(t2.params.initialSlide, 0, t2.params.runCallbacksOnInit, false, true), t2.attachEvents(), t2.initialized = true, t2.emit("init"), t2.emit("afterInit")), t2;
          }
          destroy(e2 = true, t2 = true) {
            const s3 = this, { params: a2, $el: i2, $wrapperEl: r2, slides: n2 } = s3;
            return s3.params === void 0 || s3.destroyed || (s3.emit("beforeDestroy"), s3.initialized = false, s3.detachEvents(), a2.loop && s3.loopDestroy(), t2 && (s3.removeClasses(), i2.removeAttr("style"), r2.removeAttr("style"), n2 && n2.length && n2.removeClass([a2.slideVisibleClass, a2.slideActiveClass, a2.slideNextClass, a2.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s3.emit("destroy"), Object.keys(s3.eventsListeners).forEach((e3) => {
              s3.off(e3);
            }), e2 !== false && (s3.$el[0].swiper = null, function(e3) {
              const t3 = e3;
              Object.keys(t3).forEach((e4) => {
                try {
                  t3[e4] = null;
                } catch (e5) {
                }
                try {
                  delete t3[e4];
                } catch (e5) {
                }
              });
            }(s3)), s3.destroyed = true), null;
          }
          static extendDefaults(e2) {
            f(X, e2);
          }
          static get extendedDefaults() {
            return X;
          }
          static get defaults() {
            return G;
          }
          static installModule(e2) {
            H.prototype.__modules__ || (H.prototype.__modules__ = []);
            const t2 = H.prototype.__modules__;
            typeof e2 == "function" && t2.indexOf(e2) < 0 && t2.push(e2);
          }
          static use(e2) {
            return Array.isArray(e2) ? (e2.forEach((e3) => H.installModule(e3)), H) : (H.installModule(e2), H);
          }
        }
        function Y(e2, t2, s3, i2) {
          const r2 = a();
          return e2.params.createElements && Object.keys(i2).forEach((a2) => {
            if (!s3[a2] && s3.auto === true) {
              let n2 = e2.$el.children(`.${i2[a2]}`)[0];
              n2 || (n2 = r2.createElement("div"), n2.className = i2[a2], e2.$el.append(n2)), s3[a2] = n2, t2[a2] = n2;
            }
          }), s3;
        }
        function W(e2 = "") {
          return `.${e2.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function R(e2) {
          const t2 = this, { $wrapperEl: s3, params: a2 } = t2;
          if (a2.loop && t2.loopDestroy(), typeof e2 == "object" && "length" in e2)
            for (let t3 = 0; t3 < e2.length; t3 += 1)
              e2[t3] && s3.append(e2[t3]);
          else
            s3.append(e2);
          a2.loop && t2.loopCreate(), a2.observer || t2.update();
        }
        function j(e2) {
          const t2 = this, { params: s3, $wrapperEl: a2, activeIndex: i2 } = t2;
          s3.loop && t2.loopDestroy();
          let r2 = i2 + 1;
          if (typeof e2 == "object" && "length" in e2) {
            for (let t3 = 0; t3 < e2.length; t3 += 1)
              e2[t3] && a2.prepend(e2[t3]);
            r2 = i2 + e2.length;
          } else
            a2.prepend(e2);
          s3.loop && t2.loopCreate(), s3.observer || t2.update(), t2.slideTo(r2, 0, false);
        }
        function _(e2, t2) {
          const s3 = this, { $wrapperEl: a2, params: i2, activeIndex: r2 } = s3;
          let n2 = r2;
          i2.loop && (n2 -= s3.loopedSlides, s3.loopDestroy(), s3.slides = a2.children(`.${i2.slideClass}`));
          const l2 = s3.slides.length;
          if (e2 <= 0)
            return void s3.prependSlide(t2);
          if (e2 >= l2)
            return void s3.appendSlide(t2);
          let o2 = n2 > e2 ? n2 + 1 : n2;
          const d2 = [];
          for (let t3 = l2 - 1; t3 >= e2; t3 -= 1) {
            const e3 = s3.slides.eq(t3);
            e3.remove(), d2.unshift(e3);
          }
          if (typeof t2 == "object" && "length" in t2) {
            for (let e3 = 0; e3 < t2.length; e3 += 1)
              t2[e3] && a2.append(t2[e3]);
            o2 = n2 > e2 ? n2 + t2.length : n2;
          } else
            a2.append(t2);
          for (let e3 = 0; e3 < d2.length; e3 += 1)
            a2.append(d2[e3]);
          i2.loop && s3.loopCreate(), i2.observer || s3.update(), i2.loop ? s3.slideTo(o2 + s3.loopedSlides, 0, false) : s3.slideTo(o2, 0, false);
        }
        function V(e2) {
          const t2 = this, { params: s3, $wrapperEl: a2, activeIndex: i2 } = t2;
          let r2 = i2;
          s3.loop && (r2 -= t2.loopedSlides, t2.loopDestroy(), t2.slides = a2.children(`.${s3.slideClass}`));
          let n2, l2 = r2;
          if (typeof e2 == "object" && "length" in e2) {
            for (let s4 = 0; s4 < e2.length; s4 += 1)
              n2 = e2[s4], t2.slides[n2] && t2.slides.eq(n2).remove(), n2 < l2 && (l2 -= 1);
            l2 = Math.max(l2, 0);
          } else
            n2 = e2, t2.slides[n2] && t2.slides.eq(n2).remove(), n2 < l2 && (l2 -= 1), l2 = Math.max(l2, 0);
          s3.loop && t2.loopCreate(), s3.observer || t2.update(), s3.loop ? t2.slideTo(l2 + t2.loopedSlides, 0, false) : t2.slideTo(l2, 0, false);
        }
        function q() {
          const e2 = this, t2 = [];
          for (let s3 = 0; s3 < e2.slides.length; s3 += 1)
            t2.push(s3);
          e2.removeSlide(t2);
        }
        function F(e2) {
          const { effect: t2, swiper: s3, on: a2, setTranslate: i2, setTransition: r2, overwriteParams: n2, perspective: l2 } = e2;
          a2("beforeInit", () => {
            if (s3.params.effect !== t2)
              return;
            s3.classNames.push(`${s3.params.containerModifierClass}${t2}`), l2 && l2() && s3.classNames.push(`${s3.params.containerModifierClass}3d`);
            const e3 = n2 ? n2() : {};
            Object.assign(s3.params, e3), Object.assign(s3.originalParams, e3);
          }), a2("setTranslate", () => {
            s3.params.effect === t2 && i2();
          }), a2("setTransition", (e3, a3) => {
            s3.params.effect === t2 && r2(a3);
          });
        }
        function U(e2, t2) {
          return e2.transformEl ? t2.find(e2.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" }) : t2;
        }
        function K({ swiper: e2, duration: t2, transformEl: s3, allSlides: a2 }) {
          const { slides: i2, activeIndex: r2, $wrapperEl: n2 } = e2;
          if (e2.params.virtualTranslate && t2 !== 0) {
            let t3, l2 = false;
            t3 = a2 ? s3 ? i2.find(s3) : i2 : s3 ? i2.eq(r2).find(s3) : i2.eq(r2), t3.transitionEnd(() => {
              if (l2)
                return;
              if (!e2 || e2.destroyed)
                return;
              l2 = true, e2.animating = false;
              const t4 = ["webkitTransitionEnd", "transitionend"];
              for (let e3 = 0; e3 < t4.length; e3 += 1)
                n2.trigger(t4[e3]);
            });
          }
        }
        function Z(e2, t2, s3) {
          const a2 = "swiper-slide-shadow" + (s3 ? `-${s3}` : ""), i2 = e2.transformEl ? t2.find(e2.transformEl) : t2;
          let r2 = i2.children(`.${a2}`);
          return r2.length || (r2 = d(`<div class="swiper-slide-shadow${s3 ? `-${s3}` : ""}"></div>`), i2.append(r2)), r2;
        }
        Object.keys(B).forEach((e2) => {
          Object.keys(B[e2]).forEach((t2) => {
            H.prototype[t2] = B[e2][t2];
          });
        }), H.use([function({ swiper: e2, on: t2, emit: s3 }) {
          const a2 = r();
          let i2 = null;
          const n2 = () => {
            e2 && !e2.destroyed && e2.initialized && (s3("beforeResize"), s3("resize"));
          }, l2 = () => {
            e2 && !e2.destroyed && e2.initialized && s3("orientationchange");
          };
          t2("init", () => {
            e2.params.resizeObserver && a2.ResizeObserver !== void 0 ? e2 && !e2.destroyed && e2.initialized && (i2 = new ResizeObserver((t3) => {
              const { width: s4, height: a3 } = e2;
              let i3 = s4, r2 = a3;
              t3.forEach(({ contentBoxSize: t4, contentRect: s5, target: a4 }) => {
                a4 && a4 !== e2.el || (i3 = s5 ? s5.width : (t4[0] || t4).inlineSize, r2 = s5 ? s5.height : (t4[0] || t4).blockSize);
              }), i3 === s4 && r2 === a3 || n2();
            }), i2.observe(e2.el)) : (a2.addEventListener("resize", n2), a2.addEventListener("orientationchange", l2));
          }), t2("destroy", () => {
            i2 && i2.unobserve && e2.el && (i2.unobserve(e2.el), i2 = null), a2.removeEventListener("resize", n2), a2.removeEventListener("orientationchange", l2);
          });
        }, function({ swiper: e2, extendParams: t2, on: s3, emit: a2 }) {
          const i2 = [], n2 = r(), l2 = (e3, t3 = {}) => {
            const s4 = new (n2.MutationObserver || n2.WebkitMutationObserver)((e4) => {
              if (e4.length === 1)
                return void a2("observerUpdate", e4[0]);
              const t4 = function() {
                a2("observerUpdate", e4[0]);
              };
              n2.requestAnimationFrame ? n2.requestAnimationFrame(t4) : n2.setTimeout(t4, 0);
            });
            s4.observe(e3, { attributes: t3.attributes === void 0 || t3.attributes, childList: t3.childList === void 0 || t3.childList, characterData: t3.characterData === void 0 || t3.characterData }), i2.push(s4);
          };
          t2({ observer: false, observeParents: false, observeSlideChildren: false }), s3("init", () => {
            if (e2.params.observer) {
              if (e2.params.observeParents) {
                const t3 = e2.$el.parents();
                for (let e3 = 0; e3 < t3.length; e3 += 1)
                  l2(t3[e3]);
              }
              l2(e2.$el[0], { childList: e2.params.observeSlideChildren }), l2(e2.$wrapperEl[0], { attributes: false });
            }
          }), s3("destroy", () => {
            i2.forEach((e3) => {
              e3.disconnect();
            }), i2.splice(0, i2.length);
          });
        }]);
        const J = [function({ swiper: e2, extendParams: t2, on: s3 }) {
          let a2;
          function i2(t3, s4) {
            const a3 = e2.params.virtual;
            if (a3.cache && e2.virtual.cache[s4])
              return e2.virtual.cache[s4];
            const i3 = a3.renderSlide ? d(a3.renderSlide.call(e2, t3, s4)) : d(`<div class="${e2.params.slideClass}" data-swiper-slide-index="${s4}">${t3}</div>`);
            return i3.attr("data-swiper-slide-index") || i3.attr("data-swiper-slide-index", s4), a3.cache && (e2.virtual.cache[s4] = i3), i3;
          }
          function r2(t3) {
            const { slidesPerView: s4, slidesPerGroup: a3, centeredSlides: r3 } = e2.params, { addSlidesBefore: n2, addSlidesAfter: l2 } = e2.params.virtual, { from: o2, to: d2, slides: c2, slidesGrid: p2, offset: u2 } = e2.virtual;
            e2.params.cssMode || e2.updateActiveIndex();
            const h2 = e2.activeIndex || 0;
            let m2, f2, g2;
            m2 = e2.rtlTranslate ? "right" : e2.isHorizontal() ? "left" : "top", r3 ? (f2 = Math.floor(s4 / 2) + a3 + l2, g2 = Math.floor(s4 / 2) + a3 + n2) : (f2 = s4 + (a3 - 1) + l2, g2 = a3 + n2);
            const v2 = Math.max((h2 || 0) - g2, 0), w2 = Math.min((h2 || 0) + f2, c2.length - 1), b2 = (e2.slidesGrid[v2] || 0) - (e2.slidesGrid[0] || 0);
            function x2() {
              e2.updateSlides(), e2.updateProgress(), e2.updateSlidesClasses(), e2.lazy && e2.params.lazy.enabled && e2.lazy.load();
            }
            if (Object.assign(e2.virtual, { from: v2, to: w2, offset: b2, slidesGrid: e2.slidesGrid }), o2 === v2 && d2 === w2 && !t3)
              return e2.slidesGrid !== p2 && b2 !== u2 && e2.slides.css(m2, `${b2}px`), void e2.updateProgress();
            if (e2.params.virtual.renderExternal)
              return e2.params.virtual.renderExternal.call(e2, { offset: b2, from: v2, to: w2, slides: function() {
                const e3 = [];
                for (let t4 = v2; t4 <= w2; t4 += 1)
                  e3.push(c2[t4]);
                return e3;
              }() }), void (e2.params.virtual.renderExternalUpdate && x2());
            const y2 = [], E2 = [];
            if (t3)
              e2.$wrapperEl.find(`.${e2.params.slideClass}`).remove();
            else
              for (let t4 = o2; t4 <= d2; t4 += 1)
                (t4 < v2 || t4 > w2) && e2.$wrapperEl.find(`.${e2.params.slideClass}[data-swiper-slide-index="${t4}"]`).remove();
            for (let e3 = 0; e3 < c2.length; e3 += 1)
              e3 >= v2 && e3 <= w2 && (d2 === void 0 || t3 ? E2.push(e3) : (e3 > d2 && E2.push(e3), e3 < o2 && y2.push(e3)));
            E2.forEach((t4) => {
              e2.$wrapperEl.append(i2(c2[t4], t4));
            }), y2.sort((e3, t4) => t4 - e3).forEach((t4) => {
              e2.$wrapperEl.prepend(i2(c2[t4], t4));
            }), e2.$wrapperEl.children(".swiper-slide").css(m2, `${b2}px`), x2();
          }
          t2({ virtual: { enabled: false, slides: [], cache: true, renderSlide: null, renderExternal: null, renderExternalUpdate: true, addSlidesBefore: 0, addSlidesAfter: 0 } }), e2.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] }, s3("beforeInit", () => {
            e2.params.virtual.enabled && (e2.virtual.slides = e2.params.virtual.slides, e2.classNames.push(`${e2.params.containerModifierClass}virtual`), e2.params.watchSlidesProgress = true, e2.originalParams.watchSlidesProgress = true, e2.params.initialSlide || r2());
          }), s3("setTranslate", () => {
            e2.params.virtual.enabled && (e2.params.cssMode && !e2._immediateVirtual ? (clearTimeout(a2), a2 = setTimeout(() => {
              r2();
            }, 100)) : r2());
          }), s3("init update resize", () => {
            e2.params.virtual.enabled && e2.params.cssMode && g(e2.wrapperEl, "--swiper-virtual-size", `${e2.virtualSize}px`);
          }), Object.assign(e2.virtual, { appendSlide: function(t3) {
            if (typeof t3 == "object" && "length" in t3)
              for (let s4 = 0; s4 < t3.length; s4 += 1)
                t3[s4] && e2.virtual.slides.push(t3[s4]);
            else
              e2.virtual.slides.push(t3);
            r2(true);
          }, prependSlide: function(t3) {
            const s4 = e2.activeIndex;
            let a3 = s4 + 1, i3 = 1;
            if (Array.isArray(t3)) {
              for (let s5 = 0; s5 < t3.length; s5 += 1)
                t3[s5] && e2.virtual.slides.unshift(t3[s5]);
              a3 = s4 + t3.length, i3 = t3.length;
            } else
              e2.virtual.slides.unshift(t3);
            if (e2.params.virtual.cache) {
              const t4 = e2.virtual.cache, s5 = {};
              Object.keys(t4).forEach((e3) => {
                const a4 = t4[e3], r3 = a4.attr("data-swiper-slide-index");
                r3 && a4.attr("data-swiper-slide-index", parseInt(r3, 10) + i3), s5[parseInt(e3, 10) + i3] = a4;
              }), e2.virtual.cache = s5;
            }
            r2(true), e2.slideTo(a3, 0);
          }, removeSlide: function(t3) {
            if (t3 == null)
              return;
            let s4 = e2.activeIndex;
            if (Array.isArray(t3))
              for (let a3 = t3.length - 1; a3 >= 0; a3 -= 1)
                e2.virtual.slides.splice(t3[a3], 1), e2.params.virtual.cache && delete e2.virtual.cache[t3[a3]], t3[a3] < s4 && (s4 -= 1), s4 = Math.max(s4, 0);
            else
              e2.virtual.slides.splice(t3, 1), e2.params.virtual.cache && delete e2.virtual.cache[t3], t3 < s4 && (s4 -= 1), s4 = Math.max(s4, 0);
            r2(true), e2.slideTo(s4, 0);
          }, removeAllSlides: function() {
            e2.virtual.slides = [], e2.params.virtual.cache && (e2.virtual.cache = {}), r2(true), e2.slideTo(0, 0);
          }, update: r2 });
        }, function({ swiper: e2, extendParams: t2, on: s3, emit: i2 }) {
          const n2 = a(), l2 = r();
          function o2(t3) {
            if (!e2.enabled)
              return;
            const { rtlTranslate: s4 } = e2;
            let a2 = t3;
            a2.originalEvent && (a2 = a2.originalEvent);
            const r2 = a2.keyCode || a2.charCode, o3 = e2.params.keyboard.pageUpDown, d2 = o3 && r2 === 33, c3 = o3 && r2 === 34, p3 = r2 === 37, u2 = r2 === 39, h2 = r2 === 38, m2 = r2 === 40;
            if (!e2.allowSlideNext && (e2.isHorizontal() && u2 || e2.isVertical() && m2 || c3))
              return false;
            if (!e2.allowSlidePrev && (e2.isHorizontal() && p3 || e2.isVertical() && h2 || d2))
              return false;
            if (!(a2.shiftKey || a2.altKey || a2.ctrlKey || a2.metaKey || n2.activeElement && n2.activeElement.nodeName && (n2.activeElement.nodeName.toLowerCase() === "input" || n2.activeElement.nodeName.toLowerCase() === "textarea"))) {
              if (e2.params.keyboard.onlyInViewport && (d2 || c3 || p3 || u2 || h2 || m2)) {
                let t4 = false;
                if (e2.$el.parents(`.${e2.params.slideClass}`).length > 0 && e2.$el.parents(`.${e2.params.slideActiveClass}`).length === 0)
                  return;
                const a3 = e2.$el, i3 = a3[0].clientWidth, r3 = a3[0].clientHeight, n3 = l2.innerWidth, o4 = l2.innerHeight, d3 = e2.$el.offset();
                s4 && (d3.left -= e2.$el[0].scrollLeft);
                const c4 = [[d3.left, d3.top], [d3.left + i3, d3.top], [d3.left, d3.top + r3], [d3.left + i3, d3.top + r3]];
                for (let e3 = 0; e3 < c4.length; e3 += 1) {
                  const s5 = c4[e3];
                  if (s5[0] >= 0 && s5[0] <= n3 && s5[1] >= 0 && s5[1] <= o4) {
                    if (s5[0] === 0 && s5[1] === 0)
                      continue;
                    t4 = true;
                  }
                }
                if (!t4)
                  return;
              }
              e2.isHorizontal() ? ((d2 || c3 || p3 || u2) && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false), ((c3 || u2) && !s4 || (d2 || p3) && s4) && e2.slideNext(), ((d2 || p3) && !s4 || (c3 || u2) && s4) && e2.slidePrev()) : ((d2 || c3 || h2 || m2) && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false), (c3 || m2) && e2.slideNext(), (d2 || h2) && e2.slidePrev()), i2("keyPress", r2);
            }
          }
          function c2() {
            e2.keyboard.enabled || (d(n2).on("keydown", o2), e2.keyboard.enabled = true);
          }
          function p2() {
            e2.keyboard.enabled && (d(n2).off("keydown", o2), e2.keyboard.enabled = false);
          }
          e2.keyboard = { enabled: false }, t2({ keyboard: { enabled: false, onlyInViewport: true, pageUpDown: true } }), s3("init", () => {
            e2.params.keyboard.enabled && c2();
          }), s3("destroy", () => {
            e2.keyboard.enabled && p2();
          }), Object.assign(e2.keyboard, { enable: c2, disable: p2 });
        }, function({ swiper: e2, extendParams: t2, on: s3, emit: a2 }) {
          const i2 = r();
          let n2;
          t2({ mousewheel: { enabled: false, releaseOnEdges: false, invert: false, forceToAxis: false, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }), e2.mousewheel = { enabled: false };
          let l2, o2 = u();
          const c2 = [];
          function h2() {
            e2.enabled && (e2.mouseEntered = true);
          }
          function m2() {
            e2.enabled && (e2.mouseEntered = false);
          }
          function f2(t3) {
            return !(e2.params.mousewheel.thresholdDelta && t3.delta < e2.params.mousewheel.thresholdDelta) && (!(e2.params.mousewheel.thresholdTime && u() - o2 < e2.params.mousewheel.thresholdTime) && (t3.delta >= 6 && u() - o2 < 60 || (t3.direction < 0 ? e2.isEnd && !e2.params.loop || e2.animating || (e2.slideNext(), a2("scroll", t3.raw)) : e2.isBeginning && !e2.params.loop || e2.animating || (e2.slidePrev(), a2("scroll", t3.raw)), o2 = new i2.Date().getTime(), false)));
          }
          function g2(t3) {
            let s4 = t3, i3 = true;
            if (!e2.enabled)
              return;
            const r2 = e2.params.mousewheel;
            e2.params.cssMode && s4.preventDefault();
            let o3 = e2.$el;
            if (e2.params.mousewheel.eventsTarget !== "container" && (o3 = d(e2.params.mousewheel.eventsTarget)), !e2.mouseEntered && !o3[0].contains(s4.target) && !r2.releaseOnEdges)
              return true;
            s4.originalEvent && (s4 = s4.originalEvent);
            let h3 = 0;
            const m3 = e2.rtlTranslate ? -1 : 1, g3 = function(e3) {
              let t4 = 0, s5 = 0, a3 = 0, i4 = 0;
              return "detail" in e3 && (s5 = e3.detail), "wheelDelta" in e3 && (s5 = -e3.wheelDelta / 120), "wheelDeltaY" in e3 && (s5 = -e3.wheelDeltaY / 120), "wheelDeltaX" in e3 && (t4 = -e3.wheelDeltaX / 120), "axis" in e3 && e3.axis === e3.HORIZONTAL_AXIS && (t4 = s5, s5 = 0), a3 = 10 * t4, i4 = 10 * s5, "deltaY" in e3 && (i4 = e3.deltaY), "deltaX" in e3 && (a3 = e3.deltaX), e3.shiftKey && !a3 && (a3 = i4, i4 = 0), (a3 || i4) && e3.deltaMode && (e3.deltaMode === 1 ? (a3 *= 40, i4 *= 40) : (a3 *= 800, i4 *= 800)), a3 && !t4 && (t4 = a3 < 1 ? -1 : 1), i4 && !s5 && (s5 = i4 < 1 ? -1 : 1), { spinX: t4, spinY: s5, pixelX: a3, pixelY: i4 };
            }(s4);
            if (r2.forceToAxis)
              if (e2.isHorizontal()) {
                if (!(Math.abs(g3.pixelX) > Math.abs(g3.pixelY)))
                  return true;
                h3 = -g3.pixelX * m3;
              } else {
                if (!(Math.abs(g3.pixelY) > Math.abs(g3.pixelX)))
                  return true;
                h3 = -g3.pixelY;
              }
            else
              h3 = Math.abs(g3.pixelX) > Math.abs(g3.pixelY) ? -g3.pixelX * m3 : -g3.pixelY;
            if (h3 === 0)
              return true;
            r2.invert && (h3 = -h3);
            let v3 = e2.getTranslate() + h3 * r2.sensitivity;
            if (v3 >= e2.minTranslate() && (v3 = e2.minTranslate()), v3 <= e2.maxTranslate() && (v3 = e2.maxTranslate()), i3 = !!e2.params.loop || !(v3 === e2.minTranslate() || v3 === e2.maxTranslate()), i3 && e2.params.nested && s4.stopPropagation(), e2.params.freeMode && e2.params.freeMode.enabled) {
              const t4 = { time: u(), delta: Math.abs(h3), direction: Math.sign(h3) }, i4 = l2 && t4.time < l2.time + 500 && t4.delta <= l2.delta && t4.direction === l2.direction;
              if (!i4) {
                l2 = void 0, e2.params.loop && e2.loopFix();
                let o4 = e2.getTranslate() + h3 * r2.sensitivity;
                const d2 = e2.isBeginning, u2 = e2.isEnd;
                if (o4 >= e2.minTranslate() && (o4 = e2.minTranslate()), o4 <= e2.maxTranslate() && (o4 = e2.maxTranslate()), e2.setTransition(0), e2.setTranslate(o4), e2.updateProgress(), e2.updateActiveIndex(), e2.updateSlidesClasses(), (!d2 && e2.isBeginning || !u2 && e2.isEnd) && e2.updateSlidesClasses(), e2.params.freeMode.sticky) {
                  clearTimeout(n2), n2 = void 0, c2.length >= 15 && c2.shift();
                  const s5 = c2.length ? c2[c2.length - 1] : void 0, a3 = c2[0];
                  if (c2.push(t4), s5 && (t4.delta > s5.delta || t4.direction !== s5.direction))
                    c2.splice(0);
                  else if (c2.length >= 15 && t4.time - a3.time < 500 && a3.delta - t4.delta >= 1 && t4.delta <= 6) {
                    const s6 = h3 > 0 ? 0.8 : 0.2;
                    l2 = t4, c2.splice(0), n2 = p(() => {
                      e2.slideToClosest(e2.params.speed, true, void 0, s6);
                    }, 0);
                  }
                  n2 || (n2 = p(() => {
                    l2 = t4, c2.splice(0), e2.slideToClosest(e2.params.speed, true, void 0, 0.5);
                  }, 500));
                }
                if (i4 || a2("scroll", s4), e2.params.autoplay && e2.params.autoplayDisableOnInteraction && e2.autoplay.stop(), o4 === e2.minTranslate() || o4 === e2.maxTranslate())
                  return true;
              }
            } else {
              const s5 = { time: u(), delta: Math.abs(h3), direction: Math.sign(h3), raw: t3 };
              c2.length >= 2 && c2.shift();
              const a3 = c2.length ? c2[c2.length - 1] : void 0;
              if (c2.push(s5), a3 ? (s5.direction !== a3.direction || s5.delta > a3.delta || s5.time > a3.time + 150) && f2(s5) : f2(s5), function(t4) {
                const s6 = e2.params.mousewheel;
                if (t4.direction < 0) {
                  if (e2.isEnd && !e2.params.loop && s6.releaseOnEdges)
                    return true;
                } else if (e2.isBeginning && !e2.params.loop && s6.releaseOnEdges)
                  return true;
                return false;
              }(s5))
                return true;
            }
            return s4.preventDefault ? s4.preventDefault() : s4.returnValue = false, false;
          }
          function v2(t3) {
            let s4 = e2.$el;
            e2.params.mousewheel.eventsTarget !== "container" && (s4 = d(e2.params.mousewheel.eventsTarget)), s4[t3]("mouseenter", h2), s4[t3]("mouseleave", m2), s4[t3]("wheel", g2);
          }
          function w2() {
            return e2.params.cssMode ? (e2.wrapperEl.removeEventListener("wheel", g2), true) : !e2.mousewheel.enabled && (v2("on"), e2.mousewheel.enabled = true, true);
          }
          function b2() {
            return e2.params.cssMode ? (e2.wrapperEl.addEventListener(event, g2), true) : !!e2.mousewheel.enabled && (v2("off"), e2.mousewheel.enabled = false, true);
          }
          s3("init", () => {
            !e2.params.mousewheel.enabled && e2.params.cssMode && b2(), e2.params.mousewheel.enabled && w2();
          }), s3("destroy", () => {
            e2.params.cssMode && w2(), e2.mousewheel.enabled && b2();
          }), Object.assign(e2.mousewheel, { enable: w2, disable: b2 });
        }, function({ swiper: e2, extendParams: t2, on: s3, emit: a2 }) {
          function i2(t3) {
            let s4;
            return t3 && (s4 = d(t3), e2.params.uniqueNavElements && typeof t3 == "string" && s4.length > 1 && e2.$el.find(t3).length === 1 && (s4 = e2.$el.find(t3))), s4;
          }
          function r2(t3, s4) {
            const a3 = e2.params.navigation;
            t3 && t3.length > 0 && (t3[s4 ? "addClass" : "removeClass"](a3.disabledClass), t3[0] && t3[0].tagName === "BUTTON" && (t3[0].disabled = s4), e2.params.watchOverflow && e2.enabled && t3[e2.isLocked ? "addClass" : "removeClass"](a3.lockClass));
          }
          function n2() {
            if (e2.params.loop)
              return;
            const { $nextEl: t3, $prevEl: s4 } = e2.navigation;
            r2(s4, e2.isBeginning), r2(t3, e2.isEnd);
          }
          function l2(t3) {
            t3.preventDefault(), e2.isBeginning && !e2.params.loop || e2.slidePrev();
          }
          function o2(t3) {
            t3.preventDefault(), e2.isEnd && !e2.params.loop || e2.slideNext();
          }
          function c2() {
            const t3 = e2.params.navigation;
            if (e2.params.navigation = Y(e2, e2.originalParams.navigation, e2.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }), !t3.nextEl && !t3.prevEl)
              return;
            const s4 = i2(t3.nextEl), a3 = i2(t3.prevEl);
            s4 && s4.length > 0 && s4.on("click", o2), a3 && a3.length > 0 && a3.on("click", l2), Object.assign(e2.navigation, { $nextEl: s4, nextEl: s4 && s4[0], $prevEl: a3, prevEl: a3 && a3[0] }), e2.enabled || (s4 && s4.addClass(t3.lockClass), a3 && a3.addClass(t3.lockClass));
          }
          function p2() {
            const { $nextEl: t3, $prevEl: s4 } = e2.navigation;
            t3 && t3.length && (t3.off("click", o2), t3.removeClass(e2.params.navigation.disabledClass)), s4 && s4.length && (s4.off("click", l2), s4.removeClass(e2.params.navigation.disabledClass));
          }
          t2({ navigation: { nextEl: null, prevEl: null, hideOnClick: false, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }), e2.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }, s3("init", () => {
            c2(), n2();
          }), s3("toEdge fromEdge lock unlock", () => {
            n2();
          }), s3("destroy", () => {
            p2();
          }), s3("enable disable", () => {
            const { $nextEl: t3, $prevEl: s4 } = e2.navigation;
            t3 && t3[e2.enabled ? "removeClass" : "addClass"](e2.params.navigation.lockClass), s4 && s4[e2.enabled ? "removeClass" : "addClass"](e2.params.navigation.lockClass);
          }), s3("click", (t3, s4) => {
            const { $nextEl: i3, $prevEl: r3 } = e2.navigation, n3 = s4.target;
            if (e2.params.navigation.hideOnClick && !d(n3).is(r3) && !d(n3).is(i3)) {
              if (e2.pagination && e2.params.pagination && e2.params.pagination.clickable && (e2.pagination.el === n3 || e2.pagination.el.contains(n3)))
                return;
              let t4;
              i3 ? t4 = i3.hasClass(e2.params.navigation.hiddenClass) : r3 && (t4 = r3.hasClass(e2.params.navigation.hiddenClass)), a2(t4 === true ? "navigationShow" : "navigationHide"), i3 && i3.toggleClass(e2.params.navigation.hiddenClass), r3 && r3.toggleClass(e2.params.navigation.hiddenClass);
            }
          }), Object.assign(e2.navigation, { update: n2, init: c2, destroy: p2 });
        }, function({ swiper: e2, extendParams: t2, on: s3, emit: a2 }) {
          const i2 = "swiper-pagination";
          let r2;
          t2({ pagination: { el: null, bulletElement: "span", clickable: false, hideOnClick: false, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: false, type: "bullets", dynamicBullets: false, dynamicMainBullets: 1, formatFractionCurrent: (e3) => e3, formatFractionTotal: (e3) => e3, bulletClass: `${i2}-bullet`, bulletActiveClass: `${i2}-bullet-active`, modifierClass: `${i2}-`, currentClass: `${i2}-current`, totalClass: `${i2}-total`, hiddenClass: `${i2}-hidden`, progressbarFillClass: `${i2}-progressbar-fill`, progressbarOppositeClass: `${i2}-progressbar-opposite`, clickableClass: `${i2}-clickable`, lockClass: `${i2}-lock`, horizontalClass: `${i2}-horizontal`, verticalClass: `${i2}-vertical` } }), e2.pagination = { el: null, $el: null, bullets: [] };
          let n2 = 0;
          function l2() {
            return !e2.params.pagination.el || !e2.pagination.el || !e2.pagination.$el || e2.pagination.$el.length === 0;
          }
          function o2(t3, s4) {
            const { bulletActiveClass: a3 } = e2.params.pagination;
            t3[s4]().addClass(`${a3}-${s4}`)[s4]().addClass(`${a3}-${s4}-${s4}`);
          }
          function c2() {
            const t3 = e2.rtl, s4 = e2.params.pagination;
            if (l2())
              return;
            const i3 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.slides.length, c3 = e2.pagination.$el;
            let p3;
            const u3 = e2.params.loop ? Math.ceil((i3 - 2 * e2.loopedSlides) / e2.params.slidesPerGroup) : e2.snapGrid.length;
            if (e2.params.loop ? (p3 = Math.ceil((e2.activeIndex - e2.loopedSlides) / e2.params.slidesPerGroup), p3 > i3 - 1 - 2 * e2.loopedSlides && (p3 -= i3 - 2 * e2.loopedSlides), p3 > u3 - 1 && (p3 -= u3), p3 < 0 && e2.params.paginationType !== "bullets" && (p3 = u3 + p3)) : p3 = e2.snapIndex !== void 0 ? e2.snapIndex : e2.activeIndex || 0, s4.type === "bullets" && e2.pagination.bullets && e2.pagination.bullets.length > 0) {
              const a3 = e2.pagination.bullets;
              let i4, l3, u4;
              if (s4.dynamicBullets && (r2 = a3.eq(0)[e2.isHorizontal() ? "outerWidth" : "outerHeight"](true), c3.css(e2.isHorizontal() ? "width" : "height", r2 * (s4.dynamicMainBullets + 4) + "px"), s4.dynamicMainBullets > 1 && e2.previousIndex !== void 0 && (n2 += p3 - e2.previousIndex, n2 > s4.dynamicMainBullets - 1 ? n2 = s4.dynamicMainBullets - 1 : n2 < 0 && (n2 = 0)), i4 = p3 - n2, l3 = i4 + (Math.min(a3.length, s4.dynamicMainBullets) - 1), u4 = (l3 + i4) / 2), a3.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e3) => `${s4.bulletActiveClass}${e3}`).join(" ")), c3.length > 1)
                a3.each((e3) => {
                  const t4 = d(e3), a4 = t4.index();
                  a4 === p3 && t4.addClass(s4.bulletActiveClass), s4.dynamicBullets && (a4 >= i4 && a4 <= l3 && t4.addClass(`${s4.bulletActiveClass}-main`), a4 === i4 && o2(t4, "prev"), a4 === l3 && o2(t4, "next"));
                });
              else {
                const t4 = a3.eq(p3), r3 = t4.index();
                if (t4.addClass(s4.bulletActiveClass), s4.dynamicBullets) {
                  const t5 = a3.eq(i4), n3 = a3.eq(l3);
                  for (let e3 = i4; e3 <= l3; e3 += 1)
                    a3.eq(e3).addClass(`${s4.bulletActiveClass}-main`);
                  if (e2.params.loop)
                    if (r3 >= a3.length - s4.dynamicMainBullets) {
                      for (let e3 = s4.dynamicMainBullets; e3 >= 0; e3 -= 1)
                        a3.eq(a3.length - e3).addClass(`${s4.bulletActiveClass}-main`);
                      a3.eq(a3.length - s4.dynamicMainBullets - 1).addClass(`${s4.bulletActiveClass}-prev`);
                    } else
                      o2(t5, "prev"), o2(n3, "next");
                  else
                    o2(t5, "prev"), o2(n3, "next");
                }
              }
              if (s4.dynamicBullets) {
                const i5 = Math.min(a3.length, s4.dynamicMainBullets + 4), n3 = (r2 * i5 - r2) / 2 - u4 * r2, l4 = t3 ? "right" : "left";
                a3.css(e2.isHorizontal() ? l4 : "top", `${n3}px`);
              }
            }
            if (s4.type === "fraction" && (c3.find(W(s4.currentClass)).text(s4.formatFractionCurrent(p3 + 1)), c3.find(W(s4.totalClass)).text(s4.formatFractionTotal(u3))), s4.type === "progressbar") {
              let t4;
              t4 = s4.progressbarOpposite ? e2.isHorizontal() ? "vertical" : "horizontal" : e2.isHorizontal() ? "horizontal" : "vertical";
              const a3 = (p3 + 1) / u3;
              let i4 = 1, r3 = 1;
              t4 === "horizontal" ? i4 = a3 : r3 = a3, c3.find(W(s4.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i4}) scaleY(${r3})`).transition(e2.params.speed);
            }
            s4.type === "custom" && s4.renderCustom ? (c3.html(s4.renderCustom(e2, p3 + 1, u3)), a2("paginationRender", c3[0])) : a2("paginationUpdate", c3[0]), e2.params.watchOverflow && e2.enabled && c3[e2.isLocked ? "addClass" : "removeClass"](s4.lockClass);
          }
          function p2() {
            const t3 = e2.params.pagination;
            if (l2())
              return;
            const s4 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.slides.length, i3 = e2.pagination.$el;
            let r3 = "";
            if (t3.type === "bullets") {
              let a3 = e2.params.loop ? Math.ceil((s4 - 2 * e2.loopedSlides) / e2.params.slidesPerGroup) : e2.snapGrid.length;
              e2.params.freeMode && e2.params.freeMode.enabled && !e2.params.loop && a3 > s4 && (a3 = s4);
              for (let s5 = 0; s5 < a3; s5 += 1)
                t3.renderBullet ? r3 += t3.renderBullet.call(e2, s5, t3.bulletClass) : r3 += `<${t3.bulletElement} class="${t3.bulletClass}"></${t3.bulletElement}>`;
              i3.html(r3), e2.pagination.bullets = i3.find(W(t3.bulletClass));
            }
            t3.type === "fraction" && (r3 = t3.renderFraction ? t3.renderFraction.call(e2, t3.currentClass, t3.totalClass) : `<span class="${t3.currentClass}"></span> / <span class="${t3.totalClass}"></span>`, i3.html(r3)), t3.type === "progressbar" && (r3 = t3.renderProgressbar ? t3.renderProgressbar.call(e2, t3.progressbarFillClass) : `<span class="${t3.progressbarFillClass}"></span>`, i3.html(r3)), t3.type !== "custom" && a2("paginationRender", e2.pagination.$el[0]);
          }
          function u2() {
            e2.params.pagination = Y(e2, e2.originalParams.pagination, e2.params.pagination, { el: "swiper-pagination" });
            const t3 = e2.params.pagination;
            if (!t3.el)
              return;
            let s4 = d(t3.el);
            s4.length !== 0 && (e2.params.uniqueNavElements && typeof t3.el == "string" && s4.length > 1 && (s4 = e2.$el.find(t3.el), s4.length > 1 && (s4 = s4.filter((t4) => d(t4).parents(".swiper")[0] === e2.el))), t3.type === "bullets" && t3.clickable && s4.addClass(t3.clickableClass), s4.addClass(t3.modifierClass + t3.type), s4.addClass(t3.modifierClass + e2.params.direction), t3.type === "bullets" && t3.dynamicBullets && (s4.addClass(`${t3.modifierClass}${t3.type}-dynamic`), n2 = 0, t3.dynamicMainBullets < 1 && (t3.dynamicMainBullets = 1)), t3.type === "progressbar" && t3.progressbarOpposite && s4.addClass(t3.progressbarOppositeClass), t3.clickable && s4.on("click", W(t3.bulletClass), function(t4) {
              t4.preventDefault();
              let s5 = d(this).index() * e2.params.slidesPerGroup;
              e2.params.loop && (s5 += e2.loopedSlides), e2.slideTo(s5);
            }), Object.assign(e2.pagination, { $el: s4, el: s4[0] }), e2.enabled || s4.addClass(t3.lockClass));
          }
          function h2() {
            const t3 = e2.params.pagination;
            if (l2())
              return;
            const s4 = e2.pagination.$el;
            s4.removeClass(t3.hiddenClass), s4.removeClass(t3.modifierClass + t3.type), s4.removeClass(t3.modifierClass + e2.params.direction), e2.pagination.bullets && e2.pagination.bullets.removeClass && e2.pagination.bullets.removeClass(t3.bulletActiveClass), t3.clickable && s4.off("click", W(t3.bulletClass));
          }
          s3("init", () => {
            u2(), p2(), c2();
          }), s3("activeIndexChange", () => {
            (e2.params.loop || e2.snapIndex === void 0) && c2();
          }), s3("snapIndexChange", () => {
            e2.params.loop || c2();
          }), s3("slidesLengthChange", () => {
            e2.params.loop && (p2(), c2());
          }), s3("snapGridLengthChange", () => {
            e2.params.loop || (p2(), c2());
          }), s3("destroy", () => {
            h2();
          }), s3("enable disable", () => {
            const { $el: t3 } = e2.pagination;
            t3 && t3[e2.enabled ? "removeClass" : "addClass"](e2.params.pagination.lockClass);
          }), s3("lock unlock", () => {
            c2();
          }), s3("click", (t3, s4) => {
            const i3 = s4.target, { $el: r3 } = e2.pagination;
            if (e2.params.pagination.el && e2.params.pagination.hideOnClick && r3.length > 0 && !d(i3).hasClass(e2.params.pagination.bulletClass)) {
              if (e2.navigation && (e2.navigation.nextEl && i3 === e2.navigation.nextEl || e2.navigation.prevEl && i3 === e2.navigation.prevEl))
                return;
              const t4 = r3.hasClass(e2.params.pagination.hiddenClass);
              a2(t4 === true ? "paginationShow" : "paginationHide"), r3.toggleClass(e2.params.pagination.hiddenClass);
            }
          }), Object.assign(e2.pagination, { render: p2, update: c2, init: u2, destroy: h2 });
        }, function({ swiper: e2, extendParams: t2, on: s3, emit: i2 }) {
          const r2 = a();
          let n2, l2, o2, c2, u2 = false, h2 = null, m2 = null;
          function f2() {
            if (!e2.params.scrollbar.el || !e2.scrollbar.el)
              return;
            const { scrollbar: t3, rtlTranslate: s4, progress: a2 } = e2, { $dragEl: i3, $el: r3 } = t3, n3 = e2.params.scrollbar;
            let d2 = l2, c3 = (o2 - l2) * a2;
            s4 ? (c3 = -c3, c3 > 0 ? (d2 = l2 - c3, c3 = 0) : -c3 + l2 > o2 && (d2 = o2 + c3)) : c3 < 0 ? (d2 = l2 + c3, c3 = 0) : c3 + l2 > o2 && (d2 = o2 - c3), e2.isHorizontal() ? (i3.transform(`translate3d(${c3}px, 0, 0)`), i3[0].style.width = `${d2}px`) : (i3.transform(`translate3d(0px, ${c3}px, 0)`), i3[0].style.height = `${d2}px`), n3.hide && (clearTimeout(h2), r3[0].style.opacity = 1, h2 = setTimeout(() => {
              r3[0].style.opacity = 0, r3.transition(400);
            }, 1e3));
          }
          function g2() {
            if (!e2.params.scrollbar.el || !e2.scrollbar.el)
              return;
            const { scrollbar: t3 } = e2, { $dragEl: s4, $el: a2 } = t3;
            s4[0].style.width = "", s4[0].style.height = "", o2 = e2.isHorizontal() ? a2[0].offsetWidth : a2[0].offsetHeight, c2 = e2.size / (e2.virtualSize + e2.params.slidesOffsetBefore - (e2.params.centeredSlides ? e2.snapGrid[0] : 0)), l2 = e2.params.scrollbar.dragSize === "auto" ? o2 * c2 : parseInt(e2.params.scrollbar.dragSize, 10), e2.isHorizontal() ? s4[0].style.width = `${l2}px` : s4[0].style.height = `${l2}px`, a2[0].style.display = c2 >= 1 ? "none" : "", e2.params.scrollbar.hide && (a2[0].style.opacity = 0), e2.params.watchOverflow && e2.enabled && t3.$el[e2.isLocked ? "addClass" : "removeClass"](e2.params.scrollbar.lockClass);
          }
          function v2(t3) {
            return e2.isHorizontal() ? t3.type === "touchstart" || t3.type === "touchmove" ? t3.targetTouches[0].clientX : t3.clientX : t3.type === "touchstart" || t3.type === "touchmove" ? t3.targetTouches[0].clientY : t3.clientY;
          }
          function w2(t3) {
            const { scrollbar: s4, rtlTranslate: a2 } = e2, { $el: i3 } = s4;
            let r3;
            r3 = (v2(t3) - i3.offset()[e2.isHorizontal() ? "left" : "top"] - (n2 !== null ? n2 : l2 / 2)) / (o2 - l2), r3 = Math.max(Math.min(r3, 1), 0), a2 && (r3 = 1 - r3);
            const d2 = e2.minTranslate() + (e2.maxTranslate() - e2.minTranslate()) * r3;
            e2.updateProgress(d2), e2.setTranslate(d2), e2.updateActiveIndex(), e2.updateSlidesClasses();
          }
          function b2(t3) {
            const s4 = e2.params.scrollbar, { scrollbar: a2, $wrapperEl: r3 } = e2, { $el: l3, $dragEl: o3 } = a2;
            u2 = true, n2 = t3.target === o3[0] || t3.target === o3 ? v2(t3) - t3.target.getBoundingClientRect()[e2.isHorizontal() ? "left" : "top"] : null, t3.preventDefault(), t3.stopPropagation(), r3.transition(100), o3.transition(100), w2(t3), clearTimeout(m2), l3.transition(0), s4.hide && l3.css("opacity", 1), e2.params.cssMode && e2.$wrapperEl.css("scroll-snap-type", "none"), i2("scrollbarDragStart", t3);
          }
          function x2(t3) {
            const { scrollbar: s4, $wrapperEl: a2 } = e2, { $el: r3, $dragEl: n3 } = s4;
            u2 && (t3.preventDefault ? t3.preventDefault() : t3.returnValue = false, w2(t3), a2.transition(0), r3.transition(0), n3.transition(0), i2("scrollbarDragMove", t3));
          }
          function y2(t3) {
            const s4 = e2.params.scrollbar, { scrollbar: a2, $wrapperEl: r3 } = e2, { $el: n3 } = a2;
            u2 && (u2 = false, e2.params.cssMode && (e2.$wrapperEl.css("scroll-snap-type", ""), r3.transition("")), s4.hide && (clearTimeout(m2), m2 = p(() => {
              n3.css("opacity", 0), n3.transition(400);
            }, 1e3)), i2("scrollbarDragEnd", t3), s4.snapOnRelease && e2.slideToClosest());
          }
          function E2(t3) {
            const { scrollbar: s4, touchEventsTouch: a2, touchEventsDesktop: i3, params: n3, support: l3 } = e2, o3 = s4.$el[0], d2 = !(!l3.passiveListener || !n3.passiveListeners) && { passive: false, capture: false }, c3 = !(!l3.passiveListener || !n3.passiveListeners) && { passive: true, capture: false };
            if (!o3)
              return;
            const p2 = t3 === "on" ? "addEventListener" : "removeEventListener";
            l3.touch ? (o3[p2](a2.start, b2, d2), o3[p2](a2.move, x2, d2), o3[p2](a2.end, y2, c3)) : (o3[p2](i3.start, b2, d2), r2[p2](i3.move, x2, d2), r2[p2](i3.end, y2, c3));
          }
          function T2() {
            const { scrollbar: t3, $el: s4 } = e2;
            e2.params.scrollbar = Y(e2, e2.originalParams.scrollbar, e2.params.scrollbar, { el: "swiper-scrollbar" });
            const a2 = e2.params.scrollbar;
            if (!a2.el)
              return;
            let i3 = d(a2.el);
            e2.params.uniqueNavElements && typeof a2.el == "string" && i3.length > 1 && s4.find(a2.el).length === 1 && (i3 = s4.find(a2.el));
            let r3 = i3.find(`.${e2.params.scrollbar.dragClass}`);
            r3.length === 0 && (r3 = d(`<div class="${e2.params.scrollbar.dragClass}"></div>`), i3.append(r3)), Object.assign(t3, { $el: i3, el: i3[0], $dragEl: r3, dragEl: r3[0] }), a2.draggable && e2.params.scrollbar.el && E2("on"), i3 && i3[e2.enabled ? "removeClass" : "addClass"](e2.params.scrollbar.lockClass);
          }
          function C2() {
            e2.params.scrollbar.el && E2("off");
          }
          t2({ scrollbar: { el: null, dragSize: "auto", hide: false, draggable: false, snapOnRelease: true, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }), e2.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }, s3("init", () => {
            T2(), g2(), f2();
          }), s3("update resize observerUpdate lock unlock", () => {
            g2();
          }), s3("setTranslate", () => {
            f2();
          }), s3("setTransition", (t3, s4) => {
            !function(t4) {
              e2.params.scrollbar.el && e2.scrollbar.el && e2.scrollbar.$dragEl.transition(t4);
            }(s4);
          }), s3("enable disable", () => {
            const { $el: t3 } = e2.scrollbar;
            t3 && t3[e2.enabled ? "removeClass" : "addClass"](e2.params.scrollbar.lockClass);
          }), s3("destroy", () => {
            C2();
          }), Object.assign(e2.scrollbar, { updateSize: g2, setTranslate: f2, init: T2, destroy: C2 });
        }, function({ swiper: e2, extendParams: t2, on: s3 }) {
          t2({ parallax: { enabled: false } });
          const a2 = (t3, s4) => {
            const { rtl: a3 } = e2, i3 = d(t3), r2 = a3 ? -1 : 1, n2 = i3.attr("data-swiper-parallax") || "0";
            let l2 = i3.attr("data-swiper-parallax-x"), o2 = i3.attr("data-swiper-parallax-y");
            const c2 = i3.attr("data-swiper-parallax-scale"), p2 = i3.attr("data-swiper-parallax-opacity");
            if (l2 || o2 ? (l2 = l2 || "0", o2 = o2 || "0") : e2.isHorizontal() ? (l2 = n2, o2 = "0") : (o2 = n2, l2 = "0"), l2 = l2.indexOf("%") >= 0 ? parseInt(l2, 10) * s4 * r2 + "%" : l2 * s4 * r2 + "px", o2 = o2.indexOf("%") >= 0 ? parseInt(o2, 10) * s4 + "%" : o2 * s4 + "px", p2 != null) {
              const e3 = p2 - (p2 - 1) * (1 - Math.abs(s4));
              i3[0].style.opacity = e3;
            }
            if (c2 == null)
              i3.transform(`translate3d(${l2}, ${o2}, 0px)`);
            else {
              const e3 = c2 - (c2 - 1) * (1 - Math.abs(s4));
              i3.transform(`translate3d(${l2}, ${o2}, 0px) scale(${e3})`);
            }
          }, i2 = () => {
            const { $el: t3, slides: s4, progress: i3, snapGrid: r2 } = e2;
            t3.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e3) => {
              a2(e3, i3);
            }), s4.each((t4, s5) => {
              let n2 = t4.progress;
              e2.params.slidesPerGroup > 1 && e2.params.slidesPerView !== "auto" && (n2 += Math.ceil(s5 / 2) - i3 * (r2.length - 1)), n2 = Math.min(Math.max(n2, -1), 1), d(t4).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e3) => {
                a2(e3, n2);
              });
            });
          };
          s3("beforeInit", () => {
            e2.params.parallax.enabled && (e2.params.watchSlidesProgress = true, e2.originalParams.watchSlidesProgress = true);
          }), s3("init", () => {
            e2.params.parallax.enabled && i2();
          }), s3("setTranslate", () => {
            e2.params.parallax.enabled && i2();
          }), s3("setTransition", (t3, s4) => {
            e2.params.parallax.enabled && ((t4 = e2.params.speed) => {
              const { $el: s5 } = e2;
              s5.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e3) => {
                const s6 = d(e3);
                let a3 = parseInt(s6.attr("data-swiper-parallax-duration"), 10) || t4;
                t4 === 0 && (a3 = 0), s6.transition(a3);
              });
            })(s4);
          });
        }, function({ swiper: e2, extendParams: t2, on: s3, emit: a2 }) {
          const i2 = r();
          t2({ zoom: { enabled: false, maxRatio: 3, minRatio: 1, toggle: true, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), e2.zoom = { enabled: false };
          let n2, l2, o2, c2 = 1, p2 = false;
          const u2 = { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, m2 = { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, f2 = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
          let g2 = 1;
          function v2(e3) {
            if (e3.targetTouches.length < 2)
              return 1;
            const t3 = e3.targetTouches[0].pageX, s4 = e3.targetTouches[0].pageY, a3 = e3.targetTouches[1].pageX, i3 = e3.targetTouches[1].pageY;
            return Math.sqrt((a3 - t3) ** 2 + (i3 - s4) ** 2);
          }
          function w2(t3) {
            const s4 = e2.support, a3 = e2.params.zoom;
            if (l2 = false, o2 = false, !s4.gestures) {
              if (t3.type !== "touchstart" || t3.type === "touchstart" && t3.targetTouches.length < 2)
                return;
              l2 = true, u2.scaleStart = v2(t3);
            }
            u2.$slideEl && u2.$slideEl.length || (u2.$slideEl = d(t3.target).closest(`.${e2.params.slideClass}`), u2.$slideEl.length === 0 && (u2.$slideEl = e2.slides.eq(e2.activeIndex)), u2.$imageEl = u2.$slideEl.find(`.${a3.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u2.$imageWrapEl = u2.$imageEl.parent(`.${a3.containerClass}`), u2.maxRatio = u2.$imageWrapEl.attr("data-swiper-zoom") || a3.maxRatio, u2.$imageWrapEl.length !== 0) ? (u2.$imageEl && u2.$imageEl.transition(0), p2 = true) : u2.$imageEl = void 0;
          }
          function b2(t3) {
            const s4 = e2.support, a3 = e2.params.zoom, i3 = e2.zoom;
            if (!s4.gestures) {
              if (t3.type !== "touchmove" || t3.type === "touchmove" && t3.targetTouches.length < 2)
                return;
              o2 = true, u2.scaleMove = v2(t3);
            }
            u2.$imageEl && u2.$imageEl.length !== 0 ? (s4.gestures ? i3.scale = t3.scale * c2 : i3.scale = u2.scaleMove / u2.scaleStart * c2, i3.scale > u2.maxRatio && (i3.scale = u2.maxRatio - 1 + (i3.scale - u2.maxRatio + 1) ** 0.5), i3.scale < a3.minRatio && (i3.scale = a3.minRatio + 1 - (a3.minRatio - i3.scale + 1) ** 0.5), u2.$imageEl.transform(`translate3d(0,0,0) scale(${i3.scale})`)) : t3.type === "gesturechange" && w2(t3);
          }
          function x2(t3) {
            const s4 = e2.device, a3 = e2.support, i3 = e2.params.zoom, r2 = e2.zoom;
            if (!a3.gestures) {
              if (!l2 || !o2)
                return;
              if (t3.type !== "touchend" || t3.type === "touchend" && t3.changedTouches.length < 2 && !s4.android)
                return;
              l2 = false, o2 = false;
            }
            u2.$imageEl && u2.$imageEl.length !== 0 && (r2.scale = Math.max(Math.min(r2.scale, u2.maxRatio), i3.minRatio), u2.$imageEl.transition(e2.params.speed).transform(`translate3d(0,0,0) scale(${r2.scale})`), c2 = r2.scale, p2 = false, r2.scale === 1 && (u2.$slideEl = void 0));
          }
          function y2(t3) {
            const s4 = e2.zoom;
            if (!u2.$imageEl || u2.$imageEl.length === 0)
              return;
            if (e2.allowClick = false, !m2.isTouched || !u2.$slideEl)
              return;
            m2.isMoved || (m2.width = u2.$imageEl[0].offsetWidth, m2.height = u2.$imageEl[0].offsetHeight, m2.startX = h(u2.$imageWrapEl[0], "x") || 0, m2.startY = h(u2.$imageWrapEl[0], "y") || 0, u2.slideWidth = u2.$slideEl[0].offsetWidth, u2.slideHeight = u2.$slideEl[0].offsetHeight, u2.$imageWrapEl.transition(0));
            const a3 = m2.width * s4.scale, i3 = m2.height * s4.scale;
            if (!(a3 < u2.slideWidth && i3 < u2.slideHeight)) {
              if (m2.minX = Math.min(u2.slideWidth / 2 - a3 / 2, 0), m2.maxX = -m2.minX, m2.minY = Math.min(u2.slideHeight / 2 - i3 / 2, 0), m2.maxY = -m2.minY, m2.touchesCurrent.x = t3.type === "touchmove" ? t3.targetTouches[0].pageX : t3.pageX, m2.touchesCurrent.y = t3.type === "touchmove" ? t3.targetTouches[0].pageY : t3.pageY, !m2.isMoved && !p2) {
                if (e2.isHorizontal() && (Math.floor(m2.minX) === Math.floor(m2.startX) && m2.touchesCurrent.x < m2.touchesStart.x || Math.floor(m2.maxX) === Math.floor(m2.startX) && m2.touchesCurrent.x > m2.touchesStart.x))
                  return void (m2.isTouched = false);
                if (!e2.isHorizontal() && (Math.floor(m2.minY) === Math.floor(m2.startY) && m2.touchesCurrent.y < m2.touchesStart.y || Math.floor(m2.maxY) === Math.floor(m2.startY) && m2.touchesCurrent.y > m2.touchesStart.y))
                  return void (m2.isTouched = false);
              }
              t3.cancelable && t3.preventDefault(), t3.stopPropagation(), m2.isMoved = true, m2.currentX = m2.touchesCurrent.x - m2.touchesStart.x + m2.startX, m2.currentY = m2.touchesCurrent.y - m2.touchesStart.y + m2.startY, m2.currentX < m2.minX && (m2.currentX = m2.minX + 1 - (m2.minX - m2.currentX + 1) ** 0.8), m2.currentX > m2.maxX && (m2.currentX = m2.maxX - 1 + (m2.currentX - m2.maxX + 1) ** 0.8), m2.currentY < m2.minY && (m2.currentY = m2.minY + 1 - (m2.minY - m2.currentY + 1) ** 0.8), m2.currentY > m2.maxY && (m2.currentY = m2.maxY - 1 + (m2.currentY - m2.maxY + 1) ** 0.8), f2.prevPositionX || (f2.prevPositionX = m2.touchesCurrent.x), f2.prevPositionY || (f2.prevPositionY = m2.touchesCurrent.y), f2.prevTime || (f2.prevTime = Date.now()), f2.x = (m2.touchesCurrent.x - f2.prevPositionX) / (Date.now() - f2.prevTime) / 2, f2.y = (m2.touchesCurrent.y - f2.prevPositionY) / (Date.now() - f2.prevTime) / 2, Math.abs(m2.touchesCurrent.x - f2.prevPositionX) < 2 && (f2.x = 0), Math.abs(m2.touchesCurrent.y - f2.prevPositionY) < 2 && (f2.y = 0), f2.prevPositionX = m2.touchesCurrent.x, f2.prevPositionY = m2.touchesCurrent.y, f2.prevTime = Date.now(), u2.$imageWrapEl.transform(`translate3d(${m2.currentX}px, ${m2.currentY}px,0)`);
            }
          }
          function E2() {
            const t3 = e2.zoom;
            u2.$slideEl && e2.previousIndex !== e2.activeIndex && (u2.$imageEl && u2.$imageEl.transform("translate3d(0,0,0) scale(1)"), u2.$imageWrapEl && u2.$imageWrapEl.transform("translate3d(0,0,0)"), t3.scale = 1, c2 = 1, u2.$slideEl = void 0, u2.$imageEl = void 0, u2.$imageWrapEl = void 0);
          }
          function T2(t3) {
            const s4 = e2.zoom, a3 = e2.params.zoom;
            if (u2.$slideEl || (t3 && t3.target && (u2.$slideEl = d(t3.target).closest(`.${e2.params.slideClass}`)), u2.$slideEl || (e2.params.virtual && e2.params.virtual.enabled && e2.virtual ? u2.$slideEl = e2.$wrapperEl.children(`.${e2.params.slideActiveClass}`) : u2.$slideEl = e2.slides.eq(e2.activeIndex)), u2.$imageEl = u2.$slideEl.find(`.${a3.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u2.$imageWrapEl = u2.$imageEl.parent(`.${a3.containerClass}`)), !u2.$imageEl || u2.$imageEl.length === 0 || !u2.$imageWrapEl || u2.$imageWrapEl.length === 0)
              return;
            let r2, n3, l3, o3, p3, h2, f3, g3, v3, w3, b3, x3, y3, E3, T3, C3, $3, S3;
            e2.params.cssMode && (e2.wrapperEl.style.overflow = "hidden", e2.wrapperEl.style.touchAction = "none"), u2.$slideEl.addClass(`${a3.zoomedSlideClass}`), m2.touchesStart.x === void 0 && t3 ? (r2 = t3.type === "touchend" ? t3.changedTouches[0].pageX : t3.pageX, n3 = t3.type === "touchend" ? t3.changedTouches[0].pageY : t3.pageY) : (r2 = m2.touchesStart.x, n3 = m2.touchesStart.y), s4.scale = u2.$imageWrapEl.attr("data-swiper-zoom") || a3.maxRatio, c2 = u2.$imageWrapEl.attr("data-swiper-zoom") || a3.maxRatio, t3 ? ($3 = u2.$slideEl[0].offsetWidth, S3 = u2.$slideEl[0].offsetHeight, l3 = u2.$slideEl.offset().left + i2.scrollX, o3 = u2.$slideEl.offset().top + i2.scrollY, p3 = l3 + $3 / 2 - r2, h2 = o3 + S3 / 2 - n3, v3 = u2.$imageEl[0].offsetWidth, w3 = u2.$imageEl[0].offsetHeight, b3 = v3 * s4.scale, x3 = w3 * s4.scale, y3 = Math.min($3 / 2 - b3 / 2, 0), E3 = Math.min(S3 / 2 - x3 / 2, 0), T3 = -y3, C3 = -E3, f3 = p3 * s4.scale, g3 = h2 * s4.scale, f3 < y3 && (f3 = y3), f3 > T3 && (f3 = T3), g3 < E3 && (g3 = E3), g3 > C3 && (g3 = C3)) : (f3 = 0, g3 = 0), u2.$imageWrapEl.transition(300).transform(`translate3d(${f3}px, ${g3}px,0)`), u2.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s4.scale})`);
          }
          function C2() {
            const t3 = e2.zoom, s4 = e2.params.zoom;
            u2.$slideEl || (e2.params.virtual && e2.params.virtual.enabled && e2.virtual ? u2.$slideEl = e2.$wrapperEl.children(`.${e2.params.slideActiveClass}`) : u2.$slideEl = e2.slides.eq(e2.activeIndex), u2.$imageEl = u2.$slideEl.find(`.${s4.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u2.$imageWrapEl = u2.$imageEl.parent(`.${s4.containerClass}`)), u2.$imageEl && u2.$imageEl.length !== 0 && u2.$imageWrapEl && u2.$imageWrapEl.length !== 0 && (e2.params.cssMode && (e2.wrapperEl.style.overflow = "", e2.wrapperEl.style.touchAction = ""), t3.scale = 1, c2 = 1, u2.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), u2.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), u2.$slideEl.removeClass(`${s4.zoomedSlideClass}`), u2.$slideEl = void 0);
          }
          function $2(t3) {
            const s4 = e2.zoom;
            s4.scale && s4.scale !== 1 ? C2() : T2(t3);
          }
          function S2() {
            const t3 = e2.support;
            return { passiveListener: !(e2.touchEvents.start !== "touchstart" || !t3.passiveListener || !e2.params.passiveListeners) && { passive: true, capture: false }, activeListenerWithCapture: !t3.passiveListener || { passive: false, capture: true } };
          }
          function M2() {
            return `.${e2.params.slideClass}`;
          }
          function P2(t3) {
            const { passiveListener: s4 } = S2(), a3 = M2();
            e2.$wrapperEl[t3]("gesturestart", a3, w2, s4), e2.$wrapperEl[t3]("gesturechange", a3, b2, s4), e2.$wrapperEl[t3]("gestureend", a3, x2, s4);
          }
          function k2() {
            n2 || (n2 = true, P2("on"));
          }
          function z2() {
            n2 && (n2 = false, P2("off"));
          }
          function O2() {
            const t3 = e2.zoom;
            if (t3.enabled)
              return;
            t3.enabled = true;
            const s4 = e2.support, { passiveListener: a3, activeListenerWithCapture: i3 } = S2(), r2 = M2();
            s4.gestures ? (e2.$wrapperEl.on(e2.touchEvents.start, k2, a3), e2.$wrapperEl.on(e2.touchEvents.end, z2, a3)) : e2.touchEvents.start === "touchstart" && (e2.$wrapperEl.on(e2.touchEvents.start, r2, w2, a3), e2.$wrapperEl.on(e2.touchEvents.move, r2, b2, i3), e2.$wrapperEl.on(e2.touchEvents.end, r2, x2, a3), e2.touchEvents.cancel && e2.$wrapperEl.on(e2.touchEvents.cancel, r2, x2, a3)), e2.$wrapperEl.on(e2.touchEvents.move, `.${e2.params.zoom.containerClass}`, y2, i3);
          }
          function I2() {
            const t3 = e2.zoom;
            if (!t3.enabled)
              return;
            const s4 = e2.support;
            t3.enabled = false;
            const { passiveListener: a3, activeListenerWithCapture: i3 } = S2(), r2 = M2();
            s4.gestures ? (e2.$wrapperEl.off(e2.touchEvents.start, k2, a3), e2.$wrapperEl.off(e2.touchEvents.end, z2, a3)) : e2.touchEvents.start === "touchstart" && (e2.$wrapperEl.off(e2.touchEvents.start, r2, w2, a3), e2.$wrapperEl.off(e2.touchEvents.move, r2, b2, i3), e2.$wrapperEl.off(e2.touchEvents.end, r2, x2, a3), e2.touchEvents.cancel && e2.$wrapperEl.off(e2.touchEvents.cancel, r2, x2, a3)), e2.$wrapperEl.off(e2.touchEvents.move, `.${e2.params.zoom.containerClass}`, y2, i3);
          }
          Object.defineProperty(e2.zoom, "scale", { get: () => g2, set(e3) {
            if (g2 !== e3) {
              const t3 = u2.$imageEl ? u2.$imageEl[0] : void 0, s4 = u2.$slideEl ? u2.$slideEl[0] : void 0;
              a2("zoomChange", e3, t3, s4);
            }
            g2 = e3;
          } }), s3("init", () => {
            e2.params.zoom.enabled && O2();
          }), s3("destroy", () => {
            I2();
          }), s3("touchStart", (t3, s4) => {
            e2.zoom.enabled && function(t4) {
              const s5 = e2.device;
              u2.$imageEl && u2.$imageEl.length !== 0 && (m2.isTouched || (s5.android && t4.cancelable && t4.preventDefault(), m2.isTouched = true, m2.touchesStart.x = t4.type === "touchstart" ? t4.targetTouches[0].pageX : t4.pageX, m2.touchesStart.y = t4.type === "touchstart" ? t4.targetTouches[0].pageY : t4.pageY));
            }(s4);
          }), s3("touchEnd", (t3, s4) => {
            e2.zoom.enabled && function() {
              const t4 = e2.zoom;
              if (!u2.$imageEl || u2.$imageEl.length === 0)
                return;
              if (!m2.isTouched || !m2.isMoved)
                return m2.isTouched = false, void (m2.isMoved = false);
              m2.isTouched = false, m2.isMoved = false;
              let s5 = 300, a3 = 300;
              const i3 = f2.x * s5, r2 = m2.currentX + i3, n3 = f2.y * a3, l3 = m2.currentY + n3;
              f2.x !== 0 && (s5 = Math.abs((r2 - m2.currentX) / f2.x)), f2.y !== 0 && (a3 = Math.abs((l3 - m2.currentY) / f2.y));
              const o3 = Math.max(s5, a3);
              m2.currentX = r2, m2.currentY = l3;
              const d2 = m2.width * t4.scale, c3 = m2.height * t4.scale;
              m2.minX = Math.min(u2.slideWidth / 2 - d2 / 2, 0), m2.maxX = -m2.minX, m2.minY = Math.min(u2.slideHeight / 2 - c3 / 2, 0), m2.maxY = -m2.minY, m2.currentX = Math.max(Math.min(m2.currentX, m2.maxX), m2.minX), m2.currentY = Math.max(Math.min(m2.currentY, m2.maxY), m2.minY), u2.$imageWrapEl.transition(o3).transform(`translate3d(${m2.currentX}px, ${m2.currentY}px,0)`);
            }();
          }), s3("doubleTap", (t3, s4) => {
            !e2.animating && e2.params.zoom.enabled && e2.zoom.enabled && e2.params.zoom.toggle && $2(s4);
          }), s3("transitionEnd", () => {
            e2.zoom.enabled && e2.params.zoom.enabled && E2();
          }), s3("slideChange", () => {
            e2.zoom.enabled && e2.params.zoom.enabled && e2.params.cssMode && E2();
          }), Object.assign(e2.zoom, { enable: O2, disable: I2, in: T2, out: C2, toggle: $2 });
        }, function({ swiper: e2, extendParams: t2, on: s3, emit: a2 }) {
          t2({ lazy: { checkInView: false, enabled: false, loadPrevNext: false, loadPrevNextAmount: 1, loadOnTransitionStart: false, scrollingElement: "", elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }), e2.lazy = {};
          let i2 = false, n2 = false;
          function l2(t3, s4 = true) {
            const i3 = e2.params.lazy;
            if (t3 === void 0)
              return;
            if (e2.slides.length === 0)
              return;
            const r2 = e2.virtual && e2.params.virtual.enabled ? e2.$wrapperEl.children(`.${e2.params.slideClass}[data-swiper-slide-index="${t3}"]`) : e2.slides.eq(t3), n3 = r2.find(`.${i3.elementClass}:not(.${i3.loadedClass}):not(.${i3.loadingClass})`);
            !r2.hasClass(i3.elementClass) || r2.hasClass(i3.loadedClass) || r2.hasClass(i3.loadingClass) || n3.push(r2[0]), n3.length !== 0 && n3.each((t4) => {
              const n4 = d(t4);
              n4.addClass(i3.loadingClass);
              const o3 = n4.attr("data-background"), c3 = n4.attr("data-src"), p2 = n4.attr("data-srcset"), u2 = n4.attr("data-sizes"), h2 = n4.parent("picture");
              e2.loadImage(n4[0], c3 || o3, p2, u2, false, () => {
                if (e2 != null && e2 && (!e2 || e2.params) && !e2.destroyed) {
                  if (o3 ? (n4.css("background-image", `url("${o3}")`), n4.removeAttr("data-background")) : (p2 && (n4.attr("srcset", p2), n4.removeAttr("data-srcset")), u2 && (n4.attr("sizes", u2), n4.removeAttr("data-sizes")), h2.length && h2.children("source").each((e3) => {
                    const t5 = d(e3);
                    t5.attr("data-srcset") && (t5.attr("srcset", t5.attr("data-srcset")), t5.removeAttr("data-srcset"));
                  }), c3 && (n4.attr("src", c3), n4.removeAttr("data-src"))), n4.addClass(i3.loadedClass).removeClass(i3.loadingClass), r2.find(`.${i3.preloaderClass}`).remove(), e2.params.loop && s4) {
                    const t5 = r2.attr("data-swiper-slide-index");
                    if (r2.hasClass(e2.params.slideDuplicateClass)) {
                      l2(e2.$wrapperEl.children(`[data-swiper-slide-index="${t5}"]:not(.${e2.params.slideDuplicateClass})`).index(), false);
                    } else {
                      l2(e2.$wrapperEl.children(`.${e2.params.slideDuplicateClass}[data-swiper-slide-index="${t5}"]`).index(), false);
                    }
                  }
                  a2("lazyImageReady", r2[0], n4[0]), e2.params.autoHeight && e2.updateAutoHeight();
                }
              }), a2("lazyImageLoad", r2[0], n4[0]);
            });
          }
          function o2() {
            const { $wrapperEl: t3, params: s4, slides: a3, activeIndex: i3 } = e2, r2 = e2.virtual && s4.virtual.enabled, o3 = s4.lazy;
            let c3 = s4.slidesPerView;
            function p2(e3) {
              if (r2) {
                if (t3.children(`.${s4.slideClass}[data-swiper-slide-index="${e3}"]`).length)
                  return true;
              } else if (a3[e3])
                return true;
              return false;
            }
            function u2(e3) {
              return r2 ? d(e3).attr("data-swiper-slide-index") : d(e3).index();
            }
            if (c3 === "auto" && (c3 = 0), n2 || (n2 = true), e2.params.watchSlidesProgress)
              t3.children(`.${s4.slideVisibleClass}`).each((e3) => {
                l2(r2 ? d(e3).attr("data-swiper-slide-index") : d(e3).index());
              });
            else if (c3 > 1)
              for (let e3 = i3; e3 < i3 + c3; e3 += 1)
                p2(e3) && l2(e3);
            else
              l2(i3);
            if (o3.loadPrevNext)
              if (c3 > 1 || o3.loadPrevNextAmount && o3.loadPrevNextAmount > 1) {
                const e3 = o3.loadPrevNextAmount, t4 = c3, s5 = Math.min(i3 + t4 + Math.max(e3, t4), a3.length), r3 = Math.max(i3 - Math.max(t4, e3), 0);
                for (let e4 = i3 + c3; e4 < s5; e4 += 1)
                  p2(e4) && l2(e4);
                for (let e4 = r3; e4 < i3; e4 += 1)
                  p2(e4) && l2(e4);
              } else {
                const e3 = t3.children(`.${s4.slideNextClass}`);
                e3.length > 0 && l2(u2(e3));
                const a4 = t3.children(`.${s4.slidePrevClass}`);
                a4.length > 0 && l2(u2(a4));
              }
          }
          function c2() {
            const t3 = r();
            if (!e2 || e2.destroyed)
              return;
            const s4 = e2.params.lazy.scrollingElement ? d(e2.params.lazy.scrollingElement) : d(t3), a3 = s4[0] === t3, n3 = a3 ? t3.innerWidth : s4[0].offsetWidth, l3 = a3 ? t3.innerHeight : s4[0].offsetHeight, p2 = e2.$el.offset(), { rtlTranslate: u2 } = e2;
            let h2 = false;
            u2 && (p2.left -= e2.$el[0].scrollLeft);
            const m2 = [[p2.left, p2.top], [p2.left + e2.width, p2.top], [p2.left, p2.top + e2.height], [p2.left + e2.width, p2.top + e2.height]];
            for (let e3 = 0; e3 < m2.length; e3 += 1) {
              const t4 = m2[e3];
              if (t4[0] >= 0 && t4[0] <= n3 && t4[1] >= 0 && t4[1] <= l3) {
                if (t4[0] === 0 && t4[1] === 0)
                  continue;
                h2 = true;
              }
            }
            const f2 = !(e2.touchEvents.start !== "touchstart" || !e2.support.passiveListener || !e2.params.passiveListeners) && { passive: true, capture: false };
            h2 ? (o2(), s4.off("scroll", c2, f2)) : i2 || (i2 = true, s4.on("scroll", c2, f2));
          }
          s3("beforeInit", () => {
            e2.params.lazy.enabled && e2.params.preloadImages && (e2.params.preloadImages = false);
          }), s3("init", () => {
            e2.params.lazy.enabled && (e2.params.lazy.checkInView ? c2() : o2());
          }), s3("scroll", () => {
            e2.params.freeMode && e2.params.freeMode.enabled && !e2.params.freeMode.sticky && o2();
          }), s3("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            e2.params.lazy.enabled && (e2.params.lazy.checkInView ? c2() : o2());
          }), s3("transitionStart", () => {
            e2.params.lazy.enabled && (e2.params.lazy.loadOnTransitionStart || !e2.params.lazy.loadOnTransitionStart && !n2) && (e2.params.lazy.checkInView ? c2() : o2());
          }), s3("transitionEnd", () => {
            e2.params.lazy.enabled && !e2.params.lazy.loadOnTransitionStart && (e2.params.lazy.checkInView ? c2() : o2());
          }), s3("slideChange", () => {
            const { lazy: t3, cssMode: s4, watchSlidesProgress: a3, touchReleaseOnEdges: i3, resistanceRatio: r2 } = e2.params;
            t3.enabled && (s4 || a3 && (i3 || r2 === 0)) && o2();
          }), Object.assign(e2.lazy, { load: o2, loadInSlide: l2 });
        }, function({ swiper: e2, extendParams: t2, on: s3 }) {
          function a2(e3, t3) {
            const s4 = function() {
              let e4, t4, s5;
              return (a4, i4) => {
                for (t4 = -1, e4 = a4.length; e4 - t4 > 1; )
                  s5 = e4 + t4 >> 1, a4[s5] <= i4 ? t4 = s5 : e4 = s5;
                return e4;
              };
            }();
            let a3, i3;
            return this.x = e3, this.y = t3, this.lastIndex = e3.length - 1, this.interpolate = function(e4) {
              return e4 ? (i3 = s4(this.x, e4), a3 = i3 - 1, (e4 - this.x[a3]) * (this.y[i3] - this.y[a3]) / (this.x[i3] - this.x[a3]) + this.y[a3]) : 0;
            }, this;
          }
          function i2() {
            e2.controller.control && e2.controller.spline && (e2.controller.spline = void 0, delete e2.controller.spline);
          }
          t2({ controller: { control: void 0, inverse: false, by: "slide" } }), e2.controller = { control: void 0 }, s3("beforeInit", () => {
            e2.controller.control = e2.params.controller.control;
          }), s3("update", () => {
            i2();
          }), s3("resize", () => {
            i2();
          }), s3("observerUpdate", () => {
            i2();
          }), s3("setTranslate", (t3, s4, a3) => {
            e2.controller.control && e2.controller.setTranslate(s4, a3);
          }), s3("setTransition", (t3, s4, a3) => {
            e2.controller.control && e2.controller.setTransition(s4, a3);
          }), Object.assign(e2.controller, { setTranslate: function(t3, s4) {
            const i3 = e2.controller.control;
            let r2, n2;
            const l2 = e2.constructor;
            function o2(t4) {
              const s5 = e2.rtlTranslate ? -e2.translate : e2.translate;
              e2.params.controller.by === "slide" && (!function(t5) {
                e2.controller.spline || (e2.controller.spline = e2.params.loop ? new a2(e2.slidesGrid, t5.slidesGrid) : new a2(e2.snapGrid, t5.snapGrid));
              }(t4), n2 = -e2.controller.spline.interpolate(-s5)), n2 && e2.params.controller.by !== "container" || (r2 = (t4.maxTranslate() - t4.minTranslate()) / (e2.maxTranslate() - e2.minTranslate()), n2 = (s5 - e2.minTranslate()) * r2 + t4.minTranslate()), e2.params.controller.inverse && (n2 = t4.maxTranslate() - n2), t4.updateProgress(n2), t4.setTranslate(n2, e2), t4.updateActiveIndex(), t4.updateSlidesClasses();
            }
            if (Array.isArray(i3))
              for (let e3 = 0; e3 < i3.length; e3 += 1)
                i3[e3] !== s4 && i3[e3] instanceof l2 && o2(i3[e3]);
            else
              i3 instanceof l2 && s4 !== i3 && o2(i3);
          }, setTransition: function(t3, s4) {
            const a3 = e2.constructor, i3 = e2.controller.control;
            let r2;
            function n2(s5) {
              s5.setTransition(t3, e2), t3 !== 0 && (s5.transitionStart(), s5.params.autoHeight && p(() => {
                s5.updateAutoHeight();
              }), s5.$wrapperEl.transitionEnd(() => {
                i3 && (s5.params.loop && e2.params.controller.by === "slide" && s5.loopFix(), s5.transitionEnd());
              }));
            }
            if (Array.isArray(i3))
              for (r2 = 0; r2 < i3.length; r2 += 1)
                i3[r2] !== s4 && i3[r2] instanceof a3 && n2(i3[r2]);
            else
              i3 instanceof a3 && s4 !== i3 && n2(i3);
          } });
        }, function({ swiper: e2, extendParams: t2, on: s3 }) {
          t2({ a11y: { enabled: true, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", slideLabelMessage: "{{index}} / {{slidesLength}}", containerMessage: null, containerRoleDescriptionMessage: null, itemRoleDescriptionMessage: null, slideRole: "group" } });
          let a2 = null;
          function i2(e3) {
            const t3 = a2;
            t3.length !== 0 && (t3.html(""), t3.html(e3));
          }
          function r2(e3) {
            e3.attr("tabIndex", "0");
          }
          function n2(e3) {
            e3.attr("tabIndex", "-1");
          }
          function l2(e3, t3) {
            e3.attr("role", t3);
          }
          function o2(e3, t3) {
            e3.attr("aria-roledescription", t3);
          }
          function c2(e3, t3) {
            e3.attr("aria-label", t3);
          }
          function p2(e3) {
            e3.attr("aria-disabled", true);
          }
          function u2(e3) {
            e3.attr("aria-disabled", false);
          }
          function h2(t3) {
            if (t3.keyCode !== 13 && t3.keyCode !== 32)
              return;
            const s4 = e2.params.a11y, a3 = d(t3.target);
            e2.navigation && e2.navigation.$nextEl && a3.is(e2.navigation.$nextEl) && (e2.isEnd && !e2.params.loop || e2.slideNext(), e2.isEnd ? i2(s4.lastSlideMessage) : i2(s4.nextSlideMessage)), e2.navigation && e2.navigation.$prevEl && a3.is(e2.navigation.$prevEl) && (e2.isBeginning && !e2.params.loop || e2.slidePrev(), e2.isBeginning ? i2(s4.firstSlideMessage) : i2(s4.prevSlideMessage)), e2.pagination && a3.is(W(e2.params.pagination.bulletClass)) && a3[0].click();
          }
          function m2() {
            if (e2.params.loop || !e2.navigation)
              return;
            const { $nextEl: t3, $prevEl: s4 } = e2.navigation;
            s4 && s4.length > 0 && (e2.isBeginning ? (p2(s4), n2(s4)) : (u2(s4), r2(s4))), t3 && t3.length > 0 && (e2.isEnd ? (p2(t3), n2(t3)) : (u2(t3), r2(t3)));
          }
          function f2() {
            return e2.pagination && e2.params.pagination.clickable && e2.pagination.bullets && e2.pagination.bullets.length;
          }
          const g2 = (e3, t3, s4) => {
            r2(e3), e3[0].tagName !== "BUTTON" && (l2(e3, "button"), e3.on("keydown", h2)), c2(e3, s4), function(e4, t4) {
              e4.attr("aria-controls", t4);
            }(e3, t3);
          };
          function v2() {
            const t3 = e2.params.a11y;
            e2.$el.append(a2);
            const s4 = e2.$el;
            t3.containerRoleDescriptionMessage && o2(s4, t3.containerRoleDescriptionMessage), t3.containerMessage && c2(s4, t3.containerMessage);
            const i3 = e2.$wrapperEl, r3 = i3.attr("id") || `swiper-wrapper-${function(e3 = 16) {
              return "x".repeat(e3).replace(/x/g, () => Math.round(16 * Math.random()).toString(16));
            }(16)}`, n3 = e2.params.autoplay && e2.params.autoplay.enabled ? "off" : "polite";
            var p3;
            p3 = r3, i3.attr("id", p3), function(e3, t4) {
              e3.attr("aria-live", t4);
            }(i3, n3), t3.itemRoleDescriptionMessage && o2(d(e2.slides), t3.itemRoleDescriptionMessage), l2(d(e2.slides), t3.slideRole);
            const u3 = e2.params.loop ? e2.slides.filter((t4) => !t4.classList.contains(e2.params.slideDuplicateClass)).length : e2.slides.length;
            let m3, v3;
            e2.slides.each((s5, a3) => {
              const i4 = d(s5), r4 = e2.params.loop ? parseInt(i4.attr("data-swiper-slide-index"), 10) : a3;
              c2(i4, t3.slideLabelMessage.replace(/\{\{index\}\}/, r4 + 1).replace(/\{\{slidesLength\}\}/, u3));
            }), e2.navigation && e2.navigation.$nextEl && (m3 = e2.navigation.$nextEl), e2.navigation && e2.navigation.$prevEl && (v3 = e2.navigation.$prevEl), m3 && m3.length && g2(m3, r3, t3.nextSlideMessage), v3 && v3.length && g2(v3, r3, t3.prevSlideMessage), f2() && e2.pagination.$el.on("keydown", W(e2.params.pagination.bulletClass), h2);
          }
          s3("beforeInit", () => {
            a2 = d(`<span class="${e2.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
          }), s3("afterInit", () => {
            e2.params.a11y.enabled && (v2(), m2());
          }), s3("toEdge", () => {
            e2.params.a11y.enabled && m2();
          }), s3("fromEdge", () => {
            e2.params.a11y.enabled && m2();
          }), s3("paginationUpdate", () => {
            e2.params.a11y.enabled && function() {
              const t3 = e2.params.a11y;
              f2() && e2.pagination.bullets.each((s4) => {
                const a3 = d(s4);
                r2(a3), e2.params.pagination.renderBullet || (l2(a3, "button"), c2(a3, t3.paginationBulletMessage.replace(/\{\{index\}\}/, a3.index() + 1)));
              });
            }();
          }), s3("destroy", () => {
            e2.params.a11y.enabled && function() {
              let t3, s4;
              a2 && a2.length > 0 && a2.remove(), e2.navigation && e2.navigation.$nextEl && (t3 = e2.navigation.$nextEl), e2.navigation && e2.navigation.$prevEl && (s4 = e2.navigation.$prevEl), t3 && t3.off("keydown", h2), s4 && s4.off("keydown", h2), f2() && e2.pagination.$el.off("keydown", W(e2.params.pagination.bulletClass), h2);
            }();
          });
        }, function({ swiper: e2, extendParams: t2, on: s3 }) {
          t2({ history: { enabled: false, root: "", replaceState: false, key: "slides" } });
          let a2 = false, i2 = {};
          const n2 = (e3) => e3.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), l2 = (e3) => {
            const t3 = r();
            let s4;
            s4 = e3 ? new URL(e3) : t3.location;
            const a3 = s4.pathname.slice(1).split("/").filter((e4) => e4 !== ""), i3 = a3.length;
            return { key: a3[i3 - 2], value: a3[i3 - 1] };
          }, o2 = (t3, s4) => {
            const i3 = r();
            if (!a2 || !e2.params.history.enabled)
              return;
            let l3;
            l3 = e2.params.url ? new URL(e2.params.url) : i3.location;
            const o3 = e2.slides.eq(s4);
            let d3 = n2(o3.attr("data-history"));
            if (e2.params.history.root.length > 0) {
              let s5 = e2.params.history.root;
              s5[s5.length - 1] === "/" && (s5 = s5.slice(0, s5.length - 1)), d3 = `${s5}/${t3}/${d3}`;
            } else
              l3.pathname.includes(t3) || (d3 = `${t3}/${d3}`);
            const c3 = i3.history.state;
            c3 && c3.value === d3 || (e2.params.history.replaceState ? i3.history.replaceState({ value: d3 }, null, d3) : i3.history.pushState({ value: d3 }, null, d3));
          }, d2 = (t3, s4, a3) => {
            if (s4)
              for (let i3 = 0, r2 = e2.slides.length; i3 < r2; i3 += 1) {
                const r3 = e2.slides.eq(i3);
                if (n2(r3.attr("data-history")) === s4 && !r3.hasClass(e2.params.slideDuplicateClass)) {
                  const s5 = r3.index();
                  e2.slideTo(s5, t3, a3);
                }
              }
            else
              e2.slideTo(0, t3, a3);
          }, c2 = () => {
            i2 = l2(e2.params.url), d2(e2.params.speed, e2.paths.value, false);
          };
          s3("init", () => {
            e2.params.history.enabled && (() => {
              const t3 = r();
              if (e2.params.history) {
                if (!t3.history || !t3.history.pushState)
                  return e2.params.history.enabled = false, void (e2.params.hashNavigation.enabled = true);
                a2 = true, i2 = l2(e2.params.url), (i2.key || i2.value) && (d2(0, i2.value, e2.params.runCallbacksOnInit), e2.params.history.replaceState || t3.addEventListener("popstate", c2));
              }
            })();
          }), s3("destroy", () => {
            e2.params.history.enabled && (() => {
              const t3 = r();
              e2.params.history.replaceState || t3.removeEventListener("popstate", c2);
            })();
          }), s3("transitionEnd _freeModeNoMomentumRelease", () => {
            a2 && o2(e2.params.history.key, e2.activeIndex);
          }), s3("slideChange", () => {
            a2 && e2.params.cssMode && o2(e2.params.history.key, e2.activeIndex);
          });
        }, function({ swiper: e2, extendParams: t2, emit: s3, on: i2 }) {
          let n2 = false;
          const l2 = a(), o2 = r();
          t2({ hashNavigation: { enabled: false, replaceState: false, watchState: false } });
          const c2 = () => {
            s3("hashChange");
            const t3 = l2.location.hash.replace("#", "");
            if (t3 !== e2.slides.eq(e2.activeIndex).attr("data-hash")) {
              const s4 = e2.$wrapperEl.children(`.${e2.params.slideClass}[data-hash="${t3}"]`).index();
              if (s4 === void 0)
                return;
              e2.slideTo(s4);
            }
          }, p2 = () => {
            if (n2 && e2.params.hashNavigation.enabled)
              if (e2.params.hashNavigation.replaceState && o2.history && o2.history.replaceState)
                o2.history.replaceState(null, null, `#${e2.slides.eq(e2.activeIndex).attr("data-hash")}` || ""), s3("hashSet");
              else {
                const t3 = e2.slides.eq(e2.activeIndex), a2 = t3.attr("data-hash") || t3.attr("data-history");
                l2.location.hash = a2 || "", s3("hashSet");
              }
          };
          i2("init", () => {
            e2.params.hashNavigation.enabled && (() => {
              if (!e2.params.hashNavigation.enabled || e2.params.history && e2.params.history.enabled)
                return;
              n2 = true;
              const t3 = l2.location.hash.replace("#", "");
              if (t3) {
                const s4 = 0;
                for (let a2 = 0, i3 = e2.slides.length; a2 < i3; a2 += 1) {
                  const i4 = e2.slides.eq(a2);
                  if ((i4.attr("data-hash") || i4.attr("data-history")) === t3 && !i4.hasClass(e2.params.slideDuplicateClass)) {
                    const t4 = i4.index();
                    e2.slideTo(t4, s4, e2.params.runCallbacksOnInit, true);
                  }
                }
              }
              e2.params.hashNavigation.watchState && d(o2).on("hashchange", c2);
            })();
          }), i2("destroy", () => {
            e2.params.hashNavigation.enabled && e2.params.hashNavigation.watchState && d(o2).off("hashchange", c2);
          }), i2("transitionEnd _freeModeNoMomentumRelease", () => {
            n2 && p2();
          }), i2("slideChange", () => {
            n2 && e2.params.cssMode && p2();
          });
        }, function({ swiper: e2, extendParams: t2, on: s3, emit: i2 }) {
          let r2;
          function n2() {
            const t3 = e2.slides.eq(e2.activeIndex);
            let s4 = e2.params.autoplay.delay;
            t3.attr("data-swiper-autoplay") && (s4 = t3.attr("data-swiper-autoplay") || e2.params.autoplay.delay), clearTimeout(r2), r2 = p(() => {
              let t4;
              e2.params.autoplay.reverseDirection ? e2.params.loop ? (e2.loopFix(), t4 = e2.slidePrev(e2.params.speed, true, true), i2("autoplay")) : e2.isBeginning ? e2.params.autoplay.stopOnLastSlide ? o2() : (t4 = e2.slideTo(e2.slides.length - 1, e2.params.speed, true, true), i2("autoplay")) : (t4 = e2.slidePrev(e2.params.speed, true, true), i2("autoplay")) : e2.params.loop ? (e2.loopFix(), t4 = e2.slideNext(e2.params.speed, true, true), i2("autoplay")) : e2.isEnd ? e2.params.autoplay.stopOnLastSlide ? o2() : (t4 = e2.slideTo(0, e2.params.speed, true, true), i2("autoplay")) : (t4 = e2.slideNext(e2.params.speed, true, true), i2("autoplay")), (e2.params.cssMode && e2.autoplay.running || t4 === false) && n2();
            }, s4);
          }
          function l2() {
            return r2 === void 0 && (!e2.autoplay.running && (e2.autoplay.running = true, i2("autoplayStart"), n2(), true));
          }
          function o2() {
            return !!e2.autoplay.running && (r2 !== void 0 && (r2 && (clearTimeout(r2), r2 = void 0), e2.autoplay.running = false, i2("autoplayStop"), true));
          }
          function d2(t3) {
            e2.autoplay.running && (e2.autoplay.paused || (r2 && clearTimeout(r2), e2.autoplay.paused = true, t3 !== 0 && e2.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t4) => {
              e2.$wrapperEl[0].addEventListener(t4, u2);
            }) : (e2.autoplay.paused = false, n2())));
          }
          function c2() {
            const t3 = a();
            t3.visibilityState === "hidden" && e2.autoplay.running && d2(), t3.visibilityState === "visible" && e2.autoplay.paused && (n2(), e2.autoplay.paused = false);
          }
          function u2(t3) {
            e2 && !e2.destroyed && e2.$wrapperEl && t3.target === e2.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t4) => {
              e2.$wrapperEl[0].removeEventListener(t4, u2);
            }), e2.autoplay.paused = false, e2.autoplay.running ? n2() : o2());
          }
          function h2() {
            e2.params.autoplay.disableOnInteraction ? o2() : d2(), ["transitionend", "webkitTransitionEnd"].forEach((t3) => {
              e2.$wrapperEl[0].removeEventListener(t3, u2);
            });
          }
          function m2() {
            e2.params.autoplay.disableOnInteraction || (e2.autoplay.paused = false, n2());
          }
          e2.autoplay = { running: false, paused: false }, t2({ autoplay: { enabled: false, delay: 3e3, waitForTransition: true, disableOnInteraction: true, stopOnLastSlide: false, reverseDirection: false, pauseOnMouseEnter: false } }), s3("init", () => {
            if (e2.params.autoplay.enabled) {
              l2();
              a().addEventListener("visibilitychange", c2), e2.params.autoplay.pauseOnMouseEnter && (e2.$el.on("mouseenter", h2), e2.$el.on("mouseleave", m2));
            }
          }), s3("beforeTransitionStart", (t3, s4, a2) => {
            e2.autoplay.running && (a2 || !e2.params.autoplay.disableOnInteraction ? e2.autoplay.pause(s4) : o2());
          }), s3("sliderFirstMove", () => {
            e2.autoplay.running && (e2.params.autoplay.disableOnInteraction ? o2() : d2());
          }), s3("touchEnd", () => {
            e2.params.cssMode && e2.autoplay.paused && !e2.params.autoplay.disableOnInteraction && n2();
          }), s3("destroy", () => {
            e2.$el.off("mouseenter", h2), e2.$el.off("mouseleave", m2), e2.autoplay.running && o2();
            a().removeEventListener("visibilitychange", c2);
          }), Object.assign(e2.autoplay, { pause: d2, run: n2, start: l2, stop: o2 });
        }, function({ swiper: e2, extendParams: t2, on: s3 }) {
          t2({ thumbs: { swiper: null, multipleActiveThumbs: true, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
          let a2 = false, i2 = false;
          function r2() {
            const t3 = e2.thumbs.swiper;
            if (!t3)
              return;
            const s4 = t3.clickedIndex, a3 = t3.clickedSlide;
            if (a3 && d(a3).hasClass(e2.params.thumbs.slideThumbActiveClass))
              return;
            if (s4 == null)
              return;
            let i3;
            if (i3 = t3.params.loop ? parseInt(d(t3.clickedSlide).attr("data-swiper-slide-index"), 10) : s4, e2.params.loop) {
              let t4 = e2.activeIndex;
              e2.slides.eq(t4).hasClass(e2.params.slideDuplicateClass) && (e2.loopFix(), e2._clientLeft = e2.$wrapperEl[0].clientLeft, t4 = e2.activeIndex);
              const s5 = e2.slides.eq(t4).prevAll(`[data-swiper-slide-index="${i3}"]`).eq(0).index(), a4 = e2.slides.eq(t4).nextAll(`[data-swiper-slide-index="${i3}"]`).eq(0).index();
              i3 = s5 === void 0 ? a4 : a4 === void 0 ? s5 : a4 - t4 < t4 - s5 ? a4 : s5;
            }
            e2.slideTo(i3);
          }
          function n2() {
            const { thumbs: t3 } = e2.params;
            if (a2)
              return false;
            a2 = true;
            const s4 = e2.constructor;
            if (t3.swiper instanceof s4)
              e2.thumbs.swiper = t3.swiper, Object.assign(e2.thumbs.swiper.originalParams, { watchSlidesProgress: true, slideToClickedSlide: false }), Object.assign(e2.thumbs.swiper.params, { watchSlidesProgress: true, slideToClickedSlide: false });
            else if (m(t3.swiper)) {
              const a3 = Object.assign({}, t3.swiper);
              Object.assign(a3, { watchSlidesProgress: true, slideToClickedSlide: false }), e2.thumbs.swiper = new s4(a3), i2 = true;
            }
            return e2.thumbs.swiper.$el.addClass(e2.params.thumbs.thumbsContainerClass), e2.thumbs.swiper.on("tap", r2), true;
          }
          function l2(t3) {
            const s4 = e2.thumbs.swiper;
            if (!s4)
              return;
            const a3 = s4.params.slidesPerView === "auto" ? s4.slidesPerViewDynamic() : s4.params.slidesPerView, i3 = e2.params.thumbs.autoScrollOffset, r3 = i3 && !s4.params.loop;
            if (e2.realIndex !== s4.realIndex || r3) {
              let n4, l4, o2 = s4.activeIndex;
              if (s4.params.loop) {
                s4.slides.eq(o2).hasClass(s4.params.slideDuplicateClass) && (s4.loopFix(), s4._clientLeft = s4.$wrapperEl[0].clientLeft, o2 = s4.activeIndex);
                const t4 = s4.slides.eq(o2).prevAll(`[data-swiper-slide-index="${e2.realIndex}"]`).eq(0).index(), a4 = s4.slides.eq(o2).nextAll(`[data-swiper-slide-index="${e2.realIndex}"]`).eq(0).index();
                n4 = t4 === void 0 ? a4 : a4 === void 0 ? t4 : a4 - o2 == o2 - t4 ? s4.params.slidesPerGroup > 1 ? a4 : o2 : a4 - o2 < o2 - t4 ? a4 : t4, l4 = e2.activeIndex > e2.previousIndex ? "next" : "prev";
              } else
                n4 = e2.realIndex, l4 = n4 > e2.previousIndex ? "next" : "prev";
              r3 && (n4 += l4 === "next" ? i3 : -1 * i3), s4.visibleSlidesIndexes && s4.visibleSlidesIndexes.indexOf(n4) < 0 && (s4.params.centeredSlides ? n4 = n4 > o2 ? n4 - Math.floor(a3 / 2) + 1 : n4 + Math.floor(a3 / 2) - 1 : n4 > o2 && s4.params.slidesPerGroup, s4.slideTo(n4, t3 ? 0 : void 0));
            }
            let n3 = 1;
            const l3 = e2.params.thumbs.slideThumbActiveClass;
            if (e2.params.slidesPerView > 1 && !e2.params.centeredSlides && (n3 = e2.params.slidesPerView), e2.params.thumbs.multipleActiveThumbs || (n3 = 1), n3 = Math.floor(n3), s4.slides.removeClass(l3), s4.params.loop || s4.params.virtual && s4.params.virtual.enabled)
              for (let t4 = 0; t4 < n3; t4 += 1)
                s4.$wrapperEl.children(`[data-swiper-slide-index="${e2.realIndex + t4}"]`).addClass(l3);
            else
              for (let t4 = 0; t4 < n3; t4 += 1)
                s4.slides.eq(e2.realIndex + t4).addClass(l3);
          }
          e2.thumbs = { swiper: null }, s3("beforeInit", () => {
            const { thumbs: t3 } = e2.params;
            t3 && t3.swiper && (n2(), l2(true));
          }), s3("slideChange update resize observerUpdate", () => {
            e2.thumbs.swiper && l2();
          }), s3("setTransition", (t3, s4) => {
            const a3 = e2.thumbs.swiper;
            a3 && a3.setTransition(s4);
          }), s3("beforeDestroy", () => {
            const t3 = e2.thumbs.swiper;
            t3 && i2 && t3 && t3.destroy();
          }), Object.assign(e2.thumbs, { init: n2, update: l2 });
        }, function({ swiper: e2, extendParams: t2, emit: s3, once: a2 }) {
          t2({ freeMode: { enabled: false, momentum: true, momentumRatio: 1, momentumBounce: true, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: false, minimumVelocity: 0.02 } }), Object.assign(e2, { freeMode: { onTouchMove: function() {
            const { touchEventsData: t3, touches: s4 } = e2;
            t3.velocities.length === 0 && t3.velocities.push({ position: s4[e2.isHorizontal() ? "startX" : "startY"], time: t3.touchStartTime }), t3.velocities.push({ position: s4[e2.isHorizontal() ? "currentX" : "currentY"], time: u() });
          }, onTouchEnd: function({ currentPos: t3 }) {
            const { params: i2, $wrapperEl: r2, rtlTranslate: n2, snapGrid: l2, touchEventsData: o2 } = e2, d2 = u() - o2.touchStartTime;
            if (t3 < -e2.minTranslate())
              e2.slideTo(e2.activeIndex);
            else if (t3 > -e2.maxTranslate())
              e2.slides.length < l2.length ? e2.slideTo(l2.length - 1) : e2.slideTo(e2.slides.length - 1);
            else {
              if (i2.freeMode.momentum) {
                if (o2.velocities.length > 1) {
                  const t5 = o2.velocities.pop(), s4 = o2.velocities.pop(), a3 = t5.position - s4.position, r3 = t5.time - s4.time;
                  e2.velocity = a3 / r3, e2.velocity /= 2, Math.abs(e2.velocity) < i2.freeMode.minimumVelocity && (e2.velocity = 0), (r3 > 150 || u() - t5.time > 300) && (e2.velocity = 0);
                } else
                  e2.velocity = 0;
                e2.velocity *= i2.freeMode.momentumVelocityRatio, o2.velocities.length = 0;
                let t4 = 1e3 * i2.freeMode.momentumRatio;
                const d3 = e2.velocity * t4;
                let c2 = e2.translate + d3;
                n2 && (c2 = -c2);
                let p2, h2 = false;
                const m2 = 20 * Math.abs(e2.velocity) * i2.freeMode.momentumBounceRatio;
                let f2;
                if (c2 < e2.maxTranslate())
                  i2.freeMode.momentumBounce ? (c2 + e2.maxTranslate() < -m2 && (c2 = e2.maxTranslate() - m2), p2 = e2.maxTranslate(), h2 = true, o2.allowMomentumBounce = true) : c2 = e2.maxTranslate(), i2.loop && i2.centeredSlides && (f2 = true);
                else if (c2 > e2.minTranslate())
                  i2.freeMode.momentumBounce ? (c2 - e2.minTranslate() > m2 && (c2 = e2.minTranslate() + m2), p2 = e2.minTranslate(), h2 = true, o2.allowMomentumBounce = true) : c2 = e2.minTranslate(), i2.loop && i2.centeredSlides && (f2 = true);
                else if (i2.freeMode.sticky) {
                  let t5;
                  for (let e3 = 0; e3 < l2.length; e3 += 1)
                    if (l2[e3] > -c2) {
                      t5 = e3;
                      break;
                    }
                  c2 = Math.abs(l2[t5] - c2) < Math.abs(l2[t5 - 1] - c2) || e2.swipeDirection === "next" ? l2[t5] : l2[t5 - 1], c2 = -c2;
                }
                if (f2 && a2("transitionEnd", () => {
                  e2.loopFix();
                }), e2.velocity !== 0) {
                  if (t4 = n2 ? Math.abs((-c2 - e2.translate) / e2.velocity) : Math.abs((c2 - e2.translate) / e2.velocity), i2.freeMode.sticky) {
                    const s4 = Math.abs((n2 ? -c2 : c2) - e2.translate), a3 = e2.slidesSizesGrid[e2.activeIndex];
                    t4 = s4 < a3 ? i2.speed : s4 < 2 * a3 ? 1.5 * i2.speed : 2.5 * i2.speed;
                  }
                } else if (i2.freeMode.sticky)
                  return void e2.slideToClosest();
                i2.freeMode.momentumBounce && h2 ? (e2.updateProgress(p2), e2.setTransition(t4), e2.setTranslate(c2), e2.transitionStart(true, e2.swipeDirection), e2.animating = true, r2.transitionEnd(() => {
                  e2 && !e2.destroyed && o2.allowMomentumBounce && (s3("momentumBounce"), e2.setTransition(i2.speed), setTimeout(() => {
                    e2.setTranslate(p2), r2.transitionEnd(() => {
                      e2 && !e2.destroyed && e2.transitionEnd();
                    });
                  }, 0));
                })) : e2.velocity ? (s3("_freeModeNoMomentumRelease"), e2.updateProgress(c2), e2.setTransition(t4), e2.setTranslate(c2), e2.transitionStart(true, e2.swipeDirection), e2.animating || (e2.animating = true, r2.transitionEnd(() => {
                  e2 && !e2.destroyed && e2.transitionEnd();
                }))) : e2.updateProgress(c2), e2.updateActiveIndex(), e2.updateSlidesClasses();
              } else {
                if (i2.freeMode.sticky)
                  return void e2.slideToClosest();
                i2.freeMode && s3("_freeModeNoMomentumRelease");
              }
              (!i2.freeMode.momentum || d2 >= i2.longSwipesMs) && (e2.updateProgress(), e2.updateActiveIndex(), e2.updateSlidesClasses());
            }
          } } });
        }, function({ swiper: e2, extendParams: t2 }) {
          let s3, a2, i2;
          t2({ grid: { rows: 1, fill: "column" } }), e2.grid = { initSlides: (t3) => {
            const { slidesPerView: r2 } = e2.params, { rows: n2, fill: l2 } = e2.params.grid;
            a2 = s3 / n2, i2 = Math.floor(t3 / n2), s3 = Math.floor(t3 / n2) === t3 / n2 ? t3 : Math.ceil(t3 / n2) * n2, r2 !== "auto" && l2 === "row" && (s3 = Math.max(s3, r2 * n2));
          }, updateSlide: (t3, r2, n2, l2) => {
            const { slidesPerGroup: o2, spaceBetween: d2 } = e2.params, { rows: c2, fill: p2 } = e2.params.grid;
            let u2, h2, m2;
            if (p2 === "row" && o2 > 1) {
              const e3 = Math.floor(t3 / (o2 * c2)), a3 = t3 - c2 * o2 * e3, i3 = e3 === 0 ? o2 : Math.min(Math.ceil((n2 - e3 * c2 * o2) / c2), o2);
              m2 = Math.floor(a3 / i3), h2 = a3 - m2 * i3 + e3 * o2, u2 = h2 + m2 * s3 / c2, r2.css({ "-webkit-order": u2, order: u2 });
            } else
              p2 === "column" ? (h2 = Math.floor(t3 / c2), m2 = t3 - h2 * c2, (h2 > i2 || h2 === i2 && m2 === c2 - 1) && (m2 += 1, m2 >= c2 && (m2 = 0, h2 += 1))) : (m2 = Math.floor(t3 / a2), h2 = t3 - m2 * a2);
            r2.css(l2("margin-top"), m2 !== 0 ? d2 && `${d2}px` : "");
          }, updateWrapperSize: (t3, a3, i3) => {
            const { spaceBetween: r2, centeredSlides: n2, roundLengths: l2 } = e2.params, { rows: o2 } = e2.params.grid;
            if (e2.virtualSize = (t3 + r2) * s3, e2.virtualSize = Math.ceil(e2.virtualSize / o2) - r2, e2.$wrapperEl.css({ [i3("width")]: `${e2.virtualSize + r2}px` }), n2) {
              a3.splice(0, a3.length);
              const t4 = [];
              for (let s4 = 0; s4 < a3.length; s4 += 1) {
                let i4 = a3[s4];
                l2 && (i4 = Math.floor(i4)), a3[s4] < e2.virtualSize + a3[0] && t4.push(i4);
              }
              a3.push(...t4);
            }
          } };
        }, function({ swiper: e2 }) {
          Object.assign(e2, { appendSlide: R.bind(e2), prependSlide: j.bind(e2), addSlide: _.bind(e2), removeSlide: V.bind(e2), removeAllSlides: q.bind(e2) });
        }, function({ swiper: e2, extendParams: t2, on: s3 }) {
          t2({ fadeEffect: { crossFade: false, transformEl: null } }), F({ effect: "fade", swiper: e2, on: s3, setTranslate: () => {
            const { slides: t3 } = e2, s4 = e2.params.fadeEffect;
            for (let a2 = 0; a2 < t3.length; a2 += 1) {
              const t4 = e2.slides.eq(a2);
              let i2 = -t4[0].swiperSlideOffset;
              e2.params.virtualTranslate || (i2 -= e2.translate);
              let r2 = 0;
              e2.isHorizontal() || (r2 = i2, i2 = 0);
              const n2 = e2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t4[0].progress), 0) : 1 + Math.min(Math.max(t4[0].progress, -1), 0);
              U(s4, t4).css({ opacity: n2 }).transform(`translate3d(${i2}px, ${r2}px, 0px)`);
            }
          }, setTransition: (t3) => {
            const { transformEl: s4 } = e2.params.fadeEffect;
            (s4 ? e2.slides.find(s4) : e2.slides).transition(t3), K({ swiper: e2, duration: t3, transformEl: s4, allSlides: true });
          }, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !e2.params.cssMode }) });
        }, function({ swiper: e2, extendParams: t2, on: s3 }) {
          t2({ cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 } }), F({ effect: "cube", swiper: e2, on: s3, setTranslate: () => {
            const { $el: t3, $wrapperEl: s4, slides: a2, width: i2, height: r2, rtlTranslate: n2, size: l2, browser: o2 } = e2, c2 = e2.params.cubeEffect, p2 = e2.isHorizontal(), u2 = e2.virtual && e2.params.virtual.enabled;
            let h2, m2 = 0;
            c2.shadow && (p2 ? (h2 = s4.find(".swiper-cube-shadow"), h2.length === 0 && (h2 = d('<div class="swiper-cube-shadow"></div>'), s4.append(h2)), h2.css({ height: `${i2}px` })) : (h2 = t3.find(".swiper-cube-shadow"), h2.length === 0 && (h2 = d('<div class="swiper-cube-shadow"></div>'), t3.append(h2))));
            for (let e3 = 0; e3 < a2.length; e3 += 1) {
              const t4 = a2.eq(e3);
              let s5 = e3;
              u2 && (s5 = parseInt(t4.attr("data-swiper-slide-index"), 10));
              let i3 = 90 * s5, r3 = Math.floor(i3 / 360);
              n2 && (i3 = -i3, r3 = Math.floor(-i3 / 360));
              const o3 = Math.max(Math.min(t4[0].progress, 1), -1);
              let h3 = 0, f3 = 0, g2 = 0;
              s5 % 4 == 0 ? (h3 = 4 * -r3 * l2, g2 = 0) : (s5 - 1) % 4 == 0 ? (h3 = 0, g2 = 4 * -r3 * l2) : (s5 - 2) % 4 == 0 ? (h3 = l2 + 4 * r3 * l2, g2 = l2) : (s5 - 3) % 4 == 0 && (h3 = -l2, g2 = 3 * l2 + 4 * l2 * r3), n2 && (h3 = -h3), p2 || (f3 = h3, h3 = 0);
              const v2 = `rotateX(${p2 ? 0 : -i3}deg) rotateY(${p2 ? i3 : 0}deg) translate3d(${h3}px, ${f3}px, ${g2}px)`;
              if (o3 <= 1 && o3 > -1 && (m2 = 90 * s5 + 90 * o3, n2 && (m2 = 90 * -s5 - 90 * o3)), t4.transform(v2), c2.slideShadows) {
                let e4 = p2 ? t4.find(".swiper-slide-shadow-left") : t4.find(".swiper-slide-shadow-top"), s6 = p2 ? t4.find(".swiper-slide-shadow-right") : t4.find(".swiper-slide-shadow-bottom");
                e4.length === 0 && (e4 = d(`<div class="swiper-slide-shadow-${p2 ? "left" : "top"}"></div>`), t4.append(e4)), s6.length === 0 && (s6 = d(`<div class="swiper-slide-shadow-${p2 ? "right" : "bottom"}"></div>`), t4.append(s6)), e4.length && (e4[0].style.opacity = Math.max(-o3, 0)), s6.length && (s6[0].style.opacity = Math.max(o3, 0));
              }
            }
            if (s4.css({ "-webkit-transform-origin": `50% 50% -${l2 / 2}px`, "transform-origin": `50% 50% -${l2 / 2}px` }), c2.shadow)
              if (p2)
                h2.transform(`translate3d(0px, ${i2 / 2 + c2.shadowOffset}px, ${-i2 / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c2.shadowScale})`);
              else {
                const e3 = Math.abs(m2) - 90 * Math.floor(Math.abs(m2) / 90), t4 = 1.5 - (Math.sin(2 * e3 * Math.PI / 360) / 2 + Math.cos(2 * e3 * Math.PI / 360) / 2), s5 = c2.shadowScale, a3 = c2.shadowScale / t4, i3 = c2.shadowOffset;
                h2.transform(`scale3d(${s5}, 1, ${a3}) translate3d(0px, ${r2 / 2 + i3}px, ${-r2 / 2 / a3}px) rotateX(-90deg)`);
              }
            const f2 = o2.isSafari || o2.isWebView ? -l2 / 2 : 0;
            s4.transform(`translate3d(0px,0,${f2}px) rotateX(${e2.isHorizontal() ? 0 : m2}deg) rotateY(${e2.isHorizontal() ? -m2 : 0}deg)`);
          }, setTransition: (t3) => {
            const { $el: s4, slides: a2 } = e2;
            a2.transition(t3).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t3), e2.params.cubeEffect.shadow && !e2.isHorizontal() && s4.find(".swiper-cube-shadow").transition(t3);
          }, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, resistanceRatio: 0, spaceBetween: 0, centeredSlides: false, virtualTranslate: true }) });
        }, function({ swiper: e2, extendParams: t2, on: s3 }) {
          t2({ flipEffect: { slideShadows: true, limitRotation: true, transformEl: null } }), F({ effect: "flip", swiper: e2, on: s3, setTranslate: () => {
            const { slides: t3, rtlTranslate: s4 } = e2, a2 = e2.params.flipEffect;
            for (let i2 = 0; i2 < t3.length; i2 += 1) {
              const r2 = t3.eq(i2);
              let n2 = r2[0].progress;
              e2.params.flipEffect.limitRotation && (n2 = Math.max(Math.min(r2[0].progress, 1), -1));
              const l2 = r2[0].swiperSlideOffset;
              let o2 = -180 * n2, d2 = 0, c2 = e2.params.cssMode ? -l2 - e2.translate : -l2, p2 = 0;
              if (e2.isHorizontal() ? s4 && (o2 = -o2) : (p2 = c2, c2 = 0, d2 = -o2, o2 = 0), r2[0].style.zIndex = -Math.abs(Math.round(n2)) + t3.length, a2.slideShadows) {
                let t4 = e2.isHorizontal() ? r2.find(".swiper-slide-shadow-left") : r2.find(".swiper-slide-shadow-top"), s5 = e2.isHorizontal() ? r2.find(".swiper-slide-shadow-right") : r2.find(".swiper-slide-shadow-bottom");
                t4.length === 0 && (t4 = Z(a2, r2, e2.isHorizontal() ? "left" : "top")), s5.length === 0 && (s5 = Z(a2, r2, e2.isHorizontal() ? "right" : "bottom")), t4.length && (t4[0].style.opacity = Math.max(-n2, 0)), s5.length && (s5[0].style.opacity = Math.max(n2, 0));
              }
              const u2 = `translate3d(${c2}px, ${p2}px, 0px) rotateX(${d2}deg) rotateY(${o2}deg)`;
              U(a2, r2).transform(u2);
            }
          }, setTransition: (t3) => {
            const { transformEl: s4 } = e2.params.flipEffect;
            (s4 ? e2.slides.find(s4) : e2.slides).transition(t3).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t3), K({ swiper: e2, duration: t3, transformEl: s4 });
          }, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !e2.params.cssMode }) });
        }, function({ swiper: e2, extendParams: t2, on: s3 }) {
          t2({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: true, transformEl: null } }), F({ effect: "coverflow", swiper: e2, on: s3, setTranslate: () => {
            const { width: t3, height: s4, slides: a2, slidesSizesGrid: i2 } = e2, r2 = e2.params.coverflowEffect, n2 = e2.isHorizontal(), l2 = e2.translate, o2 = n2 ? t3 / 2 - l2 : s4 / 2 - l2, d2 = n2 ? r2.rotate : -r2.rotate, c2 = r2.depth;
            for (let e3 = 0, t4 = a2.length; e3 < t4; e3 += 1) {
              const t5 = a2.eq(e3), s5 = i2[e3], l3 = (o2 - t5[0].swiperSlideOffset - s5 / 2) / s5 * r2.modifier;
              let p2 = n2 ? d2 * l3 : 0, u2 = n2 ? 0 : d2 * l3, h2 = -c2 * Math.abs(l3), m2 = r2.stretch;
              typeof m2 == "string" && m2.indexOf("%") !== -1 && (m2 = parseFloat(r2.stretch) / 100 * s5);
              let f2 = n2 ? 0 : m2 * l3, g2 = n2 ? m2 * l3 : 0, v2 = 1 - (1 - r2.scale) * Math.abs(l3);
              Math.abs(g2) < 1e-3 && (g2 = 0), Math.abs(f2) < 1e-3 && (f2 = 0), Math.abs(h2) < 1e-3 && (h2 = 0), Math.abs(p2) < 1e-3 && (p2 = 0), Math.abs(u2) < 1e-3 && (u2 = 0), Math.abs(v2) < 1e-3 && (v2 = 0);
              const w2 = `translate3d(${g2}px,${f2}px,${h2}px)  rotateX(${u2}deg) rotateY(${p2}deg) scale(${v2})`;
              if (U(r2, t5).transform(w2), t5[0].style.zIndex = 1 - Math.abs(Math.round(l3)), r2.slideShadows) {
                let e4 = n2 ? t5.find(".swiper-slide-shadow-left") : t5.find(".swiper-slide-shadow-top"), s6 = n2 ? t5.find(".swiper-slide-shadow-right") : t5.find(".swiper-slide-shadow-bottom");
                e4.length === 0 && (e4 = Z(r2, t5, n2 ? "left" : "top")), s6.length === 0 && (s6 = Z(r2, t5, n2 ? "right" : "bottom")), e4.length && (e4[0].style.opacity = l3 > 0 ? l3 : 0), s6.length && (s6[0].style.opacity = -l3 > 0 ? -l3 : 0);
              }
            }
          }, setTransition: (t3) => {
            const { transformEl: s4 } = e2.params.coverflowEffect;
            (s4 ? e2.slides.find(s4) : e2.slides).transition(t3).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t3);
          }, perspective: () => true, overwriteParams: () => ({ watchSlidesProgress: true }) });
        }, function({ swiper: e2, extendParams: t2, on: s3 }) {
          t2({ creativeEffect: { transformEl: null, limitProgress: 1, shadowPerProgress: false, progressMultiplier: 1, perspective: true, prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }, next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 } } });
          const a2 = (e3) => typeof e3 == "string" ? e3 : `${e3}px`;
          F({ effect: "creative", swiper: e2, on: s3, setTranslate: () => {
            const { slides: t3, $wrapperEl: s4, slidesSizesGrid: i2 } = e2, r2 = e2.params.creativeEffect, { progressMultiplier: n2 } = r2, l2 = e2.params.centeredSlides;
            if (l2) {
              const t4 = i2[0] / 2 - e2.params.slidesOffsetBefore || 0;
              s4.transform(`translateX(calc(50% - ${t4}px))`);
            }
            for (let s5 = 0; s5 < t3.length; s5 += 1) {
              const i3 = t3.eq(s5), o2 = i3[0].progress, d2 = Math.min(Math.max(i3[0].progress, -r2.limitProgress), r2.limitProgress);
              let c2 = d2;
              l2 || (c2 = Math.min(Math.max(i3[0].originalProgress, -r2.limitProgress), r2.limitProgress));
              const p2 = i3[0].swiperSlideOffset, u2 = [e2.params.cssMode ? -p2 - e2.translate : -p2, 0, 0], h2 = [0, 0, 0];
              let m2 = false;
              e2.isHorizontal() || (u2[1] = u2[0], u2[0] = 0);
              let f2 = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
              d2 < 0 ? (f2 = r2.next, m2 = true) : d2 > 0 && (f2 = r2.prev, m2 = true), u2.forEach((e3, t4) => {
                u2[t4] = `calc(${e3}px + (${a2(f2.translate[t4])} * ${Math.abs(d2 * n2)}))`;
              }), h2.forEach((e3, t4) => {
                h2[t4] = f2.rotate[t4] * Math.abs(d2 * n2);
              }), i3[0].style.zIndex = -Math.abs(Math.round(o2)) + t3.length;
              const g2 = u2.join(", "), v2 = `rotateX(${h2[0]}deg) rotateY(${h2[1]}deg) rotateZ(${h2[2]}deg)`, w2 = c2 < 0 ? `scale(${1 + (1 - f2.scale) * c2 * n2})` : `scale(${1 - (1 - f2.scale) * c2 * n2})`, b2 = c2 < 0 ? 1 + (1 - f2.opacity) * c2 * n2 : 1 - (1 - f2.opacity) * c2 * n2, x2 = `translate3d(${g2}) ${v2} ${w2}`;
              if (m2 && f2.shadow || !m2) {
                let e3 = i3.children(".swiper-slide-shadow");
                if (e3.length === 0 && f2.shadow && (e3 = Z(r2, i3)), e3.length) {
                  const t4 = r2.shadowPerProgress ? d2 * (1 / r2.limitProgress) : d2;
                  e3[0].style.opacity = Math.min(Math.max(Math.abs(t4), 0), 1);
                }
              }
              const y2 = U(r2, i3);
              y2.transform(x2).css({ opacity: b2 }), f2.origin && y2.css("transform-origin", f2.origin);
            }
          }, setTransition: (t3) => {
            const { transformEl: s4 } = e2.params.creativeEffect;
            (s4 ? e2.slides.find(s4) : e2.slides).transition(t3).find(".swiper-slide-shadow").transition(t3), K({ swiper: e2, duration: t3, transformEl: s4, allSlides: true });
          }, perspective: () => e2.params.creativeEffect.perspective, overwriteParams: () => ({ watchSlidesProgress: true, virtualTranslate: !e2.params.cssMode }) });
        }, function({ swiper: e2, extendParams: t2, on: s3 }) {
          t2({ cardsEffect: { slideShadows: true, transformEl: null } }), F({ effect: "cards", swiper: e2, on: s3, setTranslate: () => {
            const { slides: t3, activeIndex: s4 } = e2, a2 = e2.params.cardsEffect, { startTranslate: i2, isTouched: r2 } = e2.touchEventsData, n2 = e2.translate;
            for (let l2 = 0; l2 < t3.length; l2 += 1) {
              const o2 = t3.eq(l2), d2 = o2[0].progress, c2 = Math.min(Math.max(d2, -4), 4);
              let p2 = o2[0].swiperSlideOffset;
              e2.params.centeredSlides && !e2.params.cssMode && e2.$wrapperEl.transform(`translateX(${e2.minTranslate()}px)`), e2.params.centeredSlides && e2.params.cssMode && (p2 -= t3[0].swiperSlideOffset);
              let u2 = e2.params.cssMode ? -p2 - e2.translate : -p2, h2 = 0;
              const m2 = -100 * Math.abs(c2);
              let f2 = 1, g2 = -2 * c2, v2 = 8 - 0.75 * Math.abs(c2);
              const w2 = (l2 === s4 || l2 === s4 - 1) && c2 > 0 && c2 < 1 && (r2 || e2.params.cssMode) && n2 < i2, b2 = (l2 === s4 || l2 === s4 + 1) && c2 < 0 && c2 > -1 && (r2 || e2.params.cssMode) && n2 > i2;
              if (w2 || b2) {
                const e3 = (1 - Math.abs((Math.abs(c2) - 0.5) / 0.5)) ** 0.5;
                g2 += -28 * c2 * e3, f2 += -0.5 * e3, v2 += 96 * e3, h2 = -25 * e3 * Math.abs(c2) + "%";
              }
              if (u2 = c2 < 0 ? `calc(${u2}px + (${v2 * Math.abs(c2)}%))` : c2 > 0 ? `calc(${u2}px + (-${v2 * Math.abs(c2)}%))` : `${u2}px`, !e2.isHorizontal()) {
                const e3 = h2;
                h2 = u2, u2 = e3;
              }
              const x2 = `
        translate3d(${u2}, ${h2}, ${m2}px)
        rotateZ(${g2}deg)
        scale(${c2 < 0 ? "" + (1 + (1 - f2) * c2) : "" + (1 - (1 - f2) * c2)})
      `;
              if (a2.slideShadows) {
                let e3 = o2.find(".swiper-slide-shadow");
                e3.length === 0 && (e3 = Z(a2, o2)), e3.length && (e3[0].style.opacity = Math.min(Math.max((Math.abs(c2) - 0.5) / 0.5, 0), 1));
              }
              o2[0].style.zIndex = -Math.abs(Math.round(d2)) + t3.length;
              U(a2, o2).transform(x2);
            }
          }, setTransition: (t3) => {
            const { transformEl: s4 } = e2.params.cardsEffect;
            (s4 ? e2.slides.find(s4) : e2.slides).transition(t3).find(".swiper-slide-shadow").transition(t3), K({ swiper: e2, duration: t3, transformEl: s4 });
          }, perspective: () => true, overwriteParams: () => ({ watchSlidesProgress: true, virtualTranslate: !e2.params.cssMode }) });
        }];
        return H.use(J), H;
      });
    }
  });

  // resources/js/simple-lightbox.min.js
  !function s(a, r, l) {
    function d(e, t2) {
      if (!r[e]) {
        if (!a[e]) {
          var o = typeof __require == "function" && __require;
          if (!t2 && o)
            return o(e, true);
          if (c)
            return c(e, true);
          var i = new Error("Cannot find module '" + e + "'");
          throw i.code = "MODULE_NOT_FOUND", i;
        }
        var n = r[e] = { exports: {} };
        a[e][0].call(n.exports, function(t3) {
          return d(a[e][1][t3] || t3);
        }, n, n.exports, s, a, r, l);
      }
      return r[e].exports;
    }
    for (var c = typeof __require == "function" && __require, t = 0; t < l.length; t++)
      d(l[t]);
    return d;
  }({ 1: [function(t, e, n) {
    (function(o) {
      (function() {
        "use strict";
        function h(t3) {
          return (h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          })(t3);
        }
        function f(t3, e3) {
          var o2 = typeof Symbol != "undefined" && t3[Symbol.iterator] || t3["@@iterator"];
          if (!o2) {
            if (Array.isArray(t3) || (o2 = function(t4, e4) {
              if (!t4)
                return;
              if (typeof t4 == "string")
                return l(t4, e4);
              var o3 = Object.prototype.toString.call(t4).slice(8, -1);
              o3 === "Object" && t4.constructor && (o3 = t4.constructor.name);
              if (o3 === "Map" || o3 === "Set")
                return Array.from(t4);
              if (o3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o3))
                return l(t4, e4);
            }(t3)) || e3 && t3 && typeof t3.length == "number") {
              o2 && (t3 = o2);
              var i2 = 0, n2 = function() {
              };
              return { s: n2, n: function() {
                return i2 >= t3.length ? { done: true } : { done: false, value: t3[i2++] };
              }, e: function(t4) {
                throw t4;
              }, f: n2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s3, a = true, r = false;
          return { s: function() {
            o2 = o2.call(t3);
          }, n: function() {
            var t4 = o2.next();
            return a = t4.done, t4;
          }, e: function(t4) {
            r = true, s3 = t4;
          }, f: function() {
            try {
              a || o2.return == null || o2.return();
            } finally {
              if (r)
                throw s3;
            }
          } };
        }
        function l(t3, e3) {
          (e3 == null || e3 > t3.length) && (e3 = t3.length);
          for (var o2 = 0, i2 = new Array(e3); o2 < e3; o2++)
            i2[o2] = t3[o2];
          return i2;
        }
        function i(t3, e3) {
          for (var o2 = 0; o2 < e3.length; o2++) {
            var i2 = e3[o2];
            i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t3, i2.key, i2);
          }
        }
        function s2(t3, e3, o2) {
          return e3 in t3 ? Object.defineProperty(t3, e3, { value: o2, enumerable: true, configurable: true, writable: true }) : t3[e3] = o2, t3;
        }
        Object.defineProperty(n, "__esModule", { value: true }), n.default = void 0;
        var t2 = function() {
          function n2(t4, e4) {
            var o3 = this;
            if (!function(t5, e5) {
              if (!(t5 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, n2), s2(this, "defaultOptions", { sourceAttr: "href", overlay: true, spinner: true, nav: true, navText: ["&lsaquo;", "&rsaquo;"], captions: true, captionDelay: 0, captionSelector: "img", captionType: "attr", captionsData: "title", captionPosition: "bottom", captionClass: "", close: true, closeText: "&times;", swipeClose: true, showCounter: true, fileExt: "png|jpg|jpeg|gif|webp", animationSlide: true, animationSpeed: 250, preloading: true, enableKeyboard: true, loop: true, rel: false, docClose: true, swipeTolerance: 50, className: "simple-lightbox", widthRatio: 0.8, heightRatio: 0.9, scaleImageToRatio: false, disableRightClick: false, disableScroll: true, alertError: true, alertErrorMessage: "Image not found, next image will be loaded", additionalHtml: false, history: true, throttleInterval: 0, doubleTapZoom: 2, maxZoom: 10, htmlClass: "has-lightbox", rtl: false, fixedClass: "sl-fixed", fadeSpeed: 300, uniqueImages: true, focus: true, scrollZoom: true, scrollZoomFactor: 0.5 }), s2(this, "transitionPrefix", void 0), s2(this, "isPassiveEventsSupported", void 0), s2(this, "transitionCapable", false), s2(this, "isTouchDevice", "ontouchstart" in window), s2(this, "isAppleDevice", /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)), s2(this, "initialLocationHash", void 0), s2(this, "pushStateSupport", "pushState" in history), s2(this, "isOpen", false), s2(this, "isAnimating", false), s2(this, "isClosing", false), s2(this, "isFadeIn", false), s2(this, "urlChangedOnce", false), s2(this, "hashReseted", false), s2(this, "historyHasChanges", false), s2(this, "historyUpdateTimeout", null), s2(this, "currentImage", void 0), s2(this, "eventNamespace", "simplelightbox"), s2(this, "domNodes", {}), s2(this, "loadedImages", []), s2(this, "initialImageIndex", 0), s2(this, "currentImageIndex", 0), s2(this, "initialSelector", null), s2(this, "globalScrollbarWidth", 0), s2(this, "controlCoordinates", { swipeDiff: 0, swipeYDiff: 0, swipeStart: 0, swipeEnd: 0, swipeYStart: 0, swipeYEnd: 0, mousedown: false, imageLeft: 0, zoomed: false, containerHeight: 0, containerWidth: 0, containerOffsetX: 0, containerOffsetY: 0, imgHeight: 0, imgWidth: 0, capture: false, initialOffsetX: 0, initialOffsetY: 0, initialPointerOffsetX: 0, initialPointerOffsetY: 0, initialPointerOffsetX2: 0, initialPointerOffsetY2: 0, initialScale: 1, initialPinchDistance: 0, pointerOffsetX: 0, pointerOffsetY: 0, pointerOffsetX2: 0, pointerOffsetY2: 0, targetOffsetX: 0, targetOffsetY: 0, targetScale: 0, pinchOffsetX: 0, pinchOffsetY: 0, limitOffsetX: 0, limitOffsetY: 0, scaleDifference: 0, targetPinchDistance: 0, touchCount: 0, doubleTapped: false, touchmoveCount: 0 }), this.options = Object.assign(this.defaultOptions, e4), this.isPassiveEventsSupported = this.checkPassiveEventsSupport(), typeof t4 == "string" ? (this.initialSelector = t4, this.elements = Array.from(document.querySelectorAll(t4))) : this.elements = t4.length !== void 0 && 0 < t4.length ? Array.from(t4) : [t4], this.relatedElements = [], this.transitionPrefix = this.calculateTransitionPrefix(), this.transitionCapable = this.transitionPrefix !== false, this.initialLocationHash = this.hash, this.options.rel && (this.elements = this.getRelated(this.options.rel)), this.options.uniqueImages) {
              var i2 = [];
              this.elements = Array.from(this.elements).filter(function(t5) {
                var e5 = t5.getAttribute(o3.options.sourceAttr);
                return i2.indexOf(e5) === -1 && (i2.push(e5), true);
              });
            }
            this.createDomNodes(), this.options.close && this.domNodes.wrapper.appendChild(this.domNodes.closeButton), this.options.nav && this.domNodes.wrapper.appendChild(this.domNodes.navigation), this.options.spinner && this.domNodes.wrapper.appendChild(this.domNodes.spinner), this.addEventListener(this.elements, "click." + this.eventNamespace, function(t5) {
              if (o3.isValidLink(t5.currentTarget)) {
                if (t5.preventDefault(), o3.isAnimating)
                  return false;
                o3.initialImageIndex = o3.elements.indexOf(t5.currentTarget), o3.openImage(t5.currentTarget);
              }
            }), this.options.docClose && this.addEventListener(this.domNodes.wrapper, ["click." + this.eventNamespace, "touchstart." + this.eventNamespace], function(t5) {
              o3.isOpen && t5.target === t5.currentTarget && o3.close();
            }), this.options.disableRightClick && this.addEventListener(document.body, "contextmenu." + this.eventNamespace, function(t5) {
              t5.target.parentElement.classList.contains("sl-image") && t5.preventDefault();
            }), this.options.enableKeyboard && this.addEventListener(document.body, "keyup." + this.eventNamespace, this.throttle(function(t5) {
              if (o3.controlCoordinates.swipeDiff = 0, o3.isAnimating && t5.key === "Escape")
                return o3.currentImage.setAttribute("src", ""), o3.isAnimating = false, o3.close();
              o3.isOpen && (t5.preventDefault(), t5.key === "Escape" && o3.close(), !o3.isAnimating && -1 < ["ArrowLeft", "ArrowRight"].indexOf(t5.key) && o3.loadImage(t5.key === "ArrowRight" ? 1 : -1));
            }, this.options.throttleInterval)), this.addEvents();
          }
          var t3, e3, o2;
          return t3 = n2, (e3 = [{ key: "checkPassiveEventsSupport", value: function() {
            var t4 = false;
            try {
              var e4 = Object.defineProperty({}, "passive", { get: function() {
                t4 = true;
              } });
              window.addEventListener("testPassive", null, e4), window.removeEventListener("testPassive", null, e4);
            } catch (t5) {
            }
            return t4;
          } }, { key: "createDomNodes", value: function() {
            this.domNodes.overlay = document.createElement("div"), this.domNodes.overlay.classList.add("sl-overlay"), this.domNodes.overlay.dataset.opacityTarget = ".7", this.domNodes.closeButton = document.createElement("button"), this.domNodes.closeButton.classList.add("sl-close"), this.domNodes.closeButton.innerHTML = this.options.closeText, this.domNodes.spinner = document.createElement("div"), this.domNodes.spinner.classList.add("sl-spinner"), this.domNodes.spinner.innerHTML = "<div></div>", this.domNodes.navigation = document.createElement("div"), this.domNodes.navigation.classList.add("sl-navigation"), this.domNodes.navigation.innerHTML = '<button class="sl-prev">'.concat(this.options.navText[0], '</button><button class="sl-next">').concat(this.options.navText[1], "</button>"), this.domNodes.counter = document.createElement("div"), this.domNodes.counter.classList.add("sl-counter"), this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>', this.domNodes.caption = document.createElement("div"), this.domNodes.caption.classList.add("sl-caption", "pos-" + this.options.captionPosition), this.options.captionClass && this.domNodes.caption.classList.add(this.options.captionClass), this.domNodes.image = document.createElement("div"), this.domNodes.image.classList.add("sl-image"), this.domNodes.wrapper = document.createElement("div"), this.domNodes.wrapper.classList.add("sl-wrapper"), this.domNodes.wrapper.setAttribute("tabindex", -1), this.domNodes.wrapper.setAttribute("role", "dialog"), this.domNodes.wrapper.setAttribute("aria-hidden", false), this.options.className && this.domNodes.wrapper.classList.add(this.options.className), this.options.rtl && this.domNodes.wrapper.classList.add("sl-dir-rtl");
          } }, { key: "throttle", value: function(t4, e4) {
            var o3;
            return function() {
              o3 || (t4.apply(this, arguments), o3 = true, setTimeout(function() {
                return o3 = false;
              }, e4));
            };
          } }, { key: "isValidLink", value: function(t4) {
            return !this.options.fileExt || t4.getAttribute(this.options.sourceAttr) && new RegExp("(" + this.options.fileExt + ")$", "i").test(t4.getAttribute(this.options.sourceAttr));
          } }, { key: "calculateTransitionPrefix", value: function() {
            var t4 = (document.body || document.documentElement).style;
            return "transition" in t4 ? "" : "WebkitTransition" in t4 ? "-webkit-" : "MozTransition" in t4 ? "-moz-" : "OTransition" in t4 && "-o";
          } }, { key: "toggleScrollbar", value: function(t4) {
            var i2 = 0, e4 = [].slice.call(document.querySelectorAll("." + this.options.fixedClass));
            if (t4 === "hide") {
              var o3 = window.innerWidth;
              if (!o3) {
                var n3 = document.documentElement.getBoundingClientRect();
                o3 = n3.right - Math.abs(n3.left);
              }
              if (document.body.clientWidth < o3 || this.isAppleDevice) {
                var s3 = document.createElement("div"), a = parseInt(document.body.style.paddingRight || 0, 10);
                s3.classList.add("sl-scrollbar-measure"), document.body.appendChild(s3), i2 = s3.offsetWidth - s3.clientWidth, document.body.removeChild(s3), document.body.dataset.originalPaddingRight = a, (0 < i2 || i2 == 0 && this.isAppleDevice) && (document.body.classList.add("hidden-scroll"), document.body.style.paddingRight = a + i2 + "px", e4.forEach(function(t5) {
                  var e5 = t5.style.paddingRight, o4 = window.getComputedStyle(t5)["padding-right"];
                  t5.dataset.originalPaddingRight = e5, t5.style.paddingRight = "".concat(parseFloat(o4) + i2, "px");
                }));
              }
            } else
              document.body.classList.remove("hidden-scroll"), document.body.style.paddingRight = document.body.dataset.originalPaddingRight, e4.forEach(function(t5) {
                var e5 = t5.dataset.originalPaddingRight;
                e5 !== void 0 && (t5.style.paddingRight = e5);
              });
            return i2;
          } }, { key: "close", value: function() {
            var t4 = this;
            if (!this.isOpen || this.isAnimating || this.isClosing)
              return false;
            this.isClosing = true;
            var e4 = this.relatedElements[this.currentImageIndex];
            for (var o3 in e4.dispatchEvent(new Event("close.simplelightbox")), this.options.history && (this.historyHasChanges = false, this.hashReseted || this.resetHash()), this.removeEventListener(document, "focusin." + this.eventNamespace), this.fadeOut(document.querySelectorAll(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"), this.options.fadeSpeed, function() {
              t4.options.disableScroll && t4.toggleScrollbar("show"), t4.options.htmlClass && t4.options.htmlClass !== "" && document.querySelector("html").classList.remove(t4.options.htmlClass), document.body.removeChild(t4.domNodes.wrapper), document.body.removeChild(t4.domNodes.overlay), t4.domNodes.additionalHtml = null, e4.dispatchEvent(new Event("closed.simplelightbox")), t4.isClosing = false;
            }), this.currentImage = null, this.isOpen = false, this.isAnimating = false, this.controlCoordinates)
              this.controlCoordinates[o3] = 0;
            this.controlCoordinates.mousedown = false, this.controlCoordinates.zoomed = false, this.controlCoordinates.capture = false, this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom), this.controlCoordinates.doubleTapped = false;
          } }, { key: "hash", get: function() {
            return window.location.hash.substring(1);
          } }, { key: "preload", value: function() {
            var o3 = this, i2 = this.currentImageIndex, t4 = this.relatedElements.length, e4 = i2 + 1 < 0 ? t4 - 1 : t4 - 1 <= i2 + 1 ? 0 : i2 + 1, n3 = i2 - 1 < 0 ? t4 - 1 : t4 - 1 <= i2 - 1 ? 0 : i2 - 1, s3 = new Image(), a = new Image();
            s3.addEventListener("load", function(t5) {
              var e5 = t5.target.getAttribute("src");
              o3.loadedImages.indexOf(e5) === -1 && o3.loadedImages.push(e5), o3.relatedElements[i2].dispatchEvent(new Event("nextImageLoaded." + o3.eventNamespace));
            }), s3.setAttribute("src", this.relatedElements[e4].getAttribute(this.options.sourceAttr)), a.addEventListener("load", function(t5) {
              var e5 = t5.target.getAttribute("src");
              o3.loadedImages.indexOf(e5) === -1 && o3.loadedImages.push(e5), o3.relatedElements[i2].dispatchEvent(new Event("prevImageLoaded." + o3.eventNamespace));
            }), a.setAttribute("src", this.relatedElements[n3].getAttribute(this.options.sourceAttr));
          } }, { key: "loadImage", value: function(t4) {
            var e4 = this, o3 = t4;
            this.options.rtl && (t4 = -t4), this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change." + this.eventNamespace)), this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((t4 === 1 ? "next" : "prev") + "." + this.eventNamespace));
            var i2 = this.currentImageIndex + t4;
            if (this.isAnimating || (i2 < 0 || i2 >= this.relatedElements.length) && this.options.loop === false)
              return false;
            this.currentImageIndex = i2 < 0 ? this.relatedElements.length - 1 : i2 > this.relatedElements.length - 1 ? 0 : i2, this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1, this.options.animationSlide && this.slide(this.options.animationSpeed / 1e3, -100 * o3 - this.controlCoordinates.swipeDiff + "px"), this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function() {
              e4.isAnimating = true, e4.isClosing ? e4.isAnimating = false : setTimeout(function() {
                var t5 = e4.relatedElements[e4.currentImageIndex];
                e4.currentImage.setAttribute("src", t5.getAttribute(e4.options.sourceAttr)), e4.loadedImages.indexOf(t5.getAttribute(e4.options.sourceAttr)) === -1 && e4.show(e4.domNodes.spinner), e4.domNodes.image.contains(e4.domNodes.caption) && e4.domNodes.image.removeChild(e4.domNodes.caption), e4.adjustImage(o3), e4.options.preloading && e4.preload();
              }, 100);
            });
          } }, { key: "adjustImage", value: function(a) {
            var r = this;
            if (!this.currentImage)
              return false;
            var t4 = new Image(), l2 = window.innerWidth * this.options.widthRatio, d = window.innerHeight * this.options.heightRatio;
            t4.setAttribute("src", this.currentImage.getAttribute("src")), this.currentImage.dataset.scale = 1, this.currentImage.dataset.translateX = 0, this.currentImage.dataset.translateY = 0, this.zoomPanElement(0, 0, 1), t4.addEventListener("error", function(t5) {
              r.relatedElements[r.currentImageIndex].dispatchEvent(new Event("error." + r.eventNamespace)), r.isAnimating = false, r.isOpen = true, r.domNodes.spinner.style.display = "none";
              var e4 = a === 1 || a === -1;
              if (r.initialImageIndex === r.currentImageIndex && e4)
                return r.close();
              r.options.alertError && alert(r.options.alertErrorMessage), r.loadImage(e4 ? a : 1);
            }), t4.addEventListener("load", function(t5) {
              a !== void 0 && (r.relatedElements[r.currentImageIndex].dispatchEvent(new Event("changed." + r.eventNamespace)), r.relatedElements[r.currentImageIndex].dispatchEvent(new Event((a === 1 ? "nextDone" : "prevDone") + "." + r.eventNamespace))), r.options.history && r.updateURL(), r.loadedImages.indexOf(r.currentImage.getAttribute("src")) === -1 && r.loadedImages.push(r.currentImage.getAttribute("src"));
              var e4, o3, i2 = t5.target.width, n3 = t5.target.height;
              if (r.options.scaleImageToRatio || l2 < i2 || d < n3) {
                var s3 = l2 / d < i2 / n3 ? i2 / l2 : n3 / d;
                i2 /= s3, n3 /= s3;
              }
              r.domNodes.image.style.top = (window.innerHeight - n3) / 2 + "px", r.domNodes.image.style.left = (window.innerWidth - i2 - r.globalScrollbarWidth) / 2 + "px", r.domNodes.image.style.width = i2 + "px", r.domNodes.image.style.height = n3 + "px", r.domNodes.spinner.style.display = "none", r.options.focus && r.forceFocus(), r.fadeIn(r.currentImage, r.options.fadeSpeed, function() {
                r.options.focus && r.domNodes.wrapper.focus();
              }), r.isOpen = true, typeof r.options.captionSelector == "string" ? e4 = r.options.captionSelector === "self" ? r.relatedElements[r.currentImageIndex] : r.relatedElements[r.currentImageIndex].querySelector(r.options.captionSelector) : typeof r.options.captionSelector == "function" && (e4 = r.options.captionSelector(r.relatedElements[r.currentImageIndex])), r.options.captions && e4 && (o3 = r.options.captionType === "data" ? e4.dataset[r.options.captionsData] : r.options.captionType === "text" ? e4.innerHTML : e4.getAttribute(r.options.captionsData)), r.options.loop || (r.currentImageIndex === 0 && r.hide(r.domNodes.navigation.querySelector(".sl-prev")), r.currentImageIndex >= r.relatedElements.length - 1 && r.hide(r.domNodes.navigation.querySelector(".sl-next")), 0 < r.currentImageIndex && r.show(r.domNodes.navigation.querySelector(".sl-prev")), r.currentImageIndex < r.relatedElements.length - 1 && r.show(r.domNodes.navigation.querySelector(".sl-next"))), r.relatedElements.length === 1 ? r.hide(r.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")) : r.show(r.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")), a === 1 || a === -1 ? (r.options.animationSlide && (r.slide(0, 100 * a + "px"), setTimeout(function() {
                r.slide(r.options.animationSpeed / 1e3, "0px");
              }, 50)), r.fadeIn(r.domNodes.image, r.options.fadeSpeed, function() {
                r.isAnimating = false, r.setCaption(o3, i2);
              })) : (r.isAnimating = false, r.setCaption(o3, i2)), r.options.additionalHtml && !r.domNodes.additionalHtml && (r.domNodes.additionalHtml = document.createElement("div"), r.domNodes.additionalHtml.classList.add("sl-additional-html"), r.domNodes.additionalHtml.innerHTML = r.options.additionalHtml, r.domNodes.image.appendChild(r.domNodes.additionalHtml));
            });
          } }, { key: "zoomPanElement", value: function(t4, e4, o3) {
            this.currentImage.style[this.transitionPrefix + "transform"] = "translate(" + t4 + "," + e4 + ") scale(" + o3 + ")";
          } }, { key: "minMax", value: function(t4, e4, o3) {
            return t4 < e4 ? e4 : o3 < t4 ? o3 : t4;
          } }, { key: "setZoomData", value: function(t4, e4, o3) {
            this.currentImage.dataset.scale = t4, this.currentImage.dataset.translateX = e4, this.currentImage.dataset.translateY = o3;
          } }, { key: "hashchangeHandler", value: function() {
            this.isOpen && this.hash === this.initialLocationHash && (this.hashReseted = true, this.close());
          } }, { key: "addEvents", value: function() {
            var o3 = this;
            if (this.addEventListener(window, "resize." + this.eventNamespace, function(t4) {
              o3.isOpen && o3.adjustImage();
            }), this.addEventListener(this.domNodes.closeButton, ["click." + this.eventNamespace, "touchstart." + this.eventNamespace], this.close.bind(this)), this.options.history && setTimeout(function() {
              o3.addEventListener(window, "hashchange." + o3.eventNamespace, function(t4) {
                o3.isOpen && o3.hashchangeHandler();
              });
            }, 40), this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace, function(t4) {
              if (!t4.currentTarget.tagName.match(/button/i))
                return true;
              t4.preventDefault(), o3.controlCoordinates.swipeDiff = 0, o3.loadImage(t4.currentTarget.classList.contains("sl-next") ? 1 : -1);
            }), this.options.scrollZoom) {
              var i2 = 1;
              this.addEventListener(this.domNodes.image, ["mousewheel", "DOMMouseScroll"], function(t4) {
                if (o3.controlCoordinates.mousedown || o3.isAnimating || o3.isClosing || !o3.isOpen)
                  return true;
                o3.controlCoordinates.containerHeight == 0 && (o3.controlCoordinates.containerHeight = o3.getDimensions(o3.domNodes.image).height, o3.controlCoordinates.containerWidth = o3.getDimensions(o3.domNodes.image).width, o3.controlCoordinates.imgHeight = o3.getDimensions(o3.currentImage).height, o3.controlCoordinates.imgWidth = o3.getDimensions(o3.currentImage).width, o3.controlCoordinates.containerOffsetX = o3.domNodes.image.offsetLeft, o3.controlCoordinates.containerOffsetY = o3.domNodes.image.offsetTop, o3.controlCoordinates.initialOffsetX = parseFloat(o3.currentImage.dataset.translateX), o3.controlCoordinates.initialOffsetY = parseFloat(o3.currentImage.dataset.translateY)), t4.preventDefault();
                var e4 = t4.delta || t4.wheelDelta;
                e4 === void 0 && (e4 = t4.detail), e4 = Math.max(-1, Math.min(1, e4)), i2 += e4 * o3.options.scrollZoomFactor * i2, i2 = Math.max(1, Math.min(o3.options.maxZoom, i2)), o3.controlCoordinates.targetScale = i2, o3.controlCoordinates.pinchOffsetX = t4.pageX, o3.controlCoordinates.pinchOffsetY = t4.pageY, o3.controlCoordinates.limitOffsetX = (o3.controlCoordinates.imgWidth * o3.controlCoordinates.targetScale - o3.controlCoordinates.containerWidth) / 2, o3.controlCoordinates.limitOffsetY = (o3.controlCoordinates.imgHeight * o3.controlCoordinates.targetScale - o3.controlCoordinates.containerHeight) / 2, o3.controlCoordinates.scaleDifference = o3.controlCoordinates.targetScale - o3.controlCoordinates.initialScale, o3.controlCoordinates.targetOffsetX = o3.controlCoordinates.imgWidth * o3.controlCoordinates.targetScale <= o3.controlCoordinates.containerWidth ? 0 : o3.minMax(o3.controlCoordinates.initialOffsetX - (o3.controlCoordinates.pinchOffsetX - o3.controlCoordinates.containerOffsetX - o3.controlCoordinates.containerWidth / 2 - o3.controlCoordinates.initialOffsetX) / (o3.controlCoordinates.targetScale - o3.controlCoordinates.scaleDifference) * o3.controlCoordinates.scaleDifference, -1 * o3.controlCoordinates.limitOffsetX, o3.controlCoordinates.limitOffsetX), o3.controlCoordinates.targetOffsetY = o3.controlCoordinates.imgHeight * o3.controlCoordinates.targetScale <= o3.controlCoordinates.containerHeight ? 0 : o3.minMax(o3.controlCoordinates.initialOffsetY - (o3.controlCoordinates.pinchOffsetY - o3.controlCoordinates.containerOffsetY - o3.controlCoordinates.containerHeight / 2 - o3.controlCoordinates.initialOffsetY) / (o3.controlCoordinates.targetScale - o3.controlCoordinates.scaleDifference) * o3.controlCoordinates.scaleDifference, -1 * o3.controlCoordinates.limitOffsetY, o3.controlCoordinates.limitOffsetY), o3.zoomPanElement(o3.controlCoordinates.targetOffsetX + "px", o3.controlCoordinates.targetOffsetY + "px", o3.controlCoordinates.targetScale), 1 < o3.controlCoordinates.targetScale ? (o3.controlCoordinates.zoomed = true, o3.domNodes.caption.style.opacity || o3.domNodes.caption.style.display === "none" || o3.fadeOut(o3.domNodes.caption, o3.options.fadeSpeed)) : (o3.controlCoordinates.initialScale === 1 && (o3.controlCoordinates.zoomed = false, o3.domNodes.caption.style.display === "none" && o3.fadeIn(o3.domNodes.caption, o3.options.fadeSpeed)), o3.controlCoordinates.initialPinchDistance = null, o3.controlCoordinates.capture = false), o3.controlCoordinates.initialPinchDistance = o3.controlCoordinates.targetPinchDistance, o3.controlCoordinates.initialScale = o3.controlCoordinates.targetScale, o3.controlCoordinates.initialOffsetX = o3.controlCoordinates.targetOffsetX, o3.controlCoordinates.initialOffsetY = o3.controlCoordinates.targetOffsetY, o3.setZoomData(o3.controlCoordinates.targetScale, o3.controlCoordinates.targetOffsetX, o3.controlCoordinates.targetOffsetY), o3.zoomPanElement(o3.controlCoordinates.targetOffsetX + "px", o3.controlCoordinates.targetOffsetY + "px", o3.controlCoordinates.targetScale);
              });
            }
            this.addEventListener(this.domNodes.image, ["touchstart." + this.eventNamespace, "mousedown." + this.eventNamespace], function(t4) {
              if (t4.target.tagName === "A" && t4.type === "touchstart")
                return true;
              if (t4.type === "mousedown")
                t4.preventDefault(), o3.controlCoordinates.initialPointerOffsetX = t4.clientX, o3.controlCoordinates.initialPointerOffsetY = t4.clientY, o3.controlCoordinates.containerHeight = o3.getDimensions(o3.domNodes.image).height, o3.controlCoordinates.containerWidth = o3.getDimensions(o3.domNodes.image).width, o3.controlCoordinates.imgHeight = o3.getDimensions(o3.currentImage).height, o3.controlCoordinates.imgWidth = o3.getDimensions(o3.currentImage).width, o3.controlCoordinates.containerOffsetX = o3.domNodes.image.offsetLeft, o3.controlCoordinates.containerOffsetY = o3.domNodes.image.offsetTop, o3.controlCoordinates.initialOffsetX = parseFloat(o3.currentImage.dataset.translateX), o3.controlCoordinates.initialOffsetY = parseFloat(o3.currentImage.dataset.translateY), o3.controlCoordinates.capture = true;
              else {
                if (o3.controlCoordinates.touchCount = t4.touches.length, o3.controlCoordinates.initialPointerOffsetX = t4.touches[0].clientX, o3.controlCoordinates.initialPointerOffsetY = t4.touches[0].clientY, o3.controlCoordinates.containerHeight = o3.getDimensions(o3.domNodes.image).height, o3.controlCoordinates.containerWidth = o3.getDimensions(o3.domNodes.image).width, o3.controlCoordinates.imgHeight = o3.getDimensions(o3.currentImage).height, o3.controlCoordinates.imgWidth = o3.getDimensions(o3.currentImage).width, o3.controlCoordinates.containerOffsetX = o3.domNodes.image.offsetLeft, o3.controlCoordinates.containerOffsetY = o3.domNodes.image.offsetTop, o3.controlCoordinates.touchCount === 1) {
                  if (o3.controlCoordinates.doubleTapped)
                    return o3.currentImage.classList.add("sl-transition"), o3.controlCoordinates.zoomed ? (o3.controlCoordinates.initialScale = 1, o3.setZoomData(o3.controlCoordinates.initialScale, 0, 0), o3.zoomPanElement("0px", "0px", o3.controlCoordinates.initialScale), o3.controlCoordinates.zoomed = false) : (o3.controlCoordinates.initialScale = o3.options.doubleTapZoom, o3.setZoomData(o3.controlCoordinates.initialScale, 0, 0), o3.zoomPanElement("0px", "0px", o3.controlCoordinates.initialScale), o3.domNodes.caption.style.opacity || o3.domNodes.caption.style.display === "none" || o3.fadeOut(o3.domNodes.caption, o3.options.fadeSpeed), o3.controlCoordinates.zoomed = true), setTimeout(function() {
                      o3.currentImage && o3.currentImage.classList.remove("sl-transition");
                    }, 200), false;
                  o3.controlCoordinates.doubleTapped = true, setTimeout(function() {
                    o3.controlCoordinates.doubleTapped = false;
                  }, 300), o3.controlCoordinates.initialOffsetX = parseFloat(o3.currentImage.dataset.translateX), o3.controlCoordinates.initialOffsetY = parseFloat(o3.currentImage.dataset.translateY);
                } else
                  o3.controlCoordinates.touchCount === 2 && (o3.controlCoordinates.initialPointerOffsetX2 = t4.touches[1].clientX, o3.controlCoordinates.initialPointerOffsetY2 = t4.touches[1].clientY, o3.controlCoordinates.initialOffsetX = parseFloat(o3.currentImage.dataset.translateX), o3.controlCoordinates.initialOffsetY = parseFloat(o3.currentImage.dataset.translateY), o3.controlCoordinates.pinchOffsetX = (o3.controlCoordinates.initialPointerOffsetX + o3.controlCoordinates.initialPointerOffsetX2) / 2, o3.controlCoordinates.pinchOffsetY = (o3.controlCoordinates.initialPointerOffsetY + o3.controlCoordinates.initialPointerOffsetY2) / 2, o3.controlCoordinates.initialPinchDistance = Math.sqrt((o3.controlCoordinates.initialPointerOffsetX - o3.controlCoordinates.initialPointerOffsetX2) * (o3.controlCoordinates.initialPointerOffsetX - o3.controlCoordinates.initialPointerOffsetX2) + (o3.controlCoordinates.initialPointerOffsetY - o3.controlCoordinates.initialPointerOffsetY2) * (o3.controlCoordinates.initialPointerOffsetY - o3.controlCoordinates.initialPointerOffsetY2)));
                o3.controlCoordinates.capture = true;
              }
              return !!o3.controlCoordinates.mousedown || (o3.transitionCapable && (o3.controlCoordinates.imageLeft = parseInt(o3.domNodes.image.style.left, 10)), o3.controlCoordinates.mousedown = true, o3.controlCoordinates.swipeDiff = 0, o3.controlCoordinates.swipeYDiff = 0, o3.controlCoordinates.swipeStart = t4.pageX || t4.touches[0].pageX, o3.controlCoordinates.swipeYStart = t4.pageY || t4.touches[0].pageY, false);
            }), this.addEventListener(this.domNodes.image, ["touchmove." + this.eventNamespace, "mousemove." + this.eventNamespace, "MSPointerMove"], function(t4) {
              if (!o3.controlCoordinates.mousedown)
                return true;
              if (t4.type === "touchmove") {
                if (o3.controlCoordinates.capture === false)
                  return false;
                o3.controlCoordinates.pointerOffsetX = t4.touches[0].clientX, o3.controlCoordinates.pointerOffsetY = t4.touches[0].clientY, o3.controlCoordinates.touchCount = t4.touches.length, o3.controlCoordinates.touchmoveCount++, 1 < o3.controlCoordinates.touchCount ? (o3.controlCoordinates.pointerOffsetX2 = t4.touches[1].clientX, o3.controlCoordinates.pointerOffsetY2 = t4.touches[1].clientY, o3.controlCoordinates.targetPinchDistance = Math.sqrt((o3.controlCoordinates.pointerOffsetX - o3.controlCoordinates.pointerOffsetX2) * (o3.controlCoordinates.pointerOffsetX - o3.controlCoordinates.pointerOffsetX2) + (o3.controlCoordinates.pointerOffsetY - o3.controlCoordinates.pointerOffsetY2) * (o3.controlCoordinates.pointerOffsetY - o3.controlCoordinates.pointerOffsetY2)), o3.controlCoordinates.initialPinchDistance === null && (o3.controlCoordinates.initialPinchDistance = o3.controlCoordinates.targetPinchDistance), 1 <= Math.abs(o3.controlCoordinates.initialPinchDistance - o3.controlCoordinates.targetPinchDistance) && (o3.controlCoordinates.targetScale = o3.minMax(o3.controlCoordinates.targetPinchDistance / o3.controlCoordinates.initialPinchDistance * o3.controlCoordinates.initialScale, 1, o3.options.maxZoom), o3.controlCoordinates.limitOffsetX = (o3.controlCoordinates.imgWidth * o3.controlCoordinates.targetScale - o3.controlCoordinates.containerWidth) / 2, o3.controlCoordinates.limitOffsetY = (o3.controlCoordinates.imgHeight * o3.controlCoordinates.targetScale - o3.controlCoordinates.containerHeight) / 2, o3.controlCoordinates.scaleDifference = o3.controlCoordinates.targetScale - o3.controlCoordinates.initialScale, o3.controlCoordinates.targetOffsetX = o3.controlCoordinates.imgWidth * o3.controlCoordinates.targetScale <= o3.controlCoordinates.containerWidth ? 0 : o3.minMax(o3.controlCoordinates.initialOffsetX - (o3.controlCoordinates.pinchOffsetX - o3.controlCoordinates.containerOffsetX - o3.controlCoordinates.containerWidth / 2 - o3.controlCoordinates.initialOffsetX) / (o3.controlCoordinates.targetScale - o3.controlCoordinates.scaleDifference) * o3.controlCoordinates.scaleDifference, -1 * o3.controlCoordinates.limitOffsetX, o3.controlCoordinates.limitOffsetX), o3.controlCoordinates.targetOffsetY = o3.controlCoordinates.imgHeight * o3.controlCoordinates.targetScale <= o3.controlCoordinates.containerHeight ? 0 : o3.minMax(o3.controlCoordinates.initialOffsetY - (o3.controlCoordinates.pinchOffsetY - o3.controlCoordinates.containerOffsetY - o3.controlCoordinates.containerHeight / 2 - o3.controlCoordinates.initialOffsetY) / (o3.controlCoordinates.targetScale - o3.controlCoordinates.scaleDifference) * o3.controlCoordinates.scaleDifference, -1 * o3.controlCoordinates.limitOffsetY, o3.controlCoordinates.limitOffsetY), o3.zoomPanElement(o3.controlCoordinates.targetOffsetX + "px", o3.controlCoordinates.targetOffsetY + "px", o3.controlCoordinates.targetScale), 1 < o3.controlCoordinates.targetScale && (o3.controlCoordinates.zoomed = true, o3.domNodes.caption.style.opacity || o3.domNodes.caption.style.display === "none" || o3.fadeOut(o3.domNodes.caption, o3.options.fadeSpeed)), o3.controlCoordinates.initialPinchDistance = o3.controlCoordinates.targetPinchDistance, o3.controlCoordinates.initialScale = o3.controlCoordinates.targetScale, o3.controlCoordinates.initialOffsetX = o3.controlCoordinates.targetOffsetX, o3.controlCoordinates.initialOffsetY = o3.controlCoordinates.targetOffsetY)) : (o3.controlCoordinates.targetScale = o3.controlCoordinates.initialScale, o3.controlCoordinates.limitOffsetX = (o3.controlCoordinates.imgWidth * o3.controlCoordinates.targetScale - o3.controlCoordinates.containerWidth) / 2, o3.controlCoordinates.limitOffsetY = (o3.controlCoordinates.imgHeight * o3.controlCoordinates.targetScale - o3.controlCoordinates.containerHeight) / 2, o3.controlCoordinates.targetOffsetX = o3.controlCoordinates.imgWidth * o3.controlCoordinates.targetScale <= o3.controlCoordinates.containerWidth ? 0 : o3.minMax(o3.controlCoordinates.pointerOffsetX - (o3.controlCoordinates.initialPointerOffsetX - o3.controlCoordinates.initialOffsetX), -1 * o3.controlCoordinates.limitOffsetX, o3.controlCoordinates.limitOffsetX), o3.controlCoordinates.targetOffsetY = o3.controlCoordinates.imgHeight * o3.controlCoordinates.targetScale <= o3.controlCoordinates.containerHeight ? 0 : o3.minMax(o3.controlCoordinates.pointerOffsetY - (o3.controlCoordinates.initialPointerOffsetY - o3.controlCoordinates.initialOffsetY), -1 * o3.controlCoordinates.limitOffsetY, o3.controlCoordinates.limitOffsetY), Math.abs(o3.controlCoordinates.targetOffsetX) === Math.abs(o3.controlCoordinates.limitOffsetX) && (o3.controlCoordinates.initialOffsetX = o3.controlCoordinates.targetOffsetX, o3.controlCoordinates.initialPointerOffsetX = o3.controlCoordinates.pointerOffsetX), Math.abs(o3.controlCoordinates.targetOffsetY) === Math.abs(o3.controlCoordinates.limitOffsetY) && (o3.controlCoordinates.initialOffsetY = o3.controlCoordinates.targetOffsetY, o3.controlCoordinates.initialPointerOffsetY = o3.controlCoordinates.pointerOffsetY), o3.setZoomData(o3.controlCoordinates.initialScale, o3.controlCoordinates.targetOffsetX, o3.controlCoordinates.targetOffsetY), o3.zoomPanElement(o3.controlCoordinates.targetOffsetX + "px", o3.controlCoordinates.targetOffsetY + "px", o3.controlCoordinates.targetScale));
              }
              if (t4.type === "mousemove" && o3.controlCoordinates.mousedown) {
                if (t4.type == "touchmove")
                  return true;
                if (t4.preventDefault(), o3.controlCoordinates.capture === false)
                  return false;
                o3.controlCoordinates.pointerOffsetX = t4.clientX, o3.controlCoordinates.pointerOffsetY = t4.clientY, o3.controlCoordinates.targetScale = o3.controlCoordinates.initialScale, o3.controlCoordinates.limitOffsetX = (o3.controlCoordinates.imgWidth * o3.controlCoordinates.targetScale - o3.controlCoordinates.containerWidth) / 2, o3.controlCoordinates.limitOffsetY = (o3.controlCoordinates.imgHeight * o3.controlCoordinates.targetScale - o3.controlCoordinates.containerHeight) / 2, o3.controlCoordinates.targetOffsetX = o3.controlCoordinates.imgWidth * o3.controlCoordinates.targetScale <= o3.controlCoordinates.containerWidth ? 0 : o3.minMax(o3.controlCoordinates.pointerOffsetX - (o3.controlCoordinates.initialPointerOffsetX - o3.controlCoordinates.initialOffsetX), -1 * o3.controlCoordinates.limitOffsetX, o3.controlCoordinates.limitOffsetX), o3.controlCoordinates.targetOffsetY = o3.controlCoordinates.imgHeight * o3.controlCoordinates.targetScale <= o3.controlCoordinates.containerHeight ? 0 : o3.minMax(o3.controlCoordinates.pointerOffsetY - (o3.controlCoordinates.initialPointerOffsetY - o3.controlCoordinates.initialOffsetY), -1 * o3.controlCoordinates.limitOffsetY, o3.controlCoordinates.limitOffsetY), Math.abs(o3.controlCoordinates.targetOffsetX) === Math.abs(o3.controlCoordinates.limitOffsetX) && (o3.controlCoordinates.initialOffsetX = o3.controlCoordinates.targetOffsetX, o3.controlCoordinates.initialPointerOffsetX = o3.controlCoordinates.pointerOffsetX), Math.abs(o3.controlCoordinates.targetOffsetY) === Math.abs(o3.controlCoordinates.limitOffsetY) && (o3.controlCoordinates.initialOffsetY = o3.controlCoordinates.targetOffsetY, o3.controlCoordinates.initialPointerOffsetY = o3.controlCoordinates.pointerOffsetY), o3.setZoomData(o3.controlCoordinates.initialScale, o3.controlCoordinates.targetOffsetX, o3.controlCoordinates.targetOffsetY), o3.zoomPanElement(o3.controlCoordinates.targetOffsetX + "px", o3.controlCoordinates.targetOffsetY + "px", o3.controlCoordinates.targetScale);
              }
              o3.controlCoordinates.zoomed || (o3.controlCoordinates.swipeEnd = t4.pageX || t4.touches[0].pageX, o3.controlCoordinates.swipeYEnd = t4.pageY || t4.touches[0].pageY, o3.controlCoordinates.swipeDiff = o3.controlCoordinates.swipeStart - o3.controlCoordinates.swipeEnd, o3.controlCoordinates.swipeYDiff = o3.controlCoordinates.swipeYStart - o3.controlCoordinates.swipeYEnd, o3.options.animationSlide && o3.slide(0, -o3.controlCoordinates.swipeDiff + "px"));
            }), this.addEventListener(this.domNodes.image, ["touchend." + this.eventNamespace, "mouseup." + this.eventNamespace, "touchcancel." + this.eventNamespace, "mouseleave." + this.eventNamespace, "pointerup", "pointercancel", "MSPointerUp", "MSPointerCancel"], function(t4) {
              if (o3.isTouchDevice && t4.type === "touchend" && (o3.controlCoordinates.touchCount = t4.touches.length, o3.controlCoordinates.touchCount === 0 ? (o3.currentImage && o3.setZoomData(o3.controlCoordinates.initialScale, o3.controlCoordinates.targetOffsetX, o3.controlCoordinates.targetOffsetY), o3.controlCoordinates.initialScale === 1 && (o3.controlCoordinates.zoomed = false, o3.domNodes.caption.style.display === "none" && o3.fadeIn(o3.domNodes.caption, o3.options.fadeSpeed)), o3.controlCoordinates.initialPinchDistance = null, o3.controlCoordinates.capture = false) : o3.controlCoordinates.touchCount === 1 ? (o3.controlCoordinates.initialPointerOffsetX = t4.touches[0].clientX, o3.controlCoordinates.initialPointerOffsetY = t4.touches[0].clientY) : 1 < o3.controlCoordinates.touchCount && (o3.controlCoordinates.initialPinchDistance = null)), o3.controlCoordinates.mousedown) {
                var e4 = !(o3.controlCoordinates.mousedown = false);
                o3.options.loop || (o3.currentImageIndex === 0 && o3.controlCoordinates.swipeDiff < 0 && (e4 = false), o3.currentImageIndex >= o3.relatedElements.length - 1 && 0 < o3.controlCoordinates.swipeDiff && (e4 = false)), Math.abs(o3.controlCoordinates.swipeDiff) > o3.options.swipeTolerance && e4 ? o3.loadImage(0 < o3.controlCoordinates.swipeDiff ? 1 : -1) : o3.options.animationSlide && o3.slide(o3.options.animationSpeed / 1e3, "0px"), o3.options.swipeClose && 50 < Math.abs(o3.controlCoordinates.swipeYDiff) && Math.abs(o3.controlCoordinates.swipeDiff) < o3.options.swipeTolerance && o3.close();
              }
            }), this.addEventListener(this.domNodes.image, ["dblclick"], function(t4) {
              if (!o3.isTouchDevice)
                return o3.controlCoordinates.initialPointerOffsetX = t4.clientX, o3.controlCoordinates.initialPointerOffsetY = t4.clientY, o3.controlCoordinates.containerHeight = o3.getDimensions(o3.domNodes.image).height, o3.controlCoordinates.containerWidth = o3.getDimensions(o3.domNodes.image).width, o3.controlCoordinates.imgHeight = o3.getDimensions(o3.currentImage).height, o3.controlCoordinates.imgWidth = o3.getDimensions(o3.currentImage).width, o3.controlCoordinates.containerOffsetX = o3.domNodes.image.offsetLeft, o3.controlCoordinates.containerOffsetY = o3.domNodes.image.offsetTop, o3.currentImage.classList.add("sl-transition"), o3.controlCoordinates.zoomed ? (o3.controlCoordinates.initialScale = 1, o3.setZoomData(o3.controlCoordinates.initialScale, 0, 0), o3.zoomPanElement("0px", "0px", o3.controlCoordinates.initialScale), o3.controlCoordinates.zoomed = false, o3.domNodes.caption.style.display === "none" && o3.fadeIn(o3.domNodes.caption, o3.options.fadeSpeed)) : (o3.controlCoordinates.initialScale = o3.options.doubleTapZoom, o3.setZoomData(o3.controlCoordinates.initialScale, 0, 0), o3.zoomPanElement("0px", "0px", o3.controlCoordinates.initialScale), o3.domNodes.caption.style.opacity || o3.domNodes.caption.style.display === "none" || o3.fadeOut(o3.domNodes.caption, o3.options.fadeSpeed), o3.controlCoordinates.zoomed = true), setTimeout(function() {
                  o3.currentImage && (o3.currentImage.classList.remove("sl-transition"), o3.currentImage.style[o3.transitionPrefix + "transform-origin"] = null);
                }, 200), !(o3.controlCoordinates.capture = true);
            });
          } }, { key: "getDimensions", value: function(t4) {
            var e4 = window.getComputedStyle(t4), o3 = t4.offsetHeight, i2 = t4.offsetWidth, n3 = parseFloat(e4.borderTopWidth);
            return { height: o3 - parseFloat(e4.borderBottomWidth) - n3 - parseFloat(e4.paddingTop) - parseFloat(e4.paddingBottom), width: i2 - parseFloat(e4.borderLeftWidth) - parseFloat(e4.borderRightWidth) - parseFloat(e4.paddingLeft) - parseFloat(e4.paddingRight) };
          } }, { key: "updateHash", value: function() {
            var t4 = "pid=" + (this.currentImageIndex + 1), e4 = window.location.href.split("#")[0] + "#" + t4;
            this.hashReseted = false, this.pushStateSupport ? window.history[this.historyHasChanges ? "replaceState" : "pushState"]("", document.title, e4) : this.historyHasChanges ? window.location.replace(e4) : window.location.hash = t4, this.historyHasChanges || (this.urlChangedOnce = true), this.historyHasChanges = true;
          } }, { key: "resetHash", value: function() {
            this.hashReseted = true, this.urlChangedOnce ? history.back() : this.pushStateSupport ? history.pushState("", document.title, window.location.pathname + window.location.search) : window.location.hash = "", clearTimeout(this.historyUpdateTimeout);
          } }, { key: "updateURL", value: function() {
            clearTimeout(this.historyUpdateTimeout), this.historyHasChanges ? this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800) : this.updateHash();
          } }, { key: "setCaption", value: function(t4, e4) {
            var o3 = this;
            this.options.captions && t4 && t4 !== "" && t4 !== void 0 && (this.hide(this.domNodes.caption), this.domNodes.caption.style.width = e4 + "px", this.domNodes.caption.innerHTML = t4, this.domNodes.image.appendChild(this.domNodes.caption), setTimeout(function() {
              o3.fadeIn(o3.domNodes.caption, o3.options.fadeSpeed);
            }, this.options.captionDelay));
          } }, { key: "slide", value: function(t4, e4) {
            if (!this.transitionCapable)
              return this.domNodes.image.style.left = e4;
            this.domNodes.image.style[this.transitionPrefix + "transform"] = "translateX(" + e4 + ")", this.domNodes.image.style[this.transitionPrefix + "transition"] = this.transitionPrefix + "transform " + t4 + "s linear";
          } }, { key: "getRelated", value: function(e4) {
            return e4 && e4 !== false && e4 !== "nofollow" ? Array.from(this.elements).filter(function(t4) {
              return t4.getAttribute("rel") === e4;
            }) : this.elements;
          } }, { key: "openImage", value: function(t4) {
            var e4 = this;
            t4.dispatchEvent(new Event("show." + this.eventNamespace)), this.options.disableScroll && (this.globalScrollbarWidth = this.toggleScrollbar("hide")), this.options.htmlClass && this.options.htmlClass !== "" && document.querySelector("html").classList.add(this.options.htmlClass), document.body.appendChild(this.domNodes.wrapper), this.domNodes.wrapper.appendChild(this.domNodes.image), this.options.overlay && document.body.appendChild(this.domNodes.overlay), this.relatedElements = this.getRelated(t4.rel), this.options.showCounter && (this.relatedElements.length == 1 && this.domNodes.wrapper.contains(this.domNodes.counter) ? this.domNodes.wrapper.removeChild(this.domNodes.counter) : 1 < this.relatedElements.length && !this.domNodes.wrapper.contains(this.domNodes.counter) && this.domNodes.wrapper.appendChild(this.domNodes.counter)), this.isAnimating = true, this.currentImageIndex = this.relatedElements.indexOf(t4);
            var o3 = t4.getAttribute(this.options.sourceAttr);
            this.currentImage = document.createElement("img"), this.currentImage.style.display = "none", this.currentImage.setAttribute("src", o3), this.currentImage.dataset.scale = 1, this.currentImage.dataset.translateX = 0, this.currentImage.dataset.translateY = 0, this.loadedImages.indexOf(o3) === -1 && this.loadedImages.push(o3), this.domNodes.image.innerHTML = "", this.domNodes.image.setAttribute("style", ""), this.domNodes.image.appendChild(this.currentImage), this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed), this.fadeIn([this.domNodes.counter, this.domNodes.navigation, this.domNodes.closeButton], this.options.fadeSpeed), this.show(this.domNodes.spinner), this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1, this.domNodes.counter.querySelector(".sl-total").innerHTML = this.relatedElements.length, this.adjustImage(), this.options.preloading && this.preload(), setTimeout(function() {
              t4.dispatchEvent(new Event("shown." + e4.eventNamespace));
            }, this.options.animationSpeed);
          } }, { key: "forceFocus", value: function() {
            var e4 = this;
            this.removeEventListener(document, "focusin." + this.eventNamespace), this.addEventListener(document, "focusin." + this.eventNamespace, function(t4) {
              document === t4.target || e4.domNodes.wrapper === t4.target || e4.domNodes.wrapper.contains(t4.target) || e4.domNodes.wrapper.focus();
            });
          } }, { key: "addEventListener", value: function(t4, e4, o3, i2) {
            t4 = this.wrap(t4), e4 = this.wrap(e4);
            var n3, s3 = f(t4);
            try {
              for (s3.s(); !(n3 = s3.n()).done; ) {
                var a = n3.value;
                a.namespaces || (a.namespaces = {});
                var r, l2 = f(e4);
                try {
                  for (l2.s(); !(r = l2.n()).done; ) {
                    var d = r.value, c = i2 || false;
                    0 <= ["touchstart", "touchmove"].indexOf(d.split(".")[0]) && this.isPassiveEventsSupported && (h(c) === "object" ? c.passive = true : c = { passive: true }), a.namespaces[d] = o3, a.addEventListener(d.split(".")[0], o3, c);
                  }
                } catch (t5) {
                  l2.e(t5);
                } finally {
                  l2.f();
                }
              }
            } catch (t5) {
              s3.e(t5);
            } finally {
              s3.f();
            }
          } }, { key: "removeEventListener", value: function(t4, e4) {
            t4 = this.wrap(t4), e4 = this.wrap(e4);
            var o3, i2 = f(t4);
            try {
              for (i2.s(); !(o3 = i2.n()).done; ) {
                var n3, s3 = o3.value, a = f(e4);
                try {
                  for (a.s(); !(n3 = a.n()).done; ) {
                    var r = n3.value;
                    s3.namespaces && s3.namespaces[r] && (s3.removeEventListener(r.split(".")[0], s3.namespaces[r]), delete s3.namespaces[r]);
                  }
                } catch (t5) {
                  a.e(t5);
                } finally {
                  a.f();
                }
              }
            } catch (t5) {
              i2.e(t5);
            } finally {
              i2.f();
            }
          } }, { key: "fadeOut", value: function(r, t4, l2) {
            var e4, d = this, o3 = f(r = this.wrap(r));
            try {
              for (o3.s(); !(e4 = o3.n()).done; ) {
                e4.value.style.opacity = 1;
              }
            } catch (t5) {
              o3.e(t5);
            } finally {
              o3.f();
            }
            this.isFadeIn = false;
            var c = 16.66666 / (t4 || this.options.fadeSpeed);
            !function t5() {
              var e5 = parseFloat(r[0].style.opacity);
              if ((e5 -= c) < 0) {
                var o4, i2 = f(r);
                try {
                  for (i2.s(); !(o4 = i2.n()).done; ) {
                    var n3 = o4.value;
                    n3.style.display = "none", n3.style.opacity = "";
                  }
                } catch (t6) {
                  i2.e(t6);
                } finally {
                  i2.f();
                }
                l2 && l2.call(d, r);
              } else {
                var s3, a = f(r);
                try {
                  for (a.s(); !(s3 = a.n()).done; ) {
                    s3.value.style.opacity = e5;
                  }
                } catch (t6) {
                  a.e(t6);
                } finally {
                  a.f();
                }
                requestAnimationFrame(t5);
              }
            }();
          } }, { key: "fadeIn", value: function(a, t4, r, e4) {
            var o3, l2 = this, i2 = f(a = this.wrap(a));
            try {
              for (i2.s(); !(o3 = i2.n()).done; ) {
                var n3 = o3.value;
                n3.style.opacity = 0, n3.style.display = e4 || "block";
              }
            } catch (t5) {
              i2.e(t5);
            } finally {
              i2.f();
            }
            this.isFadeIn = true;
            var d = parseFloat(a[0].dataset.opacityTarget || 1), c = 16.66666 * d / (t4 || this.options.fadeSpeed);
            !function t5() {
              var e5 = parseFloat(a[0].style.opacity);
              if ((e5 += c) > d) {
                var o4, i3 = f(a);
                try {
                  for (i3.s(); !(o4 = i3.n()).done; ) {
                    o4.value.style.opacity = "";
                  }
                } catch (t6) {
                  i3.e(t6);
                } finally {
                  i3.f();
                }
                r && r.call(l2, a);
              } else {
                var n4, s3 = f(a);
                try {
                  for (s3.s(); !(n4 = s3.n()).done; ) {
                    n4.value.style.opacity = e5;
                  }
                } catch (t6) {
                  s3.e(t6);
                } finally {
                  s3.f();
                }
                if (!l2.isFadeIn)
                  return;
                requestAnimationFrame(t5);
              }
            }();
          } }, { key: "hide", value: function(t4) {
            var e4, o3 = f(t4 = this.wrap(t4));
            try {
              for (o3.s(); !(e4 = o3.n()).done; ) {
                var i2 = e4.value;
                i2.dataset.initialDisplay = i2.style.display, i2.style.display = "none";
              }
            } catch (t5) {
              o3.e(t5);
            } finally {
              o3.f();
            }
          } }, { key: "show", value: function(t4, e4) {
            var o3, i2 = f(t4 = this.wrap(t4));
            try {
              for (i2.s(); !(o3 = i2.n()).done; ) {
                var n3 = o3.value;
                n3.style.display = n3.dataset.initialDisplay || e4 || "block";
              }
            } catch (t5) {
              i2.e(t5);
            } finally {
              i2.f();
            }
          } }, { key: "wrap", value: function(t4) {
            return typeof t4[Symbol.iterator] == "function" && typeof t4 != "string" ? t4 : [t4];
          } }, { key: "on", value: function(t4, e4) {
            t4 = this.wrap(t4);
            var o3, i2 = f(this.elements);
            try {
              for (i2.s(); !(o3 = i2.n()).done; ) {
                var n3 = o3.value;
                n3.fullyNamespacedEvents || (n3.fullyNamespacedEvents = {});
                var s3, a = f(t4);
                try {
                  for (a.s(); !(s3 = a.n()).done; ) {
                    var r = s3.value;
                    n3.fullyNamespacedEvents[r] = e4, n3.addEventListener(r, e4);
                  }
                } catch (t5) {
                  a.e(t5);
                } finally {
                  a.f();
                }
              }
            } catch (t5) {
              i2.e(t5);
            } finally {
              i2.f();
            }
            return this;
          } }, { key: "off", value: function(t4) {
            t4 = this.wrap(t4);
            var e4, o3 = f(this.elements);
            try {
              for (o3.s(); !(e4 = o3.n()).done; ) {
                var i2, n3 = e4.value, s3 = f(t4);
                try {
                  for (s3.s(); !(i2 = s3.n()).done; ) {
                    var a = i2.value;
                    n3.fullyNamespacedEvents !== void 0 && a in n3.fullyNamespacedEvents && n3.removeEventListener(a, n3.fullyNamespacedEvents[a]);
                  }
                } catch (t5) {
                  s3.e(t5);
                } finally {
                  s3.f();
                }
              }
            } catch (t5) {
              o3.e(t5);
            } finally {
              o3.f();
            }
            return this;
          } }, { key: "open", value: function(t4) {
            t4 = t4 || this.elements[0], typeof jQuery != "undefined" && t4 instanceof jQuery && (t4 = t4.get(0)), this.initialImageIndex = this.elements.indexOf(t4), -1 < this.initialImageIndex && this.openImage(t4);
          } }, { key: "next", value: function() {
            this.loadImage(1);
          } }, { key: "prev", value: function() {
            this.loadImage(-1);
          } }, { key: "destroy", value: function() {
            this.off(["close." + this.eventNamespace, "closed." + this.eventNamespace, "nextImageLoaded." + this.eventNamespace, "prevImageLoaded." + this.eventNamespace, "change." + this.eventNamespace, "nextDone." + this.eventNamespace, "prevDone." + this.eventNamespace, "error." + this.eventNamespace, "changed." + this.eventNamespace, "next." + this.eventNamespace, "prev." + this.eventNamespace, "show." + this.eventNamespace, "shown." + this.eventNamespace]), this.removeEventListener(this.elements, "click." + this.eventNamespace), this.removeEventListener(document, "focusin." + this.eventNamespace), this.removeEventListener(document.body, "contextmenu." + this.eventNamespace), this.removeEventListener(document.body, "keyup." + this.eventNamespace), this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace), this.removeEventListener(this.domNodes.closeButton, "click." + this.eventNamespace), this.removeEventListener(window, "resize." + this.eventNamespace), this.removeEventListener(window, "hashchange." + this.eventNamespace), this.close(), this.isOpen && (document.body.removeChild(this.domNodes.wrapper), document.body.removeChild(this.domNodes.overlay)), this.elements = null;
          } }, { key: "refresh", value: function() {
            if (!this.initialSelector)
              throw "refreshing only works when you initialize using a selector!";
            var t4 = this.options, e4 = this.initialSelector;
            return this.destroy(), this.constructor(e4, t4), this;
          } }]) && i(t3.prototype, e3), o2 && i(t3, o2), n2;
        }(), e2 = t2;
        n.default = e2, o.SimpleLightbox = t2;
      }).call(this);
    }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
  }, {}] }, {}, [1]);

  // resources/js/app.js
  var import_swiper_bundle_min = __toModule(require_swiper_bundle_min());
  import_swiper_bundle_min.default.use([import_swiper_bundle_min.Navigation, import_swiper_bundle_min.Pagination, import_swiper_bundle_min.Autoplay]);
  window.addEventListener("load", function() {
    let lightbox = new SimpleLightbox("#gallery a");
    document.getElementById("primary-menu-toggle").addEventListener("click", function() {
      document.getElementById("main-menu").classList.toggle("max-h-0");
      document.getElementById("main-menu").classList.toggle("max-h-96");
    });
    let swiper = new import_swiper_bundle_min.default(".swiper", {
      loop: true,
      speed: 700,
      autoplay: {
        delay: 5e3
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  });
})();
