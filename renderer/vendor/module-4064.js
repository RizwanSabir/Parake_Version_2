// vendor/module-4064.js — webpack module 4064
// params: (e, t, n) = (module, exports, require)
const r = n(87498 /* vendor/module-87498 */);
var o = r.__commonJS({
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
  i = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(
      e,
      t,
    ) {
      var n = o().default;
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
  a = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(
      e,
      t,
    ) {
      var n = o().default,
        r = i();
      (t.exports = function (e) {
        var t = r(e, "string");
        return "symbol" == n(t) ? t : t + "";
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  }),
  s = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(
      e,
      t,
    ) {
      var n = a();
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
  l = r.__commonJS({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(
      e,
      t,
    ) {
      var n = s();
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
  });
Object.defineProperty(t, "require_defineProperty", {
  enumerable: !0,
  get: function () {
    return s;
  },
}),
  Object.defineProperty(t, "require_objectSpread2", {
    enumerable: !0,
    get: function () {
      return l;
    },
  });
