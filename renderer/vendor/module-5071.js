// vendor/module-5071.js — webpack module 5071
// params: (e, t, n) = (module, exports, require)
const r = n(87785 /* vendor/module-87785 */),
  o = n(27223 /* vendor/module-27223 */),
  i = n(65481 /* vendor/module-65481 */),
  a = n(69982 /* vendor/module-69982 */),
  s = r.__toESM(n(33044 /* vendor/module-33044 */)),
  l = r.__toESM(n(34349 /* vendor/module-34349 */)),
  c = r.__toESM(n(1572 /* vendor/module-1572 */)),
  u = r.__toESM(n(74109 /* vendor/module-74109 */)),
  d = r.__toESM(n(84552 /* vendor/module-84552 */)),
  p = (e, t, n) =>
    (0, c.fetchEff)(t.url, {
      method: "HEAD",
      headers: n.traceHeaders,
    }).pipe(
      l.map(({ headers: e }) => parseInt(e.get("x-ut-range-start") ?? "0", 10)),
      l.tap((e) => n.onUploadProgress?.({ delta: e, loaded: e })),
      l.flatMap((r) =>
        ((e, t, n, r) =>
          l.async((i) => {
            const a = new XMLHttpRequest();
            a.open("PUT", n.url, !0),
              a.setRequestHeader("Range", `bytes=${t}-`),
              a.setRequestHeader("x-uploadthing-version", o.version),
              a.setRequestHeader("b3", r.traceHeaders.b3),
              a.setRequestHeader("traceparent", r.traceHeaders.traceparent),
              (a.responseType = "json");
            let s = 0;
            a.upload.addEventListener("progress", ({ loaded: e }) => {
              const t = e - s;
              r.onUploadProgress?.({ loaded: e, delta: t }), (s = e);
            }),
              a.addEventListener("load", () => {
                a.status >= 200 && a.status < 300 && (0, d.isRecord)(a.response)
                  ? (0, d.hasProperty)(a.response, "error")
                    ? i(
                        new c.UploadThingError({
                          code: "UPLOAD_FAILED",
                          message: String(a.response.error),
                          data: a.response,
                        }),
                      )
                    : i(l.succeed(a.response))
                  : i(
                      new c.UploadThingError({
                        code: "UPLOAD_FAILED",
                        message: `XHR failed ${a.status} ${a.statusText}`,
                        data: a.response,
                      }),
                    );
              }),
              a.addEventListener("error", () => {
                i(new c.UploadThingError({ code: "UPLOAD_FAILED" }));
              });
            const u = new FormData();
            return (
              "uri" in e
                ? u.append("file", {
                    uri: e.uri,
                    type: e.type,
                    name: e.name,
                    ...(t > 0 && { range: t }),
                  })
                : u.append("file", t > 0 ? e.slice(t) : e),
              a.send(u),
              l.sync(() => a.abort())
            );
          }))(e, r, t, {
          traceHeaders: n.traceHeaders,
          onUploadProgress: (e) =>
            n.onUploadProgress?.({
              delta: e.delta,
              loaded: e.loaded + r,
            }),
        }),
      ),
      l.map(u.unsafeCoerce),
      l.map((n) => ({
        name: e.name,
        size: e.size,
        key: t.key,
        lastModified: e.lastModified,
        serverData: n.serverData,
        get url() {
          return (
            a.logDeprecationWarning(
              "`file.url` is deprecated and will be removed in uploadthing v9. Use `file.ufsUrl` instead.",
            ),
            n.url
          );
        },
        get appUrl() {
          return (
            a.logDeprecationWarning(
              "`file.appUrl` is deprecated and will be removed in uploadthing v9. Use `file.ufsUrl` instead.",
            ),
            n.appUrl
          );
        },
        ufsUrl: n.ufsUrl,
        customId: t.customId,
        type: e.type,
        fileHash: n.fileHash,
      })),
    );
