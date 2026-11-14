// vendor/other/module-41961.js — webpack module 41961
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { transform: r } = n(83748 /* vendor/other/module-83748 */);
function o(e) {
  const t = Math.abs(e);
  return `${e > 0 ? "-" : "+"}${Math.floor(t / 60)
    .toString()
    .padStart(2, "0")}:${(t % 60).toString().padStart(2, "0")}`;
}
function i({ data: e, logger: t, message: n }) {
  const { defaultLabel: r, labelLength: o } = t?.scope || {},
    i = e[0];
  let s,
    a = n.scope;
  return (
    a || (a = r),
    (s =
      "" === a
        ? o > 0
          ? "".padEnd(o + 3)
          : ""
        : "string" == typeof a
          ? ` (${a})`.padEnd(o + 3)
          : ""),
    (e[0] = i.replace("{scope}", s)),
    e
  );
}
function s({ data: e, message: t }) {
  let n = e[0];
  if ("string" != typeof n) return e;
  n = n.replace("{level}]", `${t.level}]`.padEnd(6, " "));
  const r = t.date || new Date();
  return (
    (e[0] = n
      .replace(/\{(\w+)}/g, (e, n) => {
        switch (n) {
          case "level":
            return t.level || "info";
          case "logId":
            return t.logId;
          case "y":
            return r.getFullYear().toString(10);
          case "m":
            return (r.getMonth() + 1).toString(10).padStart(2, "0");
          case "d":
            return r.getDate().toString(10).padStart(2, "0");
          case "h":
            return r.getHours().toString(10).padStart(2, "0");
          case "i":
            return r.getMinutes().toString(10).padStart(2, "0");
          case "s":
            return r.getSeconds().toString(10).padStart(2, "0");
          case "ms":
            return r.getMilliseconds().toString(10).padStart(3, "0");
          case "z":
            return o(r.getTimezoneOffset());
          case "iso":
            return r.toISOString();
          default:
            return t.variables?.[n] || e;
        }
      })
      .trim()),
    e
  );
}
function a({ data: e }) {
  const t = e[0];
  if ("string" != typeof t) return e;
  if (t.lastIndexOf("{text}") === t.length - 6)
    return (e[0] = t.replace(/\s?{text}/, "")), "" === e[0] && e.shift(), e;
  const n = t.split("{text}");
  let r = [];
  return (
    "" !== n[0] && r.push(n[0]),
    (r = r.concat(e.slice(1))),
    "" !== n[1] && r.push(n[1]),
    r
  );
}
e.exports = {
  concatFirstStringElements: function ({ data: e }) {
    return "string" != typeof e[0] ||
      "string" != typeof e[1] ||
      e[0].match(/%[1cdfiOos]/)
      ? e
      : [`${e[0]} ${e[1]}`, ...e.slice(2)];
  },
  formatScope: i,
  formatText: a,
  formatVariables: s,
  timeZoneFromOffset: o,
  format({ message: e, logger: t, transport: n, data: o = e?.data }) {
    switch (typeof n.format) {
      case "string":
        return r({
          message: e,
          logger: t,
          transforms: [s, i, a],
          transport: n,
          initialData: [n.format, ...o],
        });
      case "function":
        return n.format({
          data: o,
          level: e?.level || "info",
          logger: t,
          message: e,
          transport: n,
        });
      default:
        return o;
    }
  },
};
