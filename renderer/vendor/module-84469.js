// vendor/module-84469.js — webpack module 84469
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.bindReporter = (e, t, n, r) => {
    let o, i;
    return (a) => {
      t.value >= 0 &&
        (a || r) &&
        ((i = t.value - (o ?? 0)),
        (i || void 0 === o) &&
          ((o = t.value),
          (t.delta = i),
          (t.rating = ((e, t) =>
            e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good")(
            t.value,
            n,
          )),
          e(t)));
    };
  });
