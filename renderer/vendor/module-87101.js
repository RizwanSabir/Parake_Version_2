// vendor/module-87101.js — webpack module 87101
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { default: () => Sr });
var i = r(56496 /* vendor/module-56496 */),
  o = r(84666 /* vendor/module-84666 */),
  n = r(46675 /* vendor/module-46675 */),
  a =
    (r(50475 /* vendor/module-50475 */),
    r(42349 /* vendor/module-42349 */),
    r(4301 /* vendor/module-4301 */),
    r(99624 /* vendor/module-99624 */),
    r(16450 /* vendor/module-16450 */),
    r(83035 /* vendor/module-83035 */),
    r(27741 /* vendor/module-27741 */),
    r(50320 /* vendor/module-50320 */)),
  s = (r(33870 /* vendor/module-33870 */), r(72514 /* vendor/module-72514 */)),
  l = r(8679 /* vendor/module-8679 */),
  h = r(27166 /* vendor/module-27166 */),
  c = r(79456 /* vendor/module-79456 */),
  d = r(60115 /* vendor/module-60115 */),
  u = r(27197 /* vendor/module-27197 */),
  p = "comm",
  g = "rule",
  f = "decl",
  y = "@keyframes",
  m = "@layer",
  x = Math.abs,
  C = String.fromCharCode;
function b(t) {
  return t.trim();
}
function k(t, e, r) {
  return t.replace(e, r);
}
function w(t, e) {
  return 0 | t.charCodeAt(e);
}
function S(t, e, r) {
  return t.slice(e, r);
}
function T(t) {
  return t.length;
}
function B(t) {
  return t.length;
}
function v(t, e) {
  return e.push(t), t;
}
function _(t, e) {
  for (var r = "", i = 0; i < t.length; i++) r += e(t[i], i, t, e) || "";
  return r;
}
function A(t, e, r, i) {
  switch (t.type) {
    case m:
      if (t.children.length) break;
    case "@import":
    case "@namespace":
    case f:
      return (t.return = t.return || t.value);
    case p:
      return "";
    case y:
      return (t.return = t.value + "{" + _(t.children, i) + "}");
    case g:
      if (!T((t.value = t.props.join(",")))) return "";
  }
  return T((r = _(t.children, i))) ? (t.return = t.value + "{" + r + "}") : "";
}
Object.assign;
var F = 1,
  L = 1,
  M = 0,
  $ = 0,
  E = 0,
  O = "";
