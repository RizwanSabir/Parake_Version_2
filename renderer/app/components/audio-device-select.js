// app/components/audio-device-select.js — webpack module 36585
// params: (e, t, n) = (module, exports, require)
"use strict";
t.AudioDeviceSelect = function ({
  value: e,
  onChange: t,
  options: n,
  ariaLabel: u,
  disabled: d,
  open: p,
  onOpenChange: f,
}) {
  const [h, m] = (0, a.useState)(null),
    g = e ?? c.SYSTEM_DEFAULT_DEVICE_VALUE;
  return (0, r.jsxs)(l.Select, {
    value: g,
    onValueChange: async (e) => {
      if (null === h)
        if (e !== g) {
          m(e);
          try {
            await t(e === c.SYSTEM_DEFAULT_DEVICE_VALUE ? null : e);
          } finally {
            m(null), f(!1);
          }
        } else f(!1);
    },
    disabled: d,
    open: p,
    onOpenChange: (e, t) => {
      (e || "item-press" !== t.reason) && f(e);
    },
    children: [
      (0, r.jsx)(o.Select.Trigger, {
        "aria-label": u,
        disabled: d,
        render: (0, r.jsx)(s.Button, {
          size: "icon",
          variant: "ghost",
          className:
            "h-8 w-6 rounded-(--radius-disc) hover:bg-neutral-100 dark:hover:bg-neutral-900",
          children: (0, r.jsx)(i.ChevronDown, {
            className: "size-3 stroke-neutral-800 dark:stroke-neutral-100",
          }),
        }),
      }),
      (0, r.jsx)(l.SelectContent, {
        transparent: !0,
        align: "end",
        children: n.map((e) =>
          (0, r.jsx)(
            l.SelectItem,
            {
              value: e.value,
              disabled: null !== h && h !== e.value,
              loading: h === e.value,
              children: e.label,
            },
            e.value,
          ),
        ),
      }),
    ],
  });
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(21044 /* vendor/module-21044 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(99683 /* vendor/module-99683 */),
  l = n(65239 /* app/components/select-value */),
  c = n(98479 /* vendor/module-98479 */);
