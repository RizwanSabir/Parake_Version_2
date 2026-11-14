// app/components/context-pill-button.js — webpack module 23908
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ContextPillButton = function (e) {
  const t = (0, o.c)(20),
    {
      filled: n,
      onClick: s,
      disabled: l,
      emptyLabel: c,
      filledIcon: u,
      filledContent: d,
      primary: p,
      truncateContent: f,
      invalid: h,
    } = e,
    m = void 0 === f || f,
    g = !!p && !h,
    y = !n && "border-dashed",
    v =
      g &&
      "custom-hover bg-foreground text-background hover:bg-foreground/90 border-solid border-transparent",
    b = h && "border-error text-error border-solid";
  let S, _, x, w;
  return (
    t[0] !== y || t[1] !== v || t[2] !== b
      ? ((S = (0, a.cn)(
          "border-border bg-background inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-medium disabled:cursor-not-allowed disabled:opacity-50",
          y,
          v,
          b,
        )),
        (t[0] = y),
        (t[1] = v),
        (t[2] = b),
        (t[3] = S))
      : (S = t[3]),
    t[4] !== h
      ? ((_ =
          h &&
          (0, r.jsx)("span", {
            className: "sr-only",
            children: "invalid",
          })),
        (t[4] = h),
        (t[5] = _))
      : (_ = t[5]),
    t[6] !== c ||
    t[7] !== n ||
    t[8] !== d ||
    t[9] !== u ||
    t[10] !== h ||
    t[11] !== g ||
    t[12] !== m
      ? ((x = n
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                u,
                (0, r.jsx)("span", {
                  className: (0, a.cn)(
                    m && "truncate",
                    m && (h ? "max-w-55" : "max-w-35"),
                  ),
                  children: d,
                }),
                (0, r.jsx)(i.ChevronDown, {
                  className: (0, a.cn)(
                    "h-4 w-4 shrink-0",
                    h
                      ? "text-error"
                      : g
                        ? "text-background/70"
                        : "text-muted-foreground",
                  ),
                }),
              ],
            })
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(i.Plus, { className: "h-4 w-4 shrink-0" }),
                c,
              ],
            })),
        (t[6] = c),
        (t[7] = n),
        (t[8] = d),
        (t[9] = u),
        (t[10] = h),
        (t[11] = g),
        (t[12] = m),
        (t[13] = x))
      : (x = t[13]),
    t[14] !== l || t[15] !== s || t[16] !== S || t[17] !== _ || t[18] !== x
      ? ((w = (0, r.jsxs)("button", {
          type: "button",
          onClick: s,
          disabled: l,
          "data-slot": "pill",
          className: S,
          children: [_, x],
        })),
        (t[14] = l),
        (t[15] = s),
        (t[16] = S),
        (t[17] = _),
        (t[18] = x),
        (t[19] = w))
      : (w = t[19]),
    w
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(29113 /* vendor/module-29113 */);
