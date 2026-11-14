// vendor/module-44897.js — webpack module 44897
// params: (e, t) = (module, exports, require)
"use strict";
(t.howDoYou = void 0),
  (t.howDoYou = {
    bullets: {
      concise: {
        simple: {
          question:
            "How do you usually approach debugging a production incident?",
          answer:
            "- Reproduce error in staging or local environment first\n- Check application error logs and server metrics dashboards\n- Isolate recent changes like code updates or config shifts",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question:
            "How do you usually approach debugging a production incident?",
          answer:
            "- Triage severity, establish incident response channel\n- Analyze metrics, logs, and error traces for root cause\n- Implement immediate fix, verify recovery, document post-mortem",
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
            "- Stop the bleeding first by rolling back bad changes or scaling resources\n- Check system monitoring dashboards for error spikes and high resource use\n- Read application log files for exact error messages and failure traces\n- Isolate the failing component to test theories one by one\n- Write a clear post-mortem document to prevent the same issue later",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question: "Approach to debugging a production incident",
          answer:
            "- Triage severity and assess blast radius\n- Establish incident commander and communication channel\n- Isolate root cause using logs and metrics\n- Implement immediate mitigation or rollback\n- Document findings and schedule post-mortem",
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
            "- Triage severity and check team notification channels first\n- Open error tracking dashboards and view recent logs\n- Identify the exact time the error spike started\n- Check recent code changes, deployments, or config updates\n- Isolate the failing service using health metrics and traces\n- Reproduce the issue in a staging environment if possible\n- Apply a hotfix or rollback the bad deployment quickly\n- Verify recovery using synthetic tests and live metrics\n- Write a detailed incident report and schedule a review meeting",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question: "How do you approach debugging a production incident?",
          answer:
            "- Triage severity, assess blast radius, and alert stakeholders immediately\n- Lock down current state, preserve logs, metrics, and memory dumps\n- Form hypothesis using recent deploys, alerts, and error spikes\n- Check dashboards for traffic drops, latency spikes, and error rates\n- Inspect infrastructure health, CPU, memory, disk, and network I/O\n- Trace distributed requests using correlation IDs across microservices\n- Reproduce issue in staging environment or isolated sandbox container\n- Implement targeted fix, feature flag toggle, or immediate rollback\n- Monitor post-fix recovery, error budget impact, and metric stabilization\n- Conduct blameless post-mortem, document root cause, and add preventative tests",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
      },
    },
    balanced: {
      concise: {
        simple: {
          question:
            "How do you usually approach debugging a production incident?",
          answer:
            "I follow a quick, step-by-step method to fix production problems safely.\n- First, I check error logs and metrics to find the exact cause.\n- Next, I apply a temporary fix to restore service right away.\n- Finally, I write a permanent fix and review what happened.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question:
            "How do you usually approach debugging a production incident?",
          answer:
            "I follow a structured, methodical approach focusing on mitigation first, then root cause analysis.\n- Triage impact and establish communication.\n- Isolate the failure using metrics and logs.\n- Deploy a fix and verify system health.",
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
            "I follow a step-by-step plan to fix production problems quickly and keep the system safe.\n\n- First, I check application logs and metric dashboards to see what is failing and when it started.\n- Next, I look at recent changes like code updates or configuration shifts to find what might have caused the bug.\n- After that, I make a temporary fix, such as turning off a new feature or rolling back to an older stable version.\n- Finally, I write down what went wrong and build a long-term fix so the same issue does not happen again.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question:
            "How do you usually approach debugging a production incident?",
          answer:
            "When debugging a production incident, I follow a structured, calm, and methodical approach to minimize downtime and identify the root cause.\n\n- **Assess and Stabilize:** First, I check monitoring tools like Datadog or Prometheus and error trackers like Sentry to gauge the blast radius. If necessary, I immediately take mitigation steps such as rolling back a bad deployment, scaling up resources, or routing traffic away from failing components.\n- **Communicate:** I ensure stakeholders and relevant teams are updated via incident channels (like Slack or PagerDuty) to keep everyone aligned while I investigate.\n- **Investigate and Isolate:** I examine logs, traces, and metrics to pinpoint where the failure occurs. I form hypotheses and test them systematically—checking recent changes, database locks, network issues, or external dependency failures.\n- **Fix and Verify:** Once the root cause is found, I implement a targeted fix, deploy it, and closely monitor metrics and logs to verify that the system has returned to a healthy state.\n- **Post-Mortem:** After resolution, I participate in a blameless post-mortem to document what happened, why it happened, and what action items we need to implement to prevent recurrence.",
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
            "I start by checking the error logs and monitoring dashboards to see what failed and when.\n\n- **Stop the damage first**: I look at the main system metrics, such as central processing unit usage and error rates, to see how big the problem is. If it is a major issue, I roll back the recent change or turn off the broken feature right away.\n- **Find the root cause**: I check the application logs, database queries, and network traffic to trace where the error happened. I look at recent code deployments and configuration updates to find what changed.\n- **Fix and test the code**: Once I find the bug, I write a fix and test it in a staging environment that matches the live system as closely as possible.\n- **Review and prevent**: After the system is back up, I write down what happened and add new tests or alerts so the same issue does not happen again.\n\nFor example, when our web application went down last month due to a database connection limit, I first scaled up the database pool size to bring the site back online. Then, I found a slow query in a new reporting feature, optimized the query, and added a monitoring alert for connection pool usage.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question:
            "How do you usually approach debugging a production incident?",
          answer:
            "I follow a structured, methodical incident response process focused on minimizing downtime and rapidly identifying root causes.\n- **Triage and Containment**: First, I assess the blast radius and severity of the issue, utilizing dashboards and error tracking tools like Datadog or Sentry to confirm the symptoms. If the impact is widespread, my priority is containment—such as rolling back a faulty deployment, enabling a feature flag, or routing traffic away from an unhealthy service.\n- **Investigation and Data Gathering**: Once the bleeding has stopped, I examine application logs, metrics, and distributed traces to pinpoint the exact failure point. I look for anomalies in resource utilization, recent code changes, or downstream service dependencies.\n- **Resolution and Verification**: After identifying the root cause, I develop and deploy a targeted fix, closely monitoring key performance indicators to verify that system stability is fully restored.\n- **Post-Incident Review**: Finally, I document the timeline, contributing factors, and action items in a blameless post-mortem to prevent recurrence.\n\nFor example, when a high-latency incident occurred due to an unindexed database query in a backend service, I quickly identified the bottleneck using database query logs, applied an immediate index fix to restore performance, and later added automated query performance regression tests to our CI/CD pipeline.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
      },
    },
    paragraph: {
      concise: {
        simple: {
          question:
            "How do you usually approach debugging a production incident?",
          answer:
            "I start by confirming the issue and checking our monitoring dashboards for error rates and logs to find the root cause. Then, I quickly roll back bad changes or apply a hotfix if needed. Finally, I write a report to make sure it does not happen again.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question:
            "How do you usually approach debugging a production incident?",
          answer:
            "I start by assessing the blast radius and checking monitoring tools or logs to identify error spikes. Next, I isolate the faulty service or deployment, roll back if needed to mitigate impact, and then dive into root cause analysis to apply a permanent fix.",
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
            "When a production incident happens, my first step is to stay calm and check our monitoring tools to see what is failing and when it started. Next, I look at recent error logs and trace data to find out exactly where the code is breaking. Once I have a good idea of the cause, I work on a quick fix to get the system working again, or roll back to the last good version if the fix will take too long. After the service is back up, I write down what went wrong and what we can change so it never happens again.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question:
            "How do you usually approach debugging a production incident?",
          answer:
            "When a production incident occurs, my first priority is stabilization and containment rather than immediately hunting for the root cause. I start by checking our monitoring dashboards and alerting systems to assess the scope, severity, and impacted services, and I quickly communicate the status to stakeholders to ensure transparency. Once the immediate impact is understood, I form a hypothesis based on recent deployments, error logs, and metrics, and I implement a rollback or targeted hotfix if the path forward is clear. After the system is stable, I focus on a thorough post-mortem analysis to identify the underlying root cause and establish preventive measures like adding automated tests or improving observability to ensure it doesn't happen again.",
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
            "When a production incident happens, my main goal is to reduce the time it takes to fix the issue and get things working normally again for our users. First, I check our monitoring and error tracking tools to see the exact error messages, when the issue started, and how many users are affected. This helps me figure out if the problem is small or if it is a major outage that needs an emergency response. Next, I look at recent changes like new code deployments or updates to our configuration settings, because these are usually the root cause of unexpected bugs. If the cause is not clear from the logs and recent changes, I try to recreate the issue in a staging environment or use safe debugging steps directly in the live environment if the risk is low. Once I find the broken code or database query, I write a quick fix and test it thoroughly before sending it to production. After everything is stable and working again, I lead a team review to talk about what went wrong, why it happened, and what we can do to stop the same issue from happening in the future.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question:
            "How do you usually approach debugging a production incident?",
          answer:
            "When facing a production incident, my first priority is to stabilize the system and minimize user impact rather than immediately hunting for the root cause. I start by assessing the blast radius and checking our monitoring dashboards and error tracking tools like Datadog or Sentry to identify the exact failure signature, whether it is a spike in 5xx errors, latency degradation, or a sudden drop in throughput. \n\nOnce I have a clear picture of the symptoms, I communicate the status to stakeholders and the team to ensure everyone is aligned. If the fix is straightforward, such as rolling back a bad deployment or scaling up resources, I execute that immediately. If the cause is unknown, I form a hypothesis based on recent changes, logs, and metrics, and test it systematically by isolating variables. For instance, if a database query is locking up, I examine slow query logs and active connections rather than guessing at application-level code.\n\nAfter resolving the incident, I make sure the system is fully healthy and verified before calling it clear. Crucially, I follow up with a thorough post-mortem to document what happened, why it happened, and what preventive measures we need to implement, such as adding better monitoring, writing automated tests for the edge case, or refactoring brittle code to ensure we do not hit the same failure mode twice.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
      },
    },
  });
