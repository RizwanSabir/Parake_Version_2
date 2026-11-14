// vendor/module-88500.js — webpack module 88500
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.TooltipHandle = void 0),
  (t.createTooltipHandle = function () {
    return new l();
  });
var o = r(n(55099 /* vendor/module-55099 */)),
  i = n(15973 /* vendor/module-15973 */),
  a = n(22877 /* vendor/module-22877 */),
  s = n(82063 /* vendor/module-82063 */);
class l {
  constructor() {
    this.store = new i.TooltipStore();
  }
  open(e) {
    const t = e ? this.store.context.triggerElements.getById(e) : void 0;
    if (e && !t) throw new Error((0, o.default)(81, e));
    this.store.setOpen(
      !0,
      (0, a.createChangeEventDetails)(s.REASONS.imperativeAction, void 0, t),
    );
  }
  close() {
    this.store.setOpen(
      !1,
      (0, a.createChangeEventDetails)(
        s.REASONS.imperativeAction,
        void 0,
        void 0,
      ),
    );
  }
  get isOpen() {
    return this.store.select("open");
  }
}
t.TooltipHandle = l;
