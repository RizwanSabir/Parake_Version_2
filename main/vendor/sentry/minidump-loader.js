// vendor/sentry/minidump-loader.js — webpack module 38033
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = n(79896 /* external/fs */),
  s = n(16928 /* external/path */),
  a = n(80519 /* vendor/other/module-80519 */),
  c = n(77577 /* vendor/other/module-77577 */);
function u(e) {
  return new Promise((t) => setTimeout(t, e));
}
async function l(e, t = 100) {
  if (t > 2e3) return;
  const n = s.join(e, "metadata");
  try {
    await i.promises.unlink(n),
      r.debug.log("Deleted Crashpad metadata file", n);
  } catch (n) {
    "object" == typeof n &&
      null !== n &&
      "code" in n &&
      "EBUSY" === n.code &&
      setTimeout(async () => {
        await l(e, 2 * t);
      }, t);
  }
}
t.getMinidumpLoader = function () {
  const e = o.app.getPath("crashDumps"),
    t = "win32" === process.platform ? "reports" : "completed",
    n = [s.join(e, t)];
  return (
    "darwin" === process.platform && n.push(s.join(e, "pending")),
    (function (e) {
      const t = new a.Mutex();
      return async (n, o) => {
        await t.runExclusive(async () => {
          for (const t of await e())
            try {
              if (n) continue;
              r.debug.log("Found minidump", t);
              let e = await i.promises.stat(t);
              const a = new Date().getTime() - 2592e6;
              if (e.mtimeMs < a) {
                r.debug.log("Ignoring minidump as it is over 30 days old");
                continue;
              }
              let l = 0;
              for (; l <= 10; ) {
                const n = new Date().getTime() - 1e3;
                if (e.mtimeMs < n) {
                  const e = await i.promises.readFile(t);
                  try {
                    const n = c.parseMinidump(e);
                    r.debug.log("Sending minidump"),
                      await o(n, {
                        attachmentType: "event.minidump",
                        filename: s.basename(t),
                        data: e,
                      });
                  } catch (e) {
                    const t =
                      e instanceof Error ? e.toString() : "Unknown error";
                    r.debug.warn(`Dropping minidump:\n${t}`);
                    break;
                  }
                  break;
                }
                r.debug.log(
                  "Waiting. Minidump has been modified in the last 1000 milliseconds.",
                ),
                  (l += 1),
                  await u(500),
                  (e = await i.promises.stat(t));
              }
              l >= 10 &&
                r.debug.warn(
                  "Timed out waiting for minidump to stop being modified",
                );
            } catch (e) {
              r.debug.error("Failed to load minidump", e);
            } finally {
              try {
                await i.promises.unlink(t);
              } catch {
                r.debug.warn("Could not delete minidump", t);
              }
            }
        });
      };
    })(
      async () => (
        await l(e).catch((e) => r.debug.error(e)),
        (
          await (async function (e) {
            const t = [];
            for (const n of e)
              try {
                const e = await i.promises.readdir(n);
                t.push(...e.map((e) => s.join(n, e)));
              } catch {}
            return t;
          })(n)
        ).filter((e) => e.endsWith(".dmp"))
      ),
    )
  );
};
