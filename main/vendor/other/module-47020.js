// vendor/other/module-47020.js — webpack module 47020
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = [
    "addListener",
    "on",
    "once",
    "prependListener",
    "prependOnceListener",
    "addEventListener",
  ],
  i = ["removeListener", "off", "removeEventListener"],
  s = Symbol("SentryScopeBoundListeners");
let a;
function c(e) {
  return "function" == typeof e;
}
function u(e, t, n) {
  return function (...o) {
    const i = o[0],
      s = o[1],
      u = o.slice(2);
    if (
      !c(s) ||
      (function (e) {
        return void 0 !== a && (e === a || e.listener === a);
      })(s)
    )
      return t.apply(this, o);
    const l = p(e) || d(e);
    let f = l.get(i);
    f || ((f = new WeakMap()), l.set(i, f));
    let h = f.get(s);
    h ||
      ((h = (function (e, t) {
        return function (...n) {
          return r.withScope(t, () => e.apply(this, n));
        };
      })(s, n)),
      f.set(s, h));
    const g = a;
    a = h;
    try {
      return t.call(this, i, h, ...u);
    } finally {
      a = g;
    }
  };
}
function l(e, t) {
  return function (...n) {
    const r = n[0],
      o = n[1],
      i = n.slice(2),
      s = c(o) ? p(e)?.get(r)?.get(o) : void 0;
    return s ? t.call(this, r, s, ...i) : t.apply(this, n);
  };
}
function d(e) {
  const t = new Map();
  return (e[s] = t), t;
}
function p(e) {
  return e[s];
}
t.bindScopeToEmitter = function (e, t = r.getCurrentScope()) {
  const n = e;
  if (p(n)) return e;
  d(n);
  for (const e of o) "function" == typeof n[e] && (n[e] = u(n, n[e], t));
  for (const e of i) "function" == typeof n[e] && (n[e] = l(n, n[e]));
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
