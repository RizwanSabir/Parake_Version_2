// vendor/module-22857.js — webpack module 22857
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => n });
const n = function (t, e, r) {
  for (var n = -1, o = Object(t), i = r(t), s = i.length; s--; ) {
    var u = i[++n];
    if (!1 === e(o[u], u, o)) break;
  }
  return t;
};