function D(t, e, r, i, o, n, a, s) {
  return {
    value: t,
    root: e,
    parent: r,
    type: i,
    props: o,
    children: n,
    line: F,
    column: L,
    length: a,
    return: "",
    siblings: s,
  };
}
function I() {
  return (E = $ > 0 ? w(O, --$) : 0), L--, 10 === E && ((L = 1), F--), E;
}
function K() {
  return (E = $ < M ? w(O, $++) : 0), L++, 10 === E && ((L = 1), F++), E;
}
function q() {
  return w(O, $);
}
function P() {
  return $;
}
function R(t, e) {
  return S(O, t, e);
}
function z(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function N(t) {
  return b(R($ - 1, H(91 === t ? t + 2 : 40 === t ? t + 1 : t)));
}
function W(t) {
  for (; (E = q()) && E < 33; ) K();
  return z(t) > 2 || z(E) > 3 ? "" : " ";
}
function j(t, e) {
  for (
    ;
    --e &&
    K() &&
    !(E < 48 || E > 102 || (E > 57 && E < 65) || (E > 70 && E < 97));

  );
  return R(t, P() + (e < 6 && 32 == q() && 32 == K()));
}
function H(t) {
  for (; K(); )
    switch (E) {
      case t:
        return $;
      case 34:
      case 39:
        34 !== t && 39 !== t && H(E);
        break;
      case 40:
        41 === t && H(t);
        break;
      case 92:
        K();
    }
  return $;
}
function U(t, e) {
  for (; K() && t + E !== 57 && (t + E !== 84 || 47 !== q()); );
  return "/*" + R(e, $ - 1) + "*" + C(47 === t ? t : K());
}
function Y(t) {
  for (; !z(q()); ) K();
  return R(t, $);
}
function G(t) {
  return (function (t) {
    return (O = ""), t;
  })(
    X(
      "",
      null,
      null,
      null,
      [""],
      (t = (function (t) {
        return (F = L = 1), (M = T((O = t))), ($ = 0), [];
      })(t)),
      0,
      [0],
      t,
    ),
  );
}
function X(t, e, r, i, o, n, a, s, l) {
  for (
    var h = 0,
      c = 0,
      d = a,
      u = 0,
      p = 0,
      g = 0,
      f = 1,
      y = 1,
      m = 1,
      x = 0,
      b = 0,
      B = "",
      _ = o,
      A = n,
      F = i,
      L = B;
    y;

  )
    switch (((g = b), (b = K()))) {
      case 40:
        108 != g && 58 == w(L, d - 1) ? (x++, (L += "(")) : (L += N(b));
        break;
      case 41:
        x--, (L += ")");
        break;
      case 34:
      case 39:
      case 91:
        L += N(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        if (x > 0) {
          L += C(b);
          break;
        }
        L += W(g);
        break;
      case 92:
        L += j(P() - 1, 7);
        continue;
      case 47:
        switch (q()) {
          case 42:
          case 47:
            v(Z(U(K(), P()), e, r, l), l),
              (5 != z(g || 1) && 5 != z(q() || 1)) ||
                !T(L) ||
                " " === S(L, -1, void 0) ||
                (L += " ");
            break;
          default:
            L += "/";
        }
        break;
      case 123 * f:
        s[h++] = T(L) * m;
      case 125 * f:
      case 59:
      case 0:
        if (x > 0 && b) {
          L += C(b);
          break;
        }
        switch (b) {
          case 0:
          case 125:
            y = 0;
          case 59 + c:
            -1 == m && (L = k(L, /\f/g, "")),
              p > 0 &&
                (T(L) - d || 0 === f) &&
                v(
                  p > 32
                    ? Q(L + ";", i, r, d - 1, l)
                    : Q(k(L, " ", "") + ";", i, r, d - 2, l),
                  l,
                );
            break;
          case 59:
            L += ";";
          default:
            if (
              (v((F = V(L, e, r, h, c, o, s, B, (_ = []), (A = []), d, n)), n),
              123 === b)
            )
              if (0 === c) X(L, e, F, F, _, n, d, s, A);
              else {
                switch (u) {
                  case 99:
                    if (110 === w(L, 3)) break;
                  case 108:
                    if (97 === w(L, 2)) break;
                  default:
                    c = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                c
                  ? X(
                      t,
                      F,
                      F,
                      i && v(V(t, F, F, 0, 0, o, s, B, o, (_ = []), d, A), A),
                      o,
                      A,
                      d,
                      s,
                      i ? _ : A,
                    )
                  : X(L, F, F, F, [""], A, 0, s, A);
              }
        }
        (h = c = p = 0), (f = m = 1), (B = L = ""), (d = a);
        break;
      case 58:
        (d = 1 + T(L)), (p = g);
      default:
        if (f < 1)
          if (123 == b) --f;
          else if (125 == b && 0 == f++ && 125 == I()) continue;
        switch (((L += C(b)), b * f)) {
          case 38:
            m = c > 0 ? 1 : ((L += "\f"), -1);
            break;
          case 44:
            if (x > 0) break;
            (s[h++] = (T(L) - 1) * m), (m = 1);
            break;
          case 64:
            45 === q() && (L += N(K())),
              (u = q()),
              (c = d = T((B = L += Y(P())))),
              b++;
            break;
          case 45:
            45 === g && 2 == T(L) && (f = 0);
        }
    }
  return n;
}
function V(t, e, r, i, o, n, a, s, l, h, c, d) {
  for (
    var u = o - 1, p = 0 === o ? n : [""], f = B(p), y = 0, m = 0, C = 0;
    y < i;
    ++y
  )
    for (var w = 0, T = S(t, u + 1, (u = x((m = a[y])))), v = t; w < f; ++w)
      (v = b(m > 0 ? p[w] + " " + T : k(T, /&\f/g, p[w]))) && (l[C++] = v);
  return D(t, e, r, 0 === o ? g : s, l, h, c, d);
}
function Z(t, e, r, i) {
  return D(t, e, r, p, C(E), S(t, 2, -2), 0, i);
}
function Q(t, e, r, i, o) {
  return D(t, e, r, f, S(t, 0, i), S(t, i + 1, -1), i, o);
}
var J = r(97519 /* vendor/module-97519 */),
  tt = r(721 /* vendor/module-721 */),
  et = r(8081 /* vendor/module-8081 */),
  rt = r(52578 /* vendor/module-52578 */),
  it = r(76076 /* vendor/module-76076 */);
function ot(t) {
  if (null == t) return !0;
  if ((0, et.X)(t))
    return (
      !!(
        "function" == typeof t.splice ||
        "string" == typeof t ||
        (0, tt.P)(t) ||
        (0, it.i)(t) ||
        (0, rt.N)(t)
      ) && 0 === t.length
    );
  if ("object" == typeof t) {
    if (t instanceof Map || t instanceof Set) return 0 === t.size;
    const e = Object.keys(t);
    return (function (t) {
      const e = t?.constructor;
      return t === ("function" == typeof e ? e.prototype : Object.prototype);
    })(t)
      ? 0 === e.filter((t) => "constructor" !== t).length
      : 0 === e.length;
  }
  return !0;
}
var nt,
  at = {
    id: "c4",
    detector: (0, c.K)(
      (t) =>
        /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t),
      "detector",
    ),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(9477).then(r.bind(r, 9477));
      return { id: "c4", diagram: t };
    }, "loader"),
  },
  st = "flowchart-v2",
  lt = {
    id: st,
    detector: (0, c.K)((t) => /^\s*(graph|flowchart)/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(9034), r.e(2901)]).then(
        r.bind(r, 72901),
      );
      return { id: st, diagram: t };
    }, "loader"),
  },
  ht = "agentflow",
  ct = {
    id: ht,
    detector: (0, c.K)((t) => /^\s*agentflow-beta\b/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(6699).then(r.bind(r, 86699));
      return { id: ht, diagram: t };
    }, "loader"),
  },
  dt = "swimlane",
  ut = {
    id: dt,
    detector: (0, c.K)((t) => /^\s*swimlane-beta\b/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(9034), r.e(1798)]).then(
        r.bind(r, 91798),
      );
      return { id: dt, diagram: t };
    }, "loader"),
  },
  pt = {
    id: "er",
    detector: (0, c.K)((t) => /^\s*erDiagram/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(4587).then(r.bind(r, 84587));
      return { id: "er", diagram: t };
    }, "loader"),
  },
  gt = "gitGraph",
  ft = {
    id: gt,
    detector: (0, c.K)((t) => /^\s*gitGraph/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(3744), r.e(7137)]).then(
        r.bind(r, 27137),
      );
      return { id: gt, diagram: t };
    }, "loader"),
  },
  yt = "gantt",
  mt = {
    id: yt,
    detector: (0, c.K)((t) => /^\s*gantt/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(4477).then(r.bind(r, 34477));
      return { id: yt, diagram: t };
    }, "loader"),
  },
  xt = "info",
  Ct = {
    id: xt,
    detector: (0, c.K)((t) => /^\s*info/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(3744), r.e(8508)]).then(
        r.bind(r, 28508),
      );
      return { id: xt, diagram: t };
    }, "loader"),
  },
  bt = {
    id: "pie",
    detector: (0, c.K)((t) => /^\s*pie/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(3744), r.e(4500)]).then(
        r.bind(r, 44500),
      );
      return { id: "pie", diagram: t };
    }, "loader"),
  },
  kt = "quadrantChart",
  wt = {
    id: kt,
    detector: (0, c.K)((t) => /^\s*quadrantChart/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(1174).then(r.bind(r, 81174));
      return { id: kt, diagram: t };
    }, "loader"),
  },
  St = "xychart",
  Tt = {
    id: St,
    detector: (0, c.K)((t) => /^\s*xychart(-beta)?/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(6935).then(r.bind(r, 26935));
      return { id: St, diagram: t };
    }, "loader"),
  },
  Bt = "requirement",
  vt = {
    id: Bt,
    detector: (0, c.K)((t) => /^\s*requirement(Diagram)?/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(2910).then(r.bind(r, 92910));
      return { id: Bt, diagram: t };
    }, "loader"),
  },
  _t = "sequence",
  At = {
    id: _t,
    detector: (0, c.K)((t) => /^\s*sequenceDiagram/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(9684).then(r.bind(r, 39684));
      return { id: _t, diagram: t };
    }, "loader"),
  },
  Ft = "classDiagram",
  Lt = {
    id: Ft,
    detector: (0, c.K)((t) => /^\s*classDiagram/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(4553).then(r.bind(r, 24553));
      return { id: Ft, diagram: t };
    }, "loader"),
  },
  Mt = "stateDiagram",
  $t = {
    id: Mt,
    detector: (0, c.K)((t) => /^\s*stateDiagram/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(8536).then(r.bind(r, 8536));
      return { id: Mt, diagram: t };
    }, "loader"),
  },
  Et = "journey",
  Ot = {
    id: Et,
    detector: (0, c.K)((t) => /^\s*journey/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(9942).then(r.bind(r, 39942));
      return { id: Et, diagram: t };
    }, "loader"),
  },
  Dt = (0, c.K)((t) => {
    const e = [];
    for (const r of t.split(/\s+/)) {
      let t = [...r];
      for (; t.length > 75; )
        e.push(t.slice(0, 75).join("")), (t = t.slice(75));
      t.length > 0 && e.push(t.join(""));
    }
    const r = [];
    let i = "";
    for (const t of e) {
      const e = i ? `${i} ${t}` : t;
      [...e].length > 75 ? (r.push(i), (i = t)) : (i = e);
    }
    if ((i && r.push(i), r.length > 4)) {
      r.length = 4;
      const t = r[3] ?? "";
      r[3] = `${[...t].slice(0, 72).join("")}...`;
    }
    return r;
  }, "wrapErrorMessage"),
  It = (0, c.K)((t, e, r, o) => {
    h.R.debug("rendering svg for syntax error\n");
    const n = (0, i.D)(e),
      a = n.append("g"),
      s = Dt(o?.db.getErrorMessage?.() ?? ""),
      c = s.length > 0 ? 500 + 56 * s.length : 512;
    n.attr("viewBox", `0 0 2412 ${c}`),
      (0, l.a$)(n, 100, c, !0),
      a
        .append("path")
        .attr("class", "error-icon")
        .attr(
          "d",
          "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z",
        ),
      a
        .append("path")
        .attr("class", "error-icon")
        .attr(
          "d",
          "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z",
        ),
      a
        .append("path")
        .attr("class", "error-icon")
        .attr(
          "d",
          "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z",
        ),
      a
        .append("path")
        .attr("class", "error-icon")
        .attr(
          "d",
          "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z",
        ),
      a
        .append("path")
        .attr("class", "error-icon")
        .attr(
          "d",
          "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z",
        ),
      a
        .append("path")
        .attr("class", "error-icon")
        .attr(
          "d",
          "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z",
        ),
      a
        .append("text")
        .attr("class", "error-text")
        .attr("x", 1440)
        .attr("y", 250)
        .attr("font-size", "150px")
        .style("text-anchor", "middle")
        .text("Syntax error in text"),
      a
        .append("text")
        .attr("class", "error-text")
        .attr("x", 1250)
        .attr("y", 400)
        .attr("font-size", "100px")
        .style("text-anchor", "middle")
        .text(`mermaid version ${r}`),
      s.forEach((t, e) => {
        a.append("text")
          .attr("class", "error-text")
          .attr("x", 1440)
          .attr("y", 510 + 56 * e)
          .attr("font-size", "42px")
          .style("text-anchor", "middle")
          .text(t);
      });
  }, "draw"),
  Kt = { draw: It },
  qt = Kt,
  Pt = {
    db: {
      clear() {
        nt = void 0;
      },
      setErrorMessage(t) {
        nt = t;
      },
      getErrorMessage: () => nt,
    },
    renderer: Kt,
    parser: { parse: (0, c.K)(() => {}, "parse") },
  },
  Rt = "flowchart-elk",
  zt = {
    id: Rt,
    detector: (0, c.K)(
      (t, e = {}) => !!/^\s*flowchart-elk/.test(t) && ((e.layout = "elk"), !0),
      "detector",
    ),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(9034), r.e(2901)]).then(
        r.bind(r, 72901),
      );
      return { id: Rt, diagram: t };
    }, "loader"),
  },
  Nt = "timeline",
  Wt = {
    id: Nt,
    detector: (0, c.K)((t) => /^\s*timeline/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(4824).then(r.bind(r, 64824));
      return { id: Nt, diagram: t };
    }, "loader"),
  },
  jt = "mindmap",
  Ht = {
    id: jt,
    detector: (0, c.K)((t) => /^\s*mindmap/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(6320).then(r.bind(r, 6320));
      return { id: jt, diagram: t };
    }, "loader"),
  },
  Ut = "kanban",
  Yt = {
    id: Ut,
    detector: (0, c.K)((t) => /^\s*kanban/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(4008).then(r.bind(r, 24008));
      return { id: Ut, diagram: t };
    }, "loader"),
  },
  Gt = "sankey",
  Xt = {
    id: Gt,
    detector: (0, c.K)((t) => /^\s*sankey(-beta)?/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(4202).then(r.bind(r, 94202));
      return { id: Gt, diagram: t };
    }, "loader"),
  },
  Vt = "packet",
  Zt = {
    id: Vt,
    detector: (0, c.K)((t) => /^\s*packet(-beta)?/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(3744), r.e(6750)]).then(
        r.bind(r, 66750),
      );
      return { id: Vt, diagram: t };
    }, "loader"),
  },
  Qt = "radar",
  Jt = {
    id: Qt,
    detector: (0, c.K)((t) => /^\s*radar-beta/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(3744), r.e(7157)]).then(
        r.bind(r, 99538),
      );
      return { id: Qt, diagram: t };
    }, "loader"),
  },
  te = "block",
  ee = {
    id: te,
    detector: (0, c.K)((t) => /^\s*block(-beta)?/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(8558), r.e(3342)]).then(
        r.bind(r, 63342),
      );
      return { id: te, diagram: t };
    }, "loader"),
  },
  re = "treeView",
  ie = {
    id: re,
    detector: (0, c.K)((t) => /^\s*treeView-beta/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(3744), r.e(3969)]).then(
        r.bind(r, 13969),
      );
      return { id: re, diagram: t };
    }, "loader"),
  },
  oe = "architecture",
  ne = {
    id: oe,
    detector: (0, c.K)((t) => /^\s*architecture/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([
        r.e(3744),
        r.e(8936),
        r.e(9611),
      ]).then(r.bind(r, 79611));
      return { id: oe, diagram: t };
    }, "loader"),
  },
  ae = "eventmodeling",
  se = {
    id: ae,
    detector: (0, c.K)((t) => /^\s*eventmodeling/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(3744), r.e(3057)]).then(
        r.bind(r, 43057),
      );
      return { id: ae, diagram: t };
    }, "loader"),
  },
  le = "ishikawa",
  he = {
    id: le,
    detector: (0, c.K)((t) => /^\s*ishikawa(-beta)?\b/i.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(6584).then(r.bind(r, 26584));
      return { id: le, diagram: t };
    }, "loader"),
  },
  ce = "venn",
  de = {
    id: ce,
    detector: (0, c.K)((t) => /^\s*venn-beta/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(3083).then(r.bind(r, 13083));
      return { id: ce, diagram: t };
    }, "loader"),
  },
  ue = "treemap",
  pe = {
    id: ue,
    detector: (0, c.K)((t) => /^\s*treemap/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(3744), r.e(6136)]).then(
        r.bind(r, 86136),
      );
      return { id: ue, diagram: t };
    }, "loader"),
  },
  ge = "usecase",
  fe = {
    id: ge,
    detector: (0, c.K)((t) => /^\s*usecase-beta(?:\s|$)/.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await r.e(4455).then(r.bind(r, 24455));
      return { id: ge, diagram: t };
    }, "loader"),
  },
  ye = "wardley",
  me = {
    id: ye,
    detector: (0, c.K)((t) => /^\s*wardley-beta/i.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(3744), r.e(9426)]).then(
        r.bind(r, 89426),
      );
      return { id: ye, diagram: t };
    }, "loader"),
  },
  xe = "cynefin",
  Ce = {
    id: xe,
    detector: (0, c.K)(
      (t) => /^\s*cynefin-beta(?:[\s:]|$)/.test(t),
      "detector",
    ),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([r.e(3744), r.e(588)]).then(
        r.bind(r, 60588),
      );
      return { id: xe, diagram: t };
    }, "loader"),
  },
  be = "railroad",
  ke = {
    id: be,
    detector: (0, c.K)((t) => /^\s*railroad-beta/i.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([
        r.e(3744),
        r.e(9174),
        r.e(2051),
      ]).then(r.bind(r, 42051));
      return { id: be, diagram: t };
    }, "loader"),
  },
  we = "railroadEbnf",
  Se = {
    id: we,
    detector: (0, c.K)((t) => /^\s*railroad-ebnf-beta/i.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([
        r.e(3744),
        r.e(9174),
        r.e(330),
      ]).then(r.bind(r, 30330));
      return { id: we, diagram: t };
    }, "loader"),
  },
  Te = "railroadAbnf",
  Be = {
    id: Te,
    detector: (0, c.K)((t) => /^\s*railroad-abnf-beta/i.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([
        r.e(3744),
        r.e(9174),
        r.e(8675),
      ]).then(r.bind(r, 68675));
      return { id: Te, diagram: t };
    }, "loader"),
  },
  ve = "railroadPeg",
  _e = {
    id: ve,
    detector: (0, c.K)((t) => /^\s*railroad-peg-beta/i.test(t), "detector"),
    loader: (0, c.K)(async () => {
      const { diagram: t } = await Promise.all([
        r.e(3744),
        r.e(9174),
        r.e(3650),
      ]).then(r.bind(r, 63650));
      return { id: ve, diagram: t };
    }, "loader"),
  },
  Ae = !1,
  Fe = (0, c.K)(() => {
    Ae ||
      ((Ae = !0),
      (0, l.Js)("error", Pt, (t) => "error" === t.toLowerCase().trim()),
      (0, l.Js)(
        "---",
        {
          db: { clear: (0, c.K)(() => {}, "clear") },
          styles: {},
          renderer: { draw: (0, c.K)(() => {}, "draw") },
          parser: {
            parse: (0, c.K)(() => {
              throw new Error(
                "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks",
              );
            }, "parse"),
          },
          init: (0, c.K)(() => null, "init"),
        },
        (t) => t.toLowerCase().trimStart().startsWith("---"),
      ),
      (0, l.Xd)(zt, Ht, ne),
      (0, l.Xd)(
        ct,
        at,
        Yt,
        Lt,
        pt,
        mt,
        Ct,
        bt,
        vt,
        At,
        ut,
        lt,
        Wt,
        ft,
        $t,
        Ot,
        wt,
        Xt,
        Zt,
        Tt,
        ee,
        se,
        ie,
        Jt,
        he,
        pe,
        ke,
        Se,
        Be,
        _e,
        de,
        me,
        Ce,
        fe,
      ));
  }, "addDiagrams"),
  Le = (0, c.K)(async () => {
    h.R.debug("Loading registered diagrams");
    const t = (
      await Promise.allSettled(
        Object.entries(l.mW).map(async ([t, { detector: e, loader: r }]) => {
          if (r)
            try {
              (0, l.Gs)(t);
            } catch {
              try {
                const { diagram: t, id: i } = await r();
                (0, l.Js)(i, t, e);
              } catch (e) {
                throw (
                  (h.R.error(
                    `Failed to load external diagram with key ${t}. Removing from detectors.`,
                  ),
                  delete l.mW[t],
                  e)
                );
              }
            }
        }),
      )
    ).filter((t) => "rejected" === t.status);
    if (t.length > 0) {
      h.R.error(`Failed to load ${t.length} external diagrams`);
      for (const e of t) h.R.error(e);
      throw new Error(`Failed to load ${t.length} external diagrams`);
    }
  }, "loadRegisteredDiagrams");
