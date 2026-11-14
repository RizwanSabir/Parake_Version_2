// vendor/module-8204.js — webpack module 8204
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.R = void 0),
  (t.parseRealtimeTurnUsage = function (e) {
    const n = l.safeParse(e);
    if (!n.success) return null;
    const { id: r, usage: o } = n.data.response,
      i = o.input_token_details,
      a = t.R.safeParse({
        openaiResponseId: r,
        textInput: i.text_tokens,
        audioInput: i.audio_tokens,
        cachedTextInput: i.cached_tokens_details.text_tokens,
        cachedAudioInput: i.cached_tokens_details.audio_tokens,
        textOutput: o.output_token_details.text_tokens,
        audioOutput: o.output_token_details.audio_tokens,
      });
    return a.success ? a.data : null;
  });
const r = n(511 /* vendor/module-511 */),
  o = r.z.number().int().nonnegative().max(4e4),
  i = r.z.number().int().nonnegative().max(8e3);
t.R = r.z
  .object({
    openaiResponseId: r.z.string().min(1).max(128),
    textInput: o,
    audioInput: o,
    cachedTextInput: o,
    cachedAudioInput: o,
    textOutput: i,
    audioOutput: i,
  })
  .refine(
    (e) =>
      e.cachedTextInput <= e.textInput && e.cachedAudioInput <= e.audioInput,
    "Cached tokens exceed their input total",
  );
const a = r.z.number().int().nonnegative().catch(0),
  s = { text_tokens: 0, audio_tokens: 0 },
  l = r.z.object({
    type: r.z.literal("response.done"),
    response: r.z.object({
      id: r.z.string(),
      usage: r.z.object({
        input_token_details: r.z
          .object({
            text_tokens: a,
            audio_tokens: a,
            cached_tokens_details: r.z
              .object({ text_tokens: a, audio_tokens: a })
              .catch(s),
          })
          .catch({ ...s, cached_tokens_details: s }),
        output_token_details: r.z
          .object({ text_tokens: a, audio_tokens: a })
          .catch(s),
      }),
    }),
  });
