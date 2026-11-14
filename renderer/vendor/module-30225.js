// vendor/module-30225.js — webpack module 30225
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */);
function o(e, t, n, o) {
  const i = {
    filename: e,
    function: "<anonymous>" === t ? r.UNKNOWN_FUNCTION : t,
    in_app: !0,
  };
  return void 0 !== n && (i.lineno = n), void 0 !== o && (i.colno = o), i;
}
const i = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  a =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  s = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  l = /at (.+?) ?\(data:(.+?),/,
  c = [
    30,
    (e) => {
      const t = e.match(l);
      if (t) return { filename: `<data:${t[2]}>`, function: t[1] };
      const n = i.exec(e);
      if (n) {
        const [, e, t, i] = n;
        return o(e, r.UNKNOWN_FUNCTION, +t, +i);
      }
      const c = a.exec(e);
      if (c) {
        if (0 === c[2]?.indexOf("eval")) {
          const e = s.exec(c[2]);
          e && ((c[2] = e[1]), (c[3] = e[2]), (c[4] = e[3]));
        }
        const [e, t] = _(c[1] || r.UNKNOWN_FUNCTION, c[2]);
        return o(t, e, c[3] ? +c[3] : void 0, c[4] ? +c[4] : void 0);
      }
    },
  ],
  u =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  d = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  p = [
    50,
    (e) => {
      const t = u.exec(e);
      if (t) {
        if (t[3] && t[3].indexOf(" > eval") > -1) {
          const e = d.exec(t[3]);
          e &&
            ((t[1] = t[1] || "eval"),
            (t[3] = e[1]),
            (t[4] = e[2]),
            (t[5] = ""));
        }
        let e = t[3],
          n = t[1] || r.UNKNOWN_FUNCTION;
        return (
          ([n, e] = _(n, e)),
          o(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        );
      }
    },
  ],
  f =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
  h = [
    40,
    (e) => {
      const t = f.exec(e);
      return t
        ? o(t[2], t[1] || r.UNKNOWN_FUNCTION, +t[3], t[4] ? +t[4] : void 0)
        : void 0;
    },
  ],
  m = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
  g = [
    10,
    (e) => {
      const t = m.exec(e);
      return t ? o(t[2], t[3] || r.UNKNOWN_FUNCTION, +t[1]) : void 0;
    },
  ],
  y =
    / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
  v = [
    20,
    (e) => {
      const t = y.exec(e);
      return t
        ? o(t[5], t[3] || t[4] || r.UNKNOWN_FUNCTION, +t[1], +t[2])
        : void 0;
    },
  ],
  b = [c, p],
  S = r.createStackParser(...b),
  _ = (e, t) => {
    const n = -1 !== e.indexOf("safari-extension"),
      o = -1 !== e.indexOf("safari-web-extension");
    return n || o
      ? [
          -1 !== e.indexOf("@") ? e.split("@")[0] : r.UNKNOWN_FUNCTION,
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  };
(t.chromeStackLineParser = c),
  (t.defaultStackLineParsers = b),
  (t.defaultStackParser = S),
  (t.geckoStackLineParser = p),
  (t.opera10StackLineParser = g),
  (t.opera11StackLineParser = v),
  (t.winjsStackLineParser = h);
