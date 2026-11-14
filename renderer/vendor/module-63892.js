// vendor/module-63892.js — webpack module 63892
// params: (e, t, n) = (module, exports, require)
"use strict";
t.callSessionFormSchema = void 0;
const r = n(511 /* vendor/module-511 */),
  o = n(45482 /* vendor/module-45482 */),
  i = n(44239 /* vendor/module-44239 */),
  a = "Enter a valid URL.";
r.z
  .string()
  .trim()
  .max(2048, a)
  .url(a)
  .regex(/^https?:\/\//i, a),
  (t.callSessionFormSchema = r.z
    .object({
      sessionMode: r.z.enum(i.SESSION_MODE_VALUES),
      title: o.limits.sessionTitle.string("Title"),
      companyDomain: r.z.string().optional(),
      description: o.limits.jobDescription.string("Description"),
      jobPostUrl: r.z.string().nullable(),
      resumeId: r.z.string().nullable().optional(),
      documentSelectionMode: r.z.enum(i.DOCUMENT_SELECTION_MODE_VALUES),
      selectedDocumentIds: r.z.array(r.z.string()),
      language: r.z.string().min(1, "Language is required."),
      extraContext: o.limits.extraContext.string("Instructions"),
      responseLength: r.z.enum(i.RESPONSE_LENGTH_VALUES),
      responseFormat: r.z.enum(i.RESPONSE_FORMAT_VALUES),
      responseTone: r.z.enum(i.RESPONSE_TONE_VALUES),
      useStarMethod: r.z.boolean(),
      useFillerWords: r.z.boolean(),
      aiModel: r.z.enum(i.AI_MODEL_VALUES),
      autoAnswer: r.z.boolean(),
      saveTranscription: r.z.boolean(),
    })
    .superRefine((e, t) => {
      "interview" === e.sessionMode &&
        (0 === e.title.length &&
          t.addIssue({
            code: "custom",
            message: "Company is required for interview mode.",
            path: ["title"],
          }),
        0 === e.description.length &&
          t.addIssue({
            code: "custom",
            message: "Interview description is required for interview mode.",
            path: ["description"],
          }));
    }));
