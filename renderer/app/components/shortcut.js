// app/components/shortcut.js — webpack module 21693
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.Shortcut = function (e) {
  const t = (0, o.c)(11),
    { shortcuts: n, noPlus: i, className: l } = e,
    c = void 0 !== i && i,
    u = void 0 === l ? "" : l,
    d = c ? "gap-px" : "gap-[3px]";
  let p, f, h;
  if (
    (t[0] !== u || t[1] !== d
      ? ((p = (0, s.cn)("flex items-center", d, u)),
        (t[0] = u),
        (t[1] = d),
        (t[2] = p))
      : (p = t[2]),
    t[3] !== c || t[4] !== n)
  ) {
    let e;
    t[6] !== c
      ? ((e = (e, t) =>
          (0, r.jsxs)(
            a.Fragment,
            {
              children: [
                t > 0 &&
                  !c &&
                  (0, r.jsx)("span", {
                    className: "",
                    children: "+",
                  }),
                "string" == typeof e
                  ? (0, r.jsx)("span", {
                      className: "mx-px text-[13px]",
                      children: e,
                    })
                  : (0, r.jsx)(e, { className: "size-3.5" }),
              ],
            },
            t,
          )),
        (t[6] = c),
        (t[7] = e))
      : (e = t[7]),
      (f = n.map(e)),
      (t[3] = c),
      (t[4] = n),
      (t[5] = f);
  } else f = t[5];
  return (
    t[8] !== p || t[9] !== f
      ? ((h = (0, r.jsx)("span", { className: p, children: f })),
        (t[8] = p),
        (t[9] = f),
        (t[10] = h))
      : (h = t[10]),
    h
  );
}),
  (t.ShiftKey = function () {
    const e = (0, o.c)(1);
    let t;
    return (
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)(i.ArrowBigUp, { className: "size-3.5" })),
          (e[0] = t))
        : (t = e[0]),
      t
    );
  }),
  (t.ShortcutKey = function () {
    const e = (0, o.c)(2);
    if ("macos" === l.os) {
      let t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(i.Command, { className: "size-3" })), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    let t;
    return (
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)("span", {
            className: "text-[13px]",
            children: "Ctrl",
          })),
          (e[1] = t))
        : (t = e[1]),
      t
    );
  }),
  (t.SpaceKey = function () {
    const e = (0, o.c)(1);
    let t;
    return (
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)("span", {
            className: "text-[13px]",
            children: (0, r.jsx)(i.Space, { className: "size-3.5" }),
          })),
          (e[0] = t))
        : (t = e[0]),
      t
    );
  }),
  (t.OptionKey = function () {
    const e = (0, o.c)(2);
    if ("macos" === l.os) {
      let t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(i.Option, { className: "size-3" })), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    let t;
    return (
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)("span", {
            className: "text-[13px]",
            children: "Alt",
          })),
          (e[1] = t))
        : (t = e[1]),
      t
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(50272 /* app/lib/os-version-raw */);
