// vendor/other/module-82081.js — webpack module 82081
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { transform: r } = n(83748 /* vendor/other/module-83748 */);
e.exports = function (e) {
  return Object.assign(
    function t(n) {
      if (window.__electronLog)
        try {
          const o = r({
            initialData: n,
            logger: e,
            message: n,
            transport: t,
          });
          __electronLog.sendToMain(o);
        } catch (t) {
          e.transports.console({
            data: ["electronLog.transports.ipc", t, "data:", n.data],
            level: "error",
          });
        }
      else
        e.processMessage(
          {
            data: [
              "electron-log: logger isn't initialized in the main process",
            ],
            level: "error",
          },
          { transports: ["console"] },
        );
    },
    { depth: 5, transforms: [s] },
  );
};
const o = new Set([Promise, WeakMap, WeakSet]);
function i(e) {
  return Object(e) !== e;
}
function s({
  data: e,
  depth: t,
  seen: n = new WeakSet(),
  transport: r = {},
} = {}) {
  const a = t || r.depth || 5;
  return n.has(e)
    ? "[Circular]"
    : a < 1
      ? i(e)
        ? e
        : Array.isArray(e)
          ? "[Array]"
          : `[${typeof e}]`
      : ["function", "symbol"].includes(typeof e)
        ? e.toString()
        : i(e)
          ? e
          : o.has(e.constructor)
            ? `[${e.constructor.name}]`
            : Array.isArray(e)
              ? e.map((e) => s({ data: e, depth: a - 1, seen: n }))
              : e instanceof Date
                ? e.toISOString()
                : e instanceof Error
                  ? e.stack
                  : e instanceof Map
                    ? new Map(
                        Array.from(e).map(([e, t]) => [
                          s({ data: e, depth: a - 1, seen: n }),
                          s({ data: t, depth: a - 1, seen: n }),
                        ]),
                      )
                    : e instanceof Set
                      ? new Set(
                          Array.from(e).map((e) =>
                            s({ data: e, depth: a - 1, seen: n }),
                          ),
                        )
                      : (n.add(e),
                        Object.fromEntries(
                          Object.entries(e).map(([e, t]) => [
                            e,
                            s({ data: t, depth: a - 1, seen: n }),
                          ]),
                        ));
}
