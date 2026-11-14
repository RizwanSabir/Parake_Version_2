// vendor/module-74109.js — webpack module 74109
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.flip =
    t.dual =
    t.constant =
    t.constVoid =
    t.constUndefined =
    t.constTrue =
    t.constNull =
    t.constFalse =
    t.compose =
    t.apply =
    t.absurd =
    t.SK =
      void 0),
  (t.flow = function (e, t, n, r, o, i, a, s, l) {
    switch (arguments.length) {
      case 1:
        return e;
      case 2:
        return function () {
          return t(e.apply(this, arguments));
        };
      case 3:
        return function () {
          return n(t(e.apply(this, arguments)));
        };
      case 4:
        return function () {
          return r(n(t(e.apply(this, arguments))));
        };
      case 5:
        return function () {
          return o(r(n(t(e.apply(this, arguments)))));
        };
      case 6:
        return function () {
          return i(o(r(n(t(e.apply(this, arguments))))));
        };
      case 7:
        return function () {
          return a(i(o(r(n(t(e.apply(this, arguments)))))));
        };
      case 8:
        return function () {
          return s(a(i(o(r(n(t(e.apply(this, arguments))))))));
        };
      case 9:
        return function () {
          return l(s(a(i(o(r(n(t(e.apply(this, arguments)))))))));
        };
    }
  }),
  (t.isFunction = t.identity = t.hole = void 0),
  (t.pipe = function (e, t, n, r, o, i, a, s, l) {
    switch (arguments.length) {
      case 1:
        return e;
      case 2:
        return t(e);
      case 3:
        return n(t(e));
      case 4:
        return r(n(t(e)));
      case 5:
        return o(r(n(t(e))));
      case 6:
        return i(o(r(n(t(e)))));
      case 7:
        return a(i(o(r(n(t(e))))));
      case 8:
        return s(a(i(o(r(n(t(e)))))));
      case 9:
        return l(s(a(i(o(r(n(t(e))))))));
      default: {
        let e = arguments[0];
        for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
        return e;
      }
    }
  }),
  (t.untupled = t.unsafeCoerce = t.tupled = t.satisfies = void 0),
  (t.isFunction = (e) => "function" == typeof e);
const n = function (e, t) {
  if ("function" == typeof e)
    return function () {
      return e(arguments)
        ? t.apply(this, arguments)
        : (e) => t(e, ...arguments);
    };
  switch (e) {
    case 0:
    case 1:
      throw new RangeError(`Invalid arity ${e}`);
    case 2:
      return function (e, n) {
        return arguments.length >= 2
          ? t(e, n)
          : function (n) {
              return t(n, e);
            };
      };
    case 3:
      return function (e, n, r) {
        return arguments.length >= 3
          ? t(e, n, r)
          : function (r) {
              return t(r, e, n);
            };
      };
    case 4:
      return function (e, n, r, o) {
        return arguments.length >= 4
          ? t(e, n, r, o)
          : function (o) {
              return t(o, e, n, r);
            };
      };
    case 5:
      return function (e, n, r, o, i) {
        return arguments.length >= 5
          ? t(e, n, r, o, i)
          : function (i) {
              return t(i, e, n, r, o);
            };
      };
    default:
      return function () {
        if (arguments.length >= e) return t.apply(this, arguments);
        const n = arguments;
        return function (e) {
          return t(e, ...n);
        };
      };
  }
};
(t.dual = n),
  (t.apply =
    (...e) =>
    (t) =>
      t(...e));
const r = (e) => e;
(t.identity = r), (t.satisfies = () => (e) => e);
const o = (t.unsafeCoerce = r),
  i = (e) => () => e;
(t.constant = i),
  (t.constTrue = i(!0)),
  (t.constFalse = i(!1)),
  (t.constNull = i(null));
const a = (t.constUndefined = i(void 0));
(t.constVoid = a),
  (t.flip =
    (e) =>
    (...t) =>
    (...n) =>
      e(...n)(...t)),
  (t.compose = n(2, (e, t) => (n) => t(e(n))));
const s = (e) => {
  throw new Error("Called `absurd` function which should be uncallable");
};
(t.absurd = s),
  (t.tupled = (e) => (t) => e(...t)),
  (t.untupled =
    (e) =>
    (...t) =>
      e(t)),
  (t.hole = o(s)),
  (t.SK = (e, t) => t);
