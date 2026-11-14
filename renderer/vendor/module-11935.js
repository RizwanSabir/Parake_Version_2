// vendor/module-11935.js — webpack module 11935
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.Tu = t.RM = t.OQ = t.ET = void 0),
  (t.useTranscriptSaveQueue = function (e) {
    const n = (0, r.c)(46),
      {
        callSessionId: f,
        onSaveStateChange: h,
        transport: m,
        batchIntervalMs: g,
        inFlightStaleMs: y,
        random: v,
      } = e,
      b = void 0 === g ? t.ET : g,
      S = void 0 === y ? t.Tu : y,
      _ = void 0 === v ? Math.random : v;
    let x;
    n[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((x = new Map()), (n[0] = x))
      : (x = n[0]);
    const w = (0, o.useRef)(x),
      E = (0, o.useRef)(null),
      T = (0, o.useRef)(!1),
      k = (0, o.useRef)(0);
    let C;
    n[1] === Symbol.for("react.memo_cache_sentinel")
      ? ((C = {}), (n[1] = C))
      : (C = n[1]);
    const I = (0, o.useRef)(C),
      A = (0, o.useRef)(f),
      O = (0, o.useRef)(m),
      R = (0, o.useRef)(h);
    let M, P;
    n[2] !== f || n[3] !== h || n[4] !== m
      ? ((M = () => {
          (A.current = f), (O.current = m), (R.current = h);
        }),
        (n[2] = f),
        (n[3] = h),
        (n[4] = m),
        (n[5] = M))
      : (M = n[5]),
      (0, o.useLayoutEffect)(M),
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = (e, t) => {
            const n = [];
            for (const r of e) {
              const e = w.current.get(r);
              e &&
                (n.push(r),
                "saved" !== t
                  ? ((e.saveState = t),
                    (e.claimedAt = "inFlight" === t ? Date.now() : null))
                  : w.current.delete(r));
            }
            0 !== n.length && R.current(n, t);
          }),
          (n[6] = P))
        : (P = n[6]);
    const N = P;
    let D;
    n[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((D = () => {
          null !== E.current && (clearTimeout(E.current), (E.current = null));
        }),
        (n[7] = D))
      : (D = n[7]);
    const j = D;
    let L;
    n[8] !== b || n[9] !== _
      ? ((L = () => {
          const e = k.current;
          if (0 === e) return b;
          const n = Math.min(t.OQ * 2 ** (e - 1), t.RM);
          return Math.round(n * (1 + 0.3 * _()));
        }),
        (n[8] = b),
        (n[9] = _),
        (n[10] = L))
      : (L = n[10]);
    const F = L,
      U = (0, o.useRef)(p);
    let B;
    n[11] !== F
      ? ((B = () => {
          j(),
            T.current ||
              (0 !== w.current.size &&
                (E.current = setTimeout(() => {
                  (E.current = null), U.current();
                }, F())));
        }),
        (n[11] = F),
        (n[12] = B))
      : (B = n[12]);
    const z = B;
    let H;
    n[13] !== z
      ? ((H = () => {
          null === E.current && z();
        }),
        (n[13] = z),
        (n[14] = H))
      : (H = n[14]);
    const V = H;
    let q;
    n[15] !== S
      ? ((q = () => {
          const e = Date.now(),
            t = [];
          for (const [n, r] of w.current)
            "inFlight" === r.saveState &&
              null !== r.claimedAt &&
              e - r.claimedAt >= S &&
              t.push(n);
          N(t, "pending");
        }),
        (n[15] = S),
        (n[16] = q))
      : (q = n[16]);
    const G = q;
    let W;
    n[17] === Symbol.for("react.memo_cache_sentinel")
      ? ((W = async () => {
          const e = O.current.getHeaders;
          if (!e) return I.current;
          try {
            I.current = await e();
          } catch {}
          return I.current;
        }),
        (n[17] = W))
      : (W = n[17]);
    const $ = W;
    let Y;
    n[18] === Symbol.for("react.memo_cache_sentinel")
      ? ((Y = async (e, t, n) => {
          const r = A.current;
          if (!r || 0 === e.length) return null;
          const { apiUrl: o, fetchImpl: a } = O.current;
          return (0, i.flushTranscriptEntries)({
            callSessionId: r,
            entries: e,
            apiUrl: o,
            headers: n,
            mode: t,
            fetchImpl: a,
          });
        }),
        (n[18] = Y))
      : (Y = n[18]);
    const K = Y;
    let Z;
    n[19] !== G || n[20] !== z
      ? ((Z = async () => {
          if (!A.current) return;
          G();
          const e = [...w.current.values()].filter(d);
          if (0 === e.length) return void z();
          const t = e.map(u);
          N(t, "inFlight");
          const n = await $(),
            r = await K(e.map(c), "awaited", n);
          r && 0 === r.failed
            ? ((k.current = 0), N(t, "saved"))
            : ((k.current = k.current + 1), N(t, "pending")),
            z();
        }),
        (n[19] = G),
        (n[20] = z),
        (n[21] = Z))
      : (Z = n[21]);
    const Q = Z;
    let J, X;
    n[22] !== Q
      ? ((J = () => {
          U.current = Q;
        }),
        (n[22] = Q),
        (n[23] = J))
      : (J = n[23]),
      (0, o.useLayoutEffect)(J),
      n[24] !== z
        ? ((X = async (e) => {
            j();
            const t = [...w.current.values()].sort(l);
            if (0 === t.length) return;
            const n = t.map(s),
              r = "awaited" === e ? await $() : I.current,
              o = await K(t.map(a), e, r);
            if (!o || o.failed > 0) return N(n, "pending"), void z();
            N(n.slice(o.dropped), "saved"),
              o.dropped > 0 && (N(n.slice(0, o.dropped), "pending"), z());
          }),
          (n[24] = z),
          (n[25] = X))
        : (X = n[25]);
    const ee = X,
      te = (0, o.useRef)(ee);
    let ne, re;
    n[26] !== ee
      ? ((ne = () => {
          te.current = ee;
        }),
        (n[26] = ee),
        (n[27] = ne))
      : (ne = n[27]),
      (0, o.useLayoutEffect)(ne),
      n[28] !== V
        ? ((re = (e) => {
            let t = !1;
            for (const n of e)
              n.content &&
                (w.current.has(n.id) ||
                  (w.current.set(n.id, {
                    input: {
                      id: n.id,
                      content: n.content,
                      type: n.type,
                      speaker: n.speaker,
                      createdAt: n.createdAt,
                    },
                    saveState: "pending",
                    claimedAt: null,
                  }),
                  (t = !0)));
            t && V();
          }),
          (n[28] = V),
          (n[29] = re))
        : (re = n[29]);
    const oe = re;
    let ie;
    n[30] !== z
      ? ((ie = (e) => {
          N(e, "inFlight"), z();
        }),
        (n[30] = z),
        (n[31] = ie))
      : (ie = n[31]);
    const ae = ie;
    let se;
    n[32] === Symbol.for("react.memo_cache_sentinel")
      ? ((se = (e) => N(e, "saved")), (n[32] = se))
      : (se = n[32]);
    const le = se;
    let ce;
    n[33] !== z
      ? ((ce = (e) => {
          N(e, "pending"), z();
        }),
        (n[33] = z),
        (n[34] = ce))
      : (ce = n[34]);
    const ue = ce;
    let de, pe, fe, he, me, ge, ye;
    return (
      n[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = () => {
            if ("undefined" == typeof document) return;
            const e = () => {
                te.current("unload");
              },
              t = () => {
                "hidden" === document.visibilityState && e();
              };
            return (
              window.addEventListener("pagehide", e),
              document.addEventListener("visibilitychange", t),
              () => {
                window.removeEventListener("pagehide", e),
                  document.removeEventListener("visibilitychange", t);
              }
            );
          }),
          (pe = []),
          (n[35] = de),
          (n[36] = pe))
        : ((de = n[35]), (pe = n[36])),
      (0, o.useEffect)(de, pe),
      n[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = () => {
            $();
          }),
          (he = [$]),
          (n[37] = fe),
          (n[38] = he))
        : ((fe = n[37]), (he = n[38])),
      (0, o.useEffect)(fe, he),
      n[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((me = () => (
            (T.current = !1),
            () => {
              (T.current = !0),
                te.current("awaited"),
                null !== E.current && clearTimeout(E.current),
                (E.current = null);
            }
          )),
          (ge = []),
          (n[39] = me),
          (n[40] = ge))
        : ((me = n[39]), (ge = n[40])),
      (0, o.useEffect)(me, ge),
      n[41] !== oe || n[42] !== ee || n[43] !== ae || n[44] !== ue
        ? ((ye = {
            enqueue: oe,
            markInFlight: ae,
            markSaved: le,
            markPending: ue,
            flushTerminal: ee,
          }),
          (n[41] = oe),
          (n[42] = ee),
          (n[43] = ae),
          (n[44] = ue),
          (n[45] = ye))
        : (ye = n[45]),
      ye
    );
  });
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(77754 /* vendor/module-77754 */);
function a(e) {
  return e.input;
}
function s(e) {
  return e.input.id;
}
function l(e, t) {
  return e.input.createdAt.getTime() - t.input.createdAt.getTime();
}
function c(e) {
  return e.input;
}
function u(e) {
  return e.input.id;
}
function d(e) {
  return "pending" === e.saveState;
}
async function p() {}
(t.ET = 5e3), (t.OQ = 1e3), (t.RM = 3e4), (t.Tu = 3e4);
