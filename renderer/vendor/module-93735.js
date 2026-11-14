// vendor/module-93735.js — webpack module 93735
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { useChat: () => x });
var r,
  o,
  i,
  a,
  s,
  l,
  c,
  u,
  d,
  p = n(77902 /* vendor/module-77902 */),
  f = n(14041 /* vendor/module-14041 */),
  h = n(47971 /* vendor/module-47971 */),
  m =
    (n(31085 /* vendor/module-31085 */),
    (e, t, n) => {
      if (!t.has(e)) throw TypeError("Cannot " + n);
    }),
  g = (e, t, n) => (
    m(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  y = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  v = (e, t, n, r) => (
    m(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  );
var b,
  S = class {
    constructor(e = []) {
      y(this, r, void 0),
        y(this, o, "ready"),
        y(this, i, void 0),
        y(this, a, new Set()),
        y(this, s, new Set()),
        y(this, l, new Set()),
        (this.pushMessage = (e) => {
          v(this, r, g(this, r).concat(e)), g(this, c).call(this);
        }),
        (this.popMessage = () => {
          v(this, r, g(this, r).slice(0, -1)), g(this, c).call(this);
        }),
        (this.replaceMessage = (e, t) => {
          v(this, r, [
            ...g(this, r).slice(0, e),
            this.snapshot(t),
            ...g(this, r).slice(e + 1),
          ]),
            g(this, c).call(this);
        }),
        (this.snapshot = (e) => structuredClone(e)),
        (this["~registerMessagesCallback"] = (e, t) => {
          const n = t ? ((r = e), null != (o = t) ? h(r, o) : r) : e;
          var r, o;
          return (
            g(this, a).add(n),
            () => {
              g(this, a).delete(n);
            }
          );
        }),
        (this["~registerStatusCallback"] = (e) => (
          g(this, s).add(e),
          () => {
            g(this, s).delete(e);
          }
        )),
        (this["~registerErrorCallback"] = (e) => (
          g(this, l).add(e),
          () => {
            g(this, l).delete(e);
          }
        )),
        y(this, c, () => {
          g(this, a).forEach((e) => e());
        }),
        y(this, u, () => {
          g(this, s).forEach((e) => e());
        }),
        y(this, d, () => {
          g(this, l).forEach((e) => e());
        }),
        v(this, r, e);
    }
    get status() {
      return g(this, o);
    }
    set status(e) {
      v(this, o, e), g(this, u).call(this);
    }
    get error() {
      return g(this, i);
    }
    set error(e) {
      v(this, i, e), g(this, d).call(this);
    }
    get messages() {
      return g(this, r);
    }
    set messages(e) {
      v(this, r, [...e]), g(this, c).call(this);
    }
  };
(r = new WeakMap()),
  (o = new WeakMap()),
  (i = new WeakMap()),
  (a = new WeakMap()),
  (s = new WeakMap()),
  (l = new WeakMap()),
  (c = new WeakMap()),
  (u = new WeakMap()),
  (d = new WeakMap());
var _ = class extends p.vl {
  constructor({ messages: e, ...t }) {
    const n = new S(e);
    super({ ...t, state: n }),
      y(this, b, void 0),
      (this["~registerMessagesCallback"] = (e, t) =>
        g(this, b)["~registerMessagesCallback"](e, t)),
      (this["~registerStatusCallback"] = (e) =>
        g(this, b)["~registerStatusCallback"](e)),
      (this["~registerErrorCallback"] = (e) =>
        g(this, b)["~registerErrorCallback"](e)),
      v(this, b, n);
  }
};
function x({ experimental_throttle: e, resume: t = !1, ...n } = {}) {
  const r = (0, f.useRef)({});
  let o;
  "chat" in n ||
    (r.current = {
      onToolCall: n.onToolCall,
      onData: n.onData,
      onFinish: n.onFinish,
      onError: n.onError,
      sendAutomaticallyWhen: n.sendAutomaticallyWhen,
      transport: n.transport,
    });
  const i = () => {
      var e;
      return null != (e = r.current.transport)
        ? e
        : null != o
          ? o
          : (o = new p.DefaultChatTransport());
    },
    a = {
      ...n,
      transport: {
        sendMessages: (e) => i().sendMessages(e),
        reconnectToStream: (e) => i().reconnectToStream(e),
      },
      onToolCall: (e) => {
        var t, n;
        return null == (n = (t = r.current).onToolCall) ? void 0 : n.call(t, e);
      },
      onData: (e) => {
        var t, n;
        return null == (n = (t = r.current).onData) ? void 0 : n.call(t, e);
      },
      onFinish: (e) => {
        var t, n;
        return null == (n = (t = r.current).onFinish) ? void 0 : n.call(t, e);
      },
      onError: (e) => {
        var t, n;
        return null == (n = (t = r.current).onError) ? void 0 : n.call(t, e);
      },
      sendAutomaticallyWhen: (e) => {
        var t, n, o;
        return (
          null !=
            (o =
              null == (n = (t = r.current).sendAutomaticallyWhen)
                ? void 0
                : n.call(t, e)) && o
        );
      },
    },
    s = (0, f.useRef)("chat" in n ? n.chat : new _(a));
  (("chat" in n && n.chat !== s.current) ||
    ("id" in n && null != n.id && s.current.id !== n.id)) &&
    (s.current = "chat" in n ? n.chat : new _(a));
  const l = (0, f.useCallback)(
      (t) => s.current["~registerMessagesCallback"](t, e),
      [e, s.current.id],
    ),
    c = (0, f.useSyncExternalStore)(
      l,
      () => s.current.messages,
      () => s.current.messages,
    ),
    u = (0, f.useSyncExternalStore)(
      s.current["~registerStatusCallback"],
      () => s.current.status,
      () => s.current.status,
    ),
    d = (0, f.useSyncExternalStore)(
      s.current["~registerErrorCallback"],
      () => s.current.error,
      () => s.current.error,
    ),
    h = (0, f.useCallback)(
      (e) => {
        "function" == typeof e && (e = e(s.current.messages)),
          (s.current.messages = e);
      },
      [s],
    );
  return (
    (0, f.useEffect)(() => {
      t && s.current.resumeStream();
    }, [t, s]),
    {
      id: s.current.id,
      messages: c,
      setMessages: h,
      sendMessage: s.current.sendMessage,
      regenerate: s.current.regenerate,
      clearError: s.current.clearError,
      stop: s.current.stop,
      error: d,
      resumeStream: s.current.resumeStream,
      status: u,
      addToolResult: s.current.addToolOutput,
      addToolOutput: s.current.addToolOutput,
      addToolApprovalResponse: s.current.addToolApprovalResponse,
    }
  );
}
(b = new WeakMap()), p.lW;
