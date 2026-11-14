// vendor/module-50475.js — webpack module 50475
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { F: () => o });
var i = r(79456 /* vendor/module-79456 */),
  o = (0, i.K)((t, e) => {
    const { theme: r, themeVariables: o } = e,
      { useGradient: n, gradientStart: a, gradientStop: s } = o ?? {},
      l = t.attr("id"),
      h = r?.includes("dark") ? "#FFFFFF" : "#000000",
      c = (0, i.K)(
        (e, r, i) =>
          t
            .append("defs")
            .append("filter")
            .attr("id", e)
            .attr("height", r)
            .attr("width", r)
            .append("feDropShadow")
            .attr("dx", i)
            .attr("dy", i)
            .attr("stdDeviation", 0)
            .attr("flood-opacity", "0.06")
            .attr("flood-color", h),
        "dropShadow",
      );
    if (
      (c(`${l}-drop-shadow`, "130%", "4"),
      c(`${l}-drop-shadow-small`, "150%", "2"),
      !n)
    )
      return;
    const d = t
      .append("linearGradient")
      .attr("id", `${l}-gradient`)
      .attr("gradientUnits", "objectBoundingBox")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");
    d
      .append("svg:stop")
      .attr("offset", "0%")
      .attr("stop-color", a)
      .attr("stop-opacity", 1),
      d
        .append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", s)
        .attr("stop-opacity", 1);
  }, "insertLookDefs");
