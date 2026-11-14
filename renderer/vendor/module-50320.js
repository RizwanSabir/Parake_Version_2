// vendor/module-50320.js — webpack module 50320
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { WY: () => v, dn: () => B, pC: () => S, Gc: () => b });
var i = r(8679 /* vendor/module-8679 */),
  o = r(27166 /* vendor/module-27166 */),
  n = r(79456 /* vendor/module-79456 */);
const a = (t, e) => !!t && !(!((e && "" === t.prefix) || t.prefix) || !t.name),
  s = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  l = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  h = Object.freeze({ ...s, ...l }),
  c = Object.freeze({ ...h, body: "", hidden: !1 });
function d(t, e) {
  const r = (function (t, e) {
    const r = {};
    !t.hFlip != !e.hFlip && (r.hFlip = !0),
      !t.vFlip != !e.vFlip && (r.vFlip = !0);
    const i = ((t.rotate || 0) + (e.rotate || 0)) % 4;
    return i && (r.rotate = i), r;
  })(t, e);
  for (const i in c)
    i in l
      ? i in t && !(i in r) && (r[i] = l[i])
      : i in e
        ? (r[i] = e[i])
        : i in t && (r[i] = t[i]);
  return r;
}
function u(t, e, r) {
  const i = t.icons,
    o = t.aliases || Object.create(null);
  let n = {};
  function a(t) {
    n = d(i[t] || o[t], n);
  }
  return a(e), r.forEach(a), d(t, n);
}
const p = Object.freeze({ width: null, height: null }),
  g = Object.freeze({ ...p, ...l }),
  f = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  y = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function m(t, e, r) {
  if (1 === e) return t;
  if (((r = r || 100), "number" == typeof t)) return Math.ceil(t * e * r) / r;
  if ("string" != typeof t) return t;
  const i = t.split(f);
  if (null === i || !i.length) return t;
  const o = [];
  let n = i.shift(),
    a = y.test(n);
  for (;;) {
    if (a) {
      const t = parseFloat(n);
      isNaN(t) ? o.push(n) : o.push(Math.ceil(t * e * r) / r);
    } else o.push(n);
    if (((n = i.shift()), void 0 === n)) return o.join("");
    a = !a;
  }
}
const x = /\sid="(\S+)"/g,
  C = new Map();
