// vendor/module-99344.js — webpack module 99344
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(98429 /* vendor/module-98429 */),
  o = n(75457 /* vendor/module-75457 */),
  i = n(76421 /* vendor/module-76421 */),
  a = n(23295 /* vendor/module-23295 */),
  s = n(16973 /* vendor/module-16973 */);
class l {
  constructor(e, t) {
    let n, r;
    (n = e || new o.Scope()),
      (r = t || new o.Scope()),
      (this._stack = [{ scope: n }]),
      (this._isolationScope = r);
  }
  withScope(e) {
    const t = this._pushScope();
    let n;
    try {
      n = e(t);
    } catch (e) {
      throw (this._popScope(), e);
    }
    return a.isThenable(n)
      ? i.chainAndCopyPromiseLike(
          n,
          () => this._popScope(),
          () => this._popScope(),
        )
      : (this._popScope(), n);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const e = this.getScope().clone();
    return this._stack.push({ client: this.getClient(), scope: e }), e;
  }
  _popScope() {
    return !(this._stack.length <= 1 || !this._stack.pop());
  }
}
function c() {
  const e = s.getMainCarrier(),
    t = s.getSentryCarrier(e);
  return (t.stack =
    t.stack || new l(r.getDefaultCurrentScope(), r.getDefaultIsolationScope()));
}
function u(e) {
  return c().withScope(e);
}
function d(e, t) {
  const n = c();
  return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function p(e) {
  return c().withScope(() => e(c().getIsolationScope()));
}
(t.AsyncContextStack = l),
  (t.getStackAsyncContextStrategy = function () {
    return {
      withIsolationScope: p,
      withScope: u,
      withSetScope: d,
      withSetIsolationScope: (e, t) => p(t),
      getCurrentScope: () => c().getScope(),
      getIsolationScope: () => c().getIsolationScope(),
    };
  });
