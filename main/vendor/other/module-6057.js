// vendor/other/module-6057.js — webpack module 6057
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DigestTransform = t.HttpExecutor = t.HttpError = void 0),
  (t.addSensitiveRedirectHeader = function (e) {
    f.add(p(e));
  }),
  (t.addSensitiveFieldPattern = function (e) {
    h.push(e.toLowerCase().replace(/[-_]/g, ""));
  }),
  (t.createHttpError = m),
  (t.parseJson = function (e) {
    return e.then((e) => (null == e || 0 === e.length ? null : JSON.parse(e)));
  }),
  (t.configureRequestOptionsFromUrl = T),
  (t.configureRequestUrl = b),
  (t.safeGetHeader = v),
  (t.configureRequestOptions = A),
  (t.isSensitiveFieldName = N),
  (t.hashSensitiveValue = R),
  (t.safeStringifyJson = C);
const r = n(76982 /* external/crypto */),
  o = n(3680 /* vendor/other/module-3680 */),
  i = n(79896 /* external/fs */),
  s = n(2203 /* external/stream */),
  a = n(87016 /* external/url */),
  c = n(8462 /* vendor/other/module-8462 */),
  u = n(93776 /* vendor/other/module-93776 */),
  l = n(61810 /* vendor/other/module-61810 */),
  d = (0, o.default)("electron-builder"),
  p = (e) => e.toLowerCase().replace(/[-_]/g, ""),
  f = new Set([
    "authorization",
    "proxyauthorization",
    "privatetoken",
    "xapikey",
    "xauthtoken",
    "xaccesstoken",
    "xgitlabtoken",
    "cookie",
    "xcsrftoken",
  ]),
  h = [
    "token",
    "password",
    "secret",
    "authorization",
    "credential",
    "apikey",
    "passphrase",
    "auth",
  ],
  g = ["key"];
