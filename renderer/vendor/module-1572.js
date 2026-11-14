// vendor/module-1572.js — webpack module 1572
// params: (e, t, n) = (module, exports, require)
var r = Object.create,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.getPrototypeOf,
  l = Object.prototype.hasOwnProperty,
  c = (e, t, n) => (
    (n = null != e ? r(s(e)) : {}),
    ((e, t, n, r) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (var s, c = a(t), u = 0, d = c.length; u < d; u++)
          (s = c[u]),
            l.call(e, s) ||
              void 0 === s ||
              o(e, s, {
                get: ((e) => t[e]).bind(null, s),
                enumerable: !(r = i(t, s)) || r.enumerable,
              });
      return e;
    })(
      !t && e && e.__esModule
        ? n
        : o(n, "default", { value: e, enumerable: !0 }),
      e,
    )
  );
const u = c(n(34349 /* vendor/module-34349 */)),
  d = c(n(86341 /* vendor/module-86341 */)),
  p = c(n(84552 /* vendor/module-84552 */)),
  f = c(n(426 /* vendor/module-426 */)),
  h = c(n(86923 /* vendor/module-86923 */)),
  m = c(n(36434 /* vendor/module-36434 */)),
  g = c(n(80504 /* vendor/module-80504 */)),
  y = c(n(67460 /* vendor/module-67460 */)),
  v = c(n(85860 /* vendor/module-85860 */)),
  b = c(n(63101 /* vendor/module-63101 */)),
  S = c(n(69581 /* vendor/module-69581 */)),
  _ = c(n(56203 /* vendor/module-56203 */));
var x = class extends u.TaggedError("InvalidRouteConfig") {
    constructor(e, t) {
      super({
        reason: t
          ? `Expected route config to have a ${t} for key ${e} but none was found.`
          : `Encountered an invalid route config during backfilling. ${e} was not found.`,
      });
    }
  },
  w = class extends u.TaggedError("UnknownFileType") {
    constructor(e) {
      super({ reason: `Could not determine type for ${e}` });
    }
  },
  E = class extends u.TaggedError("InvalidFileType") {
    constructor(e, t) {
      super({ reason: `File type ${e} not allowed for ${t}` });
    }
  },
  T = class extends u.TaggedError("InvalidFileSize") {
    constructor(e) {
      super({ reason: `Invalid file size: ${e}` });
    }
  },
  k = class extends u.TaggedError("InvalidURL") {
    constructor(e) {
      super({ reason: `Failed to parse '${e}' as a URL.` });
    }
  },
  C = class extends u.TaggedError("RetryError") {},
  I = class extends u.TaggedError("FetchError") {},
  A = class extends u.TaggedError("InvalidJson") {},
  O = class extends u.TaggedError("BadRequestError") {
    getMessage() {
      return p.isRecord(this.json) && "string" == typeof this.json.message
        ? this.json.message
        : this.message;
    }
  },
  R = class extends u.TaggedError("UploadAborted") {},
  M = class extends u.TaggedError("UploadAborted") {};
function P(e) {
  return Array.isArray(e);
}
function N(e) {
  return "image" === e
    ? "4MB"
    : "video" === e
      ? "16MB"
      : "audio" === e || "blob" === e
        ? "8MB"
        : "pdf" === e
          ? "4MB"
          : "text" === e
            ? "64KB"
            : "4MB";
}
function D(e) {
  return {
    maxFileSize: N(e),
    maxFileCount: 1,
    minFileCount: 1,
    contentDisposition: "inline",
  };
}
const j = ["B", "KB", "MB", "GB", "TB"];
function L(e) {
  return Object.keys(e);
}
function F(e, t) {
  const n = /(\d+)\.?(\d+)?\.?(\d+)?/,
    r = n.exec(e);
  if (!r?.[0]) throw new Error(`Invalid semver requirement: ${e}`);
  const o = n.exec(t);
  if (!o?.[0]) throw new Error(`Invalid semver to check: ${t}`);
  const [i, a, s, l] = r,
    [c, u, d, p] = o;
  return e.startsWith("^")
    ? a === u && !(s && d && s > d)
    : e.startsWith("~")
      ? a === u && s === d
      : a === u && s === d && l === p;
}
const U = (e) =>
  u.gen(function* () {
    const t =
        "undefined" != typeof window
          ? window.location.origin
          : process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : "http://localhost:3000",
      n = yield* u.try({
        try: () => new URL(e ?? "/api/uploadthing", t),
        catch: () => new k(e ?? "/api/uploadthing"),
      });
    return "/" === n.pathname && (n.pathname = "/api/uploadthing"), n;
  });
