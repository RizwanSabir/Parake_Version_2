// app/components/mermaid-diagram.js — webpack module 95773
// params: (e, t, n) = (module, exports, require)
t.MermaidDiagram = function (e) {
  const t = (0, o.c)(19),
    { source: d, fallback: p, action: f } = e,
    h = (0, i.useId)();
  let m;
  if (t[0] !== h) {
    let e;
    t[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((e = /[^\w-]/g), (t[2] = e))
      : (e = t[2]),
      (m = h.replace(e, "")),
      (t[0] = h),
      (t[1] = m);
  } else m = t[1];
  const g = `mermaid-${m}`,
    [y, v] = (0, i.useState)(null),
    b = (0, i.useRef)(null);
  let S, _, x, w, E, T, k;
  return (
    t[3] !== g || t[4] !== d
      ? ((S = () => {
          let e,
            t = !1;
          const r = setTimeout(() => {
            ((c ??= n
              .e(7101)
              .then(n.bind(n, 87101))
              .then(
                ({ default: e }) => (
                  e.initialize({
                    startOnLoad: !1,
                    securityLevel: "strict",
                    suppressErrorRendering: !0,
                    theme: "base",
                    themeCSS: l,
                    fontFamily: "inherit",
                    flowchart: { useMaxWidth: !0 },
                  }),
                  e
                ),
                (e) => {
                  throw ((c = void 0), e);
                },
              )),
            c)
              .then((e) => e.render(g, d))
              .then(
                (e) => {
                  const { svg: n } = e;
                  t || v({ source: d, svg: n, width: u(n) });
                },
                (n) => {
                  t ||
                    b.current === d ||
                    (e = setTimeout(() => {
                      (b.current = d),
                        s.log.warn("A live-answer diagram could not be drawn", {
                          code: a.codes.liveAnswer.diagram_render_failed,
                          "error.type": n instanceof Error ? n.name : typeof n,
                        });
                    }, 5e3));
                },
              );
          }, 400);
          return () => {
            (t = !0), clearTimeout(r), clearTimeout(e);
          };
        }),
        (_ = [g, d]),
        (t[3] = g),
        (t[4] = d),
        (t[5] = S),
        (t[6] = _))
      : ((S = t[5]), (_ = t[6])),
    (0, i.useEffect)(S, _),
    y && y.source === d
      ? (t[7] !== y.width
          ? ((x = y.width ? { minWidth: 0.6 * y.width } : void 0),
            (t[7] = y.width),
            (t[8] = x))
          : (x = t[8]),
        t[9] !== y.svg
          ? ((w = { __html: y.svg }), (t[9] = y.svg), (t[10] = w))
          : (w = t[10]),
        t[11] !== x || t[12] !== w
          ? ((E = (0, r.jsx)("div", {
              className: "max-w-full overflow-x-auto",
              children: (0, r.jsx)("div", {
                className: "[&_svg]:mx-auto [&_svg]:h-auto [&_svg]:w-full",
                style: x,
                dangerouslySetInnerHTML: w,
              }),
            })),
            (t[11] = x),
            (t[12] = w),
            (t[13] = E))
          : (E = t[13]),
        t[14] !== f
          ? ((T =
              f &&
              (0, r.jsx)("div", {
                className: "absolute top-0 right-0",
                children: f,
              })),
            (t[14] = f),
            (t[15] = T))
          : (T = t[15]),
        t[16] !== E || t[17] !== T
          ? ((k = (0, r.jsxs)("div", {
              className: "relative my-1 font-sans whitespace-normal",
              children: [E, T],
            })),
            (t[16] = E),
            (t[17] = T),
            (t[18] = k))
          : (k = t[18]),
        k)
      : p
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(29776 /* vendor/module-29776 */),
  s = n(37148 /* app/lib/set-telemetry-sdk */),
  l =
    "\n  .node rect, .node circle, .node ellipse, .node polygon, .node path {\n    fill: hsl(var(--foreground) / 0.05) !important;\n    stroke: hsl(var(--foreground) / 0.45) !important;\n  }\n  .flowchart-link, .edgePath .path {\n    stroke: hsl(var(--muted-foreground)) !important;\n  }\n  .marker, marker path {\n    fill: hsl(var(--muted-foreground)) !important;\n    stroke: hsl(var(--muted-foreground)) !important;\n  }\n  .nodeLabel, .edgeLabel, .label, span, p, text {\n    color: hsl(var(--foreground)) !important;\n    fill: hsl(var(--foreground)) !important;\n  }\n  .edgeLabel, .edgeLabel p, .labelBkg {\n    background-color: hsl(var(--muted)) !important;\n  }\n  .edgeLabel rect {\n    fill: hsl(var(--muted)) !important;\n  }\n";
let c;
function u(e) {
  const t = /viewBox="[\d.-]+ [\d.-]+ ([\d.]+) [\d.]+"/.exec(e);
  return t ? Number(t[1]) : null;
}
