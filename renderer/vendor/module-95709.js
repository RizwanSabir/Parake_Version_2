// vendor/module-95709.js — webpack module 95709
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  r = "-",
  o = [],
  i = (e) => {
    const t = l(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: i } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith("[") && e.endsWith("]")) return s(e);
        const n = e.split(r),
          o = "" === n[0] && n.length > 1 ? 1 : 0;
        return a(n, o, t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          const t = i[e],
            r = n[e];
          return t
            ? r
              ? ((e, t) => {
                  const n = new Array(e.length + t.length);
                  for (let t = 0; t < e.length; t++) n[t] = e[t];
                  for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
                  return n;
                })(r, t)
              : t
            : r || o;
        }
        return n[e] || o;
      },
    };
  },
  a = (e, t, n) => {
    if (0 === e.length - t) return n.classGroupId;
    const o = e[t],
      i = n.nextPart.get(o);
    if (i) {
      const n = a(e, t + 1, i);
      if (n) return n;
    }
    const s = n.validators;
    if (null === s) return;
    const l = 0 === t ? e.join(r) : e.slice(t).join(r),
      c = s.length;
    for (let e = 0; e < c; e++) {
      const t = s[e];
      if (t.validator(l)) return t.classGroupId;
    }
  },
  s = (e) =>
    -1 === e.slice(1, -1).indexOf(":")
      ? void 0
      : (() => {
          const t = e.slice(1, -1),
            n = t.indexOf(":"),
            r = t.slice(0, n);
          return r ? "arbitrary.." + r : void 0;
        })(),
  l = (e) => {
    const { theme: t, classGroups: n } = e;
    return c(n, t);
  },
  c = (e, t) => {
    const r = n();
    for (const n in e) {
      const o = e[n];
      u(o, r, n, t);
    }
    return r;
  },
  u = (e, t, n, r) => {
    const o = e.length;
    for (let i = 0; i < o; i++) {
      const o = e[i];
      d(o, t, n, r);
    }
  },
  d = (e, t, n, r) => {
    "string" != typeof e
      ? "function" != typeof e
        ? h(e, t, n, r)
        : f(e, t, n, r)
      : p(e, t, n);
  },
  p = (e, t, n) => {
    ("" === e ? t : m(t, e)).classGroupId = n;
  },
  f = (e, t, n, r) => {
    g(e)
      ? u(e(r), t, n, r)
      : (null === t.validators && (t.validators = []),
        t.validators.push(
          ((e, t) => ({ classGroupId: e, validator: t }))(n, e),
        ));
  },
  h = (e, t, n, r) => {
    const o = Object.entries(e),
      i = o.length;
    for (let e = 0; e < i; e++) {
      const [i, a] = o[e];
      u(a, m(t, i), n, r);
    }
  },
  m = (e, t) => {
    let o = e;
    const i = t.split(r),
      a = i.length;
    for (let e = 0; e < a; e++) {
      const t = i[e];
      let r = o.nextPart.get(t);
      r || ((r = n()), o.nextPart.set(t, r)), (o = r);
    }
    return o;
  },
  g = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
  y = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null);
    const o = (o, i) => {
      (n[o] = i), t++, t > e && ((t = 0), (r = n), (n = Object.create(null)));
    };
    return {
      get(e) {
        let t = n[e];
        return void 0 !== t ? t : void 0 !== (t = r[e]) ? (o(e, t), t) : void 0;
      },
      set(e, t) {
        e in n ? (n[e] = t) : o(e, t);
      },
    };
  },
  v = [],
  b = (e, t, n, r, o) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: o,
  }),
  S = (e) => {
    const { prefix: t, experimentalParseClassName: n } = e;
    let r = (e) => {
      const t = [];
      let n,
        r = 0,
        o = 0,
        i = 0;
      const a = e.length;
      for (let s = 0; s < a; s++) {
        const a = e[s];
        if (0 === r && 0 === o) {
          if (":" === a) {
            t.push(e.slice(i, s)), (i = s + 1);
            continue;
          }
          if ("/" === a) {
            n = s;
            continue;
          }
        }
        "[" === a ? r++ : "]" === a ? r-- : "(" === a ? o++ : ")" === a && o--;
      }
      const s = 0 === t.length ? e : e.slice(i);
      let l = s,
        c = !1;
      return (
        s.endsWith("!")
          ? ((l = s.slice(0, -1)), (c = !0))
          : s.startsWith("!") && ((l = s.slice(1)), (c = !0)),
        b(t, c, l, n && n > i ? n - i : void 0)
      );
    };
    if (t) {
      const e = t + ":",
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : b(v, !1, t, void 0, !0);
    }
    if (n) {
      const e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  _ = (e) => {
    const t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        const n = [];
        let r = [];
        for (let o = 0; o < e.length; o++) {
          const i = e[o],
            a = "[" === i[0],
            s = t.has(i);
          a || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(i))
            : r.push(i);
        }
        return r.length > 0 && (r.sort(), n.push(...r)), n;
      }
    );
  },
  x = (e) => {
    const t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  w = /\s+/,
  E = (...e) => {
    let t,
      n,
      r = 0,
      o = "";
    for (; r < e.length; )
      (t = e[r++]) && (n = T(t)) && (o && (o += " "), (o += n));
    return o;
  },
  T = (e) => {
    if ("string" == typeof e) return e;
    let t,
      n = "";
    for (let r = 0; r < e.length; r++)
      e[r] && (t = T(e[r])) && (n && (n += " "), (n += t));
    return n;
  },
  k = (e, ...t) => {
    let n, r, o, a;
    const s = (e) => {
      const t = r(e);
      if (t) return t;
      const i = ((e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o,
            sortModifiers: i,
            postfixLookupClassGroupIds: a,
          } = t,
          s = [],
          l = e.trim().split(w);
        let c = "";
        for (let e = l.length - 1; e >= 0; e -= 1) {
          const t = l[e],
            {
              isExternal: u,
              modifiers: d,
              hasImportantModifier: p,
              baseClassName: f,
              maybePostfixModifierPosition: h,
            } = n(t);
          if (u) {
            c = t + (c.length > 0 ? " " + c : c);
            continue;
          }
          let m,
            g = !!h;
          if (g) {
            m = r(f.substring(0, h));
            const e = m && a[m] ? r(f) : void 0;
            e && e !== m && ((m = e), (g = !1));
          } else m = r(f);
          if (!m) {
            if (!g) {
              c = t + (c.length > 0 ? " " + c : c);
              continue;
            }
            if (((m = r(f)), !m)) {
              c = t + (c.length > 0 ? " " + c : c);
              continue;
            }
            g = !1;
          }
          const y =
              0 === d.length ? "" : 1 === d.length ? d[0] : i(d).join(":"),
            v = p ? y + "!" : y,
            b = v + m;
          if (s.indexOf(b) > -1) continue;
          s.push(b);
          const S = o(m, g);
          for (let e = 0; e < S.length; ++e) {
            const t = S[e];
            s.push(v + t);
          }
          c = t + (c.length > 0 ? " " + c : c);
        }
        return c;
      })(e, n);
      return o(e, i), i;
    };
    return (
      (a = (l) => {
        const c = t.reduce((e, t) => t(e), e());
        return (
          (n = ((e) => ({
            cache: y(e.cacheSize),
            parseClassName: S(e),
            sortModifiers: _(e),
            postfixLookupClassGroupIds: x(e),
            ...i(e),
          }))(c)),
          (r = n.cache.get),
          (o = n.cache.set),
          (a = s),
          s(l)
        );
      }),
      (...e) => a(E(...e))
    );
  },
  C = [],
  I = (e) => {
    const t = (t) => t[e] || C;
    return (t.isThemeGetter = !0), t;
  },
  A = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  O = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  R = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  M = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  P =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  N = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  D = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  j =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  L = (e) => R.test(e),
  F = (e) => !!e && !Number.isNaN(Number(e)),
  U = (e) => !!e && Number.isInteger(Number(e)),
  B = (e) => e.endsWith("%") && F(e.slice(0, -1)),
  z = (e) => M.test(e),
  H = () => !0,
  V = (e) => P.test(e) && !N.test(e),
  q = () => !1,
  G = (e) => D.test(e),
  W = (e) => j.test(e),
  $ = (e) => !Z(e) && !oe(e),
  Y = (e) =>
    e.startsWith("@container") &&
    (("/" === e[10] && void 0 !== e[11]) ||
      ("s" === e[11] && void 0 !== e[16] && e.startsWith("-size/", 10)) ||
      ("n" === e[11] && void 0 !== e[18] && e.startsWith("-normal/", 10))),
  K = (e) => pe(e, ge, q),
  Z = (e) => A.test(e),
  Q = (e) => pe(e, ye, V),
  J = (e) => pe(e, ve, F),
  X = (e) => pe(e, Se, H),
  ee = (e) => pe(e, be, q),
  te = (e) => pe(e, he, q),
  ne = (e) => pe(e, me, W),
  re = (e) => pe(e, _e, G),
  oe = (e) => O.test(e),
  ie = (e) => fe(e, ye),
  ae = (e) => fe(e, be),
  se = (e) => fe(e, he),
  le = (e) => fe(e, ge),
  ce = (e) => fe(e, me),
  ue = (e) => fe(e, _e, !0),
  de = (e) => fe(e, Se, !0),
  pe = (e, t, n) => {
    const r = A.exec(e);
    return !!r && (r[1] ? t(r[1]) : n(r[2]));
  },
  fe = (e, t, n = !1) => {
    const r = O.exec(e);
    return !!r && (r[1] ? t(r[1]) : n);
  },
  he = (e) => "position" === e || "percentage" === e,
  me = (e) => "image" === e || "url" === e,
  ge = (e) => "length" === e || "size" === e || "bg-size" === e,
  ye = (e) => "length" === e,
  ve = (e) => "number" === e,
  be = (e) => "family-name" === e,
  Se = (e) => "number" === e || "weight" === e,
  _e = (e) => "shadow" === e,
  xe = Object.defineProperty(
    {
      __proto__: null,
      isAny: H,
      isAnyNonArbitrary: $,
      isArbitraryFamilyName: ee,
      isArbitraryImage: ne,
      isArbitraryLength: Q,
      isArbitraryNumber: J,
      isArbitraryPosition: te,
      isArbitraryShadow: re,
      isArbitrarySize: K,
      isArbitraryValue: Z,
      isArbitraryVariable: oe,
      isArbitraryVariableFamilyName: ae,
      isArbitraryVariableImage: ce,
      isArbitraryVariableLength: ie,
      isArbitraryVariablePosition: se,
      isArbitraryVariableShadow: ue,
      isArbitraryVariableSize: le,
      isArbitraryVariableWeight: de,
      isArbitraryWeight: X,
      isFraction: L,
      isInteger: U,
      isNamedContainerQuery: Y,
      isNumber: F,
      isPercent: B,
      isTshirtSize: z,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
  we = () => {
    const e = I("color"),
      t = I("font"),
      n = I("text"),
      r = I("font-weight"),
      o = I("tracking"),
      i = I("leading"),
      a = I("breakpoint"),
      s = I("container"),
      l = I("spacing"),
      c = I("radius"),
      u = I("shadow"),
      d = I("inset-shadow"),
      p = I("text-shadow"),
      f = I("drop-shadow"),
      h = I("blur"),
      m = I("perspective"),
      g = I("aspect"),
      y = I("ease"),
      v = I("animate"),
      b = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
        oe,
        Z,
      ],
      S = () => [oe, Z, l],
      _ = () => [L, "full", "auto", ...S()],
      x = () => [U, "none", "subgrid", oe, Z],
      w = () => ["auto", { span: ["full", U, oe, Z] }, U, oe, Z],
      E = () => [U, "auto", oe, Z],
      T = () => ["auto", "min", "max", "fr", oe, Z],
      k = () => ["auto", ...S()],
      C = () => [
        L,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...S(),
      ],
      A = () => [
        L,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...S(),
      ],
      O = () => [
        L,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...S(),
      ],
      R = () => [e, oe, Z],
      M = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
        se,
        te,
        { position: [oe, Z] },
      ],
      P = () => ["auto", "cover", "contain", le, K, { size: [oe, Z] }],
      N = () => [B, ie, Q],
      D = () => ["", "none", "full", c, oe, Z],
      j = () => ["", F, ie, Q],
      V = () => [F, B, se, te],
      q = () => ["", "none", h, oe, Z],
      G = () => ["none", F, oe, Z],
      W = () => ["none", F, oe, Z],
      pe = () => [F, oe, Z],
      fe = () => [L, "full", ...S()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [z],
        breakpoint: [z],
        color: [H],
        container: [z],
        "drop-shadow": [z],
        ease: ["in", "out", "in-out"],
        font: [$],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [z],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [z],
        shadow: [z],
        spacing: ["px", F],
        text: [z],
        "text-shadow": [z],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", L, Z, oe, g] }],
        container: ["container"],
        "container-type": [{ "@container": ["", "normal", "size", oe, Z] }],
        "container-named": [Y],
        columns: [{ columns: [F, Z, oe, s] }],
        "break-after": [
          {
            "break-after": [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
          },
        ],
        "break-before": [
          {
            "break-before": [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
          },
        ],
        "break-inside": [
          {
            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
          },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [
          {
            clear: ["left", "right", "both", "none", "start", "end"],
          },
        ],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          {
            object: ["contain", "cover", "fill", "none", "scale-down"],
          },
        ],
        "object-position": [{ object: b() }],
        overflow: [
          {
            overflow: ["auto", "hidden", "clip", "visible", "scroll"],
          },
        ],
        "overflow-x": [
          {
            "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"],
          },
        ],
        "overflow-y": [
          {
            "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"],
          },
        ],
        overscroll: [{ overscroll: ["auto", "contain", "none"] }],
        "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
        "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: _() }],
        "inset-x": [{ "inset-x": _() }],
        "inset-y": [{ "inset-y": _() }],
        start: [{ "inset-s": _(), start: _() }],
        end: [{ "inset-e": _(), end: _() }],
        "inset-bs": [{ "inset-bs": _() }],
        "inset-be": [{ "inset-be": _() }],
        top: [{ top: _() }],
        right: [{ right: _() }],
        bottom: [{ bottom: _() }],
        left: [{ left: _() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [U, "auto", oe, Z] }],
        basis: [{ basis: [L, "full", "auto", s, ...S()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [F, L, "auto", "initial", "none", Z] }],
        grow: [{ grow: ["", F, oe, Z] }],
        shrink: [{ shrink: ["", F, oe, Z] }],
        order: [{ order: [U, "first", "last", "none", oe, Z] }],
        "grid-cols": [{ "grid-cols": x() }],
        "col-start-end": [{ col: w() }],
        "col-start": [{ "col-start": E() }],
        "col-end": [{ "col-end": E() }],
        "grid-rows": [{ "grid-rows": x() }],
        "row-start-end": [{ row: w() }],
        "row-start": [{ "row-start": E() }],
        "row-end": [{ "row-end": E() }],
        "grid-flow": [
          {
            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
          },
        ],
        "auto-cols": [{ "auto-cols": T() }],
        "auto-rows": [{ "auto-rows": T() }],
        gap: [{ gap: S() }],
        "gap-x": [{ "gap-x": S() }],
        "gap-y": [{ "gap-y": S() }],
        "justify-content": [
          {
            justify: [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
              "baseline",
              "center-safe",
              "end-safe",
              "normal",
            ],
          },
        ],
        "justify-items": [
          {
            "justify-items": [
              "start",
              "end",
              "center",
              "stretch",
              "center-safe",
              "end-safe",
              "normal",
            ],
          },
        ],
        "justify-self": [
          {
            "justify-self": [
              "auto",
              "start",
              "end",
              "center",
              "stretch",
              "center-safe",
              "end-safe",
            ],
          },
        ],
        "align-content": [
          {
            content: [
              "normal",
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
              "baseline",
              "center-safe",
              "end-safe",
            ],
          },
        ],
        "align-items": [
          {
            items: [
              "start",
              "end",
              "center",
              "stretch",
              "center-safe",
              "end-safe",
              { baseline: ["", "last"] },
            ],
          },
        ],
        "align-self": [
          {
            self: [
              "auto",
              "start",
              "end",
              "center",
              "stretch",
              "center-safe",
              "end-safe",
              { baseline: ["", "last"] },
            ],
          },
        ],
        "place-content": [
          {
            "place-content": [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
              "baseline",
              "center-safe",
              "end-safe",
            ],
          },
        ],
        "place-items": [
          {
            "place-items": [
              "start",
              "end",
              "center",
              "stretch",
              "center-safe",
              "end-safe",
              "baseline",
            ],
          },
        ],
        "place-self": [
          {
            "place-self": [
              "auto",
              "start",
              "end",
              "center",
              "stretch",
              "center-safe",
              "end-safe",
            ],
          },
        ],
        p: [{ p: S() }],
        px: [{ px: S() }],
        py: [{ py: S() }],
        ps: [{ ps: S() }],
        pe: [{ pe: S() }],
        pbs: [{ pbs: S() }],
        pbe: [{ pbe: S() }],
        pt: [{ pt: S() }],
        pr: [{ pr: S() }],
        pb: [{ pb: S() }],
        pl: [{ pl: S() }],
        m: [{ m: k() }],
        mx: [{ mx: k() }],
        my: [{ my: k() }],
        ms: [{ ms: k() }],
        me: [{ me: k() }],
        mbs: [{ mbs: k() }],
        mbe: [{ mbe: k() }],
        mt: [{ mt: k() }],
        mr: [{ mr: k() }],
        mb: [{ mb: k() }],
        ml: [{ ml: k() }],
        "space-x": [{ "space-x": S() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": S() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: C() }],
        "inline-size": [{ inline: ["auto", ...A()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...A()] }],
        "max-inline-size": [{ "max-inline": ["none", ...A()] }],
        "block-size": [{ block: ["auto", ...O()] }],
        "min-block-size": [{ "min-block": ["auto", ...O()] }],
        "max-block-size": [{ "max-block": ["none", ...O()] }],
        w: [{ w: [s, "screen", ...C()] }],
        "min-w": [{ "min-w": [s, "screen", "none", ...C()] }],
        "max-w": [
          {
            "max-w": [s, "screen", "none", "prose", { screen: [a] }, ...C()],
          },
        ],
        h: [{ h: ["screen", "lh", ...C()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...C()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...C()] }],
        "font-size": [{ text: ["base", n, ie, Q] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, de, X] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              B,
              Z,
            ],
          },
        ],
        "font-family": [{ font: [ae, ee, t] }],
        "font-features": [{ "font-features": [Z] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [o, oe, Z] }],
        "line-clamp": [{ "line-clamp": [F, "none", oe, J] }],
        leading: [{ leading: [i, ...S()] }],
        "list-image": [{ "list-image": ["none", oe, Z] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", oe, Z] }],
        "text-alignment": [
          {
            text: ["left", "center", "right", "justify", "start", "end"],
          },
        ],
        "placeholder-color": [{ placeholder: R() }],
        "text-color": [{ text: R() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [
          {
            decoration: ["solid", "dashed", "dotted", "double", "wavy"],
          },
        ],
        "text-decoration-thickness": [
          { decoration: [F, "from-font", "auto", oe, Q] },
        ],
        "text-decoration-color": [{ decoration: R() }],
        "underline-offset": [{ "underline-offset": [F, "auto", oe, Z] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: S() }],
        "tab-size": [{ tab: [U, oe, Z] }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              oe,
              Z,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", oe, Z] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: M() }],
        "bg-repeat": [
          {
            bg: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
          },
        ],
        "bg-size": [{ bg: P() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  {
                    to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  U,
                  oe,
                  Z,
                ],
                radial: ["", oe, Z],
                conic: [U, oe, Z],
              },
              ce,
              ne,
            ],
          },
        ],
        "bg-color": [{ bg: R() }],
        "gradient-from-pos": [{ from: N() }],
        "gradient-via-pos": [{ via: N() }],
        "gradient-to-pos": [{ to: N() }],
        "gradient-from": [{ from: R() }],
        "gradient-via": [{ via: R() }],
        "gradient-to": [{ to: R() }],
        rounded: [{ rounded: D() }],
        "rounded-s": [{ "rounded-s": D() }],
        "rounded-e": [{ "rounded-e": D() }],
        "rounded-t": [{ "rounded-t": D() }],
        "rounded-r": [{ "rounded-r": D() }],
        "rounded-b": [{ "rounded-b": D() }],
        "rounded-l": [{ "rounded-l": D() }],
        "rounded-ss": [{ "rounded-ss": D() }],
        "rounded-se": [{ "rounded-se": D() }],
        "rounded-ee": [{ "rounded-ee": D() }],
        "rounded-es": [{ "rounded-es": D() }],
        "rounded-tl": [{ "rounded-tl": D() }],
        "rounded-tr": [{ "rounded-tr": D() }],
        "rounded-br": [{ "rounded-br": D() }],
        "rounded-bl": [{ "rounded-bl": D() }],
        "border-w": [{ border: j() }],
        "border-w-x": [{ "border-x": j() }],
        "border-w-y": [{ "border-y": j() }],
        "border-w-s": [{ "border-s": j() }],
        "border-w-e": [{ "border-e": j() }],
        "border-w-bs": [{ "border-bs": j() }],
        "border-w-be": [{ "border-be": j() }],
        "border-w-t": [{ "border-t": j() }],
        "border-w-r": [{ "border-r": j() }],
        "border-w-b": [{ "border-b": j() }],
        "border-w-l": [{ "border-l": j() }],
        "divide-x": [{ "divide-x": j() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": j() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [
          {
            border: ["solid", "dashed", "dotted", "double", "hidden", "none"],
          },
        ],
        "divide-style": [
          {
            divide: ["solid", "dashed", "dotted", "double", "hidden", "none"],
          },
        ],
        "border-color": [{ border: R() }],
        "border-color-x": [{ "border-x": R() }],
        "border-color-y": [{ "border-y": R() }],
        "border-color-s": [{ "border-s": R() }],
        "border-color-e": [{ "border-e": R() }],
        "border-color-bs": [{ "border-bs": R() }],
        "border-color-be": [{ "border-be": R() }],
        "border-color-t": [{ "border-t": R() }],
        "border-color-r": [{ "border-r": R() }],
        "border-color-b": [{ "border-b": R() }],
        "border-color-l": [{ "border-l": R() }],
        "divide-color": [{ divide: R() }],
        "outline-style": [
          {
            outline: ["solid", "dashed", "dotted", "double", "none", "hidden"],
          },
        ],
        "outline-offset": [{ "outline-offset": [F, oe, Z] }],
        "outline-w": [{ outline: ["", F, ie, Q] }],
        "outline-color": [{ outline: R() }],
        shadow: [{ shadow: ["", "none", u, ue, re] }],
        "shadow-color": [{ shadow: R() }],
        "inset-shadow": [{ "inset-shadow": ["none", d, ue, re] }],
        "inset-shadow-color": [{ "inset-shadow": R() }],
        "ring-w": [{ ring: j() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: R() }],
        "ring-offset-w": [{ "ring-offset": [F, Q] }],
        "ring-offset-color": [{ "ring-offset": R() }],
        "inset-ring-w": [{ "inset-ring": j() }],
        "inset-ring-color": [{ "inset-ring": R() }],
        "text-shadow": [{ "text-shadow": ["none", p, ue, re] }],
        "text-shadow-color": [{ "text-shadow": R() }],
        opacity: [{ opacity: [F, oe, Z] }],
        "mix-blend": [
          {
            "mix-blend": [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
              "plus-darker",
              "plus-lighter",
            ],
          },
        ],
        "bg-blend": [
          {
            "bg-blend": [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
          },
        ],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [F] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": V() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": V() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": R() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": R() }],
        "mask-image-t-from-pos": [{ "mask-t-from": V() }],
        "mask-image-t-to-pos": [{ "mask-t-to": V() }],
        "mask-image-t-from-color": [{ "mask-t-from": R() }],
        "mask-image-t-to-color": [{ "mask-t-to": R() }],
        "mask-image-r-from-pos": [{ "mask-r-from": V() }],
        "mask-image-r-to-pos": [{ "mask-r-to": V() }],
        "mask-image-r-from-color": [{ "mask-r-from": R() }],
        "mask-image-r-to-color": [{ "mask-r-to": R() }],
        "mask-image-b-from-pos": [{ "mask-b-from": V() }],
        "mask-image-b-to-pos": [{ "mask-b-to": V() }],
        "mask-image-b-from-color": [{ "mask-b-from": R() }],
        "mask-image-b-to-color": [{ "mask-b-to": R() }],
        "mask-image-l-from-pos": [{ "mask-l-from": V() }],
        "mask-image-l-to-pos": [{ "mask-l-to": V() }],
        "mask-image-l-from-color": [{ "mask-l-from": R() }],
        "mask-image-l-to-color": [{ "mask-l-to": R() }],
        "mask-image-x-from-pos": [{ "mask-x-from": V() }],
        "mask-image-x-to-pos": [{ "mask-x-to": V() }],
        "mask-image-x-from-color": [{ "mask-x-from": R() }],
        "mask-image-x-to-color": [{ "mask-x-to": R() }],
        "mask-image-y-from-pos": [{ "mask-y-from": V() }],
        "mask-image-y-to-pos": [{ "mask-y-to": V() }],
        "mask-image-y-from-color": [{ "mask-y-from": R() }],
        "mask-image-y-to-color": [{ "mask-y-to": R() }],
        "mask-image-radial": [{ "mask-radial": [oe, Z] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": V() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": V() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": R() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": R() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              {
                closest: ["side", "corner"],
                farthest: ["side", "corner"],
              },
            ],
          },
        ],
        "mask-image-radial-pos": [
          {
            "mask-radial-at": [
              "center",
              "top",
              "bottom",
              "left",
              "right",
              "top-left",
              "left-top",
              "top-right",
              "right-top",
              "bottom-right",
              "right-bottom",
              "bottom-left",
              "left-bottom",
            ],
          },
        ],
        "mask-image-conic-pos": [{ "mask-conic": [F] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": V() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": V() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": R() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": R() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: M() }],
        "mask-repeat": [
          {
            mask: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
          },
        ],
        "mask-size": [{ mask: P() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", oe, Z] }],
        filter: [{ filter: ["", "none", oe, Z] }],
        blur: [{ blur: q() }],
        brightness: [{ brightness: [F, oe, Z] }],
        contrast: [{ contrast: [F, oe, Z] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", f, ue, re] }],
        "drop-shadow-color": [{ "drop-shadow": R() }],
        grayscale: [{ grayscale: ["", F, oe, Z] }],
        "hue-rotate": [{ "hue-rotate": [F, oe, Z] }],
        invert: [{ invert: ["", F, oe, Z] }],
        saturate: [{ saturate: [F, oe, Z] }],
        sepia: [{ sepia: ["", F, oe, Z] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", oe, Z] }],
        "backdrop-blur": [{ "backdrop-blur": q() }],
        "backdrop-brightness": [{ "backdrop-brightness": [F, oe, Z] }],
        "backdrop-contrast": [{ "backdrop-contrast": [F, oe, Z] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", F, oe, Z] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [F, oe, Z] }],
        "backdrop-invert": [{ "backdrop-invert": ["", F, oe, Z] }],
        "backdrop-opacity": [{ "backdrop-opacity": [F, oe, Z] }],
        "backdrop-saturate": [{ "backdrop-saturate": [F, oe, Z] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", F, oe, Z] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": S() }],
        "border-spacing-x": [{ "border-spacing-x": S() }],
        "border-spacing-y": [{ "border-spacing-y": S() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              oe,
              Z,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [F, "initial", oe, Z] }],
        ease: [{ ease: ["linear", "initial", y, oe, Z] }],
        delay: [{ delay: [F, oe, Z] }],
        animate: [{ animate: ["none", v, oe, Z] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [m, oe, Z] }],
        "perspective-origin": [{ "perspective-origin": b() }],
        rotate: [{ rotate: G() }],
        "rotate-x": [{ "rotate-x": G() }],
        "rotate-y": [{ "rotate-y": G() }],
        "rotate-z": [{ "rotate-z": G() }],
        scale: [{ scale: W() }],
        "scale-x": [{ "scale-x": W() }],
        "scale-y": [{ "scale-y": W() }],
        "scale-z": [{ "scale-z": W() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: pe() }],
        "skew-x": [{ "skew-x": pe() }],
        "skew-y": [{ "skew-y": pe() }],
        transform: [{ transform: [oe, Z, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: b() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: fe() }],
        "translate-x": [{ "translate-x": fe() }],
        "translate-y": [{ "translate-y": fe() }],
        "translate-z": [{ "translate-z": fe() }],
        "translate-none": ["translate-none"],
        zoom: [{ zoom: [U, oe, Z] }],
        accent: [{ accent: R() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: R() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              oe,
              Z,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": R() }],
        "scrollbar-track-color": [{ "scrollbar-track": R() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": ["auto", "stable", "both"] },
        ],
        "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
        "scroll-m": [{ "scroll-m": S() }],
        "scroll-mx": [{ "scroll-mx": S() }],
        "scroll-my": [{ "scroll-my": S() }],
        "scroll-ms": [{ "scroll-ms": S() }],
        "scroll-me": [{ "scroll-me": S() }],
        "scroll-mbs": [{ "scroll-mbs": S() }],
        "scroll-mbe": [{ "scroll-mbe": S() }],
        "scroll-mt": [{ "scroll-mt": S() }],
        "scroll-mr": [{ "scroll-mr": S() }],
        "scroll-mb": [{ "scroll-mb": S() }],
        "scroll-ml": [{ "scroll-ml": S() }],
        "scroll-p": [{ "scroll-p": S() }],
        "scroll-px": [{ "scroll-px": S() }],
        "scroll-py": [{ "scroll-py": S() }],
        "scroll-ps": [{ "scroll-ps": S() }],
        "scroll-pe": [{ "scroll-pe": S() }],
        "scroll-pbs": [{ "scroll-pbs": S() }],
        "scroll-pbe": [{ "scroll-pbe": S() }],
        "scroll-pt": [{ "scroll-pt": S() }],
        "scroll-pr": [{ "scroll-pr": S() }],
        "scroll-pb": [{ "scroll-pb": S() }],
        "scroll-pl": [{ "scroll-pl": S() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", oe, Z],
          },
        ],
        fill: [{ fill: ["none", ...R()] }],
        "stroke-w": [{ stroke: [F, ie, Q, J] }],
        stroke: [{ stroke: ["none", ...R()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        "container-named": ["container-type"],
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      postfixLookupClassGroups: ["container-type"],
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  Ee = (
    e,
    {
      cacheSize: t,
      prefix: n,
      experimentalParseClassName: r,
      extend: o = {},
      override: i = {},
    },
  ) => (
    Te(e, "cacheSize", t),
    Te(e, "prefix", n),
    Te(e, "experimentalParseClassName", r),
    ke(e.theme, i.theme),
    ke(e.classGroups, i.classGroups),
    ke(e.conflictingClassGroups, i.conflictingClassGroups),
    ke(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers),
    Te(e, "postfixLookupClassGroups", i.postfixLookupClassGroups),
    Te(e, "orderSensitiveModifiers", i.orderSensitiveModifiers),
    Ce(e.theme, o.theme),
    Ce(e.classGroups, o.classGroups),
    Ce(e.conflictingClassGroups, o.conflictingClassGroups),
    Ce(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers),
    Ie(e, o, "postfixLookupClassGroups"),
    Ie(e, o, "orderSensitiveModifiers"),
    e
  ),
  Te = (e, t, n) => {
    void 0 !== n && (e[t] = n);
  },
  ke = (e, t) => {
    if (t) for (const n in t) Te(e, n, t[n]);
  },
  Ce = (e, t) => {
    if (t) for (const n in t) Ie(e, t, n);
  },
  Ie = (e, t, n) => {
    const r = t[n];
    void 0 !== r && (e[n] = e[n] ? e[n].concat(r) : r);
  },
  Ae = k(we);
(t.createTailwindMerge = k),
  (t.extendTailwindMerge = (e, ...t) =>
    "function" == typeof e ? k(we, e, ...t) : k(() => Ee(we(), e), ...t)),
  (t.fromTheme = I),
  (t.getDefaultConfig = we),
  (t.mergeConfigs = Ee),
  (t.twJoin = E),
  (t.twMerge = Ae),
  (t.validators = xe);
