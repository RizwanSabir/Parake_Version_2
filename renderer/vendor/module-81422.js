// vendor/module-81422.js — webpack module 81422
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.createSelectorMemoized = void 0);
var o = r(n(55099 /* vendor/module-55099 */)),
  i = n(7821 /* vendor/module-7821 */);
const a = (0, i.createSelectorCreator)({
  memoize: i.lruMemoize,
  memoizeOptions: { maxSize: 1, equalityCheck: Object.is },
});
t.createSelectorMemoized = (...e) => {
  const t = new WeakMap();
  let n = 1;
  const r = e[e.length - 1],
    i = e.length - 1 || 1,
    s = r.length - i;
  if (s > 3) throw new Error((0, o.default)(2));
  return (i, l, c, u) => {
    let d = i.__cacheKey__;
    d || ((d = { id: n }), (i.__cacheKey__ = d), (n += 1));
    let p = t.get(d);
    if (!p) {
      let n = e;
      const i = [void 0, void 0, void 0];
      switch (s) {
        case 0:
          break;
        case 1:
          n = [...e.slice(0, -1), () => i[0], r];
          break;
        case 2:
          n = [...e.slice(0, -1), () => i[0], () => i[1], r];
          break;
        case 3:
          n = [...e.slice(0, -1), () => i[0], () => i[1], () => i[2], r];
          break;
        default:
          throw new Error((0, o.default)(2));
      }
      (p = a(...n)), (p.selectorArgs = i), t.set(d, p);
    }
    switch (
      ((p.selectorArgs[0] = l),
      (p.selectorArgs[1] = c),
      (p.selectorArgs[2] = u),
      s)
    ) {
      case 0:
        return p(i);
      case 1:
        return p(i, l);
      case 2:
        return p(i, l, c);
      case 3:
        return p(i, l, c, u);
      default:
        throw new Error("unreachable");
    }
  };
};
