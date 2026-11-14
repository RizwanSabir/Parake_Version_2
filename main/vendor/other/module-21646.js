// vendor/other/module-21646.js — webpack module 21646
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(39053 /* vendor/other/module-39053 */),
  i = [
    "replayIntegration",
    "replayCanvasIntegration",
    "feedbackIntegration",
    "feedbackModalIntegration",
    "feedbackScreenshotIntegration",
    "captureConsoleIntegration",
    "contextLinesIntegration",
    "linkedErrorsIntegration",
    "dedupeIntegration",
    "extraErrorDataIntegration",
    "graphqlClientIntegration",
    "httpClientIntegration",
    "reportingObserverIntegration",
    "rewriteFramesIntegration",
    "browserProfilingIntegration",
    "moduleMetadataIntegration",
    "instrumentAnthropicAiClient",
    "instrumentOpenAiClient",
    "instrumentGoogleGenAIClient",
    "instrumentStateGraph",
    "instrumentLangGraph",
    "createLangChainCallbackHandler",
    "instrumentLangChainEmbeddings",
  ],
  s = {
    replayCanvasIntegration: "replay-canvas",
    feedbackModalIntegration: "feedback-modal",
    feedbackScreenshotIntegration: "feedback-screenshot",
  },
  a = o.WINDOW;
t.lazyLoadIntegration = async function (e, t) {
  const n = i.includes(e)
      ? (function (e) {
          return s[e] || e.replace("Integration", "").toLowerCase();
        })(e)
      : void 0,
    c = (a.Sentry = a.Sentry || {});
  if (!n) throw new Error(`Cannot lazy load integration: ${e}`);
  const u = c[e];
  if ("function" == typeof u && !("_isShim" in u)) return u;
  const l = (function (e) {
      const t = r.getClient(),
        n = t?.getOptions()?.cdnBaseUrl || "https://browser.sentry-cdn.com";
      return new URL(`/${r.SDK_VERSION}/${e}.min.js`, n).toString();
    })(n),
    d = o.WINDOW.document.createElement("script");
  (d.src = l),
    (d.crossOrigin = "anonymous"),
    (d.referrerPolicy = "strict-origin"),
    t && d.setAttribute("nonce", t);
  const p = new Promise((e, t) => {
      d.addEventListener("load", () => e()), d.addEventListener("error", t);
    }),
    f = o.WINDOW.document.currentScript,
    h = o.WINDOW.document.body || o.WINDOW.document.head || f?.parentElement;
  if (!h)
    throw new Error(
      `Could not find parent element to insert lazy-loaded ${e} script`,
    );
  h.appendChild(d);
  try {
    await p;
  } catch {
    throw new Error(`Error when loading integration: ${e}`);
  }
  const g = c[e];
  if ("function" != typeof g)
    throw new Error(`Could not load integration: ${e}`);
  return g;
};
