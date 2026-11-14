// vendor/electron-localshortcut.js — webpack module 70188
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { app: r, BrowserWindow: o } = n(84157 /* external/electron */),
  i = n(38693 /* vendor/other/module-38693 */),
  s = n(52335 /* vendor/other/module-52335 */),
  { toKeyEvent: a } = n(58407 /* vendor/other/module-58407 */),
  c = n(3680 /* vendor/other/module-3680 */)("electron-localshortcut"),
  u = {},
  l = new WeakMap(),
  d = (e) => {
    if (e)
      try {
        return e.getTitle();
      } catch (e) {
        return "A destroyed window";
      }
    return "An falsy value";
  };
function p(e) {
  if (!i(e)) {
    const e = {};
    Error.captureStackTrace(e),
      e.stack ? e.stack.split("\n").slice(4).join("\n") : e.message;
  }
}
function f(e, t) {
  let n = 0;
  for (const r of t) {
    if (s(r.eventStamp, e)) return n;
    n++;
  }
  return -1;
}
const h = (e) => (t, n) => {
  if ("keyUp" === n.type) return;
  const r = (function (e) {
    const t = { code: e.code, key: e.key };
    return (
      ["alt", "shift", "meta"].forEach((n) => {
        void 0 !== e[n] && (t[`${n}Key`] = e[n]);
      }),
      void 0 !== e.control && (t.ctrlKey = e.control),
      t
    );
  })(n);
  c(`before-input-event: ${n} is translated to: ${r}`);
  for (const { eventStamp: t, callback: n } of e) {
    if (s(t, r)) return c(`eventStamp: ${t} match`), void n();
    c(`eventStamp: ${t} no match`);
  }
};
e.exports = {
  register: function e(t, n, i) {
    let s, f;
    if (
      (void 0 === i ? ((s = u), (i = n), (n = t)) : (s = t.webContents),
      !0 === Array.isArray(n))
    )
      return void n.forEach((n) => {
        "string" == typeof n && e(t, n, i);
      });
    if (
      (c(`Registering callback for ${n} on window ${d(t)}`),
      p(n),
      c(`${n} seems a valid shortcut sequence.`),
      l.has(s))
    )
      c("Window has others shortcuts registered."), (f = l.get(s));
    else if (
      (c("This is the first shortcut of the window."),
      (f = []),
      l.set(s, f),
      s === u)
    ) {
      const e = h(f),
        t = (t, n) => {
          const r = n.webContents;
          r.on("before-input-event", e),
            r.once("closed", () => r.removeListener("before-input-event", e));
        };
      o.getAllWindows().forEach((e) => t(null, e)),
        r.on("browser-window-created", t),
        (f.removeListener = () => {
          o
            .getAllWindows()
            .forEach((t) =>
              t.webContents.removeListener("before-input-event", e),
            ),
            r.removeListener("browser-window-created", t);
        });
    } else {
      const e = h(f);
      s.on("before-input-event", e),
        (f.removeListener = () => s.removeListener("before-input-event", e)),
        s.once("closed", f.removeListener);
    }
    c("Adding shortcut to window set.");
    const g = a(n);
    f.push({ eventStamp: g, callback: i, enabled: !0 }),
      c("Shortcut registered.");
  },
  unregister: function e(t, n) {
    let r;
    if (void 0 === n) (r = u), (n = t);
    else {
      if (t.isDestroyed())
        return void c("Early return because window is destroyed.");
      r = t.webContents;
    }
    if (!0 === Array.isArray(n))
      return void n.forEach((n) => {
        "string" == typeof n && e(t, n);
      });
    if (
      (c(`Unregistering callback for ${n} on window ${d(t)}`),
      p(n),
      c(`${n} seems a valid shortcut sequence.`),
      !l.has(r))
    )
      return void c(
        "Early return because window has never had shortcuts registered.",
      );
    const o = l.get(r),
      i = f(a(n), o);
    -1 !== i &&
      (o.splice(i, 1), 0 === o.length && (o.removeListener(), l.delete(r)));
  },
  isRegistered: function (e, t) {
    p(t);
    const n = e.webContents,
      r = l.get(n);
    return -1 !== f(a(t), r);
  },
  unregisterAll: function (e) {
    c(`Unregistering all shortcuts on window ${d(e)}`);
    const t = e.webContents,
      n = l.get(t);
    n && n.removeListener && (n.removeListener(), l.delete(t));
  },
  enableAll: function (e) {
    c(`Enabling all shortcuts on window ${d(e)}`);
    const t = e.webContents,
      n = l.get(t);
    for (const e of n) e.enabled = !0;
  },
  disableAll: function (e) {
    c(`Disabling all shortcuts on window ${d(e)}`);
    const t = e.webContents,
      n = l.get(t);
    for (const e of n) e.enabled = !1;
  },
};
