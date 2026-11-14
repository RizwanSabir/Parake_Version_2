// vendor/module-69027.js — webpack module 69027
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(39053 /* vendor/module-39053 */),
  i =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ",",
    ),
  a = r.defineIntegration((e = {}) => {
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
        t.setTimeout && r.fill(o.WINDOW, "setTimeout", s),
          t.setInterval && r.fill(o.WINDOW, "setInterval", s),
          t.requestAnimationFrame &&
            r.fill(o.WINDOW, "requestAnimationFrame", l),
          t.XMLHttpRequest &&
            "XMLHttpRequest" in o.WINDOW &&
            r.fill(XMLHttpRequest.prototype, "send", c);
        const e = t.eventTarget;
        e &&
          (Array.isArray(e) ? e : i).forEach((e) =>
            (function (e, t) {
              const n = o.WINDOW,
                i = n[e]?.prototype;
              i?.hasOwnProperty?.("addEventListener") &&
                (r.fill(i, "addEventListener", function (n) {
                  return function (i, a, s) {
                    try {
                      "function" == typeof a.handleEvent &&
                        (a.handleEvent = o.wrap(a.handleEvent, {
                          mechanism: {
                            data: {
                              handler: r.getFunctionName(a),
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
                        })(this, i, a),
                      n.apply(this, [
                        i,
                        o.wrap(a, {
                          mechanism: {
                            data: {
                              handler: r.getFunctionName(a),
                              target: e,
                            },
                            handled: !1,
                            type: "auto.browser.browserapierrors.addEventListener",
                          },
                        }),
                        s,
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
function s(e) {
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
function l(e) {
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
function c(e) {
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
t.browserApiErrorsIntegration = a;
