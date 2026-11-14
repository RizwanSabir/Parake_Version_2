// vendor/module-25764.js — webpack module 25764
// params: (e, t, n) = (module, exports, require)
"use strict";
n.r(t), n.d(t, { RemoveScroll: () => H });
var r = function () {
  return (
    (r =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }),
    r.apply(this, arguments)
  );
};
function o(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
Object.create, Object.create;
var i = n(14041 /* vendor/module-14041 */),
  a = "right-scroll-bar-position",
  s = "width-before-scroll-bar";
function l(e, t) {
  return "function" == typeof e ? e(t) : e && (e.current = t), e;
}
var c = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
  u = new WeakMap();
function d(e) {
  return e;
}
var p = (function (e) {
    void 0 === e && (e = {});
    var t = (function (e, t) {
      void 0 === t && (t = d);
      var n = [],
        r = !1;
      return {
        read: function () {
          if (r)
            throw new Error(
              "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
            );
          return n.length ? n[n.length - 1] : e;
        },
        useMedium: function (e) {
          var o = t(e, r);
          return (
            n.push(o),
            function () {
              n = n.filter(function (e) {
                return e !== o;
              });
            }
          );
        },
        assignSyncMedium: function (e) {
          for (r = !0; n.length; ) {
            var t = n;
            (n = []), t.forEach(e);
          }
          n = {
            push: function (t) {
              return e(t);
            },
            filter: function () {
              return n;
            },
          };
        },
        assignMedium: function (e) {
          r = !0;
          var t = [];
          if (n.length) {
            var o = n;
            (n = []), o.forEach(e), (t = n);
          }
          var i = function () {
              var n = t;
              (t = []), n.forEach(e);
            },
            a = function () {
              return Promise.resolve().then(i);
            };
          a(),
            (n = {
              push: function (e) {
                t.push(e), a();
              },
              filter: function (e) {
                return (t = t.filter(e)), n;
              },
            });
        },
      };
    })(null);
    return (t.options = r({ async: !0, ssr: !1 }, e)), t;
  })(),
  f = function () {},
  h = i.forwardRef(function (e, t) {
    var n = i.useRef(null),
      a = i.useState({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: f,
      }),
      s = a[0],
      d = a[1],
      h = e.forwardProps,
      m = e.children,
      g = e.className,
      y = e.removeScrollBar,
      v = e.enabled,
      b = e.shards,
      S = e.sideCar,
      _ = e.noRelative,
      x = e.noIsolation,
      w = e.inert,
      E = e.allowPinchZoom,
      T = e.as,
      k = void 0 === T ? "div" : T,
      C = e.gapMode,
      I = o(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      A = S,
      O = (function (e, t) {
        var n,
          r,
          o,
          a =
            ((n = t || null),
            (r = function (t) {
              return e.forEach(function (e) {
                return l(e, t);
              });
            }),
            ((o = (0, i.useState)(function () {
              return {
                value: n,
                callback: r,
                facade: {
                  get current() {
                    return o.value;
                  },
                  set current(e) {
                    var t = o.value;
                    t !== e && ((o.value = e), o.callback(e, t));
                  },
                },
              };
            })[0]).callback = r),
            o.facade);
        return (
          c(
            function () {
              var t = u.get(a);
              if (t) {
                var n = new Set(t),
                  r = new Set(e),
                  o = a.current;
                n.forEach(function (e) {
                  r.has(e) || l(e, null);
                }),
                  r.forEach(function (e) {
                    n.has(e) || l(e, o);
                  });
              }
              u.set(a, e);
            },
            [e],
          ),
          a
        );
      })([n, t]),
      R = r(r({}, I), s);
    return i.createElement(
      i.Fragment,
      null,
      v &&
        i.createElement(A, {
          sideCar: p,
          removeScrollBar: y,
          shards: b,
          noRelative: _,
          noIsolation: x,
          inert: w,
          setCallbacks: d,
          allowPinchZoom: !!E,
          lockRef: n,
          gapMode: C,
        }),
      h
        ? i.cloneElement(i.Children.only(m), r(r({}, R), { ref: O }))
        : i.createElement(k, r({}, R, { className: g, ref: O }), m),
    );
  });
(h.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (h.classNames = { fullWidth: s, zeroRight: a });
var m = function (e) {
  var t = e.sideCar,
    n = o(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var a = t.read();
  if (!a) throw new Error("Sidecar medium not found");
  return i.createElement(a, r({}, n));
};
m.isSideCarExport = !0;
var g = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        var o, i;
        0 == e &&
          (t = (function () {
            if (!document) return null;
            var e = document.createElement("style");
            e.type = "text/css";
            var t = n.nc;
            return t && e.setAttribute("nonce", t), e;
          })()) &&
          ((i = r),
          (o = t).styleSheet
            ? (o.styleSheet.cssText = i)
            : o.appendChild(document.createTextNode(i)),
          (function (e) {
            (
              document.head || document.getElementsByTagName("head")[0]
            ).appendChild(e);
          })(t)),
          e++;
      },
      remove: function () {
        !--e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  y = function () {
    var e,
      t =
        ((e = g()),
        function (t, n) {
          i.useEffect(
            function () {
              return (
                e.add(t),
                function () {
                  e.remove();
                }
              );
            },
            [t && n],
          );
        });
    return function (e) {
      var n = e.styles,
        r = e.dynamic;
      return t(n, r), null;
    };
  },
  v = { left: 0, top: 0, right: 0, gap: 0 },
  b = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  S = y(),
  _ = "data-scroll-locked",
  x = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      l = e.right,
      c = e.gap;
    return (
      void 0 === n && (n = "margin"),
      "\n  ."
        .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
        .concat(r, ";\n   padding-right: ")
        .concat(c, "px ")
        .concat(r, ";\n  }\n  body[")
        .concat(_, "] {\n    overflow: hidden ")
        .concat(r, ";\n    overscroll-behavior: contain;\n    ")
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            "margin" === n &&
              "\n    padding-left: "
                .concat(o, "px;\n    padding-top: ")
                .concat(i, "px;\n    padding-right: ")
                .concat(
                  l,
                  "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ",
                )
                .concat(c, "px ")
                .concat(r, ";\n    "),
            "padding" === n &&
              "padding-right: ".concat(c, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          "\n  }\n  \n  .",
        )
        .concat(a, " {\n    right: ")
        .concat(c, "px ")
        .concat(r, ";\n  }\n  \n  .")
        .concat(s, " {\n    margin-right: ")
        .concat(c, "px ")
        .concat(r, ";\n  }\n  \n  .")
        .concat(a, " .")
        .concat(a, " {\n    right: 0 ")
        .concat(r, ";\n  }\n  \n  .")
        .concat(s, " .")
        .concat(s, " {\n    margin-right: 0 ")
        .concat(r, ";\n  }\n  \n  body[")
        .concat(_, "] {\n    ")
        .concat("--removed-body-scroll-bar-size", ": ")
        .concat(c, "px;\n  }\n")
    );
  },
  w = function () {
    var e = parseInt(document.body.getAttribute(_) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  E = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = void 0 === r ? "margin" : r;
    i.useEffect(function () {
      return (
        document.body.setAttribute(_, (w() + 1).toString()),
        function () {
          var e = w() - 1;
          e <= 0
            ? document.body.removeAttribute(_)
            : document.body.setAttribute(_, e.toString());
        }
      );
    }, []);
    var a = i.useMemo(
      function () {
        return (function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return v;
          var t = (function (e) {
              var t = window.getComputedStyle(document.body),
                n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                r = t["padding" === e ? "paddingTop" : "marginTop"],
                o = t["padding" === e ? "paddingRight" : "marginRight"];
              return [b(n), b(r), b(o)];
            })(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        })(o);
      },
      [o],
    );
    return i.createElement(S, {
      styles: x(a, !t, o, n ? "" : "!important"),
    });
  },
  T = !1;
if ("undefined" != typeof window)
  try {
    var k = Object.defineProperty({}, "passive", {
      get: function () {
        return (T = !0), !0;
      },
    });
    window.addEventListener("test", k, k),
      window.removeEventListener("test", k, k);
  } catch (e) {
    T = !1;
  }
var C = !!T && { passive: !1 },
  I = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      "hidden" !== n[t] &&
      !(
        n.overflowY === n.overflowX &&
        !(function (e) {
          return "TEXTAREA" === e.tagName;
        })(e) &&
        "visible" === n[t]
      )
    );
  },
  A = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (
        ("undefined" != typeof ShadowRoot &&
          r instanceof ShadowRoot &&
          (r = r.host),
        O(e, r))
      ) {
        var o = R(e, r);
        if (o[1] > o[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  O = function (e, t) {
    return "v" === e
      ? (function (e) {
          return I(e, "overflowY");
        })(t)
      : (function (e) {
          return I(e, "overflowX");
        })(t);
  },
  R = function (e, t) {
    return "v" === e
      ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
      : (function (e) {
          return [e.scrollLeft, e.scrollWidth, e.clientWidth];
        })(t);
    var n;
  },
  M = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  P = function (e) {
    return [e.deltaX, e.deltaY];
  },
  N = function (e) {
    return e && "current" in e ? e.current : e;
  },
  D = function (e) {
    return "\n  .block-interactivity-"
      .concat(e, " {pointer-events: none;}\n  .allow-interactivity-")
      .concat(e, " {pointer-events: all;}\n");
  },
  j = 0,
  L = [];
function F(e) {
  for (var t = null; null !== e; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const U =
  ((B = function (e) {
    var t = i.useRef([]),
      n = i.useRef([0, 0]),
      r = i.useRef(),
      o = i.useState(j++)[0],
      a = i.useState(y)[0],
      s = i.useRef(e);
    i.useEffect(
      function () {
        s.current = e;
      },
      [e],
    ),
      i.useEffect(
        function () {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (function (e, t, n) {
              if (n || 2 === arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++)
                  (!r && o in t) ||
                    (r || (r = Array.prototype.slice.call(t, 0, o)),
                    (r[o] = t[o]));
              return e.concat(r || Array.prototype.slice.call(t));
            })([e.lockRef.current], (e.shards || []).map(N), !0).filter(
              Boolean,
            );
            return (
              t.forEach(function (e) {
                return e.classList.add("allow-interactivity-".concat(o));
              }),
              function () {
                document.body.classList.remove(
                  "block-interactivity-".concat(o),
                ),
                  t.forEach(function (e) {
                    return e.classList.remove("allow-interactivity-".concat(o));
                  });
              }
            );
          }
        },
        [e.inert, e.lockRef.current, e.shards],
      );
    var l = i.useCallback(function (e, t) {
        if (
          ("touches" in e && 2 === e.touches.length) ||
          ("wheel" === e.type && e.ctrlKey)
        )
          return !s.current.allowPinchZoom;
        var o,
          i = M(e),
          a = n.current,
          l = "deltaX" in e ? e.deltaX : a[0] - i[0],
          c = "deltaY" in e ? e.deltaY : a[1] - i[1],
          u = e.target,
          d = Math.abs(l) > Math.abs(c) ? "h" : "v";
        if ("touches" in e && "h" === d && "range" === u.type) return !1;
        var p = window.getSelection(),
          f = p && p.anchorNode;
        if (f && (f === u || f.contains(u))) return !1;
        var h = A(d, u);
        if (!h) return !0;
        if ((h ? (o = d) : ((o = "v" === d ? "h" : "v"), (h = A(d, u))), !h))
          return !1;
        if (
          (!r.current && "changedTouches" in e && (l || c) && (r.current = o),
          !o)
        )
          return !0;
        var m = r.current || o;
        return (function (e, t, n, r) {
          var o = (function (e, t) {
              return "h" === e && "rtl" === t ? -1 : 1;
            })(e, window.getComputedStyle(t).direction),
            i = o * r,
            a = n.target,
            s = t.contains(a),
            l = !1,
            c = i > 0,
            u = 0,
            d = 0;
          do {
            if (!a) break;
            var p = R(e, a),
              f = p[0],
              h = p[1] - p[2] - o * f;
            (f || h) && O(e, a) && ((u += h), (d += f));
            var m = a.parentNode;
            a = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m;
          } while (
            (!s && a !== document.body) ||
            (s && (t.contains(a) || t === a))
          );
          return (
            ((c && (Math.abs(u) < 1 || !1)) ||
              (!c && (Math.abs(d) < 1 || !1))) &&
              (l = !0),
            l
          );
        })(m, t, e, "h" === m ? l : c);
      }, []),
      c = i.useCallback(function (e) {
        var n = e;
        if (L.length && L[L.length - 1] === a) {
          var r = "deltaY" in n ? P(n) : M(n),
            o = t.current.filter(function (e) {
              return (
                e.name === n.type &&
                (e.target === n.target || n.target === e.shadowParent) &&
                ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1])
              );
              var t, o;
            })[0];
          if (o && o.should) n.cancelable && n.preventDefault();
          else if (!o) {
            var i = (s.current.shards || [])
              .map(N)
              .filter(Boolean)
              .filter(function (e) {
                return e.contains(n.target);
              });
            (i.length > 0 ? l(n, i[0]) : !s.current.noIsolation) &&
              n.cancelable &&
              n.preventDefault();
          }
        }
      }, []),
      u = i.useCallback(function (e, n, r, o) {
        var i = {
          name: e,
          delta: n,
          target: r,
          should: o,
          shadowParent: F(r),
        };
        t.current.push(i),
          setTimeout(function () {
            t.current = t.current.filter(function (e) {
              return e !== i;
            });
          }, 1);
      }, []),
      d = i.useCallback(function (e) {
        (n.current = M(e)), (r.current = void 0);
      }, []),
      p = i.useCallback(function (t) {
        u(t.type, P(t), t.target, l(t, e.lockRef.current));
      }, []),
      f = i.useCallback(function (t) {
        u(t.type, M(t), t.target, l(t, e.lockRef.current));
      }, []);
    i.useEffect(function () {
      return (
        L.push(a),
        e.setCallbacks({
          onScrollCapture: p,
          onWheelCapture: p,
          onTouchMoveCapture: f,
        }),
        document.addEventListener("wheel", c, C),
        document.addEventListener("touchmove", c, C),
        document.addEventListener("touchstart", d, C),
        function () {
          (L = L.filter(function (e) {
            return e !== a;
          })),
            document.removeEventListener("wheel", c, C),
            document.removeEventListener("touchmove", c, C),
            document.removeEventListener("touchstart", d, C);
        }
      );
    }, []);
    var h = e.removeScrollBar,
      m = e.inert;
    return i.createElement(
      i.Fragment,
      null,
      m ? i.createElement(a, { styles: D(o) }) : null,
      h
        ? i.createElement(E, {
            noRelative: e.noRelative,
            gapMode: e.gapMode,
          })
        : null,
    );
  }),
  p.useMedium(B),
  m);
var B,
  z = i.forwardRef(function (e, t) {
    return i.createElement(h, r({}, e, { ref: t, sideCar: U }));
  });
z.classNames = h.classNames;
const H = z;
