// vendor/module-50455.js — webpack module 50455
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.Interval = void 0),
  (t.useInterval = function () {
    const e = (0, r.useRefWithInit)(a.create).current;
    return (0, o.useOnMount)(e.disposeEffect), e;
  });
var r = n(16843 /* vendor/module-16843 */),
  o = n(32310 /* vendor/module-32310 */),
  i = n(54807 /* vendor/module-54807 */);
class a extends i.Timeout {
  static create() {
    return new a();
  }
  start(e, t) {
    this.clear(),
      (this.currentId = setInterval(() => {
        t();
      }, e));
  }
  clear = () => {
    0 !== this.currentId &&
      (clearInterval(this.currentId), (this.currentId = 0));
  };
}
t.Interval = a;
