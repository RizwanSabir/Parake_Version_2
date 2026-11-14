// vendor/other/module-25660.js — webpack module 25660
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.executeTasksUsingMultipleRangeRequests = function (e, t, n, a, c) {
  const u = (l) => {
    if (l >= t.length)
      return (
        null != e.fileMetadataBuffer && n.write(e.fileMetadataBuffer),
        void n.end()
      );
    const d = l + 1e3;
    !(function (e, t, n, a, c) {
      let u = "bytes=",
        l = 0,
        d = 0;
      const p = new Map(),
        f = [];
      for (let e = t.start; e < t.end; e++) {
        const n = t.tasks[e];
        n.kind === i.OperationKind.DOWNLOAD &&
          ((u += `${n.start}-${n.end - 1}, `),
          p.set(l, e),
          l++,
          f.push(n.end - n.start),
          (d += n.end - n.start));
      }
      if (l <= 1) {
        const r = (u) => {
          if (u >= t.end) return void a();
          const l = t.tasks[u++];
          if (l.kind === i.OperationKind.COPY)
            (0, o.copyData)(l, n, t.oldFileFd, c, () => r(u));
          else {
            const t = e.createRequestOptions();
            t.headers.Range = `bytes=${l.start}-${l.end - 1}`;
            const o = e.httpExecutor.createRequest(t, (e) => {
              e.on("error", c),
                s(e, c) && (e.pipe(n, { end: !1 }), e.once("end", () => r(u)));
            });
            e.httpExecutor.addErrorAndTimeoutHandlers(o, c), o.end();
          }
        };
        return void r(t.start);
      }
      const h = e.createRequestOptions();
      h.headers.Range = u.substring(0, u.length - 2);
      const g = e.httpExecutor.createRequest(h, (i) => {
        if (!s(i, c)) return;
        const u = (0, r.safeGetHeader)(i, "content-type"),
          l =
            /^multipart\/.+?\s*;\s*boundary=(?:"([^"]+)"|([^\s";]+))\s*$/i.exec(
              u,
            );
        if (null == l)
          return void c(
            new Error(
              `Content-Type "multipart/byteranges" is expected, but got "${u}"`,
            ),
          );
        const h = new o.DataSplitter(
          n,
          t,
          p,
          l[1] || l[2],
          f,
          a,
          d,
          e.options.onProgress,
        );
        h.on("error", c),
          i.pipe(h),
          i.on("end", () => {
            setTimeout(() => {
              g.abort(),
                c(new Error("Response ends without calling any handlers"));
            }, 1e4);
          });
      });
      e.httpExecutor.addErrorAndTimeoutHandlers(g, c), g.end();
    })(
      e,
      {
        tasks: t,
        start: l,
        end: Math.min(t.length, d),
        oldFileFd: a,
      },
      n,
      () => u(d),
      c,
    );
  };
  return u;
}),
  (t.checkIsRangesSupported = s);
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(11527 /* vendor/other/module-11527 */),
  i = n(23920 /* vendor/other/module-23920 */);
function s(e, t) {
  if (e.statusCode >= 400) return t((0, r.createHttpError)(e)), !1;
  if (206 !== e.statusCode) {
    const n = (0, r.safeGetHeader)(e, "accept-ranges");
    if (null == n || "none" === n)
      return (
        t(
          new Error(
            `Server doesn't support Accept-Ranges (response code ${e.statusCode})`,
          ),
        ),
        !1
      );
  }
  return !0;
}
