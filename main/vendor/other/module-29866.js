// vendor/other/module-29866.js — webpack module 29866
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.DifferentialDownloader = void 0;
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(28368 /* vendor/other/module-28368 */),
  i = n(79896 /* external/fs */),
  s = n(11527 /* vendor/other/module-11527 */),
  a = n(87016 /* external/url */),
  c = n(23920 /* vendor/other/module-23920 */),
  u = n(25660 /* vendor/other/module-25660 */),
  l = n(39933 /* vendor/other/module-39933 */);
function d(e, t = " KB") {
  return new Intl.NumberFormat("en").format((e / 1024).toFixed(2)) + t;
}
t.DifferentialDownloader = class {
  constructor(e, t, n) {
    (this.blockAwareFileInfo = e),
      (this.httpExecutor = t),
      (this.options = n),
      (this.fileMetadataBuffer = null),
      (this.logger = n.logger);
  }
  createRequestOptions() {
    const e = {
      headers: { ...this.options.requestHeaders, accept: "*/*" },
    };
    return (
      (0, r.configureRequestUrl)(this.options.newUrl, e),
      (0, r.configureRequestOptions)(e),
      e
    );
  }
  doDownload(e, t) {
    if (e.version !== t.version)
      throw new Error(
        `version is different (${e.version} - ${t.version}), full download is required`,
      );
    const n = this.logger,
      r = (0, c.computeOperations)(e, t, n);
    null != n.debug && n.debug(JSON.stringify(r, null, 2));
    let o = 0,
      i = 0;
    for (const e of r) {
      const t = e.end - e.start;
      e.kind === c.OperationKind.DOWNLOAD ? (o += t) : (i += t);
    }
    const s = this.blockAwareFileInfo.size;
    if (
      o +
        i +
        (null == this.fileMetadataBuffer
          ? 0
          : this.fileMetadataBuffer.length) !==
      s
    )
      throw new Error(
        `Internal error, size mismatch: downloadSize: ${o}, copySize: ${i}, newSize: ${s}`,
      );
    return (
      n.info(
        `Full: ${d(s)}, To download: ${d(o)} (${Math.round(o / (s / 100))}%)`,
      ),
      this.downloadFile(r)
    );
  }
  downloadFile(e) {
    const t = [],
      n = () =>
        Promise.all(
          t.map((e) =>
            (0, o.close)(e.descriptor).catch((t) => {
              this.logger.error(`cannot close file "${e.path}": ${t}`);
            }),
          ),
        );
    return this.doDownloadFile(e, t)
      .then(n)
      .catch((e) =>
        n()
          .catch((t) => {
            try {
              this.logger.error(`cannot close files: ${t}`);
            } catch (e) {}
            throw e;
          })
          .then(() => {
            throw e;
          }),
      );
  }
  async doDownloadFile(e, t) {
    const n = await (0, o.open)(this.options.oldFile, "r");
    t.push({ descriptor: n, path: this.options.oldFile });
    const d = await (0, o.open)(this.options.newFile, "w");
    t.push({ descriptor: d, path: this.options.newFile });
    const p = (0, i.createWriteStream)(this.options.newFile, {
      fd: d,
    });
    await new Promise((o, i) => {
      const d = [];
      let f;
      if (!this.options.isUseMultipleRangeRequest && this.options.onProgress) {
        const t = [];
        let n = 0;
        for (const r of e)
          r.kind === c.OperationKind.DOWNLOAD &&
            (t.push(r.end - r.start), (n += r.end - r.start));
        const r = { expectedByteCounts: t, grandTotal: n };
        (f = new l.ProgressDifferentialDownloadCallbackTransform(
          r,
          this.options.cancellationToken,
          this.options.onProgress,
        )),
          d.push(f);
      }
      const h = new r.DigestTransform(this.blockAwareFileInfo.sha512);
      (h.isValidateOnEnd = !1),
        d.push(h),
        p.on("finish", () => {
          p.close(() => {
            t.splice(1, 1);
            try {
              h.validate();
            } catch (e) {
              return void i(e);
            }
            o(void 0);
          });
        }),
        d.push(p);
      let g = null;
      for (const e of d) e.on("error", i), (g = null == g ? e : g.pipe(e));
      const m = d[0];
      let _;
      if (this.options.isUseMultipleRangeRequest)
        return (
          (_ = (0, u.executeTasksUsingMultipleRangeRequests)(this, e, m, n, i)),
          void _(0)
        );
      let S = 0,
        E = null;
      this.logger.info(`Differential download: ${this.options.newUrl}`);
      const y = this.createRequestOptions();
      (y.redirect = "manual"),
        (_ = (t) => {
          var o, u;
          if (t >= e.length)
            return (
              null != this.fileMetadataBuffer &&
                m.write(this.fileMetadataBuffer),
              void m.end()
            );
          const l = e[t++];
          if (l.kind === c.OperationKind.COPY)
            return (
              f && f.beginFileCopy(),
              void (0, s.copyData)(l, m, n, i, () => _(t))
            );
          const d = `bytes=${l.start}-${l.end - 1}`;
          (y.headers.range = d),
            null ===
              (u =
                null === (o = this.logger) || void 0 === o
                  ? void 0
                  : o.debug) ||
              void 0 === u ||
              u.call(o, `download range: ${d}`),
            f && f.beginRangeDownload();
          const p = this.httpExecutor.createRequest(y, (e) => {
            e.on("error", i),
              e.on("aborted", () => {
                i(new Error("response has been aborted by the server"));
              }),
              e.statusCode >= 400 && i((0, r.createHttpError)(e)),
              e.pipe(m, { end: !1 }),
              e.once("end", () => {
                f && f.endRangeDownload(),
                  100 === ++S ? ((S = 0), setTimeout(() => _(t), 1e3)) : _(t);
              });
          });
          p.on("redirect", (e, t, n) => {
            this.logger.info(
              `Redirect to ${(function (e) {
                const t = e.indexOf("?");
                return t < 0 ? e : e.substring(0, t);
              })(n)}`,
            ),
              (E = n),
              (0, r.configureRequestUrl)(new a.URL(E), y),
              p.followRedirect();
          }),
            this.httpExecutor.addErrorAndTimeoutHandlers(p, i),
            p.end();
        }),
        _(0);
    });
  }
  async readRemoteBytes(e, t) {
    const n = Buffer.allocUnsafe(t + 1 - e),
      r = this.createRequestOptions();
    r.headers.range = `bytes=${e}-${t}`;
    let o = 0;
    if (
      (await this.request(r, (e) => {
        e.copy(n, o), (o += e.length);
      }),
      o !== n.length)
    )
      throw new Error(
        `Received data length ${o} is not equal to expected ${n.length}`,
      );
    return n;
  }
  request(e, t) {
    return new Promise((n, r) => {
      const o = this.httpExecutor.createRequest(e, (e) => {
        (0, u.checkIsRangesSupported)(e, r) &&
          (e.on("error", r),
          e.on("aborted", () => {
            r(new Error("response has been aborted by the server"));
          }),
          e.on("data", t),
          e.on("end", () => n()));
      });
      this.httpExecutor.addErrorAndTimeoutHandlers(o, r), o.end();
    });
  }
};
