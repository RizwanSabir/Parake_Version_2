// app/components/search-input.js — webpack module 57583
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          void 0 === r && (r = n);
          var o = Object.getOwnPropertyDescriptor(t, n);
          (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
            (o = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, o);
        }
      : function (e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }),
  i =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t,
          });
        }
      : function (e, t) {
          e.default = t;
        }),
  a =
    (this && this.__importStar) ||
    ((r = function (e) {
      return (
        (r =
          Object.getOwnPropertyNames ||
          function (e) {
            var t = [];
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
            return t;
          }),
        r(e)
      );
    }),
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n = r(e), a = 0; a < n.length; a++)
          "default" !== n[a] && o(t, e, n[a]);
      return i(t, e), t;
    });
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SearchInput = function (e) {
    const t = (0, l.c)(38);
    let n, r, o, i, a, f;
    t[0] !== e
      ? (({
          className: n,
          onChange: r,
          ref: i,
          trailing: a,
          trailingClassName: f,
          ...o
        } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = i),
        (t[5] = a),
        (t[6] = f))
      : ((n = t[1]),
        (r = t[2]),
        (o = t[3]),
        (i = t[4]),
        (a = t[5]),
        (f = t[6]));
    const h = u.useRef(null);
    let m, g, y;
    t[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((m = () => h.current), (g = []), (t[7] = m), (t[8] = g))
      : ((m = t[7]), (g = t[8])),
      u.useImperativeHandle(i, m, g),
      t[9] !== o.defaultValue
        ? ((y = () => String(o.defaultValue ?? "")),
          (t[9] = o.defaultValue),
          (t[10] = y))
        : (y = t[10]);
    const [v, b] = u.useState(y),
      S =
        (void 0 !== o.value ? "" !== String(o.value) : "" !== v) &&
        !o.disabled &&
        !o.readOnly;
    let _;
    t[11] !== r
      ? ((_ = (e) => {
          b(e.target.value), r?.(e);
        }),
        (t[11] = r),
        (t[12] = _))
      : (_ = t[12]);
    const x = _;
    let w;
    t[13] === Symbol.for("react.memo_cache_sentinel")
      ? ((w = () => {
          const e = h.current;
          e &&
            (Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "value",
            )?.set?.call(e, ""),
            e.dispatchEvent(new Event("input", { bubbles: !0 })),
            e.focus());
        }),
        (t[13] = w))
      : (w = t[13]);
    const E = w;
    let T;
    t[14] === Symbol.for("react.memo_cache_sentinel")
      ? ((T = (0, s.jsx)(c.Search, {
          className:
            "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
        })),
        (t[14] = T))
      : (T = t[14]);
    const k = S && "pr-9",
      C =
        void 0 !== a &&
        "phone:h-full h-full rounded-none border-0 bg-transparent shadow-none dark:bg-transparent",
      I =
        void 0 !== a &&
        (S
          ? "not-focus:[mask-image:linear-gradient(to_right,black_calc(100%-3.75rem),transparent_calc(100%-2.25rem))]"
          : "not-focus:[mask-image:linear-gradient(to_right,black_calc(100%-2.25rem),transparent_calc(100%-0.75rem))]");
    let A, O, R, M;
    t[15] !== n || t[16] !== k || t[17] !== C || t[18] !== I
      ? ((A = (0, d.cn)(
          "phone:pl-8 pl-9 [&::-webkit-search-cancel-button]:hidden",
          k,
          C,
          I,
          n,
        )),
        (t[15] = n),
        (t[16] = k),
        (t[17] = C),
        (t[18] = I),
        (t[19] = A))
      : (A = t[19]),
      t[20] !== x || t[21] !== o || t[22] !== A
        ? ((O = (0, s.jsx)(p.Input, {
            ref: h,
            type: "search",
            onChange: x,
            className: A,
            ...o,
          })),
          (t[20] = x),
          (t[21] = o),
          (t[22] = A),
          (t[23] = O))
        : (O = t[23]),
      t[24] !== S
        ? ((R =
            S &&
            (0, s.jsx)("button", {
              type: "button",
              onClick: E,
              "aria-label": "Clear search",
              className:
                "text-muted-foreground hover:text-foreground focus-visible:text-foreground absolute top-1/2 right-3 -translate-y-1/2 rounded-sm outline-none",
              children: (0, s.jsx)(c.X, { className: "size-4" }),
            })),
          (t[24] = S),
          (t[25] = R))
        : (R = t[25]),
      t[26] !== O || t[27] !== R
        ? ((M = (0, s.jsxs)("div", {
            className: "relative h-full w-full min-w-0",
            children: [T, O, R],
          })),
          (t[26] = O),
          (t[27] = R),
          (t[28] = M))
        : (M = t[28]);
    const P = M;
    if (void 0 === a) return P;
    let N, D, j, L;
    return (
      t[29] !== f
        ? ((N = (0, d.cn)("flex h-full shrink-0 items-center", f)),
          (t[29] = f),
          (t[30] = N))
        : (N = t[30]),
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = (0, s.jsx)("div", {
            "aria-hidden": !0,
            className: "bg-border h-full w-px",
          })),
          (t[31] = D))
        : (D = t[31]),
      t[32] !== N || t[33] !== a
        ? ((j = (0, s.jsxs)("div", {
            className: N,
            children: [D, a],
          })),
          (t[32] = N),
          (t[33] = a),
          (t[34] = j))
        : (j = t[34]),
      t[35] !== P || t[36] !== j
        ? ((L = (0, s.jsxs)("div", {
            className:
              "border-input dark:bg-input/30 has-[input:focus-visible]:border-ring phone:h-(--control-h-lg) flex h-(--control-h-md) w-full items-center overflow-hidden rounded-(--radius-control) border bg-transparent shadow-(--shadow-control) transition-[border-color]",
            children: [P, j],
          })),
          (t[35] = P),
          (t[36] = j),
          (t[37] = L))
        : (L = t[37]),
      L
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c = n(87952 /* vendor/module-87952 */),
  u = a(n(14041 /* vendor/module-14041 */)),
  d = n(29113 /* vendor/module-29113 */),
  p = n(91722 /* app/components/input */);
