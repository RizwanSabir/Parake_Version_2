// vendor/module-44467.js — webpack module 44467
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82579 /* vendor/module-82579 */),
  o = n(89684 /* vendor/module-89684 */),
  i = n(27352 /* vendor/module-27352 */),
  a = r.defineIntegration((e = {}) => {
    const t = e.root,
      n = e.prefix || "app:///",
      r = "window" in i.GLOBAL_OBJ && !!i.GLOBAL_OBJ.window,
      o = e.iteratee || s({ isBrowser: r, root: t, prefix: n });
    return {
      name: "RewriteFrames",
      processEvent(e) {
        let t = e;
        return (
          e.exception &&
            Array.isArray(e.exception.values) &&
            (t = (function (e) {
              try {
                return {
                  ...e,
                  exception: {
                    ...e.exception,
                    values: e.exception.values.map((e) => {
                      return {
                        ...e,
                        ...(e.stacktrace && {
                          stacktrace:
                            ((t = e.stacktrace),
                            {
                              ...t,
                              frames: t?.frames?.map((e) => o(e)),
                            }),
                        }),
                      };
                      var t;
                    }),
                  },
                };
              } catch {
                return e;
              }
            })(t)),
          t
        );
      },
    };
  });
function s({ isBrowser: e, root: t, prefix: n }) {
  return (r) => {
    if (!r.filename) return r;
    const i =
        /^[a-zA-Z]:\\/.test(r.filename) ||
        (r.filename.includes("\\") && !r.filename.includes("/")),
      a = /^\//.test(r.filename);
    if (e) {
      if (t) {
        const e = r.filename;
        0 === e.indexOf(t) && (r.filename = e.replace(t, n));
      }
    } else if (i || a) {
      const e = i
          ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/")
          : r.filename,
        a = t ? o.relative(t, e) : o.basename(e);
      r.filename = `${n}${a}`;
    }
    return r;
  };
}
(t.generateIteratee = s), (t.rewriteFramesIntegration = a);
