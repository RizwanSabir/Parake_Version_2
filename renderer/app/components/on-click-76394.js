// app/components/on-click-76394.js — webpack module 76394
// params: (e, t, n) = (module, exports, require)
"use strict";
t.LocationSelectorScreen = function (e) {
  const t = (0, o.c)(4),
    { onSelectLocation: n } = e;
  let a, u;
  return (
    t[0] !== n
      ? ((a = s.map((e) => {
          const { location: t, layoutClass: o, cornerClass: a } = e;
          return (0, r.jsxs)(
            "div",
            {
              className: (0, i.cn)(
                "flex gap-2 p-3 hover:bg-white/15 hover:ring-2 hover:ring-white/60 hover:ring-inset",
                o,
                a,
              ),
              onClick: () => n(t),
              children: [(0, r.jsx)(l, {}), (0, r.jsx)(c, {})],
            },
            t,
          );
        })),
        (t[0] = n),
        (t[1] = a))
      : (a = t[1]),
    t[2] !== a
      ? ((u = (0, r.jsx)("div", {
          className:
            "fixed inset-0 grid max-h-screen min-h-screen w-full grid-cols-3 grid-rows-2 overflow-hidden rounded-lg bg-black/40",
          children: a,
        })),
        (t[2] = a),
        (t[3] = u))
      : (u = t[3]),
    u
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(87807 /* app/components/transparent-screen */),
  s = [
    {
      location: "top-left",
      layoutClass: "flex-col items-start",
      cornerClass: "rounded-tl-lg",
    },
    {
      location: "top-center",
      layoutClass: "flex-col items-center",
      cornerClass: "",
    },
    {
      location: "top-right",
      layoutClass: "flex-col items-end",
      cornerClass: "rounded-tr-lg",
    },
    {
      location: "bottom-left",
      layoutClass: "flex-col-reverse items-start",
      cornerClass: "rounded-bl-lg",
    },
    {
      location: "bottom-center",
      layoutClass: "flex-col-reverse items-center",
      cornerClass: "",
    },
    {
      location: "bottom-right",
      layoutClass: "flex-col-reverse items-end",
      cornerClass: "rounded-br-lg",
    },
  ];
function l() {
  const e = (0, o.c)(1);
  let t;
  return (
    e[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((t = (0, r.jsx)(a.TransparentScreen, {
          transparent: !1,
          className: "flex h-[41px] w-[90%] flex-col gap-1",
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function c() {
  const e = (0, o.c)(1);
  let t;
  return (
    e[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((t = (0, r.jsx)(a.TransparentScreen, {
          transparent: !1,
          className: "flex h-[60%] w-[90%] flex-col gap-1",
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
