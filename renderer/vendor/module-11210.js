// vendor/module-11210.js — webpack module 11210
// params: (e, t, n) = (module, exports, require)
"use strict";
n.r(t), n.d(t, { ReactComponent: () => p, default: () => f });
var r,
  o,
  i,
  a,
  s,
  l,
  c = n(14041 /* vendor/module-14041 */);
function u() {
  return (
    (u = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    u.apply(null, arguments)
  );
}
const d = ({ title: e, titleId: t, ...n }, d) =>
    c.createElement(
      "svg",
      u(
        {
          width: 813,
          height: 488,
          viewBox: "0 0 813 488",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ref: d,
          "aria-labelledby": t,
        },
        n,
      ),
      e ? c.createElement("title", { id: t }, e) : null,
      r ||
        (r = c.createElement("path", {
          d: "M0 162.599H162.6V325.199H0V162.599Z",
          fill: "#D9D9D9",
        })),
      o ||
        (o = c.createElement("path", {
          d: "M162.599 325.199H325.199V487.799H162.599V325.199Z",
          fill: "#D9D9D9",
        })),
      i ||
        (i = c.createElement("path", {
          d: "M162.599 0H325.199V162.6H162.599V0Z",
          fill: "#D9D9D9",
        })),
      a ||
        (a = c.createElement("path", {
          d: "M487.799 0H650.399V162.6H487.799V0Z",
          fill: "#FF5F01",
        })),
      s ||
        (s = c.createElement("path", {
          d: "M650.399 162.6L812.999 162.599V325.199H650.399L650.399 162.6Z",
          fill: "#FF5F01",
        })),
      l ||
        (l = c.createElement("path", {
          d: "M487.799 325.199L650.399 325.199L650.399 487.799H487.799V325.199Z",
          fill: "#FF5F01",
        })),
    ),
  p = (0, c.forwardRef)(d),
  f = n.p + "94e8519676a770e50a1392c3d3ed8681.svg";
