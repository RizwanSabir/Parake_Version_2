// vendor/module-75961.js — webpack module 75961
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getSliderValue = function (e, t, n, i, a, s) {
    let l = e;
    return (
      (l = (0, r.clamp)(l, n, i)),
      a &&
        (l = (0, o.replaceArrayItemAtIndex)(
          s,
          t,
          (0, r.clamp)(l, s[t - 1] ?? -1 / 0, s[t + 1] ?? 1 / 0),
        )),
      l
    );
  });
var r = n(41153 /* vendor/module-41153 */),
  o = n(83890 /* vendor/module-83890 */);
