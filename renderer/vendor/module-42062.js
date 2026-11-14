// vendor/module-42062.js — webpack module 42062
// params: (e, t) = (module, exports, require)
"use strict";
var n = Symbol.for("react.transitional.element"),
  r = Symbol.for("react.portal"),
  o = Symbol.for("react.fragment"),
  i = Symbol.for("react.strict_mode"),
  a = Symbol.for("react.profiler"),
  s = Symbol.for("react.consumer"),
  l = Symbol.for("react.context"),
  c = Symbol.for("react.forward_ref"),
  u = Symbol.for("react.suspense"),
  d = Symbol.for("react.memo"),
  p = Symbol.for("react.lazy"),
  f = Symbol.for("react.activity"),
  h = Symbol.iterator,
  m = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  g = Object.assign,
  y = {};
function v(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = y),
    (this.updater = n || m);
}
function b() {}
function S(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = y),
    (this.updater = n || m);
}
(v.prototype.isReactComponent = {}),
  (v.prototype.setState = function (e, t) {
    if ("object" != typeof e && "function" != typeof e && null != e)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  }),
  (v.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  }),
  (b.prototype = v.prototype);
var _ = (S.prototype = new b());
(_.constructor = S), g(_, v.prototype), (_.isPureReactComponent = !0);
var x = Array.isArray;
function w() {}
var E = { H: null, A: null, T: null, S: null },
  T = Object.prototype.hasOwnProperty;
