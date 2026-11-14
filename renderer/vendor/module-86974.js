// vendor/module-86974.js — webpack module 86974
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(97967 /* vendor/module-97967 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(43144 /* vendor/module-43144 */);
function a(e) {
  var t = "https://react.dev/errors/" + e;
  if (1 < arguments.length) {
    t += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
  }
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function s(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do {
      !!(4098 & (t = e).flags) && (n = t.return), (e = t.return);
    } while (e);
  }
  return 3 === t.tag ? n : null;
}
function l(e) {
  if (13 === e.tag) {
    var t = e.memoizedState;
    if (
      (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
      null !== t)
    )
      return t.dehydrated;
  }
  return null;
}
function c(e) {
  if (31 === e.tag) {
    var t = e.memoizedState;
    if (
      (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
      null !== t)
    )
      return t.dehydrated;
  }
  return null;
}
function u(e) {
  if (s(e) !== e) throw Error(a(188));
}
function d(e) {
  var t = e.tag;
  if (5 === t || 26 === t || 27 === t || 6 === t) return e;
  for (e = e.child; null !== e; ) {
    if (null !== (t = d(e))) return t;
    e = e.sibling;
  }
  return null;
}
var p = Object.assign,
  f = Symbol.for("react.element"),
  h = Symbol.for("react.transitional.element"),
  m = Symbol.for("react.portal"),
  g = Symbol.for("react.fragment"),
  y = Symbol.for("react.strict_mode"),
  v = Symbol.for("react.profiler"),
  b = Symbol.for("react.consumer"),
  S = Symbol.for("react.context"),
  _ = Symbol.for("react.forward_ref"),
  x = Symbol.for("react.suspense"),
  w = Symbol.for("react.suspense_list"),
  E = Symbol.for("react.memo"),
  T = Symbol.for("react.lazy");
Symbol.for("react.scope");
var k = Symbol.for("react.activity");
Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
var C = Symbol.for("react.memo_cache_sentinel");
Symbol.for("react.view_transition");
var I = Symbol.iterator;
function A(e) {
  return null === e || "object" != typeof e
    ? null
    : "function" == typeof (e = (I && e[I]) || e["@@iterator"])
      ? e
      : null;
}
var O = Symbol.for("react.client.reference");
function R(e) {
  if (null == e) return null;
  if ("function" == typeof e)
    return e.$$typeof === O ? null : e.displayName || e.name || null;
  if ("string" == typeof e) return e;
  switch (e) {
    case g:
      return "Fragment";
    case v:
      return "Profiler";
    case y:
      return "StrictMode";
    case x:
      return "Suspense";
    case w:
      return "SuspenseList";
    case k:
      return "Activity";
  }
  if ("object" == typeof e)
    switch (e.$$typeof) {
      case m:
        return "Portal";
      case S:
        return e.displayName || "Context";
      case b:
        return (e._context.displayName || "Context") + ".Consumer";
      case _:
        var t = e.render;
        return (
          (e = e.displayName) ||
            (e =
              "" !== (e = t.displayName || t.name || "")
                ? "ForwardRef(" + e + ")"
                : "ForwardRef"),
          e
        );
      case E:
        return null !== (t = e.displayName || null) ? t : R(e.type) || "Memo";
      case T:
        (t = e._payload), (e = e._init);
        try {
          return R(e(t));
        } catch (e) {}
    }
  return null;
}
var M = Array.isArray,
  P = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  N = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  D = { pending: !1, data: null, method: null, action: null },
  j = [],
  L = -1;
function F(e) {
  return { current: e };
}
function U(e) {
  0 > L || ((e.current = j[L]), (j[L] = null), L--);
}
function B(e, t) {
  L++, (j[L] = e.current), (e.current = t);
}
var z,
  H,
  V = F(null),
  q = F(null),
  G = F(null),
  W = F(null);
function $(e, t) {
  switch ((B(G, t), B(q, e), B(V, null), t.nodeType)) {
    case 9:
    case 11:
      e = (e = t.documentElement) && (e = e.namespaceURI) ? gd(e) : 0;
      break;
    default:
      if (((e = t.tagName), (t = t.namespaceURI))) e = yd((t = gd(t)), e);
      else
        switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
  }
  U(V), B(V, e);
}
function Y() {
  U(V), U(q), U(G);
}
function K(e) {
  null !== e.memoizedState && B(W, e);
  var t = V.current,
    n = yd(t, e.type);
  t !== n && (B(q, e), B(V, n));
}
function Z(e) {
  q.current === e && (U(V), U(q)),
    W.current === e && (U(W), (cp._currentValue = D));
}
function Q(e) {
  if (void 0 === z)
    try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      (z = (t && t[1]) || ""),
        (H =
          -1 < e.stack.indexOf("\n    at")
            ? " (<anonymous>)"
            : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
    }
  return "\n" + z + e + H;
}
var J = !1;
function X(e, t) {
  if (!e || J) return "";
  J = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var r = {
      DetermineComponentFrameRoot: function () {
        try {
          if (t) {
            var n = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(n.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              "object" == typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(n, []);
              } catch (e) {
                var r = e;
              }
              Reflect.construct(e, [], n);
            } else {
              try {
                n.call();
              } catch (e) {
                r = e;
              }
              e.call(n.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (e) {
              r = e;
            }
            (n = e()) &&
              "function" == typeof n.catch &&
              n.catch(function () {});
          }
        } catch (e) {
          if (e && r && "string" == typeof e.stack) return [e.stack, r.stack];
        }
        return [null, null];
      },
    };
    r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var o = Object.getOwnPropertyDescriptor(
      r.DetermineComponentFrameRoot,
      "name",
    );
    o &&
      o.configurable &&
      Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot",
      });
    var i = r.DetermineComponentFrameRoot(),
      a = i[0],
      s = i[1];
    if (a && s) {
      var l = a.split("\n"),
        c = s.split("\n");
      for (
        o = r = 0;
        r < l.length && !l[r].includes("DetermineComponentFrameRoot");

      )
        r++;
      for (; o < c.length && !c[o].includes("DetermineComponentFrameRoot"); )
        o++;
      if (r === l.length || o === c.length)
        for (
          r = l.length - 1, o = c.length - 1;
          1 <= r && 0 <= o && l[r] !== c[o];

        )
          o--;
      for (; 1 <= r && 0 <= o; r--, o--)
        if (l[r] !== c[o]) {
          if (1 !== r || 1 !== o)
            do {
              if ((r--, 0 > --o || l[r] !== c[o])) {
                var u = "\n" + l[r].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            } while (1 <= r && 0 <= o);
          break;
        }
    }
  } finally {
    (J = !1), (Error.prepareStackTrace = n);
  }
  return (n = e ? e.displayName || e.name : "") ? Q(n) : "";
}
function ee(e, t) {
  switch (e.tag) {
    case 26:
    case 27:
    case 5:
      return Q(e.type);
    case 16:
      return Q("Lazy");
    case 13:
      return e.child !== t && null !== t
        ? Q("Suspense Fallback")
        : Q("Suspense");
    case 19:
      return Q("SuspenseList");
    case 0:
    case 15:
      return X(e.type, !1);
    case 11:
      return X(e.type.render, !1);
    case 1:
      return X(e.type, !0);
    case 31:
      return Q("Activity");
    default:
      return "";
  }
}
function te(e) {
  try {
    var t = "",
      n = null;
    do {
      (t += ee(e, n)), (n = e), (e = e.return);
    } while (e);
    return t;
  } catch (e) {
    return "\nError generating stack: " + e.message + "\n" + e.stack;
  }
}
var ne = Object.prototype.hasOwnProperty,
  re = r.unstable_scheduleCallback,
  oe = r.unstable_cancelCallback,
  ie = r.unstable_shouldYield,
  ae = r.unstable_requestPaint,
  se = r.unstable_now,
  le = r.unstable_getCurrentPriorityLevel,
  ce = r.unstable_ImmediatePriority,
  ue = r.unstable_UserBlockingPriority,
  de = r.unstable_NormalPriority,
  pe = r.unstable_LowPriority,
  fe = r.unstable_IdlePriority,
  he = r.log,
  me = r.unstable_setDisableYieldValue,
  ge = null,
  ye = null;
function ve(e) {
  if (
    ("function" == typeof he && me(e),
    ye && "function" == typeof ye.setStrictMode)
  )
    try {
      ye.setStrictMode(ge, e);
    } catch (e) {}
}
var be = Math.clz32
    ? Math.clz32
    : function (e) {
        return 0 == (e >>>= 0) ? 32 : (31 - ((Se(e) / _e) | 0)) | 0;
      },
  Se = Math.log,
  _e = Math.LN2,
  xe = 256,
  we = 262144,
  Ee = 4194304;
function Te(e) {
  var t = 42 & e;
  if (0 !== t) return t;
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
      return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
      return 261888 & e;
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 3932160 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return 62914560 & e;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return e;
  }
}
function ke(e, t, n) {
  var r = e.pendingLanes;
  if (0 === r) return 0;
  var o = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes;
  e = e.warmLanes;
  var s = 134217727 & r;
  return (
    0 !== s
      ? 0 !== (r = s & ~i)
        ? (o = Te(r))
        : 0 !== (a &= s)
          ? (o = Te(a))
          : n || (0 !== (n = s & ~e) && (o = Te(n)))
      : 0 !== (s = r & ~i)
        ? (o = Te(s))
        : 0 !== a
          ? (o = Te(a))
          : n || (0 !== (n = r & ~e) && (o = Te(n))),
    0 === o
      ? 0
      : 0 !== t &&
          t !== o &&
          0 === (t & i) &&
          ((i = o & -o) >= (n = t & -t) || (32 === i && 4194048 & n))
        ? t
        : o
  );
}
function Ce(e, t) {
  return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
}
function Ie(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return t + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    default:
      return -1;
  }
}
function Ae() {
  var e = Ee;
  return !(62914560 & (Ee <<= 1)) && (Ee = 4194304), e;
}
function Oe(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Re(e, t) {
  (e.pendingLanes |= t),
    268435456 !== t &&
      ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
}
function Me(e, t, n) {
  (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
  var r = 31 - be(t);
  (e.entangledLanes |= t),
    (e.entanglements[r] = 1073741824 | e.entanglements[r] | (261930 & n));
}
function Pe(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - be(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
function Ne(e, t) {
  var n = t & -t;
  return 0 !== ((n = 42 & n ? 1 : De(n)) & (e.suspendedLanes | t)) ? 0 : n;
}
function De(e) {
  switch (e) {
    case 2:
      e = 1;
      break;
    case 8:
      e = 4;
      break;
    case 32:
      e = 16;
      break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      e = 128;
      break;
    case 268435456:
      e = 134217728;
      break;
    default:
      e = 0;
  }
  return e;
}
function je(e) {
  return 2 < (e &= -e) ? (8 < e ? (134217727 & e ? 32 : 268435456) : 8) : 2;
}
function Le() {
  var e = N.p;
  return 0 !== e ? e : void 0 === (e = window.event) ? 32 : wp(e.type);
}
function Fe(e, t) {
  var n = N.p;
  try {
    return (N.p = e), t();
  } finally {
    N.p = n;
  }
}
var Ue = Math.random().toString(36).slice(2),
  Be = "__reactFiber$" + Ue,
  ze = "__reactProps$" + Ue,
  He = "__reactContainer$" + Ue,
  Ve = "__reactEvents$" + Ue,
  qe = "__reactListeners$" + Ue,
  Ge = "__reactHandles$" + Ue,
  We = "__reactResources$" + Ue,
  $e = "__reactMarker$" + Ue;
function Ye(e) {
  delete e[Be], delete e[ze], delete e[Ve], delete e[qe], delete e[Ge];
}
function Ke(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[He] || n[Be])) {
      if (
        ((n = t.alternate),
        null !== t.child || (null !== n && null !== n.child))
      )
        for (e = Dd(e); null !== e; ) {
          if ((n = e[Be])) return n;
          e = Dd(e);
        }
      return t;
    }
    n = (e = n).parentNode;
  }
  return null;
}
function Ze(e) {
  if ((e = e[Be] || e[He])) {
    var t = e.tag;
    if (
      5 === t ||
      6 === t ||
      13 === t ||
      31 === t ||
      26 === t ||
      27 === t ||
      3 === t
    )
      return e;
  }
  return null;
}
function Qe(e) {
  var t = e.tag;
  if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
  throw Error(a(33));
}
function Je(e) {
  var t = e[We];
  return (
    t ||
      (t = e[We] = { hoistableStyles: new Map(), hoistableScripts: new Map() }),
    t
  );
}
function Xe(e) {
  e[$e] = !0;
}
var et = new Set(),
  tt = {};
function nt(e, t) {
  rt(e, t), rt(e + "Capture", t);
}
function rt(e, t) {
  for (tt[e] = t, e = 0; e < t.length; e++) et.add(t[e]);
}
var ot = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
  ),
  it = {},
  at = {};
function st(e, t, n) {
  if (
    ((o = t),
    ne.call(at, o) ||
      (!ne.call(it, o) && (ot.test(o) ? (at[o] = !0) : ((it[o] = !0), 0))))
  )
    if (null === n) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          return void e.removeAttribute(t);
        case "boolean":
          var r = t.toLowerCase().slice(0, 5);
          if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t);
      }
      e.setAttribute(t, "" + n);
    }
  var o;
}
function lt(e, t, n) {
  if (null === n) e.removeAttribute(t);
  else {
    switch (typeof n) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        return void e.removeAttribute(t);
    }
    e.setAttribute(t, "" + n);
  }
}
function ct(e, t, n, r) {
  if (null === r) e.removeAttribute(n);
  else {
    switch (typeof r) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        return void e.removeAttribute(n);
    }
    e.setAttributeNS(t, n, "" + r);
  }
}
function ut(e) {
  switch (typeof e) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
    case "object":
      return e;
    default:
      return "";
  }
}
function dt(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    "input" === e.toLowerCase() &&
    ("checkbox" === t || "radio" === t)
  );
}
function pt(e) {
  if (!e._valueTracker) {
    var t = dt(e) ? "checked" : "value";
    e._valueTracker = (function (e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        void 0 !== r &&
        "function" == typeof r.get &&
        "function" == typeof r.set
      ) {
        var o = r.get,
          i = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return o.call(this);
            },
            set: function (e) {
              (n = "" + e), i.call(this, e);
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = "" + e;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    })(e, t, "" + e[t]);
  }
}
function ft(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = dt(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r) !== n && (t.setValue(e), !0)
  );
}
function ht(e) {
  if (
    void 0 === (e = e || ("undefined" != typeof document ? document : void 0))
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
var mt = /[\n"\\]/g;
function gt(e) {
  return e.replace(mt, function (e) {
    return "\\" + e.charCodeAt(0).toString(16) + " ";
  });
}
function yt(e, t, n, r, o, i, a, s) {
  (e.name = ""),
    null != a &&
    "function" != typeof a &&
    "symbol" != typeof a &&
    "boolean" != typeof a
      ? (e.type = a)
      : e.removeAttribute("type"),
    null != t
      ? "number" === a
        ? ((0 === t && "" === e.value) || e.value != t) &&
          (e.value = "" + ut(t))
        : e.value !== "" + ut(t) && (e.value = "" + ut(t))
      : ("submit" !== a && "reset" !== a) || e.removeAttribute("value"),
    null != t
      ? bt(e, a, ut(t))
      : null != n
        ? bt(e, a, ut(n))
        : null != r && e.removeAttribute("value"),
    null == o && null != i && (e.defaultChecked = !!i),
    null != o &&
      (e.checked = o && "function" != typeof o && "symbol" != typeof o),
    null != s &&
    "function" != typeof s &&
    "symbol" != typeof s &&
    "boolean" != typeof s
      ? (e.name = "" + ut(s))
      : e.removeAttribute("name");
}
function vt(e, t, n, r, o, i, a, s) {
  if (
    (null != i &&
      "function" != typeof i &&
      "symbol" != typeof i &&
      "boolean" != typeof i &&
      (e.type = i),
    null != t || null != n)
  ) {
    if (("submit" === i || "reset" === i) && null == t) return void pt(e);
    (n = null != n ? "" + ut(n) : ""),
      (t = null != t ? "" + ut(t) : n),
      s || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r =
    "function" != typeof (r = null != r ? r : o) &&
    "symbol" != typeof r &&
    !!r),
    (e.checked = s ? e.checked : !!r),
    (e.defaultChecked = !!r),
    null != a &&
      "function" != typeof a &&
      "symbol" != typeof a &&
      "boolean" != typeof a &&
      (e.name = a),
    pt(e);
}
function bt(e, t, n) {
  ("number" === t && ht(e.ownerDocument) === e) ||
    e.defaultValue === "" + n ||
    (e.defaultValue = "" + n);
}
function St(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ut(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n)
        return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
      null !== t || e[o].disabled || (t = e[o]);
    }
    null !== t && (t.selected = !0);
  }
}
function _t(e, t, n) {
  null == t || ((t = "" + ut(t)) !== e.value && (e.value = t), null != n)
    ? (e.defaultValue = null != n ? "" + ut(n) : "")
    : e.defaultValue !== t && (e.defaultValue = t);
}
function xt(e, t, n, r) {
  if (null == t) {
    if (null != r) {
      if (null != n) throw Error(a(92));
      if (M(r)) {
        if (1 < r.length) throw Error(a(93));
        r = r[0];
      }
      n = r;
    }
    null == n && (n = ""), (t = n);
  }
  (n = ut(t)),
    (e.defaultValue = n),
    (r = e.textContent) === n && "" !== r && null !== r && (e.value = r),
    pt(e);
}
function wt(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && 3 === n.nodeType)
      return void (n.nodeValue = t);
  }
  e.textContent = t;
}
var Et = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " ",
  ),
);
function Tt(e, t, n) {
  var r = 0 === t.indexOf("--");
  null == n || "boolean" == typeof n || "" === n
    ? r
      ? e.setProperty(t, "")
      : "float" === t
        ? (e.cssFloat = "")
        : (e[t] = "")
    : r
      ? e.setProperty(t, n)
      : "number" != typeof n || 0 === n || Et.has(t)
        ? "float" === t
          ? (e.cssFloat = n)
          : (e[t] = ("" + n).trim())
        : (e[t] = n + "px");
}
function kt(e, t, n) {
  if (null != t && "object" != typeof t) throw Error(a(62));
  if (((e = e.style), null != n)) {
    for (var r in n)
      !n.hasOwnProperty(r) ||
        (null != t && t.hasOwnProperty(r)) ||
        (0 === r.indexOf("--")
          ? e.setProperty(r, "")
          : "float" === r
            ? (e.cssFloat = "")
            : (e[r] = ""));
    for (var o in t)
      (r = t[o]), t.hasOwnProperty(o) && n[o] !== r && Tt(e, o, r);
  } else for (var i in t) t.hasOwnProperty(i) && Tt(e, i, t[i]);
}
function Ct(e) {
  if (-1 === e.indexOf("-")) return !1;
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var It = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"],
  ]),
  At =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Ot(e) {
  return At.test("" + e)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : e;
}
function Rt() {}
var Mt = null;
function Pt(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement &&
      (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  );
}
var Nt = null,
  Dt = null;
function jt(e) {
  var t = Ze(e);
  if (t && (e = t.stateNode)) {
    var n = e[ze] || null;
    e: switch (((e = t.stateNode), t.type)) {
      case "input":
        if (
          (yt(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
          ),
          (t = n.name),
          "radio" === n.type && null != t)
        ) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              'input[name="' + gt("" + t) + '"][type="radio"]',
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = r[ze] || null;
              if (!o) throw Error(a(90));
              yt(
                r,
                o.value,
                o.defaultValue,
                o.defaultValue,
                o.checked,
                o.defaultChecked,
                o.type,
                o.name,
              );
            }
          }
          for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && ft(r);
        }
        break e;
      case "textarea":
        _t(e, n.value, n.defaultValue);
        break e;
      case "select":
        null != (t = n.value) && St(e, !!n.multiple, t, !1);
    }
  }
}
var Lt = !1;
function Ft(e, t, n) {
  if (Lt) return e(t, n);
  Lt = !0;
  try {
    return e(t);
  } finally {
    if (
      ((Lt = !1),
      (null !== Nt || null !== Dt) &&
        (Jc(), Nt && ((t = Nt), (e = Dt), (Dt = Nt = null), jt(t), e)))
    )
      for (t = 0; t < e.length; t++) jt(e[t]);
  }
}
function Ut(e, t) {
  var n = e.stateNode;
  if (null === n) return null;
  var r = n[ze] || null;
  if (null === r) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        (r = !(
          "button" === (e = e.type) ||
          "input" === e ||
          "select" === e ||
          "textarea" === e
        )),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
  return n;
}
var Bt = !(
    "undefined" == typeof window ||
    void 0 === window.document ||
    void 0 === window.document.createElement
  ),
  zt = !1;
if (Bt)
  try {
    var Ht = {};
    Object.defineProperty(Ht, "passive", {
      get: function () {
        zt = !0;
      },
    }),
      window.addEventListener("test", Ht, Ht),
      window.removeEventListener("test", Ht, Ht);
  } catch (e) {
    zt = !1;
  }
var Vt = null,
  qt = null,
  Gt = null;
