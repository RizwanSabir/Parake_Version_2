// vendor/module-17539.js — webpack module 17539
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useComboboxFilter = function (e = {}) {
    const { multiple: t = !1, value: n, ...r } = e,
      s = (0, a.getFilter)(r),
      l = o.useCallback(
        (e, r, o) =>
          t
            ? (0, i.createCollatorItemFilter)(s, o)(e, r)
            : (0, i.createSingleSelectionCollatorFilter)(s, o, n)(e, r),
        [s, n, t],
      );
    return o.useMemo(
      () => ({
        contains: l,
        startsWith: s.startsWith,
        endsWith: s.endsWith,
      }),
      [l, s],
    );
  }),
  (t.useCoreFilter = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(38458 /* vendor/module-38458 */),
  a = n(78746 /* vendor/module-78746 */);
t.useCoreFilter = a.getFilter;
