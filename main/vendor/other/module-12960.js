// vendor/other/module-12960.js — webpack module 12960
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(42601 /* vendor/other/module-42601 */),
  i = n(24296 /* vendor/other/module-24296 */),
  s = n(69027 /* vendor/other/module-69027 */),
  a = n(16588 /* vendor/other/module-16588 */),
  c = n(82225 /* vendor/other/module-82225 */),
  u = n(61586 /* vendor/other/module-61586 */),
  l = n(45481 /* vendor/other/module-45481 */),
  d = n(97822 /* vendor/other/module-97822 */),
  p = n(30225 /* vendor/other/module-30225 */),
  f = n(50131 /* vendor/other/module-50131 */),
  h = n(76077 /* vendor/other/module-76077 */),
  g = n(2538 /* vendor/other/module-2538 */);
function m(e) {
  return [
    r.inboundFiltersIntegration(),
    r.functionToStringIntegration(),
    r.conversationIdIntegration(),
    s.browserApiErrorsIntegration(),
    i.breadcrumbsIntegration(),
    u.globalHandlersIntegration(),
    d.linkedErrorsIntegration(),
    r.dedupeIntegration(),
    l.httpContextIntegration(),
    c.cultureContextIntegration(),
    a.browserSessionIntegration(),
  ];
}
(t.forceLoad = function () {}),
  (t.getDefaultIntegrations = m),
  (t.init = function (e = {}) {
    const t =
      !e.skipBrowserExtensionCheck &&
      g.checkAndWarnIfIsEmbeddedBrowserExtension();
    let n = null == e.defaultIntegrations ? m() : e.defaultIntegrations;
    const i = {
      ...e,
      enabled: !t && e.enabled,
      stackParser: r.stackParserFromStackParserOptions(
        e.stackParser || p.defaultStackParser,
      ),
      integrations: r.getIntegrationsToSetup({
        integrations: e.integrations,
        defaultIntegrations: n,
      }),
      transport: e.transport || f.makeFetchTransport,
    };
    return (
      r.setNormalizeStringifier(h.normalizeStringifyValue),
      r.initAndBind(o.BrowserClient, i)
    );
  }),
  (t.onLoad = function (e) {
    e();
  });
