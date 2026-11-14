// app/move-to-screen-at-cursor.js — webpack module 20673
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.Y = void 0),
  (t.moveToScreenAtCursor = function (e, n) {
    const s = r.screen.getCursorScreenPoint(),
      a = r.screen.getDisplayNearestPoint(s),
      c = r.screen.getAllDisplays().findIndex((e) => e.id === a.id),
      u = r.screen.getDisplayMatching(e.getBounds()),
      l =
        c >= 0 &&
        u.id !== a.id &&
        ((p = s),
        (f = u.bounds),
        Math.max(
          f.x - p.x,
          p.x - (f.x + f.width),
          f.y - p.y,
          p.y - (f.y + f.height),
          0,
        ) >= t.Y),
      d = l && n;
    var p, f;
    d &&
      ((0, i.setSetting)("currentScreenIndex", c),
      (0, o.applyWindowSizeAndMargin)(e));
    const h = e.getContentBounds(),
      g = e.webContents.getZoomFactor();
    return {
      onOtherScreen: l,
      moved: d,
      cursor: { x: (s.x - h.x) / g, y: (s.y - h.y) / g },
      windowSize: { width: h.width / g, height: h.height / g },
      windowOrigin: { x: h.x, y: h.y },
    };
  });
const r = n(84157 /* external/electron */),
  o = n(99918 /* app/window-size-and-margin */),
  i = n(92763 /* app/settings-store */);
t.Y = 40;
