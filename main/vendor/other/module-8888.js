// vendor/other/module-8888.js — webpack module 8888
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(6990 /* vendor/other/module-6990 */),
  o = n(68020 /* vendor/other/module-68020 */),
  i = n(57786 /* vendor/other/module-57786 */);
let s;
function a(e, t = 100, n = 1 / 0) {
  try {
    return c("", e, t, n);
  } catch (e) {
    return { ERROR: `**non-serializable** (${e})` };
  }
}
function c(
  e,
  t,
  n = 1 / 0,
  i = 1 / 0,
  s = (function () {
    const e = new WeakSet();
    return [
      function (t) {
        return !!e.has(t) || (e.add(t), !1);
      },
      function (t) {
        e.delete(t);
      },
    ];
  })(),
) {
  const [a, l] = s;
  if (
    null == t ||
    ["boolean", "string"].includes(typeof t) ||
    ("number" == typeof t && Number.isFinite(t))
  )
    return t;
  const d = u(0, t);
  if (!d.startsWith("[object ")) return d;
  if (r.hasSkipNormalizationHint(t)) return t;
  const p = r.getNormalizationDepthOverrideHint(t),
    f = void 0 !== p ? p : n;
  if (0 === f) return d.replace("object ", "");
  if (a(t)) return "[Circular ~]";
  const h = t;
  if (h && "function" == typeof h.toJSON)
    try {
      return c("", h.toJSON(), f - 1, i, s);
    } catch {}
  const g = Array.isArray(t) ? [] : {};
  let m = 0;
  const _ = o.convertToPlainObject(t);
  for (const e in _) {
    if (!Object.prototype.hasOwnProperty.call(_, e)) continue;
    if (m >= i) {
      g[e] = "[MaxProperties ~]";
      break;
    }
    const t = _[e];
    (g[e] = c(e, t, f - 1, i, s)), m++;
  }
  return l(t), g;
}
function u(e, t) {
  try {
    if (s) {
      const e = s(t);
      if (e) return e;
    }
    if ("undefined" != typeof global && t === global) return "[Global]";
    if ("number" == typeof t && !Number.isFinite(t)) return `[${t}]`;
    if ("function" == typeof t) return `[Function: ${i.getFunctionName(t)}]`;
    if ("symbol" == typeof t) return `[${String(t)}]`;
    if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
    const e = (function (e) {
      const t = Object.getPrototypeOf(e);
      return t?.constructor ? t.constructor.name : "null prototype";
    })(t);
    return `[object ${e}]`;
  } catch (e) {
    return `**non-serializable** (${e})`;
  }
}
(t.normalize = a),
  (t.normalizeToSize = function e(t, n = 3, r = 102400) {
    const o = a(t, n);
    return (
      (i = o),
      (function (e) {
        return ~-encodeURI(e).split(/%..|./).length;
      })(JSON.stringify(i)) > r
        ? e(t, n - 1, r)
        : o
    );
    var i;
  }),
  (t.normalizeUrlToBase = function (e, t) {
    const n = t.replace(/\\/g, "/").replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    let r = e;
    try {
      r = decodeURI(e);
    } catch {}
    return r
      .replace(/\\/g, "/")
      .replace(/webpack:\/?/g, "")
      .replace(new RegExp(`(file://)?/*${n}/*`, "ig"), "app:///");
  }),
  (t.setNormalizeStringifier = function (e) {
    s = e;
  }),
  (t.stringifyValue = u);