function Me(t, e) {
  t.attr("role", "graphics-document document"),
    "" !== e && t.attr("aria-roledescription", e);
}
function $e(t, e, r, i) {
  if (void 0 !== t.insert) {
    if (r) {
      const e = `chart-desc-${i}`;
      t.attr("aria-describedby", e),
        t.insert("desc", ":first-child").attr("id", e).text(r);
    }
    if (e) {
      const r = `chart-title-${i}`;
      t.attr("aria-labelledby", r),
        t.insert("title", ":first-child").attr("id", r).text(e);
    }
  }
}
(0, c.K)(Me, "setA11yDiagramInfo"), (0, c.K)($e, "addSVGa11yTitleDescription");
var Ee = class t {
    constructor(t, e, r, i, o) {
      (this.type = t),
        (this.text = e),
        (this.db = r),
        (this.parser = i),
        (this.renderer = o);
    }
    static {
      (0, c.K)(this, "Diagram");
    }
    static async fromText(e, r = {}) {
      const i = "string" == typeof e ? { raw: e, cleaned: e } : e,
        o = (0, l.zj)(),
        n = (0, l.Ch)(i.cleaned, o);
      try {
        (0, l.Gs)(n);
      } catch {
        const t = (0, l.J$)(n);
        if (!t) throw new l.C0(`Diagram ${n} not found.`);
        const { id: e, diagram: r } = await t();
        (0, l.Js)(e, r);
      }
      const { db: a, parser: c, renderer: d, init: u } = (0, l.Gs)(n);
      c.parser && (c.parser.yy = a),
        a.clear?.(),
        u?.(o),
        r.title && a.setDiagramTitle?.(r.title);
      let p = i.cleaned;
      if (a.preserveCommentsWhenParsing && i.withComments) {
        const t = o.maxTextSize ?? l.UI.maxTextSize;
        i.withComments.length > t
          ? h.R.warn(
              `Comment-preserving source exceeds maxTextSize (${i.withComments.length} > ${t}); parsing the comment-stripped text instead. Reported source positions will not account for comment lines.`,
            )
          : (p = i.withComments);
      }
      const g = (0, s.C4)(p) + "\n";
      return (
        i.frontmatterLineOffset &&
          a.setFrontmatterLineOffset?.(i.frontmatterLineOffset),
        await c.parse(g),
        new t(n, g, a, c, d)
      );
    }
    async render(t, e) {
      await this.renderer.draw(this.text, t, e, this);
    }
    getParser() {
      return this.parser;
    }
    getType() {
      return this.type;
    }
  },
  Oe = [],
  De = (0, c.K)(() => {
    Oe.forEach((t) => {
      t();
    }),
      (Oe = []);
  }, "attachFunctions"),
  Ie = (0, c.K)(
    (t) => t.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(),
    "cleanupComments",
  );
