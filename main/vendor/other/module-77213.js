// vendor/other/module-77213.js — webpack module 77213
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { EMPTY_BUFFER: r } = n(74033 /* vendor/other/module-74033 */),
  o = Buffer[Symbol.species];
function i(e, t, n, r, o) {
  for (let i = 0; i < o; i++) n[r + i] = e[i] ^ t[3 & i];
}
function s(e, t) {
  for (let n = 0; n < e.length; n++) e[n] ^= t[3 & n];
}
if (
  ((e.exports = {
    concat: function (e, t) {
      if (0 === e.length) return r;
      if (1 === e.length) return e[0];
      const n = Buffer.allocUnsafe(t);
      let i = 0;
      for (let t = 0; t < e.length; t++) {
        const r = e[t];
        n.set(r, i), (i += r.length);
      }
      return i < t ? new o(n.buffer, n.byteOffset, i) : n;
    },
    mask: i,
    toArrayBuffer: function (e) {
      return e.length === e.buffer.byteLength
        ? e.buffer
        : e.buffer.slice(e.byteOffset, e.byteOffset + e.length);
    },
    toBuffer: function e(t) {
      if (((e.readOnly = !0), Buffer.isBuffer(t))) return t;
      let n;
      return (
        t instanceof ArrayBuffer
          ? (n = new o(t))
          : ArrayBuffer.isView(t)
            ? (n = new o(t.buffer, t.byteOffset, t.byteLength))
            : ((n = Buffer.from(t)), (e.readOnly = !1)),
        n
      );
    },
    unmask: s,
  }),
  !process.env.WS_NO_BUFFER_UTIL)
)
  try {
    const t = n(
      Object(
        (function () {
          var e = new Error("Cannot find module 'bufferutil'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        })(),
      ),
    );
    (e.exports.mask = function (e, n, r, o, s) {
      s < 48 ? i(e, n, r, o, s) : t.mask(e, n, r, o, s);
    }),
      (e.exports.unmask = function (e, n) {
        e.length < 32 ? s(e, n) : t.unmask(e, n);
      });
  } catch (e) {}
