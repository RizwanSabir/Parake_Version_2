// vendor/module-85378.js — webpack module 85378
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => o });
var n = /^(?:0|[1-9]\d*)$/;
const o = function (t, e) {
  var r = typeof t;
  return (
    !!(e = e ?? 9007199254740991) &&
    ("number" == r || ("symbol" != r && n.test(t))) &&
    t > -1 &&
    t % 1 == 0 &&
    t < e
  );
};
