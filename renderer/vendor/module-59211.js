// vendor/module-59211.js — webpack module 59211
// params: (e, t, n) = (module, exports, require)
t.useIsPhone = function () {
  return (0, r.useSyncExternalStore)(i, s, a);
};
const r = n(14041 /* vendor/module-14041 */),
  o = n(57826 /* vendor/module-57826 */);
function i(e) {
  const t = window.matchMedia(o.PHONE_MEDIA_QUERY);
  return (
    t.addEventListener("change", e), () => t.removeEventListener("change", e)
  );
}
function a() {
  return !1;
}
function s() {
  return window.matchMedia(o.PHONE_MEDIA_QUERY).matches;
}
