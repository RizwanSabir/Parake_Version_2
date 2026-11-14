// vendor/other/module-71031.js — webpack module 71031
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { Duplex: r } = n(2203 /* external/stream */),
  { randomFillSync: o } = n(76982 /* external/crypto */),
  {
    types: { isUint8Array: i },
  } = n(39023 /* external/util */),
  s = n(36978 /* vendor/other/module-36978 */),
  {
    EMPTY_BUFFER: a,
    kWebSocket: c,
    NOOP: u,
  } = n(74033 /* vendor/other/module-74033 */),
  { isBlob: l, isValidStatusCode: d } = n(3977 /* vendor/other/module-3977 */),
  { mask: p, toBuffer: f } = n(77213 /* vendor/other/module-77213 */),
  h = Symbol("kByteLength"),
  g = Buffer.alloc(4),
  m = 8192;
let _,
  S = m;
class E {
  constructor(e, t, n) {
    (this._extensions = t || {}),
      n && ((this._generateMask = n), (this._maskBuffer = Buffer.alloc(4))),
      (this._socket = e),
      (this._firstFragment = !0),
      (this._compress = !1),
      (this._bufferedBytes = 0),
      (this._queue = []),
      (this._state = 0),
      (this.onerror = u),
      (this[c] = void 0);
  }
  static frame(e, t) {
    let n,
      r,
      i = !1,
      s = 2,
      a = !1;
    t.mask &&
      ((n = t.maskBuffer || g),
      t.generateMask
        ? t.generateMask(n)
        : (S === m &&
            (void 0 === _ && (_ = Buffer.alloc(m)), o(_, 0, m), (S = 0)),
          (n[0] = _[S++]),
          (n[1] = _[S++]),
          (n[2] = _[S++]),
          (n[3] = _[S++])),
      (a = 0 === (n[0] | n[1] | n[2] | n[3])),
      (s = 6)),
      "string" == typeof e
        ? (r =
            (t.mask && !a) || void 0 === t[h]
              ? (e = Buffer.from(e)).length
              : t[h])
        : ((r = e.length), (i = t.mask && t.readOnly && !a));
    let c = r;
    r >= 65536 ? ((s += 8), (c = 127)) : r > 125 && ((s += 2), (c = 126));
    const u = Buffer.allocUnsafe(i ? r + s : s);
    return (
      (u[0] = t.fin ? 128 | t.opcode : t.opcode),
      t.rsv1 && (u[0] |= 64),
      (u[1] = c),
      126 === c
        ? u.writeUInt16BE(r, 2)
        : 127 === c && ((u[2] = u[3] = 0), u.writeUIntBE(r, 4, 6)),
      t.mask
        ? ((u[1] |= 128),
          (u[s - 4] = n[0]),
          (u[s - 3] = n[1]),
          (u[s - 2] = n[2]),
          (u[s - 1] = n[3]),
          a ? [u, e] : i ? (p(e, n, u, s, r), [u]) : (p(e, n, e, 0, r), [u, e]))
        : [u, e]
    );
  }
  close(e, t, n, r) {
    let o;
    if (void 0 === e) o = a;
    else {
      if ("number" != typeof e || !d(e))
        throw new TypeError("First argument must be a valid error code number");
      if (void 0 !== t && t.length) {
        const n = Buffer.byteLength(t);
        if (n > 123)
          throw new RangeError(
            "The message must not be greater than 123 bytes",
          );
        if (
          ((o = Buffer.allocUnsafe(2 + n)),
          o.writeUInt16BE(e, 0),
          "string" == typeof t)
        )
          o.write(t, 2);
        else {
          if (!i(t))
            throw new TypeError(
              "Second argument must be a string or a Uint8Array",
            );
          o.set(t, 2);
        }
      } else (o = Buffer.allocUnsafe(2)), o.writeUInt16BE(e, 0);
    }
    const s = {
      [h]: o.length,
      fin: !0,
      generateMask: this._generateMask,
      mask: n,
      maskBuffer: this._maskBuffer,
      opcode: 8,
      readOnly: !1,
      rsv1: !1,
    };
    0 !== this._state
      ? this.enqueue([this.dispatch, o, !1, s, r])
      : this.sendFrame(E.frame(o, s), r);
  }
  ping(e, t, n) {
    let r, o;
    if (
      ("string" == typeof e
        ? ((r = Buffer.byteLength(e)), (o = !1))
        : l(e)
          ? ((r = e.size), (o = !1))
          : ((r = (e = f(e)).length), (o = f.readOnly)),
      r > 125)
    )
      throw new RangeError("The data size must not be greater than 125 bytes");
    const i = {
      [h]: r,
      fin: !0,
      generateMask: this._generateMask,
      mask: t,
      maskBuffer: this._maskBuffer,
      opcode: 9,
      readOnly: o,
      rsv1: !1,
    };
    l(e)
      ? 0 !== this._state
        ? this.enqueue([this.getBlobData, e, !1, i, n])
        : this.getBlobData(e, !1, i, n)
      : 0 !== this._state
        ? this.enqueue([this.dispatch, e, !1, i, n])
        : this.sendFrame(E.frame(e, i), n);
  }
  pong(e, t, n) {
    let r, o;
    if (
      ("string" == typeof e
        ? ((r = Buffer.byteLength(e)), (o = !1))
        : l(e)
          ? ((r = e.size), (o = !1))
          : ((r = (e = f(e)).length), (o = f.readOnly)),
      r > 125)
    )
      throw new RangeError("The data size must not be greater than 125 bytes");
    const i = {
      [h]: r,
      fin: !0,
      generateMask: this._generateMask,
      mask: t,
      maskBuffer: this._maskBuffer,
      opcode: 10,
      readOnly: o,
      rsv1: !1,
    };
    l(e)
      ? 0 !== this._state
        ? this.enqueue([this.getBlobData, e, !1, i, n])
        : this.getBlobData(e, !1, i, n)
      : 0 !== this._state
        ? this.enqueue([this.dispatch, e, !1, i, n])
        : this.sendFrame(E.frame(e, i), n);
  }
  send(e, t, n) {
    const r = this._extensions[s.extensionName];
    let o,
      i,
      a = t.binary ? 2 : 1,
      c = t.compress;
    "string" == typeof e
      ? ((o = Buffer.byteLength(e)), (i = !1))
      : l(e)
        ? ((o = e.size), (i = !1))
        : ((o = (e = f(e)).length), (i = f.readOnly)),
      this._firstFragment
        ? ((this._firstFragment = !1),
          c &&
            r &&
            r.params[
              r._isServer
                ? "server_no_context_takeover"
                : "client_no_context_takeover"
            ] &&
            (c = o >= r._threshold),
          (this._compress = c))
        : ((c = !1), (a = 0)),
      t.fin && (this._firstFragment = !0);
    const u = {
      [h]: o,
      fin: t.fin,
      generateMask: this._generateMask,
      mask: t.mask,
      maskBuffer: this._maskBuffer,
      opcode: a,
      readOnly: i,
      rsv1: c,
    };
    l(e)
      ? 0 !== this._state
        ? this.enqueue([this.getBlobData, e, this._compress, u, n])
        : this.getBlobData(e, this._compress, u, n)
      : 0 !== this._state
        ? this.enqueue([this.dispatch, e, this._compress, u, n])
        : this.dispatch(e, this._compress, u, n);
  }
  getBlobData(e, t, n, r) {
    (this._bufferedBytes += n[h]),
      (this._state = 2),
      e
        .arrayBuffer()
        .then((e) => {
          if (this._socket.destroyed) {
            const e = new Error(
              "The socket was closed while the blob was being read",
            );
            return void process.nextTick(y, this, e, r);
          }
          this._bufferedBytes -= n[h];
          const o = f(e);
          t
            ? this.dispatch(o, t, n, r)
            : ((this._state = 0),
              this.sendFrame(E.frame(o, n), r),
              this.dequeue());
        })
        .catch((e) => {
          process.nextTick(T, this, e, r);
        });
  }
  dispatch(e, t, n, r) {
    if (!t) return void this.sendFrame(E.frame(e, n), r);
    const o = this._extensions[s.extensionName];
    (this._bufferedBytes += n[h]),
      (this._state = 1),
      o.compress(e, n.fin, (e, t) => {
        this._socket.destroyed
          ? y(
              this,
              new Error(
                "The socket was closed while data was being compressed",
              ),
              r,
            )
          : ((this._bufferedBytes -= n[h]),
            (this._state = 0),
            (n.readOnly = !1),
            this.sendFrame(E.frame(t, n), r),
            this.dequeue());
      });
  }
  dequeue() {
    for (; 0 === this._state && this._queue.length; ) {
      const e = this._queue.shift();
      (this._bufferedBytes -= e[3][h]), Reflect.apply(e[0], this, e.slice(1));
    }
  }
  enqueue(e) {
    (this._bufferedBytes += e[3][h]), this._queue.push(e);
  }
  sendFrame(e, t) {
    2 === e.length
      ? (this._socket.cork(),
        this._socket.write(e[0]),
        this._socket.write(e[1], t),
        this._socket.uncork())
      : this._socket.write(e[0], t);
  }
}
function y(e, t, n) {
  "function" == typeof n && n(t);
  for (let n = 0; n < e._queue.length; n++) {
    const r = e._queue[n],
      o = r[r.length - 1];
    "function" == typeof o && o(t);
  }
}
function T(e, t, n) {
  y(e, t, n), e.onerror(t);
}
e.exports = E;
