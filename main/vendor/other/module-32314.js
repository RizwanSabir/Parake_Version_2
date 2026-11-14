// vendor/other/module-32314.js — webpack module 32314
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */).parseSemver(
    process.versions.node,
  ),
  o = r.major,
  i = r.minor;
(t.NODE_MAJOR = o), (t.NODE_MINOR = i), (t.NODE_VERSION = r);
