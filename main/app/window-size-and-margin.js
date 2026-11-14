// app/window-size-and-margin.js — webpack module 99918
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.applyWindowSizeAndMargin = function (e) {
  const t = (0, o.getCurrentScreenIndex)(),
    n = r.screen.getAllDisplays()[t] ?? r.screen.getPrimaryDisplay(),
    { workArea: i } = n,
    s = i.width - 24,
    a = i.height - 24,
    c = i.x + 12,
    u = i.y + 12;
  "darwin" === process.platform &&
    (e.setMinimumSize(0, 0), e.setMaximumSize(0, 0));
  const l = r.screen.getDisplayMatching(e.getBounds()).scaleFactor;
  if ("win32" === process.platform && 1 !== l) {
    const t = c / l,
      n = u / l;
    e.setBounds({ x: t, y: n, width: 1, height: 1 });
  }
  e.setBounds({ x: c, y: u, width: s, height: a }),
    "darwin" === process.platform &&
      (e.setMinimumSize(s, a), e.setMaximumSize(s, a));
};
const r = n(84157 /* external/electron */),
  o = n(92763 /* app/settings-store */);
