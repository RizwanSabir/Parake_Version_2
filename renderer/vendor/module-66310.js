// vendor/module-66310.js — webpack module 66310
// params: (e, t) = (module, exports, require)
"use strict";
function n(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; 0 < n; ) {
    var r = (n - 1) >>> 1,
      o = e[r];
    if (!(0 < i(o, t))) break e;
    (e[r] = t), (e[n] = o), (n = r);
  }
}
function r(e) {
  return 0 === e.length ? null : e[0];
}
function o(e) {
  if (0 === e.length) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, o = e.length, a = o >>> 1; r < a; ) {
      var s = 2 * (r + 1) - 1,
        l = e[s],
        c = s + 1,
        u = e[c];
      if (0 > i(l, n))
        c < o && 0 > i(u, l)
          ? ((e[r] = u), (e[c] = n), (r = c))
          : ((e[r] = l), (e[s] = n), (r = s));
      else {
        if (!(c < o && 0 > i(u, n))) break e;
        (e[r] = u), (e[c] = n), (r = c);
      }
    }
  }
  return t;
}
function i(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return 0 !== n ? n : e.id - t.id;
}
if (
  ((t.unstable_now = void 0),
  "object" == typeof performance && "function" == typeof performance.now)
) {
  var a = performance;
  t.unstable_now = function () {
    return a.now();
  };
} else {
  var s = Date,
    l = s.now();
  t.unstable_now = function () {
    return s.now() - l;
  };
}
var c = [],
  u = [],
  d = 1,
  p = null,
  f = 3,
  h = !1,
  m = !1,
  g = !1,
  y = !1,
  v = "function" == typeof setTimeout ? setTimeout : null,
  b = "function" == typeof clearTimeout ? clearTimeout : null,
  S = "undefined" != typeof setImmediate ? setImmediate : null;
function _(e) {
  for (var t = r(u); null !== t; ) {
    if (null === t.callback) o(u);
    else {
      if (!(t.startTime <= e)) break;
      o(u), (t.sortIndex = t.expirationTime), n(c, t);
    }
    t = r(u);
  }
}
function x(e) {
  if (((g = !1), _(e), !m))
    if (null !== r(c)) (m = !0), E || ((E = !0), w());
    else {
      var t = r(u);
      null !== t && M(x, t.startTime - e);
    }
}
var w,
  E = !1,
  T = -1,
  k = 5,
  C = -1;
function I() {
  return !(!y && t.unstable_now() - C < k);
}
function A() {
  if (((y = !1), E)) {
    var e = t.unstable_now();
    C = e;
    var n = !0;
    try {
      e: {
        (m = !1), g && ((g = !1), b(T), (T = -1)), (h = !0);
        var i = f;
        try {
          t: {
            for (
              _(e), p = r(c);
              null !== p && !(p.expirationTime > e && I());

            ) {
              var a = p.callback;
              if ("function" == typeof a) {
                (p.callback = null), (f = p.priorityLevel);
                var s = a(p.expirationTime <= e);
                if (((e = t.unstable_now()), "function" == typeof s)) {
                  (p.callback = s), _(e), (n = !0);
                  break t;
                }
                p === r(c) && o(c), _(e);
              } else o(c);
              p = r(c);
            }
            if (null !== p) n = !0;
            else {
              var l = r(u);
              null !== l && M(x, l.startTime - e), (n = !1);
            }
          }
          break e;
        } finally {
          (p = null), (f = i), (h = !1);
        }
        n = void 0;
      }
    } finally {
      n ? w() : (E = !1);
    }
  }
}
if ("function" == typeof S)
  w = function () {
    S(A);
  };
else if ("undefined" != typeof MessageChannel) {
  var O = new MessageChannel(),
    R = O.port2;
  (O.port1.onmessage = A),
    (w = function () {
      R.postMessage(null);
    });
} else
  w = function () {
    v(A, 0);
  };
function M(e, n) {
  T = v(function () {
    e(t.unstable_now());
  }, n);
}
(t.unstable_IdlePriority = 5),
  (t.unstable_ImmediatePriority = 1),
  (t.unstable_LowPriority = 4),
  (t.unstable_NormalPriority = 3),
  (t.unstable_Profiling = null),
  (t.unstable_UserBlockingPriority = 2),
  (t.unstable_cancelCallback = function (e) {
    e.callback = null;
  }),
  (t.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e || (k = 0 < e ? Math.floor(1e3 / e) : 5);
  }),
  (t.unstable_getCurrentPriorityLevel = function () {
    return f;
  }),
  (t.unstable_next = function (e) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = f;
    }
    var n = f;
    f = t;
    try {
      return e();
    } finally {
      f = n;
    }
  }),
  (t.unstable_requestPaint = function () {
    y = !0;
  }),
  (t.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var n = f;
    f = e;
    try {
      return t();
    } finally {
      f = n;
    }
  }),
  (t.unstable_scheduleCallback = function (e, o, i) {
    var a = t.unstable_now();
    switch (
      ((i =
        "object" == typeof i &&
        null !== i &&
        "number" == typeof (i = i.delay) &&
        0 < i
          ? a + i
          : a),
      e)
    ) {
      case 1:
        var s = -1;
        break;
      case 2:
        s = 250;
        break;
      case 5:
        s = 1073741823;
        break;
      case 4:
        s = 1e4;
        break;
      default:
        s = 5e3;
    }
    return (
      (e = {
        id: d++,
        callback: o,
        priorityLevel: e,
        startTime: i,
        expirationTime: (s = i + s),
        sortIndex: -1,
      }),
      i > a
        ? ((e.sortIndex = i),
          n(u, e),
          null === r(c) &&
            e === r(u) &&
            (g ? (b(T), (T = -1)) : (g = !0), M(x, i - a)))
        : ((e.sortIndex = s),
          n(c, e),
          m || h || ((m = !0), E || ((E = !0), w()))),
      e
    );
  }),
  (t.unstable_shouldYield = I),
  (t.unstable_wrapCallback = function (e) {
    var t = f;
    return function () {
      var n = f;
      f = t;
      try {
        return e.apply(this, arguments);
      } finally {
        f = n;
      }
    };
  });