function Ke(t) {
  const e = (0, l.i_)(t);
  if (!e) return { text: t, metadata: {} };
  const r = e.indent,
    i = r
      ? e.body
          .split("\n")
          .map((t) => (t.startsWith(r) ? t.slice(r.length) : t))
          .join("\n")
      : e.body;
  let n = (0, o.H)(i, { schema: o.r }) ?? {};
  n = "object" != typeof n || Array.isArray(n) ? {} : n;
  const a = {};
  return (
    n.displayMode && (a.displayMode = n.displayMode.toString()),
    n.title && (a.title = n.title.toString()),
    n.config && (a.config = n.config),
    { text: t.slice(e.length), metadata: a }
  );
}
(0, c.K)(Ke, "extractFrontMatter");
var qe = (0, c.K)(
    (t) =>
      t
        .replace(/\r\n?/g, "\n")
        .replace(
          /<(\w+)([^>]*)>/g,
          (t, e, r) => "<" + e + r.replace(/="([^"]*)"/g, "='$1'") + ">",
        ),
    "cleanupText",
  ),
  Pe = (0, c.K)((t) => {
    const { text: e, metadata: r } = Ke(t),
      { displayMode: i, title: o, config: n = {} } = r;
    return (
      i && (n.gantt || (n.gantt = {}), (n.gantt.displayMode = i)),
      { title: o, config: n, text: e }
    );
  }, "processFrontmatter"),
  Re = (0, c.K)((t) => {
    const e = s._K.detectInit(t) ?? {},
      r = s._K.detectDirective(t, "wrap");
    return (
      Array.isArray(r)
        ? (e.wrap = r.some(({ type: t }) => "wrap" === t))
        : "wrap" === r?.type && (e.wrap = !0),
      { text: (0, s.vU)(t), directive: e }
    );
  }, "processDirectives");
