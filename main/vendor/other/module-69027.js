// vendor/other/module-69027.js — webpack module 69027
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(39053 /* vendor/other/module-39053 */),
  i =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ",",
    ),
  s = r.defineIntegration((e = {}) => {
    const t = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      unregisterOriginalCallbacks: !1,
      ...e,
    };
    return {
      name: "BrowserApiErrors",
      setupOnce() {
        t.setTimeout && r.fill(o.WINDOW, "setTimeout", a),
          t.setInterval && r.fill(o.WINDOW, "setInterval", a),
          t.requestAnimationFrame &&
            r.fill(o.WINDOW, "requestAnimationFrame", c),
          t.XMLHttpRequest &&
            "XMLHttpRequest" in o.WINDOW &&
            r.fill(XMLHttpRequest.prototype, "send", u);
        const e = t.eventTarget;
        e &&
          (Array.isArray(e) ? e : i).forEach((e) =>
            (function (e, t) {
              const n = o.WINDOW,
                i = n[e]?.prototype;
              i?.hasOwnProperty?.("addEventListener") &&
                (r.fill(i, "addEventListener", function (n) {
                  return function (i, s, a) {
                    try {
                      "function" == typeof s.handleEvent &&
                        (s.handleEvent = o.wrap(s.handleEvent, {
                          mechanism: {
                            data: {
                              handler: r.getFunctionName(s),
                              target: e,
                            },
                            handled: !1,
                            type: "auto.browser.browserapierrors.handleEvent",
                          },
                        }));
                    } catch {}
                    return (
                      t.unregisterOriginalCallbacks &&
                        (function (e, t, n) {
                          e &&
                            "object" == typeof e &&
                            "removeEventListener" in e &&
                            "function" == typeof e.removeEventListener &&
                            e.removeEventListener(t, n);
                        })(this, i, s),
                      n.apply(this, [
                        i,
                        o.wrap(s, {
                          mechanism: {
                            data: {
                              handler: r.getFunctionName(s),
                              target: e,
                            },
                            handled: !1,
                            type: "auto.browser.browserapierrors.addEventListener",
                          },
                        }),
                        a,
                      ])
                    );
                  };
                }),
                r.fill(i, "removeEventListener", function (e) {
                  return function (t, n, r) {
                    try {
                      if (
                        Object.prototype.hasOwnProperty.call(
                          n,
                          "__sentry_wrapped__",
                        )
                      ) {
                        const o = n.__sentry_wrapped__;
                        o && e.call(this, t, o, r);
                      }
                    } catch {}
                    return e.call(this, t, n, r);
                  };
                }));
            })(e, t),
          );
      },
    };
  });
function a(e) {
  return function (...t) {
    const n = t[0];
    return (
      (t[0] = o.wrap(n, {
        mechanism: {
          handled: !1,
          type: `auto.browser.browserapierrors.${r.getFunctionName(e)}`,
        },
      })),
      e.apply(this, t)
    );
  };
}
function c(e) {
  return function (t) {
    return e.apply(this, [
      o.wrap(t, {
        mechanism: {
          data: { handler: r.getFunctionName(e) },
          handled: !1,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function u(e) {
  return function (...t) {
    const n = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e) => {
        e in n &&
          "function" == typeof n[e] &&
          r.fill(n, e, function (t) {
            const n = {
                mechanism: {
                  data: { handler: r.getFunctionName(t) },
                  handled: !1,
                  type: `auto.browser.browserapierrors.xhr.${e}`,
                },
              },
              i = r.getOriginalFunction(t);
            return (
              i && (n.mechanism.data.handler = r.getFunctionName(i)),
              o.wrap(t, n)
            );
          });
      }),
      e.apply(this, t)
    );
  };
}
t.browserApiErrorsIntegration = s;
