// vendor/module-79504.js — webpack module 79504
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.CompositeItem = function (e) {
    const {
        render: t,
        className: n,
        style: a,
        state: s = r.EMPTY_OBJECT,
        props: l = r.EMPTY_ARRAY,
        refs: c = r.EMPTY_ARRAY,
        metadata: u,
        stateAttributesMapping: d,
        tag: p = "div",
        ...f
      } = e,
      { compositeProps: h, compositeRef: m } = (0, i.useCompositeItem)({
        metadata: u,
      });
    return (0, o.useRenderElement)(p, e, {
      state: s,
      ref: [...c, m],
      props: [h, ...l, f],
      stateAttributesMapping: d,
    });
  });
var r = n(38340 /* vendor/module-38340 */),
  o = n(51909 /* vendor/module-51909 */),
  i = n(73063 /* vendor/module-73063 */);
