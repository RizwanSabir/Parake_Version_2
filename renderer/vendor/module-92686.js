// vendor/module-92686.js — webpack module 92686
// params: (e, t, n) = (module, exports, require)
var r = Object.create,
  o = Object.defineProperty,
  i = Object.getOwnPropertyDescriptor,
  a = Object.getOwnPropertyNames,
  s = Object.getPrototypeOf,
  l = Object.prototype.hasOwnProperty,
  c = (e, t) =>
    function () {
      return t || (0, e[a(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  u = (e, t, n) => (
    (n = null != e ? r(s(e)) : {}),
    ((e, t, n, r) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (var s, c = a(t), u = 0, d = c.length; u < d; u++)
          (s = c[u]),
            l.call(e, s) ||
              void 0 === s ||
              o(e, s, {
                get: ((e) => t[e]).bind(null, s),
                enumerable: !(r = i(t, s)) || r.enumerable,
              });
      return e;
    })(
      !t && e && e.__esModule
        ? n
        : o(n, "default", { value: e, enumerable: !0 }),
      e,
    )
  );
const d = u(n(24383 /* vendor/module-24383 */)),
  p = u(n(35e3));
var f = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js"(
      e,
      t,
    ) {
      (t.exports = function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (t.includes(r)) continue;
            n[r] = e[r];
          }
        return n;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  h = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js"(
      e,
      t,
    ) {
      var n = f();
      (t.exports = function (e, t) {
        if (null == e) return {};
        var r,
          o,
          i = n(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (r = a[o]),
              t.includes(r) ||
                ({}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  m = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(
      e,
      t,
    ) {
      function n(e) {
        return (
          (t.exports = n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  g = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(
      e,
      t,
    ) {
      var n = m().default;
      (t.exports = function (e, t) {
        if ("object" != n(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, t || "default");
          if ("object" != n(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  y = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(
      e,
      t,
    ) {
      var n = m().default,
        r = g();
      (t.exports = function (e) {
        var t = r(e, "string");
        return "symbol" == n(t) ? t : t + "";
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  v = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(
      e,
      t,
    ) {
      var n = y();
      (t.exports = function (e, t, r) {
        return (
          (t = n(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  b = c({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(
      e,
      t,
    ) {
      var n = v();
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      (t.exports = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(o), !0).forEach(function (t) {
                n(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : r(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t),
                  );
                });
        }
        return e;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  S = u(h(), 1),
  _ = u(b(), 1);
const x = ["cursor", "direction"];
function w(e, t, n) {
  const r = e.flatMap((e) => e.split("."));
  if (!(t || (n && "any" !== n))) return r.length ? [r] : [];
  if (
    "infinite" === n &&
    (0, p.isObject)(t) &&
    ("direction" in t || "cursor" in t)
  ) {
    const { cursor: e, direction: n } = t;
    return [r, { input: (0, S.default)(t, x), type: "infinite" }];
  }
  return [
    r,
    (0, _.default)(
      (0, _.default)({}, void 0 !== t && t !== d.skipToken && { input: t }),
      n && "any" !== n && { type: n },
    ),
  ];
}
function E(e) {
  return w(e, void 0, "any");
}
function T(e, ...t) {
  const [n, r] = t;
  return w(e._def().path, n, null != r ? r : "any");
}
function k(e) {
  return E(e._def().path);
}
Object.defineProperty(t, "__commonJS", {
  enumerable: !0,
  get: function () {
    return c;
  },
}),
  Object.defineProperty(t, "__toESM", {
    enumerable: !0,
    get: function () {
      return u;
    },
  }),
  Object.defineProperty(t, "getMutationKey", {
    enumerable: !0,
    get: function () {
      return k;
    },
  }),
  Object.defineProperty(t, "getMutationKeyInternal", {
    enumerable: !0,
    get: function () {
      return E;
    },
  }),
  Object.defineProperty(t, "getQueryKey", {
    enumerable: !0,
    get: function () {
      return T;
    },
  }),
  Object.defineProperty(t, "getQueryKeyInternal", {
    enumerable: !0,
    get: function () {
      return w;
    },
  }),
  Object.defineProperty(t, "require_objectSpread2", {
    enumerable: !0,
    get: function () {
      return b;
    },
  });
