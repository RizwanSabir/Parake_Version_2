// vendor/module-91374.js — webpack module 91374
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/module-23295 */);
function o(e, t, n, l, c, u, d, p) {
  if (u.length >= n + 1) return u;
  let f = [...u];
  if (r.isError(l[c])) {
    a(d, p, l);
    const r = e(t, l[c]),
      i = f.length;
    s(r, c, i, p), (f = o(e, t, n, l[c], c, [r, ...f], r, i));
  }
  return (
    i(l) &&
      l.errors.forEach((i, u) => {
        if (r.isError(i)) {
          a(d, p, l);
          const r = e(t, i),
            h = f.length;
          s(r, `errors[${u}]`, h, p), (f = o(e, t, n, i, c, [r, ...f], r, h));
        }
      }),
    f
  );
}
function i(e) {
  return Array.isArray(e.errors);
}
function a(e, t, n) {
  e.mechanism = {
    handled: !0,
    type: "auto.core.linked_errors",
    ...(i(n) && { is_exception_group: !0 }),
    ...e.mechanism,
    exception_id: t,
  };
}
function s(e, t, n, r) {
  e.mechanism = {
    handled: !0,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
t.applyAggregateErrorsToEvent = function (e, t, n, i, a, s) {
  if (!a.exception?.values || !s || !r.isError(s.originalException)) return;
  const l =
    a.exception.values.length > 0
      ? a.exception.values[a.exception.values.length - 1]
      : void 0;
  l &&
    (a.exception.values = o(
      e,
      t,
      i,
      s.originalException,
      n,
      a.exception.values,
      l,
      0,
    ));
};
