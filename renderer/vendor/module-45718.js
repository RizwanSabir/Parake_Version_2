// vendor/module-45718.js — webpack module 45718
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { A: () => o });
const i = {
    min: { r: 0, g: 0, b: 0, s: 0, l: 0, a: 0 },
    max: { r: 255, g: 255, b: 255, h: 360, s: 100, l: 100, a: 1 },
    clamp: {
      r: (t) => (t >= 255 ? 255 : t < 0 ? 0 : t),
      g: (t) => (t >= 255 ? 255 : t < 0 ? 0 : t),
      b: (t) => (t >= 255 ? 255 : t < 0 ? 0 : t),
      h: (t) => t % 360,
      s: (t) => (t >= 100 ? 100 : t < 0 ? 0 : t),
      l: (t) => (t >= 100 ? 100 : t < 0 ? 0 : t),
      a: (t) => (t >= 1 ? 1 : t < 0 ? 0 : t),
    },
    toLinear: (t) => {
      const e = t / 255;
      return t > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
    },
    hue2rgb: (t, e, r) => (
      r < 0 && (r += 1),
      r > 1 && (r -= 1),
      r < 1 / 6
        ? t + 6 * (e - t) * r
        : r < 0.5
          ? e
          : r < 2 / 3
            ? t + (e - t) * (2 / 3 - r) * 6
            : t
    ),
    hsl2rgb: ({ h: t, s: e, l: r }, o) => {
      if (!e) return 2.55 * r;
      (t /= 360), (e /= 100);
      const n = (r /= 100) < 0.5 ? r * (1 + e) : r + e - r * e,
        a = 2 * r - n;
      switch (o) {
        case "r":
          return 255 * i.hue2rgb(a, n, t + 1 / 3);
        case "g":
          return 255 * i.hue2rgb(a, n, t);
        case "b":
          return 255 * i.hue2rgb(a, n, t - 1 / 3);
      }
    },
    rgb2hsl: ({ r: t, g: e, b: r }, i) => {
      (t /= 255), (e /= 255), (r /= 255);
      const o = Math.max(t, e, r),
        n = Math.min(t, e, r),
        a = (o + n) / 2;
      if ("l" === i) return 100 * a;
      if (o === n) return 0;
      const s = o - n;
      if ("s" === i) return 100 * (a > 0.5 ? s / (2 - o - n) : s / (o + n));
      switch (o) {
        case t:
          return 60 * ((e - r) / s + (e < r ? 6 : 0));
        case e:
          return 60 * ((r - t) / s + 2);
        case r:
          return 60 * ((t - e) / s + 4);
        default:
          return -1;
      }
    },
  },
  o = {
    channel: i,
    lang: {
      clamp: (t, e, r) =>
        e > r ? Math.min(e, Math.max(r, t)) : Math.min(r, Math.max(e, t)),
      round: (t) => Math.round(1e10 * t) / 1e10,
    },
    unit: {
      dec2hex: (t) => {
        const e = Math.round(t).toString(16);
        return e.length > 1 ? e : `0${e}`;
      },
    },
  };
