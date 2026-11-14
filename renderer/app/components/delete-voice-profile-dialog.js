// app/components/delete-voice-profile-dialog.js — webpack module 29527
// params: (e, t, n) = (module, exports, require)
t.DeleteVoiceProfileDialog = function (e) {
  const t = (0, o.c)(20),
    { open: n, onOpenChange: c, language: u, onDeleted: d } = e,
    p = s.api.useUtils(),
    { getLanguageLabel: f } = (0, i.useTranscriptionLanguages)();
  let h;
  t[0] !== f || t[1] !== u
    ? ((h = f(u) ?? u), (t[0] = f), (t[1] = u), (t[2] = h))
    : (h = t[2]);
  const m = h;
  let g;
  t[3] !== d || t[4] !== c || t[5] !== p
    ? ((g = {
        onSuccess: async () => {
          await p.speakerEnrollment.list.invalidate(),
            c(!1),
            (0, a.showDeleteToast)("Voice profile deleted"),
            d?.();
        },
      }),
      (t[3] = d),
      (t[4] = c),
      (t[5] = p),
      (t[6] = g))
    : (g = t[6]);
  const { mutate: y, isPending: v } =
    s.api.speakerEnrollment.delete.useMutation(g);
  let b, S, _, x, w;
  return (
    t[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((b = (0, r.jsx)("span", {
          className: "whitespace-nowrap",
          children: "voice recording?",
        })),
        (t[7] = b))
      : (b = t[7]),
    t[8] !== m
      ? ((S = (0, r.jsxs)(r.Fragment, {
          children: ["Are you sure you want to delete your ", m, " ", b],
        })),
        (t[8] = m),
        (t[9] = S))
      : (S = t[9]),
    t[10] === Symbol.for("react.memo_cache_sentinel")
      ? ((_ = (0, r.jsxs)(r.Fragment, {
          children: [
            "This will permanently delete the recording.",
            " ",
            (0, r.jsx)("span", {
              className: "block",
              children: "You will have to record it again.",
            }),
          ],
        })),
        (t[10] = _))
      : (_ = t[10]),
    t[11] !== y || t[12] !== u
      ? ((x = () => y({ language: u })), (t[11] = y), (t[12] = u), (t[13] = x))
      : (x = t[13]),
    t[14] !== v || t[15] !== c || t[16] !== n || t[17] !== S || t[18] !== x
      ? ((w = (0, r.jsx)(l.ConfirmDialog, {
          open: n,
          onOpenChange: c,
          title: S,
          description: _,
          confirmLabel: "Delete voice",
          cancelLabel: "Keep voice",
          sideBySide: !0,
          isPending: v,
          onConfirm: x,
        })),
        (t[14] = v),
        (t[15] = c),
        (t[16] = n),
        (t[17] = S),
        (t[18] = x),
        (t[19] = w))
      : (w = t[19]),
    w
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(94422 /* vendor/module-94422 */),
  a = n(14305 /* app/components/show-delete-toast */),
  s = n(44189 /* vendor/module-44189 */),
  l = n(16057 /* app/components/confirm-dialog */);
