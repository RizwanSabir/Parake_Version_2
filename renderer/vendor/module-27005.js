// vendor/module-27005.js — webpack module 27005
// params: (e, t, n) = (module, exports, require)
(t.AUTO_ANSWER_STATUS_LABEL = void 0),
  (t.useAutoAnswerIndicatorStatus = function (e) {
    const t = (0, r.c)(11),
      {
        autoAnswer: n,
        sourceTranscribing: i,
        isGenerating: a,
        combinedTranscript: s,
      } = e;
    let l, c;
    if (t[0] !== s) {
      (l = null), (c = null);
      for (let e = s.length - 1; e >= 0; e--) {
        const t = s[e];
        if (t?.detection) {
          (l = t.id), (c = t.detection);
          break;
        }
      }
      (t[0] = s), (t[1] = l), (t[2] = c);
    } else (l = t[1]), (c = t[2]);
    const [u, d] = (0, o.useState)(null),
      p = (0, o.useRef)(void 0),
      f = (0, o.useRef)(null);
    let h, m, g, y;
    return (
      t[3] !== l || t[4] !== c
        ? ((h = () => {
            const e = l && c ? `${l}:${c}` : null;
            var t;
            void 0 !== p.current
              ? e !== p.current &&
                ((p.current = e),
                f.current && clearTimeout(f.current),
                null !== (t = c) && "detecting" !== t
                  ? (d(c), (f.current = setTimeout(() => d(null), 3e3)))
                  : d(null))
              : (p.current = e);
          }),
          (t[3] = l),
          (t[4] = c),
          (t[5] = h))
        : (h = t[5]),
      t[6] !== l || t[7] !== c
        ? ((m = [l, c]), (t[6] = l), (t[7] = c), (t[8] = m))
        : (m = t[8]),
      (0, o.useEffect)(h, m),
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = () => () => {
            f.current && clearTimeout(f.current);
          }),
          (y = []),
          (t[9] = g),
          (t[10] = y))
        : ((g = t[9]), (y = t[10])),
      (0, o.useEffect)(g, y),
      n
        ? u ||
          ("detecting" === c
            ? "checking"
            : a
              ? "generating"
              : i
                ? "waiting"
                : "on")
        : a
          ? "generating"
          : "off"
    );
  });
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */);
t.AUTO_ANSWER_STATUS_LABEL = {
  generating: "Generating...",
  checking: "Checking...",
  question: "Question detected",
  "no-question": "No question",
  error: "Detection failed",
  waiting: "Auto Answer On",
  on: "Auto Answer On",
  off: "Auto Answer Off",
};
