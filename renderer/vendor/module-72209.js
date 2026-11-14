// vendor/module-72209.js — webpack module 72209
// params: (e, t) = (module, exports, require)
"use strict";
(t.behavioralStarFillers = void 0),
  (t.behavioralStarFillers = {
    concise: {
      simple: {
        question:
          "Tell me about a time you disagreed with a teammate about a technical decision.",
        answer:
          "**Situation:** We were building a new feature and disagreed on using a relational database versus a non-relational one.\n**Task:** I needed to help us pick the best tool without hurting our timeline, right?\n**Action:** So, I set up a quick test for both options to compare speed.\n**Result:** The test proved my pick was faster, so we used it.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
      formal: {
        question:
          "Tell me about a time you disagreed with a teammate about a technical decision.",
        answer:
          "**Situation:** We were choosing a database for a new microservice, right?\n**Task:** I wanted PostgreSQL, but my teammate preferred MongoDB.\n**Action:** So, I actually proposed a quick spike to compare them.\n**Result:** We found Postgres fit our relational data best.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
    },
    balanced: {
      simple: {
        question:
          "Tell me about a time you disagreed with a teammate about a technical decision.",
        answer:
          "**Situation:**\nWell, honestly, a while back on my last team, we were building a new web service and we got stuck on whether to use a traditional relational database or a document database for storing user data, you know?\n\n**Task:**\nMy teammate really wanted to use a document database because it was trendy and easy to set up at first, but I knew our data needed strict relationships and complex queries, so I had to step in and handle this disagreement without stepping on any toes, right?\n\n**Action:**\nSo, I didn't just say no—I mean, I put together a quick prototype for both options and measured how they handled our actual data size. I set up a meeting where we walked through the numbers together, comparing how hard it would be to write complex reports on both systems, and actually, seeing those real performance tests changed his mind completely.\n\n**Result:**\nIn the end, we went with the relational database, and it saved us from a ton of data mess later on when our user base grew, you know? It actually brought us closer as a team because we focused on data instead of egos, right?",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
      formal: {
        question:
          "Tell me about a time you disagreed with a teammate about a technical decision.",
        answer:
          "**Situation:**\n\nWell, honestly, we were working on a high-throughput backend service at my last job, and we needed to pick a caching strategy to handle sudden traffic spikes.\n\n**Task:**\n\nMy teammate wanted to implement a custom in-memory cache directly inside our Node.js application instances, but I felt strongly that we should use Redis instead.\n\n**Action:**\n\nSo, I put together a quick proof of concept comparing both approaches, focusing on memory limits, horizontal scaling, and consistency across multiple pods, right? I set up a quick sync with him to walk through the metrics instead of just arguing my opinion, and we talked through the trade-offs together.\n\n**Result:**\n\nHe actually saw my point about how the in-memory cache would cause memory leaks and scaling issues when we added more replicas, so we went with Redis, and you know, it handled our peak traffic the following week without any issues.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
    },
    detailed: {
      simple: {
        question:
          "Tell me about a time you disagreed with a teammate about a technical decision.",
        answer:
          "**Situation:** Well, I mean, a few months ago, my team and I were working on a web application, and we had to choose a database for our new notification service, right? Honestly, I wanted to use a Document Object Database like MongoDB because our data was mostly unstructured JSON objects.\n\n**Task:** My main job was to pick the right tool that would let us launch quickly while keeping our system easy to change later, but one of my senior teammates strongly wanted to use a relational database, PostgreSQL, because we were already using it for other services, you know?\n\n**Action:** So, to solve this disagreement, I set up a small test project to compare both choices side by side with our actual data. I actually invited my teammate to review the test results with me, and we looked at how fast we could write queries and how easy it was to update our data structures, and it turned out that MongoDB made our specific feature much simpler to build, but PostgreSQL gave us better guarantees for data consistency.\n\n**Result:** So, we decided to compromise by using PostgreSQL with its JavaScript Object Notation data type columns for the parts that needed flexibility, and that actually saved us from adding a whole new database to our system while still giving us the speed we needed, which honestly worked out great for everyone.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
      formal: {
        question:
          "Tell me about a time you disagreed with a teammate about a technical decision.",
        answer:
          "**Situation:** Well, actually, I was working on a backend service where we needed to cache user session data, and a senior teammate strongly advocated for using Redis for everything, right out of the gate.\n\n**Task:** I needed to evaluate our actual traffic patterns and architecture requirements to determine if bringing in a brand-new dependency like Redis was truly necessary, or if a simpler approach would work better.\n\n**Action:** So, I did some digging, I mean, I looked at our current database load and our projected scale for the next six months, and honestly, we were nowhere near the threshold where Redis was required. I put together a quick prototype using our existing PostgreSQL database with an indexed table for session storage, and I scheduled a meeting to walk through the latency benchmarks and operational overhead of both options.\n\n**Result:** You know, my teammate actually appreciated the data-driven approach, so we agreed to stick with PostgreSQL for the MVP phase, which saved us from managing an extra infrastructure layer and let us ship two weeks earlier.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram: null,
      },
    },
  });
