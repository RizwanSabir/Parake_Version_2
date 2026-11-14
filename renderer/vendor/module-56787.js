// vendor/module-56787.js — webpack module 56787
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.ReactStore = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(94006 /* vendor/module-94006 */),
  a = n(30911 /* vendor/module-30911 */),
  s = n(4674 /* vendor/module-4674 */),
  l = n(57122 /* vendor/module-57122 */),
  c = n(38340 /* vendor/module-38340 */);
class u extends i.Store {
  constructor(e, t = {}, n) {
    super(e), (this.context = t), (this.selectors = n);
  }
  useSyncedValue(e, t) {
    o.useDebugValue(e);
    const n = this;
    (0, l.useIsoLayoutEffect)(() => {
      n.state[e] !== t && n.set(e, t);
    }, [n, e, t]);
  }
  useSyncedValueWithCleanup(e, t) {
    const n = this;
    (0, l.useIsoLayoutEffect)(
      () => (
        n.state[e] !== t && n.set(e, t),
        () => {
          n.set(e, void 0);
        }
      ),
      [n, e, t],
    );
  }
  useSyncedValues(e) {
    const t = this,
      n = Object.values(e);
    (0, l.useIsoLayoutEffect)(() => {
      t.update(e);
    }, [t, ...n]);
  }
  useControlledProp(e, t) {
    o.useDebugValue(e);
    const n = this,
      r = void 0 !== t;
    (0, l.useIsoLayoutEffect)(() => {
      r && !Object.is(n.state[e], t) && n.setState({ ...n.state, [e]: t });
    }, [n, e, t, r]);
  }
  select(e, t, n, r) {
    return (0, this.selectors[e])(this.state, t, n, r);
  }
  useState(e, t, n, r) {
    return (
      o.useDebugValue(e), (0, a.useStore)(this, this.selectors[e], t, n, r)
    );
  }
  useContextCallback(e, t) {
    o.useDebugValue(e);
    const n = (0, s.useStableCallback)(t ?? c.NOOP);
    this.context[e] = n;
  }
  useStateSetter(e) {
    const t = o.useRef(void 0);
    return (
      void 0 === t.current &&
        (t.current = (t) => {
          this.set(e, t);
        }),
      t.current
    );
  }
  observe(e, t) {
    let n;
    n = "function" == typeof e ? e : this.selectors[e];
    let r = n(this.state);
    return (
      t(r, r, this),
      this.subscribe((e) => {
        const o = n(e);
        if (!Object.is(r, o)) {
          const e = r;
          (r = o), t(o, e, this);
        }
      })
    );
  }
}
t.ReactStore = u;
