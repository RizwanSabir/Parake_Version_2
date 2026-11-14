// vendor/other/module-20566.js — webpack module 20566
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = /\s+/g;
class o {
  constructor(e, t) {
    if (((t = s(t)), e instanceof o))
      return e.loose === !!t.loose &&
        e.includePrerelease === !!t.includePrerelease
        ? e
        : new o(e.raw, t);
    if (e instanceof a)
      return (
        (this.raw = e.value),
        (this.set = [[e]]),
        (this.formatted = void 0),
        this
      );
    if (
      ((this.options = t),
      (this.loose = !!t.loose),
      (this.includePrerelease = !!t.includePrerelease),
      (this.raw = e.trim().replace(r, " ")),
      (this.set = this.raw
        .split("||")
        .map((e) => this.parseRange(e.trim()))
        .filter((e) => e.length)),
      !this.set.length)
    )
      throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
    if (this.set.length > 1) {
      const e = this.set[0];
      if (
        ((this.set = this.set.filter((e) => !_(e[0]))), 0 === this.set.length)
      )
        this.set = [e];
      else if (this.set.length > 1)
        for (const e of this.set)
          if (1 === e.length && S(e[0])) {
            this.set = [e];
            break;
          }
    }
    this.formatted = void 0;
  }
  get range() {
    if (void 0 === this.formatted) {
      this.formatted = "";
      for (let e = 0; e < this.set.length; e++) {
        e > 0 && (this.formatted += "||");
        const t = this.set[e];
        for (let e = 0; e < t.length; e++)
          e > 0 && (this.formatted += " "),
            (this.formatted += t[e].toString().trim());
      }
    }
    return this.formatted;
  }
  format() {
    return this.range;
  }
  toString() {
    return this.range;
  }
  parseRange(e) {
    const t =
        ((this.options.includePrerelease && g) | (this.options.loose && m)) +
        ":" +
        e,
      n = i.get(t);
    if (n) return n;
    const r = this.options.loose,
      o = r ? l[d.HYPHENRANGELOOSE] : l[d.HYPHENRANGE];
    (e = e.replace(o, w(this.options.includePrerelease))),
      c("hyphen replace", e),
      (e = e.replace(l[d.COMPARATORTRIM], p)),
      c("comparator trim", e),
      (e = e.replace(l[d.TILDETRIM], f)),
      c("tilde trim", e),
      (e = e.replace(l[d.CARETTRIM], h)),
      c("caret trim", e);
    let s = e
      .split(" ")
      .map((e) => y(e, this.options))
      .join(" ")
      .split(/\s+/)
      .map((e) => O(e, this.options));
    r &&
      (s = s.filter(
        (e) => (
          c("loose invalid filter", e, this.options),
          !!e.match(l[d.COMPARATORLOOSE])
        ),
      )),
      c("range list", s);
    const u = new Map(),
      S = s.map((e) => new a(e, this.options));
    for (const e of S) {
      if (_(e)) return [e];
      u.set(e.value, e);
    }
    u.size > 1 && u.has("") && u.delete("");
    const E = [...u.values()];
    return i.set(t, E), E;
  }
  intersects(e, t) {
    if (!(e instanceof o)) throw new TypeError("a Range is required");
    return this.set.some(
      (n) =>
        E(n, t) &&
        e.set.some(
          (e) => E(e, t) && n.every((n) => e.every((e) => n.intersects(e, t))),
        ),
    );
  }
  test(e) {
    if (!e) return !1;
    if ("string" == typeof e)
      try {
        e = new u(e, this.options);
      } catch (e) {
        return !1;
      }
    for (let t = 0; t < this.set.length; t++)
      if (k(this.set[t], e, this.options)) return !0;
    return !1;
  }
}
e.exports = o;
const i = new (n(62927 /* vendor/other/module-62927 */))(),
  s = n(40284 /* vendor/other/module-40284 */),
  a = n(21627 /* vendor/other/module-21627 */),
  c = n(16287 /* vendor/other/module-16287 */),
  u = n(38707 /* vendor/other/module-38707 */),
  {
    safeRe: l,
    t: d,
    comparatorTrimReplace: p,
    tildeTrimReplace: f,
    caretTrimReplace: h,
  } = n(50167 /* vendor/other/module-50167 */),
  { FLAG_INCLUDE_PRERELEASE: g, FLAG_LOOSE: m } = n(
    62101 /* vendor/other/module-62101 */,
  ),
  _ = (e) => "<0.0.0-0" === e.value,
  S = (e) => "" === e.value,
  E = (e, t) => {
    let n = !0;
    const r = e.slice();
    let o = r.pop();
    for (; n && r.length; )
      (n = r.every((e) => o.intersects(e, t))), (o = r.pop());
    return n;
  },
  y = (e, t) => (
    (e = e.replace(l[d.BUILD], "")),
    c("comp", e, t),
    (e = v(e, t)),
    c("caret", e),
    (e = b(e, t)),
    c("tildes", e),
    (e = N(e, t)),
    c("xrange", e),
    (e = C(e, t)),
    c("stars", e),
    e
  ),
  T = (e) => !e || "x" === e.toLowerCase() || "*" === e,
  b = (e, t) =>
    e
      .trim()
      .split(/\s+/)
      .map((e) => I(e, t))
      .join(" "),
  I = (e, t) => {
    const n = t.loose ? l[d.TILDELOOSE] : l[d.TILDE];
    return e.replace(n, (t, n, r, o, i) => {
      let s;
      return (
        c("tilde", e, t, n, r, o, i),
        T(n)
          ? (s = "")
          : T(r)
            ? (s = `>=${n}.0.0 <${+n + 1}.0.0-0`)
            : T(o)
              ? (s = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0`)
              : i
                ? (c("replaceTilde pr", i),
                  (s = `>=${n}.${r}.${o}-${i} <${n}.${+r + 1}.0-0`))
                : (s = `>=${n}.${r}.${o} <${n}.${+r + 1}.0-0`),
        c("tilde return", s),
        s
      );
    });
  },
  v = (e, t) =>
    e
      .trim()
      .split(/\s+/)
      .map((e) => A(e, t))
      .join(" "),
  A = (e, t) => {
    c("caret", e, t);
    const n = t.loose ? l[d.CARETLOOSE] : l[d.CARET],
      r = t.includePrerelease ? "-0" : "";
    return e.replace(n, (t, n, o, i, s) => {
      let a;
      return (
        c("caret", e, t, n, o, i, s),
        T(n)
          ? (a = "")
          : T(o)
            ? (a = `>=${n}.0.0${r} <${+n + 1}.0.0-0`)
            : T(i)
              ? (a =
                  "0" === n
                    ? `>=${n}.${o}.0${r} <${n}.${+o + 1}.0-0`
                    : `>=${n}.${o}.0${r} <${+n + 1}.0.0-0`)
              : s
                ? (c("replaceCaret pr", s),
                  (a =
                    "0" === n
                      ? "0" === o
                        ? `>=${n}.${o}.${i}-${s} <${n}.${o}.${+i + 1}-0`
                        : `>=${n}.${o}.${i}-${s} <${n}.${+o + 1}.0-0`
                      : `>=${n}.${o}.${i}-${s} <${+n + 1}.0.0-0`))
                : (c("no pr"),
                  (a =
                    "0" === n
                      ? "0" === o
                        ? `>=${n}.${o}.${i}${r} <${n}.${o}.${+i + 1}-0`
                        : `>=${n}.${o}.${i}${r} <${n}.${+o + 1}.0-0`
                      : `>=${n}.${o}.${i} <${+n + 1}.0.0-0`)),
        c("caret return", a),
        a
      );
    });
  },
  N = (e, t) => (
    c("replaceXRanges", e, t),
    e
      .split(/\s+/)
      .map((e) => R(e, t))
      .join(" ")
  ),
  R = (e, t) => {
    e = e.trim();
    const n = t.loose ? l[d.XRANGELOOSE] : l[d.XRANGE];
    return e.replace(n, (n, r, o, i, s, a) => {
      c("xRange", e, n, r, o, i, s, a);
      const u = T(o),
        l = u || T(i),
        d = l || T(s),
        p = d;
      return (
        "=" === r && p && (r = ""),
        (a = t.includePrerelease ? "-0" : ""),
        u
          ? (n = ">" === r || "<" === r ? "<0.0.0-0" : "*")
          : r && p
            ? (l && (i = 0),
              (s = 0),
              ">" === r
                ? ((r = ">="),
                  l
                    ? ((o = +o + 1), (i = 0), (s = 0))
                    : ((i = +i + 1), (s = 0)))
                : "<=" === r && ((r = "<"), l ? (o = +o + 1) : (i = +i + 1)),
              "<" === r && (a = "-0"),
              (n = `${r + o}.${i}.${s}${a}`))
            : l
              ? (n = `>=${o}.0.0${a} <${+o + 1}.0.0-0`)
              : d && (n = `>=${o}.${i}.0${a} <${o}.${+i + 1}.0-0`),
        c("xRange return", n),
        n
      );
    });
  },
  C = (e, t) => (c("replaceStars", e, t), e.trim().replace(l[d.STAR], "")),
  O = (e, t) => (
    c("replaceGTE0", e, t),
    e.trim().replace(l[t.includePrerelease ? d.GTE0PRE : d.GTE0], "")
  ),
  w = (e) => (t, n, r, o, i, s, a, c, u, l, d, p) =>
    `${(n = T(r) ? "" : T(o) ? `>=${r}.0.0${e ? "-0" : ""}` : T(i) ? `>=${r}.${o}.0${e ? "-0" : ""}` : s ? `>=${n}` : `>=${n}${e ? "-0" : ""}`)} ${(c = T(u) ? "" : T(l) ? `<${+u + 1}.0.0-0` : T(d) ? `<${u}.${+l + 1}.0-0` : p ? `<=${u}.${l}.${d}-${p}` : e ? `<${u}.${l}.${+d + 1}-0` : `<=${c}`)}`.trim(),
  k = (e, t, n) => {
    for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
    if (t.prerelease.length && !n.includePrerelease) {
      for (let n = 0; n < e.length; n++)
        if (
          (c(e[n].semver),
          e[n].semver !== a.ANY && e[n].semver.prerelease.length > 0)
        ) {
          const r = e[n].semver;
          if (r.major === t.major && r.minor === t.minor && r.patch === t.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
