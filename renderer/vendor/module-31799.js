// vendor/module-31799.js — webpack module 31799
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(76414 /* vendor/module-76414 */),
  i = n(57230 /* vendor/module-57230 */),
  a = r.defineIntegration((e = {}) => {
    const t = {
      failedRequestStatusCodes: [[500, 599]],
      failedRequestTargets: [/.*/],
      ...e,
    };
    return {
      name: "HttpClient",
      setup(e) {
        !(function (e, t) {
          r.supportsNativeFetch() &&
            r.addFetchInstrumentationHandler((n) => {
              if (r.getClient() !== e) return;
              const { response: o, args: i, error: a, virtualError: s } = n,
                [p, f] = i;
              o &&
                (function (e, t, n, o, i) {
                  if (c(e, n.status, n.url)) {
                    const e = (function (e, t) {
                      return (!t && e instanceof Request) ||
                        (e instanceof Request && e.bodyUsed)
                        ? e
                        : new Request(e, t);
                    })(t, o);
                    let a, s, c, p;
                    const f = d();
                    if (
                      (!1 !== f.requestHeaders &&
                        (a = r._INTERNAL_filterKeyValueData(
                          l(e.headers),
                          f.requestHeaders,
                        )),
                      !1 !== f.responseHeaders &&
                        (s = r._INTERNAL_filterKeyValueData(
                          l(n.headers),
                          f.responseHeaders,
                        )),
                      !1 !== f.cookies)
                    ) {
                      const t = e.headers.get("Cookie") || void 0;
                      if (t) {
                        const e = r._INTERNAL_filterCookies(t, f.cookies);
                        "object" == typeof e && (c = e);
                      }
                      const o = n.headers.get("Set-Cookie") || void 0;
                      if (o) {
                        const e = r._INTERNAL_filterCookies(o, f.cookies);
                        "object" == typeof e && (p = e);
                      }
                    }
                    const h = u({
                      url: e.url,
                      method: e.method,
                      status: n.status,
                      requestHeaders: a,
                      responseHeaders: s,
                      requestCookies: c,
                      responseCookies: p,
                      error: i,
                      type: "fetch",
                    });
                    r.captureEvent(h);
                  }
                })(t, p, o, f, a || s);
            }, !1);
        })(e, t),
          (function (e, t) {
            "XMLHttpRequest" in r.GLOBAL_OBJ &&
              o.addXhrInstrumentationHandler((n) => {
                if (r.getClient() !== e) return;
                const { error: a, virtualError: s } = n,
                  l = n.xhr,
                  p = l[o.SENTRY_XHR_DATA_KEY];
                if (!p) return;
                const { method: f, request_headers: h } = p;
                try {
                  !(function (e, t, n, o, i) {
                    if (c(e, t.status, t.responseURL)) {
                      let e, a, s;
                      const l = d();
                      if (!1 !== l.cookies)
                        try {
                          const e =
                            t.getResponseHeader("Set-Cookie") ||
                            t.getResponseHeader("set-cookie") ||
                            void 0;
                          if (e) {
                            const t = r._INTERNAL_filterCookies(e, l.cookies);
                            "object" == typeof t && (a = t);
                          }
                        } catch {}
                      if (!1 !== l.responseHeaders)
                        try {
                          s = r._INTERNAL_filterKeyValueData(
                            (function (e) {
                              const t = e.getAllResponseHeaders();
                              return t
                                ? t.split("\r\n").reduce((e, t) => {
                                    const [n, r] = t.split(": ");
                                    return n && r && (e[n] = r), e;
                                  }, {})
                                : {};
                            })(t),
                            l.responseHeaders,
                          );
                        } catch {}
                      !1 !== l.requestHeaders &&
                        (e = r._INTERNAL_filterKeyValueData(
                          o,
                          l.requestHeaders,
                        ));
                      const c = u({
                        url: t.responseURL,
                        method: n,
                        status: t.status,
                        requestHeaders: e,
                        responseHeaders: s,
                        responseCookies: a,
                        error: i,
                        type: "xhr",
                      });
                      r.captureEvent(c);
                    }
                  })(t, l, f, h, a || s);
                } catch (e) {
                  i.DEBUG_BUILD &&
                    r.debug.warn(
                      "Error while extracting response event form XHR response",
                      e,
                    );
                }
              });
          })(e, t);
      },
    };
  });
function s(e) {
  if (e) {
    const t = e["Content-Length"] || e["content-length"];
    if (t) return parseInt(t, 10);
  }
}
function l(e) {
  const t = {};
  return (
    e.forEach((e, n) => {
      t[n] = e;
    }),
    t
  );
}
function c(e, t, n) {
  return (
    (function (e, t) {
      return e.some((e) =>
        "number" == typeof e ? e === t : t >= e[0] && t <= e[1],
      );
    })(e.failedRequestStatusCodes, t) &&
    ((o = e.failedRequestTargets),
    (i = n),
    o.some((e) => ("string" == typeof e ? i.includes(e) : e.test(i)))) &&
    !r.isSentryRequestUrl(n, r.getClient())
  );
  var o, i;
}
function u(e) {
  const t = r.getClient(),
    n = t && e.error && e.error instanceof Error ? e.error.stack : void 0,
    o = n && t ? t.getOptions().stackParser(n, 0, 1) : void 0,
    i = `HTTP Client Error with status code: ${e.status}`,
    a = {
      message: i,
      exception: {
        values: [
          {
            type: "Error",
            value: i,
            stacktrace: o ? { frames: o } : void 0,
          },
        ],
      },
      request: {
        url: e.url,
        method: e.method,
        headers: e.requestHeaders,
        cookies: e.requestCookies,
      },
      contexts: {
        response: {
          status_code: e.status,
          headers: e.responseHeaders,
          cookies: e.responseCookies,
          body_size: s(e.responseHeaders),
        },
      },
    };
  return (
    r.addExceptionMechanism(a, {
      type: `auto.http.client.${e.type}`,
      handled: !1,
    }),
    a
  );
}
function d() {
  const e = r.getClient();
  if (!e) return { cookies: !1, requestHeaders: !1, responseHeaders: !1 };
  const t = e.getOptions();
  if (null == t.dataCollection) {
    const e = Boolean(t.sendDefaultPii);
    return { cookies: e, requestHeaders: e, responseHeaders: e };
  }
  const { cookies: n, httpHeaders: o } = e.getDataCollectionOptions();
  return {
    cookies: n,
    requestHeaders: o.request,
    responseHeaders: o.response,
  };
}
t.httpClientIntegration = a;
