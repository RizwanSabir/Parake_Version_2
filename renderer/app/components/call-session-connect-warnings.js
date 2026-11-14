// app/components/call-session-connect-warnings.js — webpack module 36397
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CallSessionConnectWarnings = function (e) {
  const t = (0, o.c)(9),
    { showWarnings: n, showMockVideo: a } = e,
    s = "codeboss" !== (0, c.useBrand)().id;
  if (!(n || (a && s))) return null;
  let l, f, h;
  return (
    t[0] !== s || t[1] !== n
      ? ((l =
          n &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(p, {
                icon: i.AlertTriangle,
                iconClassName: "text-warning",
                text: "On Zoom, update it and turn on advanced capture with window filtering.",
                link: {
                  href: "https://support.zoom.us/hc/en/article?id=zm_kb&sysparm_article=KB0063824#:~:text=Advanced%20capture%20with%20window%20filtering,from%20the%20Zoom%20desktop%20app",
                  label: "How",
                },
              }),
              (0, r.jsx)(p, {
                icon: i.ShieldCheck,
                text: "Update your OS and call app, and test privacy before a real call.",
                link: s ? { href: u, label: "Watch" } : void 0,
              }),
            ],
          })),
        (t[0] = s),
        (t[1] = n),
        (t[2] = l))
      : (l = t[2]),
    t[3] !== s || t[4] !== a
      ? ((f =
          a &&
          s &&
          (0, r.jsx)(p, {
            icon: i.Play,
            text: "No call to test on? Share a mock video on YouTube.",
            link: { href: d, label: "Open" },
          })),
        (t[3] = s),
        (t[4] = a),
        (t[5] = f))
      : (f = t[5]),
    t[6] !== l || t[7] !== f
      ? ((h = (0, r.jsxs)("div", {
          className:
            "divide-border flex w-full flex-col divide-y rounded-xl border",
          children: [l, f],
        })),
        (t[6] = l),
        (t[7] = f),
        (t[8] = h))
      : (h = t[8]),
    h
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(34483 /* app/components/typography-variants */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(27376 /* app/lib/get-video-watch-url */),
  c = n(74920 /* app/lib/apply-brand-attribute */),
  u = (0, l.getVideoWatchUrl)("privacyTesting"),
  d = (0, l.getVideoWatchUrl)("mockVideo");
function p(e) {
  const t = (0, o.c)(13),
    { icon: n, iconClassName: i, text: l, link: c } = e,
    u = void 0 === i ? "text-muted-foreground" : i;
  let d, p, f, h, m;
  return (
    t[0] !== u
      ? ((d = (0, s.cn)("size-4 shrink-0", u)), (t[0] = u), (t[1] = d))
      : (d = t[1]),
    t[2] !== n || t[3] !== d
      ? ((p = (0, r.jsx)(n, { className: d })),
        (t[2] = n),
        (t[3] = d),
        (t[4] = p))
      : (p = t[4]),
    t[5] !== l
      ? ((f = (0, r.jsx)(a.Typography, {
          variant: "meta",
          className: "text-muted-foreground flex-1",
          children: l,
        })),
        (t[5] = l),
        (t[6] = f))
      : (f = t[6]),
    t[7] !== c
      ? ((h =
          c &&
          (0, r.jsx)("a", {
            href: c.href,
            target: "_blank",
            rel: "noreferrer",
            className: "shrink-0 underline underline-offset-4",
            children: (0, r.jsx)(a.Typography, {
              variant: "meta",
              children: c.label,
            }),
          })),
        (t[7] = c),
        (t[8] = h))
      : (h = t[8]),
    t[9] !== p || t[10] !== f || t[11] !== h
      ? ((m = (0, r.jsxs)("div", {
          className: "flex items-center gap-2.5 px-3 py-2.5",
          children: [p, f, h],
        })),
        (t[9] = p),
        (t[10] = f),
        (t[11] = h),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
