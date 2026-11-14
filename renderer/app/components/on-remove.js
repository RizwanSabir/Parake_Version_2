// app/components/on-remove.js — webpack module 43951
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ChatScreen = function ({
  width: e,
  onClose: t,
  onSend: n,
  isSending: g,
  captureScreenShot: y,
  isCapturingScreenShot: v,
}) {
  const [b, S] = (0, i.useState)(""),
    [_, x] = (0, i.useState)([]),
    w = (0, i.useRef)(null);
  function E() {
    g ||
      ((b.trim() || 0 !== _.length) &&
        (n({ chatInput: b, screenshots: _ }), S(""), x([])));
  }
  async function T() {
    if (!v)
      if (_.length >= l.MAX_SCREENSHOTS)
        a.toast.error(
          `You can attach at most ${l.MAX_SCREENSHOTS} screenshots.`,
        );
      else
        try {
          const e = await y();
          if (
            _.reduce((e, t) => e + m.encode(t).length, 0) + m.encode(e).length >
            l.MAX_SCREENSHOTS_BYTES
          )
            return void a.toast.error(
              `Screenshots are too large (limit ${l.MAX_SCREENSHOTS_BYTES / 1048576} MB).`,
            );
          x((t) => [...t, e]);
        } catch {
          a.toast.error("Failed to capture screenshot.");
        }
  }
  return (
    (0, i.useLayoutEffect)(() => {
      const e = window.requestAnimationFrame(() => {
        w.current?.focus();
      });
      return () => {
        window.cancelAnimationFrame(e);
      };
    }, []),
    (0, i.useEffect)(
      () =>
        window.electron.ipcRendererProxy.on(
          "main/add-screenshot-shortcut-pressed",
          () => {
            T();
          },
        ),
      [v, _.length, y],
    ),
    (0, r.jsxs)(h.TransparentScreen, {
      className: "flex flex-col gap-2 overflow-hidden p-1",
      style: { width: e },
      children: [
        _.length > 0 &&
          (0, r.jsx)("div", {
            className:
              "-mx-1 flex flex-row items-center gap-2 overflow-x-auto mask-[linear-gradient(to_right,transparent,black_10px,black_calc(100%-10px),transparent)] px-1",
            children: _.map((e, t) =>
              (0, r.jsx)(
                f.ScreenshotThumbnail,
                {
                  url: e,
                  index: t,
                  onRemove: () => {
                    return (e = t), void x((t) => t.filter((t, n) => n !== e));
                    var e;
                  },
                },
                t,
              ),
            ),
          }),
        (0, r.jsxs)("div", {
          className: "flex flex-row items-center gap-2",
          children: [
            (0, r.jsx)(u.Input, {
              placeholder: "Enter a message...",
              maxLength: c.limits.chatMessage.max,
              className:
                "custom-hover h-8 flex-1 rounded-xl border-0 bg-white/60 px-2.5 text-neutral-900 shadow-none placeholder:text-neutral-500 hover:bg-white focus:bg-white focus-visible:ring-0 dark:bg-neutral-900/60 dark:text-white dark:placeholder:text-neutral-400 dark:hover:bg-neutral-950 dark:focus:bg-neutral-950",
              ref: w,
              onKeyDown: function (e) {
                "Enter" === e.key ? E() : "Escape" === e.key && t();
              },
              value: b,
              onChange: (e) => S(e.target.value),
            }),
            (0, r.jsxs)(s.Tooltip, {
              children: [
                (0, r.jsx)(s.TooltipTrigger, {
                  render: (0, r.jsx)(p.LiveSessionButton, {
                    transparent: !0,
                    onMouseDown: (e) => e.preventDefault(),
                    onClick: T,
                    disabled: v,
                    "aria-label": "Add screenshot",
                    shortcut: (0, r.jsx)(d.Shortcut, {
                      noPlus: !0,
                      shortcuts: [d.ShortcutKey, d.OptionKey, o.CornerDownLeft],
                    }),
                    children: (0, r.jsx)(o.Fullscreen, {
                      className: "size-4",
                    }),
                  }),
                }),
                (0, r.jsx)(s.TooltipContent, {
                  children: "Add screenshot",
                }),
              ],
            }),
            (0, r.jsxs)(s.Tooltip, {
              children: [
                (0, r.jsx)(s.TooltipTrigger, {
                  render: (0, r.jsx)(p.LiveSessionButton, {
                    transparent: !0,
                    onMouseDown: (e) => e.preventDefault(),
                    onClick: E,
                    disabled: g || (!b.trim() && 0 === _.length),
                    "aria-label": "Send message",
                    shortcut: (0, r.jsx)(d.Shortcut, {
                      noPlus: !0,
                      shortcuts: [o.CornerDownLeft],
                    }),
                    children: "Send",
                  }),
                }),
                (0, r.jsx)(s.TooltipContent, {
                  children: "Send message",
                }),
              ],
            }),
            (0, r.jsxs)(s.Tooltip, {
              children: [
                (0, r.jsx)(s.TooltipTrigger, {
                  render: (0, r.jsx)(p.LiveSessionButton, {
                    transparent: !0,
                    onMouseDown: (e) => e.preventDefault(),
                    onClick: t,
                    "aria-label": "Close chat",
                    children: (0, r.jsx)(o.X, {
                      className: "size-4",
                    }),
                  }),
                }),
                (0, r.jsx)(s.TooltipContent, {
                  children: "Close chat",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(87952 /* vendor/module-87952 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(44572 /* vendor/module-44572 */),
  s = n(58055 /* app/components/tooltip */),
  l = n(77397 /* vendor/module-77397 */),
  c = n(45482 /* vendor/module-45482 */),
  u = n(51371 /* vendor/module-51371 */),
  d = n(21693 /* app/components/shortcut */),
  p = n(11575 /* app/components/live-session-button */),
  f = n(88577 /* app/components/screenshot-thumbnail */),
  h = n(87807 /* app/components/transparent-screen */),
  m = new TextEncoder();
