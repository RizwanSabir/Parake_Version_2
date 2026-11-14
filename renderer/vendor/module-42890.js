// vendor/module-42890.js — webpack module 42890
// params: (e, t, n) = (module, exports, require)
"use strict";
var r;
if ((n.r(t), n.d(t, { default: () => Cv }), "undefined" == typeof window)) {
  var o = { hostname: "" };
  r = {
    crypto: {
      randomUUID: function () {
        throw Error("unsupported");
      },
    },
    navigator: { userAgent: "", onLine: !0 },
    document: {
      createElement: function () {
        return {};
      },
      location: o,
      referrer: "",
    },
    screen: { width: 0, height: 0 },
    location: o,
    addEventListener: function () {},
    removeEventListener: function () {},
    dispatchEvent: function () {},
    CustomEvent: function () {},
  };
} else r = window;
var i = { DEBUG: !1, LIB_VERSION: "2.80.0" },
  a = "__mp_targeting",
  s = "__mp_recorder",
  l = "__MP_TARGETING_FILENAME__";
function c(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function u(e, t, n, r, o, i, a) {
  try {
    var s = e[i](a),
      l = s.value;
  } catch (e) {
    return void n(e);
  }
  s.done ? t(l) : Promise.resolve(l).then(r, o);
}
function d(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, o) {
      var i = e.apply(t, n);
      function a(e) {
        u(i, r, o, a, s, "next", e);
      }
      function s(e) {
        u(i, r, o, a, s, "throw", e);
      }
      a(void 0);
    });
  };
}
function p(e, t, n) {
  return (
    (p = x()
      ? Reflect.construct
      : function (e, t, n) {
          var r = [null];
          r.push.apply(r, t);
          var o = new (Function.bind.apply(e, r))();
          return n && b(o, n.prototype), o;
        }),
    p.apply(null, arguments)
  );
}
function f(e, t, n) {
  return (
    t &&
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      })(e.prototype, t),
    e
  );
}
function h() {
  return (
    (h =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    h.apply(this, arguments)
  );
}
function m(e) {
  return (
    (m = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    m(e)
  );
}
function g(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && b(e, t);
}
function y(e, t) {
  return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance]
    ? !!t[Symbol.hasInstance](e)
    : e instanceof t;
}
function v(e, t) {
  if (null == e) return {};
  var n,
    r,
    o = {},
    i = Object.keys(e);
  for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
  return o;
}
function b(e, t) {
  return (
    (b =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      }),
    b(e, t)
  );
}
function S(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol
    ? "symbol"
    : typeof e;
}
function _(e) {
  var t = "function" == typeof Map ? new Map() : void 0;
  return (
    (_ = function (e) {
      if (
        null === e ||
        ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
      )
        return e;
      var n;
      if ("function" != typeof e)
        throw new TypeError(
          "Super expression must either be null or a function",
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, r);
      }
      function r() {
        return p(e, arguments, m(this).constructor);
      }
      return (
        (r.prototype = Object.create(e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        b(r, e)
      );
    }),
    _(e)
  );
}
function x() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch (e) {}
  return (x = function () {
    return !!e;
  })();
}
function w(e, t) {
  var n =
    ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (n) return (n = n.call(e)).next.bind(n);
  if (
    Array.isArray(e) ||
    (n = (function (e, t) {
      if (e) {
        if ("string" == typeof e) return c(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(n)
            : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? c(e, t)
              : void 0
        );
      }
    })(e)) ||
    t
  ) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(
    "Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function E(e, t) {
  var n,
    r,
    o,
    i,
    a = {
      label: 0,
      sent: function () {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (i = { next: s(0), throw: s(1), return: s(2) }),
    "function" == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function s(i) {
    return function (s) {
      return (function (i) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; a; )
          try {
            if (
              ((n = 1),
              r &&
                (o =
                  2 & i[0]
                    ? r.return
                    : i[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                !(o = o.call(r, i[1])).done)
            )
              return o;
            switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
              case 0:
              case 1:
                o = i;
                break;
              case 4:
                return a.label++, { value: i[1], done: !1 };
              case 5:
                a.label++, (r = i[1]), (i = [0]);
                continue;
              case 7:
                (i = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  !(
                    (o = (o = a.trys).length > 0 && o[o.length - 1]) ||
                    (6 !== i[0] && 2 !== i[0])
                  )
                ) {
                  a = 0;
                  continue;
                }
                if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                  a.label = i[1];
                  break;
                }
                if (6 === i[0] && a.label < o[1]) {
                  (a.label = o[1]), (o = i);
                  break;
                }
                if (o && a.label < o[2]) {
                  (a.label = o[2]), a.ops.push(i);
                  break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            i = t.call(e, a);
          } catch (e) {
            (i = [6, e]), (r = 0);
          } finally {
            n = o = 0;
          }
        if (5 & i[0]) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      })([i, s]);
    };
  }
}
function T(e) {
  var t = "function" == typeof Symbol && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && "number" == typeof e.length)
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
var k,
  C = Object.defineProperty,
  I = function (e, t, n) {
    return (function (e, t, n) {
      return t in e
        ? C(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n,
          })
        : (e[t] = n);
    })(e, "symbol" !== (void 0 === t ? "undefined" : S(t)) ? t + "" : t, n);
  },
  A = Object.defineProperty,
  O = function (e, t, n) {
    return (function (e, t, n) {
      return t in e
        ? A(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n,
          })
        : (e[t] = n);
    })(e, "symbol" !== (void 0 === t ? "undefined" : S(t)) ? t + "" : t, n);
  },
  R = (function (e) {
    return (
      (e[(e.Document = 0)] = "Document"),
      (e[(e.DocumentType = 1)] = "DocumentType"),
      (e[(e.Element = 2)] = "Element"),
      (e[(e.Text = 3)] = "Text"),
      (e[(e.CDATA = 4)] = "CDATA"),
      (e[(e.Comment = 5)] = "Comment"),
      e
    );
  })(R || {}),
  M = {
    Node: ["childNodes", "parentNode", "parentElement", "textContent"],
    ShadowRoot: ["host", "styleSheets"],
    Element: ["shadowRoot", "querySelector", "querySelectorAll"],
    MutationObserver: [],
  },
  P = {
    Node: ["contains", "getRootNode"],
    ShadowRoot: ["getSelection"],
    Element: [],
    MutationObserver: ["constructor"],
  },
  N = {};
function D(e) {
  if (N[e]) return N[e];
  var t = globalThis[e],
    n = t.prototype,
    r = e in M ? M[e] : void 0,
    o = Boolean(
      r &&
        r.every(function (e) {
          var t, r;
          return Boolean(
            null ==
              (r =
                null == (t = Object.getOwnPropertyDescriptor(n, e))
                  ? void 0
                  : t.get)
              ? void 0
              : r.toString().includes("[native code]"),
          );
        }),
    ),
    i = e in P ? P[e] : void 0,
    a = Boolean(
      i &&
        i.every(function (e) {
          var t;
          return (
            "function" == typeof n[e] &&
            (null == (t = n[e])
              ? void 0
              : t.toString().includes("[native code]"))
          );
        }),
    );
  if (o && a && !globalThis.Zone) return (N[e] = t.prototype), t.prototype;
  try {
    var s = document.createElement("iframe");
    document.body.appendChild(s);
    var l = s.contentWindow;
    if (!l) return t.prototype;
    var c = l[e].prototype;
    return document.body.removeChild(s), c ? (N[e] = c) : n;
  } catch (e) {
    return n;
  }
}
var j = {};
function L(e, t, n) {
  var r,
    o = e + "." + String(n);
  if (j[o]) return j[o].call(t);
  var i = D(e),
    a = null == (r = Object.getOwnPropertyDescriptor(i, n)) ? void 0 : r.get;
  return a ? ((j[o] = a), a.call(t)) : t[n];
}
var F = function (e) {
    return L("Node", e, "childNodes");
  },
  U = function (e) {
    return L("Node", e, "parentNode");
  },
  B = function (e) {
    return L("Node", e, "parentElement");
  },
  z = function (e) {
    return L("Node", e, "textContent");
  },
  H = function (e) {
    return e && "host" in e ? L("ShadowRoot", e, "host") : null;
  },
  V = function (e) {
    return e && "shadowRoot" in e ? L("Element", e, "shadowRoot") : null;
  };
function q(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function G(e) {
  var t = (e && "host" in e && "mode" in e && H(e)) || null;
  return Boolean(t && "shadowRoot" in t && V(t) === e);
}
function W(e) {
  return "[object ShadowRoot]" === Object.prototype.toString.call(e);
}
function $(e) {
  try {
    var t = e.rules || e.cssRules;
    if (!t) return null;
    var n = e.href;
    return (
      !n &&
        e.ownerNode &&
        e.ownerNode.ownerDocument &&
        (n = e.ownerNode.ownerDocument.location.href),
      (r = Array.from(t, function (e) {
        return Y(e, n);
      }).join("")).includes(" background-clip: text;") &&
        !r.includes(" -webkit-background-clip: text;") &&
        (r = r.replace(
          /\sbackground-clip:\s*text;/g,
          " -webkit-background-clip: text; background-clip: text;",
        )),
      r
    );
  } catch (e) {
    return null;
  }
  var r;
}
function Y(e, t) {
  if (
    (function (e) {
      return "styleSheet" in e;
    })(e)
  ) {
    var n;
    try {
      n =
        $(e.styleSheet) ||
        (function (e) {
          var t = e.cssText;
          if (t.split('"').length < 3) return t;
          var n = ["@import", "url(" + JSON.stringify(e.href) + ")"];
          return (
            "" === e.layerName
              ? n.push("layer")
              : e.layerName && n.push("layer(" + e.layerName + ")"),
            e.supportsText && n.push("supports(" + e.supportsText + ")"),
            e.media.length && n.push(e.media.mediaText),
            n.join(" ") + ";"
          );
        })(e);
    } catch (t) {
      n = e.cssText;
    }
    return e.styleSheet.href ? ie(n, e.styleSheet.href) : n;
  }
  var r,
    o = e.cssText;
  return (
    (function (e) {
      return "selectorText" in e;
    })(e) &&
      e.selectorText.includes(":") &&
      ((r = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm),
      (o = o.replace(r, "$1\\$2"))),
    t ? ie(o, t) : o
  );
}
var K = (function () {
  function e() {
    O(this, "idNodeMap", new Map()), O(this, "nodeMetaMap", new WeakMap());
  }
  var t = e.prototype;
  return (
    (t.getId = function (e) {
      var t;
      if (!e) return -1;
      var n = null == (t = this.getMeta(e)) ? void 0 : t.id;
      return null != n ? n : -1;
    }),
    (t.getNode = function (e) {
      return this.idNodeMap.get(e) || null;
    }),
    (t.getIds = function () {
      return Array.from(this.idNodeMap.keys());
    }),
    (t.getMeta = function (e) {
      return this.nodeMetaMap.get(e) || null;
    }),
    (t.removeNodeFromMap = function (e, t) {
      var n = this;
      void 0 === t && (t = !1);
      var r = this.getId(e);
      this.idNodeMap.delete(r),
        t && this.nodeMetaMap.delete(e),
        e.childNodes &&
          e.childNodes.forEach(function (e) {
            return n.removeNodeFromMap(e, t);
          });
    }),
    (t.has = function (e) {
      return this.idNodeMap.has(e);
    }),
    (t.hasNode = function (e) {
      return this.nodeMetaMap.has(e);
    }),
    (t.add = function (e, t) {
      var n = t.id;
      this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
    }),
    (t.replace = function (e, t) {
      var n = this.getNode(e);
      if (n) {
        var r = this.nodeMetaMap.get(n);
        r && this.nodeMetaMap.set(t, r);
      }
      this.idNodeMap.set(e, t);
    }),
    (t.reset = function () {
      (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
    }),
    e
  );
})();
function Z(e) {
  var t = e.element,
    n = e.maskInputOptions,
    r = e.tagName,
    o = e.type,
    i = e.value,
    a = e.maskInputFn,
    s = i || "",
    l = o && Q(o);
  return (
    (n[r.toLowerCase()] || (l && n[l])) &&
      (s = a ? a(s, t) : "*".repeat(s.length)),
    s
  );
}
function Q(e) {
  return e.toLowerCase();
}
var J = "__rrweb_original__";
function X(e) {
  var t = e.type;
  return e.hasAttribute("data-rr-is-password") ? "password" : t ? Q(t) : null;
}
function ee(e, t) {
  var n;
  try {
    n = new URL(e, null != t ? t : window.location.href);
  } catch (e) {
    return null;
  }
  var r,
    o = n.pathname.match(/\.([0-9a-z]+)(?:$)/i);
  return null != (r = null == o ? void 0 : o[1]) ? r : null;
}
var te = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  ne = /^(?:[a-z+]+:)?\/\//i,
  re = /^www\..*/i,
  oe = /^(data:)([^,]*),(.*)/i;
function ie(e, t) {
  return (e || "").replace(te, function (e, n, r, o, i, a) {
    var s,
      l = r || i || a,
      c = n || o || "";
    if (!l) return e;
    if (ne.test(l) || re.test(l)) return "url(" + c + l + c + ")";
    if (oe.test(l)) return "url(" + c + l + c + ")";
    if ("/" === l[0])
      return (
        "url(" +
        c +
        (((s = t).indexOf("//") > -1
          ? s.split("/").slice(0, 3).join("/")
          : s.split("/")[0]
        ).split("?")[0] +
          l) +
        c +
        ")"
      );
    var u = t.split("/"),
      d = l.split("/");
    u.pop();
    for (var p, f = w(d); !(p = f()).done; ) {
      var h = p.value;
      "." !== h && (".." === h ? u.pop() : u.push(h));
    }
    return "url(" + c + u.join("/") + c + ")";
  });
}
function ae(e, t) {
  return (
    void 0 === t && (t = !1),
    t
      ? e.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "")
      : e.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "").replace(/0px/g, "0")
  );
}
var se,
  le,
  ce = 1,
  ue = new RegExp("[^a-z0-9-_:]");
function de() {
  return ce++;
}
var pe = /^[^ \t\n\r\u000c]+/,
  fe = /^[, \t\n\r\u000c]+/,
  he = new WeakMap();
function me(e, t) {
  return t && "" !== t.trim() ? ge(e, t) : t;
}
function ge(e, t) {
  var n = he.get(e);
  if ((n || ((n = e.createElement("a")), he.set(e, n)), t)) {
    if (t.startsWith("blob:") || t.startsWith("data:")) return t;
  } else t = "";
  return n.setAttribute("href", t), n.href;
}
function ye(e, t, n, r) {
  return r
    ? "src" === n ||
      ("href" === n && ("use" !== t || "#" !== r[0])) ||
      ("xlink:href" === n && "#" !== r[0])
      ? me(e, r)
      : "background" !== n || ("table" !== t && "td" !== t && "th" !== t)
        ? "srcset" === n
          ? (function (e, t) {
              if ("" === t.trim()) return t;
              var n = 0;
              function r(e) {
                var r,
                  o = e.exec(t.substring(n));
                return o ? ((r = o[0]), (n += r.length), r) : "";
              }
              for (var o = []; r(fe), !(n >= t.length); ) {
                var i = r(pe);
                if ("," === i.slice(-1))
                  (i = me(e, i.substring(0, i.length - 1))), o.push(i);
                else {
                  var a = "";
                  i = me(e, i);
                  for (var s = !1; ; ) {
                    var l = t.charAt(n);
                    if ("" === l) {
                      o.push((i + a).trim());
                      break;
                    }
                    if (s) ")" === l && (s = !1);
                    else {
                      if ("," === l) {
                        (n += 1), o.push((i + a).trim());
                        break;
                      }
                      "(" === l && (s = !0);
                    }
                    (a += l), (n += 1);
                  }
                }
              }
              return o.join(", ");
            })(e, r)
          : "style" === n
            ? ie(r, ge(e))
            : "object" === t && "data" === n
              ? me(e, r)
              : r
        : me(e, r)
    : r;
}
function ve(e, t, n) {
  return ("video" === e || "audio" === e) && "autoplay" === t;
}
function be(e, t, n) {
  if (!e) return !1;
  if (e.nodeType !== e.ELEMENT_NODE) return !!n && be(U(e), t, n);
  for (var r = e.classList.length; r--; ) {
    var o = e.classList[r];
    if (t.test(o)) return !0;
  }
  return !!n && be(U(e), t, n);
}
function Se(e, t, n, r) {
  var o;
  if (q(e)) {
    if (!F((o = e)).length) return !1;
  } else {
    if (null === B(e)) return !1;
    o = B(e);
  }
  try {
    if ("string" == typeof t) {
      if (r) {
        if (o.closest("." + t)) return !0;
      } else if (o.classList.contains(t)) return !0;
    } else if (be(o, t, r)) return !0;
    if (n)
      if (r) {
        if (o.closest(n)) return !0;
      } else if (o.matches(n)) return !0;
  } catch (e) {}
  return !1;
}
function _e(e, t) {
  var n = t.doc,
    r = t.mirror,
    o = t.blockClass,
    i = t.blockSelector,
    a = t.needsMask,
    s = t.inlineStylesheet,
    l = t.maskInputOptions,
    c = void 0 === l ? {} : l,
    u = t.maskTextFn,
    d = t.maskInputFn,
    p = t.dataURLOptions,
    f = void 0 === p ? {} : p,
    h = t.inlineImages,
    m = t.recordCanvas,
    g = t.keepIframeSrcFn,
    v = t.newlyAddedElement,
    b = void 0 !== v && v,
    S = t.cssCaptured,
    _ = void 0 !== S && S,
    x = (function (e, t) {
      if (t.hasNode(e)) {
        var n = t.getId(e);
        return 1 === n ? void 0 : n;
      }
    })(n, r);
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return "CSS1Compat" !== e.compatMode
        ? {
            type: R.Document,
            childNodes: [],
            compatMode: e.compatMode,
          }
        : { type: R.Document, childNodes: [] };
    case e.DOCUMENT_TYPE_NODE:
      return {
        type: R.DocumentType,
        name: e.name,
        publicId: e.publicId,
        systemId: e.systemId,
        rootId: x,
      };
    case e.ELEMENT_NODE:
      return (function (e, t) {
        for (
          var n,
            r = t.doc,
            o = t.inlineStylesheet,
            i = t.maskInputOptions,
            a = void 0 === i ? {} : i,
            s = t.maskInputFn,
            l = t.dataURLOptions,
            c = void 0 === l ? {} : l,
            u = t.inlineImages,
            d = t.recordCanvas,
            p = t.keepIframeSrcFn,
            f = t.newlyAddedElement,
            h = void 0 !== f && f,
            m = t.rootId,
            g = (function (e, t, n) {
              try {
                if ("string" == typeof t) {
                  if (e.classList.contains(t)) return !0;
                } else
                  for (var r = e.classList.length; r--; ) {
                    var o = e.classList[r];
                    if (t.test(o)) return !0;
                  }
                if (n) return e.matches(n);
              } catch (e) {}
              return !1;
            })(e, t.blockClass, t.blockSelector),
            v = (function (e) {
              if (y(e, HTMLFormElement)) return "form";
              var t = Q(e.tagName);
              return ue.test(t) ? "div" : t;
            })(e),
            b = {},
            S = e.attributes.length,
            _ = 0;
          _ < S;
          _++
        ) {
          var x = e.attributes[_];
          ve(v, x.name, x.value) || (b[x.name] = ye(r, v, Q(x.name), x.value));
        }
        if ("link" === v && o) {
          var w = Array.from(r.styleSheets).find(function (t) {
              return t.href === e.href;
            }),
            E = null;
          w && (E = $(w)), E && (delete b.rel, delete b.href, (b._cssText = E));
        }
        if ("style" === v && e.sheet) {
          var T = $(e.sheet);
          T &&
            (e.childNodes.length > 1 &&
              (T = (function (e, t) {
                return (function (e, t, n) {
                  void 0 === n && (n = !1);
                  var r = Array.from(t.childNodes),
                    o = [],
                    i = 0;
                  if (r.length > 1 && e && "string" == typeof e)
                    for (
                      var a = ae(e, n), s = a.length / e.length, l = 1;
                      l < r.length;
                      l++
                    )
                      if (
                        r[l].textContent &&
                        "string" == typeof r[l].textContent
                      ) {
                        for (
                          var c = ae(r[l].textContent, n), u = 3;
                          u < c.length &&
                          (c[u].match(/[a-zA-Z0-9]/) ||
                            -1 !== c.indexOf(c.substring(0, u), 1));
                          u++
                        );
                        for (; u < c.length; u++) {
                          var d = c.substring(0, u),
                            p = a.split(d),
                            f = -1;
                          if (2 === p.length) f = p[0].length;
                          else if (
                            p.length > 2 &&
                            "" === p[0] &&
                            "" !== r[l - 1].textContent
                          )
                            f = a.indexOf(d, 1);
                          else if (1 === p.length) {
                            if (
                              ((d = d.substring(0, d.length - 1)),
                              (p = a.split(d)).length <= 1)
                            )
                              return o.push(e), o;
                            u = 101;
                          } else u === c.length - 1 && (f = a.indexOf(d));
                          if (p.length >= 2 && u > 100) {
                            var h = r[l - 1].textContent;
                            if (h && "string" == typeof h) {
                              var m = ae(h).length;
                              f = a.indexOf(d, m);
                            }
                            -1 === f && (f = p[0].length);
                          }
                          if (-1 !== f) {
                            for (
                              var g = Math.floor(f / s);
                              g > 0 && g < e.length;

                            ) {
                              if ((i += 1) > 50 * r.length) return o.push(e), o;
                              var y = ae(e.substring(0, g), n);
                              if (y.length === f) {
                                o.push(e.substring(0, g)),
                                  (e = e.substring(g)),
                                  (a = a.substring(f));
                                break;
                              }
                              y.length < f
                                ? (g += Math.max(
                                    1,
                                    Math.floor((f - y.length) / s),
                                  ))
                                : (g -= Math.max(
                                    1,
                                    Math.floor((y.length - f) * s),
                                  ));
                            }
                            break;
                          }
                        }
                      }
                  return o.push(e), o;
                })(e, t).join("/* rr_split */");
              })(T, e)),
            (b._cssText = T));
        }
        if ("input" === v || "textarea" === v || "select" === v) {
          var k = e.value,
            C = e.checked;
          "radio" !== b.type &&
          "checkbox" !== b.type &&
          "submit" !== b.type &&
          "button" !== b.type &&
          k
            ? (b.value = Z({
                element: e,
                type: X(e),
                tagName: v,
                value: k,
                maskInputOptions: a,
                maskInputFn: s,
              }))
            : C && (b.checked = C);
        }
        if (
          ("option" === v &&
            (e.selected && !a.select ? (b.selected = !0) : delete b.selected),
          "dialog" === v &&
            e.open &&
            (b.rr_open_mode = e.matches("dialog:modal")
              ? "modal"
              : "non-modal"),
          "canvas" === v && d)
        )
          if ("2d" === e.__context)
            (function (e) {
              var t = e.getContext("2d");
              if (!t) return !0;
              for (var n = 0; n < e.width; n += 50)
                for (var r = 0; r < e.height; r += 50) {
                  var o = t.getImageData,
                    i = J in o ? o[J] : o;
                  if (
                    new Uint32Array(
                      i.call(
                        t,
                        n,
                        r,
                        Math.min(50, e.width - n),
                        Math.min(50, e.height - r),
                      ).data.buffer,
                    ).some(function (e) {
                      return 0 !== e;
                    })
                  )
                    return !1;
                }
              return !0;
            })(e) || (b.rr_dataURL = e.toDataURL(c.type, c.quality));
          else if (!("__context" in e)) {
            var I = e.toDataURL(c.type, c.quality),
              A = r.createElement("canvas");
            (A.width = e.width),
              (A.height = e.height),
              I !== A.toDataURL(c.type, c.quality) && (b.rr_dataURL = I);
          }
        if ("img" === v && u) {
          se || ((se = r.createElement("canvas")), (le = se.getContext("2d")));
          var O = e,
            M = (O.currentSrc || O.getAttribute("src"), O.crossOrigin),
            P = function () {
              O.removeEventListener("load", P);
              try {
                (se.width = O.naturalWidth),
                  (se.height = O.naturalHeight),
                  le.drawImage(O, 0, 0),
                  (b.rr_dataURL = se.toDataURL(c.type, c.quality));
              } catch (e) {
                if ("anonymous" !== O.crossOrigin)
                  return (
                    (O.crossOrigin = "anonymous"),
                    void (O.complete && 0 !== O.naturalWidth
                      ? P()
                      : O.addEventListener("load", P))
                  );
              }
              "anonymous" === O.crossOrigin &&
                (M ? (b.crossOrigin = M) : O.removeAttribute("crossorigin"));
            };
          O.complete && 0 !== O.naturalWidth
            ? P()
            : O.addEventListener("load", P);
        }
        if ("audio" === v || "video" === v) {
          var N = b;
          (N.rr_mediaState = e.paused ? "paused" : "played"),
            (N.rr_mediaCurrentTime = e.currentTime),
            (N.rr_mediaPlaybackRate = e.playbackRate),
            (N.rr_mediaMuted = e.muted),
            (N.rr_mediaLoop = e.loop),
            (N.rr_mediaVolume = e.volume);
        }
        if (
          (h ||
            (e.scrollLeft && (b.rr_scrollLeft = e.scrollLeft),
            e.scrollTop && (b.rr_scrollTop = e.scrollTop)),
          g)
        ) {
          var D = e.getBoundingClientRect(),
            j = D.width,
            L = D.height;
          b = {
            class: b.class,
            rr_width: j + "px",
            rr_height: L + "px",
          };
        }
        "iframe" !== v ||
          p(b.src) ||
          (e.contentDocument || (b.rr_src = b.src), delete b.src);
        try {
          customElements.get(v) && (n = !0);
        } catch (e) {}
        return {
          type: R.Element,
          tagName: v,
          attributes: b,
          childNodes: [],
          isSVG:
            ((F = e),
            Boolean("svg" === F.tagName || F.ownerSVGElement) || void 0),
          needBlock: g,
          rootId: m,
          isCustom: n,
        };
        var F;
      })(e, {
        doc: n,
        blockClass: o,
        blockSelector: i,
        inlineStylesheet: s,
        maskInputOptions: c,
        maskInputFn: d,
        dataURLOptions: f,
        inlineImages: h,
        recordCanvas: m,
        keepIframeSrcFn: g,
        newlyAddedElement: b,
        rootId: x,
      });
    case e.TEXT_NODE:
      return (function (e, t) {
        var n = t.needsMask,
          r = t.maskTextFn,
          o = t.rootId,
          i = t.cssCaptured,
          a = U(e),
          s = a && a.tagName,
          l = "",
          c = "STYLE" === s || void 0,
          u = "SCRIPT" === s || void 0;
        return (
          u
            ? (l = "SCRIPT_PLACEHOLDER")
            : i || ((l = z(e)), c && l && (l = ie(l, ge(t.doc)))),
          !c && !u && l && n && (l = r ? r(l, B(e)) : l.replace(/[\S]/g, "*")),
          { type: R.Text, textContent: l || "", rootId: o }
        );
      })(e, {
        doc: n,
        needsMask: a,
        maskTextFn: u,
        rootId: x,
        cssCaptured: _,
      });
    case e.CDATA_SECTION_NODE:
      return { type: R.CDATA, textContent: "", rootId: x };
    case e.COMMENT_NODE:
      return { type: R.Comment, textContent: z(e) || "", rootId: x };
    default:
      return !1;
  }
}
function xe(e) {
  return null == e ? "" : e.toLowerCase();
}
function we(e, t) {
  var n = t.doc,
    r = t.mirror,
    o = t.blockClass,
    i = t.blockSelector,
    a = t.maskTextClass,
    s = t.maskTextSelector,
    l = t.skipChild,
    c = void 0 !== l && l,
    u = t.inlineStylesheet,
    d = void 0 === u || u,
    p = t.maskInputOptions,
    f = void 0 === p ? {} : p,
    h = t.maskTextFn,
    m = t.maskInputFn,
    g = t.slimDOMOptions,
    y = t.dataURLOptions,
    v = void 0 === y ? {} : y,
    b = t.inlineImages,
    S = void 0 !== b && b,
    _ = t.recordCanvas,
    x = void 0 !== _ && _,
    E = t.onSerialize,
    T = t.onIframeLoad,
    k = t.iframeLoadTimeout,
    C = void 0 === k ? 5e3 : k,
    I = t.onStylesheetLoad,
    A = t.stylesheetLoadTimeout,
    O = void 0 === A ? 5e3 : A,
    M = t.keepIframeSrcFn,
    P =
      void 0 === M
        ? function () {
            return !1;
          }
        : M,
    N = t.newlyAddedElement,
    D = void 0 !== N && N,
    j = t.cssCaptured,
    L = void 0 !== j && j,
    B = t.needsMask,
    z = t.preserveWhiteSpace,
    H = void 0 === z || z;
  B || (B = Se(e, a, s, void 0 === B));
  var $,
    Y = _e(e, {
      doc: n,
      mirror: r,
      blockClass: o,
      blockSelector: i,
      needsMask: B,
      inlineStylesheet: d,
      maskInputOptions: f,
      maskTextFn: h,
      maskInputFn: m,
      dataURLOptions: v,
      inlineImages: S,
      recordCanvas: x,
      keepIframeSrcFn: P,
      newlyAddedElement: D,
      cssCaptured: L,
    });
  if (!Y) return null;
  $ = r.hasNode(e)
    ? r.getId(e)
    : (function (e, t) {
          if (t.comment && e.type === R.Comment) return !0;
          if (e.type === R.Element) {
            if (
              t.script &&
              ("script" === e.tagName ||
                ("link" === e.tagName &&
                  (("preload" === e.attributes.rel &&
                    "script" === e.attributes.as) ||
                    "modulepreload" === e.attributes.rel)) ||
                ("link" === e.tagName &&
                  "prefetch" === e.attributes.rel &&
                  "string" == typeof e.attributes.href &&
                  "js" === ee(e.attributes.href)))
            )
              return !0;
            if (
              t.headFavicon &&
              (("link" === e.tagName && "shortcut icon" === e.attributes.rel) ||
                ("meta" === e.tagName &&
                  (xe(e.attributes.name).match(
                    /^msapplication-tile(image|color)$/,
                  ) ||
                    "application-name" === xe(e.attributes.name) ||
                    "icon" === xe(e.attributes.rel) ||
                    "apple-touch-icon" === xe(e.attributes.rel) ||
                    "shortcut icon" === xe(e.attributes.rel))))
            )
              return !0;
            if ("meta" === e.tagName) {
              if (
                t.headMetaDescKeywords &&
                xe(e.attributes.name).match(/^description|keywords$/)
              )
                return !0;
              if (
                t.headMetaSocial &&
                (xe(e.attributes.property).match(/^(og|twitter|fb):/) ||
                  xe(e.attributes.name).match(/^(og|twitter):/) ||
                  "pinterest" === xe(e.attributes.name))
              )
                return !0;
              if (
                t.headMetaRobots &&
                ("robots" === xe(e.attributes.name) ||
                  "googlebot" === xe(e.attributes.name) ||
                  "bingbot" === xe(e.attributes.name))
              )
                return !0;
              if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"])
                return !0;
              if (
                t.headMetaAuthorship &&
                ("author" === xe(e.attributes.name) ||
                  "generator" === xe(e.attributes.name) ||
                  "framework" === xe(e.attributes.name) ||
                  "publisher" === xe(e.attributes.name) ||
                  "progid" === xe(e.attributes.name) ||
                  xe(e.attributes.property).match(/^article:/) ||
                  xe(e.attributes.property).match(/^product:/))
              )
                return !0;
              if (
                t.headMetaVerification &&
                ("google-site-verification" === xe(e.attributes.name) ||
                  "yandex-verification" === xe(e.attributes.name) ||
                  "csrf-token" === xe(e.attributes.name) ||
                  "p:domain_verify" === xe(e.attributes.name) ||
                  "verify-v1" === xe(e.attributes.name) ||
                  "verification" === xe(e.attributes.name) ||
                  "shopify-checkout-api-token" === xe(e.attributes.name))
              )
                return !0;
            }
          }
          return !1;
        })(Y, g) ||
        (!H &&
          Y.type === R.Text &&
          !Y.textContent.replace(/^\s+|\s+$/gm, "").length)
      ? -2
      : de();
  var K = Object.assign(Y, { id: $ });
  if ((r.add(e, K), -2 === $)) return null;
  E && E(e);
  var Z = !c;
  if (K.type === R.Element) {
    (Z = Z && !K.needBlock), delete K.needBlock;
    var Q = V(e);
    Q && W(Q) && (K.isShadowHost = !0);
  }
  if ((K.type === R.Document || K.type === R.Element) && Z) {
    g.headWhitespace &&
      K.type === R.Element &&
      "head" === K.tagName &&
      (H = !1);
    var J = {
      doc: n,
      mirror: r,
      blockClass: o,
      blockSelector: i,
      needsMask: B,
      maskTextClass: a,
      maskTextSelector: s,
      skipChild: c,
      inlineStylesheet: d,
      maskInputOptions: f,
      maskTextFn: h,
      maskInputFn: m,
      slimDOMOptions: g,
      dataURLOptions: v,
      inlineImages: S,
      recordCanvas: x,
      preserveWhiteSpace: H,
      onSerialize: E,
      onIframeLoad: T,
      iframeLoadTimeout: C,
      onStylesheetLoad: I,
      stylesheetLoadTimeout: O,
      keepIframeSrcFn: P,
      cssCaptured: !1,
    };
    if (
      K.type === R.Element &&
      "textarea" === K.tagName &&
      void 0 !== K.attributes.value
    );
    else {
      K.type === R.Element &&
        void 0 !== K.attributes._cssText &&
        "string" == typeof K.attributes._cssText &&
        (J.cssCaptured = !0);
      for (var X, te = w(Array.from(F(e))); !(X = te()).done; ) {
        var ne = we(X.value, J);
        ne && K.childNodes.push(ne);
      }
    }
    var re = null;
    if (q(e) && (re = V(e)))
      for (var oe, ie = w(Array.from(F(re))); !(oe = ie()).done; ) {
        var ae = we(oe.value, J);
        ae && (W(re) && (ae.isShadow = !0), K.childNodes.push(ae));
      }
  }
  var se = U(e);
  return (
    se && G(se) && W(se) && (K.isShadow = !0),
    K.type === R.Element &&
      "iframe" === K.tagName &&
      (function (e, t, n) {
        var r = e.contentWindow;
        if (r) {
          var o,
            i = !1;
          try {
            o = r.document.readyState;
          } catch (e) {
            return;
          }
          if ("complete" === o) {
            var a = "about:blank";
            if (r.location.href !== a || e.src === a || "" === e.src)
              return setTimeout(t, 0), e.addEventListener("load", t);
            e.addEventListener("load", t);
          } else {
            var s = setTimeout(function () {
              i || (t(), (i = !0));
            }, n);
            e.addEventListener("load", function () {
              clearTimeout(s), (i = !0), t();
            });
          }
        }
      })(
        e,
        function () {
          var t = e.contentDocument;
          if (t && T) {
            var n = we(t, {
              doc: t,
              mirror: r,
              blockClass: o,
              blockSelector: i,
              needsMask: B,
              maskTextClass: a,
              maskTextSelector: s,
              skipChild: !1,
              inlineStylesheet: d,
              maskInputOptions: f,
              maskTextFn: h,
              maskInputFn: m,
              slimDOMOptions: g,
              dataURLOptions: v,
              inlineImages: S,
              recordCanvas: x,
              preserveWhiteSpace: H,
              onSerialize: E,
              onIframeLoad: T,
              iframeLoadTimeout: C,
              onStylesheetLoad: I,
              stylesheetLoadTimeout: O,
              keepIframeSrcFn: P,
            });
            n && T(e, n);
          }
        },
        C,
      ),
    K.type === R.Element &&
      "link" === K.tagName &&
      "string" == typeof K.attributes.rel &&
      ("stylesheet" === K.attributes.rel ||
        ("preload" === K.attributes.rel &&
          "string" == typeof K.attributes.href &&
          "css" === ee(K.attributes.href))) &&
      (function (e, t, n) {
        var r,
          o = !1;
        try {
          r = e.sheet;
        } catch (e) {
          return;
        }
        if (!r) {
          var i = setTimeout(function () {
            o || (t(), (o = !0));
          }, n);
          e.addEventListener("load", function () {
            clearTimeout(i), (o = !0), t();
          });
        }
      })(
        e,
        function () {
          if (I) {
            var t = we(e, {
              doc: n,
              mirror: r,
              blockClass: o,
              blockSelector: i,
              needsMask: B,
              maskTextClass: a,
              maskTextSelector: s,
              skipChild: !1,
              inlineStylesheet: d,
              maskInputOptions: f,
              maskTextFn: h,
              maskInputFn: m,
              slimDOMOptions: g,
              dataURLOptions: v,
              inlineImages: S,
              recordCanvas: x,
              preserveWhiteSpace: H,
              onSerialize: E,
              onIframeLoad: T,
              iframeLoadTimeout: C,
              onStylesheetLoad: I,
              stylesheetLoadTimeout: O,
              keepIframeSrcFn: P,
            });
            t && I(e, t);
          }
        },
        O,
      ),
    K
  );
}
function Ee(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Te(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if ("function" == typeof t) {
    var n = function e() {
      return y(this, e)
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (t) {
      var r = Object.getOwnPropertyDescriptor(e, t);
      Object.defineProperty(
        n,
        t,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return e[t];
              },
            },
      );
    }),
    n
  );
}
var ke = { exports: {} },
  Ce = String,
  Ie = function () {
    return {
      isColorSupported: !1,
      reset: Ce,
      bold: Ce,
      dim: Ce,
      italic: Ce,
      underline: Ce,
      inverse: Ce,
      hidden: Ce,
      strikethrough: Ce,
      black: Ce,
      red: Ce,
      green: Ce,
      yellow: Ce,
      blue: Ce,
      magenta: Ce,
      cyan: Ce,
      white: Ce,
      gray: Ce,
      bgBlack: Ce,
      bgRed: Ce,
      bgGreen: Ce,
      bgYellow: Ce,
      bgBlue: Ce,
      bgMagenta: Ce,
      bgCyan: Ce,
      bgWhite: Ce,
    };
  };
(ke.exports = Ie()), (ke.exports.createColors = Ie);
var Ae = ke.exports,
  Oe = Te(
    Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: {} },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
  ),
  Re = Ae,
  Me = Oe,
  Pe = (function (e) {
    function t(n, r, o, i, a, s) {
      var l;
      return (
        ((l = e.call(this, n) || this).name = "CssSyntaxError"),
        (l.reason = n),
        a && (l.file = a),
        i && (l.source = i),
        s && (l.plugin = s),
        void 0 !== r &&
          void 0 !== o &&
          ("number" == typeof r
            ? ((l.line = r), (l.column = o))
            : ((l.line = r.line),
              (l.column = r.column),
              (l.endLine = o.line),
              (l.endColumn = o.column))),
        l.setMessage(),
        Error.captureStackTrace && Error.captureStackTrace(l, t),
        l
      );
    }
    g(t, e);
    var n = t.prototype;
    return (
      (n.setMessage = function () {
        (this.message = this.plugin ? this.plugin + ": " : ""),
          (this.message += this.file ? this.file : "<css input>"),
          void 0 !== this.line &&
            (this.message += ":" + this.line + ":" + this.column),
          (this.message += ": " + this.reason);
      }),
      (n.showSourceCode = function (e) {
        var t = this;
        if (!this.source) return "";
        var n = this.source;
        null == e && (e = Re.isColorSupported), Me && e && (n = Me(n));
        var r,
          o,
          i = n.split(/\r?\n/),
          a = Math.max(this.line - 3, 0),
          s = Math.min(this.line + 2, i.length),
          l = String(s).length;
        if (e) {
          var c = Re.createColors(!0),
            u = c.bold,
            d = c.gray,
            p = c.red;
          (r = function (e) {
            return u(p(e));
          }),
            (o = function (e) {
              return d(e);
            });
        } else
          r = o = function (e) {
            return e;
          };
        return i
          .slice(a, s)
          .map(function (e, n) {
            var i = a + 1 + n,
              s = " " + (" " + i).slice(-l) + " | ";
            if (i === t.line) {
              var c =
                o(s.replace(/\d/g, " ")) +
                e.slice(0, t.column - 1).replace(/[^\t]/g, " ");
              return r(">") + o(s) + e + "\n " + c + r("^");
            }
            return " " + o(s) + e;
          })
          .join("\n");
      }),
      (n.toString = function () {
        var e = this.showSourceCode();
        return (
          e && (e = "\n\n" + e + "\n"), this.name + ": " + this.message + e
        );
      }),
      t
    );
  })(_(Error)),
  Ne = Pe;
Pe.default = Pe;
var De = {};
(De.isClean = Symbol("isClean")), (De.my = Symbol("my"));
var je = {
    after: "\n",
    beforeClose: "\n",
    beforeComment: "\n",
    beforeDecl: "\n",
    beforeOpen: " ",
    beforeRule: "\n",
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: !1,
  },
  Le = (function () {
    function e(e) {
      this.builder = e;
    }
    var t = e.prototype;
    return (
      (t.atrule = function (e, t) {
        var n = "@" + e.name,
          r = e.params ? this.rawValue(e, "params") : "";
        if (
          (void 0 !== e.raws.afterName
            ? (n += e.raws.afterName)
            : r && (n += " "),
          e.nodes)
        )
          this.block(e, n + r);
        else {
          var o = (e.raws.between || "") + (t ? ";" : "");
          this.builder(n + r + o, e);
        }
      }),
      (t.beforeAfter = function (e, t) {
        var n;
        n =
          "decl" === e.type
            ? this.raw(e, null, "beforeDecl")
            : "comment" === e.type
              ? this.raw(e, null, "beforeComment")
              : "before" === t
                ? this.raw(e, null, "beforeRule")
                : this.raw(e, null, "beforeClose");
        for (var r = e.parent, o = 0; r && "root" !== r.type; )
          (o += 1), (r = r.parent);
        if (n.includes("\n")) {
          var i = this.raw(e, null, "indent");
          if (i.length) for (var a = 0; a < o; a++) n += i;
        }
        return n;
      }),
      (t.block = function (e, t) {
        var n,
          r = this.raw(e, "between", "beforeOpen");
        this.builder(t + r + "{", e, "start"),
          e.nodes && e.nodes.length
            ? (this.body(e), (n = this.raw(e, "after")))
            : (n = this.raw(e, "after", "emptyBody")),
          n && this.builder(n),
          this.builder("}", e, "end");
      }),
      (t.body = function (e) {
        for (
          var t = e.nodes.length - 1;
          t > 0 && "comment" === e.nodes[t].type;

        )
          t -= 1;
        for (var n = this.raw(e, "semicolon"), r = 0; r < e.nodes.length; r++) {
          var o = e.nodes[r],
            i = this.raw(o, "before");
          i && this.builder(i), this.stringify(o, t !== r || n);
        }
      }),
      (t.comment = function (e) {
        var t = this.raw(e, "left", "commentLeft"),
          n = this.raw(e, "right", "commentRight");
        this.builder("/*" + t + e.text + n + "*/", e);
      }),
      (t.decl = function (e, t) {
        var n = this.raw(e, "between", "colon"),
          r = e.prop + n + this.rawValue(e, "value");
        e.important && (r += e.raws.important || " !important"),
          t && (r += ";"),
          this.builder(r, e);
      }),
      (t.document = function (e) {
        this.body(e);
      }),
      (t.raw = function (e, t, n) {
        var r;
        if ((n || (n = t), t && void 0 !== (r = e.raws[t]))) return r;
        var o = e.parent;
        if ("before" === n) {
          if (!o || ("root" === o.type && o.first === e)) return "";
          if (o && "document" === o.type) return "";
        }
        if (!o) return je[n];
        var i = e.root();
        if ((i.rawCache || (i.rawCache = {}), void 0 !== i.rawCache[n]))
          return i.rawCache[n];
        if ("before" === n || "after" === n) return this.beforeAfter(e, n);
        var a,
          s = "raw" + ((a = n)[0].toUpperCase() + a.slice(1));
        return (
          this[s]
            ? (r = this[s](i, e))
            : i.walk(function (e) {
                if (void 0 !== (r = e.raws[t])) return !1;
              }),
          void 0 === r && (r = je[n]),
          (i.rawCache[n] = r),
          r
        );
      }),
      (t.rawBeforeClose = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if (e.nodes && e.nodes.length > 0 && void 0 !== e.raws.after)
              return (
                (t = e.raws.after).includes("\n") &&
                  (t = t.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          t && (t = t.replace(/\S/g, "")),
          t
        );
      }),
      (t.rawBeforeComment = function (e, t) {
        var n;
        return (
          e.walkComments(function (e) {
            if (void 0 !== e.raws.before)
              return (
                (n = e.raws.before).includes("\n") &&
                  (n = n.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          void 0 === n
            ? (n = this.raw(t, null, "beforeDecl"))
            : n && (n = n.replace(/\S/g, "")),
          n
        );
      }),
      (t.rawBeforeDecl = function (e, t) {
        var n;
        return (
          e.walkDecls(function (e) {
            if (void 0 !== e.raws.before)
              return (
                (n = e.raws.before).includes("\n") &&
                  (n = n.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          void 0 === n
            ? (n = this.raw(t, null, "beforeRule"))
            : n && (n = n.replace(/\S/g, "")),
          n
        );
      }),
      (t.rawBeforeOpen = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if ("decl" !== e.type && void 0 !== (t = e.raws.between)) return !1;
          }),
          t
        );
      }),
      (t.rawBeforeRule = function (e) {
        var t;
        return (
          e.walk(function (n) {
            if (
              n.nodes &&
              (n.parent !== e || e.first !== n) &&
              void 0 !== n.raws.before
            )
              return (
                (t = n.raws.before).includes("\n") &&
                  (t = t.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          t && (t = t.replace(/\S/g, "")),
          t
        );
      }),
      (t.rawColon = function (e) {
        var t;
        return (
          e.walkDecls(function (e) {
            if (void 0 !== e.raws.between)
              return (t = e.raws.between.replace(/[^\s:]/g, "")), !1;
          }),
          t
        );
      }),
      (t.rawEmptyBody = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if (
              e.nodes &&
              0 === e.nodes.length &&
              void 0 !== (t = e.raws.after)
            )
              return !1;
          }),
          t
        );
      }),
      (t.rawIndent = function (e) {
        return e.raws.indent
          ? e.raws.indent
          : (e.walk(function (n) {
              var r = n.parent;
              if (
                r &&
                r !== e &&
                r.parent &&
                r.parent === e &&
                void 0 !== n.raws.before
              ) {
                var o = n.raws.before.split("\n");
                return (t = (t = o[o.length - 1]).replace(/\S/g, "")), !1;
              }
            }),
            t);
        var t;
      }),
      (t.rawSemicolon = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if (
              e.nodes &&
              e.nodes.length &&
              "decl" === e.last.type &&
              void 0 !== (t = e.raws.semicolon)
            )
              return !1;
          }),
          t
        );
      }),
      (t.rawValue = function (e, t) {
        var n = e[t],
          r = e.raws[t];
        return r && r.value === n ? r.raw : n;
      }),
      (t.root = function (e) {
        this.body(e), e.raws.after && this.builder(e.raws.after);
      }),
      (t.rule = function (e) {
        this.block(e, this.rawValue(e, "selector")),
          e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
      }),
      (t.stringify = function (e, t) {
        if (!this[e.type])
          throw new Error(
            "Unknown AST node type " +
              e.type +
              ". Maybe you need to change PostCSS stringifier.",
          );
        this[e.type](e, t);
      }),
      e
    );
  })(),
  Fe = Le;
Le.default = Le;
var Ue = Fe;
function Be(e, t) {
  new Ue(t).stringify(e);
}
var ze = Be;
Be.default = Be;
var He = De.isClean,
  Ve = De.my,
  qe = Ne,
  Ge = Fe,
  We = ze;
function $e(e, t) {
  var n = new e.constructor();
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && "proxyCache" !== r) {
      var o = e[r],
        i = void 0 === o ? "undefined" : S(o);
      "parent" === r && "object" === i
        ? t && (n[r] = t)
        : "source" === r
          ? (n[r] = o)
          : Array.isArray(o)
            ? (n[r] = o.map(function (e) {
                return $e(e, n);
              }))
            : ("object" === i && null !== o && (o = $e(o)), (n[r] = o));
    }
  return n;
}
var Ye = (function () {
    function e(e) {
      for (var t in (void 0 === e && (e = {}),
      (this.raws = {}),
      (this[He] = !1),
      (this[Ve] = !0),
      e))
        if ("nodes" === t) {
          this.nodes = [];
          for (var n, r = w(e[t]); !(n = r()).done; ) {
            var o = n.value;
            "function" == typeof o.clone
              ? this.append(o.clone())
              : this.append(o);
          }
        } else this[t] = e[t];
    }
    var t = e.prototype;
    return (
      (t.addToError = function (e) {
        if (
          ((e.postcssNode = this),
          e.stack && this.source && /\n\s{4}at /.test(e.stack))
        ) {
          var t = this.source;
          e.stack = e.stack.replace(
            /\n\s{4}at /,
            "$&" +
              t.input.from +
              ":" +
              t.start.line +
              ":" +
              t.start.column +
              "$&",
          );
        }
        return e;
      }),
      (t.after = function (e) {
        return this.parent.insertAfter(this, e), this;
      }),
      (t.assign = function (e) {
        for (var t in (void 0 === e && (e = {}), e)) this[t] = e[t];
        return this;
      }),
      (t.before = function (e) {
        return this.parent.insertBefore(this, e), this;
      }),
      (t.cleanRaws = function (e) {
        delete this.raws.before,
          delete this.raws.after,
          e || delete this.raws.between;
      }),
      (t.clone = function (e) {
        void 0 === e && (e = {});
        var t = $e(this);
        for (var n in e) t[n] = e[n];
        return t;
      }),
      (t.cloneAfter = function (e) {
        void 0 === e && (e = {});
        var t = this.clone(e);
        return this.parent.insertAfter(this, t), t;
      }),
      (t.cloneBefore = function (e) {
        void 0 === e && (e = {});
        var t = this.clone(e);
        return this.parent.insertBefore(this, t), t;
      }),
      (t.error = function (e, t) {
        if ((void 0 === t && (t = {}), this.source)) {
          var n = this.rangeBy(t),
            r = n.end,
            o = n.start;
          return this.source.input.error(
            e,
            { column: o.column, line: o.line },
            { column: r.column, line: r.line },
            t,
          );
        }
        return new qe(e);
      }),
      (t.getProxyProcessor = function () {
        return {
          get: function (e, t) {
            return "proxyOf" === t
              ? e
              : "root" === t
                ? function () {
                    return e.root().toProxy();
                  }
                : e[t];
          },
          set: function (e, t, n) {
            return (
              e[t] === n ||
                ((e[t] = n),
                ("prop" !== t &&
                  "value" !== t &&
                  "name" !== t &&
                  "params" !== t &&
                  "important" !== t &&
                  "text" !== t) ||
                  e.markDirty()),
              !0
            );
          },
        };
      }),
      (t.markDirty = function () {
        if (this[He]) {
          this[He] = !1;
          for (var e = this; (e = e.parent); ) e[He] = !1;
        }
      }),
      (t.next = function () {
        if (this.parent) {
          var e = this.parent.index(this);
          return this.parent.nodes[e + 1];
        }
      }),
      (t.positionBy = function (e, t) {
        var n = this.source.start;
        if (e.index) n = this.positionInside(e.index, t);
        else if (e.word) {
          var r = (t = this.toString()).indexOf(e.word);
          -1 !== r && (n = this.positionInside(r, t));
        }
        return n;
      }),
      (t.positionInside = function (e, t) {
        for (
          var n = t || this.toString(),
            r = this.source.start.column,
            o = this.source.start.line,
            i = 0;
          i < e;
          i++
        )
          "\n" === n[i] ? ((r = 1), (o += 1)) : (r += 1);
        return { column: r, line: o };
      }),
      (t.prev = function () {
        if (this.parent) {
          var e = this.parent.index(this);
          return this.parent.nodes[e - 1];
        }
      }),
      (t.rangeBy = function (e) {
        var t = {
            column: this.source.start.column,
            line: this.source.start.line,
          },
          n = this.source.end
            ? {
                column: this.source.end.column + 1,
                line: this.source.end.line,
              }
            : { column: t.column + 1, line: t.line };
        if (e.word) {
          var r = this.toString(),
            o = r.indexOf(e.word);
          -1 !== o &&
            ((t = this.positionInside(o, r)),
            (n = this.positionInside(o + e.word.length, r)));
        } else
          e.start
            ? (t = { column: e.start.column, line: e.start.line })
            : e.index && (t = this.positionInside(e.index)),
            e.end
              ? (n = { column: e.end.column, line: e.end.line })
              : "number" == typeof e.endIndex
                ? (n = this.positionInside(e.endIndex))
                : e.index && (n = this.positionInside(e.index + 1));
        return (
          (n.line < t.line || (n.line === t.line && n.column <= t.column)) &&
            (n = { column: t.column + 1, line: t.line }),
          { end: n, start: t }
        );
      }),
      (t.raw = function (e, t) {
        return new Ge().raw(this, e, t);
      }),
      (t.remove = function () {
        return (
          this.parent && this.parent.removeChild(this),
          (this.parent = void 0),
          this
        );
      }),
      (t.replaceWith = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (this.parent) {
          for (var r, o = this, i = !1, a = w(t); !(r = a()).done; ) {
            var s = r.value;
            s === this
              ? (i = !0)
              : i
                ? (this.parent.insertAfter(o, s), (o = s))
                : this.parent.insertBefore(o, s);
          }
          i || this.remove();
        }
        return this;
      }),
      (t.root = function () {
        for (var e = this; e.parent && "document" !== e.parent.type; )
          e = e.parent;
        return e;
      }),
      (t.toJSON = function (e, t) {
        var n = {},
          r = null == t;
        t = t || new Map();
        var o = 0;
        for (var i in this)
          if (
            Object.prototype.hasOwnProperty.call(this, i) &&
            "parent" !== i &&
            "proxyCache" !== i
          ) {
            var a = this[i];
            if (Array.isArray(a))
              n[i] = a.map(function (e) {
                return "object" === (void 0 === e ? "undefined" : S(e)) &&
                  e.toJSON
                  ? e.toJSON(null, t)
                  : e;
              });
            else if (
              "object" === (void 0 === a ? "undefined" : S(a)) &&
              a.toJSON
            )
              n[i] = a.toJSON(null, t);
            else if ("source" === i) {
              var s = t.get(a.input);
              null == s && ((s = o), t.set(a.input, o), o++),
                (n[i] = { end: a.end, inputId: s, start: a.start });
            } else n[i] = a;
          }
        return (
          r &&
            (n.inputs = [].concat(t.keys()).map(function (e) {
              return e.toJSON();
            })),
          n
        );
      }),
      (t.toProxy = function () {
        return (
          this.proxyCache ||
            (this.proxyCache = new Proxy(this, this.getProxyProcessor())),
          this.proxyCache
        );
      }),
      (t.toString = function (e) {
        void 0 === e && (e = We), e.stringify && (e = e.stringify);
        var t = "";
        return (
          e(this, function (e) {
            t += e;
          }),
          t
        );
      }),
      (t.warn = function (e, t, n) {
        var r = { node: this };
        for (var o in n) r[o] = n[o];
        return e.warn(t, r);
      }),
      f(e, [
        {
          key: "proxyOf",
          get: function () {
            return this;
          },
        },
      ]),
      e
    );
  })(),
  Ke = Ye;
Ye.default = Ye;
var Ze = (function (e) {
    function t(t) {
      var n;
      return (
        t &&
          void 0 !== t.value &&
          "string" != typeof t.value &&
          (t = h({}, t, { value: String(t.value) })),
        ((n = e.call(this, t) || this).type = "decl"),
        n
      );
    }
    return (
      g(t, e),
      f(t, [
        {
          key: "variable",
          get: function () {
            return this.prop.startsWith("--") || "$" === this.prop[0];
          },
        },
      ]),
      t
    );
  })(Ke),
  Qe = Ze;
Ze.default = Ze;
var Je = Oe.SourceMapConsumer,
  Xe = Oe.SourceMapGenerator,
  et = Oe.existsSync,
  tt = Oe.readFileSync,
  nt = Oe.dirname,
  rt = Oe.join,
  ot = (function () {
    function e(e, t) {
      if (!1 !== t.map) {
        this.loadAnnotation(e),
          (this.inline = this.startWith(this.annotation, "data:"));
        var n = t.map ? t.map.prev : void 0,
          r = this.loadMap(t.from, n);
        !this.mapFile && t.from && (this.mapFile = t.from),
          this.mapFile && (this.root = nt(this.mapFile)),
          r && (this.text = r);
      }
    }
    var t = e.prototype;
    return (
      (t.consumer = function () {
        return (
          this.consumerCache || (this.consumerCache = new Je(this.text)),
          this.consumerCache
        );
      }),
      (t.decodeInline = function (e) {
        var t;
        if (
          /^data:application\/json;charset=utf-?8,/.test(e) ||
          /^data:application\/json,/.test(e)
        )
          return decodeURIComponent(e.substr(RegExp.lastMatch.length));
        if (
          /^data:application\/json;charset=utf-?8;base64,/.test(e) ||
          /^data:application\/json;base64,/.test(e)
        )
          return (
            (t = e.substr(RegExp.lastMatch.length)),
            Buffer ? Buffer.from(t, "base64").toString() : window.atob(t)
          );
        var n = e.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + n);
      }),
      (t.getAnnotationURL = function (e) {
        return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
      }),
      (t.isMap = function (e) {
        return (
          "object" === (void 0 === e ? "undefined" : S(e)) &&
          ("string" == typeof e.mappings ||
            "string" == typeof e._mappings ||
            Array.isArray(e.sections))
        );
      }),
      (t.loadAnnotation = function (e) {
        var t = e.match(/\/\*\s*# sourceMappingURL=/gm);
        if (t) {
          var n = e.lastIndexOf(t.pop()),
            r = e.indexOf("*/", n);
          n > -1 &&
            r > -1 &&
            (this.annotation = this.getAnnotationURL(e.substring(n, r)));
        }
      }),
      (t.loadFile = function (e) {
        if (((this.root = nt(e)), et(e)))
          return (this.mapFile = e), tt(e, "utf-8").toString().trim();
      }),
      (t.loadMap = function (e, t) {
        if (!1 === t) return !1;
        if (t) {
          if ("string" == typeof t) return t;
          if ("function" != typeof t) {
            if (y(t, Je)) return Xe.fromSourceMap(t).toString();
            if (y(t, Xe)) return t.toString();
            if (this.isMap(t)) return JSON.stringify(t);
            throw new Error(
              "Unsupported previous source map format: " + t.toString(),
            );
          }
          var n = t(e);
          if (n) {
            var r = this.loadFile(n);
            if (!r)
              throw new Error(
                "Unable to load previous source map: " + n.toString(),
              );
            return r;
          }
        } else {
          if (this.inline) return this.decodeInline(this.annotation);
          if (this.annotation) {
            var o = this.annotation;
            return e && (o = rt(nt(e), o)), this.loadFile(o);
          }
        }
      }),
      (t.startWith = function (e, t) {
        return !!e && e.substr(0, t.length) === t;
      }),
      (t.withContent = function () {
        return !!(
          this.consumer().sourcesContent &&
          this.consumer().sourcesContent.length > 0
        );
      }),
      e
    );
  })(),
  it = ot;
ot.default = ot;
var at = Oe.SourceMapConsumer,
  st = Oe.SourceMapGenerator,
  lt = Oe.fileURLToPath,
  ct = Oe.pathToFileURL,
  ut = Oe.isAbsolute,
  dt = Oe.resolve,
  pt = function (e) {
    void 0 === e && (e = 21);
    for (var t = "", n = e; n--; )
      t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[
        (64 * Math.random()) | 0
      ];
    return t;
  },
  ft = Oe,
  ht = Ne,
  mt = it,
  gt = Symbol("fromOffsetCache"),
  yt = Boolean(at && st),
  vt = Boolean(dt && ut),
  bt = (function () {
    function e(e, t) {
      if (
        (void 0 === t && (t = {}),
        null == e ||
          ("object" === (void 0 === e ? "undefined" : S(e)) && !e.toString))
      )
        throw new Error("PostCSS received " + e + " instead of CSS string");
      if (
        ((this.css = e.toString()),
        "\ufeff" === this.css[0] || "￾" === this.css[0]
          ? ((this.hasBOM = !0), (this.css = this.css.slice(1)))
          : (this.hasBOM = !1),
        t.from &&
          (!vt || /^\w+:\/\//.test(t.from) || ut(t.from)
            ? (this.file = t.from)
            : (this.file = dt(t.from))),
        vt && yt)
      ) {
        var n = new mt(this.css, t);
        if (n.text) {
          this.map = n;
          var r = n.consumer().file;
          !this.file && r && (this.file = this.mapResolve(r));
        }
      }
      this.file || (this.id = "<input css " + pt(6) + ">"),
        this.map && (this.map.file = this.from);
    }
    var t = e.prototype;
    return (
      (t.error = function (e, t, n, r) {
        var o, i, a;
        if (
          (void 0 === r && (r = {}),
          t && "object" === (void 0 === t ? "undefined" : S(t)))
        ) {
          var s = t,
            l = n;
          if ("number" == typeof s.offset) {
            var c = this.fromOffset(s.offset);
            (t = c.line), (n = c.col);
          } else (t = s.line), (n = s.column);
          if ("number" == typeof l.offset) {
            var u = this.fromOffset(l.offset);
            (i = u.line), (a = u.col);
          } else (i = l.line), (a = l.column);
        } else if (!n) {
          var d = this.fromOffset(t);
          (t = d.line), (n = d.col);
        }
        var p = this.origin(t, n, i, a);
        return (
          ((o = p
            ? new ht(
                e,
                void 0 === p.endLine
                  ? p.line
                  : { column: p.column, line: p.line },
                void 0 === p.endLine
                  ? p.column
                  : { column: p.endColumn, line: p.endLine },
                p.source,
                p.file,
                r.plugin,
              )
            : new ht(
                e,
                void 0 === i ? t : { column: n, line: t },
                void 0 === i ? n : { column: a, line: i },
                this.css,
                this.file,
                r.plugin,
              )).input = {
            column: n,
            endColumn: a,
            endLine: i,
            line: t,
            source: this.css,
          }),
          this.file &&
            (ct && (o.input.url = ct(this.file).toString()),
            (o.input.file = this.file)),
          o
        );
      }),
      (t.fromOffset = function (e) {
        var t;
        if (this[gt]) t = this[gt];
        else {
          var n = this.css.split("\n");
          t = new Array(n.length);
          for (var r = 0, o = 0, i = n.length; o < i; o++)
            (t[o] = r), (r += n[o].length + 1);
          this[gt] = t;
        }
        var a = 0;
        if (e >= t[t.length - 1]) a = t.length - 1;
        else
          for (var s, l = t.length - 2; a < l; )
            if (e < t[(s = a + ((l - a) >> 1))]) l = s - 1;
            else {
              if (!(e >= t[s + 1])) {
                a = s;
                break;
              }
              a = s + 1;
            }
        return { col: e - t[a] + 1, line: a + 1 };
      }),
      (t.mapResolve = function (e) {
        return /^\w+:\/\//.test(e)
          ? e
          : dt(this.map.consumer().sourceRoot || this.map.root || ".", e);
      }),
      (t.origin = function (e, t, n, r) {
        if (!this.map) return !1;
        var o,
          i,
          a = this.map.consumer(),
          s = a.originalPositionFor({ column: t, line: e });
        if (!s.source) return !1;
        "number" == typeof n &&
          (o = a.originalPositionFor({ column: r, line: n })),
          (i = ut(s.source)
            ? ct(s.source)
            : new URL(
                s.source,
                this.map.consumer().sourceRoot || ct(this.map.mapFile),
              ));
        var l = {
          column: s.column,
          endColumn: o && o.column,
          endLine: o && o.line,
          line: s.line,
          url: i.toString(),
        };
        if ("file:" === i.protocol) {
          if (!lt)
            throw new Error(
              "file: protocol is not available in this PostCSS build",
            );
          l.file = lt(i);
        }
        var c = a.sourceContentFor(s.source);
        return c && (l.source = c), l;
      }),
      (t.toJSON = function () {
        for (
          var e = {}, t = 0, n = ["hasBOM", "css", "file", "id"];
          t < n.length;
          t++
        ) {
          var r = n[t];
          null != this[r] && (e[r] = this[r]);
        }
        return (
          this.map &&
            ((e.map = h({}, this.map)),
            e.map.consumerCache && (e.map.consumerCache = void 0)),
          e
        );
      }),
      f(e, [
        {
          key: "from",
          get: function () {
            return this.file || this.id;
          },
        },
      ]),
      e
    );
  })(),
  St = bt;
(bt.default = bt), ft && ft.registerInput && ft.registerInput(bt);
var _t = Oe.SourceMapConsumer,
  xt = Oe.SourceMapGenerator,
  wt = Oe.dirname,
  Et = Oe.relative,
  Tt = Oe.resolve,
  kt = Oe.sep,
  Ct = Oe.pathToFileURL,
  It = St,
  At = Boolean(_t && xt),
  Ot = Boolean(wt && Tt && Et && kt),
  Rt = (function () {
    function e(e, t, n, r) {
      (this.stringify = e),
        (this.mapOpts = n.map || {}),
        (this.root = t),
        (this.opts = n),
        (this.css = r),
        (this.originalCSS = r),
        (this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute),
        (this.memoizedFileURLs = new Map()),
        (this.memoizedPaths = new Map()),
        (this.memoizedURLs = new Map());
    }
    var t = e.prototype;
    return (
      (t.addAnnotation = function () {
        var e;
        e = this.isInline()
          ? "data:application/json;base64," + this.toBase64(this.map.toString())
          : "string" == typeof this.mapOpts.annotation
            ? this.mapOpts.annotation
            : "function" == typeof this.mapOpts.annotation
              ? this.mapOpts.annotation(this.opts.to, this.root)
              : this.outputFile() + ".map";
        var t = "\n";
        this.css.includes("\r\n") && (t = "\r\n"),
          (this.css += t + "/*# sourceMappingURL=" + e + " */");
      }),
      (t.applyPrevMaps = function () {
        for (var e, t = w(this.previous()); !(e = t()).done; ) {
          var n = e.value,
            r = this.toUrl(this.path(n.file)),
            o = n.root || wt(n.file),
            i = void 0;
          !1 === this.mapOpts.sourcesContent
            ? (i = new _t(n.text)).sourcesContent && (i.sourcesContent = null)
            : (i = n.consumer()),
            this.map.applySourceMap(i, r, this.toUrl(this.path(o)));
        }
      }),
      (t.clearAnnotation = function () {
        if (!1 !== this.mapOpts.annotation)
          if (this.root)
            for (var e, t = this.root.nodes.length - 1; t >= 0; t--)
              "comment" === (e = this.root.nodes[t]).type &&
                0 === e.text.indexOf("# sourceMappingURL=") &&
                this.root.removeChild(t);
          else
            this.css &&
              (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
      }),
      (t.generate = function () {
        if ((this.clearAnnotation(), Ot && At && this.isMap()))
          return this.generateMap();
        var e = "";
        return (
          this.stringify(this.root, function (t) {
            e += t;
          }),
          [e]
        );
      }),
      (t.generateMap = function () {
        if (this.root) this.generateString();
        else if (1 === this.previous().length) {
          var e = this.previous()[0].consumer();
          (e.file = this.outputFile()),
            (this.map = xt.fromSourceMap(e, {
              ignoreInvalidMapping: !0,
            }));
        } else
          (this.map = new xt({
            file: this.outputFile(),
            ignoreInvalidMapping: !0,
          })),
            this.map.addMapping({
              generated: { column: 0, line: 1 },
              original: { column: 0, line: 1 },
              source: this.opts.from
                ? this.toUrl(this.path(this.opts.from))
                : "<no source>",
            });
        return (
          this.isSourcesContent() && this.setSourcesContent(),
          this.root && this.previous().length > 0 && this.applyPrevMaps(),
          this.isAnnotation() && this.addAnnotation(),
          this.isInline() ? [this.css] : [this.css, this.map]
        );
      }),
      (t.generateString = function () {
        var e = this;
        (this.css = ""),
          (this.map = new xt({
            file: this.outputFile(),
            ignoreInvalidMapping: !0,
          }));
        var t,
          n,
          r = 1,
          o = 1,
          i = "<no source>",
          a = {
            generated: { column: 0, line: 0 },
            original: { column: 0, line: 0 },
            source: "",
          };
        this.stringify(this.root, function (s, l, c) {
          if (
            ((e.css += s),
            l &&
              "end" !== c &&
              ((a.generated.line = r),
              (a.generated.column = o - 1),
              l.source && l.source.start
                ? ((a.source = e.sourcePath(l)),
                  (a.original.line = l.source.start.line),
                  (a.original.column = l.source.start.column - 1),
                  e.map.addMapping(a))
                : ((a.source = i),
                  (a.original.line = 1),
                  (a.original.column = 0),
                  e.map.addMapping(a))),
            (t = s.match(/\n/g))
              ? ((r += t.length), (n = s.lastIndexOf("\n")), (o = s.length - n))
              : (o += s.length),
            l && "start" !== c)
          ) {
            var u = l.parent || { raws: {} };
            (("decl" === l.type || ("atrule" === l.type && !l.nodes)) &&
              l === u.last &&
              !u.raws.semicolon) ||
              (l.source && l.source.end
                ? ((a.source = e.sourcePath(l)),
                  (a.original.line = l.source.end.line),
                  (a.original.column = l.source.end.column - 1),
                  (a.generated.line = r),
                  (a.generated.column = o - 2),
                  e.map.addMapping(a))
                : ((a.source = i),
                  (a.original.line = 1),
                  (a.original.column = 0),
                  (a.generated.line = r),
                  (a.generated.column = o - 1),
                  e.map.addMapping(a)));
          }
        });
      }),
      (t.isAnnotation = function () {
        return (
          !!this.isInline() ||
          (void 0 !== this.mapOpts.annotation
            ? this.mapOpts.annotation
            : !this.previous().length ||
              this.previous().some(function (e) {
                return e.annotation;
              }))
        );
      }),
      (t.isInline = function () {
        if (void 0 !== this.mapOpts.inline) return this.mapOpts.inline;
        var e = this.mapOpts.annotation;
        return (
          (void 0 === e || !0 === e) &&
          (!this.previous().length ||
            this.previous().some(function (e) {
              return e.inline;
            }))
        );
      }),
      (t.isMap = function () {
        return void 0 !== this.opts.map
          ? !!this.opts.map
          : this.previous().length > 0;
      }),
      (t.isSourcesContent = function () {
        return void 0 !== this.mapOpts.sourcesContent
          ? this.mapOpts.sourcesContent
          : !this.previous().length ||
              this.previous().some(function (e) {
                return e.withContent();
              });
      }),
      (t.outputFile = function () {
        return this.opts.to
          ? this.path(this.opts.to)
          : this.opts.from
            ? this.path(this.opts.from)
            : "to.css";
      }),
      (t.path = function (e) {
        if (this.mapOpts.absolute) return e;
        if (60 === e.charCodeAt(0)) return e;
        if (/^\w+:\/\//.test(e)) return e;
        var t = this.memoizedPaths.get(e);
        if (t) return t;
        var n = this.opts.to ? wt(this.opts.to) : ".";
        "string" == typeof this.mapOpts.annotation &&
          (n = wt(Tt(n, this.mapOpts.annotation)));
        var r = Et(n, e);
        return this.memoizedPaths.set(e, r), r;
      }),
      (t.previous = function () {
        var e = this;
        if (!this.previousMaps)
          if (((this.previousMaps = []), this.root))
            this.root.walk(function (t) {
              if (t.source && t.source.input.map) {
                var n = t.source.input.map;
                e.previousMaps.includes(n) || e.previousMaps.push(n);
              }
            });
          else {
            var t = new It(this.originalCSS, this.opts);
            t.map && this.previousMaps.push(t.map);
          }
        return this.previousMaps;
      }),
      (t.setSourcesContent = function () {
        var e = this,
          t = {};
        if (this.root)
          this.root.walk(function (n) {
            if (n.source) {
              var r = n.source.input.from;
              if (r && !t[r]) {
                t[r] = !0;
                var o = e.usesFileUrls ? e.toFileUrl(r) : e.toUrl(e.path(r));
                e.map.setSourceContent(o, n.source.input.css);
              }
            }
          });
        else if (this.css) {
          var n = this.opts.from
            ? this.toUrl(this.path(this.opts.from))
            : "<no source>";
          this.map.setSourceContent(n, this.css);
        }
      }),
      (t.sourcePath = function (e) {
        return this.mapOpts.from
          ? this.toUrl(this.mapOpts.from)
          : this.usesFileUrls
            ? this.toFileUrl(e.source.input.from)
            : this.toUrl(this.path(e.source.input.from));
      }),
      (t.toBase64 = function (e) {
        return Buffer
          ? Buffer.from(e).toString("base64")
          : window.btoa(unescape(encodeURIComponent(e)));
      }),
      (t.toFileUrl = function (e) {
        var t = this.memoizedFileURLs.get(e);
        if (t) return t;
        if (Ct) {
          var n = Ct(e).toString();
          return this.memoizedFileURLs.set(e, n), n;
        }
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build",
        );
      }),
      (t.toUrl = function (e) {
        var t = this.memoizedURLs.get(e);
        if (t) return t;
        "\\" === kt && (e = e.replace(/\\/g, "/"));
        var n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
        return this.memoizedURLs.set(e, n), n;
      }),
      e
    );
  })(),
  Mt = (function (e) {
    function t(t) {
      var n;
      return ((n = e.call(this, t) || this).type = "comment"), n;
    }
    return g(t, e), t;
  })(Ke),
  Pt = Mt;
Mt.default = Mt;
var Nt,
  Dt,
  jt,
  Lt,
  Ft = De.isClean,
  Ut = De.my,
  Bt = Qe,
  zt = Pt;
function Ht(e) {
  return e.map(function (e) {
    return e.nodes && (e.nodes = Ht(e.nodes)), delete e.source, e;
  });
}
function Vt(e) {
  if (((e[Ft] = !1), e.proxyOf.nodes))
    for (var t, n = w(e.proxyOf.nodes); !(t = n()).done; ) Vt(t.value);
}
var qt = (function (e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  g(t, e);
  var n = t.prototype;
  return (
    (n.append = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (var r, o = w(t); !(r = o()).done; )
        for (
          var i, a = r.value, s = w(this.normalize(a, this.last));
          !(i = s()).done;

        ) {
          var l = i.value;
          this.proxyOf.nodes.push(l);
        }
      return this.markDirty(), this;
    }),
    (n.cleanRaws = function (t) {
      if ((e.prototype.cleanRaws.call(this, t), this.nodes))
        for (var n, r = w(this.nodes); !(n = r()).done; ) n.value.cleanRaws(t);
    }),
    (n.each = function (e) {
      if (this.proxyOf.nodes) {
        for (
          var t, n, r = this.getIterator();
          this.indexes[r] < this.proxyOf.nodes.length &&
          ((t = this.indexes[r]), !1 !== (n = e(this.proxyOf.nodes[t], t)));

        )
          this.indexes[r] += 1;
        return delete this.indexes[r], n;
      }
    }),
    (n.every = function (e) {
      return this.nodes.every(e);
    }),
    (n.getIterator = function () {
      this.lastEach || (this.lastEach = 0),
        this.indexes || (this.indexes = {}),
        (this.lastEach += 1);
      var e = this.lastEach;
      return (this.indexes[e] = 0), e;
    }),
    (n.getProxyProcessor = function () {
      return {
        get: function (e, t) {
          return "proxyOf" === t
            ? e
            : e[t]
              ? "each" === t || ("string" == typeof t && t.startsWith("walk"))
                ? function () {
                    for (
                      var n = arguments.length, r = new Array(n), o = 0;
                      o < n;
                      o++
                    )
                      r[o] = arguments[o];
                    var i;
                    return (i = e)[t].apply(
                      i,
                      [].concat(
                        r.map(function (e) {
                          return "function" == typeof e
                            ? function (t, n) {
                                return e(t.toProxy(), n);
                              }
                            : e;
                        }),
                      ),
                    );
                  }
                : "every" === t || "some" === t
                  ? function (n) {
                      return e[t](function (e) {
                        for (
                          var t = arguments.length,
                            r = new Array(t > 1 ? t - 1 : 0),
                            o = 1;
                          o < t;
                          o++
                        )
                          r[o - 1] = arguments[o];
                        return n.apply(void 0, [].concat([e.toProxy()], r));
                      });
                    }
                  : "root" === t
                    ? function () {
                        return e.root().toProxy();
                      }
                    : "nodes" === t
                      ? e.nodes.map(function (e) {
                          return e.toProxy();
                        })
                      : "first" === t || "last" === t
                        ? e[t].toProxy()
                        : e[t]
              : e[t];
        },
        set: function (e, t, n) {
          return (
            e[t] === n ||
              ((e[t] = n),
              ("name" !== t && "params" !== t && "selector" !== t) ||
                e.markDirty()),
            !0
          );
        },
      };
    }),
    (n.index = function (e) {
      return "number" == typeof e
        ? e
        : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
    }),
    (n.insertAfter = function (e, t) {
      var n,
        r = this.index(e),
        o = this.normalize(t, this.proxyOf.nodes[r]).reverse();
      r = this.index(e);
      for (var i, a = w(o); !(i = a()).done; ) {
        var s = i.value;
        this.proxyOf.nodes.splice(r + 1, 0, s);
      }
      for (var l in this.indexes)
        r < (n = this.indexes[l]) && (this.indexes[l] = n + o.length);
      return this.markDirty(), this;
    }),
    (n.insertBefore = function (e, t) {
      var n,
        r = this.index(e),
        o = 0 === r && "prepend",
        i = this.normalize(t, this.proxyOf.nodes[r], o).reverse();
      r = this.index(e);
      for (var a, s = w(i); !(a = s()).done; ) {
        var l = a.value;
        this.proxyOf.nodes.splice(r, 0, l);
      }
      for (var c in this.indexes)
        r <= (n = this.indexes[c]) && (this.indexes[c] = n + i.length);
      return this.markDirty(), this;
    }),
    (n.normalize = function (e, n) {
      var r = this;
      if ("string" == typeof e) e = Ht(Nt(e).nodes);
      else if (void 0 === e) e = [];
      else if (Array.isArray(e))
        for (var o, i = w((e = e.slice(0))); !(o = i()).done; ) {
          var a = o.value;
          a.parent && a.parent.removeChild(a, "ignore");
        }
      else if ("root" === e.type && "document" !== this.type)
        for (var s, l = w((e = e.nodes.slice(0))); !(s = l()).done; ) {
          var c = s.value;
          c.parent && c.parent.removeChild(c, "ignore");
        }
      else if (e.type) e = [e];
      else if (e.prop) {
        if (void 0 === e.value)
          throw new Error("Value field is missed in node creation");
        "string" != typeof e.value && (e.value = String(e.value)),
          (e = [new Bt(e)]);
      } else if (e.selector) e = [new Dt(e)];
      else if (e.name) e = [new jt(e)];
      else {
        if (!e.text) throw new Error("Unknown node type in node creation");
        e = [new zt(e)];
      }
      var u = e.map(function (e) {
        return (
          e[Ut] || t.rebuild(e),
          (e = e.proxyOf).parent && e.parent.removeChild(e),
          e[Ft] && Vt(e),
          void 0 === e.raws.before &&
            n &&
            void 0 !== n.raws.before &&
            (e.raws.before = n.raws.before.replace(/\S/g, "")),
          (e.parent = r.proxyOf),
          e
        );
      });
      return u;
    }),
    (n.prepend = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (var r, o = w((t = t.reverse())); !(r = o()).done; ) {
        for (
          var i,
            a = r.value,
            s = this.normalize(a, this.first, "prepend").reverse(),
            l = w(s);
          !(i = l()).done;

        ) {
          var c = i.value;
          this.proxyOf.nodes.unshift(c);
        }
        for (var u in this.indexes)
          this.indexes[u] = this.indexes[u] + s.length;
      }
      return this.markDirty(), this;
    }),
    (n.push = function (e) {
      return (e.parent = this), this.proxyOf.nodes.push(e), this;
    }),
    (n.removeAll = function () {
      for (var e, t = w(this.proxyOf.nodes); !(e = t()).done; )
        e.value.parent = void 0;
      return (this.proxyOf.nodes = []), this.markDirty(), this;
    }),
    (n.removeChild = function (e) {
      var t;
      for (var n in ((e = this.index(e)),
      (this.proxyOf.nodes[e].parent = void 0),
      this.proxyOf.nodes.splice(e, 1),
      this.indexes))
        (t = this.indexes[n]) >= e && (this.indexes[n] = t - 1);
      return this.markDirty(), this;
    }),
    (n.replaceValues = function (e, t, n) {
      return (
        n || ((n = t), (t = {})),
        this.walkDecls(function (r) {
          (t.props && !t.props.includes(r.prop)) ||
            (t.fast && !r.value.includes(t.fast)) ||
            (r.value = r.value.replace(e, n));
        }),
        this.markDirty(),
        this
      );
    }),
    (n.some = function (e) {
      return this.nodes.some(e);
    }),
    (n.walk = function (e) {
      return this.each(function (t, n) {
        var r;
        try {
          r = e(t, n);
        } catch (e) {
          throw t.addToError(e);
        }
        return !1 !== r && t.walk && (r = t.walk(e)), r;
      });
    }),
    (n.walkAtRules = function (e, t) {
      return t
        ? y(e, RegExp)
          ? this.walk(function (n, r) {
              if ("atrule" === n.type && e.test(n.name)) return t(n, r);
            })
          : this.walk(function (n, r) {
              if ("atrule" === n.type && n.name === e) return t(n, r);
            })
        : ((t = e),
          this.walk(function (e, n) {
            if ("atrule" === e.type) return t(e, n);
          }));
    }),
    (n.walkComments = function (e) {
      return this.walk(function (t, n) {
        if ("comment" === t.type) return e(t, n);
      });
    }),
    (n.walkDecls = function (e, t) {
      return t
        ? y(e, RegExp)
          ? this.walk(function (n, r) {
              if ("decl" === n.type && e.test(n.prop)) return t(n, r);
            })
          : this.walk(function (n, r) {
              if ("decl" === n.type && n.prop === e) return t(n, r);
            })
        : ((t = e),
          this.walk(function (e, n) {
            if ("decl" === e.type) return t(e, n);
          }));
    }),
    (n.walkRules = function (e, t) {
      return t
        ? y(e, RegExp)
          ? this.walk(function (n, r) {
              if ("rule" === n.type && e.test(n.selector)) return t(n, r);
            })
          : this.walk(function (n, r) {
              if ("rule" === n.type && n.selector === e) return t(n, r);
            })
        : ((t = e),
          this.walk(function (e, n) {
            if ("rule" === e.type) return t(e, n);
          }));
    }),
    f(t, [
      {
        key: "first",
        get: function () {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
        },
      },
      {
        key: "last",
        get: function () {
          if (this.proxyOf.nodes)
            return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
        },
      },
    ]),
    t
  );
})(Ke);
(qt.registerParse = function (e) {
  Nt = e;
}),
  (qt.registerRule = function (e) {
    Dt = e;
  }),
  (qt.registerAtRule = function (e) {
    jt = e;
  }),
  (qt.registerRoot = function (e) {
    Lt = e;
  });
var Gt = qt;
(qt.default = qt),
  (qt.rebuild = function (e) {
    "atrule" === e.type
      ? Object.setPrototypeOf(e, jt.prototype)
      : "rule" === e.type
        ? Object.setPrototypeOf(e, Dt.prototype)
        : "decl" === e.type
          ? Object.setPrototypeOf(e, Bt.prototype)
          : "comment" === e.type
            ? Object.setPrototypeOf(e, zt.prototype)
            : "root" === e.type && Object.setPrototypeOf(e, Lt.prototype),
      (e[Ut] = !0),
      e.nodes &&
        e.nodes.forEach(function (e) {
          qt.rebuild(e);
        });
  });
var Wt,
  $t,
  Yt = (function (e) {
    function t(t) {
      var n;
      return (
        (n = e.call(this, h({ type: "document" }, t)) || this).nodes ||
          (n.nodes = []),
        n
      );
    }
    return (
      g(t, e),
      (t.prototype.toResult = function (e) {
        return void 0 === e && (e = {}), new Wt(new $t(), this, e).stringify();
      }),
      t
    );
  })(Gt);
(Yt.registerLazyResult = function (e) {
  Wt = e;
}),
  (Yt.registerProcessor = function (e) {
    $t = e;
  });
var Kt = Yt;
Yt.default = Yt;
var Zt = (function () {
    function e(e, t) {
      if (
        (void 0 === t && (t = {}),
        (this.type = "warning"),
        (this.text = e),
        t.node && t.node.source)
      ) {
        var n = t.node.rangeBy(t);
        (this.line = n.start.line),
          (this.column = n.start.column),
          (this.endLine = n.end.line),
          (this.endColumn = n.end.column);
      }
      for (var r in t) this[r] = t[r];
    }
    return (
      (e.prototype.toString = function () {
        return this.node
          ? this.node.error(this.text, {
              index: this.index,
              plugin: this.plugin,
              word: this.word,
            }).message
          : this.plugin
            ? this.plugin + ": " + this.text
            : this.text;
      }),
      e
    );
  })(),
  Qt = Zt;
Zt.default = Zt;
var Jt = Qt,
  Xt = (function () {
    function e(e, t, n) {
      (this.processor = e),
        (this.messages = []),
        (this.root = t),
        (this.opts = n),
        (this.css = void 0),
        (this.map = void 0);
    }
    var t = e.prototype;
    return (
      (t.toString = function () {
        return this.css;
      }),
      (t.warn = function (e, t) {
        void 0 === t && (t = {}),
          t.plugin ||
            (this.lastPlugin &&
              this.lastPlugin.postcssPlugin &&
              (t.plugin = this.lastPlugin.postcssPlugin));
        var n = new Jt(e, t);
        return this.messages.push(n), n;
      }),
      (t.warnings = function () {
        return this.messages.filter(function (e) {
          return "warning" === e.type;
        });
      }),
      f(e, [
        {
          key: "content",
          get: function () {
            return this.css;
          },
        },
      ]),
      e
    );
  })(),
  en = Xt;
Xt.default = Xt;
var tn = "'".charCodeAt(0),
  nn = '"'.charCodeAt(0),
  rn = "\\".charCodeAt(0),
  on = "/".charCodeAt(0),
  an = "\n".charCodeAt(0),
  sn = " ".charCodeAt(0),
  ln = "\f".charCodeAt(0),
  cn = "\t".charCodeAt(0),
  un = "\r".charCodeAt(0),
  dn = "[".charCodeAt(0),
  pn = "]".charCodeAt(0),
  fn = "(".charCodeAt(0),
  hn = ")".charCodeAt(0),
  mn = "{".charCodeAt(0),
  gn = "}".charCodeAt(0),
  yn = ";".charCodeAt(0),
  vn = "*".charCodeAt(0),
  bn = ":".charCodeAt(0),
  Sn = "@".charCodeAt(0),
  _n = /[\t\n\f\r "#'()/;[\\\]{}]/g,
  xn = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
  wn = /.[\r\n"'(/\\]/,
  En = /[\da-f]/i,
  Tn = Gt,
  kn = (function (e) {
    function t(t) {
      var n;
      return ((n = e.call(this, t) || this).type = "atrule"), n;
    }
    g(t, e);
    var n = t.prototype;
    return (
      (n.append = function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        var o;
        return (
          this.proxyOf.nodes || (this.nodes = []),
          (o = e.prototype.append).call.apply(o, [].concat([this], n))
        );
      }),
      (n.prepend = function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        var o;
        return (
          this.proxyOf.nodes || (this.nodes = []),
          (o = e.prototype.prepend).call.apply(o, [].concat([this], n))
        );
      }),
      t
    );
  })(Tn),
  Cn = kn;
(kn.default = kn), Tn.registerAtRule(kn);
var In,
  An,
  On = Gt,
  Rn = (function (e) {
    function t(t) {
      var n;
      return (
        ((n = e.call(this, t) || this).type = "root"),
        n.nodes || (n.nodes = []),
        n
      );
    }
    g(t, e);
    var n = t.prototype;
    return (
      (n.normalize = function (t, n, r) {
        var o = e.prototype.normalize.call(this, t);
        if (n)
          if ("prepend" === r)
            this.nodes.length > 1
              ? (n.raws.before = this.nodes[1].raws.before)
              : delete n.raws.before;
          else if (this.first !== n)
            for (var i, a = w(o); !(i = a()).done; )
              i.value.raws.before = n.raws.before;
        return o;
      }),
      (n.removeChild = function (t, n) {
        var r = this.index(t);
        return (
          !n &&
            0 === r &&
            this.nodes.length > 1 &&
            (this.nodes[1].raws.before = this.nodes[r].raws.before),
          e.prototype.removeChild.call(this, t)
        );
      }),
      (n.toResult = function (e) {
        return void 0 === e && (e = {}), new In(new An(), this, e).stringify();
      }),
      t
    );
  })(On);
(Rn.registerLazyResult = function (e) {
  In = e;
}),
  (Rn.registerProcessor = function (e) {
    An = e;
  });
var Mn = Rn;
(Rn.default = Rn), On.registerRoot(Rn);
var Pn = {
    comma: function (e) {
      return Pn.split(e, [","], !0);
    },
    space: function (e) {
      return Pn.split(e, [" ", "\n", "\t"]);
    },
    split: function (e, t, n) {
      for (
        var r, o = [], i = "", a = !1, s = 0, l = !1, c = "", u = !1, d = w(e);
        !(r = d()).done;

      ) {
        var p = r.value;
        u
          ? (u = !1)
          : "\\" === p
            ? (u = !0)
            : l
              ? p === c && (l = !1)
              : '"' === p || "'" === p
                ? ((l = !0), (c = p))
                : "(" === p
                  ? (s += 1)
                  : ")" === p
                    ? s > 0 && (s -= 1)
                    : 0 === s && t.includes(p) && (a = !0),
          a ? ("" !== i && o.push(i.trim()), (i = ""), (a = !1)) : (i += p);
      }
      return (n || "" !== i) && o.push(i.trim()), o;
    },
  },
  Nn = Pn;
Pn.default = Pn;
var Dn = Gt,
  jn = Nn,
  Ln = (function (e) {
    function t(t) {
      var n;
      return (
        ((n = e.call(this, t) || this).type = "rule"),
        n.nodes || (n.nodes = []),
        n
      );
    }
    return (
      g(t, e),
      f(t, [
        {
          key: "selectors",
          get: function () {
            return jn.comma(this.selector);
          },
          set: function (e) {
            var t = this.selector ? this.selector.match(/,\s*/) : null,
              n = t ? t[0] : "," + this.raw("between", "beforeOpen");
            this.selector = e.join(n);
          },
        },
      ]),
      t
    );
  })(Dn),
  Fn = Ln;
(Ln.default = Ln), Dn.registerRule(Ln);
var Un = Qe,
  Bn = Pt,
  zn = Cn,
  Hn = Mn,
  Vn = Fn,
  qn = { empty: !0, space: !0 },
  Gn = (function () {
    function e(e) {
      (this.input = e),
        (this.root = new Hn()),
        (this.current = this.root),
        (this.spaces = ""),
        (this.semicolon = !1),
        this.createTokenizer(),
        (this.root.source = {
          input: e,
          start: { column: 1, line: 1, offset: 0 },
        });
    }
    var t = e.prototype;
    return (
      (t.atrule = function (e) {
        var t,
          n,
          r,
          o = new zn();
        (o.name = e[1].slice(1)),
          "" === o.name && this.unnamedAtrule(o, e),
          this.init(o, e[2]);
        for (
          var i = !1, a = !1, s = [], l = [];
          !this.tokenizer.endOfFile();

        ) {
          if (
            ("(" === (t = (e = this.tokenizer.nextToken())[0]) || "[" === t
              ? l.push("(" === t ? ")" : "]")
              : "{" === t && l.length > 0
                ? l.push("}")
                : t === l[l.length - 1] && l.pop(),
            0 === l.length)
          ) {
            if (";" === t) {
              (o.source.end = this.getPosition(e[2])),
                o.source.end.offset++,
                (this.semicolon = !0);
              break;
            }
            if ("{" === t) {
              a = !0;
              break;
            }
            if ("}" === t) {
              if (s.length > 0) {
                for (n = s[(r = s.length - 1)]; n && "space" === n[0]; )
                  n = s[--r];
                n &&
                  ((o.source.end = this.getPosition(n[3] || n[2])),
                  o.source.end.offset++);
              }
              this.end(e);
              break;
            }
            s.push(e);
          } else s.push(e);
          if (this.tokenizer.endOfFile()) {
            i = !0;
            break;
          }
        }
        (o.raws.between = this.spacesAndCommentsFromEnd(s)),
          s.length
            ? ((o.raws.afterName = this.spacesAndCommentsFromStart(s)),
              this.raw(o, "params", s),
              i &&
                ((e = s[s.length - 1]),
                (o.source.end = this.getPosition(e[3] || e[2])),
                o.source.end.offset++,
                (this.spaces = o.raws.between),
                (o.raws.between = "")))
            : ((o.raws.afterName = ""), (o.params = "")),
          a && ((o.nodes = []), (this.current = o));
      }),
      (t.checkMissedSemicolon = function (e) {
        var t = this.colon(e);
        if (!1 !== t) {
          for (
            var n, r = 0, o = t - 1;
            o >= 0 && ("space" === (n = e[o])[0] || 2 !== (r += 1));
            o--
          );
          throw this.input.error(
            "Missed semicolon",
            "word" === n[0] ? n[3] + 1 : n[2],
          );
        }
      }),
      (t.colon = function (e) {
        for (var t, n, r, o, i = 0, a = w(e.entries()); !(o = a()).done; ) {
          var s = o.value,
            l = s[0];
          if (
            ("(" === (n = (t = s[1])[0]) && (i += 1),
            ")" === n && (i -= 1),
            0 === i && ":" === n)
          ) {
            if (r) {
              if ("word" === r[0] && "progid" === r[1]) continue;
              return l;
            }
            this.doubleColon(t);
          }
          r = t;
        }
        return !1;
      }),
      (t.comment = function (e) {
        var t = new Bn();
        this.init(t, e[2]),
          (t.source.end = this.getPosition(e[3] || e[2])),
          t.source.end.offset++;
        var n = e[1].slice(2, -2);
        if (/^\s*$/.test(n))
          (t.text = ""), (t.raws.left = n), (t.raws.right = "");
        else {
          var r = n.match(/^(\s*)([^]*\S)(\s*)$/);
          (t.text = r[2]), (t.raws.left = r[1]), (t.raws.right = r[3]);
        }
      }),
      (t.createTokenizer = function () {
        this.tokenizer = (function (e, t) {
          void 0 === t && (t = {});
          var n,
            r,
            o,
            i,
            a,
            s,
            l,
            c,
            u,
            d,
            p = e.css.valueOf(),
            f = t.ignoreErrors,
            h = p.length,
            m = 0,
            g = [],
            y = [];
          function v(t) {
            throw e.error("Unclosed " + t, m);
          }
          return {
            back: function (e) {
              y.push(e);
            },
            endOfFile: function () {
              return 0 === y.length && m >= h;
            },
            nextToken: function (e) {
              if (y.length) return y.pop();
              if (!(m >= h)) {
                var t = !!e && e.ignoreUnclosed;
                switch ((n = p.charCodeAt(m))) {
                  case an:
                  case sn:
                  case cn:
                  case un:
                  case ln:
                    r = m;
                    do {
                      (r += 1), (n = p.charCodeAt(r));
                    } while (
                      n === sn ||
                      n === an ||
                      n === cn ||
                      n === un ||
                      n === ln
                    );
                    (d = ["space", p.slice(m, r)]), (m = r - 1);
                    break;
                  case dn:
                  case pn:
                  case mn:
                  case gn:
                  case bn:
                  case yn:
                  case hn:
                    var b = String.fromCharCode(n);
                    d = [b, b, m];
                    break;
                  case fn:
                    if (
                      ((c = g.length ? g.pop()[1] : ""),
                      (u = p.charCodeAt(m + 1)),
                      "url" === c &&
                        u !== tn &&
                        u !== nn &&
                        u !== sn &&
                        u !== an &&
                        u !== cn &&
                        u !== ln &&
                        u !== un)
                    ) {
                      r = m;
                      do {
                        if (((s = !1), -1 === (r = p.indexOf(")", r + 1)))) {
                          if (f || t) {
                            r = m;
                            break;
                          }
                          v("bracket");
                        }
                        for (l = r; p.charCodeAt(l - 1) === rn; )
                          (l -= 1), (s = !s);
                      } while (s);
                      (d = ["brackets", p.slice(m, r + 1), m, r]), (m = r);
                    } else
                      (r = p.indexOf(")", m + 1)),
                        (i = p.slice(m, r + 1)),
                        -1 === r || wn.test(i)
                          ? (d = ["(", "(", m])
                          : ((d = ["brackets", i, m, r]), (m = r));
                    break;
                  case tn:
                  case nn:
                    (o = n === tn ? "'" : '"'), (r = m);
                    do {
                      if (((s = !1), -1 === (r = p.indexOf(o, r + 1)))) {
                        if (f || t) {
                          r = m + 1;
                          break;
                        }
                        v("string");
                      }
                      for (l = r; p.charCodeAt(l - 1) === rn; )
                        (l -= 1), (s = !s);
                    } while (s);
                    (d = ["string", p.slice(m, r + 1), m, r]), (m = r);
                    break;
                  case Sn:
                    (_n.lastIndex = m + 1),
                      _n.test(p),
                      (r =
                        0 === _n.lastIndex ? p.length - 1 : _n.lastIndex - 2),
                      (d = ["at-word", p.slice(m, r + 1), m, r]),
                      (m = r);
                    break;
                  case rn:
                    for (r = m, a = !0; p.charCodeAt(r + 1) === rn; )
                      (r += 1), (a = !a);
                    if (
                      ((n = p.charCodeAt(r + 1)),
                      a &&
                        n !== on &&
                        n !== sn &&
                        n !== an &&
                        n !== cn &&
                        n !== un &&
                        n !== ln &&
                        ((r += 1), En.test(p.charAt(r))))
                    ) {
                      for (; En.test(p.charAt(r + 1)); ) r += 1;
                      p.charCodeAt(r + 1) === sn && (r += 1);
                    }
                    (d = ["word", p.slice(m, r + 1), m, r]), (m = r);
                    break;
                  default:
                    n === on && p.charCodeAt(m + 1) === vn
                      ? (0 === (r = p.indexOf("*/", m + 2) + 1) &&
                          (f || t ? (r = p.length) : v("comment")),
                        (d = ["comment", p.slice(m, r + 1), m, r]),
                        (m = r))
                      : ((xn.lastIndex = m + 1),
                        xn.test(p),
                        (r =
                          0 === xn.lastIndex ? p.length - 1 : xn.lastIndex - 2),
                        (d = ["word", p.slice(m, r + 1), m, r]),
                        g.push(d),
                        (m = r));
                }
                return m++, d;
              }
            },
            position: function () {
              return m;
            },
          };
        })(this.input);
      }),
      (t.decl = function (e, t) {
        var n = new Un();
        this.init(n, e[0][2]);
        var r,
          o = e[e.length - 1];
        for (
          ";" === o[0] && ((this.semicolon = !0), e.pop()),
            n.source.end = this.getPosition(
              o[3] ||
                o[2] ||
                (function (e) {
                  for (var t = e.length - 1; t >= 0; t--) {
                    var n = e[t],
                      r = n[3] || n[2];
                    if (r) return r;
                  }
                })(e),
            ),
            n.source.end.offset++;
          "word" !== e[0][0];

        )
          1 === e.length && this.unknownWord(e),
            (n.raws.before += e.shift()[1]);
        for (
          n.source.start = this.getPosition(e[0][2]), n.prop = "";
          e.length;

        ) {
          var i = e[0][0];
          if (":" === i || "space" === i || "comment" === i) break;
          n.prop += e.shift()[1];
        }
        for (n.raws.between = ""; e.length; ) {
          if (":" === (r = e.shift())[0]) {
            n.raws.between += r[1];
            break;
          }
          "word" === r[0] && /\w/.test(r[1]) && this.unknownWord([r]),
            (n.raws.between += r[1]);
        }
        ("_" !== n.prop[0] && "*" !== n.prop[0]) ||
          ((n.raws.before += n.prop[0]), (n.prop = n.prop.slice(1)));
        for (
          var a, s = [];
          e.length && ("space" === (a = e[0][0]) || "comment" === a);

        )
          s.push(e.shift());
        this.precheckMissedSemicolon(e);
        for (var l = e.length - 1; l >= 0; l--) {
          if ("!important" === (r = e[l])[1].toLowerCase()) {
            n.important = !0;
            var c = this.stringFrom(e, l);
            " !important" !== (c = this.spacesFromEnd(e) + c) &&
              (n.raws.important = c);
            break;
          }
          if ("important" === r[1].toLowerCase()) {
            for (var u = e.slice(0), d = "", p = l; p > 0; p--) {
              var f = u[p][0];
              if (0 === d.trim().indexOf("!") && "space" !== f) break;
              d = u.pop()[1] + d;
            }
            0 === d.trim().indexOf("!") &&
              ((n.important = !0), (n.raws.important = d), (e = u));
          }
          if ("space" !== r[0] && "comment" !== r[0]) break;
        }
        var h = e.some(function (e) {
          return "space" !== e[0] && "comment" !== e[0];
        });
        h &&
          ((n.raws.between += s
            .map(function (e) {
              return e[1];
            })
            .join("")),
          (s = [])),
          this.raw(n, "value", s.concat(e), t),
          n.value.includes(":") && !t && this.checkMissedSemicolon(e);
      }),
      (t.doubleColon = function (e) {
        throw this.input.error(
          "Double colon",
          { offset: e[2] },
          { offset: e[2] + e[1].length },
        );
      }),
      (t.emptyRule = function (e) {
        var t = new Vn();
        this.init(t, e[2]),
          (t.selector = ""),
          (t.raws.between = ""),
          (this.current = t);
      }),
      (t.end = function (e) {
        this.current.nodes &&
          this.current.nodes.length &&
          (this.current.raws.semicolon = this.semicolon),
          (this.semicolon = !1),
          (this.current.raws.after =
            (this.current.raws.after || "") + this.spaces),
          (this.spaces = ""),
          this.current.parent
            ? ((this.current.source.end = this.getPosition(e[2])),
              this.current.source.end.offset++,
              (this.current = this.current.parent))
            : this.unexpectedClose(e);
      }),
      (t.endFile = function () {
        this.current.parent && this.unclosedBlock(),
          this.current.nodes &&
            this.current.nodes.length &&
            (this.current.raws.semicolon = this.semicolon),
          (this.current.raws.after =
            (this.current.raws.after || "") + this.spaces),
          (this.root.source.end = this.getPosition(this.tokenizer.position()));
      }),
      (t.freeSemicolon = function (e) {
        if (((this.spaces += e[1]), this.current.nodes)) {
          var t = this.current.nodes[this.current.nodes.length - 1];
          t &&
            "rule" === t.type &&
            !t.raws.ownSemicolon &&
            ((t.raws.ownSemicolon = this.spaces), (this.spaces = ""));
        }
      }),
      (t.getPosition = function (e) {
        var t = this.input.fromOffset(e);
        return { column: t.col, line: t.line, offset: e };
      }),
      (t.init = function (e, t) {
        this.current.push(e),
          (e.source = {
            input: this.input,
            start: this.getPosition(t),
          }),
          (e.raws.before = this.spaces),
          (this.spaces = ""),
          "comment" !== e.type && (this.semicolon = !1);
      }),
      (t.other = function (e) {
        for (
          var t = !1,
            n = null,
            r = !1,
            o = null,
            i = [],
            a = e[1].startsWith("--"),
            s = [],
            l = e;
          l;

        ) {
          if (((n = l[0]), s.push(l), "(" === n || "[" === n))
            o || (o = l), i.push("(" === n ? ")" : "]");
          else if (a && r && "{" === n) o || (o = l), i.push("}");
          else if (0 === i.length) {
            if (";" === n) {
              if (r) return void this.decl(s, a);
              break;
            }
            if ("{" === n) return void this.rule(s);
            if ("}" === n) {
              this.tokenizer.back(s.pop()), (t = !0);
              break;
            }
            ":" === n && (r = !0);
          } else
            n === i[i.length - 1] && (i.pop(), 0 === i.length && (o = null));
          l = this.tokenizer.nextToken();
        }
        if (
          (this.tokenizer.endOfFile() && (t = !0),
          i.length > 0 && this.unclosedBracket(o),
          t && r)
        ) {
          if (!a)
            for (
              ;
              s.length &&
              ("space" === (l = s[s.length - 1][0]) || "comment" === l);

            )
              this.tokenizer.back(s.pop());
          this.decl(s, a);
        } else this.unknownWord(s);
      }),
      (t.parse = function () {
        for (var e; !this.tokenizer.endOfFile(); )
          switch ((e = this.tokenizer.nextToken())[0]) {
            case "space":
              this.spaces += e[1];
              break;
            case ";":
              this.freeSemicolon(e);
              break;
            case "}":
              this.end(e);
              break;
            case "comment":
              this.comment(e);
              break;
            case "at-word":
              this.atrule(e);
              break;
            case "{":
              this.emptyRule(e);
              break;
            default:
              this.other(e);
          }
        this.endFile();
      }),
      (t.precheckMissedSemicolon = function () {}),
      (t.raw = function (e, t, n, r) {
        for (var o, i, a, s, l = n.length, c = "", u = !0, d = 0; d < l; d += 1)
          "space" !== (i = (o = n[d])[0]) || d !== l - 1 || r
            ? "comment" === i
              ? ((s = n[d - 1] ? n[d - 1][0] : "empty"),
                (a = n[d + 1] ? n[d + 1][0] : "empty"),
                qn[s] || qn[a] || "," === c.slice(-1) ? (u = !1) : (c += o[1]))
              : (c += o[1])
            : (u = !1);
        if (!u) {
          var p = n.reduce(function (e, t) {
            return e + t[1];
          }, "");
          e.raws[t] = { raw: p, value: c };
        }
        e[t] = c;
      }),
      (t.rule = function (e) {
        e.pop();
        var t = new Vn();
        this.init(t, e[0][2]),
          (t.raws.between = this.spacesAndCommentsFromEnd(e)),
          this.raw(t, "selector", e),
          (this.current = t);
      }),
      (t.spacesAndCommentsFromEnd = function (e) {
        for (
          var t, n = "";
          e.length && ("space" === (t = e[e.length - 1][0]) || "comment" === t);

        )
          n = e.pop()[1] + n;
        return n;
      }),
      (t.spacesAndCommentsFromStart = function (e) {
        for (
          var t, n = "";
          e.length && ("space" === (t = e[0][0]) || "comment" === t);

        )
          n += e.shift()[1];
        return n;
      }),
      (t.spacesFromEnd = function (e) {
        for (var t = ""; e.length && "space" === e[e.length - 1][0]; )
          t = e.pop()[1] + t;
        return t;
      }),
      (t.stringFrom = function (e, t) {
        for (var n = "", r = t; r < e.length; r++) n += e[r][1];
        return e.splice(t, e.length - t), n;
      }),
      (t.unclosedBlock = function () {
        var e = this.current.source.start;
        throw this.input.error("Unclosed block", e.line, e.column);
      }),
      (t.unclosedBracket = function (e) {
        throw this.input.error(
          "Unclosed bracket",
          { offset: e[2] },
          { offset: e[2] + 1 },
        );
      }),
      (t.unexpectedClose = function (e) {
        throw this.input.error(
          "Unexpected }",
          { offset: e[2] },
          { offset: e[2] + 1 },
        );
      }),
      (t.unknownWord = function (e) {
        throw this.input.error(
          "Unknown word",
          { offset: e[0][2] },
          { offset: e[0][2] + e[0][1].length },
        );
      }),
      (t.unnamedAtrule = function (e, t) {
        throw this.input.error(
          "At-rule without name",
          { offset: t[2] },
          { offset: t[2] + t[1].length },
        );
      }),
      e
    );
  })(),
  Wn = Gt,
  $n = Gn,
  Yn = St;
function Kn(e, t) {
  var n = new Yn(e, t),
    r = new $n(n);
  try {
    r.parse();
  } catch (e) {
    throw e;
  }
  return r.root;
}
var Zn = Kn;
(Kn.default = Kn), Wn.registerParse(Kn);
var Qn = De.isClean,
  Jn = De.my,
  Xn = Rt,
  er = ze,
  tr = Gt,
  nr = Kt,
  rr = en,
  or = Zn,
  ir = Mn,
  ar = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule",
  },
  sr = {
    AtRule: !0,
    AtRuleExit: !0,
    Comment: !0,
    CommentExit: !0,
    Declaration: !0,
    DeclarationExit: !0,
    Document: !0,
    DocumentExit: !0,
    Once: !0,
    OnceExit: !0,
    postcssPlugin: !0,
    prepare: !0,
    Root: !0,
    RootExit: !0,
    Rule: !0,
    RuleExit: !0,
  },
  lr = { Once: !0, postcssPlugin: !0, prepare: !0 };
function cr(e) {
  return (
    "object" === (void 0 === e ? "undefined" : S(e)) &&
    "function" == typeof e.then
  );
}
function ur(e) {
  var t = !1,
    n = ar[e.type];
  return (
    "decl" === e.type
      ? (t = e.prop.toLowerCase())
      : "atrule" === e.type && (t = e.name.toLowerCase()),
    t && e.append
      ? [n, n + "-" + t, 0, n + "Exit", n + "Exit-" + t]
      : t
        ? [n, n + "-" + t, n + "Exit", n + "Exit-" + t]
        : e.append
          ? [n, 0, n + "Exit"]
          : [n, n + "Exit"]
  );
}
function dr(e) {
  return {
    eventIndex: 0,
    events:
      "document" === e.type
        ? ["Document", 0, "DocumentExit"]
        : "root" === e.type
          ? ["Root", 0, "RootExit"]
          : ur(e),
    iterator: 0,
    node: e,
    visitorIndex: 0,
    visitors: [],
  };
}
function pr(e) {
  return (
    (e[Qn] = !1),
    e.nodes &&
      e.nodes.forEach(function (e) {
        return pr(e);
      }),
    e
  );
}
var fr = {},
  hr = (function () {
    function e(t, n, r) {
      var o,
        i = this;
      if (
        ((this.stringified = !1),
        (this.processed = !1),
        "object" !== (void 0 === n ? "undefined" : S(n)) ||
          null === n ||
          ("root" !== n.type && "document" !== n.type))
      )
        if (y(n, e) || y(n, rr))
          (o = pr(n.root)),
            n.map &&
              (void 0 === r.map && (r.map = {}),
              r.map.inline || (r.map.inline = !1),
              (r.map.prev = n.map));
        else {
          var a = or;
          r.syntax && (a = r.syntax.parse),
            r.parser && (a = r.parser),
            a.parse && (a = a.parse);
          try {
            o = a(n, r);
          } catch (e) {
            (this.processed = !0), (this.error = e);
          }
          o && !o[Jn] && tr.rebuild(o);
        }
      else o = pr(n);
      (this.result = new rr(t, o, r)),
        (this.helpers = h({}, fr, {
          postcss: fr,
          result: this.result,
        })),
        (this.plugins = this.processor.plugins.map(function (e) {
          return "object" === (void 0 === e ? "undefined" : S(e)) && e.prepare
            ? h({}, e, e.prepare(i.result))
            : e;
        }));
    }
    var t = e.prototype;
    return (
      (t.async = function () {
        return this.error
          ? Promise.reject(this.error)
          : this.processed
            ? Promise.resolve(this.result)
            : (this.processing || (this.processing = this.runAsync()),
              this.processing);
      }),
      (t.catch = function (e) {
        return this.async().catch(e);
      }),
      (t.finally = function (e) {
        return this.async().then(e, e);
      }),
      (t.getAsyncError = function () {
        throw new Error("Use process(css).then(cb) to work with async plugins");
      }),
      (t.handleError = function (e, t) {
        var n = this.result.lastPlugin;
        try {
          t && t.addToError(e),
            (this.error = e),
            "CssSyntaxError" !== e.name || e.plugin
              ? n.postcssVersion
              : ((e.plugin = n.postcssPlugin), e.setMessage());
        } catch (e) {
          console && console.error;
        }
        return e;
      }),
      (t.prepareVisitors = function () {
        var e = this;
        this.listeners = {};
        for (
          var t,
            n = function (t, n, r) {
              e.listeners[n] || (e.listeners[n] = []),
                e.listeners[n].push([t, r]);
            },
            r = w(this.plugins);
          !(t = r()).done;

        ) {
          var o = t.value;
          if ("object" === (void 0 === o ? "undefined" : S(o)))
            for (var i in o) {
              if (!sr[i] && /^[A-Z]/.test(i))
                throw new Error(
                  "Unknown event " +
                    i +
                    " in " +
                    o.postcssPlugin +
                    ". Try to update PostCSS (" +
                    this.processor.version +
                    " now).",
                );
              if (!lr[i])
                if ("object" === S(o[i]))
                  for (var a in o[i])
                    n(o, "*" === a ? i : i + "-" + a.toLowerCase(), o[i][a]);
                else "function" == typeof o[i] && n(o, i, o[i]);
            }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
      }),
      (t.runAsync = function () {
        var e = this;
        return d(function () {
          var t, n, r, o, i, a, s, l, c, u, d, p;
          return E(this, function (f) {
            switch (f.label) {
              case 0:
                (e.plugin = 0), (t = 0), (f.label = 1);
              case 1:
                if (!(t < e.plugins.length)) return [3, 6];
                if (((n = e.plugins[t]), !cr((r = e.runOnRoot(n)))))
                  return [3, 5];
                f.label = 2;
              case 2:
                return f.trys.push([2, 4, , 5]), [4, r];
              case 3:
                return f.sent(), [3, 5];
              case 4:
                throw ((o = f.sent()), e.handleError(o));
              case 5:
                return t++, [3, 1];
              case 6:
                if ((e.prepareVisitors(), !e.hasListener)) return [3, 18];
                (i = e.result.root), (f.label = 7);
              case 7:
                if (i[Qn]) return [3, 14];
                (i[Qn] = !0), (a = [dr(i)]), (f.label = 8);
              case 8:
                if (!(a.length > 0)) return [3, 13];
                if (!cr((s = e.visitTick(a)))) return [3, 12];
                f.label = 9;
              case 9:
                return f.trys.push([9, 11, , 12]), [4, s];
              case 10:
                return f.sent(), [3, 12];
              case 11:
                throw (
                  ((l = f.sent()),
                  (c = a[a.length - 1].node),
                  e.handleError(l, c))
                );
              case 12:
                return [3, 8];
              case 13:
                return [3, 7];
              case 14:
                if (!e.listeners.OnceExit) return [3, 18];
                (u = function () {
                  var t, n, r, o, a;
                  return E(this, function (s) {
                    switch (s.label) {
                      case 0:
                        (t = p.value),
                          (n = t[0]),
                          (r = t[1]),
                          (e.result.lastPlugin = n),
                          (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 6, , 7]),
                          "document" !== i.type
                            ? [3, 3]
                            : ((o = i.nodes.map(function (t) {
                                return r(t, e.helpers);
                              })),
                              [4, Promise.all(o)])
                        );
                      case 2:
                        return s.sent(), [3, 5];
                      case 3:
                        return [4, r(i, e.helpers)];
                      case 4:
                        s.sent(), (s.label = 5);
                      case 5:
                        return [3, 7];
                      case 6:
                        throw ((a = s.sent()), e.handleError(a));
                      case 7:
                        return [2];
                    }
                  });
                }),
                  (d = w(e.listeners.OnceExit)),
                  (f.label = 15);
              case 15:
                return (p = d()).done ? [3, 18] : [5, T(u())];
              case 16:
                f.sent(), (f.label = 17);
              case 17:
                return [3, 15];
              case 18:
                return (e.processed = !0), [2, e.stringify()];
            }
          });
        })();
      }),
      (t.runOnRoot = function (e) {
        var t = this;
        this.result.lastPlugin = e;
        try {
          if ("object" === (void 0 === e ? "undefined" : S(e)) && e.Once) {
            if ("document" === this.result.root.type) {
              var n = this.result.root.nodes.map(function (n) {
                return e.Once(n, t.helpers);
              });
              return cr(n[0]) ? Promise.all(n) : n;
            }
            return e.Once(this.result.root, this.helpers);
          }
          if ("function" == typeof e) return e(this.result.root, this.result);
        } catch (e) {
          throw this.handleError(e);
        }
      }),
      (t.stringify = function () {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        (this.stringified = !0), this.sync();
        var e = this.result.opts,
          t = er;
        e.syntax && (t = e.syntax.stringify),
          e.stringifier && (t = e.stringifier),
          t.stringify && (t = t.stringify);
        var n = new Xn(t, this.result.root, this.result.opts).generate();
        return (this.result.css = n[0]), (this.result.map = n[1]), this.result;
      }),
      (t.sync = function () {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        if (((this.processed = !0), this.processing))
          throw this.getAsyncError();
        for (var e, t = w(this.plugins); !(e = t()).done; ) {
          var n = e.value;
          if (cr(this.runOnRoot(n))) throw this.getAsyncError();
        }
        if ((this.prepareVisitors(), this.hasListener)) {
          for (var r = this.result.root; !r[Qn]; )
            (r[Qn] = !0), this.walkSync(r);
          if (this.listeners.OnceExit)
            if ("document" === r.type)
              for (var o, i = w(r.nodes); !(o = i()).done; ) {
                var a = o.value;
                this.visitSync(this.listeners.OnceExit, a);
              }
            else this.visitSync(this.listeners.OnceExit, r);
        }
        return this.result;
      }),
      (t.then = function (e, t) {
        return this.async().then(e, t);
      }),
      (t.toString = function () {
        return this.css;
      }),
      (t.visitSync = function (e, t) {
        for (var n, r = w(e); !(n = r()).done; ) {
          var o = n.value,
            i = o[0],
            a = o[1];
          this.result.lastPlugin = i;
          var s = void 0;
          try {
            s = a(t, this.helpers);
          } catch (e) {
            throw this.handleError(e, t.proxyOf);
          }
          if ("root" !== t.type && "document" !== t.type && !t.parent)
            return !0;
          if (cr(s)) throw this.getAsyncError();
        }
      }),
      (t.visitTick = function (e) {
        var t = e[e.length - 1],
          n = t.node,
          r = t.visitors;
        if ("root" === n.type || "document" === n.type || n.parent) {
          if (r.length > 0 && t.visitorIndex < r.length) {
            var o = r[t.visitorIndex],
              i = o[0],
              a = o[1];
            (t.visitorIndex += 1),
              t.visitorIndex === r.length &&
                ((t.visitors = []), (t.visitorIndex = 0)),
              (this.result.lastPlugin = i);
            try {
              return a(n.toProxy(), this.helpers);
            } catch (e) {
              throw this.handleError(e, n);
            }
          }
          if (0 !== t.iterator) {
            for (var s, l = t.iterator; (s = n.nodes[n.indexes[l]]); )
              if (((n.indexes[l] += 1), !s[Qn]))
                return (s[Qn] = !0), void e.push(dr(s));
            (t.iterator = 0), delete n.indexes[l];
          }
          for (var c = t.events; t.eventIndex < c.length; ) {
            var u = c[t.eventIndex];
            if (((t.eventIndex += 1), 0 === u))
              return void (
                n.nodes &&
                n.nodes.length &&
                ((n[Qn] = !0), (t.iterator = n.getIterator()))
              );
            if (this.listeners[u]) return void (t.visitors = this.listeners[u]);
          }
          e.pop();
        } else e.pop();
      }),
      (t.walkSync = function (e) {
        var t = this;
        e[Qn] = !0;
        for (var n, r = w(ur(e)); !(n = r()).done; ) {
          var o = n.value;
          if (0 === o)
            e.nodes &&
              e.each(function (e) {
                e[Qn] || t.walkSync(e);
              });
          else {
            var i = this.listeners[o];
            if (i && this.visitSync(i, e.toProxy())) return;
          }
        }
      }),
      (t.warnings = function () {
        return this.sync().warnings();
      }),
      f(e, [
        {
          key: "content",
          get: function () {
            return this.stringify().content;
          },
        },
        {
          key: "css",
          get: function () {
            return this.stringify().css;
          },
        },
        {
          key: "map",
          get: function () {
            return this.stringify().map;
          },
        },
        {
          key: "messages",
          get: function () {
            return this.sync().messages;
          },
        },
        {
          key: "opts",
          get: function () {
            return this.result.opts;
          },
        },
        {
          key: "processor",
          get: function () {
            return this.result.processor;
          },
        },
        {
          key: "root",
          get: function () {
            return this.sync().root;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "LazyResult";
          },
        },
      ]),
      e
    );
  })();
hr.registerPostcss = function (e) {
  fr = e;
};
var mr = hr;
(hr.default = hr), ir.registerLazyResult(hr), nr.registerLazyResult(hr);
var gr = Rt,
  yr = ze,
  vr = Zn,
  br = en,
  Sr = (function () {
    function e(e, t, n) {
      var r;
      (t = t.toString()),
        (this.stringified = !1),
        (this._processor = e),
        (this._css = t),
        (this._opts = n),
        (this._map = void 0);
      var o = yr;
      (this.result = new br(this._processor, r, this._opts)),
        (this.result.css = t);
      var i = this;
      Object.defineProperty(this.result, "root", {
        get: function () {
          return i.root;
        },
      });
      var a = new gr(o, r, this._opts, t);
      if (a.isMap()) {
        var s = a.generate(),
          l = s[0],
          c = s[1];
        l && (this.result.css = l), c && (this.result.map = c);
      } else a.clearAnnotation(), (this.result.css = a.css);
    }
    var t = e.prototype;
    return (
      (t.async = function () {
        return this.error
          ? Promise.reject(this.error)
          : Promise.resolve(this.result);
      }),
      (t.catch = function (e) {
        return this.async().catch(e);
      }),
      (t.finally = function (e) {
        return this.async().then(e, e);
      }),
      (t.sync = function () {
        if (this.error) throw this.error;
        return this.result;
      }),
      (t.then = function (e, t) {
        return this.async().then(e, t);
      }),
      (t.toString = function () {
        return this._css;
      }),
      (t.warnings = function () {
        return [];
      }),
      f(e, [
        {
          key: "content",
          get: function () {
            return this.result.css;
          },
        },
        {
          key: "css",
          get: function () {
            return this.result.css;
          },
        },
        {
          key: "map",
          get: function () {
            return this.result.map;
          },
        },
        {
          key: "messages",
          get: function () {
            return [];
          },
        },
        {
          key: "opts",
          get: function () {
            return this.result.opts;
          },
        },
        {
          key: "processor",
          get: function () {
            return this.result.processor;
          },
        },
        {
          key: "root",
          get: function () {
            if (this._root) return this._root;
            var e,
              t = vr;
            try {
              e = t(this._css, this._opts);
            } catch (e) {
              this.error = e;
            }
            if (this.error) throw this.error;
            return (this._root = e), e;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "NoWorkResult";
          },
        },
      ]),
      e
    );
  })(),
  _r = Sr;
Sr.default = Sr;
var xr = _r,
  wr = mr,
  Er = Kt,
  Tr = Mn,
  kr = (function () {
    function e(e) {
      void 0 === e && (e = []),
        (this.version = "8.4.38"),
        (this.plugins = this.normalize(e));
    }
    var t = e.prototype;
    return (
      (t.normalize = function (e) {
        for (var t, n = [], r = w(e); !(t = r()).done; ) {
          var o = t.value;
          if (
            (!0 === o.postcss ? (o = o()) : o.postcss && (o = o.postcss),
            "object" === (void 0 === o ? "undefined" : S(o)) &&
              Array.isArray(o.plugins))
          )
            n = n.concat(o.plugins);
          else if (
            "object" === (void 0 === o ? "undefined" : S(o)) &&
            o.postcssPlugin
          )
            n.push(o);
          else if ("function" == typeof o) n.push(o);
          else if (
            "object" !== (void 0 === o ? "undefined" : S(o)) ||
            (!o.parse && !o.stringify)
          )
            throw new Error(o + " is not a PostCSS plugin");
        }
        return n;
      }),
      (t.process = function (e, t) {
        return (
          void 0 === t && (t = {}),
          this.plugins.length || t.parser || t.stringifier || t.syntax
            ? new wr(this, e, t)
            : new xr(this, e, t)
        );
      }),
      (t.use = function (e) {
        return (this.plugins = this.plugins.concat(this.normalize([e]))), this;
      }),
      e
    );
  })(),
  Cr = kr;
(kr.default = kr), Tr.registerProcessor(kr), Er.registerProcessor(kr);
var Ir = Qe,
  Ar = it,
  Or = Pt,
  Rr = Cn,
  Mr = St,
  Pr = Mn,
  Nr = Fn;
function Dr(e, t) {
  if (Array.isArray(e))
    return e.map(function (e) {
      return Dr(e);
    });
  var n = e.inputs,
    r = v(e, ["inputs"]);
  if (n) {
    t = [];
    for (var o, i = w(n); !(o = i()).done; ) {
      var a = h({}, o.value, { __proto__: Mr.prototype });
      a.map && (a.map = h({}, a.map, { __proto__: Ar.prototype })), t.push(a);
    }
  }
  if (
    (r.nodes &&
      (r.nodes = e.nodes.map(function (e) {
        return Dr(e, t);
      })),
    r.source)
  ) {
    var s = r.source,
      l = s.inputId,
      c = v(s, ["inputId"]);
    (r.source = c), null != l && (r.source.input = t[l]);
  }
  if ("root" === r.type) return new Pr(r);
  if ("decl" === r.type) return new Ir(r);
  if ("rule" === r.type) return new Nr(r);
  if ("comment" === r.type) return new Or(r);
  if ("atrule" === r.type) return new Rr(r);
  throw new Error("Unknown node type: " + e.type);
}
var jr = Dr;
Dr.default = Dr;
var Lr = Ne,
  Fr = Qe,
  Ur = mr,
  Br = Gt,
  zr = Cr,
  Hr = ze,
  Vr = jr,
  qr = Kt,
  Gr = Qt,
  Wr = Pt,
  $r = Cn,
  Yr = en,
  Kr = St,
  Zr = Zn,
  Qr = Nn,
  Jr = Fn,
  Xr = Mn,
  eo = Ke;
function to() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return 1 === t.length && Array.isArray(t[0]) && (t = t[0]), new zr(t);
}
(to.plugin = function (e, t) {
  var n,
    r = !1;
  function o() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    console &&
      console.warn &&
      !r &&
      ((r = !0), process.env.LANG && process.env.LANG.startsWith("cn"));
    var a = t.apply(void 0, [].concat(o));
    return (a.postcssPlugin = e), (a.postcssVersion = new zr().version), a;
  }
  return (
    Object.defineProperty(o, "postcss", {
      get: function () {
        return n || (n = o()), n;
      },
    }),
    (o.process = function (e, t, n) {
      return to([o(n)]).process(e, t);
    }),
    o
  );
}),
  (to.stringify = Hr),
  (to.parse = Zr),
  (to.fromJSON = Vr),
  (to.list = Qr),
  (to.comment = function (e) {
    return new Wr(e);
  }),
  (to.atRule = function (e) {
    return new $r(e);
  }),
  (to.decl = function (e) {
    return new Fr(e);
  }),
  (to.rule = function (e) {
    return new Jr(e);
  }),
  (to.root = function (e) {
    return new Xr(e);
  }),
  (to.document = function (e) {
    return new qr(e);
  }),
  (to.CssSyntaxError = Lr),
  (to.Declaration = Fr),
  (to.Container = Br),
  (to.Processor = zr),
  (to.Document = qr),
  (to.Comment = Wr),
  (to.Warning = Gr),
  (to.AtRule = $r),
  (to.Result = Yr),
  (to.Input = Kr),
  (to.Rule = Jr),
  (to.Root = Xr),
  (to.Node = eo),
  Ur.registerPostcss(to);
var no = to;
to.default = to;
var ro = Ee(no);
ro.stringify,
  ro.fromJSON,
  ro.plugin,
  ro.parse,
  ro.list,
  ro.document,
  ro.comment,
  ro.atRule,
  ro.rule,
  ro.decl,
  ro.root,
  ro.CssSyntaxError,
  ro.Declaration,
  ro.Container,
  ro.Processor,
  ro.Document,
  ro.Comment,
  ro.Warning,
  ro.AtRule,
  ro.Result,
  ro.Input,
  ro.Rule,
  ro.Root,
  ro.Node;
var oo = Object.defineProperty,
  io = function (e, t, n) {
    return (function (e, t, n) {
      return t in e
        ? oo(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n,
          })
        : (e[t] = n);
    })(e, "symbol" !== (void 0 === t ? "undefined" : S(t)) ? t + "" : t, n);
  };
function ao(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function so(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if ("function" == typeof t) {
    var n = function e() {
      return y(this, e)
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (t) {
      var r = Object.getOwnPropertyDescriptor(e, t);
      Object.defineProperty(
        n,
        t,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return e[t];
              },
            },
      );
    }),
    n
  );
}
var lo = { exports: {} },
  co = String,
  uo = function () {
    return {
      isColorSupported: !1,
      reset: co,
      bold: co,
      dim: co,
      italic: co,
      underline: co,
      inverse: co,
      hidden: co,
      strikethrough: co,
      black: co,
      red: co,
      green: co,
      yellow: co,
      blue: co,
      magenta: co,
      cyan: co,
      white: co,
      gray: co,
      bgBlack: co,
      bgRed: co,
      bgGreen: co,
      bgYellow: co,
      bgBlue: co,
      bgMagenta: co,
      bgCyan: co,
      bgWhite: co,
    };
  };
(lo.exports = uo()), (lo.exports.createColors = uo);
var po = lo.exports,
  fo = so(
    Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: {} },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
  ),
  ho = po,
  mo = fo,
  go = (function (e) {
    function t(n, r, o, i, a, s) {
      var l;
      return (
        ((l = e.call(this, n) || this).name = "CssSyntaxError"),
        (l.reason = n),
        a && (l.file = a),
        i && (l.source = i),
        s && (l.plugin = s),
        void 0 !== r &&
          void 0 !== o &&
          ("number" == typeof r
            ? ((l.line = r), (l.column = o))
            : ((l.line = r.line),
              (l.column = r.column),
              (l.endLine = o.line),
              (l.endColumn = o.column))),
        l.setMessage(),
        Error.captureStackTrace && Error.captureStackTrace(l, t),
        l
      );
    }
    g(t, e);
    var n = t.prototype;
    return (
      (n.setMessage = function () {
        (this.message = this.plugin ? this.plugin + ": " : ""),
          (this.message += this.file ? this.file : "<css input>"),
          void 0 !== this.line &&
            (this.message += ":" + this.line + ":" + this.column),
          (this.message += ": " + this.reason);
      }),
      (n.showSourceCode = function (e) {
        var t = this;
        if (!this.source) return "";
        var n = this.source;
        null == e && (e = ho.isColorSupported), mo && e && (n = mo(n));
        var r,
          o,
          i = n.split(/\r?\n/),
          a = Math.max(this.line - 3, 0),
          s = Math.min(this.line + 2, i.length),
          l = String(s).length;
        if (e) {
          var c = ho.createColors(!0),
            u = c.bold,
            d = c.gray,
            p = c.red;
          (r = function (e) {
            return u(p(e));
          }),
            (o = function (e) {
              return d(e);
            });
        } else
          r = o = function (e) {
            return e;
          };
        return i
          .slice(a, s)
          .map(function (e, n) {
            var i = a + 1 + n,
              s = " " + (" " + i).slice(-l) + " | ";
            if (i === t.line) {
              var c =
                o(s.replace(/\d/g, " ")) +
                e.slice(0, t.column - 1).replace(/[^\t]/g, " ");
              return r(">") + o(s) + e + "\n " + c + r("^");
            }
            return " " + o(s) + e;
          })
          .join("\n");
      }),
      (n.toString = function () {
        var e = this.showSourceCode();
        return (
          e && (e = "\n\n" + e + "\n"), this.name + ": " + this.message + e
        );
      }),
      t
    );
  })(_(Error)),
  yo = go;
go.default = go;
var vo = {};
(vo.isClean = Symbol("isClean")), (vo.my = Symbol("my"));
var bo = {
    after: "\n",
    beforeClose: "\n",
    beforeComment: "\n",
    beforeDecl: "\n",
    beforeOpen: " ",
    beforeRule: "\n",
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: !1,
  },
  So = (function () {
    function e(e) {
      this.builder = e;
    }
    var t = e.prototype;
    return (
      (t.atrule = function (e, t) {
        var n = "@" + e.name,
          r = e.params ? this.rawValue(e, "params") : "";
        if (
          (void 0 !== e.raws.afterName
            ? (n += e.raws.afterName)
            : r && (n += " "),
          e.nodes)
        )
          this.block(e, n + r);
        else {
          var o = (e.raws.between || "") + (t ? ";" : "");
          this.builder(n + r + o, e);
        }
      }),
      (t.beforeAfter = function (e, t) {
        var n;
        n =
          "decl" === e.type
            ? this.raw(e, null, "beforeDecl")
            : "comment" === e.type
              ? this.raw(e, null, "beforeComment")
              : "before" === t
                ? this.raw(e, null, "beforeRule")
                : this.raw(e, null, "beforeClose");
        for (var r = e.parent, o = 0; r && "root" !== r.type; )
          (o += 1), (r = r.parent);
        if (n.includes("\n")) {
          var i = this.raw(e, null, "indent");
          if (i.length) for (var a = 0; a < o; a++) n += i;
        }
        return n;
      }),
      (t.block = function (e, t) {
        var n,
          r = this.raw(e, "between", "beforeOpen");
        this.builder(t + r + "{", e, "start"),
          e.nodes && e.nodes.length
            ? (this.body(e), (n = this.raw(e, "after")))
            : (n = this.raw(e, "after", "emptyBody")),
          n && this.builder(n),
          this.builder("}", e, "end");
      }),
      (t.body = function (e) {
        for (
          var t = e.nodes.length - 1;
          t > 0 && "comment" === e.nodes[t].type;

        )
          t -= 1;
        for (var n = this.raw(e, "semicolon"), r = 0; r < e.nodes.length; r++) {
          var o = e.nodes[r],
            i = this.raw(o, "before");
          i && this.builder(i), this.stringify(o, t !== r || n);
        }
      }),
      (t.comment = function (e) {
        var t = this.raw(e, "left", "commentLeft"),
          n = this.raw(e, "right", "commentRight");
        this.builder("/*" + t + e.text + n + "*/", e);
      }),
      (t.decl = function (e, t) {
        var n = this.raw(e, "between", "colon"),
          r = e.prop + n + this.rawValue(e, "value");
        e.important && (r += e.raws.important || " !important"),
          t && (r += ";"),
          this.builder(r, e);
      }),
      (t.document = function (e) {
        this.body(e);
      }),
      (t.raw = function (e, t, n) {
        var r;
        if ((n || (n = t), t && void 0 !== (r = e.raws[t]))) return r;
        var o = e.parent;
        if ("before" === n) {
          if (!o || ("root" === o.type && o.first === e)) return "";
          if (o && "document" === o.type) return "";
        }
        if (!o) return bo[n];
        var i = e.root();
        if ((i.rawCache || (i.rawCache = {}), void 0 !== i.rawCache[n]))
          return i.rawCache[n];
        if ("before" === n || "after" === n) return this.beforeAfter(e, n);
        var a,
          s = "raw" + ((a = n)[0].toUpperCase() + a.slice(1));
        return (
          this[s]
            ? (r = this[s](i, e))
            : i.walk(function (e) {
                if (void 0 !== (r = e.raws[t])) return !1;
              }),
          void 0 === r && (r = bo[n]),
          (i.rawCache[n] = r),
          r
        );
      }),
      (t.rawBeforeClose = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if (e.nodes && e.nodes.length > 0 && void 0 !== e.raws.after)
              return (
                (t = e.raws.after).includes("\n") &&
                  (t = t.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          t && (t = t.replace(/\S/g, "")),
          t
        );
      }),
      (t.rawBeforeComment = function (e, t) {
        var n;
        return (
          e.walkComments(function (e) {
            if (void 0 !== e.raws.before)
              return (
                (n = e.raws.before).includes("\n") &&
                  (n = n.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          void 0 === n
            ? (n = this.raw(t, null, "beforeDecl"))
            : n && (n = n.replace(/\S/g, "")),
          n
        );
      }),
      (t.rawBeforeDecl = function (e, t) {
        var n;
        return (
          e.walkDecls(function (e) {
            if (void 0 !== e.raws.before)
              return (
                (n = e.raws.before).includes("\n") &&
                  (n = n.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          void 0 === n
            ? (n = this.raw(t, null, "beforeRule"))
            : n && (n = n.replace(/\S/g, "")),
          n
        );
      }),
      (t.rawBeforeOpen = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if ("decl" !== e.type && void 0 !== (t = e.raws.between)) return !1;
          }),
          t
        );
      }),
      (t.rawBeforeRule = function (e) {
        var t;
        return (
          e.walk(function (n) {
            if (
              n.nodes &&
              (n.parent !== e || e.first !== n) &&
              void 0 !== n.raws.before
            )
              return (
                (t = n.raws.before).includes("\n") &&
                  (t = t.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          t && (t = t.replace(/\S/g, "")),
          t
        );
      }),
      (t.rawColon = function (e) {
        var t;
        return (
          e.walkDecls(function (e) {
            if (void 0 !== e.raws.between)
              return (t = e.raws.between.replace(/[^\s:]/g, "")), !1;
          }),
          t
        );
      }),
      (t.rawEmptyBody = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if (
              e.nodes &&
              0 === e.nodes.length &&
              void 0 !== (t = e.raws.after)
            )
              return !1;
          }),
          t
        );
      }),
      (t.rawIndent = function (e) {
        return e.raws.indent
          ? e.raws.indent
          : (e.walk(function (n) {
              var r = n.parent;
              if (
                r &&
                r !== e &&
                r.parent &&
                r.parent === e &&
                void 0 !== n.raws.before
              ) {
                var o = n.raws.before.split("\n");
                return (t = (t = o[o.length - 1]).replace(/\S/g, "")), !1;
              }
            }),
            t);
        var t;
      }),
      (t.rawSemicolon = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if (
              e.nodes &&
              e.nodes.length &&
              "decl" === e.last.type &&
              void 0 !== (t = e.raws.semicolon)
            )
              return !1;
          }),
          t
        );
      }),
      (t.rawValue = function (e, t) {
        var n = e[t],
          r = e.raws[t];
        return r && r.value === n ? r.raw : n;
      }),
      (t.root = function (e) {
        this.body(e), e.raws.after && this.builder(e.raws.after);
      }),
      (t.rule = function (e) {
        this.block(e, this.rawValue(e, "selector")),
          e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
      }),
      (t.stringify = function (e, t) {
        if (!this[e.type])
          throw new Error(
            "Unknown AST node type " +
              e.type +
              ". Maybe you need to change PostCSS stringifier.",
          );
        this[e.type](e, t);
      }),
      e
    );
  })(),
  _o = So;
So.default = So;
var xo = _o;
function wo(e, t) {
  new xo(t).stringify(e);
}
var Eo = wo;
wo.default = wo;
var To = vo.isClean,
  ko = vo.my,
  Co = yo,
  Io = _o,
  Ao = Eo;
function Oo(e, t) {
  var n = new e.constructor();
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && "proxyCache" !== r) {
      var o = e[r],
        i = void 0 === o ? "undefined" : S(o);
      "parent" === r && "object" === i
        ? t && (n[r] = t)
        : "source" === r
          ? (n[r] = o)
          : Array.isArray(o)
            ? (n[r] = o.map(function (e) {
                return Oo(e, n);
              }))
            : ("object" === i && null !== o && (o = Oo(o)), (n[r] = o));
    }
  return n;
}
var Ro = (function () {
    function e(e) {
      for (var t in (void 0 === e && (e = {}),
      (this.raws = {}),
      (this[To] = !1),
      (this[ko] = !0),
      e))
        if ("nodes" === t) {
          this.nodes = [];
          for (var n, r = w(e[t]); !(n = r()).done; ) {
            var o = n.value;
            "function" == typeof o.clone
              ? this.append(o.clone())
              : this.append(o);
          }
        } else this[t] = e[t];
    }
    var t = e.prototype;
    return (
      (t.addToError = function (e) {
        if (
          ((e.postcssNode = this),
          e.stack && this.source && /\n\s{4}at /.test(e.stack))
        ) {
          var t = this.source;
          e.stack = e.stack.replace(
            /\n\s{4}at /,
            "$&" +
              t.input.from +
              ":" +
              t.start.line +
              ":" +
              t.start.column +
              "$&",
          );
        }
        return e;
      }),
      (t.after = function (e) {
        return this.parent.insertAfter(this, e), this;
      }),
      (t.assign = function (e) {
        for (var t in (void 0 === e && (e = {}), e)) this[t] = e[t];
        return this;
      }),
      (t.before = function (e) {
        return this.parent.insertBefore(this, e), this;
      }),
      (t.cleanRaws = function (e) {
        delete this.raws.before,
          delete this.raws.after,
          e || delete this.raws.between;
      }),
      (t.clone = function (e) {
        void 0 === e && (e = {});
        var t = Oo(this);
        for (var n in e) t[n] = e[n];
        return t;
      }),
      (t.cloneAfter = function (e) {
        void 0 === e && (e = {});
        var t = this.clone(e);
        return this.parent.insertAfter(this, t), t;
      }),
      (t.cloneBefore = function (e) {
        void 0 === e && (e = {});
        var t = this.clone(e);
        return this.parent.insertBefore(this, t), t;
      }),
      (t.error = function (e, t) {
        if ((void 0 === t && (t = {}), this.source)) {
          var n = this.rangeBy(t),
            r = n.end,
            o = n.start;
          return this.source.input.error(
            e,
            { column: o.column, line: o.line },
            { column: r.column, line: r.line },
            t,
          );
        }
        return new Co(e);
      }),
      (t.getProxyProcessor = function () {
        return {
          get: function (e, t) {
            return "proxyOf" === t
              ? e
              : "root" === t
                ? function () {
                    return e.root().toProxy();
                  }
                : e[t];
          },
          set: function (e, t, n) {
            return (
              e[t] === n ||
                ((e[t] = n),
                ("prop" !== t &&
                  "value" !== t &&
                  "name" !== t &&
                  "params" !== t &&
                  "important" !== t &&
                  "text" !== t) ||
                  e.markDirty()),
              !0
            );
          },
        };
      }),
      (t.markDirty = function () {
        if (this[To]) {
          this[To] = !1;
          for (var e = this; (e = e.parent); ) e[To] = !1;
        }
      }),
      (t.next = function () {
        if (this.parent) {
          var e = this.parent.index(this);
          return this.parent.nodes[e + 1];
        }
      }),
      (t.positionBy = function (e, t) {
        var n = this.source.start;
        if (e.index) n = this.positionInside(e.index, t);
        else if (e.word) {
          var r = (t = this.toString()).indexOf(e.word);
          -1 !== r && (n = this.positionInside(r, t));
        }
        return n;
      }),
      (t.positionInside = function (e, t) {
        for (
          var n = t || this.toString(),
            r = this.source.start.column,
            o = this.source.start.line,
            i = 0;
          i < e;
          i++
        )
          "\n" === n[i] ? ((r = 1), (o += 1)) : (r += 1);
        return { column: r, line: o };
      }),
      (t.prev = function () {
        if (this.parent) {
          var e = this.parent.index(this);
          return this.parent.nodes[e - 1];
        }
      }),
      (t.rangeBy = function (e) {
        var t = {
            column: this.source.start.column,
            line: this.source.start.line,
          },
          n = this.source.end
            ? {
                column: this.source.end.column + 1,
                line: this.source.end.line,
              }
            : { column: t.column + 1, line: t.line };
        if (e.word) {
          var r = this.toString(),
            o = r.indexOf(e.word);
          -1 !== o &&
            ((t = this.positionInside(o, r)),
            (n = this.positionInside(o + e.word.length, r)));
        } else
          e.start
            ? (t = { column: e.start.column, line: e.start.line })
            : e.index && (t = this.positionInside(e.index)),
            e.end
              ? (n = { column: e.end.column, line: e.end.line })
              : "number" == typeof e.endIndex
                ? (n = this.positionInside(e.endIndex))
                : e.index && (n = this.positionInside(e.index + 1));
        return (
          (n.line < t.line || (n.line === t.line && n.column <= t.column)) &&
            (n = { column: t.column + 1, line: t.line }),
          { end: n, start: t }
        );
      }),
      (t.raw = function (e, t) {
        return new Io().raw(this, e, t);
      }),
      (t.remove = function () {
        return (
          this.parent && this.parent.removeChild(this),
          (this.parent = void 0),
          this
        );
      }),
      (t.replaceWith = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (this.parent) {
          for (var r, o = this, i = !1, a = w(t); !(r = a()).done; ) {
            var s = r.value;
            s === this
              ? (i = !0)
              : i
                ? (this.parent.insertAfter(o, s), (o = s))
                : this.parent.insertBefore(o, s);
          }
          i || this.remove();
        }
        return this;
      }),
      (t.root = function () {
        for (var e = this; e.parent && "document" !== e.parent.type; )
          e = e.parent;
        return e;
      }),
      (t.toJSON = function (e, t) {
        var n = {},
          r = null == t;
        t = t || new Map();
        var o = 0;
        for (var i in this)
          if (
            Object.prototype.hasOwnProperty.call(this, i) &&
            "parent" !== i &&
            "proxyCache" !== i
          ) {
            var a = this[i];
            if (Array.isArray(a))
              n[i] = a.map(function (e) {
                return "object" === (void 0 === e ? "undefined" : S(e)) &&
                  e.toJSON
                  ? e.toJSON(null, t)
                  : e;
              });
            else if (
              "object" === (void 0 === a ? "undefined" : S(a)) &&
              a.toJSON
            )
              n[i] = a.toJSON(null, t);
            else if ("source" === i) {
              var s = t.get(a.input);
              null == s && ((s = o), t.set(a.input, o), o++),
                (n[i] = { end: a.end, inputId: s, start: a.start });
            } else n[i] = a;
          }
        return (
          r &&
            (n.inputs = [].concat(t.keys()).map(function (e) {
              return e.toJSON();
            })),
          n
        );
      }),
      (t.toProxy = function () {
        return (
          this.proxyCache ||
            (this.proxyCache = new Proxy(this, this.getProxyProcessor())),
          this.proxyCache
        );
      }),
      (t.toString = function (e) {
        void 0 === e && (e = Ao), e.stringify && (e = e.stringify);
        var t = "";
        return (
          e(this, function (e) {
            t += e;
          }),
          t
        );
      }),
      (t.warn = function (e, t, n) {
        var r = { node: this };
        for (var o in n) r[o] = n[o];
        return e.warn(t, r);
      }),
      f(e, [
        {
          key: "proxyOf",
          get: function () {
            return this;
          },
        },
      ]),
      e
    );
  })(),
  Mo = Ro;
Ro.default = Ro;
var Po = (function (e) {
    function t(t) {
      var n;
      return (
        t &&
          void 0 !== t.value &&
          "string" != typeof t.value &&
          (t = h({}, t, { value: String(t.value) })),
        ((n = e.call(this, t) || this).type = "decl"),
        n
      );
    }
    return (
      g(t, e),
      f(t, [
        {
          key: "variable",
          get: function () {
            return this.prop.startsWith("--") || "$" === this.prop[0];
          },
        },
      ]),
      t
    );
  })(Mo),
  No = Po;
Po.default = Po;
var Do = fo.SourceMapConsumer,
  jo = fo.SourceMapGenerator,
  Lo = fo.existsSync,
  Fo = fo.readFileSync,
  Uo = fo.dirname,
  Bo = fo.join,
  zo = (function () {
    function e(e, t) {
      if (!1 !== t.map) {
        this.loadAnnotation(e),
          (this.inline = this.startWith(this.annotation, "data:"));
        var n = t.map ? t.map.prev : void 0,
          r = this.loadMap(t.from, n);
        !this.mapFile && t.from && (this.mapFile = t.from),
          this.mapFile && (this.root = Uo(this.mapFile)),
          r && (this.text = r);
      }
    }
    var t = e.prototype;
    return (
      (t.consumer = function () {
        return (
          this.consumerCache || (this.consumerCache = new Do(this.text)),
          this.consumerCache
        );
      }),
      (t.decodeInline = function (e) {
        var t;
        if (
          /^data:application\/json;charset=utf-?8,/.test(e) ||
          /^data:application\/json,/.test(e)
        )
          return decodeURIComponent(e.substr(RegExp.lastMatch.length));
        if (
          /^data:application\/json;charset=utf-?8;base64,/.test(e) ||
          /^data:application\/json;base64,/.test(e)
        )
          return (
            (t = e.substr(RegExp.lastMatch.length)),
            Buffer ? Buffer.from(t, "base64").toString() : window.atob(t)
          );
        var n = e.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + n);
      }),
      (t.getAnnotationURL = function (e) {
        return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
      }),
      (t.isMap = function (e) {
        return (
          "object" === (void 0 === e ? "undefined" : S(e)) &&
          ("string" == typeof e.mappings ||
            "string" == typeof e._mappings ||
            Array.isArray(e.sections))
        );
      }),
      (t.loadAnnotation = function (e) {
        var t = e.match(/\/\*\s*# sourceMappingURL=/gm);
        if (t) {
          var n = e.lastIndexOf(t.pop()),
            r = e.indexOf("*/", n);
          n > -1 &&
            r > -1 &&
            (this.annotation = this.getAnnotationURL(e.substring(n, r)));
        }
      }),
      (t.loadFile = function (e) {
        if (((this.root = Uo(e)), Lo(e)))
          return (this.mapFile = e), Fo(e, "utf-8").toString().trim();
      }),
      (t.loadMap = function (e, t) {
        if (!1 === t) return !1;
        if (t) {
          if ("string" == typeof t) return t;
          if ("function" != typeof t) {
            if (y(t, Do)) return jo.fromSourceMap(t).toString();
            if (y(t, jo)) return t.toString();
            if (this.isMap(t)) return JSON.stringify(t);
            throw new Error(
              "Unsupported previous source map format: " + t.toString(),
            );
          }
          var n = t(e);
          if (n) {
            var r = this.loadFile(n);
            if (!r)
              throw new Error(
                "Unable to load previous source map: " + n.toString(),
              );
            return r;
          }
        } else {
          if (this.inline) return this.decodeInline(this.annotation);
          if (this.annotation) {
            var o = this.annotation;
            return e && (o = Bo(Uo(e), o)), this.loadFile(o);
          }
        }
      }),
      (t.startWith = function (e, t) {
        return !!e && e.substr(0, t.length) === t;
      }),
      (t.withContent = function () {
        return !!(
          this.consumer().sourcesContent &&
          this.consumer().sourcesContent.length > 0
        );
      }),
      e
    );
  })(),
  Ho = zo;
zo.default = zo;
var Vo = fo.SourceMapConsumer,
  qo = fo.SourceMapGenerator,
  Go = fo.fileURLToPath,
  Wo = fo.pathToFileURL,
  $o = fo.isAbsolute,
  Yo = fo.resolve,
  Ko = function (e) {
    void 0 === e && (e = 21);
    for (var t = "", n = e; n--; )
      t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[
        (64 * Math.random()) | 0
      ];
    return t;
  },
  Zo = fo,
  Qo = yo,
  Jo = Ho,
  Xo = Symbol("fromOffsetCache"),
  ei = Boolean(Vo && qo),
  ti = Boolean(Yo && $o),
  ni = (function () {
    function e(e, t) {
      if (
        (void 0 === t && (t = {}),
        null == e ||
          ("object" === (void 0 === e ? "undefined" : S(e)) && !e.toString))
      )
        throw new Error("PostCSS received " + e + " instead of CSS string");
      if (
        ((this.css = e.toString()),
        "\ufeff" === this.css[0] || "￾" === this.css[0]
          ? ((this.hasBOM = !0), (this.css = this.css.slice(1)))
          : (this.hasBOM = !1),
        t.from &&
          (!ti || /^\w+:\/\//.test(t.from) || $o(t.from)
            ? (this.file = t.from)
            : (this.file = Yo(t.from))),
        ti && ei)
      ) {
        var n = new Jo(this.css, t);
        if (n.text) {
          this.map = n;
          var r = n.consumer().file;
          !this.file && r && (this.file = this.mapResolve(r));
        }
      }
      this.file || (this.id = "<input css " + Ko(6) + ">"),
        this.map && (this.map.file = this.from);
    }
    var t = e.prototype;
    return (
      (t.error = function (e, t, n, r) {
        var o, i, a;
        if (
          (void 0 === r && (r = {}),
          t && "object" === (void 0 === t ? "undefined" : S(t)))
        ) {
          var s = t,
            l = n;
          if ("number" == typeof s.offset) {
            var c = this.fromOffset(s.offset);
            (t = c.line), (n = c.col);
          } else (t = s.line), (n = s.column);
          if ("number" == typeof l.offset) {
            var u = this.fromOffset(l.offset);
            (i = u.line), (a = u.col);
          } else (i = l.line), (a = l.column);
        } else if (!n) {
          var d = this.fromOffset(t);
          (t = d.line), (n = d.col);
        }
        var p = this.origin(t, n, i, a);
        return (
          ((o = p
            ? new Qo(
                e,
                void 0 === p.endLine
                  ? p.line
                  : { column: p.column, line: p.line },
                void 0 === p.endLine
                  ? p.column
                  : { column: p.endColumn, line: p.endLine },
                p.source,
                p.file,
                r.plugin,
              )
            : new Qo(
                e,
                void 0 === i ? t : { column: n, line: t },
                void 0 === i ? n : { column: a, line: i },
                this.css,
                this.file,
                r.plugin,
              )).input = {
            column: n,
            endColumn: a,
            endLine: i,
            line: t,
            source: this.css,
          }),
          this.file &&
            (Wo && (o.input.url = Wo(this.file).toString()),
            (o.input.file = this.file)),
          o
        );
      }),
      (t.fromOffset = function (e) {
        var t;
        if (this[Xo]) t = this[Xo];
        else {
          var n = this.css.split("\n");
          t = new Array(n.length);
          for (var r = 0, o = 0, i = n.length; o < i; o++)
            (t[o] = r), (r += n[o].length + 1);
          this[Xo] = t;
        }
        var a = 0;
        if (e >= t[t.length - 1]) a = t.length - 1;
        else
          for (var s, l = t.length - 2; a < l; )
            if (e < t[(s = a + ((l - a) >> 1))]) l = s - 1;
            else {
              if (!(e >= t[s + 1])) {
                a = s;
                break;
              }
              a = s + 1;
            }
        return { col: e - t[a] + 1, line: a + 1 };
      }),
      (t.mapResolve = function (e) {
        return /^\w+:\/\//.test(e)
          ? e
          : Yo(this.map.consumer().sourceRoot || this.map.root || ".", e);
      }),
      (t.origin = function (e, t, n, r) {
        if (!this.map) return !1;
        var o,
          i,
          a = this.map.consumer(),
          s = a.originalPositionFor({ column: t, line: e });
        if (!s.source) return !1;
        "number" == typeof n &&
          (o = a.originalPositionFor({ column: r, line: n })),
          (i = $o(s.source)
            ? Wo(s.source)
            : new URL(
                s.source,
                this.map.consumer().sourceRoot || Wo(this.map.mapFile),
              ));
        var l = {
          column: s.column,
          endColumn: o && o.column,
          endLine: o && o.line,
          line: s.line,
          url: i.toString(),
        };
        if ("file:" === i.protocol) {
          if (!Go)
            throw new Error(
              "file: protocol is not available in this PostCSS build",
            );
          l.file = Go(i);
        }
        var c = a.sourceContentFor(s.source);
        return c && (l.source = c), l;
      }),
      (t.toJSON = function () {
        for (
          var e = {}, t = 0, n = ["hasBOM", "css", "file", "id"];
          t < n.length;
          t++
        ) {
          var r = n[t];
          null != this[r] && (e[r] = this[r]);
        }
        return (
          this.map &&
            ((e.map = h({}, this.map)),
            e.map.consumerCache && (e.map.consumerCache = void 0)),
          e
        );
      }),
      f(e, [
        {
          key: "from",
          get: function () {
            return this.file || this.id;
          },
        },
      ]),
      e
    );
  })(),
  ri = ni;
(ni.default = ni), Zo && Zo.registerInput && Zo.registerInput(ni);
var oi = fo.SourceMapConsumer,
  ii = fo.SourceMapGenerator,
  ai = fo.dirname,
  si = fo.relative,
  li = fo.resolve,
  ci = fo.sep,
  ui = fo.pathToFileURL,
  di = ri,
  pi = Boolean(oi && ii),
  fi = Boolean(ai && li && si && ci),
  hi = (function () {
    function e(e, t, n, r) {
      (this.stringify = e),
        (this.mapOpts = n.map || {}),
        (this.root = t),
        (this.opts = n),
        (this.css = r),
        (this.originalCSS = r),
        (this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute),
        (this.memoizedFileURLs = new Map()),
        (this.memoizedPaths = new Map()),
        (this.memoizedURLs = new Map());
    }
    var t = e.prototype;
    return (
      (t.addAnnotation = function () {
        var e;
        e = this.isInline()
          ? "data:application/json;base64," + this.toBase64(this.map.toString())
          : "string" == typeof this.mapOpts.annotation
            ? this.mapOpts.annotation
            : "function" == typeof this.mapOpts.annotation
              ? this.mapOpts.annotation(this.opts.to, this.root)
              : this.outputFile() + ".map";
        var t = "\n";
        this.css.includes("\r\n") && (t = "\r\n"),
          (this.css += t + "/*# sourceMappingURL=" + e + " */");
      }),
      (t.applyPrevMaps = function () {
        for (var e, t = w(this.previous()); !(e = t()).done; ) {
          var n = e.value,
            r = this.toUrl(this.path(n.file)),
            o = n.root || ai(n.file),
            i = void 0;
          !1 === this.mapOpts.sourcesContent
            ? (i = new oi(n.text)).sourcesContent && (i.sourcesContent = null)
            : (i = n.consumer()),
            this.map.applySourceMap(i, r, this.toUrl(this.path(o)));
        }
      }),
      (t.clearAnnotation = function () {
        if (!1 !== this.mapOpts.annotation)
          if (this.root)
            for (var e, t = this.root.nodes.length - 1; t >= 0; t--)
              "comment" === (e = this.root.nodes[t]).type &&
                0 === e.text.indexOf("# sourceMappingURL=") &&
                this.root.removeChild(t);
          else
            this.css &&
              (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
      }),
      (t.generate = function () {
        if ((this.clearAnnotation(), fi && pi && this.isMap()))
          return this.generateMap();
        var e = "";
        return (
          this.stringify(this.root, function (t) {
            e += t;
          }),
          [e]
        );
      }),
      (t.generateMap = function () {
        if (this.root) this.generateString();
        else if (1 === this.previous().length) {
          var e = this.previous()[0].consumer();
          (e.file = this.outputFile()),
            (this.map = ii.fromSourceMap(e, {
              ignoreInvalidMapping: !0,
            }));
        } else
          (this.map = new ii({
            file: this.outputFile(),
            ignoreInvalidMapping: !0,
          })),
            this.map.addMapping({
              generated: { column: 0, line: 1 },
              original: { column: 0, line: 1 },
              source: this.opts.from
                ? this.toUrl(this.path(this.opts.from))
                : "<no source>",
            });
        return (
          this.isSourcesContent() && this.setSourcesContent(),
          this.root && this.previous().length > 0 && this.applyPrevMaps(),
          this.isAnnotation() && this.addAnnotation(),
          this.isInline() ? [this.css] : [this.css, this.map]
        );
      }),
      (t.generateString = function () {
        var e = this;
        (this.css = ""),
          (this.map = new ii({
            file: this.outputFile(),
            ignoreInvalidMapping: !0,
          }));
        var t,
          n,
          r = 1,
          o = 1,
          i = "<no source>",
          a = {
            generated: { column: 0, line: 0 },
            original: { column: 0, line: 0 },
            source: "",
          };
        this.stringify(this.root, function (s, l, c) {
          if (
            ((e.css += s),
            l &&
              "end" !== c &&
              ((a.generated.line = r),
              (a.generated.column = o - 1),
              l.source && l.source.start
                ? ((a.source = e.sourcePath(l)),
                  (a.original.line = l.source.start.line),
                  (a.original.column = l.source.start.column - 1),
                  e.map.addMapping(a))
                : ((a.source = i),
                  (a.original.line = 1),
                  (a.original.column = 0),
                  e.map.addMapping(a))),
            (t = s.match(/\n/g))
              ? ((r += t.length), (n = s.lastIndexOf("\n")), (o = s.length - n))
              : (o += s.length),
            l && "start" !== c)
          ) {
            var u = l.parent || { raws: {} };
            (("decl" === l.type || ("atrule" === l.type && !l.nodes)) &&
              l === u.last &&
              !u.raws.semicolon) ||
              (l.source && l.source.end
                ? ((a.source = e.sourcePath(l)),
                  (a.original.line = l.source.end.line),
                  (a.original.column = l.source.end.column - 1),
                  (a.generated.line = r),
                  (a.generated.column = o - 2),
                  e.map.addMapping(a))
                : ((a.source = i),
                  (a.original.line = 1),
                  (a.original.column = 0),
                  (a.generated.line = r),
                  (a.generated.column = o - 1),
                  e.map.addMapping(a)));
          }
        });
      }),
      (t.isAnnotation = function () {
        return (
          !!this.isInline() ||
          (void 0 !== this.mapOpts.annotation
            ? this.mapOpts.annotation
            : !this.previous().length ||
              this.previous().some(function (e) {
                return e.annotation;
              }))
        );
      }),
      (t.isInline = function () {
        if (void 0 !== this.mapOpts.inline) return this.mapOpts.inline;
        var e = this.mapOpts.annotation;
        return (
          (void 0 === e || !0 === e) &&
          (!this.previous().length ||
            this.previous().some(function (e) {
              return e.inline;
            }))
        );
      }),
      (t.isMap = function () {
        return void 0 !== this.opts.map
          ? !!this.opts.map
          : this.previous().length > 0;
      }),
      (t.isSourcesContent = function () {
        return void 0 !== this.mapOpts.sourcesContent
          ? this.mapOpts.sourcesContent
          : !this.previous().length ||
              this.previous().some(function (e) {
                return e.withContent();
              });
      }),
      (t.outputFile = function () {
        return this.opts.to
          ? this.path(this.opts.to)
          : this.opts.from
            ? this.path(this.opts.from)
            : "to.css";
      }),
      (t.path = function (e) {
        if (this.mapOpts.absolute) return e;
        if (60 === e.charCodeAt(0)) return e;
        if (/^\w+:\/\//.test(e)) return e;
        var t = this.memoizedPaths.get(e);
        if (t) return t;
        var n = this.opts.to ? ai(this.opts.to) : ".";
        "string" == typeof this.mapOpts.annotation &&
          (n = ai(li(n, this.mapOpts.annotation)));
        var r = si(n, e);
        return this.memoizedPaths.set(e, r), r;
      }),
      (t.previous = function () {
        var e = this;
        if (!this.previousMaps)
          if (((this.previousMaps = []), this.root))
            this.root.walk(function (t) {
              if (t.source && t.source.input.map) {
                var n = t.source.input.map;
                e.previousMaps.includes(n) || e.previousMaps.push(n);
              }
            });
          else {
            var t = new di(this.originalCSS, this.opts);
            t.map && this.previousMaps.push(t.map);
          }
        return this.previousMaps;
      }),
      (t.setSourcesContent = function () {
        var e = this,
          t = {};
        if (this.root)
          this.root.walk(function (n) {
            if (n.source) {
              var r = n.source.input.from;
              if (r && !t[r]) {
                t[r] = !0;
                var o = e.usesFileUrls ? e.toFileUrl(r) : e.toUrl(e.path(r));
                e.map.setSourceContent(o, n.source.input.css);
              }
            }
          });
        else if (this.css) {
          var n = this.opts.from
            ? this.toUrl(this.path(this.opts.from))
            : "<no source>";
          this.map.setSourceContent(n, this.css);
        }
      }),
      (t.sourcePath = function (e) {
        return this.mapOpts.from
          ? this.toUrl(this.mapOpts.from)
          : this.usesFileUrls
            ? this.toFileUrl(e.source.input.from)
            : this.toUrl(this.path(e.source.input.from));
      }),
      (t.toBase64 = function (e) {
        return Buffer
          ? Buffer.from(e).toString("base64")
          : window.btoa(unescape(encodeURIComponent(e)));
      }),
      (t.toFileUrl = function (e) {
        var t = this.memoizedFileURLs.get(e);
        if (t) return t;
        if (ui) {
          var n = ui(e).toString();
          return this.memoizedFileURLs.set(e, n), n;
        }
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build",
        );
      }),
      (t.toUrl = function (e) {
        var t = this.memoizedURLs.get(e);
        if (t) return t;
        "\\" === ci && (e = e.replace(/\\/g, "/"));
        var n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
        return this.memoizedURLs.set(e, n), n;
      }),
      e
    );
  })(),
  mi = hi,
  gi = (function (e) {
    function t(t) {
      var n;
      return ((n = e.call(this, t) || this).type = "comment"), n;
    }
    return g(t, e), t;
  })(Mo),
  yi = gi;
gi.default = gi;
var vi,
  bi,
  Si,
  _i,
  xi = vo.isClean,
  wi = vo.my,
  Ei = No,
  Ti = yi;
function ki(e) {
  return e.map(function (e) {
    return e.nodes && (e.nodes = ki(e.nodes)), delete e.source, e;
  });
}
function Ci(e) {
  if (((e[xi] = !1), e.proxyOf.nodes))
    for (var t, n = w(e.proxyOf.nodes); !(t = n()).done; ) Ci(t.value);
}
var Ii = (function (e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  g(t, e);
  var n = t.prototype;
  return (
    (n.append = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (var r, o = w(t); !(r = o()).done; )
        for (
          var i, a = r.value, s = w(this.normalize(a, this.last));
          !(i = s()).done;

        ) {
          var l = i.value;
          this.proxyOf.nodes.push(l);
        }
      return this.markDirty(), this;
    }),
    (n.cleanRaws = function (t) {
      if ((e.prototype.cleanRaws.call(this, t), this.nodes))
        for (var n, r = w(this.nodes); !(n = r()).done; ) n.value.cleanRaws(t);
    }),
    (n.each = function (e) {
      if (this.proxyOf.nodes) {
        for (
          var t, n, r = this.getIterator();
          this.indexes[r] < this.proxyOf.nodes.length &&
          ((t = this.indexes[r]), !1 !== (n = e(this.proxyOf.nodes[t], t)));

        )
          this.indexes[r] += 1;
        return delete this.indexes[r], n;
      }
    }),
    (n.every = function (e) {
      return this.nodes.every(e);
    }),
    (n.getIterator = function () {
      this.lastEach || (this.lastEach = 0),
        this.indexes || (this.indexes = {}),
        (this.lastEach += 1);
      var e = this.lastEach;
      return (this.indexes[e] = 0), e;
    }),
    (n.getProxyProcessor = function () {
      return {
        get: function (e, t) {
          return "proxyOf" === t
            ? e
            : e[t]
              ? "each" === t || ("string" == typeof t && t.startsWith("walk"))
                ? function () {
                    for (
                      var n = arguments.length, r = new Array(n), o = 0;
                      o < n;
                      o++
                    )
                      r[o] = arguments[o];
                    var i;
                    return (i = e)[t].apply(
                      i,
                      [].concat(
                        r.map(function (e) {
                          return "function" == typeof e
                            ? function (t, n) {
                                return e(t.toProxy(), n);
                              }
                            : e;
                        }),
                      ),
                    );
                  }
                : "every" === t || "some" === t
                  ? function (n) {
                      return e[t](function (e) {
                        for (
                          var t = arguments.length,
                            r = new Array(t > 1 ? t - 1 : 0),
                            o = 1;
                          o < t;
                          o++
                        )
                          r[o - 1] = arguments[o];
                        return n.apply(void 0, [].concat([e.toProxy()], r));
                      });
                    }
                  : "root" === t
                    ? function () {
                        return e.root().toProxy();
                      }
                    : "nodes" === t
                      ? e.nodes.map(function (e) {
                          return e.toProxy();
                        })
                      : "first" === t || "last" === t
                        ? e[t].toProxy()
                        : e[t]
              : e[t];
        },
        set: function (e, t, n) {
          return (
            e[t] === n ||
              ((e[t] = n),
              ("name" !== t && "params" !== t && "selector" !== t) ||
                e.markDirty()),
            !0
          );
        },
      };
    }),
    (n.index = function (e) {
      return "number" == typeof e
        ? e
        : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
    }),
    (n.insertAfter = function (e, t) {
      var n,
        r = this.index(e),
        o = this.normalize(t, this.proxyOf.nodes[r]).reverse();
      r = this.index(e);
      for (var i, a = w(o); !(i = a()).done; ) {
        var s = i.value;
        this.proxyOf.nodes.splice(r + 1, 0, s);
      }
      for (var l in this.indexes)
        r < (n = this.indexes[l]) && (this.indexes[l] = n + o.length);
      return this.markDirty(), this;
    }),
    (n.insertBefore = function (e, t) {
      var n,
        r = this.index(e),
        o = 0 === r && "prepend",
        i = this.normalize(t, this.proxyOf.nodes[r], o).reverse();
      r = this.index(e);
      for (var a, s = w(i); !(a = s()).done; ) {
        var l = a.value;
        this.proxyOf.nodes.splice(r, 0, l);
      }
      for (var c in this.indexes)
        r <= (n = this.indexes[c]) && (this.indexes[c] = n + i.length);
      return this.markDirty(), this;
    }),
    (n.normalize = function (e, n) {
      var r = this;
      if ("string" == typeof e) e = ki(vi(e).nodes);
      else if (void 0 === e) e = [];
      else if (Array.isArray(e))
        for (var o, i = w((e = e.slice(0))); !(o = i()).done; ) {
          var a = o.value;
          a.parent && a.parent.removeChild(a, "ignore");
        }
      else if ("root" === e.type && "document" !== this.type)
        for (var s, l = w((e = e.nodes.slice(0))); !(s = l()).done; ) {
          var c = s.value;
          c.parent && c.parent.removeChild(c, "ignore");
        }
      else if (e.type) e = [e];
      else if (e.prop) {
        if (void 0 === e.value)
          throw new Error("Value field is missed in node creation");
        "string" != typeof e.value && (e.value = String(e.value)),
          (e = [new Ei(e)]);
      } else if (e.selector) e = [new bi(e)];
      else if (e.name) e = [new Si(e)];
      else {
        if (!e.text) throw new Error("Unknown node type in node creation");
        e = [new Ti(e)];
      }
      var u = e.map(function (e) {
        return (
          e[wi] || t.rebuild(e),
          (e = e.proxyOf).parent && e.parent.removeChild(e),
          e[xi] && Ci(e),
          void 0 === e.raws.before &&
            n &&
            void 0 !== n.raws.before &&
            (e.raws.before = n.raws.before.replace(/\S/g, "")),
          (e.parent = r.proxyOf),
          e
        );
      });
      return u;
    }),
    (n.prepend = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (var r, o = w((t = t.reverse())); !(r = o()).done; ) {
        for (
          var i,
            a = r.value,
            s = this.normalize(a, this.first, "prepend").reverse(),
            l = w(s);
          !(i = l()).done;

        ) {
          var c = i.value;
          this.proxyOf.nodes.unshift(c);
        }
        for (var u in this.indexes)
          this.indexes[u] = this.indexes[u] + s.length;
      }
      return this.markDirty(), this;
    }),
    (n.push = function (e) {
      return (e.parent = this), this.proxyOf.nodes.push(e), this;
    }),
    (n.removeAll = function () {
      for (var e, t = w(this.proxyOf.nodes); !(e = t()).done; )
        e.value.parent = void 0;
      return (this.proxyOf.nodes = []), this.markDirty(), this;
    }),
    (n.removeChild = function (e) {
      var t;
      for (var n in ((e = this.index(e)),
      (this.proxyOf.nodes[e].parent = void 0),
      this.proxyOf.nodes.splice(e, 1),
      this.indexes))
        (t = this.indexes[n]) >= e && (this.indexes[n] = t - 1);
      return this.markDirty(), this;
    }),
    (n.replaceValues = function (e, t, n) {
      return (
        n || ((n = t), (t = {})),
        this.walkDecls(function (r) {
          (t.props && !t.props.includes(r.prop)) ||
            (t.fast && !r.value.includes(t.fast)) ||
            (r.value = r.value.replace(e, n));
        }),
        this.markDirty(),
        this
      );
    }),
    (n.some = function (e) {
      return this.nodes.some(e);
    }),
    (n.walk = function (e) {
      return this.each(function (t, n) {
        var r;
        try {
          r = e(t, n);
        } catch (e) {
          throw t.addToError(e);
        }
        return !1 !== r && t.walk && (r = t.walk(e)), r;
      });
    }),
    (n.walkAtRules = function (e, t) {
      return t
        ? y(e, RegExp)
          ? this.walk(function (n, r) {
              if ("atrule" === n.type && e.test(n.name)) return t(n, r);
            })
          : this.walk(function (n, r) {
              if ("atrule" === n.type && n.name === e) return t(n, r);
            })
        : ((t = e),
          this.walk(function (e, n) {
            if ("atrule" === e.type) return t(e, n);
          }));
    }),
    (n.walkComments = function (e) {
      return this.walk(function (t, n) {
        if ("comment" === t.type) return e(t, n);
      });
    }),
    (n.walkDecls = function (e, t) {
      return t
        ? y(e, RegExp)
          ? this.walk(function (n, r) {
              if ("decl" === n.type && e.test(n.prop)) return t(n, r);
            })
          : this.walk(function (n, r) {
              if ("decl" === n.type && n.prop === e) return t(n, r);
            })
        : ((t = e),
          this.walk(function (e, n) {
            if ("decl" === e.type) return t(e, n);
          }));
    }),
    (n.walkRules = function (e, t) {
      return t
        ? y(e, RegExp)
          ? this.walk(function (n, r) {
              if ("rule" === n.type && e.test(n.selector)) return t(n, r);
            })
          : this.walk(function (n, r) {
              if ("rule" === n.type && n.selector === e) return t(n, r);
            })
        : ((t = e),
          this.walk(function (e, n) {
            if ("rule" === e.type) return t(e, n);
          }));
    }),
    f(t, [
      {
        key: "first",
        get: function () {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
        },
      },
      {
        key: "last",
        get: function () {
          if (this.proxyOf.nodes)
            return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
        },
      },
    ]),
    t
  );
})(Mo);
(Ii.registerParse = function (e) {
  vi = e;
}),
  (Ii.registerRule = function (e) {
    bi = e;
  }),
  (Ii.registerAtRule = function (e) {
    Si = e;
  }),
  (Ii.registerRoot = function (e) {
    _i = e;
  });
var Ai = Ii;
(Ii.default = Ii),
  (Ii.rebuild = function (e) {
    "atrule" === e.type
      ? Object.setPrototypeOf(e, Si.prototype)
      : "rule" === e.type
        ? Object.setPrototypeOf(e, bi.prototype)
        : "decl" === e.type
          ? Object.setPrototypeOf(e, Ei.prototype)
          : "comment" === e.type
            ? Object.setPrototypeOf(e, Ti.prototype)
            : "root" === e.type && Object.setPrototypeOf(e, _i.prototype),
      (e[wi] = !0),
      e.nodes &&
        e.nodes.forEach(function (e) {
          Ii.rebuild(e);
        });
  });
var Oi,
  Ri,
  Mi = (function (e) {
    function t(t) {
      var n;
      return (
        (n = e.call(this, h({ type: "document" }, t)) || this).nodes ||
          (n.nodes = []),
        n
      );
    }
    return (
      g(t, e),
      (t.prototype.toResult = function (e) {
        return void 0 === e && (e = {}), new Oi(new Ri(), this, e).stringify();
      }),
      t
    );
  })(Ai);
(Mi.registerLazyResult = function (e) {
  Oi = e;
}),
  (Mi.registerProcessor = function (e) {
    Ri = e;
  });
var Pi = Mi;
Mi.default = Mi;
var Ni = (function () {
    function e(e, t) {
      if (
        (void 0 === t && (t = {}),
        (this.type = "warning"),
        (this.text = e),
        t.node && t.node.source)
      ) {
        var n = t.node.rangeBy(t);
        (this.line = n.start.line),
          (this.column = n.start.column),
          (this.endLine = n.end.line),
          (this.endColumn = n.end.column);
      }
      for (var r in t) this[r] = t[r];
    }
    return (
      (e.prototype.toString = function () {
        return this.node
          ? this.node.error(this.text, {
              index: this.index,
              plugin: this.plugin,
              word: this.word,
            }).message
          : this.plugin
            ? this.plugin + ": " + this.text
            : this.text;
      }),
      e
    );
  })(),
  Di = Ni;
Ni.default = Ni;
var ji = Di,
  Li = (function () {
    function e(e, t, n) {
      (this.processor = e),
        (this.messages = []),
        (this.root = t),
        (this.opts = n),
        (this.css = void 0),
        (this.map = void 0);
    }
    var t = e.prototype;
    return (
      (t.toString = function () {
        return this.css;
      }),
      (t.warn = function (e, t) {
        void 0 === t && (t = {}),
          t.plugin ||
            (this.lastPlugin &&
              this.lastPlugin.postcssPlugin &&
              (t.plugin = this.lastPlugin.postcssPlugin));
        var n = new ji(e, t);
        return this.messages.push(n), n;
      }),
      (t.warnings = function () {
        return this.messages.filter(function (e) {
          return "warning" === e.type;
        });
      }),
      f(e, [
        {
          key: "content",
          get: function () {
            return this.css;
          },
        },
      ]),
      e
    );
  })(),
  Fi = Li;
Li.default = Li;
var Ui = "'".charCodeAt(0),
  Bi = '"'.charCodeAt(0),
  zi = "\\".charCodeAt(0),
  Hi = "/".charCodeAt(0),
  Vi = "\n".charCodeAt(0),
  qi = " ".charCodeAt(0),
  Gi = "\f".charCodeAt(0),
  Wi = "\t".charCodeAt(0),
  $i = "\r".charCodeAt(0),
  Yi = "[".charCodeAt(0),
  Ki = "]".charCodeAt(0),
  Zi = "(".charCodeAt(0),
  Qi = ")".charCodeAt(0),
  Ji = "{".charCodeAt(0),
  Xi = "}".charCodeAt(0),
  ea = ";".charCodeAt(0),
  ta = "*".charCodeAt(0),
  na = ":".charCodeAt(0),
  ra = "@".charCodeAt(0),
  oa = /[\t\n\f\r "#'()/;[\\\]{}]/g,
  ia = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
  aa = /.[\r\n"'(/\\]/,
  sa = /[\da-f]/i,
  la = Ai,
  ca = (function (e) {
    function t(t) {
      var n;
      return ((n = e.call(this, t) || this).type = "atrule"), n;
    }
    g(t, e);
    var n = t.prototype;
    return (
      (n.append = function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        var o;
        return (
          this.proxyOf.nodes || (this.nodes = []),
          (o = e.prototype.append).call.apply(o, [].concat([this], n))
        );
      }),
      (n.prepend = function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        var o;
        return (
          this.proxyOf.nodes || (this.nodes = []),
          (o = e.prototype.prepend).call.apply(o, [].concat([this], n))
        );
      }),
      t
    );
  })(la),
  ua = ca;
(ca.default = ca), la.registerAtRule(ca);
var da,
  pa,
  fa = Ai,
  ha = (function (e) {
    function t(t) {
      var n;
      return (
        ((n = e.call(this, t) || this).type = "root"),
        n.nodes || (n.nodes = []),
        n
      );
    }
    g(t, e);
    var n = t.prototype;
    return (
      (n.normalize = function (t, n, r) {
        var o = e.prototype.normalize.call(this, t);
        if (n)
          if ("prepend" === r)
            this.nodes.length > 1
              ? (n.raws.before = this.nodes[1].raws.before)
              : delete n.raws.before;
          else if (this.first !== n)
            for (var i, a = w(o); !(i = a()).done; )
              i.value.raws.before = n.raws.before;
        return o;
      }),
      (n.removeChild = function (t, n) {
        var r = this.index(t);
        return (
          !n &&
            0 === r &&
            this.nodes.length > 1 &&
            (this.nodes[1].raws.before = this.nodes[r].raws.before),
          e.prototype.removeChild.call(this, t)
        );
      }),
      (n.toResult = function (e) {
        return void 0 === e && (e = {}), new da(new pa(), this, e).stringify();
      }),
      t
    );
  })(fa);
(ha.registerLazyResult = function (e) {
  da = e;
}),
  (ha.registerProcessor = function (e) {
    pa = e;
  });
var ma = ha;
(ha.default = ha), fa.registerRoot(ha);
var ga = {
    comma: function (e) {
      return ga.split(e, [","], !0);
    },
    space: function (e) {
      return ga.split(e, [" ", "\n", "\t"]);
    },
    split: function (e, t, n) {
      for (
        var r, o = [], i = "", a = !1, s = 0, l = !1, c = "", u = !1, d = w(e);
        !(r = d()).done;

      ) {
        var p = r.value;
        u
          ? (u = !1)
          : "\\" === p
            ? (u = !0)
            : l
              ? p === c && (l = !1)
              : '"' === p || "'" === p
                ? ((l = !0), (c = p))
                : "(" === p
                  ? (s += 1)
                  : ")" === p
                    ? s > 0 && (s -= 1)
                    : 0 === s && t.includes(p) && (a = !0),
          a ? ("" !== i && o.push(i.trim()), (i = ""), (a = !1)) : (i += p);
      }
      return (n || "" !== i) && o.push(i.trim()), o;
    },
  },
  ya = ga;
ga.default = ga;
var va = Ai,
  ba = ya,
  Sa = (function (e) {
    function t(t) {
      var n;
      return (
        ((n = e.call(this, t) || this).type = "rule"),
        n.nodes || (n.nodes = []),
        n
      );
    }
    return (
      g(t, e),
      f(t, [
        {
          key: "selectors",
          get: function () {
            return ba.comma(this.selector);
          },
          set: function (e) {
            var t = this.selector ? this.selector.match(/,\s*/) : null,
              n = t ? t[0] : "," + this.raw("between", "beforeOpen");
            this.selector = e.join(n);
          },
        },
      ]),
      t
    );
  })(va),
  _a = Sa;
(Sa.default = Sa), va.registerRule(Sa);
var xa = No,
  wa = yi,
  Ea = ua,
  Ta = ma,
  ka = _a,
  Ca = { empty: !0, space: !0 },
  Ia = (function () {
    function e(e) {
      (this.input = e),
        (this.root = new Ta()),
        (this.current = this.root),
        (this.spaces = ""),
        (this.semicolon = !1),
        this.createTokenizer(),
        (this.root.source = {
          input: e,
          start: { column: 1, line: 1, offset: 0 },
        });
    }
    var t = e.prototype;
    return (
      (t.atrule = function (e) {
        var t,
          n,
          r,
          o = new Ea();
        (o.name = e[1].slice(1)),
          "" === o.name && this.unnamedAtrule(o, e),
          this.init(o, e[2]);
        for (
          var i = !1, a = !1, s = [], l = [];
          !this.tokenizer.endOfFile();

        ) {
          if (
            ("(" === (t = (e = this.tokenizer.nextToken())[0]) || "[" === t
              ? l.push("(" === t ? ")" : "]")
              : "{" === t && l.length > 0
                ? l.push("}")
                : t === l[l.length - 1] && l.pop(),
            0 === l.length)
          ) {
            if (";" === t) {
              (o.source.end = this.getPosition(e[2])),
                o.source.end.offset++,
                (this.semicolon = !0);
              break;
            }
            if ("{" === t) {
              a = !0;
              break;
            }
            if ("}" === t) {
              if (s.length > 0) {
                for (n = s[(r = s.length - 1)]; n && "space" === n[0]; )
                  n = s[--r];
                n &&
                  ((o.source.end = this.getPosition(n[3] || n[2])),
                  o.source.end.offset++);
              }
              this.end(e);
              break;
            }
            s.push(e);
          } else s.push(e);
          if (this.tokenizer.endOfFile()) {
            i = !0;
            break;
          }
        }
        (o.raws.between = this.spacesAndCommentsFromEnd(s)),
          s.length
            ? ((o.raws.afterName = this.spacesAndCommentsFromStart(s)),
              this.raw(o, "params", s),
              i &&
                ((e = s[s.length - 1]),
                (o.source.end = this.getPosition(e[3] || e[2])),
                o.source.end.offset++,
                (this.spaces = o.raws.between),
                (o.raws.between = "")))
            : ((o.raws.afterName = ""), (o.params = "")),
          a && ((o.nodes = []), (this.current = o));
      }),
      (t.checkMissedSemicolon = function (e) {
        var t = this.colon(e);
        if (!1 !== t) {
          for (
            var n, r = 0, o = t - 1;
            o >= 0 && ("space" === (n = e[o])[0] || 2 !== (r += 1));
            o--
          );
          throw this.input.error(
            "Missed semicolon",
            "word" === n[0] ? n[3] + 1 : n[2],
          );
        }
      }),
      (t.colon = function (e) {
        for (var t, n, r, o, i = 0, a = w(e.entries()); !(o = a()).done; ) {
          var s = o.value,
            l = s[0];
          if (
            ("(" === (n = (t = s[1])[0]) && (i += 1),
            ")" === n && (i -= 1),
            0 === i && ":" === n)
          ) {
            if (r) {
              if ("word" === r[0] && "progid" === r[1]) continue;
              return l;
            }
            this.doubleColon(t);
          }
          r = t;
        }
        return !1;
      }),
      (t.comment = function (e) {
        var t = new wa();
        this.init(t, e[2]),
          (t.source.end = this.getPosition(e[3] || e[2])),
          t.source.end.offset++;
        var n = e[1].slice(2, -2);
        if (/^\s*$/.test(n))
          (t.text = ""), (t.raws.left = n), (t.raws.right = "");
        else {
          var r = n.match(/^(\s*)([^]*\S)(\s*)$/);
          (t.text = r[2]), (t.raws.left = r[1]), (t.raws.right = r[3]);
        }
      }),
      (t.createTokenizer = function () {
        this.tokenizer = (function (e, t) {
          void 0 === t && (t = {});
          var n,
            r,
            o,
            i,
            a,
            s,
            l,
            c,
            u,
            d,
            p = e.css.valueOf(),
            f = t.ignoreErrors,
            h = p.length,
            m = 0,
            g = [],
            y = [];
          function v(t) {
            throw e.error("Unclosed " + t, m);
          }
          return {
            back: function (e) {
              y.push(e);
            },
            endOfFile: function () {
              return 0 === y.length && m >= h;
            },
            nextToken: function (e) {
              if (y.length) return y.pop();
              if (!(m >= h)) {
                var t = !!e && e.ignoreUnclosed;
                switch ((n = p.charCodeAt(m))) {
                  case Vi:
                  case qi:
                  case Wi:
                  case $i:
                  case Gi:
                    r = m;
                    do {
                      (r += 1), (n = p.charCodeAt(r));
                    } while (
                      n === qi ||
                      n === Vi ||
                      n === Wi ||
                      n === $i ||
                      n === Gi
                    );
                    (d = ["space", p.slice(m, r)]), (m = r - 1);
                    break;
                  case Yi:
                  case Ki:
                  case Ji:
                  case Xi:
                  case na:
                  case ea:
                  case Qi:
                    var b = String.fromCharCode(n);
                    d = [b, b, m];
                    break;
                  case Zi:
                    if (
                      ((c = g.length ? g.pop()[1] : ""),
                      (u = p.charCodeAt(m + 1)),
                      "url" === c &&
                        u !== Ui &&
                        u !== Bi &&
                        u !== qi &&
                        u !== Vi &&
                        u !== Wi &&
                        u !== Gi &&
                        u !== $i)
                    ) {
                      r = m;
                      do {
                        if (((s = !1), -1 === (r = p.indexOf(")", r + 1)))) {
                          if (f || t) {
                            r = m;
                            break;
                          }
                          v("bracket");
                        }
                        for (l = r; p.charCodeAt(l - 1) === zi; )
                          (l -= 1), (s = !s);
                      } while (s);
                      (d = ["brackets", p.slice(m, r + 1), m, r]), (m = r);
                    } else
                      (r = p.indexOf(")", m + 1)),
                        (i = p.slice(m, r + 1)),
                        -1 === r || aa.test(i)
                          ? (d = ["(", "(", m])
                          : ((d = ["brackets", i, m, r]), (m = r));
                    break;
                  case Ui:
                  case Bi:
                    (o = n === Ui ? "'" : '"'), (r = m);
                    do {
                      if (((s = !1), -1 === (r = p.indexOf(o, r + 1)))) {
                        if (f || t) {
                          r = m + 1;
                          break;
                        }
                        v("string");
                      }
                      for (l = r; p.charCodeAt(l - 1) === zi; )
                        (l -= 1), (s = !s);
                    } while (s);
                    (d = ["string", p.slice(m, r + 1), m, r]), (m = r);
                    break;
                  case ra:
                    (oa.lastIndex = m + 1),
                      oa.test(p),
                      (r =
                        0 === oa.lastIndex ? p.length - 1 : oa.lastIndex - 2),
                      (d = ["at-word", p.slice(m, r + 1), m, r]),
                      (m = r);
                    break;
                  case zi:
                    for (r = m, a = !0; p.charCodeAt(r + 1) === zi; )
                      (r += 1), (a = !a);
                    if (
                      ((n = p.charCodeAt(r + 1)),
                      a &&
                        n !== Hi &&
                        n !== qi &&
                        n !== Vi &&
                        n !== Wi &&
                        n !== $i &&
                        n !== Gi &&
                        ((r += 1), sa.test(p.charAt(r))))
                    ) {
                      for (; sa.test(p.charAt(r + 1)); ) r += 1;
                      p.charCodeAt(r + 1) === qi && (r += 1);
                    }
                    (d = ["word", p.slice(m, r + 1), m, r]), (m = r);
                    break;
                  default:
                    n === Hi && p.charCodeAt(m + 1) === ta
                      ? (0 === (r = p.indexOf("*/", m + 2) + 1) &&
                          (f || t ? (r = p.length) : v("comment")),
                        (d = ["comment", p.slice(m, r + 1), m, r]),
                        (m = r))
                      : ((ia.lastIndex = m + 1),
                        ia.test(p),
                        (r =
                          0 === ia.lastIndex ? p.length - 1 : ia.lastIndex - 2),
                        (d = ["word", p.slice(m, r + 1), m, r]),
                        g.push(d),
                        (m = r));
                }
                return m++, d;
              }
            },
            position: function () {
              return m;
            },
          };
        })(this.input);
      }),
      (t.decl = function (e, t) {
        var n = new xa();
        this.init(n, e[0][2]);
        var r,
          o = e[e.length - 1];
        for (
          ";" === o[0] && ((this.semicolon = !0), e.pop()),
            n.source.end = this.getPosition(
              o[3] ||
                o[2] ||
                (function (e) {
                  for (var t = e.length - 1; t >= 0; t--) {
                    var n = e[t],
                      r = n[3] || n[2];
                    if (r) return r;
                  }
                })(e),
            ),
            n.source.end.offset++;
          "word" !== e[0][0];

        )
          1 === e.length && this.unknownWord(e),
            (n.raws.before += e.shift()[1]);
        for (
          n.source.start = this.getPosition(e[0][2]), n.prop = "";
          e.length;

        ) {
          var i = e[0][0];
          if (":" === i || "space" === i || "comment" === i) break;
          n.prop += e.shift()[1];
        }
        for (n.raws.between = ""; e.length; ) {
          if (":" === (r = e.shift())[0]) {
            n.raws.between += r[1];
            break;
          }
          "word" === r[0] && /\w/.test(r[1]) && this.unknownWord([r]),
            (n.raws.between += r[1]);
        }
        ("_" !== n.prop[0] && "*" !== n.prop[0]) ||
          ((n.raws.before += n.prop[0]), (n.prop = n.prop.slice(1)));
        for (
          var a, s = [];
          e.length && ("space" === (a = e[0][0]) || "comment" === a);

        )
          s.push(e.shift());
        this.precheckMissedSemicolon(e);
        for (var l = e.length - 1; l >= 0; l--) {
          if ("!important" === (r = e[l])[1].toLowerCase()) {
            n.important = !0;
            var c = this.stringFrom(e, l);
            " !important" !== (c = this.spacesFromEnd(e) + c) &&
              (n.raws.important = c);
            break;
          }
          if ("important" === r[1].toLowerCase()) {
            for (var u = e.slice(0), d = "", p = l; p > 0; p--) {
              var f = u[p][0];
              if (0 === d.trim().indexOf("!") && "space" !== f) break;
              d = u.pop()[1] + d;
            }
            0 === d.trim().indexOf("!") &&
              ((n.important = !0), (n.raws.important = d), (e = u));
          }
          if ("space" !== r[0] && "comment" !== r[0]) break;
        }
        var h = e.some(function (e) {
          return "space" !== e[0] && "comment" !== e[0];
        });
        h &&
          ((n.raws.between += s
            .map(function (e) {
              return e[1];
            })
            .join("")),
          (s = [])),
          this.raw(n, "value", s.concat(e), t),
          n.value.includes(":") && !t && this.checkMissedSemicolon(e);
      }),
      (t.doubleColon = function (e) {
        throw this.input.error(
          "Double colon",
          { offset: e[2] },
          { offset: e[2] + e[1].length },
        );
      }),
      (t.emptyRule = function (e) {
        var t = new ka();
        this.init(t, e[2]),
          (t.selector = ""),
          (t.raws.between = ""),
          (this.current = t);
      }),
      (t.end = function (e) {
        this.current.nodes &&
          this.current.nodes.length &&
          (this.current.raws.semicolon = this.semicolon),
          (this.semicolon = !1),
          (this.current.raws.after =
            (this.current.raws.after || "") + this.spaces),
          (this.spaces = ""),
          this.current.parent
            ? ((this.current.source.end = this.getPosition(e[2])),
              this.current.source.end.offset++,
              (this.current = this.current.parent))
            : this.unexpectedClose(e);
      }),
      (t.endFile = function () {
        this.current.parent && this.unclosedBlock(),
          this.current.nodes &&
            this.current.nodes.length &&
            (this.current.raws.semicolon = this.semicolon),
          (this.current.raws.after =
            (this.current.raws.after || "") + this.spaces),
          (this.root.source.end = this.getPosition(this.tokenizer.position()));
      }),
      (t.freeSemicolon = function (e) {
        if (((this.spaces += e[1]), this.current.nodes)) {
          var t = this.current.nodes[this.current.nodes.length - 1];
          t &&
            "rule" === t.type &&
            !t.raws.ownSemicolon &&
            ((t.raws.ownSemicolon = this.spaces), (this.spaces = ""));
        }
      }),
      (t.getPosition = function (e) {
        var t = this.input.fromOffset(e);
        return { column: t.col, line: t.line, offset: e };
      }),
      (t.init = function (e, t) {
        this.current.push(e),
          (e.source = {
            input: this.input,
            start: this.getPosition(t),
          }),
          (e.raws.before = this.spaces),
          (this.spaces = ""),
          "comment" !== e.type && (this.semicolon = !1);
      }),
      (t.other = function (e) {
        for (
          var t = !1,
            n = null,
            r = !1,
            o = null,
            i = [],
            a = e[1].startsWith("--"),
            s = [],
            l = e;
          l;

        ) {
          if (((n = l[0]), s.push(l), "(" === n || "[" === n))
            o || (o = l), i.push("(" === n ? ")" : "]");
          else if (a && r && "{" === n) o || (o = l), i.push("}");
          else if (0 === i.length) {
            if (";" === n) {
              if (r) return void this.decl(s, a);
              break;
            }
            if ("{" === n) return void this.rule(s);
            if ("}" === n) {
              this.tokenizer.back(s.pop()), (t = !0);
              break;
            }
            ":" === n && (r = !0);
          } else
            n === i[i.length - 1] && (i.pop(), 0 === i.length && (o = null));
          l = this.tokenizer.nextToken();
        }
        if (
          (this.tokenizer.endOfFile() && (t = !0),
          i.length > 0 && this.unclosedBracket(o),
          t && r)
        ) {
          if (!a)
            for (
              ;
              s.length &&
              ("space" === (l = s[s.length - 1][0]) || "comment" === l);

            )
              this.tokenizer.back(s.pop());
          this.decl(s, a);
        } else this.unknownWord(s);
      }),
      (t.parse = function () {
        for (var e; !this.tokenizer.endOfFile(); )
          switch ((e = this.tokenizer.nextToken())[0]) {
            case "space":
              this.spaces += e[1];
              break;
            case ";":
              this.freeSemicolon(e);
              break;
            case "}":
              this.end(e);
              break;
            case "comment":
              this.comment(e);
              break;
            case "at-word":
              this.atrule(e);
              break;
            case "{":
              this.emptyRule(e);
              break;
            default:
              this.other(e);
          }
        this.endFile();
      }),
      (t.precheckMissedSemicolon = function () {}),
      (t.raw = function (e, t, n, r) {
        for (var o, i, a, s, l = n.length, c = "", u = !0, d = 0; d < l; d += 1)
          "space" !== (i = (o = n[d])[0]) || d !== l - 1 || r
            ? "comment" === i
              ? ((s = n[d - 1] ? n[d - 1][0] : "empty"),
                (a = n[d + 1] ? n[d + 1][0] : "empty"),
                Ca[s] || Ca[a] || "," === c.slice(-1) ? (u = !1) : (c += o[1]))
              : (c += o[1])
            : (u = !1);
        if (!u) {
          var p = n.reduce(function (e, t) {
            return e + t[1];
          }, "");
          e.raws[t] = { raw: p, value: c };
        }
        e[t] = c;
      }),
      (t.rule = function (e) {
        e.pop();
        var t = new ka();
        this.init(t, e[0][2]),
          (t.raws.between = this.spacesAndCommentsFromEnd(e)),
          this.raw(t, "selector", e),
          (this.current = t);
      }),
      (t.spacesAndCommentsFromEnd = function (e) {
        for (
          var t, n = "";
          e.length && ("space" === (t = e[e.length - 1][0]) || "comment" === t);

        )
          n = e.pop()[1] + n;
        return n;
      }),
      (t.spacesAndCommentsFromStart = function (e) {
        for (
          var t, n = "";
          e.length && ("space" === (t = e[0][0]) || "comment" === t);

        )
          n += e.shift()[1];
        return n;
      }),
      (t.spacesFromEnd = function (e) {
        for (var t = ""; e.length && "space" === e[e.length - 1][0]; )
          t = e.pop()[1] + t;
        return t;
      }),
      (t.stringFrom = function (e, t) {
        for (var n = "", r = t; r < e.length; r++) n += e[r][1];
        return e.splice(t, e.length - t), n;
      }),
      (t.unclosedBlock = function () {
        var e = this.current.source.start;
        throw this.input.error("Unclosed block", e.line, e.column);
      }),
      (t.unclosedBracket = function (e) {
        throw this.input.error(
          "Unclosed bracket",
          { offset: e[2] },
          { offset: e[2] + 1 },
        );
      }),
      (t.unexpectedClose = function (e) {
        throw this.input.error(
          "Unexpected }",
          { offset: e[2] },
          { offset: e[2] + 1 },
        );
      }),
      (t.unknownWord = function (e) {
        throw this.input.error(
          "Unknown word",
          { offset: e[0][2] },
          { offset: e[0][2] + e[0][1].length },
        );
      }),
      (t.unnamedAtrule = function (e, t) {
        throw this.input.error(
          "At-rule without name",
          { offset: t[2] },
          { offset: t[2] + t[1].length },
        );
      }),
      e
    );
  })(),
  Aa = Ai,
  Oa = Ia,
  Ra = ri;
function Ma(e, t) {
  var n = new Ra(e, t),
    r = new Oa(n);
  try {
    r.parse();
  } catch (e) {
    throw e;
  }
  return r.root;
}
var Pa = Ma;
(Ma.default = Ma), Aa.registerParse(Ma);
var Na = vo.isClean,
  Da = vo.my,
  ja = mi,
  La = Eo,
  Fa = Ai,
  Ua = Pi,
  Ba = Fi,
  za = Pa,
  Ha = ma,
  Va = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule",
  },
  qa = {
    AtRule: !0,
    AtRuleExit: !0,
    Comment: !0,
    CommentExit: !0,
    Declaration: !0,
    DeclarationExit: !0,
    Document: !0,
    DocumentExit: !0,
    Once: !0,
    OnceExit: !0,
    postcssPlugin: !0,
    prepare: !0,
    Root: !0,
    RootExit: !0,
    Rule: !0,
    RuleExit: !0,
  },
  Ga = { Once: !0, postcssPlugin: !0, prepare: !0 };
function Wa(e) {
  return (
    "object" === (void 0 === e ? "undefined" : S(e)) &&
    "function" == typeof e.then
  );
}
function $a(e) {
  var t = !1,
    n = Va[e.type];
  return (
    "decl" === e.type
      ? (t = e.prop.toLowerCase())
      : "atrule" === e.type && (t = e.name.toLowerCase()),
    t && e.append
      ? [n, n + "-" + t, 0, n + "Exit", n + "Exit-" + t]
      : t
        ? [n, n + "-" + t, n + "Exit", n + "Exit-" + t]
        : e.append
          ? [n, 0, n + "Exit"]
          : [n, n + "Exit"]
  );
}
function Ya(e) {
  return {
    eventIndex: 0,
    events:
      "document" === e.type
        ? ["Document", 0, "DocumentExit"]
        : "root" === e.type
          ? ["Root", 0, "RootExit"]
          : $a(e),
    iterator: 0,
    node: e,
    visitorIndex: 0,
    visitors: [],
  };
}
function Ka(e) {
  return (
    (e[Na] = !1),
    e.nodes &&
      e.nodes.forEach(function (e) {
        return Ka(e);
      }),
    e
  );
}
var Za = {},
  Qa = (function () {
    function e(t, n, r) {
      var o,
        i = this;
      if (
        ((this.stringified = !1),
        (this.processed = !1),
        "object" !== (void 0 === n ? "undefined" : S(n)) ||
          null === n ||
          ("root" !== n.type && "document" !== n.type))
      )
        if (y(n, e) || y(n, Ba))
          (o = Ka(n.root)),
            n.map &&
              (void 0 === r.map && (r.map = {}),
              r.map.inline || (r.map.inline = !1),
              (r.map.prev = n.map));
        else {
          var a = za;
          r.syntax && (a = r.syntax.parse),
            r.parser && (a = r.parser),
            a.parse && (a = a.parse);
          try {
            o = a(n, r);
          } catch (e) {
            (this.processed = !0), (this.error = e);
          }
          o && !o[Da] && Fa.rebuild(o);
        }
      else o = Ka(n);
      (this.result = new Ba(t, o, r)),
        (this.helpers = h({}, Za, {
          postcss: Za,
          result: this.result,
        })),
        (this.plugins = this.processor.plugins.map(function (e) {
          return "object" === (void 0 === e ? "undefined" : S(e)) && e.prepare
            ? h({}, e, e.prepare(i.result))
            : e;
        }));
    }
    var t = e.prototype;
    return (
      (t.async = function () {
        return this.error
          ? Promise.reject(this.error)
          : this.processed
            ? Promise.resolve(this.result)
            : (this.processing || (this.processing = this.runAsync()),
              this.processing);
      }),
      (t.catch = function (e) {
        return this.async().catch(e);
      }),
      (t.finally = function (e) {
        return this.async().then(e, e);
      }),
      (t.getAsyncError = function () {
        throw new Error("Use process(css).then(cb) to work with async plugins");
      }),
      (t.handleError = function (e, t) {
        var n = this.result.lastPlugin;
        try {
          t && t.addToError(e),
            (this.error = e),
            "CssSyntaxError" !== e.name || e.plugin
              ? n.postcssVersion
              : ((e.plugin = n.postcssPlugin), e.setMessage());
        } catch (e) {
          console && console.error;
        }
        return e;
      }),
      (t.prepareVisitors = function () {
        var e = this;
        this.listeners = {};
        for (
          var t,
            n = function (t, n, r) {
              e.listeners[n] || (e.listeners[n] = []),
                e.listeners[n].push([t, r]);
            },
            r = w(this.plugins);
          !(t = r()).done;

        ) {
          var o = t.value;
          if ("object" === (void 0 === o ? "undefined" : S(o)))
            for (var i in o) {
              if (!qa[i] && /^[A-Z]/.test(i))
                throw new Error(
                  "Unknown event " +
                    i +
                    " in " +
                    o.postcssPlugin +
                    ". Try to update PostCSS (" +
                    this.processor.version +
                    " now).",
                );
              if (!Ga[i])
                if ("object" === S(o[i]))
                  for (var a in o[i])
                    n(o, "*" === a ? i : i + "-" + a.toLowerCase(), o[i][a]);
                else "function" == typeof o[i] && n(o, i, o[i]);
            }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
      }),
      (t.runAsync = function () {
        var e = this;
        return d(function () {
          var t, n, r, o, i, a, s, l, c, u, d, p;
          return E(this, function (f) {
            switch (f.label) {
              case 0:
                (e.plugin = 0), (t = 0), (f.label = 1);
              case 1:
                if (!(t < e.plugins.length)) return [3, 6];
                if (((n = e.plugins[t]), !Wa((r = e.runOnRoot(n)))))
                  return [3, 5];
                f.label = 2;
              case 2:
                return f.trys.push([2, 4, , 5]), [4, r];
              case 3:
                return f.sent(), [3, 5];
              case 4:
                throw ((o = f.sent()), e.handleError(o));
              case 5:
                return t++, [3, 1];
              case 6:
                if ((e.prepareVisitors(), !e.hasListener)) return [3, 18];
                (i = e.result.root), (f.label = 7);
              case 7:
                if (i[Na]) return [3, 14];
                (i[Na] = !0), (a = [Ya(i)]), (f.label = 8);
              case 8:
                if (!(a.length > 0)) return [3, 13];
                if (!Wa((s = e.visitTick(a)))) return [3, 12];
                f.label = 9;
              case 9:
                return f.trys.push([9, 11, , 12]), [4, s];
              case 10:
                return f.sent(), [3, 12];
              case 11:
                throw (
                  ((l = f.sent()),
                  (c = a[a.length - 1].node),
                  e.handleError(l, c))
                );
              case 12:
                return [3, 8];
              case 13:
                return [3, 7];
              case 14:
                if (!e.listeners.OnceExit) return [3, 18];
                (u = function () {
                  var t, n, r, o, a;
                  return E(this, function (s) {
                    switch (s.label) {
                      case 0:
                        (t = p.value),
                          (n = t[0]),
                          (r = t[1]),
                          (e.result.lastPlugin = n),
                          (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 6, , 7]),
                          "document" !== i.type
                            ? [3, 3]
                            : ((o = i.nodes.map(function (t) {
                                return r(t, e.helpers);
                              })),
                              [4, Promise.all(o)])
                        );
                      case 2:
                        return s.sent(), [3, 5];
                      case 3:
                        return [4, r(i, e.helpers)];
                      case 4:
                        s.sent(), (s.label = 5);
                      case 5:
                        return [3, 7];
                      case 6:
                        throw ((a = s.sent()), e.handleError(a));
                      case 7:
                        return [2];
                    }
                  });
                }),
                  (d = w(e.listeners.OnceExit)),
                  (f.label = 15);
              case 15:
                return (p = d()).done ? [3, 18] : [5, T(u())];
              case 16:
                f.sent(), (f.label = 17);
              case 17:
                return [3, 15];
              case 18:
                return (e.processed = !0), [2, e.stringify()];
            }
          });
        })();
      }),
      (t.runOnRoot = function (e) {
        var t = this;
        this.result.lastPlugin = e;
        try {
          if ("object" === (void 0 === e ? "undefined" : S(e)) && e.Once) {
            if ("document" === this.result.root.type) {
              var n = this.result.root.nodes.map(function (n) {
                return e.Once(n, t.helpers);
              });
              return Wa(n[0]) ? Promise.all(n) : n;
            }
            return e.Once(this.result.root, this.helpers);
          }
          if ("function" == typeof e) return e(this.result.root, this.result);
        } catch (e) {
          throw this.handleError(e);
        }
      }),
      (t.stringify = function () {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        (this.stringified = !0), this.sync();
        var e = this.result.opts,
          t = La;
        e.syntax && (t = e.syntax.stringify),
          e.stringifier && (t = e.stringifier),
          t.stringify && (t = t.stringify);
        var n = new ja(t, this.result.root, this.result.opts).generate();
        return (this.result.css = n[0]), (this.result.map = n[1]), this.result;
      }),
      (t.sync = function () {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        if (((this.processed = !0), this.processing))
          throw this.getAsyncError();
        for (var e, t = w(this.plugins); !(e = t()).done; ) {
          var n = e.value;
          if (Wa(this.runOnRoot(n))) throw this.getAsyncError();
        }
        if ((this.prepareVisitors(), this.hasListener)) {
          for (var r = this.result.root; !r[Na]; )
            (r[Na] = !0), this.walkSync(r);
          if (this.listeners.OnceExit)
            if ("document" === r.type)
              for (var o, i = w(r.nodes); !(o = i()).done; ) {
                var a = o.value;
                this.visitSync(this.listeners.OnceExit, a);
              }
            else this.visitSync(this.listeners.OnceExit, r);
        }
        return this.result;
      }),
      (t.then = function (e, t) {
        return this.async().then(e, t);
      }),
      (t.toString = function () {
        return this.css;
      }),
      (t.visitSync = function (e, t) {
        for (var n, r = w(e); !(n = r()).done; ) {
          var o = n.value,
            i = o[0],
            a = o[1];
          this.result.lastPlugin = i;
          var s = void 0;
          try {
            s = a(t, this.helpers);
          } catch (e) {
            throw this.handleError(e, t.proxyOf);
          }
          if ("root" !== t.type && "document" !== t.type && !t.parent)
            return !0;
          if (Wa(s)) throw this.getAsyncError();
        }
      }),
      (t.visitTick = function (e) {
        var t = e[e.length - 1],
          n = t.node,
          r = t.visitors;
        if ("root" === n.type || "document" === n.type || n.parent) {
          if (r.length > 0 && t.visitorIndex < r.length) {
            var o = r[t.visitorIndex],
              i = o[0],
              a = o[1];
            (t.visitorIndex += 1),
              t.visitorIndex === r.length &&
                ((t.visitors = []), (t.visitorIndex = 0)),
              (this.result.lastPlugin = i);
            try {
              return a(n.toProxy(), this.helpers);
            } catch (e) {
              throw this.handleError(e, n);
            }
          }
          if (0 !== t.iterator) {
            for (var s, l = t.iterator; (s = n.nodes[n.indexes[l]]); )
              if (((n.indexes[l] += 1), !s[Na]))
                return (s[Na] = !0), void e.push(Ya(s));
            (t.iterator = 0), delete n.indexes[l];
          }
          for (var c = t.events; t.eventIndex < c.length; ) {
            var u = c[t.eventIndex];
            if (((t.eventIndex += 1), 0 === u))
              return void (
                n.nodes &&
                n.nodes.length &&
                ((n[Na] = !0), (t.iterator = n.getIterator()))
              );
            if (this.listeners[u]) return void (t.visitors = this.listeners[u]);
          }
          e.pop();
        } else e.pop();
      }),
      (t.walkSync = function (e) {
        var t = this;
        e[Na] = !0;
        for (var n, r = w($a(e)); !(n = r()).done; ) {
          var o = n.value;
          if (0 === o)
            e.nodes &&
              e.each(function (e) {
                e[Na] || t.walkSync(e);
              });
          else {
            var i = this.listeners[o];
            if (i && this.visitSync(i, e.toProxy())) return;
          }
        }
      }),
      (t.warnings = function () {
        return this.sync().warnings();
      }),
      f(e, [
        {
          key: "content",
          get: function () {
            return this.stringify().content;
          },
        },
        {
          key: "css",
          get: function () {
            return this.stringify().css;
          },
        },
        {
          key: "map",
          get: function () {
            return this.stringify().map;
          },
        },
        {
          key: "messages",
          get: function () {
            return this.sync().messages;
          },
        },
        {
          key: "opts",
          get: function () {
            return this.result.opts;
          },
        },
        {
          key: "processor",
          get: function () {
            return this.result.processor;
          },
        },
        {
          key: "root",
          get: function () {
            return this.sync().root;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "LazyResult";
          },
        },
      ]),
      e
    );
  })();
Qa.registerPostcss = function (e) {
  Za = e;
};
var Ja = Qa;
(Qa.default = Qa), Ha.registerLazyResult(Qa), Ua.registerLazyResult(Qa);
var Xa = mi,
  es = Eo,
  ts = Pa,
  ns = Fi,
  rs = (function () {
    function e(e, t, n) {
      var r;
      (t = t.toString()),
        (this.stringified = !1),
        (this._processor = e),
        (this._css = t),
        (this._opts = n),
        (this._map = void 0);
      var o = es;
      (this.result = new ns(this._processor, r, this._opts)),
        (this.result.css = t);
      var i = this;
      Object.defineProperty(this.result, "root", {
        get: function () {
          return i.root;
        },
      });
      var a = new Xa(o, r, this._opts, t);
      if (a.isMap()) {
        var s = a.generate(),
          l = s[0],
          c = s[1];
        l && (this.result.css = l), c && (this.result.map = c);
      } else a.clearAnnotation(), (this.result.css = a.css);
    }
    var t = e.prototype;
    return (
      (t.async = function () {
        return this.error
          ? Promise.reject(this.error)
          : Promise.resolve(this.result);
      }),
      (t.catch = function (e) {
        return this.async().catch(e);
      }),
      (t.finally = function (e) {
        return this.async().then(e, e);
      }),
      (t.sync = function () {
        if (this.error) throw this.error;
        return this.result;
      }),
      (t.then = function (e, t) {
        return this.async().then(e, t);
      }),
      (t.toString = function () {
        return this._css;
      }),
      (t.warnings = function () {
        return [];
      }),
      f(e, [
        {
          key: "content",
          get: function () {
            return this.result.css;
          },
        },
        {
          key: "css",
          get: function () {
            return this.result.css;
          },
        },
        {
          key: "map",
          get: function () {
            return this.result.map;
          },
        },
        {
          key: "messages",
          get: function () {
            return [];
          },
        },
        {
          key: "opts",
          get: function () {
            return this.result.opts;
          },
        },
        {
          key: "processor",
          get: function () {
            return this.result.processor;
          },
        },
        {
          key: "root",
          get: function () {
            if (this._root) return this._root;
            var e,
              t = ts;
            try {
              e = t(this._css, this._opts);
            } catch (e) {
              this.error = e;
            }
            if (this.error) throw this.error;
            return (this._root = e), e;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "NoWorkResult";
          },
        },
      ]),
      e
    );
  })(),
  os = rs;
rs.default = rs;
var is = os,
  as = Ja,
  ss = Pi,
  ls = ma,
  cs = (function () {
    function e(e) {
      void 0 === e && (e = []),
        (this.version = "8.4.38"),
        (this.plugins = this.normalize(e));
    }
    var t = e.prototype;
    return (
      (t.normalize = function (e) {
        for (var t, n = [], r = w(e); !(t = r()).done; ) {
          var o = t.value;
          if (
            (!0 === o.postcss ? (o = o()) : o.postcss && (o = o.postcss),
            "object" === (void 0 === o ? "undefined" : S(o)) &&
              Array.isArray(o.plugins))
          )
            n = n.concat(o.plugins);
          else if (
            "object" === (void 0 === o ? "undefined" : S(o)) &&
            o.postcssPlugin
          )
            n.push(o);
          else if ("function" == typeof o) n.push(o);
          else if (
            "object" !== (void 0 === o ? "undefined" : S(o)) ||
            (!o.parse && !o.stringify)
          )
            throw new Error(o + " is not a PostCSS plugin");
        }
        return n;
      }),
      (t.process = function (e, t) {
        return (
          void 0 === t && (t = {}),
          this.plugins.length || t.parser || t.stringifier || t.syntax
            ? new as(this, e, t)
            : new is(this, e, t)
        );
      }),
      (t.use = function (e) {
        return (this.plugins = this.plugins.concat(this.normalize([e]))), this;
      }),
      e
    );
  })(),
  us = cs;
(cs.default = cs), ls.registerProcessor(cs), ss.registerProcessor(cs);
var ds = No,
  ps = Ho,
  fs = yi,
  hs = ua,
  ms = ri,
  gs = ma,
  ys = _a;
function vs(e, t) {
  if (Array.isArray(e))
    return e.map(function (e) {
      return vs(e);
    });
  var n = e.inputs,
    r = v(e, ["inputs"]);
  if (n) {
    t = [];
    for (var o, i = w(n); !(o = i()).done; ) {
      var a = h({}, o.value, { __proto__: ms.prototype });
      a.map && (a.map = h({}, a.map, { __proto__: ps.prototype })), t.push(a);
    }
  }
  if (
    (r.nodes &&
      (r.nodes = e.nodes.map(function (e) {
        return vs(e, t);
      })),
    r.source)
  ) {
    var s = r.source,
      l = s.inputId,
      c = v(s, ["inputId"]);
    (r.source = c), null != l && (r.source.input = t[l]);
  }
  if ("root" === r.type) return new gs(r);
  if ("decl" === r.type) return new ds(r);
  if ("rule" === r.type) return new ys(r);
  if ("comment" === r.type) return new fs(r);
  if ("atrule" === r.type) return new hs(r);
  throw new Error("Unknown node type: " + e.type);
}
var bs = vs;
vs.default = vs;
var Ss = yo,
  _s = No,
  xs = Ja,
  ws = Ai,
  Es = us,
  Ts = Eo,
  ks = bs,
  Cs = Pi,
  Is = Di,
  As = yi,
  Os = ua,
  Rs = Fi,
  Ms = ri,
  Ps = Pa,
  Ns = ya,
  Ds = _a,
  js = ma,
  Ls = Mo;
function Fs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return 1 === t.length && Array.isArray(t[0]) && (t = t[0]), new Es(t);
}
(Fs.plugin = function (e, t) {
  var n,
    r = !1;
  function o() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    console &&
      console.warn &&
      !r &&
      ((r = !0), process.env.LANG && process.env.LANG.startsWith("cn"));
    var a = t.apply(void 0, [].concat(o));
    return (a.postcssPlugin = e), (a.postcssVersion = new Es().version), a;
  }
  return (
    Object.defineProperty(o, "postcss", {
      get: function () {
        return n || (n = o()), n;
      },
    }),
    (o.process = function (e, t, n) {
      return Fs([o(n)]).process(e, t);
    }),
    o
  );
}),
  (Fs.stringify = Ts),
  (Fs.parse = Ps),
  (Fs.fromJSON = ks),
  (Fs.list = Ns),
  (Fs.comment = function (e) {
    return new As(e);
  }),
  (Fs.atRule = function (e) {
    return new Os(e);
  }),
  (Fs.decl = function (e) {
    return new _s(e);
  }),
  (Fs.rule = function (e) {
    return new Ds(e);
  }),
  (Fs.root = function (e) {
    return new js(e);
  }),
  (Fs.document = function (e) {
    return new Cs(e);
  }),
  (Fs.CssSyntaxError = Ss),
  (Fs.Declaration = _s),
  (Fs.Container = ws),
  (Fs.Processor = Es),
  (Fs.Document = Cs),
  (Fs.Comment = As),
  (Fs.Warning = Is),
  (Fs.AtRule = Os),
  (Fs.Result = Rs),
  (Fs.Input = Ms),
  (Fs.Rule = Ds),
  (Fs.Root = js),
  (Fs.Node = Ls),
  xs.registerPostcss(Fs);
var Us = Fs;
Fs.default = Fs;
var Bs = ao(Us);
Bs.stringify,
  Bs.fromJSON,
  Bs.plugin,
  Bs.parse,
  Bs.list,
  Bs.document,
  Bs.comment,
  Bs.atRule,
  Bs.rule,
  Bs.decl,
  Bs.root,
  Bs.CssSyntaxError,
  Bs.Declaration,
  Bs.Container,
  Bs.Processor,
  Bs.Document,
  Bs.Comment,
  Bs.Warning,
  Bs.AtRule,
  Bs.Result,
  Bs.Input,
  Bs.Rule,
  Bs.Root,
  Bs.Node;
var zs = (function () {
    function e() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      io(this, "parentElement", null),
        io(this, "parentNode", null),
        io(this, "ownerDocument"),
        io(this, "firstChild", null),
        io(this, "lastChild", null),
        io(this, "previousSibling", null),
        io(this, "nextSibling", null),
        io(this, "ELEMENT_NODE", 1),
        io(this, "TEXT_NODE", 3),
        io(this, "nodeType"),
        io(this, "nodeName"),
        io(this, "RRNodeType");
    }
    var t = e.prototype;
    return (
      (t.contains = function (t) {
        if (!y(t, e)) return !1;
        if (t.ownerDocument !== this.ownerDocument) return !1;
        if (t === this) return !0;
        for (; t.parentNode; ) {
          if (t.parentNode === this) return !0;
          t = t.parentNode;
        }
        return !1;
      }),
      (t.appendChild = function (e) {
        throw new Error(
          "RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.",
        );
      }),
      (t.insertBefore = function (e, t) {
        throw new Error(
          "RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.",
        );
      }),
      (t.removeChild = function (e) {
        throw new Error(
          "RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.",
        );
      }),
      (t.toString = function () {
        return "RRNode";
      }),
      f(e, [
        {
          key: "childNodes",
          get: function () {
            for (var e = [], t = this.firstChild; t; )
              e.push(t), (t = t.nextSibling);
            return e;
          },
        },
      ]),
      e
    );
  })(),
  Hs = {
    Node: ["childNodes", "parentNode", "parentElement", "textContent"],
    ShadowRoot: ["host", "styleSheets"],
    Element: ["shadowRoot", "querySelector", "querySelectorAll"],
    MutationObserver: [],
  },
  Vs = {
    Node: ["contains", "getRootNode"],
    ShadowRoot: ["getSelection"],
    Element: [],
    MutationObserver: ["constructor"],
  },
  qs = {};
function Gs(e) {
  if (qs[e]) return qs[e];
  var t = globalThis[e],
    n = t.prototype,
    r = e in Hs ? Hs[e] : void 0,
    o = Boolean(
      r &&
        r.every(function (e) {
          var t, r;
          return Boolean(
            null ==
              (r =
                null == (t = Object.getOwnPropertyDescriptor(n, e))
                  ? void 0
                  : t.get)
              ? void 0
              : r.toString().includes("[native code]"),
          );
        }),
    ),
    i = e in Vs ? Vs[e] : void 0,
    a = Boolean(
      i &&
        i.every(function (e) {
          var t;
          return (
            "function" == typeof n[e] &&
            (null == (t = n[e])
              ? void 0
              : t.toString().includes("[native code]"))
          );
        }),
    );
  if (o && a && !globalThis.Zone) return (qs[e] = t.prototype), t.prototype;
  try {
    var s = document.createElement("iframe");
    document.body.appendChild(s);
    var l = s.contentWindow;
    if (!l) return t.prototype;
    var c = l[e].prototype;
    return document.body.removeChild(s), c ? (qs[e] = c) : n;
  } catch (e) {
    return n;
  }
}
var Ws = {};
function $s(e, t, n) {
  var r,
    o = e + "." + String(n);
  if (Ws[o]) return Ws[o].call(t);
  var i = Gs(e),
    a = null == (r = Object.getOwnPropertyDescriptor(i, n)) ? void 0 : r.get;
  return a ? ((Ws[o] = a), a.call(t)) : t[n];
}
var Ys = {};
function Ks(e, t, n) {
  var r = e + "." + String(n);
  if (Ys[r]) return Ys[r].bind(t);
  var o = Gs(e)[n];
  return "function" != typeof o ? t[n] : ((Ys[r] = o), o.bind(t));
}
function Zs() {
  return Gs("MutationObserver").constructor;
}
function Qs(e, t, n) {
  try {
    if (!(t in e)) return function () {};
    var r = e[t],
      o = n(r);
    return (
      "function" == typeof o &&
        ((o.prototype = o.prototype || {}),
        Object.defineProperties(o, {
          __rrweb_original__: { enumerable: !1, value: r },
        })),
      (e[t] = o),
      function () {
        e[t] = r;
      }
    );
  } catch (e) {
    return function () {};
  }
}
var Js = function (e) {
    return $s("Node", e, "childNodes");
  },
  Xs = function (e) {
    return $s("Node", e, "parentNode");
  },
  el = function (e) {
    return $s("Node", e, "parentElement");
  },
  tl = function (e) {
    return $s("Node", e, "textContent");
  },
  nl = function (e, t) {
    return Ks("Node", e, "contains")(t);
  },
  rl = function (e) {
    return Ks("Node", e, "getRootNode")();
  },
  ol = function (e) {
    return e && "host" in e ? $s("ShadowRoot", e, "host") : null;
  },
  il = function (e) {
    return e && "shadowRoot" in e ? $s("Element", e, "shadowRoot") : null;
  };
function al(e, t, n) {
  void 0 === n && (n = document);
  var r = { capture: !0, passive: !0 };
  return (
    n.addEventListener(e, t, r),
    function () {
      return n.removeEventListener(e, t, r);
    }
  );
}
var sl = {
  map: {},
  getId: function () {
    return -1;
  },
  getNode: function () {
    return null;
  },
  removeNodeFromMap: function () {},
  has: function () {
    return !1;
  },
  reset: function () {},
};
function ll(e, t, n) {
  void 0 === n && (n = {});
  var r = null,
    o = 0;
  return function () {
    for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
      a[s] = arguments[s];
    var l = Date.now();
    o || !1 !== n.leading || (o = l);
    var c = t - (l - o),
      u = this;
    c <= 0 || c > t
      ? (r && (clearTimeout(r), (r = null)), (o = l), e.apply(u, a))
      : r ||
        !1 === n.trailing ||
        (r = setTimeout(function () {
          (o = !1 === n.leading ? 0 : Date.now()), (r = null), e.apply(u, a);
        }, c));
  };
}
function cl(e, t, n, r, o) {
  void 0 === o && (o = window);
  var i = o.Object.getOwnPropertyDescriptor(e, t);
  return (
    o.Object.defineProperty(
      e,
      t,
      r
        ? n
        : {
            set: function (e) {
              var t = this;
              setTimeout(function () {
                n.set.call(t, e);
              }, 0),
                i && i.set && i.set.call(this, e);
            },
          },
    ),
    function () {
      return cl(e, t, i || {}, !0);
    }
  );
}
"undefined" != typeof window &&
  window.Proxy &&
  window.Reflect &&
  (sl = new Proxy(sl, {
    get: function (e, t, n) {
      return Reflect.get(e, t, n);
    },
  }));
var ul = Date.now;
function dl(e) {
  var t,
    n,
    r,
    o,
    i = e.document;
  return {
    left: i.scrollingElement
      ? i.scrollingElement.scrollLeft
      : void 0 !== e.pageXOffset
        ? e.pageXOffset
        : i.documentElement.scrollLeft ||
          ((null == i ? void 0 : i.body) &&
            (null == (t = el(i.body)) ? void 0 : t.scrollLeft)) ||
          (null == (n = null == i ? void 0 : i.body) ? void 0 : n.scrollLeft) ||
          0,
    top: i.scrollingElement
      ? i.scrollingElement.scrollTop
      : void 0 !== e.pageYOffset
        ? e.pageYOffset
        : (null == i ? void 0 : i.documentElement.scrollTop) ||
          ((null == i ? void 0 : i.body) &&
            (null == (r = el(i.body)) ? void 0 : r.scrollTop)) ||
          (null == (o = null == i ? void 0 : i.body) ? void 0 : o.scrollTop) ||
          0,
  };
}
function pl() {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight)
  );
}
function fl() {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth)
  );
}
function hl(e) {
  return e ? (e.nodeType === e.ELEMENT_NODE ? e : el(e)) : null;
}
function ml(e, t, n, r) {
  if (!e) return !1;
  var o = hl(e);
  if (!o) return !1;
  try {
    if ("string" == typeof t) {
      if (o.classList.contains(t)) return !0;
      if (r && null !== o.closest("." + t)) return !0;
    } else if (be(o, t, r)) return !0;
  } catch (e) {}
  if (n) {
    if (o.matches(n)) return !0;
    if (r && null !== o.closest(n)) return !0;
  }
  return !1;
}
function gl(e, t, n) {
  return !("TITLE" !== e.tagName || !n.headTitleMutations) || -2 === t.getId(e);
}
function yl(e, t) {
  if (G(e)) return !1;
  var n = t.getId(e);
  if (!t.has(n)) return !0;
  var r = Xs(e);
  return (!r || r.nodeType !== e.DOCUMENT_NODE) && (!r || yl(r, t));
}
function vl(e) {
  return Boolean(e.changedTouches);
}
function bl(e, t) {
  return Boolean("IFRAME" === e.nodeName && t.getMeta(e));
}
function Sl(e, t) {
  return Boolean(
    "LINK" === e.nodeName &&
      e.nodeType === e.ELEMENT_NODE &&
      e.getAttribute &&
      "stylesheet" === e.getAttribute("rel") &&
      t.getMeta(e),
  );
}
function _l(e) {
  return (
    !!e &&
    (y(e, zs) && "shadowRoot" in e ? Boolean(e.shadowRoot) : Boolean(il(e)))
  );
}
/[1-9][0-9]{12}/.test(Date.now().toString()) ||
  (ul = function () {
    return new Date().getTime();
  });
var xl = (function () {
  function e() {
    I(this, "id", 1),
      I(this, "styleIDMap", new WeakMap()),
      I(this, "idStyleMap", new Map());
  }
  var t = e.prototype;
  return (
    (t.getId = function (e) {
      var t;
      return null != (t = this.styleIDMap.get(e)) ? t : -1;
    }),
    (t.has = function (e) {
      return this.styleIDMap.has(e);
    }),
    (t.add = function (e, t) {
      return this.has(e)
        ? this.getId(e)
        : ((n = void 0 === t ? this.id++ : t),
          this.styleIDMap.set(e, n),
          this.idStyleMap.set(n, e),
          n);
      var n;
    }),
    (t.getStyle = function (e) {
      return this.idStyleMap.get(e) || null;
    }),
    (t.reset = function () {
      (this.styleIDMap = new WeakMap()),
        (this.idStyleMap = new Map()),
        (this.id = 1);
    }),
    (t.generateId = function () {
      return this.id++;
    }),
    (t.remove = function (e) {
      var t = this.styleIDMap.get(e);
      return (
        void 0 !== t &&
        (this.styleIDMap.delete(e), this.idStyleMap.delete(t), !0)
      );
    }),
    e
  );
})();
function wl(e) {
  var t,
    n = null;
  return (
    "getRootNode" in e &&
      (null == (t = rl(e)) ? void 0 : t.nodeType) ===
        Node.DOCUMENT_FRAGMENT_NODE &&
      ol(rl(e)) &&
      (n = ol(rl(e))),
    n
  );
}
function El(e) {
  var t = e.ownerDocument;
  return (
    !!t &&
    (nl(t, e) ||
      (function (e) {
        var t = e.ownerDocument;
        if (!t) return !1;
        var n = (function (e) {
          for (var t, n = e; (t = wl(n)); ) n = t;
          return n;
        })(e);
        return nl(t, n);
      })(e))
  );
}
var Tl = (function (e) {
    return (
      (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
      (e[(e.Load = 1)] = "Load"),
      (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
      (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
      (e[(e.Meta = 4)] = "Meta"),
      (e[(e.Custom = 5)] = "Custom"),
      (e[(e.Plugin = 6)] = "Plugin"),
      e
    );
  })(Tl || {}),
  kl = (function (e) {
    return (
      (e[(e.Mutation = 0)] = "Mutation"),
      (e[(e.MouseMove = 1)] = "MouseMove"),
      (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
      (e[(e.Scroll = 3)] = "Scroll"),
      (e[(e.ViewportResize = 4)] = "ViewportResize"),
      (e[(e.Input = 5)] = "Input"),
      (e[(e.TouchMove = 6)] = "TouchMove"),
      (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
      (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
      (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
      (e[(e.Font = 10)] = "Font"),
      (e[(e.Log = 11)] = "Log"),
      (e[(e.Drag = 12)] = "Drag"),
      (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
      (e[(e.Selection = 14)] = "Selection"),
      (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
      (e[(e.CustomElement = 16)] = "CustomElement"),
      e
    );
  })(kl || {}),
  Cl = (function (e) {
    return (
      (e[(e.MouseUp = 0)] = "MouseUp"),
      (e[(e.MouseDown = 1)] = "MouseDown"),
      (e[(e.Click = 2)] = "Click"),
      (e[(e.ContextMenu = 3)] = "ContextMenu"),
      (e[(e.DblClick = 4)] = "DblClick"),
      (e[(e.Focus = 5)] = "Focus"),
      (e[(e.Blur = 6)] = "Blur"),
      (e[(e.TouchStart = 7)] = "TouchStart"),
      (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
      (e[(e.TouchEnd = 9)] = "TouchEnd"),
      (e[(e.TouchCancel = 10)] = "TouchCancel"),
      e
    );
  })(Cl || {}),
  Il = (function (e) {
    return (
      (e[(e.Mouse = 0)] = "Mouse"),
      (e[(e.Pen = 1)] = "Pen"),
      (e[(e.Touch = 2)] = "Touch"),
      e
    );
  })(Il || {}),
  Al = (function (e) {
    return (
      (e[(e["2D"] = 0)] = "2D"),
      (e[(e.WebGL = 1)] = "WebGL"),
      (e[(e.WebGL2 = 2)] = "WebGL2"),
      e
    );
  })(Al || {}),
  Ol = (function (e) {
    return (
      (e[(e.Play = 0)] = "Play"),
      (e[(e.Pause = 1)] = "Pause"),
      (e[(e.Seeked = 2)] = "Seeked"),
      (e[(e.VolumeChange = 3)] = "VolumeChange"),
      (e[(e.RateChange = 4)] = "RateChange"),
      e
    );
  })(Ol || {}),
  Rl = (function (e) {
    return (
      (e[(e.Document = 0)] = "Document"),
      (e[(e.DocumentType = 1)] = "DocumentType"),
      (e[(e.Element = 2)] = "Element"),
      (e[(e.Text = 3)] = "Text"),
      (e[(e.CDATA = 4)] = "CDATA"),
      (e[(e.Comment = 5)] = "Comment"),
      e
    );
  })(Rl || {});
function Ml(e) {
  return "__ln" in e;
}
var Pl,
  Nl = (function () {
    function e() {
      I(this, "length", 0), I(this, "head", null), I(this, "tail", null);
    }
    var t = e.prototype;
    return (
      (t.get = function (e) {
        if (e >= this.length) throw new Error("Position outside of list range");
        for (var t = this.head, n = 0; n < e; n++)
          t = (null == t ? void 0 : t.next) || null;
        return t;
      }),
      (t.addNode = function (e) {
        var t = { value: e, previous: null, next: null };
        if (((e.__ln = t), e.previousSibling && Ml(e.previousSibling))) {
          var n = e.previousSibling.__ln.next;
          (t.next = n),
            (t.previous = e.previousSibling.__ln),
            (e.previousSibling.__ln.next = t),
            n && (n.previous = t);
        } else if (
          e.nextSibling &&
          Ml(e.nextSibling) &&
          e.nextSibling.__ln.previous
        ) {
          var r = e.nextSibling.__ln.previous;
          (t.previous = r),
            (t.next = e.nextSibling.__ln),
            (e.nextSibling.__ln.previous = t),
            r && (r.next = t);
        } else
          this.head && (this.head.previous = t),
            (t.next = this.head),
            (this.head = t);
        null === t.next && (this.tail = t), this.length++;
      }),
      (t.removeNode = function (e) {
        var t = e.__ln;
        this.head &&
          (t.previous
            ? ((t.previous.next = t.next),
              t.next
                ? (t.next.previous = t.previous)
                : (this.tail = t.previous))
            : ((this.head = t.next),
              this.head ? (this.head.previous = null) : (this.tail = null)),
          e.__ln && delete e.__ln,
          this.length--);
      }),
      e
    );
  })(),
  Dl = function (e, t) {
    return e + "@" + t;
  },
  jl = (function () {
    function e() {
      var e = this;
      I(this, "frozen", !1),
        I(this, "locked", !1),
        I(this, "texts", []),
        I(this, "attributes", []),
        I(this, "attributeMap", new WeakMap()),
        I(this, "removes", []),
        I(this, "mapRemoves", []),
        I(this, "movedMap", {}),
        I(this, "addedSet", new Set()),
        I(this, "movedSet", new Set()),
        I(this, "droppedSet", new Set()),
        I(this, "removesSubTreeCache", new Set()),
        I(this, "mutationCb"),
        I(this, "blockClass"),
        I(this, "blockSelector"),
        I(this, "maskTextClass"),
        I(this, "maskTextSelector"),
        I(this, "inlineStylesheet"),
        I(this, "maskInputOptions"),
        I(this, "maskTextFn"),
        I(this, "maskInputFn"),
        I(this, "keepIframeSrcFn"),
        I(this, "recordCanvas"),
        I(this, "inlineImages"),
        I(this, "slimDOMOptions"),
        I(this, "dataURLOptions"),
        I(this, "doc"),
        I(this, "mirror"),
        I(this, "iframeManager"),
        I(this, "stylesheetManager"),
        I(this, "shadowDomManager"),
        I(this, "canvasManager"),
        I(this, "processedNodeManager"),
        I(this, "unattachedDoc"),
        I(this, "processMutations", function (t) {
          t.forEach(e.processMutation), e.emit();
        }),
        I(this, "emit", function () {
          if (!e.frozen && !e.locked) {
            for (
              var t = [],
                n = new Set(),
                r = new Nl(),
                o = function (t) {
                  for (var n = t, r = -2; -2 === r; )
                    r = (n = n && n.nextSibling) && e.mirror.getId(n);
                  return r;
                },
                i = function (i) {
                  var a = Xs(i);
                  if (a && El(i)) {
                    var s = !1;
                    if (i.nodeType === Node.TEXT_NODE) {
                      var l = a.tagName;
                      if ("TEXTAREA" === l) return;
                      "STYLE" === l && e.addedSet.has(a) && (s = !0);
                    }
                    var c = G(a) ? e.mirror.getId(wl(i)) : e.mirror.getId(a),
                      u = o(i);
                    if (-1 === c || -1 === u) return r.addNode(i);
                    var d = we(i, {
                      doc: e.doc,
                      mirror: e.mirror,
                      blockClass: e.blockClass,
                      blockSelector: e.blockSelector,
                      maskTextClass: e.maskTextClass,
                      maskTextSelector: e.maskTextSelector,
                      skipChild: !0,
                      newlyAddedElement: !0,
                      inlineStylesheet: e.inlineStylesheet,
                      maskInputOptions: e.maskInputOptions,
                      maskTextFn: e.maskTextFn,
                      maskInputFn: e.maskInputFn,
                      slimDOMOptions: e.slimDOMOptions,
                      dataURLOptions: e.dataURLOptions,
                      recordCanvas: e.recordCanvas,
                      inlineImages: e.inlineImages,
                      onSerialize: function (t) {
                        bl(t, e.mirror) && e.iframeManager.addIframe(t),
                          Sl(t, e.mirror) &&
                            e.stylesheetManager.trackLinkElement(t),
                          _l(i) &&
                            e.shadowDomManager.addShadowRoot(il(i), e.doc);
                      },
                      onIframeLoad: function (t, n) {
                        e.iframeManager.attachIframe(t, n),
                          e.shadowDomManager.observeAttachShadow(t);
                      },
                      onStylesheetLoad: function (t, n) {
                        e.stylesheetManager.attachLinkElement(t, n);
                      },
                      cssCaptured: s,
                    });
                    d &&
                      (t.push({ parentId: c, nextId: u, node: d }),
                      n.add(d.id));
                  }
                };
              e.mapRemoves.length;

            ) {
              var a = e.mapRemoves.shift();
              e.cleanupRemovedNode(a), e.mirror.removeNodeFromMap(a);
            }
            for (var s, l = w(e.movedSet); !(s = l()).done; ) {
              var c = s.value;
              (Fl(e.removesSubTreeCache, c, e.mirror) &&
                !e.movedSet.has(Xs(c))) ||
                i(c);
            }
            for (var u, d = w(e.addedSet); !(u = d()).done; ) {
              var p = u.value;
              Ul(e.droppedSet, p) || Fl(e.removesSubTreeCache, p, e.mirror)
                ? Ul(e.movedSet, p)
                  ? i(p)
                  : e.droppedSet.add(p)
                : i(p);
            }
            for (var f = null; r.length; ) {
              var h = null;
              if (f) {
                var m = e.mirror.getId(Xs(f.value)),
                  g = o(f.value);
                -1 !== m && -1 !== g && (h = f);
              }
              if (!h)
                for (var y = r.tail; y; ) {
                  var v = y;
                  if (((y = y.previous), v)) {
                    var b = e.mirror.getId(Xs(v.value));
                    if (-1 === o(v.value)) continue;
                    if (-1 !== b) {
                      h = v;
                      break;
                    }
                    var S = v.value,
                      _ = Xs(S);
                    if (_ && _.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                      var x = ol(_);
                      if (-1 !== e.mirror.getId(x)) {
                        h = v;
                        break;
                      }
                    }
                  }
                }
              if (!h) {
                for (; r.head; ) r.removeNode(r.head.value);
                break;
              }
              (f = h.previous), r.removeNode(h.value), i(h.value);
            }
            var E = {
              texts: e.texts
                .map(function (t) {
                  var n = t.node,
                    r = Xs(n);
                  return (
                    r &&
                      "TEXTAREA" === r.tagName &&
                      e.genTextAreaValueMutation(r),
                    { id: e.mirror.getId(n), value: t.value }
                  );
                })
                .filter(function (e) {
                  return !n.has(e.id);
                })
                .filter(function (t) {
                  return e.mirror.has(t.id);
                }),
              attributes: e.attributes
                .map(function (t) {
                  var n = t.attributes;
                  if ("string" == typeof n.style) {
                    var r = JSON.stringify(t.styleDiff),
                      o = JSON.stringify(t._unchangedStyles);
                    r.length < n.style.length &&
                      (r + o).split("var(").length ===
                        n.style.split("var(").length &&
                      (n.style = t.styleDiff);
                  }
                  return {
                    id: e.mirror.getId(t.node),
                    attributes: n,
                  };
                })
                .filter(function (e) {
                  return !n.has(e.id);
                })
                .filter(function (t) {
                  return e.mirror.has(t.id);
                }),
              removes: e.removes,
              adds: t,
            };
            (E.texts.length ||
              E.attributes.length ||
              E.removes.length ||
              E.adds.length) &&
              ((e.texts = []),
              (e.attributes = []),
              (e.attributeMap = new WeakMap()),
              (e.removes = []),
              (e.addedSet = new Set()),
              (e.movedSet = new Set()),
              (e.droppedSet = new Set()),
              (e.removesSubTreeCache = new Set()),
              (e.movedMap = {}),
              e.mutationCb(E));
          }
        }),
        I(this, "genTextAreaValueMutation", function (t) {
          var n = e.attributeMap.get(t);
          n ||
            ((n = {
              node: t,
              attributes: {},
              styleDiff: {},
              _unchangedStyles: {},
            }),
            e.attributes.push(n),
            e.attributeMap.set(t, n));
          var r = Array.from(Js(t), function (e) {
            return tl(e) || "";
          }).join("");
          n.attributes.value = Z({
            element: t,
            maskInputOptions: e.maskInputOptions,
            tagName: t.tagName,
            type: X(t),
            value: r,
            maskInputFn: e.maskInputFn,
          });
        }),
        I(this, "processMutation", function (t) {
          if (!gl(t.target, e.mirror, e.slimDOMOptions))
            switch (t.type) {
              case "characterData":
                var n = tl(t.target);
                ml(t.target, e.blockClass, e.blockSelector, !1) ||
                  n === t.oldValue ||
                  e.texts.push({
                    value:
                      Se(t.target, e.maskTextClass, e.maskTextSelector, !0) && n
                        ? e.maskTextFn
                          ? e.maskTextFn(n, hl(t.target))
                          : n.replace(/[\S]/g, "*")
                        : n,
                    node: t.target,
                  });
                break;
              case "attributes":
                var r = t.target,
                  o = t.attributeName,
                  i = t.target.getAttribute(o);
                if ("value" === o) {
                  var a = X(r);
                  i = Z({
                    element: r,
                    maskInputOptions: e.maskInputOptions,
                    tagName: r.tagName,
                    type: a,
                    value: i,
                    maskInputFn: e.maskInputFn,
                  });
                }
                if (
                  ml(t.target, e.blockClass, e.blockSelector, !1) ||
                  i === t.oldValue
                )
                  return;
                var s = e.attributeMap.get(t.target);
                if (
                  "IFRAME" === r.tagName &&
                  "src" === o &&
                  !e.keepIframeSrcFn(i)
                ) {
                  if (r.contentDocument) return;
                  o = "rr_src";
                }
                if (
                  (s ||
                    ((s = {
                      node: t.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {},
                    }),
                    e.attributes.push(s),
                    e.attributeMap.set(t.target, s)),
                  "type" === o &&
                    "INPUT" === r.tagName &&
                    "password" === (t.oldValue || "").toLowerCase() &&
                    r.setAttribute("data-rr-is-password", "true"),
                  !ve(r.tagName, o))
                )
                  if (
                    ((s.attributes[o] = ye(e.doc, Q(r.tagName), Q(o), i)),
                    "style" === o)
                  ) {
                    if (!e.unattachedDoc)
                      try {
                        e.unattachedDoc =
                          document.implementation.createHTMLDocument();
                      } catch (t) {
                        e.unattachedDoc = e.doc;
                      }
                    var l = e.unattachedDoc.createElement("span");
                    t.oldValue && l.setAttribute("style", t.oldValue);
                    for (var c, u = w(Array.from(r.style)); !(c = u()).done; ) {
                      var d = c.value,
                        p = r.style.getPropertyValue(d),
                        f = r.style.getPropertyPriority(d);
                      p !== l.style.getPropertyValue(d) ||
                      f !== l.style.getPropertyPriority(d)
                        ? (s.styleDiff[d] = "" === f ? p : [p, f])
                        : (s._unchangedStyles[d] = [p, f]);
                    }
                    for (var h, m = w(Array.from(l.style)); !(h = m()).done; ) {
                      var g = h.value;
                      "" === r.style.getPropertyValue(g) &&
                        (s.styleDiff[g] = !1);
                    }
                  } else
                    "open" === o &&
                      "DIALOG" === r.tagName &&
                      (r.matches("dialog:modal")
                        ? (s.attributes.rr_open_mode = "modal")
                        : (s.attributes.rr_open_mode = "non-modal"));
                break;
              case "childList":
                if (ml(t.target, e.blockClass, e.blockSelector, !0)) return;
                if ("TEXTAREA" === t.target.tagName)
                  return void e.genTextAreaValueMutation(t.target);
                t.addedNodes.forEach(function (n) {
                  return e.genAdds(n, t.target);
                }),
                  t.removedNodes.forEach(function (n) {
                    var r = e.mirror.getId(n),
                      o = G(t.target)
                        ? e.mirror.getId(ol(t.target))
                        : e.mirror.getId(t.target);
                    ml(t.target, e.blockClass, e.blockSelector, !1) ||
                      gl(n, e.mirror, e.slimDOMOptions) ||
                      !(function (e, t) {
                        return -1 !== t.getId(e);
                      })(n, e.mirror) ||
                      (e.addedSet.has(n)
                        ? (Ll(e.addedSet, n), e.droppedSet.add(n))
                        : (e.addedSet.has(t.target) && -1 === r) ||
                          yl(t.target, e.mirror) ||
                          (e.movedSet.has(n) && e.movedMap[Dl(r, o)]
                            ? Ll(e.movedSet, n)
                            : (e.removes.push({
                                parentId: o,
                                id: r,
                                isShadow:
                                  !(!G(t.target) || !W(t.target)) || void 0,
                              }),
                              (function (e, t) {
                                for (var n = [e]; n.length; ) {
                                  var r = n.pop();
                                  t.has(r) ||
                                    (t.add(r),
                                    Js(r).forEach(function (e) {
                                      return n.push(e);
                                    }));
                                }
                              })(n, e.removesSubTreeCache))),
                      e.mapRemoves.push(n));
                  });
            }
        }),
        I(this, "genAdds", function (t, n) {
          if (
            !e.processedNodeManager.inOtherBuffer(t, e) &&
            !e.addedSet.has(t) &&
            !e.movedSet.has(t)
          ) {
            if (e.mirror.hasNode(t)) {
              if (gl(t, e.mirror, e.slimDOMOptions)) return;
              e.movedSet.add(t);
              var r = null;
              n && e.mirror.hasNode(n) && (r = e.mirror.getId(n)),
                r && -1 !== r && (e.movedMap[Dl(e.mirror.getId(t), r)] = !0);
            } else e.addedSet.add(t), e.droppedSet.delete(t);
            ml(t, e.blockClass, e.blockSelector, !1) ||
              (Js(t).forEach(function (t) {
                return e.genAdds(t);
              }),
              _l(t) &&
                Js(il(t)).forEach(function (n) {
                  e.processedNodeManager.add(n, e), e.genAdds(n, t);
                }));
          }
        }),
        I(this, "cleanupRemovedNode", function (t) {
          if ("IFRAME" === t.nodeName)
            try {
              e.iframeManager.removeIframe(t);
            } catch (e) {}
          else
            try {
              e.stylesheetManager.cleanupStylesheetsForRemovedNode(t);
            } catch (e) {}
          t.childNodes.forEach(function (t) {
            e.cleanupRemovedNode(t);
          });
        });
    }
    var t = e.prototype;
    return (
      (t.init = function (e) {
        var t = this;
        [
          "mutationCb",
          "blockClass",
          "blockSelector",
          "maskTextClass",
          "maskTextSelector",
          "inlineStylesheet",
          "maskInputOptions",
          "maskTextFn",
          "maskInputFn",
          "keepIframeSrcFn",
          "recordCanvas",
          "inlineImages",
          "slimDOMOptions",
          "dataURLOptions",
          "doc",
          "mirror",
          "iframeManager",
          "stylesheetManager",
          "shadowDomManager",
          "canvasManager",
          "processedNodeManager",
        ].forEach(function (n) {
          t[n] = e[n];
        });
      }),
      (t.freeze = function () {
        (this.frozen = !0), this.canvasManager.freeze();
      }),
      (t.unfreeze = function () {
        (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
      }),
      (t.isFrozen = function () {
        return this.frozen;
      }),
      (t.lock = function () {
        (this.locked = !0), this.canvasManager.lock();
      }),
      (t.unlock = function () {
        (this.locked = !1), this.canvasManager.unlock(), this.emit();
      }),
      (t.reset = function () {
        this.shadowDomManager.reset(), this.canvasManager.reset();
      }),
      (t.getDoc = function () {
        return this.doc;
      }),
      e
    );
  })();
function Ll(e, t) {
  e.delete(t),
    Js(t).forEach(function (t) {
      return Ll(e, t);
    });
}
function Fl(e, t, n) {
  return (
    0 !== e.size &&
    (function (e, t) {
      var n = Xs(t);
      return !!n && e.has(n);
    })(e, t)
  );
}
function Ul(e, t) {
  return 0 !== e.size && Bl(e, t);
}
function Bl(e, t) {
  var n = Xs(t);
  return !!n && (!!e.has(n) || Bl(e, n));
}
var zl = function (e) {
    return Pl
      ? function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          try {
            return e.apply(void 0, [].concat(n));
          } catch (e) {
            if (Pl && !0 === Pl(e)) return;
            throw e;
          }
        }
      : e;
  },
  Hl = [];
function Vl(e) {
  try {
    if ("composedPath" in e) {
      var t = e.composedPath();
      if (t.length) return t[0];
    } else if ("path" in e && e.path.length) return e.path[0];
  } catch (e) {}
  return e && e.target;
}
function ql(e, t) {
  var n = new jl();
  Hl.push(n), n.init(e);
  var r = new (Zs())(zl(n.processMutations.bind(n)));
  return (
    r.observe(t, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0,
    }),
    r
  );
}
function Gl(e) {
  var t = e.scrollCb,
    n = e.doc,
    r = e.mirror,
    o = e.blockClass,
    i = e.blockSelector,
    a = e.sampling;
  return al(
    "scroll",
    zl(
      ll(
        zl(function (e) {
          var a = Vl(e);
          if (a && !ml(a, o, i, !0)) {
            var s = r.getId(a);
            if (a === n && n.defaultView) {
              var l = dl(n.defaultView);
              t({ id: s, x: l.left, y: l.top });
            } else t({ id: s, x: a.scrollLeft, y: a.scrollTop });
          }
        }),
        a.scroll || 100,
      ),
    ),
    n,
  );
}
var Wl = ["INPUT", "TEXTAREA", "SELECT"],
  $l = new WeakMap();
function Yl(e) {
  return (function (e, t) {
    if (
      (Jl("CSSGroupingRule") && y(e.parentRule, CSSGroupingRule)) ||
      (Jl("CSSMediaRule") && y(e.parentRule, CSSMediaRule)) ||
      (Jl("CSSSupportsRule") && y(e.parentRule, CSSSupportsRule)) ||
      (Jl("CSSConditionRule") && y(e.parentRule, CSSConditionRule))
    ) {
      var n = Array.from(e.parentRule.cssRules).indexOf(e);
      t.unshift(n);
    } else if (e.parentStyleSheet) {
      var r = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
      t.unshift(r);
    }
    return t;
  })(e, []);
}
function Kl(e, t, n) {
  var r, o;
  return e
    ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (o = n.getId(e)),
      { styleId: o, id: r })
    : {};
}
function Zl(e, t) {
  var n,
    r,
    o,
    i,
    a = e.mirror,
    s = e.stylesheetManager;
  i = "#document" === t.nodeName ? a.getId(t) : a.getId(ol(t));
  var l =
      "#document" === t.nodeName
        ? null == (n = t.defaultView)
          ? void 0
          : n.Document
        : null == (o = null == (r = t.ownerDocument) ? void 0 : r.defaultView)
          ? void 0
          : o.ShadowRoot,
    c = (null == l ? void 0 : l.prototype)
      ? Object.getOwnPropertyDescriptor(
          null == l ? void 0 : l.prototype,
          "adoptedStyleSheets",
        )
      : void 0;
  return null !== i && -1 !== i && l && c
    ? (Object.defineProperty(t, "adoptedStyleSheets", {
        configurable: c.configurable,
        enumerable: c.enumerable,
        get: function () {
          var e;
          return null == (e = c.get) ? void 0 : e.call(this);
        },
        set: function (e) {
          var t,
            n = null == (t = c.set) ? void 0 : t.call(this, e);
          if (null !== i && -1 !== i)
            try {
              s.adoptStyleSheets(e, i);
            } catch (e) {}
          return n;
        },
      }),
      zl(function () {
        Object.defineProperty(t, "adoptedStyleSheets", {
          configurable: c.configurable,
          enumerable: c.enumerable,
          get: c.get,
          set: c.set,
        });
      }))
    : function () {};
}
function Ql(e, t) {
  void 0 === t && (t = {});
  var n,
    r = e.doc.defaultView;
  if (!r) return function () {};
  !(function (e, t) {
    var n = e.mutationCb,
      r = e.mousemoveCb,
      o = e.mouseInteractionCb,
      i = e.scrollCb,
      a = e.viewportResizeCb,
      s = e.inputCb,
      l = e.mediaInteractionCb,
      c = e.styleSheetRuleCb,
      u = e.styleDeclarationCb,
      d = e.canvasMutationCb,
      p = e.fontCb,
      f = e.selectionCb,
      h = e.customElementCb;
    (e.mutationCb = function () {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      var i;
      t.mutation && (i = t).mutation.apply(i, [].concat(r)),
        n.apply(void 0, [].concat(r));
    }),
      (e.mousemoveCb = function () {
        for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
          n[o] = arguments[o];
        var i;
        t.mousemove && (i = t).mousemove.apply(i, [].concat(n)),
          r.apply(void 0, [].concat(n));
      }),
      (e.mouseInteractionCb = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var i;
        t.mouseInteraction && (i = t).mouseInteraction.apply(i, [].concat(n)),
          o.apply(void 0, [].concat(n));
      }),
      (e.scrollCb = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var o;
        t.scroll && (o = t).scroll.apply(o, [].concat(n)),
          i.apply(void 0, [].concat(n));
      }),
      (e.viewportResizeCb = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var o;
        t.viewportResize && (o = t).viewportResize.apply(o, [].concat(n)),
          a.apply(void 0, [].concat(n));
      }),
      (e.inputCb = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var o;
        t.input && (o = t).input.apply(o, [].concat(n)),
          s.apply(void 0, [].concat(n));
      }),
      (e.mediaInteractionCb = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var o;
        t.mediaInteaction && (o = t).mediaInteaction.apply(o, [].concat(n)),
          l.apply(void 0, [].concat(n));
      }),
      (e.styleSheetRuleCb = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var o;
        t.styleSheetRule && (o = t).styleSheetRule.apply(o, [].concat(n)),
          c.apply(void 0, [].concat(n));
      }),
      (e.styleDeclarationCb = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var o;
        t.styleDeclaration && (o = t).styleDeclaration.apply(o, [].concat(n)),
          u.apply(void 0, [].concat(n));
      }),
      (e.canvasMutationCb = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var o;
        t.canvasMutation && (o = t).canvasMutation.apply(o, [].concat(n)),
          d.apply(void 0, [].concat(n));
      }),
      (e.fontCb = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var o;
        t.font && (o = t).font.apply(o, [].concat(n)),
          p.apply(void 0, [].concat(n));
      }),
      (e.selectionCb = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var o;
        t.selection && (o = t).selection.apply(o, [].concat(n)),
          f.apply(void 0, [].concat(n));
      }),
      (e.customElementCb = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var o;
        t.customElement && (o = t).customElement.apply(o, [].concat(n)),
          h.apply(void 0, [].concat(n));
      });
  })(e, t),
    e.recordDOM && (n = ql(e, e.doc));
  var o,
    i,
    a,
    s,
    l,
    c,
    u,
    d,
    p,
    f = (function (e) {
      var t = e.mousemoveCb,
        n = e.sampling,
        r = e.doc,
        o = e.mirror;
      if (!1 === n.mousemove) return function () {};
      var i,
        a = "number" == typeof n.mousemove ? n.mousemove : 50,
        s = "number" == typeof n.mousemoveCallback ? n.mousemoveCallback : 500,
        l = [],
        c = ll(
          zl(function (e) {
            var n = Date.now() - i;
            t(
              l.map(function (e) {
                return (e.timeOffset -= n), e;
              }),
              e,
            ),
              (l = []),
              (i = null);
          }),
          s,
        ),
        u = zl(
          ll(
            zl(function (e) {
              var t = Vl(e),
                n = vl(e) ? e.changedTouches[0] : e,
                r = n.clientX,
                a = n.clientY;
              i || (i = ul()),
                l.push({
                  x: r,
                  y: a,
                  id: o.getId(t),
                  timeOffset: ul() - i,
                }),
                c(
                  "undefined" != typeof DragEvent && y(e, DragEvent)
                    ? kl.Drag
                    : y(e, MouseEvent)
                      ? kl.MouseMove
                      : kl.TouchMove,
                );
            }),
            a,
            { trailing: !1 },
          ),
        ),
        d = [al("mousemove", u, r), al("touchmove", u, r), al("drag", u, r)];
      return zl(function () {
        d.forEach(function (e) {
          return e();
        });
      });
    })(e),
    m = (function (e) {
      var t = e.mouseInteractionCb,
        n = e.doc,
        r = e.mirror,
        o = e.blockClass,
        i = e.blockSelector,
        a = e.sampling;
      if (!1 === a.mouseInteraction) return function () {};
      var s =
          !0 === a.mouseInteraction || void 0 === a.mouseInteraction
            ? {}
            : a.mouseInteraction,
        l = [],
        c = null;
      return (
        Object.keys(Cl)
          .filter(function (e) {
            return (
              Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== s[e]
            );
          })
          .forEach(function (e) {
            var a = Q(e),
              s = (function (e) {
                return function (n) {
                  var a = Vl(n);
                  if (!ml(a, o, i, !0)) {
                    var s = null,
                      l = e;
                    if ("pointerType" in n) {
                      switch (n.pointerType) {
                        case "mouse":
                          s = Il.Mouse;
                          break;
                        case "touch":
                          s = Il.Touch;
                          break;
                        case "pen":
                          s = Il.Pen;
                      }
                      s === Il.Touch
                        ? Cl[e] === Cl.MouseDown
                          ? (l = "TouchStart")
                          : Cl[e] === Cl.MouseUp && (l = "TouchEnd")
                        : Il.Pen;
                    } else vl(n) && (s = Il.Touch);
                    null !== s
                      ? ((c = s),
                        ((l.startsWith("Touch") && s === Il.Touch) ||
                          (l.startsWith("Mouse") && s === Il.Mouse)) &&
                          (s = null))
                      : Cl[e] === Cl.Click && ((s = c), (c = null));
                    var u = vl(n) ? n.changedTouches[0] : n;
                    if (u) {
                      var d = r.getId(a),
                        p = u.clientX,
                        f = u.clientY;
                      zl(t)(
                        h(
                          { type: Cl[l], id: d, x: p, y: f },
                          null !== s && { pointerType: s },
                        ),
                      );
                    }
                  }
                };
              })(e);
            if (window.PointerEvent)
              switch (Cl[e]) {
                case Cl.MouseDown:
                case Cl.MouseUp:
                  a = a.replace("mouse", "pointer");
                  break;
                case Cl.TouchStart:
                case Cl.TouchEnd:
                  return;
              }
            l.push(al(a, s, n));
          }),
        zl(function () {
          l.forEach(function (e) {
            return e();
          });
        })
      );
    })(e),
    g = Gl(e),
    v = (function (e, t) {
      var n = e.viewportResizeCb,
        r = t.win,
        o = -1,
        i = -1;
      return al(
        "resize",
        zl(
          ll(
            zl(function () {
              var e = pl(),
                t = fl();
              (o === e && i === t) ||
                (n({ width: Number(t), height: Number(e) }), (o = e), (i = t));
            }),
            200,
          ),
        ),
        r,
      );
    })(e, { win: r }),
    b = (function (e) {
      var t = e.inputCb,
        n = e.doc,
        r = e.mirror,
        o = e.blockClass,
        i = e.blockSelector,
        a = e.ignoreClass,
        s = e.ignoreSelector,
        l = e.maskInputOptions,
        c = e.maskInputFn,
        u = e.sampling,
        d = e.userTriggeredOnInput;
      function p(e) {
        var t = Vl(e),
          r = e.isTrusted,
          u = t && t.tagName;
        if (
          (t && "OPTION" === u && (t = el(t)),
          t &&
            u &&
            !(Wl.indexOf(u) < 0) &&
            !ml(t, o, i, !0) &&
            !(t.classList.contains(a) || (s && t.matches(s))))
        ) {
          var p = t.value,
            h = !1,
            m = X(t) || "";
          "radio" === m || "checkbox" === m
            ? (h = t.checked)
            : (l[u.toLowerCase()] || l[m]) &&
              (p = Z({
                element: t,
                maskInputOptions: l,
                tagName: u,
                type: m,
                value: p,
                maskInputFn: c,
              })),
            f(
              t,
              d
                ? { text: p, isChecked: h, userTriggered: r }
                : { text: p, isChecked: h },
            );
          var g = t.name;
          "radio" === m &&
            g &&
            h &&
            n
              .querySelectorAll('input[type="radio"][name="' + g + '"]')
              .forEach(function (e) {
                if (e !== t) {
                  var n = e.value;
                  f(
                    e,
                    d
                      ? { text: n, isChecked: !h, userTriggered: !1 }
                      : { text: n, isChecked: !h },
                  );
                }
              });
        }
      }
      function f(e, n) {
        var o = $l.get(e);
        if (!o || o.text !== n.text || o.isChecked !== n.isChecked) {
          $l.set(e, n);
          var i = r.getId(e);
          zl(t)(h({}, n, { id: i }));
        }
      }
      var m = ("last" === u.input ? ["change"] : ["input", "change"]).map(
          function (e) {
            return al(e, zl(p), n);
          },
        ),
        g = n.defaultView;
      if (!g)
        return function () {
          m.forEach(function (e) {
            return e();
          });
        };
      var y,
        v = g.Object.getOwnPropertyDescriptor(
          g.HTMLInputElement.prototype,
          "value",
        ),
        b = [
          [g.HTMLInputElement.prototype, "value"],
          [g.HTMLInputElement.prototype, "checked"],
          [g.HTMLSelectElement.prototype, "value"],
          [g.HTMLTextAreaElement.prototype, "value"],
          [g.HTMLSelectElement.prototype, "selectedIndex"],
          [g.HTMLOptionElement.prototype, "selected"],
        ];
      return (
        v &&
          v.set &&
          (y = m).push.apply(
            y,
            [].concat(
              b.map(function (e) {
                return cl(
                  e[0],
                  e[1],
                  {
                    set: function () {
                      zl(p)({ target: this, isTrusted: !1 });
                    },
                  },
                  !1,
                  g,
                );
              }),
            ),
          ),
        zl(function () {
          m.forEach(function (e) {
            return e();
          });
        })
      );
    })(e),
    S =
      ((i = (o = e).mediaInteractionCb),
      (a = o.blockClass),
      (s = o.blockSelector),
      (l = o.mirror),
      (c = o.sampling),
      (u = o.doc),
      (d = zl(function (e) {
        return ll(
          zl(function (t) {
            var n = Vl(t);
            if (n && !ml(n, a, s, !0)) {
              var r = n.currentTime,
                o = n.volume,
                c = n.muted,
                u = n.playbackRate,
                d = n.loop;
              i({
                type: e,
                id: l.getId(n),
                currentTime: r,
                volume: o,
                muted: c,
                playbackRate: u,
                loop: d,
              });
            }
          }),
          c.media || 500,
        );
      })),
      (p = [
        al("play", d(Ol.Play), u),
        al("pause", d(Ol.Pause), u),
        al("seeked", d(Ol.Seeked), u),
        al("volumechange", d(Ol.VolumeChange), u),
        al("ratechange", d(Ol.RateChange), u),
      ]),
      zl(function () {
        p.forEach(function (e) {
          return e();
        });
      })),
    _ = function () {},
    x = function () {},
    E = function () {},
    T = function () {};
  e.recordDOM &&
    ((_ = (function (e, t) {
      var n = e.styleSheetRuleCb,
        r = e.mirror,
        o = e.stylesheetManager,
        i = t.win;
      if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype) return function () {};
      var a = i.CSSStyleSheet.prototype.insertRule;
      (i.CSSStyleSheet.prototype.insertRule = new Proxy(a, {
        apply: zl(function (e, t, i) {
          var a = i[0],
            s = i[1],
            l = Kl(t, r, o.styleMirror),
            c = l.id,
            u = l.styleId;
          return (
            ((c && -1 !== c) || (u && -1 !== u)) &&
              n({ id: c, styleId: u, adds: [{ rule: a, index: s }] }),
            e.apply(t, i)
          );
        }),
      })),
        (i.CSSStyleSheet.prototype.addRule = function (e, t, n) {
          void 0 === n && (n = this.cssRules.length);
          var r = e + " { " + t + " }";
          return i.CSSStyleSheet.prototype.insertRule.apply(this, [r, n]);
        });
      var s,
        l,
        c = i.CSSStyleSheet.prototype.deleteRule;
      (i.CSSStyleSheet.prototype.deleteRule = new Proxy(c, {
        apply: zl(function (e, t, i) {
          var a = i[0],
            s = Kl(t, r, o.styleMirror),
            l = s.id,
            c = s.styleId;
          return (
            ((l && -1 !== l) || (c && -1 !== c)) &&
              n({ id: l, styleId: c, removes: [{ index: a }] }),
            e.apply(t, i)
          );
        }),
      })),
        (i.CSSStyleSheet.prototype.removeRule = function (e) {
          return i.CSSStyleSheet.prototype.deleteRule.apply(this, [e]);
        }),
        i.CSSStyleSheet.prototype.replace &&
          ((s = i.CSSStyleSheet.prototype.replace),
          (i.CSSStyleSheet.prototype.replace = new Proxy(s, {
            apply: zl(function (e, t, i) {
              var a = i[0],
                s = Kl(t, r, o.styleMirror),
                l = s.id,
                c = s.styleId;
              return (
                ((l && -1 !== l) || (c && -1 !== c)) &&
                  n({ id: l, styleId: c, replace: a }),
                e.apply(t, i)
              );
            }),
          }))),
        i.CSSStyleSheet.prototype.replaceSync &&
          ((l = i.CSSStyleSheet.prototype.replaceSync),
          (i.CSSStyleSheet.prototype.replaceSync = new Proxy(l, {
            apply: zl(function (e, t, i) {
              var a = i[0],
                s = Kl(t, r, o.styleMirror),
                l = s.id,
                c = s.styleId;
              return (
                ((l && -1 !== l) || (c && -1 !== c)) &&
                  n({ id: l, styleId: c, replaceSync: a }),
                e.apply(t, i)
              );
            }),
          })));
      var u = {};
      Xl("CSSGroupingRule")
        ? (u.CSSGroupingRule = i.CSSGroupingRule)
        : (Xl("CSSMediaRule") && (u.CSSMediaRule = i.CSSMediaRule),
          Xl("CSSConditionRule") && (u.CSSConditionRule = i.CSSConditionRule),
          Xl("CSSSupportsRule") && (u.CSSSupportsRule = i.CSSSupportsRule));
      var d = {};
      return (
        Object.entries(u).forEach(function (e) {
          var t = e[0],
            i = e[1];
          (d[t] = {
            insertRule: i.prototype.insertRule,
            deleteRule: i.prototype.deleteRule,
          }),
            (i.prototype.insertRule = new Proxy(d[t].insertRule, {
              apply: zl(function (e, t, i) {
                var a = i[0],
                  s = i[1],
                  l = Kl(t.parentStyleSheet, r, o.styleMirror),
                  c = l.id,
                  u = l.styleId;
                return (
                  ((c && -1 !== c) || (u && -1 !== u)) &&
                    n({
                      id: c,
                      styleId: u,
                      adds: [
                        {
                          rule: a,
                          index: [].concat(Yl(t), [s || 0]),
                        },
                      ],
                    }),
                  e.apply(t, i)
                );
              }),
            })),
            (i.prototype.deleteRule = new Proxy(d[t].deleteRule, {
              apply: zl(function (e, t, i) {
                var a = i[0],
                  s = Kl(t.parentStyleSheet, r, o.styleMirror),
                  l = s.id,
                  c = s.styleId;
                return (
                  ((l && -1 !== l) || (c && -1 !== c)) &&
                    n({
                      id: l,
                      styleId: c,
                      removes: [{ index: [].concat(Yl(t), [a]) }],
                    }),
                  e.apply(t, i)
                );
              }),
            }));
        }),
        zl(function () {
          (i.CSSStyleSheet.prototype.insertRule = a),
            (i.CSSStyleSheet.prototype.deleteRule = c),
            s && (i.CSSStyleSheet.prototype.replace = s),
            l && (i.CSSStyleSheet.prototype.replaceSync = l),
            Object.entries(u).forEach(function (e) {
              var t = e[0],
                n = e[1];
              (n.prototype.insertRule = d[t].insertRule),
                (n.prototype.deleteRule = d[t].deleteRule);
            });
        })
      );
    })(e, { win: r })),
    (x = Zl(e, e.doc)),
    (E = (function (e, t) {
      var n = e.styleDeclarationCb,
        r = e.mirror,
        o = e.ignoreCSSAttributes,
        i = e.stylesheetManager,
        a = t.win,
        s = a.CSSStyleDeclaration.prototype.setProperty;
      a.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
        apply: zl(function (e, t, a) {
          var l,
            c = a[0],
            u = a[1],
            d = a[2];
          if (o.has(c)) return s.apply(t, [c, u, d]);
          var p = Kl(
              null == (l = t.parentRule) ? void 0 : l.parentStyleSheet,
              r,
              i.styleMirror,
            ),
            f = p.id,
            h = p.styleId;
          return (
            ((f && -1 !== f) || (h && -1 !== h)) &&
              n({
                id: f,
                styleId: h,
                set: { property: c, value: u, priority: d },
                index: Yl(t.parentRule),
              }),
            e.apply(t, a)
          );
        }),
      });
      var l = a.CSSStyleDeclaration.prototype.removeProperty;
      return (
        (a.CSSStyleDeclaration.prototype.removeProperty = new Proxy(l, {
          apply: zl(function (e, t, a) {
            var s,
              c = a[0];
            if (o.has(c)) return l.apply(t, [c]);
            var u = Kl(
                null == (s = t.parentRule) ? void 0 : s.parentStyleSheet,
                r,
                i.styleMirror,
              ),
              d = u.id,
              p = u.styleId;
            return (
              ((d && -1 !== d) || (p && -1 !== p)) &&
                n({
                  id: d,
                  styleId: p,
                  remove: { property: c },
                  index: Yl(t.parentRule),
                }),
              e.apply(t, a)
            );
          }),
        })),
        zl(function () {
          (a.CSSStyleDeclaration.prototype.setProperty = s),
            (a.CSSStyleDeclaration.prototype.removeProperty = l);
        })
      );
    })(e, { win: r })),
    e.collectFonts &&
      (T = (function (e) {
        var t = e.fontCb,
          n = e.doc,
          r = n.defaultView;
        if (!r) return function () {};
        var o = [],
          i = new WeakMap(),
          a = r.FontFace;
        r.FontFace = function (e, t, n) {
          var r = new a(e, t, n);
          return (
            i.set(r, {
              family: e,
              buffer: "string" != typeof t,
              descriptors: n,
              fontSource:
                "string" == typeof t
                  ? t
                  : JSON.stringify(Array.from(new Uint8Array(t))),
            }),
            r
          );
        };
        var s = Qs(n.fonts, "add", function (e) {
          return function (n) {
            return (
              setTimeout(
                zl(function () {
                  var e = i.get(n);
                  e && (t(e), i.delete(n));
                }),
                0,
              ),
              e.apply(this, [n])
            );
          };
        });
        return (
          o.push(function () {
            r.FontFace = a;
          }),
          o.push(s),
          zl(function () {
            o.forEach(function (e) {
              return e();
            });
          })
        );
      })(e)));
  for (
    var k,
      C = (function (e) {
        var t = e.doc,
          n = e.mirror,
          r = e.blockClass,
          o = e.blockSelector,
          i = e.selectionCb,
          a = !0,
          s = zl(function () {
            var e = t.getSelection();
            if (!(!e || (a && (null == e ? void 0 : e.isCollapsed)))) {
              a = e.isCollapsed || !1;
              for (var s = [], l = e.rangeCount || 0, c = 0; c < l; c++) {
                var u = e.getRangeAt(c),
                  d = u.startContainer,
                  p = u.startOffset,
                  f = u.endContainer,
                  h = u.endOffset;
                ml(d, r, o, !0) ||
                  ml(f, r, o, !0) ||
                  s.push({
                    start: n.getId(d),
                    startOffset: p,
                    end: n.getId(f),
                    endOffset: h,
                  });
              }
              i({ ranges: s });
            }
          });
        return s(), al("selectionchange", s);
      })(e),
      I = (function (e) {
        var t = e.doc,
          n = e.customElementCb,
          r = t.defaultView;
        return r && r.customElements
          ? Qs(r.customElements, "define", function (e) {
              return function (t, r, o) {
                try {
                  n({ define: { name: t } });
                } catch (e) {}
                return e.apply(this, [t, r, o]);
              };
            })
          : function () {};
      })(e),
      A = [],
      O = w(e.plugins);
    !(k = O()).done;

  ) {
    var R = k.value;
    A.push(R.observer(R.callback, r, R.options));
  }
  return zl(function () {
    Hl.forEach(function (e) {
      return e.reset();
    }),
      null == n || n.disconnect(),
      f(),
      m(),
      g(),
      v(),
      b(),
      S(),
      _(),
      x(),
      E(),
      T(),
      C(),
      I(),
      A.forEach(function (e) {
        return e();
      });
  });
}
function Jl(e) {
  return void 0 !== window[e];
}
function Xl(e) {
  return Boolean(
    void 0 !== window[e] &&
      window[e].prototype &&
      "insertRule" in window[e].prototype &&
      "deleteRule" in window[e].prototype,
  );
}
for (
  var ec = (function () {
      function e(e) {
        I(this, "iframeIdToRemoteIdMap", new WeakMap()),
          I(this, "iframeRemoteIdToIdMap", new WeakMap()),
          (this.generateIdFn = e);
      }
      var t = e.prototype;
      return (
        (t.getId = function (e, t, n, r) {
          var o = n || this.getIdToRemoteIdMap(e),
            i = r || this.getRemoteIdToIdMap(e),
            a = o.get(t);
          return a || ((a = this.generateIdFn()), o.set(t, a), i.set(a, t)), a;
        }),
        (t.getIds = function (e, t) {
          var n = this,
            r = this.getIdToRemoteIdMap(e),
            o = this.getRemoteIdToIdMap(e);
          return t.map(function (t) {
            return n.getId(e, t, r, o);
          });
        }),
        (t.getRemoteId = function (e, t, n) {
          var r = n || this.getRemoteIdToIdMap(e);
          return "number" != typeof t ? t : r.get(t) || -1;
        }),
        (t.getRemoteIds = function (e, t) {
          var n = this,
            r = this.getRemoteIdToIdMap(e);
          return t.map(function (t) {
            return n.getRemoteId(e, t, r);
          });
        }),
        (t.reset = function (e) {
          if (!e)
            return (
              (this.iframeIdToRemoteIdMap = new WeakMap()),
              void (this.iframeRemoteIdToIdMap = new WeakMap())
            );
          this.iframeIdToRemoteIdMap.delete(e),
            this.iframeRemoteIdToIdMap.delete(e);
        }),
        (t.getIdToRemoteIdMap = function (e) {
          var t = this.iframeIdToRemoteIdMap.get(e);
          return (
            t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t
          );
        }),
        (t.getRemoteIdToIdMap = function (e) {
          var t = this.iframeRemoteIdToIdMap.get(e);
          return (
            t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t
          );
        }),
        e
      );
    })(),
    tc = (function () {
      function e(e) {
        I(this, "iframes", new WeakMap()),
          I(this, "crossOriginIframeMap", new WeakMap()),
          I(this, "crossOriginIframeMirror", new ec(de)),
          I(this, "crossOriginIframeStyleMirror"),
          I(this, "crossOriginIframeRootIdMap", new WeakMap()),
          I(this, "iframeContentDocumentMap", new WeakMap()),
          I(this, "iframeObserverCleanupMap", new WeakMap()),
          I(this, "mirror"),
          I(this, "mutationCb"),
          I(this, "wrappedEmit"),
          I(this, "loadListener"),
          I(this, "stylesheetManager"),
          I(this, "recordCrossOriginIframes"),
          (this.mutationCb = e.mutationCb),
          (this.wrappedEmit = e.wrappedEmit),
          (this.stylesheetManager = e.stylesheetManager),
          (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
          (this.crossOriginIframeStyleMirror = new ec(
            this.stylesheetManager.styleMirror.generateId.bind(
              this.stylesheetManager.styleMirror,
            ),
          )),
          (this.mirror = e.mirror),
          this.recordCrossOriginIframes &&
            window.addEventListener("message", this.handleMessage.bind(this));
      }
      var t = e.prototype;
      return (
        (t.addIframe = function (e) {
          this.iframes.set(e, !0),
            e.contentWindow &&
              this.crossOriginIframeMap.set(e.contentWindow, e);
        }),
        (t.getIframeContentDocument = function (e) {
          return this.iframeContentDocumentMap.get(e);
        }),
        (t.setObserverCleanup = function (e, t) {
          this.iframeObserverCleanupMap.set(e, t);
        }),
        (t.getObserverCleanup = function (e) {
          return this.iframeObserverCleanupMap.get(e);
        }),
        (t.removeIframe = function (e) {
          var t = this.iframeContentDocumentMap.get(e);
          t &&
            (this.stylesheetManager.cleanupStylesheetsForRemovedNode(t),
            this.mirror.removeNodeFromMap(t, !0)),
            this.iframes.delete(e),
            this.iframeContentDocumentMap.delete(e);
          var n = this.iframeObserverCleanupMap.get(e);
          if (n) {
            try {
              n();
            } catch (e) {}
            this.iframeObserverCleanupMap.delete(e);
          }
        }),
        (t.addLoadListener = function (e) {
          this.loadListener = e;
        }),
        (t.attachIframe = function (e, t) {
          var n, r;
          this.mutationCb({
            adds: [
              {
                parentId: this.mirror.getId(e),
                nextId: null,
                node: t,
              },
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0,
          }),
            e.contentDocument &&
              this.iframeContentDocumentMap.set(e, e.contentDocument),
            this.recordCrossOriginIframes &&
              (null == (n = e.contentWindow) ||
                n.addEventListener("message", this.handleMessage.bind(this))),
            null == (r = this.loadListener) || r.call(this, e),
            e.contentDocument &&
              e.contentDocument.adoptedStyleSheets &&
              e.contentDocument.adoptedStyleSheets.length > 0 &&
              this.stylesheetManager.adoptStyleSheets(
                e.contentDocument.adoptedStyleSheets,
                this.mirror.getId(e.contentDocument),
              );
        }),
        (t.handleMessage = function (e) {
          var t = e;
          if (
            "rrweb" === t.data.type &&
            t.origin === t.data.origin &&
            e.source
          ) {
            var n = this.crossOriginIframeMap.get(e.source);
            if (n) {
              var r = this.transformCrossOriginEvent(n, t.data.event);
              r && this.wrappedEmit(r, t.data.isCheckout);
            }
          }
        }),
        (t.transformCrossOriginEvent = function (e, t) {
          var n,
            r = this;
          switch (t.type) {
            case Tl.FullSnapshot:
              this.crossOriginIframeMirror.reset(e),
                this.crossOriginIframeStyleMirror.reset(e),
                this.replaceIdOnNode(t.data.node, e);
              var o = t.data.node.id;
              return (
                this.crossOriginIframeRootIdMap.set(e, o),
                this.patchRootIdOnNode(t.data.node, o),
                {
                  timestamp: t.timestamp,
                  type: Tl.IncrementalSnapshot,
                  data: {
                    source: kl.Mutation,
                    adds: [
                      {
                        parentId: this.mirror.getId(e),
                        nextId: null,
                        node: t.data.node,
                      },
                    ],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0,
                  },
                }
              );
            case Tl.Meta:
            case Tl.Load:
            case Tl.DomContentLoaded:
              return !1;
            case Tl.Plugin:
              return t;
            case Tl.Custom:
              return (
                this.replaceIds(t.data.payload, e, [
                  "id",
                  "parentId",
                  "previousId",
                  "nextId",
                ]),
                t
              );
            case Tl.IncrementalSnapshot:
              switch (t.data.source) {
                case kl.Mutation:
                  return (
                    t.data.adds.forEach(function (t) {
                      r.replaceIds(t, e, ["parentId", "nextId", "previousId"]),
                        r.replaceIdOnNode(t.node, e);
                      var n = r.crossOriginIframeRootIdMap.get(e);
                      n && r.patchRootIdOnNode(t.node, n);
                    }),
                    t.data.removes.forEach(function (t) {
                      r.replaceIds(t, e, ["parentId", "id"]);
                    }),
                    t.data.attributes.forEach(function (t) {
                      r.replaceIds(t, e, ["id"]);
                    }),
                    t.data.texts.forEach(function (t) {
                      r.replaceIds(t, e, ["id"]);
                    }),
                    t
                  );
                case kl.Drag:
                case kl.TouchMove:
                case kl.MouseMove:
                  return (
                    t.data.positions.forEach(function (t) {
                      r.replaceIds(t, e, ["id"]);
                    }),
                    t
                  );
                case kl.ViewportResize:
                  return !1;
                case kl.MediaInteraction:
                case kl.MouseInteraction:
                case kl.Scroll:
                case kl.CanvasMutation:
                case kl.Input:
                  return this.replaceIds(t.data, e, ["id"]), t;
                case kl.StyleSheetRule:
                case kl.StyleDeclaration:
                  return (
                    this.replaceIds(t.data, e, ["id"]),
                    this.replaceStyleIds(t.data, e, ["styleId"]),
                    t
                  );
                case kl.Font:
                  return t;
                case kl.Selection:
                  return (
                    t.data.ranges.forEach(function (t) {
                      r.replaceIds(t, e, ["start", "end"]);
                    }),
                    t
                  );
                case kl.AdoptedStyleSheet:
                  return (
                    this.replaceIds(t.data, e, ["id"]),
                    this.replaceStyleIds(t.data, e, ["styleIds"]),
                    null == (n = t.data.styles) ||
                      n.forEach(function (t) {
                        r.replaceStyleIds(t, e, ["styleId"]);
                      }),
                    t
                  );
              }
          }
          return !1;
        }),
        (t.replace = function (e, t, n, r) {
          for (var o, i = w(r); !(o = i()).done; ) {
            var a = o.value;
            (Array.isArray(t[a]) || "number" == typeof t[a]) &&
              (Array.isArray(t[a])
                ? (t[a] = e.getIds(n, t[a]))
                : (t[a] = e.getId(n, t[a])));
          }
          return t;
        }),
        (t.replaceIds = function (e, t, n) {
          return this.replace(this.crossOriginIframeMirror, e, t, n);
        }),
        (t.replaceStyleIds = function (e, t, n) {
          return this.replace(this.crossOriginIframeStyleMirror, e, t, n);
        }),
        (t.replaceIdOnNode = function (e, t) {
          var n = this;
          this.replaceIds(e, t, ["id", "rootId"]),
            ("childNodes" in e) &&
              e.childNodes.forEach(function (e) {
                n.replaceIdOnNode(e, t);
              });
        }),
        (t.patchRootIdOnNode = function (e, t) {
          var n = this;
          e.type === Rl.Document || e.rootId || (e.rootId = t),
            ("childNodes" in e) &&
              e.childNodes.forEach(function (e) {
                n.patchRootIdOnNode(e, t);
              });
        }),
        e
      );
    })(),
    nc = (function () {
      function e(e) {
        I(this, "shadowDoms", new WeakSet()),
          I(this, "mutationCb"),
          I(this, "scrollCb"),
          I(this, "bypassOptions"),
          I(this, "mirror"),
          I(this, "restoreHandlers", []),
          (this.mutationCb = e.mutationCb),
          (this.scrollCb = e.scrollCb),
          (this.bypassOptions = e.bypassOptions),
          (this.mirror = e.mirror),
          this.init();
      }
      var t = e.prototype;
      return (
        (t.init = function () {
          this.reset(), this.patchAttachShadow(Element, document);
        }),
        (t.addShadowRoot = function (e, t) {
          var n = this;
          if (W(e) && !this.shadowDoms.has(e)) {
            this.shadowDoms.add(e);
            var r = ql(
              h({}, this.bypassOptions, {
                doc: t,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this,
              }),
              e,
            );
            this.restoreHandlers.push(function () {
              return r.disconnect();
            }),
              this.restoreHandlers.push(
                Gl(
                  h({}, this.bypassOptions, {
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror,
                  }),
                ),
              ),
              setTimeout(function () {
                e.adoptedStyleSheets &&
                  e.adoptedStyleSheets.length > 0 &&
                  n.bypassOptions.stylesheetManager.adoptStyleSheets(
                    e.adoptedStyleSheets,
                    n.mirror.getId(ol(e)),
                  ),
                  n.restoreHandlers.push(
                    Zl(
                      {
                        mirror: n.mirror,
                        stylesheetManager: n.bypassOptions.stylesheetManager,
                      },
                      e,
                    ),
                  );
              }, 0);
          }
        }),
        (t.observeAttachShadow = function (e) {
          e.contentWindow &&
            e.contentDocument &&
            this.patchAttachShadow(e.contentWindow.Element, e.contentDocument);
        }),
        (t.patchAttachShadow = function (e, t) {
          var n = this;
          this.restoreHandlers.push(
            Qs(e.prototype, "attachShadow", function (e) {
              return function (r) {
                var o = e.call(this, r),
                  i = il(this);
                return i && El(this) && n.addShadowRoot(i, t), o;
              };
            }),
          );
        }),
        (t.reset = function () {
          this.restoreHandlers.forEach(function (e) {
            try {
              e();
            } catch (e) {}
          }),
            (this.restoreHandlers = []),
            (this.shadowDoms = new WeakSet());
        }),
        e
      );
    })(),
    rc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    oc = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
    ic = 0;
  ic < 64;
  ic++
)
  oc[rc.charCodeAt(ic)] = ic;
var ac = new Map(),
  sc = function (e, t, n) {
    if (e && (uc(e, t) || "object" === (void 0 === e ? "undefined" : S(e)))) {
      var r = (function (e, t) {
          var n = ac.get(e);
          return (
            n || ((n = new Map()), ac.set(e, n)),
            n.has(t) || n.set(t, []),
            n.get(t)
          );
        })(n, e.constructor.name),
        o = r.indexOf(e);
      return -1 === o && ((o = r.length), r.push(e)), o;
    }
  };
function lc(e, t, n) {
  return y(e, Array)
    ? e.map(function (e) {
        return lc(e, t, n);
      })
    : null === e
      ? e
      : y(e, Float32Array) ||
          y(e, Float64Array) ||
          y(e, Int32Array) ||
          y(e, Uint32Array) ||
          y(e, Uint8Array) ||
          y(e, Uint16Array) ||
          y(e, Int16Array) ||
          y(e, Int8Array) ||
          y(e, Uint8ClampedArray)
        ? { rr_type: e.constructor.name, args: [Object.values(e)] }
        : y(e, ArrayBuffer)
          ? {
              rr_type: e.constructor.name,
              base64: (function (e) {
                var t,
                  n = new Uint8Array(e),
                  r = n.length,
                  o = "";
                for (t = 0; t < r; t += 3)
                  (o += rc[n[t] >> 2]),
                    (o += rc[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
                    (o += rc[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
                    (o += rc[63 & n[t + 2]]);
                return (
                  r % 3 == 2
                    ? (o = o.substring(0, o.length - 1) + "=")
                    : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="),
                  o
                );
              })(e),
            }
          : y(e, DataView)
            ? {
                rr_type: e.constructor.name,
                args: [lc(e.buffer, t, n), e.byteOffset, e.byteLength],
              }
            : y(e, HTMLImageElement)
              ? { rr_type: e.constructor.name, src: e.src }
              : y(e, HTMLCanvasElement)
                ? { rr_type: "HTMLImageElement", src: e.toDataURL() }
                : y(e, ImageData)
                  ? {
                      rr_type: e.constructor.name,
                      args: [lc(e.data, t, n), e.width, e.height],
                    }
                  : uc(e, t) || "object" === (void 0 === e ? "undefined" : S(e))
                    ? {
                        rr_type: e.constructor.name,
                        index: sc(e, t, n),
                      }
                    : e;
}
var cc = function (e, t, n) {
    return e.map(function (e) {
      return lc(e, t, n);
    });
  },
  uc = function (e, t) {
    var n = [
      "WebGLActiveInfo",
      "WebGLBuffer",
      "WebGLFramebuffer",
      "WebGLProgram",
      "WebGLRenderbuffer",
      "WebGLShader",
      "WebGLShaderPrecisionFormat",
      "WebGLTexture",
      "WebGLUniformLocation",
      "WebGLVertexArrayObject",
      "WebGLVertexArrayObjectOES",
    ].filter(function (e) {
      return "function" == typeof t[e];
    });
    return Boolean(
      n.find(function (n) {
        return y(e, t[n]);
      }),
    );
  };
function dc(e, t, n, r) {
  var o = [];
  try {
    var i = Qs(e.HTMLCanvasElement.prototype, "getContext", function (e) {
      return function (o) {
        for (
          var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1;
          s < i;
          s++
        )
          a[s - 1] = arguments[s];
        if (!ml(this, t, n, !0)) {
          var l = (function (e) {
            return "experimental-webgl" === e ? "webgl" : e;
          })(o);
          if (
            ("__context" in this || (this.__context = l),
            r && ["webgl", "webgl2"].includes(l))
          )
            if (a[0] && "object" === S(a[0])) {
              var c = a[0];
              c.preserveDrawingBuffer || (c.preserveDrawingBuffer = !0);
            } else a.splice(0, 1, { preserveDrawingBuffer: !0 });
        }
        return e.apply(this, [].concat([o], a));
      };
    });
    o.push(i);
  } catch (e) {}
  return function () {
    o.forEach(function (e) {
      return e();
    });
  };
}
function pc(e, t, n, r, o, i) {
  for (
    var a,
      s = function () {
        var s = a.value;
        if (
          [
            "isContextLost",
            "canvas",
            "drawingBufferWidth",
            "drawingBufferHeight",
          ].includes(s)
        )
          return "continue";
        try {
          if ("function" != typeof e[s]) return "continue";
          var c = Qs(e, s, function (e) {
            return function () {
              for (
                var a = arguments.length, l = new Array(a), c = 0;
                c < a;
                c++
              )
                l[c] = arguments[c];
              var u = e.apply(this, l);
              if (
                (sc(u, i, this),
                ("tagName" in this.canvas) && !ml(this.canvas, r, o, !0))
              ) {
                var d = cc(l, i, this),
                  p = { type: t, property: s, args: d };
                n(this.canvas, p);
              }
              return u;
            };
          });
          l.push(c);
        } catch (r) {
          var u = cl(e, s, {
            set: function (e) {
              n(this.canvas, {
                type: t,
                property: s,
                args: [e],
                setter: !0,
              });
            },
          });
          l.push(u);
        }
      },
      l = [],
      c = w(Object.getOwnPropertyNames(e));
    !(a = c()).done;

  )
    s();
  return l;
}
var fc,
  hc =
    "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=",
  mc =
    "undefined" != typeof window &&
    window.Blob &&
    new Blob(
      [
        ((fc = hc),
        Uint8Array.from(atob(fc), function (e) {
          return e.charCodeAt(0);
        })),
      ],
      { type: "text/javascript;charset=utf-8" },
    );
function gc(e) {
  var t;
  try {
    if (!(t = mc && (window.URL || window.webkitURL).createObjectURL(mc)))
      throw "";
    var n = new Worker(t, { name: null == e ? void 0 : e.name });
    return (
      n.addEventListener("error", function () {
        (window.URL || window.webkitURL).revokeObjectURL(t);
      }),
      n
    );
  } catch (t) {
    return new Worker("data:text/javascript;base64," + hc, {
      name: null == e ? void 0 : e.name,
    });
  } finally {
    t && (window.URL || window.webkitURL).revokeObjectURL(t);
  }
}
var yc,
  vc,
  bc,
  Sc = (function () {
    function e(e) {
      var t = this;
      I(this, "pendingCanvasMutations", new Map()),
        I(this, "rafStamps", { latestId: 0, invokeId: null }),
        I(this, "mirror"),
        I(this, "mutationCb"),
        I(this, "resetObservers"),
        I(this, "frozen", !1),
        I(this, "locked", !1),
        I(this, "processMutation", function (e, n) {
          (!(
            t.rafStamps.invokeId &&
            t.rafStamps.latestId !== t.rafStamps.invokeId
          ) &&
            t.rafStamps.invokeId) ||
            (t.rafStamps.invokeId = t.rafStamps.latestId),
            t.pendingCanvasMutations.has(e) ||
              t.pendingCanvasMutations.set(e, []),
            t.pendingCanvasMutations.get(e).push(n);
        });
      var n = e.sampling,
        r = void 0 === n ? "all" : n,
        o = e.win,
        i = e.blockClass,
        a = e.blockSelector,
        s = e.recordCanvas,
        l = e.dataURLOptions;
      (this.mutationCb = e.mutationCb),
        (this.mirror = e.mirror),
        s && "all" === r && this.initCanvasMutationObserver(o, i, a),
        s &&
          "number" == typeof r &&
          this.initCanvasFPSObserver(r, o, i, a, {
            dataURLOptions: l,
          });
    }
    var t = e.prototype;
    return (
      (t.reset = function () {
        this.pendingCanvasMutations.clear(),
          this.resetObservers && this.resetObservers();
      }),
      (t.freeze = function () {
        this.frozen = !0;
      }),
      (t.unfreeze = function () {
        this.frozen = !1;
      }),
      (t.lock = function () {
        this.locked = !0;
      }),
      (t.unlock = function () {
        this.locked = !1;
      }),
      (t.initCanvasFPSObserver = function (e, t, n, r, o) {
        var i = this,
          a = dc(t, n, r, !0),
          s = new Map(),
          l = new gc();
        l.onmessage = function (e) {
          var t = e.data.id;
          if ((s.set(t, !1), "base64" in e.data)) {
            var n = e.data,
              r = n.base64,
              o = n.type,
              a = n.width,
              l = n.height;
            i.mutationCb({
              id: t,
              type: Al["2D"],
              commands: [
                { property: "clearRect", args: [0, 0, a, l] },
                {
                  property: "drawImage",
                  args: [
                    {
                      rr_type: "ImageBitmap",
                      args: [
                        {
                          rr_type: "Blob",
                          data: [{ rr_type: "ArrayBuffer", base64: r }],
                          type: o,
                        },
                      ],
                    },
                    0,
                    0,
                  ],
                },
              ],
            });
          }
        };
        var c,
          u = 1e3 / e,
          p = 0,
          f = function (e) {
            if (p && e - p < u) c = requestAnimationFrame(f);
            else {
              p = e;
              var a,
                h = i;
              ((a = []),
              t.document.querySelectorAll("canvas").forEach(function (e) {
                ml(e, n, r, !0) || a.push(e);
              }),
              a).forEach(
                d(function (e) {
                  var t, n, r, i;
                  return E(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          (n = h.mirror.getId(e)),
                          s.get(n) || 0 === e.width || 0 === e.height
                            ? [2]
                            : (s.set(n, !0),
                              ["webgl", "webgl2"].includes(e.__context) &&
                                ((r = e.getContext(e.__context)),
                                !1 ===
                                  (null ==
                                  (t =
                                    null == r
                                      ? void 0
                                      : r.getContextAttributes())
                                    ? void 0
                                    : t.preserveDrawingBuffer) &&
                                  r.clear(r.COLOR_BUFFER_BIT)),
                              [4, createImageBitmap(e)])
                        );
                      case 1:
                        return (
                          (i = a.sent()),
                          l.postMessage(
                            {
                              id: n,
                              bitmap: i,
                              width: e.width,
                              height: e.height,
                              dataURLOptions: o.dataURLOptions,
                            },
                            [i],
                          ),
                          [2]
                        );
                    }
                  });
                }),
              ),
                (c = requestAnimationFrame(f));
            }
          };
        (c = requestAnimationFrame(f)),
          (this.resetObservers = function () {
            a(), cancelAnimationFrame(c);
          });
      }),
      (t.initCanvasMutationObserver = function (e, t, n) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        var r = dc(e, t, n, !1),
          o = (function (e, t, n, r) {
            for (
              var o,
                i = function () {
                  var i = o.value;
                  try {
                    if (
                      "function" !=
                      typeof t.CanvasRenderingContext2D.prototype[i]
                    )
                      return "continue";
                    var s = Qs(
                      t.CanvasRenderingContext2D.prototype,
                      i,
                      function (o) {
                        return function () {
                          for (
                            var a = this,
                              s = arguments.length,
                              l = new Array(s),
                              c = 0;
                            c < s;
                            c++
                          )
                            l[c] = arguments[c];
                          return (
                            ml(this.canvas, n, r, !0) ||
                              setTimeout(function () {
                                var n = cc(l, t, a);
                                e(a.canvas, {
                                  type: Al["2D"],
                                  property: i,
                                  args: n,
                                });
                              }, 0),
                            o.apply(this, l)
                          );
                        };
                      },
                    );
                    a.push(s);
                  } catch (n) {
                    var l = cl(t.CanvasRenderingContext2D.prototype, i, {
                      set: function (t) {
                        e(this.canvas, {
                          type: Al["2D"],
                          property: i,
                          args: [t],
                          setter: !0,
                        });
                      },
                    });
                    a.push(l);
                  }
                },
                a = [],
                s = w(
                  Object.getOwnPropertyNames(
                    t.CanvasRenderingContext2D.prototype,
                  ),
                );
              !(o = s()).done;

            )
              i();
            return function () {
              a.forEach(function (e) {
                return e();
              });
            };
          })(this.processMutation.bind(this), e, t, n),
          i = (function (e, t, n, r) {
            var o,
              i,
              a = [];
            return (
              (o = a).push.apply(
                o,
                [].concat(
                  pc(t.WebGLRenderingContext.prototype, Al.WebGL, e, n, r, t),
                ),
              ),
              void 0 !== t.WebGL2RenderingContext &&
                (i = a).push.apply(
                  i,
                  [].concat(
                    pc(
                      t.WebGL2RenderingContext.prototype,
                      Al.WebGL2,
                      e,
                      n,
                      r,
                      t,
                    ),
                  ),
                ),
              function () {
                a.forEach(function (e) {
                  return e();
                });
              }
            );
          })(this.processMutation.bind(this), e, t, n);
        this.resetObservers = function () {
          r(), o(), i();
        };
      }),
      (t.startPendingCanvasMutationFlusher = function () {
        var e = this;
        requestAnimationFrame(function () {
          return e.flushPendingCanvasMutations();
        });
      }),
      (t.startRAFTimestamping = function () {
        var e = this,
          t = function (n) {
            (e.rafStamps.latestId = n), requestAnimationFrame(t);
          };
        requestAnimationFrame(t);
      }),
      (t.flushPendingCanvasMutations = function () {
        var e = this;
        this.pendingCanvasMutations.forEach(function (t, n) {
          var r = e.mirror.getId(n);
          e.flushPendingCanvasMutationFor(n, r);
        }),
          requestAnimationFrame(function () {
            return e.flushPendingCanvasMutations();
          });
      }),
      (t.flushPendingCanvasMutationFor = function (e, t) {
        if (!this.frozen && !this.locked) {
          var n = this.pendingCanvasMutations.get(e);
          if (n && -1 !== t) {
            var r = n.map(function (e) {
                return e.type, v(e, ["type"]);
              }),
              o = n[0].type;
            this.mutationCb({ id: t, type: o, commands: r }),
              this.pendingCanvasMutations.delete(e);
          }
        }
      }),
      e
    );
  })(),
  _c = (function () {
    function e(e) {
      I(this, "trackedLinkElements", new WeakSet()),
        I(this, "mutationCb"),
        I(this, "adoptedStyleSheetCb"),
        I(this, "styleMirror", new xl()),
        (this.mutationCb = e.mutationCb),
        (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
    }
    var t = e.prototype;
    return (
      (t.attachLinkElement = function (e, t) {
        "_cssText" in t.attributes &&
          this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [{ id: t.id, attributes: t.attributes }],
          }),
          this.trackLinkElement(e);
      }),
      (t.trackLinkElement = function (e) {
        this.trackedLinkElements.has(e) ||
          (this.trackedLinkElements.add(e),
          this.trackStylesheetInLinkElement(e));
      }),
      (t.adoptStyleSheets = function (e, t) {
        var n,
          r = function () {
            var e = o.value,
              t = void 0;
            n.styleMirror.has(e)
              ? (t = n.styleMirror.getId(e))
              : ((t = n.styleMirror.add(e)),
                a.push({
                  styleId: t,
                  rules: Array.from(e.rules || CSSRule, function (t, n) {
                    return { rule: Y(t, e.href), index: n };
                  }),
                })),
              i.styleIds.push(t);
          };
        if (0 !== e.length) {
          for (
            var o, i = { id: t, styleIds: [] }, a = [], s = w(e);
            !(o = s()).done;

          )
            (n = this), r();
          a.length > 0 && (i.styles = a), this.adoptedStyleSheetCb(i);
        }
      }),
      (t.reset = function () {
        this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
      }),
      (t.cleanupStylesheetsForRemovedNode = function (e) {
        var t = this;
        try {
          if (e.nodeType === Node.DOCUMENT_NODE) {
            var n = e;
            if (n.adoptedStyleSheets)
              for (var r, o = w(n.adoptedStyleSheets); !(r = o()).done; ) {
                var i = r.value;
                this.styleMirror.remove(i);
              }
          }
          if ("STYLE" === e.nodeName) {
            var a = e;
            a.sheet && this.styleMirror.remove(a.sheet);
          }
          if ("LINK" === e.nodeName && "stylesheet" === e.rel) {
            var s = e;
            s.sheet && this.styleMirror.remove(s.sheet);
          }
          e.childNodes &&
            e.childNodes.forEach(function (e) {
              t.cleanupStylesheetsForRemovedNode(e);
            });
        } catch (e) {}
      }),
      (t.trackStylesheetInLinkElement = function (e) {}),
      e
    );
  })(),
  xc = (function () {
    function e() {
      I(this, "nodeMap", new WeakMap()), I(this, "active", !1);
    }
    var t = e.prototype;
    return (
      (t.inOtherBuffer = function (e, t) {
        var n = this.nodeMap.get(e);
        return (
          n &&
          Array.from(n).some(function (e) {
            return e !== t;
          })
        );
      }),
      (t.add = function (e, t) {
        var n = this;
        this.active ||
          ((this.active = !0),
          requestAnimationFrame(function () {
            (n.nodeMap = new WeakMap()), (n.active = !1);
          })),
          this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
      }),
      (t.destroy = function () {}),
      e
    );
  })();
function wc(e) {
  try {
    var t = new URL(e).origin;
    return "null" !== t ? t : null;
  } catch (e) {
    return null;
  }
}
var Ec = !1;
try {
  if (
    2 !==
    Array.from([1], function (e) {
      return 2 * e;
    })[0]
  ) {
    var Tc = document.createElement("iframe");
    document.body.appendChild(Tc),
      (Array.from =
        (null == (k = Tc.contentWindow) ? void 0 : k.Array.from) || Array.from),
      document.body.removeChild(Tc);
  }
} catch (e) {}
var kc,
  Cc,
  Ic = new K();
function Ac(e) {
  void 0 === e && (e = {});
  var t,
    n = e.emit,
    r = e.checkoutEveryNms,
    o = e.checkoutEveryNth,
    i = e.blockClass,
    a = void 0 === i ? "rr-block" : i,
    s = e.blockSelector,
    l = void 0 === s ? null : s,
    c = e.ignoreClass,
    u = void 0 === c ? "rr-ignore" : c,
    d = e.ignoreSelector,
    p = void 0 === d ? null : d,
    f = e.maskTextClass,
    m = void 0 === f ? "rr-mask" : f,
    g = e.maskTextSelector,
    y = void 0 === g ? null : g,
    v = e.inlineStylesheet,
    b = void 0 === v || v,
    _ = e.maskAllInputs,
    x = e.maskInputOptions,
    E = e.slimDOMOptions,
    T = e.maskInputFn,
    k = e.maskTextFn,
    C = e.hooks,
    I = e.packFn,
    A = e.sampling,
    O = void 0 === A ? {} : A,
    R = e.dataURLOptions,
    M = void 0 === R ? {} : R,
    P = e.mousemoveWait,
    N = e.recordDOM,
    D = void 0 === N || N,
    j = e.recordCanvas,
    L = void 0 !== j && j,
    F = e.recordCrossOriginIframes,
    U = void 0 !== F && F,
    B = e.allowedIframeOrigins,
    z = e.recordAfter,
    H =
      void 0 === z
        ? "DOMContentLoaded" === e.recordAfter
          ? e.recordAfter
          : "load"
        : z,
    V = e.userTriggeredOnInput,
    q = void 0 !== V && V,
    G = e.collectFonts,
    W = void 0 !== G && G,
    $ = e.inlineImages,
    Y = void 0 !== $ && $,
    Z = e.plugins,
    Q = e.keepIframeSrcFn,
    J =
      void 0 === Q
        ? function () {
            return !1;
          }
        : Q,
    X = e.ignoreCSSAttributes,
    ee = void 0 === X ? new Set([]) : X,
    te = e.errorHandler;
  (Pl = te),
    U &&
      B &&
      B.length > 0 &&
      0 ===
        (t = (function (e) {
          if (!Array.isArray(e) || 0 === e.length)
            throw new Error(
              "[rrweb] allowedIframeOrigins must be a non-empty array of origin strings.",
            );
          for (var t = new Set(), n = 0; n < e.length; n++) {
            var r = e[n];
            if ("string" != typeof r)
              throw new Error(
                "[rrweb] allowedIframeOrigins[" +
                  n +
                  "] must be a string, got " +
                  (void 0 === r ? "undefined" : S(r)) +
                  ".",
              );
            var o = wc(r);
            o && t.add(o);
          }
          return Object.freeze(t);
        })(B)).size &&
      (t = void 0);
  var ne = !U || window.parent === window,
    re = !1;
  if (!ne)
    try {
      window.parent.document && (re = !1);
    } catch (e) {
      re = !0;
    }
  if (ne && !n) throw new Error("emit function is required");
  if (!ne && !re) return function () {};
  void 0 !== P && void 0 === O.mousemove && (O.mousemove = P), Ic.reset();
  var oe,
    ie =
      !0 === _
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            password: !0,
            hidden: !0,
          }
        : void 0 !== x
          ? x
          : { password: !0 },
    ae =
      !0 === E || "all" === E
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: "all" === E,
            headMetaDescKeywords: "all" === E,
            headTitleMutations: "all" === E,
          }
        : E || {};
  !(function (e) {
    void 0 === e && (e = window),
      "NodeList" in e &&
        !e.NodeList.prototype.forEach &&
        (e.NodeList.prototype.forEach = Array.prototype.forEach),
      "DOMTokenList" in e &&
        !e.DOMTokenList.prototype.forEach &&
        (e.DOMTokenList.prototype.forEach = Array.prototype.forEach);
  })();
  var se = 0,
    le = function (e) {
      for (var t, n = w(Z || []); !(t = n()).done; ) {
        var r = t.value;
        r.eventProcessor && (e = r.eventProcessor(e));
      }
      return I && !re && (e = I(e)), e;
    };
  yc = function (e, i) {
    var a,
      s = e;
    if (
      ((s.timestamp = ul()),
      !(null == (a = Hl[0]) ? void 0 : a.isFrozen()) ||
        s.type === Tl.FullSnapshot ||
        (s.type === Tl.IncrementalSnapshot && s.data.source === kl.Mutation) ||
        Hl.forEach(function (e) {
          return e.unfreeze();
        }),
      ne)
    )
      null == n || n(le(s), i);
    else if (re) {
      var l = {
        type: "rrweb",
        event: le(s),
        origin: window.location.origin,
        isCheckout: i,
      };
      if (t)
        for (var c, u = w(t); !(c = u()).done; ) {
          var d = c.value;
          window.parent.postMessage(l, d);
        }
      else window.parent.postMessage(l, "*");
    }
    if (s.type === Tl.FullSnapshot) (oe = s), (se = 0);
    else if (s.type === Tl.IncrementalSnapshot) {
      if (s.data.source === kl.Mutation && s.data.isAttachIframe) return;
      se++;
      var p = o && se >= o,
        f = r && s.timestamp - oe.timestamp > r;
      (p || f) && vc(!0);
    }
  };
  for (
    var ce,
      ue = function (e) {
        yc({
          type: Tl.IncrementalSnapshot,
          data: h({ source: kl.Mutation }, e),
        });
      },
      de = function (e) {
        return yc({
          type: Tl.IncrementalSnapshot,
          data: h({ source: kl.Scroll }, e),
        });
      },
      pe = function (e) {
        return yc({
          type: Tl.IncrementalSnapshot,
          data: h({ source: kl.CanvasMutation }, e),
        });
      },
      fe = new _c({
        mutationCb: ue,
        adoptedStyleSheetCb: function (e) {
          return yc({
            type: Tl.IncrementalSnapshot,
            data: h({ source: kl.AdoptedStyleSheet }, e),
          });
        },
      }),
      he = new tc({
        mirror: Ic,
        mutationCb: ue,
        stylesheetManager: fe,
        recordCrossOriginIframes: U,
        wrappedEmit: yc,
      }),
      me = w(Z || []);
    !(ce = me()).done;

  ) {
    var ge = ce.value;
    ge.getMirror &&
      ge.getMirror({
        nodeMirror: Ic,
        crossOriginIframeMirror: he.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: he.crossOriginIframeStyleMirror,
      });
  }
  var ye = new xc();
  bc = new Sc({
    recordCanvas: L,
    mutationCb: pe,
    win: window,
    blockClass: a,
    blockSelector: l,
    mirror: Ic,
    sampling: O.canvas,
    dataURLOptions: M,
  });
  var ve = new nc({
    mutationCb: ue,
    scrollCb: de,
    bypassOptions: {
      blockClass: a,
      blockSelector: l,
      maskTextClass: m,
      maskTextSelector: y,
      inlineStylesheet: b,
      maskInputOptions: ie,
      dataURLOptions: M,
      maskTextFn: k,
      maskInputFn: T,
      recordCanvas: L,
      inlineImages: Y,
      sampling: O,
      slimDOMOptions: ae,
      iframeManager: he,
      stylesheetManager: fe,
      canvasManager: bc,
      keepIframeSrcFn: J,
      processedNodeManager: ye,
    },
    mirror: Ic,
  });
  vc = function (e) {
    if ((void 0 === e && (e = !1), D)) {
      yc(
        {
          type: Tl.Meta,
          data: {
            href: window.location.href,
            width: fl(),
            height: pl(),
          },
        },
        e,
      ),
        fe.reset(),
        ve.init(),
        Hl.forEach(function (e) {
          return e.lock();
        });
      var t = (function (e, t) {
        var n = t || {},
          r = n.mirror,
          o = void 0 === r ? new K() : r,
          i = n.blockClass,
          a = n.blockSelector,
          s = n.maskTextClass,
          l = n.maskTextSelector,
          c = n.inlineStylesheet,
          u = n.inlineImages,
          d = n.recordCanvas,
          p = n.maskAllInputs,
          f = void 0 !== p && p,
          h = n.slimDOM,
          m = void 0 !== h && h,
          g = n.keepIframeSrcFn;
        return we(e, {
          doc: e,
          mirror: o,
          blockClass: void 0 === i ? "rr-block" : i,
          blockSelector: void 0 === a ? null : a,
          maskTextClass: void 0 === s ? "rr-mask" : s,
          maskTextSelector: void 0 === l ? null : l,
          skipChild: !1,
          inlineStylesheet: void 0 === c || c,
          maskInputOptions:
            !0 === f
              ? {
                  color: !0,
                  date: !0,
                  "datetime-local": !0,
                  email: !0,
                  month: !0,
                  number: !0,
                  range: !0,
                  search: !0,
                  tel: !0,
                  text: !0,
                  time: !0,
                  url: !0,
                  week: !0,
                  textarea: !0,
                  select: !0,
                  password: !0,
                  hidden: !0,
                }
              : !1 === f
                ? { password: !0 }
                : f,
          maskTextFn: n.maskTextFn,
          maskInputFn: n.maskInputFn,
          slimDOMOptions:
            !0 === m || "all" === m
              ? {
                  script: !0,
                  comment: !0,
                  headFavicon: !0,
                  headWhitespace: !0,
                  headMetaDescKeywords: "all" === m,
                  headMetaSocial: !0,
                  headMetaRobots: !0,
                  headMetaHttpEquiv: !0,
                  headMetaAuthorship: !0,
                  headMetaVerification: !0,
                }
              : !1 === m
                ? {}
                : m,
          dataURLOptions: n.dataURLOptions,
          inlineImages: void 0 !== u && u,
          recordCanvas: void 0 !== d && d,
          preserveWhiteSpace: n.preserveWhiteSpace,
          onSerialize: n.onSerialize,
          onIframeLoad: n.onIframeLoad,
          iframeLoadTimeout: n.iframeLoadTimeout,
          onStylesheetLoad: n.onStylesheetLoad,
          stylesheetLoadTimeout: n.stylesheetLoadTimeout,
          keepIframeSrcFn:
            void 0 === g
              ? function () {
                  return !1;
                }
              : g,
          newlyAddedElement: !1,
        });
      })(document, {
        mirror: Ic,
        blockClass: a,
        blockSelector: l,
        maskTextClass: m,
        maskTextSelector: y,
        inlineStylesheet: b,
        maskAllInputs: ie,
        maskTextFn: k,
        maskInputFn: T,
        slimDOM: ae,
        dataURLOptions: M,
        recordCanvas: L,
        inlineImages: Y,
        onSerialize: function (e) {
          bl(e, Ic) && he.addIframe(e),
            Sl(e, Ic) && fe.trackLinkElement(e),
            _l(e) && ve.addShadowRoot(il(e), document);
        },
        onIframeLoad: function (e, t) {
          he.attachIframe(e, t), ve.observeAttachShadow(e);
        },
        onStylesheetLoad: function (e, t) {
          fe.attachLinkElement(e, t);
        },
        keepIframeSrcFn: J,
      });
      t &&
        (yc(
          {
            type: Tl.FullSnapshot,
            data: { node: t, initialOffset: dl(window) },
          },
          e,
        ),
        Hl.forEach(function (e) {
          return e.unlock();
        }),
        document.adoptedStyleSheets &&
          document.adoptedStyleSheets.length > 0 &&
          fe.adoptStyleSheets(document.adoptedStyleSheets, Ic.getId(document)));
    }
  };
  try {
    var be = [],
      Se = function (e) {
        var t;
        return zl(Ql)(
          {
            mutationCb: ue,
            mousemoveCb: function (e, t) {
              return yc({
                type: Tl.IncrementalSnapshot,
                data: { source: t, positions: e },
              });
            },
            mouseInteractionCb: function (e) {
              return yc({
                type: Tl.IncrementalSnapshot,
                data: h({ source: kl.MouseInteraction }, e),
              });
            },
            scrollCb: de,
            viewportResizeCb: function (e) {
              return yc({
                type: Tl.IncrementalSnapshot,
                data: h({ source: kl.ViewportResize }, e),
              });
            },
            inputCb: function (e) {
              return yc({
                type: Tl.IncrementalSnapshot,
                data: h({ source: kl.Input }, e),
              });
            },
            mediaInteractionCb: function (e) {
              return yc({
                type: Tl.IncrementalSnapshot,
                data: h({ source: kl.MediaInteraction }, e),
              });
            },
            styleSheetRuleCb: function (e) {
              return yc({
                type: Tl.IncrementalSnapshot,
                data: h({ source: kl.StyleSheetRule }, e),
              });
            },
            styleDeclarationCb: function (e) {
              return yc({
                type: Tl.IncrementalSnapshot,
                data: h({ source: kl.StyleDeclaration }, e),
              });
            },
            canvasMutationCb: pe,
            fontCb: function (e) {
              return yc({
                type: Tl.IncrementalSnapshot,
                data: h({ source: kl.Font }, e),
              });
            },
            selectionCb: function (e) {
              yc({
                type: Tl.IncrementalSnapshot,
                data: h({ source: kl.Selection }, e),
              });
            },
            customElementCb: function (e) {
              yc({
                type: Tl.IncrementalSnapshot,
                data: h({ source: kl.CustomElement }, e),
              });
            },
            blockClass: a,
            ignoreClass: u,
            ignoreSelector: p,
            maskTextClass: m,
            maskTextSelector: y,
            maskInputOptions: ie,
            inlineStylesheet: b,
            sampling: O,
            recordDOM: D,
            recordCanvas: L,
            inlineImages: Y,
            userTriggeredOnInput: q,
            collectFonts: W,
            doc: e,
            maskInputFn: T,
            maskTextFn: k,
            keepIframeSrcFn: J,
            blockSelector: l,
            slimDOMOptions: ae,
            dataURLOptions: M,
            mirror: Ic,
            iframeManager: he,
            stylesheetManager: fe,
            shadowDomManager: ve,
            processedNodeManager: ye,
            canvasManager: bc,
            ignoreCSSAttributes: ee,
            plugins:
              (null ==
              (t =
                null == Z
                  ? void 0
                  : Z.filter(function (e) {
                      return e.observer;
                    }))
                ? void 0
                : t.map(function (e) {
                    return {
                      observer: e.observer,
                      options: e.options,
                      callback: function (t) {
                        return yc({
                          type: Tl.Plugin,
                          data: { plugin: e.name, payload: t },
                        });
                      },
                    };
                  })) || [],
          },
          C,
        );
      };
    he.addLoadListener(function (e) {
      try {
        var t = e.contentDocument,
          n = Se(t);
        be.push(n);
        var r = he.getObserverCleanup(e);
        he.setObserverCleanup(e, function () {
          if (r)
            try {
              r();
            } catch (e) {}
          try {
            n();
            var e = be.indexOf(n);
            -1 !== e && be.splice(e, 1),
              (function (e) {
                for (var t = Hl.length - 1; t >= 0; t--)
                  Hl[t].getDoc() === e && Hl.splice(t, 1);
              })(t);
          } catch (e) {}
        });
      } catch (e) {}
    });
    var _e = function () {
      vc(), be.push(Se(document)), (Ec = !0);
    };
    return (
      "interactive" === document.readyState ||
      "complete" === document.readyState
        ? _e()
        : (be.push(
            al("DOMContentLoaded", function () {
              yc({ type: Tl.DomContentLoaded, data: {} }),
                "DOMContentLoaded" === H && _e();
            }),
          ),
          be.push(
            al(
              "load",
              function () {
                yc({ type: Tl.Load, data: {} }), "load" === H && _e();
              },
              window,
            ),
          )),
      function () {
        be.forEach(function (e) {
          try {
            e();
          } catch (e) {
            String(e).toLowerCase().includes("cross-origin");
          }
        }),
          ye.destroy(),
          (Ec = !1),
          (Pl = void 0);
      }
    );
  } catch (e) {}
}
(Ac.addCustomEvent = function (e, t) {
  if (!Ec) throw new Error("please add custom event after start recording");
  yc({ type: Tl.Custom, data: { tag: e, payload: t } });
}),
  (Ac.freezePage = function () {
    Hl.forEach(function (e) {
      return e.freeze();
    });
  }),
  (Ac.takeFullSnapshot = function (e) {
    if (!Ec) throw new Error("please take full snapshot after start recording");
    vc(e);
  }),
  (Ac.mirror = Ic),
  ((Cc = kc || (kc = {}))[(Cc.NotStarted = 0)] = "NotStarted"),
  (Cc[(Cc.Running = 1)] = "Running"),
  (Cc[(Cc.Stopped = 2)] = "Stopped"),
  Ac.addCustomEvent,
  Ac.freezePage,
  Ac.takeFullSnapshot;
var Oc = {
    Node: ["childNodes", "parentNode", "parentElement", "textContent"],
    ShadowRoot: ["host", "styleSheets"],
    Element: ["shadowRoot", "querySelector", "querySelectorAll"],
    MutationObserver: [],
  },
  Rc = {
    Node: ["contains", "getRootNode"],
    ShadowRoot: ["getSelection"],
    Element: [],
    MutationObserver: ["constructor"],
  },
  Mc = {};
function Pc(e) {
  if (Mc[e]) return Mc[e];
  var t = globalThis[e],
    n = t.prototype,
    r = e in Oc ? Oc[e] : void 0,
    o = Boolean(
      r &&
        r.every(function (e) {
          var t, r;
          return Boolean(
            null ==
              (r =
                null == (t = Object.getOwnPropertyDescriptor(n, e))
                  ? void 0
                  : t.get)
              ? void 0
              : r.toString().includes("[native code]"),
          );
        }),
    ),
    i = e in Rc ? Rc[e] : void 0,
    a = Boolean(
      i &&
        i.every(function (e) {
          var t;
          return (
            "function" == typeof n[e] &&
            (null == (t = n[e])
              ? void 0
              : t.toString().includes("[native code]"))
          );
        }),
    );
  if (o && a && !globalThis.Zone) return (Mc[e] = t.prototype), t.prototype;
  try {
    var s = document.createElement("iframe");
    document.body.appendChild(s);
    var l = s.contentWindow;
    if (!l) return t.prototype;
    var c = l[e].prototype;
    return document.body.removeChild(s), c ? (Mc[e] = c) : n;
  } catch (e) {
    return n;
  }
}
var Nc = {};
function Dc(e, t, n) {
  var r,
    o = e + "." + String(n);
  if (Nc[o]) return Nc[o].call(t);
  var i = Pc(e),
    a = null == (r = Object.getOwnPropertyDescriptor(i, n)) ? void 0 : r.get;
  return a ? ((Nc[o] = a), a.call(t)) : t[n];
}
var jc = function (e) {
  return Dc("Node", e, "parentNode");
};
function Lc(e, t, n) {
  if (!e) return !1;
  if (e.nodeType !== e.ELEMENT_NODE) return Lc(jc(e), t);
  for (var r = e.classList.length; r--; ) {
    var o = e.classList[r];
    if (t.test(o)) return !0;
  }
  return Lc(jc(e), t);
}
function Fc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Uc(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if ("function" == typeof t) {
    var n = function e() {
      return y(this, e)
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (t) {
      var r = Object.getOwnPropertyDescriptor(e, t);
      Object.defineProperty(
        n,
        t,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return e[t];
              },
            },
      );
    }),
    n
  );
}
var Bc = { exports: {} },
  zc = String,
  Hc = function () {
    return {
      isColorSupported: !1,
      reset: zc,
      bold: zc,
      dim: zc,
      italic: zc,
      underline: zc,
      inverse: zc,
      hidden: zc,
      strikethrough: zc,
      black: zc,
      red: zc,
      green: zc,
      yellow: zc,
      blue: zc,
      magenta: zc,
      cyan: zc,
      white: zc,
      gray: zc,
      bgBlack: zc,
      bgRed: zc,
      bgGreen: zc,
      bgYellow: zc,
      bgBlue: zc,
      bgMagenta: zc,
      bgCyan: zc,
      bgWhite: zc,
    };
  };
(Bc.exports = Hc()), (Bc.exports.createColors = Hc);
var Vc = Bc.exports,
  qc = Uc(
    Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: {} },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
  ),
  Gc = Vc,
  Wc = qc,
  $c = (function (e) {
    function t(n, r, o, i, a, s) {
      var l;
      return (
        ((l = e.call(this, n) || this).name = "CssSyntaxError"),
        (l.reason = n),
        a && (l.file = a),
        i && (l.source = i),
        s && (l.plugin = s),
        void 0 !== r &&
          void 0 !== o &&
          ("number" == typeof r
            ? ((l.line = r), (l.column = o))
            : ((l.line = r.line),
              (l.column = r.column),
              (l.endLine = o.line),
              (l.endColumn = o.column))),
        l.setMessage(),
        Error.captureStackTrace && Error.captureStackTrace(l, t),
        l
      );
    }
    g(t, e);
    var n = t.prototype;
    return (
      (n.setMessage = function () {
        (this.message = this.plugin ? this.plugin + ": " : ""),
          (this.message += this.file ? this.file : "<css input>"),
          void 0 !== this.line &&
            (this.message += ":" + this.line + ":" + this.column),
          (this.message += ": " + this.reason);
      }),
      (n.showSourceCode = function (e) {
        var t = this;
        if (!this.source) return "";
        var n = this.source;
        null == e && (e = Gc.isColorSupported), Wc && e && (n = Wc(n));
        var r,
          o,
          i = n.split(/\r?\n/),
          a = Math.max(this.line - 3, 0),
          s = Math.min(this.line + 2, i.length),
          l = String(s).length;
        if (e) {
          var c = Gc.createColors(!0),
            u = c.bold,
            d = c.gray,
            p = c.red;
          (r = function (e) {
            return u(p(e));
          }),
            (o = function (e) {
              return d(e);
            });
        } else
          r = o = function (e) {
            return e;
          };
        return i
          .slice(a, s)
          .map(function (e, n) {
            var i = a + 1 + n,
              s = " " + (" " + i).slice(-l) + " | ";
            if (i === t.line) {
              var c =
                o(s.replace(/\d/g, " ")) +
                e.slice(0, t.column - 1).replace(/[^\t]/g, " ");
              return r(">") + o(s) + e + "\n " + c + r("^");
            }
            return " " + o(s) + e;
          })
          .join("\n");
      }),
      (n.toString = function () {
        var e = this.showSourceCode();
        return (
          e && (e = "\n\n" + e + "\n"), this.name + ": " + this.message + e
        );
      }),
      t
    );
  })(_(Error)),
  Yc = $c;
$c.default = $c;
var Kc = {};
(Kc.isClean = Symbol("isClean")), (Kc.my = Symbol("my"));
var Zc = {
    after: "\n",
    beforeClose: "\n",
    beforeComment: "\n",
    beforeDecl: "\n",
    beforeOpen: " ",
    beforeRule: "\n",
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: !1,
  },
  Qc = (function () {
    function e(e) {
      this.builder = e;
    }
    var t = e.prototype;
    return (
      (t.atrule = function (e, t) {
        var n = "@" + e.name,
          r = e.params ? this.rawValue(e, "params") : "";
        if (
          (void 0 !== e.raws.afterName
            ? (n += e.raws.afterName)
            : r && (n += " "),
          e.nodes)
        )
          this.block(e, n + r);
        else {
          var o = (e.raws.between || "") + (t ? ";" : "");
          this.builder(n + r + o, e);
        }
      }),
      (t.beforeAfter = function (e, t) {
        var n;
        n =
          "decl" === e.type
            ? this.raw(e, null, "beforeDecl")
            : "comment" === e.type
              ? this.raw(e, null, "beforeComment")
              : "before" === t
                ? this.raw(e, null, "beforeRule")
                : this.raw(e, null, "beforeClose");
        for (var r = e.parent, o = 0; r && "root" !== r.type; )
          (o += 1), (r = r.parent);
        if (n.includes("\n")) {
          var i = this.raw(e, null, "indent");
          if (i.length) for (var a = 0; a < o; a++) n += i;
        }
        return n;
      }),
      (t.block = function (e, t) {
        var n,
          r = this.raw(e, "between", "beforeOpen");
        this.builder(t + r + "{", e, "start"),
          e.nodes && e.nodes.length
            ? (this.body(e), (n = this.raw(e, "after")))
            : (n = this.raw(e, "after", "emptyBody")),
          n && this.builder(n),
          this.builder("}", e, "end");
      }),
      (t.body = function (e) {
        for (
          var t = e.nodes.length - 1;
          t > 0 && "comment" === e.nodes[t].type;

        )
          t -= 1;
        for (var n = this.raw(e, "semicolon"), r = 0; r < e.nodes.length; r++) {
          var o = e.nodes[r],
            i = this.raw(o, "before");
          i && this.builder(i), this.stringify(o, t !== r || n);
        }
      }),
      (t.comment = function (e) {
        var t = this.raw(e, "left", "commentLeft"),
          n = this.raw(e, "right", "commentRight");
        this.builder("/*" + t + e.text + n + "*/", e);
      }),
      (t.decl = function (e, t) {
        var n = this.raw(e, "between", "colon"),
          r = e.prop + n + this.rawValue(e, "value");
        e.important && (r += e.raws.important || " !important"),
          t && (r += ";"),
          this.builder(r, e);
      }),
      (t.document = function (e) {
        this.body(e);
      }),
      (t.raw = function (e, t, n) {
        var r;
        if ((n || (n = t), t && void 0 !== (r = e.raws[t]))) return r;
        var o = e.parent;
        if ("before" === n) {
          if (!o || ("root" === o.type && o.first === e)) return "";
          if (o && "document" === o.type) return "";
        }
        if (!o) return Zc[n];
        var i = e.root();
        if ((i.rawCache || (i.rawCache = {}), void 0 !== i.rawCache[n]))
          return i.rawCache[n];
        if ("before" === n || "after" === n) return this.beforeAfter(e, n);
        var a,
          s = "raw" + ((a = n)[0].toUpperCase() + a.slice(1));
        return (
          this[s]
            ? (r = this[s](i, e))
            : i.walk(function (e) {
                if (void 0 !== (r = e.raws[t])) return !1;
              }),
          void 0 === r && (r = Zc[n]),
          (i.rawCache[n] = r),
          r
        );
      }),
      (t.rawBeforeClose = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if (e.nodes && e.nodes.length > 0 && void 0 !== e.raws.after)
              return (
                (t = e.raws.after).includes("\n") &&
                  (t = t.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          t && (t = t.replace(/\S/g, "")),
          t
        );
      }),
      (t.rawBeforeComment = function (e, t) {
        var n;
        return (
          e.walkComments(function (e) {
            if (void 0 !== e.raws.before)
              return (
                (n = e.raws.before).includes("\n") &&
                  (n = n.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          void 0 === n
            ? (n = this.raw(t, null, "beforeDecl"))
            : n && (n = n.replace(/\S/g, "")),
          n
        );
      }),
      (t.rawBeforeDecl = function (e, t) {
        var n;
        return (
          e.walkDecls(function (e) {
            if (void 0 !== e.raws.before)
              return (
                (n = e.raws.before).includes("\n") &&
                  (n = n.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          void 0 === n
            ? (n = this.raw(t, null, "beforeRule"))
            : n && (n = n.replace(/\S/g, "")),
          n
        );
      }),
      (t.rawBeforeOpen = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if ("decl" !== e.type && void 0 !== (t = e.raws.between)) return !1;
          }),
          t
        );
      }),
      (t.rawBeforeRule = function (e) {
        var t;
        return (
          e.walk(function (n) {
            if (
              n.nodes &&
              (n.parent !== e || e.first !== n) &&
              void 0 !== n.raws.before
            )
              return (
                (t = n.raws.before).includes("\n") &&
                  (t = t.replace(/[^\n]+$/, "")),
                !1
              );
          }),
          t && (t = t.replace(/\S/g, "")),
          t
        );
      }),
      (t.rawColon = function (e) {
        var t;
        return (
          e.walkDecls(function (e) {
            if (void 0 !== e.raws.between)
              return (t = e.raws.between.replace(/[^\s:]/g, "")), !1;
          }),
          t
        );
      }),
      (t.rawEmptyBody = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if (
              e.nodes &&
              0 === e.nodes.length &&
              void 0 !== (t = e.raws.after)
            )
              return !1;
          }),
          t
        );
      }),
      (t.rawIndent = function (e) {
        return e.raws.indent
          ? e.raws.indent
          : (e.walk(function (n) {
              var r = n.parent;
              if (
                r &&
                r !== e &&
                r.parent &&
                r.parent === e &&
                void 0 !== n.raws.before
              ) {
                var o = n.raws.before.split("\n");
                return (t = (t = o[o.length - 1]).replace(/\S/g, "")), !1;
              }
            }),
            t);
        var t;
      }),
      (t.rawSemicolon = function (e) {
        var t;
        return (
          e.walk(function (e) {
            if (
              e.nodes &&
              e.nodes.length &&
              "decl" === e.last.type &&
              void 0 !== (t = e.raws.semicolon)
            )
              return !1;
          }),
          t
        );
      }),
      (t.rawValue = function (e, t) {
        var n = e[t],
          r = e.raws[t];
        return r && r.value === n ? r.raw : n;
      }),
      (t.root = function (e) {
        this.body(e), e.raws.after && this.builder(e.raws.after);
      }),
      (t.rule = function (e) {
        this.block(e, this.rawValue(e, "selector")),
          e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
      }),
      (t.stringify = function (e, t) {
        if (!this[e.type])
          throw new Error(
            "Unknown AST node type " +
              e.type +
              ". Maybe you need to change PostCSS stringifier.",
          );
        this[e.type](e, t);
      }),
      e
    );
  })(),
  Jc = Qc;
Qc.default = Qc;
var Xc = Jc;
function eu(e, t) {
  new Xc(t).stringify(e);
}
var tu = eu;
eu.default = eu;
var nu = Kc.isClean,
  ru = Kc.my,
  ou = Yc,
  iu = Jc,
  au = tu;
function su(e, t) {
  var n = new e.constructor();
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && "proxyCache" !== r) {
      var o = e[r],
        i = void 0 === o ? "undefined" : S(o);
      "parent" === r && "object" === i
        ? t && (n[r] = t)
        : "source" === r
          ? (n[r] = o)
          : Array.isArray(o)
            ? (n[r] = o.map(function (e) {
                return su(e, n);
              }))
            : ("object" === i && null !== o && (o = su(o)), (n[r] = o));
    }
  return n;
}
var lu = (function () {
    function e(e) {
      for (var t in (void 0 === e && (e = {}),
      (this.raws = {}),
      (this[nu] = !1),
      (this[ru] = !0),
      e))
        if ("nodes" === t) {
          this.nodes = [];
          for (var n, r = w(e[t]); !(n = r()).done; ) {
            var o = n.value;
            "function" == typeof o.clone
              ? this.append(o.clone())
              : this.append(o);
          }
        } else this[t] = e[t];
    }
    var t = e.prototype;
    return (
      (t.addToError = function (e) {
        if (
          ((e.postcssNode = this),
          e.stack && this.source && /\n\s{4}at /.test(e.stack))
        ) {
          var t = this.source;
          e.stack = e.stack.replace(
            /\n\s{4}at /,
            "$&" +
              t.input.from +
              ":" +
              t.start.line +
              ":" +
              t.start.column +
              "$&",
          );
        }
        return e;
      }),
      (t.after = function (e) {
        return this.parent.insertAfter(this, e), this;
      }),
      (t.assign = function (e) {
        for (var t in (void 0 === e && (e = {}), e)) this[t] = e[t];
        return this;
      }),
      (t.before = function (e) {
        return this.parent.insertBefore(this, e), this;
      }),
      (t.cleanRaws = function (e) {
        delete this.raws.before,
          delete this.raws.after,
          e || delete this.raws.between;
      }),
      (t.clone = function (e) {
        void 0 === e && (e = {});
        var t = su(this);
        for (var n in e) t[n] = e[n];
        return t;
      }),
      (t.cloneAfter = function (e) {
        void 0 === e && (e = {});
        var t = this.clone(e);
        return this.parent.insertAfter(this, t), t;
      }),
      (t.cloneBefore = function (e) {
        void 0 === e && (e = {});
        var t = this.clone(e);
        return this.parent.insertBefore(this, t), t;
      }),
      (t.error = function (e, t) {
        if ((void 0 === t && (t = {}), this.source)) {
          var n = this.rangeBy(t),
            r = n.end,
            o = n.start;
          return this.source.input.error(
            e,
            { column: o.column, line: o.line },
            { column: r.column, line: r.line },
            t,
          );
        }
        return new ou(e);
      }),
      (t.getProxyProcessor = function () {
        return {
          get: function (e, t) {
            return "proxyOf" === t
              ? e
              : "root" === t
                ? function () {
                    return e.root().toProxy();
                  }
                : e[t];
          },
          set: function (e, t, n) {
            return (
              e[t] === n ||
                ((e[t] = n),
                ("prop" !== t &&
                  "value" !== t &&
                  "name" !== t &&
                  "params" !== t &&
                  "important" !== t &&
                  "text" !== t) ||
                  e.markDirty()),
              !0
            );
          },
        };
      }),
      (t.markDirty = function () {
        if (this[nu]) {
          this[nu] = !1;
          for (var e = this; (e = e.parent); ) e[nu] = !1;
        }
      }),
      (t.next = function () {
        if (this.parent) {
          var e = this.parent.index(this);
          return this.parent.nodes[e + 1];
        }
      }),
      (t.positionBy = function (e, t) {
        var n = this.source.start;
        if (e.index) n = this.positionInside(e.index, t);
        else if (e.word) {
          var r = (t = this.toString()).indexOf(e.word);
          -1 !== r && (n = this.positionInside(r, t));
        }
        return n;
      }),
      (t.positionInside = function (e, t) {
        for (
          var n = t || this.toString(),
            r = this.source.start.column,
            o = this.source.start.line,
            i = 0;
          i < e;
          i++
        )
          "\n" === n[i] ? ((r = 1), (o += 1)) : (r += 1);
        return { column: r, line: o };
      }),
      (t.prev = function () {
        if (this.parent) {
          var e = this.parent.index(this);
          return this.parent.nodes[e - 1];
        }
      }),
      (t.rangeBy = function (e) {
        var t = {
            column: this.source.start.column,
            line: this.source.start.line,
          },
          n = this.source.end
            ? {
                column: this.source.end.column + 1,
                line: this.source.end.line,
              }
            : { column: t.column + 1, line: t.line };
        if (e.word) {
          var r = this.toString(),
            o = r.indexOf(e.word);
          -1 !== o &&
            ((t = this.positionInside(o, r)),
            (n = this.positionInside(o + e.word.length, r)));
        } else
          e.start
            ? (t = { column: e.start.column, line: e.start.line })
            : e.index && (t = this.positionInside(e.index)),
            e.end
              ? (n = { column: e.end.column, line: e.end.line })
              : "number" == typeof e.endIndex
                ? (n = this.positionInside(e.endIndex))
                : e.index && (n = this.positionInside(e.index + 1));
        return (
          (n.line < t.line || (n.line === t.line && n.column <= t.column)) &&
            (n = { column: t.column + 1, line: t.line }),
          { end: n, start: t }
        );
      }),
      (t.raw = function (e, t) {
        return new iu().raw(this, e, t);
      }),
      (t.remove = function () {
        return (
          this.parent && this.parent.removeChild(this),
          (this.parent = void 0),
          this
        );
      }),
      (t.replaceWith = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (this.parent) {
          for (var r, o = this, i = !1, a = w(t); !(r = a()).done; ) {
            var s = r.value;
            s === this
              ? (i = !0)
              : i
                ? (this.parent.insertAfter(o, s), (o = s))
                : this.parent.insertBefore(o, s);
          }
          i || this.remove();
        }
        return this;
      }),
      (t.root = function () {
        for (var e = this; e.parent && "document" !== e.parent.type; )
          e = e.parent;
        return e;
      }),
      (t.toJSON = function (e, t) {
        var n = {},
          r = null == t;
        t = t || new Map();
        var o = 0;
        for (var i in this)
          if (
            Object.prototype.hasOwnProperty.call(this, i) &&
            "parent" !== i &&
            "proxyCache" !== i
          ) {
            var a = this[i];
            if (Array.isArray(a))
              n[i] = a.map(function (e) {
                return "object" === (void 0 === e ? "undefined" : S(e)) &&
                  e.toJSON
                  ? e.toJSON(null, t)
                  : e;
              });
            else if (
              "object" === (void 0 === a ? "undefined" : S(a)) &&
              a.toJSON
            )
              n[i] = a.toJSON(null, t);
            else if ("source" === i) {
              var s = t.get(a.input);
              null == s && ((s = o), t.set(a.input, o), o++),
                (n[i] = { end: a.end, inputId: s, start: a.start });
            } else n[i] = a;
          }
        return (
          r &&
            (n.inputs = [].concat(t.keys()).map(function (e) {
              return e.toJSON();
            })),
          n
        );
      }),
      (t.toProxy = function () {
        return (
          this.proxyCache ||
            (this.proxyCache = new Proxy(this, this.getProxyProcessor())),
          this.proxyCache
        );
      }),
      (t.toString = function (e) {
        void 0 === e && (e = au), e.stringify && (e = e.stringify);
        var t = "";
        return (
          e(this, function (e) {
            t += e;
          }),
          t
        );
      }),
      (t.warn = function (e, t, n) {
        var r = { node: this };
        for (var o in n) r[o] = n[o];
        return e.warn(t, r);
      }),
      f(e, [
        {
          key: "proxyOf",
          get: function () {
            return this;
          },
        },
      ]),
      e
    );
  })(),
  cu = lu;
lu.default = lu;
var uu = (function (e) {
    function t(t) {
      var n;
      return (
        t &&
          void 0 !== t.value &&
          "string" != typeof t.value &&
          (t = h({}, t, { value: String(t.value) })),
        ((n = e.call(this, t) || this).type = "decl"),
        n
      );
    }
    return (
      g(t, e),
      f(t, [
        {
          key: "variable",
          get: function () {
            return this.prop.startsWith("--") || "$" === this.prop[0];
          },
        },
      ]),
      t
    );
  })(cu),
  du = uu;
uu.default = uu;
var pu = qc.SourceMapConsumer,
  fu = qc.SourceMapGenerator,
  hu = qc.existsSync,
  mu = qc.readFileSync,
  gu = qc.dirname,
  yu = qc.join,
  vu = (function () {
    function e(e, t) {
      if (!1 !== t.map) {
        this.loadAnnotation(e),
          (this.inline = this.startWith(this.annotation, "data:"));
        var n = t.map ? t.map.prev : void 0,
          r = this.loadMap(t.from, n);
        !this.mapFile && t.from && (this.mapFile = t.from),
          this.mapFile && (this.root = gu(this.mapFile)),
          r && (this.text = r);
      }
    }
    var t = e.prototype;
    return (
      (t.consumer = function () {
        return (
          this.consumerCache || (this.consumerCache = new pu(this.text)),
          this.consumerCache
        );
      }),
      (t.decodeInline = function (e) {
        var t;
        if (
          /^data:application\/json;charset=utf-?8,/.test(e) ||
          /^data:application\/json,/.test(e)
        )
          return decodeURIComponent(e.substr(RegExp.lastMatch.length));
        if (
          /^data:application\/json;charset=utf-?8;base64,/.test(e) ||
          /^data:application\/json;base64,/.test(e)
        )
          return (
            (t = e.substr(RegExp.lastMatch.length)),
            Buffer ? Buffer.from(t, "base64").toString() : window.atob(t)
          );
        var n = e.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + n);
      }),
      (t.getAnnotationURL = function (e) {
        return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
      }),
      (t.isMap = function (e) {
        return (
          "object" === (void 0 === e ? "undefined" : S(e)) &&
          ("string" == typeof e.mappings ||
            "string" == typeof e._mappings ||
            Array.isArray(e.sections))
        );
      }),
      (t.loadAnnotation = function (e) {
        var t = e.match(/\/\*\s*# sourceMappingURL=/gm);
        if (t) {
          var n = e.lastIndexOf(t.pop()),
            r = e.indexOf("*/", n);
          n > -1 &&
            r > -1 &&
            (this.annotation = this.getAnnotationURL(e.substring(n, r)));
        }
      }),
      (t.loadFile = function (e) {
        if (((this.root = gu(e)), hu(e)))
          return (this.mapFile = e), mu(e, "utf-8").toString().trim();
      }),
      (t.loadMap = function (e, t) {
        if (!1 === t) return !1;
        if (t) {
          if ("string" == typeof t) return t;
          if ("function" != typeof t) {
            if (y(t, pu)) return fu.fromSourceMap(t).toString();
            if (y(t, fu)) return t.toString();
            if (this.isMap(t)) return JSON.stringify(t);
            throw new Error(
              "Unsupported previous source map format: " + t.toString(),
            );
          }
          var n = t(e);
          if (n) {
            var r = this.loadFile(n);
            if (!r)
              throw new Error(
                "Unable to load previous source map: " + n.toString(),
              );
            return r;
          }
        } else {
          if (this.inline) return this.decodeInline(this.annotation);
          if (this.annotation) {
            var o = this.annotation;
            return e && (o = yu(gu(e), o)), this.loadFile(o);
          }
        }
      }),
      (t.startWith = function (e, t) {
        return !!e && e.substr(0, t.length) === t;
      }),
      (t.withContent = function () {
        return !!(
          this.consumer().sourcesContent &&
          this.consumer().sourcesContent.length > 0
        );
      }),
      e
    );
  })(),
  bu = vu;
vu.default = vu;
var Su = qc.SourceMapConsumer,
  _u = qc.SourceMapGenerator,
  xu = qc.fileURLToPath,
  wu = qc.pathToFileURL,
  Eu = qc.isAbsolute,
  Tu = qc.resolve,
  ku = function (e) {
    void 0 === e && (e = 21);
    for (var t = "", n = e; n--; )
      t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[
        (64 * Math.random()) | 0
      ];
    return t;
  },
  Cu = qc,
  Iu = Yc,
  Au = bu,
  Ou = Symbol("fromOffsetCache"),
  Ru = Boolean(Su && _u),
  Mu = Boolean(Tu && Eu),
  Pu = (function () {
    function e(e, t) {
      if (
        (void 0 === t && (t = {}),
        null == e ||
          ("object" === (void 0 === e ? "undefined" : S(e)) && !e.toString))
      )
        throw new Error("PostCSS received " + e + " instead of CSS string");
      if (
        ((this.css = e.toString()),
        "\ufeff" === this.css[0] || "￾" === this.css[0]
          ? ((this.hasBOM = !0), (this.css = this.css.slice(1)))
          : (this.hasBOM = !1),
        t.from &&
          (!Mu || /^\w+:\/\//.test(t.from) || Eu(t.from)
            ? (this.file = t.from)
            : (this.file = Tu(t.from))),
        Mu && Ru)
      ) {
        var n = new Au(this.css, t);
        if (n.text) {
          this.map = n;
          var r = n.consumer().file;
          !this.file && r && (this.file = this.mapResolve(r));
        }
      }
      this.file || (this.id = "<input css " + ku(6) + ">"),
        this.map && (this.map.file = this.from);
    }
    var t = e.prototype;
    return (
      (t.error = function (e, t, n, r) {
        var o, i, a;
        if (
          (void 0 === r && (r = {}),
          t && "object" === (void 0 === t ? "undefined" : S(t)))
        ) {
          var s = t,
            l = n;
          if ("number" == typeof s.offset) {
            var c = this.fromOffset(s.offset);
            (t = c.line), (n = c.col);
          } else (t = s.line), (n = s.column);
          if ("number" == typeof l.offset) {
            var u = this.fromOffset(l.offset);
            (i = u.line), (a = u.col);
          } else (i = l.line), (a = l.column);
        } else if (!n) {
          var d = this.fromOffset(t);
          (t = d.line), (n = d.col);
        }
        var p = this.origin(t, n, i, a);
        return (
          ((o = p
            ? new Iu(
                e,
                void 0 === p.endLine
                  ? p.line
                  : { column: p.column, line: p.line },
                void 0 === p.endLine
                  ? p.column
                  : { column: p.endColumn, line: p.endLine },
                p.source,
                p.file,
                r.plugin,
              )
            : new Iu(
                e,
                void 0 === i ? t : { column: n, line: t },
                void 0 === i ? n : { column: a, line: i },
                this.css,
                this.file,
                r.plugin,
              )).input = {
            column: n,
            endColumn: a,
            endLine: i,
            line: t,
            source: this.css,
          }),
          this.file &&
            (wu && (o.input.url = wu(this.file).toString()),
            (o.input.file = this.file)),
          o
        );
      }),
      (t.fromOffset = function (e) {
        var t;
        if (this[Ou]) t = this[Ou];
        else {
          var n = this.css.split("\n");
          t = new Array(n.length);
          for (var r = 0, o = 0, i = n.length; o < i; o++)
            (t[o] = r), (r += n[o].length + 1);
          this[Ou] = t;
        }
        var a = 0;
        if (e >= t[t.length - 1]) a = t.length - 1;
        else
          for (var s, l = t.length - 2; a < l; )
            if (e < t[(s = a + ((l - a) >> 1))]) l = s - 1;
            else {
              if (!(e >= t[s + 1])) {
                a = s;
                break;
              }
              a = s + 1;
            }
        return { col: e - t[a] + 1, line: a + 1 };
      }),
      (t.mapResolve = function (e) {
        return /^\w+:\/\//.test(e)
          ? e
          : Tu(this.map.consumer().sourceRoot || this.map.root || ".", e);
      }),
      (t.origin = function (e, t, n, r) {
        if (!this.map) return !1;
        var o,
          i,
          a = this.map.consumer(),
          s = a.originalPositionFor({ column: t, line: e });
        if (!s.source) return !1;
        "number" == typeof n &&
          (o = a.originalPositionFor({ column: r, line: n })),
          (i = Eu(s.source)
            ? wu(s.source)
            : new URL(
                s.source,
                this.map.consumer().sourceRoot || wu(this.map.mapFile),
              ));
        var l = {
          column: s.column,
          endColumn: o && o.column,
          endLine: o && o.line,
          line: s.line,
          url: i.toString(),
        };
        if ("file:" === i.protocol) {
          if (!xu)
            throw new Error(
              "file: protocol is not available in this PostCSS build",
            );
          l.file = xu(i);
        }
        var c = a.sourceContentFor(s.source);
        return c && (l.source = c), l;
      }),
      (t.toJSON = function () {
        for (
          var e = {}, t = 0, n = ["hasBOM", "css", "file", "id"];
          t < n.length;
          t++
        ) {
          var r = n[t];
          null != this[r] && (e[r] = this[r]);
        }
        return (
          this.map &&
            ((e.map = h({}, this.map)),
            e.map.consumerCache && (e.map.consumerCache = void 0)),
          e
        );
      }),
      f(e, [
        {
          key: "from",
          get: function () {
            return this.file || this.id;
          },
        },
      ]),
      e
    );
  })(),
  Nu = Pu;
(Pu.default = Pu), Cu && Cu.registerInput && Cu.registerInput(Pu);
var Du = qc.SourceMapConsumer,
  ju = qc.SourceMapGenerator,
  Lu = qc.dirname,
  Fu = qc.relative,
  Uu = qc.resolve,
  Bu = qc.sep,
  zu = qc.pathToFileURL,
  Hu = Nu,
  Vu = Boolean(Du && ju),
  qu = Boolean(Lu && Uu && Fu && Bu),
  Gu = (function () {
    function e(e, t, n, r) {
      (this.stringify = e),
        (this.mapOpts = n.map || {}),
        (this.root = t),
        (this.opts = n),
        (this.css = r),
        (this.originalCSS = r),
        (this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute),
        (this.memoizedFileURLs = new Map()),
        (this.memoizedPaths = new Map()),
        (this.memoizedURLs = new Map());
    }
    var t = e.prototype;
    return (
      (t.addAnnotation = function () {
        var e;
        e = this.isInline()
          ? "data:application/json;base64," + this.toBase64(this.map.toString())
          : "string" == typeof this.mapOpts.annotation
            ? this.mapOpts.annotation
            : "function" == typeof this.mapOpts.annotation
              ? this.mapOpts.annotation(this.opts.to, this.root)
              : this.outputFile() + ".map";
        var t = "\n";
        this.css.includes("\r\n") && (t = "\r\n"),
          (this.css += t + "/*# sourceMappingURL=" + e + " */");
      }),
      (t.applyPrevMaps = function () {
        for (var e, t = w(this.previous()); !(e = t()).done; ) {
          var n = e.value,
            r = this.toUrl(this.path(n.file)),
            o = n.root || Lu(n.file),
            i = void 0;
          !1 === this.mapOpts.sourcesContent
            ? (i = new Du(n.text)).sourcesContent && (i.sourcesContent = null)
            : (i = n.consumer()),
            this.map.applySourceMap(i, r, this.toUrl(this.path(o)));
        }
      }),
      (t.clearAnnotation = function () {
        if (!1 !== this.mapOpts.annotation)
          if (this.root)
            for (var e, t = this.root.nodes.length - 1; t >= 0; t--)
              "comment" === (e = this.root.nodes[t]).type &&
                0 === e.text.indexOf("# sourceMappingURL=") &&
                this.root.removeChild(t);
          else
            this.css &&
              (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
      }),
      (t.generate = function () {
        if ((this.clearAnnotation(), qu && Vu && this.isMap()))
          return this.generateMap();
        var e = "";
        return (
          this.stringify(this.root, function (t) {
            e += t;
          }),
          [e]
        );
      }),
      (t.generateMap = function () {
        if (this.root) this.generateString();
        else if (1 === this.previous().length) {
          var e = this.previous()[0].consumer();
          (e.file = this.outputFile()),
            (this.map = ju.fromSourceMap(e, {
              ignoreInvalidMapping: !0,
            }));
        } else
          (this.map = new ju({
            file: this.outputFile(),
            ignoreInvalidMapping: !0,
          })),
            this.map.addMapping({
              generated: { column: 0, line: 1 },
              original: { column: 0, line: 1 },
              source: this.opts.from
                ? this.toUrl(this.path(this.opts.from))
                : "<no source>",
            });
        return (
          this.isSourcesContent() && this.setSourcesContent(),
          this.root && this.previous().length > 0 && this.applyPrevMaps(),
          this.isAnnotation() && this.addAnnotation(),
          this.isInline() ? [this.css] : [this.css, this.map]
        );
      }),
      (t.generateString = function () {
        var e = this;
        (this.css = ""),
          (this.map = new ju({
            file: this.outputFile(),
            ignoreInvalidMapping: !0,
          }));
        var t,
          n,
          r = 1,
          o = 1,
          i = "<no source>",
          a = {
            generated: { column: 0, line: 0 },
            original: { column: 0, line: 0 },
            source: "",
          };
        this.stringify(this.root, function (s, l, c) {
          if (
            ((e.css += s),
            l &&
              "end" !== c &&
              ((a.generated.line = r),
              (a.generated.column = o - 1),
              l.source && l.source.start
                ? ((a.source = e.sourcePath(l)),
                  (a.original.line = l.source.start.line),
                  (a.original.column = l.source.start.column - 1),
                  e.map.addMapping(a))
                : ((a.source = i),
                  (a.original.line = 1),
                  (a.original.column = 0),
                  e.map.addMapping(a))),
            (t = s.match(/\n/g))
              ? ((r += t.length), (n = s.lastIndexOf("\n")), (o = s.length - n))
              : (o += s.length),
            l && "start" !== c)
          ) {
            var u = l.parent || { raws: {} };
            (("decl" === l.type || ("atrule" === l.type && !l.nodes)) &&
              l === u.last &&
              !u.raws.semicolon) ||
              (l.source && l.source.end
                ? ((a.source = e.sourcePath(l)),
                  (a.original.line = l.source.end.line),
                  (a.original.column = l.source.end.column - 1),
                  (a.generated.line = r),
                  (a.generated.column = o - 2),
                  e.map.addMapping(a))
                : ((a.source = i),
                  (a.original.line = 1),
                  (a.original.column = 0),
                  (a.generated.line = r),
                  (a.generated.column = o - 1),
                  e.map.addMapping(a)));
          }
        });
      }),
      (t.isAnnotation = function () {
        return (
          !!this.isInline() ||
          (void 0 !== this.mapOpts.annotation
            ? this.mapOpts.annotation
            : !this.previous().length ||
              this.previous().some(function (e) {
                return e.annotation;
              }))
        );
      }),
      (t.isInline = function () {
        if (void 0 !== this.mapOpts.inline) return this.mapOpts.inline;
        var e = this.mapOpts.annotation;
        return (
          (void 0 === e || !0 === e) &&
          (!this.previous().length ||
            this.previous().some(function (e) {
              return e.inline;
            }))
        );
      }),
      (t.isMap = function () {
        return void 0 !== this.opts.map
          ? !!this.opts.map
          : this.previous().length > 0;
      }),
      (t.isSourcesContent = function () {
        return void 0 !== this.mapOpts.sourcesContent
          ? this.mapOpts.sourcesContent
          : !this.previous().length ||
              this.previous().some(function (e) {
                return e.withContent();
              });
      }),
      (t.outputFile = function () {
        return this.opts.to
          ? this.path(this.opts.to)
          : this.opts.from
            ? this.path(this.opts.from)
            : "to.css";
      }),
      (t.path = function (e) {
        if (this.mapOpts.absolute) return e;
        if (60 === e.charCodeAt(0)) return e;
        if (/^\w+:\/\//.test(e)) return e;
        var t = this.memoizedPaths.get(e);
        if (t) return t;
        var n = this.opts.to ? Lu(this.opts.to) : ".";
        "string" == typeof this.mapOpts.annotation &&
          (n = Lu(Uu(n, this.mapOpts.annotation)));
        var r = Fu(n, e);
        return this.memoizedPaths.set(e, r), r;
      }),
      (t.previous = function () {
        var e = this;
        if (!this.previousMaps)
          if (((this.previousMaps = []), this.root))
            this.root.walk(function (t) {
              if (t.source && t.source.input.map) {
                var n = t.source.input.map;
                e.previousMaps.includes(n) || e.previousMaps.push(n);
              }
            });
          else {
            var t = new Hu(this.originalCSS, this.opts);
            t.map && this.previousMaps.push(t.map);
          }
        return this.previousMaps;
      }),
      (t.setSourcesContent = function () {
        var e = this,
          t = {};
        if (this.root)
          this.root.walk(function (n) {
            if (n.source) {
              var r = n.source.input.from;
              if (r && !t[r]) {
                t[r] = !0;
                var o = e.usesFileUrls ? e.toFileUrl(r) : e.toUrl(e.path(r));
                e.map.setSourceContent(o, n.source.input.css);
              }
            }
          });
        else if (this.css) {
          var n = this.opts.from
            ? this.toUrl(this.path(this.opts.from))
            : "<no source>";
          this.map.setSourceContent(n, this.css);
        }
      }),
      (t.sourcePath = function (e) {
        return this.mapOpts.from
          ? this.toUrl(this.mapOpts.from)
          : this.usesFileUrls
            ? this.toFileUrl(e.source.input.from)
            : this.toUrl(this.path(e.source.input.from));
      }),
      (t.toBase64 = function (e) {
        return Buffer
          ? Buffer.from(e).toString("base64")
          : window.btoa(unescape(encodeURIComponent(e)));
      }),
      (t.toFileUrl = function (e) {
        var t = this.memoizedFileURLs.get(e);
        if (t) return t;
        if (zu) {
          var n = zu(e).toString();
          return this.memoizedFileURLs.set(e, n), n;
        }
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build",
        );
      }),
      (t.toUrl = function (e) {
        var t = this.memoizedURLs.get(e);
        if (t) return t;
        "\\" === Bu && (e = e.replace(/\\/g, "/"));
        var n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
        return this.memoizedURLs.set(e, n), n;
      }),
      e
    );
  })(),
  Wu = (function (e) {
    function t(t) {
      var n;
      return ((n = e.call(this, t) || this).type = "comment"), n;
    }
    return g(t, e), t;
  })(cu),
  $u = Wu;
Wu.default = Wu;
var Yu,
  Ku,
  Zu,
  Qu,
  Ju = Kc.isClean,
  Xu = Kc.my,
  ed = du,
  td = $u;
function nd(e) {
  return e.map(function (e) {
    return e.nodes && (e.nodes = nd(e.nodes)), delete e.source, e;
  });
}
function rd(e) {
  if (((e[Ju] = !1), e.proxyOf.nodes))
    for (var t, n = w(e.proxyOf.nodes); !(t = n()).done; ) rd(t.value);
}
var od = (function (e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  g(t, e);
  var n = t.prototype;
  return (
    (n.append = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (var r, o = w(t); !(r = o()).done; )
        for (
          var i, a = r.value, s = w(this.normalize(a, this.last));
          !(i = s()).done;

        ) {
          var l = i.value;
          this.proxyOf.nodes.push(l);
        }
      return this.markDirty(), this;
    }),
    (n.cleanRaws = function (t) {
      if ((e.prototype.cleanRaws.call(this, t), this.nodes))
        for (var n, r = w(this.nodes); !(n = r()).done; ) n.value.cleanRaws(t);
    }),
    (n.each = function (e) {
      if (this.proxyOf.nodes) {
        for (
          var t, n, r = this.getIterator();
          this.indexes[r] < this.proxyOf.nodes.length &&
          ((t = this.indexes[r]), !1 !== (n = e(this.proxyOf.nodes[t], t)));

        )
          this.indexes[r] += 1;
        return delete this.indexes[r], n;
      }
    }),
    (n.every = function (e) {
      return this.nodes.every(e);
    }),
    (n.getIterator = function () {
      this.lastEach || (this.lastEach = 0),
        this.indexes || (this.indexes = {}),
        (this.lastEach += 1);
      var e = this.lastEach;
      return (this.indexes[e] = 0), e;
    }),
    (n.getProxyProcessor = function () {
      return {
        get: function (e, t) {
          return "proxyOf" === t
            ? e
            : e[t]
              ? "each" === t || ("string" == typeof t && t.startsWith("walk"))
                ? function () {
                    for (
                      var n = arguments.length, r = new Array(n), o = 0;
                      o < n;
                      o++
                    )
                      r[o] = arguments[o];
                    var i;
                    return (i = e)[t].apply(
                      i,
                      [].concat(
                        r.map(function (e) {
                          return "function" == typeof e
                            ? function (t, n) {
                                return e(t.toProxy(), n);
                              }
                            : e;
                        }),
                      ),
                    );
                  }
                : "every" === t || "some" === t
                  ? function (n) {
                      return e[t](function (e) {
                        for (
                          var t = arguments.length,
                            r = new Array(t > 1 ? t - 1 : 0),
                            o = 1;
                          o < t;
                          o++
                        )
                          r[o - 1] = arguments[o];
                        return n.apply(void 0, [].concat([e.toProxy()], r));
                      });
                    }
                  : "root" === t
                    ? function () {
                        return e.root().toProxy();
                      }
                    : "nodes" === t
                      ? e.nodes.map(function (e) {
                          return e.toProxy();
                        })
                      : "first" === t || "last" === t
                        ? e[t].toProxy()
                        : e[t]
              : e[t];
        },
        set: function (e, t, n) {
          return (
            e[t] === n ||
              ((e[t] = n),
              ("name" !== t && "params" !== t && "selector" !== t) ||
                e.markDirty()),
            !0
          );
        },
      };
    }),
    (n.index = function (e) {
      return "number" == typeof e
        ? e
        : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
    }),
    (n.insertAfter = function (e, t) {
      var n,
        r = this.index(e),
        o = this.normalize(t, this.proxyOf.nodes[r]).reverse();
      r = this.index(e);
      for (var i, a = w(o); !(i = a()).done; ) {
        var s = i.value;
        this.proxyOf.nodes.splice(r + 1, 0, s);
      }
      for (var l in this.indexes)
        r < (n = this.indexes[l]) && (this.indexes[l] = n + o.length);
      return this.markDirty(), this;
    }),
    (n.insertBefore = function (e, t) {
      var n,
        r = this.index(e),
        o = 0 === r && "prepend",
        i = this.normalize(t, this.proxyOf.nodes[r], o).reverse();
      r = this.index(e);
      for (var a, s = w(i); !(a = s()).done; ) {
        var l = a.value;
        this.proxyOf.nodes.splice(r, 0, l);
      }
      for (var c in this.indexes)
        r <= (n = this.indexes[c]) && (this.indexes[c] = n + i.length);
      return this.markDirty(), this;
    }),
    (n.normalize = function (e, n) {
      var r = this;
      if ("string" == typeof e) e = nd(Yu(e).nodes);
      else if (void 0 === e) e = [];
      else if (Array.isArray(e))
        for (var o, i = w((e = e.slice(0))); !(o = i()).done; ) {
          var a = o.value;
          a.parent && a.parent.removeChild(a, "ignore");
        }
      else if ("root" === e.type && "document" !== this.type)
        for (var s, l = w((e = e.nodes.slice(0))); !(s = l()).done; ) {
          var c = s.value;
          c.parent && c.parent.removeChild(c, "ignore");
        }
      else if (e.type) e = [e];
      else if (e.prop) {
        if (void 0 === e.value)
          throw new Error("Value field is missed in node creation");
        "string" != typeof e.value && (e.value = String(e.value)),
          (e = [new ed(e)]);
      } else if (e.selector) e = [new Ku(e)];
      else if (e.name) e = [new Zu(e)];
      else {
        if (!e.text) throw new Error("Unknown node type in node creation");
        e = [new td(e)];
      }
      var u = e.map(function (e) {
        return (
          e[Xu] || t.rebuild(e),
          (e = e.proxyOf).parent && e.parent.removeChild(e),
          e[Ju] && rd(e),
          void 0 === e.raws.before &&
            n &&
            void 0 !== n.raws.before &&
            (e.raws.before = n.raws.before.replace(/\S/g, "")),
          (e.parent = r.proxyOf),
          e
        );
      });
      return u;
    }),
    (n.prepend = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (var r, o = w((t = t.reverse())); !(r = o()).done; ) {
        for (
          var i,
            a = r.value,
            s = this.normalize(a, this.first, "prepend").reverse(),
            l = w(s);
          !(i = l()).done;

        ) {
          var c = i.value;
          this.proxyOf.nodes.unshift(c);
        }
        for (var u in this.indexes)
          this.indexes[u] = this.indexes[u] + s.length;
      }
      return this.markDirty(), this;
    }),
    (n.push = function (e) {
      return (e.parent = this), this.proxyOf.nodes.push(e), this;
    }),
    (n.removeAll = function () {
      for (var e, t = w(this.proxyOf.nodes); !(e = t()).done; )
        e.value.parent = void 0;
      return (this.proxyOf.nodes = []), this.markDirty(), this;
    }),
    (n.removeChild = function (e) {
      var t;
      for (var n in ((e = this.index(e)),
      (this.proxyOf.nodes[e].parent = void 0),
      this.proxyOf.nodes.splice(e, 1),
      this.indexes))
        (t = this.indexes[n]) >= e && (this.indexes[n] = t - 1);
      return this.markDirty(), this;
    }),
    (n.replaceValues = function (e, t, n) {
      return (
        n || ((n = t), (t = {})),
        this.walkDecls(function (r) {
          (t.props && !t.props.includes(r.prop)) ||
            (t.fast && !r.value.includes(t.fast)) ||
            (r.value = r.value.replace(e, n));
        }),
        this.markDirty(),
        this
      );
    }),
    (n.some = function (e) {
      return this.nodes.some(e);
    }),
    (n.walk = function (e) {
      return this.each(function (t, n) {
        var r;
        try {
          r = e(t, n);
        } catch (e) {
          throw t.addToError(e);
        }
        return !1 !== r && t.walk && (r = t.walk(e)), r;
      });
    }),
    (n.walkAtRules = function (e, t) {
      return t
        ? y(e, RegExp)
          ? this.walk(function (n, r) {
              if ("atrule" === n.type && e.test(n.name)) return t(n, r);
            })
          : this.walk(function (n, r) {
              if ("atrule" === n.type && n.name === e) return t(n, r);
            })
        : ((t = e),
          this.walk(function (e, n) {
            if ("atrule" === e.type) return t(e, n);
          }));
    }),
    (n.walkComments = function (e) {
      return this.walk(function (t, n) {
        if ("comment" === t.type) return e(t, n);
      });
    }),
    (n.walkDecls = function (e, t) {
      return t
        ? y(e, RegExp)
          ? this.walk(function (n, r) {
              if ("decl" === n.type && e.test(n.prop)) return t(n, r);
            })
          : this.walk(function (n, r) {
              if ("decl" === n.type && n.prop === e) return t(n, r);
            })
        : ((t = e),
          this.walk(function (e, n) {
            if ("decl" === e.type) return t(e, n);
          }));
    }),
    (n.walkRules = function (e, t) {
      return t
        ? y(e, RegExp)
          ? this.walk(function (n, r) {
              if ("rule" === n.type && e.test(n.selector)) return t(n, r);
            })
          : this.walk(function (n, r) {
              if ("rule" === n.type && n.selector === e) return t(n, r);
            })
        : ((t = e),
          this.walk(function (e, n) {
            if ("rule" === e.type) return t(e, n);
          }));
    }),
    f(t, [
      {
        key: "first",
        get: function () {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
        },
      },
      {
        key: "last",
        get: function () {
          if (this.proxyOf.nodes)
            return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
        },
      },
    ]),
    t
  );
})(cu);
(od.registerParse = function (e) {
  Yu = e;
}),
  (od.registerRule = function (e) {
    Ku = e;
  }),
  (od.registerAtRule = function (e) {
    Zu = e;
  }),
  (od.registerRoot = function (e) {
    Qu = e;
  });
var id = od;
(od.default = od),
  (od.rebuild = function (e) {
    "atrule" === e.type
      ? Object.setPrototypeOf(e, Zu.prototype)
      : "rule" === e.type
        ? Object.setPrototypeOf(e, Ku.prototype)
        : "decl" === e.type
          ? Object.setPrototypeOf(e, ed.prototype)
          : "comment" === e.type
            ? Object.setPrototypeOf(e, td.prototype)
            : "root" === e.type && Object.setPrototypeOf(e, Qu.prototype),
      (e[Xu] = !0),
      e.nodes &&
        e.nodes.forEach(function (e) {
          od.rebuild(e);
        });
  });
var ad,
  sd,
  ld = (function (e) {
    function t(t) {
      var n;
      return (
        (n = e.call(this, h({ type: "document" }, t)) || this).nodes ||
          (n.nodes = []),
        n
      );
    }
    return (
      g(t, e),
      (t.prototype.toResult = function (e) {
        return void 0 === e && (e = {}), new ad(new sd(), this, e).stringify();
      }),
      t
    );
  })(id);
(ld.registerLazyResult = function (e) {
  ad = e;
}),
  (ld.registerProcessor = function (e) {
    sd = e;
  });
var cd = ld;
ld.default = ld;
var ud = (function () {
    function e(e, t) {
      if (
        (void 0 === t && (t = {}),
        (this.type = "warning"),
        (this.text = e),
        t.node && t.node.source)
      ) {
        var n = t.node.rangeBy(t);
        (this.line = n.start.line),
          (this.column = n.start.column),
          (this.endLine = n.end.line),
          (this.endColumn = n.end.column);
      }
      for (var r in t) this[r] = t[r];
    }
    return (
      (e.prototype.toString = function () {
        return this.node
          ? this.node.error(this.text, {
              index: this.index,
              plugin: this.plugin,
              word: this.word,
            }).message
          : this.plugin
            ? this.plugin + ": " + this.text
            : this.text;
      }),
      e
    );
  })(),
  dd = ud;
ud.default = ud;
var pd = dd,
  fd = (function () {
    function e(e, t, n) {
      (this.processor = e),
        (this.messages = []),
        (this.root = t),
        (this.opts = n),
        (this.css = void 0),
        (this.map = void 0);
    }
    var t = e.prototype;
    return (
      (t.toString = function () {
        return this.css;
      }),
      (t.warn = function (e, t) {
        void 0 === t && (t = {}),
          t.plugin ||
            (this.lastPlugin &&
              this.lastPlugin.postcssPlugin &&
              (t.plugin = this.lastPlugin.postcssPlugin));
        var n = new pd(e, t);
        return this.messages.push(n), n;
      }),
      (t.warnings = function () {
        return this.messages.filter(function (e) {
          return "warning" === e.type;
        });
      }),
      f(e, [
        {
          key: "content",
          get: function () {
            return this.css;
          },
        },
      ]),
      e
    );
  })(),
  hd = fd;
fd.default = fd;
var md = "'".charCodeAt(0),
  gd = '"'.charCodeAt(0),
  yd = "\\".charCodeAt(0),
  vd = "/".charCodeAt(0),
  bd = "\n".charCodeAt(0),
  Sd = " ".charCodeAt(0),
  _d = "\f".charCodeAt(0),
  xd = "\t".charCodeAt(0),
  wd = "\r".charCodeAt(0),
  Ed = "[".charCodeAt(0),
  Td = "]".charCodeAt(0),
  kd = "(".charCodeAt(0),
  Cd = ")".charCodeAt(0),
  Id = "{".charCodeAt(0),
  Ad = "}".charCodeAt(0),
  Od = ";".charCodeAt(0),
  Rd = "*".charCodeAt(0),
  Md = ":".charCodeAt(0),
  Pd = "@".charCodeAt(0),
  Nd = /[\t\n\f\r "#'()/;[\\\]{}]/g,
  Dd = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
  jd = /.[\r\n"'(/\\]/,
  Ld = /[\da-f]/i,
  Fd = id,
  Ud = (function (e) {
    function t(t) {
      var n;
      return ((n = e.call(this, t) || this).type = "atrule"), n;
    }
    g(t, e);
    var n = t.prototype;
    return (
      (n.append = function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        var o;
        return (
          this.proxyOf.nodes || (this.nodes = []),
          (o = e.prototype.append).call.apply(o, [].concat([this], n))
        );
      }),
      (n.prepend = function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        var o;
        return (
          this.proxyOf.nodes || (this.nodes = []),
          (o = e.prototype.prepend).call.apply(o, [].concat([this], n))
        );
      }),
      t
    );
  })(Fd),
  Bd = Ud;
(Ud.default = Ud), Fd.registerAtRule(Ud);
var zd,
  Hd,
  Vd = id,
  qd = (function (e) {
    function t(t) {
      var n;
      return (
        ((n = e.call(this, t) || this).type = "root"),
        n.nodes || (n.nodes = []),
        n
      );
    }
    g(t, e);
    var n = t.prototype;
    return (
      (n.normalize = function (t, n, r) {
        var o = e.prototype.normalize.call(this, t);
        if (n)
          if ("prepend" === r)
            this.nodes.length > 1
              ? (n.raws.before = this.nodes[1].raws.before)
              : delete n.raws.before;
          else if (this.first !== n)
            for (var i, a = w(o); !(i = a()).done; )
              i.value.raws.before = n.raws.before;
        return o;
      }),
      (n.removeChild = function (t, n) {
        var r = this.index(t);
        return (
          !n &&
            0 === r &&
            this.nodes.length > 1 &&
            (this.nodes[1].raws.before = this.nodes[r].raws.before),
          e.prototype.removeChild.call(this, t)
        );
      }),
      (n.toResult = function (e) {
        return void 0 === e && (e = {}), new zd(new Hd(), this, e).stringify();
      }),
      t
    );
  })(Vd);
(qd.registerLazyResult = function (e) {
  zd = e;
}),
  (qd.registerProcessor = function (e) {
    Hd = e;
  });
var Gd = qd;
(qd.default = qd), Vd.registerRoot(qd);
var Wd = {
    comma: function (e) {
      return Wd.split(e, [","], !0);
    },
    space: function (e) {
      return Wd.split(e, [" ", "\n", "\t"]);
    },
    split: function (e, t, n) {
      for (
        var r, o = [], i = "", a = !1, s = 0, l = !1, c = "", u = !1, d = w(e);
        !(r = d()).done;

      ) {
        var p = r.value;
        u
          ? (u = !1)
          : "\\" === p
            ? (u = !0)
            : l
              ? p === c && (l = !1)
              : '"' === p || "'" === p
                ? ((l = !0), (c = p))
                : "(" === p
                  ? (s += 1)
                  : ")" === p
                    ? s > 0 && (s -= 1)
                    : 0 === s && t.includes(p) && (a = !0),
          a ? ("" !== i && o.push(i.trim()), (i = ""), (a = !1)) : (i += p);
      }
      return (n || "" !== i) && o.push(i.trim()), o;
    },
  },
  $d = Wd;
Wd.default = Wd;
var Yd = id,
  Kd = $d,
  Zd = (function (e) {
    function t(t) {
      var n;
      return (
        ((n = e.call(this, t) || this).type = "rule"),
        n.nodes || (n.nodes = []),
        n
      );
    }
    return (
      g(t, e),
      f(t, [
        {
          key: "selectors",
          get: function () {
            return Kd.comma(this.selector);
          },
          set: function (e) {
            var t = this.selector ? this.selector.match(/,\s*/) : null,
              n = t ? t[0] : "," + this.raw("between", "beforeOpen");
            this.selector = e.join(n);
          },
        },
      ]),
      t
    );
  })(Yd),
  Qd = Zd;
(Zd.default = Zd), Yd.registerRule(Zd);
var Jd = du,
  Xd = $u,
  ep = Bd,
  tp = Gd,
  np = Qd,
  rp = { empty: !0, space: !0 },
  op = (function () {
    function e(e) {
      (this.input = e),
        (this.root = new tp()),
        (this.current = this.root),
        (this.spaces = ""),
        (this.semicolon = !1),
        this.createTokenizer(),
        (this.root.source = {
          input: e,
          start: { column: 1, line: 1, offset: 0 },
        });
    }
    var t = e.prototype;
    return (
      (t.atrule = function (e) {
        var t,
          n,
          r,
          o = new ep();
        (o.name = e[1].slice(1)),
          "" === o.name && this.unnamedAtrule(o, e),
          this.init(o, e[2]);
        for (
          var i = !1, a = !1, s = [], l = [];
          !this.tokenizer.endOfFile();

        ) {
          if (
            ("(" === (t = (e = this.tokenizer.nextToken())[0]) || "[" === t
              ? l.push("(" === t ? ")" : "]")
              : "{" === t && l.length > 0
                ? l.push("}")
                : t === l[l.length - 1] && l.pop(),
            0 === l.length)
          ) {
            if (";" === t) {
              (o.source.end = this.getPosition(e[2])),
                o.source.end.offset++,
                (this.semicolon = !0);
              break;
            }
            if ("{" === t) {
              a = !0;
              break;
            }
            if ("}" === t) {
              if (s.length > 0) {
                for (n = s[(r = s.length - 1)]; n && "space" === n[0]; )
                  n = s[--r];
                n &&
                  ((o.source.end = this.getPosition(n[3] || n[2])),
                  o.source.end.offset++);
              }
              this.end(e);
              break;
            }
            s.push(e);
          } else s.push(e);
          if (this.tokenizer.endOfFile()) {
            i = !0;
            break;
          }
        }
        (o.raws.between = this.spacesAndCommentsFromEnd(s)),
          s.length
            ? ((o.raws.afterName = this.spacesAndCommentsFromStart(s)),
              this.raw(o, "params", s),
              i &&
                ((e = s[s.length - 1]),
                (o.source.end = this.getPosition(e[3] || e[2])),
                o.source.end.offset++,
                (this.spaces = o.raws.between),
                (o.raws.between = "")))
            : ((o.raws.afterName = ""), (o.params = "")),
          a && ((o.nodes = []), (this.current = o));
      }),
      (t.checkMissedSemicolon = function (e) {
        var t = this.colon(e);
        if (!1 !== t) {
          for (
            var n, r = 0, o = t - 1;
            o >= 0 && ("space" === (n = e[o])[0] || 2 !== (r += 1));
            o--
          );
          throw this.input.error(
            "Missed semicolon",
            "word" === n[0] ? n[3] + 1 : n[2],
          );
        }
      }),
      (t.colon = function (e) {
        for (var t, n, r, o, i = 0, a = w(e.entries()); !(o = a()).done; ) {
          var s = o.value,
            l = s[0];
          if (
            ("(" === (n = (t = s[1])[0]) && (i += 1),
            ")" === n && (i -= 1),
            0 === i && ":" === n)
          ) {
            if (r) {
              if ("word" === r[0] && "progid" === r[1]) continue;
              return l;
            }
            this.doubleColon(t);
          }
          r = t;
        }
        return !1;
      }),
      (t.comment = function (e) {
        var t = new Xd();
        this.init(t, e[2]),
          (t.source.end = this.getPosition(e[3] || e[2])),
          t.source.end.offset++;
        var n = e[1].slice(2, -2);
        if (/^\s*$/.test(n))
          (t.text = ""), (t.raws.left = n), (t.raws.right = "");
        else {
          var r = n.match(/^(\s*)([^]*\S)(\s*)$/);
          (t.text = r[2]), (t.raws.left = r[1]), (t.raws.right = r[3]);
        }
      }),
      (t.createTokenizer = function () {
        this.tokenizer = (function (e, t) {
          void 0 === t && (t = {});
          var n,
            r,
            o,
            i,
            a,
            s,
            l,
            c,
            u,
            d,
            p = e.css.valueOf(),
            f = t.ignoreErrors,
            h = p.length,
            m = 0,
            g = [],
            y = [];
          function v(t) {
            throw e.error("Unclosed " + t, m);
          }
          return {
            back: function (e) {
              y.push(e);
            },
            endOfFile: function () {
              return 0 === y.length && m >= h;
            },
            nextToken: function (e) {
              if (y.length) return y.pop();
              if (!(m >= h)) {
                var t = !!e && e.ignoreUnclosed;
                switch ((n = p.charCodeAt(m))) {
                  case bd:
                  case Sd:
                  case xd:
                  case wd:
                  case _d:
                    r = m;
                    do {
                      (r += 1), (n = p.charCodeAt(r));
                    } while (
                      n === Sd ||
                      n === bd ||
                      n === xd ||
                      n === wd ||
                      n === _d
                    );
                    (d = ["space", p.slice(m, r)]), (m = r - 1);
                    break;
                  case Ed:
                  case Td:
                  case Id:
                  case Ad:
                  case Md:
                  case Od:
                  case Cd:
                    var b = String.fromCharCode(n);
                    d = [b, b, m];
                    break;
                  case kd:
                    if (
                      ((c = g.length ? g.pop()[1] : ""),
                      (u = p.charCodeAt(m + 1)),
                      "url" === c &&
                        u !== md &&
                        u !== gd &&
                        u !== Sd &&
                        u !== bd &&
                        u !== xd &&
                        u !== _d &&
                        u !== wd)
                    ) {
                      r = m;
                      do {
                        if (((s = !1), -1 === (r = p.indexOf(")", r + 1)))) {
                          if (f || t) {
                            r = m;
                            break;
                          }
                          v("bracket");
                        }
                        for (l = r; p.charCodeAt(l - 1) === yd; )
                          (l -= 1), (s = !s);
                      } while (s);
                      (d = ["brackets", p.slice(m, r + 1), m, r]), (m = r);
                    } else
                      (r = p.indexOf(")", m + 1)),
                        (i = p.slice(m, r + 1)),
                        -1 === r || jd.test(i)
                          ? (d = ["(", "(", m])
                          : ((d = ["brackets", i, m, r]), (m = r));
                    break;
                  case md:
                  case gd:
                    (o = n === md ? "'" : '"'), (r = m);
                    do {
                      if (((s = !1), -1 === (r = p.indexOf(o, r + 1)))) {
                        if (f || t) {
                          r = m + 1;
                          break;
                        }
                        v("string");
                      }
                      for (l = r; p.charCodeAt(l - 1) === yd; )
                        (l -= 1), (s = !s);
                    } while (s);
                    (d = ["string", p.slice(m, r + 1), m, r]), (m = r);
                    break;
                  case Pd:
                    (Nd.lastIndex = m + 1),
                      Nd.test(p),
                      (r =
                        0 === Nd.lastIndex ? p.length - 1 : Nd.lastIndex - 2),
                      (d = ["at-word", p.slice(m, r + 1), m, r]),
                      (m = r);
                    break;
                  case yd:
                    for (r = m, a = !0; p.charCodeAt(r + 1) === yd; )
                      (r += 1), (a = !a);
                    if (
                      ((n = p.charCodeAt(r + 1)),
                      a &&
                        n !== vd &&
                        n !== Sd &&
                        n !== bd &&
                        n !== xd &&
                        n !== wd &&
                        n !== _d &&
                        ((r += 1), Ld.test(p.charAt(r))))
                    ) {
                      for (; Ld.test(p.charAt(r + 1)); ) r += 1;
                      p.charCodeAt(r + 1) === Sd && (r += 1);
                    }
                    (d = ["word", p.slice(m, r + 1), m, r]), (m = r);
                    break;
                  default:
                    n === vd && p.charCodeAt(m + 1) === Rd
                      ? (0 === (r = p.indexOf("*/", m + 2) + 1) &&
                          (f || t ? (r = p.length) : v("comment")),
                        (d = ["comment", p.slice(m, r + 1), m, r]),
                        (m = r))
                      : ((Dd.lastIndex = m + 1),
                        Dd.test(p),
                        (r =
                          0 === Dd.lastIndex ? p.length - 1 : Dd.lastIndex - 2),
                        (d = ["word", p.slice(m, r + 1), m, r]),
                        g.push(d),
                        (m = r));
                }
                return m++, d;
              }
            },
            position: function () {
              return m;
            },
          };
        })(this.input);
      }),
      (t.decl = function (e, t) {
        var n = new Jd();
        this.init(n, e[0][2]);
        var r,
          o = e[e.length - 1];
        for (
          ";" === o[0] && ((this.semicolon = !0), e.pop()),
            n.source.end = this.getPosition(
              o[3] ||
                o[2] ||
                (function (e) {
                  for (var t = e.length - 1; t >= 0; t--) {
                    var n = e[t],
                      r = n[3] || n[2];
                    if (r) return r;
                  }
                })(e),
            ),
            n.source.end.offset++;
          "word" !== e[0][0];

        )
          1 === e.length && this.unknownWord(e),
            (n.raws.before += e.shift()[1]);
        for (
          n.source.start = this.getPosition(e[0][2]), n.prop = "";
          e.length;

        ) {
          var i = e[0][0];
          if (":" === i || "space" === i || "comment" === i) break;
          n.prop += e.shift()[1];
        }
        for (n.raws.between = ""; e.length; ) {
          if (":" === (r = e.shift())[0]) {
            n.raws.between += r[1];
            break;
          }
          "word" === r[0] && /\w/.test(r[1]) && this.unknownWord([r]),
            (n.raws.between += r[1]);
        }
        ("_" !== n.prop[0] && "*" !== n.prop[0]) ||
          ((n.raws.before += n.prop[0]), (n.prop = n.prop.slice(1)));
        for (
          var a, s = [];
          e.length && ("space" === (a = e[0][0]) || "comment" === a);

        )
          s.push(e.shift());
        this.precheckMissedSemicolon(e);
        for (var l = e.length - 1; l >= 0; l--) {
          if ("!important" === (r = e[l])[1].toLowerCase()) {
            n.important = !0;
            var c = this.stringFrom(e, l);
            " !important" !== (c = this.spacesFromEnd(e) + c) &&
              (n.raws.important = c);
            break;
          }
          if ("important" === r[1].toLowerCase()) {
            for (var u = e.slice(0), d = "", p = l; p > 0; p--) {
              var f = u[p][0];
              if (0 === d.trim().indexOf("!") && "space" !== f) break;
              d = u.pop()[1] + d;
            }
            0 === d.trim().indexOf("!") &&
              ((n.important = !0), (n.raws.important = d), (e = u));
          }
          if ("space" !== r[0] && "comment" !== r[0]) break;
        }
        var h = e.some(function (e) {
          return "space" !== e[0] && "comment" !== e[0];
        });
        h &&
          ((n.raws.between += s
            .map(function (e) {
              return e[1];
            })
            .join("")),
          (s = [])),
          this.raw(n, "value", s.concat(e), t),
          n.value.includes(":") && !t && this.checkMissedSemicolon(e);
      }),
      (t.doubleColon = function (e) {
        throw this.input.error(
          "Double colon",
          { offset: e[2] },
          { offset: e[2] + e[1].length },
        );
      }),
      (t.emptyRule = function (e) {
        var t = new np();
        this.init(t, e[2]),
          (t.selector = ""),
          (t.raws.between = ""),
          (this.current = t);
      }),
      (t.end = function (e) {
        this.current.nodes &&
          this.current.nodes.length &&
          (this.current.raws.semicolon = this.semicolon),
          (this.semicolon = !1),
          (this.current.raws.after =
            (this.current.raws.after || "") + this.spaces),
          (this.spaces = ""),
          this.current.parent
            ? ((this.current.source.end = this.getPosition(e[2])),
              this.current.source.end.offset++,
              (this.current = this.current.parent))
            : this.unexpectedClose(e);
      }),
      (t.endFile = function () {
        this.current.parent && this.unclosedBlock(),
          this.current.nodes &&
            this.current.nodes.length &&
            (this.current.raws.semicolon = this.semicolon),
          (this.current.raws.after =
            (this.current.raws.after || "") + this.spaces),
          (this.root.source.end = this.getPosition(this.tokenizer.position()));
      }),
      (t.freeSemicolon = function (e) {
        if (((this.spaces += e[1]), this.current.nodes)) {
          var t = this.current.nodes[this.current.nodes.length - 1];
          t &&
            "rule" === t.type &&
            !t.raws.ownSemicolon &&
            ((t.raws.ownSemicolon = this.spaces), (this.spaces = ""));
        }
      }),
      (t.getPosition = function (e) {
        var t = this.input.fromOffset(e);
        return { column: t.col, line: t.line, offset: e };
      }),
      (t.init = function (e, t) {
        this.current.push(e),
          (e.source = {
            input: this.input,
            start: this.getPosition(t),
          }),
          (e.raws.before = this.spaces),
          (this.spaces = ""),
          "comment" !== e.type && (this.semicolon = !1);
      }),
      (t.other = function (e) {
        for (
          var t = !1,
            n = null,
            r = !1,
            o = null,
            i = [],
            a = e[1].startsWith("--"),
            s = [],
            l = e;
          l;

        ) {
          if (((n = l[0]), s.push(l), "(" === n || "[" === n))
            o || (o = l), i.push("(" === n ? ")" : "]");
          else if (a && r && "{" === n) o || (o = l), i.push("}");
          else if (0 === i.length) {
            if (";" === n) {
              if (r) return void this.decl(s, a);
              break;
            }
            if ("{" === n) return void this.rule(s);
            if ("}" === n) {
              this.tokenizer.back(s.pop()), (t = !0);
              break;
            }
            ":" === n && (r = !0);
          } else
            n === i[i.length - 1] && (i.pop(), 0 === i.length && (o = null));
          l = this.tokenizer.nextToken();
        }
        if (
          (this.tokenizer.endOfFile() && (t = !0),
          i.length > 0 && this.unclosedBracket(o),
          t && r)
        ) {
          if (!a)
            for (
              ;
              s.length &&
              ("space" === (l = s[s.length - 1][0]) || "comment" === l);

            )
              this.tokenizer.back(s.pop());
          this.decl(s, a);
        } else this.unknownWord(s);
      }),
      (t.parse = function () {
        for (var e; !this.tokenizer.endOfFile(); )
          switch ((e = this.tokenizer.nextToken())[0]) {
            case "space":
              this.spaces += e[1];
              break;
            case ";":
              this.freeSemicolon(e);
              break;
            case "}":
              this.end(e);
              break;
            case "comment":
              this.comment(e);
              break;
            case "at-word":
              this.atrule(e);
              break;
            case "{":
              this.emptyRule(e);
              break;
            default:
              this.other(e);
          }
        this.endFile();
      }),
      (t.precheckMissedSemicolon = function () {}),
      (t.raw = function (e, t, n, r) {
        for (var o, i, a, s, l = n.length, c = "", u = !0, d = 0; d < l; d += 1)
          "space" !== (i = (o = n[d])[0]) || d !== l - 1 || r
            ? "comment" === i
              ? ((s = n[d - 1] ? n[d - 1][0] : "empty"),
                (a = n[d + 1] ? n[d + 1][0] : "empty"),
                rp[s] || rp[a] || "," === c.slice(-1) ? (u = !1) : (c += o[1]))
              : (c += o[1])
            : (u = !1);
        if (!u) {
          var p = n.reduce(function (e, t) {
            return e + t[1];
          }, "");
          e.raws[t] = { raw: p, value: c };
        }
        e[t] = c;
      }),
      (t.rule = function (e) {
        e.pop();
        var t = new np();
        this.init(t, e[0][2]),
          (t.raws.between = this.spacesAndCommentsFromEnd(e)),
          this.raw(t, "selector", e),
          (this.current = t);
      }),
      (t.spacesAndCommentsFromEnd = function (e) {
        for (
          var t, n = "";
          e.length && ("space" === (t = e[e.length - 1][0]) || "comment" === t);

        )
          n = e.pop()[1] + n;
        return n;
      }),
      (t.spacesAndCommentsFromStart = function (e) {
        for (
          var t, n = "";
          e.length && ("space" === (t = e[0][0]) || "comment" === t);

        )
          n += e.shift()[1];
        return n;
      }),
      (t.spacesFromEnd = function (e) {
        for (var t = ""; e.length && "space" === e[e.length - 1][0]; )
          t = e.pop()[1] + t;
        return t;
      }),
      (t.stringFrom = function (e, t) {
        for (var n = "", r = t; r < e.length; r++) n += e[r][1];
        return e.splice(t, e.length - t), n;
      }),
      (t.unclosedBlock = function () {
        var e = this.current.source.start;
        throw this.input.error("Unclosed block", e.line, e.column);
      }),
      (t.unclosedBracket = function (e) {
        throw this.input.error(
          "Unclosed bracket",
          { offset: e[2] },
          { offset: e[2] + 1 },
        );
      }),
      (t.unexpectedClose = function (e) {
        throw this.input.error(
          "Unexpected }",
          { offset: e[2] },
          { offset: e[2] + 1 },
        );
      }),
      (t.unknownWord = function (e) {
        throw this.input.error(
          "Unknown word",
          { offset: e[0][2] },
          { offset: e[0][2] + e[0][1].length },
        );
      }),
      (t.unnamedAtrule = function (e, t) {
        throw this.input.error(
          "At-rule without name",
          { offset: t[2] },
          { offset: t[2] + t[1].length },
        );
      }),
      e
    );
  })(),
  ip = id,
  ap = op,
  sp = Nu;
function lp(e, t) {
  var n = new sp(e, t),
    r = new ap(n);
  try {
    r.parse();
  } catch (e) {
    throw e;
  }
  return r.root;
}
var cp = lp;
(lp.default = lp), ip.registerParse(lp);
var up = Kc.isClean,
  dp = Kc.my,
  pp = Gu,
  fp = tu,
  hp = id,
  mp = cd,
  gp = hd,
  yp = cp,
  vp = Gd,
  bp = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule",
  },
  Sp = {
    AtRule: !0,
    AtRuleExit: !0,
    Comment: !0,
    CommentExit: !0,
    Declaration: !0,
    DeclarationExit: !0,
    Document: !0,
    DocumentExit: !0,
    Once: !0,
    OnceExit: !0,
    postcssPlugin: !0,
    prepare: !0,
    Root: !0,
    RootExit: !0,
    Rule: !0,
    RuleExit: !0,
  },
  _p = { Once: !0, postcssPlugin: !0, prepare: !0 };
function xp(e) {
  return (
    "object" === (void 0 === e ? "undefined" : S(e)) &&
    "function" == typeof e.then
  );
}
function wp(e) {
  var t = !1,
    n = bp[e.type];
  return (
    "decl" === e.type
      ? (t = e.prop.toLowerCase())
      : "atrule" === e.type && (t = e.name.toLowerCase()),
    t && e.append
      ? [n, n + "-" + t, 0, n + "Exit", n + "Exit-" + t]
      : t
        ? [n, n + "-" + t, n + "Exit", n + "Exit-" + t]
        : e.append
          ? [n, 0, n + "Exit"]
          : [n, n + "Exit"]
  );
}
function Ep(e) {
  return {
    eventIndex: 0,
    events:
      "document" === e.type
        ? ["Document", 0, "DocumentExit"]
        : "root" === e.type
          ? ["Root", 0, "RootExit"]
          : wp(e),
    iterator: 0,
    node: e,
    visitorIndex: 0,
    visitors: [],
  };
}
function Tp(e) {
  return (
    (e[up] = !1),
    e.nodes &&
      e.nodes.forEach(function (e) {
        return Tp(e);
      }),
    e
  );
}
var kp = {},
  Cp = (function () {
    function e(t, n, r) {
      var o,
        i = this;
      if (
        ((this.stringified = !1),
        (this.processed = !1),
        "object" !== (void 0 === n ? "undefined" : S(n)) ||
          null === n ||
          ("root" !== n.type && "document" !== n.type))
      )
        if (y(n, e) || y(n, gp))
          (o = Tp(n.root)),
            n.map &&
              (void 0 === r.map && (r.map = {}),
              r.map.inline || (r.map.inline = !1),
              (r.map.prev = n.map));
        else {
          var a = yp;
          r.syntax && (a = r.syntax.parse),
            r.parser && (a = r.parser),
            a.parse && (a = a.parse);
          try {
            o = a(n, r);
          } catch (e) {
            (this.processed = !0), (this.error = e);
          }
          o && !o[dp] && hp.rebuild(o);
        }
      else o = Tp(n);
      (this.result = new gp(t, o, r)),
        (this.helpers = h({}, kp, {
          postcss: kp,
          result: this.result,
        })),
        (this.plugins = this.processor.plugins.map(function (e) {
          return "object" === (void 0 === e ? "undefined" : S(e)) && e.prepare
            ? h({}, e, e.prepare(i.result))
            : e;
        }));
    }
    var t = e.prototype;
    return (
      (t.async = function () {
        return this.error
          ? Promise.reject(this.error)
          : this.processed
            ? Promise.resolve(this.result)
            : (this.processing || (this.processing = this.runAsync()),
              this.processing);
      }),
      (t.catch = function (e) {
        return this.async().catch(e);
      }),
      (t.finally = function (e) {
        return this.async().then(e, e);
      }),
      (t.getAsyncError = function () {
        throw new Error("Use process(css).then(cb) to work with async plugins");
      }),
      (t.handleError = function (e, t) {
        var n = this.result.lastPlugin;
        try {
          t && t.addToError(e),
            (this.error = e),
            "CssSyntaxError" !== e.name || e.plugin
              ? n.postcssVersion
              : ((e.plugin = n.postcssPlugin), e.setMessage());
        } catch (e) {
          console && console.error;
        }
        return e;
      }),
      (t.prepareVisitors = function () {
        var e = this;
        this.listeners = {};
        for (
          var t,
            n = function (t, n, r) {
              e.listeners[n] || (e.listeners[n] = []),
                e.listeners[n].push([t, r]);
            },
            r = w(this.plugins);
          !(t = r()).done;

        ) {
          var o = t.value;
          if ("object" === (void 0 === o ? "undefined" : S(o)))
            for (var i in o) {
              if (!Sp[i] && /^[A-Z]/.test(i))
                throw new Error(
                  "Unknown event " +
                    i +
                    " in " +
                    o.postcssPlugin +
                    ". Try to update PostCSS (" +
                    this.processor.version +
                    " now).",
                );
              if (!_p[i])
                if ("object" === S(o[i]))
                  for (var a in o[i])
                    n(o, "*" === a ? i : i + "-" + a.toLowerCase(), o[i][a]);
                else "function" == typeof o[i] && n(o, i, o[i]);
            }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
      }),
      (t.runAsync = function () {
        var e = this;
        return d(function () {
          var t, n, r, o, i, a, s, l, c, u, d, p;
          return E(this, function (f) {
            switch (f.label) {
              case 0:
                (e.plugin = 0), (t = 0), (f.label = 1);
              case 1:
                if (!(t < e.plugins.length)) return [3, 6];
                if (((n = e.plugins[t]), !xp((r = e.runOnRoot(n)))))
                  return [3, 5];
                f.label = 2;
              case 2:
                return f.trys.push([2, 4, , 5]), [4, r];
              case 3:
                return f.sent(), [3, 5];
              case 4:
                throw ((o = f.sent()), e.handleError(o));
              case 5:
                return t++, [3, 1];
              case 6:
                if ((e.prepareVisitors(), !e.hasListener)) return [3, 18];
                (i = e.result.root), (f.label = 7);
              case 7:
                if (i[up]) return [3, 14];
                (i[up] = !0), (a = [Ep(i)]), (f.label = 8);
              case 8:
                if (!(a.length > 0)) return [3, 13];
                if (!xp((s = e.visitTick(a)))) return [3, 12];
                f.label = 9;
              case 9:
                return f.trys.push([9, 11, , 12]), [4, s];
              case 10:
                return f.sent(), [3, 12];
              case 11:
                throw (
                  ((l = f.sent()),
                  (c = a[a.length - 1].node),
                  e.handleError(l, c))
                );
              case 12:
                return [3, 8];
              case 13:
                return [3, 7];
              case 14:
                if (!e.listeners.OnceExit) return [3, 18];
                (u = function () {
                  var t, n, r, o, a;
                  return E(this, function (s) {
                    switch (s.label) {
                      case 0:
                        (t = p.value),
                          (n = t[0]),
                          (r = t[1]),
                          (e.result.lastPlugin = n),
                          (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 6, , 7]),
                          "document" !== i.type
                            ? [3, 3]
                            : ((o = i.nodes.map(function (t) {
                                return r(t, e.helpers);
                              })),
                              [4, Promise.all(o)])
                        );
                      case 2:
                        return s.sent(), [3, 5];
                      case 3:
                        return [4, r(i, e.helpers)];
                      case 4:
                        s.sent(), (s.label = 5);
                      case 5:
                        return [3, 7];
                      case 6:
                        throw ((a = s.sent()), e.handleError(a));
                      case 7:
                        return [2];
                    }
                  });
                }),
                  (d = w(e.listeners.OnceExit)),
                  (f.label = 15);
              case 15:
                return (p = d()).done ? [3, 18] : [5, T(u())];
              case 16:
                f.sent(), (f.label = 17);
              case 17:
                return [3, 15];
              case 18:
                return (e.processed = !0), [2, e.stringify()];
            }
          });
        })();
      }),
      (t.runOnRoot = function (e) {
        var t = this;
        this.result.lastPlugin = e;
        try {
          if ("object" === (void 0 === e ? "undefined" : S(e)) && e.Once) {
            if ("document" === this.result.root.type) {
              var n = this.result.root.nodes.map(function (n) {
                return e.Once(n, t.helpers);
              });
              return xp(n[0]) ? Promise.all(n) : n;
            }
            return e.Once(this.result.root, this.helpers);
          }
          if ("function" == typeof e) return e(this.result.root, this.result);
        } catch (e) {
          throw this.handleError(e);
        }
      }),
      (t.stringify = function () {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        (this.stringified = !0), this.sync();
        var e = this.result.opts,
          t = fp;
        e.syntax && (t = e.syntax.stringify),
          e.stringifier && (t = e.stringifier),
          t.stringify && (t = t.stringify);
        var n = new pp(t, this.result.root, this.result.opts).generate();
        return (this.result.css = n[0]), (this.result.map = n[1]), this.result;
      }),
      (t.sync = function () {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        if (((this.processed = !0), this.processing))
          throw this.getAsyncError();
        for (var e, t = w(this.plugins); !(e = t()).done; ) {
          var n = e.value;
          if (xp(this.runOnRoot(n))) throw this.getAsyncError();
        }
        if ((this.prepareVisitors(), this.hasListener)) {
          for (var r = this.result.root; !r[up]; )
            (r[up] = !0), this.walkSync(r);
          if (this.listeners.OnceExit)
            if ("document" === r.type)
              for (var o, i = w(r.nodes); !(o = i()).done; ) {
                var a = o.value;
                this.visitSync(this.listeners.OnceExit, a);
              }
            else this.visitSync(this.listeners.OnceExit, r);
        }
        return this.result;
      }),
      (t.then = function (e, t) {
        return this.async().then(e, t);
      }),
      (t.toString = function () {
        return this.css;
      }),
      (t.visitSync = function (e, t) {
        for (var n, r = w(e); !(n = r()).done; ) {
          var o = n.value,
            i = o[0],
            a = o[1];
          this.result.lastPlugin = i;
          var s = void 0;
          try {
            s = a(t, this.helpers);
          } catch (e) {
            throw this.handleError(e, t.proxyOf);
          }
          if ("root" !== t.type && "document" !== t.type && !t.parent)
            return !0;
          if (xp(s)) throw this.getAsyncError();
        }
      }),
      (t.visitTick = function (e) {
        var t = e[e.length - 1],
          n = t.node,
          r = t.visitors;
        if ("root" === n.type || "document" === n.type || n.parent) {
          if (r.length > 0 && t.visitorIndex < r.length) {
            var o = r[t.visitorIndex],
              i = o[0],
              a = o[1];
            (t.visitorIndex += 1),
              t.visitorIndex === r.length &&
                ((t.visitors = []), (t.visitorIndex = 0)),
              (this.result.lastPlugin = i);
            try {
              return a(n.toProxy(), this.helpers);
            } catch (e) {
              throw this.handleError(e, n);
            }
          }
          if (0 !== t.iterator) {
            for (var s, l = t.iterator; (s = n.nodes[n.indexes[l]]); )
              if (((n.indexes[l] += 1), !s[up]))
                return (s[up] = !0), void e.push(Ep(s));
            (t.iterator = 0), delete n.indexes[l];
          }
          for (var c = t.events; t.eventIndex < c.length; ) {
            var u = c[t.eventIndex];
            if (((t.eventIndex += 1), 0 === u))
              return void (
                n.nodes &&
                n.nodes.length &&
                ((n[up] = !0), (t.iterator = n.getIterator()))
              );
            if (this.listeners[u]) return void (t.visitors = this.listeners[u]);
          }
          e.pop();
        } else e.pop();
      }),
      (t.walkSync = function (e) {
        var t = this;
        e[up] = !0;
        for (var n, r = w(wp(e)); !(n = r()).done; ) {
          var o = n.value;
          if (0 === o)
            e.nodes &&
              e.each(function (e) {
                e[up] || t.walkSync(e);
              });
          else {
            var i = this.listeners[o];
            if (i && this.visitSync(i, e.toProxy())) return;
          }
        }
      }),
      (t.warnings = function () {
        return this.sync().warnings();
      }),
      f(e, [
        {
          key: "content",
          get: function () {
            return this.stringify().content;
          },
        },
        {
          key: "css",
          get: function () {
            return this.stringify().css;
          },
        },
        {
          key: "map",
          get: function () {
            return this.stringify().map;
          },
        },
        {
          key: "messages",
          get: function () {
            return this.sync().messages;
          },
        },
        {
          key: "opts",
          get: function () {
            return this.result.opts;
          },
        },
        {
          key: "processor",
          get: function () {
            return this.result.processor;
          },
        },
        {
          key: "root",
          get: function () {
            return this.sync().root;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "LazyResult";
          },
        },
      ]),
      e
    );
  })();
Cp.registerPostcss = function (e) {
  kp = e;
};
var Ip = Cp;
(Cp.default = Cp), vp.registerLazyResult(Cp), mp.registerLazyResult(Cp);
var Ap = Gu,
  Op = tu,
  Rp = cp,
  Mp = hd,
  Pp = (function () {
    function e(e, t, n) {
      var r;
      (t = t.toString()),
        (this.stringified = !1),
        (this._processor = e),
        (this._css = t),
        (this._opts = n),
        (this._map = void 0);
      var o = Op;
      (this.result = new Mp(this._processor, r, this._opts)),
        (this.result.css = t);
      var i = this;
      Object.defineProperty(this.result, "root", {
        get: function () {
          return i.root;
        },
      });
      var a = new Ap(o, r, this._opts, t);
      if (a.isMap()) {
        var s = a.generate(),
          l = s[0],
          c = s[1];
        l && (this.result.css = l), c && (this.result.map = c);
      } else a.clearAnnotation(), (this.result.css = a.css);
    }
    var t = e.prototype;
    return (
      (t.async = function () {
        return this.error
          ? Promise.reject(this.error)
          : Promise.resolve(this.result);
      }),
      (t.catch = function (e) {
        return this.async().catch(e);
      }),
      (t.finally = function (e) {
        return this.async().then(e, e);
      }),
      (t.sync = function () {
        if (this.error) throw this.error;
        return this.result;
      }),
      (t.then = function (e, t) {
        return this.async().then(e, t);
      }),
      (t.toString = function () {
        return this._css;
      }),
      (t.warnings = function () {
        return [];
      }),
      f(e, [
        {
          key: "content",
          get: function () {
            return this.result.css;
          },
        },
        {
          key: "css",
          get: function () {
            return this.result.css;
          },
        },
        {
          key: "map",
          get: function () {
            return this.result.map;
          },
        },
        {
          key: "messages",
          get: function () {
            return [];
          },
        },
        {
          key: "opts",
          get: function () {
            return this.result.opts;
          },
        },
        {
          key: "processor",
          get: function () {
            return this.result.processor;
          },
        },
        {
          key: "root",
          get: function () {
            if (this._root) return this._root;
            var e,
              t = Rp;
            try {
              e = t(this._css, this._opts);
            } catch (e) {
              this.error = e;
            }
            if (this.error) throw this.error;
            return (this._root = e), e;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "NoWorkResult";
          },
        },
      ]),
      e
    );
  })(),
  Np = Pp;
Pp.default = Pp;
var Dp = Np,
  jp = Ip,
  Lp = cd,
  Fp = Gd,
  Up = (function () {
    function e(e) {
      void 0 === e && (e = []),
        (this.version = "8.4.38"),
        (this.plugins = this.normalize(e));
    }
    var t = e.prototype;
    return (
      (t.normalize = function (e) {
        for (var t, n = [], r = w(e); !(t = r()).done; ) {
          var o = t.value;
          if (
            (!0 === o.postcss ? (o = o()) : o.postcss && (o = o.postcss),
            "object" === (void 0 === o ? "undefined" : S(o)) &&
              Array.isArray(o.plugins))
          )
            n = n.concat(o.plugins);
          else if (
            "object" === (void 0 === o ? "undefined" : S(o)) &&
            o.postcssPlugin
          )
            n.push(o);
          else if ("function" == typeof o) n.push(o);
          else if (
            "object" !== (void 0 === o ? "undefined" : S(o)) ||
            (!o.parse && !o.stringify)
          )
            throw new Error(o + " is not a PostCSS plugin");
        }
        return n;
      }),
      (t.process = function (e, t) {
        return (
          void 0 === t && (t = {}),
          this.plugins.length || t.parser || t.stringifier || t.syntax
            ? new jp(this, e, t)
            : new Dp(this, e, t)
        );
      }),
      (t.use = function (e) {
        return (this.plugins = this.plugins.concat(this.normalize([e]))), this;
      }),
      e
    );
  })(),
  Bp = Up;
(Up.default = Up), Fp.registerProcessor(Up), Lp.registerProcessor(Up);
var zp = du,
  Hp = bu,
  Vp = $u,
  qp = Bd,
  Gp = Nu,
  Wp = Gd,
  $p = Qd;
function Yp(e, t) {
  if (Array.isArray(e))
    return e.map(function (e) {
      return Yp(e);
    });
  var n = e.inputs,
    r = v(e, ["inputs"]);
  if (n) {
    t = [];
    for (var o, i = w(n); !(o = i()).done; ) {
      var a = h({}, o.value, { __proto__: Gp.prototype });
      a.map && (a.map = h({}, a.map, { __proto__: Hp.prototype })), t.push(a);
    }
  }
  if (
    (r.nodes &&
      (r.nodes = e.nodes.map(function (e) {
        return Yp(e, t);
      })),
    r.source)
  ) {
    var s = r.source,
      l = s.inputId,
      c = v(s, ["inputId"]);
    (r.source = c), null != l && (r.source.input = t[l]);
  }
  if ("root" === r.type) return new Wp(r);
  if ("decl" === r.type) return new zp(r);
  if ("rule" === r.type) return new $p(r);
  if ("comment" === r.type) return new Vp(r);
  if ("atrule" === r.type) return new qp(r);
  throw new Error("Unknown node type: " + e.type);
}
var Kp = Yp;
Yp.default = Yp;
var Zp = Yc,
  Qp = du,
  Jp = Ip,
  Xp = id,
  ef = Bp,
  tf = tu,
  nf = Kp,
  rf = cd,
  of = dd,
  af = $u,
  sf = Bd,
  lf = hd,
  cf = Nu,
  uf = cp,
  df = $d,
  pf = Qd,
  ff = Gd,
  hf = cu;
function mf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return 1 === t.length && Array.isArray(t[0]) && (t = t[0]), new ef(t);
}
(mf.plugin = function (e, t) {
  var n,
    r = !1;
  function o() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    console &&
      console.warn &&
      !r &&
      ((r = !0), process.env.LANG && process.env.LANG.startsWith("cn"));
    var a = t.apply(void 0, [].concat(o));
    return (a.postcssPlugin = e), (a.postcssVersion = new ef().version), a;
  }
  return (
    Object.defineProperty(o, "postcss", {
      get: function () {
        return n || (n = o()), n;
      },
    }),
    (o.process = function (e, t, n) {
      return mf([o(n)]).process(e, t);
    }),
    o
  );
}),
  (mf.stringify = tf),
  (mf.parse = uf),
  (mf.fromJSON = nf),
  (mf.list = df),
  (mf.comment = function (e) {
    return new af(e);
  }),
  (mf.atRule = function (e) {
    return new sf(e);
  }),
  (mf.decl = function (e) {
    return new Qp(e);
  }),
  (mf.rule = function (e) {
    return new pf(e);
  }),
  (mf.root = function (e) {
    return new ff(e);
  }),
  (mf.document = function (e) {
    return new rf(e);
  }),
  (mf.CssSyntaxError = Zp),
  (mf.Declaration = Qp),
  (mf.Container = Xp),
  (mf.Processor = ef),
  (mf.Document = rf),
  (mf.Comment = af),
  (mf.Warning = of),
  (mf.AtRule = sf),
  (mf.Result = lf),
  (mf.Input = cf),
  (mf.Rule = pf),
  (mf.Root = ff),
  (mf.Node = hf),
  Jp.registerPostcss(mf);
var gf = mf;
mf.default = mf;
var yf = Fc(gf);
yf.stringify,
  yf.fromJSON,
  yf.plugin,
  yf.parse,
  yf.list,
  yf.document,
  yf.comment,
  yf.atRule,
  yf.rule,
  yf.decl,
  yf.root,
  yf.CssSyntaxError,
  yf.Declaration,
  yf.Container,
  yf.Processor,
  yf.Document,
  yf.Comment,
  yf.Warning,
  yf.AtRule,
  yf.Result,
  yf.Input,
  yf.Rule,
  yf.Root,
  yf.Node;
var vf = Object.defineProperty,
  bf = function (e, t, n) {
    return (function (e, t, n) {
      return t in e
        ? vf(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n,
          })
        : (e[t] = n);
    })(e, "symbol" !== (void 0 === t ? "undefined" : S(t)) ? t + "" : t, n);
  },
  Sf = (function () {
    function e(e) {
      bf(this, "fileName"),
        bf(this, "functionName"),
        bf(this, "lineNumber"),
        bf(this, "columnNumber"),
        (this.fileName = e.fileName || ""),
        (this.functionName = e.functionName || ""),
        (this.lineNumber = e.lineNumber),
        (this.columnNumber = e.columnNumber);
    }
    return (
      (e.prototype.toString = function () {
        var e = this.lineNumber || "",
          t = this.columnNumber || "";
        return this.functionName
          ? this.functionName + " (" + this.fileName + ":" + e + ":" + t + ")"
          : this.fileName + ":" + e + ":" + t;
      }),
      e
    );
  })(),
  _f = /(^|@)\S+:\d+/,
  xf = /^\s*at .*(\S+:\d+|\(native\))/m,
  wf = /^(eval@)?(\[native code])?$/,
  Ef = {
    parse: function (e) {
      return e
        ? void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]
          ? this.parseOpera(e)
          : e.stack && e.stack.match(xf)
            ? this.parseV8OrIE(e)
            : e.stack
              ? this.parseFFOrSafari(e)
              : []
        : [];
    },
    extractLocation: function (e) {
      if (-1 === e.indexOf(":")) return [e];
      var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
      if (!t) throw new Error("Cannot parse given url: " + e);
      return [t[1], t[2] || void 0, t[3] || void 0];
    },
    parseV8OrIE: function (e) {
      return e.stack
        .split("\n")
        .filter(function (e) {
          return !!e.match(xf);
        }, this)
        .map(function (e) {
          e.indexOf("(eval ") > -1 &&
            (e = e
              .replace(/eval code/g, "eval")
              .replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
          var t = e.replace(/^\s+/, "").replace(/\(eval code/g, "("),
            n = t.match(/ (\((.+):(\d+):(\d+)\)$)/),
            r = (t = n ? t.replace(n[0], "") : t).split(/\s+/).slice(1),
            o = this.extractLocation(n ? n[1] : r.pop()),
            i = r.join(" ") || void 0,
            a = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
          return new Sf({
            functionName: i,
            fileName: a,
            lineNumber: o[1],
            columnNumber: o[2],
          });
        }, this);
    },
    parseFFOrSafari: function (e) {
      return e.stack
        .split("\n")
        .filter(function (e) {
          return !e.match(wf);
        }, this)
        .map(function (e) {
          if (
            (e.indexOf(" > eval") > -1 &&
              (e = e.replace(
                / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                ":$1",
              )),
            -1 === e.indexOf("@") && -1 === e.indexOf(":"))
          )
            return new Sf({ functionName: e });
          var t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
            n = e.match(t),
            r = n && n[1] ? n[1] : void 0,
            o = this.extractLocation(e.replace(t, ""));
          return new Sf({
            functionName: r,
            fileName: o[0],
            lineNumber: o[1],
            columnNumber: o[2],
          });
        }, this);
    },
    parseOpera: function (e) {
      return !e.stacktrace ||
        (e.message.indexOf("\n") > -1 &&
          e.message.split("\n").length > e.stacktrace.split("\n").length)
        ? this.parseOpera9(e)
        : e.stack
          ? this.parseOpera11(e)
          : this.parseOpera10(e);
    },
    parseOpera9: function (e) {
      for (
        var t = /Line (\d+).*script (?:in )?(\S+)/i,
          n = e.message.split("\n"),
          r = [],
          o = 2,
          i = n.length;
        o < i;
        o += 2
      ) {
        var a = t.exec(n[o]);
        a && r.push(new Sf({ fileName: a[2], lineNumber: parseFloat(a[1]) }));
      }
      return r;
    },
    parseOpera10: function (e) {
      for (
        var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
          n = e.stacktrace.split("\n"),
          r = [],
          o = 0,
          i = n.length;
        o < i;
        o += 2
      ) {
        var a = t.exec(n[o]);
        a &&
          r.push(
            new Sf({
              functionName: a[3] || void 0,
              fileName: a[2],
              lineNumber: parseFloat(a[1]),
            }),
          );
      }
      return r;
    },
    parseOpera11: function (e) {
      return e.stack
        .split("\n")
        .filter(function (e) {
          return !!e.match(_f) && !e.match(/^Error created at/);
        }, this)
        .map(function (e) {
          var t = e.split("@"),
            n = this.extractLocation(t.pop()),
            r =
              (t.shift() || "")
                .replace(/<anonymous function(: (\w+))?>/, "$2")
                .replace(/\([^)]*\)/g, "") || void 0;
          return new Sf({
            functionName: r,
            fileName: n[0],
            lineNumber: n[1],
            columnNumber: n[2],
          });
        }, this);
    },
  };
function Tf(e) {
  if (!e || !e.outerHTML) return "";
  for (var t = ""; e.parentElement; ) {
    var n = e.localName;
    if (!n) break;
    n = n.toLowerCase();
    var r = e.parentElement,
      o = [];
    if (r.children && r.children.length > 0)
      for (var i = 0; i < r.children.length; i++) {
        var a = r.children[i];
        a.localName &&
          a.localName.toLowerCase &&
          a.localName.toLowerCase() === n &&
          o.push(a);
      }
    o.length > 1 && (n += ":eq(" + o.indexOf(e) + ")"),
      (t = n + (t ? ">" + t : "")),
      (e = r);
  }
  return t;
}
function kf(e) {
  return "[object Object]" === Object.prototype.toString.call(e);
}
function Cf(e, t) {
  if (0 === t) return !0;
  for (var n, r = w(Object.keys(e)); !(n = r()).done; ) {
    var o = n.value;
    if (kf(e[o]) && Cf(e[o], t - 1)) return !0;
  }
  return !1;
}
function If(e, t) {
  var n = { numOfKeysLimit: 50, depthOfLimit: 4 };
  Object.assign(n, t);
  var r = [],
    o = [];
  return JSON.stringify(e, function (e, t) {
    if (r.length > 0) {
      var i = r.indexOf(this);
      ~i ? r.splice(i + 1) : r.push(this),
        ~i ? o.splice(i, 1 / 0, e) : o.push(e),
        ~r.indexOf(t) &&
          (t =
            r[0] === t
              ? "[Circular ~]"
              : "[Circular ~." + o.slice(0, r.indexOf(t)).join(".") + "]");
    } else r.push(t);
    if (null === t) return t;
    if (void 0 === t) return "undefined";
    if (
      (kf((a = t)) && Object.keys(a).length > n.numOfKeysLimit) ||
      "function" == typeof a ||
      (kf(a) && Cf(a, n.depthOfLimit))
    )
      return (function (e) {
        var t = e.toString();
        return (
          n.stringLengthLimit &&
            t.length > n.stringLengthLimit &&
            (t = t.slice(0, n.stringLengthLimit) + "..."),
          t
        );
      })(t);
    var a;
    if ("bigint" === (void 0 === t ? "undefined" : S(t)))
      return t.toString() + "n";
    if (y(t, Event)) {
      var s = {};
      for (var l in t) {
        var c = t[l];
        Array.isArray(c) ? (s[l] = Tf(c.length ? c[0] : null)) : (s[l] = c);
      }
      return s;
    }
    return y(t, Node)
      ? y(t, HTMLElement)
        ? t
          ? t.outerHTML
          : ""
        : t.nodeName
      : y(t, Error)
        ? t.stack
          ? t.stack + "\nEnd of stack for Error object"
          : t.name + ": " + t.message
        : t;
  });
}
var Af = {
  level: [
    "assert",
    "clear",
    "count",
    "countReset",
    "debug",
    "dir",
    "dirxml",
    "error",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "table",
    "time",
    "timeEnd",
    "timeLog",
    "trace",
    "warn",
  ],
  lengthThreshold: 1e3,
  logger: "console",
};
function Of(e, t, n) {
  var r,
    o = n ? Object.assign({}, Af, n) : Af,
    i = o.logger;
  if (!i) return function () {};
  r = "string" == typeof i ? t[i] : i;
  var a = 0,
    s = !1,
    l = [];
  if (o.level.includes("error")) {
    var c = function (t) {
      var n = t.message,
        r = t.error,
        i = Ef.parse(r).map(function (e) {
          return e.toString();
        }),
        a = [If(n, o.stringifyOptions)];
      e({ level: "error", trace: i, payload: a });
    };
    t.addEventListener("error", c),
      l.push(function () {
        t.removeEventListener("error", c);
      });
    var u = function (t) {
      var n, r;
      y(t.reason, Error)
        ? (r = [
            If(
              "Uncaught (in promise) " + (n = t.reason).name + ": " + n.message,
              o.stringifyOptions,
            ),
          ])
        : ((n = new Error()),
          (r = [
            If("Uncaught (in promise)", o.stringifyOptions),
            If(t.reason, o.stringifyOptions),
          ]));
      var i = Ef.parse(n).map(function (e) {
        return e.toString();
      });
      e({ level: "error", trace: i, payload: r });
    };
    t.addEventListener("unhandledrejection", u),
      l.push(function () {
        t.removeEventListener("unhandledrejection", u);
      });
  }
  for (var d, p = w(o.level); !(d = p()).done; ) {
    var f = d.value;
    l.push(h(r, f));
  }
  return function () {
    l.forEach(function (e) {
      return e();
    });
  };
  function h(t, n) {
    var r = this;
    return t[n]
      ? (function (t, i) {
          try {
            if (!(i in t)) return function () {};
            var l = t[i],
              c = (function (t) {
                var i = r;
                return function () {
                  for (
                    var r = arguments.length, l = new Array(r), c = 0;
                    c < r;
                    c++
                  )
                    l[c] = arguments[c];
                  if ((t.apply(i, l), !(("assert" === n && l[0]) || s))) {
                    s = !0;
                    try {
                      var u = Ef.parse(new Error())
                          .map(function (e) {
                            return e.toString();
                          })
                          .splice(1),
                        d = ("assert" === n ? l.slice(1) : l).map(function (e) {
                          return If(e, o.stringifyOptions);
                        });
                      ++a < o.lengthThreshold
                        ? e({ level: n, trace: u, payload: d })
                        : a === o.lengthThreshold &&
                          e({
                            level: "warn",
                            trace: [],
                            payload: [
                              If(
                                "The number of log records reached the threshold.",
                              ),
                            ],
                          });
                    } catch (e) {
                      t.apply(void 0, [].concat(["rrweb logger error:", e], l));
                    } finally {
                      s = !1;
                    }
                  }
                };
              })(l);
            return (
              "function" == typeof c &&
                ((c.prototype = c.prototype || {}),
                Object.defineProperties(c, {
                  __rrweb_original__: { enumerable: !1, value: l },
                })),
              (t[i] = c),
              function () {
                t[i] = l;
              }
            );
          } catch (e) {
            return function () {};
          }
        })(t, n)
      : function () {};
  }
}
var Rf,
  Mf,
  Pf,
  Nf = r.setImmediate,
  Df = Object.prototype.toString,
  jf =
    void 0 !== Nf
      ? function (e) {
          return Nf(e);
        }
      : setTimeout;
try {
  Object.defineProperty({}, "x", {}),
    (Rf = function (e, t, n, r) {
      return Object.defineProperty(e, t, {
        value: n,
        writable: !0,
        configurable: !1 !== r,
      });
    });
} catch (e) {
  Rf = function (e, t, n) {
    return (e[t] = n), e;
  };
}
function Lf(e, t) {
  Pf.add(e, t), Mf || (Mf = jf(Pf.drain));
}
function Ff(e) {
  var t,
    n = typeof e;
  return (
    null === e || ("object" !== n && "function" !== n) || (t = e.then),
    "function" == typeof t && t
  );
}
function Uf() {
  for (var e = 0; e < this.chain.length; e++)
    Bf(
      this,
      1 === this.state ? this.chain[e].success : this.chain[e].failure,
      this.chain[e],
    );
  this.chain.length = 0;
}
function Bf(e, t, n) {
  var r, o;
  try {
    !1 === t
      ? n.reject(e.msg)
      : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise
        ? n.reject(TypeError("Promise-chain cycle"))
        : (o = Ff(r))
          ? o.call(r, n.resolve, n.reject)
          : n.resolve(r);
  } catch (e) {
    n.reject(e);
  }
}
function zf(e) {
  var t,
    n = this;
  if (!n.triggered) {
    (n.triggered = !0), n.def && (n = n.def);
    try {
      (t = Ff(e))
        ? Lf(function () {
            var r = new qf(n);
            try {
              t.call(
                e,
                function () {
                  zf.apply(r, arguments);
                },
                function () {
                  Hf.apply(r, arguments);
                },
              );
            } catch (e) {
              Hf.call(r, e);
            }
          })
        : ((n.msg = e), (n.state = 1), n.chain.length > 0 && Lf(Uf, n));
    } catch (e) {
      Hf.call(new qf(n), e);
    }
  }
}
function Hf(e) {
  var t = this;
  t.triggered ||
    ((t.triggered = !0),
    t.def && (t = t.def),
    (t.msg = e),
    (t.state = 2),
    t.chain.length > 0 && Lf(Uf, t));
}
function Vf(e, t, n, r) {
  for (var o = 0; o < t.length; o++)
    (function (o) {
      e.resolve(t[o]).then(function (e) {
        n(o, e);
      }, r);
    })(o);
}
function qf(e) {
  (this.def = e), (this.triggered = !1);
}
function Gf(e) {
  (this.promise = e),
    (this.state = 0),
    (this.triggered = !1),
    (this.chain = []),
    (this.msg = void 0);
}
function Wf(e) {
  if ("function" != typeof e) throw TypeError("Not a function");
  if (0 !== this.__NPO__) throw TypeError("Not a promise");
  this.__NPO__ = 1;
  var t = new Gf(this);
  (this.then = function (e, n) {
    var r = {
      success: "function" != typeof e || e,
      failure: "function" == typeof n && n,
    };
    return (
      (r.promise = new this.constructor(function (e, t) {
        if ("function" != typeof e || "function" != typeof t)
          throw TypeError("Not a function");
        (r.resolve = e), (r.reject = t);
      })),
      t.chain.push(r),
      0 !== t.state && Lf(Uf, t),
      r.promise
    );
  }),
    (this.catch = function (e) {
      return this.then(void 0, e);
    });
  try {
    e.call(
      void 0,
      function (e) {
        zf.call(t, e);
      },
      function (e) {
        Hf.call(t, e);
      },
    );
  } catch (e) {
    Hf.call(t, e);
  }
}
Pf = (function () {
  var e, t, n;
  function r(e, t) {
    (this.fn = e), (this.self = t), (this.next = void 0);
  }
  return {
    add: function (o, i) {
      (n = new r(o, i)), t ? (t.next = n) : (e = n), (t = n), (n = void 0);
    },
    drain: function () {
      var n = e;
      for (e = t = Mf = void 0; n; ) n.fn.call(n.self), (n = n.next);
    },
  };
})();
var $f,
  Yf = Rf({}, "constructor", Wf, !1);
(Wf.prototype = Yf),
  Rf(Yf, "__NPO__", 0, !1),
  Rf(Wf, "resolve", function (e) {
    return e && "object" == typeof e && 1 === e.__NPO__
      ? e
      : new this(function (t, n) {
          if ("function" != typeof t || "function" != typeof n)
            throw TypeError("Not a function");
          t(e);
        });
  }),
  Rf(Wf, "reject", function (e) {
    return new this(function (t, n) {
      if ("function" != typeof t || "function" != typeof n)
        throw TypeError("Not a function");
      n(e);
    });
  }),
  Rf(Wf, "all", function (e) {
    var t = this;
    return "[object Array]" !== Df.call(e)
      ? t.reject(TypeError("Not an array"))
      : 0 === e.length
        ? t.resolve([])
        : new t(function (n, r) {
            if ("function" != typeof n || "function" != typeof r)
              throw TypeError("Not a function");
            var o = e.length,
              i = Array(o),
              a = 0;
            Vf(
              t,
              e,
              function (e, t) {
                (i[e] = t), ++a === o && n(i);
              },
              r,
            );
          });
  }),
  Rf(Wf, "race", function (e) {
    var t = this;
    return "[object Array]" !== Df.call(e)
      ? t.reject(TypeError("Not an array"))
      : new t(function (n, r) {
          if ("function" != typeof n || "function" != typeof r)
            throw TypeError("Not a function");
          Vf(
            t,
            e,
            function (e, t) {
              n(t);
            },
            r,
          );
        });
  }),
  ($f =
    "undefined" != typeof Promise &&
    -1 !== Promise.toString().indexOf("[native code]")
      ? Promise
      : Wf);
var Kf,
  Zf,
  Qf,
  Jf,
  Xf,
  eh,
  th,
  nh,
  rh,
  oh,
  ih = 864e5,
  ah = Array.prototype,
  sh = Function.prototype,
  lh = Object.prototype,
  ch = ah.slice,
  uh = lh.toString,
  dh = lh.hasOwnProperty,
  ph = r.console,
  fh = r.navigator,
  hh = r.document,
  mh = r.opera,
  gh = r.screen,
  yh = fh.userAgent,
  vh = sh.bind,
  bh = ah.forEach,
  Sh = ah.indexOf,
  _h = ah.map,
  xh = Array.isArray,
  wh = {},
  Eh = {
    trim: function (e) {
      return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    },
  },
  Th = {
    log: function () {
      if (i.DEBUG && !Eh.isUndefined(ph) && ph)
        try {
          ph.log.apply(ph, arguments);
        } catch (e) {
          Eh.each(arguments, function (e) {
            ph.log(e);
          });
        }
    },
    warn: function () {
      if (i.DEBUG && !Eh.isUndefined(ph) && ph) {
        var e = ["Mixpanel warning:"].concat(Eh.toArray(arguments));
        try {
          ph.warn.apply(ph, e);
        } catch (t) {
          Eh.each(e, function (e) {
            ph.warn(e);
          });
        }
      }
    },
    error: function () {
      if (i.DEBUG && !Eh.isUndefined(ph) && ph) {
        var e = ["Mixpanel error:"].concat(Eh.toArray(arguments));
        try {
          ph.error.apply(ph, e);
        } catch (t) {
          Eh.each(e, function (e) {
            ph.error(e);
          });
        }
      }
    },
    critical: function () {
      if (!Eh.isUndefined(ph) && ph) {
        var e = ["Mixpanel error:"].concat(Eh.toArray(arguments));
        try {
          ph.error.apply(ph, e);
        } catch (t) {
          Eh.each(e, function (e) {
            ph.error(e);
          });
        }
      }
    },
  },
  kh = function (e, t) {
    return function () {
      return (
        (arguments[0] = "[" + t + "] " + arguments[0]), e.apply(Th, arguments)
      );
    };
  },
  Ch = function (e) {
    return {
      log: kh(Th.log, e),
      warn: kh(Th.warn, e),
      error: kh(Th.error, e),
      critical: kh(Th.critical, e),
    };
  },
  Ih = function (e) {
    return function () {
      try {
        return e.apply(this, arguments);
      } catch (e) {
        Th.critical(
          "Implementation error. Please turn on debug and contact support@mixpanel.com.",
        ),
          i.DEBUG && Th.critical(e);
      }
    };
  },
  Ah = function (e) {
    var t = e.prototype;
    for (var n in t) "function" == typeof t[n] && (t[n] = Ih(t[n]));
  };
(Eh.bind = function (e, t) {
  var n, r;
  if (vh && e.bind === vh) return vh.apply(e, ch.call(arguments, 1));
  if (!Eh.isFunction(e)) throw new TypeError();
  return (
    (n = ch.call(arguments, 2)),
    (r = function () {
      if (!(this instanceof r)) return e.apply(t, n.concat(ch.call(arguments)));
      var o = {};
      o.prototype = e.prototype;
      var i = new o();
      o.prototype = null;
      var a = e.apply(i, n.concat(ch.call(arguments)));
      return Object(a) === a ? a : i;
    }),
    r
  );
}),
  (Eh.each = function (e, t, n) {
    if (null != e)
      if (bh && e.forEach === bh) e.forEach(t, n);
      else if (e.length === +e.length) {
        for (var r = 0, o = e.length; r < o; r++)
          if (r in e && t.call(n, e[r], r, e) === wh) return;
      } else
        for (var i in e)
          if (dh.call(e, i) && t.call(n, e[i], i, e) === wh) return;
  }),
  (Eh.extend = function (e) {
    return (
      Eh.each(ch.call(arguments, 1), function (t) {
        for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
      }),
      e
    );
  }),
  (Eh.isArray =
    xh ||
    function (e) {
      return "[object Array]" === uh.call(e);
    }),
  (Eh.isFunction = function (e) {
    return "function" == typeof e;
  }),
  (Eh.isArguments = function (e) {
    return !(!e || !dh.call(e, "callee"));
  }),
  (Eh.toArray = function (e) {
    return e
      ? e.toArray
        ? e.toArray()
        : Eh.isArray(e) || Eh.isArguments(e)
          ? ch.call(e)
          : Eh.values(e)
      : [];
  }),
  (Eh.map = function (e, t, n) {
    if (_h && e.map === _h) return e.map(t, n);
    var r = [];
    return (
      Eh.each(e, function (e) {
        r.push(t.call(n, e));
      }),
      r
    );
  }),
  (Eh.keys = function (e) {
    var t = [];
    return (
      null === e ||
        Eh.each(e, function (e, n) {
          t[t.length] = n;
        }),
      t
    );
  }),
  (Eh.values = function (e) {
    var t = [];
    return (
      null === e ||
        Eh.each(e, function (e) {
          t[t.length] = e;
        }),
      t
    );
  }),
  (Eh.include = function (e, t) {
    var n = !1;
    return null === e
      ? n
      : Sh && e.indexOf === Sh
        ? -1 != e.indexOf(t)
        : (Eh.each(e, function (e) {
            if (n || (n = e === t)) return wh;
          }),
          n);
  }),
  (Eh.includes = function (e, t) {
    return -1 !== e.indexOf(t);
  }),
  (Eh.inherit = function (e, t) {
    return (
      (e.prototype = new t()),
      (e.prototype.constructor = e),
      (e.superclass = t.prototype),
      e
    );
  }),
  (Eh.isObject = function (e) {
    return e === Object(e) && !Eh.isArray(e);
  }),
  (Eh.isEmptyObject = function (e) {
    if (Eh.isObject(e)) {
      for (var t in e) if (dh.call(e, t)) return !1;
      return !0;
    }
    return !1;
  }),
  (Eh.isUndefined = function (e) {
    return void 0 === e;
  }),
  (Eh.isString = function (e) {
    return "[object String]" == uh.call(e);
  }),
  (Eh.isDate = function (e) {
    return "[object Date]" == uh.call(e);
  }),
  (Eh.isNumber = function (e) {
    return "[object Number]" == uh.call(e);
  }),
  (Eh.isElement = function (e) {
    return !(!e || 1 !== e.nodeType);
  }),
  (Eh.encodeDates = function (e) {
    return (
      Eh.each(e, function (t, n) {
        Eh.isDate(t)
          ? (e[n] = Eh.formatDate(t))
          : Eh.isObject(t) && (e[n] = Eh.encodeDates(t));
      }),
      e
    );
  }),
  (Eh.timestamp = function () {
    return (
      (Date.now =
        Date.now ||
        function () {
          return +new Date();
        }),
      Date.now()
    );
  }),
  (Eh.formatDate = function (e) {
    function t(e) {
      return e < 10 ? "0" + e : e;
    }
    return (
      e.getUTCFullYear() +
      "-" +
      t(e.getUTCMonth() + 1) +
      "-" +
      t(e.getUTCDate()) +
      "T" +
      t(e.getUTCHours()) +
      ":" +
      t(e.getUTCMinutes()) +
      ":" +
      t(e.getUTCSeconds())
    );
  }),
  (Eh.strip_empty_properties = function (e) {
    var t = {};
    return (
      Eh.each(e, function (e, n) {
        Eh.isString(e) && e.length > 0 && (t[n] = e);
      }),
      t
    );
  }),
  (Eh.truncate = function (e, t) {
    var n;
    return (
      "string" == typeof e
        ? (n = e.slice(0, t))
        : Eh.isArray(e)
          ? ((n = []),
            Eh.each(e, function (e) {
              n.push(Eh.truncate(e, t));
            }))
          : Eh.isObject(e)
            ? ((n = {}),
              Eh.each(e, function (e, r) {
                n[r] = Eh.truncate(e, t);
              }))
            : (n = e),
      n
    );
  }),
  (Eh.JSONEncode = function (e) {
    var t = function (e) {
        var t =
            /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          n = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\",
          };
        return (
          (t.lastIndex = 0),
          t.test(e)
            ? '"' +
              e.replace(t, function (e) {
                var t = n[e];
                return "string" == typeof t
                  ? t
                  : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
              }) +
              '"'
            : '"' + e + '"'
        );
      },
      n = function (e, r) {
        var o = "",
          i = 0,
          a = "",
          s = "",
          l = 0,
          c = o,
          u = [],
          d = r[e];
        switch (
          (d &&
            "object" == typeof d &&
            "function" == typeof d.toJSON &&
            (d = d.toJSON(e)),
          typeof d)
        ) {
          case "string":
            return t(d);
          case "number":
            return isFinite(d) ? String(d) : "null";
          case "boolean":
          case "null":
            return String(d);
          case "object":
            if (!d) return "null";
            if (((o += "    "), (u = []), "[object Array]" === uh.apply(d))) {
              for (l = d.length, i = 0; i < l; i += 1) u[i] = n(i, d) || "null";
              return (
                (s =
                  0 === u.length
                    ? "[]"
                    : o
                      ? "[\n" + o + u.join(",\n" + o) + "\n" + c + "]"
                      : "[" + u.join(",") + "]"),
                (o = c),
                s
              );
            }
            for (a in d)
              dh.call(d, a) &&
                (s = n(a, d)) &&
                u.push(t(a) + (o ? ": " : ":") + s);
            return (
              (s =
                0 === u.length
                  ? "{}"
                  : o
                    ? "{" + u.join(",") + c + "}"
                    : "{" + u.join(",") + "}"),
              (o = c),
              s
            );
        }
      };
    return n("", { "": e });
  }),
  (Eh.JSONDecode =
    ((Xf = {
      '"': '"',
      "\\": "\\",
      "/": "/",
      b: "\b",
      f: "\f",
      n: "\n",
      r: "\r",
      t: "\t",
    }),
    (eh = function (e) {
      var t = new SyntaxError(e);
      throw ((t.at = Kf), (t.text = Qf), t);
    }),
    (th = function (e) {
      return (
        e && e !== Zf && eh("Expected '" + e + "' instead of '" + Zf + "'"),
        (Zf = Qf.charAt(Kf)),
        (Kf += 1),
        Zf
      );
    }),
    (nh = function () {
      var e,
        t = "";
      for ("-" === Zf && ((t = "-"), th("-")); Zf >= "0" && Zf <= "9"; )
        (t += Zf), th();
      if ("." === Zf) for (t += "."; th() && Zf >= "0" && Zf <= "9"; ) t += Zf;
      if ("e" === Zf || "E" === Zf)
        for (
          t += Zf, th(), ("-" !== Zf && "+" !== Zf) || ((t += Zf), th());
          Zf >= "0" && Zf <= "9";

        )
          (t += Zf), th();
      if (((e = +t), isFinite(e))) return e;
      eh("Bad number");
    }),
    (rh = function () {
      var e,
        t,
        n,
        r = "";
      if ('"' === Zf)
        for (; th(); ) {
          if ('"' === Zf) return th(), r;
          if ("\\" === Zf)
            if ((th(), "u" === Zf)) {
              for (
                n = 0, t = 0;
                t < 4 && ((e = parseInt(th(), 16)), isFinite(e));
                t += 1
              )
                n = 16 * n + e;
              r += String.fromCharCode(n);
            } else {
              if ("string" != typeof Xf[Zf]) break;
              r += Xf[Zf];
            }
          else r += Zf;
        }
      eh("Bad string");
    }),
    (oh = function () {
      for (; Zf && Zf <= " "; ) th();
    }),
    (Jf = function () {
      switch ((oh(), Zf)) {
        case "{":
          return (function () {
            var e,
              t = {};
            if ("{" === Zf) {
              if ((th("{"), oh(), "}" === Zf)) return th("}"), t;
              for (; Zf; ) {
                if (
                  ((e = rh()),
                  oh(),
                  th(":"),
                  Object.hasOwnProperty.call(t, e) &&
                    eh('Duplicate key "' + e + '"'),
                  (t[e] = Jf()),
                  oh(),
                  "}" === Zf)
                )
                  return th("}"), t;
                th(","), oh();
              }
            }
            eh("Bad object");
          })();
        case "[":
          return (function () {
            var e = [];
            if ("[" === Zf) {
              if ((th("["), oh(), "]" === Zf)) return th("]"), e;
              for (; Zf; ) {
                if ((e.push(Jf()), oh(), "]" === Zf)) return th("]"), e;
                th(","), oh();
              }
            }
            eh("Bad array");
          })();
        case '"':
          return rh();
        case "-":
          return nh();
        default:
          return Zf >= "0" && Zf <= "9"
            ? nh()
            : (function () {
                switch (Zf) {
                  case "t":
                    return th("t"), th("r"), th("u"), th("e"), !0;
                  case "f":
                    return th("f"), th("a"), th("l"), th("s"), th("e"), !1;
                  case "n":
                    return th("n"), th("u"), th("l"), th("l"), null;
                }
                eh('Unexpected "' + Zf + '"');
              })();
      }
    }),
    function (e) {
      var t;
      return (
        (Qf = e),
        (Kf = 0),
        (Zf = " "),
        (t = Jf()),
        oh(),
        Zf && eh("Syntax error"),
        t
      );
    })),
  (Eh.base64Encode = function (e) {
    var t,
      n,
      r,
      o,
      i,
      a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      s = 0,
      l = 0,
      c = "",
      u = [];
    if (!e) return e;
    e = Eh.utf8Encode(e);
    do {
      (t =
        ((i =
          (e.charCodeAt(s++) << 16) |
          (e.charCodeAt(s++) << 8) |
          e.charCodeAt(s++)) >>
          18) &
        63),
        (n = (i >> 12) & 63),
        (r = (i >> 6) & 63),
        (o = 63 & i),
        (u[l++] = a.charAt(t) + a.charAt(n) + a.charAt(r) + a.charAt(o));
    } while (s < e.length);
    switch (((c = u.join("")), e.length % 3)) {
      case 1:
        c = c.slice(0, -2) + "==";
        break;
      case 2:
        c = c.slice(0, -1) + "=";
    }
    return c;
  }),
  (Eh.utf8Encode = function (e) {
    var t,
      n,
      r,
      o,
      i = "";
    for (
      t = n = 0,
        r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length,
        o = 0;
      o < r;
      o++
    ) {
      var a = e.charCodeAt(o),
        s = null;
      a < 128
        ? n++
        : (s =
            a > 127 && a < 2048
              ? String.fromCharCode((a >> 6) | 192, (63 & a) | 128)
              : String.fromCharCode(
                  (a >> 12) | 224,
                  ((a >> 6) & 63) | 128,
                  (63 & a) | 128,
                )),
        null !== s &&
          (n > t && (i += e.substring(t, n)), (i += s), (t = n = o + 1));
    }
    return n > t && (i += e.substring(t, e.length)), i;
  }),
  (Eh.UUID = function () {
    try {
      return r.crypto.randomUUID();
    } catch (n) {
      for (var e = new Array(36), t = 0; t < 36; t++)
        e[t] = Math.floor(16 * Math.random());
      return (
        (e[14] = 4),
        (e[19] = e[19] &= -5),
        (e[19] = e[19] |= 8),
        (e[8] = e[13] = e[18] = e[23] = "-"),
        Eh.map(e, function (e) {
          return e.toString(16);
        }).join("")
      );
    }
  });
var Oh = [
  "ahrefsbot",
  "ahrefssiteaudit",
  "amazonbot",
  "baiduspider",
  "bingbot",
  "bingpreview",
  "chrome-lighthouse",
  "facebookexternal",
  "petalbot",
  "pinterest",
  "screaming frog",
  "yahoo! slurp",
  "yandex",
  "adsbot-google",
  "apis-google",
  "duplexweb-google",
  "feedfetcher-google",
  "google favicon",
  "google web preview",
  "google-read-aloud",
  "googlebot",
  "googleweblight",
  "mediapartners-google",
  "storebot-google",
];
(Eh.isBlockedUA = function (e) {
  var t;
  for (e = e.toLowerCase(), t = 0; t < Oh.length; t++)
    if (-1 !== e.indexOf(Oh[t])) return !0;
  return !1;
}),
  (Eh.HTTPBuildQuery = function (e, t) {
    var n,
      r,
      o = [];
    return (
      Eh.isUndefined(t) && (t = "&"),
      Eh.each(e, function (e, t) {
        (n = encodeURIComponent(e.toString())),
          (r = encodeURIComponent(t)),
          (o[o.length] = r + "=" + n);
      }),
      o.join(t)
    );
  }),
  (Eh.getQueryParam = function (e, t) {
    t = t.replace(/[[]/g, "\\[").replace(/[\]]/g, "\\]");
    var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
    if (null === n || (n && "string" != typeof n[1] && n[1].length)) return "";
    var r = n[1];
    try {
      r = decodeURIComponent(r);
    } catch (e) {
      Th.error("Skipping decoding for malformed query param: " + r);
    }
    return r.replace(/\+/g, " ");
  }),
  (Eh.cookie = {
    get: function (e) {
      for (
        var t = e + "=", n = hh.cookie.split(";"), r = 0;
        r < n.length;
        r++
      ) {
        for (var o = n[r]; " " == o.charAt(0); ) o = o.substring(1, o.length);
        if (0 === o.indexOf(t))
          return decodeURIComponent(o.substring(t.length, o.length));
      }
      return null;
    },
    parse: function (e) {
      var t;
      try {
        t = Eh.JSONDecode(Eh.cookie.get(e)) || {};
      } catch (e) {}
      return t;
    },
    set_seconds: function (e, t, n, r, o, i, a) {
      var s = "",
        l = "",
        c = "";
      if (a) s = "; domain=" + a;
      else if (r) {
        var u = qh(hh.location.hostname);
        s = u ? "; domain=." + u : "";
      }
      if (n) {
        var d = new Date();
        d.setTime(d.getTime() + 1e3 * n), (l = "; expires=" + d.toGMTString());
      }
      i && ((o = !0), (c = "; SameSite=None")),
        o && (c += "; secure"),
        (hh.cookie = e + "=" + encodeURIComponent(t) + l + "; path=/" + s + c);
    },
    set: function (e, t, n, r, o, i, a) {
      var s = "",
        l = "",
        c = "";
      if (a) s = "; domain=" + a;
      else if (r) {
        var u = qh(hh.location.hostname);
        s = u ? "; domain=." + u : "";
      }
      if (n) {
        var d = new Date();
        d.setTime(d.getTime() + 24 * n * 60 * 60 * 1e3),
          (l = "; expires=" + d.toGMTString());
      }
      i && ((o = !0), (c = "; SameSite=None")), o && (c += "; secure");
      var p = e + "=" + encodeURIComponent(t) + l + "; path=/" + s + c;
      return (hh.cookie = p), p;
    },
    remove: function (e, t, n) {
      Eh.cookie.set(e, "", -1, t, !1, !1, n);
    },
  });
var Rh = function (e) {
    var t = !0;
    try {
      var n = "__mplss_" + Bh(8);
      e.setItem(n, "xyz"), "xyz" !== e.getItem(n) && (t = !1), e.removeItem(n);
    } catch (e) {
      t = !1;
    }
    return t;
  },
  Mh = null,
  Ph = function (e, t) {
    return null === Mh || t ? (Mh = Rh(e)) : Mh;
  },
  Nh = null;
function Dh(e, t, n) {
  var r = function (e) {
    Th.error(t + " error: " + e);
  };
  return {
    is_supported: function (r) {
      var o = n(e, r);
      return o || Th.error(t + " unsupported"), o;
    },
    error: r,
    get: function (t) {
      try {
        return e.getItem(t);
      } catch (e) {
        r(e);
      }
      return null;
    },
    parse: function (t) {
      try {
        return Eh.JSONDecode(e.getItem(t)) || {};
      } catch (e) {}
      return null;
    },
    set: function (t, n) {
      try {
        e.setItem(t, n);
      } catch (e) {
        r(e);
      }
    },
    remove: function (t) {
      try {
        e.removeItem(t);
      } catch (e) {
        r(e);
      }
    },
  };
}
var jh = function () {
  try {
    return r.localStorage;
  } catch (e) {
    return null;
  }
};
(Eh.localStorage = Dh(jh(), "localStorage", Ph)),
  (Eh.sessionStorage = Dh(
    (function () {
      try {
        return r.sessionStorage;
      } catch (e) {
        return null;
      }
    })(),
    "sessionStorage",
    function (e, t) {
      return null === Nh || t ? (Nh = Rh(e)) : Nh;
    },
  )),
  (Eh.register_event = (function () {
    function e(t) {
      return (
        t &&
          ((t.preventDefault = e.preventDefault),
          (t.stopPropagation = e.stopPropagation)),
        t
      );
    }
    return (
      (e.preventDefault = function () {
        this.returnValue = !1;
      }),
      (e.stopPropagation = function () {
        this.cancelBubble = !0;
      }),
      function (t, n, o, i, a) {
        if (t)
          if (t.addEventListener && !i) t.addEventListener(n, o, !!a);
          else {
            var s = "on" + n,
              l = t[s];
            t[s] = (function (t, n, o) {
              return function (i) {
                if ((i = i || e(r.event))) {
                  var a,
                    s,
                    l = !0;
                  return (
                    Eh.isFunction(o) && (a = o(i)),
                    (s = n.call(t, i)),
                    (!1 !== a && !1 !== s) || (l = !1),
                    l
                  );
                }
              };
            })(t, o, l);
          }
        else Th.error("No valid element provided to register_event");
      }
    );
  })());
var Lh = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
Eh.dom_query = (function () {
  function e(e) {
    return e.all ? e.all : e.getElementsByTagName("*");
  }
  var t = /[\t\r\n]/g;
  function n(e, n) {
    var r = " " + n + " ";
    return (" " + e.className + " ").replace(t, " ").indexOf(r) >= 0;
  }
  function r(t) {
    if (!hh.getElementsByTagName) return [];
    var r,
      o,
      i,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      f = t.split(" "),
      h = [hh];
    for (l = 0; l < f.length; l++)
      if (
        (r = f[l].replace(/^\s+/, "").replace(/\s+$/, "")).indexOf("#") > -1
      ) {
        i = (o = r.split("#"))[0];
        var m = o[1],
          g = hh.getElementById(m);
        if (!g || (i && g.nodeName.toLowerCase() != i)) return [];
        h = [g];
      } else if (r.indexOf(".") > -1) {
        i = (o = r.split("."))[0];
        var y = o[1];
        for (i || (i = "*"), a = [], s = 0, c = 0; c < h.length; c++)
          for (
            d = "*" == i ? e(h[c]) : h[c].getElementsByTagName(i), u = 0;
            u < d.length;
            u++
          )
            a[s++] = d[u];
        for (h = [], p = 0, c = 0; c < a.length; c++)
          a[c].className &&
            Eh.isString(a[c].className) &&
            n(a[c], y) &&
            (h[p++] = a[c]);
      } else {
        var v = r.match(Lh);
        if (v) {
          i = v[1];
          var b,
            S = v[2],
            _ = v[3],
            x = v[4];
          for (i || (i = "*"), a = [], s = 0, c = 0; c < h.length; c++)
            for (
              d = "*" == i ? e(h[c]) : h[c].getElementsByTagName(i), u = 0;
              u < d.length;
              u++
            )
              a[s++] = d[u];
          switch (((h = []), (p = 0), _)) {
            case "=":
              b = function (e) {
                return e.getAttribute(S) == x;
              };
              break;
            case "~":
              b = function (e) {
                return e.getAttribute(S).match(new RegExp("\\b" + x + "\\b"));
              };
              break;
            case "|":
              b = function (e) {
                return e.getAttribute(S).match(new RegExp("^" + x + "-?"));
              };
              break;
            case "^":
              b = function (e) {
                return 0 === e.getAttribute(S).indexOf(x);
              };
              break;
            case "$":
              b = function (e) {
                return (
                  e.getAttribute(S).lastIndexOf(x) ==
                  e.getAttribute(S).length - x.length
                );
              };
              break;
            case "*":
              b = function (e) {
                return e.getAttribute(S).indexOf(x) > -1;
              };
              break;
            default:
              b = function (e) {
                return e.getAttribute(S);
              };
          }
          for (h = [], p = 0, c = 0; c < a.length; c++)
            b(a[c]) && (h[p++] = a[c]);
        } else {
          for (i = r, a = [], s = 0, c = 0; c < h.length; c++)
            for (d = h[c].getElementsByTagName(i), u = 0; u < d.length; u++)
              a[s++] = d[u];
          h = a;
        }
      }
    return h;
  }
  return function (e) {
    return Eh.isElement(e)
      ? [e]
      : Eh.isObject(e) && !Eh.isUndefined(e.length)
        ? e
        : r.call(this, e);
  };
})();
var Fh = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "utm_id",
    "utm_source_platform",
    "utm_campaign_id",
    "utm_creative_format",
    "utm_marketing_tactic",
  ],
  Uh = [
    "dclid",
    "fbclid",
    "gclid",
    "ko_click_id",
    "li_fat_id",
    "msclkid",
    "sccid",
    "ttclid",
    "twclid",
    "wbraid",
  ];
Eh.info = {
  campaignParams: function (e) {
    var t = "",
      n = {};
    return (
      Eh.each(Fh, function (r) {
        (t = Eh.getQueryParam(hh.URL, r)).length
          ? (n[r] = t)
          : void 0 !== e && (n[r] = e);
      }),
      n
    );
  },
  clickParams: function () {
    var e = "",
      t = {};
    return (
      Eh.each(Uh, function (n) {
        (e = Eh.getQueryParam(hh.URL, n)).length && (t[n] = e);
      }),
      t
    );
  },
  marketingParams: function () {
    return Eh.extend(Eh.info.campaignParams(), Eh.info.clickParams());
  },
  searchEngine: function (e) {
    return 0 === e.search("https?://(.*)google.([^/?]*)")
      ? "google"
      : 0 === e.search("https?://(.*)bing.com")
        ? "bing"
        : 0 === e.search("https?://(.*)yahoo.com")
          ? "yahoo"
          : 0 === e.search("https?://(.*)duckduckgo.com")
            ? "duckduckgo"
            : null;
  },
  searchInfo: function (e) {
    var t = Eh.info.searchEngine(e),
      n = "yahoo" != t ? "q" : "p",
      r = {};
    if (null !== t) {
      r.$search_engine = t;
      var o = Eh.getQueryParam(e, n);
      o.length && (r.mp_keyword = o);
    }
    return r;
  },
  browser: function (e, t, n) {
    return (
      (t = t || ""),
      n || Eh.includes(e, " OPR/")
        ? Eh.includes(e, "Mini")
          ? "Opera Mini"
          : "Opera"
        : /(BlackBerry|PlayBook|BB10)/i.test(e)
          ? "BlackBerry"
          : Eh.includes(e, "IEMobile") || Eh.includes(e, "WPDesktop")
            ? "Internet Explorer Mobile"
            : Eh.includes(e, "SamsungBrowser/")
              ? "Samsung Internet"
              : Eh.includes(e, "Edge") || Eh.includes(e, "Edg/")
                ? "Microsoft Edge"
                : Eh.includes(e, "FBIOS")
                  ? "Facebook Mobile"
                  : Eh.includes(e, "Whale/")
                    ? "Whale Browser"
                    : Eh.includes(e, "Chrome")
                      ? "Chrome"
                      : Eh.includes(e, "CriOS")
                        ? "Chrome iOS"
                        : Eh.includes(e, "UCWEB") || Eh.includes(e, "UCBrowser")
                          ? "UC Browser"
                          : Eh.includes(e, "FxiOS")
                            ? "Firefox iOS"
                            : Eh.includes(t, "Apple")
                              ? Eh.includes(e, "Mobile")
                                ? "Mobile Safari"
                                : "Safari"
                              : Eh.includes(e, "Android")
                                ? "Android Mobile"
                                : Eh.includes(e, "Konqueror")
                                  ? "Konqueror"
                                  : Eh.includes(e, "Firefox")
                                    ? "Firefox"
                                    : Eh.includes(e, "MSIE") ||
                                        Eh.includes(e, "Trident/")
                                      ? "Internet Explorer"
                                      : Eh.includes(e, "Gecko")
                                        ? "Mozilla"
                                        : ""
    );
  },
  browserVersion: function (e, t, n) {
    var r = {
      "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
      "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
      Chrome: /Chrome\/(\d+(\.\d+)?)/,
      "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
      "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
      Safari: /Version\/(\d+(\.\d+)?)/,
      "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
      Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
      Firefox: /Firefox\/(\d+(\.\d+)?)/,
      "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
      Konqueror: /Konqueror:(\d+(\.\d+)?)/,
      BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
      "Android Mobile": /android\s(\d+(\.\d+)?)/,
      "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
      "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
      Mozilla: /rv:(\d+(\.\d+)?)/,
      "Whale Browser": /Whale\/(\d+(\.\d+)?)/,
    }[Eh.info.browser(e, t, n)];
    if (void 0 === r) return null;
    var o = e.match(r);
    return o ? parseFloat(o[o.length - 2]) : null;
  },
  os: function () {
    var e = yh;
    return /Windows/i.test(e)
      ? /Phone/.test(e) || /WPDesktop/.test(e)
        ? "Windows Phone"
        : "Windows"
      : /(iPhone|iPad|iPod)/.test(e)
        ? "iOS"
        : /Android/.test(e)
          ? "Android"
          : /(BlackBerry|PlayBook|BB10)/i.test(e)
            ? "BlackBerry"
            : /Mac/i.test(e)
              ? "Mac OS X"
              : /Linux/.test(e)
                ? "Linux"
                : /CrOS/.test(e)
                  ? "Chrome OS"
                  : "";
  },
  device: function (e) {
    return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
      ? "Windows Phone"
      : /iPad/.test(e)
        ? "iPad"
        : /iPod/.test(e)
          ? "iPod Touch"
          : /iPhone/.test(e)
            ? "iPhone"
            : /(BlackBerry|PlayBook|BB10)/i.test(e)
              ? "BlackBerry"
              : /Android/.test(e)
                ? "Android"
                : "";
  },
  referringDomain: function (e) {
    var t = e.split("/");
    return t.length >= 3 ? t[2] : "";
  },
  currentUrl: function () {
    return r.location.href;
  },
  properties: function (e) {
    return (
      "object" != typeof e && (e = {}),
      Eh.extend(
        Eh.strip_empty_properties({
          $os: Eh.info.os(),
          $browser: Eh.info.browser(yh, fh.vendor, mh),
          $referrer: hh.referrer,
          $referring_domain: Eh.info.referringDomain(hh.referrer),
          $device: Eh.info.device(yh),
        }),
        {
          $current_url: Eh.info.currentUrl(),
          $browser_version: Eh.info.browserVersion(yh, fh.vendor, mh),
          $screen_height: gh.height,
          $screen_width: gh.width,
          mp_lib: "web",
          $lib_version: i.LIB_VERSION,
          $insert_id: Bh(),
          time: Eh.timestamp() / 1e3,
        },
        Eh.strip_empty_properties(e),
      )
    );
  },
  people_properties: function () {
    return Eh.extend(
      Eh.strip_empty_properties({
        $os: Eh.info.os(),
        $browser: Eh.info.browser(yh, fh.vendor, mh),
      }),
      { $browser_version: Eh.info.browserVersion(yh, fh.vendor, mh) },
    );
  },
  mpPageViewProperties: function () {
    return Eh.strip_empty_properties({
      current_page_title: hh.title,
      current_domain: r.location.hostname,
      current_url_path: r.location.pathname,
      current_url_protocol: r.location.protocol,
      current_url_search: r.location.search,
    });
  },
};
var Bh = function (e) {
    var t =
      Math.random().toString(36).substring(2, 10) +
      Math.random().toString(36).substring(2, 10);
    return e ? t.substring(0, e) : t;
  },
  zh = function () {
    return (
      "00-" +
      Eh.UUID().replace(/-/g, "") +
      "-" +
      Eh.UUID().replace(/-/g, "").substring(0, 16) +
      "-01"
    );
  },
  Hh = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
  Vh = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
  qh = function (e) {
    var t = Vh,
      n = e.split("."),
      r = n[n.length - 1];
    (r.length > 4 || "com" === r || "org" === r) && (t = Hh);
    var o = e.match(t);
    return o ? o[0] : "";
  },
  Gh = function () {},
  Wh = function (e, t) {
    for (var n = !1, r = 0; r < t.length; r++)
      if (e.match(t[r])) {
        n = !0;
        break;
      }
    return n;
  },
  $h = null,
  Yh = null;
"undefined" != typeof JSON && (($h = JSON.stringify), (Yh = JSON.parse)),
  ($h = $h || Eh.JSONEncode),
  (Yh = Yh || Eh.JSONDecode),
  (Eh.info = Eh.info),
  (Eh.info.browser = Eh.info.browser),
  (Eh.info.browserVersion = Eh.info.browserVersion),
  (Eh.info.device = Eh.info.device),
  (Eh.info.properties = Eh.info.properties),
  (Eh.isBlockedUA = Eh.isBlockedUA),
  (Eh.isEmptyObject = Eh.isEmptyObject),
  (Eh.isObject = Eh.isObject),
  (Eh.JSONDecode = Eh.JSONDecode),
  (Eh.JSONEncode = Eh.JSONEncode),
  (Eh.toArray = Eh.toArray),
  (Eh.NPO = Wf);
var Kh = function (e, t, n) {
  (this.dbName = e),
    (this.storeName = t),
    (this.version = n.version),
    (this.storeNamesInDb = n.storeNames),
    (this.dbPromise = null);
};
(Kh.prototype._openDb = function () {
  var e = this.dbName,
    t = this.version,
    n = this.storeNamesInDb;
  return new $f(function (o, i) {
    var a = r.indexedDB.open(e, t);
    (a.onerror = function () {
      i(a.error);
    }),
      (a.onsuccess = function () {
        o(a.result);
      }),
      (a.onupgradeneeded = function (e) {
        var t = e.target.result;
        n.forEach(function (e) {
          t.objectStoreNames.contains(e) || t.createObjectStore(e);
        });
      });
  });
}),
  (Kh.prototype.init = function () {
    return r.indexedDB
      ? (this.dbPromise || (this.dbPromise = this._openDb()),
        this.dbPromise.then(function (e) {
          return e instanceof r.IDBDatabase ? $f.resolve() : $f.reject(e);
        }))
      : $f.reject("indexedDB is not supported in this browser");
  }),
  (Kh.prototype.isInitialized = function () {
    return !!this.dbPromise;
  }),
  (Kh.prototype.makeTransaction = function (e, t) {
    var n = this.storeName,
      r = function (r) {
        return new $f(function (o, i) {
          var a = r.transaction(n, e);
          (a.oncomplete = function () {
            o(a);
          }),
            (a.onabort = a.onerror =
              function () {
                i(a.error);
              }),
            t(a.objectStore(n));
        });
      };
    return this.dbPromise.then(r).catch(
      function (e) {
        return e && "InvalidStateError" === e.name
          ? ((this.dbPromise = this._openDb()), this.dbPromise.then(r))
          : $f.reject(e);
      }.bind(this),
    );
  }),
  (Kh.prototype.setItem = function (e, t) {
    return this.makeTransaction("readwrite", function (n) {
      n.put(t, e);
    });
  }),
  (Kh.prototype.getItem = function (e) {
    var t;
    return this.makeTransaction("readonly", function (n) {
      t = n.get(e);
    }).then(function () {
      return t.result;
    });
  }),
  (Kh.prototype.removeItem = function (e) {
    return this.makeTransaction("readwrite", function (t) {
      t.delete(e);
    });
  }),
  (Kh.prototype.getAll = function () {
    var e;
    return this.makeTransaction("readonly", function (t) {
      e = t.getAll();
    }).then(function () {
      return e.result;
    });
  });
var Zh = "mixpanelBrowserDb",
  Qh = "mixpanelRecordingEvents",
  Jh = "mixpanelRecordingRegistry",
  Xh = { version: 1, storeNames: [Qh, Jh] };
function em(e, t) {
  dm(!0, e, t);
}
function tm(e, t) {
  dm(!1, e, t);
}
function nm(e, t) {
  return "1" === um(e, t);
}
function rm(e, t) {
  if (
    (function (e) {
      if (e && e.ignoreDnt) return !1;
      var t = (e && e.window) || r,
        n = t.navigator || {},
        o = !1;
      return (
        Eh.each([n.doNotTrack, n.msDoNotTrack, t.doNotTrack], function (e) {
          Eh.includes([!0, 1, "1", "yes"], e) && (o = !0);
        }),
        o
      );
    })(t)
  )
    return (
      Th.warn(
        'This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"',
      ),
      !0
    );
  var n = "0" === um(e, t);
  return (
    n &&
      Th.warn(
        "You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data.",
      ),
    n
  );
}
function om(e) {
  return pm(e, function (e) {
    return this.get_config(e);
  });
}
function im(e) {
  return pm(e, function (e) {
    return this._get_config(e);
  });
}
function am(e) {
  return pm(e, function (e) {
    return this._get_config(e);
  });
}
function sm(e, t) {
  lm((t = t || {})).remove(cm(e, t), !!t.crossSubdomainCookie, t.cookieDomain);
}
function lm(e) {
  return "localStorage" === (e = e || {}).persistenceType
    ? Eh.localStorage
    : Eh.cookie;
}
function cm(e, t) {
  return ((t = t || {}).persistencePrefix || "__mp_opt_in_out_") + e;
}
function um(e, t) {
  return lm(t).get(cm(e, t));
}
function dm(e, t, n) {
  Eh.isString(t) && t.length
    ? (lm((n = n || {})).set(
        cm(t, n),
        e ? 1 : 0,
        Eh.isNumber(n.cookieExpiration) ? n.cookieExpiration : null,
        !!n.crossSubdomainCookie,
        !!n.secureCookie,
        !!n.crossSiteCookie,
        n.cookieDomain,
      ),
      n.track &&
        e &&
        n.track(n.trackEventName || "$opt_in", n.trackProperties, {
          send_immediately: !0,
        }))
    : Th.error(
        "gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token",
      );
}
function pm(e, t) {
  return function () {
    var n = !1;
    try {
      var r = t.call(this, "token"),
        o = t.call(this, "ignore_dnt"),
        i = t.call(this, "opt_out_tracking_persistence_type"),
        a = t.call(this, "opt_out_tracking_cookie_prefix"),
        s = t.call(this, "window");
      r &&
        (n = rm(r, {
          ignoreDnt: o,
          persistenceType: i,
          persistencePrefix: a,
          window: s,
        }));
    } catch (e) {
      Th.error("Unexpected error when checking tracking opt-out status: " + e);
    }
    if (!n) return e.apply(this, arguments);
    var l = arguments[arguments.length - 1];
    "function" == typeof l && l(0);
  };
}
var fm = Ch("lock"),
  hm = function (e, t) {
    (t = t || {}),
      (this.storageKey = e),
      (this.storage = t.storage || jh()),
      (this.pollIntervalMS = t.pollIntervalMS || 100),
      (this.timeoutMS = t.timeoutMS || 2e3),
      (this.promiseImpl = t.promiseImpl || $f);
  };
hm.prototype.withLock = function (e, t) {
  return new (0, this.promiseImpl)(
    Eh.bind(function (n, r) {
      var o = t || new Date().getTime() + "|" + Math.random(),
        i = new Date().getTime(),
        a = this.storageKey,
        s = this.pollIntervalMS,
        l = this.timeoutMS,
        c = this.storage,
        u = a + ":X",
        d = a + ":Y",
        p = a + ":Z",
        f = function (e) {
          if (new Date().getTime() - i > l)
            return (
              fm.error(
                "Timeout waiting for mutex on " +
                  a +
                  "; clearing lock. [" +
                  o +
                  "]",
              ),
              c.removeItem(p),
              c.removeItem(d),
              void g()
            );
          setTimeout(
            function () {
              try {
                e();
              } catch (e) {
                r(e);
              }
            },
            s * (Math.random() + 0.1),
          );
        },
        h = function (e, t) {
          e()
            ? t()
            : f(function () {
                h(e, t);
              });
        },
        m = function () {
          var e = c.getItem(d);
          return !(
            (e && e !== o) ||
            (c.setItem(d, o),
            c.getItem(d) !== o &&
              (Ph(c, !0) ||
                r(
                  new Error(
                    "localStorage support dropped while acquiring lock",
                  ),
                ),
              1))
          );
        },
        g = function () {
          c.setItem(u, o),
            h(m, function () {
              c.getItem(u) !== o
                ? f(function () {
                    c.getItem(d) === o
                      ? h(function () {
                          return !c.getItem(p);
                        }, y)
                      : g();
                  })
                : y();
            });
        },
        y = function () {
          c.setItem(p, "1");
          var t = function () {
            c.removeItem(p),
              c.getItem(d) === o && c.removeItem(d),
              c.getItem(u) === o && c.removeItem(u);
          };
          e()
            .then(function (e) {
              t(), n(e);
            })
            .catch(function (e) {
              t(), r(e);
            });
        };
      try {
        if (!Ph(c, !0)) throw new Error("localStorage support check failed");
        g();
      } catch (e) {
        r(e);
      }
    }, this),
  );
};
var mm = function (e) {
  this.storage = e || jh();
};
(mm.prototype.init = function () {
  return this.storage
    ? $f.resolve()
    : $f.reject(new Error("localStorage is not available"));
}),
  (mm.prototype.isInitialized = function () {
    return !0;
  }),
  (mm.prototype.setItem = function (e, t) {
    return new $f(
      Eh.bind(function (n, r) {
        try {
          this.storage.setItem(e, $h(t));
        } catch (e) {
          r(e);
        }
        n();
      }, this),
    );
  }),
  (mm.prototype.getItem = function (e) {
    return new $f(
      Eh.bind(function (t, n) {
        var r;
        try {
          r = Yh(this.storage.getItem(e));
        } catch (e) {
          n(e);
        }
        t(r);
      }, this),
    );
  }),
  (mm.prototype.removeItem = function (e) {
    return new $f(
      Eh.bind(function (t, n) {
        try {
          this.storage.removeItem(e);
        } catch (e) {
          n(e);
        }
        t();
      }, this),
    );
  });
var gm = Ch("batch"),
  ym = function (e, t) {
    var n, r, o, i;
    (t = t || {}),
      (this.storageKey = e),
      (this.usePersistence = t.usePersistence),
      this.usePersistence &&
        ((this.queueStorage = t.queueStorage || new mm()),
        (this.lock = new hm(e, {
          storage: t.sharedLockStorage,
          timeoutMS: t.sharedLockTimeoutMS,
        }))),
      (this.reportError = t.errorReporter || Eh.bind(gm.error, gm)),
      (this.pid = t.pid || null),
      (this.memQueue = []),
      (this.initialized = !1),
      t.enqueueThrottleMs
        ? (this.enqueuePersisted =
            ((n = Eh.bind(this._enqueuePersisted, this)),
            (r = t.enqueueThrottleMs),
            (o = null),
            (i = []),
            function (e) {
              var t = this;
              return (
                i.push(e),
                o ||
                  (o = new $f(function (e) {
                    setTimeout(function () {
                      var r = n.apply(t, [i]);
                      (o = null), (i = []), e(r);
                    }, r);
                  })),
                o
              );
            }))
        : (this.enqueuePersisted = Eh.bind(function (e) {
            return this._enqueuePersisted([e]);
          }, this));
  };
(ym.prototype.ensureInit = function () {
  return this.initialized || !this.usePersistence
    ? $f.resolve()
    : this.queueStorage
        .init()
        .then(
          Eh.bind(function () {
            this.initialized = !0;
          }, this),
        )
        .catch(
          Eh.bind(function (e) {
            this.reportError(
              "Error initializing queue persistence. Disabling persistence",
              e,
            ),
              (this.initialized = !0),
              (this.usePersistence = !1);
          }, this),
        );
}),
  (ym.prototype.enqueue = function (e, t) {
    var n = {
      id: Bh(),
      flushAfter: new Date().getTime() + 2 * t,
      payload: e,
    };
    return this.usePersistence
      ? this.enqueuePersisted(n)
      : (this.memQueue.push(n), $f.resolve(!0));
  }),
  (ym.prototype._enqueuePersisted = function (e) {
    var t = Eh.bind(function () {
      return this.ensureInit()
        .then(
          Eh.bind(function () {
            return this.readFromStorage();
          }, this),
        )
        .then(
          Eh.bind(function (t) {
            return this.saveToStorage(t.concat(e));
          }, this),
        )
        .then(
          Eh.bind(function (t) {
            return t && (this.memQueue = this.memQueue.concat(e)), t;
          }, this),
        )
        .catch(
          Eh.bind(function (t) {
            return this.reportError("Error enqueueing items", t, e), !1;
          }, this),
        );
    }, this);
    return this.lock.withLock(t, this.pid).catch(
      Eh.bind(function (e) {
        return this.reportError("Error acquiring storage lock", e), !1;
      }, this),
    );
  }),
  (ym.prototype.fillBatch = function (e) {
    var t = this.memQueue.slice(0, e);
    return this.usePersistence && t.length < e
      ? this.ensureInit()
          .then(
            Eh.bind(function () {
              return this.readFromStorage();
            }, this),
          )
          .then(
            Eh.bind(function (n) {
              if (n.length) {
                var r = {};
                Eh.each(t, function (e) {
                  r[e.id] = !0;
                });
                for (var o = 0; o < n.length; o++) {
                  var i = n[o];
                  if (
                    new Date().getTime() > i.flushAfter &&
                    !r[i.id] &&
                    ((i.orphaned = !0), t.push(i), t.length >= e)
                  )
                    break;
                }
              }
              return t;
            }, this),
          )
      : $f.resolve(t);
  });
var vm = function (e, t) {
  var n = [];
  return (
    Eh.each(e, function (e) {
      e.id && !t[e.id] && n.push(e);
    }),
    n
  );
};
ym.prototype.removeItemsByID = function (e) {
  var t = {};
  if (
    (Eh.each(e, function (e) {
      t[e] = !0;
    }),
    (this.memQueue = vm(this.memQueue, t)),
    this.usePersistence)
  ) {
    var n = Eh.bind(function () {
      return this.ensureInit()
        .then(
          Eh.bind(function () {
            return this.readFromStorage();
          }, this),
        )
        .then(
          Eh.bind(function (e) {
            return (e = vm(e, t)), this.saveToStorage(e);
          }, this),
        )
        .then(
          Eh.bind(function () {
            return this.readFromStorage();
          }, this),
        )
        .then(
          Eh.bind(function (e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              if (r.id && t[r.id])
                throw new Error("Item not removed from storage");
            }
            return !0;
          }, this),
        )
        .catch(
          Eh.bind(function (t) {
            return this.reportError("Error removing items", t, e), !1;
          }, this),
        );
    }, this);
    return this.lock.withLock(n, this.pid).catch(
      Eh.bind(function (e) {
        return (
          this.reportError("Error acquiring storage lock", e),
          !Ph(this.lock.storage, !0) &&
            n()
              .then(
                Eh.bind(function (e) {
                  return (
                    e ||
                    this.queueStorage
                      .removeItem(this.storageKey)
                      .then(function () {
                        return e;
                      })
                  );
                }, this),
              )
              .catch(
                Eh.bind(function (e) {
                  return this.reportError("Error clearing queue", e), !1;
                }, this),
              )
        );
      }, this),
    );
  }
  return $f.resolve(!0);
};
var bm = function (e, t) {
  var n = [];
  return (
    Eh.each(e, function (e) {
      var r = e.id;
      if (r in t) {
        var o = t[r];
        null !== o && ((e.payload = o), n.push(e));
      } else n.push(e);
    }),
    n
  );
};
(ym.prototype.updatePayloads = function (e) {
  return (
    (this.memQueue = bm(this.memQueue, e)),
    this.usePersistence
      ? this.lock
          .withLock(
            Eh.bind(function () {
              return this.ensureInit()
                .then(
                  Eh.bind(function () {
                    return this.readFromStorage();
                  }, this),
                )
                .then(
                  Eh.bind(function (t) {
                    return (t = bm(t, e)), this.saveToStorage(t);
                  }, this),
                )
                .catch(
                  Eh.bind(function (t) {
                    return this.reportError("Error updating items", e, t), !1;
                  }, this),
                );
            }, this),
            this.pid,
          )
          .catch(
            Eh.bind(function (e) {
              return this.reportError("Error acquiring storage lock", e), !1;
            }, this),
          )
      : $f.resolve(!0)
  );
}),
  (ym.prototype.readFromStorage = function () {
    return this.ensureInit()
      .then(
        Eh.bind(function () {
          return this.queueStorage.getItem(this.storageKey);
        }, this),
      )
      .then(
        Eh.bind(function (e) {
          return (
            e &&
              (Eh.isArray(e) ||
                (this.reportError("Invalid storage entry:", e), (e = null))),
            e || []
          );
        }, this),
      )
      .catch(
        Eh.bind(function (e) {
          return this.reportError("Error retrieving queue", e), [];
        }, this),
      );
  }),
  (ym.prototype.saveToStorage = function (e) {
    return this.ensureInit()
      .then(
        Eh.bind(function () {
          return this.queueStorage.setItem(this.storageKey, e);
        }, this),
      )
      .then(function () {
        return !0;
      })
      .catch(
        Eh.bind(function (e) {
          return this.reportError("Error saving queue", e), !1;
        }, this),
      );
  }),
  (ym.prototype.clear = function () {
    return (
      (this.memQueue = []),
      this.usePersistence
        ? this.ensureInit().then(
            Eh.bind(function () {
              return this.queueStorage.removeItem(this.storageKey);
            }, this),
          )
        : $f.resolve()
    );
  });
var Sm = Ch("batch"),
  _m = function (e, t) {
    (this.errorReporter = t.errorReporter),
      (this.queue = new ym(e, {
        errorReporter: Eh.bind(this.reportError, this),
        queueStorage: t.queueStorage,
        sharedLockStorage: t.sharedLockStorage,
        sharedLockTimeoutMS: t.sharedLockTimeoutMS,
        usePersistence: t.usePersistence,
        enqueueThrottleMs: t.enqueueThrottleMs,
      })),
      (this.libConfig = t.libConfig),
      (this.sendRequest = t.sendRequestFunc),
      (this.beforeSendHook = t.beforeSendHook),
      (this.stopAllBatching = t.stopAllBatchingFunc),
      (this.batchSize = this.libConfig.batch_size),
      (this.flushInterval = this.libConfig.batch_flush_interval_ms),
      (this.stopped = !this.libConfig.batch_autostart),
      (this.consecutiveRemovalFailures = 0),
      (this.itemIdsSentSuccessfully = {}),
      (this.flushOnlyOnInterval = t.flushOnlyOnInterval || !1),
      (this._flushPromise = null);
  };
(_m.prototype.enqueue = function (e) {
  return this.queue.enqueue(e, this.flushInterval);
}),
  (_m.prototype.start = function () {
    return (
      (this.stopped = !1), (this.consecutiveRemovalFailures = 0), this.flush()
    );
  }),
  (_m.prototype.stop = function () {
    (this.stopped = !0),
      this.timeoutID && (clearTimeout(this.timeoutID), (this.timeoutID = null));
  }),
  (_m.prototype.clear = function () {
    return this.queue.clear();
  }),
  (_m.prototype.resetBatchSize = function () {
    this.batchSize = this.libConfig.batch_size;
  }),
  (_m.prototype.resetFlush = function () {
    this.scheduleFlush(this.libConfig.batch_flush_interval_ms);
  }),
  (_m.prototype.scheduleFlush = function (e) {
    (this.flushInterval = e),
      this.stopped ||
        (this.timeoutID = setTimeout(
          Eh.bind(function () {
            this.stopped || (this._flushPromise = this.flush());
          }, this),
          this.flushInterval,
        ));
  }),
  (_m.prototype.sendRequestPromise = function (e, t) {
    return new $f(
      Eh.bind(function (n) {
        this.sendRequest(e, t, n);
      }, this),
    );
  }),
  (_m.prototype.flush = function (e) {
    if (this.requestInProgress)
      return Sm.log("Flush: Request already in progress"), $f.resolve();
    (this.requestInProgress = !0), (e = e || {});
    var t = this.libConfig.batch_request_timeout_ms,
      n = new Date().getTime(),
      o = this.batchSize;
    return this.queue
      .fillBatch(o)
      .then(
        Eh.bind(function (a) {
          var s = a.length === o,
            l = [],
            c = {};
          if (
            (Eh.each(
              a,
              function (e) {
                var t = e.payload;
                if (
                  (this.beforeSendHook &&
                    !e.orphaned &&
                    (t = this.beforeSendHook(t)),
                  t)
                ) {
                  t.event &&
                    t.properties &&
                    (t.properties = Eh.extend({}, t.properties, {
                      mp_sent_by_lib_version: i.LIB_VERSION,
                    }));
                  var n = !0,
                    r = e.id;
                  r
                    ? (this.itemIdsSentSuccessfully[r] || 0) > 5 &&
                      (this.reportError(
                        "[dupe] item ID sent too many times, not sending",
                        {
                          item: e,
                          batchSize: a.length,
                          timesSent: this.itemIdsSentSuccessfully[r],
                        },
                      ),
                      (n = !1))
                    : this.reportError("[dupe] found item with no ID", {
                        item: e,
                      }),
                    n && l.push(t);
                }
                c[e.id] = t;
              },
              this,
            ),
            l.length < 1)
          )
            return (
              (this.requestInProgress = !1), this.resetFlush(), $f.resolve()
            );
          var u = Eh.bind(function () {
              return this.queue
                .removeItemsByID(
                  Eh.map(a, function (e) {
                    return e.id;
                  }),
                )
                .then(
                  Eh.bind(function (e) {
                    return (
                      Eh.each(
                        a,
                        Eh.bind(function (e) {
                          var t = e.id;
                          t
                            ? ((this.itemIdsSentSuccessfully[t] =
                                this.itemIdsSentSuccessfully[t] || 0),
                              this.itemIdsSentSuccessfully[t]++,
                              this.itemIdsSentSuccessfully[t] > 5 &&
                                this.reportError(
                                  "[dupe] item ID sent too many times",
                                  {
                                    item: e,
                                    batchSize: a.length,
                                    timesSent: this.itemIdsSentSuccessfully[t],
                                  },
                                ))
                            : this.reportError(
                                "[dupe] found item with no ID while removing",
                                { item: e },
                              );
                        }, this),
                      ),
                      e
                        ? ((this.consecutiveRemovalFailures = 0),
                          this.flushOnlyOnInterval && !s
                            ? (this.resetFlush(), $f.resolve())
                            : this.flush())
                        : (++this.consecutiveRemovalFailures > 5
                            ? (this.reportError(
                                "Too many queue failures; disabling batching system.",
                              ),
                              this.stopAllBatching())
                            : this.resetFlush(),
                          $f.resolve())
                    );
                  }, this),
                );
            }, this),
            d = Eh.bind(function (i) {
              this.requestInProgress = !1;
              try {
                if (e.unloading) return this.queue.updatePayloads(c);
                if (
                  Eh.isObject(i) &&
                  "timeout" === i.error &&
                  new Date().getTime() - n >= t
                )
                  return (
                    this.reportError("Network timeout; retrying"), this.flush()
                  );
                if (
                  Eh.isObject(i) &&
                  (i.httpStatusCode >= 500 ||
                    429 === i.httpStatusCode ||
                    (i.httpStatusCode <= 0 &&
                      ((d = r.navigator.onLine), !Eh.isUndefined(d) && !d)) ||
                    "timeout" === i.error)
                ) {
                  var s = 2 * this.flushInterval;
                  return (
                    i.retryAfter && (s = 1e3 * parseInt(i.retryAfter, 10) || s),
                    (s = Math.min(6e5, s)),
                    this.reportError("Error; retry in " + s + " ms"),
                    this.scheduleFlush(s),
                    $f.resolve()
                  );
                }
                if (Eh.isObject(i) && 413 === i.httpStatusCode) {
                  if (a.length > 1) {
                    var l = Math.max(1, Math.floor(o / 2));
                    return (
                      (this.batchSize = Math.min(
                        this.batchSize,
                        l,
                        a.length - 1,
                      )),
                      this.reportError(
                        "413 response; reducing batch size to " +
                          this.batchSize,
                      ),
                      this.resetFlush(),
                      $f.resolve()
                    );
                  }
                  return (
                    this.reportError(
                      "Single-event request too large; dropping",
                      a,
                    ),
                    this.resetBatchSize(),
                    u()
                  );
                }
                return u();
              } catch (e) {
                this.reportError("Error handling API response", e),
                  this.resetFlush();
              }
              var d;
            }, this),
            p = {
              method: "POST",
              verbose: !0,
              ignore_json_errors: !0,
              timeout_ms: t,
            };
          return (
            e.unloading && (p.transport = "sendBeacon"),
            Sm.log("MIXPANEL REQUEST:", l),
            this.sendRequestPromise(l, p).then(d)
          );
        }, this),
      )
      .catch(
        Eh.bind(function (e) {
          this.reportError("Error flushing request queue", e),
            this.resetFlush();
        }, this),
      );
  }),
  (_m.prototype.reportError = function (e, t) {
    if ((Sm.error.apply(Sm.error, arguments), this.errorReporter))
      try {
        t instanceof Error || (t = new Error(e)), this.errorReporter(e, t);
      } catch (t) {
        Sm.error(t);
      }
  });
var xm = function (e) {
    var t = Date.now();
    return !e || t > e.maxExpires || t > e.idleExpires;
  },
  wm = function (e, t) {
    if (!Eh.isArray(e))
      return (
        e &&
          t.critical(
            "record_allowed_iframe_origins must be an array of origin strings, cross-origin recording will be disabled.",
          ),
        []
      );
    for (var n = [], r = 0; r < e.length; r++)
      try {
        var o = new URL(e[r]).origin;
        if ("null" === o) {
          t.critical(e[r] + " has an opaque origin. Skipping this entry.");
          continue;
        }
        n.push(o);
      } catch (n) {
        t.critical(e[r] + " is not a valid origin URL. Skipping this entry.");
      }
    return n;
  },
  Em = "change",
  Tm = "click",
  km = "hashchange",
  Cm = "load",
  Im = "mp_locationchange",
  Am = "popstate",
  Om = "scrollend",
  Rm = "scroll",
  Mm = "submit",
  Pm = "visibilitychange",
  Nm = [
    "clientX",
    "clientY",
    "offsetX",
    "offsetY",
    "pageX",
    "pageY",
    "screenX",
    "screenY",
    "x",
    "y",
  ],
  Dm = ["mp-include"],
  jm = ["mp-no-track"],
  Lm = jm.concat(["mp-sensitive"]),
  Fm = [
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "href",
    "name",
    "role",
    "title",
    "type",
  ],
  Um = {
    button: !0,
    checkbox: !0,
    combobox: !0,
    grid: !0,
    link: !0,
    listbox: !0,
    menu: !0,
    menubar: !0,
    menuitem: !0,
    menuitemcheckbox: !0,
    menuitemradio: !0,
    navigation: !0,
    option: !0,
    radio: !0,
    radiogroup: !0,
    searchbox: !0,
    slider: !0,
    spinbutton: !0,
    switch: !0,
    tab: !0,
    tablist: !0,
    textbox: !0,
    tree: !0,
    treegrid: !0,
    treeitem: !0,
  },
  Bm = {
    base: !0,
    head: !0,
    html: !0,
    link: !0,
    meta: !0,
    script: !0,
    style: !0,
    title: !0,
    br: !0,
    hr: !0,
    wbr: !0,
    noscript: !0,
    picture: !0,
    source: !0,
    template: !0,
    track: !0,
  },
  zm = {
    article: !0,
    div: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    p: !0,
    section: !0,
    span: !0,
  },
  Hm = [
    "onclick",
    "onmousedown",
    "onmouseup",
    "onpointerdown",
    "onpointerup",
    "ontouchend",
    "ontouchstart",
  ],
  Vm = Ch("autocapture");
function qm(e) {
  for (var t = {}, n = Gm(e).split(" "), r = 0; r < n.length; r++) {
    var o = n[r];
    o && (t[o] = !0);
  }
  return t;
}
function Gm(e) {
  switch (typeof e.className) {
    case "string":
      return e.className;
    case "object":
      return e.className.baseVal || e.getAttribute("class") || "";
    default:
      return "";
  }
}
function Wm(e) {
  if (e.previousElementSibling) return e.previousElementSibling;
  do {
    e = e.previousSibling;
  } while (e && !Qm(e));
  return e;
}
function $m(e, t, n, r, o, i) {
  var a = {
      $classes: Gm(e).split(" "),
      $tag_name: e.tagName.toLowerCase(),
    },
    s = e.id;
  s && (a.$id = s),
    tg(e, t, o, i) &&
      Eh.each(Fm.concat(r), function (t) {
        if (e.hasAttribute(t) && !n[t]) {
          var r = e.getAttribute(t);
          ng(r) && (a["$attr-" + t] = r);
        }
      });
  for (var l = 1, c = 1, u = e; (u = Wm(u)); )
    l++, u.tagName === e.tagName && c++;
  return (a.$nth_child = l), (a.$nth_of_type = c), a;
}
function Ym(e, t, n, r) {
  var o = "";
  return (
    tg(e, t, n, r) &&
      e.childNodes &&
      e.childNodes.length &&
      Eh.each(e.childNodes, function (e) {
        Xm(e) &&
          e.textContent &&
          (o += Eh.trim(e.textContent)
            .split(/(\s+)/)
            .filter(ng)
            .join("")
            .replace(/[\r\n]/g, " ")
            .replace(/[ ]+/g, " ")
            .substring(0, 255));
      }),
    Eh.trim(o)
  );
}
function Km(e, t, n, r) {
  if (n)
    try {
      if (!n(e, t)) return !1;
    } catch (e) {
      return (
        Vm.critical("Error while checking element in allowElementCallback", e),
        !1
      );
    }
  if (!r.length) return !0;
  for (var o = 0; o < r.length; o++) {
    var i = r[o];
    try {
      if (e.matches(i)) return !0;
    } catch (e) {
      Vm.critical("Error while checking selector: " + i, e);
    }
  }
  return !1;
}
function Zm(e, t, n, r) {
  var o;
  if (n)
    try {
      if (n(e, t)) return !0;
    } catch (e) {
      return (
        Vm.critical("Error while checking element in blockElementCallback", e),
        !0
      );
    }
  if (r && r.length)
    for (o = 0; o < r.length; o++) {
      var i = r[o];
      try {
        if (e.matches(i)) return !0;
      } catch (e) {
        Vm.critical("Error while checking selector: " + i, e);
      }
    }
  var a = qm(e);
  for (o = 0; o < jm.length; o++) if (a[jm[o]]) return !0;
  return !1;
}
function Qm(e) {
  return e && 1 === e.nodeType;
}
function Jm(e, t) {
  return e && e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}
function Xm(e) {
  return e && 3 === e.nodeType;
}
function eg(e) {
  var t = (e.name || e.id || "").toString().toLowerCase();
  return !(
    "string" != typeof t ||
    !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
      t.replace(/[^a-zA-Z0-9]/g, ""),
    )
  );
}
function tg(e, t, n, r) {
  var o;
  if (!Km(e, t, n, r)) return !1;
  for (var i = e; i.parentNode && !Jm(i, "body"); i = i.parentNode) {
    var a = qm(i);
    for (o = 0; o < Lm.length; o++) if (a[Lm[o]]) return !1;
  }
  var s = qm(e);
  for (o = 0; o < Dm.length; o++) if (s[Dm[o]]) return !0;
  if (
    Jm(e, "input") ||
    Jm(e, "select") ||
    Jm(e, "textarea") ||
    "true" === e.getAttribute("contenteditable")
  )
    return !1;
  var l = e.type || "";
  if ("string" == typeof l)
    switch (l.toLowerCase()) {
      case "hidden":
      case "password":
        return !1;
    }
  return !eg(e);
}
function ng(e) {
  if (null === e || Eh.isUndefined(e)) return !1;
  if ("string" == typeof e) {
    if (
      ((e = Eh.trim(e)),
      /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
        (e || "").replace(/[- ]/g, ""),
      ))
    )
      return !1;
    if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e)) return !1;
  }
  return !0;
}
function rg(e) {
  var t = "onscrollend" in r,
    n = Ih(e),
    o = Om;
  if (!t) {
    var i = null;
    (n = Ih(function () {
      clearTimeout(i), (i = setTimeout(e, 100));
    })),
      (o = Rm);
  }
  return { listener: n, eventType: o };
}
function og(e) {
  var t = e.tagName.toLowerCase();
  return !!(
    "button" === t ||
    "input" === t ||
    "select" === t ||
    "textarea" === t ||
    "details" === t ||
    "dialog" === t ||
    e.isContentEditable ||
    e.onclick ||
    e.onmousedown ||
    e.onmouseup ||
    e.ontouchstart ||
    e.ontouchend ||
    (function (e) {
      for (var t = 0; t < Hm.length; t++) if (e.hasAttribute(Hm[t])) return !0;
      return !1;
    })(e) ||
    (function (e) {
      var t = e.getAttribute("role");
      if (!t) return !1;
      var n = t.trim().split(/\s+/)[0].toLowerCase();
      return Um[n];
    })(e) ||
    ("a" === t && e.hasAttribute("href")) ||
    e.hasAttribute("tabindex")
  );
}
function ig(e) {
  if (!e || !e.tagName) return !0;
  var t = e.tagName.toLowerCase();
  if (Bm[t]) return !0;
  if (og(e)) return !1;
  for (var n = e.parentElement, r = 0; n && r < 5; ) {
    if (og(n)) return !1;
    if (n.getRootNode && n.getRootNode() !== hh) {
      var o = n.getRootNode();
      if (o.host && og(o.host)) return !1;
    }
    (n = n.parentElement), r++;
  }
  return !!zm[t];
}
function ag(e) {
  return "composedPath" in e ? e.composedPath() : [];
}
function sg(e) {
  var t = ag(e);
  return t && t.length > 0 ? t[0] : e.target || e.srcElement;
}
var lg = ".mp-mask, .fs-mask, .amp-mask, .rr-mask, .ph-mask",
  cg = ["password", "email", "tel", "hidden"];
function ug(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function dg(e, t) {
  return !!t && !!e.closest(t);
}
function pg(e, t) {
  var n = (e.getAttribute("type") || "").toLowerCase();
  if (-1 !== cg.indexOf(n)) return !0;
  var r = (e.getAttribute("autocomplete") || "").toLowerCase();
  return !(
    (!r || "" === r || "off" === r) &&
    !e.hasAttribute("data-rr-is-password") &&
    !eg(e) &&
    (t.input.maskAll
      ? dg(e, t.input.unmaskingSelector)
      : !dg(e, t.input.maskingSelector) && !dg(e, lg))
  );
}
function fg(e, t) {
  return !(
    !e ||
    ((!t.text._legacyClassRegex || !Lc(e, t.text._legacyClassRegex)) &&
      (t.text.maskAll
        ? dg(e, t.text.unmaskingSelector)
        : !dg(e, t.text.maskingSelector) && !dg(e, lg)))
  );
}
var hg = Ch("network-plugin");
function mg(e) {
  return Math.round(Date.now() - e.performance.now());
}
var gg = {
  initiatorTypes: [
    "audio",
    "beacon",
    "body",
    "css",
    "early-hint",
    "embed",
    "fetch",
    "frame",
    "iframe",
    "icon",
    "image",
    "img",
    "input",
    "link",
    "navigation",
    "object",
    "ping",
    "script",
    "track",
    "video",
    "xmlhttprequest",
  ],
  ignoreRequestFn: function () {
    return !1;
  },
  recordHeaders: { request: [], response: [] },
  recordBodyUrls: { request: [], response: [] },
  recordInitialRequests: !1,
};
function yg(e) {
  return "resource" === e.entryType;
}
function vg(e, t, n) {
  if (!(t in e) || "function" != typeof e[t]) return function () {};
  var r = e[t],
    o = n(r);
  return (
    (e[t] = o),
    function () {
      e[t] = r;
    }
  );
}
var bg = 1048576;
function Sg(e) {
  return e && "string" == typeof e && e.length > bg
    ? (hg.error(
        "Body truncated from " + e.length + " to " + bg + " characters",
      ),
      e.substring(0, bg) + "... [truncated]")
    : e;
}
function _g(e, t, n) {
  return !(!t[e] || 0 === t[e].length) && t[e].includes(n.toLowerCase());
}
function xg(e, t, n) {
  return !(!t[e] || 0 === t[e].length) && Wh(n, t[e]);
}
function wg(e) {
  if (null == e) return null;
  var t;
  if ("string" == typeof e) t = e;
  else if (e instanceof Document) t = e.textContent;
  else if (e instanceof FormData) t = Eh.HTTPBuildQuery(e);
  else {
    if (!Eh.isObject(e)) return "Cannot read body of type " + typeof e;
    try {
      t = JSON.stringify(e);
    } catch (e) {
      return "Failed to stringify response object";
    }
  }
  return Sg(t);
}
function Eg(e) {
  return new Promise(function (t) {
    var n = setTimeout(function () {
      t("Timeout while trying to read body");
    }, 500);
    try {
      e.clone()
        .text()
        .then(
          function (e) {
            clearTimeout(n), t(Sg(e));
          },
          function (e) {
            clearTimeout(n), t("Failed to read body: " + String(e));
          },
        );
    } catch (e) {
      clearTimeout(n), t("Failed to read body: " + String(e));
    }
  });
}
function Tg(e, t, n, r, o, i) {
  if ((void 0 === i && (i = 0), i > 10))
    return hg.error("Cannot find performance entry"), Promise.resolve(null);
  var a = (function (e, t) {
    for (var n = e.length - 1; n >= 0; n -= 1) if (t(e[n])) return e[n];
  })(e.performance.getEntriesByName(n), function (e) {
    return (
      yg(e) &&
      e.initiatorType === t &&
      (!r || e.startTime >= r) &&
      (!o || e.startTime <= o)
    );
  });
  return a
    ? Promise.resolve(a)
    : new Promise(function (e) {
        setTimeout(e, 50 * i);
      }).then(function () {
        return Tg(e, t, n, r, o, i + 1);
      });
}
function kg(e, t, n) {
  if (!("performance" in t)) return function () {};
  var r = Object.assign({}, gg.recordHeaders, n.recordHeaders || {}),
    o = Object.assign({}, gg.recordBodyUrls, n.recordBodyUrls || {});
  n = Object.assign({}, n, { recordHeaders: r, recordBodyUrls: o });
  var i = Object.assign({}, gg, n),
    a = function (t) {
      var n = t.requests.filter(function (e) {
        return !Wh(e.url, i.ignoreRequestUrls || []) && !i.ignoreRequestFn(e);
      });
      (n.length > 0 || t.isInitial) && e(Object.assign({}, t, { requests: n }));
    },
    s = (function (e, t, n) {
      if (!t.PerformanceObserver)
        return hg.error("PerformanceObserver not supported"), function () {};
      if (n.recordInitialRequests) {
        var r = t.performance.getEntries().filter(function (e) {
          return (
            (function (e) {
              return "navigation" === e.entryType;
            })(e) ||
            (yg(e) && n.initiatorTypes.includes(e.initiatorType))
          );
        });
        e({
          requests: r.map(function (e) {
            return {
              url: e.name,
              initiatorType: e.initiatorType,
              status: "responseStatus" in e ? e.responseStatus : void 0,
              startTime: Math.round(e.startTime),
              endTime: Math.round(e.responseEnd),
              timeOrigin: mg(t),
            };
          }),
          isInitial: !0,
        });
      }
      var o = new t.PerformanceObserver(function (r) {
        var o = r.getEntries().filter(function (e) {
          return (
            yg(e) &&
            n.initiatorTypes.includes(e.initiatorType) &&
            "xmlhttprequest" !== e.initiatorType &&
            "fetch" !== e.initiatorType
          );
        });
        e({
          requests: o.map(function (e) {
            return {
              url: e.name,
              initiatorType: e.initiatorType,
              status: "responseStatus" in e ? e.responseStatus : void 0,
              startTime: Math.round(e.startTime),
              endTime: Math.round(e.responseEnd),
              timeOrigin: mg(t),
            };
          }),
        });
      });
      return (
        o.observe({ entryTypes: ["navigation", "resource"] }),
        function () {
          o.disconnect();
        }
      );
    })(a, t, i),
    l = (function (e, t, n) {
      if (!n.initiatorTypes.includes("xmlhttprequest")) return function () {};
      var r = vg(t.XMLHttpRequest.prototype, "open", function (r) {
        return function (o, i, a, s, l) {
          void 0 === a && (a = !0);
          var c,
            u,
            d = this,
            p = new Request(i, { method: o }),
            f = {},
            h = {},
            m = d.setRequestHeader.bind(d);
          (d.setRequestHeader = function (e, t) {
            return _g("request", n.recordHeaders, e) && (h[e] = t), m(e, t);
          }),
            (f.requestHeaders = h);
          var g = d.send.bind(d);
          (d.send = function (e) {
            return (
              xg("request", n.recordBodyUrls, p.url) && (f.requestBody = wg(e)),
              (c = t.performance.now()),
              g(e)
            );
          }),
            d.addEventListener("readystatechange", function () {
              if (d.readyState === d.DONE) {
                u = t.performance.now();
                var r = {},
                  o = d.getAllResponseHeaders();
                o &&
                  o
                    .trim()
                    .split(/[\r\n]+/)
                    .forEach(function (e) {
                      if (e) {
                        var t = e.indexOf(": ");
                        if (-1 !== t) {
                          var o = e.substring(0, t),
                            i = e.substring(t + 2);
                          o && _g("response", n.recordHeaders, o) && (r[o] = i);
                        }
                      }
                    }),
                  (f.responseHeaders = r),
                  xg("response", n.recordBodyUrls, p.url) &&
                    (f.responseBody = wg(d.response)),
                  Tg(t, "xmlhttprequest", p.url, c, u)
                    .then(function (n) {
                      if (n) {
                        var r = {
                          url: n.name,
                          method: p.method,
                          initiatorType: n.initiatorType,
                          status: d.status,
                          startTime: Math.round(n.startTime),
                          endTime: Math.round(n.responseEnd),
                          timeOrigin: mg(t),
                          requestHeaders: f.requestHeaders,
                          requestBody: f.requestBody,
                          responseHeaders: f.responseHeaders,
                          responseBody: f.responseBody,
                        };
                        e({ requests: [r] });
                      } else
                        hg.error(
                          "Failed to get performance entry for XHR request to " +
                            p.url,
                        );
                    })
                    .catch(function (e) {
                      hg.error(
                        "Error recording XHR request to " +
                          p.url +
                          ": " +
                          String(e),
                      );
                    });
              }
            }),
            r.call(d, o, i, a, s, l);
        };
      });
      return function () {
        r();
      };
    })(a, t, i),
    c = (function (e, t, n) {
      if (!n.initiatorTypes.includes("fetch")) return function () {};
      var r = vg(t, "fetch", function (r) {
        return function () {
          var o,
            i,
            a,
            s,
            l = new Request(arguments[0], arguments[1]),
            c = {},
            u = Promise.resolve(void 0),
            d = Promise.resolve(void 0);
          try {
            var p = {};
            l.headers.forEach(function (e, t) {
              _g("request", n.recordHeaders, t) && (p[t] = e);
            }),
              (c.requestHeaders = p),
              xg("request", n.recordBodyUrls, l.url) &&
                (u = Eg(l).then(function (e) {
                  c.requestBody = e;
                })),
              (i = t.performance.now()),
              (s = r.apply(t, arguments).then(function (e) {
                (o = e), (a = t.performance.now());
                var r = {};
                return (
                  o.headers.forEach(function (e, t) {
                    _g("response", n.recordHeaders, t) && (r[t] = e);
                  }),
                  (c.responseHeaders = r),
                  xg("response", n.recordBodyUrls, l.url) &&
                    (d = Eg(o).then(function (e) {
                      c.responseBody = e;
                    })),
                  o
                );
              }));
          } catch (e) {
            s = Promise.reject(e);
          }
          return (
            Promise.all([u, d, s])
              .then(function () {
                return Tg(t, "fetch", l.url, i, a);
              })
              .then(function (n) {
                if (n) {
                  var r = {
                    url: n.name,
                    method: l.method,
                    initiatorType: n.initiatorType,
                    status: o ? o.status : void 0,
                    startTime: Math.round(n.startTime),
                    endTime: Math.round(n.responseEnd),
                    timeOrigin: mg(t),
                    requestHeaders: c.requestHeaders,
                    requestBody: c.requestBody,
                    responseHeaders: c.responseHeaders,
                    responseBody: c.responseBody,
                  };
                  e({ requests: [r] });
                } else
                  hg.error(
                    "Failed to get performance entry for fetch request to " +
                      l.url,
                  );
              })
              .catch(function (e) {
                hg.error(
                  "Error recording fetch request to " +
                    l.url +
                    ": " +
                    String(e),
                );
              }),
            s
          );
        };
      });
      return function () {
        r();
      };
    })(a, t, i);
  return function () {
    s(), l(), c();
  };
}
var Cg = Ch("recorder"),
  Ig = r.CompressionStream,
  Ag = {
    batch_size: 1e3,
    batch_flush_interval_ms: 1e4,
    batch_request_timeout_ms: 9e4,
    batch_autostart: !0,
  },
  Og = new Set([
    kl.MouseMove,
    kl.MouseInteraction,
    kl.Scroll,
    kl.ViewportResize,
    kl.Input,
    kl.TouchMove,
    kl.MediaInteraction,
    kl.Drag,
    kl.Selection,
  ]),
  Rg = function (e) {
    (this._mixpanel = e.mixpanelInstance),
      (this._onIdleTimeout = e.onIdleTimeout || Gh),
      (this._onMaxLengthReached = e.onMaxLengthReached || Gh),
      (this._onBatchSent = e.onBatchSent || Gh),
      (this._rrwebRecord = e.rrwebRecord || null),
      (this._stopRecording = null),
      (this.replayId = e.replayId),
      (this.batchStartUrl = e.batchStartUrl || null),
      (this.replayStartUrl = e.replayStartUrl || null),
      (this.idleExpires = e.idleExpires || null),
      (this.maxExpires = e.maxExpires || null),
      (this.replayStartTime = e.replayStartTime || null),
      (this.lastEventTimestamp = e.lastEventTimestamp || null),
      (this.seqNo = e.seqNo || 0),
      (this.idleTimeoutId = null),
      (this.maxTimeoutId = null),
      (this.recordMaxMs = ih),
      (this.recordMinMs = 0),
      (this._recordMinMsCheckStart = null);
    var t =
      Ph(e.sharedLockStorage || jh(), !0) &&
      !this.getConfig("disable_persistence");
    (this.batcherKey =
      "__mprec_" +
      this.getConfig("name") +
      "_" +
      this.getConfig("token") +
      "_" +
      this.replayId),
      (this.queueStorage = new Kh(Zh, Qh, Xh)),
      (this.batcher = new _m(this.batcherKey, {
        errorReporter: this.reportError.bind(this),
        flushOnlyOnInterval: !0,
        libConfig: Ag,
        sendRequestFunc: this.flushEventsWithOptOut.bind(this),
        queueStorage: this.queueStorage,
        sharedLockStorage: e.sharedLockStorage,
        usePersistence: t,
        stopAllBatchingFunc: this.stopRecording.bind(this),
        enqueueThrottleMs: 250,
        sharedLockTimeoutMS: 1e4,
      }));
  };
(Rg.prototype.getUserIdInfo = function () {
  if (this.finalFlushUserIdInfo) return this.finalFlushUserIdInfo;
  var e = { distinct_id: String(this._mixpanel.get_distinct_id()) },
    t = this._mixpanel.get_property("$device_id");
  t && (e.$device_id = t);
  var n = this._mixpanel.get_property("$user_id");
  return n && (e.$user_id = n), e;
}),
  (Rg.prototype.unloadPersistedData = function () {
    return (
      this.batcher.stop(),
      this.queueStorage
        .init()
        .catch(
          function () {
            this.reportError(
              "Error initializing IndexedDB storage for unloading persisted data.",
            );
          }.bind(this),
        )
        .then(
          function () {
            return this.getDurationMs() < this._getRecordMinMs()
              ? this.queueStorage.removeItem(this.batcherKey)
              : this.batcher.flush().then(
                  function () {
                    return this.queueStorage.removeItem(this.batcherKey);
                  }.bind(this),
                );
          }.bind(this),
        )
    );
  }),
  (Rg.prototype.getConfig = function (e) {
    return this._mixpanel.get_config(e);
  }),
  (Rg.prototype.get_config = function (e) {
    return this.getConfig(e);
  }),
  (Rg.prototype.startRecording = function (e) {
    if (null !== this._rrwebRecord)
      if (null === this._stopRecording) {
        (this.recordMaxMs = this.getConfig("record_max_ms")),
          this.recordMaxMs > ih &&
            ((this.recordMaxMs = ih),
            Cg.critical(
              "record_max_ms cannot be greater than " +
                ih +
                "ms. Capping value.",
            )),
          this.maxExpires ||
            (this.maxExpires = new Date().getTime() + this.recordMaxMs),
          (this.recordMinMs = this._getRecordMinMs()),
          this.replayStartTime ||
            ((this.replayStartTime = new Date().getTime()),
            (this.batchStartUrl = Eh.info.currentUrl()),
            (this.replayStartUrl = Eh.info.currentUrl())),
          e || this.recordMinMs > 0
            ? (this.batcher.stop(), (this._recordMinMsCheckStart = null))
            : this.batcher.start();
        var t = function () {
          clearTimeout(this.idleTimeoutId);
          var e = this.getConfig("record_idle_timeout_ms");
          (this.idleTimeoutId = setTimeout(this._onIdleTimeout, e)),
            (this.idleExpires = new Date().getTime() + e);
        }.bind(this);
        t();
        var n = this.getConfig("record_block_selector");
        ("" !== n && null !== n) || (n = void 0);
        var r = (function (e) {
            var t = {
                input: {
                  maskingSelector: "",
                  unmaskingSelector: "",
                  maskAll: !0,
                },
                text: {
                  maskingSelector: "",
                  unmaskingSelector: "",
                  maskAll: !0,
                },
              },
              n = e.get_config("record_mask_input_selector"),
              r = e.get_config("record_unmask_input_selector"),
              o = e.get_config("record_mask_all_inputs");
            (t.input.maskingSelector = ug(n).join(",")),
              (t.input.unmaskingSelector = ug(r).join(",")),
              void 0 !== o && (t.input.maskAll = o);
            var i = e.get_config("record_mask_text_selector"),
              a = e.get_config("record_unmask_text_selector"),
              s = e.get_config("record_mask_all_text"),
              l = e.get_config("record_mask_text_class"),
              c = ug(i);
            if (l)
              if (l instanceof RegExp) t.text._legacyClassRegex = l;
              else {
                var u = "." + l;
                -1 === c.indexOf(u) && c.push(u);
              }
            return (
              (t.text.maskingSelector = c.join(",")),
              (t.text.unmaskingSelector = ug(a).join(",")),
              void 0 === s && void 0 !== i
                ? (t.text.maskAll = !1)
                : void 0 !== s && (t.text.maskAll = s),
              t
            );
          })(this._mixpanel),
          o = [];
        if (this.getConfig("record_network")) {
          var i = this.getConfig("record_network_options") || {},
            a = (i.ignoreRequestUrls || []).slice();
          a.push(this._getApiRoute()),
            (i.ignoreRequestUrls = a),
            o.push(
              (function (e) {
                return {
                  name: "rrweb/network@1.mp",
                  observer: kg,
                  options: e,
                };
              })(i),
            );
        }
        this.getConfig("record_console") &&
          o.push({
            name: "rrweb/console@1",
            observer: Of,
            options: {
              stringifyOptions: {
                stringLengthLimit: 1e3,
                numOfKeysLimit: 50,
                depthOfLimit: 2,
              },
            },
          });
        var s = wm(this.getConfig("record_allowed_iframe_origins"), Cg);
        try {
          this._stopRecording = this._rrwebRecord({
            emit: function (e) {
              this.idleExpires && this.idleExpires < e.timestamp
                ? this._onIdleTimeout()
                : (null === this._recordMinMsCheckStart &&
                    (this._recordMinMsCheckStart = e.timestamp),
                  (function (e) {
                    return (
                      e.type === Tl.IncrementalSnapshot && Og.has(e.data.source)
                    );
                  })(e) &&
                    (this.batcher.stopped &&
                      e.timestamp - this._recordMinMsCheckStart >=
                        this.recordMinMs &&
                      this.batcher.start(),
                    t()),
                  (this.__enqueuePromise = this.batcher.enqueue(e)),
                  (null === this.lastEventTimestamp ||
                    e.timestamp > this.lastEventTimestamp) &&
                    (this.lastEventTimestamp = e.timestamp));
            }.bind(this),
            blockClass: this.getConfig("record_block_class"),
            blockSelector: n,
            collectFonts: this.getConfig("record_collect_fonts"),
            dataURLOptions: { type: "image/webp", quality: 0.6 },
            maskAllInputs: !0,
            maskTextSelector: "*",
            maskInputFn: this._getMaskFn(pg, r),
            maskTextFn: this._getMaskFn(fg, r),
            recordCrossOriginIframes: s.length > 0,
            allowedIframeOrigins: s,
            recordCanvas: this.getConfig("record_canvas"),
            sampling: { canvas: 15 },
            plugins: o,
          });
        } catch (e) {
          this.reportError(
            "Unexpected error when starting rrweb recording.",
            e,
          );
        }
        if ("function" != typeof this._stopRecording)
          return (
            this.reportError("rrweb failed to start, skipping this recording."),
            (this._stopRecording = null),
            void this.stopRecording()
          );
        var l = this.maxExpires - new Date().getTime();
        this.maxTimeoutId = setTimeout(this._onMaxLengthReached.bind(this), l);
      } else Cg.log("Recording already in progress, skipping startRecording.");
    else this.reportError("rrweb record function not provided. ");
  }),
  (Rg.prototype.stopRecording = function (e) {
    if (
      ((this.finalFlushUserIdInfo = this.getUserIdInfo()),
      !this.isRrwebStopped())
    ) {
      try {
        this._stopRecording();
      } catch (e) {
        this.reportError("Error with rrweb stopRecording", e);
      }
      this._stopRecording = null;
    }
    var t;
    return (
      this.batcher.stopped
        ? (t = this.batcher.clear())
        : e || (t = this.batcher.flush()),
      this.batcher.stop(),
      clearTimeout(this.idleTimeoutId),
      clearTimeout(this.maxTimeoutId),
      t
    );
  }),
  (Rg.prototype.isRrwebStopped = function () {
    return null === this._stopRecording;
  }),
  (Rg.prototype.flushEventsWithOptOut = function (e, t, n) {
    var r = function (e) {
      0 === e &&
        (this.stopRecording(),
        n({
          error: "Tracking has been opted out, stopping recording.",
        }));
    }.bind(this);
    this._flushEvents(e, t, n, r);
  }),
  (Rg.prototype.serialize = function () {
    var e;
    try {
      e = this._mixpanel.get_tab_id();
    } catch (t) {
      this.reportError("Error getting tab ID for serialization ", t),
        (e = null);
    }
    return {
      replayId: this.replayId,
      seqNo: this.seqNo,
      replayStartTime: this.replayStartTime,
      batchStartUrl: this.batchStartUrl,
      replayStartUrl: this.replayStartUrl,
      lastEventTimestamp: this.lastEventTimestamp,
      idleExpires: this.idleExpires,
      maxExpires: this.maxExpires,
      tabId: e,
    };
  }),
  (Rg.deserialize = function (e, t) {
    return new Rg(
      Eh.extend({}, t, {
        replayId: e.replayId,
        batchStartUrl: e.batchStartUrl,
        replayStartUrl: e.replayStartUrl,
        idleExpires: e.idleExpires,
        maxExpires: e.maxExpires,
        replayStartTime: e.replayStartTime,
        lastEventTimestamp: e.lastEventTimestamp,
        seqNo: e.seqNo,
        sharedLockStorage: t.sharedLockStorage,
      }),
    );
  }),
  (Rg.prototype._getApiRoute = function () {
    return this.getConfig("api_routes").record;
  }),
  (Rg.prototype._sendRequest = function (e, t, n, o) {
    var i = function (t, n) {
        200 === t.status &&
          this.replayId === e &&
          (this.seqNo++, (this.batchStartUrl = Eh.info.currentUrl())),
          this._onBatchSent(),
          o({
            status: 0,
            httpStatusCode: t.status,
            responseBody: n,
            retryAfter: t.headers.get("Retry-After"),
          });
      }.bind(this),
      a =
        (this._mixpanel.get_api_host &&
          this._mixpanel.get_api_host("record")) ||
        this.getConfig("api_host");
    r.fetch(a + "/" + this._getApiRoute() + "?" + new URLSearchParams(t), {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(this.getConfig("token") + ":"),
        "Content-Type": "application/octet-stream",
      },
      body: n,
    })
      .then(function (e) {
        e.json()
          .then(function (t) {
            i(e, t);
          })
          .catch(function (e) {
            o({ error: e });
          });
      })
      .catch(function (e) {
        o({ error: e, httpStatusCode: 0 });
      });
  }),
  (Rg.prototype._flushEvents = om(function (e, t, n) {
    var o = e.length;
    if (o > 0) {
      for (
        var a = this.replayId, s = 1 / 0, l = -1 / 0, c = !1, u = 0;
        u < o;
        u++
      )
        (s = Math.min(s, e[u].timestamp)),
          (l = Math.max(l, e[u].timestamp)),
          e[u].type === Tl.FullSnapshot && (c = !0);
      if (0 === this.seqNo) {
        if (!c)
          return (
            n({
              error:
                "First batch does not contain a full snapshot. Aborting recording.",
            }),
            void this.stopRecording(!0)
          );
        this.replayStartTime = s;
      } else
        this.replayStartTime ||
          (this.reportError(
            "Replay start time not set but seqNo is not 0. Using current batch start time as a fallback.",
          ),
          (this.replayStartTime = s));
      var d = l - this.replayStartTime,
        p = {
          $current_url: this.batchStartUrl,
          $lib_version: i.LIB_VERSION,
          batch_start_time: s / 1e3,
          mp_lib: "web",
          replay_id: a,
          replay_length_ms: d,
          replay_start_time: this.replayStartTime / 1e3,
          replay_start_url: this.replayStartUrl,
          seq: this.seqNo,
        },
        f = JSON.stringify(e);
      if (
        (Object.assign(p, this.getUserIdInfo()),
        (function (e, t, n) {
          if (!r.CompressionStream) return !1;
          var o = Eh.info.browser(e, t, n),
            i = Eh.info.browserVersion(e, t, n);
          return !(
            ("Safari" === o || "Mobile Safari" === o) &&
            i >= 16.4 &&
            i < 16.6
          );
        })(yh, fh.vendor, mh))
      ) {
        var h = new Blob([f], { type: "application/json" })
          .stream()
          .pipeThrough(new Ig("gzip"));
        new Response(h).blob().then(
          function (e) {
            (p.format = "gzip"), this._sendRequest(a, p, e, n);
          }.bind(this),
        );
      } else (p.format = "body"), this._sendRequest(a, p, f, n);
    }
  })),
  (Rg.prototype.reportError = function (e, t) {
    Cg.error.apply(Cg.error, arguments);
    try {
      t || e instanceof Error || (e = new Error(e)),
        this.getConfig("error_reporter")(e, t);
    } catch (t) {
      Cg.error(t);
    }
  }),
  (Rg.prototype.getDurationMs = function () {
    return null === this.replayStartTime
      ? 0
      : null === this.lastEventTimestamp
        ? new Date().getTime() - this.replayStartTime
        : this.lastEventTimestamp - this.replayStartTime;
  }),
  (Rg.prototype._getRecordMinMs = function () {
    var e = this.getConfig("record_min_ms");
    return e > 8e3
      ? (Cg.critical(
          "record_min_ms cannot be greater than 8000ms. Capping value.",
        ),
        8e3)
      : e;
  }),
  (Rg.prototype._getMaskFn = function (e, t) {
    return function (n, r) {
      if (!n.trim().length) return "";
      var o = !0;
      try {
        o = e(r, t);
      } catch (e) {
        this.reportError(
          "Error checking if text should be masked, defaulting to masked",
          e,
        );
      }
      if (o) {
        var i = Math.min(n.length, 1e4);
        return "*".repeat(i);
      }
      return n;
    }.bind(this);
  });
var Mg = function (e) {
  (this.idb = new Kh(Zh, Jh, Xh)),
    (this.errorReporter = e.errorReporter),
    (this.mixpanelInstance = e.mixpanelInstance),
    (this.sharedLockStorage = e.sharedLockStorage);
};
(Mg.prototype.isPersistenceEnabled = function () {
  return !this.mixpanelInstance.get_config("disable_persistence");
}),
  (Mg.prototype.handleError = function (e) {
    this.errorReporter("IndexedDB error: ", e);
  }),
  (Mg.prototype.setActiveRecording = function (e) {
    if (!this.isPersistenceEnabled()) return $f.resolve();
    var t = e.tabId;
    return t
      ? this.idb
          .init()
          .then(
            function () {
              return this.idb.setItem(t, e);
            }.bind(this),
          )
          .catch(this.handleError.bind(this))
      : $f.resolve();
  }),
  (Mg.prototype.getActiveRecording = function () {
    return this.isPersistenceEnabled()
      ? this.idb
          .init()
          .then(
            function () {
              return this.idb.getItem(this.mixpanelInstance.get_tab_id());
            }.bind(this),
          )
          .then(
            function (e) {
              return xm(e) ? null : e;
            }.bind(this),
          )
          .catch(this.handleError.bind(this))
      : $f.resolve(null);
  }),
  (Mg.prototype.clearActiveRecording = function () {
    return this.isPersistenceEnabled()
      ? this.markActiveRecordingExpired()
      : this.deleteActiveRecording();
  }),
  (Mg.prototype.markActiveRecordingExpired = function () {
    return this.getActiveRecording()
      .then(
        function (e) {
          if (e) return (e.maxExpires = 0), this.setActiveRecording(e);
        }.bind(this),
      )
      .catch(this.handleError.bind(this));
  }),
  (Mg.prototype.deleteActiveRecording = function () {
    return this.idb.isInitialized()
      ? this.idb
          .removeItem(this.mixpanelInstance.get_tab_id())
          .catch(this.handleError.bind(this))
      : $f.resolve();
  }),
  (Mg.prototype.flushInactiveRecordings = function () {
    return this.isPersistenceEnabled()
      ? this.idb
          .init()
          .then(
            function () {
              return this.idb.getAll();
            }.bind(this),
          )
          .then(
            function (e) {
              var t = e
                .filter(function (e) {
                  return xm(e);
                })
                .map(
                  function (e) {
                    return Rg.deserialize(e, {
                      mixpanelInstance: this.mixpanelInstance,
                      sharedLockStorage: this.sharedLockStorage,
                    })
                      .unloadPersistedData()
                      .then(
                        function () {
                          return this.idb.removeItem(e.tabId);
                        }.bind(this),
                      )
                      .catch(this.handleError.bind(this));
                  }.bind(this),
                );
              return $f.all(t);
            }.bind(this),
          )
          .catch(this.handleError.bind(this))
      : $f.resolve([]);
  });
var Pg = Ch("recorder"),
  Ng = function (e, t, n) {
    (this.mixpanelInstance = e),
      (this.rrwebRecord = t || Ac),
      (this.sharedLockStorage = n),
      (this.recordingRegistry = new Mg({
        mixpanelInstance: this.mixpanelInstance,
        errorReporter: Pg.error,
        sharedLockStorage: n,
      })),
      (this._flushInactivePromise =
        this.recordingRegistry.flushInactiveRecordings()),
      (this.activeRecording = null),
      (this.stopRecordingInProgress = !1);
  };
function Dg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
(Ng.prototype.startRecording = function (e) {
  if (
    ((e = e || {}),
    !this.activeRecording || this.activeRecording.isRrwebStopped())
  ) {
    var t = function () {
        Pg.log("Idle timeout reached, restarting recording."),
          this.resetRecording();
      }.bind(this),
      n = function () {
        Pg.log("Max recording length reached, stopping recording."),
          this.resetRecording();
      }.bind(this),
      r = function () {
        this.recordingRegistry.setActiveRecording(
          this.activeRecording.serialize(),
        ),
          (this.__flushPromise = this.activeRecording.batcher._flushPromise);
      }.bind(this),
      o = {
        mixpanelInstance: this.mixpanelInstance,
        onBatchSent: r,
        onIdleTimeout: t,
        onMaxLengthReached: n,
        replayId: Eh.UUID(),
        rrwebRecord: this.rrwebRecord,
        sharedLockStorage: this.sharedLockStorage,
      };
    return (
      e.activeSerializedRecording
        ? (this.activeRecording = Rg.deserialize(
            e.activeSerializedRecording,
            o,
          ))
        : (this.activeRecording = new Rg(o)),
      this.activeRecording.startRecording(e.shouldStopBatcher),
      this.recordingRegistry.setActiveRecording(
        this.activeRecording.serialize(),
      )
    );
  }
  Pg.log("Recording already in progress, skipping startRecording.");
}),
  (Ng.prototype.stopRecording = function () {
    return (
      (this.stopRecordingInProgress = !0),
      this._stopCurrentRecording(!1, !0)
        .then(
          function () {
            return this.recordingRegistry.clearActiveRecording();
          }.bind(this),
        )
        .then(
          function () {
            this.stopRecordingInProgress = !1;
          }.bind(this),
        )
    );
  }),
  (Ng.prototype.pauseRecording = function () {
    return this._stopCurrentRecording(!1);
  }),
  (Ng.prototype._stopCurrentRecording = function (e, t) {
    if (this.activeRecording) {
      var n = this.activeRecording.stopRecording(e);
      return t && (this.activeRecording = null), n;
    }
    return $f.resolve();
  }),
  (Ng.prototype.resumeRecording = function (e) {
    return this.activeRecording && this.activeRecording.isRrwebStopped()
      ? (this.activeRecording.startRecording(!1), $f.resolve(null))
      : this.recordingRegistry.getActiveRecording().then(
          function (t) {
            return t && !this.stopRecordingInProgress
              ? this.startRecording({ activeSerializedRecording: t })
              : e
                ? this.startRecording({ shouldStopBatcher: !1 })
                : (Pg.log("No resumable recording found."), null);
          }.bind(this),
        );
  }),
  (Ng.prototype.resetRecording = function () {
    this.stopRecording(), this.startRecording({ shouldStopBatcher: !0 });
  }),
  (Ng.prototype.isRecording = function () {
    return this.activeRecording && !this.activeRecording.isRrwebStopped();
  }),
  (Ng.prototype.getActiveReplayId = function () {
    return this.isRecording() ? this.activeRecording.replayId : null;
  }),
  Object.defineProperty(Ng.prototype, "replayId", {
    get: function () {
      return this.getActiveReplayId();
    },
  }),
  (r[s] = Ng);
var jg,
  Lg = { exports: {} },
  Fg =
    (jg ||
      ((jg = 1),
      (function (e) {
        e.exports = (function () {
          Array.isArray ||
            (Array.isArray = function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            });
          var e = {},
            t = {
              "==": function (e, t) {
                return e == t;
              },
              "===": function (e, t) {
                return e === t;
              },
              "!=": function (e, t) {
                return e != t;
              },
              "!==": function (e, t) {
                return e !== t;
              },
              ">": function (e, t) {
                return e > t;
              },
              ">=": function (e, t) {
                return e >= t;
              },
              "<": function (e, t, n) {
                return void 0 === n ? e < t : e < t && t < n;
              },
              "<=": function (e, t, n) {
                return void 0 === n ? e <= t : e <= t && t <= n;
              },
              "!!": function (t) {
                return e.truthy(t);
              },
              "!": function (t) {
                return !e.truthy(t);
              },
              "%": function (e, t) {
                return e % t;
              },
              log: function (e) {
                return e;
              },
              in: function (e, t) {
                return !(!t || void 0 === t.indexOf) && -1 !== t.indexOf(e);
              },
              cat: function () {
                return Array.prototype.join.call(arguments, "");
              },
              substr: function (e, t, n) {
                if (n < 0) {
                  var r = String(e).substr(t);
                  return r.substr(0, r.length + n);
                }
                return String(e).substr(t, n);
              },
              "+": function () {
                return Array.prototype.reduce.call(
                  arguments,
                  function (e, t) {
                    return parseFloat(e, 10) + parseFloat(t, 10);
                  },
                  0,
                );
              },
              "*": function () {
                return Array.prototype.reduce.call(arguments, function (e, t) {
                  return parseFloat(e, 10) * parseFloat(t, 10);
                });
              },
              "-": function (e, t) {
                return void 0 === t ? -e : e - t;
              },
              "/": function (e, t) {
                return e / t;
              },
              min: function () {
                return Math.min.apply(this, arguments);
              },
              max: function () {
                return Math.max.apply(this, arguments);
              },
              merge: function () {
                return Array.prototype.reduce.call(
                  arguments,
                  function (e, t) {
                    return e.concat(t);
                  },
                  [],
                );
              },
              var: function (e, t) {
                var n = void 0 === t ? null : t,
                  r = this;
                if (void 0 === e || "" === e || null === e) return r;
                for (var o = String(e).split("."), i = 0; i < o.length; i++) {
                  if (null == r) return n;
                  if (void 0 === (r = r[o[i]])) return n;
                }
                return r;
              },
              missing: function () {
                for (
                  var t = [],
                    n = Array.isArray(arguments[0]) ? arguments[0] : arguments,
                    r = 0;
                  r < n.length;
                  r++
                ) {
                  var o = n[r],
                    i = e.apply({ var: o }, this);
                  (null !== i && "" !== i) || t.push(o);
                }
                return t;
              },
              missing_some: function (t, n) {
                var r = e.apply({ missing: n }, this);
                return n.length - r.length >= t ? [] : r;
              },
            };
          return (
            (e.is_logic = function (e) {
              return (
                "object" == typeof e &&
                null !== e &&
                !Array.isArray(e) &&
                1 === Object.keys(e).length
              );
            }),
            (e.truthy = function (e) {
              return !((Array.isArray(e) && 0 === e.length) || !e);
            }),
            (e.get_operator = function (e) {
              return Object.keys(e)[0];
            }),
            (e.get_values = function (t) {
              return t[e.get_operator(t)];
            }),
            (e.apply = function (n, r) {
              if (Array.isArray(n))
                return n.map(function (t) {
                  return e.apply(t, r);
                });
              if (!e.is_logic(n)) return n;
              var o,
                i,
                a,
                s,
                l,
                c = e.get_operator(n),
                u = n[c];
              if ((Array.isArray(u) || (u = [u]), "if" === c || "?:" == c)) {
                for (o = 0; o < u.length - 1; o += 2)
                  if (e.truthy(e.apply(u[o], r))) return e.apply(u[o + 1], r);
                return u.length === o + 1 ? e.apply(u[o], r) : null;
              }
              if ("and" === c) {
                for (o = 0; o < u.length; o += 1)
                  if (((i = e.apply(u[o], r)), !e.truthy(i))) return i;
                return i;
              }
              if ("or" === c) {
                for (o = 0; o < u.length; o += 1)
                  if (((i = e.apply(u[o], r)), e.truthy(i))) return i;
                return i;
              }
              if ("filter" === c)
                return (
                  (s = e.apply(u[0], r)),
                  (a = u[1]),
                  Array.isArray(s)
                    ? s.filter(function (t) {
                        return e.truthy(e.apply(a, t));
                      })
                    : []
                );
              if ("map" === c)
                return (
                  (s = e.apply(u[0], r)),
                  (a = u[1]),
                  Array.isArray(s)
                    ? s.map(function (t) {
                        return e.apply(a, t);
                      })
                    : []
                );
              if ("reduce" === c)
                return (
                  (s = e.apply(u[0], r)),
                  (a = u[1]),
                  (l = void 0 !== u[2] ? e.apply(u[2], r) : null),
                  Array.isArray(s)
                    ? s.reduce(function (t, n) {
                        return e.apply(a, {
                          current: n,
                          accumulator: t,
                        });
                      }, l)
                    : l
                );
              if ("all" === c) {
                if (
                  ((s = e.apply(u[0], r)),
                  (a = u[1]),
                  !Array.isArray(s) || !s.length)
                )
                  return !1;
                for (o = 0; o < s.length; o += 1)
                  if (!e.truthy(e.apply(a, s[o]))) return !1;
                return !0;
              }
              if ("none" === c) {
                if (
                  ((s = e.apply(u[0], r)),
                  (a = u[1]),
                  !Array.isArray(s) || !s.length)
                )
                  return !0;
                for (o = 0; o < s.length; o += 1)
                  if (e.truthy(e.apply(a, s[o]))) return !1;
                return !0;
              }
              if ("some" === c) {
                if (
                  ((s = e.apply(u[0], r)),
                  (a = u[1]),
                  !Array.isArray(s) || !s.length)
                )
                  return !1;
                for (o = 0; o < s.length; o += 1)
                  if (e.truthy(e.apply(a, s[o]))) return !0;
                return !1;
              }
              if (
                ((u = u.map(function (t) {
                  return e.apply(t, r);
                })),
                t.hasOwnProperty(c) && "function" == typeof t[c])
              )
                return t[c].apply(r, u);
              if (c.indexOf(".") > 0) {
                var d = String(c).split("."),
                  p = t;
                for (o = 0; o < d.length; o++) {
                  if (!p.hasOwnProperty(d[o]))
                    throw new Error(
                      "Unrecognized operation " +
                        c +
                        " (failed at " +
                        d.slice(0, o + 1).join(".") +
                        ")",
                    );
                  p = p[d[o]];
                }
                return p.apply(r, u);
              }
              throw new Error("Unrecognized operation " + c);
            }),
            (e.uses_data = function (t) {
              var n = [];
              if (e.is_logic(t)) {
                var r = e.get_operator(t),
                  o = t[r];
                Array.isArray(o) || (o = [o]),
                  "var" === r
                    ? n.push(o[0])
                    : o.forEach(function (t) {
                        n.push.apply(n, e.uses_data(t));
                      });
              }
              return (function (e) {
                for (var t = [], n = 0, r = e.length; n < r; n++)
                  -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t;
              })(n);
            }),
            (e.add_operation = function (e, n) {
              t[e] = n;
            }),
            (e.rm_operation = function (e) {
              delete t[e];
            }),
            (e.rule_like = function (t, n) {
              if (n === t) return !0;
              if ("@" === n) return !0;
              if ("number" === n) return "number" == typeof t;
              if ("string" === n) return "string" == typeof t;
              if ("array" === n) return Array.isArray(t) && !e.is_logic(t);
              if (e.is_logic(n)) {
                if (e.is_logic(t)) {
                  var r = e.get_operator(n),
                    o = e.get_operator(t);
                  if ("@" === r || r === o)
                    return e.rule_like(
                      e.get_values(t, !1),
                      e.get_values(n, !1),
                    );
                }
                return !1;
              }
              if (Array.isArray(n)) {
                if (Array.isArray(t)) {
                  if (n.length !== t.length) return !1;
                  for (var i = 0; i < n.length; i += 1)
                    if (!e.rule_like(t[i], n[i])) return !1;
                  return !0;
                }
                return !1;
              }
              return !1;
            }),
            e
          );
        })();
      })(Lg)),
    Lg.exports),
  Ug = Dg(Fg),
  Bg = {
    eventMatchesCriteria: function (e, t, n) {
      if (e !== n.event_name) return { matches: !1 };
      var r = n.property_filters,
        o = !0;
      if (r && !Eh.isEmptyObject(r))
        try {
          o = Ug.apply(r, t || {});
        } catch (e) {
          return { matches: !1, error: e.toString() };
        }
      return { matches: o };
    },
  };
function zg() {
  this.clicks = [];
}
function Hg(e, t) {
  (this.changeCallback = e || function () {}),
    (this.observerConfig = t),
    (this.observedShadowRoots = null),
    (this.shadowObservers = []);
}
(r[a] = Promise.resolve(Bg)),
  (zg.prototype.isRageClick = function (e, t) {
    var n = (t = t || {}).threshold_px || 30,
      r = t.timeout_ms || 1e3,
      o = t.click_count || 4;
    if (t.interactive_elements_only) {
      var i = sg(e);
      if (!i || ig(i)) return !1;
    }
    var a = Date.now(),
      s = e.pageX,
      l = e.pageY,
      c = this.clicks[this.clicks.length - 1];
    if (
      c &&
      a - c.timestamp < r &&
      Math.sqrt(Math.pow(s - c.x, 2) + Math.pow(l - c.y, 2)) < n
    ) {
      if (
        (this.clicks.push({ x: s, y: l, timestamp: a }),
        this.clicks.length >= o)
      )
        return (this.clicks = []), !0;
    } else this.clicks = [{ x: s, y: l, timestamp: a }];
    return !1;
  }),
  (Hg.prototype.getEventTarget = function (e) {
    if (this.observedShadowRoots) return sg(e);
  }),
  (Hg.prototype.observeFromEvent = function (e) {
    if (this.observedShadowRoots)
      for (var t = ag(e), n = 0; n < t.length; n++) {
        var r = t[n];
        r && r.shadowRoot && this.observeShadowRoot(r.shadowRoot);
      }
  }),
  (Hg.prototype.observeShadowRoot = function (e) {
    if (this.observedShadowRoots && !this.observedShadowRoots.has(e)) {
      var t = this;
      try {
        this.observedShadowRoots.add(e);
        var n = new window.MutationObserver(function () {
          t.changeCallback();
        });
        n.observe(e, this.observerConfig), this.shadowObservers.push(n);
      } catch (e) {
        Vm.critical("Error while observing shadow root", e);
      }
    }
  }),
  (Hg.prototype.start = function () {
    this.observedShadowRoots ||
      ("undefined" != typeof WeakSet
        ? (this.observedShadowRoots = new WeakSet())
        : Vm.critical(
            "Shadow DOM observation unavailable: WeakSet not supported",
          ));
  }),
  (Hg.prototype.stop = function () {
    if (this.observedShadowRoots) {
      for (var e = 0; e < this.shadowObservers.length; e++)
        try {
          this.shadowObservers[e].disconnect();
        } catch (e) {
          Vm.critical("Error while disconnecting shadow DOM observer", e);
        }
      (this.shadowObservers = []), (this.observedShadowRoots = null);
    }
  });
var Vg = [Em, "input", Mm, "select", "toggle"],
  qg = [Om],
  Gg = [km],
  Wg = {
    characterData: !0,
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: [
      "style",
      "class",
      "hidden",
      "checked",
      "selected",
      "value",
      "display",
      "visibility",
    ],
  };
function $g(e) {
  (this.eventListeners = []),
    (this.mutationObserver = null),
    (this.shadowDOMObserver = null),
    (this.isTracking = !1),
    (this.lastChangeEventTimestamp = 0),
    (this.pendingClicks = []),
    (this.onDeadClickCallback = e),
    (this.processingActive = !1),
    (this.processingTimeout = null);
}
($g.prototype.addClick = function (e) {
  var t = this.shadowDOMObserver && this.shadowDOMObserver.getEventTarget(e);
  return (
    t || (t = e.target || e.srcElement),
    !(
      !t ||
      ig(t) ||
      (this.shadowDOMObserver && this.shadowDOMObserver.observeFromEvent(e),
      this.pendingClicks.push({
        element: t,
        event: e,
        timestamp: Date.now(),
      }),
      0)
    )
  );
}),
  ($g.prototype.trackClick = function (e, t) {
    if (!this.isTracking) return !1;
    var n = this.addClick(e);
    return n && this.triggerProcessing(t), n;
  }),
  ($g.prototype.getDeadClicks = function (e) {
    if (0 === this.pendingClicks.length) return [];
    var t = e.timeout_ms,
      n = Date.now(),
      r = this.pendingClicks.slice();
    this.pendingClicks = [];
    for (var o = [], i = 0; i < r.length; i++) {
      var a = r[i];
      n - a.timestamp >= t
        ? this.hasChangesAfter(a.timestamp) || o.push(a)
        : this.pendingClicks.push(a);
    }
    return o;
  }),
  ($g.prototype.hasChangesAfter = function (e) {
    return this.lastChangeEventTimestamp >= e - 100;
  }),
  ($g.prototype.recordChangeEvent = function () {
    this.lastChangeEventTimestamp = Date.now();
  }),
  ($g.prototype.triggerProcessing = function (e) {
    this.processingActive ||
      ((this.processingActive = !0), this.processRecursively(e));
  }),
  ($g.prototype.processRecursively = function (e) {
    if (this.isTracking && this.onDeadClickCallback) {
      var t = e.timeout_ms,
        n = this;
      this.processingTimeout = setTimeout(function () {
        if (n.processingActive) {
          for (var t = n.getDeadClicks(e), r = 0; r < t.length; r++)
            n.onDeadClickCallback(t[r].event);
          n.pendingClicks.length > 0
            ? n.processRecursively(e)
            : (n.processingActive = !1);
        }
      }, t);
    } else this.processingActive = !1;
  }),
  ($g.prototype.startTracking = function () {
    if (!this.isTracking) {
      this.isTracking = !0;
      var e = this;
      Vg.forEach(function (t) {
        var n = function () {
          e.recordChangeEvent();
        };
        document.addEventListener(t, n, { capture: !0, passive: !0 }),
          e.eventListeners.push({
            target: document,
            event: t,
            handler: n,
            options: { capture: !0, passive: !0 },
          });
      }),
        Gg.forEach(function (t) {
          var n = function () {
            e.recordChangeEvent();
          };
          window.addEventListener(t, n),
            e.eventListeners.push({
              target: window,
              event: t,
              handler: n,
            });
        }),
        qg.forEach(function (t) {
          var n = function () {
            e.recordChangeEvent();
          };
          window.addEventListener(t, n, { passive: !0 }),
            e.eventListeners.push({
              target: window,
              event: t,
              handler: n,
              options: { passive: !0 },
            });
        });
      var t = function () {
        e.recordChangeEvent();
      };
      if (
        (document.addEventListener("selectionchange", t),
        e.eventListeners.push({
          target: document,
          event: "selectionchange",
          handler: t,
        }),
        window.MutationObserver)
      )
        try {
          (this.mutationObserver = new window.MutationObserver(function () {
            e.recordChangeEvent();
          })),
            this.mutationObserver.observe(
              document.body || document.documentElement,
              Wg,
            );
        } catch (e) {
          Vm.critical("Error while setting up mutation observer", e);
        }
      if (window.customElements)
        try {
          (this.shadowDOMObserver = new Hg(function () {
            e.recordChangeEvent();
          }, Wg)),
            this.shadowDOMObserver.start();
        } catch (e) {
          Vm.critical("Error while setting up shadow DOM observer", e),
            (this.shadowDOMObserver = null);
        }
    }
  }),
  ($g.prototype.stopTracking = function () {
    if (this.isTracking) {
      (this.isTracking = !1),
        (this.pendingClicks = []),
        (this.lastChangeEventTimestamp = 0),
        (this.processingActive = !1),
        this.processingTimeout &&
          (clearTimeout(this.processingTimeout),
          (this.processingTimeout = null));
      for (var e = 0; e < this.eventListeners.length; e++) {
        var t = this.eventListeners[e];
        try {
          t.target.removeEventListener(t.event, t.handler, t.options);
        } catch (e) {
          Vm.critical("Error while removing event listener", e);
        }
      }
      if (((this.eventListeners = []), this.mutationObserver)) {
        try {
          this.mutationObserver.disconnect();
        } catch (e) {
          Vm.critical("Error while disconnecting mutation observer", e);
        }
        this.mutationObserver = null;
      }
      if (this.shadowDOMObserver) {
        try {
          this.shadowDOMObserver.stop();
        } catch (e) {
          Vm.critical("Error while stopping shadow DOM observer", e);
        }
        this.shadowDOMObserver = null;
      }
    }
  });
var Yg = "autocapture",
  Kg = "full-url",
  Zg = "allow_selectors",
  Qg = "allow_url_regexes",
  Jg = "block_attrs",
  Xg = "block_element_callback",
  ey = "block_selectors",
  ty = "block_url_regexes",
  ny = "capture_extra_attrs",
  ry = "capture_text_content",
  oy = "scroll_capture_all",
  iy = "scroll_depth_percent_checkpoints",
  ay = "click",
  sy = "dead_click",
  ly = "input",
  cy = "pageview",
  uy = "rage_click",
  dy = "scroll",
  py = "page_leave",
  fy = "submit",
  hy = {};
(hy[Zg] = []),
  (hy[Qg] = []),
  (hy[Jg] = []),
  (hy[Xg] = null),
  (hy[ey] = []),
  (hy[ty] = []),
  (hy[ny] = []),
  (hy[ry] = !1),
  (hy[oy] = !1),
  (hy[iy] = [25, 50, 75, 100]),
  (hy[ay] = !0),
  (hy[sy] = !0),
  (hy[ly] = !0),
  (hy[cy] = Kg),
  (hy[uy] = !0),
  (hy[dy] = !0),
  (hy[py] = !1),
  (hy[fy] = !0);
var my = { $mp_autocapture: !0 },
  gy = "$mp_click",
  yy = "$mp_dead_click",
  vy = "$mp_rage_click",
  by = function (e) {
    (this.mp = e),
      (this.maxScrollViewDepth = 0),
      (this.hasTrackedScrollSession = !1),
      (this.previousScrollHeight = 0);
  };
(by.prototype.init = function () {
  !(function () {
    try {
      return !!hh.createElement("div").matches;
    } catch (e) {
      return !1;
    }
  })()
    ? Vm.critical("Autocapture unavailable: missing required DOM APIs")
    : (this.initPageListeners(),
      this.initPageviewTracking(),
      this.initClickTracking(),
      this.initDeadClickTracking(),
      this.initInputTracking(),
      this.initScrollTracking(),
      this.initSubmitTracking(),
      this.initRageClickTracking(),
      this.initPageLeaveTracking());
}),
  (by.prototype.getFullConfig = function () {
    var e = this.mp.get_config(Yg);
    return e ? (Eh.isObject(e) ? Eh.extend({}, hy, e) : hy) : {};
  }),
  (by.prototype.getConfig = function (e) {
    return this.getFullConfig()[e];
  }),
  (by.prototype.currentUrlBlocked = function () {
    var e = Eh.info.currentUrl(),
      t = this.getConfig(Qg) || [];
    if (t.length)
      try {
        return !Wh(e, t);
      } catch (e) {
        return Vm.critical("Error while checking block URL regexes: ", e), !0;
      }
    var n = this.getConfig(ty) || [];
    if (!n || !n.length) return !1;
    try {
      return Wh(e, n);
    } catch (e) {
      return Vm.critical("Error while checking block URL regexes: ", e), !0;
    }
  }),
  (by.prototype.pageviewTrackingConfig = function () {
    return this.mp.get_config(Yg)
      ? this.getConfig(cy)
      : this.mp.get_config("track_pageview");
  }),
  (by.prototype.trackDomEvent = function (e, t) {
    if (!this.currentUrlBlocked()) {
      var n =
          this.mp.is_recording_heatmap_data() &&
          ((t === gy && !this.getConfig(ay)) ||
            (t === vy && !this._getClickTrackingConfig(uy)) ||
            (t === yy && !this._getClickTrackingConfig(sy))),
        o = (function (e, t) {
          var n = t.allowElementCallback,
            o = t.allowSelectors || [],
            i = t.blockAttrs || [],
            a = t.blockElementCallback,
            s = t.blockSelectors || [],
            l = t.captureTextContent || !1,
            c = t.captureExtraAttrs || [],
            u = t.capturedForHeatMap || !1,
            d = {};
          Eh.each(i, function (e) {
            d[e] = !0;
          });
          var p = null,
            f = void 0 === e.target ? e.srcElement : e.target;
          if (
            (Xm(f) && (f = f.parentNode),
            (function (e, t) {
              if (!e || Jm(e, "html") || !Qm(e)) return !1;
              switch (e.tagName.toLowerCase()) {
                case "form":
                  return t.type === Mm;
                case "input":
                  return -1 ===
                    ["button", "submit"].indexOf(e.getAttribute("type"))
                    ? t.type === Em
                    : t.type === Tm;
                case "select":
                case "textarea":
                  return t.type === Em;
                default:
                  return t.type === Tm;
              }
            })(f, e) &&
              Km(f, e, n, o) &&
              !Zm(f, e, a, s))
          ) {
            for (var h = [f], m = f; m.parentNode && !Jm(m, "body"); )
              h.push(m.parentNode), (m = m.parentNode);
            var g,
              y = [],
              v = !1;
            if (
              (Eh.each(
                h,
                function (t) {
                  var r = tg(t, e, n, o);
                  d.href ||
                    "a" !== t.tagName.toLowerCase() ||
                    ((g = t.getAttribute("href")), (g = r && ng(g) && g)),
                    Zm(t, e, a, s) && (v = !0),
                    y.push($m(t, e, d, c, n, o));
                },
                this,
              ),
              !v)
            ) {
              var b = hh.documentElement;
              if (
                ((p = {
                  $event_type: e.type,
                  $host: r.location.host,
                  $pathname: r.location.pathname,
                  $elements: y,
                  $el_attr__href: g,
                  $viewportHeight: Math.max(b.clientHeight, r.innerHeight || 0),
                  $viewportWidth: Math.max(b.clientWidth, r.innerWidth || 0),
                  $pageHeight: hh.body.offsetHeight || 0,
                  $pageWidth: hh.body.offsetWidth || 0,
                }),
                Eh.each(c, function (e) {
                  if (!d[e] && f.hasAttribute(e)) {
                    var t = f.getAttribute(e);
                    ng(t) && (p["$el_attr__" + e] = t);
                  }
                }),
                l && (S = Ym(f, e, n, o)) && S.length && (p.$el_text = S),
                e.type === Tm &&
                  (Eh.each(Nm, function (t) {
                    t in e && (p["$" + t] = e[t]);
                  }),
                  u && (p.$captured_for_heatmap = !0),
                  (f = (function (e) {
                    for (
                      var t = e.target, n = e.composedPath(), r = 0;
                      r < n.length;
                      r++
                    ) {
                      var o = n[r];
                      if (
                        Jm(o, "a") ||
                        Jm(o, "button") ||
                        Jm(o, "input") ||
                        Jm(o, "select") ||
                        (o.getAttribute && "button" === o.getAttribute("role"))
                      ) {
                        t = o;
                        break;
                      }
                      if (o === t) break;
                    }
                    return t;
                  })(e))),
                l)
              ) {
                var S = Ym(f, e, n, o);
                S && S.length && (p.$el_text = S);
              }
              if (f) {
                if (!Km(f, e, n, o) || Zm(f, e, a, s)) return null;
                var _ = $m(f, e, d, c, n, o);
                (p.$target = _),
                  (p.$el_classes = _.$classes),
                  Eh.extend(
                    p,
                    Eh.strip_empty_properties({
                      $el_id: _.$id,
                      $el_tag_name: _.$tag_name,
                    }),
                  );
              }
            }
          }
          return p;
        })(e, {
          allowElementCallback: this.getConfig("allow_element_callback"),
          allowSelectors: this.getConfig(Zg),
          blockAttrs: this.getConfig(Jg),
          blockElementCallback: this.getConfig(Xg),
          blockSelectors: this.getConfig(ey),
          captureExtraAttrs: this.getConfig(ny),
          captureTextContent: this.getConfig(ry),
          capturedForHeatMap: n,
        });
      o && (Eh.extend(o, my), this.mp.track(t, o));
    }
  }),
  (by.prototype.initPageListeners = function () {
    if (
      (r.removeEventListener(Am, this.listenerPopstate),
      r.removeEventListener(km, this.listenerHashchange),
      this.pageviewTrackingConfig() ||
        this.getConfig(py) ||
        this.mp.get_config("record_heatmap_data"))
    ) {
      (this.listenerPopstate = function () {
        r.dispatchEvent(new Event(Im));
      }),
        (this.listenerHashchange = function () {
          r.dispatchEvent(new Event(Im));
        }),
        r.addEventListener(Am, this.listenerPopstate),
        r.addEventListener(km, this.listenerHashchange);
      var e = r.history.pushState;
      "function" == typeof e &&
        (r.history.pushState = function (t, n, o) {
          e.call(r.history, t, n, o), r.dispatchEvent(new Event(Im));
        });
      var t = r.history.replaceState;
      "function" == typeof t &&
        (r.history.replaceState = function (e, n, o) {
          t.call(r.history, e, n, o), r.dispatchEvent(new Event(Im));
        });
    }
  }),
  (by.prototype._getClickTrackingConfig = function (e) {
    var t = this.getConfig(e);
    return t ? (!0 === t ? {} : "object" == typeof t ? t : {}) : null;
  }),
  (by.prototype._trackPageLeave = function (e, t, n) {
    if (
      !this.hasTrackedScrollSession &&
      (this.getConfig(py) || this.mp.is_recording_heatmap_data())
    ) {
      this.hasTrackedScrollSession = !0;
      var o = Math.max(hh.documentElement.clientHeight, r.innerHeight || 0),
        i = Math.round(
          (Math.max(this.maxScrollViewDepth - o, 0) / (n - o)) * 100,
        ),
        a = Math.round((o / n) * 100);
      n <= o && ((i = 100), (a = 100));
      var s = Eh.extend(
        {
          $max_scroll_view_depth: this.maxScrollViewDepth,
          $max_scroll_percentage: i,
          $fold_line_percentage: a,
          $scroll_height: n,
          $event_type: e.type,
          $current_url: t || Eh.info.currentUrl(),
          $viewportHeight: o,
          $viewportWidth: Math.max(
            hh.documentElement.clientWidth,
            r.innerWidth || 0,
          ),
          $captured_for_heatmap: this.mp.is_recording_heatmap_data(),
        },
        my,
      );
      this.mp.track("$mp_page_leave", s, { transport: "sendBeacon" });
    }
  }),
  (by.prototype._initScrollDepthTracking = function () {
    if (
      (r.removeEventListener(Rm, this.listenerScrollDepth),
      r.removeEventListener(Om, this.listenerScrollDepth),
      this.mp.get_config("record_heatmap_data"))
    ) {
      Vm.log("Initializing scroll depth tracking"),
        (this.maxScrollViewDepth = Math.max(
          hh.documentElement.clientHeight,
          r.innerHeight || 0,
        ));
      var e = rg(
        function () {
          if (!this.currentUrlBlocked()) {
            var e =
              Math.max(hh.documentElement.clientHeight, r.innerHeight || 0) +
              r.scrollY;
            e > this.maxScrollViewDepth && (this.maxScrollViewDepth = e),
              (this.previousScrollHeight = hh.body.scrollHeight);
          }
        }.bind(this),
      );
      (this.listenerScrollDepth = e.listener),
        r.addEventListener(e.eventType, this.listenerScrollDepth);
    }
  }),
  (by.prototype.initClickTracking = function () {
    r.removeEventListener(Tm, this.listenerClick, !0),
      (this.getConfig(ay) || this.mp.get_config("record_heatmap_data")) &&
        (Vm.log("Initializing click tracking"),
        (this.listenerClick = function (e) {
          (this.getConfig(ay) || this.mp.is_recording_heatmap_data()) &&
            this.trackDomEvent(e, gy);
        }.bind(this)),
        r.addEventListener(Tm, this.listenerClick, !0));
  }),
  (by.prototype.initDeadClickTracking = function () {
    this._getClickTrackingConfig(sy) ||
    this.mp.get_config("record_heatmap_data")
      ? (Vm.log("Initializing dead click tracking"),
        this._deadClickTracker ||
          ((this._deadClickTracker = new $g(
            function (e) {
              this.trackDomEvent(e, yy);
            }.bind(this),
          )),
          this._deadClickTracker.startTracking()),
        this.listenerDeadClick ||
          ((this.listenerDeadClick = function (e) {
            var t = this._getClickTrackingConfig(sy);
            if (
              (t || this.mp.is_recording_heatmap_data()) &&
              !this.currentUrlBlocked()
            ) {
              var n = t || {};
              n.timeout_ms || (n.timeout_ms = 500),
                this._deadClickTracker.trackClick(e, n);
            }
          }.bind(this)),
          r.addEventListener(Tm, this.listenerDeadClick, !0)))
      : this.stopDeadClickTracking();
  }),
  (by.prototype.initInputTracking = function () {
    r.removeEventListener(Em, this.listenerChange, !0),
      this.getConfig(ly) &&
        (Vm.log("Initializing input tracking"),
        (this.listenerChange = function (e) {
          this.getConfig(ly) && this.trackDomEvent(e, "$mp_input_change");
        }.bind(this)),
        r.addEventListener(Em, this.listenerChange, !0));
  }),
  (by.prototype.initPageviewTracking = function () {
    if (
      (r.removeEventListener(Im, this.listenerLocationchange),
      this.pageviewTrackingConfig() ||
        this.mp.get_config("record_heatmap_data"))
    ) {
      Vm.log("Initializing pageview tracking");
      var e = "",
        t = !1;
      (!this.pageviewTrackingConfig() &&
        !this.mp.is_recording_heatmap_data()) ||
        this.currentUrlBlocked() ||
        (t = this.mp.track_pageview(my)),
        t && (e = Eh.info.currentUrl()),
        (this.listenerLocationchange = Ih(
          function () {
            if (!this.currentUrlBlocked()) {
              var t = Eh.info.currentUrl(),
                n = !1,
                r =
                  t.split("#")[0].split("?")[0] !==
                  e.split("#")[0].split("?")[0],
                o = this.pageviewTrackingConfig();
              !o && this.mp.is_recording_heatmap_data() && (o = Kg),
                o === Kg
                  ? (n = t !== e)
                  : "url-with-path-and-query-string" === o
                    ? (n = t.split("#")[0] !== e.split("#")[0])
                    : "url-with-path" === o && (n = r),
                n &&
                  (this.mp.track_pageview(my) && (e = t),
                  r &&
                    ((this.lastScrollCheckpoint = 0),
                    Vm.log(
                      "Path change: re-initializing scroll depth checkpoints",
                    )));
            }
          }.bind(this),
        )),
        r.addEventListener(Im, this.listenerLocationchange);
    }
  }),
  (by.prototype.initRageClickTracking = function () {
    r.removeEventListener(Tm, this.listenerRageClick, !0),
      (this._getClickTrackingConfig(uy) ||
        this.mp.get_config("record_heatmap_data")) &&
        (Vm.log("Initializing rage click tracking"),
        this._rageClickTracker || (this._rageClickTracker = new zg()),
        (this.listenerRageClick = function (e) {
          var t = this._getClickTrackingConfig(uy);
          (t || this.mp.is_recording_heatmap_data()) &&
            (this.currentUrlBlocked() ||
              (this._rageClickTracker.isRageClick(e, t) &&
                this.trackDomEvent(e, vy)));
        }.bind(this)),
        r.addEventListener(Tm, this.listenerRageClick, !0));
  }),
  (by.prototype.initScrollTracking = function () {
    if (
      (r.removeEventListener(Om, this.listenerScroll),
      r.removeEventListener(Rm, this.listenerScroll),
      this.getConfig(dy))
    ) {
      Vm.log("Initializing scroll tracking"), (this.lastScrollCheckpoint = 0);
      var e = rg(
        function () {
          if (this.getConfig(dy) && !this.currentUrlBlocked()) {
            var e = this.getConfig(oy),
              t = (this.getConfig(iy) || []).slice().sort(function (e, t) {
                return e - t;
              }),
              n = r.scrollY,
              o = Eh.extend({ $scroll_top: n }, my);
            try {
              var i = hh.body.scrollHeight,
                a = Math.round((n / (i - r.innerHeight)) * 100);
              if (
                ((o.$scroll_height = i),
                (o.$scroll_percentage = a),
                a > this.lastScrollCheckpoint)
              )
                for (var s = 0; s < t.length; s++) {
                  var l = t[s];
                  a >= l &&
                    this.lastScrollCheckpoint < l &&
                    ((o.$scroll_checkpoint = l),
                    (this.lastScrollCheckpoint = l),
                    (e = !0));
                }
            } catch (e) {
              Vm.critical("Error while calculating scroll percentage", e);
            }
            e && this.mp.track("$mp_scroll", o);
          }
        }.bind(this),
      );
      (this.listenerScroll = e.listener),
        r.addEventListener(e.eventType, this.listenerScroll);
    }
  }),
  (by.prototype.initSubmitTracking = function () {
    r.removeEventListener(Mm, this.listenerSubmit, !0),
      this.getConfig(fy) &&
        (Vm.log("Initializing submit tracking"),
        (this.listenerSubmit = function (e) {
          this.getConfig(fy) && this.trackDomEvent(e, "$mp_submit");
        }.bind(this)),
        r.addEventListener(Mm, this.listenerSubmit, !0));
  }),
  (by.prototype.initPageLeaveTracking = function () {
    if (
      (hh.removeEventListener(Pm, this.listenerPageLeaveVisibilitychange),
      r.removeEventListener(Im, this.listenerPageLeaveLocationchange),
      r.removeEventListener(Cm, this.listenerPageLoad),
      this.getConfig(py) || this.mp.get_config("record_heatmap_data"))
    ) {
      Vm.log("Initializing page visibility tracking."),
        this._initScrollDepthTracking();
      var e = Eh.info.currentUrl();
      (this.listenerPageLoad = function () {
        this.previousScrollHeight = hh.body.scrollHeight;
      }.bind(this)),
        r.addEventListener(Cm, this.listenerPageLoad),
        (this.listenerPageLeaveLocationchange = Ih(
          function (t) {
            if (!this.currentUrlBlocked()) {
              var n = Eh.info.currentUrl();
              n !== e &&
                (this._trackPageLeave(t, e, this.previousScrollHeight),
                (e = n),
                (this.maxScrollViewDepth = Math.max(
                  hh.documentElement.clientHeight,
                  r.innerHeight || 0,
                )),
                (this.previousScrollHeight = hh.body.scrollHeight),
                (this.hasTrackedScrollSession = !1));
            }
          }.bind(this),
        )),
        r.addEventListener(Im, this.listenerPageLeaveLocationchange),
        (this.listenerPageLeaveVisibilitychange = function (t) {
          hh.hidden && this._trackPageLeave(t, e, this.previousScrollHeight);
        }.bind(this)),
        hh.addEventListener(Pm, this.listenerPageLeaveVisibilitychange);
    }
  }),
  (by.prototype.stopDeadClickTracking = function () {
    this.listenerDeadClick &&
      (r.removeEventListener(Tm, this.listenerDeadClick, !0),
      (this.listenerDeadClick = null)),
      this._deadClickTracker &&
        (this._deadClickTracker.stopTracking(),
        (this._deadClickTracker = null));
  }),
  Ah(by);
var Sy = function (e, t) {
    return (
      (r[a] && "function" == typeof r[a].then) ||
        (r[a] = new Promise(function (n) {
          e(t, n);
        })
          .then(function () {
            var e = r[a];
            if (e && "function" == typeof e.then) return e;
            throw new Error("targeting failed to load");
          })
          .catch(function (e) {
            throw (delete r[a], e);
          })),
      r[a]
    );
  },
  _y = Ch("flags"),
  xy = "mixpanelFlags",
  wy = { version: 1, storeNames: [xy] },
  Ey = 864e5,
  Ty = Object.freeze({
    NETWORK_ONLY: "networkOnly",
    NETWORK_FIRST: "networkFirst",
    PERSISTENCE_UNTIL_NETWORK_SUCCESS: "persistenceUntilNetworkSuccess",
  }),
  ky = [
    Ty.NETWORK_ONLY,
    Ty.NETWORK_FIRST,
    Ty.PERSISTENCE_UNTIL_NETWORK_SUCCESS,
  ],
  Cy = function (e, t, n) {
    (this.idb = new Kh("mixpanelFlagsDb", xy, wy)),
      (this.persistenceConfig = e),
      (this.persistedVariantsKey = "persisted_variants_for_" + t),
      (this.isGloballyDisabled =
        n ||
        function () {
          return !1;
        });
  };
(Cy.prototype.getPolicy = function () {
  return this.isGloballyDisabled() || !this._isConfigValid()
    ? Ty.NETWORK_ONLY
    : this.persistenceConfig.variantLookupPolicy;
}),
  (Cy.prototype.getTtlMs = function () {
    return this._isConfigValid()
      ? (this.persistenceConfig.persistenceTtlMs ?? Ey)
      : Ey;
  }),
  (Cy.prototype._isConfigValid = function () {
    var e = this.persistenceConfig;
    return !(
      !e ||
      (-1 === ky.indexOf(e.variantLookupPolicy)
        ? (_y.error("Invalid variantLookupPolicy:", e.variantLookupPolicy), 1)
        : void 0 !== e.persistenceTtlMs &&
          null !== e.persistenceTtlMs &&
          e.persistenceTtlMs <= 0 &&
          (_y.error(
            "If provided, persistenceTtlMs must be a positive number. Provided value:",
            e.persistenceTtlMs,
          ),
          1))
    );
  }),
  (Cy.prototype.loadFlagsFromStorage = function (e) {
    var t = Eh.bind(function () {
      return this.clear()
        .then(function () {
          return null;
        })
        .catch(function () {
          return null;
        });
    }, this);
    if (this.getPolicy() === Ty.NETWORK_ONLY) return t();
    var n = this.getTtlMs();
    return this.idb
      .init()
      .then(
        Eh.bind(function () {
          return this.idb.getItem(this.persistedVariantsKey);
        }, this),
      )
      .then(
        Eh.bind(function (r) {
          if (!r)
            return _y.log("No persisted variants found in IndexedDB"), null;
          if (n && Date.now() - r.persistedAt >= n)
            return _y.log("Persisted variants are expiring"), null;
          if (!e || r.distinctId !== e.distinct_id)
            return (
              _y.log(
                "Persisted variants found, but for a different distinct_id so clearing.",
              ),
              t()
            );
          var o = new Map();
          return (
            Eh.each(r.flagVariants, function (e, t) {
              o.set(t, {
                key: e.variant_key,
                value: e.variant_value,
                experiment_id: e.experiment_id,
                is_experiment_active: e.is_experiment_active,
                is_qa_tester: e.is_qa_tester,
                variant_source: "persistence",
                persisted_at_in_ms: r.persistedAt,
                ttl_in_ms: n,
              });
            }),
            _y.log(
              "Loaded",
              o.size,
              "variants from IndexedDB for distinct_id",
              r.distinctId,
            ),
            {
              flags: o,
              pendingFirstTimeEvents: r.pendingFirstTimeEvents || {},
              persistedAtMs: r.persistedAt,
              ttlMs: n,
            }
          );
        }, this),
      )
      .catch(
        Eh.bind(function (e) {
          return (
            _y.error(
              "Failed to load persisted variants from IndexedDB, so clearing",
              e,
            ),
            t()
          );
        }, this),
      );
  }),
  (Cy.prototype.save = function (e, t, n) {
    if (this.getPolicy() === Ty.NETWORK_ONLY) return Promise.resolve();
    var r = {};
    t.forEach(function (e, t) {
      r[t] = {
        variant_key: e.key,
        variant_value: e.value,
        experiment_id: e.experiment_id,
        is_experiment_active: e.is_experiment_active,
        is_qa_tester: e.is_qa_tester,
      };
    });
    var o = {
      persistedAt: Date.now(),
      distinctId: e && e.distinct_id,
      context: e,
      flagVariants: r,
      pendingFirstTimeEvents: n || {},
    };
    return this.idb
      .init()
      .then(
        Eh.bind(function () {
          return this.idb.setItem(this.persistedVariantsKey, o);
        }, this),
      )
      .then(function () {
        _y.log(
          "Saved",
          t.size,
          "variants to IndexedDB for distinct_id",
          o.distinctId,
        );
      })
      .catch(function (e) {
        _y.error("Failed to persist variants to IndexedDB:", e);
      });
  }),
  (Cy.prototype.clear = function () {
    return this.isGloballyDisabled()
      ? Promise.resolve()
      : this.idb
          .init()
          .then(
            Eh.bind(function () {
              return this.idb.removeItem(this.persistedVariantsKey);
            }, this),
          )
          .then(function () {
            _y.log("Cleared persisted variants from IndexedDB");
          })
          .catch(function (e) {
            _y.error("Failed to clear persisted variants from IndexedDB:", e);
          });
  });
var Iy = Ch("flags"),
  Ay = "flags",
  Oy = "context",
  Ry = {};
Ry[Oy] = {};
var My = function (e) {
    return Eh.isObject(e)
      ? Eh.extend({}, e, { variant_source: "fallback" })
      : { value: e, variant_source: "fallback" };
  },
  Py = function (e) {
    (this.fetch = r.fetch),
      (this.getFullApiRoute = e.getFullApiRoute),
      (this.getMpConfig = e.getConfigFunc),
      (this.setMpConfig = e.setConfigFunc),
      (this.getMpProperty = e.getPropertyFunc),
      (this.track = e.trackingFunc),
      (this.loadExtraBundle = e.loadExtraBundle || function () {}),
      (this.targetingSrc = e.targetingSrc || "");
  };
function Ny(e) {
  return null != e;
}
(Py.prototype.init = function () {
  if (this.minApisSupported())
    return (
      (this.flags = null),
      (this.trackedFeatures = new Set()),
      (this.pendingFirstTimeEvents = {}),
      (this.activatedFirstTimeEvents = {}),
      (this._loadedPersistedAtMs = null),
      (this._loadedTtlMs = null),
      (this.persistence = new Cy(
        this.getConfig("persistence"),
        this.getMpConfig("token"),
        Eh.bind(function () {
          return this.getMpConfig("disable_persistence");
        }, this),
      )),
      (this.persistenceLoadedPromise = this.persistence
        .loadFlagsFromStorage(this._buildContext())
        .then(
          Eh.bind(function (e) {
            e &&
              ((this.flags = e.flags),
              (this.pendingFirstTimeEvents = e.pendingFirstTimeEvents),
              (this._loadedPersistedAtMs = e.persistedAtMs),
              (this._loadedTtlMs = e.ttlMs));
          }, this),
        )),
      this.persistenceLoadedPromise
        .then(
          Eh.bind(function () {
            return this.fetchFlags();
          }, this),
        )
        .catch(function () {
          Iy.error("Error initializing feature flags");
        })
    );
  Iy.critical("Feature Flags unavailable: missing minimum required APIs");
}),
  (Py.prototype._buildContext = function () {
    return Eh.extend(
      {
        distinct_id: this.getMpProperty("distinct_id"),
        device_id: this.getMpProperty("$device_id"),
      },
      this.getConfig(Oy),
    );
  }),
  (Py.prototype.reset = function () {
    return this.persistence
      ? ((this.flags = null),
        (this.pendingFirstTimeEvents = {}),
        (this.activatedFirstTimeEvents = {}),
        (this.trackedFeatures = new Set()),
        (this.fetchPromise = null),
        (this._fetchInProgressStartTime = null),
        (this._loadedPersistedAtMs = null),
        (this._loadedTtlMs = null),
        this.persistence
          .clear()
          .then(
            Eh.bind(function () {
              return this.fetchFlags();
            }, this),
          )
          .catch(function () {
            Iy.error("Error during flags reset");
          }))
      : Promise.resolve();
  }),
  (Py.prototype.getFullConfig = function () {
    var e = this.getMpConfig(Ay);
    return e ? (Eh.isObject(e) ? Eh.extend({}, Ry, e) : Ry) : {};
  }),
  (Py.prototype.getConfig = function (e) {
    return this.getFullConfig()[e];
  }),
  (Py.prototype.isSystemEnabled = function () {
    return !!this.getMpConfig(Ay);
  }),
  (Py.prototype.updateContext = function (e, t) {
    if (!this.isSystemEnabled())
      return (
        Iy.critical("Feature Flags not enabled, cannot update context"),
        Promise.resolve()
      );
    var n = this.getMpConfig(Ay);
    Eh.isObject(n) || (n = {});
    var r = t && t.replace ? {} : this.getConfig(Oy);
    n[Oy] = Eh.extend({}, r, e);
    var o = {};
    return (
      (o[Ay] = n),
      this.setMpConfig(o),
      this.fetchFlags().catch(function () {
        Iy.error("Error fetching flags during updateContext");
      })
    );
  }),
  (Py.prototype.areFlagsReady = function () {
    return (
      this.isSystemEnabled() || Iy.error("Feature Flags not enabled"),
      !!this.flags
    );
  }),
  (Py.prototype.fetchFlags = function () {
    if (!this.isSystemEnabled()) return Promise.resolve();
    var e = this._buildContext(),
      t = e.distinct_id,
      n = zh();
    Iy.log("Fetching flags for distinct ID: " + t);
    var o = new URLSearchParams();
    o.set("context", JSON.stringify(e)),
      o.set("token", this.getMpConfig("token")),
      o.set("mp_lib", "web"),
      o.set("$lib_version", i.LIB_VERSION);
    var a = this.getFullApiRoute() + "?" + o.toString();
    return (
      (this._fetchInProgressStartTime = Date.now()),
      (this.fetchPromise = this.fetch
        .call(r, a, {
          method: "GET",
          headers: {
            Authorization: "Basic " + btoa(this.getMpConfig("token") + ":"),
            traceparent: n,
          },
        })
        .then(
          function (e) {
            return this.markFetchComplete(), e.json();
          }.bind(this),
        )
        .then(
          function (t) {
            var r = t.flags;
            if (!r) throw new Error("No flags in API response");
            var o = new Map(),
              i = {};
            Eh.each(
              r,
              function (e, t) {
                var n = !1,
                  r = t + ":";
                if (
                  (Eh.each(this.activatedFirstTimeEvents, function (e, t) {
                    t.startsWith(r) && (n = !0);
                  }),
                  n)
                ) {
                  var i = this.flags && this.flags.get(t);
                  i && o.set(t, i);
                } else
                  o.set(t, {
                    key: e.variant_key,
                    value: e.variant_value,
                    experiment_id: e.experiment_id,
                    is_experiment_active: e.is_experiment_active,
                    is_qa_tester: e.is_qa_tester,
                    variant_source: "network",
                  });
              },
              this,
            );
            var a = t.pending_first_time_events;
            a &&
              a.length > 0 &&
              Eh.each(
                a,
                function (e) {
                  var t = e.flag_key,
                    n = (function (e, t) {
                      return e + ":" + t;
                    })(t, e.first_time_event_hash);
                  this.activatedFirstTimeEvents[n] ||
                    (i[n] = {
                      flag_key: t,
                      flag_id: e.flag_id,
                      project_id: e.project_id,
                      first_time_event_hash: e.first_time_event_hash,
                      event_name: e.event_name,
                      property_filters: e.property_filters,
                      pending_variant: e.pending_variant,
                    });
                },
                this,
              ),
              this.activatedFirstTimeEvents &&
                Eh.each(
                  this.activatedFirstTimeEvents,
                  function (e, t) {
                    var n = (function (e) {
                      return e.split(":")[0];
                    })(t);
                    e &&
                      !o.has(n) &&
                      this.flags &&
                      this.flags.has(n) &&
                      o.set(n, this.flags.get(n));
                  },
                  this,
                ),
              (this.flags = o),
              (this.trackedFeatures = new Set()),
              (this.pendingFirstTimeEvents = i),
              (this._loadedPersistedAtMs = null),
              (this._loadedTtlMs = null),
              (this._traceparent = n),
              this._loadTargetingIfNeeded(),
              this.persistence.save(e, this.flags, this.pendingFirstTimeEvents);
          }.bind(this),
        )
        .catch(
          function (e) {
            throw (
              (this._fetchInProgressStartTime && this.markFetchComplete(),
              Iy.error(e),
              e)
            );
          }.bind(this),
        )),
      this.fetchPromise
    );
  }),
  (Py.prototype.loadFlags = function () {
    return this.isSystemEnabled()
      ? this.trackedFeatures
        ? this._fetchInProgressStartTime
          ? this.fetchPromise
          : this.fetchFlags()
        : (Iy.error("loadFlags called before init"), Promise.resolve())
      : Promise.resolve();
  }),
  (Py.prototype.markFetchComplete = function () {
    this._fetchInProgressStartTime
      ? ((this._fetchStartTime = this._fetchInProgressStartTime),
        (this._fetchCompleteTime = Date.now()),
        (this._fetchLatency = this._fetchCompleteTime - this._fetchStartTime),
        (this._fetchInProgressStartTime = null))
      : Iy.error(
          "Fetch in progress started time not set, cannot mark fetch complete",
        );
  }),
  (Py.prototype._loadTargetingIfNeeded = function () {
    var e = !1;
    Eh.each(this.pendingFirstTimeEvents, function (t) {
      t.property_filters && !Eh.isEmptyObject(t.property_filters) && (e = !0);
    }),
      e &&
        this.getTargeting().then(function () {
          Iy.log("targeting loaded for property filter evaluation");
        });
  }),
  (Py.prototype.getTargeting = function () {
    return Sy(this.loadExtraBundle.bind(this), this.targetingSrc).catch(
      function (e) {
        Iy.error("Failed to load targeting: " + e);
      }.bind(this),
    );
  }),
  (Py.prototype.checkFirstTimeEvents = function (e, t) {
    this.pendingFirstTimeEvents &&
      !Eh.isEmptyObject(this.pendingFirstTimeEvents) &&
      (r[a] && Eh.isFunction(r[a].then)
        ? r[a]
            .then(
              function (n) {
                this._processFirstTimeEventCheck(e, t, n);
              }.bind(this),
            )
            .catch(
              function () {
                this._processFirstTimeEventCheck(e, t, null);
              }.bind(this),
            )
        : this._processFirstTimeEventCheck(e, t, null));
  }),
  (Py.prototype._processFirstTimeEventCheck = function (e, t, n) {
    Eh.each(
      this.pendingFirstTimeEvents,
      function (r, o) {
        if (!this.activatedFirstTimeEvents[o]) {
          var i,
            a = r.flag_key;
          if (
            n ||
            !r.property_filters ||
            Eh.isEmptyObject(r.property_filters)
          ) {
            if (n) {
              var s = {
                event_name: r.event_name,
                property_filters: r.property_filters,
              };
              i = n.eventMatchesCriteria(e, t, s);
            } else i = { matches: e === r.event_name, error: null };
            if (i.error)
              Iy.error(
                'Error checking first-time event for flag "' +
                  a +
                  '": ' +
                  i.error,
              );
            else if (i.matches) {
              Iy.log('First-time event matched for flag "' + a + '": ' + e);
              var l = {
                key: r.pending_variant.variant_key,
                value: r.pending_variant.variant_value,
                experiment_id: r.pending_variant.experiment_id,
                is_experiment_active: r.pending_variant.is_experiment_active,
              };
              this.flags.set(a, l),
                this.trackedFeatures.delete(a),
                (this.activatedFirstTimeEvents[o] = !0),
                this.recordFirstTimeEvent(
                  r.flag_id,
                  r.project_id,
                  r.first_time_event_hash,
                );
            }
          } else
            Iy.warn(
              'Skipping event check for "' +
                a +
                '" - property filters require targeting library',
            );
        }
      },
      this,
    );
  }),
  (Py.prototype.getFirstTimeEventApiRoute = function (e) {
    return (
      this.getFullApiRoute().replace(/\/$/, "") + "/" + e + "/first-time-events"
    );
  }),
  (Py.prototype.recordFirstTimeEvent = function (e, t, n) {
    var o = this.getMpProperty("distinct_id"),
      a = zh(),
      s = new URLSearchParams();
    s.set("mp_lib", "web"), s.set("$lib_version", i.LIB_VERSION);
    var l = this.getFirstTimeEventApiRoute(e) + "?" + s.toString(),
      c = { distinct_id: o, project_id: t, first_time_event_hash: n };
    Iy.log("Recording first-time event for flag: " + e),
      this.fetch
        .call(r, l, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(this.getMpConfig("token") + ":"),
            traceparent: a,
          },
          body: JSON.stringify(c),
        })
        .catch(function (t) {
          Iy.error(
            "Failed to record first-time event for flag " + e + ": " + t,
          );
        });
  }),
  (Py.prototype.getVariant = function (e, t) {
    if (!this.persistenceLoadedPromise)
      return new Promise(function (e) {
        Iy.critical("Feature Flags not initialized"), e(My(t));
      });
    var n = this.persistence.getPolicy();
    return this.persistenceLoadedPromise.then(
      Eh.bind(function () {
        if (n === Ty.PERSISTENCE_UNTIL_NETWORK_SUCCESS)
          return this.areFlagsReady() && !this._loadedPersistenceIsStale()
            ? this.getVariantSync(e, t)
            : this.fetchPromise
              ? this.fetchPromise
                  .then(
                    Eh.bind(function () {
                      return this.getVariantSync(e, t);
                    }, this),
                  )
                  .catch(function (e) {
                    return Iy.error(e), My(t);
                  })
              : My(t);
        var r = Eh.bind(function () {
          return this.getVariantSync(e, t);
        }, this);
        return this.fetchPromise ? this.fetchPromise.then(r).catch(r) : My(t);
      }, this),
    );
  }),
  (Py.prototype._loadedPersistenceIsStale = function () {
    return (
      !(!this._loadedPersistedAtMs || !this._loadedTtlMs) &&
      Date.now() - this._loadedPersistedAtMs >= this._loadedTtlMs
    );
  }),
  (Py.prototype.getVariantSync = function (e, t) {
    if (this._loadedPersistenceIsStale())
      return (
        Iy.log(
          'Loaded persisted variants are past TTL so returning fallback for "' +
            e +
            '"',
        ),
        My(t)
      );
    if (!this.areFlagsReady()) return Iy.log("Flags not loaded yet"), My(t);
    var n = this.flags.get(e);
    return n
      ? (this.trackFeatureCheck(e, n), n)
      : (Iy.log('No flag found: "' + e + '"'), My(t));
  }),
  (Py.prototype.getAllVariants = function () {
    if (!this.persistenceLoadedPromise)
      return (
        Iy.critical("Feature Flags not initialized"), Promise.resolve(new Map())
      );
    var e = this.persistence.getPolicy();
    return this.persistenceLoadedPromise.then(
      Eh.bind(function () {
        if (e === Ty.PERSISTENCE_UNTIL_NETWORK_SUCCESS)
          return this.areFlagsReady() && !this._loadedPersistenceIsStale()
            ? this.getAllVariantsSync()
            : this.fetchPromise
              ? this.fetchPromise
                  .then(
                    Eh.bind(function () {
                      return this.getAllVariantsSync();
                    }, this),
                  )
                  .catch(function (e) {
                    return Iy.error(e), new Map();
                  })
              : new Map();
        var t = Eh.bind(this.getAllVariantsSync, this);
        return this.fetchPromise
          ? this.fetchPromise.then(t).catch(t)
          : new Map();
      }, this),
    );
  }),
  (Py.prototype.getAllVariantsSync = function () {
    return this._loadedPersistenceIsStale()
      ? (Iy.log(
          "Loaded persisted variants are past TTL so returning empty Map",
        ),
        new Map())
      : this.flags || new Map();
  }),
  (Py.prototype.getVariantValue = function (e, t) {
    return this.getVariant(e, { value: t })
      .then(function (e) {
        return e.value;
      })
      .catch(function (e) {
        return Iy.error(e), t;
      });
  }),
  (Py.prototype.getFeatureData = function (e, t) {
    return (
      Iy.critical(
        "mixpanel.flags.get_feature_data() is deprecated and will be removed in a future release. Use mixpanel.flags.get_variant_value() instead.",
      ),
      this.getVariantValue(e, t)
    );
  }),
  (Py.prototype.getVariantValueSync = function (e, t) {
    return this.getVariantSync(e, { value: t }).value;
  }),
  (Py.prototype.isEnabled = function (e, t) {
    return this.getVariantValue(e)
      .then(
        function () {
          return this.isEnabledSync(e, t);
        }.bind(this),
      )
      .catch(function (e) {
        return Iy.error(e), t;
      });
  }),
  (Py.prototype.isEnabledSync = function (e, t) {
    t = t || !1;
    var n = this.getVariantValueSync(e, t);
    return (
      !0 !== n &&
        !1 !== n &&
        (Iy.error(
          'Feature flag "' +
            e +
            '" value: ' +
            n +
            " is not a boolean; returning fallback value: " +
            t,
        ),
        (n = t)),
      n
    );
  }),
  (Py.prototype.trackFeatureCheck = function (e, t) {
    if (!this.trackedFeatures.has(e)) {
      this.trackedFeatures.add(e);
      var n = {
        "Experiment name": e,
        "Variant name": t.key,
        $experiment_type: "feature_flag",
        "Variant fetch start time": Ny(this._fetchStartTime)
          ? new Date(this._fetchStartTime).toISOString()
          : null,
        "Variant fetch complete time": Ny(this._fetchCompleteTime)
          ? new Date(this._fetchCompleteTime).toISOString()
          : null,
        "Variant fetch latency (ms)": this._fetchLatency,
        "Variant fetch traceparent": this._traceparent,
      };
      Ny(t.experiment_id) && (n.$experiment_id = t.experiment_id),
        Ny(t.is_experiment_active) &&
          (n.$is_experiment_active = t.is_experiment_active),
        Ny(t.is_qa_tester) && (n.$is_qa_tester = t.is_qa_tester),
        Ny(t.variant_source) && (n.$variant_source = t.variant_source),
        Ny(t.persisted_at_in_ms) &&
          (n.$persisted_at_in_ms = t.persisted_at_in_ms),
        Ny(t.ttl_in_ms) && (n.$ttl_in_ms = t.ttl_in_ms),
        this.track("$experiment_started", n);
    }
  }),
  (Py.prototype.whenReady = function () {
    return this.fetchPromise ? this.fetchPromise : Promise.resolve();
  }),
  (Py.prototype.minApisSupported = function () {
    return (
      !!this.fetch &&
      "undefined" != typeof Promise &&
      "undefined" != typeof Map &&
      "undefined" != typeof Set
    );
  }),
  Ah(Py),
  (Py.prototype.are_flags_ready = Py.prototype.areFlagsReady),
  (Py.prototype.get_variant = Py.prototype.getVariant),
  (Py.prototype.get_variant_sync = Py.prototype.getVariantSync),
  (Py.prototype.get_all_variants = Py.prototype.getAllVariants),
  (Py.prototype.get_all_variants_sync = Py.prototype.getAllVariantsSync),
  (Py.prototype.get_variant_value = Py.prototype.getVariantValue),
  (Py.prototype.get_variant_value_sync = Py.prototype.getVariantValueSync),
  (Py.prototype.is_enabled = Py.prototype.isEnabled),
  (Py.prototype.is_enabled_sync = Py.prototype.isEnabledSync),
  (Py.prototype.load_flags = Py.prototype.loadFlags),
  (Py.prototype.update_context = Py.prototype.updateContext),
  (Py.prototype.when_ready = Py.prototype.whenReady),
  (Py.prototype.get_feature_data = Py.prototype.getFeatureData),
  (Py.prototype.getTargeting = Py.prototype.getTargeting);
var Dy = Ch("recorder"),
  jy = "mp_iframe_handshake_request",
  Ly = "mp_iframe_handshake_response",
  Fy = function (e) {
    (this.mixpanelInstance = e.mixpanelInstance),
      (this.getMpConfig = e.getConfigFunc),
      (this.getTabId = e.getTabIdFunc),
      (this.reportError = e.reportErrorFunc),
      (this.getDistinctId = e.getDistinctIdFunc),
      (this.loadExtraBundle = e.loadExtraBundle),
      (this.recorderSrc = e.recorderSrc),
      (this.targetingSrc = e.targetingSrc),
      (this.libBasePath = e.libBasePath),
      (this._recorder = null),
      (this._parentReplayId = null),
      (this._parentFrameRetryInterval = null);
  };
(Fy.prototype.shouldLoadRecorder = function () {
  if (this.getMpConfig("disable_persistence"))
    return (
      Th.log("Load recorder check skipped due to disable_persistence config"),
      $f.resolve(!1)
    );
  var e = new Kh(Zh, Jh, Xh),
    t = this.getTabId();
  return e
    .init()
    .then(function () {
      return e.getAll();
    })
    .then(function (e) {
      for (var n = 0; n < e.length; n++)
        if (xm(e[n]) || e[n].tabId === t) return !0;
      return !1;
    })
    .catch(
      Eh.bind(function (e) {
        return this.reportError("Error checking recording registry", e), !1;
      }, this),
    );
}),
  (Fy.prototype.checkAndStartSessionRecording = function (e, t) {
    if (!r.MutationObserver)
      return (
        Th.critical(
          "Browser does not support MutationObserver; skipping session recording",
        ),
        $f.resolve()
      );
    var n = Eh.bind(function (e) {
        return new $f(
          Eh.bind(function (t) {
            var n = Ih(
              Eh.bind(function () {
                (this._recorder =
                  this._recorder || new r[s](this.mixpanelInstance)),
                  this._recorder.resumeRecording(e),
                  t();
              }, this),
            );
            if (Eh.isUndefined(r[s])) {
              var o =
                this.recorderSrc ||
                this.libBasePath + "__MP_RECORDER_FILENAME__";
              this.loadExtraBundle(o, n);
            } else n();
          }, this),
        );
      }, this),
      o = wm(this.getMpConfig("record_allowed_iframe_origins"), Dy);
    if (o.length > 0 && (this._setupParentFrameListener(o), r.parent !== r))
      return (
        this._setupChildFrameListener(o, n),
        this._sendParentFrameRequestWithRetry(o),
        $f.resolve()
      );
    var i = Eh.isUndefined(t) ? this.getMpConfig("record_sessions_percent") : t,
      a = i > 0 && 100 * Math.random() <= i;
    return e || a
      ? n(!0)
      : this.shouldLoadRecorder().then(
          Eh.bind(function (e) {
            return e ? n(!1) : $f.resolve();
          }, this),
        );
  }),
  (Fy.prototype.isRecording = function () {
    if (!this._recorder || !Eh.isFunction(this._recorder.isRecording))
      return !1;
    try {
      return this._recorder.isRecording();
    } catch (e) {
      return this.reportError("Error checking if recording is active", e), !1;
    }
  }),
  (Fy.prototype.startRecordingOnEvent = function (e, t) {
    var n = this.isRecording(),
      r = this.getMpConfig("recording_event_triggers");
    if (!n && r) {
      var o = r[e];
      if (o && "number" == typeof o.percentage) {
        var i = o.percentage,
          a = o.property_filters;
        if (a && !Eh.isEmptyObject(a)) {
          var s = this.targetingSrc || this.libBasePath + l;
          Sy(this.loadExtraBundle, s)
            .then(
              function (n) {
                try {
                  n.eventMatchesCriteria(e, t, {
                    event_name: e,
                    property_filters: a,
                  }).matches && this.checkAndStartSessionRecording(!1, i);
                } catch (e) {
                  Th.critical(
                    "Could not parse recording event trigger properties logic:",
                    e,
                  );
                }
              }.bind(this),
            )
            .catch(function (e) {
              Th.critical("Failed to load targeting library:", e);
            });
        } else this.checkAndStartSessionRecording(!1, i);
      }
    }
  }),
  (Fy.prototype.stopSessionRecording = function () {
    return this._recorder ? this._recorder.stopRecording() : $f.resolve();
  }),
  (Fy.prototype.pauseSessionRecording = function () {
    return this._recorder ? this._recorder.pauseRecording() : $f.resolve();
  }),
  (Fy.prototype.resumeSessionRecording = function () {
    return this._recorder ? this._recorder.resumeRecording() : $f.resolve();
  }),
  (Fy.prototype.isRecordingHeatmapData = function () {
    return this.getSessionReplayId() && this.getMpConfig("record_heatmap_data");
  }),
  (Fy.prototype.getSessionRecordingProperties = function () {
    var e = {},
      t = this.getSessionReplayId();
    return t && (e.$mp_replay_id = t), e;
  }),
  (Fy.prototype.getSessionReplayUrl = function () {
    var e = null,
      t = this.getSessionReplayId();
    return (
      t &&
        (e =
          "https://mixpanel.com/projects/replay-redirect?" +
          Eh.HTTPBuildQuery({
            replay_id: t,
            distinct_id: this.getDistinctId(),
            token: this.getMpConfig("token"),
          })),
      e
    );
  }),
  (Fy.prototype.getSessionReplayId = function () {
    if (this._parentReplayId) return this._parentReplayId;
    var e = null;
    return this._recorder && (e = this._recorder.replayId), e || null;
  }),
  (Fy.prototype.getRecorder = function () {
    return this._recorder;
  }),
  (Fy.prototype._setupChildFrameListener = function (e, t) {
    if (!this._childFrameMessageHandler) {
      var n = this;
      (this._childFrameMessageHandler = function (o) {
        if (-1 !== e.indexOf(o.origin)) {
          var i = o.data;
          i &&
            i.type === Ly &&
            i.token === n.getMpConfig("token") &&
            i.replayId &&
            ((n._parentReplayId = i.replayId),
            i.distinctId && n.mixpanelInstance.identify(i.distinctId),
            (n._parentFrameRetryActive = !1),
            r.removeEventListener("message", n._childFrameMessageHandler),
            (n._childFrameMessageHandler = null),
            t(!0));
        }
      }),
        r.addEventListener("message", this._childFrameMessageHandler);
    }
  }),
  (Fy.prototype._sendParentFrameRequest = function (e) {
    var t = {};
    (t.type = jy), (t.token = this.getMpConfig("token"));
    for (var n = 0; n < e.length; n++)
      try {
        r.parent.postMessage(t, e[n]);
      } catch (e) {}
  }),
  (Fy.prototype._sendParentFrameRequestWithRetry = function (e) {
    var t = this,
      n = 0,
      r = 50;
    (this._parentFrameRetryActive = !0),
      this._sendParentFrameRequest(e),
      (function o() {
        setTimeout(function () {
          !t._parentFrameRetryActive ||
            t._parentReplayId ||
            ++n >= 10 ||
            (t._sendParentFrameRequest(e), (r *= 2), o());
        }, r);
      })();
  }),
  (Fy.prototype._setupParentFrameListener = function (e) {
    if (!this._parentFrameMessageHandler) {
      var t = this;
      (this._parentFrameMessageHandler = function (n) {
        if (-1 !== e.indexOf(n.origin)) {
          var r = n.data;
          if (r && r.type === jy && r.token === t.getMpConfig("token")) {
            var o = t.getSessionReplayId();
            if (o) {
              var i = {};
              (i.type = Ly),
                (i.token = t.getMpConfig("token")),
                (i.replayId = o),
                (i.distinctId = t.getDistinctId()),
                n.source.postMessage(i, n.origin);
            }
          }
        }
      }),
        r.addEventListener("message", this._parentFrameMessageHandler);
    }
  }),
  Ah(Fy);
var Uy = function () {};
(Uy.prototype.create_properties = function () {}),
  (Uy.prototype.event_handler = function () {}),
  (Uy.prototype.after_track_handler = function () {}),
  (Uy.prototype.init = function (e) {
    return (this.mp = e), this;
  }),
  (Uy.prototype.track = function (e, t, n, r) {
    var o = this,
      i = Eh.dom_query(e);
    if (0 !== i.length)
      return (
        Eh.each(
          i,
          function (e) {
            Eh.register_event(e, this.override_event, function (e) {
              var i = {},
                a = o.create_properties(n, this),
                s = o.mp.get_config("track_links_timeout");
              o.event_handler(e, this, i),
                window.setTimeout(o.track_callback(r, a, i, !0), s),
                o.mp.track(t, a, o.track_callback(r, a, i));
            });
          },
          this,
        ),
        !0
      );
    Th.error("The DOM query (" + e + ") returned 0 elements");
  }),
  (Uy.prototype.track_callback = function (e, t, n, r) {
    r = r || !1;
    var o = this;
    return function () {
      n.callback_fired ||
        ((n.callback_fired = !0),
        (e && !1 === e(r, t)) || o.after_track_handler(t, n, r));
    };
  }),
  (Uy.prototype.create_properties = function (e, t) {
    return "function" == typeof e ? e(t) : Eh.extend({}, e);
  });
var By = function () {
  this.override_event = "click";
};
Eh.inherit(By, Uy),
  (By.prototype.create_properties = function (e, t) {
    var n = By.superclass.create_properties.apply(this, arguments);
    return t.href && (n.url = t.href), n;
  }),
  (By.prototype.event_handler = function (e, t, n) {
    (n.new_tab =
      2 === e.which || e.metaKey || e.ctrlKey || "_blank" === t.target),
      (n.href = t.href),
      n.new_tab || e.preventDefault();
  }),
  (By.prototype.after_track_handler = function (e, t) {
    t.new_tab ||
      setTimeout(function () {
        window.location = t.href;
      }, 0);
  });
var zy = function () {
  this.override_event = "submit";
};
Eh.inherit(zy, Uy),
  (zy.prototype.event_handler = function (e, t, n) {
    (n.element = t), e.preventDefault();
  }),
  (zy.prototype.after_track_handler = function (e, t) {
    setTimeout(function () {
      t.element.submit();
    }, 0);
  });
var Hy = "$set",
  Vy = "$set_once",
  qy = "$unset",
  Gy = "$add",
  Wy = "$append",
  $y = "$union",
  Yy = "$remove",
  Ky = {
    set_action: function (e, t) {
      var n = {},
        r = {};
      return (
        Eh.isObject(e)
          ? Eh.each(
              e,
              function (e, t) {
                this._is_reserved_property(t) || (r[t] = e);
              },
              this,
            )
          : (r[e] = t),
        (n[Hy] = r),
        n
      );
    },
    unset_action: function (e) {
      var t = {},
        n = [];
      return (
        Eh.isArray(e) || (e = [e]),
        Eh.each(
          e,
          function (e) {
            this._is_reserved_property(e) || n.push(e);
          },
          this,
        ),
        (t[qy] = n),
        t
      );
    },
    set_once_action: function (e, t) {
      var n = {},
        r = {};
      return (
        Eh.isObject(e)
          ? Eh.each(
              e,
              function (e, t) {
                this._is_reserved_property(t) || (r[t] = e);
              },
              this,
            )
          : (r[e] = t),
        (n[Vy] = r),
        n
      );
    },
    union_action: function (e, t) {
      var n = {},
        r = {};
      return (
        Eh.isObject(e)
          ? Eh.each(
              e,
              function (e, t) {
                this._is_reserved_property(t) ||
                  (r[t] = Eh.isArray(e) ? e : [e]);
              },
              this,
            )
          : (r[e] = Eh.isArray(t) ? t : [t]),
        (n[$y] = r),
        n
      );
    },
    append_action: function (e, t) {
      var n = {},
        r = {};
      return (
        Eh.isObject(e)
          ? Eh.each(
              e,
              function (e, t) {
                this._is_reserved_property(t) || (r[t] = e);
              },
              this,
            )
          : (r[e] = t),
        (n[Wy] = r),
        n
      );
    },
    remove_action: function (e, t) {
      var n = {},
        r = {};
      return (
        Eh.isObject(e)
          ? Eh.each(
              e,
              function (e, t) {
                this._is_reserved_property(t) || (r[t] = e);
              },
              this,
            )
          : (r[e] = t),
        (n[Yy] = r),
        n
      );
    },
    delete_action: function () {
      return { $delete: "" };
    },
  },
  Zy = function () {};
Eh.extend(Zy.prototype, Ky),
  (Zy.prototype._init = function (e, t, n) {
    (this._mixpanel = e), (this._group_key = t), (this._group_id = n);
  }),
  (Zy.prototype.set = am(function (e, t, n) {
    var r = this.set_action(e, t);
    return Eh.isObject(e) && (n = t), this._send_request(r, n);
  })),
  (Zy.prototype.set_once = am(function (e, t, n) {
    var r = this.set_once_action(e, t);
    return Eh.isObject(e) && (n = t), this._send_request(r, n);
  })),
  (Zy.prototype.unset = am(function (e, t) {
    var n = this.unset_action(e);
    return this._send_request(n, t);
  })),
  (Zy.prototype.union = am(function (e, t, n) {
    Eh.isObject(e) && (n = t);
    var r = this.union_action(e, t);
    return this._send_request(r, n);
  })),
  (Zy.prototype.delete = am(function (e) {
    var t = this.delete_action();
    return this._send_request(t, e);
  })),
  (Zy.prototype.remove = am(function (e, t, n) {
    var r = this.remove_action(e, t);
    return this._send_request(r, n);
  })),
  (Zy.prototype._send_request = function (e, t) {
    (e.$group_key = this._group_key),
      (e.$group_id = this._group_id),
      (e.$token = this._get_config("token"));
    var n = Eh.encodeDates(e);
    return this._mixpanel._track_or_batch(
      {
        type: "groups",
        data: n,
        endpoint:
          this._mixpanel.get_api_host("groups") +
          "/" +
          this._get_config("api_routes").groups,
        batcher: this._mixpanel.request_batchers.groups,
      },
      t,
    );
  }),
  (Zy.prototype._is_reserved_property = function (e) {
    return "$group_key" === e || "$group_id" === e;
  }),
  (Zy.prototype._get_config = function (e) {
    return this._mixpanel.get_config(e);
  }),
  (Zy.prototype.toString = function () {
    return (
      this._mixpanel.toString() +
      ".group." +
      this._group_key +
      "." +
      this._group_id
    );
  }),
  (Zy.prototype.remove = Zy.prototype.remove),
  (Zy.prototype.set = Zy.prototype.set),
  (Zy.prototype.set_once = Zy.prototype.set_once),
  (Zy.prototype.union = Zy.prototype.union),
  (Zy.prototype.unset = Zy.prototype.unset),
  (Zy.prototype.toString = Zy.prototype.toString);
var Qy = function () {};
Eh.extend(Qy.prototype, Ky),
  (Qy.prototype._init = function (e) {
    this._mixpanel = e;
  }),
  (Qy.prototype.set = im(function (e, t, n) {
    var r = this.set_action(e, t);
    return (
      Eh.isObject(e) && (n = t),
      this._get_config("save_referrer") &&
        this._mixpanel.persistence.update_referrer_info(document.referrer),
      (r[Hy] = Eh.extend({}, Eh.info.people_properties(), r[Hy])),
      this._send_request(r, n)
    );
  })),
  (Qy.prototype.set_once = im(function (e, t, n) {
    var r = this.set_once_action(e, t);
    return Eh.isObject(e) && (n = t), this._send_request(r, n);
  })),
  (Qy.prototype.unset = im(function (e, t) {
    var n = this.unset_action(e);
    return this._send_request(n, t);
  })),
  (Qy.prototype.increment = im(function (e, t, n) {
    var r = {},
      o = {};
    return (
      Eh.isObject(e)
        ? (Eh.each(
            e,
            function (e, t) {
              if (!this._is_reserved_property(t)) {
                if (isNaN(parseFloat(e)))
                  return void Th.error(
                    "Invalid increment value passed to mixpanel.people.increment - must be a number",
                  );
                o[t] = e;
              }
            },
            this,
          ),
          (n = t))
        : (Eh.isUndefined(t) && (t = 1), (o[e] = t)),
      (r[Gy] = o),
      this._send_request(r, n)
    );
  })),
  (Qy.prototype.append = im(function (e, t, n) {
    Eh.isObject(e) && (n = t);
    var r = this.append_action(e, t);
    return this._send_request(r, n);
  })),
  (Qy.prototype.remove = im(function (e, t, n) {
    Eh.isObject(e) && (n = t);
    var r = this.remove_action(e, t);
    return this._send_request(r, n);
  })),
  (Qy.prototype.union = im(function (e, t, n) {
    Eh.isObject(e) && (n = t);
    var r = this.union_action(e, t);
    return this._send_request(r, n);
  })),
  (Qy.prototype.track_charge = im(function () {
    Th.error(
      "mixpanel.people.track_charge() is deprecated and no longer has any effect.",
    );
  })),
  (Qy.prototype.clear_charges = function (e) {
    return this.set("$transactions", [], e);
  }),
  (Qy.prototype.delete_user = function () {
    if (this._identify_called()) {
      var e = { $delete: this._mixpanel.get_distinct_id() };
      return this._send_request(e);
    }
    Th.error(
      "mixpanel.people.delete_user() requires you to call identify() first",
    );
  }),
  (Qy.prototype.toString = function () {
    return this._mixpanel.toString() + ".people";
  }),
  (Qy.prototype._send_request = function (e, t) {
    (e.$token = this._get_config("token")),
      (e.$distinct_id = this._mixpanel.get_distinct_id());
    var n = this._mixpanel.get_property("$device_id"),
      r = this._mixpanel.get_property("$user_id"),
      o = this._mixpanel.get_property("$had_persisted_distinct_id");
    n && (e.$device_id = n),
      r && (e.$user_id = r),
      o && (e.$had_persisted_distinct_id = o);
    var i = Eh.encodeDates(e);
    return this._identify_called()
      ? this._mixpanel._track_or_batch(
          {
            type: "people",
            data: i,
            endpoint:
              this._mixpanel.get_api_host("people") +
              "/" +
              this._get_config("api_routes").engage,
            batcher: this._mixpanel.request_batchers.people,
          },
          t,
        )
      : (this._enqueue(e),
        Eh.isUndefined(t) ||
          (this._get_config("verbose")
            ? t({ status: -1, error: null })
            : t(-1)),
        Eh.truncate(i, 255));
  }),
  (Qy.prototype._get_config = function (e) {
    return this._mixpanel.get_config(e);
  }),
  (Qy.prototype._identify_called = function () {
    return !0 === this._mixpanel._flags.identify_called;
  }),
  (Qy.prototype._enqueue = function (e) {
    Hy in e
      ? this._mixpanel.persistence._add_to_people_queue(Hy, e)
      : Vy in e
        ? this._mixpanel.persistence._add_to_people_queue(Vy, e)
        : qy in e
          ? this._mixpanel.persistence._add_to_people_queue(qy, e)
          : Gy in e
            ? this._mixpanel.persistence._add_to_people_queue(Gy, e)
            : Wy in e
              ? this._mixpanel.persistence._add_to_people_queue(Wy, e)
              : Yy in e
                ? this._mixpanel.persistence._add_to_people_queue(Yy, e)
                : $y in e
                  ? this._mixpanel.persistence._add_to_people_queue($y, e)
                  : Th.error("Invalid call to _enqueue():", e);
  }),
  (Qy.prototype._flush_one_queue = function (e, t, n, r) {
    var o = this,
      i = Eh.extend({}, this._mixpanel.persistence.load_queue(e)),
      a = i;
    Eh.isUndefined(i) ||
      !Eh.isObject(i) ||
      Eh.isEmptyObject(i) ||
      (o._mixpanel.persistence._pop_from_people_queue(e, i),
      o._mixpanel.persistence.save(),
      r && (a = r(i)),
      t.call(o, a, function (t, r) {
        0 === t && o._mixpanel.persistence._add_to_people_queue(e, i),
          Eh.isUndefined(n) || n(t, r);
      }));
  }),
  (Qy.prototype._flush = function (e, t, n, r, o, i, a) {
    var s = this;
    this._flush_one_queue(Hy, this.set, e),
      this._flush_one_queue(Vy, this.set_once, r),
      this._flush_one_queue(qy, this.unset, i, function (e) {
        return Eh.keys(e);
      }),
      this._flush_one_queue(Gy, this.increment, t),
      this._flush_one_queue($y, this.union, o);
    var l = this._mixpanel.persistence.load_queue(Wy);
    if (!Eh.isUndefined(l) && Eh.isArray(l) && l.length)
      for (
        var c,
          u = function (e, t) {
            0 === e && s._mixpanel.persistence._add_to_people_queue(Wy, c),
              Eh.isUndefined(n) || n(e, t);
          },
          d = l.length - 1;
        d >= 0;
        d--
      )
        (l = this._mixpanel.persistence.load_queue(Wy)),
          (c = l.pop()),
          s._mixpanel.persistence.save(),
          Eh.isEmptyObject(c) || s.append(c, u);
    var p = this._mixpanel.persistence.load_queue(Yy);
    if (!Eh.isUndefined(p) && Eh.isArray(p) && p.length)
      for (
        var f,
          h = function (e, t) {
            0 === e && s._mixpanel.persistence._add_to_people_queue(Yy, f),
              Eh.isUndefined(a) || a(e, t);
          },
          m = p.length - 1;
        m >= 0;
        m--
      )
        (p = this._mixpanel.persistence.load_queue(Yy)),
          (f = p.pop()),
          s._mixpanel.persistence.save(),
          Eh.isEmptyObject(f) || s.remove(f, h);
  }),
  (Qy.prototype._is_reserved_property = function (e) {
    return (
      "$distinct_id" === e ||
      "$token" === e ||
      "$device_id" === e ||
      "$user_id" === e ||
      "$had_persisted_distinct_id" === e
    );
  }),
  (Qy.prototype.set = Qy.prototype.set),
  (Qy.prototype.set_once = Qy.prototype.set_once),
  (Qy.prototype.unset = Qy.prototype.unset),
  (Qy.prototype.increment = Qy.prototype.increment),
  (Qy.prototype.append = Qy.prototype.append),
  (Qy.prototype.remove = Qy.prototype.remove),
  (Qy.prototype.union = Qy.prototype.union),
  (Qy.prototype.track_charge = Qy.prototype.track_charge),
  (Qy.prototype.clear_charges = Qy.prototype.clear_charges),
  (Qy.prototype.delete_user = Qy.prototype.delete_user),
  (Qy.prototype.toString = Qy.prototype.toString);
var Jy,
  Xy = "__mps",
  ev = "__mpso",
  tv = "__mpus",
  nv = "__mpa",
  rv = "__mpap",
  ov = "__mpr",
  iv = "__mpu",
  av = "$people_distinct_id",
  sv = "__alias",
  lv = "__timers",
  cv = [Xy, ev, tv, nv, rv, ov, iv, av, sv, lv],
  uv = function (e) {
    (this.props = {}),
      (this.campaign_params_saved = !1),
      e.persistence_name
        ? (this.name = "mp_" + e.persistence_name)
        : (this.name = "mp_" + e.token + "_mixpanel");
    var t = e.persistence;
    "cookie" !== t &&
      "localStorage" !== t &&
      (Th.critical(
        "Unknown persistence type " + t + "; falling back to cookie",
      ),
      (t = e.persistence = "cookie")),
      "localStorage" === t && Eh.localStorage.is_supported()
        ? (this.storage = Eh.localStorage)
        : (this.storage = Eh.cookie),
      this.load(),
      this.update_config(e),
      this.upgrade(),
      this.save();
  };
(uv.prototype.properties = function () {
  var e = {};
  return (
    this.load(),
    Eh.each(this.props, function (t, n) {
      Eh.include(cv, n) || (e[n] = t);
    }),
    e
  );
}),
  (uv.prototype.load = function () {
    if (!this.disabled) {
      var e = this.storage.parse(this.name);
      e && (this.props = Eh.extend({}, e));
    }
  }),
  (uv.prototype.upgrade = function () {
    var e, t;
    this.storage === Eh.localStorage
      ? ((e = Eh.cookie.parse(this.name)),
        Eh.cookie.remove(this.name),
        Eh.cookie.remove(this.name, !0),
        e && this.register_once(e))
      : this.storage === Eh.cookie &&
        ((t = Eh.localStorage.parse(this.name)),
        Eh.localStorage.remove(this.name),
        t && this.register_once(t));
  }),
  (uv.prototype.save = function () {
    this.disabled ||
      this.storage.set(
        this.name,
        $h(this.props),
        this.expire_days,
        this.cross_subdomain,
        this.secure,
        this.cross_site,
        this.cookie_domain,
      );
  }),
  (uv.prototype.load_prop = function (e) {
    return this.load(), this.props[e];
  }),
  (uv.prototype.remove = function () {
    this.storage.remove(this.name, !1, this.cookie_domain),
      this.storage.remove(this.name, !0, this.cookie_domain);
  }),
  (uv.prototype.clear = function () {
    this.remove(), (this.props = {});
  }),
  (uv.prototype.register_once = function (e, t, n) {
    return (
      !!Eh.isObject(e) &&
      (void 0 === t && (t = "None"),
      (this.expire_days = void 0 === n ? this.default_expiry : n),
      this.load(),
      Eh.each(
        e,
        function (e, n) {
          (this.props.hasOwnProperty(n) && this.props[n] !== t) ||
            (this.props[n] = e);
        },
        this,
      ),
      this.save(),
      !0)
    );
  }),
  (uv.prototype.register = function (e, t) {
    return (
      !!Eh.isObject(e) &&
      ((this.expire_days = void 0 === t ? this.default_expiry : t),
      this.load(),
      Eh.extend(this.props, e),
      this.save(),
      !0)
    );
  }),
  (uv.prototype.unregister = function (e) {
    this.load(), e in this.props && (delete this.props[e], this.save());
  }),
  (uv.prototype.update_search_keyword = function (e) {
    this.register(Eh.info.searchInfo(e));
  }),
  (uv.prototype.update_referrer_info = function (e) {
    this.register_once(
      {
        $initial_referrer: e || "$direct",
        $initial_referring_domain: Eh.info.referringDomain(e) || "$direct",
      },
      "",
    );
  }),
  (uv.prototype.get_referrer_info = function () {
    return Eh.strip_empty_properties({
      $initial_referrer: this.props.$initial_referrer,
      $initial_referring_domain: this.props.$initial_referring_domain,
    });
  }),
  (uv.prototype.update_config = function (e) {
    (this.default_expiry = this.expire_days = e.cookie_expiration),
      this.set_disabled(e.disable_persistence),
      this.set_cookie_domain(e.cookie_domain),
      this.set_cross_site(e.cross_site_cookie),
      this.set_cross_subdomain(e.cross_subdomain_cookie),
      this.set_secure(e.secure_cookie);
  }),
  (uv.prototype.set_disabled = function (e) {
    (this.disabled = e), this.disabled ? this.remove() : this.save();
  }),
  (uv.prototype.set_cookie_domain = function (e) {
    e !== this.cookie_domain &&
      (this.remove(), (this.cookie_domain = e), this.save());
  }),
  (uv.prototype.set_cross_site = function (e) {
    e !== this.cross_site &&
      ((this.cross_site = e), this.remove(), this.save());
  }),
  (uv.prototype.set_cross_subdomain = function (e) {
    e !== this.cross_subdomain &&
      ((this.cross_subdomain = e), this.remove(), this.save());
  }),
  (uv.prototype.get_cross_subdomain = function () {
    return this.cross_subdomain;
  }),
  (uv.prototype.set_secure = function (e) {
    e !== this.secure && ((this.secure = !!e), this.remove(), this.save());
  }),
  (uv.prototype._add_to_people_queue = function (e, t) {
    var n = this._get_queue_key(e),
      r = t[e],
      o = this._get_or_create_queue(Hy),
      i = this._get_or_create_queue(Vy),
      a = this._get_or_create_queue(qy),
      s = this._get_or_create_queue(Gy),
      l = this._get_or_create_queue($y),
      c = this._get_or_create_queue(Yy, []),
      u = this._get_or_create_queue(Wy, []);
    n === Xy
      ? (Eh.extend(o, r),
        this._pop_from_people_queue(Gy, r),
        this._pop_from_people_queue($y, r),
        this._pop_from_people_queue(qy, r))
      : n === ev
        ? (Eh.each(r, function (e, t) {
            t in i || (i[t] = e);
          }),
          this._pop_from_people_queue(qy, r))
        : n === tv
          ? Eh.each(r, function (e) {
              Eh.each([o, i, s, l], function (t) {
                e in t && delete t[e];
              }),
                Eh.each(u, function (t) {
                  e in t && delete t[e];
                }),
                (a[e] = !0);
            })
          : n === nv
            ? (Eh.each(
                r,
                function (e, t) {
                  t in o ? (o[t] += e) : (t in s || (s[t] = 0), (s[t] += e));
                },
                this,
              ),
              this._pop_from_people_queue(qy, r))
            : n === iv
              ? (Eh.each(r, function (e, t) {
                  Eh.isArray(e) &&
                    (t in l || (l[t] = []),
                    Eh.each(e, function (e) {
                      Eh.include(l[t], e) || l[t].push(e);
                    }));
                }),
                this._pop_from_people_queue(qy, r))
              : n === ov
                ? (c.push(r), this._pop_from_people_queue(Wy, r))
                : n === rv && (u.push(r), this._pop_from_people_queue(qy, r)),
      Th.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"),
      Th.log(t),
      this.save();
  }),
  (uv.prototype._pop_from_people_queue = function (e, t) {
    var n = this.props[this._get_queue_key(e)];
    Eh.isUndefined(n) ||
      Eh.each(
        t,
        function (t, r) {
          e === Wy || e === Yy
            ? Eh.each(n, function (e) {
                e[r] === t && delete e[r];
              })
            : delete n[r];
        },
        this,
      );
  }),
  (uv.prototype.load_queue = function (e) {
    return this.load_prop(this._get_queue_key(e));
  }),
  (uv.prototype._get_queue_key = function (e) {
    return e === Hy
      ? Xy
      : e === Vy
        ? ev
        : e === qy
          ? tv
          : e === Gy
            ? nv
            : e === Wy
              ? rv
              : e === Yy
                ? ov
                : e === $y
                  ? iv
                  : void Th.error("Invalid queue:", e);
  }),
  (uv.prototype._get_or_create_queue = function (e, t) {
    var n = this._get_queue_key(e);
    return (
      (t = Eh.isUndefined(t) ? {} : t), this.props[n] || (this.props[n] = t)
    );
  }),
  (uv.prototype.set_event_timer = function (e, t) {
    var n = this.load_prop(lv) || {};
    (n[e] = t), (this.props[lv] = n), this.save();
  }),
  (uv.prototype.remove_event_timer = function (e) {
    var t = (this.load_prop(lv) || {})[e];
    return Eh.isUndefined(t) || (delete this.props[lv][e], this.save()), t;
  });
var dv,
  pv = function (e, t) {
    throw new Error(e + " not available in this build.");
  },
  fv = "mixpanel",
  hv = "base64",
  mv = "$device:",
  gv = r.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
  yv = !gv && -1 === yh.indexOf("MSIE") && -1 === yh.indexOf("Mozilla"),
  vv = null;
fh.sendBeacon &&
  (vv = function () {
    return fh.sendBeacon.apply(fh, arguments);
  });
var bv = {
    track: "track/",
    engage: "engage/",
    groups: "groups/",
    record: "record/",
    flags: "flags/",
    settings: "settings/",
  },
  Sv = {
    api_host: "https://api-js.mixpanel.com",
    api_hosts: {},
    api_routes: bv,
    api_extra_query_params: {},
    api_method: "POST",
    api_transport: "XHR",
    api_payload_format: hv,
    app_host: "https://mixpanel.com",
    autocapture: !1,
    cdn: "https://cdn.mxpnl.com",
    cross_site_cookie: !1,
    cross_subdomain_cookie: !0,
    error_reporter: Gh,
    flags: !1,
    persistence: "cookie",
    persistence_name: "",
    cookie_domain: "",
    cookie_name: "",
    loaded: Gh,
    mp_loader: null,
    track_marketing: !0,
    track_pageview: !1,
    skip_first_touch_marketing: !1,
    store_google: !0,
    stop_utm_persistence: !1,
    save_referrer: !0,
    test: !1,
    verbose: !1,
    img: !1,
    debug: !1,
    track_links_timeout: 300,
    cookie_expiration: 365,
    upgrade: !1,
    disable_persistence: !1,
    disable_cookie: !1,
    secure_cookie: !1,
    ip: !0,
    opt_out_tracking_by_default: !1,
    opt_out_persistence_by_default: !1,
    opt_out_tracking_persistence_type: "localStorage",
    opt_out_tracking_cookie_prefix: null,
    property_blacklist: [],
    xhr_headers: {},
    ignore_dnt: !1,
    batch_requests: !0,
    batch_size: 50,
    batch_flush_interval_ms: 5e3,
    batch_request_timeout_ms: 9e4,
    batch_autostart: !0,
    hooks: {},
    record_allowed_iframe_origins: [],
    record_block_class: new RegExp(
      "^(mp-block|fs-exclude|amp-block|rr-block|ph-no-capture)$",
    ),
    record_block_selector: "img, video, audio",
    record_canvas: !1,
    record_collect_fonts: !1,
    record_console: !0,
    record_heatmap_data: !1,
    recording_event_triggers: {},
    record_idle_timeout_ms: 18e5,
    record_mask_inputs: !0,
    record_max_ms: ih,
    record_min_ms: 0,
    record_network: !1,
    record_network_options: {},
    record_sessions_percent: 0,
    recorder_src: null,
    targeting_src: null,
    lib_base_path: "https://cdn.mxpnl.com/libs/",
    remote_settings_mode: "disabled",
  },
  _v = !1,
  xv = function () {},
  wv = function (e, t, n) {
    var o,
      a = n === fv ? dv : dv[n];
    if (a && 0 === Jy) o = a;
    else {
      if (a && !Eh.isArray(a))
        return void Th.error("You have already initialized " + n);
      o = new xv();
    }
    if (
      ((o._cached_groups = {}),
      o._init(e, t, n),
      (o.people = new Qy()),
      o.people._init(o),
      !o.get_config("skip_first_touch_marketing"))
    ) {
      var s = Eh.info.campaignParams(null),
        l = {},
        c = !1;
      Eh.each(s, function (e, t) {
        (l["initial_" + t] = e), e && (c = !0);
      }),
        c && o.people.set_once(l);
    }
    i.DEBUG = i.DEBUG || o.get_config("debug");
    var u = 0 === Jy ? "module" : "snippet";
    return (
      r.dispatchEvent(
        new r.CustomEvent("$mp_sdk_to_extension_event", {
          detail: {
            instance: o,
            source: u,
            token: e,
            name: n,
            info: Eh.info,
          },
        }),
      ),
      !Eh.isUndefined(a) &&
        Eh.isArray(a) &&
        (o._execute_array.call(o.people, a.people), o._execute_array(a)),
      o
    );
  };
(xv.prototype.init = function (e, t, n) {
  if (Eh.isUndefined(n))
    this.report_error(
      "You must name your new library: init(token, config, name)",
    );
  else {
    if (n !== fv) {
      var r = wv(e, t, n);
      return (dv[n] = r), r._loaded(), r;
    }
    this.report_error(
      "You must initialize the main mixpanel object right after you include the Mixpanel js snippet",
    );
  }
}),
  (xv.prototype._init = function (e, t, n) {
    (t = t || {}), (this.__loaded = !0), (this.config = {});
    var o = {};
    if (
      ("api_payload_format" in t ||
        ((t.api_host || Sv.api_host).match(/\.mixpanel\.com/) &&
          (o.api_payload_format = "json")),
      (this.hooks = {}),
      this.set_config(
        Eh.extend({}, Sv, o, t, {
          name: n,
          token: e,
          callback_fn: (n === fv ? n : fv + "." + n) + "._jsc",
        }),
      ),
      (this.recorderManager = new Fy({
        mixpanelInstance: this,
        getConfigFunc: Eh.bind(this.get_config, this),
        setConfigFunc: Eh.bind(this.set_config, this),
        getTabIdFunc: Eh.bind(this.get_tab_id, this),
        reportErrorFunc: Eh.bind(this.report_error, this),
        getDistinctIdFunc: Eh.bind(this.get_distinct_id, this),
        recorderSrc: this.get_config("recorder_src"),
        targetingSrc: this.get_config("targeting_src"),
        libBasePath: this.get_config("lib_base_path"),
        loadExtraBundle: pv,
      })),
      (this._jsc = Gh),
      (this.__dom_loaded_queue = []),
      (this.__request_queue = []),
      (this.__disabled_events = []),
      (this._flags = { disable_all_events: !1, identify_called: !1 }),
      (this._remote_settings_strict_disabled = !1),
      (this.request_batchers = {}),
      (this._batch_requests = this.get_config("batch_requests")),
      this._batch_requests)
    )
      if (Eh.localStorage.is_supported(!0) && gv) {
        if ((this.init_batchers(), vv && r.addEventListener)) {
          var i = Eh.bind(function () {
            this.request_batchers.events.stopped ||
              this.request_batchers.events.flush({ unloading: !0 });
          }, this);
          r.addEventListener("pagehide", function (e) {
            e.persisted && i();
          }),
            r.addEventListener("visibilitychange", function () {
              "hidden" === hh.visibilityState && i();
            });
        }
      } else
        (this._batch_requests = !1),
          Th.log(
            "Turning off Mixpanel request-queueing; needs XHR and localStorage support",
          ),
          Eh.each(this.get_batcher_configs(), function (e) {
            Th.log("Clearing batch queue " + e.queue_key),
              Eh.localStorage.remove(e.queue_key);
          });
    (this.persistence = this.cookie = new uv(this.config)),
      (this.unpersisted_superprops = {}),
      this._gdpr_init();
    var a = Eh.UUID();
    this.get_distinct_id() ||
      this.register_once({ distinct_id: mv + a, $device_id: a }, ""),
      (this.flags = new Py({
        getFullApiRoute: Eh.bind(function () {
          return (
            this.get_api_host("flags") +
            "/" +
            this.get_config("api_routes").flags
          );
        }, this),
        getConfigFunc: Eh.bind(this.get_config, this),
        setConfigFunc: Eh.bind(this.set_config, this),
        getPropertyFunc: Eh.bind(this.get_property, this),
        trackingFunc: Eh.bind(this.track, this),
        loadExtraBundle: pv,
        targetingSrc:
          this.get_config("targeting_src") ||
          this.get_config("lib_base_path") + l,
      })),
      this.flags.init(),
      (this.flags = this.flags),
      this._init_tab_id();
    var s = this.get_config("remote_settings_mode");
    (this.__session_recording_init_promise =
      "strict" === s || "fallback" === s
        ? this._fetch_remote_settings(s).then(
            Eh.bind(function () {
              return this._check_and_start_session_recording();
            }, this),
          )
        : this._check_and_start_session_recording()),
      (this.autocapture = new by(this)),
      this.autocapture.init();
  }),
  (xv.prototype._init_tab_id = function () {
    if (this.get_config("disable_persistence"))
      Th.log("Tab ID initialization skipped due to disable_persistence config");
    else if (Eh.sessionStorage.is_supported())
      try {
        var e = this.get_config("name") + "_" + this.get_config("token"),
          t = "mp_tab_id_" + e,
          n = "mp_gen_new_tab_id_" + e;
        (!Eh.sessionStorage.get(n) && Eh.sessionStorage.get(t)) ||
          Eh.sessionStorage.set(t, "$tab-" + Eh.UUID()),
          Eh.sessionStorage.set(n, "1"),
          (this.tab_id = Eh.sessionStorage.get(t)),
          r.addEventListener("beforeunload", function () {
            Eh.sessionStorage.remove(n);
          });
      } catch (e) {
        this.report_error("Error initializing tab id", e);
      }
    else
      this.report_error(
        "Session storage is not supported, cannot keep track of unique tab ID.",
      );
  }),
  (xv.prototype.get_tab_id = function () {
    return this.tab_id || null;
  }),
  (xv.prototype._check_and_start_session_recording = om(function (e) {
    return this.recorderManager.checkAndStartSessionRecording(e);
  })),
  (xv.prototype._start_recording_on_event = Ih(function (e, t) {
    this.__session_recording_init_promise &&
      this.__session_recording_init_promise.then(
        Eh.bind(function () {
          if (!this._remote_settings_strict_disabled)
            return this.recorderManager.startRecordingOnEvent(e, t);
        }, this),
      );
  })),
  (xv.prototype.start_session_recording = function () {
    return this._check_and_start_session_recording(!0);
  }),
  (xv.prototype.stop_session_recording = function () {
    return this.recorderManager.stopSessionRecording();
  }),
  (xv.prototype.pause_session_recording = function () {
    return this.recorderManager.pauseSessionRecording();
  }),
  (xv.prototype.resume_session_recording = function () {
    return this.recorderManager.resumeSessionRecording();
  }),
  (xv.prototype.is_recording_heatmap_data = function () {
    return this.recorderManager.isRecordingHeatmapData();
  }),
  (xv.prototype.get_session_recording_properties = function () {
    return this.recorderManager.getSessionRecordingProperties();
  }),
  (xv.prototype.get_session_replay_url = function () {
    return this.recorderManager.getSessionReplayUrl();
  }),
  (xv.prototype.__get_recorder = function () {
    return this.recorderManager.getRecorder();
  }),
  (xv.prototype.__get_recording_init_promise = function () {
    return this.__session_recording_init_promise;
  }),
  (xv.prototype._loaded = function () {
    if (
      (this.get_config("loaded")(this),
      this._set_default_superprops(),
      this.people.set_once(this.persistence.get_referrer_info()),
      this.get_config("store_google") &&
        this.get_config("stop_utm_persistence"))
    ) {
      var e = Eh.info.campaignParams(null);
      Eh.each(
        e,
        function (e, t) {
          this.unregister(t);
        }.bind(this),
      );
    }
  }),
  (xv.prototype._set_default_superprops = function () {
    this.persistence.update_search_keyword(hh.referrer),
      this.get_config("store_google") &&
        !this.get_config("stop_utm_persistence") &&
        this.register(Eh.info.campaignParams()),
      this.get_config("save_referrer") &&
        this.persistence.update_referrer_info(hh.referrer);
  }),
  (xv.prototype._dom_loaded = function () {
    Eh.each(
      this.__dom_loaded_queue,
      function (e) {
        this._track_dom.apply(this, e);
      },
      this,
    ),
      this.has_opted_out_tracking() ||
        Eh.each(
          this.__request_queue,
          function (e) {
            this._send_request.apply(this, e);
          },
          this,
        ),
      delete this.__dom_loaded_queue,
      delete this.__request_queue;
  }),
  (xv.prototype._track_dom = function (e, t) {
    if (this.get_config("img"))
      return (
        this.report_error(
          "You can't use DOM tracking functions with img = true.",
        ),
        !1
      );
    if (!_v) return this.__dom_loaded_queue.push([e, t]), !1;
    var n = new e().init(this);
    return n.track.apply(n, t);
  }),
  (xv.prototype._prepare_callback = function (e, t) {
    if (Eh.isUndefined(e)) return null;
    if (gv)
      return function (n) {
        e(n, t);
      };
    var n = this._jsc,
      r = "" + Math.floor(1e8 * Math.random()),
      o = this.get_config("callback_fn") + "[" + r + "]";
    return (
      (n[r] = function (o) {
        delete n[r], e(o, t);
      }),
      o
    );
  }),
  (xv.prototype._send_request = function (e, t, n, r) {
    var o = !0;
    if (yv) return this.__request_queue.push(arguments), o;
    var i = {
        method: this.get_config("api_method"),
        transport: this.get_config("api_transport"),
        verbose: this.get_config("verbose"),
      },
      a = null;
    r || (!Eh.isFunction(n) && "string" != typeof n) || ((r = n), (n = null)),
      (n = Eh.extend(i, n || {})),
      gv || (n.method = "GET");
    var s = "POST" === n.method,
      l = vv && s && "sendbeacon" === n.transport.toLowerCase(),
      c = n.verbose;
    t.verbose && (c = !0),
      this.get_config("test") && (t.test = 1),
      c && (t.verbose = 1),
      this.get_config("img") && (t.img = 1),
      gv ||
        (r
          ? (t.callback = r)
          : (c || this.get_config("test")) && (t.callback = "(function(){})")),
      (t.ip = this.get_config("ip") ? 1 : 0),
      (t._ = new Date().getTime().toString()),
      s && ((a = "data=" + encodeURIComponent(t.data)), delete t.data),
      Eh.extend(t, this.get_config("api_extra_query_params")),
      (e += "?" + Eh.HTTPBuildQuery(t));
    var u = this;
    if ("img" in t) {
      var d = hh.createElement("img");
      (d.src = e), hh.body.appendChild(d);
    } else if (l) {
      try {
        o = vv(e, a);
      } catch (e) {
        u.report_error(e), (o = !1);
      }
      try {
        r && r(o ? 1 : 0);
      } catch (e) {
        u.report_error(e);
      }
    } else if (gv)
      try {
        var p = new XMLHttpRequest();
        p.open(n.method, e, !0);
        var f = this.get_config("xhr_headers");
        if (
          (s && (f["Content-Type"] = "application/x-www-form-urlencoded"),
          Eh.each(f, function (e, t) {
            p.setRequestHeader(t, e);
          }),
          n.timeout_ms && void 0 !== p.timeout)
        ) {
          p.timeout = n.timeout_ms;
          var h = new Date().getTime();
        }
        (p.withCredentials = !0),
          (p.onreadystatechange = function () {
            var e;
            if (4 === p.readyState)
              if (200 === p.status) {
                if (r)
                  if (c) {
                    var t;
                    try {
                      t = Eh.JSONDecode(p.responseText);
                    } catch (e) {
                      if ((u.report_error(e), !n.ignore_json_errors)) return;
                      t = p.responseText;
                    }
                    r(t);
                  } else r(Number(p.responseText));
              } else if (
                ((e =
                  p.timeout &&
                  !p.status &&
                  new Date().getTime() - h >= p.timeout
                    ? "timeout"
                    : "Bad HTTP status: " + p.status + " " + p.statusText),
                u.report_error(e),
                r)
              )
                if (c) {
                  var o = p.responseHeaders || {};
                  r({
                    status: 0,
                    httpStatusCode: p.status,
                    error: e,
                    retryAfter: o["Retry-After"],
                  });
                } else r(0);
          }),
          p.send(a);
      } catch (e) {
        u.report_error(e), (o = !1);
      }
    else {
      var m = hh.createElement("script");
      (m.type = "text/javascript"), (m.async = !0), (m.defer = !0), (m.src = e);
      var g = hh.getElementsByTagName("script")[0];
      g.parentNode.insertBefore(m, g);
    }
    return o;
  }),
  (xv.prototype._fetch_remote_settings = function (e) {
    var t = this,
      n = function () {
        "strict" === e &&
          (t.set_config({ record_sessions_percent: 0 }),
          (t._remote_settings_strict_disabled = !0));
      };
    if (!r.AbortController)
      return (
        Th.critical(
          "Remote settings unavailable: missing minimum required APIs",
        ),
        n(),
        Promise.resolve()
      );
    var o =
        this.get_api_host("settings") +
        "/" +
        this.get_config("api_routes").settings,
      a = {
        $lib_version: i.LIB_VERSION,
        mp_lib: "web",
        sdk_config: "1",
      },
      s = o + "?" + Eh.HTTPBuildQuery(a),
      l = new AbortController(),
      c = setTimeout(function () {
        l.abort();
      }, 500),
      u = {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(t.get_config("token") + ":"),
        },
        signal: l.signal,
      };
    return r
      .fetch(s, u)
      .then(function (e) {
        return (
          clearTimeout(c),
          e.ok
            ? e.json()
            : (Th.critical("Network response was not ok"), void n())
        );
      })
      .then(function (e) {
        if (e && e.sdk_config && e.sdk_config.config) {
          var r = e.sdk_config.config,
            o = {};
          Eh.each(r, function (e, t) {
            Sv.hasOwnProperty(t) && (o[t] = e);
          }),
            Eh.isEmptyObject(o)
              ? (Th.critical("No valid config keys found in remote settings."),
                n())
              : t.set_config(o);
        } else n();
      })
      .catch(function (e) {
        clearTimeout(c), Th.critical("Failed to fetch remote settings", e), n();
      });
  }),
  (xv.prototype._execute_array = function (e) {
    var t,
      n = [],
      r = [],
      o = [];
    Eh.each(
      e,
      function (e) {
        e &&
          ((t = e[0]),
          Eh.isArray(t)
            ? o.push(e)
            : "function" == typeof e
              ? e.call(this)
              : Eh.isArray(e) && "alias" === t
                ? n.push(e)
                : Eh.isArray(e) &&
                    -1 !== t.indexOf("track") &&
                    "function" == typeof this[t]
                  ? o.push(e)
                  : r.push(e));
      },
      this,
    );
    var i = function (e, t) {
      Eh.each(
        e,
        function (e) {
          if (Eh.isArray(e[0])) {
            var n = t;
            Eh.each(e, function (e) {
              n = n[e[0]].apply(n, e.slice(1));
            });
          } else this[e[0]].apply(this, e.slice(1));
        },
        t,
      );
    };
    i(n, this), i(r, this), i(o, this);
  }),
  (xv.prototype.are_batchers_initialized = function () {
    return !!this.request_batchers.events;
  }),
  (xv.prototype.get_batcher_configs = function () {
    var e = "__mpq_" + this.get_config("token");
    return (
      (this._batcher_configs = this._batcher_configs || {
        events: {
          type: "events",
          api_name: "track",
          queue_key: e + "_ev",
        },
        people: {
          type: "people",
          api_name: "engage",
          queue_key: e + "_pp",
        },
        groups: {
          type: "groups",
          api_name: "groups",
          queue_key: e + "_gr",
        },
      }),
      this._batcher_configs
    );
  }),
  (xv.prototype.init_batchers = function () {
    if (!this.are_batchers_initialized()) {
      var e = Eh.bind(function (e) {
          return new _m(e.queue_key, {
            libConfig: this.config,
            errorReporter: this.get_config("error_reporter"),
            sendRequestFunc: Eh.bind(function (t, n, r) {
              var o = this.get_config("api_routes");
              this._send_request(
                this.get_api_host(e.api_name) + "/" + o[e.api_name],
                this._encode_data_for_request(t),
                n,
                this._prepare_callback(r, t),
              );
            }, this),
            beforeSendHook: Eh.bind(function (t) {
              var n = this._run_hook("before_send_" + e.type, t);
              return n ? n[0] : null;
            }, this),
            stopAllBatchingFunc: Eh.bind(this.stop_batch_senders, this),
            usePersistence: !0,
          });
        }, this),
        t = this.get_batcher_configs();
      this.request_batchers = {
        events: e(t.events),
        people: e(t.people),
        groups: e(t.groups),
      };
    }
    this.get_config("batch_autostart") && this.start_batch_senders();
  }),
  (xv.prototype.start_batch_senders = function () {
    (this._batchers_were_started = !0),
      this.are_batchers_initialized() &&
        ((this._batch_requests = !0),
        Eh.each(this.request_batchers, function (e) {
          e.start();
        }));
  }),
  (xv.prototype.stop_batch_senders = function () {
    (this._batch_requests = !1),
      Eh.each(this.request_batchers, function (e) {
        e.stop(), e.clear();
      });
  }),
  (xv.prototype.push = function (e) {
    this._execute_array([e]);
  }),
  (xv.prototype.enable = function (e) {
    var t, n, r, o;
    if (void 0 === e) this._flags.disable_all_events = !1;
    else {
      for (t = {}, n = [], r = 0; r < e.length; r++) t[e[r]] = !0;
      for (o = 0; o < this.__disabled_events.length; o++)
        t[this.__disabled_events[o]] || n.push(this.__disabled_events[o]);
      this.__disabled_events = n;
    }
  }),
  (xv.prototype.disable = function (e) {
    void 0 === e
      ? (this._flags.disable_all_events = !0)
      : (this.__disabled_events = this.__disabled_events.concat(e));
  }),
  (xv.prototype._encode_data_for_request = function (e) {
    var t = $h(e);
    return (
      this.get_config("api_payload_format") === hv && (t = Eh.base64Encode(t)),
      { data: t }
    );
  }),
  (xv.prototype._track_or_batch = function (e, t) {
    var n = Eh.truncate(e.data, 255),
      r = e.endpoint,
      o = e.batcher,
      i = e.should_send_immediately,
      a = e.send_request_options || {};
    t = t || Gh;
    var s = !0,
      l = Eh.bind(function () {
        return (
          a.skip_hooks ||
            ((n = this._run_hook("before_send_" + e.type, n)) && (n = n[0])),
          n
            ? (Th.log("MIXPANEL REQUEST:"),
              Th.log(n),
              this._send_request(
                r,
                this._encode_data_for_request(n),
                a,
                this._prepare_callback(t, n),
              ))
            : null
        );
      }, this);
    return (
      this._batch_requests && !i
        ? o.enqueue(n).then(function (e) {
            e ? t(1, n) : l();
          })
        : (s = l()),
      s && n
    );
  }),
  (xv.prototype.track = om(function (e, t, n, r) {
    var o;
    if (!n || !n.skip_hooks) {
      if (null === (o = this._run_hook("before_track", e, t))) return;
      (e = o[0]), (t = o[1]);
    }
    r || "function" != typeof n || ((r = n), (n = null));
    var i = (n = n || {}).transport;
    i && (n.transport = i);
    var a = n.send_immediately;
    if (("function" != typeof r && (r = Gh), Eh.isUndefined(e)))
      this.report_error("No event name provided to mixpanel.track");
    else {
      if (!this._event_is_disabled(e)) {
        (t = Eh.extend({}, t)).token = this.get_config("token");
        var s = this.persistence.remove_event_timer(e);
        if (!Eh.isUndefined(s)) {
          var l = new Date().getTime() - s;
          t.$duration = parseFloat((l / 1e3).toFixed(3));
        }
        this._set_default_superprops();
        var c = this.get_config("track_marketing")
          ? Eh.info.marketingParams()
          : {};
        t = Eh.extend(
          {},
          Eh.info.properties({
            mp_loader: this.get_config("mp_loader"),
          }),
          c,
          this.persistence.properties(),
          this.unpersisted_superprops,
          this.get_session_recording_properties(),
          t,
        );
        var u = this.get_config("property_blacklist");
        Eh.isArray(u)
          ? Eh.each(u, function (e) {
              delete t[e];
            })
          : this.report_error(
              "Invalid value for property_blacklist config: " + u,
            ),
          this._start_recording_on_event(e, t);
        var d = { event: e, properties: t };
        return (
          (o = this._track_or_batch(
            {
              type: "events",
              data: d,
              endpoint:
                this.get_api_host("events") +
                "/" +
                this.get_config("api_routes").track,
              batcher: this.request_batchers.events,
              should_send_immediately: a,
              send_request_options: n,
            },
            r,
          )),
          this.flags &&
            this.flags.checkFirstTimeEvents &&
            this.flags.checkFirstTimeEvents(e, t),
          o
        );
      }
      r(0);
    }
  })),
  (xv.prototype.set_group = om(function (e, t, n) {
    Eh.isArray(t) || (t = [t]);
    var r = {};
    return (r[e] = t), this.register(r), this.people.set(e, t, n);
  })),
  (xv.prototype.add_group = om(function (e, t, n) {
    var r = this.get_property(e),
      o = {};
    return (
      void 0 === r
        ? ((o[e] = [t]), this.register(o))
        : -1 === r.indexOf(t) && (r.push(t), (o[e] = r), this.register(o)),
      this.people.union(e, t, n)
    );
  })),
  (xv.prototype.remove_group = om(function (e, t, n) {
    var r = this.get_property(e);
    if (void 0 !== r) {
      var o = r.indexOf(t);
      o > -1 && (r.splice(o, 1), this.register({ group_key: r })),
        0 === r.length && this.unregister(e);
    }
    return this.people.remove(e, t, n);
  })),
  (xv.prototype.track_with_groups = om(function (e, t, n, r) {
    var o = Eh.extend({}, t || {});
    return (
      Eh.each(n, function (e, t) {
        null != e && (o[t] = e);
      }),
      this.track(e, o, r)
    );
  })),
  (xv.prototype._create_map_key = function (e, t) {
    return e + "_" + JSON.stringify(t);
  }),
  (xv.prototype._remove_group_from_cache = function (e, t) {
    delete this._cached_groups[this._create_map_key(e, t)];
  }),
  (xv.prototype.get_group = function (e, t) {
    var n = this._create_map_key(e, t),
      r = this._cached_groups[n];
    return (
      (void 0 !== r && r._group_key === e && r._group_id === t) ||
        ((r = new Zy())._init(this, e, t), (this._cached_groups[n] = r)),
      r
    );
  }),
  (xv.prototype.track_pageview = om(function (e, t) {
    "object" != typeof e && (e = {});
    var n = (t = t || {}).event_name || "$mp_web_page_view",
      r = Eh.extend(
        Eh.info.mpPageViewProperties(),
        Eh.info.campaignParams(),
        Eh.info.clickParams(),
      ),
      o = Eh.extend({}, r, e);
    return (
      this.is_recording_heatmap_data() && (o.$captured_for_heatmap = !0),
      this.track(n, o)
    );
  })),
  (xv.prototype.track_links = function () {
    return this._track_dom.call(this, By, arguments);
  }),
  (xv.prototype.track_forms = function () {
    return this._track_dom.call(this, zy, arguments);
  }),
  (xv.prototype.time_event = function (e) {
    Eh.isUndefined(e)
      ? this.report_error("No event name provided to mixpanel.time_event")
      : this._event_is_disabled(e) ||
        this.persistence.set_event_timer(e, new Date().getTime());
  });
var Ev = { persistent: !0 },
  Tv = function (e) {
    var t;
    return (
      (t = Eh.isObject(e) ? e : Eh.isUndefined(e) ? {} : { days: e }),
      Eh.extend({}, Ev, t)
    );
  };
(xv.prototype.register = function (e, t) {
  var n = this._run_hook("before_register", e, t);
  if (null !== n) {
    (e = n[0]), (t = n[1]);
    var r = Tv(t);
    r.persistent
      ? this.persistence.register(e, r.days)
      : Eh.extend(this.unpersisted_superprops, e);
  }
}),
  (xv.prototype.register_once = function (e, t, n) {
    var r = this._run_hook("before_register_once", e, t, n);
    if (null !== r) {
      (e = r[0]), (t = r[1]), (n = r[2]);
      var o = Tv(n);
      o.persistent
        ? this.persistence.register_once(e, t, o.days)
        : (void 0 === t && (t = "None"),
          Eh.each(
            e,
            function (e, n) {
              (this.unpersisted_superprops.hasOwnProperty(n) &&
                this.unpersisted_superprops[n] !== t) ||
                (this.unpersisted_superprops[n] = e);
            },
            this,
          ));
    }
  }),
  (xv.prototype.unregister = function (e, t) {
    var n = this._run_hook("before_unregister", e, t);
    null !== n &&
      ((e = n[0]),
      (t = n[1]),
      (t = Tv(t)).persistent
        ? this.persistence.unregister(e)
        : delete this.unpersisted_superprops[e]);
  }),
  (xv.prototype._register_single = function (e, t) {
    var n = {};
    (n[e] = t), this.register(n);
  }),
  (xv.prototype.identify = function (e, t, n, r, o, i, a, s) {
    var l = this._run_hook("before_identify", e);
    if (null === l) return -1;
    e = l[0];
    var c = this.get_distinct_id();
    if (e && c !== e) {
      if ("string" == typeof e && 0 === e.indexOf(mv))
        return this.report_error("distinct_id cannot have $device: prefix"), -1;
      this.register({ $user_id: e });
    }
    if (!this.get_property("$device_id")) {
      var u = c;
      this.register_once({ $had_persisted_distinct_id: !0, $device_id: u }, "");
    }
    e !== c &&
      e !== this.get_property(sv) &&
      (this.unregister(sv), this.register({ distinct_id: e })),
      (this._flags.identify_called = !0),
      this.people._flush(t, n, r, o, i, a, s),
      e !== c &&
        this.track(
          "$identify",
          { distinct_id: e, $anon_distinct_id: c },
          { skip_hooks: !0 },
        ),
      e !== c &&
        this.flags.fetchFlags().catch(function () {
          Th.error("[flags] Error fetching flags during identify");
        });
  }),
  (xv.prototype.reset = function () {
    this.stop_session_recording(),
      this.persistence.clear(),
      (this._flags.identify_called = !1);
    var e = Eh.UUID();
    this.register_once({ distinct_id: mv + e, $device_id: e }, ""),
      this._check_and_start_session_recording(),
      this.flags.reset();
  }),
  (xv.prototype.get_distinct_id = function () {
    return this.get_property("distinct_id");
  }),
  (xv.prototype.alias = function (e, t) {
    if (e === this.get_property(av))
      return (
        this.report_error(
          "Attempting to create alias for existing People user - aborting.",
        ),
        -2
      );
    var n = this;
    return (
      Eh.isUndefined(t) && (t = this.get_distinct_id()),
      e !== t
        ? (this._register_single(sv, e),
          this.track(
            "$create_alias",
            { alias: e, distinct_id: t },
            { skip_hooks: !0 },
            function () {
              n.identify(e);
            },
          ))
        : (this.report_error(
            "alias matches current distinct_id - skipping api call.",
          ),
          this.identify(e),
          -1)
    );
  }),
  (xv.prototype.name_tag = function (e) {
    this._register_single("mp_name_tag", e);
  }),
  (xv.prototype.set_config = function (e) {
    Eh.isObject(e) &&
      (Eh.extend(this.config, e),
      e.batch_size &&
        Eh.each(this.request_batchers, function (e) {
          e.resetBatchSize();
        }),
      this.get_config("persistence_name") ||
        (this.config.persistence_name = this.config.cookie_name),
      this.get_config("disable_persistence") ||
        (this.config.disable_persistence = this.config.disable_cookie),
      this.persistence && this.persistence.update_config(this.config),
      (i.DEBUG = i.DEBUG || this.get_config("debug")),
      ("autocapture" in e || "record_heatmap_data" in e) &&
        this.autocapture &&
        this.autocapture.init(),
      Eh.isObject(e.hooks) &&
        ((this.hooks = {}),
        Eh.each(
          e.hooks,
          function (e, t) {
            if (Eh.isFunction(e)) this.hooks[t] = [e];
            else if (Eh.isArray(e)) {
              this.hooks[t] = [];
              for (var n = 0; n < e.length; n++)
                Eh.isFunction(e[n]) ||
                  Th.critical("Invalid hook added. Hook is not a function"),
                  this.hooks[t].push(e[n]);
            } else
              Th.critical(
                "Invalid hooks added. Ensure that the hook values passed into config.hooks are functions or arrays of functions.",
              );
          },
          this,
        )));
  }),
  (xv.prototype.get_config = function (e) {
    return this.config[e];
  }),
  (xv.prototype._run_hook = function (e) {
    var t = ch.call(arguments, 1);
    return (
      Eh.each(
        this.hooks[e],
        function (n) {
          if (null === t) return null;
          var r = n.apply(this, t);
          void 0 === r
            ? (this.report_error(e + " hook did not return a valid value"),
              (t = null))
            : (Eh.isArray(r) || (r = [r]),
              t.splice.apply(t, [0, r.length].concat(r)));
        },
        this,
      ),
      t
    );
  }),
  (xv.prototype.get_property = function (e) {
    return this.persistence.load_prop([e]);
  }),
  (xv.prototype.get_api_host = function (e) {
    return this.get_config("api_hosts")[e] || this.get_config("api_host");
  }),
  (xv.prototype.toString = function () {
    var e = this.get_config("name");
    return e !== fv && (e = fv + "." + e), e;
  }),
  (xv.prototype._event_is_disabled = function (e) {
    return (
      Eh.isBlockedUA(yh) ||
      this._flags.disable_all_events ||
      Eh.include(this.__disabled_events, e)
    );
  }),
  (xv.prototype._gdpr_init = function () {
    "localStorage" === this.get_config("opt_out_tracking_persistence_type") &&
      Eh.localStorage.is_supported() &&
      (!this.has_opted_in_tracking() &&
        this.has_opted_in_tracking({ persistence_type: "cookie" }) &&
        this.opt_in_tracking({ enable_persistence: !1 }),
      !this.has_opted_out_tracking() &&
        this.has_opted_out_tracking({ persistence_type: "cookie" }) &&
        this.opt_out_tracking({ clear_persistence: !1 }),
      this.clear_opt_in_out_tracking({
        persistence_type: "cookie",
        enable_persistence: !1,
      })),
      this.has_opted_out_tracking()
        ? this._gdpr_update_persistence({ clear_persistence: !0 })
        : this.has_opted_in_tracking() ||
          (!this.get_config("opt_out_tracking_by_default") &&
            !Eh.cookie.get("mp_optout")) ||
          (Eh.cookie.remove("mp_optout"),
          this.opt_out_tracking({
            clear_persistence: this.get_config(
              "opt_out_persistence_by_default",
            ),
          }));
  }),
  (xv.prototype._gdpr_update_persistence = function (e) {
    var t;
    if (e && e.clear_persistence) t = !0;
    else {
      if (!e || !e.enable_persistence) return;
      t = !1;
    }
    this.get_config("disable_persistence") ||
      this.persistence.disabled === t ||
      this.persistence.set_disabled(t),
      t
        ? (this.stop_batch_senders(), this.stop_session_recording())
        : this._batchers_were_started && this.start_batch_senders();
  }),
  (xv.prototype._gdpr_call_func = function (e, t) {
    return (
      (t = Eh.extend(
        {
          track: Eh.bind(this.track, this),
          persistence_type: this.get_config(
            "opt_out_tracking_persistence_type",
          ),
          cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
          cookie_expiration: this.get_config("cookie_expiration"),
          cross_site_cookie: this.get_config("cross_site_cookie"),
          cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
          cookie_domain: this.get_config("cookie_domain"),
          secure_cookie: this.get_config("secure_cookie"),
          ignore_dnt: this.get_config("ignore_dnt"),
        },
        t,
      )),
      Eh.localStorage.is_supported() || (t.persistence_type = "cookie"),
      e(this.get_config("token"), {
        track: t.track,
        trackEventName: t.track_event_name,
        trackProperties: t.track_properties,
        persistenceType: t.persistence_type,
        persistencePrefix: t.cookie_prefix,
        cookieDomain: t.cookie_domain,
        cookieExpiration: t.cookie_expiration,
        crossSiteCookie: t.cross_site_cookie,
        crossSubdomainCookie: t.cross_subdomain_cookie,
        secureCookie: t.secure_cookie,
        ignoreDnt: t.ignore_dnt,
      })
    );
  }),
  (xv.prototype.opt_in_tracking = function (e) {
    (e = Eh.extend({ enable_persistence: !0 }, e)),
      this._gdpr_call_func(em, e),
      this._gdpr_update_persistence(e);
  }),
  (xv.prototype.opt_out_tracking = function (e) {
    (e = Eh.extend({ clear_persistence: !0, delete_user: !0 }, e))
      .delete_user &&
      this.people &&
      this.people._identify_called() &&
      (this.people.delete_user(), this.people.clear_charges()),
      this._gdpr_call_func(tm, e),
      this._gdpr_update_persistence(e);
  }),
  (xv.prototype.has_opted_in_tracking = function (e) {
    return this._gdpr_call_func(nm, e);
  }),
  (xv.prototype.has_opted_out_tracking = function (e) {
    return this._gdpr_call_func(rm, e);
  }),
  (xv.prototype.clear_opt_in_out_tracking = function (e) {
    (e = Eh.extend({ enable_persistence: !0 }, e)),
      this._gdpr_call_func(sm, e),
      this._gdpr_update_persistence(e);
  }),
  (xv.prototype.report_error = function (e, t) {
    Th.error.apply(Th.error, arguments);
    try {
      t || e instanceof Error || (e = new Error(e)),
        this.get_config("error_reporter")(e, t);
    } catch (t) {
      Th.error(t);
    }
  }),
  (xv.prototype.add_hook = function (e, t) {
    this.hooks[e] || (this.hooks[e] = []), this.hooks[e].push(t);
  }),
  (xv.prototype.remove_hook = function (e, t) {
    var n;
    this.hooks[e] &&
      (-1 !== (n = this.hooks[e].indexOf(t))
        ? this.hooks[e].splice(n, 1)
        : Th.log("remove_hook failed. Matching hook was not found"));
  }),
  (xv.prototype.init = xv.prototype.init),
  (xv.prototype.reset = xv.prototype.reset),
  (xv.prototype.enable = xv.prototype.enable),
  (xv.prototype.disable = xv.prototype.disable),
  (xv.prototype.time_event = xv.prototype.time_event),
  (xv.prototype.track = xv.prototype.track),
  (xv.prototype.track_links = xv.prototype.track_links),
  (xv.prototype.track_forms = xv.prototype.track_forms),
  (xv.prototype.track_pageview = xv.prototype.track_pageview),
  (xv.prototype.register = xv.prototype.register),
  (xv.prototype.register_once = xv.prototype.register_once),
  (xv.prototype.unregister = xv.prototype.unregister),
  (xv.prototype.identify = xv.prototype.identify),
  (xv.prototype.alias = xv.prototype.alias),
  (xv.prototype.name_tag = xv.prototype.name_tag),
  (xv.prototype.set_config = xv.prototype.set_config),
  (xv.prototype.get_config = xv.prototype.get_config),
  (xv.prototype.get_api_host = xv.prototype.get_api_host),
  (xv.prototype.get_property = xv.prototype.get_property),
  (xv.prototype.get_distinct_id = xv.prototype.get_distinct_id),
  (xv.prototype.toString = xv.prototype.toString),
  (xv.prototype.opt_out_tracking = xv.prototype.opt_out_tracking),
  (xv.prototype.opt_in_tracking = xv.prototype.opt_in_tracking),
  (xv.prototype.has_opted_out_tracking = xv.prototype.has_opted_out_tracking),
  (xv.prototype.has_opted_in_tracking = xv.prototype.has_opted_in_tracking),
  (xv.prototype.clear_opt_in_out_tracking =
    xv.prototype.clear_opt_in_out_tracking),
  (xv.prototype.get_group = xv.prototype.get_group),
  (xv.prototype.set_group = xv.prototype.set_group),
  (xv.prototype.add_group = xv.prototype.add_group),
  (xv.prototype.remove_group = xv.prototype.remove_group),
  (xv.prototype.add_hook = xv.prototype.add_hook),
  (xv.prototype.remove_hook = xv.prototype.remove_hook),
  (xv.prototype.track_with_groups = xv.prototype.track_with_groups),
  (xv.prototype.start_batch_senders = xv.prototype.start_batch_senders),
  (xv.prototype.stop_batch_senders = xv.prototype.stop_batch_senders),
  (xv.prototype.start_session_recording = xv.prototype.start_session_recording),
  (xv.prototype.stop_session_recording = xv.prototype.stop_session_recording),
  (xv.prototype.pause_session_recording = xv.prototype.pause_session_recording),
  (xv.prototype.resume_session_recording =
    xv.prototype.resume_session_recording),
  (xv.prototype.get_session_recording_properties =
    xv.prototype.get_session_recording_properties),
  (xv.prototype.get_session_replay_url = xv.prototype.get_session_replay_url),
  (xv.prototype.get_tab_id = xv.prototype.get_tab_id),
  (xv.prototype.DEFAULT_API_ROUTES = bv),
  (xv.prototype.__get_recorder = xv.prototype.__get_recorder),
  (xv.prototype.__get_recording_init_promise =
    xv.prototype.__get_recording_init_promise),
  (uv.prototype.properties = uv.prototype.properties),
  (uv.prototype.update_search_keyword = uv.prototype.update_search_keyword),
  (uv.prototype.update_referrer_info = uv.prototype.update_referrer_info),
  (uv.prototype.get_cross_subdomain = uv.prototype.get_cross_subdomain),
  (uv.prototype.clear = uv.prototype.clear);
var kv = {},
  Cv =
    ((pv = function (e, t) {
      t();
    }),
    (Jy = 0),
    ((dv = new xv()).init = function (e, t, n) {
      if (n)
        return dv[n] || ((dv[n] = kv[n] = wv(e, t, n)), dv[n]._loaded()), dv[n];
      var o = dv;
      kv[fv] ? (o = kv[fv]) : e && ((o = wv(e, t, fv))._loaded(), (kv[fv] = o)),
        (dv = o),
        1 === Jy && (r[fv] = dv),
        Eh.each(kv, function (e, t) {
          t !== fv && (dv[t] = e);
        }),
        (dv._ = Eh);
    }),
    dv.init(),
    (function () {
      function e() {
        e.done ||
          ((e.done = !0),
          (_v = !0),
          (yv = !1),
          Eh.each(kv, function (e) {
            e._dom_loaded();
          }));
      }
      if (hh.addEventListener)
        "complete" === hh.readyState
          ? e()
          : hh.addEventListener("DOMContentLoaded", e, !1);
      else if (hh.attachEvent) {
        hh.attachEvent("onreadystatechange", e);
        var t = !1;
        try {
          t = null === r.frameElement;
        } catch (e) {}
        hh.documentElement.doScroll &&
          t &&
          (function t() {
            try {
              hh.documentElement.doScroll("left");
            } catch (e) {
              return void setTimeout(t, 1);
            }
            e();
          })();
      }
      Eh.register_event(r, "load", e, !0);
    })(),
    dv);
