// vendor/module-54807.js — webpack module 54807
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.Timeout = void 0),
  (t.useTimeout = function () {
    const e = (0, r.useRefWithInit)(i.create).current;
    return (0, o.useOnMount)(e.disposeEffect), e;
  });
var r = n(16843 /* vendor/module-16843 */),
  o = n(32310 /* vendor/module-32310 */);
class i {
  static create() {
    return new i();
  }
  currentId = 0;
  start(e, t) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = 0), t();
      }, e));
  }
  isStarted() {
    return 0 !== this.currentId;
  }
  clear = () => {
    0 !== this.currentId &&
      (clearTimeout(this.currentId), (this.currentId = 0));
  };
  disposeEffect = () => this.clear;
}
t.Timeout = i;
