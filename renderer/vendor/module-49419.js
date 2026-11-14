// vendor/module-49419.js — webpack module 49419
// params: (e, t, n) = (module, exports, require)
const r = n(87498 /* vendor/module-87498 */),
  o = n(4064 /* vendor/module-4064 */),
  i = r.__toESM(n(65566 /* vendor/module-65566 */));
var a = r.__toESM(o.require_objectSpread2(), 1);
const s = {
    css: {
      query: ["72e3ff", "3fb0d8"],
      mutation: ["c5a3fc", "904dfc"],
      subscription: ["ff49e1", "d83fbe"],
    },
    ansi: {
      regular: {
        query: ["[30;46m", "[97;46m"],
        mutation: ["[30;45m", "[97;45m"],
        subscription: ["[30;42m", "[97;42m"],
      },
      bold: {
        query: ["[1;30;46m", "[1;97;46m"],
        mutation: ["[1;30;45m", "[1;97;45m"],
        subscription: ["[1;30;42m", "[1;97;42m"],
      },
    },
  },
  l =
    ({ c: e = console, colorMode: t = "css", withContext: n }) =>
    (r) => {
      const o = r.input,
        i =
          "undefined" != typeof FormData && o instanceof FormData
            ? Object.fromEntries(o)
            : o;
      const { parts: l, args: c } = (function (e) {
          const {
              direction: t,
              type: n,
              withContext: r,
              path: o,
              id: i,
              input: l,
            } = e,
            c = [],
            u = [];
          if ("none" === e.colorMode)
            c.push("up" === t ? ">>" : "<<", n, `#${i}`, o);
          else if ("ansi" === e.colorMode) {
            const [e, r] = s.ansi.regular[n],
              [a, l] = s.ansi.bold[n],
              u = "[0m";
            c.push(
              "up" === t ? e : r,
              "up" === t ? ">>" : "<<",
              n,
              "up" === t ? a : l,
              `#${i}`,
              o,
              u,
            );
          } else {
            const [e, r] = s.css[n],
              a = `\n    background-color: #${"up" === t ? e : r};\n    color: ${"up" === t ? "black" : "white"};\n    padding: 2px;\n  `;
            c.push(
              "%c",
              "up" === t ? ">>" : "<<",
              n,
              `#${i}`,
              `%c${o}%c`,
              "%O",
            ),
              u.push(
                a,
                `${a}; font-weight: bold;`,
                `${a}; font-weight: normal;`,
              );
          }
          return (
            "up" === t
              ? u.push(r ? { input: l, context: e.context } : { input: l })
              : u.push(
                  (0, a.default)(
                    {
                      input: l,
                      result: e.result,
                      elapsedMs: e.elapsedMs,
                    },
                    r && { context: e.context },
                  ),
                ),
            { parts: c, args: u }
          );
        })(
          (0, a.default)(
            (0, a.default)({}, r),
            {},
            { colorMode: t, input: i, withContext: n },
          ),
        ),
        u =
          "down" === r.direction &&
          r.result &&
          (r.result instanceof Error ||
            ("error" in r.result.result && r.result.result.error))
            ? "error"
            : "log";
      e[u].apply(null, [l.join(" ")].concat(c));
    };
function c(e = {}) {
  var t, n;
  const { enabled: r = () => !0 } = e,
    o =
      null !== (t = e.colorMode) && void 0 !== t
        ? t
        : "undefined" == typeof window
          ? "ansi"
          : "css",
    s = null !== (n = e.withContext) && void 0 !== n ? n : "css" === o,
    { logger: c = l({ c: e.console, colorMode: o, withContext: s }) } = e;
  return () =>
    ({ op: e, next: t }) =>
      (0, i.observable)((n) => {
        r((0, a.default)((0, a.default)({}, e), {}, { direction: "up" })) &&
          c((0, a.default)((0, a.default)({}, e), {}, { direction: "up" }));
        const o = Date.now();
        function s(t) {
          const n = Date.now() - o;
          r(
            (0, a.default)(
              (0, a.default)({}, e),
              {},
              { direction: "down", result: t },
            ),
          ) &&
            c(
              (0, a.default)(
                (0, a.default)({}, e),
                {},
                { direction: "down", elapsedMs: n, result: t },
              ),
            );
        }
        return t(e)
          .pipe(
            (0, i.tap)({
              next(e) {
                s(e);
              },
              error(e) {
                s(e);
              },
            }),
          )
          .subscribe(n);
      });
}
Object.defineProperty(t, "loggerLink", {
  enumerable: !0,
  get: function () {
    return c;
  },
});
