// app/components/local-date.js — webpack module 76052
// params: (e, t, n) = (module, exports, require)
t.LocalDate = function (e) {
  const t = (0, o.c)(22),
    {
      date: n,
      disableTooltip: l,
      showTime: c,
      compact: u,
      locale: d,
      className: p,
    } = e,
    [f, h] = (0, i.useState)(null);
  let m, g, y;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((m = () => h(new Date())), (g = []), (t[0] = m), (t[1] = g))
    : ((m = t[0]), (g = t[1])),
    (0, i.useEffect)(m, g),
    t[2] !== u || t[3] !== n || t[4] !== d || t[5] !== f || t[6] !== c
      ? ((y =
          f && n
            ? u
              ? (function (e, t, n) {
                  const r = (e) =>
                      new Date(
                        e.getFullYear(),
                        e.getMonth(),
                        e.getDate(),
                      ).getTime(),
                    o = Math.round((r(t) - r(e)) / 864e5);
                  if (0 === o || 1 === o) {
                    const e = new Intl.RelativeTimeFormat(n, {
                      numeric: "auto",
                    }).format(-o, "day");
                    return e.charAt(0).toLocaleUpperCase(n) + e.slice(1);
                  }
                  return e.toLocaleDateString(n, {
                    month: "short",
                    day: "numeric",
                    ...(e.getFullYear() !== t.getFullYear() && {
                      year: "numeric",
                    }),
                  });
                })(n, f, d)
              : n.toLocaleString(d, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  ...(c && { hour: "2-digit", minute: "2-digit" }),
                })
            : void 0),
        (t[2] = u),
        (t[3] = n),
        (t[4] = d),
        (t[5] = f),
        (t[6] = c),
        (t[7] = y))
      : (y = t[7]);
  const v = y;
  let b;
  t[8] !== p
    ? ((b = (0, a.cn)("w-fit max-w-full cursor-default", p)),
      (t[8] = p),
      (t[9] = b))
    : (b = t[9]);
  const S = v ?? " ";
  let _, x, w, E;
  return (
    t[10] !== b || t[11] !== S
      ? ((_ = (0, r.jsx)(s.TooltipTrigger, {
          render: (0, r.jsx)("span", { className: b, children: S }),
        })),
        (t[10] = b),
        (t[11] = S),
        (t[12] = _))
      : (_ = t[12]),
    t[13] !== n || t[14] !== d
      ? ((x = n?.toLocaleString(d, {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })),
        (t[13] = n),
        (t[14] = d),
        (t[15] = x))
      : (x = t[15]),
    t[16] !== x
      ? ((w = (0, r.jsx)(s.TooltipContent, { children: x })),
        (t[16] = x),
        (t[17] = w))
      : (w = t[17]),
    t[18] !== l || t[19] !== _ || t[20] !== w
      ? ((E = (0, r.jsxs)(s.Tooltip, {
          disabled: l,
          children: [_, w],
        })),
        (t[18] = l),
        (t[19] = _),
        (t[20] = w),
        (t[21] = E))
      : (E = t[21]),
    E
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(58055 /* app/components/tooltip */);
