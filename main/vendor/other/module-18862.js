// vendor/other/module-18862.js — webpack module 18862
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(79896 /* external/fs */),
  o = (process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version)
    .replace(/^v/, "")
    .split("."),
  i = +o[0] > 10 || (10 === +o[0] && +o[1] >= 12),
  s = i ? (e) => e.mkdir === r.mkdir : () => !1,
  a = i ? (e) => e.mkdirSync === r.mkdirSync : () => !1;
e.exports = { useNative: s, useNativeSync: a };