function k(e, t, r) {
  var o = r.ref;
  return {
    $$typeof: n,
    type: e,
    key: t,
    ref: void 0 !== o ? o : null,
    props: r,
  };
}
function C(e) {
  return "object" == typeof e && null !== e && e.$$typeof === n;
}
var I = /\/+/g;
function A(e, t) {
  return "object" == typeof e && null !== e && null != e.key
    ? ((n = "" + e.key),
      (r = { "=": "=0", ":": "=2" }),
      "$" +
        n.replace(/[=:]/g, function (e) {
          return r[e];
        }))
    : t.toString(36);
  var n, r;
}
function O(e, t, o, i, a) {
  var s = typeof e;
  ("undefined" !== s && "boolean" !== s) || (e = null);
  var l,
    c,
    u = !1;
  if (null === e) u = !0;
  else
    switch (s) {
      case "bigint":
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case n:
          case r:
            u = !0;
            break;
          case p:
            return O((u = e._init)(e._payload), t, o, i, a);
        }
    }
  if (u)
    return (
      (a = a(e)),
      (u = "" === i ? "." + A(e, 0) : i),
      x(a)
        ? ((o = ""),
          null != u && (o = u.replace(I, "$&/") + "/"),
          O(a, t, o, "", function (e) {
            return e;
          }))
        : null != a &&
          (C(a) &&
            ((l = a),
            (c =
              o +
              (null == a.key || (e && e.key === a.key)
                ? ""
                : ("" + a.key).replace(I, "$&/") + "/") +
              u),
            (a = k(l.type, c, l.props))),
          t.push(a)),
      1
    );
  u = 0;
  var d,
    f = "" === i ? "." : i + ":";
  if (x(e))
    for (var m = 0; m < e.length; m++)
      u += O((i = e[m]), t, o, (s = f + A(i, m)), a);
  else if (
    "function" ==
    typeof (m =
      null === (d = e) || "object" != typeof d
        ? null
        : "function" == typeof (d = (h && d[h]) || d["@@iterator"])
          ? d
          : null)
  )
    for (e = m.call(e), m = 0; !(i = e.next()).done; )
      u += O((i = i.value), t, o, (s = f + A(i, m++)), a);
  else if ("object" === s) {
    if ("function" == typeof e.then)
      return O(
        (function (e) {
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw e.reason;
            default:
              switch (
                ("string" == typeof e.status
                  ? e.then(w, w)
                  : ((e.status = "pending"),
                    e.then(
                      function (t) {
                        "pending" === e.status &&
                          ((e.status = "fulfilled"), (e.value = t));
                      },
                      function (t) {
                        "pending" === e.status &&
                          ((e.status = "rejected"), (e.reason = t));
                      },
                    )),
                e.status)
              ) {
                case "fulfilled":
                  return e.value;
                case "rejected":
                  throw e.reason;
              }
          }
          throw e;
        })(e),
        t,
        o,
        i,
        a,
      );
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          ("[object Object]" === t
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  }
  return u;
}
function R(e, t, n) {
  if (null == e) return e;
  var r = [],
    o = 0;
  return (
    O(e, r, "", "", function (e) {
      return t.call(n, e, o++);
    }),
    r
  );
}
function M(e) {
  if (-1 === e._status) {
    var t = e._result;
    (t = t()).then(
      function (t) {
        (0 !== e._status && -1 !== e._status) ||
          ((e._status = 1), (e._result = t));
      },
      function (t) {
        (0 !== e._status && -1 !== e._status) ||
          ((e._status = 2), (e._result = t));
      },
    ),
      -1 === e._status && ((e._status = 0), (e._result = t));
  }
  if (1 === e._status) return e._result.default;
  throw e._result;
}
var P =
    "function" == typeof reportError
      ? reportError
      : function (e) {
          if (
            "object" == typeof window &&
            "function" == typeof window.ErrorEvent
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                "object" == typeof e &&
                null !== e &&
                "string" == typeof e.message
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            "object" == typeof process &&
            "function" == typeof process.emit
          )
            return void process.emit("uncaughtException", e);
        },
  N = {
    map: R,
    forEach: function (e, t, n) {
      R(
        e,
        function () {
          t.apply(this, arguments);
        },
        n,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        R(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        R(e, function (e) {
          return e;
        }) || []
      );
    },
    only: function (e) {
      if (!C(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  };
(t.Activity = f),
  (t.Children = N),
  (t.Component = v),
  (t.Fragment = o),
  (t.Profiler = a),
  (t.PureComponent = S),
  (t.StrictMode = i),
  (t.Suspense = u),
  (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E),
  (t.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (e) {
      return E.H.useMemoCache(e);
    },
  }),
  (t.cache = function (e) {
    return function () {
      return e.apply(null, arguments);
    };
  }),
  (t.cacheSignal = function () {
    return null;
  }),
  (t.cloneElement = function (e, t, n) {
    if (null == e)
      throw Error(
        "The argument must be a React element, but you passed " + e + ".",
      );
    var r = g({}, e.props),
      o = e.key;
    if (null != t)
      for (i in (void 0 !== t.key && (o = "" + t.key), t))
        !T.call(t, i) ||
          "key" === i ||
          "__self" === i ||
          "__source" === i ||
          ("ref" === i && void 0 === t.ref) ||
          (r[i] = t[i]);
    var i = arguments.length - 2;
    if (1 === i) r.children = n;
    else if (1 < i) {
      for (var a = Array(i), s = 0; s < i; s++) a[s] = arguments[s + 2];
      r.children = a;
    }
    return k(e.type, o, r);
  }),
  (t.createContext = function (e) {
    return (
      ((e = {
        $$typeof: l,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }).Provider = e),
      (e.Consumer = { $$typeof: s, _context: e }),
      e
    );
  }),
  (t.createElement = function (e, t, n) {
    var r,
      o = {},
      i = null;
    if (null != t)
      for (r in (void 0 !== t.key && (i = "" + t.key), t))
        T.call(t, r) &&
          "key" !== r &&
          "__self" !== r &&
          "__source" !== r &&
          (o[r] = t[r]);
    var a = arguments.length - 2;
    if (1 === a) o.children = n;
    else if (1 < a) {
      for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
      o.children = s;
    }
    if (e && e.defaultProps)
      for (r in (a = e.defaultProps)) void 0 === o[r] && (o[r] = a[r]);
    return k(e, i, o);
  }),
  (t.createRef = function () {
    return { current: null };
  }),
  (t.forwardRef = function (e) {
    return { $$typeof: c, render: e };
  }),
  (t.isValidElement = C),
  (t.lazy = function (e) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: e },
      _init: M,
    };
  }),
  (t.memo = function (e, t) {
    return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
  }),
  (t.startTransition = function (e) {
    var t = E.T,
      n = {};
    E.T = n;
    try {
      var r = e(),
        o = E.S;
      null !== o && o(n, r),
        "object" == typeof r &&
          null !== r &&
          "function" == typeof r.then &&
          r.then(w, P);
    } catch (e) {
      P(e);
    } finally {
      null !== t && null !== n.types && (t.types = n.types), (E.T = t);
    }
  }),
  (t.unstable_useCacheRefresh = function () {
    return E.H.useCacheRefresh();
  }),
  (t.use = function (e) {
    return E.H.use(e);
  }),
  (t.useActionState = function (e, t, n) {
    return E.H.useActionState(e, t, n);
  }),
  (t.useCallback = function (e, t) {
    return E.H.useCallback(e, t);
  }),
  (t.useContext = function (e) {
    return E.H.useContext(e);
  }),
  (t.useDebugValue = function () {}),
  (t.useDeferredValue = function (e, t) {
    return E.H.useDeferredValue(e, t);
  }),
  (t.useEffect = function (e, t) {
    return E.H.useEffect(e, t);
  }),
  (t.useEffectEvent = function (e) {
    return E.H.useEffectEvent(e);
  }),
  (t.useId = function () {
    return E.H.useId();
  }),
  (t.useImperativeHandle = function (e, t, n) {
    return E.H.useImperativeHandle(e, t, n);
  }),
  (t.useInsertionEffect = function (e, t) {
    return E.H.useInsertionEffect(e, t);
  }),
  (t.useLayoutEffect = function (e, t) {
    return E.H.useLayoutEffect(e, t);
  }),
  (t.useMemo = function (e, t) {
    return E.H.useMemo(e, t);
  }),
  (t.useOptimistic = function (e, t) {
    return E.H.useOptimistic(e, t);
  }),
  (t.useReducer = function (e, t, n) {
    return E.H.useReducer(e, t, n);
  }),
  (t.useRef = function (e) {
    return E.H.useRef(e);
  }),
  (t.useState = function (e) {
    return E.H.useState(e);
  }),
  (t.useSyncExternalStore = function (e, t, n) {
    return E.H.useSyncExternalStore(e, t, n);
  }),
  (t.useTransition = function () {
    return E.H.useTransition();
  }),
  (t.version = "19.2.7");
