// vendor/module-48120.js — webpack module 48120
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(58637 /* vendor/module-58637 */),
  o = n(75703 /* vendor/module-75703 */),
  i = n(41194 /* vendor/module-41194 */);
t.patchRequestToCaptureBody = function (e, t, n, a) {
  let s = 0;
  const l = [];
  o.DEBUG_BUILD && r.debug.log(a, "Patching request.on");
  const c = new WeakMap(),
    u = i.getMaxBodyByteLength(n);
  try {
    (e.on = e.addListener =
      new Proxy(e.on, {
        apply: (e, t, n) => {
          const [i, d, ...p] = n;
          if ("data" === i) {
            o.DEBUG_BUILD &&
              r.debug.log(
                a,
                `Handling request.on("data") with maximum body size of ${u}b`,
              );
            const n = new Proxy(d, {
              apply: (e, t, n) => {
                try {
                  const e = n[0],
                    t = Buffer.from(e);
                  s < u
                    ? (l.push(t), (s += t.byteLength))
                    : o.DEBUG_BUILD &&
                      r.debug.log(
                        a,
                        `Dropping request body chunk because maximum body length of ${u}b is exceeded.`,
                      );
                } catch (e) {
                  o.DEBUG_BUILD &&
                    r.debug.error(
                      a,
                      "Encountered error while storing body chunk.",
                    );
                }
                return Reflect.apply(e, t, n);
              },
            });
            return c.set(d, n), Reflect.apply(e, t, [i, n, ...p]);
          }
          return Reflect.apply(e, t, n);
        },
      })),
      (e.off = e.removeListener =
        new Proxy(e.off, {
          apply: (e, t, n) => {
            const [, r] = n,
              o = c.get(r);
            if (o) {
              c.delete(r);
              const i = n.slice();
              return (i[1] = o), Reflect.apply(e, t, i);
            }
            return Reflect.apply(e, t, n);
          },
        })),
      e.on("end", () => {
        try {
          const e = Buffer.concat(l).toString("utf-8");
          if (e) {
            const n =
              Buffer.byteLength(e, "utf-8") > u
                ? `${Buffer.from(e)
                    .subarray(0, u - 3)
                    .toString("utf-8")}...`
                : e;
            t.setSDKProcessingMetadata({
              normalizedRequest: { data: n },
            });
          }
        } catch (e) {
          o.DEBUG_BUILD &&
            r.debug.error(a, "Error building captured request body", e);
        }
      });
  } catch (e) {
    o.DEBUG_BUILD &&
      r.debug.error(a, "Error patching request to capture body", e);
  }
};
