// vendor/module-12960.js — webpack module 12960
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(42601 /* vendor/module-42601 */),
  i = n(24296 /* vendor/module-24296 */),
  a = n(69027 /* vendor/module-69027 */),
  s = n(16588 /* vendor/module-16588 */),
  l = n(82225 /* vendor/module-82225 */),
  c = n(61586 /* vendor/module-61586 */),
  u = n(45481 /* vendor/module-45481 */),
  d = n(97822 /* vendor/module-97822 */),
  p = n(30225 /* vendor/module-30225 */),
  f = n(50131 /* vendor/module-50131 */),
  h = n(76077 /* vendor/module-76077 */),
  m = n(2538 /* vendor/module-2538 */);
function g(e) {
  return [
    r.inboundFiltersIntegration(),
    r.functionToStringIntegration(),
    r.conversationIdIntegration(),
    a.browserApiErrorsIntegration(),
    i.breadcrumbsIntegration(),
    c.globalHandlersIntegration(),
    d.linkedErrorsIntegration(),
    r.dedupeIntegration(),
    u.httpContextIntegration(),
    l.cultureContextIntegration(),
    s.browserSessionIntegration(),
  ];
}
(t.forceLoad = function () {}),
  (t.getDefaultIntegrations = g),
  (t.init = function (e = {}) {
    const t =
      !e.skipBrowserExtensionCheck &&
      m.checkAndWarnIfIsEmbeddedBrowserExtension();
    let n = null == e.defaultIntegrations ? g() : e.defaultIntegrations;
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
