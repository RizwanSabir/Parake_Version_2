// vendor/module-99004.js — webpack module 99004
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuHandle = void 0),
  (t.createMenuHandle = function () {
    return new s();
  });
var o = r(n(55099 /* vendor/module-55099 */)),
  i = n(22877 /* vendor/module-22877 */),
  a = n(28381 /* vendor/module-28381 */);
class s {
  constructor() {
    this.store = new a.MenuStore();
  }
  open(e) {
    const t = e ? this.store.context.triggerElements.getById(e) : void 0;
    if (e && !t) throw new Error((0, o.default)(83, e));
    this.store.setOpen(
      !0,
      (0, i.createChangeEventDetails)("imperative-action", void 0, t),
    );
  }
  close() {
    this.store.setOpen(
      !1,
      (0, i.createChangeEventDetails)("imperative-action", void 0, void 0),
    );
  }
  get isOpen() {
    return this.store.select("open");
  }
}
t.MenuHandle = s;
