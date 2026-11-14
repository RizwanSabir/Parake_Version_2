// vendor/module-56578.js — webpack module 56578
// params: (e, t) = (module, exports, require)
"use strict";
(t.howDoYouFillers = void 0),
  (t.howDoYouFillers = {
    concise: {
      simple: {
        question:
          "How do you usually approach debugging a production incident?",
        answer:
          "Well, so when a production incident happens, I always start by checking our monitoring tools to see what broke, you know? Then I look at recent code updates or server logs to find the exact error, right? Honestly, I try to fix the root cause quickly and safely.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
      formal: {
        question:
          "How do you usually approach debugging a production incident?",
        answer:
          "Well, honestly, I start by assessing the blast radius and checking our monitoring dashboards to see error rates or latency spikes, you know? Then I dig into the latest deployment logs and recent changes to trace the root cause. Once I've a fix, I test it thoroughly, deploy it, and actually follow up with a post-mortem to prevent it from happening again, right?",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
    },
    balanced: {
      simple: {
        question:
          "How do you usually approach debugging a production incident?",
        answer:
          "Well, you know, when a production incident hits, I usually start by staying calm and figuring out how big the impact is. So, I check our monitoring dashboards and error logs right away to see what is actually breaking and when it started, you know? After that, I try to narrow it down by looking at recent code changes or deployments that might have caused it. I mean, if it is a critical issue, we might need to roll back first to get things stable for our users, and then we can dig deeper into the root cause in a safer environment, right?",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
      formal: {
        question:
          "How do you usually approach debugging a production incident?",
        answer:
          "Well, honestly, when a production incident hits, my first priority is always to stabilize the system as quickly as possible rather than diving straight into a deep root-cause analysis, right? So, I usually check our monitoring dashboards and error tracking tools like Datadog or Sentry to assess the blast radius and figure out if it's a complete outage or just a degraded experience. Once we know the scope, if it's a recent deployment, I'll look at rolling it back immediately to restore service while we investigate safely in a staging environment. After everything's stable and customers aren't impacted anymore, you know, I like to dig into the logs and metrics to find the exact trigger, and then we'll write up a blameless post-mortem so we can put guardrails in place and make sure it doesn't happen again.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
    },
    detailed: {
      simple: {
        question:
          "How do you usually approach debugging a production incident?",
        answer:
          "Well, when a production incident hits, I usually start by staying calm and figuring out the exact scope of the issue. You know, I check our monitoring dashboards and error tracking tools to see what's failing and when it started. For example, if a main service starts throwing five hundred errors, I look at the logs to find the exact stack trace or error message, right? \n\nAfter that, I try to reproduce the issue or check if a recent deployment caused it, because quite often, a new release or a bad configuration change is the root cause. I mean, if it's a deployment issue, rolling back quickly is usually the safest first step to stop the bleeding while we investigate further in a staging environment. \n\nOnce things are stable, I focus on the long-term fix and write down notes for our post-mortem review so we can prevent it from happening again, honestly.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
      formal: {
        question:
          "How do you usually approach debugging a production incident?",
        answer:
          "Well, honestly, when a production incident hits, my first priority is always stabilization before I even start deep debugging, you know? So, I typically jump into our monitoring dashboards and error tracking tools like Datadog or Sentry to quickly assess the blast radius and figure out what services are actually impacted. \n\nOnce I've got a handle on the scope, I check recent deployments or configuration changes using our CI/CD audit logs, because, I mean, nine times out of ten, it's a recent change that introduced the regression. If nothing obvious stands out there, I start diving into structured application logs and metrics to trace request lifecycles and isolate the bottleneck, whether it's a database connection pool exhaustion or an external API failure. \n\nFor example, we had an issue a while back where our checkout service started throwing 500 errors intermittently. So, I checked the error rates alongside our database CPU utilization, and I actually found out that a new query was missing an index under high load. We quickly rolled back the deploy to mitigate the impact while we prepped a proper fix, right? And then, once everything's stable, we always make sure to document everything and schedule a blameless post-mortem so we can put guardrails in place to prevent it from happening again.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
    },
  });
