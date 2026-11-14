// app/components/select-value.js — webpack module 65239
// params: (e, t, n) = (module, exports, require)
"use strict";
var r,
  o =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          void 0 === r && (r = n);
          var o = Object.getOwnPropertyDescriptor(t, n);
          (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
            (o = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, o);
        }
      : function (e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }),
  i =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t,
          });
        }
      : function (e, t) {
          e.default = t;
        }),
  a =
    (this && this.__importStar) ||
    ((r = function (e) {
      return (
        (r =
          Object.getOwnPropertyNames ||
          function (e) {
            var t = [];
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
            return t;
          }),
        r(e)
      );
    }),
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n = r(e), a = 0; a < n.length; a++)
          "default" !== n[a] && o(t, e, n[a]);
      return i(t, e), t;
    });
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SelectValue =
    t.SelectSeparator =
    t.SelectScrollUpButton =
    t.SelectScrollDownButton =
    t.SelectLabel =
    t.SelectItem =
    t.SelectGroup =
    t.Select =
      void 0),
  (t.SelectContent = function (e) {
    const t = (0, l.c)(6);
    let n, r;
    t[0] !== e
      ? (({ overlayOpacity: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
      : ((n = t[1]), (r = t[2]));
    const { overlayOpacity: o } = (0, d.useOverlayOpacity)(),
      i = n ?? o;
    let a;
    return (
      t[3] !== r || t[4] !== i
        ? ((a = (0, s.jsx)(c.SelectContent, {
            overlayOpacity: i,
            ...r,
          })),
          (t[3] = r),
          (t[4] = i),
          (t[5] = a))
        : (a = t[5]),
      a
    );
  }),
  (t.SelectTrigger = function (e) {
    const t = (0, l.c)(8);
    let n, r, o, i;
    return (
      t[0] !== e
        ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
        : ((n = t[1]), (r = t[2])),
      t[3] !== n
        ? ((o = (0, u.cn)("hover:bg-accent", n)), (t[3] = n), (t[4] = o))
        : (o = t[4]),
      t[5] !== r || t[6] !== o
        ? ((i = (0, s.jsx)(c.SelectTrigger, { className: o, ...r })),
          (t[5] = r),
          (t[6] = o),
          (t[7] = i))
        : (i = t[7]),
      i
    );
  });
const s = n(31085 /* vendor/module-31085 */),
  l = n(54005 /* vendor/module-54005 */),
  c =
    (a(n(14041 /* vendor/module-14041 */)),
    n(9664 /* app/components/select-trigger-icon-class-name */));
Object.defineProperty(t, "Select", {
  enumerable: !0,
  get: function () {
    return c.Select;
  },
}),
  Object.defineProperty(t, "SelectGroup", {
    enumerable: !0,
    get: function () {
      return c.SelectGroup;
    },
  }),
  Object.defineProperty(t, "SelectItem", {
    enumerable: !0,
    get: function () {
      return c.SelectItem;
    },
  }),
  Object.defineProperty(t, "SelectLabel", {
    enumerable: !0,
    get: function () {
      return c.SelectLabel;
    },
  }),
  Object.defineProperty(t, "SelectScrollDownButton", {
    enumerable: !0,
    get: function () {
      return c.SelectScrollDownButton;
    },
  }),
  Object.defineProperty(t, "SelectScrollUpButton", {
    enumerable: !0,
    get: function () {
      return c.SelectScrollUpButton;
    },
  }),
  Object.defineProperty(t, "SelectSeparator", {
    enumerable: !0,
    get: function () {
      return c.SelectSeparator;
    },
  }),
  Object.defineProperty(t, "SelectValue", {
    enumerable: !0,
    get: function () {
      return c.SelectValue;
    },
  });
const u = n(29113 /* vendor/module-29113 */),
  d = n(30551 /* app/hooks/use-overlay-opacity */);
