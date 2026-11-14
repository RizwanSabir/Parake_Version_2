// vendor/module-24788.js — webpack module 24788
// params: (e, t, n) = (module, exports, require)
"use strict";
n.r(t),
  n.d(t, {
    hideOthers: () => u,
    inertOthers: () => d,
    supportsInert: () => p,
    suppressOthers: () => f,
  });
var r = function (e) {
    return "undefined" == typeof document
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  o = new WeakMap(),
  i = new WeakMap(),
  a = {},
  s = 0,
  l = function (e) {
    return e && (e.host || l(e.parentNode));
  },
  c = function (e, t, n, r) {
    var c = (function (e, t) {
      return t
        .map(function (t) {
          if (e.contains(t)) return t;
          var n = l(t);
          return n && e.contains(n) ? n : null;
        })
        .filter(function (e) {
          return Boolean(e);
        });
    })(t, Array.isArray(e) ? e : [e]);
    a[n] || (a[n] = new WeakMap());
    var u = a[n],
      d = [],
      p = new Set(),
      f = new Set(c),
      h = function (e) {
        e && !p.has(e) && (p.add(e), h(e.parentNode));
      };
    c.forEach(h);
    var m = function (e) {
      e &&
        !f.has(e) &&
        Array.prototype.forEach.call(e.children, function (e) {
          if (p.has(e)) m(e);
          else
            try {
              var t = e.getAttribute(r),
                a = null !== t && "false" !== t,
                s = (o.get(e) || 0) + 1,
                l = (u.get(e) || 0) + 1;
              o.set(e, s),
                u.set(e, l),
                d.push(e),
                1 === s && a && i.set(e, !0),
                1 === l && e.setAttribute(n, "true"),
                a || e.setAttribute(r, "true");
            } catch (e) {}
        });
    };
    return (
      m(t),
      p.clear(),
      s++,
      function () {
        d.forEach(function (e) {
          var t = o.get(e) - 1,
            a = u.get(e) - 1;
          o.set(e, t),
            u.set(e, a),
            t || (i.has(e) || e.removeAttribute(r), i.delete(e)),
            a || e.removeAttribute(n);
        }),
          --s ||
            ((o = new WeakMap()),
            (o = new WeakMap()),
            (i = new WeakMap()),
            (a = {}));
      }
    );
  },
  u = function (e, t, n) {
    void 0 === n && (n = "data-aria-hidden");
    var o = Array.from(Array.isArray(e) ? e : [e]),
      i = t || r(e);
    return i
      ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live], script"))),
        c(o, i, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  d = function (e, t, n) {
    void 0 === n && (n = "data-inert-ed");
    var o = t || r(e);
    return o
      ? c(e, o, n, "inert")
      : function () {
          return null;
        };
  },
  p = function () {
    return (
      "undefined" != typeof HTMLElement &&
      HTMLElement.prototype.hasOwnProperty("inert")
    );
  },
  f = function (e, t, n) {
    return void 0 === n && (n = "data-suppressed"), (p() ? d : u)(e, t, n);
  };
