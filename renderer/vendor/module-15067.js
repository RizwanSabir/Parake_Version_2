// vendor/module-15067.js — webpack module 15067
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(52891 /* vendor/module-52891 */),
  o = n(76041 /* vendor/module-76041 */),
  i = n(75703 /* vendor/module-75703 */),
  a = n(15946 /* vendor/module-15946 */),
  s = n(82579 /* vendor/module-82579 */),
  l = n(12724 /* vendor/module-12724 */),
  c = n(58637 /* vendor/module-58637 */),
  u = n(82615 /* vendor/module-82615 */),
  d = n(23295 /* vendor/module-23295 */),
  p = n(19648 /* vendor/module-19648 */),
  f = n(77481 /* vendor/module-77481 */),
  h = [
    "reauthenticate",
    "signInAnonymously",
    "signInWithOAuth",
    "signInWithIdToken",
    "signInWithOtp",
    "signInWithPassword",
    "signInWithSSO",
    "signOut",
    "signUp",
    "verifyOtp",
  ],
  m = [
    "createUser",
    "deleteUser",
    "listUsers",
    "getUserById",
    "updateUserById",
    "inviteUserByEmail",
  ],
  g = {
    eq: "eq",
    neq: "neq",
    gt: "gt",
    gte: "gte",
    lt: "lt",
    lte: "lte",
    like: "like",
    "like(all)": "likeAllOf",
    "like(any)": "likeAnyOf",
    ilike: "ilike",
    "ilike(all)": "ilikeAllOf",
    "ilike(any)": "ilikeAnyOf",
    is: "is",
    in: "in",
    cs: "contains",
    cd: "containedBy",
    sr: "rangeGt",
    nxl: "rangeGte",
    sl: "rangeLt",
    nxr: "rangeLte",
    adj: "rangeAdjacent",
    ov: "overlaps",
    fts: "",
    plfts: "plain",
    phfts: "phrase",
    wfts: "websearch",
    not: "not",
  },
  y = ["select", "insert", "upsert", "update", "delete"];