function Wt() {
  if (Gt) return Gt;
  var e,
    t,
    n = qt,
    r = n.length,
    o = "value" in Vt ? Vt.value : Vt.textContent,
    i = o.length;
  for (e = 0; e < r && n[e] === o[e]; e++);
  var a = r - e;
  for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
  return (Gt = o.slice(e, 1 < t ? 1 - t : void 0));
}
function $t(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
    10 === e && (e = 13),
    32 <= e || 13 === e ? e : 0
  );
}
function Yt() {
  return !0;
}
function Kt() {
  return !1;
}
function Zt(e) {
  function t(t, n, r, o, i) {
    for (var a in ((this._reactName = t),
    (this._targetInst = r),
    (this.type = n),
    (this.nativeEvent = o),
    (this.target = i),
    (this.currentTarget = null),
    e))
      e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
      )
        ? Yt
        : Kt),
      (this.isPropagationStopped = Kt),
      this
    );
  }
  return (
    p(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : "unknown" != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = Yt));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = Yt));
      },
      persist: function () {},
      isPersistent: Yt,
    }),
    t
  );
}
var Qt,
  Jt,
  Xt,
  en = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tn = Zt(en),
  nn = p({}, en, { view: 0, detail: 0 }),
  rn = Zt(nn),
  on = p({}, nn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gn,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return void 0 === e.relatedTarget
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Xt &&
            (Xt && "mousemove" === e.type
              ? ((Qt = e.screenX - Xt.screenX), (Jt = e.screenY - Xt.screenY))
              : (Jt = Qt = 0),
            (Xt = e)),
          Qt);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Jt;
    },
  }),
  an = Zt(on),
  sn = Zt(p({}, on, { dataTransfer: 0 })),
  ln = Zt(p({}, nn, { relatedTarget: 0 })),
  cn = Zt(p({}, en, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
  un = Zt(
    p({}, en, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
  ),
  dn = Zt(p({}, en, { data: 0 })),
  pn = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  fn = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hn = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mn(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = hn[e]) && !!t[e];
}
function gn() {
  return mn;
}
var yn = Zt(
    p({}, nn, {
      key: function (e) {
        if (e.key) {
          var t = pn[e.key] || e.key;
          if ("Unidentified" !== t) return t;
        }
        return "keypress" === e.type
          ? 13 === (e = $t(e))
            ? "Enter"
            : String.fromCharCode(e)
          : "keydown" === e.type || "keyup" === e.type
            ? fn[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: gn,
      charCode: function (e) {
        return "keypress" === e.type ? $t(e) : 0;
      },
      keyCode: function (e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return "keypress" === e.type
          ? $t(e)
          : "keydown" === e.type || "keyup" === e.type
            ? e.keyCode
            : 0;
      },
    }),
  ),
  vn = Zt(
    p({}, on, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
  ),
  bn = Zt(
    p({}, nn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gn,
    }),
  ),
  Sn = Zt(p({}, en, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  _n = Zt(
    p({}, on, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
  ),
  xn = Zt(p({}, en, { newState: 0, oldState: 0 })),
  wn = [9, 13, 27, 32],
  En = Bt && "CompositionEvent" in window,
  Tn = null;
Bt && "documentMode" in document && (Tn = document.documentMode);
var kn = Bt && "TextEvent" in window && !Tn,
  Cn = Bt && (!En || (Tn && 8 < Tn && 11 >= Tn)),
  In = String.fromCharCode(32),
  An = !1;
function On(e, t) {
  switch (e) {
    case "keyup":
      return -1 !== wn.indexOf(t.keyCode);
    case "keydown":
      return 229 !== t.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Rn(e) {
  return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
}
var Mn = !1,
  Pn = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
function Nn(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return "input" === t ? !!Pn[e.type] : "textarea" === t;
}
function Dn(e, t, n, r) {
  Nt ? (Dt ? Dt.push(r) : (Dt = [r])) : (Nt = r),
    0 < (t = nd(t, "onChange")).length &&
      ((n = new tn("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jn = null,
  Ln = null;
function Fn(e) {
  Yu(e, 0);
}
function Un(e) {
  if (ft(Qe(e))) return e;
}
function Bn(e, t) {
  if ("change" === e) return t;
}
var zn = !1;
if (Bt) {
  var Hn;
  if (Bt) {
    var Vn = "oninput" in document;
    if (!Vn) {
      var qn = document.createElement("div");
      qn.setAttribute("oninput", "return;"),
        (Vn = "function" == typeof qn.oninput);
    }
    Hn = Vn;
  } else Hn = !1;
  zn = Hn && (!document.documentMode || 9 < document.documentMode);
}
function Gn() {
  jn && (jn.detachEvent("onpropertychange", Wn), (Ln = jn = null));
}
function Wn(e) {
  if ("value" === e.propertyName && Un(Ln)) {
    var t = [];
    Dn(t, Ln, e, Pt(e)), Ft(Fn, t);
  }
}
function $n(e, t, n) {
  "focusin" === e
    ? (Gn(), (Ln = n), (jn = t).attachEvent("onpropertychange", Wn))
    : "focusout" === e && Gn();
}
function Yn(e) {
  if ("selectionchange" === e || "keyup" === e || "keydown" === e)
    return Un(Ln);
}
function Kn(e, t) {
  if ("click" === e) return Un(t);
}
function Zn(e, t) {
  if ("input" === e || "change" === e) return Un(t);
}
var Qn =
  "function" == typeof Object.is
    ? Object.is
    : function (e, t) {
        return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
      };
function Jn(e, t) {
  if (Qn(e, t)) return !0;
  if ("object" != typeof e || null === e || "object" != typeof t || null === t)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ne.call(t, o) || !Qn(e[o], t[o])) return !1;
  }
  return !0;
}
function Xn(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function er(e, t) {
  var n,
    r = Xn(e);
  for (e = 0; r; ) {
    if (3 === r.nodeType) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Xn(r);
  }
}
function tr(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || 3 !== e.nodeType) &&
        (t && 3 === t.nodeType
          ? tr(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : !!e.compareDocumentPosition &&
              !!(16 & e.compareDocumentPosition(t)))))
  );
}
function nr(e) {
  for (
    var t = ht(
      (e =
        null != e &&
        null != e.ownerDocument &&
        null != e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window).document,
    );
    t instanceof e.HTMLIFrameElement;

  ) {
    try {
      var n = "string" == typeof t.contentWindow.location.href;
    } catch (e) {
      n = !1;
    }
    if (!n) break;
    t = ht((e = t.contentWindow).document);
  }
  return t;
}
function rr(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    (("input" === t &&
      ("text" === e.type ||
        "search" === e.type ||
        "tel" === e.type ||
        "url" === e.type ||
        "password" === e.type)) ||
      "textarea" === t ||
      "true" === e.contentEditable)
  );
}
var or = Bt && "documentMode" in document && 11 >= document.documentMode,
  ir = null,
  ar = null,
  sr = null,
  lr = !1;
function cr(e, t, n) {
  var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
  lr ||
    null == ir ||
    ir !== ht(r) ||
    ((r =
      "selectionStart" in (r = ir) && rr(r)
        ? { start: r.selectionStart, end: r.selectionEnd }
        : {
            anchorNode: (r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          }),
    (sr && Jn(sr, r)) ||
      ((sr = r),
      0 < (r = nd(ar, "onSelect")).length &&
        ((t = new tn("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ir))));
}
function ur(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var dr = {
    animationend: ur("Animation", "AnimationEnd"),
    animationiteration: ur("Animation", "AnimationIteration"),
    animationstart: ur("Animation", "AnimationStart"),
    transitionrun: ur("Transition", "TransitionRun"),
    transitionstart: ur("Transition", "TransitionStart"),
    transitioncancel: ur("Transition", "TransitionCancel"),
    transitionend: ur("Transition", "TransitionEnd"),
  },
  pr = {},
  fr = {};
function hr(e) {
  if (pr[e]) return pr[e];
  if (!dr[e]) return e;
  var t,
    n = dr[e];
  for (t in n) if (n.hasOwnProperty(t) && t in fr) return (pr[e] = n[t]);
  return e;
}
Bt &&
  ((fr = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dr.animationend.animation,
    delete dr.animationiteration.animation,
    delete dr.animationstart.animation),
  "TransitionEvent" in window || delete dr.transitionend.transition);
var mr = hr("animationend"),
  gr = hr("animationiteration"),
  yr = hr("animationstart"),
  vr = hr("transitionrun"),
  br = hr("transitionstart"),
  Sr = hr("transitioncancel"),
  _r = hr("transitionend"),
  xr = new Map(),
  wr =
    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Er(e, t) {
  xr.set(e, t), nt(t, [e]);
}
wr.push("scrollEnd");
var Tr =
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
  kr = [],
  Cr = 0,
  Ir = 0;
function Ar() {
  for (var e = Cr, t = (Ir = Cr = 0); t < e; ) {
    var n = kr[t];
    kr[t++] = null;
    var r = kr[t];
    kr[t++] = null;
    var o = kr[t];
    kr[t++] = null;
    var i = kr[t];
    if (((kr[t++] = null), null !== r && null !== o)) {
      var a = r.pending;
      null === a ? (o.next = o) : ((o.next = a.next), (a.next = o)),
        (r.pending = o);
    }
    0 !== i && Pr(n, o, i);
  }
}
function Or(e, t, n, r) {
  (kr[Cr++] = e),
    (kr[Cr++] = t),
    (kr[Cr++] = n),
    (kr[Cr++] = r),
    (Ir |= r),
    (e.lanes |= r),
    null !== (e = e.alternate) && (e.lanes |= r);
}
function Rr(e, t, n, r) {
  return Or(e, t, n, r), Nr(e);
}
function Mr(e, t) {
  return Or(e, null, null, t), Nr(e);
}
function Pr(e, t, n) {
  e.lanes |= n;
  var r = e.alternate;
  null !== r && (r.lanes |= n);
  for (var o = !1, i = e.return; null !== i; )
    (i.childLanes |= n),
      null !== (r = i.alternate) && (r.childLanes |= n),
      22 === i.tag &&
        (null === (e = i.stateNode) || 1 & e._visibility || (o = !0)),
      (e = i),
      (i = i.return);
  return 3 === e.tag
    ? ((i = e.stateNode),
      o &&
        null !== t &&
        ((o = 31 - be(n)),
        null === (r = (e = i.hiddenUpdates)[o]) ? (e[o] = [t]) : r.push(t),
        (t.lane = 536870912 | n)),
      i)
    : null;
}
function Nr(e) {
  if (50 < Vc) throw ((Vc = 0), (qc = null), Error(a(185)));
  for (var t = e.return; null !== t; ) t = (e = t).return;
  return 3 === e.tag ? e.stateNode : null;
}
var Dr = {};
function jr(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.refCleanup = this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Lr(e, t, n, r) {
  return new jr(e, t, n, r);
}
function Fr(e) {
  return !(!(e = e.prototype) || !e.isReactComponent);
}
function Ur(e, t) {
  var n = e.alternate;
  return (
    null === n
      ? (((n = Lr(e.tag, t, e.key, e.mode)).elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 65011712 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    (n.refCleanup = e.refCleanup),
    n
  );
}
function Br(e, t) {
  e.flags &= 65011714;
  var n = e.alternate;
  return (
    null === n
      ? ((e.childLanes = 0),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = 0),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.stateNode = null))
      : ((e.childLanes = n.childLanes),
        (e.lanes = n.lanes),
        (e.child = n.child),
        (e.subtreeFlags = 0),
        (e.deletions = null),
        (e.memoizedProps = n.memoizedProps),
        (e.memoizedState = n.memoizedState),
        (e.updateQueue = n.updateQueue),
        (e.type = n.type),
        (t = n.dependencies),
        (e.dependencies =
          null === t
            ? null
            : { lanes: t.lanes, firstContext: t.firstContext })),
    e
  );
}
function zr(e, t, n, r, o, i) {
  var s = 0;
  if (((r = e), "function" == typeof e)) Fr(e) && (s = 1);
  else if ("string" == typeof e)
    s = (function (e, t, n) {
      if (1 === n || null != t.itemProp) return !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (
            "string" != typeof t.precedence ||
            "string" != typeof t.href ||
            "" === t.href
          )
            break;
          return !0;
        case "link":
          if (
            "string" != typeof t.rel ||
            "string" != typeof t.href ||
            "" === t.href ||
            t.onLoad ||
            t.onError
          )
            break;
          return (
            "stylesheet" !== t.rel ||
            ((e = t.disabled), "string" == typeof t.precedence && null == e)
          );
        case "script":
          if (
            t.async &&
            "function" != typeof t.async &&
            "symbol" != typeof t.async &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            "string" == typeof t.src
          )
            return !0;
      }
      return !1;
    })(e, n, V.current)
      ? 26
      : "html" === e || "head" === e || "body" === e
        ? 27
        : 5;
  else
    e: switch (e) {
      case k:
        return ((e = Lr(31, n, t, o)).elementType = k), (e.lanes = i), e;
      case g:
        return Hr(n.children, o, i, t);
      case y:
        (s = 8), (o |= 24);
        break;
      case v:
        return ((e = Lr(12, n, t, 2 | o)).elementType = v), (e.lanes = i), e;
      case x:
        return ((e = Lr(13, n, t, o)).elementType = x), (e.lanes = i), e;
      case w:
        return ((e = Lr(19, n, t, o)).elementType = w), (e.lanes = i), e;
      default:
        if ("object" == typeof e && null !== e)
          switch (e.$$typeof) {
            case S:
              s = 10;
              break e;
            case b:
              s = 9;
              break e;
            case _:
              s = 11;
              break e;
            case E:
              s = 14;
              break e;
            case T:
              (s = 16), (r = null);
              break e;
          }
        (s = 29),
          (n = Error(a(130, null === e ? "null" : typeof e, ""))),
          (r = null);
    }
  return ((t = Lr(s, n, t, o)).elementType = e), (t.type = r), (t.lanes = i), t;
}
function Hr(e, t, n, r) {
  return ((e = Lr(7, e, r, t)).lanes = n), e;
}
function Vr(e, t, n) {
  return ((e = Lr(6, e, null, t)).lanes = n), e;
}
function qr(e) {
  var t = Lr(18, null, null, 0);
  return (t.stateNode = e), t;
}
function Gr(e, t, n) {
  return (
    ((t = Lr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
var Wr = new WeakMap();
function $r(e, t) {
  if ("object" == typeof e && null !== e) {
    var n = Wr.get(e);
    return void 0 !== n
      ? n
      : ((t = { value: e, source: t, stack: te(t) }), Wr.set(e, t), t);
  }
  return { value: e, source: t, stack: te(t) };
}
var Yr = [],
  Kr = 0,
  Zr = null,
  Qr = 0,
  Jr = [],
  Xr = 0,
  eo = null,
  to = 1,
  no = "";
function ro(e, t) {
  (Yr[Kr++] = Qr), (Yr[Kr++] = Zr), (Zr = e), (Qr = t);
}
function oo(e, t, n) {
  (Jr[Xr++] = to), (Jr[Xr++] = no), (Jr[Xr++] = eo), (eo = e);
  var r = to;
  e = no;
  var o = 32 - be(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - be(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (to = (1 << (32 - be(t) + o)) | (n << o) | r),
      (no = i + e);
  } else (to = (1 << i) | (n << o) | r), (no = e);
}
function io(e) {
  null !== e.return && (ro(e, 1), oo(e, 1, 0));
}
function ao(e) {
  for (; e === Zr; )
    (Zr = Yr[--Kr]), (Yr[Kr] = null), (Qr = Yr[--Kr]), (Yr[Kr] = null);
  for (; e === eo; )
    (eo = Jr[--Xr]),
      (Jr[Xr] = null),
      (no = Jr[--Xr]),
      (Jr[Xr] = null),
      (to = Jr[--Xr]),
      (Jr[Xr] = null);
}
function so(e, t) {
  (Jr[Xr++] = to),
    (Jr[Xr++] = no),
    (Jr[Xr++] = eo),
    (to = t.id),
    (no = t.overflow),
    (eo = e);
}
var lo = null,
  co = null,
  uo = !1,
  po = null,
  fo = !1,
  ho = Error(a(519));
function mo(e) {
  throw (
    (_o(
      $r(
        Error(
          a(
            418,
            1 < arguments.length && void 0 !== arguments[1] && arguments[1]
              ? "text"
              : "HTML",
            "",
          ),
        ),
        e,
      ),
    ),
    ho)
  );
}
function go(e) {
  var t = e.stateNode,
    n = e.type,
    r = e.memoizedProps;
  switch (((t[Be] = e), (t[ze] = r), n)) {
    case "dialog":
      Ku("cancel", t), Ku("close", t);
      break;
    case "iframe":
    case "object":
    case "embed":
      Ku("load", t);
      break;
    case "video":
    case "audio":
      for (n = 0; n < Wu.length; n++) Ku(Wu[n], t);
      break;
    case "source":
      Ku("error", t);
      break;
    case "img":
    case "image":
    case "link":
      Ku("error", t), Ku("load", t);
      break;
    case "details":
      Ku("toggle", t);
      break;
    case "input":
      Ku("invalid", t),
        vt(
          t,
          r.value,
          r.defaultValue,
          r.checked,
          r.defaultChecked,
          r.type,
          r.name,
          !0,
        );
      break;
    case "select":
      Ku("invalid", t);
      break;
    case "textarea":
      Ku("invalid", t), xt(t, r.value, r.defaultValue, r.children);
  }
  ("string" != typeof (n = r.children) &&
    "number" != typeof n &&
    "bigint" != typeof n) ||
  t.textContent === "" + n ||
  !0 === r.suppressHydrationWarning ||
  ld(t.textContent, n)
    ? (null != r.popover && (Ku("beforetoggle", t), Ku("toggle", t)),
      null != r.onScroll && Ku("scroll", t),
      null != r.onScrollEnd && Ku("scrollend", t),
      null != r.onClick && (t.onclick = Rt),
      (t = !0))
    : (t = !1),
    t || mo(e, !0);
}
function yo(e) {
  for (lo = e.return; lo; )
    switch (lo.tag) {
      case 5:
      case 31:
      case 13:
        return void (fo = !1);
      case 27:
      case 3:
        return void (fo = !0);
      default:
        lo = lo.return;
    }
}
function vo(e) {
  if (e !== lo) return !1;
  if (!uo) return yo(e), (uo = !0), !1;
  var t,
    n = e.tag;
  if (
    ((t = 3 !== n && 27 !== n) &&
      ((t = 5 === n) &&
        (t =
          !("form" !== (t = e.type) && "button" !== t) ||
          vd(e.type, e.memoizedProps)),
      (t = !t)),
    t && co && mo(e),
    yo(e),
    13 === n)
  ) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
      throw Error(a(317));
    co = Nd(e);
  } else if (31 === n) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
      throw Error(a(317));
    co = Nd(e);
  } else
    27 === n
      ? ((n = co), Td(e.type) ? ((e = Pd), (Pd = null), (co = e)) : (co = n))
      : (co = lo ? Md(e.stateNode.nextSibling) : null);
  return !0;
}
function bo() {
  (co = lo = null), (uo = !1);
}
function So() {
  var e = po;
  return (
    null !== e && (null === Ac ? (Ac = e) : Ac.push.apply(Ac, e), (po = null)),
    e
  );
}
function _o(e) {
  null === po ? (po = [e]) : po.push(e);
}
var xo = F(null),
  wo = null,
  Eo = null;
function To(e, t, n) {
  B(xo, t._currentValue), (t._currentValue = n);
}
function ko(e) {
  (e._currentValue = xo.current), U(xo);
}
function Co(e, t, n) {
  for (; null !== e; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
        : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Io(e, t, n, r) {
  var o = e.child;
  for (null !== o && (o.return = e); null !== o; ) {
    var i = o.dependencies;
    if (null !== i) {
      var s = o.child;
      i = i.firstContext;
      e: for (; null !== i; ) {
        var l = i;
        i = o;
        for (var c = 0; c < t.length; c++)
          if (l.context === t[c]) {
            (i.lanes |= n),
              null !== (l = i.alternate) && (l.lanes |= n),
              Co(i.return, n, e),
              r || (s = null);
            break e;
          }
        i = l.next;
      }
    } else if (18 === o.tag) {
      if (null === (s = o.return)) throw Error(a(341));
      (s.lanes |= n),
        null !== (i = s.alternate) && (i.lanes |= n),
        Co(s, n, e),
        (s = null);
    } else s = o.child;
    if (null !== s) s.return = o;
    else
      for (s = o; null !== s; ) {
        if (s === e) {
          s = null;
          break;
        }
        if (null !== (o = s.sibling)) {
          (o.return = s.return), (s = o);
          break;
        }
        s = s.return;
      }
    o = s;
  }
}
function Ao(e, t, n, r) {
  e = null;
  for (var o = t, i = !1; null !== o; ) {
    if (!i)
      if (524288 & o.flags) i = !0;
      else if (262144 & o.flags) break;
    if (10 === o.tag) {
      var s = o.alternate;
      if (null === s) throw Error(a(387));
      if (null !== (s = s.memoizedProps)) {
        var l = o.type;
        Qn(o.pendingProps.value, s.value) ||
          (null !== e ? e.push(l) : (e = [l]));
      }
    } else if (o === W.current) {
      if (null === (s = o.alternate)) throw Error(a(387));
      s.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
        (null !== e ? e.push(cp) : (e = [cp]));
    }
    o = o.return;
  }
  null !== e && Io(t, e, n, r), (t.flags |= 262144);
}
function Oo(e) {
  for (e = e.firstContext; null !== e; ) {
    if (!Qn(e.context._currentValue, e.memoizedValue)) return !0;
    e = e.next;
  }
  return !1;
}
function Ro(e) {
  (wo = e),
    (Eo = null),
    null !== (e = e.dependencies) && (e.firstContext = null);
}
function Mo(e) {
  return No(wo, e);
}
function Po(e, t) {
  return null === wo && Ro(e), No(e, t);
}
function No(e, t) {
  var n = t._currentValue;
  if (((t = { context: t, memoizedValue: n, next: null }), null === Eo)) {
    if (null === e) throw Error(a(308));
    (Eo = t),
      (e.dependencies = { lanes: 0, firstContext: t }),
      (e.flags |= 524288);
  } else Eo = Eo.next = t;
  return n;
}
var Do =
    "undefined" != typeof AbortController
      ? AbortController
      : function () {
          var e = [],
            t = (this.signal = {
              aborted: !1,
              addEventListener: function (t, n) {
                e.push(n);
              },
            });
          this.abort = function () {
            (t.aborted = !0),
              e.forEach(function (e) {
                return e();
              });
          };
        },
  jo = r.unstable_scheduleCallback,
  Lo = r.unstable_NormalPriority,
  Fo = {
    $$typeof: S,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
  };
function Uo() {
  return { controller: new Do(), data: new Map(), refCount: 0 };
}
function Bo(e) {
  e.refCount--,
    0 === e.refCount &&
      jo(Lo, function () {
        e.controller.abort();
      });
}
var zo = null,
  Ho = 0,
  Vo = 0,
  qo = null;
function Go() {
  if (0 === --Ho && null !== zo) {
    null !== qo && (qo.status = "fulfilled");
    var e = zo;
    (zo = null), (Vo = 0), (qo = null);
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
}
var Wo = P.S;
P.S = function (e, t) {
  (Mc = se()),
    "object" == typeof t &&
      null !== t &&
      "function" == typeof t.then &&
      (function (e, t) {
        if (null === zo) {
          var n = (zo = []);
          (Ho = 0),
            (Vo = zu()),
            (qo = {
              status: "pending",
              value: void 0,
              then: function (e) {
                n.push(e);
              },
            });
        }
        Ho++, t.then(Go, Go);
      })(0, t),
    null !== Wo && Wo(e, t);
};
var $o = F(null);
function Yo() {
  var e = $o.current;
  return null !== e ? e : fc.pooledCache;
}
function Ko(e, t) {
  B($o, null === t ? $o.current : t.pool);
}
function Zo() {
  var e = Yo();
  return null === e ? null : { parent: Fo._currentValue, pool: e };
}
var Qo = Error(a(460)),
  Jo = Error(a(474)),
  Xo = Error(a(542)),
  ei = { then: function () {} };
function ti(e) {
  return "fulfilled" === (e = e.status) || "rejected" === e;
}
function ni(e, t, n) {
  switch (
    (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Rt, Rt), (t = n)),
    t.status)
  ) {
    case "fulfilled":
      return t.value;
    case "rejected":
      throw (ai((e = t.reason)), e);
    default:
      if ("string" == typeof t.status) t.then(Rt, Rt);
      else {
        if (null !== (e = fc) && 100 < e.shellSuspendCounter)
          throw Error(a(482));
        ((e = t).status = "pending"),
          e.then(
            function (e) {
              if ("pending" === t.status) {
                var n = t;
                (n.status = "fulfilled"), (n.value = e);
              }
            },
            function (e) {
              if ("pending" === t.status) {
                var n = t;
                (n.status = "rejected"), (n.reason = e);
              }
            },
          );
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw (ai((e = t.reason)), e);
      }
      throw ((oi = t), Qo);
  }
}
function ri(e) {
  try {
    return (0, e._init)(e._payload);
  } catch (e) {
    if (null !== e && "object" == typeof e && "function" == typeof e.then)
      throw ((oi = e), Qo);
    throw e;
  }
}
var oi = null;
function ii() {
  if (null === oi) throw Error(a(459));
  var e = oi;
  return (oi = null), e;
}
function ai(e) {
  if (e === Qo || e === Xo) throw Error(a(483));
}
var si = null,
  li = 0;
function ci(e) {
  var t = li;
  return (li += 1), null === si && (si = []), ni(si, e, t);
}
function ui(e, t) {
  (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
}
function di(e, t) {
  if (t.$$typeof === f) throw Error(a(525));
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      a(
        31,
        "[object Object]" === e
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function pi(e) {
  function t(t, n) {
    if (e) {
      var r = t.deletions;
      null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
    }
  }
  function n(n, r) {
    if (!e) return null;
    for (; null !== r; ) t(n, r), (r = r.sibling);
    return null;
  }
  function r(e) {
    for (var t = new Map(); null !== e; )
      null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling);
    return t;
  }
  function o(e, t) {
    return ((e = Ur(e, t)).index = 0), (e.sibling = null), e;
  }
  function i(t, n, r) {
    return (
      (t.index = r),
      e
        ? null !== (r = t.alternate)
          ? (r = r.index) < n
            ? ((t.flags |= 67108866), n)
            : r
          : ((t.flags |= 67108866), n)
        : ((t.flags |= 1048576), n)
    );
  }
  function s(t) {
    return e && null === t.alternate && (t.flags |= 67108866), t;
  }
  function l(e, t, n, r) {
    return null === t || 6 !== t.tag
      ? (((t = Vr(n, e.mode, r)).return = e), t)
      : (((t = o(t, n)).return = e), t);
  }
  function c(e, t, n, r) {
    var i = n.type;
    return i === g
      ? d(e, t, n.props.children, r, n.key)
      : null !== t &&
          (t.elementType === i ||
            ("object" == typeof i &&
              null !== i &&
              i.$$typeof === T &&
              ri(i) === t.type))
        ? (ui((t = o(t, n.props)), n), (t.return = e), t)
        : (ui((t = zr(n.type, n.key, n.props, null, e.mode, r)), n),
          (t.return = e),
          t);
  }
  function u(e, t, n, r) {
    return null === t ||
      4 !== t.tag ||
      t.stateNode.containerInfo !== n.containerInfo ||
      t.stateNode.implementation !== n.implementation
      ? (((t = Gr(n, e.mode, r)).return = e), t)
      : (((t = o(t, n.children || [])).return = e), t);
  }
  function d(e, t, n, r, i) {
    return null === t || 7 !== t.tag
      ? (((t = Hr(n, e.mode, r, i)).return = e), t)
      : (((t = o(t, n)).return = e), t);
  }
  function p(e, t, n) {
    if (
      ("string" == typeof t && "" !== t) ||
      "number" == typeof t ||
      "bigint" == typeof t
    )
      return ((t = Vr("" + t, e.mode, n)).return = e), t;
    if ("object" == typeof t && null !== t) {
      switch (t.$$typeof) {
        case h:
          return (
            ui((n = zr(t.type, t.key, t.props, null, e.mode, n)), t),
            (n.return = e),
            n
          );
        case m:
          return ((t = Gr(t, e.mode, n)).return = e), t;
        case T:
          return p(e, (t = ri(t)), n);
      }
      if (M(t) || A(t)) return ((t = Hr(t, e.mode, n, null)).return = e), t;
      if ("function" == typeof t.then) return p(e, ci(t), n);
      if (t.$$typeof === S) return p(e, Po(e, t), n);
      di(e, t);
    }
    return null;
  }
  function f(e, t, n, r) {
    var o = null !== t ? t.key : null;
    if (
      ("string" == typeof n && "" !== n) ||
      "number" == typeof n ||
      "bigint" == typeof n
    )
      return null !== o ? null : l(e, t, "" + n, r);
    if ("object" == typeof n && null !== n) {
      switch (n.$$typeof) {
        case h:
          return n.key === o ? c(e, t, n, r) : null;
        case m:
          return n.key === o ? u(e, t, n, r) : null;
        case T:
          return f(e, t, (n = ri(n)), r);
      }
      if (M(n) || A(n)) return null !== o ? null : d(e, t, n, r, null);
      if ("function" == typeof n.then) return f(e, t, ci(n), r);
      if (n.$$typeof === S) return f(e, t, Po(e, n), r);
      di(e, n);
    }
    return null;
  }
  function y(e, t, n, r, o) {
    if (
      ("string" == typeof r && "" !== r) ||
      "number" == typeof r ||
      "bigint" == typeof r
    )
      return l(t, (e = e.get(n) || null), "" + r, o);
    if ("object" == typeof r && null !== r) {
      switch (r.$$typeof) {
        case h:
          return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
        case m:
          return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
        case T:
          return y(e, t, n, (r = ri(r)), o);
      }
      if (M(r) || A(r)) return d(t, (e = e.get(n) || null), r, o, null);
      if ("function" == typeof r.then) return y(e, t, n, ci(r), o);
      if (r.$$typeof === S) return y(e, t, n, Po(t, r), o);
      di(t, r);
    }
    return null;
  }
  function v(l, c, u, d) {
    if (
      ("object" == typeof u &&
        null !== u &&
        u.type === g &&
        null === u.key &&
        (u = u.props.children),
      "object" == typeof u && null !== u)
    ) {
      switch (u.$$typeof) {
        case h:
          e: {
            for (var b = u.key; null !== c; ) {
              if (c.key === b) {
                if ((b = u.type) === g) {
                  if (7 === c.tag) {
                    n(l, c.sibling),
                      ((d = o(c, u.props.children)).return = l),
                      (l = d);
                    break e;
                  }
                } else if (
                  c.elementType === b ||
                  ("object" == typeof b &&
                    null !== b &&
                    b.$$typeof === T &&
                    ri(b) === c.type)
                ) {
                  n(l, c.sibling),
                    ui((d = o(c, u.props)), u),
                    (d.return = l),
                    (l = d);
                  break e;
                }
                n(l, c);
                break;
              }
              t(l, c), (c = c.sibling);
            }
            u.type === g
              ? (((d = Hr(u.props.children, l.mode, d, u.key)).return = l),
                (l = d))
              : (ui((d = zr(u.type, u.key, u.props, null, l.mode, d)), u),
                (d.return = l),
                (l = d));
          }
          return s(l);
        case m:
          e: {
            for (b = u.key; null !== c; ) {
              if (c.key === b) {
                if (
                  4 === c.tag &&
                  c.stateNode.containerInfo === u.containerInfo &&
                  c.stateNode.implementation === u.implementation
                ) {
                  n(l, c.sibling),
                    ((d = o(c, u.children || [])).return = l),
                    (l = d);
                  break e;
                }
                n(l, c);
                break;
              }
              t(l, c), (c = c.sibling);
            }
            ((d = Gr(u, l.mode, d)).return = l), (l = d);
          }
          return s(l);
        case T:
          return v(l, c, (u = ri(u)), d);
      }
      if (M(u))
        return (function (o, a, s, l) {
          for (
            var c = null, u = null, d = a, h = (a = 0), m = null;
            null !== d && h < s.length;
            h++
          ) {
            d.index > h ? ((m = d), (d = null)) : (m = d.sibling);
            var g = f(o, d, s[h], l);
            if (null === g) {
              null === d && (d = m);
              break;
            }
            e && d && null === g.alternate && t(o, d),
              (a = i(g, a, h)),
              null === u ? (c = g) : (u.sibling = g),
              (u = g),
              (d = m);
          }
          if (h === s.length) return n(o, d), uo && ro(o, h), c;
          if (null === d) {
            for (; h < s.length; h++)
              null !== (d = p(o, s[h], l)) &&
                ((a = i(d, a, h)),
                null === u ? (c = d) : (u.sibling = d),
                (u = d));
            return uo && ro(o, h), c;
          }
          for (d = r(d); h < s.length; h++)
            null !== (m = y(d, o, h, s[h], l)) &&
              (e &&
                null !== m.alternate &&
                d.delete(null === m.key ? h : m.key),
              (a = i(m, a, h)),
              null === u ? (c = m) : (u.sibling = m),
              (u = m));
          return (
            e &&
              d.forEach(function (e) {
                return t(o, e);
              }),
            uo && ro(o, h),
            c
          );
        })(l, c, u, d);
      if (A(u)) {
        if ("function" != typeof (b = A(u))) throw Error(a(150));
        return (function (o, s, l, c) {
          if (null == l) throw Error(a(151));
          for (
            var u = null, d = null, h = s, m = (s = 0), g = null, v = l.next();
            null !== h && !v.done;
            m++, v = l.next()
          ) {
            h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
            var b = f(o, h, v.value, c);
            if (null === b) {
              null === h && (h = g);
              break;
            }
            e && h && null === b.alternate && t(o, h),
              (s = i(b, s, m)),
              null === d ? (u = b) : (d.sibling = b),
              (d = b),
              (h = g);
          }
          if (v.done) return n(o, h), uo && ro(o, m), u;
          if (null === h) {
            for (; !v.done; m++, v = l.next())
              null !== (v = p(o, v.value, c)) &&
                ((s = i(v, s, m)),
                null === d ? (u = v) : (d.sibling = v),
                (d = v));
            return uo && ro(o, m), u;
          }
          for (h = r(h); !v.done; m++, v = l.next())
            null !== (v = y(h, o, m, v.value, c)) &&
              (e &&
                null !== v.alternate &&
                h.delete(null === v.key ? m : v.key),
              (s = i(v, s, m)),
              null === d ? (u = v) : (d.sibling = v),
              (d = v));
          return (
            e &&
              h.forEach(function (e) {
                return t(o, e);
              }),
            uo && ro(o, m),
            u
          );
        })(l, c, (u = b.call(u)), d);
      }
      if ("function" == typeof u.then) return v(l, c, ci(u), d);
      if (u.$$typeof === S) return v(l, c, Po(l, u), d);
      di(l, u);
    }
    return ("string" == typeof u && "" !== u) ||
      "number" == typeof u ||
      "bigint" == typeof u
      ? ((u = "" + u),
        null !== c && 6 === c.tag
          ? (n(l, c.sibling), ((d = o(c, u)).return = l), (l = d))
          : (n(l, c), ((d = Vr(u, l.mode, d)).return = l), (l = d)),
        s(l))
      : n(l, c);
  }
  return function (e, t, n, r) {
    try {
      li = 0;
      var o = v(e, t, n, r);
      return (si = null), o;
    } catch (t) {
      if (t === Qo || t === Xo) throw t;
      var i = Lr(29, t, null, e.mode);
      return (i.lanes = r), (i.return = e), i;
    }
  };
}
var fi = pi(!0),
  hi = pi(!1),
  mi = !1;
function gi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null,
  };
}
function yi(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null,
      });
}
function vi(e) {
  return {
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bi(e, t, n) {
  var r = e.updateQueue;
  if (null === r) return null;
  if (((r = r.shared), 2 & pc)) {
    var o = r.pending;
    return (
      null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      (t = Nr(e)),
      Pr(e, null, n),
      t
    );
  }
  return Or(e, r, t, n), Nr(e);
}
function Si(e, t, n) {
  if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), Pe(e, n);
  }
}
function _i(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (null !== r && n === (r = r.updateQueue)) {
    var o = null,
      i = null;
    if (null !== (n = n.firstBaseUpdate)) {
      do {
        var a = {
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: null,
          next: null,
        };
        null === i ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (null !== n);
      null === i ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    return (
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: i,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
      void (e.updateQueue = n)
    );
  }
  null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
var xi = !1;
function wi() {
  if (xi && null !== qo) throw qo;
}
function Ei(e, t, n, r) {
  xi = !1;
  var o = e.updateQueue;
  mi = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (null !== s) {
    o.shared.pending = null;
    var l = s,
      c = l.next;
    (l.next = null), null === a ? (i = c) : (a.next = c), (a = l);
    var u = e.alternate;
    null !== u &&
      (s = (u = u.updateQueue).lastBaseUpdate) !== a &&
      (null === s ? (u.firstBaseUpdate = c) : (s.next = c),
      (u.lastBaseUpdate = l));
  }
  if (null !== i) {
    var d = o.baseState;
    for (a = 0, u = c = l = null, s = i; ; ) {
      var f = -536870913 & s.lane,
        h = f !== s.lane;
      if (h ? (mc & f) === f : (r & f) === f) {
        0 !== f && f === Vo && (xi = !0),
          null !== u &&
            (u = u.next =
              {
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: null,
                next: null,
              });
        e: {
          var m = e,
            g = s;
          f = t;
          var y = n;
          switch (g.tag) {
            case 1:
              if ("function" == typeof (m = g.payload)) {
                d = m.call(y, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (-65537 & m.flags) | 128;
            case 0:
              if (
                null ==
                (f = "function" == typeof (m = g.payload) ? m.call(y, d, f) : m)
              )
                break e;
              d = p({}, d, f);
              break e;
            case 2:
              mi = !0;
          }
        }
        null !== (f = s.callback) &&
          ((e.flags |= 64),
          h && (e.flags |= 8192),
          null === (h = o.callbacks) ? (o.callbacks = [f]) : h.push(f));
      } else
        (h = {
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          null === u ? ((c = u = h), (l = d)) : (u = u.next = h),
          (a |= f);
      if (null === (s = s.next)) {
        if (null === (s = o.shared.pending)) break;
        (s = (h = s).next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    }
    null === u && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = u),
      null === i && (o.shared.lanes = 0),
      (wc |= a),
      (e.lanes = a),
      (e.memoizedState = d);
  }
}
function Ti(e, t) {
  if ("function" != typeof e) throw Error(a(191, e));
  e.call(t);
}
function ki(e, t) {
  var n = e.callbacks;
  if (null !== n)
    for (e.callbacks = null, e = 0; e < n.length; e++) Ti(n[e], t);
}
var Ci = F(null),
  Ii = F(0);
function Ai(e, t) {
  B(Ii, (e = _c)), B(Ci, t), (_c = e | t.baseLanes);
}
function Oi() {
  B(Ii, _c), B(Ci, Ci.current);
}
function Ri() {
  (_c = Ii.current), U(Ci), U(Ii);
}
var Mi = F(null),
  Pi = null;
function Ni(e) {
  var t = e.alternate;
  B(Ui, 1 & Ui.current),
    B(Mi, e),
    null === Pi &&
      (null === t || null !== Ci.current || null !== t.memoizedState) &&
      (Pi = e);
}
function Di(e) {
  B(Ui, Ui.current), B(Mi, e), null === Pi && (Pi = e);
}
function ji(e) {
  22 === e.tag ? (B(Ui, Ui.current), B(Mi, e), null === Pi && (Pi = e)) : Li();
}
function Li() {
  B(Ui, Ui.current), B(Mi, Mi.current);
}
function Fi(e) {
  U(Mi), Pi === e && (Pi = null), U(Ui);
}
var Ui = F(0);
function Bi(e) {
  for (var t = e; null !== t; ) {
    if (13 === t.tag) {
      var n = t.memoizedState;
      if (null !== n && (null === (n = n.dehydrated) || Od(n) || Rd(n)))
        return t;
    } else if (
      19 !== t.tag ||
      ("forwards" !== t.memoizedProps.revealOrder &&
        "backwards" !== t.memoizedProps.revealOrder &&
        "unstable_legacy-backwards" !== t.memoizedProps.revealOrder &&
        "together" !== t.memoizedProps.revealOrder)
    ) {
      if (null !== t.child) {
        (t.child.return = t), (t = t.child);
        continue;
      }
    } else if (128 & t.flags) return t;
    if (t === e) break;
    for (; null === t.sibling; ) {
      if (null === t.return || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var zi = 0,
  Hi = null,
  Vi = null,
  qi = null,
  Gi = !1,
  Wi = !1,
  $i = !1,
  Yi = 0,
  Ki = 0,
  Zi = null,
  Qi = 0;
function Ji() {
  throw Error(a(321));
}
function Xi(e, t) {
  if (null === t) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qn(e[n], t[n])) return !1;
  return !0;
}
function ea(e, t, n, r, o, i) {
  return (
    (zi = i),
    (Hi = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (P.H = null === e || null === e.memoizedState ? ms : gs),
    ($i = !1),
    (i = n(r, o)),
    ($i = !1),
    Wi && (i = na(t, n, r, o)),
    ta(e),
    i
  );
}
function ta(e) {
  P.H = hs;
  var t = null !== Vi && null !== Vi.next;
  if (((zi = 0), (qi = Vi = Hi = null), (Gi = !1), (Ki = 0), (Zi = null), t))
    throw Error(a(300));
  null === e || Ms || (null !== (e = e.dependencies) && Oo(e) && (Ms = !0));
}
function na(e, t, n, r) {
  Hi = e;
  var o = 0;
  do {
    if ((Wi && (Zi = null), (Ki = 0), (Wi = !1), 25 <= o)) throw Error(a(301));
    if (((o += 1), (qi = Vi = null), null != e.updateQueue)) {
      var i = e.updateQueue;
      (i.lastEffect = null),
        (i.events = null),
        (i.stores = null),
        null != i.memoCache && (i.memoCache.index = 0);
    }
    (P.H = ys), (i = t(n, r));
  } while (Wi);
  return i;
}
function ra() {
  var e = P.H,
    t = e.useState()[0];
  return (
    (t = "function" == typeof t.then ? ca(t) : t),
    (e = e.useState()[0]),
    (null !== Vi ? Vi.memoizedState : null) !== e && (Hi.flags |= 1024),
    t
  );
}
function oa() {
  var e = 0 !== Yi;
  return (Yi = 0), e;
}
function ia(e, t, n) {
  (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
}
function aa(e) {
  if (Gi) {
    for (e = e.memoizedState; null !== e; ) {
      var t = e.queue;
      null !== t && (t.pending = null), (e = e.next);
    }
    Gi = !1;
  }
  (zi = 0), (qi = Vi = Hi = null), (Wi = !1), (Ki = Yi = 0), (Zi = null);
}
function sa() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return null === qi ? (Hi.memoizedState = qi = e) : (qi = qi.next = e), qi;
}
function la() {
  if (null === Vi) {
    var e = Hi.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = Vi.next;
  var t = null === qi ? Hi.memoizedState : qi.next;
  if (null !== t) (qi = t), (Vi = e);
  else {
    if (null === e) {
      if (null === Hi.alternate) throw Error(a(467));
      throw Error(a(310));
    }
    (e = {
      memoizedState: (Vi = e).memoizedState,
      baseState: Vi.baseState,
      baseQueue: Vi.baseQueue,
      queue: Vi.queue,
      next: null,
    }),
      null === qi ? (Hi.memoizedState = qi = e) : (qi = qi.next = e);
  }
  return qi;
}
function ca(e) {
  var t = Ki;
  return (
    (Ki += 1),
    null === Zi && (Zi = []),
    (e = ni(Zi, e, t)),
    (t = Hi),
    null === (null === qi ? t.memoizedState : qi.next) &&
      ((t = t.alternate),
      (P.H = null === t || null === t.memoizedState ? ms : gs)),
    e
  );
}
function ua(e) {
  if (null !== e && "object" == typeof e) {
    if ("function" == typeof e.then) return ca(e);
    if (e.$$typeof === S) return Mo(e);
  }
  throw Error(a(438, String(e)));
}
function da(e) {
  var t = null,
    n = Hi.updateQueue;
  if ((null !== n && (t = n.memoCache), null == t)) {
    var r = Hi.alternate;
    null !== r &&
      null !== (r = r.updateQueue) &&
      null != (r = r.memoCache) &&
      (t = {
        data: r.data.map(function (e) {
          return e.slice();
        }),
        index: 0,
      });
  }
  if (
    (null == t && (t = { data: [], index: 0 }),
    null === n &&
      ((n = {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null,
      }),
      (Hi.updateQueue = n)),
    (n.memoCache = t),
    void 0 === (n = t.data[t.index]))
  )
    for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = C;
  return t.index++, n;
}
function pa(e, t) {
  return "function" == typeof t ? t(e) : t;
}
function fa(e) {
  return ha(la(), Vi, e);
}
function ha(e, t, n) {
  var r = e.queue;
  if (null === r) throw Error(a(311));
  r.lastRenderedReducer = n;
  var o = e.baseQueue,
    i = r.pending;
  if (null !== i) {
    if (null !== o) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (t.baseQueue = o = i), (r.pending = null);
  }
  if (((i = e.baseState), null === o)) e.memoizedState = i;
  else {
    var l = (s = null),
      c = null,
      u = (t = o.next),
      d = !1;
    do {
      var p = -536870913 & u.lane;
      if (p !== u.lane ? (mc & p) === p : (zi & p) === p) {
        var f = u.revertLane;
        if (0 === f)
          null !== c &&
            (c = c.next =
              {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            p === Vo && (d = !0);
        else {
          if ((zi & f) === f) {
            (u = u.next), f === Vo && (d = !0);
            continue;
          }
          (p = {
            lane: 0,
            revertLane: u.revertLane,
            gesture: null,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          }),
            null === c ? ((l = c = p), (s = i)) : (c = c.next = p),
            (Hi.lanes |= f),
            (wc |= f);
        }
        (p = u.action),
          $i && n(i, p),
          (i = u.hasEagerState ? u.eagerState : n(i, p));
      } else
        (f = {
          lane: p,
          revertLane: u.revertLane,
          gesture: u.gesture,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }),
          null === c ? ((l = c = f), (s = i)) : (c = c.next = f),
          (Hi.lanes |= p),
          (wc |= p);
      u = u.next;
    } while (null !== u && u !== t);
    if (
      (null === c ? (s = i) : (c.next = l),
      !Qn(i, e.memoizedState) && ((Ms = !0), d && null !== (n = qo)))
    )
      throw n;
    (e.memoizedState = i),
      (e.baseState = s),
      (e.baseQueue = c),
      (r.lastRenderedState = i);
  }
  return null === o && (r.lanes = 0), [e.memoizedState, r.dispatch];
}
function ma(e) {
  var t = la(),
    n = t.queue;
  if (null === n) throw Error(a(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (null !== o) {
    n.pending = null;
    var s = (o = o.next);
    do {
      (i = e(i, s.action)), (s = s.next);
    } while (s !== o);
    Qn(i, t.memoizedState) || (Ms = !0),
      (t.memoizedState = i),
      null === t.baseQueue && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ga(e, t, n) {
  var r = Hi,
    o = la(),
    i = uo;
  if (i) {
    if (void 0 === n) throw Error(a(407));
    n = n();
  } else n = t();
  var s = !Qn((Vi || o).memoizedState, n);
  if (
    (s && ((o.memoizedState = n), (Ms = !0)),
    (o = o.queue),
    za(ba.bind(null, r, o, e), [e]),
    o.getSnapshot !== t || s || (null !== qi && 1 & qi.memoizedState.tag))
  ) {
    if (
      ((r.flags |= 2048),
      ja(9, { destroy: void 0 }, va.bind(null, r, o, n, t), null),
      null === fc)
    )
      throw Error(a(349));
    i || 127 & zi || ya(r, t, n);
  }
  return n;
}
function ya(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    null === (t = Hi.updateQueue)
      ? ((t = {
          lastEffect: null,
          events: null,
          stores: null,
          memoCache: null,
        }),
        (Hi.updateQueue = t),
        (t.stores = [e]))
      : null === (n = t.stores)
        ? (t.stores = [e])
        : n.push(e);
}
function va(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Sa(t) && _a(e);
}
function ba(e, t, n) {
  return n(function () {
    Sa(t) && _a(e);
  });
}
function Sa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qn(e, n);
  } catch (e) {
    return !0;
  }
}
function _a(e) {
  var t = Mr(e, 2);
  null !== t && $c(t, 0, 2);
}
function xa(e) {
  var t = sa();
  if ("function" == typeof e) {
    var n = e;
    if (((e = n()), $i)) {
      ve(!0);
      try {
        n();
      } finally {
        ve(!1);
      }
    }
  }
  return (
    (t.memoizedState = t.baseState = e),
    (t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pa,
      lastRenderedState: e,
    }),
    t
  );
}
function wa(e, t, n, r) {
  return (e.baseState = n), ha(e, Vi, "function" == typeof r ? r : pa);
}
function Ea(e, t, n, r, o) {
  if (ds(e)) throw Error(a(485));
  if (null !== (e = t.action)) {
    var i = {
      payload: o,
      action: e,
      next: null,
      isTransition: !0,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function (e) {
        i.listeners.push(e);
      },
    };
    null !== P.T ? n(!0) : (i.isTransition = !1),
      r(i),
      null === (n = t.pending)
        ? ((i.next = t.pending = i), Ta(t, i))
        : ((i.next = n.next), (t.pending = n.next = i));
  }
}
function Ta(e, t) {
  var n = t.action,
    r = t.payload,
    o = e.state;
  if (t.isTransition) {
    var i = P.T,
      a = {};
    P.T = a;
    try {
      var s = n(o, r),
        l = P.S;
      null !== l && l(a, s), ka(e, t, s);
    } catch (n) {
      Ia(e, t, n);
    } finally {
      null !== i && null !== a.types && (i.types = a.types), (P.T = i);
    }
  } else
    try {
      ka(e, t, (i = n(o, r)));
    } catch (n) {
      Ia(e, t, n);
    }
}
function ka(e, t, n) {
  null !== n && "object" == typeof n && "function" == typeof n.then
    ? n.then(
        function (n) {
          Ca(e, t, n);
        },
        function (n) {
          return Ia(e, t, n);
        },
      )
    : Ca(e, t, n);
}
function Ca(e, t, n) {
  (t.status = "fulfilled"),
    (t.value = n),
    Aa(t),
    (e.state = n),
    null !== (t = e.pending) &&
      ((n = t.next) === t
        ? (e.pending = null)
        : ((n = n.next), (t.next = n), Ta(e, n)));
}
function Ia(e, t, n) {
  var r = e.pending;
  if (((e.pending = null), null !== r)) {
    r = r.next;
    do {
      (t.status = "rejected"), (t.reason = n), Aa(t), (t = t.next);
    } while (t !== r);
  }
  e.action = null;
}
function Aa(e) {
  e = e.listeners;
  for (var t = 0; t < e.length; t++) (0, e[t])();
}
function Oa(e, t) {
  return t;
}
function Ra(e, t) {
  if (uo) {
    var n = fc.formState;
    if (null !== n) {
      e: {
        var r = Hi;
        if (uo) {
          if (co) {
            t: {
              for (var o = co, i = fo; 8 !== o.nodeType; ) {
                if (!i) {
                  o = null;
                  break t;
                }
                if (null === (o = Md(o.nextSibling))) {
                  o = null;
                  break t;
                }
              }
              o = "F!" === (i = o.data) || "F" === i ? o : null;
            }
            if (o) {
              (co = Md(o.nextSibling)), (r = "F!" === o.data);
              break e;
            }
          }
          mo(r);
        }
        r = !1;
      }
      r && (t = n[0]);
    }
  }
  return (
    ((n = sa()).memoizedState = n.baseState = t),
    (r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Oa,
      lastRenderedState: t,
    }),
    (n.queue = r),
    (n = ls.bind(null, Hi, r)),
    (r.dispatch = n),
    (r = xa(!1)),
    (i = us.bind(null, Hi, !1, r.queue)),
    (o = { state: t, dispatch: null, action: e, pending: null }),
    ((r = sa()).queue = o),
    (n = Ea.bind(null, Hi, o, i, n)),
    (o.dispatch = n),
    (r.memoizedState = e),
    [t, n, !1]
  );
}
function Ma(e) {
  return Pa(la(), Vi, e);
}
function Pa(e, t, n) {
  if (
    ((t = ha(e, t, Oa)[0]),
    (e = fa(pa)[0]),
    "object" == typeof t && null !== t && "function" == typeof t.then)
  )
    try {
      var r = ca(t);
    } catch (e) {
      if (e === Qo) throw Xo;
      throw e;
    }
  else r = t;
  var o = (t = la()).queue,
    i = o.dispatch;
  return (
    n !== t.memoizedState &&
      ((Hi.flags |= 2048),
      ja(9, { destroy: void 0 }, Na.bind(null, o, n), null)),
    [r, i, e]
  );
}
function Na(e, t) {
  e.action = t;
}
function Da(e) {
  var t = la(),
    n = Vi;
  if (null !== n) return Pa(t, n, e);
  la(), (t = t.memoizedState);
  var r = (n = la()).queue.dispatch;
  return (n.memoizedState = e), [t, r, !1];
}
function ja(e, t, n, r) {
  return (
    (e = { tag: e, create: n, deps: r, inst: t, next: null }),
    null === (t = Hi.updateQueue) &&
      ((t = {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null,
      }),
      (Hi.updateQueue = t)),
    null === (n = t.lastEffect)
      ? (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
    e
  );
}
function La() {
  return la().memoizedState;
}
function Fa(e, t, n, r) {
  var o = sa();
  (Hi.flags |= e),
    (o.memoizedState = ja(
      1 | t,
      { destroy: void 0 },
      n,
      void 0 === r ? null : r,
    ));
}
function Ua(e, t, n, r) {
  var o = la();
  r = void 0 === r ? null : r;
  var i = o.memoizedState.inst;
  null !== Vi && null !== r && Xi(r, Vi.memoizedState.deps)
    ? (o.memoizedState = ja(t, i, n, r))
    : ((Hi.flags |= e), (o.memoizedState = ja(1 | t, i, n, r)));
}
function Ba(e, t) {
  Fa(8390656, 8, e, t);
}
function za(e, t) {
  Ua(2048, 8, e, t);
}
function Ha(e) {
  var t = la().memoizedState;
  return (
    (function (e) {
      Hi.flags |= 4;
      var t = Hi.updateQueue;
      if (null === t)
        (t = {
          lastEffect: null,
          events: null,
          stores: null,
          memoCache: null,
        }),
          (Hi.updateQueue = t),
          (t.events = [e]);
      else {
        var n = t.events;
        null === n ? (t.events = [e]) : n.push(e);
      }
    })({ ref: t, nextImpl: e }),
    function () {
      if (2 & pc) throw Error(a(440));
      return t.impl.apply(void 0, arguments);
    }
  );
}
function Va(e, t) {
  return Ua(4, 2, e, t);
}
function qa(e, t) {
  return Ua(4, 4, e, t);
}
function Ga(e, t) {
  if ("function" == typeof t) {
    e = e();
    var n = t(e);
    return function () {
      "function" == typeof n ? n() : t(null);
    };
  }
  if (null != t)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Wa(e, t, n) {
  (n = null != n ? n.concat([e]) : null), Ua(4, 4, Ga.bind(null, t, e), n);
}
function $a() {}
function Ya(e, t) {
  var n = la();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== t && Xi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Ka(e, t) {
  var n = la();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  if (null !== t && Xi(t, r[1])) return r[0];
  if (((r = e()), $i)) {
    ve(!0);
    try {
      e();
    } finally {
      ve(!1);
    }
  }
  return (n.memoizedState = [r, t]), r;
}
function Za(e, t, n) {
  return void 0 === n || (1073741824 & zi && !(261930 & mc))
    ? (e.memoizedState = t)
    : ((e.memoizedState = n), (e = Wc()), (Hi.lanes |= e), (wc |= e), n);
}
function Qa(e, t, n, r) {
  return Qn(n, t)
    ? n
    : null !== Ci.current
      ? ((e = Za(e, n, r)), Qn(e, t) || (Ms = !0), e)
      : 42 & zi && (!(1073741824 & zi) || 261930 & mc)
        ? ((e = Wc()), (Hi.lanes |= e), (wc |= e), t)
        : ((Ms = !0), (e.memoizedState = n));
}
function Ja(e, t, n, r, o) {
  var i = N.p;
  N.p = 0 !== i && 8 > i ? i : 8;
  var a,
    s,
    l,
    c = P.T,
    u = {};
  (P.T = u), us(e, !1, t, n);
  try {
    var d = o(),
      p = P.S;
    null !== p && p(u, d),
      null !== d && "object" == typeof d && "function" == typeof d.then
        ? cs(
            e,
            t,
            ((a = r),
            (s = []),
            (l = {
              status: "pending",
              value: null,
              reason: null,
              then: function (e) {
                s.push(e);
              },
            }),
            d.then(
              function () {
                (l.status = "fulfilled"), (l.value = a);
                for (var e = 0; e < s.length; e++) (0, s[e])(a);
              },
              function (e) {
                for (
                  l.status = "rejected", l.reason = e, e = 0;
                  e < s.length;
                  e++
                )
                  (0, s[e])(void 0);
              },
            ),
            l),
            Gc(),
          )
        : cs(e, t, r, Gc());
  } catch (n) {
    cs(e, t, { then: function () {}, status: "rejected", reason: n }, Gc());
  } finally {
    (N.p = i), null !== c && null !== u.types && (c.types = u.types), (P.T = c);
  }
}
function Xa() {}
function es(e, t, n, r) {
  if (5 !== e.tag) throw Error(a(476));
  var o = ts(e).queue;
  Ja(
    e,
    o,
    t,
    D,
    null === n
      ? Xa
      : function () {
          return ns(e), n(r);
        },
  );
}
function ts(e) {
  var t = e.memoizedState;
  if (null !== t) return t;
  var n = {};
  return (
    ((t = {
      memoizedState: D,
      baseState: D,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pa,
        lastRenderedState: D,
      },
      next: null,
    }).next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pa,
        lastRenderedState: n,
      },
      next: null,
    }),
    (e.memoizedState = t),
    null !== (e = e.alternate) && (e.memoizedState = t),
    t
  );
}
function ns(e) {
  var t = ts(e);
  null === t.next && (t = e.alternate.memoizedState),
    cs(e, t.next.queue, {}, Gc());
}
function rs() {
  return Mo(cp);
}
function os() {
  return la().memoizedState;
}
function is() {
  return la().memoizedState;
}
function as(e) {
  for (var t = e.return; null !== t; ) {
    switch (t.tag) {
      case 24:
      case 3:
        var n = Gc(),
          r = bi(t, (e = vi(n)), n);
        return (
          null !== r && ($c(r, 0, n), Si(r, t, n)),
          (t = { cache: Uo() }),
          void (e.payload = t)
        );
    }
    t = t.return;
  }
}
function ss(e, t, n) {
  var r = Gc();
  (n = {
    lane: r,
    revertLane: 0,
    gesture: null,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  }),
    ds(e)
      ? ps(t, n)
      : null !== (n = Rr(e, t, n, r)) && ($c(n, 0, r), fs(n, t, r));
}
function ls(e, t, n) {
  cs(e, t, n, Gc());
}
function cs(e, t, n, r) {
  var o = {
    lane: r,
    revertLane: 0,
    gesture: null,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  };
  if (ds(e)) ps(t, o);
  else {
    var i = e.alternate;
    if (
      0 === e.lanes &&
      (null === i || 0 === i.lanes) &&
      null !== (i = t.lastRenderedReducer)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Qn(s, a)))
          return Or(e, t, o, 0), null === fc && Ar(), !1;
      } catch (e) {}
    if (null !== (n = Rr(e, t, o, r))) return $c(n, 0, r), fs(n, t, r), !0;
  }
  return !1;
}
function us(e, t, n, r) {
  if (
    ((r = {
      lane: 2,
      revertLane: zu(),
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ds(e))
  ) {
    if (t) throw Error(a(479));
  } else null !== (t = Rr(e, n, r, 2)) && $c(t, 0, 2);
}
function ds(e) {
  var t = e.alternate;
  return e === Hi || (null !== t && t === Hi);
}
function ps(e, t) {
  Wi = Gi = !0;
  var n = e.pending;
  null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fs(e, t, n) {
  if (4194048 & n) {
    var r = t.lanes;
    (n |= r &= e.pendingLanes), (t.lanes = n), Pe(e, n);
  }
}
var hs = {
  readContext: Mo,
  use: ua,
  useCallback: Ji,
  useContext: Ji,
  useEffect: Ji,
  useImperativeHandle: Ji,
  useLayoutEffect: Ji,
  useInsertionEffect: Ji,
  useMemo: Ji,
  useReducer: Ji,
  useRef: Ji,
  useState: Ji,
  useDebugValue: Ji,
  useDeferredValue: Ji,
  useTransition: Ji,
  useSyncExternalStore: Ji,
  useId: Ji,
  useHostTransitionStatus: Ji,
  useFormState: Ji,
  useActionState: Ji,
  useOptimistic: Ji,
  useMemoCache: Ji,
  useCacheRefresh: Ji,
};
hs.useEffectEvent = Ji;
var ms = {
    readContext: Mo,
    use: ua,
    useCallback: function (e, t) {
      return (sa().memoizedState = [e, void 0 === t ? null : t]), e;
    },
    useContext: Mo,
    useEffect: Ba,
    useImperativeHandle: function (e, t, n) {
      (n = null != n ? n.concat([e]) : null),
        Fa(4194308, 4, Ga.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Fa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Fa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = sa();
      t = void 0 === t ? null : t;
      var r = e();
      if ($i) {
        ve(!0);
        try {
          e();
        } finally {
          ve(!1);
        }
      }
      return (n.memoizedState = [r, t]), r;
    },
    useReducer: function (e, t, n) {
      var r = sa();
      if (void 0 !== n) {
        var o = n(t);
        if ($i) {
          ve(!0);
          try {
            n(t);
          } finally {
            ve(!1);
          }
        }
      } else o = t;
      return (
        (r.memoizedState = r.baseState = o),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: o,
        }),
        (r.queue = e),
        (e = e.dispatch = ss.bind(null, Hi, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      return (e = { current: e }), (sa().memoizedState = e);
    },
    useState: function (e) {
      var t = (e = xa(e)).queue,
        n = ls.bind(null, Hi, t);
      return (t.dispatch = n), [e.memoizedState, n];
    },
    useDebugValue: $a,
    useDeferredValue: function (e, t) {
      return Za(sa(), e, t);
    },
    useTransition: function () {
      var e = xa(!1);
      return (
        (e = Ja.bind(null, Hi, e.queue, !0, !1)),
        (sa().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, n) {
      var r = Hi,
        o = sa();
      if (uo) {
        if (void 0 === n) throw Error(a(407));
        n = n();
      } else {
        if (((n = t()), null === fc)) throw Error(a(349));
        127 & mc || ya(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Ba(ba.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ja(9, { destroy: void 0 }, va.bind(null, r, i, n, t), null),
        n
      );
    },
    useId: function () {
      var e = sa(),
        t = fc.identifierPrefix;
      if (uo) {
        var n = no;
        (t =
          "_" +
          t +
          "R_" +
          (n = (to & ~(1 << (32 - be(to) - 1))).toString(32) + n)),
          0 < (n = Yi++) && (t += "H" + n.toString(32)),
          (t += "_");
      } else t = "_" + t + "r_" + (n = Qi++).toString(32) + "_";
      return (e.memoizedState = t);
    },
    useHostTransitionStatus: rs,
    useFormState: Ra,
    useActionState: Ra,
    useOptimistic: function (e) {
      var t = sa();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = n), (t = us.bind(null, Hi, !0, n)), (n.dispatch = t), [e, t]
      );
    },
    useMemoCache: da,
    useCacheRefresh: function () {
      return (sa().memoizedState = as.bind(null, Hi));
    },
    useEffectEvent: function (e) {
      var t = sa(),
        n = { impl: e };
      return (
        (t.memoizedState = n),
        function () {
          if (2 & pc) throw Error(a(440));
          return n.impl.apply(void 0, arguments);
        }
      );
    },
  },
  gs = {
    readContext: Mo,
    use: ua,
    useCallback: Ya,
    useContext: Mo,
    useEffect: za,
    useImperativeHandle: Wa,
    useInsertionEffect: Va,
    useLayoutEffect: qa,
    useMemo: Ka,
    useReducer: fa,
    useRef: La,
    useState: function () {
      return fa(pa);
    },
    useDebugValue: $a,
    useDeferredValue: function (e, t) {
      return Qa(la(), Vi.memoizedState, e, t);
    },
    useTransition: function () {
      var e = fa(pa)[0],
        t = la().memoizedState;
      return ["boolean" == typeof e ? e : ca(e), t];
    },
    useSyncExternalStore: ga,
    useId: os,
    useHostTransitionStatus: rs,
    useFormState: Ma,
    useActionState: Ma,
    useOptimistic: function (e, t) {
      return wa(la(), 0, e, t);
    },
    useMemoCache: da,
    useCacheRefresh: is,
  };
gs.useEffectEvent = Ha;
var ys = {
  readContext: Mo,
  use: ua,
  useCallback: Ya,
  useContext: Mo,
  useEffect: za,
  useImperativeHandle: Wa,
  useInsertionEffect: Va,
  useLayoutEffect: qa,
  useMemo: Ka,
  useReducer: ma,
  useRef: La,
  useState: function () {
    return ma(pa);
  },
  useDebugValue: $a,
  useDeferredValue: function (e, t) {
    var n = la();
    return null === Vi ? Za(n, e, t) : Qa(n, Vi.memoizedState, e, t);
  },
  useTransition: function () {
    var e = ma(pa)[0],
      t = la().memoizedState;
    return ["boolean" == typeof e ? e : ca(e), t];
  },
  useSyncExternalStore: ga,
  useId: os,
  useHostTransitionStatus: rs,
  useFormState: Da,
  useActionState: Da,
  useOptimistic: function (e, t) {
    var n = la();
    return null !== Vi
      ? wa(n, 0, e, t)
      : ((n.baseState = e), [e, n.queue.dispatch]);
  },
  useMemoCache: da,
  useCacheRefresh: is,
};
function vs(e, t, n, r) {
  (n = null == (n = n(r, (t = e.memoizedState))) ? t : p({}, t, n)),
    (e.memoizedState = n),
    0 === e.lanes && (e.updateQueue.baseState = n);
}
ys.useEffectEvent = Ha;
var bs = {
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Gc(),
      o = vi(r);
    (o.payload = t),
      null != n && (o.callback = n),
      null !== (t = bi(e, o, r)) && ($c(t, 0, r), Si(t, e, r));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Gc(),
      o = vi(r);
    (o.tag = 1),
      (o.payload = t),
      null != n && (o.callback = n),
      null !== (t = bi(e, o, r)) && ($c(t, 0, r), Si(t, e, r));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Gc(),
      r = vi(n);
    (r.tag = 2),
      null != t && (r.callback = t),
      null !== (t = bi(e, r, n)) && ($c(t, 0, n), Si(t, e, n));
  },
};
function Ss(e, t, n, r, o, i, a) {
  return "function" == typeof (e = e.stateNode).shouldComponentUpdate
    ? e.shouldComponentUpdate(r, i, a)
    : !(
        t.prototype &&
        t.prototype.isPureReactComponent &&
        Jn(n, r) &&
        Jn(o, i)
      );
}
function _s(e, t, n, r) {
  (e = t.state),
    "function" == typeof t.componentWillReceiveProps &&
      t.componentWillReceiveProps(n, r),
    "function" == typeof t.UNSAFE_componentWillReceiveProps &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bs.enqueueReplaceState(t, t.state, null);
}
function xs(e, t) {
  var n = t;
  if ("ref" in t) for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
  if ((e = e.defaultProps))
    for (var o in (n === t && (n = p({}, n)), e))
      void 0 === n[o] && (n[o] = e[o]);
  return n;
}
function ws(e) {
  Tr(e);
}
function Es(e) {}
function Ts(e) {
  Tr(e);
}
function ks(e, t) {
  try {
    (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}
function Cs(e, t, n) {
  try {
    (0, e.onCaughtError)(n.value, {
      componentStack: n.stack,
      errorBoundary: 1 === t.tag ? t.stateNode : null,
    });
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}
function Is(e, t, n) {
  return (
    ((n = vi(n)).tag = 3),
    (n.payload = { element: null }),
    (n.callback = function () {
      ks(e, t);
    }),
    n
  );
}
function As(e) {
  return ((e = vi(e)).tag = 3), e;
}
function Os(e, t, n, r) {
  var o = n.type.getDerivedStateFromError;
  if ("function" == typeof o) {
    var i = r.value;
    (e.payload = function () {
      return o(i);
    }),
      (e.callback = function () {
        Cs(t, n, r);
      });
  }
  var a = n.stateNode;
  null !== a &&
    "function" == typeof a.componentDidCatch &&
    (e.callback = function () {
      Cs(t, n, r),
        "function" != typeof o &&
          (null === Dc ? (Dc = new Set([this])) : Dc.add(this));
      var e = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: null !== e ? e : "",
      });
    });
}
var Rs = Error(a(461)),
  Ms = !1;
function Ps(e, t, n, r) {
  t.child = null === e ? hi(t, null, n, r) : fi(t, e.child, n, r);
}
function Ns(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  if ("ref" in r) {
    var a = {};
    for (var s in r) "ref" !== s && (a[s] = r[s]);
  } else a = r;
  return (
    Ro(t),
    (r = ea(e, t, n, a, i, o)),
    (s = oa()),
    null === e || Ms
      ? (uo && s && io(t), (t.flags |= 1), Ps(e, t, r, o), t.child)
      : (ia(e, t, o), rl(e, t, o))
  );
}
function Ds(e, t, n, r, o) {
  if (null === e) {
    var i = n.type;
    return "function" != typeof i ||
      Fr(i) ||
      void 0 !== i.defaultProps ||
      null !== n.compare
      ? (((e = zr(n.type, null, r, t, t.mode, o)).ref = t.ref),
        (e.return = t),
        (t.child = e))
      : ((t.tag = 15), (t.type = i), js(e, t, i, r, o));
  }
  if (((i = e.child), !ol(e, o))) {
    var a = i.memoizedProps;
    if ((n = null !== (n = n.compare) ? n : Jn)(a, r) && e.ref === t.ref)
      return rl(e, t, o);
  }
  return (
    (t.flags |= 1), ((e = Ur(i, r)).ref = t.ref), (e.return = t), (t.child = e)
  );
}
function js(e, t, n, r, o) {
  if (null !== e) {
    var i = e.memoizedProps;
    if (Jn(i, r) && e.ref === t.ref) {
      if (((Ms = !1), (t.pendingProps = r = i), !ol(e, o)))
        return (t.lanes = e.lanes), rl(e, t, o);
      131072 & e.flags && (Ms = !0);
    }
  }
  return Vs(e, t, n, r, o);
}
function Ls(e, t, n, r) {
  var o = r.children,
    i = null !== e ? e.memoizedState : null;
  if (
    (null === e &&
      null === t.stateNode &&
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
    "hidden" === r.mode)
  ) {
    if (128 & t.flags) {
      if (((i = null !== i ? i.baseLanes | n : n), null !== e)) {
        for (r = t.child = e.child, o = 0; null !== r; )
          (o = o | r.lanes | r.childLanes), (r = r.sibling);
        r = o & ~i;
      } else (r = 0), (t.child = null);
      return Us(e, t, i, n, r);
    }
    if (!(536870912 & n))
      return (
        (r = t.lanes = 536870912),
        Us(e, t, null !== i ? i.baseLanes | n : n, n, r)
      );
    (t.memoizedState = { baseLanes: 0, cachePool: null }),
      null !== e && Ko(0, null !== i ? i.cachePool : null),
      null !== i ? Ai(t, i) : Oi(),
      ji(t);
  } else
    null !== i
      ? (Ko(0, i.cachePool), Ai(t, i), Li(), (t.memoizedState = null))
      : (null !== e && Ko(0, null), Oi(), Li());
  return Ps(e, t, o, n), t.child;
}
function Fs(e, t) {
  return (
    (null !== e && 22 === e.tag) ||
      null !== t.stateNode ||
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
    t.sibling
  );
}
function Us(e, t, n, r, o) {
  var i = Yo();
  return (
    (i = null === i ? null : { parent: Fo._currentValue, pool: i }),
    (t.memoizedState = { baseLanes: n, cachePool: i }),
    null !== e && Ko(0, null),
    Oi(),
    ji(t),
    null !== e && Ao(e, t, r, !0),
    (t.childLanes = o),
    null
  );
}
function Bs(e, t) {
  return (
    ((t = Js({ mode: t.mode, children: t.children }, e.mode)).ref = e.ref),
    (e.child = t),
    (t.return = e),
    t
  );
}
function zs(e, t, n) {
  return (
    fi(t, e.child, null, n),
    ((e = Bs(t, t.pendingProps)).flags |= 2),
    Fi(t),
    (t.memoizedState = null),
    e
  );
}
function Hs(e, t) {
  var n = t.ref;
  if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
  else {
    if ("function" != typeof n && "object" != typeof n) throw Error(a(284));
    (null !== e && e.ref === n) || (t.flags |= 4194816);
  }
}
function Vs(e, t, n, r, o) {
  return (
    Ro(t),
    (n = ea(e, t, n, r, void 0, o)),
    (r = oa()),
    null === e || Ms
      ? (uo && r && io(t), (t.flags |= 1), Ps(e, t, n, o), t.child)
      : (ia(e, t, o), rl(e, t, o))
  );
}
function qs(e, t, n, r, o, i) {
  return (
    Ro(t),
    (t.updateQueue = null),
    (n = na(t, r, n, o)),
    ta(e),
    (r = oa()),
    null === e || Ms
      ? (uo && r && io(t), (t.flags |= 1), Ps(e, t, n, i), t.child)
      : (ia(e, t, i), rl(e, t, i))
  );
}
function Gs(e, t, n, r, o) {
  if ((Ro(t), null === t.stateNode)) {
    var i = Dr,
      a = n.contextType;
    "object" == typeof a && null !== a && (i = Mo(a)),
      (i = new n(r, i)),
      (t.memoizedState =
        null !== i.state && void 0 !== i.state ? i.state : null),
      (i.updater = bs),
      (t.stateNode = i),
      (i._reactInternals = t),
      ((i = t.stateNode).props = r),
      (i.state = t.memoizedState),
      (i.refs = {}),
      gi(t),
      (a = n.contextType),
      (i.context = "object" == typeof a && null !== a ? Mo(a) : Dr),
      (i.state = t.memoizedState),
      "function" == typeof (a = n.getDerivedStateFromProps) &&
        (vs(t, n, a, r), (i.state = t.memoizedState)),
      "function" == typeof n.getDerivedStateFromProps ||
        "function" == typeof i.getSnapshotBeforeUpdate ||
        ("function" != typeof i.UNSAFE_componentWillMount &&
          "function" != typeof i.componentWillMount) ||
        ((a = i.state),
        "function" == typeof i.componentWillMount && i.componentWillMount(),
        "function" == typeof i.UNSAFE_componentWillMount &&
          i.UNSAFE_componentWillMount(),
        a !== i.state && bs.enqueueReplaceState(i, i.state, null),
        Ei(t, r, i, o),
        wi(),
        (i.state = t.memoizedState)),
      "function" == typeof i.componentDidMount && (t.flags |= 4194308),
      (r = !0);
  } else if (null === e) {
    i = t.stateNode;
    var s = t.memoizedProps,
      l = xs(n, s);
    i.props = l;
    var c = i.context,
      u = n.contextType;
    (a = Dr), "object" == typeof u && null !== u && (a = Mo(u));
    var d = n.getDerivedStateFromProps;
    (u =
      "function" == typeof d || "function" == typeof i.getSnapshotBeforeUpdate),
      (s = t.pendingProps !== s),
      u ||
        ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
          "function" != typeof i.componentWillReceiveProps) ||
        ((s || c !== a) && _s(t, i, r, a)),
      (mi = !1);
    var p = t.memoizedState;
    (i.state = p),
      Ei(t, r, i, o),
      wi(),
      (c = t.memoizedState),
      s || p !== c || mi
        ? ("function" == typeof d && (vs(t, n, d, r), (c = t.memoizedState)),
          (l = mi || Ss(t, n, l, r, p, c, a))
            ? (u ||
                ("function" != typeof i.UNSAFE_componentWillMount &&
                  "function" != typeof i.componentWillMount) ||
                ("function" == typeof i.componentWillMount &&
                  i.componentWillMount(),
                "function" == typeof i.UNSAFE_componentWillMount &&
                  i.UNSAFE_componentWillMount()),
              "function" == typeof i.componentDidMount && (t.flags |= 4194308))
            : ("function" == typeof i.componentDidMount && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (i.props = r),
          (i.state = c),
          (i.context = a),
          (r = l))
        : ("function" == typeof i.componentDidMount && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      yi(e, t),
      (u = xs(n, (a = t.memoizedProps))),
      (i.props = u),
      (d = t.pendingProps),
      (p = i.context),
      (c = n.contextType),
      (l = Dr),
      "object" == typeof c && null !== c && (l = Mo(c)),
      (c =
        "function" == typeof (s = n.getDerivedStateFromProps) ||
        "function" == typeof i.getSnapshotBeforeUpdate) ||
        ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
          "function" != typeof i.componentWillReceiveProps) ||
        ((a !== d || p !== l) && _s(t, i, r, l)),
      (mi = !1),
      (p = t.memoizedState),
      (i.state = p),
      Ei(t, r, i, o),
      wi();
    var f = t.memoizedState;
    a !== d ||
    p !== f ||
    mi ||
    (null !== e && null !== e.dependencies && Oo(e.dependencies))
      ? ("function" == typeof s && (vs(t, n, s, r), (f = t.memoizedState)),
        (u =
          mi ||
          Ss(t, n, u, r, p, f, l) ||
          (null !== e && null !== e.dependencies && Oo(e.dependencies)))
          ? (c ||
              ("function" != typeof i.UNSAFE_componentWillUpdate &&
                "function" != typeof i.componentWillUpdate) ||
              ("function" == typeof i.componentWillUpdate &&
                i.componentWillUpdate(r, f, l),
              "function" == typeof i.UNSAFE_componentWillUpdate &&
                i.UNSAFE_componentWillUpdate(r, f, l)),
            "function" == typeof i.componentDidUpdate && (t.flags |= 4),
            "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024))
          : ("function" != typeof i.componentDidUpdate ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            "function" != typeof i.getSnapshotBeforeUpdate ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = f)),
        (i.props = r),
        (i.state = f),
        (i.context = l),
        (r = u))
      : ("function" != typeof i.componentDidUpdate ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        "function" != typeof i.getSnapshotBeforeUpdate ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return (
    (i = r),
    Hs(e, t),
    (r = !!(128 & t.flags)),
    i || r
      ? ((i = t.stateNode),
        (n =
          r && "function" != typeof n.getDerivedStateFromError
            ? null
            : i.render()),
        (t.flags |= 1),
        null !== e && r
          ? ((t.child = fi(t, e.child, null, o)), (t.child = fi(t, null, n, o)))
          : Ps(e, t, n, o),
        (t.memoizedState = i.state),
        (e = t.child))
      : (e = rl(e, t, o)),
    e
  );
}
function Ws(e, t, n, r) {
  return bo(), (t.flags |= 256), Ps(e, t, n, r), t.child;
}
var $s = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null,
};
function Ys(e) {
  return { baseLanes: e, cachePool: Zo() };
}
function Ks(e, t, n) {
  return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= kc), e;
}
function Zs(e, t, n) {
  var r,
    o = t.pendingProps,
    i = !1,
    s = !!(128 & t.flags);
  if (
    ((r = s) ||
      (r = (null === e || null !== e.memoizedState) && !!(2 & Ui.current)),
    r && ((i = !0), (t.flags &= -129)),
    (r = !!(32 & t.flags)),
    (t.flags &= -33),
    null === e)
  ) {
    if (uo) {
      if (
        (i ? Ni(t) : Li(),
        (e = co)
          ? null !==
              (e = null !== (e = Ad(e, fo)) && "&" !== e.data ? e : null) &&
            ((t.memoizedState = {
              dehydrated: e,
              treeContext: null !== eo ? { id: to, overflow: no } : null,
              retryLane: 536870912,
              hydrationErrors: null,
            }),
            ((n = qr(e)).return = t),
            (t.child = n),
            (lo = t),
            (co = null))
          : (e = null),
        null === e)
      )
        throw mo(t);
      return Rd(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
    }
    var l = o.children;
    return (
      (o = o.fallback),
      i
        ? (Li(),
          (l = Js({ mode: "hidden", children: l }, (i = t.mode))),
          (o = Hr(o, i, n, null)),
          (l.return = t),
          (o.return = t),
          (l.sibling = o),
          (t.child = l),
          ((o = t.child).memoizedState = Ys(n)),
          (o.childLanes = Ks(e, r, n)),
          (t.memoizedState = $s),
          Fs(null, o))
        : (Ni(t), Qs(t, l))
    );
  }
  var c = e.memoizedState;
  if (null !== c && null !== (l = c.dehydrated)) {
    if (s)
      256 & t.flags
        ? (Ni(t), (t.flags &= -257), (t = Xs(e, t, n)))
        : null !== t.memoizedState
          ? (Li(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Li(),
            (l = o.fallback),
            (i = t.mode),
            (o = Js({ mode: "visible", children: o.children }, i)),
            ((l = Hr(l, i, n, null)).flags |= 2),
            (o.return = t),
            (l.return = t),
            (o.sibling = l),
            (t.child = o),
            fi(t, e.child, null, n),
            ((o = t.child).memoizedState = Ys(n)),
            (o.childLanes = Ks(e, r, n)),
            (t.memoizedState = $s),
            (t = Fs(null, o)));
    else if ((Ni(t), Rd(l))) {
      if ((r = l.nextSibling && l.nextSibling.dataset)) var u = r.dgst;
      (r = u),
        ((o = Error(a(419))).stack = ""),
        (o.digest = r),
        _o({ value: o, source: null, stack: null }),
        (t = Xs(e, t, n));
    } else if (
      (Ms || Ao(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Ms || r)
    ) {
      if (null !== (r = fc) && 0 !== (o = Ne(r, n)) && o !== c.retryLane)
        throw ((c.retryLane = o), Mr(e, o), $c(r, 0, o), Rs);
      Od(l) || iu(), (t = Xs(e, t, n));
    } else
      Od(l)
        ? ((t.flags |= 192), (t.child = e.child), (t = null))
        : ((e = c.treeContext),
          (co = Md(l.nextSibling)),
          (lo = t),
          (uo = !0),
          (po = null),
          (fo = !1),
          null !== e && so(t, e),
          ((t = Qs(t, o.children)).flags |= 4096));
    return t;
  }
  return i
    ? (Li(),
      (l = o.fallback),
      (i = t.mode),
      (u = (c = e.child).sibling),
      ((o = Ur(c, {
        mode: "hidden",
        children: o.children,
      })).subtreeFlags = 65011712 & c.subtreeFlags),
      null !== u ? (l = Ur(u, l)) : ((l = Hr(l, i, n, null)).flags |= 2),
      (l.return = t),
      (o.return = t),
      (o.sibling = l),
      (t.child = o),
      Fs(null, o),
      (o = t.child),
      null === (l = e.child.memoizedState)
        ? (l = Ys(n))
        : (null !== (i = l.cachePool)
            ? ((c = Fo._currentValue),
              (i = i.parent !== c ? { parent: c, pool: c } : i))
            : (i = Zo()),
          (l = { baseLanes: l.baseLanes | n, cachePool: i })),
      (o.memoizedState = l),
      (o.childLanes = Ks(e, r, n)),
      (t.memoizedState = $s),
      Fs(e.child, o))
    : (Ni(t),
      (e = (n = e.child).sibling),
      ((n = Ur(n, { mode: "visible", children: o.children })).return = t),
      (n.sibling = null),
      null !== e &&
        (null === (r = t.deletions)
          ? ((t.deletions = [e]), (t.flags |= 16))
          : r.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n);
}
function Qs(e, t) {
  return (
    ((t = Js({ mode: "visible", children: t }, e.mode)).return = e),
    (e.child = t)
  );
}
function Js(e, t) {
  return ((e = Lr(22, e, null, t)).lanes = 0), e;
}
function Xs(e, t, n) {
  return (
    fi(t, e.child, null, n),
    ((e = Qs(t, t.pendingProps.children)).flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function el(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  null !== r && (r.lanes |= t), Co(e.return, t, n);
}
function tl(e, t, n, r, o, i) {
  var a = e.memoizedState;
  null === a
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
        treeForkCount: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = o),
      (a.treeForkCount = i));
}
function nl(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  r = r.children;
  var a = Ui.current,
    s = !!(2 & a);
  if (
    (s ? ((a = (1 & a) | 2), (t.flags |= 128)) : (a &= 1),
    B(Ui, a),
    Ps(e, t, r, n),
    (r = uo ? Qr : 0),
    !s && null !== e && 128 & e.flags)
  )
    e: for (e = t.child; null !== e; ) {
      if (13 === e.tag) null !== e.memoizedState && el(e, n, t);
      else if (19 === e.tag) el(e, n, t);
      else if (null !== e.child) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break e;
      for (; null === e.sibling; ) {
        if (null === e.return || e.return === t) break e;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  switch (o) {
    case "forwards":
      for (n = t.child, o = null; null !== n; )
        null !== (e = n.alternate) && null === Bi(e) && (o = n),
          (n = n.sibling);
      null === (n = o)
        ? ((o = t.child), (t.child = null))
        : ((o = n.sibling), (n.sibling = null)),
        tl(t, !1, o, n, i, r);
      break;
    case "backwards":
    case "unstable_legacy-backwards":
      for (n = null, o = t.child, t.child = null; null !== o; ) {
        if (null !== (e = o.alternate) && null === Bi(e)) {
          t.child = o;
          break;
        }
        (e = o.sibling), (o.sibling = n), (n = o), (o = e);
      }
      tl(t, !0, n, null, i, r);
      break;
    case "together":
      tl(t, !1, null, null, void 0, r);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function rl(e, t, n) {
  if (
    (null !== e && (t.dependencies = e.dependencies),
    (wc |= t.lanes),
    0 === (n & t.childLanes))
  ) {
    if (null === e) return null;
    if ((Ao(e, t, n, !1), 0 === (n & t.childLanes))) return null;
  }
  if (null !== e && t.child !== e.child) throw Error(a(153));
  if (null !== t.child) {
    for (
      n = Ur((e = t.child), e.pendingProps), t.child = n, n.return = t;
      null !== e.sibling;

    )
      (e = e.sibling), ((n = n.sibling = Ur(e, e.pendingProps)).return = t);
    n.sibling = null;
  }
  return t.child;
}
function ol(e, t) {
  return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Oo(e));
}
function il(e, t, n) {
  if (null !== e)
    if (e.memoizedProps !== t.pendingProps) Ms = !0;
    else {
      if (!(ol(e, n) || 128 & t.flags))
        return (
          (Ms = !1),
          (function (e, t, n) {
            switch (t.tag) {
              case 3:
                $(t, t.stateNode.containerInfo),
                  To(0, Fo, e.memoizedState.cache),
                  bo();
                break;
              case 27:
              case 5:
                K(t);
                break;
              case 4:
                $(t, t.stateNode.containerInfo);
                break;
              case 10:
                To(0, t.type, t.memoizedProps.value);
                break;
              case 31:
                if (null !== t.memoizedState)
                  return (t.flags |= 128), Di(t), null;
                break;
              case 13:
                var r = t.memoizedState;
                if (null !== r)
                  return null !== r.dehydrated
                    ? (Ni(t), (t.flags |= 128), null)
                    : 0 !== (n & t.child.childLanes)
                      ? Zs(e, t, n)
                      : (Ni(t), null !== (e = rl(e, t, n)) ? e.sibling : null);
                Ni(t);
                break;
              case 19:
                var o = !!(128 & e.flags);
                if (
                  ((r = 0 !== (n & t.childLanes)) ||
                    (Ao(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                  o)
                ) {
                  if (r) return nl(e, t, n);
                  t.flags |= 128;
                }
                if (
                  (null !== (o = t.memoizedState) &&
                    ((o.rendering = null),
                    (o.tail = null),
                    (o.lastEffect = null)),
                  B(Ui, Ui.current),
                  r)
                )
                  break;
                return null;
              case 22:
                return (t.lanes = 0), Ls(e, t, n, t.pendingProps);
              case 24:
                To(0, Fo, e.memoizedState.cache);
            }
            return rl(e, t, n);
          })(e, t, n)
        );
      Ms = !!(131072 & e.flags);
    }
  else (Ms = !1), uo && 1048576 & t.flags && oo(t, Qr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 16:
      e: {
        var r = t.pendingProps;
        if (((e = ri(t.elementType)), (t.type = e), "function" != typeof e)) {
          if (null != e) {
            var o = e.$$typeof;
            if (o === _) {
              (t.tag = 11), (t = Ns(null, t, e, r, n));
              break e;
            }
            if (o === E) {
              (t.tag = 14), (t = Ds(null, t, e, r, n));
              break e;
            }
          }
          throw ((t = R(e) || e), Error(a(306, t, "")));
        }
        Fr(e)
          ? ((r = xs(e, r)), (t.tag = 1), (t = Gs(null, t, e, r, n)))
          : ((t.tag = 0), (t = Vs(null, t, e, r, n)));
      }
      return t;
    case 0:
      return Vs(e, t, t.type, t.pendingProps, n);
    case 1:
      return Gs(e, t, (r = t.type), (o = xs(r, t.pendingProps)), n);
    case 3:
      e: {
        if (($(t, t.stateNode.containerInfo), null === e)) throw Error(a(387));
        r = t.pendingProps;
        var i = t.memoizedState;
        (o = i.element), yi(e, t), Ei(t, r, null, n);
        var s = t.memoizedState;
        if (
          ((r = s.cache),
          To(0, Fo, r),
          r !== i.cache && Io(t, [Fo], n, !0),
          wi(),
          (r = s.element),
          i.isDehydrated)
        ) {
          if (
            ((i = { element: r, isDehydrated: !1, cache: s.cache }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            256 & t.flags)
          ) {
            t = Ws(e, t, r, n);
            break e;
          }
          if (r !== o) {
            _o((o = $r(Error(a(424)), t))), (t = Ws(e, t, r, n));
            break e;
          }
          for (
            e =
              9 === (e = t.stateNode.containerInfo).nodeType
                ? e.body
                : "HTML" === e.nodeName
                  ? e.ownerDocument.body
                  : e,
              co = Md(e.firstChild),
              lo = t,
              uo = !0,
              po = null,
              fo = !0,
              n = hi(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((bo(), r === o)) {
            t = rl(e, t, n);
            break e;
          }
          Ps(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 26:
      return (
        Hs(e, t),
        null === e
          ? (n = qd(t.type, null, t.pendingProps, null))
            ? (t.memoizedState = n)
            : uo ||
              ((n = t.type),
              (e = t.pendingProps),
              ((r = md(G.current).createElement(n))[Be] = t),
              (r[ze] = e),
              dd(r, n, e),
              Xe(r),
              (t.stateNode = r))
          : (t.memoizedState = qd(
              t.type,
              e.memoizedProps,
              t.pendingProps,
              e.memoizedState,
            )),
        null
      );
    case 27:
      return (
        K(t),
        null === e &&
          uo &&
          ((r = t.stateNode = jd(t.type, t.pendingProps, G.current)),
          (lo = t),
          (fo = !0),
          (o = co),
          Td(t.type) ? ((Pd = o), (co = Md(r.firstChild))) : (co = o)),
        Ps(e, t, t.pendingProps.children, n),
        Hs(e, t),
        null === e && (t.flags |= 4194304),
        t.child
      );
    case 5:
      return (
        null === e &&
          uo &&
          ((o = r = co) &&
            (null !==
            (r = (function (e, t, n, r) {
              for (; 1 === e.nodeType; ) {
                var o = n;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                  if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type))
                    break;
                } else if (r) {
                  if (!e[$e])
                    switch (t) {
                      case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                      case "link":
                        if (
                          "stylesheet" === (i = e.getAttribute("rel")) &&
                          e.hasAttribute("data-precedence")
                        )
                          break;
                        if (
                          i !== o.rel ||
                          e.getAttribute("href") !==
                            (null == o.href || "" === o.href ? null : o.href) ||
                          e.getAttribute("crossorigin") !==
                            (null == o.crossOrigin ? null : o.crossOrigin) ||
                          e.getAttribute("title") !==
                            (null == o.title ? null : o.title)
                        )
                          break;
                        return e;
                      case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                      case "script":
                        if (
                          ((i = e.getAttribute("src")) !==
                            (null == o.src ? null : o.src) ||
                            e.getAttribute("type") !==
                              (null == o.type ? null : o.type) ||
                            e.getAttribute("crossorigin") !==
                              (null == o.crossOrigin ? null : o.crossOrigin)) &&
                          i &&
                          e.hasAttribute("async") &&
                          !e.hasAttribute("itemprop")
                        )
                          break;
                        return e;
                      default:
                        return e;
                    }
                } else {
                  if ("input" !== t || "hidden" !== e.type) return e;
                  var i = null == o.name ? null : "" + o.name;
                  if ("hidden" === o.type && e.getAttribute("name") === i)
                    return e;
                }
                if (null === (e = Md(e.nextSibling))) break;
              }
              return null;
            })(r, t.type, t.pendingProps, fo))
              ? ((t.stateNode = r),
                (lo = t),
                (co = Md(r.firstChild)),
                (fo = !1),
                (o = !0))
              : (o = !1)),
          o || mo(t)),
        K(t),
        (o = t.type),
        (i = t.pendingProps),
        (s = null !== e ? e.memoizedProps : null),
        (r = i.children),
        vd(o, i) ? (r = null) : null !== s && vd(o, s) && (t.flags |= 32),
        null !== t.memoizedState &&
          ((o = ea(e, t, ra, null, null, n)), (cp._currentValue = o)),
        Hs(e, t),
        Ps(e, t, r, n),
        t.child
      );
    case 6:
      return (
        null === e &&
          uo &&
          ((e = n = co) &&
            (null !==
            (n = (function (e, t, n) {
              if ("" === t) return null;
              for (; 3 !== e.nodeType; ) {
                if (
                  (1 !== e.nodeType ||
                    "INPUT" !== e.nodeName ||
                    "hidden" !== e.type) &&
                  !n
                )
                  return null;
                if (null === (e = Md(e.nextSibling))) return null;
              }
              return e;
            })(n, t.pendingProps, fo))
              ? ((t.stateNode = n), (lo = t), (co = null), (e = !0))
              : (e = !1)),
          e || mo(t)),
        null
      );
    case 13:
      return Zs(e, t, n);
    case 4:
      return (
        $(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        null === e ? (t.child = fi(t, null, r, n)) : Ps(e, t, r, n),
        t.child
      );
    case 11:
      return Ns(e, t, t.type, t.pendingProps, n);
    case 7:
      return Ps(e, t, t.pendingProps, n), t.child;
    case 8:
    case 12:
      return Ps(e, t, t.pendingProps.children, n), t.child;
    case 10:
      return (
        (r = t.pendingProps),
        To(0, t.type, r.value),
        Ps(e, t, r.children, n),
        t.child
      );
    case 9:
      return (
        (o = t.type._context),
        (r = t.pendingProps.children),
        Ro(t),
        (r = r((o = Mo(o)))),
        (t.flags |= 1),
        Ps(e, t, r, n),
        t.child
      );
    case 14:
      return Ds(e, t, t.type, t.pendingProps, n);
    case 15:
      return js(e, t, t.type, t.pendingProps, n);
    case 19:
      return nl(e, t, n);
    case 31:
      return (function (e, t, n) {
        var r = t.pendingProps,
          o = !!(128 & t.flags);
        if (((t.flags &= -129), null === e)) {
          if (uo) {
            if ("hidden" === r.mode)
              return (e = Bs(t, r)), (t.lanes = 536870912), Fs(null, e);
            if (
              (Di(t),
              (e = co)
                ? null !==
                    (e =
                      null !== (e = Ad(e, fo)) && "&" === e.data ? e : null) &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: null !== eo ? { id: to, overflow: no } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  ((n = qr(e)).return = t),
                  (t.child = n),
                  (lo = t),
                  (co = null))
                : (e = null),
              null === e)
            )
              throw mo(t);
            return (t.lanes = 536870912), null;
          }
          return Bs(t, r);
        }
        var i = e.memoizedState;
        if (null !== i) {
          var s = i.dehydrated;
          if ((Di(t), o))
            if (256 & t.flags) (t.flags &= -257), (t = zs(e, t, n));
            else {
              if (null === t.memoizedState) throw Error(a(558));
              (t.child = e.child), (t.flags |= 128), (t = null);
            }
          else if (
            (Ms || Ao(e, t, n, !1), (o = 0 !== (n & e.childLanes)), Ms || o)
          ) {
            if (null !== (r = fc) && 0 !== (s = Ne(r, n)) && s !== i.retryLane)
              throw ((i.retryLane = s), Mr(e, s), $c(r, 0, s), Rs);
            iu(), (t = zs(e, t, n));
          } else
            (e = i.treeContext),
              (co = Md(s.nextSibling)),
              (lo = t),
              (uo = !0),
              (po = null),
              (fo = !1),
              null !== e && so(t, e),
              ((t = Bs(t, r)).flags |= 4096);
          return t;
        }
        return (
          ((e = Ur(e.child, {
            mode: r.mode,
            children: r.children,
          })).ref = t.ref),
          (t.child = e),
          (e.return = t),
          e
        );
      })(e, t, n);
    case 22:
      return Ls(e, t, n, t.pendingProps);
    case 24:
      return (
        Ro(t),
        (r = Mo(Fo)),
        null === e
          ? (null === (o = Yo()) &&
              ((o = fc),
              (i = Uo()),
              (o.pooledCache = i),
              i.refCount++,
              null !== i && (o.pooledCacheLanes |= n),
              (o = i)),
            (t.memoizedState = { parent: r, cache: o }),
            gi(t),
            To(0, Fo, o))
          : (0 !== (e.lanes & n) && (yi(e, t), Ei(t, null, null, n), wi()),
            (o = e.memoizedState),
            (i = t.memoizedState),
            o.parent !== r
              ? ((o = { parent: r, cache: r }),
                (t.memoizedState = o),
                0 === t.lanes &&
                  (t.memoizedState = t.updateQueue.baseState = o),
                To(0, Fo, r))
              : ((r = i.cache),
                To(0, Fo, r),
                r !== o.cache && Io(t, [Fo], n, !0))),
        Ps(e, t, t.pendingProps.children, n),
        t.child
      );
    case 29:
      throw t.pendingProps;
  }
  throw Error(a(156, t.tag));
}
function al(e) {
  e.flags |= 4;
}
function sl(e, t, n, r, o) {
  if (((t = !!(32 & e.mode)) && (t = !1), t)) {
    if (((e.flags |= 16777216), (335544128 & o) === o))
      if (e.stateNode.complete) e.flags |= 8192;
      else {
        if (!nu()) throw ((oi = ei), Jo);
        e.flags |= 8192;
      }
  } else e.flags &= -16777217;
}
function ll(e, t) {
  if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
  else if (((e.flags |= 16777216), !rp(t))) {
    if (!nu()) throw ((oi = ei), Jo);
    e.flags |= 8192;
  }
}
function cl(e, t) {
  null !== t && (e.flags |= 4),
    16384 & e.flags &&
      ((t = 22 !== e.tag ? Ae() : 536870912), (e.lanes |= t), (Cc |= t));
}
function ul(e, t) {
  if (!uo)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; null !== t; )
          null !== t.alternate && (n = t), (t = t.sibling);
        null === n ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; null !== n; )
          null !== n.alternate && (r = n), (n = n.sibling);
        null === r
          ? t || null === e.tail
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function dl(e) {
  var t = null !== e.alternate && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; null !== o; )
      (n |= o.lanes | o.childLanes),
        (r |= 65011712 & o.subtreeFlags),
        (r |= 65011712 & o.flags),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; null !== o; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function pl(e, t, n) {
  var r = t.pendingProps;
  switch ((ao(t), t.tag)) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
    case 1:
      return dl(t), null;
    case 3:
      return (
        (n = t.stateNode),
        (r = null),
        null !== e && (r = e.memoizedState.cache),
        t.memoizedState.cache !== r && (t.flags |= 2048),
        ko(Fo),
        Y(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (null !== e && null !== e.child) ||
          (vo(t)
            ? al(t)
            : null === e ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), So())),
        dl(t),
        null
      );
    case 26:
      var o = t.type,
        i = t.memoizedState;
      return (
        null === e
          ? (al(t), null !== i ? (dl(t), ll(t, i)) : (dl(t), sl(t, o, 0, 0, n)))
          : i
            ? i !== e.memoizedState
              ? (al(t), dl(t), ll(t, i))
              : (dl(t), (t.flags &= -16777217))
            : ((e = e.memoizedProps) !== r && al(t), dl(t), sl(t, o, 0, 0, n)),
        null
      );
    case 27:
      if (
        (Z(t), (n = G.current), (o = t.type), null !== e && null != t.stateNode)
      )
        e.memoizedProps !== r && al(t);
      else {
        if (!r) {
          if (null === t.stateNode) throw Error(a(166));
          return dl(t), null;
        }
        (e = V.current),
          vo(t) ? go(t) : ((e = jd(o, r, n)), (t.stateNode = e), al(t));
      }
      return dl(t), null;
    case 5:
      if ((Z(t), (o = t.type), null !== e && null != t.stateNode))
        e.memoizedProps !== r && al(t);
      else {
        if (!r) {
          if (null === t.stateNode) throw Error(a(166));
          return dl(t), null;
        }
        if (((i = V.current), vo(t))) go(t);
        else {
          var s = md(G.current);
          switch (i) {
            case 1:
              i = s.createElementNS("http://www.w3.org/2000/svg", o);
              break;
            case 2:
              i = s.createElementNS("http://www.w3.org/1998/Math/MathML", o);
              break;
            default:
              switch (o) {
                case "svg":
                  i = s.createElementNS("http://www.w3.org/2000/svg", o);
                  break;
                case "math":
                  i = s.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    o,
                  );
                  break;
                case "script":
                  ((i = s.createElement("div")).innerHTML =
                    "<script></script>"),
                    (i = i.removeChild(i.firstChild));
                  break;
                case "select":
                  (i =
                    "string" == typeof r.is
                      ? s.createElement("select", { is: r.is })
                      : s.createElement("select")),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size);
                  break;
                default:
                  i =
                    "string" == typeof r.is
                      ? s.createElement(o, { is: r.is })
                      : s.createElement(o);
              }
          }
          (i[Be] = t), (i[ze] = r);
          e: for (s = t.child; null !== s; ) {
            if (5 === s.tag || 6 === s.tag) i.appendChild(s.stateNode);
            else if (4 !== s.tag && 27 !== s.tag && null !== s.child) {
              (s.child.return = s), (s = s.child);
              continue;
            }
            if (s === t) break e;
            for (; null === s.sibling; ) {
              if (null === s.return || s.return === t) break e;
              s = s.return;
            }
            (s.sibling.return = s.return), (s = s.sibling);
          }
          t.stateNode = i;
          e: switch ((dd(i, o, r), o)) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              r = !!r.autoFocus;
              break e;
            case "img":
              r = !0;
              break e;
            default:
              r = !1;
          }
          r && al(t);
        }
      }
      return (
        dl(t),
        sl(t, t.type, null === e || e.memoizedProps, t.pendingProps, n),
        null
      );
    case 6:
      if (e && null != t.stateNode) e.memoizedProps !== r && al(t);
      else {
        if ("string" != typeof r && null === t.stateNode) throw Error(a(166));
        if (((e = G.current), vo(t))) {
          if (
            ((e = t.stateNode),
            (n = t.memoizedProps),
            (r = null),
            null !== (o = lo))
          )
            switch (o.tag) {
              case 27:
              case 5:
                r = o.memoizedProps;
            }
          (e[Be] = t),
            (e = !!(
              e.nodeValue === n ||
              (null !== r && !0 === r.suppressHydrationWarning) ||
              ld(e.nodeValue, n)
            )) || mo(t, !0);
        } else ((e = md(e).createTextNode(r))[Be] = t), (t.stateNode = e);
      }
      return dl(t), null;
    case 31:
      if (((n = t.memoizedState), null === e || null !== e.memoizedState)) {
        if (((r = vo(t)), null !== n)) {
          if (null === e) {
            if (!r) throw Error(a(318));
            if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null))
              throw Error(a(557));
            e[Be] = t;
          } else
            bo(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
          dl(t), (e = !1);
        } else
          (n = So()),
            null !== e &&
              null !== e.memoizedState &&
              (e.memoizedState.hydrationErrors = n),
            (e = !0);
        if (!e) return 256 & t.flags ? (Fi(t), t) : (Fi(t), null);
        if (128 & t.flags) throw Error(a(558));
      }
      return dl(t), null;
    case 13:
      if (
        ((r = t.memoizedState),
        null === e ||
          (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
      ) {
        if (((o = vo(t)), null !== r && null !== r.dehydrated)) {
          if (null === e) {
            if (!o) throw Error(a(318));
            if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
              throw Error(a(317));
            o[Be] = t;
          } else
            bo(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
          dl(t), (o = !1);
        } else
          (o = So()),
            null !== e &&
              null !== e.memoizedState &&
              (e.memoizedState.hydrationErrors = o),
            (o = !0);
        if (!o) return 256 & t.flags ? (Fi(t), t) : (Fi(t), null);
      }
      return (
        Fi(t),
        128 & t.flags
          ? ((t.lanes = n), t)
          : ((n = null !== r),
            (e = null !== e && null !== e.memoizedState),
            n &&
              ((o = null),
              null !== (r = t.child).alternate &&
                null !== r.alternate.memoizedState &&
                null !== r.alternate.memoizedState.cachePool &&
                (o = r.alternate.memoizedState.cachePool.pool),
              (i = null),
              null !== r.memoizedState &&
                null !== r.memoizedState.cachePool &&
                (i = r.memoizedState.cachePool.pool),
              i !== o && (r.flags |= 2048)),
            n !== e && n && (t.child.flags |= 8192),
            cl(t, t.updateQueue),
            dl(t),
            null)
      );
    case 4:
      return Y(), null === e && Ju(t.stateNode.containerInfo), dl(t), null;
    case 10:
      return ko(t.type), dl(t), null;
    case 19:
      if ((U(Ui), null === (r = t.memoizedState))) return dl(t), null;
      if (((o = !!(128 & t.flags)), null === (i = r.rendering)))
        if (o) ul(r, !1);
        else {
          if (0 !== xc || (null !== e && 128 & e.flags))
            for (e = t.child; null !== e; ) {
              if (null !== (i = Bi(e))) {
                for (
                  t.flags |= 128,
                    ul(r, !1),
                    e = i.updateQueue,
                    t.updateQueue = e,
                    cl(t, e),
                    t.subtreeFlags = 0,
                    e = n,
                    n = t.child;
                  null !== n;

                )
                  Br(n, e), (n = n.sibling);
                return (
                  B(Ui, (1 & Ui.current) | 2),
                  uo && ro(t, r.treeForkCount),
                  t.child
                );
              }
              e = e.sibling;
            }
          null !== r.tail &&
            se() > Pc &&
            ((t.flags |= 128), (o = !0), ul(r, !1), (t.lanes = 4194304));
        }
      else {
        if (!o)
          if (null !== (e = Bi(i))) {
            if (
              ((t.flags |= 128),
              (o = !0),
              (e = e.updateQueue),
              (t.updateQueue = e),
              cl(t, e),
              ul(r, !0),
              null === r.tail && "hidden" === r.tailMode && !i.alternate && !uo)
            )
              return dl(t), null;
          } else
            2 * se() - r.renderingStartTime > Pc &&
              536870912 !== n &&
              ((t.flags |= 128), (o = !0), ul(r, !1), (t.lanes = 4194304));
        r.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : (null !== (e = r.last) ? (e.sibling = i) : (t.child = i),
            (r.last = i));
      }
      return null !== r.tail
        ? ((e = r.tail),
          (r.rendering = e),
          (r.tail = e.sibling),
          (r.renderingStartTime = se()),
          (e.sibling = null),
          (n = Ui.current),
          B(Ui, o ? (1 & n) | 2 : 1 & n),
          uo && ro(t, r.treeForkCount),
          e)
        : (dl(t), null);
    case 22:
    case 23:
      return (
        Fi(t),
        Ri(),
        (r = null !== t.memoizedState),
        null !== e
          ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
          : r && (t.flags |= 8192),
        r
          ? !!(536870912 & n) &&
            !(128 & t.flags) &&
            (dl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : dl(t),
        null !== (n = t.updateQueue) && cl(t, n.retryQueue),
        (n = null),
        null !== e &&
          null !== e.memoizedState &&
          null !== e.memoizedState.cachePool &&
          (n = e.memoizedState.cachePool.pool),
        (r = null),
        null !== t.memoizedState &&
          null !== t.memoizedState.cachePool &&
          (r = t.memoizedState.cachePool.pool),
        r !== n && (t.flags |= 2048),
        null !== e && U($o),
        null
      );
    case 24:
      return (
        (n = null),
        null !== e && (n = e.memoizedState.cache),
        t.memoizedState.cache !== n && (t.flags |= 2048),
        ko(Fo),
        dl(t),
        null
      );
    case 25:
    case 30:
      return null;
  }
  throw Error(a(156, t.tag));
}
function fl(e, t) {
  switch ((ao(t), t.tag)) {
    case 1:
      return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
    case 3:
      return (
        ko(Fo),
        Y(),
        65536 & (e = t.flags) && !(128 & e)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null
      );
    case 26:
    case 27:
    case 5:
      return Z(t), null;
    case 31:
      if (null !== t.memoizedState) {
        if ((Fi(t), null === t.alternate)) throw Error(a(340));
        bo();
      }
      return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
    case 13:
      if ((Fi(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
        if (null === t.alternate) throw Error(a(340));
        bo();
      }
      return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
    case 19:
      return U(Ui), null;
    case 4:
      return Y(), null;
    case 10:
      return ko(t.type), null;
    case 22:
    case 23:
      return (
        Fi(t),
        Ri(),
        null !== e && U($o),
        65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 24:
      return ko(Fo), null;
    default:
      return null;
  }
}
function hl(e, t) {
  switch ((ao(t), t.tag)) {
    case 3:
      ko(Fo), Y();
      break;
    case 26:
    case 27:
    case 5:
      Z(t);
      break;
    case 4:
      Y();
      break;
    case 31:
      null !== t.memoizedState && Fi(t);
      break;
    case 13:
      Fi(t);
      break;
    case 19:
      U(Ui);
      break;
    case 10:
      ko(t.type);
      break;
    case 22:
    case 23:
      Fi(t), Ri(), null !== e && U($o);
      break;
    case 24:
      ko(Fo);
  }
}
function ml(e, t) {
  try {
    var n = t.updateQueue,
      r = null !== n ? n.lastEffect : null;
    if (null !== r) {
      var o = r.next;
      n = o;
      do {
        if ((n.tag & e) === e) {
          r = void 0;
          var i = n.create,
            a = n.inst;
          (r = i()), (a.destroy = r);
        }
        n = n.next;
      } while (n !== o);
    }
  } catch (e) {
    xu(t, t.return, e);
  }
}
function gl(e, t, n) {
  try {
    var r = t.updateQueue,
      o = null !== r ? r.lastEffect : null;
    if (null !== o) {
      var i = o.next;
      r = i;
      do {
        if ((r.tag & e) === e) {
          var a = r.inst,
            s = a.destroy;
          if (void 0 !== s) {
            (a.destroy = void 0), (o = t);
            var l = n,
              c = s;
            try {
              c();
            } catch (e) {
              xu(o, l, e);
            }
          }
        }
        r = r.next;
      } while (r !== i);
    }
  } catch (e) {
    xu(t, t.return, e);
  }
}
function yl(e) {
  var t = e.updateQueue;
  if (null !== t) {
    var n = e.stateNode;
    try {
      ki(t, n);
    } catch (t) {
      xu(e, e.return, t);
    }
  }
}
function vl(e, t, n) {
  (n.props = xs(e.type, e.memoizedProps)), (n.state = e.memoizedState);
  try {
    n.componentWillUnmount();
  } catch (n) {
    xu(e, t, n);
  }
}
function bl(e, t) {
  try {
    var n = e.ref;
    if (null !== n) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          var r = e.stateNode;
          break;
        default:
          r = e.stateNode;
      }
      "function" == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
    }
  } catch (n) {
    xu(e, t, n);
  }
}
function Sl(e, t) {
  var n = e.ref,
    r = e.refCleanup;
  if (null !== n)
    if ("function" == typeof r)
      try {
        r();
      } catch (n) {
        xu(e, t, n);
      } finally {
        (e.refCleanup = null),
          null != (e = e.alternate) && (e.refCleanup = null);
      }
    else if ("function" == typeof n)
      try {
        n(null);
      } catch (n) {
        xu(e, t, n);
      }
    else n.current = null;
}
function _l(e) {
  var t = e.type,
    n = e.memoizedProps,
    r = e.stateNode;
  try {
    e: switch (t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        n.autoFocus && r.focus();
        break e;
      case "img":
        n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
    }
  } catch (t) {
    xu(e, e.return, t);
  }
}
function xl(e, t, n) {
  try {
    var r = e.stateNode;
    !(function (e, t, n, r) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null,
            i = null,
            s = null,
            l = null,
            c = null,
            u = null,
            d = null;
          for (h in n) {
            var p = n[h];
            if (n.hasOwnProperty(h) && null != p)
              switch (h) {
                case "checked":
                case "value":
                  break;
                case "defaultValue":
                  c = p;
                default:
                  r.hasOwnProperty(h) || cd(e, t, h, null, r, p);
              }
          }
          for (var f in r) {
            var h = r[f];
            if (((p = n[f]), r.hasOwnProperty(f) && (null != h || null != p)))
              switch (f) {
                case "type":
                  i = h;
                  break;
                case "name":
                  o = h;
                  break;
                case "checked":
                  u = h;
                  break;
                case "defaultChecked":
                  d = h;
                  break;
                case "value":
                  s = h;
                  break;
                case "defaultValue":
                  l = h;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (null != h) throw Error(a(137, t));
                  break;
                default:
                  h !== p && cd(e, t, f, h, r, p);
              }
          }
          return void yt(e, s, l, c, u, d, i, o);
        case "select":
          for (i in ((h = s = l = f = null), n))
            if (((c = n[i]), n.hasOwnProperty(i) && null != c))
              switch (i) {
                case "value":
                  break;
                case "multiple":
                  h = c;
                default:
                  r.hasOwnProperty(i) || cd(e, t, i, null, r, c);
              }
          for (o in r)
            if (
              ((i = r[o]),
              (c = n[o]),
              r.hasOwnProperty(o) && (null != i || null != c))
            )
              switch (o) {
                case "value":
                  f = i;
                  break;
                case "defaultValue":
                  l = i;
                  break;
                case "multiple":
                  s = i;
                default:
                  i !== c && cd(e, t, o, i, r, c);
              }
          return (
            (t = l),
            (n = s),
            (r = h),
            void (null != f
              ? St(e, !!n, f, !1)
              : !!r != !!n &&
                (null != t ? St(e, !!n, t, !0) : St(e, !!n, n ? [] : "", !1)))
          );
        case "textarea":
          for (l in ((h = f = null), n))
            if (
              ((o = n[l]),
              n.hasOwnProperty(l) && null != o && !r.hasOwnProperty(l))
            )
              switch (l) {
                case "value":
                case "children":
                  break;
                default:
                  cd(e, t, l, null, r, o);
              }
          for (s in r)
            if (
              ((o = r[s]),
              (i = n[s]),
              r.hasOwnProperty(s) && (null != o || null != i))
            )
              switch (s) {
                case "value":
                  f = o;
                  break;
                case "defaultValue":
                  h = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != o) throw Error(a(91));
                  break;
                default:
                  o !== i && cd(e, t, s, o, r, i);
              }
          return void _t(e, f, h);
        case "option":
          for (var m in n)
            (f = n[m]),
              n.hasOwnProperty(m) &&
                null != f &&
                !r.hasOwnProperty(m) &&
                ("selected" === m
                  ? (e.selected = !1)
                  : cd(e, t, m, null, r, f));
          for (c in r)
            (f = r[c]),
              (h = n[c]),
              !r.hasOwnProperty(c) ||
                f === h ||
                (null == f && null == h) ||
                ("selected" === c
                  ? (e.selected =
                      f && "function" != typeof f && "symbol" != typeof f)
                  : cd(e, t, c, f, r, h));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var g in n)
            (f = n[g]),
              n.hasOwnProperty(g) &&
                null != f &&
                !r.hasOwnProperty(g) &&
                cd(e, t, g, null, r, f);
          for (u in r)
            if (
              ((f = r[u]),
              (h = n[u]),
              r.hasOwnProperty(u) && f !== h && (null != f || null != h))
            )
              switch (u) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (null != f) throw Error(a(137, t));
                  break;
                default:
                  cd(e, t, u, f, r, h);
              }
          return;
        default:
          if (Ct(t)) {
            for (var y in n)
              (f = n[y]),
                n.hasOwnProperty(y) &&
                  void 0 !== f &&
                  !r.hasOwnProperty(y) &&
                  ud(e, t, y, void 0, r, f);
            for (d in r)
              (f = r[d]),
                (h = n[d]),
                !r.hasOwnProperty(d) ||
                  f === h ||
                  (void 0 === f && void 0 === h) ||
                  ud(e, t, d, f, r, h);
            return;
          }
      }
      for (var v in n)
        (f = n[v]),
          n.hasOwnProperty(v) &&
            null != f &&
            !r.hasOwnProperty(v) &&
            cd(e, t, v, null, r, f);
      for (p in r)
        (f = r[p]),
          (h = n[p]),
          !r.hasOwnProperty(p) ||
            f === h ||
            (null == f && null == h) ||
            cd(e, t, p, f, r, h);
    })(r, e.type, n, t),
      (r[ze] = t);
  } catch (t) {
    xu(e, e.return, t);
  }
}
function wl(e) {
  return (
    5 === e.tag ||
    3 === e.tag ||
    26 === e.tag ||
    (27 === e.tag && Td(e.type)) ||
    4 === e.tag
  );
}
function El(e) {
  e: for (;;) {
    for (; null === e.sibling; ) {
      if (null === e.return || wl(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

    ) {
      if (27 === e.tag && Td(e.type)) continue e;
      if (2 & e.flags) continue e;
      if (null === e.child || 4 === e.tag) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function Tl(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r)
    (e = e.stateNode),
      t
        ? (9 === n.nodeType
            ? n.body
            : "HTML" === n.nodeName
              ? n.ownerDocument.body
              : n
          ).insertBefore(e, t)
        : ((t =
            9 === n.nodeType
              ? n.body
              : "HTML" === n.nodeName
                ? n.ownerDocument.body
                : n).appendChild(e),
          null != (n = n._reactRootContainer) ||
            null !== t.onclick ||
            (t.onclick = Rt));
  else if (
    4 !== r &&
    (27 === r && Td(e.type) && ((n = e.stateNode), (t = null)),
    null !== (e = e.child))
  )
    for (Tl(e, t, n), e = e.sibling; null !== e; ) Tl(e, t, n), (e = e.sibling);
}
function kl(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (
    4 !== r &&
    (27 === r && Td(e.type) && (n = e.stateNode), null !== (e = e.child))
  )
    for (kl(e, t, n), e = e.sibling; null !== e; ) kl(e, t, n), (e = e.sibling);
}
function Cl(e) {
  var t = e.stateNode,
    n = e.memoizedProps;
  try {
    for (var r = e.type, o = t.attributes; o.length; )
      t.removeAttributeNode(o[0]);
    dd(t, r, n), (t[Be] = e), (t[ze] = n);
  } catch (t) {
    xu(e, e.return, t);
  }
}
var Il = !1,
  Al = !1,
  Ol = !1,
  Rl = "function" == typeof WeakSet ? WeakSet : Set,
  Ml = null;
function Pl(e, t, n) {
  var r = n.flags;
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
      $l(e, n), 4 & r && ml(5, n);
      break;
    case 1:
      if (($l(e, n), 4 & r))
        if (((e = n.stateNode), null === t))
          try {
            e.componentDidMount();
          } catch (e) {
            xu(n, n.return, e);
          }
        else {
          var o = xs(n.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (e) {
            xu(n, n.return, e);
          }
        }
      64 & r && yl(n), 512 & r && bl(n, n.return);
      break;
    case 3:
      if (($l(e, n), 64 & r && null !== (e = n.updateQueue))) {
        if (((t = null), null !== n.child))
          switch (n.child.tag) {
            case 27:
            case 5:
            case 1:
              t = n.child.stateNode;
          }
        try {
          ki(e, t);
        } catch (e) {
          xu(n, n.return, e);
        }
      }
      break;
    case 27:
      null === t && 4 & r && Cl(n);
    case 26:
    case 5:
      $l(e, n), null === t && 4 & r && _l(n), 512 & r && bl(n, n.return);
      break;
    case 12:
      $l(e, n);
      break;
    case 31:
      $l(e, n), 4 & r && Ul(e, n);
      break;
    case 13:
      $l(e, n),
        4 & r && Bl(e, n),
        64 & r &&
          null !== (e = n.memoizedState) &&
          null !== (e = e.dehydrated) &&
          (function (e, t) {
            var n = e.ownerDocument;
            if ("$~" === e.data) e._reactRetry = t;
            else if ("$?" !== e.data || "loading" !== n.readyState) t();
            else {
              var r = function () {
                t(), n.removeEventListener("DOMContentLoaded", r);
              };
              n.addEventListener("DOMContentLoaded", r), (e._reactRetry = r);
            }
          })(e, (n = ku.bind(null, n)));
      break;
    case 22:
      if (!(r = null !== n.memoizedState || Il)) {
        (t = (null !== t && null !== t.memoizedState) || Al), (o = Il);
        var i = Al;
        (Il = r),
          (Al = t) && !i ? Kl(e, n, !!(8772 & n.subtreeFlags)) : $l(e, n),
          (Il = o),
          (Al = i);
      }
      break;
    case 30:
      break;
    default:
      $l(e, n);
  }
}
function Nl(e) {
  var t = e.alternate;
  null !== t && ((e.alternate = null), Nl(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    5 === e.tag && null !== (t = e.stateNode) && Ye(t),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
var Dl = null,
  jl = !1;
function Ll(e, t, n) {
  for (n = n.child; null !== n; ) Fl(e, t, n), (n = n.sibling);
}
function Fl(e, t, n) {
  if (ye && "function" == typeof ye.onCommitFiberUnmount)
    try {
      ye.onCommitFiberUnmount(ge, n);
    } catch (e) {}
  switch (n.tag) {
    case 26:
      Al || Sl(n, t),
        Ll(e, t, n),
        n.memoizedState
          ? n.memoizedState.count--
          : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
      break;
    case 27:
      Al || Sl(n, t);
      var r = Dl,
        o = jl;
      Td(n.type) && ((Dl = n.stateNode), (jl = !1)),
        Ll(e, t, n),
        Ld(n.stateNode),
        (Dl = r),
        (jl = o);
      break;
    case 5:
      Al || Sl(n, t);
    case 6:
      if (
        ((r = Dl),
        (o = jl),
        (Dl = null),
        Ll(e, t, n),
        (jl = o),
        null !== (Dl = r))
      )
        if (jl)
          try {
            (9 === Dl.nodeType
              ? Dl.body
              : "HTML" === Dl.nodeName
                ? Dl.ownerDocument.body
                : Dl
            ).removeChild(n.stateNode);
          } catch (e) {
            xu(n, t, e);
          }
        else
          try {
            Dl.removeChild(n.stateNode);
          } catch (e) {
            xu(n, t, e);
          }
      break;
    case 18:
      null !== Dl &&
        (jl
          ? (kd(
              9 === (e = Dl).nodeType
                ? e.body
                : "HTML" === e.nodeName
                  ? e.ownerDocument.body
                  : e,
              n.stateNode,
            ),
            zp(e))
          : kd(Dl, n.stateNode));
      break;
    case 4:
      (r = Dl),
        (o = jl),
        (Dl = n.stateNode.containerInfo),
        (jl = !0),
        Ll(e, t, n),
        (Dl = r),
        (jl = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      gl(2, n, t), Al || gl(4, n, t), Ll(e, t, n);
      break;
    case 1:
      Al ||
        (Sl(n, t),
        "function" == typeof (r = n.stateNode).componentWillUnmount &&
          vl(n, t, r)),
        Ll(e, t, n);
      break;
    case 21:
      Ll(e, t, n);
      break;
    case 22:
      (Al = (r = Al) || null !== n.memoizedState), Ll(e, t, n), (Al = r);
      break;
    default:
      Ll(e, t, n);
  }
}
function Ul(e, t) {
  if (
    null === t.memoizedState &&
    null !== (e = t.alternate) &&
    null !== (e = e.memoizedState)
  ) {
    e = e.dehydrated;
    try {
      zp(e);
    } catch (e) {
      xu(t, t.return, e);
    }
  }
}
function Bl(e, t) {
  if (
    null === t.memoizedState &&
    null !== (e = t.alternate) &&
    null !== (e = e.memoizedState) &&
    null !== (e = e.dehydrated)
  )
    try {
      zp(e);
    } catch (e) {
      xu(t, t.return, e);
    }
}
function zl(e, t) {
  var n = (function (e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return null === t && (t = e.stateNode = new Rl()), t;
      case 22:
        return (
          null === (t = (e = e.stateNode)._retryCache) &&
            (t = e._retryCache = new Rl()),
          t
        );
      default:
        throw Error(a(435, e.tag));
    }
  })(e);
  t.forEach(function (t) {
    if (!n.has(t)) {
      n.add(t);
      var r = Cu.bind(null, e, t);
      t.then(r, r);
    }
  });
}
function Hl(e, t) {
  var n = t.deletions;
  if (null !== n)
    for (var r = 0; r < n.length; r++) {
      var o = n[r],
        i = e,
        s = t,
        l = s;
      e: for (; null !== l; ) {
        switch (l.tag) {
          case 27:
            if (Td(l.type)) {
              (Dl = l.stateNode), (jl = !1);
              break e;
            }
            break;
          case 5:
            (Dl = l.stateNode), (jl = !1);
            break e;
          case 3:
          case 4:
            (Dl = l.stateNode.containerInfo), (jl = !0);
            break e;
        }
        l = l.return;
      }
      if (null === Dl) throw Error(a(160));
      Fl(i, s, o),
        (Dl = null),
        (jl = !1),
        null !== (i = o.alternate) && (i.return = null),
        (o.return = null);
    }
  if (13886 & t.subtreeFlags)
    for (t = t.child; null !== t; ) ql(t, e), (t = t.sibling);
}
var Vl = null;
function ql(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      Hl(t, e),
        Gl(e),
        4 & r && (gl(3, e, e.return), ml(3, e), gl(5, e, e.return));
      break;
    case 1:
      Hl(t, e),
        Gl(e),
        512 & r && (Al || null === n || Sl(n, n.return)),
        64 & r &&
          Il &&
          null !== (e = e.updateQueue) &&
          null !== (r = e.callbacks) &&
          ((n = e.shared.hiddenCallbacks),
          (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
      break;
    case 26:
      var o = Vl;
      if (
        (Hl(t, e),
        Gl(e),
        512 & r && (Al || null === n || Sl(n, n.return)),
        4 & r)
      ) {
        var i = null !== n ? n.memoizedState : null;
        if (((r = e.memoizedState), null === n))
          if (null === r)
            if (null === e.stateNode) {
              e: {
                (r = e.type), (n = e.memoizedProps), (o = o.ownerDocument || o);
                t: switch (r) {
                  case "title":
                    (!(i = o.getElementsByTagName("title")[0]) ||
                      i[$e] ||
                      i[Be] ||
                      "http://www.w3.org/2000/svg" === i.namespaceURI ||
                      i.hasAttribute("itemprop")) &&
                      ((i = o.createElement(r)),
                      o.head.insertBefore(i, o.querySelector("head > title"))),
                      dd(i, r, n),
                      (i[Be] = e),
                      Xe(i),
                      (r = i);
                    break e;
                  case "link":
                    var s = tp("link", "href", o).get(r + (n.href || ""));
                    if (s)
                      for (var l = 0; l < s.length; l++)
                        if (
                          (i = s[l]).getAttribute("href") ===
                            (null == n.href || "" === n.href ? null : n.href) &&
                          i.getAttribute("rel") ===
                            (null == n.rel ? null : n.rel) &&
                          i.getAttribute("title") ===
                            (null == n.title ? null : n.title) &&
                          i.getAttribute("crossorigin") ===
                            (null == n.crossOrigin ? null : n.crossOrigin)
                        ) {
                          s.splice(l, 1);
                          break t;
                        }
                    dd((i = o.createElement(r)), r, n), o.head.appendChild(i);
                    break;
                  case "meta":
                    if (
                      (s = tp("meta", "content", o).get(r + (n.content || "")))
                    )
                      for (l = 0; l < s.length; l++)
                        if (
                          (i = s[l]).getAttribute("content") ===
                            (null == n.content ? null : "" + n.content) &&
                          i.getAttribute("name") ===
                            (null == n.name ? null : n.name) &&
                          i.getAttribute("property") ===
                            (null == n.property ? null : n.property) &&
                          i.getAttribute("http-equiv") ===
                            (null == n.httpEquiv ? null : n.httpEquiv) &&
                          i.getAttribute("charset") ===
                            (null == n.charSet ? null : n.charSet)
                        ) {
                          s.splice(l, 1);
                          break t;
                        }
                    dd((i = o.createElement(r)), r, n), o.head.appendChild(i);
                    break;
                  default:
                    throw Error(a(468, r));
                }
                (i[Be] = e), Xe(i), (r = i);
              }
              e.stateNode = r;
            } else np(o, e.type, e.stateNode);
          else e.stateNode = Zd(o, r, e.memoizedProps);
        else
          i !== r
            ? (null === i
                ? null !== n.stateNode &&
                  (n = n.stateNode).parentNode.removeChild(n)
                : i.count--,
              null === r
                ? np(o, e.type, e.stateNode)
                : Zd(o, r, e.memoizedProps))
            : null === r &&
              null !== e.stateNode &&
              xl(e, e.memoizedProps, n.memoizedProps);
      }
      break;
    case 27:
      Hl(t, e),
        Gl(e),
        512 & r && (Al || null === n || Sl(n, n.return)),
        null !== n && 4 & r && xl(e, e.memoizedProps, n.memoizedProps);
      break;
    case 5:
      if (
        (Hl(t, e),
        Gl(e),
        512 & r && (Al || null === n || Sl(n, n.return)),
        32 & e.flags)
      ) {
        o = e.stateNode;
        try {
          wt(o, "");
        } catch (t) {
          xu(e, e.return, t);
        }
      }
      4 & r &&
        null != e.stateNode &&
        xl(e, (o = e.memoizedProps), null !== n ? n.memoizedProps : o),
        1024 & r && (Ol = !0);
      break;
    case 6:
      if ((Hl(t, e), Gl(e), 4 & r)) {
        if (null === e.stateNode) throw Error(a(162));
        (r = e.memoizedProps), (n = e.stateNode);
        try {
          n.nodeValue = r;
        } catch (t) {
          xu(e, e.return, t);
        }
      }
      break;
    case 3:
      if (
        ((ep = null),
        (o = Vl),
        (Vl = Bd(t.containerInfo)),
        Hl(t, e),
        (Vl = o),
        Gl(e),
        4 & r && null !== n && n.memoizedState.isDehydrated)
      )
        try {
          zp(t.containerInfo);
        } catch (t) {
          xu(e, e.return, t);
        }
      Ol && ((Ol = !1), Wl(e));
      break;
    case 4:
      (r = Vl), (Vl = Bd(e.stateNode.containerInfo)), Hl(t, e), Gl(e), (Vl = r);
      break;
    case 12:
    default:
      Hl(t, e), Gl(e);
      break;
    case 31:
    case 19:
      Hl(t, e),
        Gl(e),
        4 & r &&
          null !== (r = e.updateQueue) &&
          ((e.updateQueue = null), zl(e, r));
      break;
    case 13:
      Hl(t, e),
        Gl(e),
        8192 & e.child.flags &&
          (null !== e.memoizedState) !=
            (null !== n && null !== n.memoizedState) &&
          (Rc = se()),
        4 & r &&
          null !== (r = e.updateQueue) &&
          ((e.updateQueue = null), zl(e, r));
      break;
    case 22:
      o = null !== e.memoizedState;
      var c = null !== n && null !== n.memoizedState,
        u = Il,
        d = Al;
      if (
        ((Il = u || o),
        (Al = d || c),
        Hl(t, e),
        (Al = d),
        (Il = u),
        Gl(e),
        8192 & r)
      )
        e: for (
          t = e.stateNode,
            t._visibility = o ? -2 & t._visibility : 1 | t._visibility,
            o && (null === n || c || Il || Al || Yl(e)),
            n = null,
            t = e;
          ;

        ) {
          if (5 === t.tag || 26 === t.tag) {
            if (null === n) {
              c = n = t;
              try {
                if (((i = c.stateNode), o))
                  "function" == typeof (s = i.style).setProperty
                    ? s.setProperty("display", "none", "important")
                    : (s.display = "none");
                else {
                  l = c.stateNode;
                  var p = c.memoizedProps.style,
                    f =
                      null != p && p.hasOwnProperty("display")
                        ? p.display
                        : null;
                  l.style.display =
                    null == f || "boolean" == typeof f ? "" : ("" + f).trim();
                }
              } catch (e) {
                xu(c, c.return, e);
              }
            }
          } else if (6 === t.tag) {
            if (null === n) {
              c = t;
              try {
                c.stateNode.nodeValue = o ? "" : c.memoizedProps;
              } catch (e) {
                xu(c, c.return, e);
              }
            }
          } else if (18 === t.tag) {
            if (null === n) {
              c = t;
              try {
                var h = c.stateNode;
                o ? Cd(h, !0) : Cd(c.stateNode, !1);
              } catch (e) {
                xu(c, c.return, e);
              }
            }
          } else if (
            ((22 !== t.tag && 23 !== t.tag) ||
              null === t.memoizedState ||
              t === e) &&
            null !== t.child
          ) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break e;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) break e;
            n === t && (n = null), (t = t.return);
          }
          n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling);
        }
      4 & r &&
        null !== (r = e.updateQueue) &&
        null !== (n = r.retryQueue) &&
        ((r.retryQueue = null), zl(e, n));
    case 30:
    case 21:
  }
}
function Gl(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      for (var n, r = e.return; null !== r; ) {
        if (wl(r)) {
          n = r;
          break;
        }
        r = r.return;
      }
      if (null == n) throw Error(a(160));
      switch (n.tag) {
        case 27:
          var o = n.stateNode;
          kl(e, El(e), o);
          break;
        case 5:
          var i = n.stateNode;
          32 & n.flags && (wt(i, ""), (n.flags &= -33)), kl(e, El(e), i);
          break;
        case 3:
        case 4:
          var s = n.stateNode.containerInfo;
          Tl(e, El(e), s);
          break;
        default:
          throw Error(a(161));
      }
    } catch (t) {
      xu(e, e.return, t);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function Wl(e) {
  if (1024 & e.subtreeFlags)
    for (e = e.child; null !== e; ) {
      var t = e;
      Wl(t),
        5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
        (e = e.sibling);
    }
}
function $l(e, t) {
  if (8772 & t.subtreeFlags)
    for (t = t.child; null !== t; ) Pl(e, t.alternate, t), (t = t.sibling);
}
function Yl(e) {
  for (e = e.child; null !== e; ) {
    var t = e;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        gl(4, t, t.return), Yl(t);
        break;
      case 1:
        Sl(t, t.return);
        var n = t.stateNode;
        "function" == typeof n.componentWillUnmount && vl(t, t.return, n),
          Yl(t);
        break;
      case 27:
        Ld(t.stateNode);
      case 26:
      case 5:
        Sl(t, t.return), Yl(t);
        break;
      case 22:
        null === t.memoizedState && Yl(t);
        break;
      default:
        Yl(t);
    }
    e = e.sibling;
  }
}
function Kl(e, t, n) {
  for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
    var r = t.alternate,
      o = e,
      i = t,
      a = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Kl(o, i, n), ml(4, i);
        break;
      case 1:
        if (
          (Kl(o, i, n),
          "function" == typeof (o = (r = i).stateNode).componentDidMount)
        )
          try {
            o.componentDidMount();
          } catch (e) {
            xu(r, r.return, e);
          }
        if (null !== (o = (r = i).updateQueue)) {
          var s = r.stateNode;
          try {
            var l = o.shared.hiddenCallbacks;
            if (null !== l)
              for (o.shared.hiddenCallbacks = null, o = 0; o < l.length; o++)
                Ti(l[o], s);
          } catch (e) {
            xu(r, r.return, e);
          }
        }
        n && 64 & a && yl(i), bl(i, i.return);
        break;
      case 27:
        Cl(i);
      case 26:
      case 5:
        Kl(o, i, n), n && null === r && 4 & a && _l(i), bl(i, i.return);
        break;
      case 12:
        Kl(o, i, n);
        break;
      case 31:
        Kl(o, i, n), n && 4 & a && Ul(o, i);
        break;
      case 13:
        Kl(o, i, n), n && 4 & a && Bl(o, i);
        break;
      case 22:
        null === i.memoizedState && Kl(o, i, n), bl(i, i.return);
        break;
      case 30:
        break;
      default:
        Kl(o, i, n);
    }
    t = t.sibling;
  }
}
function Zl(e, t) {
  var n = null;
  null !== e &&
    null !== e.memoizedState &&
    null !== e.memoizedState.cachePool &&
    (n = e.memoizedState.cachePool.pool),
    (e = null),
    null !== t.memoizedState &&
      null !== t.memoizedState.cachePool &&
      (e = t.memoizedState.cachePool.pool),
    e !== n && (null != e && e.refCount++, null != n && Bo(n));
}
function Ql(e, t) {
  (e = null),
    null !== t.alternate && (e = t.alternate.memoizedState.cache),
    (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Bo(e));
}
function Jl(e, t, n, r) {
  if (10256 & t.subtreeFlags)
    for (t = t.child; null !== t; ) Xl(e, t, n, r), (t = t.sibling);
}
function Xl(e, t, n, r) {
  var o = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      Jl(e, t, n, r), 2048 & o && ml(9, t);
      break;
    case 1:
    case 31:
    case 13:
    default:
      Jl(e, t, n, r);
      break;
    case 3:
      Jl(e, t, n, r),
        2048 & o &&
          ((e = null),
          null !== t.alternate && (e = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache) !== e &&
            (t.refCount++, null != e && Bo(e)));
      break;
    case 12:
      if (2048 & o) {
        Jl(e, t, n, r), (e = t.stateNode);
        try {
          var i = t.memoizedProps,
            a = i.id,
            s = i.onPostCommit;
          "function" == typeof s &&
            s(
              a,
              null === t.alternate ? "mount" : "update",
              e.passiveEffectDuration,
              -0,
            );
        } catch (e) {
          xu(t, t.return, e);
        }
      } else Jl(e, t, n, r);
      break;
    case 23:
      break;
    case 22:
      (i = t.stateNode),
        (a = t.alternate),
        null !== t.memoizedState
          ? 2 & i._visibility
            ? Jl(e, t, n, r)
            : tc(e, t)
          : 2 & i._visibility
            ? Jl(e, t, n, r)
            : ((i._visibility |= 2),
              ec(e, t, n, r, !!(10256 & t.subtreeFlags) || !1)),
        2048 & o && Zl(a, t);
      break;
    case 24:
      Jl(e, t, n, r), 2048 & o && Ql(t.alternate, t);
  }
}
function ec(e, t, n, r, o) {
  for (o = o && (!!(10256 & t.subtreeFlags) || !1), t = t.child; null !== t; ) {
    var i = e,
      a = t,
      s = n,
      l = r,
      c = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ec(i, a, s, l, o), ml(8, a);
        break;
      case 23:
        break;
      case 22:
        var u = a.stateNode;
        null !== a.memoizedState
          ? 2 & u._visibility
            ? ec(i, a, s, l, o)
            : tc(i, a)
          : ((u._visibility |= 2), ec(i, a, s, l, o)),
          o && 2048 & c && Zl(a.alternate, a);
        break;
      case 24:
        ec(i, a, s, l, o), o && 2048 & c && Ql(a.alternate, a);
        break;
      default:
        ec(i, a, s, l, o);
    }
    t = t.sibling;
  }
}
function tc(e, t) {
  if (10256 & t.subtreeFlags)
    for (t = t.child; null !== t; ) {
      var n = e,
        r = t,
        o = r.flags;
      switch (r.tag) {
        case 22:
          tc(n, r), 2048 & o && Zl(r.alternate, r);
          break;
        case 24:
          tc(n, r), 2048 & o && Ql(r.alternate, r);
          break;
        default:
          tc(n, r);
      }
      t = t.sibling;
    }
}
var nc = 8192;
function rc(e, t, n) {
  if (e.subtreeFlags & nc)
    for (e = e.child; null !== e; ) oc(e, t, n), (e = e.sibling);
}
function oc(e, t, n) {
  switch (e.tag) {
    case 26:
      rc(e, t, n),
        e.flags & nc &&
          null !== e.memoizedState &&
          (function (e, t, n, r) {
            if (
              !(
                "stylesheet" !== n.type ||
                ("string" == typeof r.media &&
                  !1 === matchMedia(r.media).matches) ||
                4 & n.state.loading
              )
            ) {
              if (null === n.instance) {
                var o = Gd(r.href),
                  i = t.querySelector(Wd(o));
                if (i)
                  return (
                    null !== (t = i._p) &&
                      "object" == typeof t &&
                      "function" == typeof t.then &&
                      (e.count++, (e = ip.bind(e)), t.then(e, e)),
                    (n.state.loading |= 4),
                    (n.instance = i),
                    void Xe(i)
                  );
                (i = t.ownerDocument || t),
                  (r = $d(r)),
                  (o = Fd.get(o)) && Jd(r, o),
                  Xe((i = i.createElement("link")));
                var a = i;
                (a._p = new Promise(function (e, t) {
                  (a.onload = e), (a.onerror = t);
                })),
                  dd(i, "link", r),
                  (n.instance = i);
              }
              null === e.stylesheets && (e.stylesheets = new Map()),
                e.stylesheets.set(n, t),
                (t = n.state.preload) &&
                  !(3 & n.state.loading) &&
                  (e.count++,
                  (n = ip.bind(e)),
                  t.addEventListener("load", n),
                  t.addEventListener("error", n));
            }
          })(n, Vl, e.memoizedState, e.memoizedProps);
      break;
    case 5:
    default:
      rc(e, t, n);
      break;
    case 3:
    case 4:
      var r = Vl;
      (Vl = Bd(e.stateNode.containerInfo)), rc(e, t, n), (Vl = r);
      break;
    case 22:
      null === e.memoizedState &&
        (null !== (r = e.alternate) && null !== r.memoizedState
          ? ((r = nc), (nc = 16777216), rc(e, t, n), (nc = r))
          : rc(e, t, n));
  }
}
function ic(e) {
  var t = e.alternate;
  if (null !== t && null !== (e = t.child)) {
    t.child = null;
    do {
      (t = e.sibling), (e.sibling = null), (e = t);
    } while (null !== e);
  }
}
function ac(e) {
  var t = e.deletions;
  if (16 & e.flags) {
    if (null !== t)
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (Ml = r), cc(r, e);
      }
    ic(e);
  }
  if (10256 & e.subtreeFlags)
    for (e = e.child; null !== e; ) sc(e), (e = e.sibling);
}
function sc(e) {
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      ac(e), 2048 & e.flags && gl(9, e, e.return);
      break;
    case 3:
    case 12:
    default:
      ac(e);
      break;
    case 22:
      var t = e.stateNode;
      null !== e.memoizedState &&
      2 & t._visibility &&
      (null === e.return || 13 !== e.return.tag)
        ? ((t._visibility &= -3), lc(e))
        : ac(e);
  }
}
function lc(e) {
  var t = e.deletions;
  if (16 & e.flags) {
    if (null !== t)
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (Ml = r), cc(r, e);
      }
    ic(e);
  }
  for (e = e.child; null !== e; ) {
    switch ((t = e).tag) {
      case 0:
      case 11:
      case 15:
        gl(8, t, t.return), lc(t);
        break;
      case 22:
        2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), lc(t));
        break;
      default:
        lc(t);
    }
    e = e.sibling;
  }
}
function cc(e, t) {
  for (; null !== Ml; ) {
    var n = Ml;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        gl(8, n, t);
        break;
      case 23:
      case 22:
        if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
          var r = n.memoizedState.cachePool.pool;
          null != r && r.refCount++;
        }
        break;
      case 24:
        Bo(n.memoizedState.cache);
    }
    if (null !== (r = n.child)) (r.return = n), (Ml = r);
    else
      e: for (n = e; null !== Ml; ) {
        var o = (r = Ml).sibling,
          i = r.return;
        if ((Nl(r), r === n)) {
          Ml = null;
          break e;
        }
        if (null !== o) {
          (o.return = i), (Ml = o);
          break e;
        }
        Ml = i;
      }
  }
}
var uc = {
    getCacheForType: function (e) {
      var t = Mo(Fo),
        n = t.data.get(e);
      return void 0 === n && ((n = e()), t.data.set(e, n)), n;
    },
    cacheSignal: function () {
      return Mo(Fo).controller.signal;
    },
  },
  dc = "function" == typeof WeakMap ? WeakMap : Map,
  pc = 0,
  fc = null,
  hc = null,
  mc = 0,
  gc = 0,
  yc = null,
  vc = !1,
  bc = !1,
  Sc = !1,
  _c = 0,
  xc = 0,
  wc = 0,
  Ec = 0,
  Tc = 0,
  kc = 0,
  Cc = 0,
  Ic = null,
  Ac = null,
  Oc = !1,
  Rc = 0,
  Mc = 0,
  Pc = 1 / 0,
  Nc = null,
  Dc = null,
  jc = 0,
  Lc = null,
  Fc = null,
  Uc = 0,
  Bc = 0,
  zc = null,
  Hc = null,
  Vc = 0,
  qc = null;
function Gc() {
  return 2 & pc && 0 !== mc ? mc & -mc : null !== P.T ? zu() : Le();
}
function Wc() {
  if (0 === kc)
    if (536870912 & mc && !uo) kc = 536870912;
    else {
      var e = we;
      !(3932160 & (we <<= 1)) && (we = 262144), (kc = e);
    }
  return null !== (e = Mi.current) && (e.flags |= 32), kc;
}
function $c(e, t, n) {
  ((e !== fc || (2 !== gc && 9 !== gc)) && null === e.cancelPendingCommit) ||
    (eu(e, 0), Qc(e, mc, kc, !1)),
    Re(e, n),
    (2 & pc && e === fc) ||
      (e === fc && (!(2 & pc) && (Ec |= n), 4 === xc && Qc(e, mc, kc, !1)),
      Nu(e));
}
function Yc(e, t, n) {
  if (6 & pc) throw Error(a(327));
  for (
    var r = (!n && !(127 & t) && 0 === (t & e.expiredLanes)) || Ce(e, t),
      o = r
        ? (function (e, t) {
            var n = pc;
            pc |= 2;
            var r = ru(),
              o = ou();
            fc !== e || mc !== t
              ? ((Nc = null), (Pc = se() + 500), eu(e, t))
              : (bc = Ce(e, t));
            e: for (;;)
              try {
                if (0 !== gc && null !== hc) {
                  t = hc;
                  var i = yc;
                  t: switch (gc) {
                    case 1:
                      (gc = 0), (yc = null), du(e, t, i, 1);
                      break;
                    case 2:
                    case 9:
                      if (ti(i)) {
                        (gc = 0), (yc = null), uu(t);
                        break;
                      }
                      (t = function () {
                        (2 !== gc && 9 !== gc) || fc !== e || (gc = 7), Nu(e);
                      }),
                        i.then(t, t);
                      break e;
                    case 3:
                      gc = 7;
                      break e;
                    case 4:
                      gc = 5;
                      break e;
                    case 7:
                      ti(i)
                        ? ((gc = 0), (yc = null), uu(t))
                        : ((gc = 0), (yc = null), du(e, t, i, 7));
                      break;
                    case 5:
                      var s = null;
                      switch (hc.tag) {
                        case 26:
                          s = hc.memoizedState;
                        case 5:
                        case 27:
                          var l = hc;
                          if (s ? rp(s) : l.stateNode.complete) {
                            (gc = 0), (yc = null);
                            var c = l.sibling;
                            if (null !== c) hc = c;
                            else {
                              var u = l.return;
                              null !== u ? ((hc = u), pu(u)) : (hc = null);
                            }
                            break t;
                          }
                      }
                      (gc = 0), (yc = null), du(e, t, i, 5);
                      break;
                    case 6:
                      (gc = 0), (yc = null), du(e, t, i, 6);
                      break;
                    case 8:
                      Xc(), (xc = 6);
                      break e;
                    default:
                      throw Error(a(462));
                  }
                }
                lu();
                break;
              } catch (t) {
                tu(e, t);
              }
            return (
              (Eo = wo = null),
              (P.H = r),
              (P.A = o),
              (pc = n),
              null !== hc ? 0 : ((fc = null), (mc = 0), Ar(), xc)
            );
          })(e, t)
        : au(e, t, !0),
      i = r;
    ;

  ) {
    if (0 === o) {
      bc && !r && Qc(e, t, 0, !1);
      break;
    }
    if (((n = e.current.alternate), !i || Zc(n))) {
      if (2 === o) {
        if (((i = t), e.errorRecoveryDisabledLanes & i)) var s = 0;
        else
          s =
            0 != (s = -536870913 & e.pendingLanes)
              ? s
              : 536870912 & s
                ? 536870912
                : 0;
        if (0 !== s) {
          t = s;
          e: {
            var l = e;
            o = Ic;
            var c = l.current.memoizedState.isDehydrated;
            if ((c && (eu(l, s).flags |= 256), 2 !== (s = au(l, s, !1)))) {
              if (Sc && !c) {
                (l.errorRecoveryDisabledLanes |= i), (Ec |= i), (o = 4);
                break e;
              }
              (i = Ac),
                (Ac = o),
                null !== i && (null === Ac ? (Ac = i) : Ac.push.apply(Ac, i));
            }
            o = s;
          }
          if (((i = !1), 2 !== o)) continue;
        }
      }
      if (1 === o) {
        eu(e, 0), Qc(e, t, 0, !0);
        break;
      }
      e: {
        switch (((r = e), (i = o))) {
          case 0:
          case 1:
            throw Error(a(345));
          case 4:
            if ((4194048 & t) !== t) break;
          case 6:
            Qc(r, t, kc, !vc);
            break e;
          case 2:
            Ac = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(a(329));
        }
        if ((62914560 & t) === t && 10 < (o = Rc + 300 - se())) {
          if ((Qc(r, t, kc, !vc), 0 !== ke(r, 0, !0))) break e;
          (Uc = t),
            (r.timeoutHandle = Sd(
              Kc.bind(
                null,
                r,
                n,
                Ac,
                Nc,
                Oc,
                t,
                kc,
                Ec,
                Cc,
                vc,
                i,
                "Throttled",
                -0,
                0,
              ),
              o,
            ));
        } else Kc(r, n, Ac, Nc, Oc, t, kc, Ec, Cc, vc, i, null, -0, 0);
      }
      break;
    }
    (o = au(e, t, !1)), (i = !1);
  }
  Nu(e);
}
function Kc(e, t, n, r, o, i, a, s, l, c, u, d, p, f) {
  if (
    ((e.timeoutHandle = -1), 8192 & (d = t.subtreeFlags) || !(16785408 & ~d))
  ) {
    oc(
      t,
      i,
      (d = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Rt,
      }),
    );
    var h =
      (62914560 & i) === i ? Rc - se() : (4194048 & i) === i ? Mc - se() : 0;
    if (
      null !==
      (h = (function (e, t) {
        return (
          e.stylesheets && 0 === e.count && sp(e, e.stylesheets),
          0 < e.count || 0 < e.imgCount
            ? function (n) {
                var r = setTimeout(function () {
                  if ((e.stylesheets && sp(e, e.stylesheets), e.unsuspend)) {
                    var t = e.unsuspend;
                    (e.unsuspend = null), t();
                  }
                }, 6e4 + t);
                0 < e.imgBytes &&
                  0 === op &&
                  (op =
                    62500 *
                    (function () {
                      if ("function" == typeof performance.getEntriesByType) {
                        for (
                          var e = 0,
                            t = 0,
                            n = performance.getEntriesByType("resource"),
                            r = 0;
                          r < n.length;
                          r++
                        ) {
                          var o = n[r],
                            i = o.transferSize,
                            a = o.initiatorType,
                            s = o.duration;
                          if (i && s && pd(a)) {
                            for (
                              a = 0, s = o.responseEnd, r += 1;
                              r < n.length;
                              r++
                            ) {
                              var l = n[r],
                                c = l.startTime;
                              if (c > s) break;
                              var u = l.transferSize,
                                d = l.initiatorType;
                              u &&
                                pd(d) &&
                                (a +=
                                  u *
                                  ((l = l.responseEnd) < s
                                    ? 1
                                    : (s - c) / (l - c)));
                            }
                            if (
                              (--r,
                              (t += (8 * (i + a)) / (o.duration / 1e3)),
                              10 < ++e)
                            )
                              break;
                          }
                        }
                        if (0 < e) return t / e / 1e6;
                      }
                      return navigator.connection &&
                        "number" == typeof (e = navigator.connection.downlink)
                        ? e
                        : 5;
                    })());
                var o = setTimeout(
                  function () {
                    if (
                      ((e.waitingForImages = !1),
                      0 === e.count &&
                        (e.stylesheets && sp(e, e.stylesheets), e.unsuspend))
                    ) {
                      var t = e.unsuspend;
                      (e.unsuspend = null), t();
                    }
                  },
                  (e.imgBytes > op ? 50 : 800) + t,
                );
                return (
                  (e.unsuspend = n),
                  function () {
                    (e.unsuspend = null), clearTimeout(r), clearTimeout(o);
                  }
                );
              }
            : null
        );
      })(d, h))
    )
      return (
        (Uc = i),
        (e.cancelPendingCommit = h(
          hu.bind(null, e, t, i, n, r, o, a, s, l, u, d, null, p, f),
        )),
        void Qc(e, i, a, !c)
      );
  }
  hu(e, t, i, n, r, o, a, s, l);
}
function Zc(e) {
  for (var t = e; ; ) {
    var n = t.tag;
    if (
      (0 === n || 11 === n || 15 === n) &&
      16384 & t.flags &&
      null !== (n = t.updateQueue) &&
      null !== (n = n.stores)
    )
      for (var r = 0; r < n.length; r++) {
        var o = n[r],
          i = o.getSnapshot;
        o = o.value;
        try {
          if (!Qn(i(), o)) return !1;
        } catch (e) {
          return !1;
        }
      }
    if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; null === t.sibling; ) {
        if (null === t.return || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qc(e, t, n, r) {
  (t &= ~Tc),
    (t &= ~Ec),
    (e.suspendedLanes |= t),
    (e.pingedLanes &= ~t),
    r && (e.warmLanes |= t),
    (r = e.expirationTimes);
  for (var o = t; 0 < o; ) {
    var i = 31 - be(o),
      a = 1 << i;
    (r[i] = -1), (o &= ~a);
  }
  0 !== n && Me(e, n, t);
}
function Jc() {
  return !!(6 & pc) || (Du(0, !1), !1);
}
function Xc() {
  if (null !== hc) {
    if (0 === gc) var e = hc.return;
    else (Eo = wo = null), aa((e = hc)), (si = null), (li = 0), (e = hc);
    for (; null !== e; ) hl(e.alternate, e), (e = e.return);
    hc = null;
  }
}
function eu(e, t) {
  var n = e.timeoutHandle;
  -1 !== n && ((e.timeoutHandle = -1), _d(n)),
    null !== (n = e.cancelPendingCommit) &&
      ((e.cancelPendingCommit = null), n()),
    (Uc = 0),
    Xc(),
    (fc = e),
    (hc = n = Ur(e.current, null)),
    (mc = t),
    (gc = 0),
    (yc = null),
    (vc = !1),
    (bc = Ce(e, t)),
    (Sc = !1),
    (Cc = kc = Tc = Ec = wc = xc = 0),
    (Ac = Ic = null),
    (Oc = !1),
    8 & t && (t |= 32 & t);
  var r = e.entangledLanes;
  if (0 !== r)
    for (e = e.entanglements, r &= t; 0 < r; ) {
      var o = 31 - be(r),
        i = 1 << o;
      (t |= e[o]), (r &= ~i);
    }
  return (_c = t), Ar(), n;
}
function tu(e, t) {
  (Hi = null),
    (P.H = hs),
    t === Qo || t === Xo
      ? ((t = ii()), (gc = 3))
      : t === Jo
        ? ((t = ii()), (gc = 4))
        : (gc =
            t === Rs
              ? 8
              : null !== t &&
                  "object" == typeof t &&
                  "function" == typeof t.then
                ? 6
                : 1),
    (yc = t),
    null === hc && ((xc = 1), ks(e, $r(t, e.current)));
}
function nu() {
  var e = Mi.current;
  return (
    null === e ||
    ((4194048 & mc) === mc
      ? null === Pi
      : !!((62914560 & mc) === mc || 536870912 & mc) && e === Pi)
  );
}
function ru() {
  var e = P.H;
  return (P.H = hs), null === e ? hs : e;
}
function ou() {
  var e = P.A;
  return (P.A = uc), e;
}
function iu() {
  (xc = 4),
    vc || ((4194048 & mc) !== mc && null !== Mi.current) || (bc = !0),
    (!(134217727 & wc) && !(134217727 & Ec)) ||
      null === fc ||
      Qc(fc, mc, kc, !1);
}
function au(e, t, n) {
  var r = pc;
  pc |= 2;
  var o = ru(),
    i = ou();
  (fc === e && mc === t) || ((Nc = null), eu(e, t)), (t = !1);
  var a = xc;
  e: for (;;)
    try {
      if (0 !== gc && null !== hc) {
        var s = hc,
          l = yc;
        switch (gc) {
          case 8:
            Xc(), (a = 6);
            break e;
          case 3:
          case 2:
          case 9:
          case 6:
            null === Mi.current && (t = !0);
            var c = gc;
            if (((gc = 0), (yc = null), du(e, s, l, c), n && bc)) {
              a = 0;
              break e;
            }
            break;
          default:
            (c = gc), (gc = 0), (yc = null), du(e, s, l, c);
        }
      }
      su(), (a = xc);
      break;
    } catch (t) {
      tu(e, t);
    }
  return (
    t && e.shellSuspendCounter++,
    (Eo = wo = null),
    (pc = r),
    (P.H = o),
    (P.A = i),
    null === hc && ((fc = null), (mc = 0), Ar()),
    a
  );
}
function su() {
  for (; null !== hc; ) cu(hc);
}
function lu() {
  for (; null !== hc && !ie(); ) cu(hc);
}
function cu(e) {
  var t = il(e.alternate, e, _c);
  (e.memoizedProps = e.pendingProps), null === t ? pu(e) : (hc = t);
}
function uu(e) {
  var t = e,
    n = t.alternate;
  switch (t.tag) {
    case 15:
    case 0:
      t = qs(n, t, t.pendingProps, t.type, void 0, mc);
      break;
    case 11:
      t = qs(n, t, t.pendingProps, t.type.render, t.ref, mc);
      break;
    case 5:
      aa(t);
    default:
      hl(n, t), (t = il(n, (t = hc = Br(t, _c)), _c));
  }
  (e.memoizedProps = e.pendingProps), null === t ? pu(e) : (hc = t);
}
function du(e, t, n, r) {
  (Eo = wo = null), aa(t), (si = null), (li = 0);
  var o = t.return;
  try {
    if (
      (function (e, t, n, r, o) {
        if (
          ((n.flags |= 32768),
          null !== r && "object" == typeof r && "function" == typeof r.then)
        ) {
          if (
            (null !== (t = n.alternate) && Ao(t, n, o, !0),
            null !== (n = Mi.current))
          ) {
            switch (n.tag) {
              case 31:
              case 13:
                return (
                  null === Pi
                    ? iu()
                    : null === n.alternate && 0 === xc && (xc = 3),
                  (n.flags &= -257),
                  (n.flags |= 65536),
                  (n.lanes = o),
                  r === ei
                    ? (n.flags |= 16384)
                    : (null === (t = n.updateQueue)
                        ? (n.updateQueue = new Set([r]))
                        : t.add(r),
                      wu(e, r, o)),
                  !1
                );
              case 22:
                return (
                  (n.flags |= 65536),
                  r === ei
                    ? (n.flags |= 16384)
                    : (null === (t = n.updateQueue)
                        ? ((t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([r]),
                          }),
                          (n.updateQueue = t))
                        : null === (n = t.retryQueue)
                          ? (t.retryQueue = new Set([r]))
                          : n.add(r),
                      wu(e, r, o)),
                  !1
                );
            }
            throw Error(a(435, n.tag));
          }
          return wu(e, r, o), iu(), !1;
        }
        if (uo)
          return (
            null !== (t = Mi.current)
              ? (!(65536 & t.flags) && (t.flags |= 256),
                (t.flags |= 65536),
                (t.lanes = o),
                r !== ho && _o($r((e = Error(a(422), { cause: r })), n)))
              : (r !== ho && _o($r((t = Error(a(423), { cause: r })), n)),
                ((e = e.current.alternate).flags |= 65536),
                (o &= -o),
                (e.lanes |= o),
                (r = $r(r, n)),
                _i(e, (o = Is(e.stateNode, r, o))),
                4 !== xc && (xc = 2)),
            !1
          );
        var i = Error(a(520), { cause: r });
        if (
          ((i = $r(i, n)),
          null === Ic ? (Ic = [i]) : Ic.push(i),
          4 !== xc && (xc = 2),
          null === t)
        )
          return !0;
        (r = $r(r, n)), (n = t);
        do {
          switch (n.tag) {
            case 3:
              return (
                (n.flags |= 65536),
                (e = o & -o),
                (n.lanes |= e),
                _i(n, (e = Is(n.stateNode, r, e))),
                !1
              );
            case 1:
              if (
                ((t = n.type),
                (i = n.stateNode),
                !(
                  128 & n.flags ||
                  ("function" != typeof t.getDerivedStateFromError &&
                    (null === i ||
                      "function" != typeof i.componentDidCatch ||
                      (null !== Dc && Dc.has(i))))
                ))
              )
                return (
                  (n.flags |= 65536),
                  (o &= -o),
                  (n.lanes |= o),
                  Os((o = As(o)), e, n, r),
                  _i(n, o),
                  !1
                );
          }
          n = n.return;
        } while (null !== n);
        return !1;
      })(e, o, t, n, mc)
    )
      return (xc = 1), ks(e, $r(n, e.current)), void (hc = null);
  } catch (t) {
    if (null !== o) throw ((hc = o), t);
    return (xc = 1), ks(e, $r(n, e.current)), void (hc = null);
  }
  32768 & t.flags
    ? (uo || 1 === r
        ? (e = !0)
        : bc || 536870912 & mc
          ? (e = !1)
          : ((vc = e = !0),
            (2 === r || 9 === r || 3 === r || 6 === r) &&
              null !== (r = Mi.current) &&
              13 === r.tag &&
              (r.flags |= 16384)),
      fu(t, e))
    : pu(t);
}
function pu(e) {
  var t = e;
  do {
    if (32768 & t.flags) return void fu(t, vc);
    e = t.return;
    var n = pl(t.alternate, t, _c);
    if (null !== n) return void (hc = n);
    if (null !== (t = t.sibling)) return void (hc = t);
    hc = t = e;
  } while (null !== t);
  0 === xc && (xc = 5);
}
function fu(e, t) {
  do {
    var n = fl(e.alternate, e);
    if (null !== n) return (n.flags &= 32767), void (hc = n);
    if (
      (null !== (n = e.return) &&
        ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
      !t && null !== (e = e.sibling))
    )
      return void (hc = e);
    hc = e = n;
  } while (null !== e);
  (xc = 6), (hc = null);
}
function hu(e, t, n, r, o, i, s, l, c) {
  e.cancelPendingCommit = null;
  do {
    bu();
  } while (0 !== jc);
  if (6 & pc) throw Error(a(327));
  if (null !== t) {
    if (t === e.current) throw Error(a(177));
    if (
      ((i = t.lanes | t.childLanes),
      (function (e, t, n, r, o, i) {
        var a = e.pendingLanes;
        (e.pendingLanes = n),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.warmLanes = 0),
          (e.expiredLanes &= n),
          (e.entangledLanes &= n),
          (e.errorRecoveryDisabledLanes &= n),
          (e.shellSuspendCounter = 0);
        var s = e.entanglements,
          l = e.expirationTimes,
          c = e.hiddenUpdates;
        for (n = a & ~n; 0 < n; ) {
          var u = 31 - be(n),
            d = 1 << u;
          (s[u] = 0), (l[u] = -1);
          var p = c[u];
          if (null !== p)
            for (c[u] = null, u = 0; u < p.length; u++) {
              var f = p[u];
              null !== f && (f.lane &= -536870913);
            }
          n &= ~d;
        }
        0 !== r && Me(e, r, 0),
          0 !== i &&
            0 === o &&
            0 !== e.tag &&
            (e.suspendedLanes |= i & ~(a & ~t));
      })(e, n, (i |= Ir), s, l, c),
      e === fc && ((hc = fc = null), (mc = 0)),
      (Fc = t),
      (Lc = e),
      (Uc = n),
      (Bc = i),
      (zc = o),
      (Hc = r),
      10256 & t.subtreeFlags || 10256 & t.flags
        ? ((e.callbackNode = null),
          (e.callbackPriority = 0),
          re(de, function () {
            return Su(), null;
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
      (r = !!(13878 & t.flags)),
      13878 & t.subtreeFlags || r)
    ) {
      (r = P.T), (P.T = null), (o = N.p), (N.p = 2), (s = pc), (pc |= 4);
      try {
        !(function (e, t) {
          if (((e = e.containerInfo), (fd = gp), rr((e = nr(e))))) {
            if ("selectionStart" in e)
              var n = {
                start: e.selectionStart,
                end: e.selectionEnd,
              };
            else
              e: {
                var r =
                  (n = ((n = e.ownerDocument) && n.defaultView) || window)
                    .getSelection && n.getSelection();
                if (r && 0 !== r.rangeCount) {
                  n = r.anchorNode;
                  var o = r.anchorOffset,
                    i = r.focusNode;
                  r = r.focusOffset;
                  try {
                    n.nodeType, i.nodeType;
                  } catch (e) {
                    n = null;
                    break e;
                  }
                  var s = 0,
                    l = -1,
                    c = -1,
                    u = 0,
                    d = 0,
                    p = e,
                    f = null;
                  t: for (;;) {
                    for (
                      var h;
                      p !== n || (0 !== o && 3 !== p.nodeType) || (l = s + o),
                        p !== i || (0 !== r && 3 !== p.nodeType) || (c = s + r),
                        3 === p.nodeType && (s += p.nodeValue.length),
                        null !== (h = p.firstChild);

                    )
                      (f = p), (p = h);
                    for (;;) {
                      if (p === e) break t;
                      if (
                        (f === n && ++u === o && (l = s),
                        f === i && ++d === r && (c = s),
                        null !== (h = p.nextSibling))
                      )
                        break;
                      f = (p = f).parentNode;
                    }
                    p = h;
                  }
                  n = -1 === l || -1 === c ? null : { start: l, end: c };
                } else n = null;
              }
            n = n || { start: 0, end: 0 };
          } else n = null;
          for (
            hd = { focusedElem: e, selectionRange: n }, gp = !1, Ml = t;
            null !== Ml;

          )
            if (((e = (t = Ml).child), 1028 & t.subtreeFlags && null !== e))
              (e.return = t), (Ml = e);
            else
              for (; null !== Ml; ) {
                switch (((i = (t = Ml).alternate), (e = t.flags), t.tag)) {
                  case 0:
                    if (
                      4 & e &&
                      null !==
                        (e = null !== (e = t.updateQueue) ? e.events : null)
                    )
                      for (n = 0; n < e.length; n++)
                        (o = e[n]).ref.impl = o.nextImpl;
                    break;
                  case 11:
                  case 15:
                  case 5:
                  case 26:
                  case 27:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  case 1:
                    if (1024 & e && null !== i) {
                      (e = void 0),
                        (n = t),
                        (o = i.memoizedProps),
                        (i = i.memoizedState),
                        (r = n.stateNode);
                      try {
                        var m = xs(n.type, o);
                        (e = r.getSnapshotBeforeUpdate(m, i)),
                          (r.__reactInternalSnapshotBeforeUpdate = e);
                      } catch (e) {
                        xu(n, n.return, e);
                      }
                    }
                    break;
                  case 3:
                    if (1024 & e)
                      if (9 === (n = (e = t.stateNode.containerInfo).nodeType))
                        Id(e);
                      else if (1 === n)
                        switch (e.nodeName) {
                          case "HEAD":
                          case "HTML":
                          case "BODY":
                            Id(e);
                            break;
                          default:
                            e.textContent = "";
                        }
                    break;
                  default:
                    if (1024 & e) throw Error(a(163));
                }
                if (null !== (e = t.sibling)) {
                  (e.return = t.return), (Ml = e);
                  break;
                }
                Ml = t.return;
              }
        })(e, t);
      } finally {
        (pc = s), (N.p = o), (P.T = r);
      }
    }
    (jc = 1), mu(), gu(), yu();
  }
}
function mu() {
  if (1 === jc) {
    jc = 0;
    var e = Lc,
      t = Fc,
      n = !!(13878 & t.flags);
    if (13878 & t.subtreeFlags || n) {
      (n = P.T), (P.T = null);
      var r = N.p;
      N.p = 2;
      var o = pc;
      pc |= 4;
      try {
        ql(t, e);
        var i = hd,
          a = nr(e.containerInfo),
          s = i.focusedElem,
          l = i.selectionRange;
        if (
          a !== s &&
          s &&
          s.ownerDocument &&
          tr(s.ownerDocument.documentElement, s)
        ) {
          if (null !== l && rr(s)) {
            var c = l.start,
              u = l.end;
            if ((void 0 === u && (u = c), "selectionStart" in s))
              (s.selectionStart = c),
                (s.selectionEnd = Math.min(u, s.value.length));
            else {
              var d = s.ownerDocument || document,
                p = (d && d.defaultView) || window;
              if (p.getSelection) {
                var f = p.getSelection(),
                  h = s.textContent.length,
                  m = Math.min(l.start, h),
                  g = void 0 === l.end ? m : Math.min(l.end, h);
                !f.extend && m > g && ((a = g), (g = m), (m = a));
                var y = er(s, m),
                  v = er(s, g);
                if (
                  y &&
                  v &&
                  (1 !== f.rangeCount ||
                    f.anchorNode !== y.node ||
                    f.anchorOffset !== y.offset ||
                    f.focusNode !== v.node ||
                    f.focusOffset !== v.offset)
                ) {
                  var b = d.createRange();
                  b.setStart(y.node, y.offset),
                    f.removeAllRanges(),
                    m > g
                      ? (f.addRange(b), f.extend(v.node, v.offset))
                      : (b.setEnd(v.node, v.offset), f.addRange(b));
                }
              }
            }
          }
          for (d = [], f = s; (f = f.parentNode); )
            1 === f.nodeType &&
              d.push({
                element: f,
                left: f.scrollLeft,
                top: f.scrollTop,
              });
          for (
            "function" == typeof s.focus && s.focus(), s = 0;
            s < d.length;
            s++
          ) {
            var S = d[s];
            (S.element.scrollLeft = S.left), (S.element.scrollTop = S.top);
          }
        }
        (gp = !!fd), (hd = fd = null);
      } finally {
        (pc = o), (N.p = r), (P.T = n);
      }
    }
    (e.current = t), (jc = 2);
  }
}
function gu() {
  if (2 === jc) {
    jc = 0;
    var e = Lc,
      t = Fc,
      n = !!(8772 & t.flags);
    if (8772 & t.subtreeFlags || n) {
      (n = P.T), (P.T = null);
      var r = N.p;
      N.p = 2;
      var o = pc;
      pc |= 4;
      try {
        Pl(e, t.alternate, t);
      } finally {
        (pc = o), (N.p = r), (P.T = n);
      }
    }
    jc = 3;
  }
}
function yu() {
  if (4 === jc || 3 === jc) {
    (jc = 0), ae();
    var e = Lc,
      t = Fc,
      n = Uc,
      r = Hc;
    10256 & t.subtreeFlags || 10256 & t.flags
      ? (jc = 5)
      : ((jc = 0), (Fc = Lc = null), vu(e, e.pendingLanes));
    var o = e.pendingLanes;
    if (
      (0 === o && (Dc = null),
      je(n),
      (t = t.stateNode),
      ye && "function" == typeof ye.onCommitFiberRoot)
    )
      try {
        ye.onCommitFiberRoot(ge, t, void 0, !(128 & ~t.current.flags));
      } catch (e) {}
    if (null !== r) {
      (t = P.T), (o = N.p), (N.p = 2), (P.T = null);
      try {
        for (var i = e.onRecoverableError, a = 0; a < r.length; a++) {
          var s = r[a];
          i(s.value, { componentStack: s.stack });
        }
      } finally {
        (P.T = t), (N.p = o);
      }
    }
    3 & Uc && bu(),
      Nu(e),
      (o = e.pendingLanes),
      261930 & n && 42 & o
        ? e === qc
          ? Vc++
          : ((Vc = 0), (qc = e))
        : (Vc = 0),
      Du(0, !1);
  }
}
function vu(e, t) {
  0 === (e.pooledCacheLanes &= t) &&
    null != (t = e.pooledCache) &&
    ((e.pooledCache = null), Bo(t));
}
function bu() {
  return mu(), gu(), yu(), Su();
}
function Su() {
  if (5 !== jc) return !1;
  var e = Lc,
    t = Bc;
  Bc = 0;
  var n = je(Uc),
    r = P.T,
    o = N.p;
  try {
    (N.p = 32 > n ? 32 : n), (P.T = null), (n = zc), (zc = null);
    var i = Lc,
      s = Uc;
    if (((jc = 0), (Fc = Lc = null), (Uc = 0), 6 & pc)) throw Error(a(331));
    var l = pc;
    if (
      ((pc |= 4),
      sc(i.current),
      Xl(i, i.current, s, n),
      (pc = l),
      Du(0, !1),
      ye && "function" == typeof ye.onPostCommitFiberRoot)
    )
      try {
        ye.onPostCommitFiberRoot(ge, i);
      } catch (e) {}
    return !0;
  } finally {
    (N.p = o), (P.T = r), vu(e, t);
  }
}
function _u(e, t, n) {
  (t = $r(n, t)),
    null !== (e = bi(e, (t = Is(e.stateNode, t, 2)), 2)) && (Re(e, 2), Nu(e));
}
function xu(e, t, n) {
  if (3 === e.tag) _u(e, e, n);
  else
    for (; null !== t; ) {
      if (3 === t.tag) {
        _u(t, e, n);
        break;
      }
      if (1 === t.tag) {
        var r = t.stateNode;
        if (
          "function" == typeof t.type.getDerivedStateFromError ||
          ("function" == typeof r.componentDidCatch &&
            (null === Dc || !Dc.has(r)))
        ) {
          (e = $r(n, e)),
            null !== (r = bi(t, (n = As(2)), 2)) &&
              (Os(n, r, t, e), Re(r, 2), Nu(r));
          break;
        }
      }
      t = t.return;
    }
}
function wu(e, t, n) {
  var r = e.pingCache;
  if (null === r) {
    r = e.pingCache = new dc();
    var o = new Set();
    r.set(t, o);
  } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
  o.has(n) || ((Sc = !0), o.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e));
}
function Eu(e, t, n) {
  var r = e.pingCache;
  null !== r && r.delete(t),
    (e.pingedLanes |= e.suspendedLanes & n),
    (e.warmLanes &= ~n),
    fc === e &&
      (mc & n) === n &&
      (4 === xc || (3 === xc && (62914560 & mc) === mc && 300 > se() - Rc)
        ? !(2 & pc) && eu(e, 0)
        : (Tc |= n),
      Cc === mc && (Cc = 0)),
    Nu(e);
}
function Tu(e, t) {
  0 === t && (t = Ae()), null !== (e = Mr(e, t)) && (Re(e, t), Nu(e));
}
function ku(e) {
  var t = e.memoizedState,
    n = 0;
  null !== t && (n = t.retryLane), Tu(e, n);
}
function Cu(e, t) {
  var n = 0;
  switch (e.tag) {
    case 31:
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      null !== o && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    case 22:
      r = e.stateNode._retryCache;
      break;
    default:
      throw Error(a(314));
  }
  null !== r && r.delete(t), Tu(e, n);
}
var Iu = null,
  Au = null,
  Ou = !1,
  Ru = !1,
  Mu = !1,
  Pu = 0;
function Nu(e) {
  e !== Au &&
    null === e.next &&
    (null === Au ? (Iu = Au = e) : (Au = Au.next = e)),
    (Ru = !0),
    Ou ||
      ((Ou = !0),
      wd(function () {
        6 & pc ? re(ce, ju) : Lu();
      }));
}
function Du(e, t) {
  if (!Mu && Ru) {
    Mu = !0;
    do {
      for (var n = !1, r = Iu; null !== r; ) {
        if (!t)
          if (0 !== e) {
            var o = r.pendingLanes;
            if (0 === o) var i = 0;
            else {
              var a = r.suspendedLanes,
                s = r.pingedLanes;
              (i = (1 << (31 - be(42 | e) + 1)) - 1),
                (i =
                  201326741 & (i &= o & ~(a & ~s))
                    ? (201326741 & i) | 1
                    : i
                      ? 2 | i
                      : 0);
            }
            0 !== i && ((n = !0), Bu(r, i));
          } else
            (i = mc),
              !(
                3 &
                (i = ke(
                  r,
                  r === fc ? i : 0,
                  null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
                ))
              ) ||
                Ce(r, i) ||
                ((n = !0), Bu(r, i));
        r = r.next;
      }
    } while (n);
    Mu = !1;
  }
}
function ju() {
  Lu();
}
function Lu() {
  Ru = Ou = !1;
  var e,
    t = 0;
  0 !== Pu &&
    ((e = window.event) && "popstate" === e.type
      ? e !== bd && ((bd = e), 1)
      : ((bd = null), 0)) &&
    (t = Pu);
  for (var n = se(), r = null, o = Iu; null !== o; ) {
    var i = o.next,
      a = Fu(o, n);
    0 === a
      ? ((o.next = null),
        null === r ? (Iu = i) : (r.next = i),
        null === i && (Au = r))
      : ((r = o), (0 !== t || 3 & a) && (Ru = !0)),
      (o = i);
  }
  (0 !== jc && 5 !== jc) || Du(t, !1), 0 !== Pu && (Pu = 0);
}
function Fu(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = -62914561 & e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - be(i),
      s = 1 << a,
      l = o[a];
    -1 === l
      ? (0 !== (s & n) && 0 === (s & r)) || (o[a] = Ie(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
  if (
    ((n = mc),
    (n = ke(
      e,
      e === (t = fc) ? n : 0,
      null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
    )),
    (r = e.callbackNode),
    0 === n ||
      (e === t && (2 === gc || 9 === gc)) ||
      null !== e.cancelPendingCommit)
  )
    return (
      null !== r && null !== r && oe(r),
      (e.callbackNode = null),
      (e.callbackPriority = 0)
    );
  if (!(3 & n) || Ce(e, n)) {
    if ((t = n & -n) === e.callbackPriority) return t;
    switch ((null !== r && oe(r), je(n))) {
      case 2:
      case 8:
        n = ue;
        break;
      case 32:
      default:
        n = de;
        break;
      case 268435456:
        n = fe;
    }
    return (
      (r = Uu.bind(null, e)),
      (n = re(n, r)),
      (e.callbackPriority = t),
      (e.callbackNode = n),
      t
    );
  }
  return (
    null !== r && null !== r && oe(r),
    (e.callbackPriority = 2),
    (e.callbackNode = null),
    2
  );
}
function Uu(e, t) {
  if (0 !== jc && 5 !== jc)
    return (e.callbackNode = null), (e.callbackPriority = 0), null;
  var n = e.callbackNode;
  if (bu() && e.callbackNode !== n) return null;
  var r = mc;
  return 0 ===
    (r = ke(
      e,
      e === fc ? r : 0,
      null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
    ))
    ? null
    : (Yc(e, r, t),
      Fu(e, se()),
      null != e.callbackNode && e.callbackNode === n ? Uu.bind(null, e) : null);
}
function Bu(e, t) {
  if (bu()) return null;
  Yc(e, t, !0);
}
function zu() {
  if (0 === Pu) {
    var e = Vo;
    0 === e && ((e = xe), !(261888 & (xe <<= 1)) && (xe = 256)), (Pu = e);
  }
  return Pu;
}
function Hu(e) {
  return null == e || "symbol" == typeof e || "boolean" == typeof e
    ? null
    : "function" == typeof e
      ? e
      : Ot("" + e);
}
function Vu(e, t) {
  var n = t.ownerDocument.createElement("input");
  return (
    (n.name = t.name),
    (n.value = t.value),
    e.id && n.setAttribute("form", e.id),
    t.parentNode.insertBefore(n, t),
    (e = new FormData(e)),
    n.parentNode.removeChild(n),
    e
  );
}
for (var qu = 0; qu < wr.length; qu++) {
  var Gu = wr[qu];
  Er(Gu.toLowerCase(), "on" + (Gu[0].toUpperCase() + Gu.slice(1)));
}
Er(mr, "onAnimationEnd"),
  Er(gr, "onAnimationIteration"),
  Er(yr, "onAnimationStart"),
  Er("dblclick", "onDoubleClick"),
  Er("focusin", "onFocus"),
  Er("focusout", "onBlur"),
  Er(vr, "onTransitionRun"),
  Er(br, "onTransitionStart"),
  Er(Sr, "onTransitionCancel"),
  Er(_r, "onTransitionEnd"),
  rt("onMouseEnter", ["mouseout", "mouseover"]),
  rt("onMouseLeave", ["mouseout", "mouseover"]),
  rt("onPointerEnter", ["pointerout", "pointerover"]),
  rt("onPointerLeave", ["pointerout", "pointerover"]),
  nt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " ",
    ),
  ),
  nt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " ",
    ),
  ),
  nt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
  nt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
  ),
  nt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
  ),
  nt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
  );
var Wu =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  $u = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle"
      .split(" ")
      .concat(Wu),
  );
function Yu(e, t) {
  t = !!(4 & t);
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          (i = s), (o.currentTarget = c);
          try {
            i(o);
          } catch (e) {
            Tr(e);
          }
          (o.currentTarget = null), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = (s = r[a]).instance),
            (c = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          (i = s), (o.currentTarget = c);
          try {
            i(o);
          } catch (e) {
            Tr(e);
          }
          (o.currentTarget = null), (i = l);
        }
    }
  }
}
function Ku(e, t) {
  var n = t[Ve];
  void 0 === n && (n = t[Ve] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Xu(t, e, 2, !1), n.add(r));
}
function Zu(e, t, n) {
  var r = 0;
  t && (r |= 4), Xu(n, e, r, t);
}
var Qu = "_reactListening" + Math.random().toString(36).slice(2);
function Ju(e) {
  if (!e[Qu]) {
    (e[Qu] = !0),
      et.forEach(function (t) {
        "selectionchange" !== t && ($u.has(t) || Zu(t, !1, e), Zu(t, !0, e));
      });
    var t = 9 === e.nodeType ? e : e.ownerDocument;
    null === t || t[Qu] || ((t[Qu] = !0), Zu("selectionchange", !1, t));
  }
}
function Xu(e, t, n, r) {
  switch (wp(t)) {
    case 2:
      var o = yp;
      break;
    case 8:
      o = vp;
      break;
    default:
      o = bp;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !zt ||
      ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
      (o = !0),
    r
      ? void 0 !== o
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : void 0 !== o
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function ed(e, t, n, r, o) {
  var i = r;
  if (!(1 & t || 2 & t || null === r))
    e: for (;;) {
      if (null === r) return;
      var a = r.tag;
      if (3 === a || 4 === a) {
        var l = r.stateNode.containerInfo;
        if (l === o) break;
        if (4 === a)
          for (a = r.return; null !== a; ) {
            var c = a.tag;
            if ((3 === c || 4 === c) && a.stateNode.containerInfo === o) return;
            a = a.return;
          }
        for (; null !== l; ) {
          if (null === (a = Ke(l))) return;
          if (5 === (c = a.tag) || 6 === c || 26 === c || 27 === c) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Ft(function () {
    var r = i,
      o = Pt(n),
      a = [];
    e: {
      var l = xr.get(e);
      if (void 0 !== l) {
        var c = tn,
          u = e;
        switch (e) {
          case "keypress":
            if (0 === $t(n)) break e;
          case "keydown":
          case "keyup":
            c = yn;
            break;
          case "focusin":
            (u = "focus"), (c = ln);
            break;
          case "focusout":
            (u = "blur"), (c = ln);
            break;
          case "beforeblur":
          case "afterblur":
            c = ln;
            break;
          case "click":
            if (2 === n.button) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            c = an;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            c = sn;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            c = bn;
            break;
          case mr:
          case gr:
          case yr:
            c = cn;
            break;
          case _r:
            c = Sn;
            break;
          case "scroll":
          case "scrollend":
            c = rn;
            break;
          case "wheel":
            c = _n;
            break;
          case "copy":
          case "cut":
          case "paste":
            c = un;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            c = vn;
            break;
          case "toggle":
          case "beforetoggle":
            c = xn;
        }
        var d = !!(4 & t),
          p = !d && ("scroll" === e || "scrollend" === e),
          f = d ? (null !== l ? l + "Capture" : null) : l;
        d = [];
        for (var h, m = r; null !== m; ) {
          var g = m;
          if (
            ((h = g.stateNode),
            (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
              null === h ||
              null === f ||
              (null != (g = Ut(m, f)) && d.push(td(m, g, h))),
            p)
          )
            break;
          m = m.return;
        }
        0 < d.length &&
          ((l = new c(l, u, null, n, o)), a.push({ event: l, listeners: d }));
      }
    }
    if (!(7 & t)) {
      if (
        ((c = "mouseout" === e || "pointerout" === e),
        (!(l = "mouseover" === e || "pointerover" === e) ||
          n === Mt ||
          !(u = n.relatedTarget || n.fromElement) ||
          (!Ke(u) && !u[He])) &&
          (c || l) &&
          ((l =
            o.window === o
              ? o
              : (l = o.ownerDocument)
                ? l.defaultView || l.parentWindow
                : window),
          c
            ? ((c = r),
              null !==
                (u = (u = n.relatedTarget || n.toElement) ? Ke(u) : null) &&
                ((p = s(u)),
                (d = u.tag),
                u !== p || (5 !== d && 27 !== d && 6 !== d)) &&
                (u = null))
            : ((c = null), (u = r)),
          c !== u))
      ) {
        if (
          ((d = an),
          (g = "onMouseLeave"),
          (f = "onMouseEnter"),
          (m = "mouse"),
          ("pointerout" !== e && "pointerover" !== e) ||
            ((d = vn),
            (g = "onPointerLeave"),
            (f = "onPointerEnter"),
            (m = "pointer")),
          (p = null == c ? l : Qe(c)),
          (h = null == u ? l : Qe(u)),
          ((l = new d(g, m + "leave", c, n, o)).target = p),
          (l.relatedTarget = h),
          (g = null),
          Ke(o) === r &&
            (((d = new d(f, m + "enter", u, n, o)).target = h),
            (d.relatedTarget = p),
            (g = d)),
          (p = g),
          c && u)
        )
          e: {
            for (d = rd, m = u, h = 0, g = f = c; g; g = d(g)) h++;
            g = 0;
            for (var y = m; y; y = d(y)) g++;
            for (; 0 < h - g; ) (f = d(f)), h--;
            for (; 0 < g - h; ) (m = d(m)), g--;
            for (; h--; ) {
              if (f === m || (null !== m && f === m.alternate)) {
                d = f;
                break e;
              }
              (f = d(f)), (m = d(m));
            }
            d = null;
          }
        else d = null;
        null !== c && od(a, l, c, d, !1),
          null !== u && null !== p && od(a, p, u, d, !0);
      }
      if (
        "select" ===
          (c = (l = r ? Qe(r) : window).nodeName && l.nodeName.toLowerCase()) ||
        ("input" === c && "file" === l.type)
      )
        var v = Bn;
      else if (Nn(l))
        if (zn) v = Zn;
        else {
          v = Yn;
          var b = $n;
        }
      else
        !(c = l.nodeName) ||
        "input" !== c.toLowerCase() ||
        ("checkbox" !== l.type && "radio" !== l.type)
          ? r && Ct(r.elementType) && (v = Bn)
          : (v = Kn);
      switch (
        (v && (v = v(e, r))
          ? Dn(a, v, n, o)
          : (b && b(e, l, r),
            "focusout" === e &&
              r &&
              "number" === l.type &&
              null != r.memoizedProps.value &&
              bt(l, "number", l.value)),
        (b = r ? Qe(r) : window),
        e)
      ) {
        case "focusin":
          (Nn(b) || "true" === b.contentEditable) &&
            ((ir = b), (ar = r), (sr = null));
          break;
        case "focusout":
          sr = ar = ir = null;
          break;
        case "mousedown":
          lr = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (lr = !1), cr(a, n, o);
          break;
        case "selectionchange":
          if (or) break;
        case "keydown":
        case "keyup":
          cr(a, n, o);
      }
      var S;
      if (En)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Mn
          ? On(e, n) && (_ = "onCompositionEnd")
          : "keydown" === e && 229 === n.keyCode && (_ = "onCompositionStart");
      _ &&
        (Cn &&
          "ko" !== n.locale &&
          (Mn || "onCompositionStart" !== _
            ? "onCompositionEnd" === _ && Mn && (S = Wt())
            : ((qt = "value" in (Vt = o) ? Vt.value : Vt.textContent),
              (Mn = !0))),
        0 < (b = nd(r, _)).length &&
          ((_ = new dn(_, e, null, n, o)),
          a.push({ event: _, listeners: b }),
          (S || null !== (S = Rn(n))) && (_.data = S))),
        (S = kn
          ? (function (e, t) {
              switch (e) {
                case "compositionend":
                  return Rn(t);
                case "keypress":
                  return 32 !== t.which ? null : ((An = !0), In);
                case "textInput":
                  return (e = t.data) === In && An ? null : e;
                default:
                  return null;
              }
            })(e, n)
          : (function (e, t) {
              if (Mn)
                return "compositionend" === e || (!En && On(e, t))
                  ? ((e = Wt()), (Gt = qt = Vt = null), (Mn = !1), e)
                  : null;
              switch (e) {
                case "paste":
                default:
                  return null;
                case "keypress":
                  if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                  ) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                  }
                  return null;
                case "compositionend":
                  return Cn && "ko" !== t.locale ? null : t.data;
              }
            })(e, n)) &&
          0 < (_ = nd(r, "onBeforeInput")).length &&
          ((b = new dn("onBeforeInput", "beforeinput", null, n, o)),
          a.push({ event: b, listeners: _ }),
          (b.data = S)),
        (function (e, t, n, r, o) {
          if ("submit" === t && n && n.stateNode === o) {
            var i = Hu((o[ze] || null).action),
              a = r.submitter;
            a &&
              null !==
                (t = (t = a[ze] || null)
                  ? Hu(t.formAction)
                  : a.getAttribute("formAction")) &&
              ((i = t), (a = null));
            var s = new tn("action", "action", null, r, o);
            e.push({
              event: s,
              listeners: [
                {
                  instance: null,
                  listener: function () {
                    if (r.defaultPrevented) {
                      if (0 !== Pu) {
                        var e = a ? Vu(o, a) : new FormData(o);
                        es(
                          n,
                          {
                            pending: !0,
                            data: e,
                            method: o.method,
                            action: i,
                          },
                          null,
                          e,
                        );
                      }
                    } else
                      "function" == typeof i &&
                        (s.preventDefault(),
                        (e = a ? Vu(o, a) : new FormData(o)),
                        es(
                          n,
                          {
                            pending: !0,
                            data: e,
                            method: o.method,
                            action: i,
                          },
                          i,
                          e,
                        ));
                  },
                  currentTarget: o,
                },
              ],
            });
          }
        })(a, e, r, n, o);
    }
    Yu(a, t);
  });
}
function td(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nd(e, t) {
  for (var n = t + "Capture", r = []; null !== e; ) {
    var o = e,
      i = o.stateNode;
    if (
      ((5 !== (o = o.tag) && 26 !== o && 27 !== o) ||
        null === i ||
        (null != (o = Ut(e, n)) && r.unshift(td(e, o, i)),
        null != (o = Ut(e, t)) && r.push(td(e, o, i))),
      3 === e.tag)
    )
      return r;
    e = e.return;
  }
  return [];
}
function rd(e) {
  if (null === e) return null;
  do {
    e = e.return;
  } while (e && 5 !== e.tag && 27 !== e.tag);
  return e || null;
}
function od(e, t, n, r, o) {
  for (var i = t._reactName, a = []; null !== n && n !== r; ) {
    var s = n,
      l = s.alternate,
      c = s.stateNode;
    if (((s = s.tag), null !== l && l === r)) break;
    (5 !== s && 26 !== s && 27 !== s) ||
      null === c ||
      ((l = c),
      o
        ? null != (c = Ut(n, i)) && a.unshift(td(n, c, l))
        : o || (null != (c = Ut(n, i)) && a.push(td(n, c, l)))),
      (n = n.return);
  }
  0 !== a.length && e.push({ event: t, listeners: a });
}
var id = /\r\n?/g,
  ad = /\u0000|\uFFFD/g;
function sd(e) {
  return ("string" == typeof e ? e : "" + e).replace(id, "\n").replace(ad, "");
}
function ld(e, t) {
  return (t = sd(t)), sd(e) === t;
}
function cd(e, t, n, r, o, i) {
  switch (n) {
    case "children":
      "string" == typeof r
        ? "body" === t || ("textarea" === t && "" === r) || wt(e, r)
        : ("number" == typeof r || "bigint" == typeof r) &&
          "body" !== t &&
          wt(e, "" + r);
      break;
    case "className":
      lt(e, "class", r);
      break;
    case "tabIndex":
      lt(e, "tabindex", r);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      lt(e, n, r);
      break;
    case "style":
      kt(e, r, i);
      break;
    case "data":
      if ("object" !== t) {
        lt(e, "data", r);
        break;
      }
    case "src":
    case "href":
      if ("" === r && ("a" !== t || "href" !== n)) {
        e.removeAttribute(n);
        break;
      }
      if (
        null == r ||
        "function" == typeof r ||
        "symbol" == typeof r ||
        "boolean" == typeof r
      ) {
        e.removeAttribute(n);
        break;
      }
      (r = Ot("" + r)), e.setAttribute(n, r);
      break;
    case "action":
    case "formAction":
      if ("function" == typeof r) {
        e.setAttribute(
          n,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
        );
        break;
      }
      if (
        ("function" == typeof i &&
          ("formAction" === n
            ? ("input" !== t && cd(e, t, "name", o.name, o, null),
              cd(e, t, "formEncType", o.formEncType, o, null),
              cd(e, t, "formMethod", o.formMethod, o, null),
              cd(e, t, "formTarget", o.formTarget, o, null))
            : (cd(e, t, "encType", o.encType, o, null),
              cd(e, t, "method", o.method, o, null),
              cd(e, t, "target", o.target, o, null))),
        null == r || "symbol" == typeof r || "boolean" == typeof r)
      ) {
        e.removeAttribute(n);
        break;
      }
      (r = Ot("" + r)), e.setAttribute(n, r);
      break;
    case "onClick":
      null != r && (e.onclick = Rt);
      break;
    case "onScroll":
      null != r && Ku("scroll", e);
      break;
    case "onScrollEnd":
      null != r && Ku("scrollend", e);
      break;
    case "dangerouslySetInnerHTML":
      if (null != r) {
        if ("object" != typeof r || !("__html" in r)) throw Error(a(61));
        if (null != (n = r.__html)) {
          if (null != o.children) throw Error(a(60));
          e.innerHTML = n;
        }
      }
      break;
    case "multiple":
      e.multiple = r && "function" != typeof r && "symbol" != typeof r;
      break;
    case "muted":
      e.muted = r && "function" != typeof r && "symbol" != typeof r;
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
    case "autoFocus":
      break;
    case "xlinkHref":
      if (
        null == r ||
        "function" == typeof r ||
        "boolean" == typeof r ||
        "symbol" == typeof r
      ) {
        e.removeAttribute("xlink:href");
        break;
      }
      (n = Ot("" + r)),
        e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      null != r && "function" != typeof r && "symbol" != typeof r
        ? e.setAttribute(n, "" + r)
        : e.removeAttribute(n);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      r && "function" != typeof r && "symbol" != typeof r
        ? e.setAttribute(n, "")
        : e.removeAttribute(n);
      break;
    case "capture":
    case "download":
      !0 === r
        ? e.setAttribute(n, "")
        : !1 !== r &&
            null != r &&
            "function" != typeof r &&
            "symbol" != typeof r
          ? e.setAttribute(n, r)
          : e.removeAttribute(n);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      null != r &&
      "function" != typeof r &&
      "symbol" != typeof r &&
      !isNaN(r) &&
      1 <= r
        ? e.setAttribute(n, r)
        : e.removeAttribute(n);
      break;
    case "rowSpan":
    case "start":
      null == r || "function" == typeof r || "symbol" == typeof r || isNaN(r)
        ? e.removeAttribute(n)
        : e.setAttribute(n, r);
      break;
    case "popover":
      Ku("beforetoggle", e), Ku("toggle", e), st(e, "popover", r);
      break;
    case "xlinkActuate":
      ct(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
      break;
    case "xlinkArcrole":
      ct(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
      break;
    case "xlinkRole":
      ct(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
      break;
    case "xlinkShow":
      ct(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
      break;
    case "xlinkTitle":
      ct(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
      break;
    case "xlinkType":
      ct(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
      break;
    case "xmlBase":
      ct(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
      break;
    case "xmlLang":
      ct(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
      break;
    case "xmlSpace":
      ct(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
      break;
    case "is":
      st(e, "is", r);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      (!(2 < n.length) ||
        ("o" !== n[0] && "O" !== n[0]) ||
        ("n" !== n[1] && "N" !== n[1])) &&
        st(e, (n = It.get(n) || n), r);
  }
}
function ud(e, t, n, r, o, i) {
  switch (n) {
    case "style":
      kt(e, r, i);
      break;
    case "dangerouslySetInnerHTML":
      if (null != r) {
        if ("object" != typeof r || !("__html" in r)) throw Error(a(61));
        if (null != (n = r.__html)) {
          if (null != o.children) throw Error(a(60));
          e.innerHTML = n;
        }
      }
      break;
    case "children":
      "string" == typeof r
        ? wt(e, r)
        : ("number" == typeof r || "bigint" == typeof r) && wt(e, "" + r);
      break;
    case "onScroll":
      null != r && Ku("scroll", e);
      break;
    case "onScrollEnd":
      null != r && Ku("scrollend", e);
      break;
    case "onClick":
      null != r && (e.onclick = Rt);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
    case "innerText":
    case "textContent":
      break;
    default:
      tt.hasOwnProperty(n) ||
        ("o" !== n[0] ||
        "n" !== n[1] ||
        ((o = n.endsWith("Capture")),
        (t = n.slice(2, o ? n.length - 7 : void 0)),
        "function" == typeof (i = null != (i = e[ze] || null) ? i[n] : null) &&
          e.removeEventListener(t, i, o),
        "function" != typeof r)
          ? n in e
            ? (e[n] = r)
            : !0 === r
              ? e.setAttribute(n, "")
              : st(e, n, r)
          : ("function" != typeof i &&
              null !== i &&
              (n in e
                ? (e[n] = null)
                : e.hasAttribute(n) && e.removeAttribute(n)),
            e.addEventListener(t, r, o)));
  }
}
function dd(e, t, n) {
  switch (t) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      Ku("error", e), Ku("load", e);
      var r,
        o = !1,
        i = !1;
      for (r in n)
        if (n.hasOwnProperty(r)) {
          var s = n[r];
          if (null != s)
            switch (r) {
              case "src":
                o = !0;
                break;
              case "srcSet":
                i = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, t));
              default:
                cd(e, t, r, s, n, null);
            }
        }
      return (
        i && cd(e, t, "srcSet", n.srcSet, n, null),
        void (o && cd(e, t, "src", n.src, n, null))
      );
    case "input":
      Ku("invalid", e);
      var l = (r = s = i = null),
        c = null,
        u = null;
      for (o in n)
        if (n.hasOwnProperty(o)) {
          var d = n[o];
          if (null != d)
            switch (o) {
              case "name":
                i = d;
                break;
              case "type":
                s = d;
                break;
              case "checked":
                c = d;
                break;
              case "defaultChecked":
                u = d;
                break;
              case "value":
                r = d;
                break;
              case "defaultValue":
                l = d;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (null != d) throw Error(a(137, t));
                break;
              default:
                cd(e, t, o, d, n, null);
            }
        }
      return void vt(e, r, l, c, u, s, i, !1);
    case "select":
      for (i in (Ku("invalid", e), (o = s = r = null), n))
        if (n.hasOwnProperty(i) && null != (l = n[i]))
          switch (i) {
            case "value":
              r = l;
              break;
            case "defaultValue":
              s = l;
              break;
            case "multiple":
              o = l;
            default:
              cd(e, t, i, l, n, null);
          }
      return (
        (t = r),
        (n = s),
        (e.multiple = !!o),
        void (null != t ? St(e, !!o, t, !1) : null != n && St(e, !!o, n, !0))
      );
    case "textarea":
      for (s in (Ku("invalid", e), (r = i = o = null), n))
        if (n.hasOwnProperty(s) && null != (l = n[s]))
          switch (s) {
            case "value":
              o = l;
              break;
            case "defaultValue":
              i = l;
              break;
            case "children":
              r = l;
              break;
            case "dangerouslySetInnerHTML":
              if (null != l) throw Error(a(91));
              break;
            default:
              cd(e, t, s, l, n, null);
          }
      return void xt(e, o, i, r);
    case "option":
      for (c in n)
        n.hasOwnProperty(c) &&
          null != (o = n[c]) &&
          ("selected" === c
            ? (e.selected = o && "function" != typeof o && "symbol" != typeof o)
            : cd(e, t, c, o, n, null));
      return;
    case "dialog":
      Ku("beforetoggle", e), Ku("toggle", e), Ku("cancel", e), Ku("close", e);
      break;
    case "iframe":
    case "object":
      Ku("load", e);
      break;
    case "video":
    case "audio":
      for (o = 0; o < Wu.length; o++) Ku(Wu[o], e);
      break;
    case "image":
      Ku("error", e), Ku("load", e);
      break;
    case "details":
      Ku("toggle", e);
      break;
    case "embed":
    case "source":
    case "link":
      Ku("error", e), Ku("load", e);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (u in n)
        if (n.hasOwnProperty(u) && null != (o = n[u]))
          switch (u) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(a(137, t));
            default:
              cd(e, t, u, o, n, null);
          }
      return;
    default:
      if (Ct(t)) {
        for (d in n)
          n.hasOwnProperty(d) &&
            void 0 !== (o = n[d]) &&
            ud(e, t, d, o, n, void 0);
        return;
      }
  }
  for (l in n)
    n.hasOwnProperty(l) && null != (o = n[l]) && cd(e, t, l, o, n, null);
}
function pd(e) {
  switch (e) {
    case "css":
    case "script":
    case "font":
    case "img":
    case "image":
    case "input":
    case "link":
      return !0;
    default:
      return !1;
  }
}
var fd = null,
  hd = null;
function md(e) {
  return 9 === e.nodeType ? e : e.ownerDocument;
}
function gd(e) {
  switch (e) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function yd(e, t) {
  if (0 === e)
    switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return 1 === e && "foreignObject" === t ? 0 : e;
}
function vd(e, t) {
  return (
    "textarea" === e ||
    "noscript" === e ||
    "string" == typeof t.children ||
    "number" == typeof t.children ||
    "bigint" == typeof t.children ||
    ("object" == typeof t.dangerouslySetInnerHTML &&
      null !== t.dangerouslySetInnerHTML &&
      null != t.dangerouslySetInnerHTML.__html)
  );
}
var bd = null,
  Sd = "function" == typeof setTimeout ? setTimeout : void 0,
  _d = "function" == typeof clearTimeout ? clearTimeout : void 0,
  xd = "function" == typeof Promise ? Promise : void 0,
  wd =
    "function" == typeof queueMicrotask
      ? queueMicrotask
      : void 0 !== xd
        ? function (e) {
            return xd.resolve(null).then(e).catch(Ed);
          }
        : Sd;
function Ed(e) {
  setTimeout(function () {
    throw e;
  });
}
function Td(e) {
  return "head" === e;
}
function kd(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && 8 === o.nodeType))
      if ("/$" === (n = o.data) || "/&" === n) {
        if (0 === r) return e.removeChild(o), void zp(t);
        r--;
      } else if (
        "$" === n ||
        "$?" === n ||
        "$~" === n ||
        "$!" === n ||
        "&" === n
      )
        r++;
      else if ("html" === n) Ld(e.ownerDocument.documentElement);
      else if ("head" === n) {
        Ld((n = e.ownerDocument.head));
        for (var i = n.firstChild; i; ) {
          var a = i.nextSibling,
            s = i.nodeName;
          i[$e] ||
            "SCRIPT" === s ||
            "STYLE" === s ||
            ("LINK" === s && "stylesheet" === i.rel.toLowerCase()) ||
            n.removeChild(i),
            (i = a);
        }
      } else "body" === n && Ld(e.ownerDocument.body);
    n = o;
  } while (n);
  zp(t);
}
function Cd(e, t) {
  var n = e;
  e = 0;
  do {
    var r = n.nextSibling;
    if (
      (1 === n.nodeType
        ? t
          ? ((n._stashedDisplay = n.style.display), (n.style.display = "none"))
          : ((n.style.display = n._stashedDisplay || ""),
            "" === n.getAttribute("style") && n.removeAttribute("style"))
        : 3 === n.nodeType &&
          (t
            ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
            : (n.nodeValue = n._stashedText || "")),
      r && 8 === r.nodeType)
    )
      if ("/$" === (n = r.data)) {
        if (0 === e) break;
        e--;
      } else ("$" !== n && "$?" !== n && "$~" !== n && "$!" !== n) || e++;
    n = r;
  } while (n);
}
function Id(e) {
  var t = e.firstChild;
  for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
    var n = t;
    switch (((t = t.nextSibling), n.nodeName)) {
      case "HTML":
      case "HEAD":
      case "BODY":
        Id(n), Ye(n);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if ("stylesheet" === n.rel.toLowerCase()) continue;
    }
    e.removeChild(n);
  }
}
function Ad(e, t) {
  for (; 8 !== e.nodeType; ) {
    if (
      (1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) &&
      !t
    )
      return null;
    if (null === (e = Md(e.nextSibling))) return null;
  }
  return e;
}
function Od(e) {
  return "$?" === e.data || "$~" === e.data;
}
function Rd(e) {
  return (
    "$!" === e.data ||
    ("$?" === e.data && "loading" !== e.ownerDocument.readyState)
  );
}
function Md(e) {
  for (; null != e; e = e.nextSibling) {
    var t = e.nodeType;
    if (1 === t || 3 === t) break;
    if (8 === t) {
      if (
        "$" === (t = e.data) ||
        "$!" === t ||
        "$?" === t ||
        "$~" === t ||
        "&" === t ||
        "F!" === t ||
        "F" === t
      )
        break;
      if ("/$" === t || "/&" === t) return null;
    }
  }
  return e;
}
var Pd = null;
function Nd(e) {
  e = e.nextSibling;
  for (var t = 0; e; ) {
    if (8 === e.nodeType) {
      var n = e.data;
      if ("/$" === n || "/&" === n) {
        if (0 === t) return Md(e.nextSibling);
        t--;
      } else
        ("$" !== n && "$!" !== n && "$?" !== n && "$~" !== n && "&" !== n) ||
          t++;
    }
    e = e.nextSibling;
  }
  return null;
}
function Dd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (8 === e.nodeType) {
      var n = e.data;
      if ("$" === n || "$!" === n || "$?" === n || "$~" === n || "&" === n) {
        if (0 === t) return e;
        t--;
      } else ("/$" !== n && "/&" !== n) || t++;
    }
    e = e.previousSibling;
  }
  return null;
}
function jd(e, t, n) {
  switch (((t = md(n)), e)) {
    case "html":
      if (!(e = t.documentElement)) throw Error(a(452));
      return e;
    case "head":
      if (!(e = t.head)) throw Error(a(453));
      return e;
    case "body":
      if (!(e = t.body)) throw Error(a(454));
      return e;
    default:
      throw Error(a(451));
  }
}
function Ld(e) {
  for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
  Ye(e);
}
var Fd = new Map(),
  Ud = new Set();
function Bd(e) {
  return "function" == typeof e.getRootNode
    ? e.getRootNode()
    : 9 === e.nodeType
      ? e
      : e.ownerDocument;
}
var zd = N.d;
N.d = {
  f: function () {
    var e = zd.f(),
      t = Jc();
    return e || t;
  },
  r: function (e) {
    var t = Ze(e);
    null !== t && 5 === t.tag && "form" === t.type ? ns(t) : zd.r(e);
  },
  D: function (e) {
    zd.D(e), Vd("dns-prefetch", e, null);
  },
  C: function (e, t) {
    zd.C(e, t), Vd("preconnect", e, t);
  },
  L: function (e, t, n) {
    zd.L(e, t, n);
    var r = Hd;
    if (r && e && t) {
      var o = 'link[rel="preload"][as="' + gt(t) + '"]';
      "image" === t && n && n.imageSrcSet
        ? ((o += '[imagesrcset="' + gt(n.imageSrcSet) + '"]'),
          "string" == typeof n.imageSizes &&
            (o += '[imagesizes="' + gt(n.imageSizes) + '"]'))
        : (o += '[href="' + gt(e) + '"]');
      var i = o;
      switch (t) {
        case "style":
          i = Gd(e);
          break;
        case "script":
          i = Yd(e);
      }
      Fd.has(i) ||
        ((e = p(
          {
            rel: "preload",
            href: "image" === t && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        Fd.set(i, e),
        null !== r.querySelector(o) ||
          ("style" === t && r.querySelector(Wd(i))) ||
          ("script" === t && r.querySelector(Kd(i))) ||
          (dd((t = r.createElement("link")), "link", e),
          Xe(t),
          r.head.appendChild(t)));
    }
  },
  m: function (e, t) {
    zd.m(e, t);
    var n = Hd;
    if (n && e) {
      var r = t && "string" == typeof t.as ? t.as : "script",
        o =
          'link[rel="modulepreload"][as="' + gt(r) + '"][href="' + gt(e) + '"]',
        i = o;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Yd(e);
      }
      if (
        !Fd.has(i) &&
        ((e = p({ rel: "modulepreload", href: e }, t)),
        Fd.set(i, e),
        null === n.querySelector(o))
      ) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Kd(i))) return;
        }
        dd((r = n.createElement("link")), "link", e),
          Xe(r),
          n.head.appendChild(r);
      }
    }
  },
  X: function (e, t) {
    zd.X(e, t);
    var n = Hd;
    if (n && e) {
      var r = Je(n).hoistableScripts,
        o = Yd(e),
        i = r.get(o);
      i ||
        ((i = n.querySelector(Kd(o))) ||
          ((e = p({ src: e, async: !0 }, t)),
          (t = Fd.get(o)) && Xd(e, t),
          Xe((i = n.createElement("script"))),
          dd(i, "link", e),
          n.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        r.set(o, i));
    }
  },
  S: function (e, t, n) {
    zd.S(e, t, n);
    var r = Hd;
    if (r && e) {
      var o = Je(r).hoistableStyles,
        i = Gd(e);
      t = t || "default";
      var a = o.get(i);
      if (!a) {
        var s = { loading: 0, preload: null };
        if ((a = r.querySelector(Wd(i)))) s.loading = 5;
        else {
          (e = p({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Fd.get(i)) && Jd(e, n);
          var l = (a = r.createElement("link"));
          Xe(l),
            dd(l, "link", e),
            (l._p = new Promise(function (e, t) {
              (l.onload = e), (l.onerror = t);
            })),
            l.addEventListener("load", function () {
              s.loading |= 1;
            }),
            l.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Qd(a, t, r);
        }
        (a = { type: "stylesheet", instance: a, count: 1, state: s }),
          o.set(i, a);
      }
    }
  },
  M: function (e, t) {
    zd.M(e, t);
    var n = Hd;
    if (n && e) {
      var r = Je(n).hoistableScripts,
        o = Yd(e),
        i = r.get(o);
      i ||
        ((i = n.querySelector(Kd(o))) ||
          ((e = p({ src: e, async: !0, type: "module" }, t)),
          (t = Fd.get(o)) && Xd(e, t),
          Xe((i = n.createElement("script"))),
          dd(i, "link", e),
          n.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        r.set(o, i));
    }
  },
};
var Hd = "undefined" == typeof document ? null : document;
function Vd(e, t, n) {
  var r = Hd;
  if (r && "string" == typeof t && t) {
    var o = gt(t);
    (o = 'link[rel="' + e + '"][href="' + o + '"]'),
      "string" == typeof n && (o += '[crossorigin="' + n + '"]'),
      Ud.has(o) ||
        (Ud.add(o),
        (e = { rel: e, crossOrigin: n, href: t }),
        null === r.querySelector(o) &&
          (dd((t = r.createElement("link")), "link", e),
          Xe(t),
          r.head.appendChild(t)));
  }
}
function qd(e, t, n, r) {
  var o,
    i,
    s,
    l,
    c = (c = G.current) ? Bd(c) : null;
  if (!c) throw Error(a(446));
  switch (e) {
    case "meta":
    case "title":
      return null;
    case "style":
      return "string" == typeof n.precedence && "string" == typeof n.href
        ? ((t = Gd(n.href)),
          (r = (n = Je(c).hoistableStyles).get(t)) ||
            ((r = {
              type: "style",
              instance: null,
              count: 0,
              state: null,
            }),
            n.set(t, r)),
          r)
        : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if (
        "stylesheet" === n.rel &&
        "string" == typeof n.href &&
        "string" == typeof n.precedence
      ) {
        e = Gd(n.href);
        var u = Je(c).hoistableStyles,
          d = u.get(e);
        if (
          (d ||
            ((c = c.ownerDocument || c),
            (d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: 0, preload: null },
            }),
            u.set(e, d),
            (u = c.querySelector(Wd(e))) &&
              !u._p &&
              ((d.instance = u), (d.state.loading = 5)),
            Fd.has(e) ||
              ((n = {
                rel: "preload",
                as: "style",
                href: n.href,
                crossOrigin: n.crossOrigin,
                integrity: n.integrity,
                media: n.media,
                hrefLang: n.hrefLang,
                referrerPolicy: n.referrerPolicy,
              }),
              Fd.set(e, n),
              u ||
                ((o = c),
                (i = e),
                (s = n),
                (l = d.state),
                o.querySelector('link[rel="preload"][as="style"][' + i + "]")
                  ? (l.loading = 1)
                  : ((i = o.createElement("link")),
                    (l.preload = i),
                    i.addEventListener("load", function () {
                      return (l.loading |= 1);
                    }),
                    i.addEventListener("error", function () {
                      return (l.loading |= 2);
                    }),
                    dd(i, "link", s),
                    Xe(i),
                    o.head.appendChild(i))))),
          t && null === r)
        )
          throw Error(a(528, ""));
        return d;
      }
      if (t && null !== r) throw Error(a(529, ""));
      return null;
    case "script":
      return (
        (t = n.async),
        "string" == typeof (n = n.src) &&
        t &&
        "function" != typeof t &&
        "symbol" != typeof t
          ? ((t = Yd(n)),
            (r = (n = Je(c).hoistableScripts).get(t)) ||
              ((r = {
                type: "script",
                instance: null,
                count: 0,
                state: null,
              }),
              n.set(t, r)),
            r)
          : { type: "void", instance: null, count: 0, state: null }
      );
    default:
      throw Error(a(444, e));
  }
}
function Gd(e) {
  return 'href="' + gt(e) + '"';
}
function Wd(e) {
  return 'link[rel="stylesheet"][' + e + "]";
}
function $d(e) {
  return p({}, e, {
    "data-precedence": e.precedence,
    precedence: null,
  });
}
function Yd(e) {
  return '[src="' + gt(e) + '"]';
}
function Kd(e) {
  return "script[async]" + e;
}
function Zd(e, t, n) {
  if ((t.count++, null === t.instance))
    switch (t.type) {
      case "style":
        var r = e.querySelector('style[data-href~="' + gt(n.href) + '"]');
        if (r) return (t.instance = r), Xe(r), r;
        var o = p({}, n, {
          "data-href": n.href,
          "data-precedence": n.precedence,
          href: null,
          precedence: null,
        });
        return (
          Xe((r = (e.ownerDocument || e).createElement("style"))),
          dd(r, "style", o),
          Qd(r, n.precedence, e),
          (t.instance = r)
        );
      case "stylesheet":
        o = Gd(n.href);
        var i = e.querySelector(Wd(o));
        if (i) return (t.state.loading |= 4), (t.instance = i), Xe(i), i;
        (r = $d(n)),
          (o = Fd.get(o)) && Jd(r, o),
          Xe((i = (e.ownerDocument || e).createElement("link")));
        var s = i;
        return (
          (s._p = new Promise(function (e, t) {
            (s.onload = e), (s.onerror = t);
          })),
          dd(i, "link", r),
          (t.state.loading |= 4),
          Qd(i, n.precedence, e),
          (t.instance = i)
        );
      case "script":
        return (
          (i = Yd(n.src)),
          (o = e.querySelector(Kd(i)))
            ? ((t.instance = o), Xe(o), o)
            : ((r = n),
              (o = Fd.get(i)) && Xd((r = p({}, n)), o),
              Xe((o = (e = e.ownerDocument || e).createElement("script"))),
              dd(o, "link", r),
              e.head.appendChild(o),
              (t.instance = o))
        );
      case "void":
        return null;
      default:
        throw Error(a(443, t.type));
    }
  else
    "stylesheet" === t.type &&
      !(4 & t.state.loading) &&
      ((r = t.instance), (t.state.loading |= 4), Qd(r, n.precedence, e));
  return t.instance;
}
function Qd(e, t, n) {
  for (
    var r = n.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]',
      ),
      o = r.length ? r[r.length - 1] : null,
      i = o,
      a = 0;
    a < r.length;
    a++
  ) {
    var s = r[a];
    if (s.dataset.precedence === t) i = s;
    else if (i !== o) break;
  }
  i
    ? i.parentNode.insertBefore(e, i.nextSibling)
    : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
}
function Jd(e, t) {
  null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
    null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
    null == e.title && (e.title = t.title);
}
function Xd(e, t) {
  null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
    null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
    null == e.integrity && (e.integrity = t.integrity);
}
var ep = null;
function tp(e, t, n) {
  if (null === ep) {
    var r = new Map(),
      o = (ep = new Map());
    o.set(n, r);
  } else (r = (o = ep).get(n)) || ((r = new Map()), o.set(n, r));
  if (r.has(e)) return r;
  for (
    r.set(e, null), n = n.getElementsByTagName(e), o = 0;
    o < n.length;
    o++
  ) {
    var i = n[o];
    if (
      !(
        i[$e] ||
        i[Be] ||
        ("link" === e && "stylesheet" === i.getAttribute("rel"))
      ) &&
      "http://www.w3.org/2000/svg" !== i.namespaceURI
    ) {
      var a = i.getAttribute(t) || "";
      a = e + a;
      var s = r.get(a);
      s ? s.push(i) : r.set(a, [i]);
    }
  }
  return r;
}
function np(e, t, n) {
  (e = e.ownerDocument || e).head.insertBefore(
    n,
    "title" === t ? e.querySelector("head > title") : null,
  );
}
function rp(e) {
  return !!("stylesheet" !== e.type || 3 & e.state.loading);
}
var op = 0;
function ip() {
  if (
    (this.count--,
    0 === this.count && (0 === this.imgCount || !this.waitingForImages))
  )
    if (this.stylesheets) sp(this, this.stylesheets);
    else if (this.unsuspend) {
      var e = this.unsuspend;
      (this.unsuspend = null), e();
    }
}
var ap = null;
function sp(e, t) {
  (e.stylesheets = null),
    null !== e.unsuspend &&
      (e.count++, (ap = new Map()), t.forEach(lp, e), (ap = null), ip.call(e));
}
function lp(e, t) {
  if (!(4 & t.state.loading)) {
    var n = ap.get(e);
    if (n) var r = n.get(null);
    else {
      (n = new Map()), ap.set(e, n);
      for (
        var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]",
          ),
          i = 0;
        i < o.length;
        i++
      ) {
        var a = o[i];
        ("LINK" !== a.nodeName && "not all" === a.getAttribute("media")) ||
          (n.set(a.dataset.precedence, a), (r = a));
      }
      r && n.set(null, r);
    }
    (a = (o = t.instance).getAttribute("data-precedence")),
      (i = n.get(a) || r) === r && n.set(null, o),
      n.set(a, o),
      this.count++,
      (r = ip.bind(this)),
      o.addEventListener("load", r),
      o.addEventListener("error", r),
      i
        ? i.parentNode.insertBefore(o, i.nextSibling)
        : (e = 9 === e.nodeType ? e.head : e).insertBefore(o, e.firstChild),
      (t.state.loading |= 4);
  }
}
var cp = {
  $$typeof: S,
  Provider: null,
  Consumer: null,
  _currentValue: D,
  _currentValue2: D,
  _threadCount: 0,
};
function up(e, t, n, r, o, i, a, s, l) {
  (this.tag = 1),
    (this.containerInfo = e),
    (this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode =
      this.next =
      this.pendingContext =
      this.context =
      this.cancelPendingCommit =
        null),
    (this.callbackPriority = 0),
    (this.expirationTimes = Oe(-1)),
    (this.entangledLanes =
      this.shellSuspendCounter =
      this.errorRecoveryDisabledLanes =
      this.expiredLanes =
      this.warmLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Oe(0)),
    (this.hiddenUpdates = Oe(null)),
    (this.identifierPrefix = r),
    (this.onUncaughtError = o),
    (this.onCaughtError = i),
    (this.onRecoverableError = a),
    (this.pooledCache = null),
    (this.pooledCacheLanes = 0),
    (this.formState = l),
    (this.incompleteTransitions = new Map());
}
function dp(e, t, n, r, o, i) {
  (o = (function (e) {
    return e ? (e = Dr) : Dr;
  })(o)),
    null === r.context ? (r.context = o) : (r.pendingContext = o),
    ((r = vi(t)).payload = { element: n }),
    null !== (i = void 0 === i ? null : i) && (r.callback = i),
    null !== (n = bi(e, r, t)) && ($c(n, 0, t), Si(n, e, t));
}
function pp(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
    var n = e.retryLane;
    e.retryLane = 0 !== n && n < t ? n : t;
  }
}
function fp(e, t) {
  pp(e, t), (e = e.alternate) && pp(e, t);
}
function hp(e) {
  if (13 === e.tag || 31 === e.tag) {
    var t = Mr(e, 67108864);
    null !== t && $c(t, 0, 67108864), fp(e, 67108864);
  }
}
function mp(e) {
  if (13 === e.tag || 31 === e.tag) {
    var t = Gc(),
      n = Mr(e, (t = De(t)));
    null !== n && $c(n, 0, t), fp(e, t);
  }
}
var gp = !0;
function yp(e, t, n, r) {
  var o = P.T;
  P.T = null;
  var i = N.p;
  try {
    (N.p = 2), bp(e, t, n, r);
  } finally {
    (N.p = i), (P.T = o);
  }
}
function vp(e, t, n, r) {
  var o = P.T;
  P.T = null;
  var i = N.p;
  try {
    (N.p = 8), bp(e, t, n, r);
  } finally {
    (N.p = i), (P.T = o);
  }
}
function bp(e, t, n, r) {
  if (gp) {
    var o = Sp(r);
    if (null === o) ed(e, t, r, _p, n), Mp(e, r);
    else if (
      (function (e, t, n, r, o) {
        switch (t) {
          case "focusin":
            return (Tp = Pp(Tp, e, t, n, r, o)), !0;
          case "dragenter":
            return (kp = Pp(kp, e, t, n, r, o)), !0;
          case "mouseover":
            return (Cp = Pp(Cp, e, t, n, r, o)), !0;
          case "pointerover":
            var i = o.pointerId;
            return Ip.set(i, Pp(Ip.get(i) || null, e, t, n, r, o)), !0;
          case "gotpointercapture":
            return (
              (i = o.pointerId),
              Ap.set(i, Pp(Ap.get(i) || null, e, t, n, r, o)),
              !0
            );
        }
        return !1;
      })(o, e, t, n, r)
    )
      r.stopPropagation();
    else if ((Mp(e, r), 4 & t && -1 < Rp.indexOf(e))) {
      for (; null !== o; ) {
        var i = Ze(o);
        if (null !== i)
          switch (i.tag) {
            case 3:
              if ((i = i.stateNode).current.memoizedState.isDehydrated) {
                var a = Te(i.pendingLanes);
                if (0 !== a) {
                  var s = i;
                  for (s.pendingLanes |= 2, s.entangledLanes |= 2; a; ) {
                    var l = 1 << (31 - be(a));
                    (s.entanglements[1] |= l), (a &= ~l);
                  }
                  Nu(i), !(6 & pc) && ((Pc = se() + 500), Du(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              null !== (s = Mr(i, 2)) && $c(s, 0, 2), Jc(), fp(i, 2);
          }
        if ((null === (i = Sp(r)) && ed(e, t, r, _p, n), i === o)) break;
        o = i;
      }
      null !== o && r.stopPropagation();
    } else ed(e, t, r, null, n);
  }
}
function Sp(e) {
  return xp((e = Pt(e)));
}
var _p = null;
function xp(e) {
  if (((_p = null), null !== (e = Ke(e)))) {
    var t = s(e);
    if (null === t) e = null;
    else {
      var n = t.tag;
      if (13 === n) {
        if (null !== (e = l(t))) return e;
        e = null;
      } else if (31 === n) {
        if (null !== (e = c(t))) return e;
        e = null;
      } else if (3 === n) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return 3 === t.tag ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    }
  }
  return (_p = e), null;
}
function wp(e) {
  switch (e) {
    case "beforetoggle":
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "toggle":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (le()) {
        case ce:
          return 2;
        case ue:
          return 8;
        case de:
        case pe:
          return 32;
        case fe:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var Ep = !1,
  Tp = null,
  kp = null,
  Cp = null,
  Ip = new Map(),
  Ap = new Map(),
  Op = [],
  Rp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " ",
    );
function Mp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tp = null;
      break;
    case "dragenter":
    case "dragleave":
      kp = null;
      break;
    case "mouseover":
    case "mouseout":
      Cp = null;
      break;
    case "pointerover":
    case "pointerout":
      Ip.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ap.delete(t.pointerId);
  }
}
function Pp(e, t, n, r, o, i) {
  return null === e || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      null !== t && null !== (t = Ze(t)) && hp(t),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      null !== o && -1 === t.indexOf(o) && t.push(o),
      e);
}
function Np(e) {
  var t = Ke(e.target);
  if (null !== t) {
    var n = s(t);
    if (null !== n)
      if (13 === (t = n.tag)) {
        if (null !== (t = l(n)))
          return (
            (e.blockedOn = t),
            void Fe(e.priority, function () {
              mp(n);
            })
          );
      } else if (31 === t) {
        if (null !== (t = c(n)))
          return (
            (e.blockedOn = t),
            void Fe(e.priority, function () {
              mp(n);
            })
          );
      } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
        return void (e.blockedOn =
          3 === n.tag ? n.stateNode.containerInfo : null);
  }
  e.blockedOn = null;
}
function Dp(e) {
  if (null !== e.blockedOn) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Sp(e.nativeEvent);
    if (null !== n) return null !== (t = Ze(n)) && hp(t), (e.blockedOn = n), !1;
    var r = new (n = e.nativeEvent).constructor(n.type, n);
    (Mt = r), n.target.dispatchEvent(r), (Mt = null), t.shift();
  }
  return !0;
}
function jp(e, t, n) {
  Dp(e) && n.delete(t);
}
function Lp() {
  (Ep = !1),
    null !== Tp && Dp(Tp) && (Tp = null),
    null !== kp && Dp(kp) && (kp = null),
    null !== Cp && Dp(Cp) && (Cp = null),
    Ip.forEach(jp),
    Ap.forEach(jp);
}
function Fp(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ep ||
      ((Ep = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Lp)));
}
var Up = null;
function Bp(e) {
  Up !== e &&
    ((Up = e),
    r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
      Up === e && (Up = null);
      for (var t = 0; t < e.length; t += 3) {
        var n = e[t],
          r = e[t + 1],
          o = e[t + 2];
        if ("function" != typeof r) {
          if (null === xp(r || n)) continue;
          break;
        }
        var i = Ze(n);
        null !== i &&
          (e.splice(t, 3),
          (t -= 3),
          es(i, { pending: !0, data: o, method: n.method, action: r }, r, o));
      }
    }));
}
function zp(e) {
  function t(t) {
    return Fp(t, e);
  }
  null !== Tp && Fp(Tp, e),
    null !== kp && Fp(kp, e),
    null !== Cp && Fp(Cp, e),
    Ip.forEach(t),
    Ap.forEach(t);
  for (var n = 0; n < Op.length; n++) {
    var r = Op[n];
    r.blockedOn === e && (r.blockedOn = null);
  }
  for (; 0 < Op.length && null === (n = Op[0]).blockedOn; )
    Np(n), null === n.blockedOn && Op.shift();
  if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
    for (r = 0; r < n.length; r += 3) {
      var o = n[r],
        i = n[r + 1],
        a = o[ze] || null;
      if ("function" == typeof i) a || Bp(n);
      else if (a) {
        var s = null;
        if (i && i.hasAttribute("formAction")) {
          if (((o = i), (a = i[ze] || null))) s = a.formAction;
          else if (null !== xp(o)) continue;
        } else s = a.action;
        "function" == typeof s ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)),
          Bp(n);
      }
    }
}
function Hp() {
  function e(e) {
    e.canIntercept &&
      "react-transition" === e.info &&
      e.intercept({
        handler: function () {
          return new Promise(function (e) {
            return (o = e);
          });
        },
        focusReset: "manual",
        scroll: "manual",
      });
  }
  function t() {
    null !== o && (o(), (o = null)), r || setTimeout(n, 20);
  }
  function n() {
    if (!r && !navigation.transition) {
      var e = navigation.currentEntry;
      e &&
        null != e.url &&
        navigation.navigate(e.url, {
          state: e.getState(),
          info: "react-transition",
          history: "replace",
        });
    }
  }
  if ("object" == typeof navigation) {
    var r = !1,
      o = null;
    return (
      navigation.addEventListener("navigate", e),
      navigation.addEventListener("navigatesuccess", t),
      navigation.addEventListener("navigateerror", t),
      setTimeout(n, 100),
      function () {
        (r = !0),
          navigation.removeEventListener("navigate", e),
          navigation.removeEventListener("navigatesuccess", t),
          navigation.removeEventListener("navigateerror", t),
          null !== o && (o(), (o = null));
      }
    );
  }
}
function Vp(e) {
  this._internalRoot = e;
}
function qp(e) {
  this._internalRoot = e;
}
(qp.prototype.render = Vp.prototype.render =
  function (e) {
    var t = this._internalRoot;
    if (null === t) throw Error(a(409));
    dp(t.current, Gc(), e, t, null, null);
  }),
  (qp.prototype.unmount = Vp.prototype.unmount =
    function () {
      var e = this._internalRoot;
      if (null !== e) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dp(e.current, 2, null, e, null, null), Jc(), (t[He] = null);
      }
    }),
  (qp.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Le();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Op.length && 0 !== t && t < Op[n].priority; n++);
      Op.splice(n, 0, e), 0 === n && Np(e);
    }
  });
var Gp = o.version;
if ("19.2.7" !== Gp) throw Error(a(527, Gp, "19.2.7"));
N.findDOMNode = function (e) {
  var t = e._reactInternals;
  if (void 0 === t) {
    if ("function" == typeof e.render) throw Error(a(188));
    throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
  }
  return (
    (e = (function (e) {
      var t = e.alternate;
      if (!t) {
        if (null === (t = s(e))) throw Error(a(188));
        return t !== e ? null : e;
      }
      for (var n = e, r = t; ; ) {
        var o = n.return;
        if (null === o) break;
        var i = o.alternate;
        if (null === i) {
          if (null !== (r = o.return)) {
            n = r;
            continue;
          }
          break;
        }
        if (o.child === i.child) {
          for (i = o.child; i; ) {
            if (i === n) return u(o), e;
            if (i === r) return u(o), t;
            i = i.sibling;
          }
          throw Error(a(188));
        }
        if (n.return !== r.return) (n = o), (r = i);
        else {
          for (var l = !1, c = o.child; c; ) {
            if (c === n) {
              (l = !0), (n = o), (r = i);
              break;
            }
            if (c === r) {
              (l = !0), (r = o), (n = i);
              break;
            }
            c = c.sibling;
          }
          if (!l) {
            for (c = i.child; c; ) {
              if (c === n) {
                (l = !0), (n = i), (r = o);
                break;
              }
              if (c === r) {
                (l = !0), (r = i), (n = o);
                break;
              }
              c = c.sibling;
            }
            if (!l) throw Error(a(189));
          }
        }
        if (n.alternate !== r) throw Error(a(190));
      }
      if (3 !== n.tag) throw Error(a(188));
      return n.stateNode.current === n ? e : t;
    })(t)),
    null === (e = null !== e ? d(e) : null) ? null : e.stateNode
  );
};
var Wp = {
  bundleType: 0,
  version: "19.2.7",
  rendererPackageName: "react-dom",
  currentDispatcherRef: P,
  reconcilerVersion: "19.2.7",
};
if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var $p = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$p.isDisabled && $p.supportsFiber)
    try {
      (ge = $p.inject(Wp)), (ye = $p);
    } catch (e) {}
}
t.createRoot = function (e, t) {
  if (!(n = e) || (1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType))
    throw Error(a(299));
  var n,
    r = !1,
    o = "",
    i = ws,
    s = Es,
    l = Ts;
  return (
    null != t &&
      (!0 === t.unstable_strictMode && (r = !0),
      void 0 !== t.identifierPrefix && (o = t.identifierPrefix),
      void 0 !== t.onUncaughtError && (i = t.onUncaughtError),
      void 0 !== t.onCaughtError && (s = t.onCaughtError),
      void 0 !== t.onRecoverableError && (l = t.onRecoverableError)),
    (t = (function (e, t, n, r, o, i, a, s, l, c, u, d) {
      return (
        (e = new up(e, t, n, a, l, c, u, d, s)),
        (t = 1),
        !0 === i && (t |= 24),
        (i = Lr(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (t = Uo()).refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (i.memoizedState = { element: r, isDehydrated: n, cache: t }),
        gi(i),
        e
      );
    })(e, 1, !1, null, 0, r, o, null, i, s, l, Hp)),
    (e[He] = t.current),
    Ju(e),
    new Vp(t)
  );
};
