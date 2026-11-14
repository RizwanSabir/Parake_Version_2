// vendor/other/module-29012.js — webpack module 29012
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var r = n(2203 /* external/stream */).Stream;
e.exports = function (e) {
  return {
    ReadStream: function t(n, o) {
      if (!(this instanceof t)) return new t(n, o);
      r.call(this);
      var i = this;
      (this.path = n),
        (this.fd = null),
        (this.readable = !0),
        (this.paused = !1),
        (this.flags = "r"),
        (this.mode = 438),
        (this.bufferSize = 65536),
        (o = o || {});
      for (var s = Object.keys(o), a = 0, c = s.length; a < c; a++) {
        var u = s[a];
        this[u] = o[u];
      }
      if (
        (this.encoding && this.setEncoding(this.encoding),
        void 0 !== this.start)
      ) {
        if ("number" != typeof this.start)
          throw TypeError("start must be a Number");
        if (void 0 === this.end) this.end = 1 / 0;
        else if ("number" != typeof this.end)
          throw TypeError("end must be a Number");
        if (this.start > this.end) throw new Error("start must be <= end");
        this.pos = this.start;
      }
      null === this.fd
        ? e.open(this.path, this.flags, this.mode, function (e, t) {
            if (e) return i.emit("error", e), void (i.readable = !1);
            (i.fd = t), i.emit("open", t), i._read();
          })
        : process.nextTick(function () {
            i._read();
          });
    },
    WriteStream: function t(n, o) {
      if (!(this instanceof t)) return new t(n, o);
      r.call(this),
        (this.path = n),
        (this.fd = null),
        (this.writable = !0),
        (this.flags = "w"),
        (this.encoding = "binary"),
        (this.mode = 438),
        (this.bytesWritten = 0),
        (o = o || {});
      for (var i = Object.keys(o), s = 0, a = i.length; s < a; s++) {
        var c = i[s];
        this[c] = o[c];
      }
      if (void 0 !== this.start) {
        if ("number" != typeof this.start)
          throw TypeError("start must be a Number");
        if (this.start < 0) throw new Error("start must be >= zero");
        this.pos = this.start;
      }
      (this.busy = !1),
        (this._queue = []),
        null === this.fd &&
          ((this._open = e.open),
          this._queue.push([
            this._open,
            this.path,
            this.flags,
            this.mode,
            void 0,
          ]),
          this.flush());
    },
  };
};
