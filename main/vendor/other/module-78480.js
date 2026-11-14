// vendor/other/module-78480.js — webpack module 78480
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
(e.exports = r), (r.strict = o), (r.loose = i);
var t = Object.prototype.toString,
  n = {
    "[object Int8Array]": !0,
    "[object Int16Array]": !0,
    "[object Int32Array]": !0,
    "[object Uint8Array]": !0,
    "[object Uint8ClampedArray]": !0,
    "[object Uint16Array]": !0,
    "[object Uint32Array]": !0,
    "[object Float32Array]": !0,
    "[object Float64Array]": !0,
  };
function r(e) {
  return o(e) || i(e);
}
function o(e) {
  return (
    e instanceof Int8Array ||
    e instanceof Int16Array ||
    e instanceof Int32Array ||
    e instanceof Uint8Array ||
    e instanceof Uint8ClampedArray ||
    e instanceof Uint16Array ||
    e instanceof Uint32Array ||
    e instanceof Float32Array ||
    e instanceof Float64Array
  );
}
function i(e) {
  return n[t.call(e)];
}
