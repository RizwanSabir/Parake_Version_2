// app/hooks/use-asset-url.js — webpack module 36651
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useAssetUrl = function () {
  const e = (0, r.c)(2),
    { apiConfig: t } = (0, o.useApiConfig)();
  let n;
  return (
    e[0] !== t.url
      ? ((n = (e) => `${t.url}${e}`), (e[0] = t.url), (e[1] = n))
      : (n = e[1]),
    n
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(8932 /* app/components/api-config-provider */);
