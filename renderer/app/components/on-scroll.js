// app/components/on-scroll.js — webpack module 93385
// params: (e, t, n) = (module, exports, require)
"use strict";
t.AiMessage = function ({
  aiMessage: e,
  showParakeetAILogoOnAssistantMessage: t,
  isLoading: n,
  fontSizeIndex: E = g.DEFAULT_FONT_SIZE_INDEX,
  onResponseCopied: T,
}) {
  const { locationOnScreen: k } = (0, _.useLocationOnScreen)(),
    C = (0, w.useAssetUrl)(),
    I = (0, i.useRef)(null),
    [A, O] = (0, i.useState)(!1),
    [R, M] = (0, i.useState)(!1),
    P = () => {
      const e = I.current;
      if (!e) return;
      const t = e.scrollHeight > e.clientHeight + 1,
        n = e.scrollTop <= 0,
        r = e.scrollTop + e.clientHeight >= e.scrollHeight - 1;
      O(t && !n), M(t && !r);
    },
    N = () => {
      const e = I.current;
      e && e.scrollBy({ top: -200, behavior: "smooth" });
    },
    D = () => {
      const e = I.current;
      e && e.scrollBy({ top: 200, behavior: "smooth" });
    };
  (0, i.useEffect)(() => {
    const e = I.current;
    if (!e) return;
    P();
    const t =
      "undefined" != typeof ResizeObserver
        ? new ResizeObserver(() => {
            P();
          })
        : null;
    t?.observe(e);
    const n = () => P();
    return (
      window.addEventListener("resize", n),
      () => {
        t?.disconnect(), window.removeEventListener("resize", n);
      }
    );
  }, []),
    (0, i.useEffect)(() => {
      const e = window.setTimeout(P, 0);
      return () => window.clearTimeout(e);
    }, [e.id, e.parts, n, E]),
    (0, i.useEffect)(() => {
      const e = window.electron.ipcRendererProxy.on(
          "main/up-live-call-session-screen-shortcut-pressed",
          () => {
            N();
          },
        ),
        t = window.electron.ipcRendererProxy.on(
          "main/down-live-call-session-screen-shortcut-pressed",
          () => {
            D();
          },
        );
      return () => {
        e(), t();
      };
    }, []);
  const j = (0, h.answerFieldsOf)(e.parts, { done: !n }),
    L = j ? "" : (0, y.partsToContent)(e.parts),
    F = j ? (0, h.hasAnswerContent)(j) : !!L,
    U = e.parts.flatMap((e) =>
      "file" === e.type && e.mediaType?.startsWith("image/") ? [e.url] : [],
    ),
    B = "top-left" === k || "top-center" === k ? "right-8" : "right-1",
    z = (0, S.getBrand)(),
    H = (0, r.jsx)(s.AnswerMeta, {
      logo:
        "assistant" === e.role &&
        t &&
        ("codeboss" === z.id
          ? (0, r.jsx)("img", {
              src: z.mark,
              alt: z.name,
              height: 16,
              width: 27,
            })
          : (0, r.jsx)("img", {
              src: C("/logo-no-text.png"),
              alt: z.name,
              height: 16,
              width: 16,
            })),
      triggerKind: e.metadata?.trigger?.kind,
      createdAt: e.metadata?.createdAt,
    });
  return (0, r.jsxs)(b.TransparentContent, {
    className: "relative flex h-full flex-1 flex-col overflow-hidden",
    children: [
      A &&
        (0, r.jsxs)(p.Tooltip, {
          children: [
            (0, r.jsx)(p.TooltipTrigger, {
              render: (0, r.jsx)(v.LiveSessionButton, {
                className: (0, m.cn)(
                  "absolute top-1 right-1 z-20 size-6 rounded-2xl",
                ),
                onClick: N,
                "aria-label": "Scroll up",
                transparent: !0,
                children: (0, r.jsx)(o.ChevronUp, {
                  className: "h-4 w-4",
                }),
              }),
            }),
            (0, r.jsxs)(p.TooltipContent, {
              className: "flex max-w-xs flex-row items-center text-center",
              children: [
                "Scroll up (",
                (0, r.jsx)(x.Shortcut, {
                  shortcuts: [x.ShortcutKey, o.ArrowUp],
                  className: "ml-0.5",
                }),
                ")",
              ],
            }),
          ],
        }),
      R &&
        (0, r.jsxs)(p.Tooltip, {
          children: [
            (0, r.jsx)(p.TooltipTrigger, {
              render: (0, r.jsx)(v.LiveSessionButton, {
                className: (0, m.cn)(
                  "absolute bottom-1 z-20 size-6 rounded-2xl",
                  B,
                ),
                onClick: D,
                "aria-label": "Scroll down",
                transparent: !0,
                children: (0, r.jsx)(o.ChevronDown, {
                  className: "h-4 w-4",
                }),
              }),
            }),
            (0, r.jsxs)(p.TooltipContent, {
              className: "flex max-w-xs flex-row items-center text-center",
              children: [
                "Scroll down (",
                (0, r.jsx)(x.Shortcut, {
                  shortcuts: [x.ShortcutKey, o.ArrowDown],
                  className: "ml-0.5",
                }),
                ")",
              ],
            }),
          ],
        }),
      (0, r.jsx)("div", {
        ref: I,
        onScroll: () => {
          P();
        },
        className: "flex flex-col overflow-y-scroll px-2 py-1",
        children: (0, r.jsx)(
          "div",
          {
            className:
              "assistant" === e.role ? (0, g.fontSizeClass)(E) : void 0,
            children:
              n && !F
                ? (0, r.jsxs)("span", {
                    className:
                      "text-muted-foreground flex items-center gap-1 px-1 py-3 text-sm",
                    children: [
                      (0, r.jsx)(d.Spinner, { className: "h-4 w-4" }),
                      " Loading...",
                    ],
                  })
                : "assistant" !== e.role
                  ? (0, r.jsxs)("div", {
                      className: "flex flex-col gap-2 px-1 py-3",
                      children: [
                        U.map((e) =>
                          (0, r.jsx)(
                            "img",
                            {
                              src: e,
                              alt: "Captured screen",
                              loading: "lazy",
                              className:
                                "h-56 max-w-full self-center rounded shadow-sm",
                            },
                            e,
                          ),
                        ),
                        L &&
                          (0, r.jsx)(a.AnswerMarkdown, {
                            markdown: L,
                          }),
                        (0, r.jsx)(f.Typography, {
                          variant: "meta",
                          render: (0, r.jsx)("div", {}),
                          className:
                            "text-muted-foreground flex items-center gap-1",
                          children: H,
                        }),
                      ],
                    })
                  : (0, r.jsx)(l.AnswerProvider, {
                      glass: !0,
                      children: (0, r.jsx)(c.LiveAnswer, {
                        fields: j,
                        text: L,
                        images: U,
                        meta: H,
                        thumbs:
                          n || "finished" === e.metadata?.outcome
                            ? (0, r.jsx)(u.ResponseThumbs, {
                                triggerId: e.metadata?.triggerId,
                                initialThumb: e.metadata?.thumb,
                                disabled:
                                  n ||
                                  !e.metadata?.triggerId ||
                                  "finished" !== e.metadata.outcome,
                              })
                            : void 0,
                        onCopied: () => T?.(e),
                      }),
                    }),
          },
          e.id,
        ),
      }),
    ],
  });
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(87952 /* vendor/module-87952 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(40725 /* app/components/on-click-40725 */),
  s = n(22277 /* vendor/module-22277 */),
  l = n(97329 /* vendor/module-97329 */),
  c = n(36564 /* app/components/live-answer */),
  u = n(65382 /* vendor/module-65382 */),
  d = n(15201 /* app/components/spinner */),
  p = n(58055 /* app/components/tooltip */),
  f = n(34483 /* app/components/typography-variants */),
  h = n(47171 /* vendor/module-47171 */),
  m = n(29113 /* vendor/module-29113 */),
  g = n(39916 /* vendor/module-39916 */),
  y = n(60508 /* vendor/module-60508 */),
  v = n(11575 /* app/components/live-session-button */),
  b = n(26468 /* app/components/transparent-content */),
  S = n(74920 /* app/lib/apply-brand-attribute */),
  _ = n(63324 /* app/components/location-on-screen-provider */),
  x = n(21693 /* app/components/shortcut */),
  w = n(36651 /* app/hooks/use-asset-url */);
