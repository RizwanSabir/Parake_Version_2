// vendor/other/module-21627.js — webpack module 21627
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = Symbol("SemVer ANY");
class o {
  static get ANY() {
    return r;
  }
  constructor(e, t) {
    if (((t = i(t)), e instanceof o)) {
      if (e.loose === !!t.loose) return e;
      e = e.value;
    }
    (e = e.trim().split(/\s+/).join(" ")),
      u("comparator", e, t),
      (this.options = t),
      (this.loose = !!t.loose),
      this.parse(e),
      this.semver === r
        ? (this.value = "")
        : (this.value = this.operator + this.semver.version),
      u("comp", this);
  }
  parse(e) {
    const t = this.options.loose ? s[a.COMPARATORLOOSE] : s[a.COMPARATOR],
      n = e.match(t);
    if (!n) throw new TypeError(`Invalid comparator: ${e}`);
    (this.operator = void 0 !== n[1] ? n[1] : ""),
      "=" === this.operator && (this.operator = ""),
      n[2]
        ? (this.semver = new l(n[2], this.options.loose))
        : (this.semver = r);
  }
  toString() {
    return this.value;
  }
  test(e) {
    if (
      (u("Comparator.test", e, this.options.loose),
      this.semver === r || e === r)
    )
      return !0;
    if ("string" == typeof e)
      try {
        e = new l(e, this.options);
      } catch (e) {
        return !1;
      }
    return c(e, this.operator, this.semver, this.options);
  }
  intersects(e, t) {
    if (!(e instanceof o)) throw new TypeError("a Comparator is required");
    return "" === this.operator
      ? "" === this.value || new d(e.value, t).test(this.value)
      : "" === e.operator
        ? "" === e.value || new d(this.value, t).test(e.semver)
        : !(
            ((t = i(t)).includePrerelease &&
              ("<0.0.0-0" === this.value || "<0.0.0-0" === e.value)) ||
            (!t.includePrerelease &&
              (this.value.startsWith("<0.0.0") ||
                e.value.startsWith("<0.0.0"))) ||
            ((!this.operator.startsWith(">") || !e.operator.startsWith(">")) &&
              (!this.operator.startsWith("<") || !e.operator.startsWith("<")) &&
              (this.semver.version !== e.semver.version ||
                !this.operator.includes("=") ||
                !e.operator.includes("=")) &&
              !(
                c(this.semver, "<", e.semver, t) &&
                this.operator.startsWith(">") &&
                e.operator.startsWith("<")
              ) &&
              !(
                c(this.semver, ">", e.semver, t) &&
                this.operator.startsWith("<") &&
                e.operator.startsWith(">")
              ))
          );
  }
}
e.exports = o;
const i = n(40284 /* vendor/other/module-40284 */),
  { safeRe: s, t: a } = n(50167 /* vendor/other/module-50167 */),
  c = n(30590 /* vendor/other/module-30590 */),
  u = n(16287 /* vendor/other/module-16287 */),
  l = n(38707 /* vendor/other/module-38707 */),
  d = n(20566 /* vendor/other/module-20566 */);
