// vendor/module-29218.js — webpack module 29218
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.isAsync =
    t.isValid =
    t.isDirty =
    t.isAborted =
    t.OK =
    t.DIRTY =
    t.INVALID =
    t.ParseStatus =
    t.EMPTY_PATH =
    t.makeIssue =
      void 0),
  (t.addIssueToContext = function (e, n) {
    const r = (0, o.getErrorMap)(),
      a = (0, t.makeIssue)({
        issueData: n,
        data: e.data,
        path: e.path,
        errorMaps: [
          e.common.contextualErrorMap,
          e.schemaErrorMap,
          r,
          r === i.default ? void 0 : i.default,
        ].filter((e) => !!e),
      });
    e.common.issues.push(a);
  });
const o = n(74770 /* vendor/module-74770 */),
  i = r(n(85770 /* vendor/module-85770 */));
(t.makeIssue = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e,
    i = [...n, ...(o.path || [])],
    a = { ...o, path: i };
  if (void 0 !== o.message) return { ...o, path: i, message: o.message };
  let s = "";
  const l = r
    .filter((e) => !!e)
    .slice()
    .reverse();
  for (const e of l) s = e(a, { data: t, defaultError: s }).message;
  return { ...o, path: i, message: s };
}),
  (t.EMPTY_PATH = []);
class a {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    "valid" === this.value && (this.value = "dirty");
  }
  abort() {
    "aborted" !== this.value && (this.value = "aborted");
  }
  static mergeArray(e, n) {
    const r = [];
    for (const o of n) {
      if ("aborted" === o.status) return t.INVALID;
      "dirty" === o.status && e.dirty(), r.push(o.value);
    }
    return { status: e.value, value: r };
  }
  static async mergeObjectAsync(e, t) {
    const n = [];
    for (const e of t) {
      const t = await e.key,
        r = await e.value;
      n.push({ key: t, value: r });
    }
    return a.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, n) {
    const r = {};
    for (const o of n) {
      const { key: n, value: i } = o;
      if ("aborted" === n.status) return t.INVALID;
      if ("aborted" === i.status) return t.INVALID;
      "dirty" === n.status && e.dirty(),
        "dirty" === i.status && e.dirty(),
        "__proto__" === n.value ||
          (void 0 === i.value && !o.alwaysSet) ||
          (r[n.value] = i.value);
    }
    return { status: e.value, value: r };
  }
}
(t.ParseStatus = a),
  (t.INVALID = Object.freeze({ status: "aborted" })),
  (t.DIRTY = (e) => ({ status: "dirty", value: e })),
  (t.OK = (e) => ({ status: "valid", value: e })),
  (t.isAborted = (e) => "aborted" === e.status),
  (t.isDirty = (e) => "dirty" === e.status),
  (t.isValid = (e) => "valid" === e.status),
  (t.isAsync = (e) => "undefined" != typeof Promise && e instanceof Promise);
