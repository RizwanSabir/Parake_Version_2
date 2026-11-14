// vendor/module-45532.js — webpack module 45532
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverHandle = void 0),
  (t.createPopoverHandle = function () {
    return new l();
  });
var o = r(n(55099 /* vendor/module-55099 */)),
  i = n(22877 /* vendor/module-22877 */),
  a = n(82063 /* vendor/module-82063 */),
  s = n(13341 /* vendor/module-13341 */);
class l {
  constructor() {
    this.store = new s.PopoverStore();
  }
  open(e) {
    const t = e
      ? (this.store.context.triggerElements.getById(e) ?? void 0)
      : void 0;
    if (e && !t) throw new Error((0, o.default)(80, e));
    this.store.setOpen(
      !0,
      (0, i.createChangeEventDetails)(a.REASONS.imperativeAction, void 0, t),
    );
  }
  close() {
    this.store.setOpen(
      !1,
      (0, i.createChangeEventDetails)(
        a.REASONS.imperativeAction,
        void 0,
        void 0,
      ),
    );
  }
  get isOpen() {
    return this.store.select("open");
  }
}
t.PopoverHandle = l;