function ze(t) {
  const e = t,
    r = qe(t),
    i = Pe(r),
    o = Re(i.text),
    n = (0, s.$t)(i.config, o.directive),
    a = o.text;
  return {
    code: {
      raw: e,
      cleaned: Ie(a),
      withComments: a,
      frontmatterLineOffset:
        r.length > i.text.length
          ? (r.substring(0, r.length - i.text.length).match(/\n/g) ?? []).length
          : 0,
    },
    title: i.title,
    config: n,
  };
}
function Ne(t) {
  const e = new TextEncoder().encode(t),
    r = Array.from(e, (t) => String.fromCodePoint(t)).join("");
  return btoa(r);
}
(0, c.K)(ze, "preprocessDiagram"), (0, c.K)(Ne, "toBase64");
var We = ["foreignobject"],
  je = ["dominant-baseline"];
function He(t) {
  const e = ze(t);
  let r;
  (0, l.cL)();
  try {
    r = (0, l.Ch)(e.code.cleaned, (0, l.zj)());
  } catch {
    r = void 0;
  }
  return (0, l.yj)(r), (0, l.xA)(e.config ?? {}), e;
}
async function Ue(t, e) {
  Fe();
  try {
    const { code: e, config: r } = He(t);
    return { diagramType: (await Ee.fromText(e)).type, config: r };
  } catch (t) {
    if (e?.suppressErrors) return !1;
    throw t;
  } finally {
    (0, l.yj)(void 0);
  }
}
(0, c.K)(He, "processAndSetConfigs"), (0, c.K)(Ue, "parse");
var Ye = (0, c.K)(
    (t, e, r = []) =>
      `.${t} ${e} ${(0, l.Df)(`{ ${r.join(" !important; ")} !important; }`)}`,
    "cssImportantStyles",
  ),
  Ge = (0, c.K)((t, e = new Map()) => {
    const r = new CSSStyleSheet();
    if (
      (void 0 !== t.fontFamily &&
        r.insertRule(
          `:root { --mermaid-font-family: ${t.fontFamily}}`,
          r.cssRules.length,
        ),
      void 0 !== t.altFontFamily &&
        r.insertRule(
          `:root { --mermaid-alt-font-family: ${t.altFontFamily}}`,
          r.cssRules.length,
        ),
      e instanceof Map)
    ) {
      const i = (0, l.E)(t)
        ? ["> *", "span"]
        : ["rect", "polygon", "ellipse", "circle", "path"];
      e.forEach((t) => {
        ot(t.styles) ||
          i.forEach((e) => {
            r.insertRule(Ye(t.id, e, t.styles), r.cssRules.length);
          }),
          ot(t.textStyles) ||
            r.insertRule(
              Ye(
                t.id,
                "tspan",
                (t?.textStyles || []).map((t) => t.replace("color", "fill")),
              ),
              r.cssRules.length,
            );
      });
    }
    let i = "";
    if (void 0 !== t.themeCSS)
      if ("function" == typeof r.replaceSync) {
        const e = new CSSStyleSheet();
        e.replaceSync(t.themeCSS), (i = (0, l.KG)(e) + "\n");
      } else i += `${t.themeCSS}\n`;
    return i + (0, l.KG)(r);
  }, "createCssStyles"),
  Xe = (0, c.K)((t, e) => {
    return _(
      G(`${t}{${e}}`),
      ((i = B(
        (r = [
          (0, c.K)(function (e, r, i, o) {
            if ("rule" === e.type && Array.isArray(e.props)) {
              if (e.parent && e.parent.type === y) return;
              e.props = e.props.map((r) =>
                r === t &&
                Array.isArray(e.children) &&
                e.children.every(
                  (t) =>
                    "decl" === t.type &&
                    new Set(["font-family", "font-size", "fill"]).has(t.props),
                )
                  ? r
                  : (!r.startsWith(`${t} `) && !r.startsWith(`${t}>`)) ||
                      r.startsWith(`${t} ||`)
                    ? `${t} ${r}`
                    : r,
              );
            } else
              e.type.startsWith("@") &&
                ([
                  "@media",
                  "@supports",
                  m,
                  "@scope",
                  "@container",
                  "@starting-style",
                  y,
                ].includes(e.type) ||
                  (h.R.warn(`Removing unsupported at-rule ${e.type} from CSS`),
                  (e.type = p)));
          }, "addNamespace"),
          A,
        ]),
      )),
      function (t, e, o, n) {
        for (var a = "", s = 0; s < i; s++) a += r[s](t, e, o, n) || "";
        return a;
      }),
    );
    var r, i;
  }, "compileCSS"),
  Ve = (0, c.K)((t, e, r, i) => {
    const o = Ge(t, r),
      n = (0, l.tM)(
        e,
        o,
        { ...t.themeVariables, theme: t.theme, look: t.look },
        i,
      );
    return Xe(i, n);
  }, "createUserStyles"),
  Ze = (0, c.K)((t = "", e, r) => {
    let i = t;
    return (
      r ||
        e ||
        (i = i.replace(
          /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
          'marker-end="url(#',
        )),
      (i = (0, s.Sm)(i)),
      (i = i.replace(/<br>/g, "<br/>")),
      i
    );
  }, "cleanUpSvgCode"),
  Qe = (0, c.K)(
    (t = "", e) =>
      `<iframe style="width:100%;height:${e?.viewBox?.baseVal?.height ? e.viewBox.baseVal.height + "px" : "100%"};border:0;margin:0;" src="data:text/html;charset=UTF-8;base64,${Ne(`<body style="margin:0">${t}</body>`)}" sandbox="allow-top-navigation-by-user-activation allow-popups">\n  The "iframe" tag is not supported by your browser.\n</iframe>`,
    "putIntoIFrame",
  ),
  Je = (0, c.K)((t, e, r, i, o) => {
    const n = t.append("div");
    n.attr("id", r), i && n.attr("style", i);
    const a = n
      .append("svg")
      .attr("id", e)
      .attr("width", "100%")
      .attr("xmlns", "http://www.w3.org/2000/svg");
    return o && a.attr("xmlns:xlink", o), a.append("g"), t;
  }, "appendDivSvgG");