function m(e, t = null) {
  return new S(
    e.statusCode || -1,
    `${e.statusCode} ${e.statusMessage}` +
      (null == t ? "" : "\n" + JSON.stringify(t, null, "  ")) +
      "\nHeaders: " +
      C(e.headers),
    t,
  );
}
const _ = new Map([
  [429, "Too many requests"],
  [400, "Bad request"],
  [403, "Forbidden"],
  [404, "Not found"],
  [405, "Method not allowed"],
  [406, "Not acceptable"],
  [408, "Request timeout"],
  [413, "Request entity too large"],
  [500, "Internal server error"],
  [502, "Bad gateway"],
  [503, "Service unavailable"],
  [504, "Gateway timeout"],
  [505, "HTTP version not supported"],
]);
class S extends Error {
  constructor(e, t = `HTTP error: ${_.get(e) || e}`, n = null) {
    super(t),
      (this.statusCode = e),
      (this.description = n),
      (this.name = "HttpError"),
      (this.code = `HTTP_ERROR_${e}`);
  }
  isServerError() {
    return this.statusCode >= 500 && this.statusCode <= 599;
  }
}
t.HttpError = S;
class E {
  constructor() {
    this.maxRedirects = 10;
  }
  request(e, t = new c.CancellationToken(), n) {
    A(e);
    const r = null == n ? void 0 : JSON.stringify(n),
      o = r ? Buffer.from(r) : void 0;
    if (null != o) {
      d.enabled && d(C(n));
      const { headers: t, ...r } = e;
      e = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": o.length,
          ...t,
        },
        ...r,
      };
    }
    return this.doApiRequest(e, t, (e) => e.end(o));
  }
  doApiRequest(e, t, n, r = 0) {
    if (d.enabled) {
      const { headers: t, auth: n, ...r } = e;
      d(`Request: ${C(r)}`);
    }
    return t.createPromise((o, i, s) => {
      const a = this.createRequest(e, (s) => {
        try {
          this.handleResponse(s, e, t, o, i, r, n);
        } catch (e) {
          i(e);
        }
      });
      this.addErrorAndTimeoutHandlers(a, i, e.timeout),
        this.addRedirectHandlers(a, e, i, r, (e) => {
          this.doApiRequest(e, t, n, r).then(o).catch(i);
        }),
        n(a, i),
        s(() => a.abort());
    });
  }
  addRedirectHandlers(e, t, n, r, o) {}
  addErrorAndTimeoutHandlers(e, t, n = 6e4) {
    this.addTimeOutHandler(e, t, n),
      e.on("error", t),
      e.on("aborted", () => {
        t(new Error("Request has been aborted by the server"));
      });
  }
  handleResponse(e, t, n, r, o, i, s) {
    var a;
    if (d.enabled) {
      const { headers: n, auth: r, ...o } = t;
      d(
        `Response: ${e.statusCode} ${e.statusMessage}, request options: ${C(o)}`,
      );
    }
    if (404 === e.statusCode)
      return void o(
        m(
          e,
          `method: ${t.method || "GET"} url: ${t.protocol || "https:"}//${t.hostname}${t.port ? `:${t.port}` : ""}${t.path}\n\nPlease double check that your authentication token is correct. Due to security reasons, actual status maybe not reported, but 404.\n`,
        ),
      );
    if (204 === e.statusCode) return void r();
    const c = null !== (a = e.statusCode) && void 0 !== a ? a : 0,
      u = c >= 300 && c < 400,
      l = v(e, "location");
    if (u && null != l)
      return i > this.maxRedirects
        ? void o(this.createMaxRedirectError())
        : void this.doApiRequest(E.prepareRedirectUrlOptions(l, t), n, s, i)
            .then(r)
            .catch(o);
    e.setEncoding("utf8");
    let p = "";
    e.on("error", o),
      e.on("data", (e) => (p += e)),
      e.on("end", () => {
        try {
          if (null != e.statusCode && e.statusCode >= 400) {
            const n = v(e, "content-type"),
              r =
                null != n &&
                (Array.isArray(n)
                  ? null != n.find((e) => e.includes("json"))
                  : n.includes("json"));
            o(
              m(
                e,
                `method: ${t.method || "GET"} url: ${t.protocol || "https:"}//${t.hostname}${t.port ? `:${t.port}` : ""}${t.path}\n\n          Data:\n          ${r ? C(JSON.parse(p)) : p}\n          `,
              ),
            );
          } else r(0 === p.length ? null : p);
        } catch (e) {
          o(e);
        }
      });
  }
  async downloadToBuffer(e, t) {
    return await t.cancellationToken.createPromise((n, r, o) => {
      const i = [],
        s = { headers: t.headers || void 0, redirect: "manual" };
      b(e, s),
        A(s),
        this.doDownload(
          s,
          {
            destination: null,
            options: t,
            onCancel: o,
            callback: (e) => {
              null == e ? n(Buffer.concat(i)) : r(e);
            },
            responseHandler: (e, t) => {
              let n = 0;
              e.on("data", (e) => {
                (n += e.length),
                  n > 524288e3
                    ? t(new Error("Maximum allowed size is 500 MB"))
                    : i.push(e);
              }),
                e.on("end", () => {
                  t(null);
                });
            },
          },
          0,
        );
    });
  }
  doDownload(e, t, n) {
    const r = this.createRequest(e, (r) => {
      if (r.statusCode >= 400)
        return void t.callback(
          new Error(
            `Cannot download "${e.protocol || "https:"}//${e.hostname}${e.path}", status ${r.statusCode}: ${r.statusMessage}`,
          ),
        );
      r.on("error", t.callback);
      const o = v(r, "location");
      null == o
        ? null == t.responseHandler
          ? (function (e, t) {
              if (
                ((n = v(t, "X-Checksum-Sha2")),
                (r = e.options.sha2),
                (o = e.callback),
                null != n &&
                  null != r &&
                  n !== r &&
                  (o(
                    new Error(
                      `checksum mismatch: expected ${r} but got ${n} (X-Checksum-Sha2 header)`,
                    ),
                  ),
                  1))
              )
                return;
              var n, r, o;
              const s = [];
              if (null != e.options.onProgress) {
                const n = v(t, "content-length");
                null != n &&
                  s.push(
                    new l.ProgressCallbackTransform(
                      parseInt(n, 10),
                      e.options.cancellationToken,
                      e.options.onProgress,
                    ),
                  );
              }
              const a = e.options.sha512;
              null != a
                ? s.push(
                    new I(
                      a,
                      "sha512",
                      128 !== a.length ||
                      a.includes("+") ||
                      a.includes("Z") ||
                      a.includes("=")
                        ? "base64"
                        : "hex",
                    ),
                  )
                : null != e.options.sha2 &&
                  s.push(new I(e.options.sha2, "sha256", "hex"));
              const c = (0, i.createWriteStream)(e.destination);
              s.push(c);
              let u = t;
              for (const t of s)
                t.on("error", (t) => {
                  c.close(),
                    e.options.cancellationToken.cancelled || e.callback(t);
                }),
                  (u = u.pipe(t));
              c.on("finish", () => {
                c.close(e.callback);
              });
            })(t, r)
          : t.responseHandler(r, t.callback)
        : n < this.maxRedirects
          ? this.doDownload(E.prepareRedirectUrlOptions(o, e), t, n++)
          : t.callback(this.createMaxRedirectError());
    });
    this.addErrorAndTimeoutHandlers(r, t.callback, e.timeout),
      this.addRedirectHandlers(r, e, t.callback, n, (e) => {
        this.doDownload(e, t, n++);
      }),
      r.end();
  }
  createMaxRedirectError() {
    return new Error(`Too many redirects (> ${this.maxRedirects})`);
  }
  addTimeOutHandler(e, t, n) {
    e.on("socket", (r) => {
      r.setTimeout(n, () => {
        e.abort(), t(new Error("Request timed out"));
      });
    });
  }
  static prepareRedirectUrlOptions(e, t) {
    const n = T(e, { ...t }),
      r = n.headers;
    if (null == r) return n;
    const o = E.reconstructOriginalUrl(t),
      i = y(e, t);
    if (E.isCrossOriginRedirect(o, i)) {
      d.enabled &&
        d(
          `Cross-origin redirect (${o.host} → ${i.host}): stripping sensitive headers`,
        );
      for (const e of Object.keys(r)) f.has(p(e)) && delete r[e];
    }
    return n;
  }
  static reconstructOriginalUrl(e) {
    const t = e.protocol || "https:";
    if (!e.hostname) throw new Error("Missing hostname in request options");
    const n = e.hostname,
      r = e.port ? `:${e.port}` : "",
      o = e.path || "/";
    return new a.URL(`${t}//${n}${r}${o}`);
  }
  static isCrossOriginRedirect(e, t) {
    return (
      e.hostname.toLowerCase() !== t.hostname.toLowerCase() ||
      (("http:" !== e.protocol ||
        !["80", ""].includes(e.port) ||
        "https:" !== t.protocol ||
        !["443", ""].includes(t.port)) &&
        (e.protocol !== t.protocol || e.port !== t.port))
    );
  }
  static async retryOnServerError(e, t = 3) {
    for (let n = 0; ; n++)
      try {
        return await e();
      } catch (e) {
        if (
          n < t &&
          ((e instanceof S && e.isServerError()) || "EPIPE" === e.code)
        ) {
          await new Promise((e) => setTimeout(e, 1e3 * (n + 1)));
          continue;
        }
        throw e;
      }
  }
}
function y(e, t) {
  try {
    return new a.URL(e);
  } catch {
    const n = t.hostname,
      r = `${t.protocol || "https:"}//${n}${t.port ? `:${t.port}` : ""}`;
    return new a.URL(e, r);
  }
}
function T(e, t) {
  const n = A(t);
  return b(y(e, t), n), n;
}
function b(e, t) {
  (t.protocol = e.protocol),
    (t.hostname = e.hostname),
    e.port ? (t.port = e.port) : t.port && delete t.port,
    (t.path = e.pathname + e.search);
}
t.HttpExecutor = E;
class I extends s.Transform {
  get actual() {
    return this._actual;
  }
  constructor(e, t = "sha512", n = "base64") {
    super(),
      (this.expected = e),
      (this.algorithm = t),
      (this.encoding = n),
      (this._actual = null),
      (this.isValidateOnEnd = !0),
      (this.digester = (0, r.createHash)(t));
  }
  _transform(e, t, n) {
    this.digester.update(e), n(null, e);
  }
  _flush(e) {
    if (
      ((this._actual = this.digester.digest(this.encoding)),
      this.isValidateOnEnd)
    )
      try {
        this.validate();
      } catch (t) {
        return void e(t);
      }
    e(null);
  }
  validate() {
    if (null == this._actual)
      throw (0, u.newError)("Not finished yet", "ERR_STREAM_NOT_FINISHED");
    if (this._actual !== this.expected)
      throw (0, u.newError)(
        `${this.algorithm} checksum mismatch, expected ${this.expected}, got ${this._actual}`,
        "ERR_CHECKSUM_MISMATCH",
      );
    return null;
  }
}
function v(e, t) {
  const n = e.headers[t];
  return null == n
    ? null
    : Array.isArray(n)
      ? 0 === n.length
        ? null
        : n[n.length - 1]
      : n;
}
function A(e, t, n) {
  null != n && (e.method = n), (e.headers = { ...e.headers });
  const r = e.headers;
  return (
    null != t &&
      (r.authorization =
        t.startsWith("Basic") || t.startsWith("Bearer") ? t : `token ${t}`),
    null == r["User-Agent"] && (r["User-Agent"] = "electron-builder"),
    (null != n && "GET" !== n && null != r["Cache-Control"]) ||
      (r["Cache-Control"] = "no-cache"),
    null == e.protocol &&
      null != process.versions.electron &&
      (e.protocol = "https:"),
    e
  );
}
function N(e) {
  const t = p(e);
  return h.some((e) => t.includes(e)) || g.some((e) => t.endsWith(e));
}
function R(e) {
  return `${(0, r.createHash)("sha256").update(e).digest("hex")} (sha256 hash)`;
}
function C(e, t) {
  return JSON.stringify(
    e,
    (e, n) =>
      N(e) || (null != t && t.has(e))
        ? "string" == typeof n
          ? R(n)
          : "<stripped sensitive data>"
        : n,
    2,
  );
}
t.DigestTransform = I;
