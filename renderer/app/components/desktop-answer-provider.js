// app/components/desktop-answer-provider.js — webpack module 78127
// params: (e, t, n) = (module, exports, require)
"use strict";
t.DesktopAnswerProvider = function (e) {
  const t = (0, o.c)(2),
    { children: n } = e;
  let i;
  return (
    t[0] !== n
      ? ((i = (0, r.jsx)(a.AnswerProvider, { copy: s, children: n })),
        (t[0] = n),
        (t[1] = i))
      : (i = t[1]),
    i
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(44572 /* vendor/module-44572 */),
  a = n(97329 /* vendor/module-97329 */);
async function s(e) {
  try {
    await window.electron.ipcRendererProxy.invoke(
      "renderer/write-clipboard",
      e,
    );
  } catch (e) {
    throw (i.toast.error("Failed to copy to clipboard"), e);
  }
}
