// vendor/other/module-44467.js — webpack module 44467
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82579 /* vendor/other/module-82579 */),
  o = n(89684 /* vendor/other/module-89684 */),
  i = n(27352 /* vendor/other/module-27352 */),
  s = r.defineIntegration((e = {}) => {
    const t = e.root,
      n = e.prefix || "app:///",
      r = "window" in i.GLOBAL_OBJ && !!i.GLOBAL_OBJ.window,
      o = e.iteratee || a({ isBrowser: r, root: t, prefix: n });
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
function a({ isBrowser: e, root: t, prefix: n }) {
  return (r) => {
    if (!r.filename) return r;
    const i =
        /^[a-zA-Z]:\\/.test(r.filename) ||
        (r.filename.includes("\\") && !r.filename.includes("/")),
      s = /^\//.test(r.filename);
    if (e) {
      if (t) {
        const e = r.filename;
        0 === e.indexOf(t) && (r.filename = e.replace(t, n));
      }
    } else if (i || s) {
      const e = i
          ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/")
          : r.filename,
        s = t ? o.relative(t, e) : o.basename(e);
      r.filename = `${n}${s}`;
    }
    return r;
  };
}
(t.generateIteratee = a), (t.rewriteFramesIntegration = s);
