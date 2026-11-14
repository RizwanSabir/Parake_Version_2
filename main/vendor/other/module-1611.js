// vendor/other/module-1611.js — webpack module 1611
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { Writable: r } = n(2203 /* external/stream */),
  o = n(36978 /* vendor/other/module-36978 */),
  {
    BINARY_TYPES: i,
    EMPTY_BUFFER: s,
    kStatusCode: a,
    kWebSocket: c,
  } = n(74033 /* vendor/other/module-74033 */),
  {
    concat: u,
    toArrayBuffer: l,
    unmask: d,
  } = n(77213 /* vendor/other/module-77213 */),
  { isValidStatusCode: p, isValidUTF8: f } = n(
    3977 /* vendor/other/module-3977 */,
  ),
  h = Buffer[Symbol.species];
e.exports = class extends r {
  constructor(e = {}) {
    super(),
      (this._allowSynchronousEvents =
        void 0 === e.allowSynchronousEvents || e.allowSynchronousEvents),
      (this._binaryType = e.binaryType || i[0]),
      (this._extensions = e.extensions || {}),
      (this._isServer = !!e.isServer),
      (this._maxBufferedChunks = 0 | e.maxBufferedChunks),
      (this._maxFragments = 0 | e.maxFragments),
      (this._maxPayload = 0 | e.maxPayload),
      (this._skipUTF8Validation = !!e.skipUTF8Validation),
      (this[c] = void 0),
      (this._bufferedBytes = 0),
      (this._buffers = []),
      (this._compressed = !1),
      (this._payloadLength = 0),
      (this._mask = void 0),
      (this._fragmented = 0),
      (this._masked = !1),
      (this._fin = !1),
      (this._opcode = 0),
      (this._totalPayloadLength = 0),
      (this._messageLength = 0),
      (this._numFragments = 0),
      (this._fragments = []),
      (this._errored = !1),
      (this._loop = !1),
      (this._state = 0);
  }
  _write(e, t, n) {
    if (8 === this._opcode && 0 == this._state) return n();
    this._maxBufferedChunks > 0 &&
    this._buffers.length >= this._maxBufferedChunks
      ? n(
          this.createError(
            RangeError,
            "Too many buffered chunks",
            !1,
            1008,
            "WS_ERR_TOO_MANY_BUFFERED_PARTS",
          ),
        )
      : ((this._bufferedBytes += e.length),
        this._buffers.push(e),
        this.startLoop(n));
  }
  consume(e) {
    if (((this._bufferedBytes -= e), e === this._buffers[0].length))
      return this._buffers.shift();
    if (e < this._buffers[0].length) {
      const t = this._buffers[0];
      return (
        (this._buffers[0] = new h(t.buffer, t.byteOffset + e, t.length - e)),
        new h(t.buffer, t.byteOffset, e)
      );
    }
    const t = Buffer.allocUnsafe(e);
    do {
      const n = this._buffers[0],
        r = t.length - e;
      e >= n.length
        ? t.set(this._buffers.shift(), r)
        : (t.set(new Uint8Array(n.buffer, n.byteOffset, e), r),
          (this._buffers[0] = new h(n.buffer, n.byteOffset + e, n.length - e))),
        (e -= n.length);
    } while (e > 0);
    return t;
  }
  startLoop(e) {
    this._loop = !0;
    do {
      switch (this._state) {
        case 0:
          this.getInfo(e);
          break;
        case 1:
          this.getPayloadLength16(e);
          break;
        case 2:
          this.getPayloadLength64(e);
          break;
        case 3:
          this.getMask();
          break;
        case 4:
          this.getData(e);
          break;
        case 5:
        case 6:
          return void (this._loop = !1);
      }
    } while (this._loop);
    this._errored || e();
  }
  getInfo(e) {
    if (this._bufferedBytes < 2) return void (this._loop = !1);
    const t = this.consume(2);
    if (48 & t[0])
      return void e(
        this.createError(
          RangeError,
          "RSV2 and RSV3 must be clear",
          !0,
          1002,
          "WS_ERR_UNEXPECTED_RSV_2_3",
        ),
      );
    const n = !(64 & ~t[0]);
    if (!n || this._extensions[o.extensionName]) {
      if (
        ((this._fin = !(128 & ~t[0])),
        (this._opcode = 15 & t[0]),
        (this._payloadLength = 127 & t[1]),
        0 === this._opcode)
      ) {
        if (n)
          return void e(
            this.createError(
              RangeError,
              "RSV1 must be clear",
              !0,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1",
            ),
          );
        if (!this._fragmented)
          return void e(
            this.createError(
              RangeError,
              "invalid opcode 0",
              !0,
              1002,
              "WS_ERR_INVALID_OPCODE",
            ),
          );
        this._opcode = this._fragmented;
      } else if (1 === this._opcode || 2 === this._opcode) {
        if (this._fragmented)
          return void e(
            this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              !0,
              1002,
              "WS_ERR_INVALID_OPCODE",
            ),
          );
        this._compressed = n;
      } else {
        if (!(this._opcode > 7 && this._opcode < 11))
          return void e(
            this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              !0,
              1002,
              "WS_ERR_INVALID_OPCODE",
            ),
          );
        if (!this._fin)
          return void e(
            this.createError(
              RangeError,
              "FIN must be set",
              !0,
              1002,
              "WS_ERR_EXPECTED_FIN",
            ),
          );
        if (n)
          return void e(
            this.createError(
              RangeError,
              "RSV1 must be clear",
              !0,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1",
            ),
          );
        if (
          this._payloadLength > 125 ||
          (8 === this._opcode && 1 === this._payloadLength)
        )
          return void e(
            this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              !0,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH",
            ),
          );
      }
      if (
        (this._fin || this._fragmented || (this._fragmented = this._opcode),
        (this._masked = !(128 & ~t[1])),
        this._isServer)
      ) {
        if (!this._masked)
          return void e(
            this.createError(
              RangeError,
              "MASK must be set",
              !0,
              1002,
              "WS_ERR_EXPECTED_MASK",
            ),
          );
      } else if (this._masked)
        return void e(
          this.createError(
            RangeError,
            "MASK must be clear",
            !0,
            1002,
            "WS_ERR_UNEXPECTED_MASK",
          ),
        );
      126 === this._payloadLength
        ? (this._state = 1)
        : 127 === this._payloadLength
          ? (this._state = 2)
          : this.haveLength(e);
    } else
      e(
        this.createError(
          RangeError,
          "RSV1 must be clear",
          !0,
          1002,
          "WS_ERR_UNEXPECTED_RSV_1",
        ),
      );
  }
  getPayloadLength16(e) {
    this._bufferedBytes < 2
      ? (this._loop = !1)
      : ((this._payloadLength = this.consume(2).readUInt16BE(0)),
        this.haveLength(e));
  }
  getPayloadLength64(e) {
    if (this._bufferedBytes < 8) return void (this._loop = !1);
    const t = this.consume(8),
      n = t.readUInt32BE(0);
    n > Math.pow(2, 21) - 1
      ? e(
          this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            !1,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH",
          ),
        )
      : ((this._payloadLength = n * Math.pow(2, 32) + t.readUInt32BE(4)),
        this.haveLength(e));
  }
  haveLength(e) {
    this._payloadLength &&
    this._opcode < 8 &&
    ((this._totalPayloadLength += this._payloadLength),
    this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)
      ? e(
          this.createError(
            RangeError,
            "Max payload size exceeded",
            !1,
            1009,
            "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH",
          ),
        )
      : this._masked
        ? (this._state = 3)
        : (this._state = 4);
  }
  getMask() {
    this._bufferedBytes < 4
      ? (this._loop = !1)
      : ((this._mask = this.consume(4)), (this._state = 4));
  }
  getData(e) {
    let t = s;
    if (this._payloadLength) {
      if (this._bufferedBytes < this._payloadLength)
        return void (this._loop = !1);
      (t = this.consume(this._payloadLength)),
        this._masked &&
          0 !==
            (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) &&
          d(t, this._mask);
    }
    if (this._opcode > 7) this.controlMessage(t, e);
    else {
      if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments)
        return void e(
          this.createError(
            RangeError,
            "Too many message fragments",
            !1,
            1008,
            "WS_ERR_TOO_MANY_BUFFERED_PARTS",
          ),
        );
      if (this._compressed)
        return (this._state = 5), void this.decompress(t, e);
      t.length &&
        ((this._messageLength = this._totalPayloadLength),
        this._fragments.push(t)),
        this.dataMessage(e);
    }
  }
  decompress(e, t) {
    this._extensions[o.extensionName].decompress(e, this._fin, (e, n) => {
      if (e) return t(e);
      if (n.length) {
        if (
          ((this._messageLength += n.length),
          this._messageLength > this._maxPayload && this._maxPayload > 0)
        ) {
          const e = this.createError(
            RangeError,
            "Max payload size exceeded",
            !1,
            1009,
            "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH",
          );
          return void t(e);
        }
        this._fragments.push(n);
      }
      this.dataMessage(t), 0 === this._state && this.startLoop(t);
    });
  }
  dataMessage(e) {
    if (!this._fin) return void (this._state = 0);
    const t = this._messageLength,
      n = this._fragments;
    if (
      ((this._totalPayloadLength = 0),
      (this._messageLength = 0),
      (this._fragmented = 0),
      (this._numFragments = 0),
      (this._fragments = []),
      2 === this._opcode)
    ) {
      let r;
      (r =
        "nodebuffer" === this._binaryType
          ? u(n, t)
          : "arraybuffer" === this._binaryType
            ? l(u(n, t))
            : "blob" === this._binaryType
              ? new Blob(n)
              : n),
        this._allowSynchronousEvents
          ? (this.emit("message", r, !0), (this._state = 0))
          : ((this._state = 6),
            setImmediate(() => {
              this.emit("message", r, !0), (this._state = 0), this.startLoop(e);
            }));
    } else {
      const r = u(n, t);
      if (!this._skipUTF8Validation && !f(r)) {
        const t = this.createError(
          Error,
          "invalid UTF-8 sequence",
          !0,
          1007,
          "WS_ERR_INVALID_UTF8",
        );
        return void e(t);
      }
      5 === this._state || this._allowSynchronousEvents
        ? (this.emit("message", r, !1), (this._state = 0))
        : ((this._state = 6),
          setImmediate(() => {
            this.emit("message", r, !1), (this._state = 0), this.startLoop(e);
          }));
    }
  }
  controlMessage(e, t) {
    if (8 !== this._opcode)
      this._allowSynchronousEvents
        ? (this.emit(9 === this._opcode ? "ping" : "pong", e),
          (this._state = 0))
        : ((this._state = 6),
          setImmediate(() => {
            this.emit(9 === this._opcode ? "ping" : "pong", e),
              (this._state = 0),
              this.startLoop(t);
          }));
    else {
      if (0 === e.length)
        (this._loop = !1), this.emit("conclude", 1005, s), this.end();
      else {
        const n = e.readUInt16BE(0);
        if (!p(n)) {
          const e = this.createError(
            RangeError,
            `invalid status code ${n}`,
            !0,
            1002,
            "WS_ERR_INVALID_CLOSE_CODE",
          );
          return void t(e);
        }
        const r = new h(e.buffer, e.byteOffset + 2, e.length - 2);
        if (!this._skipUTF8Validation && !f(r)) {
          const e = this.createError(
            Error,
            "invalid UTF-8 sequence",
            !0,
            1007,
            "WS_ERR_INVALID_UTF8",
          );
          return void t(e);
        }
        (this._loop = !1), this.emit("conclude", n, r), this.end();
      }
      this._state = 0;
    }
  }
  createError(e, t, n, r, o) {
    (this._loop = !1), (this._errored = !0);
    const i = new e(n ? `Invalid WebSocket frame: ${t}` : t);
    return (
      Error.captureStackTrace(i, this.createError), (i.code = o), (i[a] = r), i
    );
  }
};
