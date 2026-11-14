// vendor/other/module-39454.js — webpack module 39454
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, {
  RPCType: () => p,
  SDK_INFO: () => l.q,
  W3CBaggagePropagator: () => u,
  isTracingSuppressed: () => o.Zf,
  setRPCMetadata: () => f,
  suppressTracing: () => o.M1,
});
var r = n(46922 /* vendor/other/module-46922 */),
  o = n(65890 /* vendor/other/module-65890 */);
const i = "baggage";
var s = n(57277 /* vendor/other/module-57277 */);
function a(e) {
  if (!e) return;
  const t = e.indexOf(";"),
    n = -1 === t ? e : e.substring(0, t),
    r = n.indexOf("=");
  if (r <= 0) return;
  const o = n.substring(0, r).trim(),
    i = n.substring(r + 1).trim();
  if (!o || !i) return;
  let a, c, u;
  try {
    (a = decodeURIComponent(o)), (c = decodeURIComponent(i));
  } catch {
    return;
  }
  if (-1 !== t && t < e.length - 1) {
    const n = e.substring(t + 1);
    u = (0, s.B)(n);
  }
  return { key: a, value: c, metadata: u };
}
function c(e, t, n, r) {
  let o = 0;
  for (; o < e.length && n < 180; ) {
    const i = e.indexOf(",", o),
      s = -1 === i ? e.length : i,
      c = s - o;
    if (c <= 4096) {
      const i = a(e.substring(o, s));
      if (i) {
        const e = (0 === n ? 0 : 1) + c;
        if (r + e > 8192) break;
        (t[i.key] = i.metadata
          ? { value: i.value, metadata: i.metadata }
          : { value: i.value }),
          n++,
          (r += e);
      }
    }
    if (-1 === i) break;
    o = i + 1;
  }
  return [n, r];
}
class u {
  inject(e, t, n) {
    const s = r.$.getBaggage(e);
    if (!s || (0, o.Zf)(e)) return;
    const a = (function (e) {
        return e.getAllEntries().map(([e, t]) => {
          let n = `${encodeURIComponent(e)}=${encodeURIComponent(t.value)}`;
          return void 0 !== t.metadata && (n += ";" + t.metadata.toString()), n;
        });
      })(s)
        .filter((e) => e.length <= 4096)
        .slice(0, 180),
      c = (function (e) {
        return e.reduce((e, t) => {
          const n = `${e}${"" !== e ? "," : ""}${t}`;
          return n.length > 8192 ? e : n;
        }, "");
      })(a);
    c.length > 0 && n.set(t, i, c);
  }
  extract(e, t, n) {
    const o = n.get(t, i);
    if (!o) return e;
    const s = {};
    let a = 0,
      u = 0;
    if (Array.isArray(o))
      for (let e = 0; e < o.length; e++) [a, u] = c(o[e], s, a, u);
    else [a] = c(o, s, a, u);
    return 0 === a ? e : r.$.setBaggage(e, r.$.createBaggage(s));
  }
  fields() {
    return [i];
  }
}
var l = n(17422 /* vendor/other/module-17422 */);
const d = (0, n(98902 /* vendor/other/module-98902 */).n)(
  "OpenTelemetry SDK Context Key RPC_METADATA",
);
var p;
function f(e, t) {
  return e.setValue(d, t);
}
!(function (e) {
  e.HTTP = "http";
})(p || (p = {}));
