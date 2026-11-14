// vendor/module-46597.js — webpack module 46597
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.UNICODE_PLUS_SIGNS =
    t.UNICODE_MINUS_SIGNS =
    t.SPACE_SEPARATOR_RE =
    t.PLUS_SIGNS_WITH_ASCII =
    t.PERSIAN_RE =
    t.PERSIAN_NUMERALS =
    t.PERSIAN_DETECT_RE =
    t.PERMILLE_RE =
    t.PERMILLE =
    t.PERCENT_RE =
    t.PERCENTAGES =
    t.MINUS_SIGNS_WITH_ASCII =
    t.HAN_RE =
    t.HAN_NUMERAL_TO_DIGIT =
    t.HAN_NUMERALS =
    t.HAN_DETECT_RE =
    t.FULLWIDTH_RE =
    t.FULLWIDTH_NUMERALS =
    t.FULLWIDTH_GROUP =
    t.FULLWIDTH_DETECT_RE =
    t.FULLWIDTH_DECIMAL =
    t.BASE_NON_NUMERIC_SYMBOLS =
    t.ARABIC_RE =
    t.ARABIC_NUMERALS =
    t.ARABIC_DETECT_RE =
    t.ANY_PLUS_RE =
    t.ANY_PLUS_DETECT_RE =
    t.ANY_MINUS_RE =
    t.ANY_MINUS_DETECT_RE =
      void 0),
  (t.getNumberLocaleDetails = D),
  (t.isNumeralChar = function (e) {
    return (
      (e >= "0" && e <= "9") || w.test(e) || E.test(e) || T.test(e) || k.test(e)
    );
  }),
  (t.parseNumber = function (e, t, n) {
    if (null == e) return null;
    let o = String(e)
      .replace(/\p{Cf}/gu, "")
      .trim();
    o = o.replace(P, "-").replace(N, "+");
    let c = !1;
    const u = o.match(/([+-])\s*$/);
    u && ("-" === u[1] && (c = !0), (o = o.replace(/([+-])\s*$/, "")));
    const d = o.match(/^\s*([+-])/);
    d && ("-" === d[1] && (c = !0), (o = o.replace(/^\s*[+-]/, "")));
    let p = t;
    void 0 === p &&
      (w.test(o) || E.test(o) ? (p = "ar") : T.test(o) && (p = "zh"));
    const { group: f, decimal: h, currency: k, exponentSeparator: I } = D(p, n),
      O = (0, r.getFormatter)(p, n)
        .formatToParts(1)
        .filter((e) => "unit" === e.type)
        .map((e) => C(e.value)),
      R = O.length ? new RegExp(O.join("|"), "g") : null;
    let M = null;
    f &&
      (M = /\p{Zs}/u.test(f)
        ? /\p{Zs}/gu
        : "'" === f || "’" === f
          ? /['’]/g
          : new RegExp(C(f), "g"));
    let j = [
      { regex: M, replacement: "" },
      { regex: h ? new RegExp(C(h), "g") : null, replacement: "." },
      { regex: /．/g, replacement: "." },
      { regex: /，/g, replacement: "" },
      { regex: /٫/g, replacement: "." },
      { regex: /٬/g, replacement: "" },
      { regex: k ? new RegExp(C(k), "g") : null, replacement: "" },
      { regex: R, replacement: "" },
      { regex: _, replacement: "" },
      { regex: x, replacement: "" },
      { regex: I ? new RegExp(C(I), "g") : null, replacement: "e" },
      { regex: m, replacement: (e) => String(a.indexOf(e)) },
      { regex: g, replacement: (e) => String(s.indexOf(e)) },
      { regex: y, replacement: (e) => String(l.indexOf(e)) },
      { regex: v, replacement: (e) => i[e] },
    ].reduce((e, { regex: t, replacement: n }) => (t ? e.replace(t, n) : e), o);
    const L = j.lastIndexOf(".");
    if (
      (-1 !== L &&
        (j = `${j.slice(0, L).replace(/\./g, "")}.${j.slice(L + 1).replace(/\./g, "")}`),
      /^[-+]?Infinity$/i.test(o) || o.includes("∞"))
    )
      return null;
    let F = parseFloat((c ? "-" : "") + j);
    const U = n?.style,
      B = "unit" === U && "percent" === n?.unit,
      z = b.test(e) || "percent" === U;
    return (
      S.test(e) ? (F = A(F, -3)) : !B && z && (F = A(F, -2)),
      Number.isFinite(F) ? F : null
    );
  });
var r = n(82371 /* vendor/module-82371 */);
const o = (t.HAN_NUMERALS = [
    "零",
    "〇",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
  ]),
  i = (t.HAN_NUMERAL_TO_DIGIT = {
    零: "0",
    〇: "0",
    一: "1",
    二: "2",
    三: "3",
    四: "4",
    五: "5",
    六: "6",
    七: "7",
    八: "8",
    九: "9",
  }),
  a = (t.ARABIC_NUMERALS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]),
  s = (t.PERSIAN_NUMERALS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]),
  l = (t.FULLWIDTH_NUMERALS = [
    "０",
    "１",
    "２",
    "３",
    "４",
    "５",
    "６",
    "７",
    "８",
    "９",
  ]),
  c = (t.PERCENTAGES = ["%", "٪", "％", "﹪"]),
  u = (t.PERMILLE = ["‰", "؉"]),
  d = (t.UNICODE_MINUS_SIGNS = ["−", "－", "‒", "–", "—", "﹣"]),
  p = (t.UNICODE_PLUS_SIGNS = ["＋", "﹢"]),
  f = (t.FULLWIDTH_DECIMAL = "．"),
  h = (t.FULLWIDTH_GROUP = "，"),
  m = (t.ARABIC_RE = new RegExp(`[${a.join("")}]`, "g")),
  g = (t.PERSIAN_RE = new RegExp(`[${s.join("")}]`, "g")),
  y = (t.FULLWIDTH_RE = new RegExp(`[${l.join("")}]`, "g")),
  v = (t.HAN_RE = new RegExp(`[${o.join("")}]`, "g")),
  b = (t.PERCENT_RE = new RegExp(`[${c.join("")}]`)),
  S = (t.PERMILLE_RE = new RegExp(`[${u.join("")}]`)),
  _ = new RegExp(b.source, "g"),
  x = new RegExp(S.source, "g"),
  w = (t.ARABIC_DETECT_RE = new RegExp(`[${a.join("")}]`)),
  E = (t.PERSIAN_DETECT_RE = new RegExp(`[${s.join("")}]`)),
  T = (t.HAN_DETECT_RE = new RegExp(`[${o.join("")}]`)),
  k = (t.FULLWIDTH_DETECT_RE = new RegExp(`[${l.join("")}]`));
