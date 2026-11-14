// vendor/module-31362.js — webpack module 31362
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useNumberFieldStepperButton = function (e, t, n) {
    const {
        render: l,
        className: c,
        disabled: u = !1,
        nativeButton: d = !0,
        style: p,
        ...f
      } = e,
      {
        allowInputSyncRef: h,
        disabled: m,
        formatOptionsRef: g,
        getStepAmount: y,
        id: v,
        incrementValue: b,
        inputRef: S,
        inputValue: _,
        maxWithDefault: x,
        minWithDefault: w,
        readOnly: E,
        setValue: T,
        state: k,
        value: C,
        valueRef: I,
        locale: A,
        lastChangedValueRef: O,
        onValueCommitted: R,
      } = (0, i.useNumberFieldRootContext)(),
      M = u || m || (null != C && (n ? C >= x : C <= w)),
      P = (0, a.useNumberFieldButton)({
        isIncrement: n,
        inputRef: S,
        inputValue: _,
        disabled: M,
        readOnly: E,
        id: v,
        setValue: T,
        getStepAmount: y,
        incrementValue: b,
        allowInputSyncRef: h,
        formatOptionsRef: g,
        valueRef: I,
        locale: A,
        lastChangedValueRef: O,
        onValueCommitted: R,
      }),
      { getButtonProps: N, buttonRef: D } = (0, o.useButton)({
        disabled: M || E,
        native: d,
        focusableWhenDisabled: !0,
      }),
      j = { ...k, disabled: M };
    return (0, r.useRenderElement)("button", e, {
      ref: [t, D],
      state: j,
      props: [P, f, N],
      stateAttributesMapping: s.stateAttributesMapping,
    });
  });
var r = n(51909 /* vendor/module-51909 */),
  o = n(63917 /* vendor/module-63917 */),
  i = n(46007 /* vendor/module-46007 */),
  a = n(62375 /* vendor/module-62375 */),
  s = n(5274 /* vendor/module-5274 */);
