// vendor/module-93384.js — webpack module 93384
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.y = t.NOTHING_HEARD_MESSAGE = void 0),
  (t.judgeAnswerPress = function (
    e,
    { isMobile: n, isMock: r, micOnlySince: a },
  ) {
    const s = e.filter((e) => i(e) > 0),
      l = n
        ? s
        : s.filter((e) =>
            ((e, n) =>
              "microphone" !== e.type ||
              (!(!n || !e.createdAt) &&
                e.createdAt.getTime() >= n.getTime() - t.y))(e, a),
          );
    return 0 === l.length
      ? r
        ? "nothing-heard"
        : n || a
          ? "mic-silent"
          : s.reduce((e, t) => e + i(t), 0) >= 3
            ? "computer-audio-silent"
            : "nothing-heard"
      : !n &&
          a &&
          l.every(
            (e) =>
              "combined" === e.type && e.speaker === o.ENROLLED_SPEAKER_LABEL,
          )
        ? "only-you"
        : "answer";
  });
const r = n(57135 /* vendor/module-57135 */),
  o = n(57e3);
(t.NOTHING_HEARD_MESSAGE =
  "Nothing heard from the other side of the call yet, so there's nothing to answer. If they've already asked something, check that the call's audio is being captured."),
  (t.y = 3e4);
const i = (e) => (0, r.wordCount)(`${e.content} ${e.partialContent}`);
