// vendor/other/module-68020.js — webpack module 68020
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(23295 /* vendor/other/module-23295 */);
function s(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      value: n,
      writable: !0,
      configurable: !0,
    });
  } catch {
    r.DEBUG_BUILD &&
      o.debug.log(
        `Failed to add non-enumerable property "${String(t)}" to object`,
        e,
      );
  }
}
function a(e, t) {
  try {
    const n = t.prototype || {};
    (e.prototype = t.prototype = n), s(e, "__sentry_original__", t);
  } catch {}
}
function c(e) {
  return e.__sentry_original__;
}
function u(e) {
  if (i.isError(e))
    return {
      message: e.message,
      name: e.name,
      stack: e.stack,
      ...l(e),
    };
  if (i.isEvent(e)) {
    const { type: t, target: n, currentTarget: r, detail: o } = e;
    return {
      type: t,
      target: n,
      currentTarget: r,
      ...(o ? { detail: o } : {}),
      ...l(e),
    };
  }
  return e;
}
function l(e) {
  return i.isObjectLike(e) ? Object.fromEntries(Object.entries(e)) : {};
}
function d(e, t) {
  if (null === e || "object" != typeof e) return e;
  const n = t.get(e);
  if (void 0 !== n) return n;
  if (Array.isArray(e)) {
    const n = [];
    return (
      t.set(e, n),
      e.forEach((e) => {
        n.push(d(e, t));
      }),
      n
    );
  }
  if (
    (function (e) {
      const t = e.constructor;
      return t === Object || void 0 === t;
    })(e)
  ) {
    const n = {};
    return (
      t.set(e, n),
      Object.keys(e).forEach((r) => {
        const o = e[r];
        void 0 !== o && (n[r] = d(o, t));
      }),
      n
    );
  }
  return e;
}
(t.addNonEnumerableProperty = s),
  (t.convertToPlainObject = u),
  (t.dropUndefinedKeys = function (e) {
    return d(e, new Map());
  }),
  (t.extractExceptionKeysForMessage = function (e) {
    const t = Object.keys(u(e));
    return t.sort(), t[0] ? t.join(", ") : "[object has no keys]";
  }),
  (t.fill = function (e, t, n) {
    if (!(t in e)) return;
    const i = e[t];
    if ("function" != typeof i) return;
    const s = n(i);
    "function" == typeof s && a(s, i);
    try {
      e[t] = s;
    } catch {
      r.DEBUG_BUILD &&
        o.debug.log(`Failed to replace method "${t}" in object`, e);
    }
  }),
  (t.getOriginalFunction = c),
  (t.markFunctionWrapped = a),
  (t.objectify = function (e) {
    let t;
    switch (!0) {
      case null == e:
        t = new String(e);
        break;
      case "symbol" == typeof e || "bigint" == typeof e:
        t = Object(e);
        break;
      case i.isPrimitive(e):
        t = new e.constructor(e);
        break;
      default:
        t = e;
    }
    return t;
  }),
  (t.wrapMethod = function (e, t, n, r = !0) {
    const o = e[t];
    if ("function" != typeof o)
      throw new Error(`Cannot wrap method: ${t} is not a function`);
    if (c(o)) throw new Error(`Attempting to wrap method ${t} multiple times`);
    a(n, o),
      Object.defineProperty(e, t, {
        writable: !0,
        configurable: !0,
        enumerable: r,
        value: n,
      });
  });
