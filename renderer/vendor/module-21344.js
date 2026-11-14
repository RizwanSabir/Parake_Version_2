// vendor/module-21344.js — webpack module 21344
// params: (e, t, n) = (module, exports, require)
var r,
  o = Object.create,
  i = Object.defineProperty,
  a = Object.getOwnPropertyDescriptor,
  s = Object.getOwnPropertyNames,
  l = Object.getPrototypeOf,
  c = Object.prototype.hasOwnProperty,
  u = (e, t, n, r) => {
    if ((t && "object" == typeof t) || "function" == typeof t)
      for (let o of s(t))
        !c.call(e, o) &&
          o !== n &&
          i(e, o, {
            get: () => t[o],
            enumerable: !(r = a(t, o)) || r.enumerable,
          });
    return e;
  },
  d = (e, t, n) => (
    (n = null != e ? o(l(e)) : {}),
    u(
      !t && e && e.__esModule
        ? n
        : i(n, "default", { value: e, enumerable: !0 }),
      e,
    )
  ),
  p = {};
((e, t) => {
  for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
})(p, {
  Command: () => $,
  CommandDialog: () => q,
  CommandEmpty: () => G,
  CommandGroup: () => B,
  CommandInput: () => H,
  CommandItem: () => U,
  CommandList: () => V,
  CommandLoading: () => W,
  CommandRoot: () => F,
  CommandSeparator: () => z,
  defaultFilter: () => M,
  useCommandState: () => X,
}),
  (e.exports = ((r = p), u(i({}, "__esModule", { value: !0 }), r)));