function tr(t, e) {
  return t
    .append("iframe")
    .attr("id", e)
    .attr("style", "width: 100%; height: 100%;")
    .attr("sandbox", "");
}
(0, c.K)(tr, "sandboxedIframe");
var er = (0, c.K)((t, e, r, i) => {
    t.getElementById(e)?.remove(),
      t.getElementById(r)?.remove(),
      t.getElementById(i)?.remove();
  }, "removeExistingElements"),
  rr = (0, c.K)(async function (t, e, r) {
    Fe();
    const i = He(e);
    let o = i.code;
    e = o.cleaned;
    const n = (0, l.zj)();
    h.R.debug(n),
      e.length > (n?.maxTextSize ?? 5e4) &&
        (o = {
          raw: (e =
            "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa"),
          cleaned: e,
        });
    const a = `#${t}`,
      d = "i" + t,
      p = "#" + d,
      g = "d" + t,
      f = "#" + g,
      y = (0, c.K)(() => {
        const t = x ? p : f,
          e = (0, u.Ltv)(t).node();
        e && "remove" in e && e.remove();
      }, "removeTempElements");
    let m = (0, u.Ltv)(document.body);
    const x = "sandbox" === n.securityLevel,
      C = "loose" === n.securityLevel,
      b = n.fontFamily;
    if (void 0 !== r) {
      if ((r && (r.innerHTML = ""), x)) {
        const t = tr((0, u.Ltv)(r), d);
        (m = (0, u.Ltv)(t.nodes()[0].contentDocument.body)),
          (m.node().style.margin = "0");
      } else m = (0, u.Ltv)(r);
      Je(m, t, g, `font-family: ${b}`, "http://www.w3.org/1999/xlink");
    } else {
      if ((er(document, t, g, d), x)) {
        const t = tr((0, u.Ltv)(document.body), d);
        (m = (0, u.Ltv)(t.nodes()[0].contentDocument.body)),
          (m.node().style.margin = "0");
      } else m = (0, u.Ltv)("body");
      Je(m, t, g);
    }
    let k, w;
    try {
      k = await Ee.fromText(o, { title: i.title });
    } catch (t) {
      if (n.suppressErrorRendering) throw (y(), t);
      (k = await Ee.fromText("error")),
        (w = t),
        k.db.setErrorMessage?.((0, s.u1)(t));
    }
    const S = m.select(f).node(),
      T = k.type,
      B = S.firstChild,
      v = B.firstChild,
      _ = k.renderer.getClasses?.(e, k),
      A = Ve(n, T, _, a),
      F = document.createElement("style");
    (F.innerHTML = A), B.insertBefore(F, v);
    try {
      await k.renderer.draw(e, t, "12.2.0", k);
    } catch (r) {
      throw (n.suppressErrorRendering ? y() : qt.draw(e, t, "12.2.0"), r);
    }
    const L = m.select(`${f} svg`),
      M = k.db.getAccTitle?.(),
      $ = k.db.getAccDescription?.();
    ar(T, L, M, $);
    const E = (0, c.K)(() => {
      m.select(`[id="${t}"]`)
        .selectAll("foreignobject > *")
        .attr("xmlns", "http://www.w3.org/1999/xhtml");
      let e = m.select(f).node().innerHTML;
      if (
        (h.R.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute),
        (e = Ze(e, x, (0, l._3)(n.arrowMarkerAbsolute))),
        x)
      ) {
        const t = m.select(f + " svg").node();
        e = Qe(e, t);
      } else
        C ||
          (e = J.A.sanitize(e, {
            ADD_TAGS: We,
            ADD_ATTR: je,
            HTML_INTEGRATION_POINTS: { foreignobject: !0 },
          }));
      return De(), e;
    }, "serializeSvg")();
    if (w) throw w;
    return y(), { diagramType: T, svg: E, bindFunctions: k.db.bindFunctions };
  }, "renderDiagram"),
  ir = (0, c.K)(async function (t, e, r) {
    try {
      return await rr(t, e, r);
    } finally {
      (0, l.yj)(void 0);
    }
  }, "render");
