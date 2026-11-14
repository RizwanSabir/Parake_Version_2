// vendor/other/module-88041.js — webpack module 88041
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(20566 /* vendor/other/module-20566 */),
  o = n(21627 /* vendor/other/module-21627 */),
  { ANY: i } = o,
  s = n(59091 /* vendor/other/module-59091 */),
  a = n(78957 /* vendor/other/module-78957 */),
  c = [new o(">=0.0.0-0")],
  u = [new o(">=0.0.0")],
  l = (e, t, n) => {
    if (e === t) return !0;
    if (1 === e.length && e[0].semver === i) {
      if (1 === t.length && t[0].semver === i) return !0;
      e = n.includePrerelease ? c : u;
    }
    if (1 === t.length && t[0].semver === i) {
      if (n.includePrerelease) return !0;
      t = u;
    }
    const r = new Set();
    let o, l, f, h, g, m, _;
    for (const t of e)
      ">" === t.operator || ">=" === t.operator
        ? (o = d(o, t, n))
        : "<" === t.operator || "<=" === t.operator
          ? (l = p(l, t, n))
          : r.add(t.semver);
    if (r.size > 1) return null;
    if (o && l) {
      if (((f = a(o.semver, l.semver, n)), f > 0)) return null;
      if (0 === f && (">=" !== o.operator || "<=" !== l.operator)) return null;
    }
    for (const e of r) {
      if (o && !s(e, String(o), n)) return null;
      if (l && !s(e, String(l), n)) return null;
      for (const r of t) if (!s(e, String(r), n)) return !1;
      return !0;
    }
    let S =
        !(!l || n.includePrerelease || !l.semver.prerelease.length) && l.semver,
      E =
        !(!o || n.includePrerelease || !o.semver.prerelease.length) && o.semver;
    S &&
      1 === S.prerelease.length &&
      "<" === l.operator &&
      0 === S.prerelease[0] &&
      (S = !1);
    for (const e of t) {
      if (
        ((_ = _ || ">" === e.operator || ">=" === e.operator),
        (m = m || "<" === e.operator || "<=" === e.operator),
        o)
      )
        if (
          (E &&
            e.semver.prerelease &&
            e.semver.prerelease.length &&
            e.semver.major === E.major &&
            e.semver.minor === E.minor &&
            e.semver.patch === E.patch &&
            (E = !1),
          ">" === e.operator || ">=" === e.operator)
        ) {
          if (((h = d(o, e, n)), h === e && h !== o)) return !1;
        } else if (">=" === o.operator && !s(o.semver, String(e), n)) return !1;
      if (l)
        if (
          (S &&
            e.semver.prerelease &&
            e.semver.prerelease.length &&
            e.semver.major === S.major &&
            e.semver.minor === S.minor &&
            e.semver.patch === S.patch &&
            (S = !1),
          "<" === e.operator || "<=" === e.operator)
        ) {
          if (((g = p(l, e, n)), g === e && g !== l)) return !1;
        } else if ("<=" === l.operator && !s(l.semver, String(e), n)) return !1;
      if (!e.operator && (l || o) && 0 !== f) return !1;
    }
    return !((o && m && !l && 0 !== f) || (l && _ && !o && 0 !== f) || E || S);
  },
  d = (e, t, n) => {
    if (!e) return t;
    const r = a(e.semver, t.semver, n);
    return r > 0
      ? e
      : r < 0 || (">" === t.operator && ">=" === e.operator)
        ? t
        : e;
  },
  p = (e, t, n) => {
    if (!e) return t;
    const r = a(e.semver, t.semver, n);
    return r < 0
      ? e
      : r > 0 || ("<" === t.operator && "<=" === e.operator)
        ? t
        : e;
  };
e.exports = (e, t, n = {}) => {
  if (e === t) return !0;
  (e = new r(e, n)), (t = new r(t, n));
  let o = !1;
  e: for (const r of e.set) {
    for (const e of t.set) {
      const t = l(r, e, n);
      if (((o = o || null !== t), t)) continue e;
    }
    if (o) return !1;
  }
  return !0;
};
