// vendor/module-62136.js — webpack module 62136
// params: (e, t) = (module, exports, require)
"use strict";
t.getMeetingAppName = function (e) {
  return (
    (function (e) {
      const t = ((o = e), o.trim().toLowerCase());
      var o;
      if (!t) return null;
      const i = (function (e) {
        const t = r(e);
        return (
          n.find(
            (n) =>
              n.appIds.some((t) =>
                (function (e, t) {
                  return (
                    t === e || t.startsWith(`${e}.`) || t.startsWith(`${e}/`)
                  );
                })(t, e),
              ) ||
              n.processNames.includes(e) ||
              n.processNames.includes(t),
          ) ?? null
        );
      })(t);
      if (i) return i;
      const a = r(t).replace(/\.[^.\\/]+$/g, ""),
        s = (e) => a.includes(e) || t.includes(e);
      return n.find(({ namePatterns: e }) => e.some(s)) ?? null;
    })(e)?.appName ?? null
  );
};
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
  const t = e.split(/[\\/]/);
  return t[t.length - 1] ?? e;
}
