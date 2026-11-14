// vendor/module-38458.js — webpack module 38458
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.createCollatorItemFilter = function (e, t) {
    return (n, o) => {
      if (null == n) return !1;
      const i = (0, r.stringifyAsLabel)(n, t);
      return e.contains(i, o);
    };
  }),
  (t.createSingleSelectionCollatorFilter = function (e, t, n) {
    return (o, i) => {
      if (null == o) return !1;
      if (!i) return !0;
      const a = (0, r.stringifyAsLabel)(o, t),
        s = null != n ? (0, r.stringifyAsLabel)(n, t) : "";
      return (
        !(!s || !e.contains(s, i) || s.length !== i.length) || e.contains(a, i)
      );
    };
  }),
  (t.getComboboxPopupId = function (e) {
    return null == e ? void 0 : `${e}-popup`;
  });
var r = n(25411 /* vendor/module-25411 */);
