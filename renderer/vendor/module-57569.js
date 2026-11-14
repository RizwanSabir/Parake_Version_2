// vendor/module-57569.js — webpack module 57569
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.AnimationFrame = void 0),
  (t.useAnimationFrame = function () {
    const e = (0, r.useRefWithInit)(s.create).current;
    return (0, o.useOnMount)(e.disposeEffect), e;
  });
var r = n(16843 /* vendor/module-16843 */),
  o = n(32310 /* vendor/module-32310 */);
const i = null;
globalThis.requestAnimationFrame;
const a = new (class {
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = !1;
  tick = (e) => {
    this.isScheduled = !1;
    const t = this.callbacks,
      n = this.callbacksCount;
    if (
      ((this.callbacks = []),
      (this.callbacksCount = 0),
      (this.startId = this.nextId),
      n > 0)
    )
      for (let n = 0; n < t.length; n += 1) t[n]?.(e);
  };
  request(e) {
    const t = this.nextId;
    return (
      (this.nextId += 1),
      this.callbacks.push(e),
      (this.callbacksCount += 1),
      this.isScheduled ||
        (requestAnimationFrame(this.tick), (this.isScheduled = !0)),
      t
    );
  }
  cancel(e) {
    const t = e - this.startId;
    t < 0 ||
      t >= this.callbacks.length ||
      ((this.callbacks[t] = null), (this.callbacksCount -= 1));
  }
})();
class s {
  static create() {
    return new s();
  }
  static request(e) {
    return a.request(e);
  }
  static cancel(e) {
    return a.cancel(e);
  }
  currentId = i;
  request(e) {
    this.cancel(),
      (this.currentId = a.request(() => {
        (this.currentId = i), e();
      }));
  }
  cancel = () => {
    this.currentId !== i && (a.cancel(this.currentId), (this.currentId = i));
  };
  disposeEffect = () => this.cancel;
}
t.AnimationFrame = s;