function B(e) {
  if ("number" == typeof e) return e;
  const t = e.split(/(\d+)/).filter(Boolean);
  return (
    Number(t[0]) *
    { s: 1, m: 60, h: 3600, d: 86400 }[(t[1] ?? "s").trim().slice(0, 1)]
  );
}
const z = (e, t) =>
  "number" != typeof t ||
  Number.isSafeInteger(t) ||
  (t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER)
    ? t
    : t === 1 / 0
      ? Number.MAX_SAFE_INTEGER
      : t === -1 / 0
        ? Number.MIN_SAFE_INTEGER
        : Number.isNaN(t)
          ? 0
          : void 0;
function H() {}
const V = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
  INTERNAL_CLIENT_ERROR: 500,
  TOO_LARGE: 413,
  TOO_SMALL: 400,
  TOO_MANY_FILES: 400,
  KEY_TOO_LONG: 400,
  URL_GENERATION_FAILED: 500,
  UPLOAD_FAILED: 500,
  MISSING_ENV: 500,
  INVALID_SERVER_CONFIG: 500,
  FILE_LIMIT_EXCEEDED: 500,
};
var q = class e extends u.Error {
    _tag = "UploadThingError";
    name = "UploadThingError";
    cause;
    code;
    data;
    constructor(e) {
      const t =
        "string" == typeof e
          ? { code: "INTERNAL_SERVER_ERROR", message: e }
          : e;
      var n, r;
      super({
        message:
          t.message ??
          ((n = t.cause),
          (r = t.code),
          "string" == typeof n
            ? n
            : n instanceof Error ||
                (n &&
                  "object" == typeof n &&
                  "message" in n &&
                  "string" == typeof n.message)
              ? n.message
              : (r ?? "An unknown error occurred")),
      }),
        (this.code = t.code),
        (this.data = t.data),
        t.cause instanceof Error
          ? (this.cause = t.cause)
          : p.isRecord(t.cause) &&
              p.isNumber(t.cause.status) &&
              p.isString(t.cause.statusText)
            ? (this.cause = new Error(
                `Response ${t.cause.status} ${t.cause.statusText}`,
              ))
            : p.isString(t.cause)
              ? (this.cause = new Error(t.cause))
              : (this.cause = t.cause);
    }
    static toObject(e) {
      return { code: e.code, message: e.message, data: e.data };
    }
    static serialize(t) {
      return JSON.stringify(e.toObject(t));
    }
  },
  G = class extends f.Tag("uploadthing/Fetch")() {};
const W = (e) => {
    const t = Array.isArray(e) ? e : L(e);
    return t.includes("blob")
      ? []
      : t.map((e) =>
          "pdf" === e
            ? "application/pdf"
            : e.includes("/")
              ? e
              : "audio" === e
                ? ["audio/*", ...L(h.audio)].join(", ")
                : "image" === e
                  ? ["image/*", ...L(m.image)].join(", ")
                  : "text" === e
                    ? ["text/*", ...L(g.text)].join(", ")
                    : "video" === e
                      ? ["video/*", ...L(y.video)].join(", ")
                      : `${e}/*`,
        );
  },
  $ = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  Y = (e) => {
    if (!e) return "";
    const t = L(e),
      n = t.map((e) => ("blob" === e ? "file" : e));
    if (n.length > 1) {
      const e = n.pop();
      return `${n.join("s, ")} and ${e}s`;
    }
    const r = t[0],
      o = n[0];
    if (!r || !o) return "";
    const { maxFileSize: i, maxFileCount: a, minFileCount: s } = e[r];
    return a && a > 1
      ? s > 1
        ? `${s} - ${a} ${o}s up to ${i}`
        : `${o}s up to ${i}, max ${a}`
      : `${o} (${i})`;
  },
  K = { name: "HMAC", hash: "SHA-256" },
  Z = new TextEncoder();
function Q(e, t) {
  const n = e.split(""),
    r = b.string(t);
  let o, i;
  for (let e = 0; e < n.length; e++)
    (i = ((r % (e + 1)) + e) % n.length), (o = n[e]), (n[e] = n[i]), (n[i] = o);
  return n.join("");
}
const J = (e, t) =>
  u
    .gen(function* () {
      const n = yield* u.tryPromise({
        try: () =>
          crypto.subtle.importKey("raw", Z.encode(S.value(t)), K, !1, ["sign"]),
        catch: (e) =>
          new q({
            code: "BAD_REQUEST",
            message: "Invalid signing secret",
            cause: e,
          }),
      });
      return `hmac-sha256=${yield* u.map(u.tryPromise({ try: () => crypto.subtle.sign(K, n, Z.encode(e)), catch: (e) => new q({ code: "BAD_REQUEST", cause: e }) }), (e) => v.encodeHex(new Uint8Array(e)))}`;
    })
    .pipe(u.withTrace("signPayload"));
