// app/native/loader-win32-arm64-msvc.js — webpack module 2027
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
e = n.nmd(e);
try {
  process.dlopen(
    e,
    n(16928 /* external/path */).join(
      __dirname,
      n.p,
      "parakeetai-native.win32-arm64-msvc.node",
    ),
  );
} catch (e) {
  throw new Error("node-loader:\n" + e);
}
