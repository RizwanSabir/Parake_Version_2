// vendor/sentry/screenshots.js — webpack module 59144
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = r.defineIntegration(() => ({
    name: "Screenshots",
    async processEvent(e, t, n) {
      if (!n.getOptions().attachScreenshot) return e;
      if (!e.transaction && "native" !== e.platform) {
        let e = 1;
        for (const n of o.BrowserWindow.getAllWindows()) {
          t.attachments || (t.attachments = []);
          try {
            if (!n.isDestroyed() && n.isVisible()) {
              const r = 1 === e ? "screenshot.png" : `screenshot-${e}.png`,
                o = await n.capturePage();
              t.attachments.push({
                filename: r,
                data: o.toPNG(),
                contentType: "image/png",
              }),
                (e += 1);
            }
          } catch (e) {
            r.debug.error("Error capturing screenshot", e);
          }
        }
      }
      return e;
    },
  }));
t.screenshotsIntegration = i;