function X(e, t) {
  return (
    "application/x-moz-file" === e.type ||
    (function (e, t) {
      if (t) {
        const n = Array.isArray(t) ? t : t.split(","),
          r = e.name,
          o = e.type.toLowerCase(),
          i = o.replace(/\/.*$/, "");
        return n.some((e) => {
          const t = e.trim().toLowerCase();
          return t.startsWith(".")
            ? r.toLowerCase().endsWith(t)
            : t.endsWith("/*")
              ? i === t.replace(/\/.*$/, "")
              : o === t;
        });
      }
      return !0;
    })(e, t)
  );
}
const ee = (e) => null != e;
function te(e, t, n) {
  return (
    !ee(e.size) ||
    (ee(t) && ee(n)
      ? e.size >= t && e.size <= n
      : !((ee(t) && e.size < t) || (ee(n) && e.size > n)))
  );
}
function ne(e, t, n) {
  return !((!t && e.length > 1) || (t && n >= 1 && e.length > n));
}
const re = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
};
(t.ALLOWED_FILE_TYPES = ["image", "video", "audio", "pdf", "text", "blob"]),
  (t.BadRequestError = O),
  (t.FILESIZE_UNITS = j),
  (t.FetchContext = G),
  (t.FetchError = I),
  (t.INTERNAL_DO_NOT_USE__fatalClientError = (e) =>
    new q({
      code: "INTERNAL_CLIENT_ERROR",
      message: "Something went wrong. Please report this to UploadThing.",
      cause: e,
    })),
  (t.INTERNAL_doFormatting = Y),
  (t.InvalidFileSizeError = T),
  (t.InvalidFileTypeError = E),
  (t.InvalidJsonError = A),
  (t.InvalidRouteConfigError = x),
  (t.InvalidURLError = k),
  (t.RetryError = C),
  (t.UnknownFileTypeError = w),
  (t.UploadAbortedError = M),
  (t.UploadPausedError = R),
  (t.UploadThingError = q),
  (t.ValidACLs = ["public-read", "private"]),
  (t.ValidContentDispositions = ["inline", "attachment"]),
  (t.acceptPropAsAcceptAttr = function (e) {
    if (ee(e))
      return Object.entries(e)
        .reduce((e, [t, n]) => [...e, t, ...n], [])
        .filter(
          (e) =>
            (function (e) {
              return (
                "audio/*" === e ||
                "video/*" === e ||
                "image/*" === e ||
                "text/*" === e ||
                /\w+\/[-+.\w]+/g.test(e)
              );
            })(e) ||
            (function (e) {
              return /^.*\.[\w]+$/.test(e);
            })(e),
        )
        .join(",");
  }),
  (t.allFilesAccepted = function ({
    files: e,
    accept: t,
    minSize: n,
    maxSize: r,
    multiple: o,
    maxFiles: i,
  }) {
    return !!ne(e, o, i) && e.every((e) => X(e, t) && te(e, n, r));
  }),
  (t.allowedContentTextLabelGenerator = (e) => $(Y(e))),
  (t.bytesToFileSize = (e) => {
    if (0 === e || -1 === e) return "0B";
    const t = Math.floor(Math.log(e) / Math.log(1024));
    return `${(e / Math.pow(1024, t)).toFixed(2)}${j[t]}`;
  }),
  (t.capitalizeStart = $),
  (t.contentFieldToContent = (e, t) =>
    e
      ? "function" != typeof e
        ? e
        : "function" == typeof e
          ? e(t)
          : void 0
      : null),
  (t.createIdentityProxy = function () {
    return new Proxy(H, { get: (e, t) => t });
  }),
  (t.defaultClassListMerger = (...e) => e.filter(Boolean).join(" ")),
  (t.fetchEff = (e, t) =>
    u.flatMap(u.service(G), (n) => {
      const r = new Headers(t?.headers ?? []),
        o = {
          url: e.toString(),
          method: t?.method,
          body: t?.body,
          headers: Object.fromEntries(r),
        };
      return u
        .tryPromise({
          try: (o) => n(e, { ...t, headers: r, signal: o }),
          catch: (e) =>
            new I({
              error:
                e instanceof Error
                  ? {
                      ...e,
                      name: e.name,
                      message: e.message,
                      stack: e.stack,
                    }
                  : e,
              input: o,
            }),
        })
        .pipe(
          u.tapError((e) => u.sync(() => {})),
          u.map((e) => Object.assign(e, { requestUrl: o.url })),
          u.withTrace("fetch"),
        );
    })),
  (t.fileSizeToBytes = (e) => {
    const t = new RegExp(`^(\\d+)(\\.\\d+)?\\s*(${j.join("|")})$`, "i"),
      n = e.match(t);
    if (!n?.[1] || !n[3]) return u.fail(new T(e));
    const r = parseFloat(n[1]),
      o = n[3].toUpperCase(),
      i = r * Math.pow(1024, j.indexOf(o));
    return u.succeed(Math.floor(i));
  }),
  (t.fillInputRouteConfig = (e) => {
    if (P(e)) return u.succeed(e.reduce((e, t) => ((e[t] = D(t)), e), {}));
    const t = {};
    for (const n of L(e)) {
      const r = e[n];
      if (!r) return u.fail(new x(n));
      t[n] = { ...D(n), ...r };
    }
    return u.succeed(JSON.parse(JSON.stringify(t, z)));
  }),
  (t.filterDefinedObjectValues = function (e) {
    return Object.fromEntries(Object.entries(e).filter((e) => null != e[1]));
  }),
  (t.generateClientDropzoneAccept = (e) => {
    const t = W(e);
    return Object.fromEntries(t.map((e) => [e, []]));
  }),
  (t.generateKey = (e, t, n) =>
    u
      .sync(() => {
        const r = JSON.stringify(
            n?.(e) ?? [e.name, e.size, e.type, e.lastModified, Date.now()],
          ),
          o = Q(_.defaultOptions.alphabet, t),
          i = new _.default({ alphabet: o, minLength: 36 }).encode([
            Math.abs(b.string(r)),
          ]);
        return (
          new _.default({ alphabet: o, minLength: 12 }).encode([
            Math.abs(b.string(t)),
          ]) + i
        );
      })
      .pipe(u.withTrace("generateKey"))),
  (t.generateMimeTypes = W),
  (t.generatePermittedFileTypes = (e) => ({
    fileTypes: e ? L(e) : [],
    multiple: (e ? Object.values(e).map((e) => e.maxFileCount) : []).some(
      (e) => e && e > 1,
    ),
  })),
  (t.generateSignedURL = (e, t, n) =>
    u
      .gen(function* () {
        const r = new URL(e),
          o = n.ttlInSeconds ? B(n.ttlInSeconds) : 3600,
          i = Date.now() + 1e3 * o;
        r.searchParams.append("expires", i.toString()),
          n.data &&
            Object.entries(n.data).forEach(([e, t]) => {
              if (null == t) return;
              const n = encodeURIComponent(t);
              r.searchParams.append(e, n);
            });
        const a = yield* J(r.toString(), t);
        return r.searchParams.append("signature", a), r.href;
      })
      .pipe(u.withTrace("generateSignedURL"))),
  (t.getDefaultRouteConfigValues = D),
  (t.getDefaultSizeForType = N),
  (t.getErrorTypeFromStatusCode = function (e) {
    for (const [t, n] of Object.entries(V)) if (n === e) return t;
    return "INTERNAL_SERVER_ERROR";
  }),
  (t.getFilesFromClipboardEvent = function (e) {
    const t = e.clipboardData?.items;
    if (t)
      return Array.from(t).reduce((e, t) => {
        const n = t.getAsFile();
        return n ? [...e, n] : e;
      }, []);
  }),
  (t.getFullApiUrl = U),
  (t.getRequestUrl = (e) =>
    u.gen(function* () {
      const t = e.headers.get("x-forwarded-host") ?? e.headers.get("host"),
        n = e.headers.get("x-forwarded-proto") ?? "https",
        r = n.endsWith(":") ? n : `${n}:`,
        o = yield* u.try({
          try: () => new URL(e.url, `${r}//${t}`),
          catch: () => new k(e.url),
        });
      return (o.search = ""), o;
    })),
  (t.getStatusCodeFromError = function (e) {
    return V[e.code];
  }),
  (t.initialState = re),
  (t.isEnterOrSpace = function (e) {
    return (
      ("key" in e && (" " === e.key || "Enter" === e.key)) ||
      ("keyCode" in e && (32 === e.keyCode || 13 === e.keyCode))
    );
  }),
  (t.isEventWithFiles = function (e) {
    return "dataTransfer" in e && null !== e.dataTransfer
      ? Array.prototype.some.call(
          e.dataTransfer?.types,
          (e) => "Files" === e || "application/x-moz-file" === e,
        )
      : !!e.target && "files" in e.target && !!e.target.files;
  }),
  (t.isFileAccepted = X),
  (t.isIeOrEdge = function (e = window.navigator.userAgent) {
    return e.includes("MSIE ") || e.includes("Trident/") || e.includes("Edge/");
  }),
  (t.isPropagationStopped = (e) =>
    "function" == typeof e.isPropagationStopped
      ? e.isPropagationStopped()
      : void 0 !== e.cancelBubble && e.cancelBubble),
  (t.isRouteArray = P),
  (t.isValidQuantity = ne),
  (t.isValidSize = te),
  (t.matchFileType = (e, t) => {
    const n = e.type || (0, d.lookup)(e.name);
    if (!n)
      return t.includes("blob") ? u.succeed("blob") : u.fail(new w(e.name));
    if (t.some((e) => e.includes("/")) && t.includes(n)) return u.succeed(n);
    const r = "application/pdf" === n.toLowerCase() ? "pdf" : n.split("/")[0];
    return t.includes(r)
      ? u.succeed(r)
      : t.includes("blob")
        ? u.succeed("blob")
        : u.fail(new E(r, e.name));
  }),
  (t.noop = H),
  (t.objectKeys = L),
  (t.parseResponseJson = (e) =>
    u
      .tryPromise({
        try: async () => ({
          json: await e.json(),
          ok: e.ok,
          status: e.status,
        }),
        catch: (t) => new A({ error: t, input: e.requestUrl }),
      })
      .pipe(
        u.filterOrFail(
          ({ ok: e }) => e,
          ({ json: t, status: n }) =>
            new O({
              status: n,
              message: `Request to ${e.requestUrl} failed with status ${n}`,
              json: t,
            }),
        ),
        u.map(({ json: e }) => e),
        u.withTrace("parseJson"),
      )),
  (t.parseTimeToSeconds = B),
  (t.reducer = function (e, t) {
    switch (t.type) {
      case "focus":
        return { ...e, isFocused: !0 };
      case "blur":
        return { ...e, isFocused: !1 };
      case "openDialog":
        return { ...re, isFileDialogActive: !0 };
      case "closeDialog":
        return { ...e, isFileDialogActive: !1 };
      case "setDraggedFiles":
      case "setFiles":
        return { ...e, ...t.payload };
      case "reset":
        return re;
      default:
        return e;
    }
  }),
  (t.resolveMaybeUrlArg = (e) => (e instanceof URL ? e : u.runSync(U(e)))),
  (t.roundProgress = (e, t) =>
    "all" === t ? e : "fine" === t ? Math.round(e) : 10 * Math.floor(e / 10)),
  (t.safeNumberReplacer = z),
  (t.safeParseJSON = async function (e) {
    const t = await e.text();
    try {
      return JSON.parse(t);
    } catch (e) {
      return new Error(`Error parsing JSON, got '${t}'`);
    }
  }),
  (t.semverLite = F),
  (t.signPayload = J),
  (t.styleFieldToClassName = (e, t) => {
    if ("string" == typeof e) return e;
    if ("function" == typeof e) {
      const n = e(t);
      if ("string" == typeof n) return n;
    }
    return "";
  }),
  (t.styleFieldToCssObject = (e, t) => {
    if ("object" == typeof e) return e;
    if ("function" == typeof e) {
      const n = e(t);
      if ("object" == typeof n) return n;
    }
    return {};
  }),
  (t.unwrap = function (e, ...t) {
    return "function" == typeof e ? e(...t) : e;
  }),
  (t.verifyKey = (e, t) =>
    u
      .sync(() => {
        const n = Q(_.defaultOptions.alphabet, t),
          r = new _.default({ alphabet: n, minLength: 12 }).encode([
            Math.abs(b.string(t)),
          ]);
        return e.startsWith(r);
      })
      .pipe(
        u.withTrace("verifyKey"),
        u.orElseSucceed(() => !1),
      )),
  (t.verifySignature = (e, t, n) =>
    u
      .gen(function* () {
        const r = t?.slice(12);
        if (!r) return !1;
        const o = Z.encode(S.value(n)),
          i = yield* u.promise(() =>
            crypto.subtle.importKey("raw", o, K, !1, ["verify"]),
          ),
          a = yield* u.fromEither(v.decodeHex(r)),
          s = Z.encode(e);
        return yield* u.promise(() => crypto.subtle.verify(K, i, a, s));
      })
      .pipe(
        u.withTrace("verifySignature"),
        u.orElseSucceed(() => !1),
      )),
  (t.warnIfInvalidPeerDependency = function (e, t, n) {
    F(t, n);
  });
