// vendor/other/module-59437.js — webpack module 59437
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.matchWebMeetingService = function (e) {
  const t = new Set();
  for (const r of e)
    for (const e of n) e.titlePatterns?.some((e) => e.test(r)) && t.add(e.slug);
  const [r] = [...t];
  return 1 === t.size && r ? r : null;
}),
  (t.getMeetingAppSlug = function (e) {
    return (
      (function (e) {
        const t = r(e);
        if (!t) return null;
        const s = i(t);
        if (s) return s;
        const a = o(t).replace(/\.[^.\\/]+$/g, ""),
          c = (e) => a.includes(e) || t.includes(e);
        return n.find(({ namePatterns: e }) => e.some(c)) ?? null;
      })(e)?.slug ?? null
    );
  }),
  (t.isAllowedMeetingApp = function (e) {
    const t = r(e);
    return !!t && null !== i(t);
  }),
  (t.isBrowserMeetingApp = function (e) {
    return (
      !0 ===
      (function (e) {
        return e ? (n.find((t) => t.slug === e) ?? null) : null;
      })(e)?.isBrowser
    );
  });
const n = [
  {
    slug: "chrome",
    appName: "Chrome",
    appIds: ["com.google.chrome", "com.google.chrome.beta"],
    processNames: ["chrome.exe"],
    namePatterns: ["chrome"],
    isBrowser: !0,
  },
  {
    slug: "firefox",
    appName: "Firefox",
    appIds: ["org.mozilla.firefox"],
    processNames: ["firefox.exe"],
    namePatterns: ["firefox"],
    isBrowser: !0,
  },
  {
    slug: "zoom",
    appName: "Zoom",
    appIds: ["us.zoom.xos"],
    processNames: ["zoom.exe"],
    namePatterns: ["zoom"],
  },
  {
    slug: "slack",
    appName: "Slack",
    appIds: ["com.tinyspeck.slackmacgap"],
    processNames: ["slack.exe"],
    namePatterns: ["slack"],
  },
  {
    slug: "arc",
    appName: "Arc",
    appIds: ["company.thebrowser.browser"],
    processNames: ["arc.exe"],
    namePatterns: ["arc"],
    isBrowser: !0,
  },
  {
    slug: "webex",
    appName: "Webex",
    appIds: ["com.cisco.webexmeetingsapp"],
    processNames: ["webex.exe"],
    namePatterns: ["webex"],
  },
  {
    slug: "microsoft_teams",
    appName: "Microsoft Teams",
    appIds: ["com.microsoft.teams2", "com.microsoft.teams"],
    processNames: ["ms-teams.exe", "teams.exe"],
    namePatterns: ["teams"],
  },
  {
    slug: "safari",
    appName: "Safari",
    appIds: ["com.apple.safari"],
    processNames: ["safari.exe"],
    namePatterns: ["safari"],
    isBrowser: !0,
  },
  {
    slug: "whatsapp",
    appName: "WhatsApp",
    appIds: ["net.whatsapp.whatsapp"],
    processNames: ["whatsapp.exe"],
    namePatterns: ["whatsapp"],
  },
  {
    slug: "microsoft_edge",
    appName: "Microsoft Edge",
    appIds: ["com.microsoft.edgemac"],
    processNames: ["msedge.exe"],
    namePatterns: ["msedge", "edge"],
    isBrowser: !0,
  },
  {
    slug: "opera",
    appName: "Opera",
    appIds: ["com.operasoftware.opera", "com.operasoftware.operagx"],
    processNames: ["opera.exe"],
    namePatterns: ["opera"],
    isBrowser: !0,
  },
  {
    slug: "brave",
    appName: "Brave Browser",
    appIds: ["com.brave.browser"],
    processNames: ["brave.exe"],
    namePatterns: ["brave"],
    isBrowser: !0,
  },
  {
    slug: "lark",
    appName: "Lark",
    appIds: ["com.electron.lark"],
    processNames: [],
    namePatterns: ["lark"],
  },
  {
    slug: "amazon_chime",
    appName: "Amazon Chime",
    appIds: ["com.amazon.amazon-chime"],
    processNames: ["chime.exe"],
    namePatterns: ["chime"],
  },
  {
    slug: "discord",
    appName: "Discord",
    appIds: ["com.hnc.discord"],
    processNames: ["discord.exe"],
    namePatterns: ["discord"],
  },
  {
    slug: "google_meet",
    appName: "Google Meet (web)",
    appIds: [],
    processNames: [],
    namePatterns: [],
    titlePatterns: [
      /^meet\s*[-–—]\s/i,
      /^meet[^\p{L}\p{N}]*$/iu,
      /\bgoogle meet\b/i,
    ],
  },
  {
    slug: "zoom_web",
    markSlug: "zoom",
    appName: "Zoom (web)",
    appIds: [],
    processNames: [],
    namePatterns: [],
    titlePatterns: [/\bzoom meeting\b/i, /\bzoom workplace\b/i],
  },
  {
    slug: "microsoft_teams_web",
    markSlug: "microsoft_teams",
    appName: "Microsoft Teams (web)",
    appIds: [],
    processNames: [],
    namePatterns: [],
    titlePatterns: [/\bmicrosoft teams\b/i],
  },
];
function r(e) {
  return e.trim().toLowerCase();
}
function o(e) {
  const t = e.split(/[\\/]/);
  return t[t.length - 1] ?? e;
}
function i(e) {
  const t = o(e);
  return (
    n.find(
      (n) =>
        n.appIds.some((t) =>
          (function (e, t) {
            return t === e || t.startsWith(`${e}.`) || t.startsWith(`${e}/`);
          })(t, e),
        ) ||
        n.processNames.includes(e) ||
        n.processNames.includes(t),
    ) ?? null
  );
}
