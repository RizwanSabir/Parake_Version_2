// vendor/other/module-42100.js — webpack module 42100
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var r = n(78480 /* vendor/other/module-78480 */).strict;
e.exports = function (e) {
  if (r(e)) {
    var t = Buffer.from(e.buffer);
    return (
      e.byteLength !== e.buffer.byteLength &&
        (t = t.slice(e.byteOffset, e.byteOffset + e.byteLength)),
      t
    );
  }
  return Buffer.from(e);
};
