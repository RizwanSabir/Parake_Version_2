// vendor/other/module-68603.js — webpack module 68603
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(24434 /* external/events */),
  o = n(79896 /* external/fs */),
  i = n(70857 /* external/os */);
e.exports = class extends r {
  asyncWriteQueue = [];
  bytesWritten = 0;
  hasActiveAsyncWriting = !1;
  path = null;
  initialSize = void 0;
  writeOptions = null;
  writeAsync = !1;
  constructor({
    path: e,
    writeOptions: t = { encoding: "utf8", flag: "a", mode: 438 },
    writeAsync: n = !1,
  }) {
    super(), (this.path = e), (this.writeOptions = t), (this.writeAsync = n);
  }
  get size() {
    return this.getSize();
  }
  clear() {
    try {
      return (
        o.writeFileSync(this.path, "", {
          mode: this.writeOptions.mode,
          flag: "w",
        }),
        this.reset(),
        !0
      );
    } catch (e) {
      return "ENOENT" === e.code || (this.emit("error", e, this), !1);
    }
  }
  crop(e) {
    try {
      const t = (function (e, t) {
        const n = Buffer.alloc(t),
          r = o.statSync(e),
          i = Math.min(r.size, t),
          s = Math.max(0, r.size - t),
          a = o.openSync(e, "r"),
          c = o.readSync(a, n, 0, i, s);
        return o.closeSync(a), n.toString("utf8", 0, c);
      })(this.path, e || 4096);
      this.clear(), this.writeLine(`[log cropped]${i.EOL}${t}`);
    } catch (e) {
      this.emit(
        "error",
        new Error(`Couldn't crop file ${this.path}. ${e.message}`),
        this,
      );
    }
  }
  getSize() {
    if (void 0 === this.initialSize)
      try {
        const e = o.statSync(this.path);
        this.initialSize = e.size;
      } catch (e) {
        this.initialSize = 0;
      }
    return this.initialSize + this.bytesWritten;
  }
  increaseBytesWrittenCounter(e) {
    this.bytesWritten += Buffer.byteLength(e, this.writeOptions.encoding);
  }
  isNull() {
    return !1;
  }
  nextAsyncWrite() {
    const e = this;
    if (this.hasActiveAsyncWriting || 0 === this.asyncWriteQueue.length) return;
    const t = this.asyncWriteQueue.join("");
    (this.asyncWriteQueue = []),
      (this.hasActiveAsyncWriting = !0),
      o.writeFile(this.path, t, this.writeOptions, (n) => {
        (e.hasActiveAsyncWriting = !1),
          n
            ? e.emit(
                "error",
                new Error(`Couldn't write to ${e.path}. ${n.message}`),
                this,
              )
            : e.increaseBytesWrittenCounter(t),
          e.nextAsyncWrite();
      });
  }
  reset() {
    (this.initialSize = void 0), (this.bytesWritten = 0);
  }
  toString() {
    return this.path;
  }
  writeLine(e) {
    if (((e += i.EOL), this.writeAsync))
      return this.asyncWriteQueue.push(e), void this.nextAsyncWrite();
    try {
      o.writeFileSync(this.path, e, this.writeOptions),
        this.increaseBytesWrittenCounter(e);
    } catch (e) {
      this.emit(
        "error",
        new Error(`Couldn't write to ${this.path}. ${e.message}`),
        this,
      );
    }
  }
};
