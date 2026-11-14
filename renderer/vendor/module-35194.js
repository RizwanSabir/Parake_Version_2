// vendor/module-35194.js — webpack module 35194
// params: (e, t) = (module, exports, require)
"use strict";
(t.situational = void 0),
  (t.situational = {
    bullets: {
      concise: {
        simple: {
          question:
            "What would you do if you found a critical bug the day before a release?",
          answer:
            "- Assess impact and severity immediately\n- Coordinate team rollback or fix strategy\n- Communicate status clearly to stakeholders",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question: "Handling a critical bug found right before release",
          answer:
            "- Assess severity and business impact immediately\n- Evaluate hotfix feasibility versus release delay\n- Communicate risk transparently with stakeholders",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
      },
      balanced: {
        simple: {
          question: "Handling a critical bug before a release",
          answer:
            "- Assess severity and business impact immediately\n- Coordinate with engineering lead and product manager\n- Evaluate quick hotfix versus feature rollback options\n- Test fix thoroughly in staging environment\n- Document decision and monitor post-release stability",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question: "Handling a critical bug found the day before release",
          answer:
            "- Assess severity and business impact immediately\n- Coordinate with product and engineering leads\n- Evaluate hotfix viability versus release delay\n- Isolate root cause and implement targeted patch\n- Run automated regression and targeted test suites\n- Monitor post-release metrics closely for stability",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
      },
      detailed: {
        simple: {
          question: "Handling a critical bug found the day before a release",
          answer:
            "- Assess the bug severity and user impact immediately\n- Verify reproducibility and isolation steps\n- Convene emergency sync with product and engineering leads\n- Weigh release delay against deployment of a hotfix\n- Draft a precise patch keeping code changes minimal\n- Run targeted automated tests and manual verification\n- Execute extra code review with a senior teammate\n- Prepare clear rollout plan and rollback steps\n- Monitor system metrics closely post deployment",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question: "Handling a critical bug before release",
          answer:
            "- Assess severity and production impact immediately\n- Evaluate potential data loss or security risk\n- Reproduce bug in staging environment\n- Weigh rollback plan against hotfix complexity\n- Communicate status with engineering and product leads\n- Draft targeted hotfix with minimal code changes\n- Run automated regression and smoke test suites\n- Conduct rapid peer review before merging\n- Deploy patch to staging and verify fix\n- Postpone release if risk remains unacceptably high\n- Document incident for post-mortem review",
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
          question: "Handling a critical bug before a release",
          answer:
            "I would assess the impact and work with the team to fix it quickly.\n- Assess user impact and risk\n- Fix, test, and hotfix if safe",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question: "Handling a critical bug before release",
          answer:
            "I would assess the impact and risk immediately, then collaborate with the team on a targeted fix.\n- Evaluate bug severity and user impact\n- Assess rollback and hotfix readiness\n- Communicate risks clearly to stakeholders",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
      },
      balanced: {
        simple: {
          question:
            "What would you do if you found a critical bug the day before a release?",
          answer:
            "I would carefully assess the bug to see how bad it is and decide whether we should delay the launch or put out a quick fix right after.\n\n- First, I check how many users are affected and if it causes a system crash or data loss.\n- Second, I talk with product managers and other team members to weigh the risks of delaying versus fixing it fast.\n- Third, if we decide to go ahead, I help write a patch or prepare a rollback plan just in case things go wrong.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question: "Handling a critical bug found the day before a release",
          answer:
            "If I found a critical bug right before a release, my immediate priority would be to assess its impact and scope. I would work quickly with the team to determine if it blocks core functionality, causes data loss, or affects a large percentage of users.\n\n- **Assess and Reproduce**: Quickly verify the bug, understand its exact trigger, and evaluate whether it is a true blocker or an edge case.\n- **Evaluate Options**: Weigh the severity against our release timeline. Options include a quick hotfix if the fix is low-risk and well-tested, rolling back the affected feature flags, or delaying the release if it compromises system stability.\n- **Communicate Proactively**: Notify stakeholders, product managers, and engineering leadership immediately with a clear risk assessment and a proposed path forward.\n- **Post-Release Review**: After handling the immediate crisis, conduct a blameless post-mortem to understand how the bug slipped through and improve our pre-release testing and QA gates.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
      },
      detailed: {
        simple: {
          question: "Handling a critical bug the day before a release",
          answer:
            "I would first assess how bad the bug is and then work with the team to fix it or delay the release if needed.\n\n- **Check the impact**: I would look at what the bug breaks. Does it stop people from buying things, or does it only affect a small part of the site? If it crashes the application or causes data loss, we must stop and fix it.\n- **Talk to the team**: I would quickly let my manager, the product owner, and other team members know what is going on so everyone is on the same page.\n- **Write a quick fix**: If the fix is small and safe, I would write the code, run our tests, and ask a teammate to check my work right away.\n- **Weigh our choices**: If the fix is too risky, I would suggest delaying the release by a day or turning off the broken feature until we can fix it properly.\n\nFor example, at my last job, we found a payment bug right before going live. I wrote a patch to fix the error handling, and we tested it together in a staging environment. Because we caught it early enough in our final checks, we applied the fix safely and still launched on time.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question: "Handling a critical bug found the day before a release",
          answer:
            "I would immediately assess the severity, impact, and blast radius of the bug to determine if it truly blocks the release or if it can be safely mitigated. \n\n- I would gather the team, including product management, QA, and engineering leads, to evaluate whether the bug causes data corruption, security vulnerabilities, or complete feature failure, or if it's an edge case with a known workaround.\n- If it is a true blocker, I would analyze the fix complexity: if the fix is isolated and low-risk, we could apply a targeted patch, run expedited automated regression tests, and proceed with heightened monitoring.\n- If the fix is complex and carries regression risk, I would advocate for postponing the release or deploying the build with the affected feature toggled off via a feature flag while the rest of the stable features go live.\n- Throughout the process, I would ensure transparent communication with stakeholders, documenting the decision, the risk trade-offs, and the post-incident review plan to prevent similar escapes in the future.",
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
          question: "Handling a critical bug before release",
          answer:
            "I would first assess how bad the bug is and who it affects. If it breaks core features or causes data loss, I would work with the team to fix it right away. If it is a minor issue, we could document it and push a quick patch update right after the main release.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question: "Handling a critical bug before release",
          answer:
            "I would first assess the bug's severity and impact on users and core functionality. Then, I'd collaborate with the team to evaluate whether we can quickly patch it safely, implement a feature flag to disable the affected component, or decide to postpone the release if the risk is too high.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
      },
      balanced: {
        simple: {
          question: "Handling a critical bug before release",
          answer:
            "If I found a serious bug right before a launch, my main goal would be to protect our users and keep the system stable while working as a team to fix it. First, I would check how bad the bug is to see if it causes data loss or security issues, which would mean we definitely have to delay the launch. Then, I would let my team lead and product manager know right away so everyone is on the same page. If the fix is quick and safe, I would write a patch, test it very carefully, and push it out. If it is too risky to fix right away, I would look at turning off the broken feature for now or rolling back to the last stable version so we can launch on time without the bug.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question: "Handling a critical bug the day before a release",
          answer:
            "If I found a critical bug right before a release, my immediate priority would be to assess its severity and impact. I would verify if it's a true blocker—such as a data corruption issue, a security vulnerability, or a complete crash of core functionality—versus something minor that could be patched shortly after launch. Once confirmed, I would immediately communicate with the engineering lead, product manager, and QA team to ensure everyone is aligned on the situation.\n\nNext, I would collaborate with the team to investigate the root cause and determine the scope of the fix. If a clean, low-risk fix can be implemented, tested, and verified quickly without introducing regression risks, we would proceed with a hotfix on a dedicated branch. However, if the fix is complex or risky, I would advocate for delaying the release or using feature flags to disable the broken component while letting the rest of the stable features go live. Throughout the process, transparency and data-driven risk assessment are key to making the right call.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
      },
      detailed: {
        simple: {
          question: "Handling a critical bug before a release",
          answer:
            "If I found a serious software bug right before a planned release, my first step would be to pause the release process and alert the rest of the team right away. I would look at the bug closely to see how bad it is, especially if it causes the system to crash, breaks user data, or stops core features from working. Once I know the impact, I would work with the team to see if we can build and test a quick fix, often called a hotfix, without rushing and making things worse.\n\nIf the fix is too risky to put in right away, we have to look at other choices, such as delaying the release by a short time to make sure the fix is stable, or turning off the broken feature for now so the rest of the system can still go live safely. Throughout this time, I would keep open communication with our product managers and stakeholders so everyone understands the risk and we can make the best choice together as a team.\n\nFor example, in a past project, we found a payment failure issue the night before a major product update. Instead of pushing a rushed fix to the main code branch that could break user checkouts, we decided to delay the release by twenty-four hours, wrote a targeted unit test to catch that specific error, and deployed the fix safely the next morning after a thorough review.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
        formal: {
          question:
            "What would you do if you found a critical bug the day before a release?",
          answer:
            "If I discovered a critical bug the day before a release, my immediate priority would be to assess the severity, scope, and impact of the issue to determine whether it truly blocks the release or if it can be safely mitigated. I would pull in the relevant engineering, product, and QA stakeholders to quickly analyze the root cause and evaluate our options, which typically include fixing the bug immediately if it is a low-risk patch, reverting the specific commit that introduced the regression if it is isolated, or implementing a targeted hotfix or feature flag to disable the broken functionality while allowing the rest of the release to proceed.\n\nOnce we agree on the path forward, I would ensure that any fix goes through an expedited but rigorous code review and automated testing cycle to prevent introducing secondary issues. Throughout this process, I would maintain transparent communication with product managers and engineering leadership, providing clear risk assessments so they can make an informed decision on whether to proceed with the deploy, delay the release by a few hours or a day, or roll out to a smaller subset of users first via a canary deployment.\n\nFor example, at a previous company, we found a critical memory leak in our authentication service less than twenty hours before a major product launch. Instead of panicking and delaying the entire launch for days, I collaborated with another backend engineer to isolate the problematic database query, optimize the connection pooling, and push a hotfix within three hours. We ran our regression test suite, monitored the staging environment closely, and successfully shipped on schedule with zero customer impact.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram: null,
        },
      },
    },
  });
