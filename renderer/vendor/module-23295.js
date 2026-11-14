// vendor/module-23295.js — webpack module 23295
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = Object.prototype.toString;
function r(e, t) {
  return n.call(e) === `[object ${t}]`;
}
function o(e) {
  return (
    "object" == typeof e &&
    null !== e &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function i(e) {
  return r(e, "Object");
}
function a(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
(t.isDOMError = function (e) {
  return r(e, "DOMError");
}),
  (t.isDOMException = function (e) {
    return r(e, "DOMException");
  }),
  (t.isElement = function (e) {
    return "undefined" != typeof Element && a(e, Element);
  }),
  (t.isError = function (e) {
    switch (n.call(e)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
      case "[object WebAssembly.Exception]":
        return !0;
      default:
        return a(e, Error);
    }
  }),
  (t.isErrorEvent = function (e) {
    return r(e, "ErrorEvent");
  }),
  (t.isEvent = function (e) {
    return "undefined" != typeof Event && a(e, Event);
  }),
  (t.isInstanceOf = a),
  (t.isObjectLike = function (e) {
    return "object" == typeof e && null !== e;
  }),
  (t.isParameterizedString = o),
  (t.isPlainObject = i),
  (t.isPrimitive = function (e) {
    return (
      null === e || o(e) || ("object" != typeof e && "function" != typeof e)
    );
  }),
  (t.isRegExp = function (e) {
    return r(e, "RegExp");
  }),
  (t.isRequest = function (e) {
    return "undefined" != typeof Request && a(e, Request);
  }),
  (t.isString = function (e) {
    return r(e, "String");
  }),
  (t.isSyntheticEvent = function (e) {
    return (
      i(e) &&
      "nativeEvent" in e &&
      "preventDefault" in e &&
      "stopPropagation" in e
    );
  }),
  (t.isThenable = function (e) {
    return Boolean(e?.then && "function" == typeof e.then);
  }),
  (t.isVueViewModel = function (e) {
    return !(
      "object" != typeof e ||
      null === e ||
      !(e.__isVue || e._isVue || e.__v_isVNode)
    );
  });
