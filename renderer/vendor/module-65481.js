// vendor/module-65481.js — webpack module 65481
// params: (e, t, n) = (module, exports, require)
const r = n(87785 /* vendor/module-87785 */),
  o = n(27223 /* vendor/module-27223 */),
  i = r.__toESM(n(34349 /* vendor/module-34349 */)),
  a = r.__toESM(n(1572 /* vendor/module-1572 */)),
  s = r.__toESM(n(74109 /* vendor/module-74109 */)),
  l = () => {
    let e, t;
    const n = new AbortController();
    return {
      promise: new Promise((n, r) => {
        (e = n), (t = r);
      }),
      ac: n,
      resolve: e,
      reject: t,
    };
  },
  c = function (e) {
    let t = "";
    for (let n = 0; n < e; n++)
      t += "abcdef0123456789".charAt(Math.floor(16 * Math.random()));
    return t;
  },
  u = () => {
    const e = c(32),
      t = c(16);
    return { b3: `${e}-${t}-01`, traceparent: `00-${e}-${t}-01` };
  },
  d = (e) => (t, n) =>
    i.gen(function* () {
      const r = ((e) => {
          const t = new URL(e.url),
            n = new URLSearchParams(t.search);
          return (
            n.set("actionType", e.actionType),
            n.set("slug", e.slug),
            (t.search = n.toString()),
            t
          );
        })({ url: e.url, slug: e.endpoint, actionType: t }),
        l = new Headers(
          yield* i.promise(async () =>
            "function" == typeof e.headers ? await e.headers() : e.headers,
          ),
        );
      return (
        e.package && l.set("x-uploadthing-package", e.package),
        l.set("x-uploadthing-version", o.version),
        l.set("Content-Type", "application/json"),
        l.set("b3", e.traceHeaders.b3),
        l.set("traceparent", e.traceHeaders.traceparent),
        yield* (0, a.fetchEff)(r, {
          method: "POST",
          body: JSON.stringify(n),
          headers: l,
        }).pipe(
          i.andThen(a.parseResponseJson),
          i.map(s.unsafeCoerce),
          i.catchTag("FetchError", (e) =>
            i.fail(
              new a.UploadThingError({
                code: "INTERNAL_CLIENT_ERROR",
                message: `Failed to report event "${t}" to UploadThing server`,
                cause: e,
              }),
            ),
          ),
          i.catchTag("BadRequestError", (e) =>
            i.fail(
              new a.UploadThingError({
                code: (0, a.getErrorTypeFromStatusCode)(e.status),
                message: e.getMessage(),
                cause: e.json,
              }),
            ),
          ),
          i.catchTag("InvalidJson", (e) =>
            i.fail(
              new a.UploadThingError({
                code: "INTERNAL_CLIENT_ERROR",
                message: "Failed to parse response from UploadThing server",
                cause: e,
              }),
            ),
          ),
        )
      );
    });
Object.defineProperty(t, "createDeferred", {
  enumerable: !0,
  get: function () {
    return l;
  },
}),
  Object.defineProperty(t, "createUTReporter", {
    enumerable: !0,
    get: function () {
      return d;
    },
  }),
  Object.defineProperty(t, "generateTraceHeaders", {
    enumerable: !0,
    get: function () {
      return u;
    },
  });
