// vendor/other/module-38707.js — webpack module 38707
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(16287 /* vendor/other/module-16287 */),
  { MAX_LENGTH: o, MAX_SAFE_INTEGER: i } = n(
    62101 /* vendor/other/module-62101 */,
  ),
  { safeRe: s, t: a } = n(50167 /* vendor/other/module-50167 */),
  c = n(40284 /* vendor/other/module-40284 */),
  { compareIdentifiers: u } = n(36188 /* vendor/other/module-36188 */);
class l {
  constructor(e, t) {
    if (((t = c(t)), e instanceof l)) {
      if (
        e.loose === !!t.loose &&
        e.includePrerelease === !!t.includePrerelease
      )
        return e;
      e = e.version;
    } else if ("string" != typeof e)
      throw new TypeError(
        `Invalid version. Must be a string. Got type "${typeof e}".`,
      );
    if (e.length > o)
      throw new TypeError(`version is longer than ${o} characters`);
    r("SemVer", e, t),
      (this.options = t),
      (this.loose = !!t.loose),
      (this.includePrerelease = !!t.includePrerelease);
    const n = e.trim().match(t.loose ? s[a.LOOSE] : s[a.FULL]);
    if (!n) throw new TypeError(`Invalid Version: ${e}`);
    if (
      ((this.raw = e),
      (this.major = +n[1]),
      (this.minor = +n[2]),
      (this.patch = +n[3]),
      this.major > i || this.major < 0)
    )
      throw new TypeError("Invalid major version");
    if (this.minor > i || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > i || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4]
      ? (this.prerelease = n[4].split(".").map((e) => {
          if (/^[0-9]+$/.test(e)) {
            const t = +e;
            if (t >= 0 && t < i) return t;
          }
          return e;
        }))
      : (this.prerelease = []),
      (this.build = n[5] ? n[5].split(".") : []),
      this.format();
  }
  format() {
    return (
      (this.version = `${this.major}.${this.minor}.${this.patch}`),
      this.prerelease.length &&
        (this.version += `-${this.prerelease.join(".")}`),
      this.version
    );
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (
      (r("SemVer.compare", this.version, this.options, e), !(e instanceof l))
    ) {
      if ("string" == typeof e && e === this.version) return 0;
      e = new l(e, this.options);
    }
    return e.version === this.version
      ? 0
      : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return (
      e instanceof l || (e = new l(e, this.options)),
      this.major < e.major
        ? -1
        : this.major > e.major
          ? 1
          : this.minor < e.minor
            ? -1
            : this.minor > e.minor
              ? 1
              : this.patch < e.patch
                ? -1
                : this.patch > e.patch
                  ? 1
                  : 0
    );
  }
  comparePre(e) {
    if (
      (e instanceof l || (e = new l(e, this.options)),
      this.prerelease.length && !e.prerelease.length)
    )
      return -1;
    if (!this.prerelease.length && e.prerelease.length) return 1;
    if (!this.prerelease.length && !e.prerelease.length) return 0;
    let t = 0;
    do {
      const n = this.prerelease[t],
        o = e.prerelease[t];
      if ((r("prerelease compare", t, n, o), void 0 === n && void 0 === o))
        return 0;
      if (void 0 === o) return 1;
      if (void 0 === n) return -1;
      if (n !== o) return u(n, o);
    } while (++t);
  }
  compareBuild(e) {
    e instanceof l || (e = new l(e, this.options));
    let t = 0;
    do {
      const n = this.build[t],
        o = e.build[t];
      if ((r("build compare", t, n, o), void 0 === n && void 0 === o)) return 0;
      if (void 0 === o) return 1;
      if (void 0 === n) return -1;
      if (n !== o) return u(n, o);
    } while (++t);
  }
  inc(e, t, n) {
    if (e.startsWith("pre")) {
      if (!t && !1 === n)
        throw new Error("invalid increment argument: identifier is empty");
      if (t) {
        const e = `-${t}`.match(
          this.options.loose ? s[a.PRERELEASELOOSE] : s[a.PRERELEASE],
        );
        if (!e || e[1] !== t) throw new Error(`invalid identifier: ${t}`);
      }
    }
    switch (e) {
      case "premajor":
        (this.prerelease.length = 0),
          (this.patch = 0),
          (this.minor = 0),
          this.major++,
          this.inc("pre", t, n);
        break;
      case "preminor":
        (this.prerelease.length = 0),
          (this.patch = 0),
          this.minor++,
          this.inc("pre", t, n);
        break;
      case "prepatch":
        (this.prerelease.length = 0),
          this.inc("patch", t, n),
          this.inc("pre", t, n);
        break;
      case "prerelease":
        0 === this.prerelease.length && this.inc("patch", t, n),
          this.inc("pre", t, n);
        break;
      case "release":
        if (0 === this.prerelease.length)
          throw new Error(`version ${this.raw} is not a prerelease`);
        this.prerelease.length = 0;
        break;
      case "major":
        (0 === this.minor &&
          0 === this.patch &&
          0 !== this.prerelease.length) ||
          this.major++,
          (this.minor = 0),
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case "minor":
        (0 === this.patch && 0 !== this.prerelease.length) || this.minor++,
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case "patch":
        0 === this.prerelease.length && this.patch++, (this.prerelease = []);
        break;
      case "pre": {
        const e = Number(n) ? 1 : 0;
        if (0 === this.prerelease.length) this.prerelease = [e];
        else {
          let r = this.prerelease.length;
          for (; --r >= 0; )
            "number" == typeof this.prerelease[r] &&
              (this.prerelease[r]++, (r = -2));
          if (-1 === r) {
            if (t === this.prerelease.join(".") && !1 === n)
              throw new Error(
                "invalid increment argument: identifier already exists",
              );
            this.prerelease.push(e);
          }
        }
        if (t) {
          let r = [t, e];
          !1 === n && (r = [t]),
            0 === u(this.prerelease[0], t)
              ? isNaN(this.prerelease[1]) && (this.prerelease = r)
              : (this.prerelease = r);
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return (
      (this.raw = this.format()),
      this.build.length && (this.raw += `+${this.build.join(".")}`),
      this
    );
  }
}
e.exports = l;
