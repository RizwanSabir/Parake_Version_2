// vendor/module-57949.js — webpack module 57949
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, {
  BM: () => s,
  CW: () => r,
  Ee: () => d,
  HP: () => u,
  JQ: () => a,
  Ny: () => h,
  On: () => p,
  cx: () => i,
  es: () => f,
  lV: () => o,
  ok: () => l,
  ol: () => c,
});
const r = m(/[A-Za-z]/),
  o = m(/[\dA-Za-z]/),
  i = m(/[#-'*+\--9=?A-Z^-~]/);
function a(e) {
  return null !== e && (e < 32 || 127 === e);
}
const s = m(/\d/),
  l = m(/[\dA-Fa-f]/),
  c = m(/[!-/:-@[-`{-~]/);
function u(e) {
  return null !== e && e < -2;
}
function d(e) {
  return null !== e && (e < 0 || 32 === e);
}
function p(e) {
  return -2 === e || -1 === e || 32 === e;
}
const f = m(/\p{P}|\p{S}/u),
  h = m(/\s/);
function m(e) {
  return function (t) {
    return null !== t && t > -1 && e.test(String.fromCharCode(t));
  };
}
