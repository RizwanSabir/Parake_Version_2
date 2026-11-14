// vendor/other/module-68956.js — webpack module 68956
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(57230 /* vendor/other/module-57230 */),
  i = n(39053 /* vendor/other/module-39053 */),
  s = 1e6,
  a =
    "window" in r.GLOBAL_OBJ &&
    r.GLOBAL_OBJ.window === r.GLOBAL_OBJ &&
    "undefined" == typeof importScripts,
  c = String(0),
  u = a ? "main" : "worker",
  l = i.WINDOW.navigator;
let d = "",
  p = "",
  f = "",
  h = l?.userAgent || "",
  g = "";
const m = l?.language || l?.languages?.[0] || "",
  _ = l?.userAgentData;
var S;
function E(e) {
  return (function (e) {
    return !("thread_metadata" in e);
  })(e)
    ? T(e)
    : e;
}
function y(e, t, n, s) {
  if ("transaction" !== s.type)
    throw new TypeError(
      "Profiling events may only be attached to transactions, this should never occur.",
    );
  if (null == n)
    throw new TypeError(
      `Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`,
    );
  const a = (function (e) {
      const t = e.contexts?.trace?.trace_id;
      return (
        "string" == typeof t &&
          32 !== t.length &&
          o.DEBUG_BUILD &&
          r.debug.log(`[Profiling] Invalid traceId: ${t} on profiled event`),
        "string" != typeof t ? "" : t
      );
    })(s),
    u = E(n),
    l =
      t ||
      ("number" == typeof s.start_timestamp
        ? 1e3 * s.start_timestamp
        : 1e3 * r.timestampInSeconds()),
    _ =
      "number" == typeof s.timestamp
        ? 1e3 * s.timestamp
        : 1e3 * r.timestampInSeconds();
  return {
    event_id: e,
    timestamp: new Date(l).toISOString(),
    platform: "javascript",
    version: "1",
    release: s.release || "",
    environment: s.environment || r.DEFAULT_ENVIRONMENT,
    runtime: {
      name: "javascript",
      version: i.WINDOW.navigator.userAgent,
    },
    os: { name: d, version: p, build_number: h },
    device: {
      locale: m,
      model: g,
      manufacturer: h,
      architecture: f,
      is_emulator: !1,
    },
    debug_meta: { images: b(n.resources) },
    profile: u,
    transactions: [
      {
        name: s.transaction || "",
        id: s.event_id || r.uuid4(),
        trace_id: a,
        active_thread_id: c,
        relative_start_ns: "0",
        relative_end_ns: (1e6 * (_ - l)).toFixed(0),
      },
    ],
  };
}
function T(e) {
  let t,
    n = 0;
  const o = {
      samples: [],
      stacks: [],
      frames: [],
      thread_metadata: { [c]: { name: u } },
    },
    i = e.samples[0];
  if (!i) return o;
  const a = i.timestamp,
    l = r.browserPerformanceTimeOrigin(),
    d =
      "number" == typeof performance.timeOrigin
        ? performance.timeOrigin
        : l || 0,
    p = d - (l || d);
  return (
    e.samples.forEach((r, i) => {
      if (void 0 === r.stackId)
        return (
          void 0 === t && ((t = n), (o.stacks[t] = []), n++),
          void (o.samples[i] = {
            elapsed_since_start_ns: ((r.timestamp + p - a) * s).toFixed(0),
            stack_id: t,
            thread_id: c,
          })
        );
      let u = e.stacks[r.stackId];
      const l = [];
      for (; u; ) {
        l.push(u.frameId);
        const t = e.frames[u.frameId];
        t &&
          void 0 === o.frames[u.frameId] &&
          (o.frames[u.frameId] = {
            function: t.name,
            abs_path:
              "number" == typeof t.resourceId
                ? e.resources[t.resourceId]
                : void 0,
            lineno: t.line,
            colno: t.column,
          }),
          (u = void 0 === u.parentId ? void 0 : e.stacks[u.parentId]);
      }
      const d = {
        elapsed_since_start_ns: ((r.timestamp + p - a) * s).toFixed(0),
        stack_id: n,
        thread_id: c,
      };
      (o.stacks[n] = l), (o.samples[i] = d), n++;
    }),
    o
  );
}
function b(e) {
  const t = r.getClient(),
    n = t?.getOptions(),
    o = n?.stackParser;
  return o ? r.getDebugImagesForResources(o, e) : [];
}
function I(e) {
  return ("number" != typeof e && "boolean" != typeof e) ||
    ("number" == typeof e && isNaN(e))
    ? (o.DEBUG_BUILD &&
        r.debug.warn(
          `[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
        ),
      !1)
    : !0 === e ||
        !1 === e ||
        !(e < 0 || e > 1) ||
        (o.DEBUG_BUILD &&
          r.debug.warn(
            `[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${e}.`,
          ),
        !1);
}
"object" == typeof (S = _) &&
  null !== S &&
  "getHighEntropyValues" in S &&
  _.getHighEntropyValues([
    "architecture",
    "model",
    "platform",
    "platformVersion",
    "fullVersionList",
  ])
    .then((e) => {
      if (
        ((d = e.platform || ""),
        (f = e.architecture || ""),
        (g = e.model || ""),
        (p = e.platformVersion || ""),
        e.fullVersionList?.length)
      ) {
        const t = e.fullVersionList[e.fullVersionList.length - 1];
        h = `${t.brand} ${t.version}`;
      }
    })
    .catch((e) => {});
let v = !1;
const A = new Map(),
  N = new WeakSet();
(t.MAX_PROFILE_DURATION_MS = 3e4),
  (t.PROFILED_ROOT_SPANS = N),
  (t.PROFILER_THREAD_ID_STRING = c),
  (t.PROFILER_THREAD_NAME = u),
  (t.addProfileToGlobalCache = function (e, t) {
    if ((A.set(e, t), A.size > 30)) {
      const e = A.keys().next().value;
      void 0 !== e && A.delete(e);
    }
  }),
  (t.addProfilesToEnvelope = function (e, t) {
    if (!t.length) return e;
    for (const n of t) e[1].push([{ type: "profile" }, n]);
    return e;
  }),
  (t.applyDebugMetadata = b),
  (t.convertJSSelfProfileToSampledFormat = T),
  (t.createProfileChunkPayload = function (e, t, n) {
    if (null == e)
      throw new TypeError(
        `Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`,
      );
    const o = (function (e) {
        const t = [];
        for (let n = 0; n < e.frames.length; n++) {
          const r = e.frames[n];
          r &&
            (t[n] = {
              function: r.name,
              abs_path:
                "number" == typeof r.resourceId
                  ? e.resources[r.resourceId]
                  : void 0,
              lineno: r.line,
              colno: r.column,
            });
        }
        const n = [];
        for (let t = 0; t < e.stacks.length; t++) {
          const r = e.stacks[t];
          if (!r) continue;
          const o = [];
          let i = r;
          for (; i; )
            o.push(i.frameId),
              (i = void 0 === i.parentId ? void 0 : e.stacks[i.parentId]);
          n[t] = o;
        }
        const o = r.browserPerformanceTimeOrigin(),
          i =
            "number" == typeof performance.timeOrigin
              ? performance.timeOrigin
              : o || 0,
          s = i - (o || i),
          a = [];
        for (let t = 0; t < e.samples.length; t++) {
          const n = e.samples[t];
          if (!n) continue;
          const r = (i + (n.timestamp - s)) / 1e3;
          a[t] = {
            stack_id: n.stackId ?? 0,
            thread_id: c,
            timestamp: r,
          };
        }
        return {
          frames: t,
          stacks: n,
          samples: a,
          thread_metadata: { [c]: { name: u } },
        };
      })(e),
      i = t.getOptions(),
      s = t.getSdkMetadata?.()?.sdk;
    return {
      chunk_id: r.uuid4(),
      client_sdk: {
        name: s?.name ?? "sentry.javascript.browser",
        version: s?.version ?? "0.0.0",
      },
      profiler_id: n || r.uuid4(),
      platform: "javascript",
      version: "2",
      release: i.release ?? "",
      environment: i.environment ?? "production",
      debug_meta: { images: b(e.resources) },
      profile: o,
    };
  }),
  (t.createProfilePayload = y),
  (t.createProfilingEvent = function (e, t, n, i) {
    return (function (e) {
      return e.samples.length < 2
        ? (o.DEBUG_BUILD &&
            r.debug.log(
              "[Profiling] Discarding profile because it contains less than 2 samples",
            ),
          !1)
        : !!e.frames.length ||
            (o.DEBUG_BUILD &&
              r.debug.log(
                "[Profiling] Discarding profile because it contains no frames",
              ),
            !1);
    })(n)
      ? y(e, t, n, i)
      : null;
  }),
  (t.enrichWithThreadInformation = E),
  (t.findProfiledTransactionsFromEnvelope = function (e) {
    const t = [];
    return (
      r.forEachEnvelopeItem(e, (e, n) => {
        if ("transaction" === n)
          for (let n = 1; n < e.length; n++) {
            const r = e[n];
            r?.contexts?.profile?.profile_id && t.push(e[n]);
          }
      }),
      t
    );
  }),
  (t.getActiveProfilesCount = function () {
    return A.size;
  }),
  (t.hasLegacyProfiling = function (e) {
    return void 0 !== e.profilesSampleRate;
  }),
  (t.isAutomatedPageLoadSpan = function (e) {
    return "pageload" === r.spanToJSON(e).op;
  }),
  (t.isValidSampleRate = I),
  (t.setThreadAttributes = function (e) {
    e.setAttribute("thread.id", c), e.setAttribute("thread.name", u);
  }),
  (t.shouldProfileSession = function (e) {
    if (v)
      return (
        o.DEBUG_BUILD &&
          r.debug.log(
            "[Profiling] Profiling has been disabled for the duration of the current user session as the JS Profiler could not be started.",
          ),
        !1
      );
    if ("trace" !== e.profileLifecycle && "manual" !== e.profileLifecycle)
      return (
        o.DEBUG_BUILD &&
          r.debug.warn(
            "[Profiling] Session not sampled. Invalid `profileLifecycle` option.",
          ),
        !1
      );
    const t = e.profileSessionSampleRate;
    return I(t)
      ? t
        ? Math.random() <= t
        : (o.DEBUG_BUILD &&
            r.debug.log(
              "[Profiling] Discarding profile because profileSessionSampleRate is not defined or set to 0",
            ),
          !1)
      : (o.DEBUG_BUILD &&
          r.debug.warn(
            "[Profiling] Discarding profile because of invalid profileSessionSampleRate.",
          ),
        !1);
  }),
  (t.shouldProfileSpanLegacy = function (e) {
    if (v)
      return (
        o.DEBUG_BUILD &&
          r.debug.log(
            "[Profiling] Profiling has been disabled for the duration of the current user session.",
          ),
        !1
      );
    if (!e.isRecording())
      return (
        o.DEBUG_BUILD &&
          r.debug.log(
            "[Profiling] Discarding profile because root span was not sampled.",
          ),
        !1
      );
    const t = r.getClient(),
      n = t?.getOptions();
    if (!n)
      return (
        o.DEBUG_BUILD &&
          r.debug.log("[Profiling] Profiling disabled, no options found."),
        !1
      );
    const i = n.profilesSampleRate;
    return I(i)
      ? i
        ? !!(!0 === i || Math.random() < i) ||
          (o.DEBUG_BUILD &&
            r.debug.log(
              `[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(i)})`,
            ),
          !1)
        : (o.DEBUG_BUILD &&
            r.debug.log(
              "[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0",
            ),
          !1)
      : (o.DEBUG_BUILD &&
          r.debug.warn(
            "[Profiling] Discarding profile because of invalid sample rate.",
          ),
        !1);
  }),
  (t.startJSSelfProfile = function () {
    const e = i.WINDOW.Profiler;
    if ("function" != typeof e)
      return void (
        o.DEBUG_BUILD &&
        r.debug.log(
          "[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.",
        )
      );
    const t = Math.floor(3e3);
    try {
      return new e({ sampleInterval: 10, maxBufferSize: t });
    } catch (e) {
      o.DEBUG_BUILD &&
        (r.debug.log(
          "[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header.",
        ),
        r.debug.log(
          "[Profiling] Disabling profiling for current user session.",
        )),
        (v = !0);
    }
  }),
  (t.takeProfileFromGlobalCache = function (e) {
    const t = A.get(e);
    return t && A.delete(e), t;
  }),
  (t.validateProfileChunk = function (e) {
    try {
      if (!e || "object" != typeof e)
        return { reason: "chunk is not an object" };
      const t = (e) => "string" == typeof e && /^[a-f0-9]{32}$/.test(e);
      if (!t(e.profiler_id))
        return { reason: "missing or invalid profiler_id" };
      if (!t(e.chunk_id)) return { reason: "missing or invalid chunk_id" };
      if (!e.client_sdk) return { reason: "missing client_sdk metadata" };
      const n = e.profile;
      return n
        ? Array.isArray(n.frames) && n.frames.length
          ? Array.isArray(n.stacks) && n.stacks.length
            ? Array.isArray(n.samples) && n.samples.length
              ? { valid: !0 }
              : { reason: "profile has no samples" }
            : { reason: "profile has no stacks" }
          : { reason: "profile has no frames" }
        : { reason: "missing profile data" };
    } catch (e) {
      return { reason: `unknown validation error: ${e}` };
    }
  });
