// vendor/module-8888.js — webpack module 8888
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(6990 /* vendor/module-6990 */),
  o = n(68020 /* vendor/module-68020 */),
  i = n(57786 /* vendor/module-57786 */);
let a;
function s(e, t = 100, n = 1 / 0) {
  try {
    return l("", e, t, n);
  } catch (e) {
    return { ERROR: `**non-serializable** (${e})` };
  }
}
function l(
  e,
  t,
  n = 1 / 0,
  i = 1 / 0,
  a = (function () {
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
  const [s, u] = a;
  if (
    null == t ||
    ["boolean", "string"].includes(typeof t) ||
    ("number" == typeof t && Number.isFinite(t))
  )
    return t;
  const d = c(0, t);
  if (!d.startsWith("[object ")) return d;
  if (r.hasSkipNormalizationHint(t)) return t;
  const p = r.getNormalizationDepthOverrideHint(t),
    f = void 0 !== p ? p : n;
  if (0 === f) return d.replace("object ", "");
  if (s(t)) return "[Circular ~]";
  const h = t;
  if (h && "function" == typeof h.toJSON)
    try {
      return l("", h.toJSON(), f - 1, i, a);
    } catch {}
  const m = Array.isArray(t) ? [] : {};
  let g = 0;
  const y = o.convertToPlainObject(t);
  for (const e in y) {
    if (!Object.prototype.hasOwnProperty.call(y, e)) continue;
    if (g >= i) {
      m[e] = "[MaxProperties ~]";
      break;
    }
    const t = y[e];
    (m[e] = l(e, t, f - 1, i, a)), g++;
  }
  return u(t), m;
}
function c(e, t) {
  try {
    if (a) {
      const e = a(t);
      if (e) return e;
    }
    if (void 0 !== n.g && t === n.g) return "[Global]";
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
(t.normalize = s),
  (t.normalizeToSize = function e(t, n = 3, r = 102400) {
    const o = s(t, n);
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
    a = e;
  }),
  (t.stringifyValue = c);
