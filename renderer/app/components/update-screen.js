// app/components/update-screen.js — webpack module 2651
// params: (e, t, n) = (module, exports, require)
"use strict";
t.UpdateScreen = function (e) {
  const t = (0, o.c)(19),
    { updateState: n } = e;
  let c, u, d;
  if (
    (t[0] !== n.errorMessage || t[1] !== n.status
      ? ((c = () => {
          "error" === n.status &&
            n.errorMessage &&
            a.toast.error("Error updating: " + n.errorMessage);
        }),
        (u = [n.status, n.errorMessage]),
        (t[0] = n.errorMessage),
        (t[1] = n.status),
        (t[2] = c),
        (t[3] = u))
      : ((c = t[2]), (u = t[3])),
    (0, i.useEffect)(c, u),
    ["installing", "checking"].includes(n.status))
  )
    return null;
  t[4] !== n.downloadProgressPercent
    ? ((d =
        null === n.downloadProgressPercent
          ? null
          : Math.round(n.downloadProgressPercent)),
      (t[4] = n.downloadProgressPercent),
      (t[5] = d))
    : (d = t[5]);
  const p = d,
    f = n.availableVersion
      ? `Installing Required Update (${n.availableVersion})`
      : "Update Required",
    h =
      "error" === n.status
        ? "Failed to install update. Contact support."
        : "downloaded" === n.status
          ? "Application will restart and update..."
          : null === n.availableVersion
            ? "Preparing the latest version. This can take up to 10 minutes — the app will update automatically as soon as it's ready."
            : null === p
              ? "Downloading update..."
              : `Downloading update... ${p}%`;
  let m, g, y, v, b, S;
  return (
    t[6] === Symbol.for("react.memo_cache_sentinel")
      ? ((m = (0, s.cn)(
          "dark bg-background/90 rounded-window flex flex-col gap-3 border border-white/12 p-4 text-white shadow-lg",
          l.SHELL_WIDTH_CLASS,
        )),
        (t[6] = m))
      : (m = t[6]),
    t[7] !== f
      ? ((g = (0, r.jsx)("div", {
          className: "text-sm font-semibold",
          children: f,
        })),
        (t[7] = f),
        (t[8] = g))
      : (g = t[8]),
    t[9] !== h
      ? ((y = (0, r.jsx)("div", {
          className: "text-sm text-white/70",
          children: h,
        })),
        (t[9] = h),
        (t[10] = y))
      : (y = t[10]),
    t[11] !== g || t[12] !== y
      ? ((v = (0, r.jsx)("div", {
          className: "flex items-center justify-between gap-3",
          children: (0, r.jsxs)("div", {
            className: "flex flex-col gap-0.5",
            children: [g, y],
          }),
        })),
        (t[11] = g),
        (t[12] = y),
        (t[13] = v))
      : (v = t[13]),
    t[14] !== p
      ? ((b =
          null !== p &&
          (0, r.jsx)("div", {
            className: "h-1.5 w-full overflow-hidden rounded-full bg-white/10",
            role: "progressbar",
            "aria-valuenow": p,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            children: (0, r.jsx)("div", {
              className: "h-full rounded-full bg-white transition-all",
              style: { width: `${p}%` },
            }),
          })),
        (t[14] = p),
        (t[15] = b))
      : (b = t[15]),
    t[16] !== v || t[17] !== b
      ? ((S = (0, r.jsxs)("div", { className: m, children: [v, b] })),
        (t[16] = v),
        (t[17] = b),
        (t[18] = S))
      : (S = t[18]),
    S
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(44572 /* vendor/module-44572 */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(44825 /* vendor/module-44825 */);
