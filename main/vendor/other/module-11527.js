// vendor/other/module-11527.js — webpack module 11527
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.DataSplitter = void 0), (t.copyData = u);
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(79896 /* external/fs */),
  i = n(2203 /* external/stream */),
  s = n(23920 /* vendor/other/module-23920 */),
  a = Buffer.from("\r\n\r\n");
var c;
function u(e, t, n, r, i) {
  const s = (0, o.createReadStream)("", {
    fd: n,
    autoClose: !1,
    start: e.start,
    end: e.end - 1,
  });
  s.on("error", r), s.once("end", i), s.pipe(t, { end: !1 });
}
!(function (e) {
  (e[(e.INIT = 0)] = "INIT"),
    (e[(e.HEADER = 1)] = "HEADER"),
    (e[(e.BODY = 2)] = "BODY");
})(c || (c = {}));
class l extends i.Writable {
  constructor(e, t, n, r, o, i, s, a) {
    super(),
      (this.out = e),
      (this.options = t),
      (this.partIndexToTaskIndex = n),
      (this.partIndexToLength = o),
      (this.finishHandler = i),
      (this.grandTotalBytes = s),
      (this.onProgress = a),
      (this.start = Date.now()),
      (this.nextUpdate = this.start + 1e3),
      (this.transferred = 0),
      (this.delta = 0),
      (this.partIndex = -1),
      (this.headerListBuffer = null),
      (this.readState = c.INIT),
      (this.ignoreByteCount = 0),
      (this.remainingPartDataCount = 0),
      (this.actualPartLength = 0),
      (this.boundaryLength = r.length + 4),
      (this.ignoreByteCount = this.boundaryLength - 2);
  }
  get isFinished() {
    return this.partIndex === this.partIndexToLength.length;
  }
  _write(e, t, n) {
    this.isFinished ||
      this.handleData(e)
        .then(() => {
          if (this.onProgress) {
            const e = Date.now();
            (e >= this.nextUpdate ||
              this.transferred === this.grandTotalBytes) &&
              this.grandTotalBytes &&
              (e - this.start) / 1e3 &&
              ((this.nextUpdate = e + 1e3),
              this.onProgress({
                total: this.grandTotalBytes,
                delta: this.delta,
                transferred: this.transferred,
                percent: (this.transferred / this.grandTotalBytes) * 100,
                bytesPerSecond: Math.round(
                  this.transferred / ((e - this.start) / 1e3),
                ),
              }),
              (this.delta = 0));
          }
          n();
        })
        .catch(n);
  }
  async handleData(e) {
    let t = 0;
    if (0 !== this.ignoreByteCount && 0 !== this.remainingPartDataCount)
      throw (0, r.newError)(
        "Internal error",
        "ERR_DATA_SPLITTER_BYTE_COUNT_MISMATCH",
      );
    if (this.ignoreByteCount > 0) {
      const n = Math.min(this.ignoreByteCount, e.length);
      (this.ignoreByteCount -= n), (t = n);
    } else if (this.remainingPartDataCount > 0) {
      const n = Math.min(this.remainingPartDataCount, e.length);
      (this.remainingPartDataCount -= n),
        await this.processPartData(e, 0, n),
        (t = n);
    }
    if (t !== e.length) {
      if (this.readState === c.HEADER) {
        const n = this.searchHeaderListEnd(e, t);
        if (-1 === n) return;
        (t = n), (this.readState = c.BODY), (this.headerListBuffer = null);
      }
      for (;;) {
        if (this.readState === c.BODY) this.readState = c.INIT;
        else {
          this.partIndex++;
          let n = this.partIndexToTaskIndex.get(this.partIndex);
          if (null == n) {
            if (!this.isFinished)
              throw (0, r.newError)(
                "taskIndex is null",
                "ERR_DATA_SPLITTER_TASK_INDEX_IS_NULL",
              );
            n = this.options.end;
          }
          const o =
            0 === this.partIndex
              ? this.options.start
              : this.partIndexToTaskIndex.get(this.partIndex - 1) + 1;
          if (o < n) await this.copyExistingData(o, n);
          else if (o > n)
            throw (0, r.newError)(
              "prevTaskIndex must be < taskIndex",
              "ERR_DATA_SPLITTER_TASK_INDEX_ASSERT_FAILED",
            );
          if (this.isFinished)
            return this.onPartEnd(), void this.finishHandler();
          if (((t = this.searchHeaderListEnd(e, t)), -1 === t))
            return void (this.readState = c.HEADER);
        }
        const n = this.partIndexToLength[this.partIndex],
          o = t + n,
          i = Math.min(o, e.length);
        if (
          (await this.processPartStarted(e, t, i),
          (this.remainingPartDataCount = n - (i - t)),
          this.remainingPartDataCount > 0)
        )
          return;
        if (((t = o + this.boundaryLength), t >= e.length))
          return void (this.ignoreByteCount =
            this.boundaryLength - (e.length - o));
      }
    }
  }
  copyExistingData(e, t) {
    return new Promise((n, r) => {
      const o = () => {
        if (e === t) return void n();
        const i = this.options.tasks[e];
        i.kind === s.OperationKind.COPY
          ? u(i, this.out, this.options.oldFileFd, r, () => {
              e++, o();
            })
          : r(new Error("Task kind must be COPY"));
      };
      o();
    });
  }
  searchHeaderListEnd(e, t) {
    const n = e.indexOf(a, t);
    if (-1 !== n) return n + a.length;
    const r = 0 === t ? e : e.slice(t);
    return (
      null == this.headerListBuffer
        ? (this.headerListBuffer = r)
        : (this.headerListBuffer = Buffer.concat([this.headerListBuffer, r])),
      -1
    );
  }
  onPartEnd() {
    const e = this.partIndexToLength[this.partIndex - 1];
    if (this.actualPartLength !== e)
      throw (0, r.newError)(
        `Expected length: ${e} differs from actual: ${this.actualPartLength}`,
        "ERR_DATA_SPLITTER_LENGTH_MISMATCH",
      );
    this.actualPartLength = 0;
  }
  processPartStarted(e, t, n) {
    return (
      0 !== this.partIndex && this.onPartEnd(), this.processPartData(e, t, n)
    );
  }
  processPartData(e, t, n) {
    (this.actualPartLength += n - t),
      (this.transferred += n - t),
      (this.delta += n - t);
    const r = this.out;
    return r.write(0 === t && e.length === n ? e : e.slice(t, n))
      ? Promise.resolve()
      : new Promise((e, t) => {
          r.on("error", t),
            r.once("drain", () => {
              r.removeListener("error", t), e();
            });
        });
  }
}
t.DataSplitter = l;
