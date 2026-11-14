// vendor/other/module-80883.js — webpack module 80883
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.verifySignature = function (e, t, n) {
  return new Promise((i, u) => {
    const l = t.replace(/'/g, "''");
    n.info(`Verifying signature ${l}`),
      (0, o.execFile)(
        ...a(
          `"Get-AuthenticodeSignature -LiteralPath '${l}' | ConvertTo-Json -Compress"`,
          2e4,
        ),
        (o, a, l) => {
          var d;
          try {
            if (null != o || l) return c(n, o, l, u), void i(null);
            const p = (function (e) {
              const t = JSON.parse(e);
              delete t.PrivateKey, delete t.IsOSBinary, delete t.SignatureType;
              const n = t.SignerCertificate;
              return (
                null != n &&
                  (delete n.Archived,
                  delete n.Extensions,
                  delete n.Handle,
                  delete n.HasPrivateKey,
                  delete n.SubjectName),
                t
              );
            })(a);
            if (0 === p.Status) {
              try {
                const e = s.normalize(p.Path),
                  r = s.normalize(t);
                if ((n.info(`LiteralPath: ${e}. Update Path: ${r}`), e !== r))
                  return (
                    c(
                      n,
                      new Error(`LiteralPath of ${e} is different than ${r}`),
                      l,
                      u,
                    ),
                    void i(null)
                  );
              } catch (o) {
                n.warn(
                  `Unable to verify LiteralPath of update asset due to missing data.Path. Skipping this step of validation. Message: ${null !== (d = o.message) && void 0 !== d ? d : o.stack}`,
                );
              }
              const a = (0, r.parseDn)(p.SignerCertificate.Subject);
              let f = !1;
              for (const t of e) {
                const e = (0, r.parseDn)(t);
                if (
                  (e.size
                    ? (f = Array.from(e.keys()).every(
                        (t) => e.get(t) === a.get(t),
                      ))
                    : t === a.get("CN") &&
                      (n.warn(
                        `Signature validated using only CN ${t}. Please add your full Distinguished Name (DN) to publisherNames configuration`,
                      ),
                      (f = !0)),
                  f)
                )
                  return void i(null);
              }
            }
            const f =
              `publisherNames: ${e.join(" | ")}, raw info: ` +
              JSON.stringify(p, (e, t) => ("RawData" === e ? void 0 : t), 2);
            n.warn(
              `Sign verification failed, installer signed with incorrect certificate: ${f}`,
            ),
              i(f);
          } catch (e) {
            return c(n, e, null, u), void i(null);
          }
        },
      );
  });
};
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(35317 /* external/child_process */),
  i = n(70857 /* external/os */),
  s = n(16928 /* external/path */);
function a(e, t) {
  return [
    'set "PSModulePath=" & chcp 65001 >NUL & powershell.exe',
    ["-NoProfile", "-NonInteractive", "-InputFormat", "None", "-Command", e],
    { shell: !0, timeout: t },
  ];
}
function c(e, t, n, r) {
  if (
    (function () {
      const e = i.release();
      return e.startsWith("6.") && !e.startsWith("6.3");
    })()
  )
    e.warn(
      `Cannot execute Get-AuthenticodeSignature: ${t || n}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`,
    );
  else {
    try {
      (0, o.execFileSync)(...a("ConvertTo-Json test", 1e4));
    } catch (t) {
      return void e.warn(
        `Cannot execute ConvertTo-Json: ${t.message}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`,
      );
    }
    null != t && r(t),
      n &&
        r(
          new Error(
            `Cannot execute Get-AuthenticodeSignature, stderr: ${n}. Failing signature validation due to unknown stderr.`,
          ),
        );
  }
}
