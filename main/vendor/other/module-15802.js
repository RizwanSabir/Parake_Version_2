// vendor/other/module-15802.js — webpack module 15802
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(57786 /* vendor/other/module-57786 */);
function o(e, t = !1) {
  return !(
    t ||
    (e &&
      !e.startsWith("/") &&
      !e.match(/^[A-Z]:/) &&
      !e.startsWith(".") &&
      !e.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) ||
    void 0 === e ||
    e.includes("node_modules/")
  );
}
function i(e) {
  const t = /^\s*[-]{4,}$/,
    n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/,
    i = /at (?:async )?(.+?) \(data:(.*?),/;
  return (a) => {
    const c = a.match(i);
    if (c) return { filename: `<data:${c[2]}>`, function: c[1] };
    const u = a.match(n);
    if (u) {
      let t, n, i, a, c;
      if (u[1]) {
        i = u[1];
        let e = i.lastIndexOf(".");
        if (("." === i[e - 1] && e--, e > 0)) {
          (t = i.slice(0, e)), (n = i.slice(e + 1));
          const r = t.indexOf(".Module");
          r > 0 && ((i = i.slice(r + 1)), (t = t.slice(0, r)));
        }
        a = void 0;
      }
      n && ((a = t), (c = n)),
        "<anonymous>" === n && ((c = void 0), (i = void 0)),
        void 0 === i &&
          ((c = c || r.UNKNOWN_FUNCTION), (i = a ? `${a}.${c}` : c));
      let l = r.normalizeStackTracePath(u[2]);
      const d = "native" === u[5];
      l || !u[5] || d || (l = u[5]);
      const p = l
        ? (function (e) {
            try {
              return decodeURI(e);
            } catch {
              return;
            }
          })(l)
        : void 0;
      return {
        filename: p ?? l,
        module: p && e?.(p),
        function: i,
        lineno: s(u[3]),
        colno: s(u[4]),
        in_app: o(l || "", d),
      };
    }
    return a.match(t) ? { filename: a } : void 0;
  };
}
function s(e) {
  return parseInt(e || "", 10) || void 0;
}
(t.filenameIsInApp = o),
  (t.node = i),
  (t.nodeStackLineParser = function (e) {
    return [90, i(e)];
  });
