// vendor/module-47971.js — webpack module 47971
// params: (e) = (module, exports, require)
e.exports = function (e, t) {
  if ("function" != typeof e)
    throw new TypeError(
      `Expected the first argument to be a \`function\`, got \`${typeof e}\`.`,
    );
  let n,
    r = 0;
  return function (...o) {
    clearTimeout(n);
    const i = Date.now(),
      a = t - (i - r);
    a <= 0
      ? ((r = i), e.apply(this, o))
      : (n = setTimeout(() => {
          (r = Date.now()), e.apply(this, o);
        }, a));
  };
};