o.version;
t.genUploader = (e) => {
  const t = (0, c.createIdentityProxy)();
  return {
    uploadFiles: (n, r) => {
      const o = "function" == typeof n ? n(t) : n,
        a = e?.fetch ?? window.fetch;
      return ((e, t) => {
        const n = i.generateTraceHeaders(),
          r = i.createUTReporter({
            endpoint: String(e),
            package: t.package,
            url: t.url,
            headers: t.headers,
            traceHeaders: n,
          }),
          o = t.files.reduce((e, t) => e + t.size, 0);
        let a = 0;
        return l.flatMap(
          r("upload", {
            input: "input" in t ? t.input : null,
            files: t.files.map((e) => ({
              name: e.name,
              size: e.size,
              type: e.type,
              lastModified: e.lastModified,
            })),
          }),
          (e) =>
            l.forEach(
              e,
              (e, r) =>
                l.flatMap(
                  l.sync(() => t.onUploadBegin?.({ file: t.files[r].name })),
                  () =>
                    p(t.files[r], e, {
                      traceHeaders: n,
                      onUploadProgress: (e) => {
                        (a += e.delta),
                          t.onUploadProgress?.({
                            file: t.files[r],
                            progress: (e.loaded / t.files[r].size) * 100,
                            loaded: e.loaded,
                            delta: e.delta,
                            totalLoaded: a,
                            totalProgress: a / o,
                          });
                      },
                    }),
                ),
              { concurrency: 6 },
            ),
        );
      })(o, {
        ...r,
        skipPolling: {},
        url: (0, c.resolveMaybeUrlArg)(e?.url),
        package: e?.package ?? "uploadthing/client",
        input: r.input,
      })
        .pipe(l.provideService(c.FetchContext, a), (e) =>
          l.runPromiseExit(e, r.signal && { signal: r.signal }),
        )
        .then((e) => {
          if ("Success" === e._tag) return e.value;
          if ("Interrupt" === e.cause._tag) throw new c.UploadAbortedError();
          throw l.causeSquash(e.cause);
        });
    },
    createUpload: async (n, r) => {
      const o = new Map(),
        a = "function" == typeof n ? n(t) : n,
        u = i.generateTraceHeaders(),
        d = i.createUTReporter({
          endpoint: String(a),
          package: e?.package ?? "uploadthing/client",
          url: (0, c.resolveMaybeUrlArg)(e?.url),
          headers: r.headers,
          traceHeaders: u,
        }),
        f = e?.fetch ?? window.fetch,
        h = await l.runPromise(
          d("upload", {
            input: "input" in r ? r.input : null,
            files: r.files.map((e) => ({
              name: e.name,
              size: e.size,
              type: e.type,
              lastModified: e.lastModified,
            })),
          }).pipe(l.provideService(c.FetchContext, f)),
        ),
        m = r.files.reduce((e, t) => e + t.size, 0);
      let g = 0;
      const y = (e, t) =>
        p(e, t, {
          traceHeaders: u,
          onUploadProgress: (t) => {
            (g += t.delta),
              r.onUploadProgress?.({
                ...t,
                file: e,
                progress: Math.round((t.loaded / e.size) * 100),
                totalLoaded: g,
                totalProgress: Math.round((g / m) * 100),
              });
          },
        }).pipe(l.provideService(c.FetchContext, f));
      for (const [e, t] of h.entries()) {
        const n = r.files[e];
        if (!n) continue;
        const a = i.createDeferred();
        o.set(n, { deferred: a, presigned: t }),
          l
            .runPromiseExit(y(n, t), { signal: a.ac.signal })
            .then((e) => {
              if ("Success" === e._tag) return a.resolve(e.value);
              if ("Interrupt" === e.cause._tag) throw new c.UploadPausedError();
              throw l.causeSquash(e.cause);
            })
            .catch((e) => {
              e instanceof c.UploadPausedError || a.reject(e);
            });
      }
      return {
        pauseUpload: (e) => {
          const t = s.ensure(e ?? r.files);
          for (const e of t) {
            const t = o.get(e);
            if (!t) return;
            if (t.deferred.ac.signal.aborted) throw new c.UploadAbortedError();
            t.deferred.ac.abort();
          }
        },
        resumeUpload: (e) => {
          const t = s.ensure(e ?? r.files);
          for (const e of t) {
            const t = o.get(e);
            if (!t) throw "No upload found";
            (t.deferred.ac = new AbortController()),
              l
                .runPromiseExit(y(e, t.presigned), {
                  signal: t.deferred.ac.signal,
                })
                .then((e) => {
                  if ("Success" === e._tag) return t.deferred.resolve(e.value);
                  if ("Interrupt" === e.cause._tag)
                    throw new c.UploadPausedError();
                  throw l.causeSquash(e.cause);
                })
                .catch((e) => {
                  e instanceof c.UploadPausedError || t.deferred.reject(e);
                });
          }
        },
        done: async (e) => {
          const t = [],
            n = s.ensure(e ?? r.files);
          for (const e of n) {
            const n = o.get(e);
            if (!n) throw "No upload found";
            t.push(n.deferred.promise);
          }
          const i = await Promise.all(t);
          return e ? i[0] : i;
        },
      };
    },
    routeRegistry: t,
  };
};
