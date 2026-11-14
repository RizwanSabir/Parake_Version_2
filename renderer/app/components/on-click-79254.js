// app/components/on-click-79254.js — webpack module 79254
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CreateSessionSidebar = function ({
  title: e,
  description: t,
  steps: n,
  activeStep: u,
  maxReachableStep: d,
  onStepSelect: p,
  blockedReason: f,
  onClose: h,
  onBack: m,
  actions: g,
  renderTitle: y = (0, r.jsx)("h2", {}),
  labels: v = c,
}) {
  const b = p ? "button" : "div";
  return (0, r.jsxs)("div", {
    className:
      "bg-accent-secondary sm:dark:bg-accent relative flex shrink-0 flex-col justify-between gap-10 p-6 max-sm:gap-0 max-sm:bg-transparent max-sm:px-4 max-sm:pt-6 max-sm:pb-0 sm:h-full sm:w-56 sm:border-r",
    children: [
      m &&
        (0, r.jsxs)(s.Button, {
          type: "button",
          variant: "ghost",
          size: "icon",
          onClick: m,
          className: "absolute top-6 left-4 size-10 sm:hidden",
          children: [
            (0, r.jsx)(o.MoveLeft, { className: "size-5" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: v.back,
            }),
          ],
        }),
      h &&
        (0, r.jsxs)(s.Button, {
          type: "button",
          variant: "ghost",
          size: "icon",
          onClick: h,
          className: "absolute top-6 right-4 size-10 sm:hidden",
          children: [
            (0, r.jsx)(o.XIcon, { className: "size-5" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: v.close,
            }),
          ],
        }),
      (0, r.jsxs)("div", {
        className: "flex flex-col gap-8",
        children: [
          (0, r.jsxs)("div", {
            className: "flex flex-col gap-1 max-sm:items-center",
            children: [
              (0, r.jsx)(l.Typography, {
                variant: "title",
                className: "text-xl",
                render: y,
                children: e,
              }),
              (0, r.jsx)(l.Typography, {
                className: "text-muted-foreground max-sm:hidden",
                children: t,
              }),
              (0, r.jsx)(l.Typography, {
                className: "text-muted-foreground sm:hidden",
                children: v.step(u + 1, n.length),
              }),
            ],
          }),
          (0, r.jsx)("ol", {
            className: "hidden flex-col sm:flex",
            children: n.map((e, t) => {
              const o = t === u,
                s = t <= d,
                c = !!p && s && !o;
              return (0, r.jsxs)(
                "li",
                {
                  className: "flex flex-col",
                  children: [
                    (0, r.jsxs)(b, {
                      ...(p
                        ? {
                            type: "button",
                            "aria-disabled": !s,
                            title: s ? void 0 : f,
                            onClick: () => {
                              c && p(t);
                            },
                          }
                        : {}),
                      className: (0, i.cn)(
                        "focus-ring group -m-1 flex items-center gap-3 rounded-md p-1 text-left outline-none",
                        c ? "cursor-pointer" : "cursor-default",
                      ),
                      "aria-current": o ? "step" : void 0,
                      children: [
                        (0, r.jsx)("span", {
                          className: (0, i.cn)(
                            "flex size-6 shrink-0 items-center justify-center rounded-full border border-transparent text-sm transition-[background-color,border-color,color,transform] duration-(--duration-base) motion-reduce:transition-none",
                            o
                              ? "bg-primary text-primary-foreground-neutral"
                              : "border-muted-foreground text-muted-foreground",
                            c && "group-active:scale-[0.97]",
                          ),
                          style: {
                            transitionTimingFunction: a.EASE_OUT_CSS,
                          },
                          children: t + 1,
                        }),
                        (0, r.jsx)("span", {
                          className: (0, i.cn)(
                            "transition-colors duration-(--duration-base) motion-reduce:transition-none",
                            o ? "text-foreground" : "text-muted-foreground",
                            c && "group-hover:text-foreground",
                          ),
                          style: {
                            transitionTimingFunction: a.EASE_OUT_CSS,
                          },
                          children: (0, r.jsx)(l.Typography, {
                            children: e,
                          }),
                        }),
                      ],
                    }),
                    t < n.length - 1 &&
                      (0, r.jsx)("span", {
                        className:
                          "bg-border relative my-2 ml-3 min-h-6 w-px flex-1",
                        children: (0, r.jsx)("span", {
                          className:
                            "bg-primary absolute inset-0 origin-top transition-transform duration-(--duration-base) motion-reduce:transition-none",
                          style: {
                            transform: `scaleY(${t < u ? 1 : 0})`,
                            transitionTimingFunction: a.EASE_OUT_CSS,
                          },
                        }),
                      }),
                  ],
                },
                e,
              );
            }),
          }),
        ],
      }),
      g &&
        (0, r.jsx)("div", {
          className: "hidden flex-col gap-2 sm:flex",
          children: g,
        }),
      (0, r.jsx)("div", {
        className: "bg-border relative -mx-4 mt-4 h-0.5 sm:hidden",
        children: (0, r.jsx)("div", {
          className:
            "bg-primary absolute inset-0 origin-left transition-transform duration-(--duration-base) motion-reduce:transition-none",
          style: {
            transform: `scaleX(${(u + 1) / n.length})`,
            transitionTimingFunction: a.EASE_OUT_CSS,
          },
        }),
      }),
    ],
  });
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(87952 /* vendor/module-87952 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(146 /* vendor/module-146 */),
  s = n(66244 /* app/components/button-variants */),
  l = n(34483 /* app/components/typography-variants */),
  c = {
    back: "Back",
    close: "Close",
    step: (e, t) => `Step ${e} of ${t}`,
  };
