// vendor/module-15008.js — webpack module 15008
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useCombinedTranscript = function (e) {
  const t = (0, r.c)(40),
    {
      callSessionId: n,
      initialTranscriptClearedAt: a,
      onEntriesCompleted: g,
      onTerminalFlush: b,
    } = e,
    { mutate: S } = l.api.callSession.metadata.update.useMutation(),
    _ = n ?? "";
  let x;
  t[0] !== _
    ? ((x = { callSessionId: _ }), (t[0] = _), (t[1] = x))
    : (x = t[1]);
  const w = !!n;
  let E;
  t[2] !== w
    ? ((E = {
        enabled: w,
        staleTime: 1 / 0,
        gcTime: 0,
        refetchOnWindowFocus: !1,
        refetchOnMount: "always",
      }),
      (t[2] = w),
      (t[3] = E))
    : (E = t[3]);
  const { data: T } = l.api.callSession.transcription.get.useQuery(x, E);
  let k;
  t[4] === Symbol.for("react.memo_cache_sentinel")
    ? ((k = []), (t[4] = k))
    : (k = t[4]);
  const [C, I] = (0, o.useState)(k);
  let A;
  t[5] === Symbol.for("react.memo_cache_sentinel")
    ? ((A = []), (t[5] = A))
    : (A = t[5]);
  const O = (0, o.useRef)(A),
    R = (0, o.useRef)(a ?? null);
  let M;
  t[6] === Symbol.for("react.memo_cache_sentinel")
    ? ((M = (e) => {
        I(e);
      }),
      (t[6] = M))
    : (M = t[6]);
  const P = (0, c.useRequestAnimationFrameBatch)(M);
  let N;
  t[7] !== P
    ? ((N = (e) => {
        const t = e(O.current);
        (O.current = t), P(() => t);
      }),
      (t[7] = P),
      (t[8] = N))
    : (N = t[8]);
  const D = N,
    j = (0, o.useRef)(!1);
  let L, F;
  t[9] !== T
    ? ((F = () => {
        if (j.current) return;
        if (!T) return;
        if (O.current.length > 0) return void (j.current = !0);
        const e = R.current,
          t = T.filter((t) => !e || t.createdAt.getTime() > e.getTime()).map(v);
        t.length > 0 && ((O.current = t), I(t)), (j.current = !0);
      }),
      (L = [T]),
      (t[9] = T),
      (t[10] = L),
      (t[11] = F))
    : ((L = t[10]), (F = t[11])),
    (0, o.useEffect)(F, L);
  const U = y;
  let B;
  t[12] !== D
    ? ((B = (e, t) => {
        D((n) =>
          n.map((n) =>
            n.id === e
              ? { ...n, detection: t ?? void 0 }
              : "detecting" === t && "detecting" === n.detection
                ? { ...n, detection: void 0 }
                : n,
          ),
        );
      }),
      (t[12] = D),
      (t[13] = B))
    : (B = t[13]);
  const z = B;
  let H;
  t[14] !== D
    ? ((H = (e, t) => {
        if (0 === e.length) return;
        const n = new Set(e);
        D((e) => e.map((e) => (n.has(e.id) ? { ...e, saveState: t } : e)));
      }),
      (t[14] = D),
      (t[15] = H))
    : (H = t[15]);
  const V = H,
    q = m;
  let G;
  t[16] !== D
    ? ((G = (e) => {
        const { transcript: t, type: n } = e;
        D((e) => {
          let r = e;
          const o = [...e]
            .reverse()
            .find((e) => e.type === n && e.speaker === t.speaker);
          if (o && !o.completed)
            r = e.map((e) =>
              e === o
                ? {
                    ...e,
                    content: e.content + t.content,
                    partialContent: "",
                  }
                : e,
            );
          else if (t.content) {
            const o = (0, i.v7)();
            r = [
              ...e,
              {
                id: o,
                content: t.content,
                partialContent: "",
                type: n,
                speaker: t.speaker,
                createdAt: (0, s.serverNow)(),
                completed: !1,
                saveState: "pending",
              },
            ];
          }
          return q(r);
        });
      }),
      (t[16] = D),
      (t[17] = G))
    : (G = t[17]);
  const W = G;
  let $;
  t[18] !== D
    ? (($ = (e) => {
        const { transcript: t, type: n } = e;
        D((e) => {
          let r = e;
          const o = [...e]
            .reverse()
            .find((e) => e.type === n && e.speaker === t.speaker);
          if ((o && !t.content && (o.partialContent = ""), o && !o.completed))
            r = e.map((e) =>
              e === o ? { ...e, partialContent: t.content } : e,
            );
          else if (t.content) {
            const o = (0, i.v7)();
            r = [
              ...e,
              {
                id: o,
                content: "",
                partialContent: t.content,
                type: n,
                speaker: t.speaker,
                createdAt: (0, s.serverNow)(),
                completed: !1,
                saveState: "pending",
              },
            ];
          }
          return q(r);
        });
      }),
      (t[18] = D),
      (t[19] = $))
    : ($ = t[19]);
  const Y = $;
  let K, Z, Q, J;
  if (t[20] !== n || t[21] !== g || t[22] !== b || t[23] !== D || t[24] !== S) {
    let e;
    (K = () => {
      Q(), Z(), b?.();
      const e = (0, s.serverNow)();
      (R.current = e),
        D(h),
        n &&
          S({
            callSessionId: n,
            metadata: { transcriptClearedAt: e },
          });
    }),
      t[28] !== g || t[29] !== D
        ? ((e = (e) => {
            const t = [],
              n = O.current.map((n, r) => {
                if (n.completed || !e(n, r)) return n;
                const o = {
                  ...n,
                  content: U(n),
                  completed: !0,
                  partialContent: "",
                };
                return t.push(o), o;
              });
            D(() => q(n));
            const r = t.filter(f);
            return r.length > 0 && g?.(r), r;
          }),
          (t[28] = g),
          (t[29] = D),
          (t[30] = e))
        : (e = t[30]);
    const r = e,
      o = p;
    (Q = () => {
      if (!n) return;
      const e = O.current,
        t = e.findLastIndex(d),
        i = e.findLastIndex(o),
        a = -1 !== i && t > i;
      r((e) => "share" === e.type || (o(e) && a));
    }),
      (Z = () => {
        if (!n) return;
        const e = O.current,
          t = e.findLastIndex(u),
          i = e.findLastIndex(o),
          a = -1 !== t && i > t;
        r((e) => o(e) || ("share" === e.type && a));
      }),
      (t[20] = n),
      (t[21] = g),
      (t[22] = b),
      (t[23] = D),
      (t[24] = S),
      (t[25] = K),
      (t[26] = Z),
      (t[27] = Q);
  } else (K = t[25]), (Z = t[26]), (Q = t[27]);
  return (
    t[31] !== Y ||
    t[32] !== W ||
    t[33] !== K ||
    t[34] !== C ||
    t[35] !== Z ||
    t[36] !== Q ||
    t[37] !== V ||
    t[38] !== z
      ? ((J = {
          addTranscriptToCombined: W,
          addPartialTranscriptToCombined: Y,
          clearCombinedTranscript: K,
          combinedTranscript: C,
          combinedTranscriptRef: O,
          transcriptClearedAtRef: R,
          handleEndOfShareUtterance: Q,
          handleEndOfMicrophoneUtterance: Z,
          setEntriesSaveState: V,
          setEntryDetection: z,
        }),
        (t[31] = Y),
        (t[32] = W),
        (t[33] = K),
        (t[34] = C),
        (t[35] = Z),
        (t[36] = Q),
        (t[37] = V),
        (t[38] = z),
        (t[39] = J))
      : (J = t[39]),
    J
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(59941 /* vendor/module-59941 */),
  a = n(96062 /* vendor/module-96062 */),
  s = n(72974 /* vendor/module-72974 */),
  l = n(44189 /* vendor/module-44189 */),
  c = n(5656 /* vendor/module-5656 */);
function u(e) {
  return "share" === e.type;
}
function d(e) {
  return "share" === e.type;
}
function p(e) {
  return "microphone" === e.type || "combined" === e.type;
}
function f(e) {
  return "" !== e.content;
}
function h() {
  return [];
}
function m(e) {
  return e.filter(g);
}
function g(e) {
  return "" !== e.content || "" !== e.partialContent;
}
function y(e) {
  return "" !== e.content ? e.content : e.partialContent;
}
function v(e) {
  return (0, a.hydrateTranscriptRow)(e);
}
