// app/components/get-selected-values.js — webpack module 28688
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
Object.defineProperty(t, "__esModule", { value: !0 }), (t.MultiSelect = void 0);
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c = n(1279 /* vendor/module-1279 */),
  u = n(87952 /* vendor/module-87952 */),
  d = a(n(14041 /* vendor/module-14041 */)),
  p = n(29113 /* vendor/module-29113 */),
  f = n(66244 /* app/components/button-variants */),
  h = n(76966 /* vendor/module-76966 */),
  m = n(42325 /* app/components/command-separator */),
  g = n(35973 /* app/components/popover */),
  y = n(68571 /* app/components/separator */),
  v = (0, c.cva)((0, h.chipVariants)(), {
    variants: {
      variant: {
        default: "",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-error text-error-foreground",
        inverted: "",
      },
    },
    defaultVariants: { variant: "default" },
  });
function b(e) {
  return e.length > 0 && "heading" in e[0];
}
function S(e, t) {
  if (e.length !== t.length) return !1;
  const n = [...e].sort(),
    r = [...t].sort();
  return n.every((e, t) => e === r[t]);
}
function _(e) {
  return e.options;
}
function x(e) {
  return e.options.length > 0;
}
function w(e) {
  return !e.disabled;
}
function E(e) {
  return e.value;
}
function T(e) {
  return !e.disabled;
}
function k(e) {
  return !e.disabled;
}
function C(e) {
  return !e.disabled;
}
(t.MultiSelect = d.forwardRef((e, t) => {
  const n = (0, l.c)(217);
  let r,
    o,
    i,
    a,
    c,
    I,
    A,
    O,
    R,
    M,
    P,
    N,
    D,
    j,
    L,
    F,
    U,
    B,
    z,
    H,
    V,
    q,
    G,
    W,
    $,
    Y,
    K,
    Z,
    Q,
    J,
    X,
    ee;
  n[0] !== e
    ? (({
        options: R,
        onValueChange: O,
        variant: X,
        defaultValue: j,
        placeholder: q,
        animation: G,
        animationConfig: o,
        maxCount: W,
        modalPopover: $,
        asChild: Y,
        className: i,
        hideSelectAll: K,
        searchable: Z,
        emptyIndicator: a,
        autoSize: Q,
        singleLine: L,
        popoverClassName: M,
        disabled: F,
        responsive: D,
        minWidth: A,
        maxWidth: I,
        deduplicateOptions: U,
        resetOnDefaultValueChange: B,
        closeOnSelect: z,
        valueRenderer: J,
        footer: c,
        action: r,
        hideFooter: H,
        hideClose: V,
        popoverSide: P,
        ...N
      } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = o),
      (n[3] = i),
      (n[4] = a),
      (n[5] = c),
      (n[6] = I),
      (n[7] = A),
      (n[8] = O),
      (n[9] = R),
      (n[10] = M),
      (n[11] = P),
      (n[12] = N),
      (n[13] = D),
      (n[14] = j),
      (n[15] = L),
      (n[16] = F),
      (n[17] = U),
      (n[18] = B),
      (n[19] = z),
      (n[20] = H),
      (n[21] = V),
      (n[22] = q),
      (n[23] = G),
      (n[24] = W),
      (n[25] = $),
      (n[26] = Y),
      (n[27] = K),
      (n[28] = Z),
      (n[29] = Q),
      (n[30] = J),
      (n[31] = X))
    : ((r = n[1]),
      (o = n[2]),
      (i = n[3]),
      (a = n[4]),
      (c = n[5]),
      (I = n[6]),
      (A = n[7]),
      (O = n[8]),
      (R = n[9]),
      (M = n[10]),
      (P = n[11]),
      (N = n[12]),
      (D = n[13]),
      (j = n[14]),
      (L = n[15]),
      (F = n[16]),
      (U = n[17]),
      (B = n[18]),
      (z = n[19]),
      (H = n[20]),
      (V = n[21]),
      (q = n[22]),
      (G = n[23]),
      (W = n[24]),
      ($ = n[25]),
      (Y = n[26]),
      (K = n[27]),
      (Z = n[28]),
      (Q = n[29]),
      (J = n[30]),
      (X = n[31])),
    n[32] !== j
      ? ((ee = void 0 === j ? [] : j), (n[32] = j), (n[33] = ee))
      : (ee = n[33]);
  const te = ee,
    ne = void 0 === q ? "Select options" : q,
    re = void 0 === G ? 0 : G,
    oe = void 0 === W ? 3 : W,
    ie = void 0 !== $ && $,
    ae = void 0 !== K && K,
    se = void 0 === Z || Z,
    le = void 0 !== Q && Q,
    ce = void 0 !== L && L,
    ue = void 0 !== F && F,
    de = void 0 !== U && U,
    pe = void 0 === B || B,
    fe = void 0 !== z && z,
    he = void 0 !== H && H,
    me = void 0 !== V && V;
  let ge;
  n[34] !== r
    ? ((ge = r ? (Array.isArray(r) ? r : [r]) : []), (n[34] = r), (n[35] = ge))
    : (ge = n[35]);
  const ye = ge,
    [ve, be] = d.useState(te),
    [Se, _e] = d.useState(!1),
    [xe, we] = d.useState(""),
    [Ee, Te] = d.useState(""),
    [ke, Ce] = d.useState(""),
    Ie = d.useRef(ve.length),
    Ae = d.useRef(Se),
    Oe = d.useRef(xe);
  let Re;
  n[36] === Symbol.for("react.memo_cache_sentinel")
    ? ((Re = {}), (n[36] = Re))
    : (Re = n[36]);
  const Me = d.useRef(Re);
  let Pe, Ne, De;
  n[37] === Symbol.for("react.memo_cache_sentinel")
    ? ((Pe = () => () => {
        for (const e of Object.values(Me.current)) clearTimeout(e);
      }),
      (Ne = []),
      (n[37] = Pe),
      (n[38] = Ne))
    : ((Pe = n[37]), (Ne = n[38])),
    d.useEffect(Pe, Ne),
    n[39] === Symbol.for("react.memo_cache_sentinel")
      ? ((De = (e, t) => {
          const n = void 0 === t ? "polite" : t,
            r = "assertive" === n ? Ce : Te;
          r(e),
            clearTimeout(Me.current[n]),
            (Me.current[n] = setTimeout(() => {
              delete Me.current[n], r("");
            }, 100));
        }),
        (n[39] = De))
      : (De = n[39]);
  const je = De,
    Le = d.useId(),
    Fe = `${Le}-listbox`,
    Ue = `${Le}-description`,
    Be = `${Le}-count`,
    ze = d.useRef(te),
    He = b,
    Ve = S;
  let qe;
  n[40] !== te || n[41] !== O
    ? ((qe = () => {
        be(te), _e(!1), we(""), O(te);
      }),
      (n[40] = te),
      (n[41] = O),
      (n[42] = qe))
    : (qe = n[42]);
  const Ge = qe,
    We = d.useRef(null);
  let $e, Ye;
  n[43] !== O || n[44] !== Ge || n[45] !== ve
    ? (($e = () => ({
        reset: Ge,
        getSelectedValues: () => ve,
        setSelectedValues: (e) => {
          be(e), O(e);
        },
        clear: () => {
          be([]), O([]);
        },
        focus: () => {
          if (We.current) {
            We.current.focus();
            const e = We.current.style.outline,
              t = We.current.style.outlineOffset;
            (We.current.style.outline = "2px solid hsl(var(--ring))"),
              (We.current.style.outlineOffset = "2px"),
              setTimeout(() => {
                We.current &&
                  ((We.current.style.outline = e),
                  (We.current.style.outlineOffset = t));
              }, 1e3);
          }
        },
      })),
      (Ye = [Ge, ve, O]),
      (n[43] = O),
      (n[44] = Ge),
      (n[45] = ve),
      (n[46] = $e),
      (n[47] = Ye))
    : (($e = n[46]), (Ye = n[47])),
    d.useImperativeHandle(t, $e, Ye);
  const [Ke, Ze] = d.useState("desktop");
  let Qe, Je, Xe;
  n[48] === Symbol.for("react.memo_cache_sentinel")
    ? ((Qe = () => {
        if ("undefined" == typeof window) return;
        const e = () => {
          const e = window.innerWidth;
          Ze(e < 640 ? "mobile" : e < 1024 ? "tablet" : "desktop");
        };
        return (
          e(),
          window.addEventListener("resize", e),
          () => {
            "undefined" != typeof window &&
              window.removeEventListener("resize", e);
          }
        );
      }),
      (Je = []),
      (n[48] = Qe),
      (n[49] = Je))
    : ((Qe = n[48]), (Je = n[49])),
    d.useEffect(Qe, Je),
    n[50] !== oe || n[51] !== D || n[52] !== Ke
      ? ((Xe = () => {
          if (!D) return { maxCount: oe, hideIcons: !1, compactMode: !1 };
          if (!0 === D) {
            const e = {
              mobile: { maxCount: 2, hideIcons: !1, compactMode: !0 },
              tablet: { maxCount: 4, hideIcons: !1, compactMode: !1 },
              desktop: {
                maxCount: 6,
                hideIcons: !1,
                compactMode: !1,
              },
            }[Ke];
            return {
              maxCount: e?.maxCount ?? oe,
              hideIcons: e?.hideIcons ?? !1,
              compactMode: e?.compactMode ?? !1,
            };
          }
          const e = D[Ke];
          return {
            maxCount: e?.maxCount ?? oe,
            hideIcons: e?.hideIcons ?? !1,
            compactMode: e?.compactMode ?? !1,
          };
        }),
        (n[50] = oe),
        (n[51] = D),
        (n[52] = Ke),
        (n[53] = Xe))
      : (Xe = n[53]);
  const et = Xe();
  let tt;
  n[54] !== o
    ? ((tt = () => {
        if (o?.badgeAnimation)
          switch (o.badgeAnimation) {
            case "bounce":
              return "hover:-translate-y-1 hover:scale-110";
            case "pulse":
              return "hover:animate-pulse";
            case "wiggle":
            case "none":
            default:
              return "";
            case "fade":
              return "hover:opacity-80";
            case "slide":
              return "hover:translate-x-1";
          }
        return "";
      }),
      (n[54] = o),
      (n[55] = tt))
    : (tt = n[55]);
  const nt = tt;
  let rt;
  n[56] !== o
    ? ((rt = () => {
        if (o?.popoverAnimation)
          switch (o.popoverAnimation) {
            case "scale":
              return "animate-scaleIn";
            case "slide":
              return "animate-slideInDown";
            case "fade":
              return "animate-fadeIn";
            case "flip":
              return "animate-flipIn";
            default:
              return "";
          }
        return "";
      }),
      (n[56] = o),
      (n[57] = rt))
    : (rt = n[57]);
  const ot = rt;
  let it;
  n[58] !== de || n[59] !== R
    ? ((it = () => {
        if (0 === R.length) return [];
        let e;
        e = He(R) ? R.flatMap(_) : R;
        const t = new Set(),
          n = [],
          r = [];
        return (
          e.forEach((e) => {
            t.has(e.value)
              ? (n.push(e.value), de || r.push(e))
              : (t.add(e.value), r.push(e));
          }),
          de ? r : e
        );
      }),
      (n[58] = de),
      (n[59] = R),
      (n[60] = it))
    : (it = n[60]);
  const at = it;
  let st;
  n[61] !== at
    ? ((st = (e) => at().find((t) => t.value === e)),
      (n[61] = at),
      (n[62] = st))
    : (st = n[62]);
  const lt = st;
  let ct;
  e: {
    if (!se || !xe) {
      ct = R;
      break e;
    }
    if (0 === R.length) {
      let e;
      n[63] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = []), (n[63] = e))
        : (e = n[63]),
        (ct = e);
      break e;
    }
    if (He(R)) {
      let e;
      if (n[64] !== R || n[65] !== xe) {
        let t;
        n[67] !== xe
          ? ((t = (e) => ({
              ...e,
              options: e.options.filter(
                (e) =>
                  e.label.toLowerCase().includes(xe.toLowerCase()) ||
                  e.value.toLowerCase().includes(xe.toLowerCase()),
              ),
            })),
            (n[67] = xe),
            (n[68] = t))
          : (t = n[68]),
          (e = R.map(t).filter(x)),
          (n[64] = R),
          (n[65] = xe),
          (n[66] = e);
      } else e = n[66];
      ct = e;
      break e;
    }
    let e;
    if (n[69] !== R || n[70] !== xe) {
      let t;
      n[72] !== xe
        ? ((t = (e) =>
            e.label.toLowerCase().includes(xe.toLowerCase()) ||
            e.value.toLowerCase().includes(xe.toLowerCase())),
          (n[72] = xe),
          (n[73] = t))
        : (t = n[73]),
        (e = R.filter(t)),
        (n[69] = R),
        (n[70] = xe),
        (n[71] = e);
    } else e = n[71];
    ct = e;
  }
  const ut = ct;
  let dt;
  n[74] !== O || n[75] !== ve
    ? ((dt = (e) => {
        if ("Enter" === e.key) _e(!0);
        else if ("Backspace" === e.key && !e.currentTarget.value) {
          const e = [...ve];
          e.pop(), be(e), O(e);
        }
      }),
      (n[74] = O),
      (n[75] = ve),
      (n[76] = dt))
    : (dt = n[76]);
  const pt = dt;
  let ft;
  n[77] !== fe || n[78] !== ue || n[79] !== lt || n[80] !== O || n[81] !== ve
    ? ((ft = (e) => {
        if (ue) return;
        const t = lt(e);
        if (t?.disabled) return;
        const n = ve.includes(e) ? ve.filter((t) => t !== e) : [...ve, e];
        be(n), O(n), fe && _e(!1);
      }),
      (n[77] = fe),
      (n[78] = ue),
      (n[79] = lt),
      (n[80] = O),
      (n[81] = ve),
      (n[82] = ft))
    : (ft = n[82]);
  const ht = ft;
  let mt;
  n[83] !== ue || n[84] !== O
    ? ((mt = () => {
        ue || (be([]), O([]));
      }),
      (n[83] = ue),
      (n[84] = O),
      (n[85] = mt))
    : (mt = n[85]);
  const gt = mt;
  let yt;
  n[86] !== fe ||
  n[87] !== ue ||
  n[88] !== at ||
  n[89] !== gt ||
  n[90] !== O ||
  n[91] !== ve.length
    ? ((yt = () => {
        if (ue) return;
        const e = at().filter(w);
        if (ve.length === e.length) gt();
        else {
          const t = e.map(E);
          be(t), O(t);
        }
        fe && _e(!1);
      }),
      (n[86] = fe),
      (n[87] = ue),
      (n[88] = at),
      (n[89] = gt),
      (n[90] = O),
      (n[91] = ve.length),
      (n[92] = yt))
    : (yt = n[92]);
  const vt = yt;
  let bt, St, _t;
  n[93] !== te || n[94] !== pe || n[95] !== ve
    ? ((bt = () => {
        if (!pe) return;
        const e = ze.current;
        Ve(e, te) || (Ve(ve, te) || be(te), (ze.current = [...te]));
      }),
      (St = [te, ve, Ve, pe]),
      (n[93] = te),
      (n[94] = pe),
      (n[95] = ve),
      (n[96] = bt),
      (n[97] = St))
    : ((bt = n[96]), (St = n[97])),
    d.useEffect(bt, St),
    n[98] !== le || n[99] !== I || n[100] !== A || n[101] !== Ke
      ? ((_t = {
          minWidth: A || ("mobile" === Ke ? "0px" : "200px"),
          maxWidth: I || "100%",
          width: le ? "auto" : "100%",
        }),
        (n[98] = le),
        (n[99] = I),
        (n[100] = A),
        (n[101] = Ke),
        (n[102] = _t))
      : (_t = n[102]);
  const xt = _t;
  let wt, Et, Tt, kt, Ct, It, At;
  n[103] !== Se
    ? ((wt = () => {
        Se || we("");
      }),
      (Et = [Se]),
      (n[103] = Se),
      (n[104] = wt),
      (n[105] = Et))
    : ((wt = n[104]), (Et = n[105])),
    d.useEffect(wt, Et),
    n[106] !== at || n[107] !== Se || n[108] !== xe || n[109] !== ve
      ? ((Tt = () => {
          const e = ve.length,
            t = at(),
            n = t.filter(T).length;
          if (e !== Ie.current) {
            const r = e - Ie.current;
            if (r > 0) {
              const o = ve
                .slice(-r)
                .map((e) => t.find((t) => t.value === e)?.label)
                .filter(Boolean);
              1 === o.length
                ? je(`${o[0]} selected. ${e} of ${n} options selected.`)
                : je(
                    `${o.length} options selected. ${e} of ${n} total selected.`,
                  );
            } else
              r < 0 && je(`Option removed. ${e} of ${n} options selected.`);
            Ie.current = e;
          }
          if (
            (Se !== Ae.current &&
              (je(
                Se
                  ? `Dropdown opened. ${n} options available. Use arrow keys to navigate.`
                  : "Dropdown closed.",
              ),
              (Ae.current = Se)),
            xe !== Oe.current && void 0 !== xe)
          ) {
            if (xe && Se) {
              const e = t.filter(
                (e) =>
                  e.label.toLowerCase().includes(xe.toLowerCase()) ||
                  e.value.toLowerCase().includes(xe.toLowerCase()),
              ).length;
              je(`${e} option${1 === e ? "" : "s"} found for "${xe}"`);
            }
            Oe.current = xe;
          }
        }),
        (kt = [ve, Se, xe, je, at]),
        (n[106] = at),
        (n[107] = Se),
        (n[108] = xe),
        (n[109] = ve),
        (n[110] = Tt),
        (n[111] = kt))
      : ((Tt = n[110]), (kt = n[111])),
    d.useEffect(Tt, kt),
    n[112] !== Ee
      ? ((Ct = (0, s.jsx)("div", {
          "aria-live": "polite",
          "aria-atomic": "true",
          role: "status",
          children: Ee,
        })),
        (n[112] = Ee),
        (n[113] = Ct))
      : (Ct = n[113]),
    n[114] !== ke
      ? ((It = (0, s.jsx)("div", {
          "aria-live": "assertive",
          "aria-atomic": "true",
          role: "alert",
          children: ke,
        })),
        (n[114] = ke),
        (n[115] = It))
      : (It = n[115]),
    n[116] !== Ct || n[117] !== It
      ? ((At = (0, s.jsxs)("div", {
          className: "sr-only",
          children: [Ct, It],
        })),
        (n[116] = Ct),
        (n[117] = It),
        (n[118] = At))
      : (At = n[118]);
  const Ot = g.Popover;
  let Rt, Mt, Pt;
  n[119] !== Ue
    ? ((Rt = (0, s.jsx)("div", {
        id: Ue,
        className: "sr-only",
        children:
          "Multi-select dropdown. Use arrow keys to navigate, Enter to select, and Escape to close.",
      })),
      (n[119] = Ue),
      (n[120] = Rt))
    : (Rt = n[120]),
    n[121] !== lt || n[122] !== ve
      ? ((Mt =
          0 === ve.length
            ? "No options selected"
            : `${ve.length} option${1 === ve.length ? "" : "s"} selected: ${ve
                .map((e) => lt(e)?.label)
                .filter(Boolean)
                .join(", ")}`),
        (n[121] = lt),
        (n[122] = ve),
        (n[123] = Mt))
      : (Mt = n[123]),
    n[124] !== Be || n[125] !== Mt
      ? ((Pt = (0, s.jsx)("div", {
          id: Be,
          className: "sr-only",
          "aria-live": "polite",
          children: Mt,
        })),
        (n[124] = Be),
        (n[125] = Mt),
        (n[126] = Pt))
      : (Pt = n[126]);
  const Nt = g.PopoverTrigger,
    Dt = f.Button,
    jt = Se ? Fe : void 0,
    Lt = `${Ue} ${Be}`,
    Ft = ve.length;
  let Ut;
  n[127] !== at ? ((Ut = at()), (n[127] = at), (n[128] = Ut)) : (Ut = n[128]);
  const Bt = `Multi-select: ${Ft} of ${Ut.length} options selected. ${"string" == typeof ne ? ne : ""}`,
    zt = (0, p.cn)(
      "group/multi-select active:scale-100",
      "text-muted-foreground phone:min-h-(--control-h-lg) flex h-auto min-h-(--control-h-md) items-center justify-between rounded-(--radius-control) border bg-inherit px-3 py-1.5 hover:bg-inherit [&_svg]:pointer-events-auto",
      le ? "w-auto" : "w-full",
      ve.length > 0 && R.length > 0 && !J && "py-1 pl-1",
      et.compactMode && "min-h-(--control-h-sm) text-sm",
      "mobile" === Ke && "min-h-(--control-h-md) text-sm",
      ue && "cursor-not-allowed opacity-50",
      i,
    ),
    Ht = `min(${xt.maxWidth}, 100%)`;
  let Vt;
  n[129] !== Ht || n[130] !== xt
    ? ((Vt = { ...xt, maxWidth: Ht }),
      (n[129] = Ht),
      (n[130] = xt),
      (n[131] = Vt))
    : (Vt = n[131]);
  const qt =
    ve.length > 0 && R.length > 0
      ? J
        ? J(ve, at())
        : (0, s.jsxs)("div", {
            className: "flex w-full items-center justify-between",
            children: [
              (0, s.jsxs)("div", {
                className: (0, p.cn)(
                  "flex items-center gap-1",
                  ce ? "overflow-x-auto" : "flex-wrap",
                  et.compactMode && "gap-0.5",
                ),
                style: ce ? { paddingBottom: "4px" } : {},
                children: [
                  ve
                    .slice(0, et.maxCount)
                    .map((e) => {
                      const t = lt(e),
                        n = t?.icon,
                        r = t?.style;
                      if (!t) return null;
                      const i = {
                        animationDuration: `${re}s`,
                        ...(r?.badgeColor && {
                          backgroundColor: r.badgeColor,
                        }),
                        ...(r?.gradient && {
                          background: r.gradient,
                          color: "white",
                        }),
                      };
                      return (0, s.jsxs)(
                        "span",
                        {
                          "data-slot": "multi-select-chip",
                          className: (0, p.cn)(
                            nt(),
                            v({ variant: X }),
                            r?.gradient && "text-white",
                            et.compactMode && "h-5 pl-1.5",
                            "mobile" === Ke && "max-w-[120px] truncate",
                            ce && "flex-shrink-0 whitespace-nowrap",
                            "[&>svg]:pointer-events-auto",
                          ),
                          style: {
                            ...i,
                            animationDuration: `${o?.duration || re}s`,
                            animationDelay: `${o?.delay || 0}s`,
                          },
                          children: [
                            n &&
                              !et.hideIcons &&
                              (0, s.jsx)(n, {
                                className: (0, p.cn)(
                                  "size-3.5",
                                  et.compactMode && "size-3",
                                  r?.iconColor && "text-current",
                                ),
                                ...(r?.iconColor && {
                                  style: { color: r.iconColor },
                                }),
                              }),
                            (0, s.jsx)("span", {
                              className: (0, p.cn)(
                                "mobile" === Ke && "truncate",
                              ),
                              children: t.label,
                            }),
                            (0, s.jsx)("div", {
                              role: "button",
                              tabIndex: 0,
                              onClick: (t) => {
                                t.stopPropagation(), ht(e);
                              },
                              onKeyDown: (t) => {
                                ("Enter" !== t.key && " " !== t.key) ||
                                  (t.preventDefault(),
                                  t.stopPropagation(),
                                  ht(e));
                              },
                              "aria-label": `Remove ${t.label} from selection`,
                              className: (0, h.chipRemoveVariants)(),
                              children: (0, s.jsx)(u.XIcon, {
                                className: "size-3",
                              }),
                            }),
                          ],
                        },
                        e,
                      );
                    })
                    .filter(Boolean),
                  ve.length > et.maxCount &&
                    (0, s.jsxs)("span", {
                      "data-slot": "multi-select-chip",
                      className: (0, p.cn)(
                        nt(),
                        v({ variant: X }),
                        et.compactMode && "h-5 pl-1.5",
                        ce && "flex-shrink-0 whitespace-nowrap",
                        "[&>svg]:pointer-events-auto",
                      ),
                      style: {
                        animationDuration: `${o?.duration || re}s`,
                        animationDelay: `${o?.delay || 0}s`,
                      },
                      children: [
                        `+ ${ve.length - et.maxCount} more`,
                        (0, s.jsx)("span", {
                          className: (0, h.chipRemoveVariants)(),
                          onClick: (e) => {
                            e.stopPropagation(),
                              (() => {
                                if (ue) return;
                                const e = ve.slice(0, et.maxCount);
                                be(e), O(e);
                              })();
                          },
                          children: (0, s.jsx)(u.XIcon, {
                            className: "size-3",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, s.jsx)("div", {
                    role: "button",
                    tabIndex: 0,
                    onClick: (e) => {
                      e.stopPropagation(), gt();
                    },
                    onKeyDown: (e) => {
                      ("Enter" !== e.key && " " !== e.key) ||
                        (e.preventDefault(), e.stopPropagation(), gt());
                    },
                    "aria-label": `Clear all ${ve.length} selected options`,
                    className:
                      "text-muted-foreground hover:text-foreground focus-ring mx-2 flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm",
                    children: (0, s.jsx)(u.XIcon, {
                      className: "h-4 w-4",
                    }),
                  }),
                  (0, s.jsx)(y.Separator, {
                    orientation: "vertical",
                    className: "flex h-full min-h-6",
                  }),
                  (0, s.jsx)(u.ChevronDown, {
                    className:
                      "text-muted-foreground mx-2 h-4 cursor-pointer transition-transform group-data-[popup-open]/multi-select:rotate-180",
                    "aria-hidden": "true",
                  }),
                ],
              }),
            ],
          })
      : (0, s.jsxs)("div", {
          className: "mx-auto flex w-full items-center justify-between",
          children: [
            (0, s.jsx)("div", {
              className:
                "text-muted-foreground flex items-center gap-2 text-sm font-normal",
              children: ne,
            }),
            (0, s.jsx)(u.ChevronDown, {
              className: (0, p.cn)(
                "text-muted-foreground h-4 cursor-pointer transition-transform group-data-[popup-open]/multi-select:rotate-180",
                ue && "cursor-not-allowed opacity-50",
              ),
            }),
          ],
        });
  let Gt, Wt, $t;
  n[132] !== Dt ||
  n[133] !== ue ||
  n[134] !== Se ||
  n[135] !== N ||
  n[136] !== jt ||
  n[137] !== Lt ||
  n[138] !== Bt ||
  n[139] !== zt ||
  n[140] !== Vt ||
  n[141] !== qt
    ? ((Gt = (0, s.jsx)(Dt, {
        ref: We,
        ...N,
        "data-multi-select-trigger": !0,
        disabled: ue,
        role: "combobox",
        "aria-expanded": Se,
        "aria-haspopup": "listbox",
        "aria-controls": jt,
        "aria-describedby": Lt,
        "aria-label": Bt,
        className: zt,
        style: Vt,
        children: qt,
      })),
      (n[132] = Dt),
      (n[133] = ue),
      (n[134] = Se),
      (n[135] = N),
      (n[136] = jt),
      (n[137] = Lt),
      (n[138] = Bt),
      (n[139] = zt),
      (n[140] = Vt),
      (n[141] = qt),
      (n[142] = Gt))
    : (Gt = n[142]),
    n[143] !== Nt || n[144] !== Gt
      ? ((Wt = (0, s.jsx)(Nt, { render: Gt })),
        (n[143] = Nt),
        (n[144] = Gt),
        (n[145] = Wt))
      : (Wt = n[145]),
    n[146] !== ot || n[147] !== M
      ? (($t = (0, p.cn)("w-[var(--anchor-width)] p-0", ot(), M)),
        (n[146] = ot),
        (n[147] = M),
        (n[148] = $t))
      : ($t = n[148]);
  const Yt = `${o?.duration || re}s`,
    Kt = `${o?.delay || 0}s`,
    Zt = `min(${xt.maxWidth}, 85vw)`,
    Qt = "mobile" === Ke ? "70vh" : "60vh";
  let Jt, Xt, en;
  n[149] !== Yt || n[150] !== Kt || n[151] !== Zt || n[152] !== Qt
    ? ((Jt = {
        animationDuration: Yt,
        animationDelay: Kt,
        maxWidth: Zt,
        maxHeight: Qt,
        touchAction: "manipulation",
      }),
      (n[149] = Yt),
      (n[150] = Kt),
      (n[151] = Zt),
      (n[152] = Qt),
      (n[153] = Jt))
    : (Jt = n[153]),
    n[154] !== pt || n[155] !== Le || n[156] !== xe || n[157] !== se
      ? ((Xt =
          se &&
          (0, s.jsx)(m.CommandInput, {
            placeholder: "Search options...",
            onKeyDown: pt,
            value: xe,
            onValueChange: we,
            "aria-label": "Search through available options",
            "aria-describedby": `${Le}-search-help`,
          })),
        (n[154] = pt),
        (n[155] = Le),
        (n[156] = xe),
        (n[157] = se),
        (n[158] = Xt))
      : (Xt = n[158]),
    n[159] !== Le || n[160] !== se
      ? ((en =
          se &&
          (0, s.jsx)("div", {
            id: `${Le}-search-help`,
            className: "sr-only",
            children:
              "Type to filter options. Use arrow keys to navigate results.",
          })),
        (n[159] = Le),
        (n[160] = se),
        (n[161] = en))
      : (en = n[161]);
  const tn = "mobile" === Ke && "max-h-[50vh]";
  let nn;
  n[162] !== tn
    ? ((nn = (0, p.cn)(
        "max-h-[40vh] overflow-y-auto",
        tn,
        "overscroll-y-contain",
      )),
      (n[162] = tn),
      (n[163] = nn))
    : (nn = n[163]);
  const rn = a || "No results found.";
  let on, an, sn, ln, cn, un, dn, pn, fn, hn, mn;
  return (
    n[164] !== rn
      ? ((on = (0, s.jsx)(m.CommandEmpty, { children: rn })),
        (n[164] = rn),
        (n[165] = on))
      : (on = n[165]),
    n[166] !== at ||
    n[167] !== ae ||
    n[168] !== xe ||
    n[169] !== ve.length ||
    n[170] !== vt
      ? ((an =
          !ae &&
          !xe &&
          (0, s.jsx)(m.CommandGroup, {
            children: (0, s.jsxs)(
              m.CommandItem,
              {
                onSelect: vt,
                role: "option",
                "aria-selected": ve.length === at().filter(k).length,
                "aria-label": `Select all ${at().length} options`,
                className: "cursor-pointer",
                children: [
                  (0, s.jsx)("div", {
                    className: (0, p.cn)(
                      "border-foreground mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                      ve.length === at().filter(C).length
                        ? "bg-foreground text-background"
                        : "opacity-50 [&_svg]:invisible",
                    ),
                    "aria-hidden": "true",
                    children: (0, s.jsx)(u.CheckIcon, {
                      className: "h-4 w-4",
                    }),
                  }),
                  (0, s.jsxs)("span", {
                    children: [
                      "Select All",
                      at().length > 20 ? ` - ${at().length} options` : "",
                    ],
                  }),
                ],
              },
              "all",
            ),
          })),
        (n[166] = at),
        (n[167] = ae),
        (n[168] = xe),
        (n[169] = ve.length),
        (n[170] = vt),
        (n[171] = an))
      : (an = n[171]),
    n[172] !== ae || n[173] !== xe
      ? ((sn = !ae && !xe && (0, s.jsx)(m.CommandSeparator, {})),
        (n[172] = ae),
        (n[173] = xe),
        (n[174] = sn))
      : (sn = n[174]),
    n[175] !== ut || n[176] !== ve || n[177] !== ht
      ? ((ln =
          0 === ut.length
            ? null
            : He(ut)
              ? ut.map((e) =>
                  (0, s.jsx)(
                    m.CommandGroup,
                    {
                      heading: e.heading,
                      children: e.options.map((e) => {
                        const t = ve.includes(e.value);
                        return (0, s.jsxs)(
                          m.CommandItem,
                          {
                            onSelect: () => ht(e.value),
                            role: "option",
                            "aria-selected": t,
                            "aria-disabled": e.disabled,
                            "aria-label": `${e.label}${t ? ", selected" : ", not selected"}${e.disabled ? ", disabled" : ""}`,
                            className: (0, p.cn)(
                              "cursor-pointer",
                              e.disabled && "cursor-not-allowed opacity-50",
                            ),
                            disabled: e.disabled,
                            children: [
                              (0, s.jsx)("div", {
                                className: (0, p.cn)(
                                  "border-foreground mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                                  t
                                    ? "bg-foreground text-background"
                                    : "opacity-50 [&_svg]:invisible",
                                ),
                                "aria-hidden": "true",
                                children: (0, s.jsx)(u.CheckIcon, {
                                  className: "h-4 w-4",
                                }),
                              }),
                              e.icon &&
                                (0, s.jsx)(e.icon, {
                                  className:
                                    "text-muted-foreground mr-2 h-4 w-4",
                                  "aria-hidden": "true",
                                }),
                              (0, s.jsx)("span", {
                                children: e.label,
                              }),
                            ],
                          },
                          e.value,
                        );
                      }),
                    },
                    e.heading,
                  ),
                )
              : (0, s.jsx)(m.CommandGroup, {
                  children: ut.map((e) => {
                    const t = ve.includes(e.value);
                    return (0, s.jsxs)(
                      m.CommandItem,
                      {
                        onSelect: () => ht(e.value),
                        role: "option",
                        "aria-selected": t,
                        "aria-disabled": e.disabled,
                        "aria-label": `${e.label}${t ? ", selected" : ", not selected"}${e.disabled ? ", disabled" : ""}`,
                        className: (0, p.cn)(
                          "cursor-pointer",
                          e.disabled && "cursor-not-allowed opacity-50",
                        ),
                        disabled: e.disabled,
                        children: [
                          (0, s.jsx)("div", {
                            className: (0, p.cn)(
                              "border-foreground mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                              t
                                ? "bg-foreground text-background"
                                : "opacity-50 [&_svg]:invisible",
                            ),
                            "aria-hidden": "true",
                            children: (0, s.jsx)(u.CheckIcon, {
                              className: "h-4 w-4",
                            }),
                          }),
                          e.icon &&
                            (0, s.jsx)(e.icon, {
                              className: "text-muted-foreground mr-2 h-4 w-4",
                              "aria-hidden": "true",
                            }),
                          (0, s.jsx)("span", { children: e.label }),
                        ],
                      },
                      e.value,
                    );
                  }),
                })),
        (n[175] = ut),
        (n[176] = ve),
        (n[177] = ht),
        (n[178] = ln))
      : (ln = n[178]),
    n[179] !== ye || n[180] !== ut.length
      ? ((cn =
          ye.length > 0 &&
          (0, s.jsxs)(s.Fragment, {
            children: [
              ut.length > 0 && (0, s.jsx)(m.CommandSeparator, {}),
              (0, s.jsx)(m.CommandGroup, {
                children: ye.map((e, t) =>
                  (0, s.jsx)(
                    m.CommandItem,
                    {
                      onSelect: () => {
                        e.keepOpen || _e(!1), e.onSelect();
                      },
                      className: "cursor-pointer",
                      children: e.label,
                    },
                    t,
                  ),
                ),
              }),
            ],
          })),
        (n[179] = ye),
        (n[180] = ut.length),
        (n[181] = cn))
      : (cn = n[181]),
    n[182] !== c ||
    n[183] !== gt ||
    n[184] !== me ||
    n[185] !== he ||
    n[186] !== ve.length
      ? ((un =
          !he &&
          (!!c || !me || ve.length > 0) &&
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(m.CommandSeparator, {}),
              (0, s.jsx)(m.CommandGroup, {
                children:
                  c ||
                  (0, s.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      ve.length > 0 &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(m.CommandItem, {
                              onSelect: gt,
                              className: "flex-1 cursor-pointer justify-center",
                              children: "Clear",
                            }),
                            !me &&
                              (0, s.jsx)(y.Separator, {
                                orientation: "vertical",
                                className: "flex h-full min-h-6",
                              }),
                          ],
                        }),
                      !me &&
                        (0, s.jsx)(m.CommandItem, {
                          onSelect: () => _e(!1),
                          className:
                            "max-w-full flex-1 cursor-pointer justify-center",
                          children: "Close",
                        }),
                    ],
                  }),
              }),
            ],
          })),
        (n[182] = c),
        (n[183] = gt),
        (n[184] = me),
        (n[185] = he),
        (n[186] = ve.length),
        (n[187] = un))
      : (un = n[187]),
    n[188] !== nn ||
    n[189] !== on ||
    n[190] !== an ||
    n[191] !== sn ||
    n[192] !== ln ||
    n[193] !== cn ||
    n[194] !== un
      ? ((dn = (0, s.jsxs)(m.CommandList, {
          className: nn,
          children: [on, " ", an, sn, ln, cn, un],
        })),
        (n[188] = nn),
        (n[189] = on),
        (n[190] = an),
        (n[191] = sn),
        (n[192] = ln),
        (n[193] = cn),
        (n[194] = un),
        (n[195] = dn))
      : (dn = n[195]),
    n[196] !== Xt || n[197] !== en || n[198] !== dn
      ? ((pn = (0, s.jsxs)(m.Command, { children: [Xt, en, dn] })),
        (n[196] = Xt),
        (n[197] = en),
        (n[198] = dn),
        (n[199] = pn))
      : (pn = n[199]),
    n[200] !== Fe ||
    n[201] !== P ||
    n[202] !== $t ||
    n[203] !== Jt ||
    n[204] !== pn
      ? ((fn = (0, s.jsx)(g.PopoverContent, {
          id: Fe,
          role: "listbox",
          "aria-multiselectable": "true",
          "aria-label": "Available options",
          className: $t,
          style: Jt,
          align: "start",
          side: P,
          children: pn,
        })),
        (n[200] = Fe),
        (n[201] = P),
        (n[202] = $t),
        (n[203] = Jt),
        (n[204] = pn),
        (n[205] = fn))
      : (fn = n[205]),
    n[206] !== Ot ||
    n[207] !== Se ||
    n[208] !== ie ||
    n[209] !== Rt ||
    n[210] !== Pt ||
    n[211] !== Wt ||
    n[212] !== fn
      ? ((hn = (0, s.jsxs)(Ot, {
          open: Se,
          onOpenChange: _e,
          modal: ie,
          children: [Rt, Pt, Wt, fn],
        })),
        (n[206] = Ot),
        (n[207] = Se),
        (n[208] = ie),
        (n[209] = Rt),
        (n[210] = Pt),
        (n[211] = Wt),
        (n[212] = fn),
        (n[213] = hn))
      : (hn = n[213]),
    n[214] !== At || n[215] !== hn
      ? ((mn = (0, s.jsxs)(s.Fragment, { children: [At, hn] })),
        (n[214] = At),
        (n[215] = hn),
        (n[216] = mn))
      : (mn = n[216]),
    mn
  );
})),
  (t.MultiSelect.displayName = "MultiSelect");
