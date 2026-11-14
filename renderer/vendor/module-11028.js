// vendor/module-11028.js — webpack module 11028
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { A: () => f });
var i = r(63545 /* vendor/module-63545 */),
  o = r(64607 /* vendor/module-64607 */);
const n = {
    re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
    parse: (t) => {
      if (35 !== t.charCodeAt(0)) return;
      const e = t.match(n.re);
      if (!e) return;
      const r = e[1],
        o = parseInt(r, 16),
        a = r.length,
        s = a % 4 == 0,
        l = a > 4,
        h = l ? 1 : 17,
        c = l ? 8 : 4,
        d = s ? 0 : -1,
        u = l ? 255 : 15;
      return i.A.set(
        {
          r: ((o >> (c * (d + 3))) & u) * h,
          g: ((o >> (c * (d + 2))) & u) * h,
          b: ((o >> (c * (d + 1))) & u) * h,
          a: s ? ((o & u) * h) / 255 : 1,
        },
        t,
      );
    },
    stringify: (t) => {
      const { r: e, g: r, b: i, a: n } = t;
      return n < 1
        ? `#${o.Y[Math.round(e)]}${o.Y[Math.round(r)]}${o.Y[Math.round(i)]}${o.Y[Math.round(255 * n)]}`
        : `#${o.Y[Math.round(e)]}${o.Y[Math.round(r)]}${o.Y[Math.round(i)]}`;
    },
  },
  a = n;
var s = r(45718 /* vendor/module-45718 */);
const l = {
    re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
    hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
    _hue2deg: (t) => {
      const e = t.match(l.hueRe);
      if (e) {
        const [, t, r] = e;
        switch (r) {
          case "grad":
            return s.A.channel.clamp.h(0.9 * parseFloat(t));
          case "rad":
            return s.A.channel.clamp.h((180 * parseFloat(t)) / Math.PI);
          case "turn":
            return s.A.channel.clamp.h(360 * parseFloat(t));
        }
      }
      return s.A.channel.clamp.h(parseFloat(t));
    },
    parse: (t) => {
      const e = t.charCodeAt(0);
      if (104 !== e && 72 !== e) return;
      const r = t.match(l.re);
      if (!r) return;
      const [, o, n, a, h, c] = r;
      return i.A.set(
        {
          h: l._hue2deg(o),
          s: s.A.channel.clamp.s(parseFloat(n)),
          l: s.A.channel.clamp.l(parseFloat(a)),
          a: h
            ? s.A.channel.clamp.a(c ? parseFloat(h) / 100 : parseFloat(h))
            : 1,
        },
        t,
      );
    },
    stringify: (t) => {
      const { h: e, s: r, l: i, a: o } = t;
      return o < 1
        ? `hsla(${s.A.lang.round(e)}, ${s.A.lang.round(r)}%, ${s.A.lang.round(i)}%, ${o})`
        : `hsl(${s.A.lang.round(e)}, ${s.A.lang.round(r)}%, ${s.A.lang.round(i)}%)`;
    },
  },
  h = l,
  c = {
    colors: {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyanaqua: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      transparent: "#00000000",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32",
    },
    parse: (t) => {
      t = t.toLowerCase();
      const e = c.colors[t];
      if (e) return a.parse(e);
    },
    stringify: (t) => {
      const e = a.stringify(t);
      for (const t in c.colors) if (c.colors[t] === e) return t;
    },
  },
  d = c,
  u = {
    re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
    parse: (t) => {
      const e = t.charCodeAt(0);
      if (114 !== e && 82 !== e) return;
      const r = t.match(u.re);
      if (!r) return;
      const [, o, n, a, l, h, c, d, p] = r;
      return i.A.set(
        {
          r: s.A.channel.clamp.r(n ? 2.55 * parseFloat(o) : parseFloat(o)),
          g: s.A.channel.clamp.g(l ? 2.55 * parseFloat(a) : parseFloat(a)),
          b: s.A.channel.clamp.b(c ? 2.55 * parseFloat(h) : parseFloat(h)),
          a: d
            ? s.A.channel.clamp.a(p ? parseFloat(d) / 100 : parseFloat(d))
            : 1,
        },
        t,
      );
    },
    stringify: (t) => {
      const { r: e, g: r, b: i, a: o } = t;
      return o < 1
        ? `rgba(${s.A.lang.round(e)}, ${s.A.lang.round(r)}, ${s.A.lang.round(i)}, ${s.A.lang.round(o)})`
        : `rgb(${s.A.lang.round(e)}, ${s.A.lang.round(r)}, ${s.A.lang.round(i)})`;
    },
  },
  p = u,
  g = {
    format: { keyword: c, hex: a, rgb: u, rgba: u, hsl: l, hsla: l },
    parse: (t) => {
      if ("string" != typeof t) return t;
      const e = a.parse(t) || p.parse(t) || h.parse(t) || d.parse(t);
      if (e) return e;
      throw new Error(`Unsupported color format: "${t}"`);
    },
    stringify: (t) =>
      !t.changed && t.color
        ? t.color
        : t.type.is(o.Z.HSL) || void 0 === t.data.r
          ? h.stringify(t)
          : t.a < 1 ||
              !Number.isInteger(t.r) ||
              !Number.isInteger(t.g) ||
              !Number.isInteger(t.b)
            ? p.stringify(t)
            : a.stringify(t),
  },
  f = g;
