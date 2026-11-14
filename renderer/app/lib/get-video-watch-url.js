// app/lib/get-video-watch-url.js — webpack module 27376
// params: (e, t) = (module, exports, require)
"use strict";
(t.pu = t.BI = void 0),
  (t.getVideoWatchUrl = function (e) {
    return `https://www.youtube.com/watch?v=${t.BI[e].youtubeId}`;
  }),
  (t.BI = {
    callAssistantDemo: {
      youtubeId: "xZnHfj83-oc",
      title: "What is ParakeetAI? 🦜",
      description:
        "The landing-page hero demo of ParakeetAI helping you in real time on desktop.",
      category: "gettingStarted",
      showInTutorials: !0,
    },
    callAssistantDemoClean: {
      youtubeId: "6kHigYtONXk",
      title: "What is ParakeetAI? 🫧",
      description:
        "The desktop hero demo cut for the call-focused landing, without the interview framing.",
      category: "gettingStarted",
    },
    mobileDemo: {
      youtubeId: "hZIuQ2B6FKA",
      title: "What is ParakeetAI? 🦜",
      description:
        "The landing-page hero demo of ParakeetAI running on your phone for calls on the go.",
      category: "gettingStarted",
      vertical: !0,
      showInTutorials: !0,
    },
    mobileDemoClean: {
      youtubeId: "j4DzRKoZfnE",
      title: "What is ParakeetAI? 🫧",
      description:
        "The mobile hero demo cut for the call-focused landing, without the interview framing.",
      category: "gettingStarted",
      vertical: !0,
    },
    browserVsDesktopApp: {
      youtubeId: "9KGxnw9O-Rc",
      title: "Should you use ParakeetAI in your Browser?",
      description:
        "When to use the browser version and when to use the Desktop App.",
      category: "gettingStarted",
      showInTutorials: !0,
    },
    mobileVsDesktopApp: {
      youtubeId: "dlbGFJrP2e4",
      title: "Should you use ParakeetAI on your phone?",
      description: "Differences between the mobile and desktop app experience.",
      category: "gettingStarted",
      showInTutorials: !0,
    },
    seriesDashboard: {
      youtubeId: "D-i01KfsXfc",
      title: "How to use the dashboard",
      description: "A tour of the ParakeetAI dashboard.",
      category: "gettingStarted",
    },
    seriesUploads: {
      youtubeId: "tlIVqe4JJ88",
      title: "How to upload resumes and documents",
      description: "Add the resumes and documents ParakeetAI answers from.",
      category: "gettingStarted",
    },
    seriesCreateSession: {
      youtubeId: "UL0RWcPqIAU",
      title: "How to create a session",
      description: "Set up a session before your call.",
      category: "gettingStarted",
    },
    seriesInstallDesktop: {
      youtubeId: "76m6EoZjkPw",
      title: "How to install the desktop app",
      description: "Download and install the ParakeetAI desktop app.",
      category: "gettingStarted",
    },
    seriesDesktopApp: {
      youtubeId: "JwQhBBbhVGY",
      title: "How to use the desktop app",
      description: "Run a session in the ParakeetAI desktop app.",
      category: "gettingStarted",
    },
    seriesBrowserApp: {
      youtubeId: "5pCu2TL93iU",
      title: "How to use the browser app",
      description: "Run a session in your browser.",
      category: "gettingStarted",
    },
    howToConnectTutorial: {
      youtubeId: "kZc9hxzn0GI",
      title: "How to connect (deep dive)",
      description:
        "Detailed instructions for connecting ParakeetAI on each supported platform.",
      category: "platform",
      showInTutorials: !0,
    },
    everydayCalls: {
      youtubeId: "gk80dz0LYjA",
      title: "Get AI Answers on ANY Online Call 📱",
      description:
        "Use ParakeetAI in real-time during your everyday calls and meetings.",
      category: "platform",
      showInTutorials: !0,
    },
    mockVideo: {
      youtubeId: "d9Xhn6NcMRc",
      title: "Call Demonstration",
      description:
        "An example mock video you can share with ParakeetAI to test it without a real call.",
      category: "platform",
      showInTutorials: !0,
    },
    codingCallSupport: {
      youtubeId: "LVOyRzY9B3Q",
      title: "ParakeetAI Helps You Code 🦜",
      description:
        "Listen for coding questions and read code shared on your screen during a call.",
      category: "feature",
      showInTutorials: !0,
    },
    codingCallSupportClean: {
      youtubeId: "5ujskrVmUn4",
      title: "ParakeetAI Helps You Code 🫧",
      description:
        "The coding explainer cut for the call-focused landing, without the interview framing.",
      category: "feature",
    },
    privacyOverview: {
      youtubeId: "LExsfhuQ3h8",
      title: "How is ParakeetAI Invisible?",
      description:
        "How ParakeetAI stays private and undetectable during screen share, in the dock, in the task manager, and more.",
      category: "privacy",
      showInTutorials: !0,
    },
    privacyTesting: {
      youtubeId: "svlsxESqGCc",
      title: "Test ParakeetAI privacy safely",
      description:
        "Always test ParakeetAI's privacy in a safe environment before your real call.",
      category: "privacy",
      showInTutorials: !0,
    },
    privacyZoom: {
      youtubeId: "Kf6xJY_Sn8w",
      title: "Privacy demo — Zoom",
      description: "ParakeetAI remains hidden on Zoom screen share.",
      category: "privacy",
      showInTutorials: !0,
    },
    privacyTeams: {
      youtubeId: "sSl9yZHbcvQ",
      title: "Privacy demo — Microsoft Teams",
      description: "ParakeetAI remains hidden on Microsoft Teams screen share.",
      category: "privacy",
      showInTutorials: !0,
    },
    privacyMeet: {
      youtubeId: "cmXRpcX5PTw",
      title: "Privacy demo — Google Meet",
      description: "ParakeetAI remains hidden on Google Meet screen share.",
      category: "privacy",
      showInTutorials: !0,
    },
    privacyWebex: {
      youtubeId: "ZkiN1xEzkJI",
      title: "Privacy demo — Webex",
      description: "ParakeetAI remains hidden on Webex screen share.",
      category: "privacy",
      showInTutorials: !0,
    },
    privacyLark: {
      youtubeId: "lh1pSQN_GjY",
      title: "Privacy demo — Lark / Feishu",
      description: "ParakeetAI remains hidden on Lark / Feishu screen share.",
      category: "privacy",
      showInTutorials: !0,
    },
    privacyChime: {
      youtubeId: "GYNhGFKWVEs",
      title: "Privacy demo — Amazon Chime",
      description: "ParakeetAI remains hidden on Amazon Chime screen share.",
      category: "privacy",
      showInTutorials: !0,
    },
    creditsAndSubscriptions: {
      youtubeId: "Q7CsP6p1EO0",
      title: "How to Buy ParakeetAI?",
      description:
        "A short explainer on ParakeetAI credits, subscriptions and how they renew.",
      category: "billing",
      showInTutorials: !0,
    },
    referralCode: {
      youtubeId: "CT5YaxGdnzI",
      title: "How to Get Free ParakeetAI Credits",
      description:
        "Share your referral code, earn extra credits, and learn how new buyers can redeem it.",
      category: "billing",
      showInTutorials: !0,
    },
    podcastStarterStory: {
      youtubeId: "KpVPST_P4W8",
      title: "Podcast appearance",
      description: "ParakeetAI featured on the Starter Story podcast.",
      category: "podcast",
    },
    podcastSecondary: {
      youtubeId: "YnY_A4Oy_nY",
      title: "Podcast appearance",
      description: "ParakeetAI featured on a podcast.",
      category: "podcast",
    },
    podim: {
      youtubeId: "gnahoeeUy6I",
      title: "Podim",
      description: "ParakeetAI feature at the Podim conference.",
      category: "podcast",
    },
    podcastFoundersTalk: {
      youtubeId: "tJtXw4TVdcw",
      title: "Founders Talk podcast",
      description:
        "Jure on the Founders Talk podcast: 1.5M users on no outside investment.",
      category: "podcast",
    },
    podcastZakulisje: {
      youtubeId: "X3hvkUiXScA",
      title: "Zakulisje podcast",
      description:
        "Jure and Urban on the Zakulisje podcast: to 12M ARR in 18 months.",
      category: "podcast",
    },
    podcastUnderdog: {
      youtubeId: "V1C_0B9OOwg",
      title: "Underdog podcast",
      description:
        "Jure on the Underdog podcast (#164): succeed or one day regret never trying.",
      category: "podcast",
    },
    hiringHero: {
      youtubeId: "qjuEeljTSZs",
      title: "Pridruži se ekipi ParakeetAI!",
      description:
        "The recruiting video embedded in the hiring page's hero, in Slovenian.",
      category: "team",
    },
    thailandTrip: {
      youtubeId: "PwN2eLjXjz4",
      title: "Team trip — Thailand",
      description: "The ParakeetAI team's annual offsite in Thailand.",
      category: "team",
    },
  }),
  Object.keys(t.BI).map((e) => ({ key: e, ...t.BI[e] })),
  (t.pu = {
    title: "How to use ParakeetAI",
    parts: [
      "seriesDashboard",
      "seriesUploads",
      "seriesCreateSession",
      "seriesInstallDesktop",
      "seriesDesktopApp",
      "seriesBrowserApp",
    ],
  });
