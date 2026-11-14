// vendor/module-64808.js — webpack module 64808
// params: (e, t, n) = (module, exports, require)
"use strict";
t.sessionMetadataSchema = t.T = void 0;
const r = n(511 /* vendor/module-511 */);
(t.T = ["connect", "offer", "answer", "share-off"]),
  (t.sessionMetadataSchema = r.z.object({
    transcriptClearedAt: r.z.coerce.date().optional(),
    aiMessagesClearedAt: r.z.coerce.date().optional(),
    micOnly: r.z
      .object({ since: r.z.coerce.date(), via: r.z.enum(t.T) })
      .nullable()
      .optional(),
    micOnlyOfferDeclined: r.z.boolean().optional(),
    micCheckShown: r.z.boolean().optional(),
    voicePrompt: r.z.enum(["reminder", "dismissed"]).optional(),
  }));
