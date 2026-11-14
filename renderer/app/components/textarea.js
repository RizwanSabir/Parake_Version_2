// app/components/textarea.js — webpack module 6826
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
  (t.Textarea = function (e) {
    const t = (0, l.c)(34);
    let n, r, o, i, a, d, p;
    t[0] !== e
      ? (({
          className: r,
          containerClassName: o,
          autoResize: n,
          surface: p,
          start: d,
          end: i,
          ...a
        } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = i),
        (t[5] = a),
        (t[6] = d),
        (t[7] = p))
      : ((n = t[1]),
        (r = t[2]),
        (o = t[3]),
        (i = t[4]),
        (a = t[5]),
        (d = t[6]),
        (p = t[7]));
    const f = c.useRef(null),
      h = c.useRef(0);
    let m, g;
    t[8] !== n
      ? ((m = () => {
          const e = f.current;
          if (!e || !n) return;
          const t = () => {
            const t = parseFloat(getComputedStyle(e).paddingBottom) || 0,
              n = e.style.paddingBottom;
            (e.style.height = "auto"), (e.style.paddingBottom = "0px");
            const r = e.scrollHeight;
            (e.style.paddingBottom = n), (e.style.height = `${r + t}px`);
          };
          if (
            (e.clientWidth > 0 ? t() : (h.current = 0),
            "undefined" == typeof ResizeObserver)
          )
            return;
          const r = new ResizeObserver((e) => {
            const [n] = e,
              r = n?.contentRect.width ?? 0;
            0 !== r && r !== h.current && ((h.current = r), t());
          });
          return r.observe(e), () => r.disconnect();
        }),
        (t[8] = n),
        (t[9] = m))
      : (m = t[9]),
      t[10] !== n || t[11] !== a.value
        ? ((g = [a.value, n]), (t[10] = n), (t[11] = a.value), (t[12] = g))
        : (g = t[12]),
      c.useLayoutEffect(m, g);
    const y =
        "bare" === p &&
        "rounded-none border-0 bg-transparent shadow-none dark:bg-transparent",
      v = (d || i) && "flex items-end gap-1 p-1";
    let b;
    t[13] !== o || t[14] !== y || t[15] !== v
      ? ((b = (0, u.cn)(
          "border-input dark:bg-input/30 w-full max-w-full overflow-hidden rounded-(--radius-control) border bg-transparent shadow-(--shadow-control) transition-[color,box-shadow,border-color] has-[textarea:disabled]:cursor-not-allowed has-[textarea:disabled]:opacity-50",
          "focus-within:border-ring",
          "has-aria-invalid:border-error has-aria-invalid:ring-error/20 dark:has-aria-invalid:ring-error/40",
          y,
          v,
          o,
        )),
        (t[13] = o),
        (t[14] = y),
        (t[15] = v),
        (t[16] = b))
      : (b = t[16]);
    const S = n ? 1 : void 0,
      _ = n && "min-h-0 resize-none",
      x = (d || i) && "min-w-0 flex-1 px-2";
    let w, E, T, k;
    return (
      t[17] !== r || t[18] !== _ || t[19] !== x
        ? ((w = (0, u.cn)(
            "placeholder:text-muted-foreground phone:leading-normal block min-h-24 w-full resize-y bg-transparent px-3 py-2 text-sm outline-none disabled:cursor-not-allowed",
            _,
            x,
            r,
          )),
          (t[17] = r),
          (t[18] = _),
          (t[19] = x),
          (t[20] = w))
        : (w = t[20]),
      t[21] !== n || t[22] !== a.style
        ? ((E =
            "number" == typeof n
              ? { maxHeight: `calc(${n}lh + 1rem)`, ...a.style }
              : a.style),
          (t[21] = n),
          (t[22] = a.style),
          (t[23] = E))
        : (E = t[23]),
      t[24] !== a || t[25] !== E || t[26] !== S || t[27] !== w
        ? ((T = (0, s.jsx)("textarea", {
            ref: f,
            "data-slot": "textarea",
            rows: S,
            className: w,
            style: E,
            ...a,
          })),
          (t[24] = a),
          (t[25] = E),
          (t[26] = S),
          (t[27] = w),
          (t[28] = T))
        : (T = t[28]),
      t[29] !== i || t[30] !== d || t[31] !== T || t[32] !== b
        ? ((k = (0, s.jsxs)("div", {
            "data-slot": "textarea-container",
            className: b,
            children: [d, T, i],
          })),
          (t[29] = i),
          (t[30] = d),
          (t[31] = T),
          (t[32] = b),
          (t[33] = k))
        : (k = t[33]),
      k
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c = a(n(14041 /* vendor/module-14041 */)),
  u = n(29113 /* vendor/module-29113 */);
