// vendor/sentry/ipc-and-breadcrumbs.js — webpack module 9642
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(78474 /* external/node_events */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(92898 /* vendor/other/module-92898 */),
  s = n(84157 /* external/electron */),
  a = n(34878 /* vendor/other/module-34878 */),
  c = n(41302 /* vendor/other/module-41302 */),
  u = n(10342 /* vendor/sentry/electron-constants */),
  l = n(50593 /* vendor/sentry/renderer-event-loop-block */),
  d = n(76916 /* vendor/other/module-76916 */),
  p = n(78982 /* vendor/other/module-78982 */),
  f = n(47488 /* vendor/other/module-47488 */),
  h = n(74031 /* vendor/other/module-74031 */),
  g = n(71376 /* vendor/other/module-71376 */),
  m = new r.EventEmitter();
let _, S, E, y;
function T() {
  (_ = _ || new Set()), (S = S || new Map());
  for (const e of s.webContents.getAllWebContents()) {
    const t = e.id;
    _.has(t) ||
      e.isDestroyed() ||
      e.executeJavaScript("window.__SENTRY_RENDERER_ID__").then((n) => {
        n &&
          _ &&
          S &&
          (_.add(t),
          S.set(n, t),
          e.once("destroyed", () => {
            _?.delete(t), S?.delete(n);
          }));
      }, o.debug.error);
  }
}
function b(e) {
  const t = [],
    n = y || [];
  y = void 0;
  for (const r of n) {
    const n = a.spanContainerFromEnvelope(r);
    n &&
      (e &&
        (t.push(...n.items.filter((t) => t.trace_id === e)),
        (n.items = n.items.filter((t) => t.trace_id !== e))),
      n.items.length > 0 &&
        (o.forEachEnvelopeItem(r, (e, t) => {
          "span" === t && (e[0].item_count = n.items.length);
        }),
        i.getClient()?.getTransport()?.send(r)));
  }
  return t;
}
function I(e, t, n, r) {
  const c = o.parseEnvelope(n),
    [u] = c,
    l = u.trace;
  if (l) {
    if (!E) {
      const t = e.getDsn();
      E = t?.publicKey;
    }
    (l.release = t.release),
      (l.environment = t.environment),
      (l.public_key = E);
  }
  const p = a.eventFromEnvelope(c);
  if (p) {
    const [e, n, o] = p;
    if (
      (o && d.rendererProfileFromIpc(e, o),
      m.listenerCount("pageload-transaction") > 0 &&
        "transaction" === e.type &&
        "auto.pageload.browser" === e.contexts?.trace?.origin)
    )
      return void m.emit("pageload-transaction", e, r);
    !(function (e, t, n, r, o) {
      const s = (o && e?.getRendererName?.(o)) || "renderer";
      (t.breadcrumbs = t.breadcrumbs || []),
        delete t.environment,
        delete t.sdk?.name,
        delete t.sdk?.version,
        delete t.sdk?.packages,
        n &&
          (t.sdkProcessingMetadata = {
            ...t.sdkProcessingMetadata,
            dynamicSamplingContext: n,
          }),
        i.captureEvent(f.mergeEvents(t, { tags: { "event.process": s } }), {
          attachments: r,
        });
    })(t, e, l, n, r);
  } else {
    if (a.profileChunkFromEnvelope(c)) {
      const e = h.normalizeProfileChunkEnvelope(t, c, s.app.getAppPath());
      return void i.getClient()?.getTransport()?.send(e);
    }
    if (a.spanContainerFromEnvelope(c)) {
      const [e, n] = h.normalizeSpanStreamingEnvelope(t, c, s.app.getAppPath());
      if (y) {
        if (
          (y.push(e),
          "auto.pageload.browser" === n &&
            m.listenerCount("pageload-spans") > 0)
        ) {
          const t = a
            .spanContainerFromEnvelope(e)
            ?.items.find((e) => e.is_segment)?.trace_id;
          m.emit("pageload-spans", b(t), r);
        }
        return;
      }
      return void i.getClient()?.getTransport()?.send(e);
    }
    const e = h.normalizeReplayEnvelope(t, c, s.app.getAppPath());
    i.getClient()?.getTransport()?.send(e);
  }
}
function v(e) {
  return null != e && Object.keys(e).length > 0;
}
function A(e, t) {
  let n;
  try {
    n = JSON.parse(t);
  } catch {
    return void o.debug.warn(
      "sentry-electron received an invalid scope message",
    );
  }
  const r = i.getCurrentScope();
  v(n.user) && r.setUser(n.user),
    v(n.tags) && r.setTags(n.tags),
    v(n.extra) && r.setExtras(n.extra);
  for (const e of n.attachments || []) r.addAttachment(e);
  const s = (n.breadcrumbs || []).pop();
  s && r.addBreadcrumb(s, e?.maxBreadcrumbs || 100);
}
function N(e, t, n, r) {
  const o = (n && t?.getRendererName?.(n)) || "renderer",
    i = r || {};
  t.release && (i["sentry.release"] = { value: t.release, type: "string" }),
    t.environment &&
      (i["sentry.environment"] = {
        value: t.environment,
        type: "string",
      }),
    (i["sentry.sdk.name"] = {
      value: "sentry.javascript.electron",
      type: "string",
    }),
    (i["sentry.sdk.version"] = {
      value: g.SDK_VERSION,
      type: "string",
    }),
    (i["electron.process"] = { value: o, type: "string" });
  const s = p.getOsDeviceLogAttributes(e);
  return (
    s["os.name"] && (i["os.name"] = { value: s["os.name"], type: "string" }),
    s["os.version"] &&
      (i["os.version"] = { value: s["os.version"], type: "string" }),
    s["device.brand"] &&
      (i["device.brand"] = {
        value: s["device.brand"],
        type: "string",
      }),
    s["device.model"] &&
      (i["device.model"] = {
        value: s["device.model"],
        type: "string",
      }),
    s["device.family"] &&
      (i["device.family"] = {
        value: s["device.family"],
        type: "string",
      }),
    i
  );
}
function R(e, t, n, r) {
  (n.attributes = N(e, t, r, n.attributes)),
    o._INTERNAL_captureSerializedLog(e, n);
}
function C(e, t, n, r) {
  (n.attributes = N(e, t, r, n.attributes)),
    o._INTERNAL_captureSerializedMetric(e, n);
}
(t.configureIPC = function (e, t) {
  const n = c.ipcChannelUtils(t.ipcNamespace);
  (t.ipcMode & c.IPCMode.Protocol) > 0 &&
    (function (e, t, n) {
      if (s.app.isReady())
        throw new Error(
          "Sentry SDK should be initialized before the Electron app 'ready' event is fired",
        );
      const r = {
        scheme: t.namespace,
        privileges: {
          bypassCSP: !0,
          corsEnabled: !0,
          supportFetchAPI: !0,
          secure: !0,
        },
      };
      s.protocol.registerSchemesAsPrivileged([r]),
        (s.protocol.registerSchemesAsPrivileged = new Proxy(
          s.protocol.registerSchemesAsPrivileged,
          {
            apply: (e, t, n) => {
              e([...n[0], r]);
            },
          },
        ));
      const i = l.createRendererEventLoopBlockStatusHandler(e);
      s.app
        .whenReady()
        .then(() => {
          for (const r of n.getSessions())
            u.registerProtocol(r.protocol, t.namespace, (r) => {
              const a = () => {
                  const e = r.windowId ? S?.get(r.windowId) : void 0;
                  return e ? s.webContents.fromId(e) : void 0;
                },
                c = r.body;
              if (t.urlMatches(r.url, "start")) T();
              else if (t.urlMatches(r.url, "scope") && c) A(n, c.toString());
              else if (t.urlMatches(r.url, "envelope") && c) I(e, n, c, a());
              else if (t.urlMatches(r.url, "structured-log") && c) {
                let t;
                try {
                  t = JSON.parse(c.toString());
                } catch {
                  return void o.debug.warn(
                    "sentry-electron received an invalid structured-log message",
                  );
                }
                R(e, n, t, a());
              } else if (t.urlMatches(r.url, "metric") && c) {
                let t;
                try {
                  t = JSON.parse(c.toString());
                } catch {
                  return void o.debug.warn(
                    "sentry-electron received an invalid metric message",
                  );
                }
                C(e, n, t, a());
              } else if (i && t.urlMatches(r.url, "status") && c) {
                const e = a();
                if (e) {
                  let t;
                  try {
                    t = JSON.parse(c.toString()).status;
                  } catch {
                    return void o.debug.warn(
                      "sentry-electron received an invalid status message",
                    );
                  }
                  i(t, e);
                }
              }
            });
        })
        .catch((e) => o.debug.error(e));
    })(e, n, t),
    (t.ipcMode & c.IPCMode.Classic) > 0 &&
      (function (e, t, n) {
        s.ipcMain.on(t.createKey("start"), ({ sender: e }) => {
          const t = e.id;
          (_ = _ || new Set()),
            _.has(t) ||
              e.isDestroyed() ||
              (_.add(t),
              e.once("destroyed", () => {
                _?.delete(t);
              }));
        }),
          s.ipcMain.on(t.createKey("scope"), (e, t) => A(n, t)),
          s.ipcMain.on(t.createKey("envelope"), ({ sender: t }, r) =>
            I(e, n, r, t),
          ),
          s.ipcMain.on(t.createKey("structured-log"), ({ sender: t }, r) =>
            R(e, n, r, t),
          ),
          s.ipcMain.on(t.createKey("metric"), ({ sender: t }, r) =>
            C(e, n, r, t),
          );
        const r = l.createRendererEventLoopBlockStatusHandler(e);
        r && s.ipcMain.on(t.createKey("status"), ({ sender: e }, t) => r(t, e));
      })(e, n, t);
}),
  (t.flushSpanEnvelopeBuffer = b),
  (t.ipcMainHooks = m),
  (t.startSpanEnvelopeBuffering = function () {
    y = y || [];
  });
