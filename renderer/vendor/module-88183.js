// vendor/module-88183.js — webpack module 88183
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = r.GLOBAL_OBJ,
  i = o.document,
  a = o.navigator,
  s = "Report a Bug",
  l = "Unable to submit feedback with empty message",
  c = "No client setup, cannot send feedback.",
  u = "Unable to determine if Feedback was correctly sent.",
  d =
    "Unable to send feedback. This could be because this domain is not in your list of allowed domains.",
  p =
    "Unable to send feedback. This could be because of network issues, or because you are using an ad-blocker.",
  f = {
    ERROR_EMPTY_MESSAGE: l,
    ERROR_NO_CLIENT: c,
    ERROR_TIMEOUT: u,
    ERROR_FORBIDDEN: d,
    ERROR_GENERIC: p,
  };
function h(e, t) {
  return t?.[e] ?? f[e];
}
function m(e, t) {
  return new Error(h(e, t));
}
const g = (e, t = { includeReplay: !0 }) => {
    const n = t.errorMessages;
    if (!e.message) throw m("ERROR_EMPTY_MESSAGE", n);
    const o = r.getClient();
    if (!o) throw m("ERROR_NO_CLIENT", n);
    e.tags && Object.keys(e.tags).length && r.getCurrentScope().setTags(e.tags);
    const i = r.captureFeedback(
      { source: "api", url: r.getLocationHref(), ...e },
      t,
    );
    return new Promise((e, t) => {
      const r = setTimeout(() => {
          a(), t(h("ERROR_TIMEOUT", n));
        }, 3e4),
        a = o.on("afterSendEvent", (o, s) => {
          if (o.event_id === i)
            return (
              clearTimeout(r),
              a(),
              s?.statusCode && s.statusCode >= 200 && s.statusCode < 300
                ? e(i)
                : t(
                    h(
                      403 === s?.statusCode
                        ? "ERROR_FORBIDDEN"
                        : "ERROR_GENERIC",
                      n,
                    ),
                  )
            );
        });
    });
  },
  y = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function v(e, t) {
  return {
    ...e,
    ...t,
    tags: { ...e.tags, ...t.tags },
    onFormOpen: () => {
      t.onFormOpen?.(), e.onFormOpen?.();
    },
    onFormClose: () => {
      t.onFormClose?.(), e.onFormClose?.();
    },
    onSubmitSuccess: (n, r) => {
      t.onSubmitSuccess?.(n, r), e.onSubmitSuccess?.(n, r);
    },
    onSubmitError: (n) => {
      t.onSubmitError?.(n), e.onSubmitError?.(n);
    },
    onFormSubmitted: () => {
      t.onFormSubmitted?.(), e.onFormSubmitted?.();
    },
    themeDark: { ...e.themeDark, ...t.themeDark },
    themeLight: { ...e.themeLight, ...t.themeLight },
  };
}
function b(e, t) {
  return (
    Object.entries(t).forEach(([t, n]) => {
      e.setAttributeNS(null, t, n);
    }),
    e
  );
}
const S = "rgba(88, 74, 192, 1)",
  _ = {
    foreground: "#2b2233",
    background: "#ffffff",
    accentForeground: "white",
    accentBackground: S,
    successColor: "#268d75",
    errorColor: "#df3338",
    border: "1.5px solid rgba(41, 35, 47, 0.13)",
    boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
    outline: "1px auto var(--accent-background)",
    interactiveFilter: "brightness(95%)",
  },
  x = {
    foreground: "#ebe6ef",
    background: "#29232f",
    accentForeground: "white",
    accentBackground: S,
    successColor: "#2da98c",
    errorColor: "#f55459",
    border: "1.5px solid rgba(235, 230, 239, 0.15)",
    boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
    outline: "1px auto var(--accent-background)",
    interactiveFilter: "brightness(150%)",
  };
function w(e) {
  return `\n  --foreground: ${e.foreground};\n  --background: ${e.background};\n  --accent-foreground: ${e.accentForeground};\n  --accent-background: ${e.accentBackground};\n  --success-color: ${e.successColor};\n  --error-color: ${e.errorColor};\n  --border: ${e.border};\n  --box-shadow: ${e.boxShadow};\n  --outline: ${e.outline};\n  --interactive-filter: ${e.interactiveFilter};\n  `;
}
function E({ colorScheme: e, themeDark: t, themeLight: n, styleNonce: r }) {
  const o = i.createElement("style");
  return (
    (o.textContent = `\n:host {\n  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;\n  --font-size: 14px;\n  --z-index: 100000;\n\n  --page-margin: 16px;\n  --inset: auto 0 0 auto;\n  --actor-inset: var(--inset);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  ${"system" !== e ? `color-scheme: only ${e};` : ""}\n\n  ${w("dark" === e ? { ...x, ...t } : { ..._, ...n })}\n}\n\n${"system" === e ? `\n@media (prefers-color-scheme: dark) {\n  :host {\n    color-scheme: only dark;\n\n    ${w({ ...x, ...t })}\n  }\n}` : ""}\n`),
    r && o.setAttribute("nonce", r),
    o
  );
}
var T,
  k,
  C,
  I,
  A,
  O,
  R,
  M = {},
  P = [],
  N = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  D = Array.isArray;
