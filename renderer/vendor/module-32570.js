// vendor/module-32570.js — webpack module 32570
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.gridNavigation = function (e, t, n, o, i, a, s, l, c, u = 2) {
    const d = (0, r.getGridNavigatedIndex)(n.current, {
      event: e,
      orientation: o,
      loopFocus: i,
      rtl: a,
      cols: u,
      disabledIndices: s,
      minIndex: l,
      maxIndex: c,
      prevIndex: t > c ? l : t,
      stopEvent: !0,
    });
    return (0, r.isIndexOutOfListBounds)(n.current, d) ? void 0 : d;
  });
var r = n(50684 /* vendor/module-50684 */);
