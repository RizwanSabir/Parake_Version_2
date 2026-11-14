// vendor/module-76678.js — webpack module 76678
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DialogHandle = void 0),
  (t.createDialogHandle = function () {
    return new a();
  });
var r = n(9187 /* vendor/module-9187 */),
  o = n(22877 /* vendor/module-22877 */),
  i = n(82063 /* vendor/module-82063 */);
class a {
  constructor(e) {
    this.store = e ?? new r.DialogStore();
  }
  open(e) {
    const t = e ? this.store.context.triggerElements.getById(e) : void 0;
    this.store.setOpen(
      !0,
      (0, o.createChangeEventDetails)(i.REASONS.imperativeAction, void 0, t),
    );
  }
  openWithPayload(e) {
    this.store.set("payload", e),
      this.store.setOpen(
        !0,
        (0, o.createChangeEventDetails)(
          i.REASONS.imperativeAction,
          void 0,
          void 0,
        ),
      );
  }
  close() {
    this.store.setOpen(
      !1,
      (0, o.createChangeEventDetails)(
        i.REASONS.imperativeAction,
        void 0,
        void 0,
      ),
    );
  }
  get isOpen() {
    return this.store.select("open");
  }
}
t.DialogHandle = a;
