// app/components/screenshot-preview.js — webpack module 21450
// params: (e, t, n) = (module, exports, require)
t.ScreenshotPreview = function (e) {
  const t = (0, o.c)(7),
    { urls: n } = e,
    { touch: d } = (0, l.useAnswerEnvironment)();
  let p, f;
  if (t[0] !== d || t[1] !== n) {
    let e;
    t[3] !== d
      ? ((e = (e) =>
          d
            ? (0, r.jsxs)(
                i.Dialog,
                {
                  children: [
                    (0, r.jsx)(c, {
                      children: (0, r.jsx)(i.DialogTrigger, {
                        "aria-label": "View screenshot full size",
                        children: (0, r.jsx)(u, { url: e }),
                      }),
                    }),
                    (0, r.jsxs)(i.DialogContent, {
                      fullScreenOnPhone: !0,
                      className: "content-center",
                      children: [
                        (0, r.jsx)(s.VisuallyHidden, {
                          children: (0, r.jsx)(i.DialogTitle, {
                            children: "Screenshot",
                          }),
                        }),
                        (0, r.jsx)("img", {
                          src: e,
                          alt: "Captured screen, full size",
                          className:
                            "max-h-[calc(100svh-6rem)] w-auto max-w-full justify-self-center rounded-lg",
                        }),
                      ],
                    }),
                  ],
                },
                e,
              )
            : (0, r.jsxs)(
                a.PreviewCard,
                {
                  children: [
                    (0, r.jsx)(c, {
                      children: (0, r.jsx)(a.PreviewCardTrigger, {
                        render: (0, r.jsx)("button", {
                          type: "button",
                        }),
                        "aria-label": "Screenshot preview",
                        children: (0, r.jsx)(u, { url: e }),
                      }),
                    }),
                    (0, r.jsx)(a.PreviewCardContent, {
                      side: "bottom",
                      align: "start",
                      children: (0, r.jsx)("img", {
                        src: e,
                        alt: "Captured screen, larger",
                        className:
                          "block max-h-[min(60vh,28rem)] w-auto max-w-[min(90vw,40rem)] rounded-md",
                      }),
                    }),
                  ],
                },
                e,
              )),
        (t[3] = d),
        (t[4] = e))
      : (e = t[4]),
      (p = n.map(e)),
      (t[0] = d),
      (t[1] = n),
      (t[2] = p);
  } else p = t[2];
  return (
    t[5] !== p
      ? ((f = (0, r.jsx)("span", {
          className: "flex items-center gap-1",
          children: p,
        })),
        (t[5] = p),
        (t[6] = f))
      : (f = t[6]),
    f
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(98980 /* app/components/dialog */),
  a = n(15115 /* app/components/preview-card */),
  s = n(63020 /* app/components/visually-hidden */),
  l = n(97329 /* vendor/module-97329 */);
function c(e) {
  const t = (0, o.c)(2),
    { children: n } = e;
  let i;
  return (
    t[0] !== n
      ? ((i = (0, r.jsx)("span", {
          className:
            "has-[:focus-visible]:outline-ring grid shrink-0 overflow-hidden rounded-sm has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2",
          children: n,
        })),
        (t[0] = n),
        (t[1] = i))
      : (i = t[1]),
    i
  );
}
function u(e) {
  const t = (0, o.c)(2),
    { url: n } = e;
  let i;
  return (
    t[0] !== n
      ? ((i = (0, r.jsx)("img", {
          src: n,
          alt: "Captured screen",
          loading: "lazy",
          className:
            "border-border block h-6 w-10 rounded-sm border object-cover",
        })),
        (t[0] = n),
        (t[1] = i))
      : (i = t[1]),
    i
  );
}
