// vendor/module-83035.js — webpack module 83035
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, {
  Fr: () => d,
  GX: () => c,
  KX: () => h,
  WW: () => s,
  ue: () => n,
});
var i = r(8679 /* vendor/module-8679 */),
  o = r(79456 /* vendor/module-79456 */),
  n = (0, o.K)((t) => {
    const { handDrawnSeed: e } = (0, i.D7)();
    return {
      fill: t,
      hachureAngle: 120,
      hachureGap: 1.5,
      fillWeight: 1.5,
      roughness: 0.7,
      stroke: t,
      seed: e,
    };
  }, "solidStateFill"),
  a = (0, o.K)(
    (t) =>
      Array.isArray(t)
        ? t
        : t
          ? t
              .split(";")
              .map((t) => t.trim())
              .filter(Boolean)
          : [],
    "normalizeStyleList",
  ),
  s = (0, o.K)((t) => {
    const e = l([
      ...(t.cssCompiledStyles || []),
      ...(t.cssStyles || []),
      ...a(t.labelStyle),
    ]);
    return { stylesMap: e, stylesArray: [...e] };
  }, "compileStyles"),
  l = (0, o.K)((t) => {
    const e = new Map();
    return (
      t.forEach((t) => {
        const [r, i] = t.split(":");
        e.set(r.trim(), i?.trim());
      }),
      e
    );
  }, "styles2Map"),
  h = (0, o.K)(
    (t) =>
      "color" === t ||
      "font-size" === t ||
      "font-family" === t ||
      "font-weight" === t ||
      "font-style" === t ||
      "text-decoration" === t ||
      "text-align" === t ||
      "text-transform" === t ||
      "line-height" === t ||
      "letter-spacing" === t ||
      "word-spacing" === t ||
      "text-shadow" === t ||
      "text-overflow" === t ||
      "white-space" === t ||
      "word-wrap" === t ||
      "word-break" === t ||
      "overflow-wrap" === t ||
      "hyphens" === t,
    "isLabelStyle",
  ),
  c = (0, o.K)((t) => {
    const { stylesArray: e } = s(t),
      r = [],
      i = [],
      o = [],
      n = [];
    return (
      e.forEach((t) => {
        const e = t[0];
        h(e)
          ? r.push(t.join(":") + " !important")
          : (i.push(t.join(":") + " !important"),
            e.includes("stroke") && o.push(t.join(":") + " !important"),
            "fill" === e && n.push(t.join(":") + " !important"));
      }),
      {
        labelStyles: r.join(";"),
        nodeStyles: i.join(";"),
        stylesArray: e,
        borderStyles: o,
        backgroundStyles: n,
      }
    );
  }, "styles2String"),
  d = (0, o.K)((t, e) => {
    const { themeVariables: r, handDrawnSeed: o } = (0, i.D7)(),
      { nodeBorder: n, mainBkg: a } = r,
      { stylesMap: l } = s(t);
    return Object.assign(
      {
        roughness: 0.7,
        fill: l.get("fill") || a,
        fillStyle: "hachure",
        fillWeight: 1.5,
        hachureGap: 1.5,
        stroke: l.get("stroke") || n,
        seed: o,
        strokeWidth: l.get("stroke-width")?.replace("px", "") || 1.3,
        fillLineDash: [0, 0],
        strokeLineDash: u(l.get("stroke-dasharray")),
      },
      e,
    );
  }, "userNodeOverrides"),
  u = (0, o.K)((t) => {
    if (!t) return [0, 0];
    const e = t.trim().split(/\s+/).map(Number);
    if (1 === e.length) {
      const t = isNaN(e[0]) ? 0 : e[0];
      return [t, t];
    }
    return [isNaN(e[0]) ? 0 : e[0], isNaN(e[1]) ? 0 : e[1]];
  }, "getStrokeDashArray");