function j(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function L(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function F(e, t, n) {
  var r,
    o,
    i,
    a = {};
  for (i in t)
    "key" == i ? (r = t[i]) : "ref" == i ? (o = t[i]) : (a[i] = t[i]);
  if (
    (arguments.length > 2 &&
      (a.children = arguments.length > 3 ? T.call(arguments, 2) : n),
    "function" == typeof e && null != e.defaultProps)
  )
    for (i in e.defaultProps) void 0 === a[i] && (a[i] = e.defaultProps[i]);
  return U(e, a, r, o, null);
}
function U(e, t, n, r, o) {
  var i = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: o ?? ++C,
    __i: -1,
    __u: 0,
  };
  return null == o && null != k.vnode && k.vnode(i), i;
}
function B(e) {
  return e.children;
}
function z(e, t) {
  (this.props = e), (this.context = t);
}
function H(e, t) {
  if (null == t) return e.__ ? H(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
  return "function" == typeof e.type ? H(e) : null;
}
function V(e, t, n) {
  var r,
    o = e.__v,
    i = o.__e,
    a = e.__P;
  if (a)
    return (
      ((r = j({}, o)).__v = o.__v + 1),
      k.vnode && k.vnode(r),
      ee(
        a,
        r,
        o,
        e.__n,
        void 0 !== a.ownerSVGElement,
        32 & o.__u ? [i] : null,
        t,
        i ?? H(o),
        !!(32 & o.__u),
        n,
      ),
      (r.__.__k[r.__i] = r),
      (r.__d = void 0),
      r.__e != i && q(r),
      r
    );
}
function q(e) {
  var t, n;
  if (null != (e = e.__) && null != e.__c) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return q(e);
  }
}
function G(e) {
  ((!e.__d && (e.__d = !0) && I.push(e) && !W.__r++) ||
    A !== k.debounceRendering) &&
    ((A = k.debounceRendering) || O)(W);
}
function W() {
  var e,
    t,
    n,
    r = [],
    o = [];
  for (I.sort(R); (e = I.shift()); )
    e.__d &&
      ((n = I.length),
      (t = V(e, r, o) || t),
      0 === n || I.length > n
        ? (te(r, t, o), (o.length = r.length = 0), (t = void 0), I.sort(R))
        : t && k.__c && k.__c(t, P));
  t && te(r, t, o), (W.__r = 0);
}
function $(e, t, n, r, o, i, a, s, l, c, u) {
  var d,
    p,
    f,
    h,
    m,
    g = (r && r.__k) || P,
    y = t.length;
  for (
    n.__d = l,
      (function (e, t, n) {
        var r,
          o,
          i,
          a,
          s,
          l = t.length,
          c = n.length,
          u = c,
          d = 0;
        for (e.__k = [], r = 0; r < l; r++)
          null !=
          (o = e.__k[r] =
            null == (o = t[r]) ||
            "boolean" == typeof o ||
            "function" == typeof o
              ? null
              : "string" == typeof o ||
                  "number" == typeof o ||
                  "bigint" == typeof o ||
                  o.constructor == String
                ? U(null, o, null, null, o)
                : D(o)
                  ? U(B, { children: o }, null, null, null)
                  : void 0 === o.constructor && o.__b > 0
                    ? U(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                    : o)
            ? ((o.__ = e),
              (o.__b = e.__b + 1),
              (s = K(o, n, (a = r + d), u)),
              (o.__i = s),
              (i = null),
              -1 !== s && (u--, (i = n[s]) && (i.__u |= 131072)),
              null == i || null === i.__v
                ? (-1 == s && d--,
                  "function" != typeof o.type && (o.__u |= 65536))
                : s !== a &&
                  (s === a + 1
                    ? d++
                    : s > a
                      ? u > l - a
                        ? (d += s - a)
                        : d--
                      : (d = s < a && s == a - 1 ? s - a : 0),
                  s !== r + d && (o.__u |= 65536)))
            : (i = n[r]) &&
              null == i.key &&
              i.__e &&
              (i.__e == e.__d && (e.__d = H(i)),
              oe(i, i, !1),
              (n[r] = null),
              u--);
        if (u)
          for (r = 0; r < c; r++)
            null != (i = n[r]) &&
              !(131072 & i.__u) &&
              (i.__e == e.__d && (e.__d = H(i)), oe(i, i));
      })(n, t, g),
      l = n.__d,
      d = 0;
    d < y;
    d++
  )
    null != (f = n.__k[d]) &&
      "boolean" != typeof f &&
      "function" != typeof f &&
      ((p = -1 === f.__i ? M : g[f.__i] || M),
      (f.__i = d),
      ee(e, f, p, o, i, a, s, l, c, u),
      (h = f.__e),
      f.ref &&
        p.ref != f.ref &&
        (p.ref && re(p.ref, null, f), u.push(f.ref, f.__c || h, f)),
      null == m && null != h && (m = h),
      65536 & f.__u || p.__k === f.__k
        ? (l = Y(f, l, e))
        : "function" == typeof f.type && void 0 !== f.__d
          ? (l = f.__d)
          : h && (l = h.nextSibling),
      (f.__d = void 0),
      (f.__u &= -196609));
  (n.__d = l), (n.__e = m);
}
function Y(e, t, n) {
  var r, o;
  if ("function" == typeof e.type) {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && ((r[o].__ = e), (t = Y(r[o], t, n)));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), (t = e.__e));
  do {
    t = t && t.nextSibling;
  } while (null != t && 8 === t.nodeType);
  return t;
}
function K(e, t, n, r) {
  var o = e.key,
    i = e.type,
    a = n - 1,
    s = n + 1,
    l = t[n];
  if (null === l || (l && o == l.key && i === l.type)) return n;
  if (r > (null == l || 131072 & l.__u ? 0 : 1))
    for (; a >= 0 || s < t.length; ) {
      if (a >= 0) {
        if ((l = t[a]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return a;
        a--;
      }
      if (s < t.length) {
        if ((l = t[s]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return s;
        s++;
      }
    }
  return -1;
}
function Z(e, t, n) {
  "-" === t[0]
    ? e.setProperty(t, n ?? "")
    : (e[t] =
        null == n ? "" : "number" != typeof n || N.test(t) ? n : n + "px");
}
function Q(e, t, n, r, o) {
  var i;
  e: if ("style" === t)
    if ("string" == typeof n) e.style.cssText = n;
    else {
      if (("string" == typeof r && (e.style.cssText = r = ""), r))
        for (t in r) (n && t in n) || Z(e.style, t, "");
      if (n) for (t in n) (r && n[t] === r[t]) || Z(e.style, t, n[t]);
    }
  else if ("o" === t[0] && "n" === t[1])
    (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + i] = n),
      n
        ? r
          ? (n.u = r.u)
          : ((n.u = Date.now()), e.addEventListener(t, i ? X : J, i))
        : e.removeEventListener(t, i ? X : J, i);
  else {
    if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      "width" !== t &&
      "height" !== t &&
      "href" !== t &&
      "list" !== t &&
      "form" !== t &&
      "tabIndex" !== t &&
      "download" !== t &&
      "rowSpan" !== t &&
      "colSpan" !== t &&
      "role" !== t &&
      t in e
    )
      try {
        e[t] = n ?? "";
        break e;
      } catch (e) {}
    "function" == typeof n ||
      (null == n || (!1 === n && "-" !== t[4])
        ? e.removeAttribute(t)
        : e.setAttribute(t, n));
  }
}
function J(e) {
  if (this.l) {
    var t = this.l[e.type + !1];
    if (e.t) {
      if (e.t <= t.u) return;
    } else e.t = Date.now();
    return t(k.event ? k.event(e) : e);
  }
}
function X(e) {
  if (this.l) return this.l[e.type + !0](k.event ? k.event(e) : e);
}
function ee(e, t, n, r, o, i, a, s, l, c) {
  var u,
    d,
    p,
    f,
    h,
    m,
    g,
    y,
    v,
    b,
    S,
    _,
    x,
    w,
    E,
    T = t.type;
  if (void 0 !== t.constructor) return null;
  128 & n.__u && ((l = !!(32 & n.__u)), (i = [(s = t.__e = n.__e)])),
    (u = k.__b) && u(t);
  e: if ("function" == typeof T)
    try {
      if (
        ((y = t.props),
        (v = (u = T.contextType) && r[u.__c]),
        (b = u ? (v ? v.props.value : u.__) : r),
        n.__c
          ? (g = (d = t.__c = n.__c).__ = d.__E)
          : ("prototype" in T && T.prototype.render
              ? (t.__c = d = new T(y, b))
              : ((t.__c = d = new z(y, b)),
                (d.constructor = T),
                (d.render = ie)),
            v && v.sub(d),
            (d.props = y),
            d.state || (d.state = {}),
            (d.context = b),
            (d.__n = r),
            (p = d.__d = !0),
            (d.__h = []),
            (d._sb = [])),
        null == d.__s && (d.__s = d.state),
        null != T.getDerivedStateFromProps &&
          (d.__s == d.state && (d.__s = j({}, d.__s)),
          j(d.__s, T.getDerivedStateFromProps(y, d.__s))),
        (f = d.props),
        (h = d.state),
        (d.__v = t),
        p)
      )
        null == T.getDerivedStateFromProps &&
          null != d.componentWillMount &&
          d.componentWillMount(),
          null != d.componentDidMount && d.__h.push(d.componentDidMount);
      else {
        if (
          (null == T.getDerivedStateFromProps &&
            y !== f &&
            null != d.componentWillReceiveProps &&
            d.componentWillReceiveProps(y, b),
          !d.__e &&
            ((null != d.shouldComponentUpdate &&
              !1 === d.shouldComponentUpdate(y, d.__s, b)) ||
              t.__v === n.__v))
        ) {
          for (
            t.__v !== n.__v && ((d.props = y), (d.state = d.__s), (d.__d = !1)),
              t.__e = n.__e,
              t.__k = n.__k,
              t.__k.forEach(function (e) {
                e && (e.__ = t);
              }),
              S = 0;
            S < d._sb.length;
            S++
          )
            d.__h.push(d._sb[S]);
          (d._sb = []), d.__h.length && a.push(d);
          break e;
        }
        null != d.componentWillUpdate && d.componentWillUpdate(y, d.__s, b),
          null != d.componentDidUpdate &&
            d.__h.push(function () {
              d.componentDidUpdate(f, h, m);
            });
      }
      if (
        ((d.context = b),
        (d.props = y),
        (d.__P = e),
        (d.__e = !1),
        (_ = k.__r),
        (x = 0),
        "prototype" in T && T.prototype.render)
      ) {
        for (
          d.state = d.__s,
            d.__d = !1,
            _ && _(t),
            u = d.render(d.props, d.state, d.context),
            w = 0;
          w < d._sb.length;
          w++
        )
          d.__h.push(d._sb[w]);
        d._sb = [];
      } else
        do {
          (d.__d = !1),
            _ && _(t),
            (u = d.render(d.props, d.state, d.context)),
            (d.state = d.__s);
        } while (d.__d && ++x < 25);
      (d.state = d.__s),
        null != d.getChildContext && (r = j(j({}, r), d.getChildContext())),
        p ||
          null == d.getSnapshotBeforeUpdate ||
          (m = d.getSnapshotBeforeUpdate(f, h)),
        $(
          e,
          D(
            (E =
              null != u && u.type === B && null == u.key
                ? u.props.children
                : u),
          )
            ? E
            : [E],
          t,
          n,
          r,
          o,
          i,
          a,
          s,
          l,
          c,
        ),
        (d.base = t.__e),
        (t.__u &= -161),
        d.__h.length && a.push(d),
        g && (d.__E = d.__ = null);
    } catch (e) {
      (t.__v = null),
        l || null != i
          ? ((t.__e = s), (t.__u |= l ? 160 : 32), (i[i.indexOf(s)] = null))
          : ((t.__e = n.__e), (t.__k = n.__k)),
        k.__e(e, t, n);
    }
  else
    null == i && t.__v === n.__v
      ? ((t.__k = n.__k), (t.__e = n.__e))
      : (t.__e = ne(n.__e, t, n, r, o, i, a, l, c));
  (u = k.diffed) && u(t);
}
function te(e, t, n) {
  for (var r = 0; r < n.length; r++) re(n[r], n[++r], n[++r]);
  k.__c && k.__c(t, e),
    e.some(function (t) {
      try {
        (e = t.__h),
          (t.__h = []),
          e.some(function (e) {
            e.call(t);
          });
      } catch (e) {
        k.__e(e, t.__v);
      }
    });
}
function ne(e, t, n, r, o, i, a, s, l) {
  var c,
    u,
    d,
    p,
    f,
    h,
    m,
    g = n.props,
    y = t.props,
    v = t.type;
  if (("svg" === v && (o = !0), null != i))
    for (c = 0; c < i.length; c++)
      if (
        (f = i[c]) &&
        "setAttribute" in f == !!v &&
        (v ? f.localName === v : 3 === f.nodeType)
      ) {
        (e = f), (i[c] = null);
        break;
      }
  if (null == e) {
    if (null === v) return document.createTextNode(y);
    (e = o
      ? document.createElementNS("http://www.w3.org/2000/svg", v)
      : document.createElement(v, y.is && y)),
      (i = null),
      (s = !1);
  }
  if (null === v) g === y || (s && e.data === y) || (e.data = y);
  else {
    if (((i = i && T.call(e.childNodes)), (g = n.props || M), !s && null != i))
      for (g = {}, c = 0; c < e.attributes.length; c++)
        g[(f = e.attributes[c]).name] = f.value;
    for (c in g)
      (f = g[c]),
        "children" == c ||
          ("dangerouslySetInnerHTML" == c
            ? (d = f)
            : "key" === c || c in y || Q(e, c, null, f, o));
    for (c in y)
      (f = y[c]),
        "children" == c
          ? (p = f)
          : "dangerouslySetInnerHTML" == c
            ? (u = f)
            : "value" == c
              ? (h = f)
              : "checked" == c
                ? (m = f)
                : "key" === c ||
                  (s && "function" != typeof f) ||
                  g[c] === f ||
                  Q(e, c, f, g[c], o);
    if (u)
      s ||
        (d && (u.__html === d.__html || u.__html === e.innerHTML)) ||
        (e.innerHTML = u.__html),
        (t.__k = []);
    else if (
      (d && (e.innerHTML = ""),
      $(
        e,
        D(p) ? p : [p],
        t,
        n,
        r,
        o && "foreignObject" !== v,
        i,
        a,
        i ? i[0] : n.__k && H(n, 0),
        s,
        l,
      ),
      null != i)
    )
      for (c = i.length; c--; ) null != i[c] && L(i[c]);
    s ||
      ((c = "value"),
      void 0 !== h &&
        (h !== e[c] ||
          ("progress" === v && !h) ||
          ("option" === v && h !== g[c])) &&
        Q(e, c, h, g[c], !1),
      (c = "checked"),
      void 0 !== m && m !== e[c] && Q(e, c, m, g[c], !1));
  }
  return e;
}
function re(e, t, n) {
  try {
    "function" == typeof e ? e(t) : (e.current = t);
  } catch (e) {
    k.__e(e, n);
  }
}
function oe(e, t, n) {
  var r, o;
  if (
    (k.unmount && k.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || re(r, null, t)),
    null != (r = e.__c))
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (e) {
        k.__e(e, t);
      }
    (r.base = r.__P = null), (e.__c = void 0);
  }
  if ((r = e.__k))
    for (o = 0; o < r.length; o++)
      r[o] && oe(r[o], t, n || "function" != typeof e.type);
  n || null == e.__e || L(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function ie(e, t, n) {
  return this.constructor(e, n);
}
(T = P.slice),
  (k = {
    __e: function (e, t, n, r) {
      for (var o, i, a; (t = t.__); )
        if ((o = t.__c) && !o.__)
          try {
            if (
              ((i = o.constructor) &&
                null != i.getDerivedStateFromError &&
                (o.setState(i.getDerivedStateFromError(e)), (a = o.__d)),
              null != o.componentDidCatch &&
                (o.componentDidCatch(e, r || {}), (a = o.__d)),
              a)
            )
              return (o.__E = o);
          } catch (t) {
            e = t;
          }
      throw e;
    },
  }),
  (C = 0),
  (z.prototype.setState = function (e, t) {
    var n;
    (n =
      null != this.__s && this.__s !== this.state
        ? this.__s
        : (this.__s = j({}, this.state))),
      "function" == typeof e && (e = e(j({}, n), this.props)),
      e && j(n, e),
      null != e && this.__v && (t && this._sb.push(t), G(this));
  }),
  (z.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), G(this));
  }),
  (z.prototype.render = B),
  (I = []),
  (O =
    "function" == typeof Promise
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (R = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (W.__r = 0);
var ae,
  se,
  le,
  ce,
  ue = 0,
  de = [],
  pe = [],
  fe = k,
  he = fe.__b,
  me = fe.__r,
  ge = fe.diffed,
  ye = fe.__c,
  ve = fe.unmount,
  be = fe.__;
function Se(e, t) {
  fe.__h && fe.__h(se, e, ue || t), (ue = 0);
  var n = se.__H || (se.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: pe }), n.__[e];
}
function _e(e) {
  return (ue = 1), xe(Me, e);
}
function xe(e, t, n) {
  var r = Se(ae++, 2);
  if (
    ((r.t = e),
    !r.__c &&
      ((r.__ = [
        n ? n(t) : Me(void 0, t),
        function (e) {
          var t = r.__N ? r.__N[0] : r.__[0],
            n = r.t(t, e);
          t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = se),
      !se.u))
  ) {
    var o = function (e, t, n) {
      if (!r.__c.__H) return !0;
      var o = r.__c.__H.__.filter(function (e) {
        return !!e.__c;
      });
      if (
        o.every(function (e) {
          return !e.__N;
        })
      )
        return !i || i.call(this, e, t, n);
      var a = !1;
      return (
        o.forEach(function (e) {
          if (e.__N) {
            var t = e.__[0];
            (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
          }
        }),
        !(!a && r.__c.props === e) && (!i || i.call(this, e, t, n))
      );
    };
    se.u = !0;
    var i = se.shouldComponentUpdate,
      a = se.componentWillUpdate;
    (se.componentWillUpdate = function (e, t, n) {
      if (this.__e) {
        var r = i;
        (i = void 0), o(e, t, n), (i = r);
      }
      a && a.call(this, e, t, n);
    }),
      (se.shouldComponentUpdate = o);
  }
  return r.__N || r.__;
}
function we(e, t) {
  var n = Se(ae++, 4);
  !fe.__s && Re(n.__H, t) && ((n.__ = e), (n.i = t), se.__h.push(n));
}
function Ee(e, t) {
  var n = Se(ae++, 7);
  return Re(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
}
function Te(e, t) {
  return (
    (ue = 8),
    Ee(function () {
      return e;
    }, t)
  );
}
function ke() {
  for (var e; (e = de.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ae), e.__H.__h.forEach(Oe), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), fe.__e(t, e.__v);
      }
}
(fe.__b = function (e) {
  (se = null), he && he(e);
}),
  (fe.__ = function (e, t) {
    t.__k && t.__k.__m && (e.__m = t.__k.__m), be && be(e, t);
  }),
  (fe.__r = function (e) {
    me && me(e), (ae = 0);
    var t = (se = e.__c).__H;
    t &&
      (le === se
        ? ((t.__h = []),
          (se.__h = []),
          t.__.forEach(function (e) {
            e.__N && (e.__ = e.__N), (e.__V = pe), (e.__N = e.i = void 0);
          }))
        : (t.__h.forEach(Ae), t.__h.forEach(Oe), (t.__h = []), (ae = 0))),
      (le = se);
  }),
  (fe.diffed = function (e) {
    ge && ge(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((1 !== de.push(t) && ce === fe.requestAnimationFrame) ||
          ((ce = fe.requestAnimationFrame) || Ie)(ke)),
      t.__H.__.forEach(function (e) {
        e.i && (e.__H = e.i),
          e.__V !== pe && (e.__ = e.__V),
          (e.i = void 0),
          (e.__V = pe);
      })),
      (le = se = null);
  }),
  (fe.__c = function (e, t) {
    t.some(function (e) {
      try {
        e.__h.forEach(Ae),
          (e.__h = e.__h.filter(function (e) {
            return !e.__ || Oe(e);
          }));
      } catch (n) {
        t.some(function (e) {
          e.__h && (e.__h = []);
        }),
          (t = []),
          fe.__e(n, e.__v);
      }
    }),
      ye && ye(e, t);
  }),
  (fe.unmount = function (e) {
    ve && ve(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (e) {
        try {
          Ae(e);
        } catch (e) {
          t = e;
        }
      }),
      (n.__H = void 0),
      t && fe.__e(t, n.__v));
  });
var Ce = "function" == typeof requestAnimationFrame;
function Ie(e) {
  var t,
    n = function () {
      clearTimeout(r), Ce && cancelAnimationFrame(t), setTimeout(e);
    },
    r = setTimeout(n, 100);
  Ce && (t = requestAnimationFrame(n));
}
function Ae(e) {
  var t = se,
    n = e.__c;
  "function" == typeof n && ((e.__c = void 0), n()), (se = t);
}
function Oe(e) {
  var t = se;
  (e.__c = e.__()), (se = t);
}
function Re(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (t, n) {
      return t !== e[n];
    })
  );
}
function Me(e, t) {
  return "function" == typeof t ? t(e) : t;
}
const Pe = Object.defineProperty(
  {
    __proto__: null,
    useCallback: Te,
    useContext: function (e) {
      var t = se.context[e.__c],
        n = Se(ae++, 9);
      return (
        (n.c = e),
        t ? (null == n.__ && ((n.__ = !0), t.sub(se)), t.props.value) : e.__
      );
    },
    useDebugValue: function (e, t) {
      fe.useDebugValue && fe.useDebugValue(t ? t(e) : e);
    },
    useEffect: function (e, t) {
      var n = Se(ae++, 3);
      !fe.__s && Re(n.__H, t) && ((n.__ = e), (n.i = t), se.__H.__h.push(n));
    },
    useErrorBoundary: function (e) {
      var t = Se(ae++, 10),
        n = _e();
      return (
        (t.__ = e),
        se.componentDidCatch ||
          (se.componentDidCatch = function (e, r) {
            t.__ && t.__(e, r), n[1](e);
          }),
        [
          n[0],
          function () {
            n[1](void 0);
          },
        ]
      );
    },
    useId: function () {
      var e = Se(ae++, 11);
      if (!e.__) {
        for (var t = se.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
        var n = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + n[0] + "-" + n[1]++;
      }
      return e.__;
    },
    useImperativeHandle: function (e, t, n) {
      (ue = 6),
        we(
          function () {
            return "function" == typeof e
              ? (e(t()),
                function () {
                  return e(null);
                })
              : e
                ? ((e.current = t()),
                  function () {
                    return (e.current = null);
                  })
                : void 0;
          },
          null == n ? n : n.concat(e),
        );
    },
    useLayoutEffect: we,
    useMemo: Ee,
    useReducer: xe,
    useRef: function (e) {
      return (
        (ue = 5),
        Ee(function () {
          return { current: e };
        }, [])
      );
    },
    useState: _e,
  },
  Symbol.toStringTag,
  { value: "Module" },
);
function Ne() {
  const e = (e) => i.createElementNS("http://www.w3.org/2000/svg", e),
    t = b(e("svg"), {
      width: "32",
      height: "30",
      viewBox: "0 0 72 66",
      fill: "inherit",
    }),
    n = b(e("path"), {
      transform: "translate(11, 11)",
      d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z",
    });
  return t.appendChild(n), t;
}
function De({ options: e }) {
  const t = Ee(() => ({ __html: Ne().outerHTML }), []);
  return F(
    "h2",
    { class: "dialog__header" },
    F("span", { class: "dialog__title" }, e.formTitle),
    e.showBranding
      ? F("a", {
          class: "brand-link",
          target: "_blank",
          href: "https://sentry.io/welcome/",
          title: "Powered by Sentry",
          rel: "noopener noreferrer",
          dangerouslySetInnerHTML: t,
        })
      : null,
  );
}
function je(e, t) {
  const n = e.get(t);
  return "string" == typeof n ? n.trim() : "";
}
function Le({
  options: e,
  defaultEmail: t,
  defaultName: n,
  onFormClose: o,
  onSubmit: i,
  onSubmitSuccess: a,
  onSubmitError: s,
  showEmail: l,
  showName: c,
  screenshotInput: u,
}) {
  const {
      tags: d,
      addScreenshotButtonLabel: p,
      removeScreenshotButtonLabel: f,
      cancelButtonLabel: h,
      emailLabel: m,
      emailPlaceholder: g,
      isEmailRequired: v,
      isNameRequired: b,
      messageLabel: S,
      messagePlaceholder: _,
      nameLabel: x,
      namePlaceholder: w,
      submitButtonLabel: E,
      isRequiredLabel: T,
    } = e,
    [k, C] = _e(!1),
    [I, A] = _e(null),
    [O, R] = _e(!1),
    M = u?.input,
    [P, N] = _e(null),
    D = Te((e) => {
      N(e), R(!1);
    }, []),
    j = Te(
      (e) => {
        const t = (function (e, t) {
          const n = [];
          return (
            t.isNameRequired && !e.name && n.push(t.nameLabel),
            t.isEmailRequired && !e.email && n.push(t.emailLabel),
            e.message || n.push(t.messageLabel),
            n
          );
        })(e, {
          emailLabel: m,
          isEmailRequired: v,
          isNameRequired: b,
          messageLabel: S,
          nameLabel: x,
        });
        return (
          t.length > 0
            ? A(
                `Please enter in the following required fields: ${t.join(", ")}`,
              )
            : A(null),
          0 === t.length
        );
      },
      [m, v, b, S, x],
    ),
    L = Te(
      async (e) => {
        C(!0);
        try {
          if ((e.preventDefault(), !(e.target instanceof HTMLFormElement)))
            return;
          const t = new FormData(e.target),
            n = await (u && O ? u.value() : void 0),
            o = {
              name: je(t, "name"),
              email: je(t, "email"),
              message: je(t, "message"),
              attachments: n ? [n] : void 0,
            };
          if (!j(o)) return;
          try {
            const e = await i(
              {
                name: o.name,
                email: o.email,
                message: o.message,
                source: "widget",
                tags: d,
              },
              { attachments: o.attachments },
            );
            a(o, e);
          } catch (e) {
            y && r.debug.error(e);
            const t = e instanceof Error ? e : new Error(String(e));
            A(t.message), s(t);
          }
        } finally {
          C(!1);
        }
      },
      [u && O, a, s],
    );
  return F(
    "form",
    { class: "form", onSubmit: L },
    M && O ? F(M, { onError: D }) : null,
    F(
      "fieldset",
      {
        class: "form__right",
        "data-sentry-feedback": !0,
        disabled: k,
      },
      F(
        "div",
        { class: "form__top" },
        I ? F("div", { class: "form__error-container" }, I) : null,
        c
          ? F(
              "label",
              { for: "name", class: "form__label" },
              F(Fe, { label: x, isRequiredLabel: T, isRequired: b }),
              F("input", {
                class: "form__input",
                defaultValue: n,
                id: "name",
                name: "name",
                placeholder: w,
                required: b,
                type: "text",
              }),
            )
          : F("input", {
              "aria-hidden": !0,
              value: n,
              name: "name",
              type: "hidden",
            }),
        l
          ? F(
              "label",
              { for: "email", class: "form__label" },
              F(Fe, { label: m, isRequiredLabel: T, isRequired: v }),
              F("input", {
                class: "form__input",
                defaultValue: t,
                id: "email",
                name: "email",
                placeholder: g,
                required: v,
                type: "email",
              }),
            )
          : F("input", {
              "aria-hidden": !0,
              value: t,
              name: "email",
              type: "hidden",
            }),
        F(
          "label",
          { for: "message", class: "form__label" },
          F(Fe, { label: S, isRequiredLabel: T, isRequired: !0 }),
          F("textarea", {
            autoFocus: !0,
            class: "form__input form__input--textarea",
            id: "message",
            name: "message",
            placeholder: _,
            required: !0,
            rows: 5,
          }),
        ),
        M
          ? F(
              "label",
              { for: "screenshot", class: "form__label" },
              F(
                "button",
                {
                  class: "btn btn--default",
                  disabled: k,
                  type: "button",
                  onClick: () => {
                    N(null), R((e) => !e);
                  },
                },
                O ? f : p,
              ),
              P
                ? F("div", { class: "form__error-container" }, P.message)
                : null,
            )
          : null,
      ),
      F(
        "div",
        { class: "btn-group" },
        F(
          "button",
          { class: "btn btn--primary", disabled: k, type: "submit" },
          E,
        ),
        F(
          "button",
          {
            class: "btn btn--default",
            disabled: k,
            type: "button",
            onClick: o,
          },
          h,
        ),
      ),
    ),
  );
}
function Fe({ label: e, isRequired: t, isRequiredLabel: n }) {
  return F(
    "span",
    { class: "form__label__text" },
    e,
    t && F("span", { class: "form__label__text--required" }, n),
  );
}
function Ue() {
  const e = (e) => o.document.createElementNS("http://www.w3.org/2000/svg", e),
    t = b(e("svg"), {
      width: "16",
      height: "17",
      viewBox: "0 0 16 17",
      fill: "inherit",
    }),
    n = b(e("g"), { clipPath: "url(#clip0_57_156)" }),
    r = b(e("path"), {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z",
    }),
    i = b(e("path"), {
      d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z",
    });
  t.appendChild(n).append(i, r);
  const a = e("defs"),
    s = b(e("clipPath"), { id: "clip0_57_156" }),
    l = b(e("rect"), {
      width: "16",
      height: "16",
      fill: "white",
      transform: "translate(0 0.5)",
    });
  return (
    s.appendChild(l),
    a.appendChild(s),
    t.appendChild(a).appendChild(s).appendChild(l),
    t
  );
}
function Be({ open: e, onFormSubmitted: t, ...n }) {
  const r = n.options,
    o = Ee(() => ({ __html: Ue().outerHTML }), []),
    [i, a] = _e(null),
    s = Te(() => {
      i && (clearTimeout(i), a(null)), t();
    }, [i]),
    l = Te(
      (e, r) => {
        n.onSubmitSuccess(e, r),
          a(
            setTimeout(() => {
              t(), a(null);
            }, 5e3),
          );
      },
      [t],
    );
  return F(
    B,
    null,
    i
      ? F(
          "div",
          { class: "success__position", onClick: s },
          F(
            "div",
            { class: "success__content" },
            r.successMessageText,
            F("span", {
              class: "success__icon",
              dangerouslySetInnerHTML: o,
            }),
          ),
        )
      : F(
          "dialog",
          { class: "dialog", onClick: r.onFormClose, open: e },
          F(
            "div",
            { class: "dialog__position" },
            F(
              "div",
              {
                class: "dialog__content",
                onClick: (e) => {
                  e.stopPropagation();
                },
              },
              F(De, { options: r }),
              F(Le, { ...n, onSubmitSuccess: l }),
            ),
          ),
        ),
  );
}
function ze(e) {
  const t = i.createElement("style"),
    n = "#1A141F",
    r = "#302735";
  return (
    (t.textContent = `\n.editor {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n}\n\n.editor__image-container {\n  justify-items: center;\n  padding: 15px;\n  position: relative;\n  height: 100%;\n  border-radius: var(--menu-border-radius, 6px);\n\n  background-color: ${n};\n  background-image: repeating-linear-gradient(\n      -145deg,\n      transparent,\n      transparent 8px,\n      ${n} 8px,\n      ${n} 11px\n    ),\n    repeating-linear-gradient(\n      -45deg,\n      transparent,\n      transparent 15px,\n      ${r} 15px,\n      ${r} 16px\n    );\n}\n\n.editor__canvas-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.editor__canvas-container > * {\n  object-fit: contain;\n  position: absolute;\n}\n\n.editor__tool-container {\n  padding-top: 8px;\n  display: flex;\n  justify-content: center;\n}\n\n.editor__tool-bar {\n  display: flex;\n  gap: 8px;\n}\n\n.editor__tool {\n  display: flex;\n  padding: 8px 12px;\n  justify-content: center;\n  align-items: center;\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  background: var(--button-background, var(--background));\n  color: var(--button-color, var(--foreground));\n}\n\n.editor__tool--active {\n  background: var(--button-primary-background, var(--accent-background));\n  color: var(--button-primary-color, var(--accent-foreground));\n}\n\n.editor__rect {\n  position: absolute;\n  z-index: 2;\n}\n\n.editor__rect button {\n  opacity: 0;\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  cursor: pointer;\n  padding: 0;\n  z-index: 3;\n  border: none;\n  background: none;\n}\n\n.editor__rect:hover button {\n  opacity: 1;\n}\n`),
    e && t.setAttribute("nonce", e),
    t
  );
}
function He(e, t, n) {
  if (!e) return;
  const r = e.getContext("2d", t);
  r && n(e, r);
}
function Ve(e, t) {
  He(e, { alpha: !0 }, (e, n) => {
    n.drawImage(t, 0, 0, t.width, t.height, 0, 0, e.width, e.height);
  });
}
function qe(e, t, n) {
  He(e, { alpha: !0 }, (e, r) => {
    n.length &&
      ((r.fillStyle = "rgba(0, 0, 0, 0.25)"),
      r.fillRect(0, 0, e.width, e.height)),
      n.forEach((e) => {
        !(function (e, t, n) {
          switch (e.type) {
            case "highlight":
              (t.shadowColor = "rgba(0, 0, 0, 0.7)"),
                (t.shadowBlur = 50),
                (t.fillStyle = n),
                t.fillRect(e.x - 1, e.y - 1, e.w + 2, e.h + 2),
                t.clearRect(e.x, e.y, e.w, e.h);
              break;
            case "hide":
              (t.fillStyle = "rgb(0, 0, 0)"), t.fillRect(e.x, e.y, e.w, e.h);
          }
        })(e, r, t);
      });
  });
}
function Ge({ h: e, hooks: t, outputBuffer: n, dialog: r, options: s }) {
  const l = (function ({ hooks: e }) {
      return function ({
        onBeforeScreenshot: t,
        onScreenshot: n,
        onAfterScreenshot: r,
        onError: s,
      }) {
        const l = (function () {
          const [t, n] = e.useState(o.devicePixelRatio ?? 1);
          return (
            e.useEffect(() => {
              const e = () => {
                  n(o.devicePixelRatio);
                },
                t = matchMedia(`(resolution: ${o.devicePixelRatio}dppx)`);
              return (
                t.addEventListener("change", e),
                () => {
                  t.removeEventListener("change", e);
                }
              );
            }, []),
            t
          );
        })();
        e.useEffect(() => {
          (async () => {
            t();
            const e = await a.mediaDevices.getDisplayMedia({
                video: {
                  width: o.innerWidth * l,
                  height: o.innerHeight * l,
                },
                audio: !1,
                monitorTypeSurfaces: "exclude",
                preferCurrentTab: !0,
                selfBrowserSurface: "include",
                surfaceSwitching: "exclude",
              }),
              s = i.createElement("video");
            await new Promise((t, r) => {
              (s.srcObject = e),
                (s.onloadedmetadata = () => {
                  n(s, l), e.getTracks().forEach((e) => e.stop()), t();
                }),
                s.play().catch(r);
            }),
              r();
          })().catch(s);
        }, []);
      };
    })({ hooks: t }),
    c = (function ({ h: e }) {
      return function ({ action: t, setAction: n, options: r }) {
        return e(
          "div",
          { class: "editor__tool-container" },
          e(
            "div",
            { class: "editor__tool-bar" },
            e(
              "button",
              {
                type: "button",
                class:
                  "editor__tool " +
                  ("highlight" === t ? "editor__tool--active" : ""),
                onClick: () => {
                  n("highlight" === t ? "" : "highlight");
                },
              },
              r.highlightToolText,
            ),
            e(
              "button",
              {
                type: "button",
                class:
                  "editor__tool " +
                  ("hide" === t ? "editor__tool--active" : ""),
                onClick: () => {
                  n("hide" === t ? "" : "hide");
                },
              },
              r.hideToolText,
            ),
          ),
        );
      };
    })({ h: e }),
    u = (function ({ h: e }) {
      return function () {
        return e(
          "svg",
          {
            "data-test-id": "icon-close",
            viewBox: "0 0 16 16",
            fill: "#2B2233",
            height: "25px",
            width: "25px",
          },
          e("circle", { r: "7", cx: "8", cy: "8", fill: "white" }),
          e("path", {
            strokeWidth: "1.5",
            d: "M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z",
          }),
          e("path", {
            strokeWidth: "1.5",
            d: "M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z",
          }),
          e("path", {
            strokeWidth: "1.5",
            d: "M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z",
          }),
        );
      };
    })({ h: e }),
    d = { __html: ze(s.styleNonce).innerText },
    p = r.el.style,
    f = ({ screenshot: r }) => {
      const [a, l] = t.useState("highlight"),
        [p, f] = t.useState([]),
        h = t.useRef(null),
        m = t.useRef(null),
        g = t.useRef(null),
        y = t.useRef(null),
        [v, b] = t.useState(1),
        S = t.useMemo(() => {
          const e = i.getElementById(s.id);
          if (!e) return "white";
          const t = getComputedStyle(e);
          return (
            t.getPropertyValue("--button-primary-background") ||
            t.getPropertyValue("--accent-background")
          );
        }, [s.id]);
      t.useLayoutEffect(() => {
        const e = () => {
          const t = h.current;
          t &&
            (He(r.canvas, { alpha: !1 }, (e) => {
              const n = Math.min(
                t.clientWidth / e.width,
                t.clientHeight / e.height,
              );
              b(n);
            }),
            (0 !== t.clientHeight && 0 !== t.clientWidth) || setTimeout(e, 0));
        };
        return (
          e(),
          o.addEventListener("resize", e),
          () => {
            o.removeEventListener("resize", e);
          }
        );
      }, [r]);
      const _ = t.useCallback(
        (e, t) => {
          He(e, { alpha: !0 }, (e, n) => {
            n.scale(t, t),
              (e.width = r.canvas.width),
              (e.height = r.canvas.height);
          });
        },
        [r],
      );
      t.useEffect(() => {
        _(m.current, r.dpi), Ve(m.current, r.canvas);
      }, [r]),
        t.useEffect(() => {
          _(g.current, r.dpi),
            He(g.current, { alpha: !0 }, (e, t) => {
              t.clearRect(0, 0, e.width, e.height);
            }),
            qe(g.current, S, p);
        }, [p, S]),
        t.useEffect(() => {
          _(n, r.dpi),
            Ve(n, r.canvas),
            He(i.createElement("canvas"), { alpha: !0 }, (e, t) => {
              t.scale(r.dpi, r.dpi),
                (e.width = r.canvas.width),
                (e.height = r.canvas.height),
                qe(e, S, p),
                Ve(n, e);
            });
        }, [p, r, S]);
      const x = t.useCallback(
          (e) => (t) => {
            t.preventDefault(),
              t.stopPropagation(),
              f((t) => {
                const n = [...t];
                return n.splice(e, 1), n;
              });
          },
          [],
        ),
        w = {
          width: r.canvas.width * v + "px",
          height: r.canvas.height * v + "px",
        },
        E = (e) => {
          e.stopPropagation();
        };
      return e(
        "div",
        { class: "editor" },
        e("style", {
          nonce: s.styleNonce,
          dangerouslySetInnerHTML: d,
        }),
        e(
          "div",
          { class: "editor__image-container" },
          e(
            "div",
            { class: "editor__canvas-container", ref: h },
            e("canvas", { ref: m, id: "background", style: w }),
            e("canvas", { ref: g, id: "foreground", style: w }),
            e(
              "div",
              {
                ref: y,
                onMouseDown: (e) => {
                  if (!a || !y.current) return;
                  const t = y.current.getBoundingClientRect(),
                    n = {
                      type: a,
                      x: e.offsetX / v,
                      y: e.offsetY / v,
                    },
                    r = (e, n) => {
                      const r = (n.clientX - t.x) / v,
                        o = (n.clientY - t.y) / v;
                      return {
                        type: e.type,
                        x: Math.min(e.x, r),
                        y: Math.min(e.y, o),
                        w: Math.abs(r - e.x),
                        h: Math.abs(o - e.y),
                      };
                    },
                    o = (e) => {
                      He(g.current, { alpha: !0 }, (e, t) => {
                        t.clearRect(0, 0, e.width, e.height);
                      }),
                        qe(g.current, S, [...p, r(n, e)]);
                    },
                    s = (e) => {
                      const t = r(n, e);
                      t.w * v >= 1 && t.h * v >= 1 && f((e) => [...e, t]),
                        i.removeEventListener("mousemove", o),
                        i.removeEventListener("mouseup", s);
                    };
                  i.addEventListener("mousemove", o),
                    i.addEventListener("mouseup", s);
                },
                style: w,
              },
              p.map((t, n) =>
                e(
                  "div",
                  {
                    key: n,
                    class: "editor__rect",
                    style: {
                      top: t.y * v + "px",
                      left: t.x * v + "px",
                      width: t.w * v + "px",
                      height: t.h * v + "px",
                    },
                  },
                  e(
                    "button",
                    {
                      "aria-label": s.removeHighlightText,
                      onClick: x(n),
                      onMouseDown: E,
                      onMouseUp: E,
                      type: "button",
                    },
                    e(u, null),
                  ),
                ),
              ),
            ),
          ),
        ),
        e(c, { options: s, action: a, setAction: l }),
      );
    };
  return function ({ onError: r }) {
    const [o, a] = t.useState();
    return (
      l({
        onBeforeScreenshot: t.useCallback(() => {
          p.display = "none";
        }, []),
        onScreenshot: t.useCallback((e, t) => {
          He(i.createElement("canvas"), { alpha: !1 }, (n, r) => {
            r.scale(t, t),
              (n.width = e.videoWidth),
              (n.height = e.videoHeight),
              r.drawImage(e, 0, 0, n.width, n.height),
              a({ canvas: n, dpi: t });
          }),
            (n.width = e.videoWidth),
            (n.height = e.videoHeight);
        }, []),
        onAfterScreenshot: t.useCallback(() => {
          p.display = "block";
        }, []),
        onError: t.useCallback((e) => {
          (p.display = "block"), r(e);
        }, []),
      }),
      o ? e(f, { screenshot: o }) : e("div", null)
    );
  };
}
(t.buildFeedbackIntegration =
  ({
    lazyLoadIntegration: e,
    getModalIntegration: t,
    getScreenshotIntegration: n,
  }) =>
  ({
    id: f = "sentry-feedback",
    autoInject: h = !0,
    showBranding: m = !0,
    isEmailRequired: S = !1,
    isNameRequired: _ = !1,
    showEmail: x = !0,
    showName: w = !0,
    enableScreenshot: T = !0,
    useSentryUser: k = { email: "email", name: "username" },
    tags: C,
    styleNonce: I,
    scriptNonce: A,
    colorScheme: O = "system",
    themeLight: R = {},
    themeDark: M = {},
    addScreenshotButtonLabel: P = "Add a screenshot",
    cancelButtonLabel: N = "Cancel",
    confirmButtonLabel: D = "Confirm",
    emailLabel: j = "Email",
    emailPlaceholder: L = "your.email@example.org",
    formTitle: F = "Report a Bug",
    isRequiredLabel: U = "(required)",
    messageLabel: B = "Description",
    messagePlaceholder: z = "What's the bug? What did you expect?",
    nameLabel: H = "Name",
    namePlaceholder: V = "Your Name",
    removeScreenshotButtonLabel: q = "Remove screenshot",
    submitButtonLabel: G = "Send Bug Report",
    successMessageText: W = "Thank you for your report!",
    triggerLabel: $ = s,
    triggerAriaLabel: Y = "",
    highlightToolText: K = "Highlight",
    hideToolText: Z = "Hide",
    removeHighlightText: Q = "Remove",
    errorEmptyMessageText: J = l,
    errorNoClientText: X = c,
    errorTimeoutText: ee = u,
    errorForbiddenText: te = d,
    errorGenericText: ne = p,
    onFormOpen: re,
    onFormClose: oe,
    onSubmitSuccess: ie,
    onSubmitError: ae,
    onFormSubmitted: se,
  } = {}) => {
    const le = {
      id: f,
      autoInject: h,
      showBranding: m,
      isEmailRequired: S,
      isNameRequired: _,
      showEmail: x,
      showName: w,
      enableScreenshot: T,
      useSentryUser: k,
      tags: C,
      styleNonce: I,
      scriptNonce: A,
      colorScheme: O,
      themeDark: M,
      themeLight: R,
      triggerLabel: $,
      triggerAriaLabel: Y,
      cancelButtonLabel: N,
      submitButtonLabel: G,
      confirmButtonLabel: D,
      formTitle: F,
      emailLabel: j,
      emailPlaceholder: L,
      messageLabel: B,
      messagePlaceholder: z,
      nameLabel: H,
      namePlaceholder: V,
      successMessageText: W,
      isRequiredLabel: U,
      addScreenshotButtonLabel: P,
      removeScreenshotButtonLabel: q,
      highlightToolText: K,
      hideToolText: Z,
      removeHighlightText: Q,
      errorEmptyMessageText: J,
      errorNoClientText: X,
      errorTimeoutText: ee,
      errorForbiddenText: te,
      errorGenericText: ne,
      onFormClose: oe,
      onFormOpen: re,
      onSubmitError: ae,
      onSubmitSuccess: ie,
      onFormSubmitted: se,
    };
    let ce = null,
      ue = null,
      de = [];
    const pe = (e) => {
        if (!ce) {
          const t = i.createElement("div");
          (t.id = String(e.id)),
            i.body.appendChild(t),
            (ce = t.attachShadow({ mode: "open" })),
            (ue = E(e)),
            ce.appendChild(ue);
        }
        return ce;
      },
      fe = async (o) => {
        const i =
          o.enableScreenshot &&
          !(
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              a.userAgent,
            ) ||
            (/Macintosh/i.test(a.userAgent) &&
              a.maxTouchPoints &&
              a.maxTouchPoints > 1) ||
            !isSecureContext
          );
        let s, l;
        try {
          (s = (t ? t() : await e("feedbackModalIntegration", A))()),
            r.addIntegration(s);
        } catch {
          throw (
            (y &&
              r.debug.error(
                "[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`.",
              ),
            new Error("[Feedback] Missing feedback modal integration!"))
          );
        }
        try {
          const t = i
            ? n
              ? n()
              : await e("feedbackScreenshotIntegration", A)
            : void 0;
          t && ((l = t()), r.addIntegration(l));
        } catch {
          y &&
            r.debug.error(
              "[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.",
            );
        }
        const c = {
            ERROR_EMPTY_MESSAGE: o.errorEmptyMessageText,
            ERROR_NO_CLIENT: o.errorNoClientText,
            ERROR_TIMEOUT: o.errorTimeoutText,
            ERROR_FORBIDDEN: o.errorForbiddenText,
            ERROR_GENERIC: o.errorGenericText,
          },
          u = s.createDialog({
            options: {
              ...o,
              onFormClose: () => {
                u?.close(), o.onFormClose?.();
              },
              onFormSubmitted: () => {
                u?.close(), o.onFormSubmitted?.();
              },
            },
            screenshotIntegration: l,
            sendFeedback: (e, t) =>
              g(e, { includeReplay: !0, ...t, errorMessages: c }),
            shadow: pe(o),
          });
        return u;
      },
      he = (e, t = {}) => {
        const n = v(le, t),
          o =
            "string" == typeof e
              ? i.querySelector(e)
              : "function" == typeof e.addEventListener
                ? e
                : null;
        if (!o)
          throw (
            (y &&
              r.debug.error("[Feedback] Unable to attach to target element"),
            new Error("Unable to attach to target element"))
          );
        let a = null;
        const s = async () => {
          a ||
            (a = await fe({
              ...n,
              onFormSubmitted: () => {
                a?.removeFromDom(), n.onFormSubmitted?.();
              },
            })),
            a.appendToDom(),
            a.open();
        };
        o.addEventListener("click", s);
        const l = () => {
          (de = de.filter((e) => e !== l)),
            a?.removeFromDom(),
            (a = null),
            o.removeEventListener("click", s);
        };
        return de.push(l), l;
      },
      me = (e = {}) => {
        const t = v(le, e),
          n = pe(t),
          r = (function ({
            triggerLabel: e,
            triggerAriaLabel: t,
            shadow: n,
            styleNonce: r,
          }) {
            const a = i.createElement("button");
            if (
              ((a.type = "button"),
              (a.className = "widget__actor"),
              (a.ariaHidden = "false"),
              (a.ariaLabel = t || e || s),
              a.appendChild(
                (function () {
                  const e = (e) =>
                      o.document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        e,
                      ),
                    t = b(e("svg"), {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "var(--actor-color, var(--foreground))",
                    }),
                    n = b(e("g"), { clipPath: "url(#clip0_57_80)" }),
                    r = b(e("path"), {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z",
                    });
                  t.appendChild(n).appendChild(r);
                  const i = e("defs"),
                    a = b(e("clipPath"), { id: "clip0_57_80" }),
                    s = b(e("rect"), {
                      width: "20",
                      height: "20",
                      fill: "white",
                    });
                  return (
                    a.appendChild(s),
                    i.appendChild(a),
                    t.appendChild(i).appendChild(a).appendChild(s),
                    t
                  );
                })(),
              ),
              e)
            ) {
              const t = i.createElement("span");
              t.appendChild(i.createTextNode(e)), a.appendChild(t);
            }
            const l = (function (e) {
              const t = i.createElement("style");
              return (
                (t.textContent =
                  '\n.widget__actor {\n  position: fixed;\n  z-index: var(--z-index);\n  margin: var(--page-margin);\n  inset: var(--actor-inset);\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  line-height: 1.14em;\n  text-decoration: none;\n\n  background: var(--actor-background, var(--background));\n  border-radius: var(--actor-border-radius, 1.7em/50%);\n  border: var(--actor-border, var(--border));\n  box-shadow: var(--actor-box-shadow, var(--box-shadow));\n  color: var(--actor-color, var(--foreground));\n  fill: var(--actor-color, var(--foreground));\n  cursor: pointer;\n  opacity: 1;\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n.widget__actor[aria-hidden="true"] {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n  transform: translate(0, 16px) scale(0.98);\n}\n\n.widget__actor:hover {\n  background: var(--actor-hover-background, var(--background));\n  filter: var(--interactive-filter);\n}\n\n.widget__actor svg {\n  width: 1.14em;\n  height: 1.14em;\n}\n\n@media (max-width: 600px) {\n  .widget__actor span {\n    display: none;\n  }\n}\n'),
                e && t.setAttribute("nonce", e),
                t
              );
            })(r);
            return {
              el: a,
              appendToDom() {
                n.appendChild(l), n.appendChild(a);
              },
              removeFromDom() {
                a.remove(), l.remove();
              },
              show() {
                a.ariaHidden = "false";
              },
              hide() {
                a.ariaHidden = "true";
              },
            };
          })({
            triggerLabel: t.triggerLabel,
            triggerAriaLabel: t.triggerAriaLabel,
            shadow: n,
            styleNonce: I,
          });
        return (
          he(r.el, {
            ...t,
            onFormOpen() {
              r.hide();
            },
            onFormClose() {
              r.show();
            },
            onFormSubmitted() {
              r.show();
            },
          }),
          r
        );
      };
    return {
      name: "Feedback",
      setupOnce() {
        r.isBrowser() &&
          le.autoInject &&
          ("loading" === i.readyState
            ? i.addEventListener("DOMContentLoaded", () => me().appendToDom())
            : me().appendToDom());
      },
      attachTo: he,
      createWidget(e = {}) {
        const t = me(v(le, e));
        return t.appendToDom(), t;
      },
      createForm: async (e = {}) => fe(v(le, e)),
      setTheme(e) {
        if (((le.colorScheme = e), ce)) {
          const e = E(le);
          ue ? ce.replaceChild(e, ue) : ce.prepend(e), (ue = e);
        }
      },
      remove() {
        ce && (ce.parentElement?.remove(), (ce = null), (ue = null)),
          de.forEach((e) => e()),
          (de = []);
      },
    };
  }),
  (t.feedbackModalIntegration = () => ({
    name: "FeedbackModal",
    setupOnce() {},
    createDialog: ({
      options: e,
      screenshotIntegration: t,
      sendFeedback: n,
      shadow: o,
    }) => {
      const a = o,
        s = e.useSentryUser,
        l = (function () {
          const e = r.getCurrentScope().getUser(),
            t = r.getIsolationScope().getUser(),
            n = r.getGlobalScope().getUser();
          return e && Object.keys(e).length
            ? e
            : t && Object.keys(t).length
              ? t
              : n;
        })(),
        c = i.createElement("div"),
        u = (function (e) {
          const t = i.createElement("style");
          return (
            (t.textContent =
              "\n:host {\n  --dialog-inset: var(--inset);\n}\n\n\n.dialog {\n  position: fixed;\n  z-index: var(--z-index);\n  margin: 0;\n  inset: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  height: 100vh;\n  width: 100vw;\n\n  color: var(--dialog-color, var(--foreground));\n  fill: var(--dialog-color, var(--foreground));\n  line-height: 1.75em;\n\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  inset: 0;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog__position {\n  position: fixed;\n  z-index: var(--z-index);\n  inset: var(--dialog-inset);\n  padding: var(--page-margin);\n  display: flex;\n  max-height: calc(100vh - (2 * var(--page-margin)));\n}\n@media (max-width: 600px) {\n  .dialog__position {\n    inset: var(--page-margin);\n    padding: 0;\n  }\n}\n\n.dialog__position:has(.editor) {\n  inset: var(--page-margin);\n  padding: 0;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: var(--dialog-padding, 24px);\n  max-width: 100%;\n  width: 100%;\n  max-height: 100%;\n  overflow: auto;\n\n  background: var(--dialog-background, var(--background));\n  border-radius: var(--dialog-border-radius, 20px);\n  border: var(--dialog-border, var(--border));\n  box-shadow: var(--dialog-box-shadow, var(--box-shadow));\n  transform: translate(0, 0) scale(1);\n  transition: transform 0.2s ease-in-out;\n}\n\n\n\n.dialog__header {\n  display: flex;\n  gap: 4px;\n  justify-content: space-between;\n  font-weight: var(--dialog-header-weight, 600);\n  margin: 0;\n}\n.dialog__title {\n  align-self: center;\n  width: var(--form-width, 272px);\n}\n\n@media (max-width: 600px) {\n  .dialog__title {\n    width: auto;\n  }\n}\n\n.dialog__position:has(.editor) .dialog__title {\n  width: auto;\n}\n\n\n.brand-link {\n  display: inline-flex;\n}\n.brand-link:focus-visible {\n  outline: var(--outline);\n}\n\n\n.form {\n  display: flex;\n  overflow: auto;\n  flex-direction: row;\n  gap: 16px;\n  flex: 1 0;\n}\n\n.form fieldset {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n\n.form__right {\n  flex: 0 0 auto;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  width: var(--form-width, 100%);\n}\n\n.dialog__position:has(.editor) .form__right {\n  width: var(--form-width, 272px);\n}\n\n.form__top {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.form__error-container {\n  color: var(--error-color);\n  fill: var(--error-color);\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  font-family: inherit;\n  line-height: inherit;\n  background: transparent;\n  box-sizing: border-box;\n  border: var(--input-border, var(--border));\n  border-radius: var(--input-border-radius, 6px);\n  color: var(--input-color, inherit);\n  fill: var(--input-color, inherit);\n  font-size: var(--input-font-size, inherit);\n  font-weight: var(--input-font-weight, 500);\n  padding: 6px 12px;\n}\n\n.form__input::placeholder {\n  opacity: 0.65;\n  color: var(--input-placeholder-color, inherit);\n  filter: var(--interactive-filter);\n}\n\n.form__input:focus-visible {\n  outline: var(--input-focus-outline, var(--outline));\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.error {\n  color: var(--error-color);\n  fill: var(--error-color);\n}\n\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--button-font-size, inherit);\n  font-weight: var(--button-font-weight, 600);\n  padding: var(--button-padding, 6px 16px);\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  color: var(--button-primary-color, var(--accent-foreground));\n  fill: var(--button-primary-color, var(--accent-foreground));\n  background: var(--button-primary-background, var(--accent-background));\n  border: var(--button-primary-border, var(--border));\n  border-radius: var(--button-primary-border-radius, 6px);\n  font-weight: var(--button-primary-font-weight, 500);\n}\n.btn--primary:hover {\n  color: var(--button-primary-hover-color, var(--accent-foreground));\n  fill: var(--button-primary-hover-color, var(--accent-foreground));\n  background: var(--button-primary-hover-background, var(--accent-background));\n  filter: var(--interactive-filter);\n}\n.btn--primary:focus-visible {\n  background: var(--button-primary-hover-background, var(--accent-background));\n  filter: var(--interactive-filter);\n  outline: var(--button-primary-focus-outline, var(--outline));\n}\n\n.btn--default {\n  color: var(--button-color, var(--foreground));\n  fill: var(--button-color, var(--foreground));\n  background: var(--button-background, var(--background));\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  font-weight: var(--button-font-weight, 500);\n}\n.btn--default:hover {\n  color: var(--button-color, var(--foreground));\n  fill: var(--button-color, var(--foreground));\n  background: var(--button-hover-background, var(--background));\n  filter: var(--interactive-filter);\n}\n.btn--default:focus-visible {\n  background: var(--button-hover-background, var(--background));\n  filter: var(--interactive-filter);\n  outline: var(--button-focus-outline, var(--outline));\n}\n\n\n.success__position {\n  position: fixed;\n  inset: var(--dialog-inset);\n  padding: var(--page-margin);\n  z-index: var(--z-index);\n}\n.success__content {\n  background: var(--success-background, var(--background));\n  border: var(--success-border, var(--border));\n  border-radius: var(--success-border-radius, 1.7em/50%);\n  box-shadow: var(--success-box-shadow, var(--box-shadow));\n  font-weight: var(--success-font-weight, 600);\n  color: var(--success-color);\n  fill: var(--success-color);\n  padding: 12px 24px;\n  line-height: 1.75em;\n\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success__icon {\n  display: flex;\n}\n\n"),
            e && t.setAttribute("nonce", e),
            t
          );
        })(e.styleNonce);
      let d = "";
      const p = {
          get el() {
            return c;
          },
          appendToDom() {
            a.contains(u) ||
              a.contains(c) ||
              (a.appendChild(u), a.appendChild(c));
          },
          removeFromDom() {
            c.remove(), u.remove(), (i.body.style.overflow = d);
          },
          open() {
            h(!0),
              e.onFormOpen?.(),
              r.getClient()?.emit("openFeedbackWidget"),
              (d = i.body.style.overflow),
              (i.body.style.overflow = "hidden");
          },
          close() {
            h(!1), (i.body.style.overflow = d);
          },
        },
        f = t?.createInput({
          h: F,
          hooks: Pe,
          dialog: p,
          options: e,
        }),
        h = (t) => {
          !(function (e, t) {
            var n, r, o;
            k.__ && k.__(e, t),
              (n = t.__k),
              (r = []),
              (o = []),
              ee(
                t,
                (e = t.__k = F(B, null, [e])),
                n || M,
                M,
                void 0 !== t.ownerSVGElement,
                n ? null : t.firstChild ? T.call(t.childNodes) : null,
                r,
                n ? n.__e : t.firstChild,
                !1,
                o,
              ),
              (e.__d = void 0),
              te(r, e, o);
          })(
            F(Be, {
              options: e,
              screenshotInput: f,
              showName: e.showName || e.isNameRequired,
              showEmail: e.showEmail || e.isEmailRequired,
              defaultName: String((s && l?.[s.name]) || ""),
              defaultEmail: String((s && l?.[s.email]) || ""),
              onFormClose: () => {
                h(!1), e.onFormClose?.();
              },
              onSubmit: n,
              onSubmitSuccess: (t, n) => {
                h(!1), e.onSubmitSuccess?.(t, n);
              },
              onSubmitError: (t) => {
                e.onSubmitError?.(t);
              },
              onFormSubmitted: () => {
                e.onFormSubmitted?.();
              },
              open: t,
            }),
            c,
          );
        };
      return p;
    },
  })),
  (t.feedbackScreenshotIntegration = () => ({
    name: "FeedbackScreenshot",
    setupOnce() {},
    createInput: ({ h: e, hooks: t, dialog: n, options: r }) => {
      const o = i.createElement("canvas");
      return {
        input: Ge({
          h: e,
          hooks: t,
          outputBuffer: o,
          dialog: n,
          options: r,
        }),
        value: async () => {
          const e = await new Promise((e) => {
            o.toBlob(e, "image/png");
          });
          if (e)
            return {
              data: new Uint8Array(await e.arrayBuffer()),
              filename: "screenshot.png",
              contentType: "application/png",
            };
        },
      };
    },
  })),
  (t.getFeedback = function () {
    const e = r.getClient();
    return e?.getIntegrationByName("Feedback");
  }),
  (t.sendFeedback = g);
