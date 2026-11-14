// vendor/other/module-13393.js — webpack module 13393
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
e.exports = {
  stringify: function (
    e,
    { EOL: t = "\n", finalEOL: n = !0, replacer: r = null, spaces: o } = {},
  ) {
    const i = n ? t : "",
      s = JSON.stringify(e, r, o);
    if (void 0 === s)
      throw new TypeError(
        `Converting ${typeof e} value to JSON is not supported`,
      );
    return s.replace(/\n/g, t) + i;
  },
  stripBom: function (e) {
    return (
      Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "")
    );
  },
};
