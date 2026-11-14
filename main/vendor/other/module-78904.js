// vendor/other/module-78904.js — webpack module 78904
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(73024 /* external/node_fs */),
  o = n(80481 /* external/node_readline */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(14052 /* vendor/other/module-14052 */),
  a = new i.LRUMap(10),
  c = new i.LRUMap(20);
function u(e, t, n) {
  const r = e.get(t);
  return void 0 === r ? (e.set(t, n), n) : r;
}
function l(e) {
  return !!(
    e.startsWith("node:") ||
    e.endsWith(".min.js") ||
    e.endsWith(".min.cjs") ||
    e.endsWith(".min.mjs") ||
    e.startsWith("data:")
  );
}
function d(e) {
  return (
    (void 0 !== e.lineno && e.lineno > 1e4) ||
    (void 0 !== e.colno && e.colno > 1e3)
  );
}
function p(e, t) {
  const n = a.get(e);
  if (void 0 === n) return !1;
  for (let e = t[0]; e <= t[1]; e++) if (void 0 === n[e]) return !1;
  return !0;
}
function f(e, t) {
  if (!e.length) return [];
  let n = 0;
  const r = e[0];
  if ("number" != typeof r) return [];
  let o = y(r, t);
  const i = [];
  for (;;) {
    if (n === e.length - 1) {
      i.push(o);
      break;
    }
    const r = e[n + 1];
    if ("number" != typeof r) break;
    r <= o[1] ? (o[1] = r + t) : (i.push(o), (o = y(r, t))), n++;
  }
  return i;
}
function h(e, t, n) {
  return new Promise((a, u) => {
    const l = r.createReadStream(e),
      d = o.createInterface({ input: l });
    function p() {
      l.destroy(), a();
    }
    let f = 0,
      h = 0;
    const g = t[h];
    if (void 0 === g) return void p();
    let m = g[0],
      _ = g[1];
    function S(t) {
      c.set(e, 1),
        s.DEBUG_BUILD &&
          i.debug.error(`Failed to read file: ${e}. Error: ${t}`),
        d.close(),
        d.removeAllListeners(),
        p();
    }
    l.on("error", S),
      d.on("error", S),
      d.on("close", p),
      d.on("line", (e) => {
        if ((f++, !(f < m) && ((n[f] = i.snipLine(e, 0)), f >= _))) {
          if (h === t.length - 1) return d.close(), void d.removeAllListeners();
          h++;
          const e = t[h];
          if (void 0 === e) return d.close(), void d.removeAllListeners();
          (m = e[0]), (_ = e[1]);
        }
      });
  });
}
function g(e, t, n) {
  for (const r of e)
    if (
      r.filename &&
      void 0 === r.context_line &&
      "number" == typeof r.lineno
    ) {
      const e = n.get(r.filename);
      if (void 0 === e) continue;
      _(r.lineno, r, t, e);
    }
}
function m(e) {
  delete e.pre_context, delete e.context_line, delete e.post_context;
}
function _(e, t, n, r) {
  if (void 0 === t.lineno || void 0 === r)
    return void (
      s.DEBUG_BUILD &&
      i.debug.error(
        "Cannot resolve context for frame with no lineno or file contents",
      )
    );
  t.pre_context = [];
  for (let o = S(e, n); o < e; o++) {
    const e = r[o];
    if (void 0 === e)
      return (
        m(t),
        void (
          s.DEBUG_BUILD &&
          i.debug.error(`Could not find line ${o} in file ${t.filename}`)
        )
      );
    t.pre_context.push(e);
  }
  if (void 0 === r[e])
    return (
      m(t),
      void (
        s.DEBUG_BUILD &&
        i.debug.error(`Could not find line ${e} in file ${t.filename}`)
      )
    );
  t.context_line = r[e];
  const o = E(e, n);
  t.post_context = [];
  for (let n = e + 1; n <= o; n++) {
    const e = r[n];
    if (void 0 === e) break;
    t.post_context.push(e);
  }
}
function S(e, t) {
  return Math.max(1, e - t);
}
function E(e, t) {
  return e + t;
}
function y(e, t) {
  return [S(e, t), E(e, t)];
}
const T = (e = {}) => ({
    name: "ContextLines",
    processEvent: (t, n, r) =>
      (async function (e, t) {
        const n = {};
        if (t > 0 && e.exception?.values)
          for (const t of e.exception.values)
            if (t.stacktrace?.frames?.length)
              for (let e = t.stacktrace.frames.length - 1; e >= 0; e--) {
                const r = t.stacktrace.frames[e],
                  o = r?.filename;
                !r ||
                  "string" != typeof o ||
                  "number" != typeof r.lineno ||
                  l(o) ||
                  d(r) ||
                  (n[o] || (n[o] = []), n[o].push(r.lineno));
              }
        const r = Object.keys(n);
        if (0 == r.length) return e;
        const o = [];
        for (const e of r) {
          if (c.get(e)) continue;
          const r = n[e];
          if (!r) continue;
          r.sort((e, t) => e - t);
          const i = f(r, t);
          if (i.every((t) => p(e, t))) continue;
          const s = u(a, e, {});
          o.push(h(e, i, s));
        }
        if (
          (await Promise.all(o).catch(() => {
            s.DEBUG_BUILD &&
              i.debug.log(
                "Failed to read one or more source files and resolve context lines",
              );
          }),
          t > 0 && e.exception?.values)
        )
          for (const n of e.exception.values)
            n.stacktrace?.frames &&
              n.stacktrace.frames.length > 0 &&
              g(n.stacktrace.frames, t, a);
        return e;
      })(
        t,
        e.frameContextLines ??
          r?.getDataCollectionOptions().frameContextLines ??
          7,
      ),
  }),
  b = i.defineIntegration(T);
(t.MAX_CONTEXTLINES_COLNO = 1e3),
  (t.MAX_CONTEXTLINES_LINENO = 1e4),
  (t._contextLinesIntegration = T),
  (t.addContextToFrame = _),
  (t.contextLinesIntegration = b);
