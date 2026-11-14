// vendor/module-32514.js — webpack module 32514
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useStateAttributesMapping = function (e) {
    return o.useMemo(
      () => ({
        checked: (t) =>
          e.indeterminate
            ? {}
            : t
              ? { [i.CheckboxRootDataAttributes.checked]: "" }
              : { [i.CheckboxRootDataAttributes.unchecked]: "" },
        ...a.fieldValidityMapping,
      }),
      [e.indeterminate],
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(63212 /* vendor/module-63212 */),
  a = n(41128 /* vendor/module-41128 */);
