// vendor/other/module-89840.js — webpack module 89840
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */);
let i;
(t.getRendererProperties = function (e) {
  return i?.get(e);
}),
  (t.trackRendererProperties = function () {
    if (i) return;
    const e = (i = new Map());
    function t(t, n) {
      const i = e.get(t) || { id: t };
      (i.url = r.normalizeUrlToBase(n, o.app.getAppPath())), e.set(t, i);
    }
    o.app.on("web-contents-created", (n, r) => {
      const o = r.id;
      r.on("did-navigate", (e, n) => t(o, n)),
        r.on("did-navigate-in-page", (e, n) => t(o, n)),
        r.on("page-title-updated", (t, n) =>
          (function (t, n) {
            const r = e.get(t) || { id: t };
            (r.title = n), e.set(t, r);
          })(o, n),
        ),
        r.on("destroyed", () => {
          setTimeout(() => {
            e.delete(o);
          }, 5e3);
        });
    });
  });