(t.BASE_NON_NUMERIC_SYMBOLS = [".", ",", f, h, "٫", "٬"]),
  (t.SPACE_SEPARATOR_RE = /\p{Zs}/u),
  (t.PLUS_SIGNS_WITH_ASCII = ["+", ...p]),
  (t.MINUS_SIGNS_WITH_ASCII = ["-", ...d]);
const C = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  I = (e) => e.replace(/[-\\\]^]/g, (e) => `\\${e}`);
function A(e, t) {
  const [n, r = "0"] = String(e).split("e");
  return Number(`${n}e${Number(r) + t}`);
}
const O = (e) => `[${e.map(I).join("")}]`,
  R = O(["-"].concat(d)),
  M = O(["+"].concat(p)),
  P = (t.ANY_MINUS_RE = new RegExp(R, "gu")),
  N = (t.ANY_PLUS_RE = new RegExp(M, "gu"));
function D(e, t) {
  const n = (0, r.getFormatter)(e, t).formatToParts(11111.1),
    o = {};
  return (
    n.forEach((e) => {
      o[e.type] = e.value;
    }),
    (0, r.getFormatter)(e)
      .formatToParts(0.1)
      .forEach((e) => {
        "decimal" === e.type && (o[e.type] = e.value);
      }),
    o
  );
}
(t.ANY_MINUS_DETECT_RE = new RegExp(R)), (t.ANY_PLUS_DETECT_RE = new RegExp(M));
