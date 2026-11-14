// vendor/other/module-85038.js — webpack module 85038
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(52018 /* external/tty */),
  o = n(39023 /* external/util */);
(t.init = function (e) {
  e.inspectOpts = {};
  const n = Object.keys(t.inspectOpts);
  for (let r = 0; r < n.length; r++) e.inspectOpts[n[r]] = t.inspectOpts[n[r]];
}),
  (t.log = function (...e) {
    return process.stderr.write(
      o.formatWithOptions(t.inspectOpts, ...e) + "\n",
    );
  }),
  (t.formatArgs = function (n) {
    const { namespace: r, useColors: o } = this;
    if (o) {
      const t = this.color,
        o = "[3" + (t < 8 ? t : "8;5;" + t),
        i = `  ${o};1m${r} [0m`;
      (n[0] = i + n[0].split("\n").join("\n" + i)),
        n.push(o + "m+" + e.exports.humanize(this.diff) + "[0m");
    } else
      n[0] =
        (t.inspectOpts.hideDate ? "" : new Date().toISOString() + " ") +
        r +
        " " +
        n[0];
  }),
  (t.save = function (e) {
    e ? (process.env.DEBUG = e) : delete process.env.DEBUG;
  }),
  (t.load = function () {
    return process.env.DEBUG;
  }),
  (t.useColors = function () {
    return "colors" in t.inspectOpts
      ? Boolean(t.inspectOpts.colors)
      : r.isatty(process.stderr.fd);
  }),
  (t.destroy = o.deprecate(
    () => {},
    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
  )),
  (t.colors = [6, 2, 3, 4, 5, 1]);
try {
  const e = n(35600 /* vendor/other/module-35600 */);
  e &&
    (e.stderr || e).level >= 2 &&
    (t.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63,
      68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128,
      129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
      170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202,
      203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
    ]);
} catch (e) {}
(t.inspectOpts = Object.keys(process.env)
  .filter((e) => /^debug_/i.test(e))
  .reduce((e, t) => {
    const n = t
      .substring(6)
      .toLowerCase()
      .replace(/_([a-z])/g, (e, t) => t.toUpperCase());
    let r = process.env[t];
    return (
      (r =
        !!/^(yes|on|true|enabled)$/i.test(r) ||
        (!/^(no|off|false|disabled)$/i.test(r) &&
          ("null" === r ? null : Number(r)))),
      (e[n] = r),
      e
    );
  }, {})),
  (e.exports = n(27891 /* vendor/other/module-27891 */)(t));
const { formatters: i } = e.exports;
(i.o = function (e) {
  return (
    (this.inspectOpts.colors = this.useColors),
    o
      .inspect(e, this.inspectOpts)
      .split("\n")
      .map((e) => e.trim())
      .join(" ")
  );
}),
  (i.O = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors), o.inspect(e, this.inspectOpts)
    );
  });
