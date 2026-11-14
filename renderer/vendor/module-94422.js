// vendor/module-94422.js — webpack module 94422
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useTranscriptionLanguages = function () {
  const e = r.api.configuration.getLanguages.useQuery(void 0, {
    staleTime: 3e5,
  });
  return {
    data: e.data,
    isLoading: e.isLoading,
    error: e.error,
    getLanguageLabel: (t) => {
      const n = e.data?.find((e) => e.value === t);
      return n?.label;
    },
  };
};
const r = n(44189 /* vendor/module-44189 */);
