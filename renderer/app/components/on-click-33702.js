// app/components/on-click-33702.js — webpack module 33702
// params: (e, t, n) = (module, exports, require)
t.AudioPermissionDialog = function (e) {
  const t = (0, o.c)(9),
    { permission: n, onOpenChange: a } = e,
    s = null !== n;
  let l, c, u;
  return (
    t[0] !== a || t[1] !== n
      ? ((l = n && (0, r.jsx)(d, { permission: n, onOpenChange: a })),
        (t[0] = a),
        (t[1] = n),
        (t[2] = l))
      : (l = t[2]),
    t[3] !== l
      ? ((c = (0, r.jsx)(i.DialogContent, {
          size: "sm",
          children: l,
        })),
        (t[3] = l),
        (t[4] = c))
      : (c = t[4]),
    t[5] !== a || t[6] !== s || t[7] !== c
      ? ((u = (0, r.jsx)(i.Dialog, {
          open: s,
          onOpenChange: a,
          children: c,
        })),
        (t[5] = a),
        (t[6] = s),
        (t[7] = c),
        (t[8] = u))
      : (u = t[8]),
    u
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(98980 /* app/components/dialog */),
  a = n(34483 /* app/components/typography-variants */),
  s = n(99683 /* vendor/module-99683 */),
  l = n(74920 /* app/lib/apply-brand-attribute */),
  c = {
    "screen-audio": {
      title: "Allow system audio recording",
      pane: "screen-recording",
      permissionName: "Screen & System Audio Recording",
      intro: `To hear the other side of your call, ${(0, l.getBrand)().name} needs permission to record your screen and system audio.`,
    },
    microphone: {
      title: "Allow microphone access",
      pane: "microphone",
      permissionName: "Microphone",
      intro: `To transcribe your own voice, ${(0, l.getBrand)().name} needs permission to use your microphone.`,
    },
  },
  u = {
    windows: {
      settingsLabel: "Settings",
      osLabel: "Windows",
      appearance: "no name and a blank icon",
      entryLabel: "blank, unnamed",
    },
    macos: {
      settingsLabel: "System Settings",
      osLabel: "macOS",
      appearance: "a blank icon",
      entryLabel: (0, l.getBrand)().name,
    },
  };
function d(e) {
  const t = (0, o.c)(34),
    { permission: n, onOpenChange: d } = e,
    p = c[n],
    f = (0, l.useBrand)(),
    h = "win32" === window.electron?.platform ? "windows" : "macos",
    { settingsLabel: m, osLabel: g, appearance: y, entryLabel: v } = u[h],
    b = f.permissionScreenshots?.[n][h] ?? null;
  let S;
  t[0] !== p.pane || t[1] !== d
    ? ((S = async () => {
        await window.electron.ipcRendererProxy.invoke(
          "renderer/open-privacy-settings",
          p.pane,
        ),
          d(!1);
      }),
      (t[0] = p.pane),
      (t[1] = d),
      (t[2] = S))
    : (S = t[2]);
  const _ = S;
  let x, w, E, T, k, C, I;
  t[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((x = (0, r.jsx)(i.DialogTitle, {})), (t[3] = x))
    : (x = t[3]),
    t[4] !== p.title
      ? ((w = (0, r.jsx)(a.Typography, {
          variant: "title-sm",
          render: x,
          children: p.title,
        })),
        (t[4] = p.title),
        (t[5] = w))
      : (w = t[5]),
    t[6] !== p.permissionName
      ? ((E = (0, r.jsx)("span", {
          className: "text-foreground font-medium",
          children: p.permissionName,
        })),
        (t[6] = p.permissionName),
        (t[7] = E))
      : (E = t[7]),
    t[8] !== p.intro || t[9] !== E
      ? ((T = (0, r.jsxs)(i.DialogDescription, {
          className: "text-left",
          children: [
            p.intro,
            " Enable",
            " ",
            E,
            " ",
            "in ",
            m,
            ", then start again.",
          ],
        })),
        (t[8] = p.intro),
        (t[9] = E),
        (t[10] = T))
      : (T = t[10]),
    t[11] !== w || t[12] !== T
      ? ((k = (0, r.jsxs)(i.DialogHeader, { children: [w, T] })),
        (t[11] = w),
        (t[12] = T),
        (t[13] = k))
      : (k = t[13]),
    t[14] !== f.name || t[15] !== p.permissionName || t[16] !== b
      ? ((C =
          b &&
          (0, r.jsx)("figure", {
            className: "overflow-hidden rounded-lg",
            children: (0, r.jsx)("img", {
              src: b,
              alt: `${g} ${p.permissionName} settings with the nameless ${f.name} entry`,
              className: "block w-full",
            }),
          })),
        (t[14] = f.name),
        (t[15] = p.permissionName),
        (t[16] = b),
        (t[17] = C))
      : (C = t[17]),
    t[18] === Symbol.for("react.memo_cache_sentinel")
      ? ((I = (0, r.jsx)("span", {
          className: "text-foreground font-medium",
          children: v,
        })),
        (t[18] = I))
      : (I = t[18]);
  const A = b ? " shown above" : "";
  let O, R, M, P, N;
  return (
    t[19] !== f.name || t[20] !== A
      ? ((O = (0, r.jsxs)("p", {
          className: "text-muted-foreground text-xs leading-relaxed",
          children: [
            "For privacy, ",
            f.name,
            " has ",
            y,
            ". Look for the",
            " ",
            I,
            " entry",
            A,
            ".",
          ],
        })),
        (t[19] = f.name),
        (t[20] = A),
        (t[21] = O))
      : (O = t[21]),
    t[22] !== d
      ? ((R = (0, r.jsx)(s.Button, {
          type: "button",
          variant: "outline",
          size: "xl",
          onClick: () => d(!1),
          children: "Close",
        })),
        (t[22] = d),
        (t[23] = R))
      : (R = t[23]),
    t[24] !== _
      ? ((M = (0, r.jsxs)(s.Button, {
          type: "button",
          size: "xl",
          onClick: _,
          autoFocus: !0,
          children: ["Open ", m],
        })),
        (t[24] = _),
        (t[25] = M))
      : (M = t[25]),
    t[26] !== R || t[27] !== M
      ? ((P = (0, r.jsxs)(i.DialogFooter, { children: [R, M] })),
        (t[26] = R),
        (t[27] = M),
        (t[28] = P))
      : (P = t[28]),
    t[29] !== O || t[30] !== P || t[31] !== k || t[32] !== C
      ? ((N = (0, r.jsxs)(r.Fragment, { children: [k, C, O, P] })),
        (t[29] = O),
        (t[30] = P),
        (t[31] = k),
        (t[32] = C),
        (t[33] = N))
      : (N = t[33]),
    N
  );
}
