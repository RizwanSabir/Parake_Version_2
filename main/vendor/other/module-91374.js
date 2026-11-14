// vendor/other/module-91374.js — webpack module 91374
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/other/module-23295 */);
function o(e, t, n, c, u, l, d, p) {
  if (l.length >= n + 1) return l;
  let f = [...l];
  if (r.isError(c[u])) {
    s(d, p, c);
    const r = e(t, c[u]),
      i = f.length;
    a(r, u, i, p), (f = o(e, t, n, c[u], u, [r, ...f], r, i));
  }
  return (
    i(c) &&
      c.errors.forEach((i, l) => {
        if (r.isError(i)) {
          s(d, p, c);
          const r = e(t, i),
            h = f.length;
          a(r, `errors[${l}]`, h, p), (f = o(e, t, n, i, u, [r, ...f], r, h));
        }
      }),
    f
  );
}
function i(e) {
  return Array.isArray(e.errors);
}
function s(e, t, n) {
  e.mechanism = {
    handled: !0,
    type: "auto.core.linked_errors",
    ...(i(n) && { is_exception_group: !0 }),
    ...e.mechanism,
    exception_id: t,
  };
}
function a(e, t, n, r) {
  e.mechanism = {
    handled: !0,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
t.applyAggregateErrorsToEvent = function (e, t, n, i, s, a) {
  if (!s.exception?.values || !a || !r.isError(a.originalException)) return;
  const c =
    s.exception.values.length > 0
      ? s.exception.values[s.exception.values.length - 1]
      : void 0;
  c &&
    (s.exception.values = o(
      e,
      t,
      i,
      a.originalException,
      n,
      s.exception.values,
      c,
      0,
    ));
};
