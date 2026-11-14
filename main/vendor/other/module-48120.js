// vendor/other/module-48120.js — webpack module 48120
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(58637 /* vendor/other/module-58637 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(41194 /* vendor/other/module-41194 */);
t.patchRequestToCaptureBody = function (e, t, n, s) {
  let a = 0;
  const c = [];
  o.DEBUG_BUILD && r.debug.log(s, "Patching request.on");
  const u = new WeakMap(),
    l = i.getMaxBodyByteLength(n);
  try {
    (e.on = e.addListener =
      new Proxy(e.on, {
        apply: (e, t, n) => {
          const [i, d, ...p] = n;
          if ("data" === i) {
            o.DEBUG_BUILD &&
              r.debug.log(
                s,
                `Handling request.on("data") with maximum body size of ${l}b`,
              );
            const n = new Proxy(d, {
              apply: (e, t, n) => {
                try {
                  const e = n[0],
                    t = Buffer.from(e);
                  a < l
                    ? (c.push(t), (a += t.byteLength))
                    : o.DEBUG_BUILD &&
                      r.debug.log(
                        s,
                        `Dropping request body chunk because maximum body length of ${l}b is exceeded.`,
                      );
                } catch (e) {
                  o.DEBUG_BUILD &&
                    r.debug.error(
                      s,
                      "Encountered error while storing body chunk.",
                    );
                }
                return Reflect.apply(e, t, n);
              },
            });
            return u.set(d, n), Reflect.apply(e, t, [i, n, ...p]);
          }
          return Reflect.apply(e, t, n);
        },
      })),
      (e.off = e.removeListener =
        new Proxy(e.off, {
          apply: (e, t, n) => {
            const [, r] = n,
              o = u.get(r);
            if (o) {
              u.delete(r);
              const i = n.slice();
              return (i[1] = o), Reflect.apply(e, t, i);
            }
            return Reflect.apply(e, t, n);
          },
        })),
      e.on("end", () => {
        try {
          const e = Buffer.concat(c).toString("utf-8");
          if (e) {
            const n =
              Buffer.byteLength(e, "utf-8") > l
                ? `${Buffer.from(e)
                    .subarray(0, l - 3)
                    .toString("utf-8")}...`
                : e;
            t.setSDKProcessingMetadata({
              normalizedRequest: { data: n },
            });
          }
        } catch (e) {
          o.DEBUG_BUILD &&
            r.debug.error(s, "Error building captured request body", e);
        }
      });
  } catch (e) {
    o.DEBUG_BUILD &&
      r.debug.error(s, "Error patching request to capture body", e);
  }
};
