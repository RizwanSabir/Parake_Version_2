// vendor/module-15802.js — webpack module 15802
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(57786 /* vendor/module-57786 */);
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
  return (s) => {
    const l = s.match(i);
    if (l) return { filename: `<data:${l[2]}>`, function: l[1] };
    const c = s.match(n);
    if (c) {
      let t, n, i, s, l;
      if (c[1]) {
        i = c[1];
        let e = i.lastIndexOf(".");
        if (("." === i[e - 1] && e--, e > 0)) {
          (t = i.slice(0, e)), (n = i.slice(e + 1));
          const r = t.indexOf(".Module");
          r > 0 && ((i = i.slice(r + 1)), (t = t.slice(0, r)));
        }
        s = void 0;
      }
      n && ((s = t), (l = n)),
        "<anonymous>" === n && ((l = void 0), (i = void 0)),
        void 0 === i &&
          ((l = l || r.UNKNOWN_FUNCTION), (i = s ? `${s}.${l}` : l));
      let u = r.normalizeStackTracePath(c[2]);
      const d = "native" === c[5];
      u || !c[5] || d || (u = c[5]);
      const p = u
        ? (function (e) {
            try {
              return decodeURI(e);
            } catch {
              return;
            }
          })(u)
        : void 0;
      return {
        filename: p ?? u,
        module: p && e?.(p),
        function: i,
        lineno: a(c[3]),
        colno: a(c[4]),
        in_app: o(u || "", d),
      };
    }
    return s.match(t) ? { filename: s } : void 0;
  };
}
function a(e) {
  return parseInt(e || "", 10) || void 0;
}
(t.filenameIsInApp = o),
  (t.node = i),
  (t.nodeStackLineParser = function (e) {
    return [90, i(e)];
  });
