// vendor/module-15606.js — webpack module 15606
// params: (e, t, n) = (module, exports, require)
const r = n(87498 /* vendor/module-87498 */),
  o = n(4064 /* vendor/module-4064 */),
  i = n(59295 /* vendor/module-59295 */),
  a = n(18277 /* vendor/module-18277 */),
  s = r.__toESM(n(65566 /* vendor/module-65566 */)),
  l = r.__toESM(n(35e3)),
  c = () => {
    throw new Error(
      "Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new",
    );
  };
function u(e) {
  let t = null,
    n = null;
  function r() {
    const r = (function (t) {
      const n = [[]];
      let r = 0;
      for (;;) {
        const a = t[r];
        if (!a) break;
        const s = n[n.length - 1];
        var o, i;
        a.aborted
          ? (null === (o = a.reject) ||
              void 0 === o ||
              o.call(a, new Error("Aborted")),
            r++)
          : e.validate(s.concat(a).map((e) => e.key))
            ? (s.push(a), r++)
            : 0 !== s.length
              ? n.push([])
              : (null === (i = a.reject) ||
                  void 0 === i ||
                  i.call(
                    a,
                    new Error("Input is too big for a single dispatch"),
                  ),
                r++);
      }
      return n;
    })(t);
    clearTimeout(n), (n = null), (t = null);
    for (const t of r) {
      if (!t.length) continue;
      const n = { items: t };
      for (const e of t) e.batch = n;
      e.fetch(n.items.map((e) => e.key))
        .then(async (e) => {
          await Promise.all(
            e.map(async (e, t) => {
              const r = n.items[t];
              try {
                var o;
                const t = await Promise.resolve(e);
                null === (o = r.resolve) || void 0 === o || o.call(r, t);
              } catch (e) {
                var i;
                null === (i = r.reject) || void 0 === i || i.call(r, e);
              }
              (r.batch = null), (r.reject = null), (r.resolve = null);
            }),
          );
          for (const e of n.items) {
            var t;
            null === (t = e.reject) ||
              void 0 === t ||
              t.call(e, new Error("Missing result")),
              (e.batch = null);
          }
        })
        .catch((e) => {
          for (const r of n.items) {
            var t;
            null === (t = r.reject) || void 0 === t || t.call(r, e),
              (r.batch = null);
          }
        });
    }
  }
  return {
    load: function (e) {
      var o;
      const i = {
          aborted: !1,
          key: e,
          batch: null,
          resolve: c,
          reject: c,
        },
        a = new Promise((e, n) => {
          var r;
          (i.reject = n),
            (i.resolve = e),
            (null !== (r = t) && void 0 !== r) || (t = []),
            t.push(i);
        });
      return (null !== (o = n) && void 0 !== o) || (n = setTimeout(r)), a;
    },
  };
}
function d(...e) {
  const t = new AbortController(),
    n = e.length;
  let r = 0;
  const o = () => {
    ++r === n && t.abort();
  };
  for (const t of e)
    (null == t ? void 0 : t.aborted)
      ? o()
      : null == t || t.addEventListener("abort", o, { once: !0 });
  return t.signal;
}
function p(...e) {
  const t = new AbortController();
  for (const n of e)
    (null == n ? void 0 : n.aborted)
      ? t.abort()
      : null == n || n.addEventListener("abort", () => t.abort(), { once: !0 });
  return t.signal;
}
function f(e) {
  return new Promise((t, n) => {
    e.aborted
      ? n(e.reason)
      : e.addEventListener(
          "abort",
          () => {
            n(e.reason);
          },
          { once: !0 },
        );
  });
}
var h = r.__toESM(o.require_objectSpread2(), 1);
function m(e) {
  var t, n;
  const r = a.resolveHTTPLinkOptions(e),
    o = null !== (t = e.maxURLLength) && void 0 !== t ? t : 1 / 0,
    c = null !== (n = e.maxItems) && void 0 !== n ? n : 1 / 0;
  return () => {
    const t = (t) => ({
        validate(e) {
          if (o === 1 / 0 && c === 1 / 0) return !0;
          if (e.length > c) return !1;
          const n = e.map((e) => e.path).join(","),
            i = e.map((e) => e.input);
          return (
            a.getUrl(
              (0, h.default)(
                (0, h.default)({}, r),
                {},
                { type: t, path: n, inputs: i, signal: null },
              ),
            ).length <= o
          );
        },
        async fetch(n) {
          const o = n.map((e) => e.path).join(","),
            i = n.map((e) => e.input),
            s = d(...n.map((e) => e.signal)),
            l = await a.jsonHttpRequester(
              (0, h.default)(
                (0, h.default)({}, r),
                {},
                {
                  path: o,
                  inputs: i,
                  type: t,
                  headers: () =>
                    e.headers
                      ? "function" == typeof e.headers
                        ? e.headers({ opList: n })
                        : e.headers
                      : {},
                  signal: s,
                },
              ),
            );
          return (Array.isArray(l.json) ? l.json : n.map(() => l.json)).map(
            (e) => ({ meta: l.meta, json: e }),
          );
        },
      }),
      n = { query: u(t("query")), mutation: u(t("mutation")) };
    return ({ op: e }) =>
      (0, s.observable)((t) => {
        if ("subscription" === e.type)
          throw new Error(
            "Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`",
          );
        let o;
        return (
          n[e.type]
            .load(e)
            .then((e) => {
              o = e;
              const n = (0, l.transformResult)(e.json, r.transformer.output);
              n.ok
                ? (t.next({ context: e.meta, result: n.result }), t.complete())
                : t.error(i.TRPCClientError.from(n.error, { meta: e.meta }));
            })
            .catch((e) => {
              t.error(
                i.TRPCClientError.from(e, {
                  meta: null == o ? void 0 : o.meta,
                }),
              );
            }),
          () => {}
        );
      });
  };
}
Object.defineProperty(t, "abortSignalToPromise", {
  enumerable: !0,
  get: function () {
    return f;
  },
}),
  Object.defineProperty(t, "allAbortSignals", {
    enumerable: !0,
    get: function () {
      return d;
    },
  }),
  Object.defineProperty(t, "dataLoader", {
    enumerable: !0,
    get: function () {
      return u;
    },
  }),
  Object.defineProperty(t, "httpBatchLink", {
    enumerable: !0,
    get: function () {
      return m;
    },
  }),
  Object.defineProperty(t, "raceAbortSignals", {
    enumerable: !0,
    get: function () {
      return p;
    },
  });
