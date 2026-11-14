// app/components/on-load.js — webpack module 25984
// params: (e, t, n) = (module, exports, require)
t.CompanyLogo = function (e) {
  const t = (0, o.c)(15),
    {
      logoUrl: n,
      title: s,
      className: l,
      fallbackIcon: c,
      fallbackToInitial: u,
      size: d,
    } = e,
    p = void 0 !== u && u,
    [f, h] = (0, i.useState)(null),
    m = n && n !== f ? n : void 0,
    [g, y] = (0, i.useState)(null);
  if (!m && !c && !p) return null;
  let v;
  t[0] !== d
    ? ((v = d ? { width: d, height: d } : void 0), (t[0] = d), (t[1] = v))
    : (v = t[1]);
  const b = !d && "size-6";
  let S, _, x;
  return (
    t[2] !== l || t[3] !== b
      ? ((S = (0, a.cn)(
          "border-border bg-background flex shrink-0 items-center justify-center overflow-hidden rounded-lg border-[0.5px]",
          b,
          l,
        )),
        (t[2] = l),
        (t[3] = b),
        (t[4] = S))
      : (S = t[4]),
    t[5] !== c || t[6] !== g || t[7] !== m || t[8] !== d || t[9] !== s
      ? ((_ = m
          ? (0, r.jsx)("img", {
              src: m,
              alt: `${s} logo`,
              decoding: "async",
              ref: (e) => {
                e?.complete && e.naturalWidth > 0 && y(m);
              },
              onLoad: () => y(m),
              onError: () => h(m),
              className: (0, a.cn)(
                "object-contain transition-opacity duration-(--duration-base) ease-(--ease-out-strong) motion-reduce:transition-none",
                d ? "size-full" : "size-4",
                g === m ? "opacity-100" : "opacity-0",
              ),
            })
          : c ||
            (0, r.jsx)("span", {
              className:
                "text-muted-foreground [font-size:var(--logo-initial-size)] font-medium uppercase",
              style: d
                ? {
                    "--logo-initial-size": `${Math.round(0.4 * d)}px`,
                  }
                : void 0,
              children: s.slice(0, 1),
            })),
        (t[5] = c),
        (t[6] = g),
        (t[7] = m),
        (t[8] = d),
        (t[9] = s),
        (t[10] = _))
      : (_ = t[10]),
    t[11] !== v || t[12] !== S || t[13] !== _
      ? ((x = (0, r.jsx)("span", {
          style: v,
          className: S,
          children: _,
        })),
        (t[11] = v),
        (t[12] = S),
        (t[13] = _),
        (t[14] = x))
      : (x = t[14]),
    x
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(29113 /* vendor/module-29113 */);
