// vendor/other/module-96963.js — webpack module 96963
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { concatFirstStringElements: r, format: o } = n(
    41961 /* vendor/other/module-41961 */,
  ),
  { maxDepth: i, toJSON: s } = n(62710 /* vendor/other/module-62710 */),
  { applyAnsiStyles: a, removeStyles: c } = n(
    82501 /* vendor/other/module-82501 */,
  ),
  { transform: u } = n(83748 /* vendor/other/module-83748 */),
  l = {
    error: console.error,
    warn: console.warn,
    info: console.info,
    verbose: console.info,
    debug: console.debug,
    silly: console.debug,
    log: console.log,
  };
e.exports = p;
const d = `%c{h}:{i}:{s}.{ms}{scope}%c ${"win32" === process.platform ? ">" : "›"} {text}`;
function p(e) {
  return Object.assign(
    function t(n) {
      const r = u({ logger: e, message: n, transport: t });
      t.writeFn({ message: { ...n, data: r } });
    },
    {
      colorMap: {
        error: "red",
        warn: "yellow",
        info: "cyan",
        verbose: "unset",
        debug: "gray",
        silly: "gray",
        default: "unset",
      },
      format: d,
      level: "silly",
      transforms: [f, o, h, r, i, s],
      useStyles: process.env.FORCE_STYLES,
      writeFn({ message: e }) {
        (l[e.level] || l.info)(...e.data);
      },
    },
  );
}
function f({ data: e, message: t, transport: n }) {
  return "string" == typeof n.format && n.format.includes("%c")
    ? [`color:${g(t.level, n)}`, "color:unset", ...e]
    : e;
}
function h(e) {
  const { message: t, transport: n } = e;
  return (
    (function (e, t) {
      if ("boolean" == typeof e) return e;
      const n = "error" === t || "warn" === t ? process.stderr : process.stdout;
      return n && n.isTTY;
    })(n.useStyles, t.level)
      ? a
      : c
  )(e);
}
function g(e, t) {
  return t.colorMap[e] || t.colorMap.default;
}
Object.assign(p, { DEFAULT_FORMAT: d });
