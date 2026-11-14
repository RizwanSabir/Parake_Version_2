// vendor/module-25290.js — webpack module 25290
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.prototype.hasOwnProperty,
  l = {};
((e, t) => {
  for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
})(l, { streamedQuery: () => u }),
  (e.exports =
    ((r = l),
    ((e, t, n, r) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let n of a(t))
          s.call(e, n) ||
            void 0 === n ||
            o(e, n, {
              get: () => t[n],
              enumerable: !(r = i(t, n)) || r.enumerable,
            });
      return e;
    })(o({}, "__esModule", { value: !0 }), r)));
var c = n(26036 /* vendor/module-26036 */);
function u({
  streamFn: e,
  refetchMode: t = "reset",
  reducer: n = (e, t) => (0, c.addToEnd)(e, t),
  initialValue: r = [],
}) {
  return async (o) => {
    const i = o.client
        .getQueryCache()
        .find({ queryKey: o.queryKey, exact: !0 }),
      a = !!i && i.isFetched();
    a &&
      "reset" === t &&
      i.setState({ ...i.resetState, fetchStatus: "fetching" });
    let s = r,
      l = !1;
    const u = (0, c.addConsumeAwareSignal)(
        {
          client: o.client,
          meta: o.meta,
          queryKey: o.queryKey,
          pageParam: o.pageParam,
          direction: o.direction,
        },
        () => o.signal,
        () => (l = !0),
      ),
      d = await e(u),
      p = a && "replace" === t;
    for await (const e of d) {
      if (l) break;
      p
        ? (s = n(s, e))
        : o.client.setQueryData(o.queryKey, (t) => n(void 0 === t ? r : t, e));
    }
    return (
      p && !l && o.client.setQueryData(o.queryKey, s),
      o.client.getQueryData(o.queryKey) ?? r
    );
  };
}
