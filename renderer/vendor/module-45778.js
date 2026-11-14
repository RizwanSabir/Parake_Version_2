// vendor/module-45778.js — webpack module 45778
// params: (e, t, n) = (module, exports, require)
"use strict";
t.VoiceProfileIntro = function () {
  const e = (0, o.c)(2);
  let t, n;
  return (
    e[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((t = (0, r.jsx)(i.Typography, {
          variant: "title-sm",
          render: (0, r.jsx)("h2", {}),
          children: "Voice Profile",
        })),
        (e[0] = t))
      : (t = e[0]),
    e[1] === Symbol.for("react.memo_cache_sentinel")
      ? ((n = (0, r.jsxs)(r.Fragment, {
          children: [
            t,
            (0, r.jsx)(i.Typography, {
              variant: "body",
              render: (0, r.jsx)("p", {
                className: "text-muted-foreground",
              }),
              children:
                "A short recording of your voice lets us tell your speech apart from other people when one microphone hears everyone, on a phone or in Microphone only, so the AI knows which side of the conversation you are on. Record one per language you hold calls in.",
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(34483 /* app/components/typography-variants */);
