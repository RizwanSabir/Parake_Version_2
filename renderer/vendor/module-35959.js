// vendor/module-35959.js — webpack module 35959
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/module-23295 */);
class o {
  constructor(e) {
    (this._state = 0), (this._handlers = []), this._runExecutor(e);
  }
  then(e, t) {
    return new o((n, r) => {
      this._handlers.push([
        !1,
        (t) => {
          if (e)
            try {
              n(e(t));
            } catch (e) {
              r(e);
            }
          else n(t);
        },
        (e) => {
          if (t)
            try {
              n(t(e));
            } catch (e) {
              r(e);
            }
          else r(e);
        },
      ]),
        this._executeHandlers();
    });
  }
  catch(e) {
    return this.then((e) => e, e);
  }
  finally(e) {
    return new o((t, n) => {
      let r, o;
      return this.then(
        (t) => {
          (o = !1), (r = t), e && e();
        },
        (t) => {
          (o = !0), (r = t), e && e();
        },
      ).then(() => {
        o ? n(r) : t(r);
      });
    });
  }
  _executeHandlers() {
    if (0 === this._state) return;
    const e = this._handlers.slice();
    (this._handlers = []),
      e.forEach((e) => {
        e[0] ||
          (1 === this._state && e[1](this._value),
          2 === this._state && e[2](this._value),
          (e[0] = !0));
      });
  }
  _runExecutor(e) {
    const t = (e, t) => {
        0 === this._state &&
          (r.isThenable(t)
            ? t.then(n, o)
            : ((this._state = e), (this._value = t), this._executeHandlers()));
      },
      n = (e) => {
        t(1, e);
      },
      o = (e) => {
        t(2, e);
      };
    try {
      e(n, o);
    } catch (e) {
      o(e);
    }
  }
}
(t.SyncPromise = o),
  (t.rejectedSyncPromise = function (e) {
    return new o((t, n) => {
      n(e);
    });
  }),
  (t.resolvedSyncPromise = function (e) {
    return new o((t) => {
      t(e);
    });
  });
