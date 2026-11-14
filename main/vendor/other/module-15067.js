// vendor/other/module-15067.js — webpack module 15067
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(52891 /* vendor/other/module-52891 */),
  o = n(76041 /* vendor/other/module-76041 */),
  i = n(75703 /* vendor/other/module-75703 */),
  s = n(15946 /* vendor/other/module-15946 */),
  a = n(82579 /* vendor/other/module-82579 */),
  c = n(12724 /* vendor/other/module-12724 */),
  u = n(58637 /* vendor/other/module-58637 */),
  l = n(82615 /* vendor/other/module-82615 */),
  d = n(23295 /* vendor/other/module-23295 */),
  p = n(19648 /* vendor/other/module-19648 */),
  f = n(77481 /* vendor/other/module-77481 */),
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
  g = [
    "createUser",
    "deleteUser",
    "listUsers",
    "getUserById",
    "updateUserById",
    "inviteUserByEmail",
  ],
  m = {
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
  _ = ["select", "insert", "upsert", "update", "delete"];
function S(e) {
  try {
    e.__SENTRY_INSTRUMENTED__ = !0;
  } catch {}
}
function E(e) {
  try {
    return e.__SENTRY_INSTRUMENTED__;
  } catch {
    return !1;
  }
}
function y(e, t) {
  return Object.keys(t).length > 0
    ? t
    : Array.isArray(e) && e.length > 0
      ? e
      : void 0;
}
function T(e, t = {}) {
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
function b(e, t) {
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
            : (n && m[n]) || "filter"),
    `${o}(${e}, ${r.join(".")})`
  );
}
function I(e, t = !1) {
  return new Proxy(e, {
    apply: (n, r, o) =>
      f.startSpan(
        {
          name: `auth ${t ? "(admin) " : ""}${e.name}`,
          attributes: {
            [c.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.supabase",
            [c.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
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
                    s.captureException(t.error, {
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
                s.captureException(t, {
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
function v(e, t) {
  E(e.prototype.then) ||
    ((e.prototype.then = new Proxy(e.prototype.then, {
      apply(e, n, i) {
        const a = _,
          u = n,
          h = T(u.method, u.headers);
        if (!a.includes(h)) return Reflect.apply(e, n, i);
        if (!u?.url?.pathname || "string" != typeof u.url.pathname)
          return Reflect.apply(e, n, i);
        const g = u.url.pathname.split("/"),
          m = g.length > 0 ? g[g.length - 1] : "",
          S = [];
        for (const [e, t] of u.url.searchParams.entries()) S.push(b(e, t));
        const E = Object.create(null);
        if (d.isPlainObject(u.body))
          for (const [e, t] of Object.entries(u.body)) E[e] = t;
        const I = o.getClient(),
          v =
            t.sendOperationData ??
            !0 === I?.getDataCollectionOptions().databaseQueryData,
          A = y(u.body, E),
          N =
            "select" === h
              ? ""
              : `${h}${((R = u.body), (C = E), void 0 !== y(R, C) ? "(...) " : "")}`;
        var R, C;
        const O = v ? S.join(" ") : S.length > 0 ? "[redacted]" : "",
          w = [N.trimEnd(), O].filter(Boolean).join(" "),
          k = w ? `${w} from(${m})` : `from(${m})`,
          P = {
            "db.table": m,
            "db.schema": u.schema,
            "db.url": u.url.origin,
            "db.sdk": u.headers["X-Client-Info"],
            "db.system": "postgresql",
            "db.operation": h,
            [c.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.supabase",
            [c.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
          };
        return (
          S.length && v && (P["db.query"] = S),
          void 0 !== A && v && (P["db.body"] = A),
          f.startSpan({ name: k, attributes: P }, (t) =>
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
                    S.length && v && (n.query = S),
                      void 0 !== A && v && (n.body = A),
                      s.captureException(
                        t,
                        (e) => (
                          e.addEventProcessor(
                            (e) => (
                              l.addExceptionMechanism(e, {
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
                      message: k,
                    },
                    o = {};
                  return (
                    S.length && v && (o.query = S),
                    void 0 !== A && v && (o.body = A),
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
    S(e.prototype.then));
}
const A = (e, t = {}) => {
    var n, r;
    e
      ? ((n = e.constructor === Function ? e : e.constructor),
        (r = t),
        E(n.prototype.from) ||
          ((n.prototype.from = new Proxy(n.prototype.from, {
            apply(e, t, n) {
              const o = Reflect.apply(e, t, n);
              return (
                (function (e, t) {
                  for (const n of _)
                    E(e.prototype[n]) ||
                      ((e.prototype[n] = new Proxy(e.prototype[n], {
                        apply(e, r, o) {
                          const s = Reflect.apply(e, r, o),
                            a = s.constructor;
                          return (
                            i.DEBUG_BUILD &&
                              u.debug.log(
                                `Instrumenting ${n} operation's PostgRESTFilterBuilder`,
                              ),
                            v(a, t),
                            s
                          );
                        },
                      })),
                      S(e.prototype[n]));
                })(o.constructor, r),
                o
              );
            },
          })),
          S(n.prototype.from)),
        (function (e) {
          const t = e.auth;
          if (t && !E(e.auth)) {
            for (const n of h) {
              const r = t[n];
              r && "function" == typeof e.auth[n] && (e.auth[n] = I(r));
            }
            for (const n of g) {
              const r = t.admin[n];
              r &&
                "function" == typeof e.auth.admin[n] &&
                (e.auth.admin[n] = I(r, !0));
            }
            S(e.auth);
          }
        })(e))
      : i.DEBUG_BUILD &&
        u.debug.warn(
          "Supabase integration was not installed because no Supabase client was provided.",
        );
  },
  N = a.defineIntegration((e) =>
    ((e, t) => ({
      setupOnce() {
        A(e, t);
      },
      name: "Supabase",
    }))(e.supabaseClient, { sendOperationData: e.sendOperationData }),
  );
(t.DB_OPERATIONS_TO_INSTRUMENT = _),
  (t.FILTER_MAPPINGS = m),
  (t.extractOperation = T),
  (t.instrumentSupabaseClient = A),
  (t.supabaseIntegration = N),
  (t.translateFiltersIntoMethods = b);
