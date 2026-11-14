// vendor/module-19920.js — webpack module 19920
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ZodError = t.quotelessJson = t.ZodIssueCode = void 0);
const r = n(22321 /* vendor/module-22321 */);
(t.ZodIssueCode = r.util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite",
])),
  (t.quotelessJson = (e) =>
    JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"));
class o extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(),
      (this.issues = []),
      (this.addIssue = (e) => {
        this.issues = [...this.issues, e];
      }),
      (this.addIssues = (e = []) => {
        this.issues = [...this.issues, ...e];
      });
    const t = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, t)
      : (this.__proto__ = t),
      (this.name = "ZodError"),
      (this.issues = e);
  }
  format(e) {
    const t =
        e ||
        function (e) {
          return e.message;
        },
      n = { _errors: [] },
      r = (e) => {
        for (const o of e.issues)
          if ("invalid_union" === o.code) o.unionErrors.map(r);
          else if ("invalid_return_type" === o.code) r(o.returnTypeError);
          else if ("invalid_arguments" === o.code) r(o.argumentsError);
          else if (0 === o.path.length) n._errors.push(t(o));
          else {
            let e = n,
              r = 0;
            for (; r < o.path.length; ) {
              const n = o.path[r];
              r === o.path.length - 1
                ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(o)))
                : (e[n] = e[n] || { _errors: [] }),
                (e = e[n]),
                r++;
            }
          }
      };
    return r(this), n;
  }
  static assert(e) {
    if (!(e instanceof o)) throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, r.util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return 0 === this.issues.length;
  }
  flatten(e = (e) => e.message) {
    const t = {},
      n = [];
    for (const r of this.issues)
      if (r.path.length > 0) {
        const n = r.path[0];
        (t[n] = t[n] || []), t[n].push(e(r));
      } else n.push(e(r));
    return { formErrors: n, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
(t.ZodError = o), (o.create = (e) => new o(e));
