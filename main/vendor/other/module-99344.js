// vendor/other/module-99344.js — webpack module 99344
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(98429 /* vendor/other/module-98429 */),
  o = n(75457 /* vendor/other/module-75457 */),
  i = n(76421 /* vendor/other/module-76421 */),
  s = n(23295 /* vendor/other/module-23295 */),
  a = n(16973 /* vendor/other/module-16973 */);
class c {
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
    return s.isThenable(n)
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
function u() {
  const e = a.getMainCarrier(),
    t = a.getSentryCarrier(e);
  return (t.stack =
    t.stack || new c(r.getDefaultCurrentScope(), r.getDefaultIsolationScope()));
}
function l(e) {
  return u().withScope(e);
}
function d(e, t) {
  const n = u();
  return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function p(e) {
  return u().withScope(() => e(u().getIsolationScope()));
}
(t.AsyncContextStack = c),
  (t.getStackAsyncContextStrategy = function () {
    return {
      withIsolationScope: p,
      withScope: l,
      withSetScope: d,
      withSetIsolationScope: (e, t) => p(t),
      getCurrentScope: () => u().getScope(),
      getIsolationScope: () => u().getIsolationScope(),
    };
  });
