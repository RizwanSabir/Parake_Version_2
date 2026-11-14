// app/components/show-delete-toast.js — webpack module 14305
// params: (e, t, n) = (module, exports, require)
"use strict";
t.showDeleteToast = function (e) {
  i.toast.success(e, {
    icon: (0, r.jsx)(o.Trash2, {
      className: "text-error size-6 max-md:size-5",
    }),
    classNames: { icon: "max-md:!bg-error/10" },
  });
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(87952 /* vendor/module-87952 */),
  i = n(44572 /* vendor/module-44572 */);