var f = d(n(55361 /* app/components/close */)),
  h = d(n(14041 /* vendor/module-14041 */)),
  m = 0.999,
  g = /[\\\/_+.#"@\[\(\{&]/,
  y = /[\\\/_+.#"@\[\(\{&]/g,
  v = /[\s-]/,
  b = /[\s-]/g;
function S(e, t, n, r, o, i, a) {
  if (i === t.length) return o === e.length ? 1 : 0.99;
  var s = `${o},${i}`;
  if (void 0 !== a[s]) return a[s];
  for (var l, c, u, d, p = r.charAt(i), f = n.indexOf(p, o), h = 0; f >= 0; )
    (l = S(e, t, n, r, f + 1, i + 1, a)) > h &&
      (f === o
        ? (l *= 1)
        : g.test(e.charAt(f - 1))
          ? ((l *= 0.8),
            (u = e.slice(o, f - 1).match(y)) &&
              o > 0 &&
              (l *= Math.pow(m, u.length)))
          : v.test(e.charAt(f - 1))
            ? ((l *= 0.9),
              (d = e.slice(o, f - 1).match(b)) &&
                o > 0 &&
                (l *= Math.pow(m, d.length)))
            : ((l *= 0.17), o > 0 && (l *= Math.pow(m, f - o))),
      e.charAt(f) !== t.charAt(i) && (l *= 0.9999)),
      ((l < 0.1 && n.charAt(f - 1) === r.charAt(i + 1)) ||
        (r.charAt(i + 1) === r.charAt(i) && n.charAt(f - 1) !== r.charAt(i))) &&
        0.1 * (c = S(e, t, n, r, f + 1, i + 2, a)) > l &&
        (l = 0.1 * c),
      l > h && (h = l),
      (f = n.indexOf(p, f + 1));
  return (a[s] = h), h;
}
function _(e) {
  return e.toLowerCase().replace(b, " ");
}
function x(e, t, n) {
  return S(
    (e = n && n.length > 0 ? e + " " + n.join(" ") : e),
    t,
    _(e),
    _(t),
    0,
    0,
    {},
  );
}
var w = n(76018 /* vendor/module-76018 */),
  E = n(86838 /* vendor/module-86838 */),
  T = n(95046 /* vendor/module-95046 */),
  k = '[cmdk-group=""]',
  C = '[cmdk-group-items=""]',
  I = '[cmdk-item=""]',
  A = `${I}:not([aria-disabled="true"])`,
  O = "cmdk-item-select",
  R = "data-value",
  M = (e, t, n) => x(e, t, n),
  P = h.createContext(void 0),
  N = () => h.useContext(P),
  D = h.createContext(void 0),
  j = () => h.useContext(D),
  L = h.createContext(void 0),
  F = h.forwardRef((e, t) => {
    let n = J(() => {
        var t, n;
        return {
          search: "",
          value:
            null != (n = null != (t = e.value) ? t : e.defaultValue) ? n : "",
          selectedItemId: void 0,
          filtered: { count: 0, items: new Map(), groups: new Set() },
        };
      }),
      r = J(() => new Set()),
      o = J(() => new Map()),
      i = J(() => new Map()),
      a = J(() => new Set()),
      s = Z(e),
      {
        label: l,
        children: c,
        value: u,
        onValueChange: d,
        filter: p,
        shouldFilter: f,
        loop: m,
        disablePointerSelection: g = !1,
        vimBindings: y = !0,
        ...v
      } = e,
      b = (0, E.useId)(),
      S = (0, E.useId)(),
      _ = (0, E.useId)(),
      x = h.useRef(null),
      T = te();
    Q(() => {
      if (void 0 !== u) {
        let e = u.trim();
        (n.current.value = e), N.emit();
      }
    }, [u]),
      Q(() => {
        T(6, z);
      }, []);
    let N = h.useMemo(
        () => ({
          subscribe: (e) => (a.current.add(e), () => a.current.delete(e)),
          snapshot: () => n.current,
          setState: (e, t, r) => {
            var o, i, a, l;
            if (!Object.is(n.current[e], t)) {
              if (((n.current[e] = t), "search" === e)) B(), F(), T(1, U);
              else if ("value" === e) {
                if (
                  document.activeElement.hasAttribute("cmdk-input") ||
                  document.activeElement.hasAttribute("cmdk-root")
                ) {
                  let e = document.getElementById(_);
                  e
                    ? e.focus()
                    : null == (o = document.getElementById(b)) || o.focus();
                }
                if (
                  (T(7, () => {
                    var e;
                    (n.current.selectedItemId =
                      null == (e = H()) ? void 0 : e.id),
                      N.emit();
                  }),
                  r || T(5, z),
                  void 0 !== (null == (i = s.current) ? void 0 : i.value))
                ) {
                  let e = null != t ? t : "";
                  return void (
                    null == (l = (a = s.current).onValueChange) || l.call(a, e)
                  );
                }
              }
              N.emit();
            }
          },
          emit: () => {
            a.current.forEach((e) => e());
          },
        }),
        [],
      ),
      j = h.useMemo(
        () => ({
          value: (e, t, r) => {
            var o;
            t !== (null == (o = i.current.get(e)) ? void 0 : o.value) &&
              (i.current.set(e, { value: t, keywords: r }),
              n.current.filtered.items.set(e, L(t, r)),
              T(2, () => {
                F(), N.emit();
              }));
          },
          item: (e, t) => (
            r.current.add(e),
            t &&
              (o.current.has(t)
                ? o.current.get(t).add(e)
                : o.current.set(t, new Set([e]))),
            T(3, () => {
              B(), F(), n.current.value || U(), N.emit();
            }),
            () => {
              i.current.delete(e),
                r.current.delete(e),
                n.current.filtered.items.delete(e);
              let t = H();
              T(4, () => {
                B(),
                  (null == t ? void 0 : t.getAttribute("id")) === e && U(),
                  N.emit();
              });
            }
          ),
          group: (e) => (
            o.current.has(e) || o.current.set(e, new Set()),
            () => {
              i.current.delete(e), o.current.delete(e);
            }
          ),
          filter: () => s.current.shouldFilter,
          label: l || e["aria-label"],
          getDisablePointerSelection: () => s.current.disablePointerSelection,
          listId: b,
          inputId: _,
          labelId: S,
          listInnerRef: x,
        }),
        [],
      );
    function L(e, t) {
      var r, o;
      let i = null != (o = null == (r = s.current) ? void 0 : r.filter) ? o : M;
      return e ? i(e, n.current.search, t) : 0;
    }
    function F() {
      if (!n.current.search || !1 === s.current.shouldFilter) return;
      let e = n.current.filtered.items,
        t = [];
      n.current.filtered.groups.forEach((n) => {
        let r = o.current.get(n),
          i = 0;
        r.forEach((t) => {
          let n = e.get(t);
          i = Math.max(n, i);
        }),
          t.push([n, i]);
      });
      let r = x.current;
      V()
        .sort((t, n) => {
          var r, o;
          let i = t.getAttribute("id"),
            a = n.getAttribute("id");
          return (
            (null != (r = e.get(a)) ? r : 0) - (null != (o = e.get(i)) ? o : 0)
          );
        })
        .forEach((e) => {
          let t = e.closest(C);
          t
            ? t.appendChild(e.parentElement === t ? e : e.closest(`${C} > *`))
            : r.appendChild(e.parentElement === r ? e : e.closest(`${C} > *`));
        }),
        t
          .sort((e, t) => t[1] - e[1])
          .forEach((e) => {
            var t;
            let n =
              null == (t = x.current)
                ? void 0
                : t.querySelector(`${k}[${R}="${encodeURIComponent(e[0])}"]`);
            null == n || n.parentElement.appendChild(n);
          });
    }
    function U() {
      let e = V().find((e) => "true" !== e.getAttribute("aria-disabled")),
        t = null == e ? void 0 : e.getAttribute(R);
      N.setState("value", t || void 0);
    }
    function B() {
      var e, t, a, l;
      if (!n.current.search || !1 === s.current.shouldFilter)
        return void (n.current.filtered.count = r.current.size);
      n.current.filtered.groups = new Set();
      let c = 0;
      for (let o of r.current) {
        let r = L(
          null != (t = null == (e = i.current.get(o)) ? void 0 : e.value)
            ? t
            : "",
          null != (l = null == (a = i.current.get(o)) ? void 0 : a.keywords)
            ? l
            : [],
        );
        n.current.filtered.items.set(o, r), r > 0 && c++;
      }
      for (let [e, t] of o.current)
        for (let r of t)
          if (n.current.filtered.items.get(r) > 0) {
            n.current.filtered.groups.add(e);
            break;
          }
      n.current.filtered.count = c;
    }
    function z() {
      var e, t, n;
      let r = H();
      r &&
        ((null == (e = r.parentElement) ? void 0 : e.firstChild) === r &&
          (null ==
            (n =
              null == (t = r.closest(k))
                ? void 0
                : t.querySelector('[cmdk-group-heading=""]')) ||
            n.scrollIntoView({ block: "nearest" })),
        r.scrollIntoView({ block: "nearest" }));
    }
    function H() {
      var e;
      return null == (e = x.current)
        ? void 0
        : e.querySelector(`${I}[aria-selected="true"]`);
    }
    function V() {
      var e;
      return Array.from(
        (null == (e = x.current) ? void 0 : e.querySelectorAll(A)) || [],
      );
    }
    function q(e) {
      let t = V()[e];
      t && N.setState("value", t.getAttribute(R));
    }
    function G(e) {
      var t;
      let n = H(),
        r = V(),
        o = r.findIndex((e) => e === n),
        i = r[o + e];
      null != (t = s.current) &&
        t.loop &&
        (i =
          o + e < 0 ? r[r.length - 1] : o + e === r.length ? r[0] : r[o + e]),
        i && N.setState("value", i.getAttribute(R));
    }
    function W(e) {
      let t,
        n = H(),
        r = null == n ? void 0 : n.closest(k);
      for (; r && !t; )
        (r = e > 0 ? Y(r, k) : K(r, k)),
          (t = null == r ? void 0 : r.querySelector(A));
      t ? N.setState("value", t.getAttribute(R)) : G(e);
    }
    let $ = () => q(V().length - 1),
      X = (e) => {
        e.preventDefault(), e.metaKey ? $() : e.altKey ? W(1) : G(1);
      },
      ee = (e) => {
        e.preventDefault(), e.metaKey ? q(0) : e.altKey ? W(-1) : G(-1);
      };
    return h.createElement(
      w.Primitive.div,
      {
        ref: t,
        tabIndex: -1,
        ...v,
        "cmdk-root": "",
        onKeyDown: (e) => {
          var t;
          null == (t = v.onKeyDown) || t.call(v, e);
          let n = e.nativeEvent.isComposing || 229 === e.keyCode;
          if (!e.defaultPrevented && !n)
            switch (e.key) {
              case "n":
              case "j":
                y && e.ctrlKey && X(e);
                break;
              case "ArrowDown":
                X(e);
                break;
              case "p":
              case "k":
                y && e.ctrlKey && ee(e);
                break;
              case "ArrowUp":
                ee(e);
                break;
              case "Home":
                e.preventDefault(), q(0);
                break;
              case "End":
                e.preventDefault(), $();
                break;
              case "Enter": {
                e.preventDefault();
                let t = H();
                if (t) {
                  let e = new Event(O);
                  t.dispatchEvent(e);
                }
              }
            }
        },
      },
      h.createElement(
        "label",
        {
          "cmdk-label": "",
          htmlFor: j.inputId,
          id: j.labelId,
          style: re,
        },
        l,
      ),
      ne(e, (e) =>
        h.createElement(
          D.Provider,
          { value: N },
          h.createElement(P.Provider, { value: j }, e),
        ),
      ),
    );
  }),
  U = h.forwardRef((e, t) => {
    var n, r;
    let o = (0, E.useId)(),
      i = h.useRef(null),
      a = h.useContext(L),
      s = N(),
      l = Z(e),
      c =
        null != (r = null == (n = l.current) ? void 0 : n.forceMount)
          ? r
          : null == a
            ? void 0
            : a.forceMount;
    Q(() => {
      if (!c) return s.item(o, null == a ? void 0 : a.id);
    }, [c]);
    let u = ee(o, i, [e.value, e.children, i], e.keywords),
      d = j(),
      p = X((e) => e.value && e.value === u.current),
      f = X(
        (e) =>
          !(!c && !1 !== s.filter()) ||
          !e.search ||
          e.filtered.items.get(o) > 0,
      );
    function m() {
      var e, t;
      g(), null == (t = (e = l.current).onSelect) || t.call(e, u.current);
    }
    function g() {
      d.setState("value", u.current, !0);
    }
    if (
      (h.useEffect(() => {
        let t = i.current;
        if (t && !e.disabled)
          return t.addEventListener(O, m), () => t.removeEventListener(O, m);
      }, [f, e.onSelect, e.disabled]),
      !f)
    )
      return null;
    let {
      disabled: y,
      value: v,
      onSelect: b,
      forceMount: S,
      keywords: _,
      ...x
    } = e;
    return h.createElement(
      w.Primitive.div,
      {
        ref: (0, T.composeRefs)(i, t),
        ...x,
        id: o,
        "cmdk-item": "",
        role: "option",
        "aria-disabled": !!y,
        "aria-selected": !!p,
        "data-disabled": !!y,
        "data-selected": !!p,
        onPointerMove: y || s.getDisablePointerSelection() ? void 0 : g,
        onClick: y ? void 0 : m,
      },
      e.children,
    );
  }),
  B = h.forwardRef((e, t) => {
    let { heading: n, children: r, forceMount: o, ...i } = e,
      a = (0, E.useId)(),
      s = h.useRef(null),
      l = h.useRef(null),
      c = (0, E.useId)(),
      u = N(),
      d = X(
        (e) =>
          !(!o && !1 !== u.filter()) || !e.search || e.filtered.groups.has(a),
      );
    Q(() => u.group(a), []), ee(a, s, [e.value, e.heading, l]);
    let p = h.useMemo(() => ({ id: a, forceMount: o }), [o]);
    return h.createElement(
      w.Primitive.div,
      {
        ref: (0, T.composeRefs)(s, t),
        ...i,
        "cmdk-group": "",
        role: "presentation",
        hidden: !d || void 0,
      },
      n &&
        h.createElement(
          "div",
          {
            ref: l,
            "cmdk-group-heading": "",
            "aria-hidden": !0,
            id: c,
          },
          n,
        ),
      ne(e, (e) =>
        h.createElement(
          "div",
          {
            "cmdk-group-items": "",
            role: "group",
            "aria-labelledby": n ? c : void 0,
          },
          h.createElement(L.Provider, { value: p }, e),
        ),
      ),
    );
  }),
  z = h.forwardRef((e, t) => {
    let { alwaysRender: n, ...r } = e,
      o = h.useRef(null),
      i = X((e) => !e.search);
    return n || i
      ? h.createElement(w.Primitive.div, {
          ref: (0, T.composeRefs)(o, t),
          ...r,
          "cmdk-separator": "",
          role: "separator",
        })
      : null;
  }),
  H = h.forwardRef((e, t) => {
    let { onValueChange: n, ...r } = e,
      o = null != e.value,
      i = j(),
      a = X((e) => e.search),
      s = X((e) => e.selectedItemId),
      l = N();
    return (
      h.useEffect(() => {
        null != e.value && i.setState("search", e.value);
      }, [e.value]),
      h.createElement(w.Primitive.input, {
        ref: t,
        ...r,
        "cmdk-input": "",
        autoComplete: "off",
        autoCorrect: "off",
        spellCheck: !1,
        "aria-autocomplete": "list",
        role: "combobox",
        "aria-expanded": !0,
        "aria-controls": l.listId,
        "aria-labelledby": l.labelId,
        "aria-activedescendant": s,
        id: l.inputId,
        type: "text",
        value: o ? e.value : a,
        onChange: (e) => {
          o || i.setState("search", e.target.value),
            null == n || n(e.target.value);
        },
      })
    );
  }),
  V = h.forwardRef((e, t) => {
    let { children: n, label: r = "Suggestions", ...o } = e,
      i = h.useRef(null),
      a = h.useRef(null),
      s = X((e) => e.selectedItemId),
      l = N();
    return (
      h.useEffect(() => {
        if (a.current && i.current) {
          let e,
            t = a.current,
            n = i.current,
            r = new ResizeObserver(() => {
              e = requestAnimationFrame(() => {
                let e = t.offsetHeight;
                n.style.setProperty("--cmdk-list-height", e.toFixed(1) + "px");
              });
            });
          return (
            r.observe(t),
            () => {
              cancelAnimationFrame(e), r.unobserve(t);
            }
          );
        }
      }, []),
      h.createElement(
        w.Primitive.div,
        {
          ref: (0, T.composeRefs)(i, t),
          ...o,
          "cmdk-list": "",
          role: "listbox",
          tabIndex: -1,
          "aria-activedescendant": s,
          "aria-label": r,
          id: l.listId,
        },
        ne(e, (e) =>
          h.createElement(
            "div",
            {
              ref: (0, T.composeRefs)(a, l.listInnerRef),
              "cmdk-list-sizer": "",
            },
            e,
          ),
        ),
      )
    );
  }),
  q = h.forwardRef((e, t) => {
    let {
      open: n,
      onOpenChange: r,
      overlayClassName: o,
      contentClassName: i,
      container: a,
      ...s
    } = e;
    return h.createElement(
      f.Root,
      { open: n, onOpenChange: r },
      h.createElement(
        f.Portal,
        { container: a },
        h.createElement(f.Overlay, {
          "cmdk-overlay": "",
          className: o,
        }),
        h.createElement(
          f.Content,
          { "aria-label": e.label, "cmdk-dialog": "", className: i },
          h.createElement(F, { ref: t, ...s }),
        ),
      ),
    );
  }),
  G = h.forwardRef((e, t) =>
    X((e) => 0 === e.filtered.count)
      ? h.createElement(w.Primitive.div, {
          ref: t,
          ...e,
          "cmdk-empty": "",
          role: "presentation",
        })
      : null,
  ),
  W = h.forwardRef((e, t) => {
    let { progress: n, children: r, label: o = "Loading...", ...i } = e;
    return h.createElement(
      w.Primitive.div,
      {
        ref: t,
        ...i,
        "cmdk-loading": "",
        role: "progressbar",
        "aria-valuenow": n,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": o,
      },
      ne(e, (e) => h.createElement("div", { "aria-hidden": !0 }, e)),
    );
  }),
  $ = Object.assign(F, {
    List: V,
    Item: U,
    Input: H,
    Group: B,
    Separator: z,
    Dialog: q,
    Empty: G,
    Loading: W,
  });
function Y(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function K(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Z(e) {
  let t = h.useRef(e);
  return (
    Q(() => {
      t.current = e;
    }),
    t
  );
}
var Q = "undefined" == typeof window ? h.useEffect : h.useLayoutEffect;
function J(e) {
  let t = h.useRef();
  return void 0 === t.current && (t.current = e()), t;
}
function X(e) {
  let t = j(),
    n = () => e(t.snapshot());
  return h.useSyncExternalStore(t.subscribe, n, n);
}
function ee(e, t, n, r = []) {
  let o = h.useRef(),
    i = N();
  return (
    Q(() => {
      var a;
      let s = (() => {
          var e;
          for (let t of n) {
            if ("string" == typeof t) return t.trim();
            if ("object" == typeof t && "current" in t)
              return t.current
                ? null == (e = t.current.textContent)
                  ? void 0
                  : e.trim()
                : o.current;
          }
        })(),
        l = r.map((e) => e.trim());
      i.value(e, s, l),
        null == (a = t.current) || a.setAttribute(R, s),
        (o.current = s);
    }),
    o
  );
}
var te = () => {
  let [e, t] = h.useState(),
    n = J(() => new Map());
  return (
    Q(() => {
      n.current.forEach((e) => e()), (n.current = new Map());
    }, [e]),
    (e, r) => {
      n.current.set(e, r), t({});
    }
  );
};
function ne({ asChild: e, children: t }, n) {
  return e && h.isValidElement(t)
    ? h.cloneElement(
        (function (e) {
          let t = e.type;
          return "function" == typeof t
            ? t(e.props)
            : "render" in t
              ? t.render(e.props)
              : e;
        })(t),
        { ref: t.ref },
        n(t.props.children),
      )
    : n(t);
}
var re = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
};