var b = {
    body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
    height: 80,
    width: 80,
  },
  k = new Map(),
  w = new Map(),
  S = (0, n.K)((t) => {
    for (const e of t) {
      if (!e.name)
        throw new Error(
          'Invalid icon loader. Must have a "name" property with non-empty string value.',
        );
      if ((o.R.debug("Registering icon pack:", e.name), "loader" in e))
        w.set(e.name, e.loader);
      else {
        if (!("icons" in e))
          throw (
            (o.R.error("Invalid icon loader:", e),
            new Error(
              'Invalid icon loader. Must have either "icons" or "loader" property.',
            ))
          );
        k.set(e.name, e.icons);
      }
    }
  }, "registerIconPacks"),
  T = (0, n.K)(async (t, e) => {
    const r = ((t, e, r, i = "") => {
      const o = t.split(":");
      if ("@" === t.slice(0, 1)) {
        if (o.length < 2 || o.length > 3) return null;
        i = o.shift().slice(1);
      }
      if (o.length > 3 || !o.length) return null;
      if (o.length > 1) {
        const t = o.pop(),
          r = o.pop(),
          n = { provider: o.length > 0 ? o[0] : i, prefix: r, name: t };
        return e && !a(n) ? null : n;
      }
      const n = o[0],
        s = n.split("-");
      if (s.length > 1) {
        const t = { provider: i, prefix: s.shift(), name: s.join("-") };
        return e && !a(t) ? null : t;
      }
      if (r && "" === i) {
        const t = { provider: i, prefix: "", name: n };
        return e && !a(t, r) ? null : t;
      }
      return null;
    })(t, !0, void 0 !== e);
    if (!r) throw new Error(`Invalid icon name: ${t}`);
    const i = r.prefix || e;
    if (!i) throw new Error(`Icon name must contain a prefix: ${t}`);
    let n = k.get(i);
    if (!n) {
      const t = w.get(i);
      if (!t) throw new Error(`Icon set not found: ${r.prefix}`);
      try {
        (n = { ...(await t()), prefix: i }), k.set(i, n);
      } catch (t) {
        throw (o.R.error(t), new Error(`Failed to load icon set: ${r.prefix}`));
      }
    }
    const s = (function (t, e) {
      if (t.icons[e]) return u(t, e, []);
      const r = (function (t, e) {
        const r = t.icons,
          i = t.aliases || Object.create(null),
          o = Object.create(null);
        return (
          (e || Object.keys(r).concat(Object.keys(i))).forEach(function t(e) {
            if (r[e]) return (o[e] = []);
            if (!(e in o)) {
              o[e] = null;
              const r = i[e] && i[e].parent,
                n = r && t(r);
              n && (o[e] = [r].concat(n));
            }
            return o[e];
          }),
          o
        );
      })(t, [e])[e];
      return r ? u(t, e, r) : null;
    })(n, r.name);
    if (!s) throw new Error(`Icon not found: ${t}`);
    return s;
  }, "getRegisteredIconData"),
  B = (0, n.K)(async (t) => {
    try {
      return await T(t), !0;
    } catch {
      return !1;
    }
  }, "isIconAvailable"),
  v = (0, n.K)(async (t, e, r) => {
    let n;
    try {
      n = await T(t, e?.fallbackPrefix);
    } catch (t) {
      o.R.error(t), (n = b);
    }
    const a = (function (t, e) {
        const r = { ...h, ...t },
          i = { ...g, ...e },
          o = {
            left: r.left,
            top: r.top,
            width: r.width,
            height: r.height,
          };
        let n = r.body;
        [r, i].forEach((t) => {
          const e = [],
            r = t.hFlip,
            i = t.vFlip;
          let a,
            s = t.rotate;
          switch (
            (r
              ? i
                ? (s += 2)
                : (e.push(
                    "translate(" +
                      (o.width + o.left).toString() +
                      " " +
                      (0 - o.top).toString() +
                      ")",
                  ),
                  e.push("scale(-1 1)"),
                  (o.top = o.left = 0))
              : i &&
                (e.push(
                  "translate(" +
                    (0 - o.left).toString() +
                    " " +
                    (o.height + o.top).toString() +
                    ")",
                ),
                e.push("scale(1 -1)"),
                (o.top = o.left = 0)),
            s < 0 && (s -= 4 * Math.floor(s / 4)),
            (s %= 4),
            s)
          ) {
            case 1:
              (a = o.height / 2 + o.top),
                e.unshift(
                  "rotate(90 " + a.toString() + " " + a.toString() + ")",
                );
              break;
            case 2:
              e.unshift(
                "rotate(180 " +
                  (o.width / 2 + o.left).toString() +
                  " " +
                  (o.height / 2 + o.top).toString() +
                  ")",
              );
              break;
            case 3:
              (a = o.width / 2 + o.left),
                e.unshift(
                  "rotate(-90 " + a.toString() + " " + a.toString() + ")",
                );
          }
          s % 2 == 1 &&
            (o.left !== o.top && ((a = o.left), (o.left = o.top), (o.top = a)),
            o.width !== o.height &&
              ((a = o.width), (o.width = o.height), (o.height = a))),
            e.length &&
              (n = (function (t, e) {
                const r = (function (t, e = "defs") {
                  let r = "";
                  const i = t.indexOf("<" + e);
                  for (; i >= 0; ) {
                    const o = t.indexOf(">", i),
                      n = t.indexOf("</" + e);
                    if (-1 === o || -1 === n) break;
                    const a = t.indexOf(">", n);
                    if (-1 === a) break;
                    (r += t.slice(o + 1, n).trim()),
                      (t = t.slice(0, i).trim() + t.slice(a + 1));
                  }
                  return { defs: r, content: t };
                })(t);
                return (
                  (i = r.defs),
                  (o = e + r.content + "</g>"),
                  i ? "<defs>" + i + "</defs>" + o : o
                );
                var i, o;
              })(n, '<g transform="' + e.join(" ") + '">'));
        });
        const a = i.width,
          s = i.height,
          l = o.width,
          c = o.height;
        let d, u;
        null === a
          ? ((u = null === s ? "1em" : "auto" === s ? c : s), (d = m(u, l / c)))
          : ((d = "auto" === a ? l : a),
            (u = null === s ? m(d, c / l) : "auto" === s ? c : s));
        const p = {},
          f = (t, e) => {
            ((t) => "unset" === t || "undefined" === t || "none" === t)(e) ||
              (p[t] = e.toString());
          };
        f("width", d), f("height", u);
        const y = [o.left, o.top, l, c];
        return (
          (p.viewBox = y.join(" ")), { attributes: p, viewBox: y, body: n }
        );
      })(n, e),
      s = (function (t, e) {
        let r =
          -1 === t.indexOf("xlink:")
            ? ""
            : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
        for (const t in e) r += " " + t + '="' + e[t] + '"';
        return (
          '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + t + "</svg>"
        );
      })(
        (function (t) {
          const e = [];
          let r;
          for (; (r = x.exec(t)); ) e.push(r[1]);
          if (!e.length) return t;
          const i =
            "suffix" + ((16777216 * Math.random()) | Date.now()).toString(16);
          return (
            e.forEach((e) => {
              const r = (function (t) {
                  t = t.replace(/[0-9]+$/, "") || "a";
                  const e = C.get(t) || 0;
                  return C.set(t, e + 1), e ? `${t}${e}` : t;
                })(e),
                o = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              t = t.replace(
                new RegExp('([#;"])(' + o + ')([")]|\\.[a-z])', "g"),
                "$1" + r + i + "$3",
              );
            }),
            (t = t.replace(new RegExp(i, "g"), ""))
          );
        })(a.body),
        { ...a.attributes, ...r },
      );
    return (0, i.jZ)(s, (0, i.zj)());
  }, "getIconSVG");
