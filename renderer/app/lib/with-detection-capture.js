// app/lib/with-detection-capture.js — webpack module 33386
// params: (e, t) = (module, exports, require)
"use strict";
(t.Bl = t.rD = void 0),
  (t.withDetectionCapture = function (e, r) {
    return async (o, i) => {
      e.current = null;
      const a = await (r ?? fetch)(o, i);
      return (
        (e.current = (function (e) {
          const r = e.get(t.rD);
          return null !== r && n.includes(r)
            ? { outcome: r, entryId: e.get(t.Bl) || null }
            : null;
        })(a.headers)),
        a
      );
    };
  }),
  (t.rD = "x-parakeet-detection"),
  (t.Bl = "x-parakeet-detection-entry-id"),
  t.rD,
  t.Bl;
const n = ["detected", "no-question", "empty", "error"];
