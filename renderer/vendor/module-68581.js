// vendor/module-68581.js — webpack module 68581
// params: (e, t) = (module, exports, require)
"use strict";
(t.systemDesignFillers = void 0),
  (t.systemDesignFillers = {
    concise: {
      simple: {
        question: "Design a URL shortener handling a billion redirects a month",
        answer:
          "Well, I'd build it using a load balancer in front of several web servers, backed by a key-value store like Redis for fast lookups, and a relational database for permanent storage. You know, we can generate short keys using a hash function, and honestly, caching hot links in memory makes handling all those redirects pretty easy, right?",
        keySteps: null,
        code: null,
        explanation: null,
        diagram:
          'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["Web Servers"]\nn3["Redis Cache"]\nn4["Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Route"| n2\nn2 --\x3e|"Check Cache"| n3\nn3 --\x3e|"Miss Fallback"| n4',
      },
      formal: {
        question: "Design a URL shortener handling a billion redirects a month",
        answer:
          "Well, I'd design it using a load balancer, a cluster of stateless app servers, and a distributed key-value store like Redis for fast lookups. You know, to handle a billion monthly redirects, we'd hash the long URL using MD5 or Base62, right?",
        keySteps: null,
        code: null,
        explanation: null,
        diagram:
          'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["App Servers"]\nn3["Redis Cache"]\nn4["Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Route"| n2\nn2 --\x3e|"Get URL"| n3\nn3 --\x3e|"Cache Miss"| n4',
      },
    },
    balanced: {
      simple: {
        question: "Design a URL shortener handling a billion redirects a month",
        answer:
          "Well, to design a URL shortener for a billion redirects a month, I'd focus on making it fast and scalable, you know? A billion redirects a month comes out to roughly four hundred requests every second, which isn't super massive, but we still need it to handle traffic spikes smoothly. I mean, we'd use a load balancer at the front to spread incoming traffic across several application servers, right? For turning long links into short ones, we can take the long URL, run it through a hash function like Base62, and take the first few characters for our short key. Honestly, storing these mappings in a fast key-value store or a relational database with proper indexing would work well, but we'd also put a caching layer in front of the database, you know, like Redis, to make those heavy redirect requests super quick.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram:
          'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["App Servers"]\nn3["Redis Cache"]\nn4["Database"]\nn0 --\x3e|"HTTPS Request"| n1\nn1 --\x3e|"Forward Traffic"| n2\nn2 --\x3e|"Check Cache"| n3\nn3 --\x3e|"Cache Miss"| n4',
      },
      formal: {
        question: "Design a URL shortener handling 1 billion redirects a month",
        answer:
          "Well, to design a URL shortener handling a billion redirects a month, I'd start by breaking down the traffic numbers. One billion requests a month translates to roughly four hundred requests per second on average, which isn't actually massive for a single well-optimized server, but we'd want to design for peak traffic that could easily be ten times higher, right? \n\nSo, my core architecture would use a client-facing load balancer distributing traffic to a cluster of stateless application servers. For generating the short keys, I'd pre-generate unique IDs using a distributed ID generation service like Snowflake, or use a hashing approach like MD5 or SHA-256 on the long URL and take the first seven characters, resolving collisions with a quick database check. \n\nStorage is really critical here because reads will vastly outnumber writes, probably by a hundred to one. I'd use a scalable NoSQL database like Cassandra or DynamoDB for the URL mappings since we just need simple key-value lookups with high availability. And honestly, the most important part for performance is putting a distributed cache like Redis right in front of the database to handle the heavy read volume and ensure our redirect latency stays under ten milliseconds, you know?",
        keySteps: null,
        code: null,
        explanation: null,
        diagram:
          'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["App Servers"]\nn3["Redis Cache"]\nn4["NoSQL Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Route"| n2\nn2 --\x3e|"Check Cache"| n3\nn3 --\x3e|"Cache Miss"| n4',
      },
    },
    detailed: {
      simple: {
        question:
          "How would you design a URL shortener that handles a billion redirects a month?",
        answer:
          "Well, to design a link shortener that handles a billion redirects every single month, I'd build a system focused on speed and high availability. You know, a billion requests a month sounds like a lot, but when you break it down, it's actually about four hundred requests per second on average, which a single modern server can handle. But, you know, we need to plan for traffic spikes and global users, so we'd design a distributed system with a load balancer at the front, a cluster of application servers, and a robust database layer. For the database, honestly, a relational database like PostgreSQL could work, but a key-value store like Redis combined with a scalable database like Cassandra or Amazon DynamoDB is much better because we're doing way more reads than writes. When a user sends a long link, our service generates a unique short code, usually using a base sixty-two encoding scheme—meaning letters and numbers—and stores the mapping. When someone visits the short link, we look up the long URL and send an HTTP thirty-two redirect back to them. To make this super fast, we'd put a caching layer like Redis in front of the database so popular links get served straight from memory without hitting the disk, right? We'd also place a content delivery network globally to cache redirects closer to the users, which cuts down latency big time. As for scaling, if we run out of short codes, we just increase the length of the code by a few characters, which gives us plenty of room to grow. I mean, it's all about keeping the read path as short and fast as possible while making sure the write path is safe from collisions.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram:
          'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["App Servers"]\nn3["Redis Cache"]\nn4["Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Route Traffic"| n2\nn2 --\x3e|"Check Cache"| n3\nn3 --\x3e|"Cache Miss"| n4',
      },
      formal: {
        question: "Design a URL shortener handling a billion redirects a month",
        answer:
          "Well, you know, when we're looking at a billion redirects a month, we're talking about roughly 400 requests per second on average, which isn't massive for reads, but we definitely need a scalable, highly available architecture to handle traffic spikes and ensure low latency. So, my approach would be to build a service using a combination of a web server tier, a distributed cache like Redis, and a scalable relational or NoSQL database like PostgreSQL or DynamoDB, depending on our consistency needs.\n\nI mean, for the core hashing mechanism, we can take the long URL, run it through an MD5 or SHA-256 hash, and take the first six or eight characters, encoding them in Base62 using characters a-z, A-Z, and 0-9. To handle collisions, which can happen, we'd just check the database, and if the short URL already exists, we append a counter or a random salt to the original URL before hashing it again. Actually, to make things even faster and avoid collision checks entirely during high-throughput writes, we could pre-generate unique IDs using a distributed key generation service like a cluster of Zookeeper nodes or Snowflake IDs, and then just convert that numeric ID to Base62.\n\nRight, so for the data flow, when a user requests a short URL, it hits our load balancer, goes to an API server, and that server first checks the Redis cache. If it's a cache hit, we return a 301 or 302 redirect instantly, you know, within milliseconds. If it's a cache miss, we query the database, pull the original URL, populate the cache for future requests, and then return the redirect. For writing new short URLs, the request hits the database, we store the mapping, and we can lazily or eagerly populate the cache. To handle analytics and tracking clicks at this scale, honestly, we shouldn't block the redirect path; instead, we'd push click events asynchronously to a message queue like Kafka, and let a worker service aggregate them into a data store like ClickHouse or S3 for reporting.",
        keySteps: null,
        code: null,
        explanation: null,
        diagram:
          'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["API Servers"]\nn3["Redis Cache"]\nn4["Database"]\nn5["Kafka Queue"]\nn0 --\x3e|"HTTPS Request"| n1\nn1 --\x3e|"Route"| n2\nn2 --\x3e|"Check Cache"| n3\nn3 --\x3e|"Cache Miss"| n4\nn2 --\x3e|"Log Click"| n5',
      },
    },
  });
