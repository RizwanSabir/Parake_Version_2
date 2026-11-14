// vendor/module-31484.js — webpack module 31484
// params: (e, t) = (module, exports, require)
"use strict";
(t.systemDesign = void 0),
  (t.systemDesign = {
    bullets: {
      concise: {
        simple: {
          question:
            "Design a URL shortener handling a billion redirects a month",
          answer:
            "- Hash long uniform resource locator to short unique string using base sixty-two encoding\n- Store mapping in key-value database with high read throughput\n- Cache popular links in memory layer for fast redirection",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client"]\nn1["API Server"]\nn2["Cache Layer"]\nn3["Database"]\nn0 --\x3e|"redirect request"| n1\nn1 --\x3e|"check cache"| n2\nn2 --\x3e|"cache miss"| n3',
        },
        formal: {
          question:
            "Design a URL shortener handling 1 billion redirects per month",
          answer:
            "- High-level architecture with API Gateway, load balancer, stateless app servers, and distributed cache\n- Base62 encoding for compact short keys mapping to original URLs\n- Redis caching layer absorbing read traffic for high throughput",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["App Servers"]\nn3["Redis Cache"]\nn4["SQL Database"]\nn0 --\x3e|"HTTP request"| n1\nn1 --\x3e|"Forward"| n2\nn2 --\x3e|"Lookup key"| n3\nn3 --\x3e|"Cache miss"| n4',
        },
      },
      balanced: {
        simple: {
          question:
            "Design a URL shortener handling a billion redirects a month",
          answer:
            "- Estimate scale: around four hundred requests per second average\n- Key components: load balancer, web service, database, cache layer\n- Base62 encoding for short codes from unique integer IDs\n- Key-value store like Redis for caching popular short links\n- Horizontal scaling with multiple application servers behind a load balancer\n- Database sharding for storing mapping of short to long URLs\n- Analytics tracking asynchronous with message queue like Kafka",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["User"]\nn1["Load Balancer"]\nn2["Web Servers"]\nn3["Redis Cache"]\nn4["Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Forward"| n2\nn2 --\x3e|"Check Cache"| n3\nn3 --\x3e|"Miss Fallback"| n4',
        },
        formal: {
          question:
            "Design a URL shortener handling one billion redirects per month",
          answer:
            "- System design utilizing REST API behind load balancer\n- Unique 7-character base62 encoding for short keys\n- Distributed NoSQL key-value store like DynamoDB or Cassandra\n- In-memory Redis cache layer for high-throughput reads\n- Read-heavy optimization with 100-to-1 read-to-write ratio\n- Asynchronous analytics pipeline using Kafka and worker nodes",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["API Server"]\nn3["Redis Cache"]\nn4["NoSQL Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Route"| n2\nn2 --\x3e|"Check Key"| n3\nn3 --\x3e|"Cache Miss"| n4',
        },
      },
      detailed: {
        simple: {
          question:
            "Design a URL shortener handling one billion redirects a month",
          answer:
            "- Base62 encoding for short URLs to maximize space and minimize length\n- System capacity: roughly four hundred requests per second average, four thousand peak\n- Client redirects via HTTP status code 301 for permanent routing\n- Application servers stateless behind a load balancer for horizontal scale\n- Relational database storing original and short URL mapping tables\n- In-memory cache layer in front of the database for hot redirect paths\n- Counter service generating unique integer IDs for distinct URL generation\n- Cache eviction policy like Least Recently Used to manage memory limits",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["Cache Layer"]\nn3["App Servers"]\nn4["Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Check Cache"| n2\nn2 --\x3e|"Cache Miss"| n3\nn3 --\x3e|"Query DB"| n4',
        },
        formal: {
          question: "Design a URL shortener for one billion redirects a month",
          answer:
            "- System scale calculation: one billion requests per month equals roughly four hundred reads per second\n- Write volume lower at about four writes per second assuming a hundred-to-one read-write ratio\n- Base sixty-two encoding using alphanumeric characters mapped to auto-incrementing integer IDs\n- Seven character short code capacity exceeding fifty-six trillion unique URLs easily\n- Hash function approach using MD5 or SHA two-fifty-six taking first seven characters with collision handling\n- Storage layer choice using NoSQL databases like DynamoDB or Cassandra for horizontal scale and low latency\n- Caching layer with Redis storing hot URLs in memory to serve high traffic instantly\n- Redirection handling via HTTP status code three hundred and twenty-two permanent redirects for browser caching\n- Expiration policy implementation dropping TTL fields in database or lazy deletion on read checks\n- Analytics tracking through asynchronous message queues like Kafka feeding data lakes without slowing down redirects",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["API Service"]\nn3["Redis Cache"]\nn4["NoSQL Database"]\nn5["Kafka Analytics"]\nn0 --\x3e|"HTTPS Request"| n1\nn1 --\x3e|"Route"| n2\nn2 --\x3e|"Check Cache"| n3\nn3 --\x3e|"Fallback"| n4\nn2 --\x3e|"Log Click"| n5',
        },
      },
    },
    balanced: {
      concise: {
        simple: {
          question: "Design a URL shortener",
          answer:
            "I would design a system using a web server, a database, and a cache to handle high traffic quickly.\n- Use a database to store original and short web addresses.\n- Use a cache to store popular web addresses for fast access.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client"]\nn1["Web Server"]\nn2["Cache"]\nn3["Database"]\nn0 --\x3e|"request"| n1\nn1 --\x3e|"check"| n2\nn2 --\x3e|"miss"| n3',
        },
        formal: {
          question:
            "Design a URL shortener handling a billion redirects a month",
          answer:
            "I would design a scalable URL shortener using a distributed key-value store, hashing algorithms, and a caching layer.\n- Use Base62 encoding on unique IDs for short URLs.\n- Store mappings in a NoSQL database like DynamoDB.\n- Cache popular redirects with Redis to reduce DB load.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["API Service"]\nn3["Redis Cache"]\nn4["NoSQL DB"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Route"| n2\nn2 --\x3e|"Check Cache"| n3\nn3 --\x3e|"Cache Miss"| n4',
        },
      },
      balanced: {
        simple: {
          question:
            "How would you design a URL shortener that handles a billion redirects a month?",
          answer:
            "I would design a web service that takes long web links and turns them into short ones, while making sure it can handle a billion visits every month.\n\n- First, we calculate the load: one billion visits a month is about four hundred visits every second, which is a small number for a modern database to handle.\n- Second, we use a database to store two things for each link: the short code and the long web link.\n- Third, when a user clicks a short link, our server looks up the long web link in the database and sends the user to it right away using a redirect code.\n- Fourth, we put a memory cache in front of the database so that popular links load instantly without hitting the main database every time.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["User"]\nn1["Web Server"]\nn2["Memory Cache"]\nn3["Database"]\nn0 --\x3e|"Click link"| n1\nn1 --\x3e|"Check link"| n2\nn2 --\x3e|"Miss"| n3',
        },
        formal: {
          question:
            "Design a URL shortener handling a billion redirects a month",
          answer:
            "I would design a scalable URL shortener using a distributed architecture to handle high throughput and low latency for redirects.\n\n- **Traffic Estimation**: A billion redirects a month translates to roughly 400 requests per second (RPS) on average, with peak traffic likely reaching 2,000 to 4,000 RPS, which is easily manageable with caching and horizontal scaling.\n- **API Endpoints**: We need two main endpoints: `POST /api/v1/shorten` to generate a short URL from a long URL, and a redirect endpoint `GET /{short_key}` that performs an HTTP 301 or 302 redirect to the original destination.\n- **Database Choice**: A NoSQL key-value store like Redis or Cassandra works well because the access pattern is simple read-heavy (`short_key` to `long_url`), requiring fast key lookups without complex relational queries.\n- **Shortening Algorithm**: We can use a hashing function like MD5 or SHA-256 on the long URL plus a timestamp, encode the output using Base62 (`a-z`, `A-Z`, `0-9`), and take the first 7 characters. Alternatively, a pre-generated ID counter distributed across multiple application servers prevents collision without relying on heavy locks.\n- **Caching Layer**: Placing a distributed cache like Redis or Memcached in front of the database for hot URLs will absorb the vast majority of redirect read requests, keeping database latency extremely low.\n- **Scaling & High Availability**: We can place a Load Balancer (like Nginx or AWS ALB) in front of multiple stateless application server instances, and use database replication with read replicas to scale read traffic infinitely.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client / User"]\nn1["Load Balancer"]\nn2["App Servers"]\nn3["Redis Cache"]\nn4["Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Route Request"| n2\nn2 --\x3e|"Check Cache"| n3\nn3 --\x3e|"Cache Miss"| n4',
        },
      },
      detailed: {
        simple: {
          question:
            "Design a URL shortener that handles a billion redirects a month",
          answer:
            "I would design a web service for shortening web addresses using a load balancer, multiple web servers, a cache layer, and a database to store the mappings.\n- A load balancer splits incoming web traffic evenly across several application servers to keep the system running smoothly without crashing.\n- Application servers handle incoming requests, generate short codes, and talk to the cache and database layers.\n- A memory cache stores popular web links so the system can look them up instantly without hitting the slower database every time.\n- A relational or NoSQL database saves the full web address paired with its short code for permanent storage.\n- For a billion redirects a month, the math comes out to about four hundred requests every single second, which is a moderate load that a few standard servers can easily manage with proper caching.\n- To handle traffic spikes, we can use a distributed cache like Redis in front of the database, ensuring that ninety-nine percent of redirect requests never touch the disk.\n- For example, when a user enters a short link, the web server checks the memory cache first, finds the original web address in milliseconds, and sends the user to the target page immediately.\n- Trade-offs include using a NoSQL database for fast writes and horizontal scaling versus a relational database for strong consistency, where I would choose a key-value store like Redis or DynamoDB for maximum speed and simplicity.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Load Balancer"]\nn1["Web Servers"]\nn2["Memory Cache"]\nn3["Database"]\nn0 --\x3e|"traffic"| n1\nn1 --\x3e|"lookup"| n2\nn2 --\x3e|"miss"| n3',
        },
        formal: {
          question:
            "Design a URL shortener handling a billion redirects a month",
          answer:
            "I would design a scalable, highly available URL shortening service by leveraging a distributed cache layer, a horizontally scalable relational or NoSQL database, and consistent hashing for load distribution.\n\n- **Traffic Estimation**: A billion redirects a month translates to roughly 400 requests per second (RPS) on average, with peak traffic potentially reaching 2,000 RPS, which is easily manageable with standard web servers and a caching layer.\n- **Short URL Generation**: I would use a Base62 encoding strategy (a-z, A-Z, 0-9) on a unique auto-incrementing integer ID from a distributed ID generator (like Snowflake) or pre-generated keys stored in a key-value store to avoid collisions.\n- **Database Choice**: A NoSQL key-value store like Cassandra or DynamoDB works well for read-heavy workloads due to high availability and low latency, while a relational database like PostgreSQL with a sharding strategy is also viable if ACID compliance is preferred for analytics.\n- **Caching Layer**: Placing Redis or Memcached in front of the database will absorb the vast majority of read traffic for popular URLs, drastically reducing database load and keeping redirect latency under 10 milliseconds.\n- **Handling Collisions and Expiration**: For custom aliases, we check existence in the database first with a unique constraint. For expired links, we can either use a TTL feature in Redis/DynamoDB or run a background worker to clean up stale records.\n- **Trade-offs**: Choosing a NoSQL database provides massive read scalability and fault tolerance, but sacrifices complex querying capabilities. Using an in-memory cache like Redis speeds up lookups significantly, but introduces cache invalidation complexity and requires careful memory management.\n- **Example**: If a user requests `bit.ly/3xAmP1`, our load balancer routes the HTTP 301/302 redirect request to an API server, which checks the Redis cache, finds the long URL `https://example.com/very/long/path?query=1`, and returns the redirect response immediately.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["API Servers"]\nn3["Redis Cache"]\nn4["Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Forward"| n2\nn2 --\x3e|"Check URL"| n3\nn3 --\x3e|"Cache Miss"| n4',
        },
      },
    },
    paragraph: {
      concise: {
        simple: {
          question:
            "Design a URL shortener handling a billion redirects a month",
          answer:
            "I would design a scalable URL shortener using a unique identifier generator, a relational database for long-term storage, and a fast key-value cache to handle high-volume redirects quickly. A load balancer distributes incoming traffic across multiple web servers, and we use a short base-62 encoding scheme to keep the links compact.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Load Balancer"]\nn1["Web Servers"]\nn2["Cache Layer"]\nn3["Database"]\nn0 --\x3e|"requests"| n1\nn1 --\x3e|"check key"| n2\nn2 --\x3e|"miss"| n3',
        },
        formal: {
          question:
            "Design a URL shortener handling one billion redirects a month",
          answer:
            "I would design this using a scalable distributed system with an API gateway, a stateless application service layer, a relational database for persistent storage, and an in-memory Redis cache to handle the heavy read traffic efficiently.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client"]\nn1["API Gateway"]\nn2["App Service"]\nn3["Redis Cache"]\nn4["SQL Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Route"| n2\nn2 --\x3e|"Check Cache"| n3\nn3 --\x3e|"Miss Fallback"| n4',
        },
      },
      balanced: {
        simple: {
          question:
            "Design a URL shortener handling one billion redirects a month",
          answer:
            "I would design this system using a scalable web service backed by a fast database and a caching layer. To handle one billion redirects a month, we can break that down to about four hundred requests per second on average, which is well within the reach of a single database, but we want to make sure it is fast and reliable. \n\nWhen a user sends a long link, our web service creates a short, unique code and saves both the long link and the short code in a database. When someone visits the short link, our service looks up the short code, finds the original long link, and sends the user there using a standard HTTP redirect. \n\nTo make the lookups fast, we put a cache in front of our database. Most traffic will hit the cache, which means very few requests actually reach the database. For generating the unique codes, we can use a counter service to generate unique numbers and turn them into a short text string using base sixty-two encoding. If the system grows even larger, we can spread our data across multiple database servers using the first few letters of the short code as a guide.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["User"]\nn1["Load Balancer"]\nn2["Web Servers"]\nn3["Cache"]\nn4["Database"]\nn0 --\x3e|"request"| n1\nn1 --\x3e|"route"| n2\nn2 --\x3e|"check"| n3\nn3 --\x3e|"miss"| n4',
        },
        formal: {
          question:
            "Design a URL shortener handling a billion redirects a month",
          answer:
            "I would design this URL shortener using a REST API backed by a distributed NoSQL key-value store like Cassandra or DynamoDB, with an in-memory caching layer using Redis in front to handle the high read volume efficiently. \n\nFor the core generation logic, we can hash the original URL using MD5 or SHA-256, take the first 6 or 7 characters, and encode them using Base62 to produce a short, URL-safe alphanumeric string. To handle potential hash collisions, we can append a counter or a random string before hashing if the short URL already exists in our database.\n\nTo scale to a billion redirects a month—which is roughly 400 requests per second average, with likely spikes higher—we will deploy Redis clusters across multiple regions behind a load balancer. Since reads heavily outnumber writes in a URL shortener, caching popular redirects in Redis will absorb most of the traffic and keep database latency extremely low.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["Redis Cache"]\nn3["API Service"]\nn4["NoSQL Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Check Cache"| n2\nn2 --\x3e|"Cache Miss"| n3\nn3 --\x3e|"Query DB"| n4',
        },
      },
      detailed: {
        simple: {
          question:
            "Design a URL shortener handling a billion redirects a month",
          answer:
            "To design a URL shortener that handles one billion redirects a month, I would build a system that is fast, highly available, and able to scale out easily. One billion requests a month translates to roughly four hundred requests every second on average, with peak traffic likely reaching a few thousand requests per second. Since reading short links happens much more often than creating them, we need an architecture optimized for extremely fast read operations.\n\nAt the core of the system, I would use a relational database or a key-value store to map the short code to the original long URL. A key-value store like Redis combined with a persistent database like PostgreSQL or a managed NoSQL database would work well. When a user requests a short link, the application server checks an in-memory cache first. If the link is in the cache, it returns the long URL immediately with an HTTP redirect status code of three hundred and two. If it is not in the cache, the server fetches it from the database, saves it back to the cache, and then redirects the user.\n\nTo generate the short codes, I can use a pre-computed sequence or a hashing algorithm like hashing the long URL with a cryptographic hash function and taking the first seven characters of the output. To prevent collisions, I would check if the code already exists in the database before saving it. To handle scale, I would place a load balancer in front of multiple application servers and use database replication with read replicas to distribute the read traffic evenly. For example, if a popular marketing campaign launches and a specific link gets millions of clicks, storing that link directly in memory on our cache servers ensures the database does not get overloaded.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["User"]\nn1["Load Balancer"]\nn2["App Servers"]\nn3["Redis Cache"]\nn4["Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Route Traffic"| n2\nn2 --\x3e|"Check Cache"| n3\nn2 --\x3e|"Query DB"| n4',
        },
        formal: {
          question:
            "Design a URL shortener handling a billion redirects a month",
          answer:
            "To design a URL shortener handling a billion redirects a month, we need to focus on high read availability, low latency, and efficient write operations. A billion redirects a month translates to roughly four hundred requests per second on average, which is well within the capacity of a single well-provisioned server, but with peak traffic possibly hitting a few thousand requests per second, we must architect for horizontal scalability and fast lookups. My approach uses a distributed key-value store paired with a stateless application layer and an efficient hashing or auto-incrementing ID generation strategy.\n\nFor the core architecture, I would use a load balancer in front of multiple stateless application servers running Node.js or Go. When a user requests a short URL like 'bit.ly/xyz', the application checks an in-memory cache, such as Redis, to serve the destination URL instantly. If it is a cache miss, the service queries a scalable database, populates the cache asynchronously, and returns an HTTP 302 redirect. Using a 302 redirect instead of a 301 is crucial because it allows us to track analytics and click counts on our servers rather than having browsers bypass us on subsequent visits.\n\nFor data storage, a relational database like PostgreSQL can handle the initial load using an auto-incrementing ID, which we then convert to Base62 encoding to generate a compact short string like 'abc12'. As scale grows, we can transition to a distributed NoSQL database like Cassandra or DynamoDB for horizontal write and read scaling. To handle high availability and global distribution, we would deploy our read replicas and Redis cache across multiple geographic regions behind a Content Delivery Network, ensuring that users worldwide experience minimal latency when resolving their links.",
          keySteps: null,
          code: null,
          explanation: null,
          diagram:
            'flowchart TD\nn0["Client"]\nn1["Load Balancer"]\nn2["App Servers"]\nn3["Redis Cache"]\nn4["Database"]\nn0 --\x3e|"HTTP Request"| n1\nn1 --\x3e|"Route"| n2\nn2 --\x3e|"Check Cache"| n3\nn2 --\x3e|"Query DB"| n4',
        },
      },
    },
  });