function or(t = {}) {
  const e = (0, l.hH)({}, t);
  e?.fontFamily &&
    !e.themeVariables?.fontFamily &&
    (e.themeVariables || (e.themeVariables = {}),
    (e.themeVariables.fontFamily = e.fontFamily)),
    (0, l.wZ)(e);
  const r = l.sb.theme;
  e?.theme && Object.hasOwn(l.H$, e.theme)
    ? (e.themeVariables = l.H$[e.theme].getThemeVariables(e.themeVariables))
    : e &&
      (null != e.theme && "null" !== e.theme && (e.theme = r),
      (e.themeVariables = l.H$[r].getThemeVariables(e.themeVariables)));
  const i = "object" == typeof e ? (0, l.UU)(e) : (0, l.Q2)();
  (0, h.H)(i.logLevel), Fe();
}
(0, c.K)(or, "initialize");
var nr = (0, c.K)((t, e = {}) => {
  const { code: r } = ze(t);
  return Ee.fromText(r, e);
}, "getDiagramFromText");
function ar(t, e, r, i) {
  Me(e, t), $e(e, r, i, e.attr("id"));
}
(0, c.K)(ar, "addA11yInfo");
var sr = Object.freeze({
  render: ir,
  parse: Ue,
  getDiagramFromText: nr,
  initialize: or,
  getConfig: l.zj,
  setConfig: l.Nk,
  getSiteConfig: l.Q2,
  updateSiteConfig: l.B6,
  reset: (0, c.K)(() => {
    (0, l.cL)();
  }, "reset"),
  globalReset: (0, c.K)(() => {
    (0, l.cL)(l.sb);
  }, "globalReset"),
  defaultConfig: l.sb,
});
(0, h.H)((0, l.zj)().logLevel), (0, l.cL)((0, l.zj)());
var lr = (0, c.K)((t, e, r) => {
    h.R.warn(t),
      (0, s.dq)(t)
        ? (r && r(t.str, t.hash), e.push({ ...t, message: t.str, error: t }))
        : (r && r(t),
          t instanceof Error &&
            e.push({
              str: t.message,
              message: t.message,
              hash: t.name,
              error: t,
            }));
  }, "handleError"),
  hr = (0, c.K)(async function (t = { querySelector: ".mermaid" }) {
    try {
      await cr(t);
    } catch (e) {
      if (
        ((0, s.dq)(e) && h.R.error(e.str),
        wr.parseError && wr.parseError(e),
        !t.suppressErrors)
      )
        throw (
          (h.R.error("Use the suppressErrors option to suppress these errors"),
          e)
        );
    }
  }, "run"),
  cr = (0, c.K)(async function (
    { postRenderCallback: t, querySelector: e, nodes: r } = {
      querySelector: ".mermaid",
    },
  ) {
    const i = sr.getConfig();
    let o;
    if ((h.R.debug((t ? "" : "No ") + "Callback function found"), r)) o = r;
    else {
      if (!e) throw new Error("Nodes and querySelector are both undefined");
      o = document.querySelectorAll(e);
    }
    h.R.debug(`Found ${o.length} diagrams`),
      void 0 !== i?.startOnLoad &&
        (h.R.debug("Start On Load: " + i?.startOnLoad),
        sr.updateSiteConfig({ startOnLoad: i?.startOnLoad }));
    const n = new s._K.InitIDGenerator(
      i.deterministicIds,
      i.deterministicIDSeed,
    );
    let a;
    const l = [];
    for (const e of Array.from(o)) {
      if (
        (h.R.info("Rendering diagram: " + e.id),
        e.getAttribute("data-processed"))
      )
        continue;
      e.setAttribute("data-processed", "true");
      const r = `mermaid-${n.next()}`;
      (a = e.innerHTML),
        (a = (0, d.T)(s._K.entityDecode(a))
          .trim()
          .replace(/<br\s*\/?>/gi, "<br/>"));
      const i = s._K.detectInit(a);
      i && h.R.debug("Detected early reinit: ", i);
      try {
        const { svg: i, bindFunctions: o } = await br(r, a, e);
        (e.innerHTML = i), t && (await t(r)), o && o(e);
      } catch (t) {
        lr(t, l, wr.parseError);
      }
    }
    if (l.length > 0) throw l[0];
  }, "runThrowsErrors"),
  dr = (0, c.K)(function (t) {
    sr.initialize(t);
  }, "initialize"),
  ur = (0, c.K)(async function (t, e, r) {
    h.R.warn("mermaid.init is deprecated. Please use run instead."), t && dr(t);
    const i = { postRenderCallback: r, querySelector: ".mermaid" };
    "string" == typeof e
      ? (i.querySelector = e)
      : e && (e instanceof HTMLElement ? (i.nodes = [e]) : (i.nodes = e)),
      await hr(i);
  }, "init"),
  pr = (0, c.K)(async (t, { lazyLoad: e = !0 } = {}) => {
    Fe(), (0, l.Xd)(...t), !1 === e && (await Le());
  }, "registerExternalDiagrams"),
  gr = (0, c.K)(function () {
    if (wr.startOnLoad) {
      const { startOnLoad: t } = sr.getConfig();
      t && wr.run().catch((t) => h.R.error("Mermaid failed to initialize", t));
    }
  }, "contentLoaded");
