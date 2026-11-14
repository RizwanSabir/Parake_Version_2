// vendor/module-76148.js — webpack module 76148
// params: (e, t) = (module, exports, require)
"use strict";
t.formatRelativeDate = function (e, t = new Date()) {
  const r = (e) =>
      new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime(),
    o = Math.round((r(e) - r(t)) / 864e5),
    i = Math.abs(o);
  if (i < 7) return n.format(o, "day");
  if (i < 28) return n.format(Math.round(o / 7), "week");
  const a =
    12 * (e.getFullYear() - t.getFullYear()) + (e.getMonth() - t.getMonth());
  return 0 === a
    ? n.format(Math.round(o / 7), "week")
    : Math.abs(a) < 12
      ? n.format(a, "month")
      : n.format(Math.trunc(a / 12), "year");
};
const n = new Intl.RelativeTimeFormat(void 0, { numeric: "auto" });
