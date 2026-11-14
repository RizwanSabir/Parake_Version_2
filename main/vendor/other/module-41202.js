// vendor/other/module-41202.js — webpack module 41202
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n(27051 /* vendor/other/module-27051 */);
const { Duplex: r } = n(2203 /* external/stream */);
function o(e) {
  e.emit("close");
}
function i() {
  !this.destroyed && this._writableState.finished && this.destroy();
}
function s(e) {
  this.removeListener("error", s),
    this.destroy(),
    0 === this.listenerCount("error") && this.emit("error", e);
}
e.exports = function (e, t) {
  let n = !0;
  const a = new r({
    ...t,
    autoDestroy: !1,
    emitClose: !1,
    objectMode: !1,
    writableObjectMode: !1,
  });
  return (
    e.on("message", function (t, n) {
      const r = !n && a._readableState.objectMode ? t.toString() : t;
      a.push(r) || e.pause();
    }),
    e.once("error", function (e) {
      a.destroyed || ((n = !1), a.destroy(e));
    }),
    e.once("close", function () {
      a.destroyed || a.push(null);
    }),
    (a._destroy = function (t, r) {
      if (e.readyState === e.CLOSED) return r(t), void process.nextTick(o, a);
      let i = !1;
      e.once("error", function (e) {
        (i = !0), r(e);
      }),
        e.once("close", function () {
          i || r(t), process.nextTick(o, a);
        }),
        n && e.terminate();
    }),
    (a._final = function (t) {
      e.readyState !== e.CONNECTING
        ? null !== e._socket &&
          (e._socket._writableState.finished
            ? (t(), a._readableState.endEmitted && a.destroy())
            : (e._socket.once("finish", function () {
                t();
              }),
              e.close()))
        : e.once("open", function () {
            a._final(t);
          });
    }),
    (a._read = function () {
      e.isPaused && e.resume();
    }),
    (a._write = function (t, n, r) {
      e.readyState !== e.CONNECTING
        ? e.send(t, r)
        : e.once("open", function () {
            a._write(t, n, r);
          });
    }),
    a.on("end", i),
    a.on("error", s),
    a
  );
};
