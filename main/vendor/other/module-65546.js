// vendor/other/module-65546.js — webpack module 65546
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { transform: r } = n(83748 /* vendor/other/module-83748 */);
e.exports = function (e) {
  return Object.assign(
    function t(n) {
      t.writeFn({
        message: {
          ...n,
          data: r({ logger: e, message: n, transport: t }),
        },
      });
    },
    {
      format: "{h}:{i}:{s}.{ms}{scope} › {text}",
      transforms: [i],
      writeFn({ message: { level: e, data: t } }) {
        const n = o[e] || o.info;
        setTimeout(() => n(...t));
      },
    },
  );
};
const o = {
  error: console.error,
  warn: console.warn,
  info: console.info,
  verbose: console.info,
  debug: console.debug,
  silly: console.debug,
  log: console.log,
};
function i({
  data: e = [],
  logger: t = {},
  message: n = {},
  transport: r = {},
}) {
  if ("function" == typeof r.format)
    return r.format({
      data: e,
      level: n?.level || "info",
      logger: t,
      message: n,
      transport: r,
    });
  if ("string" != typeof r.format) return e;
  e.unshift(r.format),
    "string" == typeof e[1] &&
      e[1].match(/%[1cdfiOos]/) &&
      (e = [`${e[0]}${e[1]}`, ...e.slice(2)]);
  const o = n.date || new Date();
  return (
    (e[0] = e[0]
      .replace(/\{(\w+)}/g, (e, r) => {
        switch (r) {
          case "level":
            return n.level;
          case "logId":
            return n.logId;
          case "scope": {
            const e = n.scope || t.scope?.defaultLabel;
            return e ? ` (${e})` : "";
          }
          case "text":
            return "";
          case "y":
            return o.getFullYear().toString(10);
          case "m":
            return (o.getMonth() + 1).toString(10).padStart(2, "0");
          case "d":
            return o.getDate().toString(10).padStart(2, "0");
          case "h":
            return o.getHours().toString(10).padStart(2, "0");
          case "i":
            return o.getMinutes().toString(10).padStart(2, "0");
          case "s":
            return o.getSeconds().toString(10).padStart(2, "0");
          case "ms":
            return o.getMilliseconds().toString(10).padStart(3, "0");
          case "iso":
            return o.toISOString();
          default:
            return n.variables?.[r] || e;
        }
      })
      .trim()),
    e
  );
}
