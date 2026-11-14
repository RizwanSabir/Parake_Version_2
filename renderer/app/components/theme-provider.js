// app/components/theme-provider.js — webpack module 97867
// params: (e, t, n) = (module, exports, require)
(t.ThemeProvider = function (e) {
  const t = (0, o.c)(33),
    { children: n, scope: d, initialSnapshot: p, store: f, darkOnly: h } = e,
    m = void 0 === f ? a.cookieThemeStore : f,
    g = void 0 !== h && h;
  let y;
  t[0] !== p || t[1] !== m
    ? ((y = () =>
        p ??
        (function (e) {
          const t = {};
          for (const n of a.THEME_SCOPES) {
            const r = e.read(n);
            r && (t[n] = r);
          }
          return t;
        })(m)),
      (t[0] = p),
      (t[1] = m),
      (t[2] = y))
    : (y = t[2]);
  const [v] = (0, i.useState)(y);
  let b;
  t[3] !== v.liveCall?.theme || t[4] !== v.shell?.theme
    ? ((b = () => ({
        shell: v.shell?.theme ?? a.DEFAULT_THEME_SETTINGS.shell,
        liveCall: v.liveCall?.theme ?? a.DEFAULT_THEME_SETTINGS.liveCall,
      })),
      (t[3] = v.liveCall?.theme),
      (t[4] = v.shell?.theme),
      (t[5] = b))
    : (b = t[5]);
  const [S, _] = (0, i.useState)(b);
  let x;
  t[6] !== d || t[7] !== v
    ? ((x = () => (d ? v[d]?.resolved : void 0) ?? "light"),
      (t[6] = d),
      (t[7] = v),
      (t[8] = x))
    : (x = t[8]);
  const [w, E] = (0, i.useState)(x),
    [T, k] = (0, i.useState)(!1),
    [C, I] = (0, i.useState)(null);
  let A, O;
  t[9] === Symbol.for("react.memo_cache_sentinel")
    ? ((A = () => {
        E((0, a.getSystemTheme)()), k(!0);
        const e = window.matchMedia("(prefers-color-scheme: dark)"),
          t = () => E((0, a.getSystemTheme)());
        return (
          e.addEventListener("change", t),
          () => e.removeEventListener("change", t)
        );
      }),
      (O = []),
      (t[9] = A),
      (t[10] = O))
    : ((A = t[9]), (O = t[10])),
    (0, i.useEffect)(A, O);
  const R = C ?? d,
    M = S[R ?? "shell"];
  let P;
  t[11] !== w || t[12] !== M
    ? ((P = (0, a.resolveTheme)(M, w)), (t[11] = w), (t[12] = M), (t[13] = P))
    : (P = t[13]);
  const N = P,
    D = null === R ? "light" : N;
  let j, L;
  t[14] !== D || t[15] !== T
    ? ((L = () => {
        T &&
          (function (e) {
            const t = document.documentElement;
            t.classList.contains(a.DARK_CLASS) !== ("dark" === e) &&
              (t.setAttribute("data-theme-swapping", ""),
              (0, a.applyThemeClass)(e),
              getComputedStyle(t).color,
              requestAnimationFrame(() =>
                t.removeAttribute("data-theme-swapping"),
              ));
          })(D);
      }),
      (j = [D, T]),
      (t[14] = D),
      (t[15] = T),
      (t[16] = j),
      (t[17] = L))
    : ((j = t[16]), (L = t[17])),
    c(L, j);
  const F = S.shell;
  let U;
  t[18] !== S.shell || t[19] !== w
    ? ((U = (0, a.resolveTheme)(S.shell, w)),
      (t[18] = S.shell),
      (t[19] = w),
      (t[20] = U))
    : (U = t[20]),
    u(m, "shell", F, U, T);
  const B = S.liveCall;
  let z, H;
  t[21] !== S.liveCall || t[22] !== w
    ? ((z = (0, a.resolveTheme)(S.liveCall, w)),
      (t[21] = S.liveCall),
      (t[22] = w),
      (t[23] = z))
    : (z = t[23]),
    u(m, "liveCall", B, z, T),
    t[24] === Symbol.for("react.memo_cache_sentinel")
      ? ((H = function (e, t) {
          _((n) => (n[e] === t ? n : { ...n, [e]: t }));
        }),
        (t[24] = H))
      : (H = t[24]);
  const V = H,
    q = g ? "dark" : N;
  let G, W;
  return (
    t[25] !== R || t[26] !== S || t[27] !== q || t[28] !== M
      ? ((G = {
          scope: R,
          theme: M,
          resolvedTheme: q,
          settings: S,
          setScopeTheme: V,
        }),
        (t[25] = R),
        (t[26] = S),
        (t[27] = q),
        (t[28] = M),
        (t[29] = G))
      : (G = t[29]),
    t[30] !== n || t[31] !== G
      ? ((W = (0, r.jsx)(l.Provider, {
          value: I,
          children: (0, r.jsx)(s.Provider, { value: G, children: n }),
        })),
        (t[30] = n),
        (t[31] = G),
        (t[32] = W))
      : (W = t[32]),
    W
  );
}),
  (t.useTheme = d),
  (t.useThemeSetting = function (e) {
    const t = (0, o.c)(6),
      { settings: n, setScopeTheme: r } = d(),
      i = n[e];
    let a, s;
    return (
      t[0] !== e || t[1] !== r
        ? ((a = (t) => r(e, t)), (t[0] = e), (t[1] = r), (t[2] = a))
        : (a = t[2]),
      t[3] !== i || t[4] !== a
        ? ((s = { theme: i, setTheme: a }), (t[3] = i), (t[4] = a), (t[5] = s))
        : (s = t[5]),
      s
    );
  }),
  (t.useThemeScope = function (e) {
    const t = (0, o.c)(4),
      n = (0, i.useContext)(l);
    if (!n)
      throw new Error("useThemeScope must be used within a ThemeProvider");
    let r, a;
    t[0] !== n || t[1] !== e
      ? ((r = () => (n(e), () => n(null))),
        (a = [n, e]),
        (t[0] = n),
        (t[1] = e),
        (t[2] = r),
        (t[3] = a))
      : ((r = t[2]), (a = t[3])),
      c(r, a);
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(42527 /* vendor/module-42527 */),
  s = (0, i.createContext)(null),
  l = (0, i.createContext)(null),
  c = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect;
function u(e, t, n, r, a) {
  const s = (0, o.c)(7);
  let l, c;
  s[0] !== a || s[1] !== r || s[2] !== t || s[3] !== e || s[4] !== n
    ? ((l = () => {
        a && e.write(t, n, r);
      }),
      (c = [e, t, n, r, a]),
      (s[0] = a),
      (s[1] = r),
      (s[2] = t),
      (s[3] = e),
      (s[4] = n),
      (s[5] = l),
      (s[6] = c))
    : ((l = s[5]), (c = s[6])),
    (0, i.useEffect)(l, c);
}
function d() {
  const e = (0, i.useContext)(s);
  if (!e) throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
