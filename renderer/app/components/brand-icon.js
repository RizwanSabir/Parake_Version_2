// app/components/brand-icon.js — webpack module 69893
// params: (e, t, n) = (module, exports, require)
"use strict";
t.BrandIcon = function (e) {
  const t = (0, o.c)(18),
    { icon: n, className: i, pixelClassName: c } = e;
  let u;
  t[0] !== n ? ((u = l.get(n)), (t[0] = n), (t[1] = u)) : (u = t[1]);
  const d = u;
  if (!d) {
    let e;
    return (
      t[2] !== n || t[3] !== i
        ? ((e = (0, r.jsx)(n, { className: i })),
          (t[2] = n),
          (t[3] = i),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let p, f;
  t[5] !== i
    ? ((p = (0, a.cn)(i, "[display:var(--brand-icon-line)]")),
      (t[5] = i),
      (t[6] = p))
    : (p = t[6]),
    t[7] !== n || t[8] !== p
      ? ((f = (0, r.jsx)(n, { className: p })),
        (t[7] = n),
        (t[8] = p),
        (t[9] = f))
      : (f = t[9]);
  const h = c ?? i;
  let m, g, y;
  return (
    t[10] !== h
      ? ((m = (0, a.cn)(h, "[display:var(--brand-icon-pixel)]")),
        (t[10] = h),
        (t[11] = m))
      : (m = t[11]),
    t[12] !== d || t[13] !== m
      ? ((g = (0, r.jsx)(s.PixelIcon, { name: d, className: m })),
        (t[12] = d),
        (t[13] = m),
        (t[14] = g))
      : (g = t[14]),
    t[15] !== f || t[16] !== g
      ? ((y = (0, r.jsxs)(r.Fragment, { children: [f, g] })),
        (t[15] = f),
        (t[16] = g),
        (t[17] = y))
      : (y = t[17]),
    y
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(81774 /* app/components/pixel-icon */),
  l = new Map([
    [i.AudioLines, "audio-waveform"],
    [i.Bird, "message"],
    [i.BookOpen, "book-open"],
    [i.Bot, "robot"],
    [i.BriefcaseBusiness, "briefcase"],
    [i.Building2, "building"],
    [i.CircleUser, "user"],
    [i.ClipboardPaste, "clipboard"],
    [i.Contact, "contact"],
    [i.CreditCard, "credit-card"],
    [i.Eraser, "eraser"],
    [i.FilePenLine, "pen-square"],
    [i.FileText, "file-text"],
    [i.Gift, "gift"],
    [i.Globe, "globe"],
    [i.GraduationCap, "teach"],
    [i.Images, "images"],
    [i.Info, "info-box"],
    [i.LifeBuoy, "circle-question"],
    [i.Linkedin, "linkedin"],
    [i.LockKeyhole, "lock"],
    [i.LogOut, "logout"],
    [i.Mail, "mail"],
    [i.MessageCircleQuestion, "circle-question"],
    [i.MessageSquare, "message"],
    [i.MessagesSquare, "message-text"],
    [i.Mic, "mic"],
    [i.MonitorSmartphone, "monitor"],
    [i.NotebookPen, "notebook"],
    [i.PencilLine, "pencil"],
    [i.Phone, "phone"],
    [i.PhoneCall, "phone-call"],
    [i.ScreenShare, "monitor"],
    [i.ShieldCheck, "shield"],
    [i.Sparkles, "sparkles"],
    [i.Star, "star"],
    [i.ThumbsUp, "thumbs-up"],
    [i.Trash2, "trash"],
    [i.Upload, "upload"],
    [i.User, "user"],
    [i.Video, "video"],
  ]);
