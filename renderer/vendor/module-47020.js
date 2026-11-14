// vendor/module-47020.js — webpack module 47020
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = [
    "addListener",
    "on",
    "once",
    "prependListener",
    "prependOnceListener",
    "addEventListener",
  ],
  i = ["removeListener", "off", "removeEventListener"],
  a = Symbol("SentryScopeBoundListeners");
let s;
function l(e) {
  return "function" == typeof e;
}
function c(e, t, n) {
  return function (...o) {
    const i = o[0],
      a = o[1],
      c = o.slice(2);
    if (
      !l(a) ||
      (function (e) {
        return void 0 !== s && (e === s || e.listener === s);
      })(a)
    )
      return t.apply(this, o);
    const u = p(e) || d(e);
    let f = u.get(i);
    f || ((f = new WeakMap()), u.set(i, f));
    let h = f.get(a);
    h ||
      ((h = (function (e, t) {
        return function (...n) {
          return r.withScope(t, () => e.apply(this, n));
        };
      })(a, n)),
      f.set(a, h));
    const m = s;
    s = h;
    try {
      return t.call(this, i, h, ...c);
    } finally {
      s = m;
    }
  };
}
function u(e, t) {
  return function (...n) {
    const r = n[0],
      o = n[1],
      i = n.slice(2),
      a = l(o) ? p(e)?.get(r)?.get(o) : void 0;
    return a ? t.call(this, r, a, ...i) : t.apply(this, n);
  };
}
function d(e) {
  const t = new Map();
  return (e[a] = t), t;
}
function p(e) {
  return e[a];
}
t.bindScopeToEmitter = function (e, t = r.getCurrentScope()) {
  const n = e;
  if (p(n)) return e;
  d(n);
  for (const e of o) "function" == typeof n[e] && (n[e] = c(n, n[e], t));
  for (const e of i) "function" == typeof n[e] && (n[e] = u(n, n[e]));
  return (
    "function" == typeof n.removeAllListeners &&
      (n.removeAllListeners = (function (e, t) {
        return function (...n) {
          const r = p(e);
          if (r)
            if (0 === n.length) d(e);
            else {
              const e = n[0];
              r.delete(e);
            }
          return t.apply(this, n);
        };
      })(n, n.removeAllListeners)),
    e
  );
};
