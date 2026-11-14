// vendor/module-68956.js — webpack module 68956
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(57230 /* vendor/module-57230 */),
  i = n(39053 /* vendor/module-39053 */),
  a = 1e6,
  s =
    "window" in r.GLOBAL_OBJ &&
    r.GLOBAL_OBJ.window === r.GLOBAL_OBJ &&
    "undefined" == typeof importScripts,
  l = String(0),
  c = s ? "main" : "worker",
  u = i.WINDOW.navigator;
let d = "",
  p = "",
  f = "",
  h = u?.userAgent || "",
  m = "";
const g = u?.language || u?.languages?.[0] || "",
  y = u?.userAgentData;
var v;
function b(e) {
  return (function (e) {
    return !("thread_metadata" in e);
  })(e)
    ? _(e)
    : e;
}
function S(e, t, n, a) {
  if ("transaction" !== a.type)
    throw new TypeError(
      "Profiling events may only be attached to transactions, this should never occur.",
    );
  if (null == n)
    throw new TypeError(
      `Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`,
    );
  const s = (function (e) {
      const t = e.contexts?.trace?.trace_id;
      return (
        "string" == typeof t &&
          32 !== t.length &&
          o.DEBUG_BUILD &&
          r.debug.log(`[Profiling] Invalid traceId: ${t} on profiled event`),
        "string" != typeof t ? "" : t
      );
    })(a),
    c = b(n),
    u =
      t ||
      ("number" == typeof a.start_timestamp
        ? 1e3 * a.start_timestamp
        : 1e3 * r.timestampInSeconds()),
    y =
      "number" == typeof a.timestamp
        ? 1e3 * a.timestamp
        : 1e3 * r.timestampInSeconds();
  return {
    event_id: e,
    timestamp: new Date(u).toISOString(),
    platform: "javascript",
    version: "1",
    release: a.release || "",
    environment: a.environment || r.DEFAULT_ENVIRONMENT,
    runtime: {
      name: "javascript",
      version: i.WINDOW.navigator.userAgent,
    },
    os: { name: d, version: p, build_number: h },
    device: {
      locale: g,
      model: m,
      manufacturer: h,
      architecture: f,
      is_emulator: !1,
    },
    debug_meta: { images: x(n.resources) },
    profile: c,
    transactions: [
      {
        name: a.transaction || "",
        id: a.event_id || r.uuid4(),
        trace_id: s,
        active_thread_id: l,
        relative_start_ns: "0",
        relative_end_ns: (1e6 * (y - u)).toFixed(0),
      },
    ],
  };
}
function _(e) {
  let t,
    n = 0;
  const o = {
      samples: [],
      stacks: [],
      frames: [],
      thread_metadata: { [l]: { name: c } },
    },
    i = e.samples[0];
  if (!i) return o;
  const s = i.timestamp,
    u = r.browserPerformanceTimeOrigin(),
    d =
      "number" == typeof performance.timeOrigin
        ? performance.timeOrigin
        : u || 0,
    p = d - (u || d);
  return (
    e.samples.forEach((r, i) => {
      if (void 0 === r.stackId)
        return (
          void 0 === t && ((t = n), (o.stacks[t] = []), n++),
          void (o.samples[i] = {
            elapsed_since_start_ns: ((r.timestamp + p - s) * a).toFixed(0),
            stack_id: t,
            thread_id: l,
          })
        );
      let c = e.stacks[r.stackId];
      const u = [];
      for (; c; ) {
        u.push(c.frameId);
        const t = e.frames[c.frameId];
        t &&
          void 0 === o.frames[c.frameId] &&
          (o.frames[c.frameId] = {
            function: t.name,
            abs_path:
              "number" == typeof t.resourceId
                ? e.resources[t.resourceId]
                : void 0,
            lineno: t.line,
            colno: t.column,
          }),
          (c = void 0 === c.parentId ? void 0 : e.stacks[c.parentId]);
      }
      const d = {
        elapsed_since_start_ns: ((r.timestamp + p - s) * a).toFixed(0),
        stack_id: n,
        thread_id: l,
      };
      (o.stacks[n] = u), (o.samples[i] = d), n++;
    }),
    o
  );
}
function x(e) {
  const t = r.getClient(),
    n = t?.getOptions(),
    o = n?.stackParser;
  return o ? r.getDebugImagesForResources(o, e) : [];
}
function w(e) {
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
"object" == typeof (v = y) &&
  null !== v &&
  "getHighEntropyValues" in v &&
  y
    .getHighEntropyValues([
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
        (m = e.model || ""),
        (p = e.platformVersion || ""),
        e.fullVersionList?.length)
      ) {
        const t = e.fullVersionList[e.fullVersionList.length - 1];
        h = `${t.brand} ${t.version}`;
      }
    })
    .catch((e) => {});
let E = !1;
const T = new Map(),
  k = new WeakSet();
(t.MAX_PROFILE_DURATION_MS = 3e4),
  (t.PROFILED_ROOT_SPANS = k),
  (t.PROFILER_THREAD_ID_STRING = l),
  (t.PROFILER_THREAD_NAME = c),
  (t.addProfileToGlobalCache = function (e, t) {
    if ((T.set(e, t), T.size > 30)) {
      const e = T.keys().next().value;
      void 0 !== e && T.delete(e);
    }
  }),
  (t.addProfilesToEnvelope = function (e, t) {
    if (!t.length) return e;
    for (const n of t) e[1].push([{ type: "profile" }, n]);
    return e;
  }),
  (t.applyDebugMetadata = x),
  (t.convertJSSelfProfileToSampledFormat = _),
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
          a = i - (o || i),
          s = [];
        for (let t = 0; t < e.samples.length; t++) {
          const n = e.samples[t];
          if (!n) continue;
          const r = (i + (n.timestamp - a)) / 1e3;
          s[t] = {
            stack_id: n.stackId ?? 0,
            thread_id: l,
            timestamp: r,
          };
        }
        return {
          frames: t,
          stacks: n,
          samples: s,
          thread_metadata: { [l]: { name: c } },
        };
      })(e),
      i = t.getOptions(),
      a = t.getSdkMetadata?.()?.sdk;
    return {
      chunk_id: r.uuid4(),
      client_sdk: {
        name: a?.name ?? "sentry.javascript.browser",
        version: a?.version ?? "0.0.0",
      },
      profiler_id: n || r.uuid4(),
      platform: "javascript",
      version: "2",
      release: i.release ?? "",
      environment: i.environment ?? "production",
      debug_meta: { images: x(e.resources) },
      profile: o,
    };
  }),
  (t.createProfilePayload = S),
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
      ? S(e, t, n, i)
      : null;
  }),
  (t.enrichWithThreadInformation = b),
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
    return T.size;
  }),
  (t.hasLegacyProfiling = function (e) {
    return void 0 !== e.profilesSampleRate;
  }),
  (t.isAutomatedPageLoadSpan = function (e) {
    return "pageload" === r.spanToJSON(e).op;
  }),
  (t.isValidSampleRate = w),
  (t.setThreadAttributes = function (e) {
    e.setAttribute("thread.id", l), e.setAttribute("thread.name", c);
  }),
  (t.shouldProfileSession = function (e) {
    if (E)
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
    return w(t)
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
    if (E)
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
    return w(i)
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
        (E = !0);
    }
  }),
  (t.takeProfileFromGlobalCache = function (e) {
    const t = T.get(e);
    return t && T.delete(e), t;
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
