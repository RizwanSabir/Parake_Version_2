// vendor/module-57000.js — webpack module 57000
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.ENROLLED_SPEAKER_LABEL = void 0),
  (t.extractSpeakerIdentifiers = function (e) {
    if (1 !== e.speakers.length) return null;
    const t = e.speakers[0]?.speaker_identifiers ?? [];
    return t.length > 0 ? t : null;
  }),
  (t.isSpeakerIdIgnoredWarning = function (e) {
    return "speaker_id" === e.type;
  }),
  (t.assessEnrollment = function (e, n) {
    const o = e.find((e) => e.language === n) ?? null;
    return o
      ? "active" !== o.status
        ? { verdict: "stale", enrollment: o, speakers: null }
        : o.model !== r.SPEECHMATICS_MODEL
          ? {
              verdict: "model_mismatch",
              enrollment: o,
              speakers: null,
            }
          : {
              verdict: "usable",
              enrollment: o,
              speakers: [
                {
                  label: t.ENROLLED_SPEAKER_LABEL,
                  speaker_identifiers: o.speakerIdentifiers,
                },
              ],
            }
      : { verdict: "missing", enrollment: o, speakers: null };
  });
const r = n(44612 /* vendor/module-44612 */);
t.ENROLLED_SPEAKER_LABEL = "Self";