"undefined" != typeof document && window.addEventListener("load", gr, !1);
var fr = (0, c.K)(function (t) {
    wr.parseError = t;
  }, "setParseErrorHandler"),
  yr = [],
  mr = !1,
  xr = (0, c.K)(async () => {
    if (!mr) {
      for (mr = !0; yr.length > 0; ) {
        const t = yr.shift();
        if (t)
          try {
            await t();
          } catch (t) {
            h.R.error("Error executing queue", t);
          }
      }
      mr = !1;
    }
  }, "executeQueue"),
  Cr = (0, c.K)(
    async (t, e) =>
      new Promise((r, i) => {
        const o = (0, c.K)(
          () =>
            new Promise((o, n) => {
              sr.parse(t, e).then(
                (t) => {
                  o(t), r(t);
                },
                (t) => {
                  h.R.error("Error parsing", t), wr.parseError?.(t), n(t), i(t);
                },
              );
            }),
          "performCall",
        );
        yr.push(o), xr().catch(i);
      }),
    "parse",
  ),
  br = (0, c.K)(
    (t, e, r) =>
      new Promise((i, o) => {
        const n = (0, c.K)(
          () =>
            new Promise((n, a) => {
              sr.render(t, e, r).then(
                (t) => {
                  n(t), i(t);
                },
                (t) => {
                  h.R.error("Error parsing", t), wr.parseError?.(t), a(t), o(t);
                },
              );
            }),
          "performCall",
        );
        yr.push(n), xr().catch(o);
      }),
    "render",
  ),
  kr = (0, c.K)(
    () => Object.keys(l.mW).map((t) => ({ id: t })),
    "getRegisteredDiagramsMetadata",
  ),
  wr = {
    startOnLoad: !0,
    mermaidAPI: sr,
    parse: Cr,
    render: br,
    init: ur,
    run: hr,
    registerExternalDiagrams: pr,
    registerLayoutLoaders: n.sO,
    initialize: dr,
    parseError: void 0,
    contentLoaded: gr,
    setParseErrorHandler: fr,
    detectType: l.Ch,
    registerIconPacks: a.pC,
    getRegisteredDiagramsMetadata: kr,
  },
  Sr = wr;
