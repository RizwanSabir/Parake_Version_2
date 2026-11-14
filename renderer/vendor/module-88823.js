// vendor/module-88823.js — webpack module 88823
// params: (e, t, n) = (module, exports, require)
const r = n(41630 /* vendor/module-41630 */);
let o = n(14041 /* vendor/module-14041 */);
t._useStore = function (e, t, n) {
  return [
    r.useSelector(e, t, n),
    (0, o.useMemo)(() => e.actions ?? e.setState, [e]),
  ];
};
