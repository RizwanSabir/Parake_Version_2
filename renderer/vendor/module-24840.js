// vendor/module-24840.js — webpack module 24840
// params: (e, t, n) = (module, exports, require)
const r = n(96137 /* vendor/module-96137 */),
  o = n(20008 /* vendor/module-20008 */),
  i = n(68540 /* vendor/module-68540 */),
  a = r.defineIntegration(() => ({
    name: "ScopeToMain",
    setup(e) {
      const t = i.getIPC(e);
      o.addScopeListener((e, n) => {
        t.sendScope(JSON.stringify(r.normalize(e, 20, 2e3))),
          n.clearBreadcrumbs(),
          n.clearAttachments();
      });
    },
  }));
t.scopeToMainIntegration = a;
