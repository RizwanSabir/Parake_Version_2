// vendor/module-63545.js — webpack module 63545
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { A: () => a });
var i = r(45718 /* vendor/module-45718 */),
  o = r(64607 /* vendor/module-64607 */);
const n = class {
    constructor() {
      this.type = o.Z.ALL;
    }
    get() {
      return this.type;
    }
    set(t) {
      if (this.type && this.type !== t)
        throw new Error(
          "Cannot change both RGB and HSL channels at the same time",
        );
      this.type = t;
    }
    reset() {
      this.type = o.Z.ALL;
    }
    is(t) {
      return this.type === t;
    }
  },
  a = new (class {
    constructor(t, e) {
      (this.color = e),
        (this.changed = !1),
        (this.data = t),
        (this.type = new n());
    }
    set(t, e) {
      return (
        (this.color = e),
        (this.changed = !1),
        (this.data = t),
        (this.type.type = o.Z.ALL),
        this
      );
    }
    _ensureHSL() {
      const t = this.data,
        { h: e, s: r, l: o } = t;
      void 0 === e && (t.h = i.A.channel.rgb2hsl(t, "h")),
        void 0 === r && (t.s = i.A.channel.rgb2hsl(t, "s")),
        void 0 === o && (t.l = i.A.channel.rgb2hsl(t, "l"));
    }
    _ensureRGB() {
      const t = this.data,
        { r: e, g: r, b: o } = t;
      void 0 === e && (t.r = i.A.channel.hsl2rgb(t, "r")),
        void 0 === r && (t.g = i.A.channel.hsl2rgb(t, "g")),
        void 0 === o && (t.b = i.A.channel.hsl2rgb(t, "b"));
    }
    get r() {
      const t = this.data,
        e = t.r;
      return this.type.is(o.Z.HSL) || void 0 === e
        ? (this._ensureHSL(), i.A.channel.hsl2rgb(t, "r"))
        : e;
    }
    get g() {
      const t = this.data,
        e = t.g;
      return this.type.is(o.Z.HSL) || void 0 === e
        ? (this._ensureHSL(), i.A.channel.hsl2rgb(t, "g"))
        : e;
    }
    get b() {
      const t = this.data,
        e = t.b;
      return this.type.is(o.Z.HSL) || void 0 === e
        ? (this._ensureHSL(), i.A.channel.hsl2rgb(t, "b"))
        : e;
    }
    get h() {
      const t = this.data,
        e = t.h;
      return this.type.is(o.Z.RGB) || void 0 === e
        ? (this._ensureRGB(), i.A.channel.rgb2hsl(t, "h"))
        : e;
    }
    get s() {
      const t = this.data,
        e = t.s;
      return this.type.is(o.Z.RGB) || void 0 === e
        ? (this._ensureRGB(), i.A.channel.rgb2hsl(t, "s"))
        : e;
    }
    get l() {
      const t = this.data,
        e = t.l;
      return this.type.is(o.Z.RGB) || void 0 === e
        ? (this._ensureRGB(), i.A.channel.rgb2hsl(t, "l"))
        : e;
    }
    get a() {
      return this.data.a;
    }
    set r(t) {
      this.type.set(o.Z.RGB), (this.changed = !0), (this.data.r = t);
    }
    set g(t) {
      this.type.set(o.Z.RGB), (this.changed = !0), (this.data.g = t);
    }
    set b(t) {
      this.type.set(o.Z.RGB), (this.changed = !0), (this.data.b = t);
    }
    set h(t) {
      this.type.set(o.Z.HSL), (this.changed = !0), (this.data.h = t);
    }
    set s(t) {
      this.type.set(o.Z.HSL), (this.changed = !0), (this.data.s = t);
    }
    set l(t) {
      this.type.set(o.Z.HSL), (this.changed = !0), (this.data.l = t);
    }
    set a(t) {
      (this.changed = !0), (this.data.a = t);
    }
  })({ r: 0, g: 0, b: 0, a: 0 }, "transparent");
