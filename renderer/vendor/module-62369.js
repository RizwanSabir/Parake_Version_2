// vendor/module-62369.js — webpack module 62369
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.makeEventPreventable = p),
  (t.mergeClassNames = f),
  (t.mergeProps = function (e, t, n, r, o) {
    if (!(n || r || o || e)) return i(t);
    let s = i(e);
    return (
      t && (s = a(s, t)),
      n && (s = a(s, n)),
      r && (s = a(s, r)),
      o && (s = a(s, o)),
      s
    );
  }),
  (t.mergePropsN = function (e) {
    if (0 === e.length) return o;
    if (1 === e.length) return i(e[0]);
    let t = i(e[0]);
    for (let n = 1; n < e.length; n += 1) t = a(t, e[n]);
    return t;
  });
var r = n(569 /* vendor/module-569 */);
const o = {};
function i(e) {
  return l(e)
    ? { ...c(e, o) }
    : (function (e) {
        const t = { ...e };
        for (const e in t) {
          const n = t[e];
          s(e, n) && (t[e] = d(n));
        }
        return t;
      })(e);
}
function a(e, t) {
  return l(t)
    ? c(t, e)
    : (function (e, t) {
        if (!t) return e;
        for (const n in t) {
          const o = t[n];
          switch (n) {
            case "style":
              e[n] = (0, r.mergeObjects)(e.style, o);
              break;
            case "className":
              e[n] = f(e.className, o);
              break;
            default:
              s(n, o) ? (e[n] = u(e[n], o)) : (e[n] = o);
          }
        }
        return e;
      })(e, t);
}
function s(e, t) {
  const n = e.charCodeAt(0),
    r = e.charCodeAt(1),
    o = e.charCodeAt(2);
  return (
    111 === n &&
    110 === r &&
    o >= 65 &&
    o <= 90 &&
    ("function" == typeof t || void 0 === t)
  );
}
function l(e) {
  return "function" == typeof e;
}
function c(e, t) {
  return l(e) ? e(t) : (e ?? o);
}
function u(e, t) {
  return t
    ? e
      ? (...n) => {
          const r = n[0];
          if (h(r)) {
            const o = r;
            p(o);
            const i = t(...n);
            return o.baseUIHandlerPrevented || e?.(...n), i;
          }
          const o = t(...n);
          return e?.(...n), o;
        }
      : d(t)
    : e;
}
function d(e) {
  return e
    ? (...t) => {
        const n = t[0];
        return h(n) && p(n), e(...t);
      }
    : e;
}
function p(e) {
  return (
    (e.preventBaseUIHandler = () => {
      e.baseUIHandlerPrevented = !0;
    }),
    e
  );
}
function f(e, t) {
  return t ? (e ? t + " " + e : t) : e;
}
function h(e) {
  return null != e && "object" == typeof e && "nativeEvent" in e;
}
