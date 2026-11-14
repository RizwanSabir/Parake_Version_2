// vendor/module-87567.js — webpack module 87567
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CallSessionsEmptyState = function (e) {
  const t = (0, o.c)(11),
    { tab: n, action: i, actionInBottomBar: c } = e,
    u = void 0 !== c && c,
    d = l[n],
    p = d.icon;
  let f, h;
  t[0] !== p ? ((f = (0, r.jsx)(p, {})), (t[0] = p), (t[1] = f)) : (f = t[1]),
    t[2] !== d.pixel
      ? ((h = (0, r.jsx)(s.PixelIcon, { name: d.pixel })),
        (t[2] = d.pixel),
        (t[3] = h))
      : (h = t[3]);
  const m = d.showAction ? i : void 0;
  let g;
  return (
    t[4] !== u ||
    t[5] !== d.description ||
    t[6] !== d.title ||
    t[7] !== f ||
    t[8] !== h ||
    t[9] !== m
      ? ((g = (0, r.jsx)(a.EmptyState, {
          icon: f,
          pixelIcon: h,
          title: d.title,
          description: d.description,
          action: m,
          actionInBottomBar: u,
        })),
        (t[4] = u),
        (t[5] = d.description),
        (t[6] = d.title),
        (t[7] = f),
        (t[8] = h),
        (t[9] = m),
        (t[10] = g))
      : (g = t[10]),
    g
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(34603 /* app/components/empty-state */),
  s = n(81774 /* app/components/pixel-icon */),
  l = {
    all: {
      icon: i.AudioLines,
      pixel: "audio-waveform",
      title: "No sessions yet",
      description: "Create one to get ready for an interview or call.",
      showAction: !0,
    },
    interview: {
      icon: i.BriefcaseBusiness,
      pixel: "briefcase",
      title: "No interviews yet",
      description: "Sessions you create as an interview show up here.",
      showAction: !0,
    },
    regular: {
      icon: i.Phone,
      pixel: "phone",
      title: "No regular calls yet",
      description: "Sessions you create as a regular call show up here.",
      showAction: !0,
    },
    mock: {
      icon: i.Bot,
      pixel: "robot",
      title: "No mock interviews yet",
      description: "Practice runs with the AI interviewer show up here.",
      showAction: !0,
    },
  };
