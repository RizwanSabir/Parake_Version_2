// vendor/module-64210.js — webpack module 64210
// params: (e, t) = (module, exports, require)
"use strict";
t.createMicOnlySummary = function () {
  let e = null,
    t = null,
    n = 0;
  const r = { "assisted-user": 0, "other-party": 0, unknown: 0 };
  return {
    noteMode(r, o) {
      r ? ((e = r.via), (t ??= o)) : null !== t && ((n += o - t), (t = null));
    },
    noteLine(e) {
      null !== t && (r[e] += 1);
    },
    build: (o) =>
      null === e
        ? null
        : {
            via: e,
            endedInMicOnly: null !== t,
            msInMicOnly: n + (null === t ? 0 : o - t),
            ownLines: r["assisted-user"],
            otherLines: r["other-party"],
            unlabeledLines: r.unknown,
          },
  };
};
