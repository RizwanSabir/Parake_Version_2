// vendor/module-70506.js — webpack module 70506
// params: (e, t, n) = (module, exports, require)
"use strict";
t.turnToLiveMessages = function (e, t) {
  const n = (function (e) {
    const { response: t, trigger: n } = e;
    return t
      ? {
          id: t.id,
          role: "assistant",
          parts: t.fields
            ? [
                {
                  type: r.ANSWER_PART_TYPE,
                  id: "answer",
                  data: t.fields,
                },
              ]
            : [{ type: "text", text: t.content }],
          metadata: {
            trigger: {
              kind: n.kind,
              triggeredUsingShortcut: !1,
              isMobile: n.isMobile ?? !1,
              parts: [],
            },
            createdAt: t.createdAt,
            triggerId: n.id,
            thumb: null === e.myThumb ? void 0 : e.myThumb ? "up" : "down",
            outcome: n.outcome ?? void 0,
            documentChunks: n.documentChunks,
            ragQuery: n.ragQuery,
          },
        }
      : null;
  })(e);
  if (!n) return [];
  const { trigger: i } = e;
  return [
    {
      id: `${i.id}-user`,
      role: "user",
      parts: [],
      metadata: {
        trigger: {
          kind: i.kind,
          triggeredUsingShortcut: !1,
          isMobile: i.isMobile ?? !1,
          parts: [
            ...(i.content ? [{ type: "text", text: i.content }] : []),
            ...o(e, t),
          ],
        },
        createdAt: i.createdAt,
      },
    },
    n,
  ];
};
const r = n(47171 /* vendor/module-47171 */);
function o(e, t = "") {
  return e.trigger.screenshots.map((e) => ({
    type: "file",
    mediaType: e.mediaType,
    url: `${t}/api/call-screenshots/${e.id}`,
  }));
}
