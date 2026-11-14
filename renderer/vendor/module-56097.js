// vendor/module-56097.js — webpack module 56097
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => n });
const n = function (t, e) {
  for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n; ) {
    var s = t[r];
    e(s, r, t) && (i[o++] = s);
  }
  return i;
};