function v(e) {
  try {
    e.__SENTRY_INSTRUMENTED__ = !0;
  } catch {}
}
function b(e) {
  try {
    return e.__SENTRY_INSTRUMENTED__;
  } catch {
    return !1;
  }
}
function S(e, t) {
  return Object.keys(t).length > 0
    ? t
    : Array.isArray(e) && e.length > 0
      ? e
      : void 0;
}
function _(e, t = {}) {
  switch (e) {
    case "GET":
      return "select";
    case "POST":
      return t.Prefer?.includes("resolution=") ? "upsert" : "insert";
    case "PATCH":
      return "update";
    case "DELETE":
      return "delete";
    default:
      return "<unknown-op>";
  }
}
function x(e, t) {
  if ("" === t || "*" === t) return "select(*)";
  if ("select" === e) return `select(${t})`;
  if ("or" === e || e.endsWith(".or")) return `${e}${t}`;
  const [n, ...r] = t.split(".");
  let o;
  return (
    (o = n?.startsWith("fts")
      ? "textSearch"
      : n?.startsWith("plfts")
        ? "textSearch[plain]"
        : n?.startsWith("phfts")
          ? "textSearch[phrase]"
          : n?.startsWith("wfts")
            ? "textSearch[websearch]"
            : (n && g[n]) || "filter"),
    `${o}(${e}, ${r.join(".")})`
  );
}
function w(e, t = !1) {
  return new Proxy(e, {
    apply: (n, r, o) =>
      f.startSpan(
        {
          name: `auth ${t ? "(admin) " : ""}${e.name}`,
          attributes: {
            [l.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.supabase",
            [l.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
            "db.system": "postgresql",
            "db.operation": `auth.${t ? "admin." : ""}${e.name}`,
          },
        },
        (e) =>
          Reflect.apply(n, r, o)
            .then(
              (t) => (
                d.isObjectLike(t) && "error" in t && t.error
                  ? (e.setStatus({ code: p.SPAN_STATUS_ERROR }),
                    a.captureException(t.error, {
                      mechanism: {
                        handled: !1,
                        type: "auto.db.supabase.auth",
                      },
                    }))
                  : e.setStatus({ code: p.SPAN_STATUS_OK }),
                e.end(),
                t
              ),
            )
            .catch((t) => {
              throw (
                (e.setStatus({ code: p.SPAN_STATUS_ERROR }),
                e.end(),
                a.captureException(t, {
                  mechanism: {
                    handled: !1,
                    type: "auto.db.supabase.auth",
                  },
                }),
                t)
              );
            })
            .then(...o),
      ),
  });
}
function E(e, t) {
  b(e.prototype.then) ||
    ((e.prototype.then = new Proxy(e.prototype.then, {
      apply(e, n, i) {
        const s = y,
          c = n,
          h = _(c.method, c.headers);
        if (!s.includes(h)) return Reflect.apply(e, n, i);
        if (!c?.url?.pathname || "string" != typeof c.url.pathname)
          return Reflect.apply(e, n, i);
        const m = c.url.pathname.split("/"),
          g = m.length > 0 ? m[m.length - 1] : "",
          v = [];
        for (const [e, t] of c.url.searchParams.entries()) v.push(x(e, t));
        const b = Object.create(null);
        if (d.isPlainObject(c.body))
          for (const [e, t] of Object.entries(c.body)) b[e] = t;
        const w = o.getClient(),
          E =
            t.sendOperationData ??
            !0 === w?.getDataCollectionOptions().databaseQueryData,
          T = S(c.body, b),
          k =
            "select" === h
              ? ""
              : `${h}${((C = c.body), (I = b), void 0 !== S(C, I) ? "(...) " : "")}`;
        var C, I;
        const A = E ? v.join(" ") : v.length > 0 ? "[redacted]" : "",
          O = [k.trimEnd(), A].filter(Boolean).join(" "),
          R = O ? `${O} from(${g})` : `from(${g})`,
          M = {
            "db.table": g,
            "db.schema": c.schema,
            "db.url": c.url.origin,
            "db.sdk": c.headers["X-Client-Info"],
            "db.system": "postgresql",
            "db.operation": h,
            [l.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.supabase",
            [l.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
          };
        return (
          v.length && E && (M["db.query"] = v),
          void 0 !== T && E && (M["db.body"] = T),
          f.startSpan({ name: R, attributes: M }, (t) =>
            Reflect.apply(e, n, [])
              .then(
                (e) => {
                  if (
                    (t &&
                      (e &&
                        "object" == typeof e &&
                        "status" in e &&
                        p.setHttpStatus(t, e.status || 500),
                      t.end()),
                    e?.error)
                  ) {
                    const t = new Error(e.error.message);
                    e.error.code && (t.code = e.error.code),
                      e.error.details && (t.details = e.error.details);
                    const n = {};
                    v.length && E && (n.query = v),
                      void 0 !== T && E && (n.body = T),
                      a.captureException(
                        t,
                        (e) => (
                          e.addEventProcessor(
                            (e) => (
                              u.addExceptionMechanism(e, {
                                handled: !1,
                                type: "auto.db.supabase.postgres",
                              }),
                              e
                            ),
                          ),
                          e.setContext("supabase", n),
                          e
                        ),
                      );
                  }
                  const n = {
                      type: "supabase",
                      category: `db.${h}`,
                      message: R,
                    },
                    o = {};
                  return (
                    v.length && E && (o.query = v),
                    void 0 !== T && E && (o.body = T),
                    Object.keys(o).length && (n.data = o),
                    r.addBreadcrumb(n),
                    e
                  );
                },
                (e) => {
                  throw (t && (p.setHttpStatus(t, 500), t.end()), e);
                },
              )
              .then(...i),
          )
        );
      },
    })),
    v(e.prototype.then));
}
const T = (e, t = {}) => {
    var n, r;
    e
      ? ((n = e.constructor === Function ? e : e.constructor),
        (r = t),
        b(n.prototype.from) ||
          ((n.prototype.from = new Proxy(n.prototype.from, {
            apply(e, t, n) {
              const o = Reflect.apply(e, t, n);
              return (
                (function (e, t) {
                  for (const n of y)
                    b(e.prototype[n]) ||
                      ((e.prototype[n] = new Proxy(e.prototype[n], {
                        apply(e, r, o) {
                          const a = Reflect.apply(e, r, o),
                            s = a.constructor;
                          return (
                            i.DEBUG_BUILD &&
                              c.debug.log(
                                `Instrumenting ${n} operation's PostgRESTFilterBuilder`,
                              ),
                            E(s, t),
                            a
                          );
                        },
                      })),
                      v(e.prototype[n]));
                })(o.constructor, r),
                o
              );
            },
          })),
          v(n.prototype.from)),
        (function (e) {
          const t = e.auth;
          if (t && !b(e.auth)) {
            for (const n of h) {
              const r = t[n];
              r && "function" == typeof e.auth[n] && (e.auth[n] = w(r));
            }
            for (const n of m) {
              const r = t.admin[n];
              r &&
                "function" == typeof e.auth.admin[n] &&
                (e.auth.admin[n] = w(r, !0));
            }
            v(e.auth);
          }
        })(e))
      : i.DEBUG_BUILD &&
        c.debug.warn(
          "Supabase integration was not installed because no Supabase client was provided.",
        );
  },
  k = s.defineIntegration((e) =>
    ((e, t) => ({
      setupOnce() {
        T(e, t);
      },
      name: "Supabase",
    }))(e.supabaseClient, { sendOperationData: e.sendOperationData }),
  );
(t.DB_OPERATIONS_TO_INSTRUMENT = y),
  (t.FILTER_MAPPINGS = g),
  (t.extractOperation = _),
  (t.instrumentSupabaseClient = T),
  (t.supabaseIntegration = k),
  (t.translateFiltersIntoMethods = x);
