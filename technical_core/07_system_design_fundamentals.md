# System Design Fundamentals — Master Notes

> Simple notes for technical interviews, project design, and quick revision.

System design is the process of planning software parts, data, communication, and infrastructure so a system meets its needs.

These notes use simple English. Important ideas are explained in short lines with practical examples.

---

## Table of Contents

1. [System Design Basics](#1-system-design-basics)
2. [Requirements and Constraints](#2-requirements-and-constraints)
3. [Capacity Estimation](#3-capacity-estimation)
4. [High-Level Architecture](#4-high-level-architecture)
5. [Client-Server and APIs](#5-client-server-and-apis)
6. [DNS, CDN, and Load Balancing](#6-dns-cdn-and-load-balancing)
7. [Scalability](#7-scalability)
8. [Stateless and Stateful Services](#8-stateless-and-stateful-services)
9. [Caching](#9-caching)
10. [Database Selection](#10-database-selection)
11. [Replication and Partitioning](#11-replication-and-partitioning)
12. [Consistency and CAP](#12-consistency-and-cap)
13. [Transactions and Idempotency](#13-transactions-and-idempotency)
14. [Messaging and Event-Driven Design](#14-messaging-and-event-driven-design)
15. [Storage Systems](#15-storage-systems)
16. [Availability and Reliability](#16-availability-and-reliability)
17. [Fault Tolerance and Recovery](#17-fault-tolerance-and-recovery)
18. [Performance and Backpressure](#18-performance-and-backpressure)
19. [Observability](#19-observability)
20. [Security](#20-security)
21. [Rate Limiting](#21-rate-limiting)
22. [Distributed IDs and Time](#22-distributed-ids-and-time)
23. [Common Architecture Patterns](#23-common-architecture-patterns)
24. [System Design Interview Method](#24-system-design-interview-method)
25. [URL Shortener Design](#25-url-shortener-design)
26. [Chat System Design](#26-chat-system-design)
27. [News Feed Design](#27-news-feed-design)
28. [File Storage Design](#28-file-storage-design)
29. [Interview Questions](#29-interview-questions)
30. [MCQ Practice](#30-mcq-practice)
31. [Common Mistakes and Interview Tips](#31-common-mistakes-and-interview-tips)
32. [Rapid-Revision Cheat Sheet](#32-rapid-revision-cheat-sheet)

---

## 1. System Design Basics

### Important Terms

- **System:** Connected parts that work together for a goal.
- **Architecture:** High-level structure of components and communication.
- **Component:** A part with a clear responsibility.
- **Service:** A component that provides useful operations through an interface.
- **Node:** One running machine, process, or service instance in a distributed system.
- **Dependency:** Another system or component required for work.
- **Interface:** Agreed way for components to communicate.
- **Data flow:** Path taken by data through the system.
- **Bottleneck:** Part that limits total performance or capacity.
- **Trade-off:** Choosing one benefit while accepting another cost.

### Main Design Goals

- Correct behavior
- Good user experience
- Reliable service
- Acceptable speed
- Safe data
- Easy maintenance
- Controlled cost
- Ability to grow

### Functional vs. Non-Functional Requirements

- **Functional requirement:** Describes what the system must do.
- **Non-functional requirement:** Describes quality such as speed, scale, security, or availability.

Example:

```text
Functional: A user can upload and download a file.
Performance: A normal download starts within 500 ms.
Availability: The service targets 99.9% monthly uptime.
Security: Only allowed users can read private files.
```

### High-Level vs. Low-Level Design

- **High-level design:** Services, databases, traffic, storage, and major decisions.
- **Low-level design:** Classes, functions, data structures, and detailed code behavior.

System design interviews usually start with high-level design and go deeper into important parts.

### Common Quality Words

- **Scalability:** Handles more load without unacceptable failure or delay.
- **Availability:** Is ready and usable when needed.
- **Reliability:** Gives correct service over time.
- **Durability:** Keeps accepted data after covered failures.
- **Maintainability:** Can be understood and changed safely.
- **Security:** Protects data and operations.
- **Observability:** Gives enough signals to understand internal behavior.

---

## 2. Requirements and Constraints

Good design starts by understanding the problem before choosing technology.

### Requirement Questions

- Who are the users?
- What are the main use cases?
- Which features are required now?
- What can be left outside the design?
- How much traffic is expected?
- How much data is stored?
- Is reading or writing more common?
- What latency is acceptable?
- How important is availability?
- How strong must consistency be?
- What security or legal rules apply?

### Scope

Scope defines what the design includes and excludes.

Clear scope prevents the interview or project from becoming too broad.

### Constraints

- Time and budget
- Team skills
- Existing systems
- Legal and privacy needs
- Required cloud or platform
- Data location
- Device and network limits
- Release deadline

### Assumptions

State assumptions clearly when information is missing.

```text
Assumption: 10 million daily users.
Assumption: Read traffic is ten times write traffic.
Assumption: Uploaded files are immutable after creation.
```

An assumption should be reasonable and easy to change if the interviewer gives new information.

---

## 3. Capacity Estimation

Capacity estimation gives rough numbers for traffic, storage, bandwidth, and machines.

Interview estimates do not need perfect numbers; they need clear assumptions and correct units.

### Requests Per Second

```text
Average RPS = Daily Requests / 86,400
Peak RPS = Average RPS × Peak Factor
```

Example:

```text
86.4 million requests/day ÷ 86,400 ≈ 1,000 average RPS
Peak factor 5 → about 5,000 peak RPS
```

### Storage

```text
Daily Storage = Items Per Day × Average Item Size
Total Storage = Daily Storage × Retention Days × Replication Factor
```

### Bandwidth

```text
Bandwidth ≈ Requests Per Second × Average Data Size
```

Convert bytes to bits when link speed is given in bits per second.

### Useful Powers

```text
1 KB ≈ 10³ bytes
1 MB ≈ 10⁶ bytes
1 GB ≈ 10⁹ bytes
1 TB ≈ 10¹² bytes
```

Binary values use powers of 1024 and names such as KiB, MiB, and GiB when exact meaning matters.

### What to Estimate

- Daily active users
- Read and write requests
- Peak traffic
- Data per request
- Stored items
- Retention time
- Cache size
- Network traffic
- Number of service instances

Estimation helps find likely bottlenecks; it is not a promise of exact production use.

---

## 4. High-Level Architecture

A high-level design shows major components and request flow.

```text
Users
  ↓
DNS / CDN
  ↓
Load Balancer
  ↓
Application Services
  ↓
Cache / Database / Object Storage / Message Queue
```

### Common Components

- **Client:** Browser, mobile app, or another service.
- **API gateway:** Main entry that routes, checks, and controls API traffic.
- **Load balancer:** Shares traffic across healthy service instances.
- **Application service:** Runs business logic.
- **Cache:** Stores frequently used data for faster access.
- **Database:** Stores structured or queryable data.
- **Object storage:** Stores large files or blobs.
- **Message broker:** Moves work or events asynchronously.
- **Search engine:** Supports text and filtered search.
- **Monitoring system:** Collects metrics, logs, and traces.

### Design Rules

- Give each component a clear responsibility.
- Keep important data ownership clear.
- Avoid adding a component without a need.
- Draw the normal path and failure path.
- Explain the reason for each major technology choice.

### Request Flow Example

1. Client resolves the service name through DNS.
2. CDN serves static content when cached.
3. Load balancer selects a healthy application instance.
4. Service checks cache and database.
5. Slow background work goes to a message queue.
6. Response returns to the client.

---

## 5. Client-Server and APIs

In client-server design, a client requests work and a server provides it.

### API Styles

- **REST:** Uses resources, HTTP methods, and standard web behavior.
- **RPC:** Calls named remote operations through messages.
- **GraphQL:** Lets clients request selected fields through one schema.
- **WebSocket:** Keeps a two-way connection for live communication.
- **Webhook:** Server sends an HTTP event to another registered server.

### REST Basics

```text
GET    /users/42       → read user
POST   /users          → create user
PUT    /users/42       → replace user
PATCH  /users/42       → update part
DELETE /users/42       → remove user
```

### API Design Points

- Use clear resource and field names.
- Validate input.
- Return useful status codes and errors.
- Support pagination for large lists.
- Set request size and time limits.
- Use authentication and authorization.
- Add versioning when breaking external clients.
- Make retries safe where possible.

### Pagination

- **Offset pagination:** Simple page number/offset but can become slow or inconsistent during changes.
- **Cursor pagination:** Uses a stable position and works better for large changing data.

### Synchronous vs. Asynchronous

- **Synchronous:** Caller waits for the result.
- **Asynchronous:** Caller receives acceptance or an event later.

Use asynchronous work for long jobs, traffic smoothing, or weakly connected steps.

---

## 6. DNS, CDN, and Load Balancing

### DNS

DNS changes a service name into network records such as IP addresses.

DNS can route users to regions, load balancers, or CDN edges, but cached records do not change instantly.

### CDN

A CDN serves cached content from locations near users.

Good CDN content:

- Images and videos
- JavaScript and CSS
- Downloads
- Public cacheable API responses

### CDN Benefits

- Lower user delay
- Less origin traffic
- Better global delivery
- Protection from some traffic spikes

### Cache Control

Content needs expiry and invalidation rules so users do not receive old data for too long.

### Load Balancer

A load balancer sends requests to healthy backend instances.

### Algorithms

- **Round Robin:** Sends requests in order across servers.
- **Least Connections:** Chooses the server with fewer active connections.
- **Weighted:** Gives stronger servers more traffic.
- **Hash-based:** Uses a request value to choose a server.
- **Random:** Chooses randomly, sometimes with sampled load checks.

### Layer 4 vs. Layer 7

- **Layer 4:** Uses IP, port, and connection information.
- **Layer 7:** Understands HTTP host, path, header, or cookie data.

### Health Checks

A health check decides whether an instance should receive traffic.

- **Liveness:** Is the process alive enough to continue?
- **Readiness:** Is it ready to serve traffic now?

A health check should test important ability without creating heavy load.

---

## 7. Scalability

Scalability is the ability to handle growth while keeping acceptable service.

### Vertical Scaling

Vertical scaling adds more CPU, memory, or storage to one machine.

**Benefit:** Simple architecture.

**Limit:** One machine has a size and failure limit.

### Horizontal Scaling

Horizontal scaling adds more machines or service instances.

**Benefit:** Higher capacity and fault tolerance.

**Cost:** Adds distributed communication, data, and coordination problems.

### Scaling Methods

- Add service instances.
- Cache repeated reads.
- Use database replicas.
- Partition data.
- Move slow work to queues.
- Use CDN edge delivery.
- Reduce unnecessary work.
- Batch related operations.

### Scale Up vs. Scale Out

| Scale Up | Scale Out |
|---|---|
| Bigger machine | More machines |
| Simpler operation | Better growth/fault distribution |
| Hard size limit | More coordination complexity |

### Autoscaling

Autoscaling changes instance count from metrics or schedules.

Use several signals such as request rate, queue depth, latency, and CPU; CPU alone may not show the real bottleneck.

---

## 8. Stateless and Stateful Services

### Stateless Service

A stateless service does not require local memory of earlier requests to handle the next request.

Any healthy instance can handle a request when required state is stored in shared systems or sent by the client.

### Stateful Service

A stateful service keeps important state tied to an instance, connection, or local storage.

Examples include database nodes, live game sessions, and some real-time connections.

### Benefits of Stateless Services

- Easy load balancing
- Simple horizontal scaling
- Easy instance replacement
- Less session movement

### Session Storage

- Client token/cookie with safe signed data
- Shared cache
- Database
- Sticky session tied to one backend

Sticky sessions are simple but reduce free load balancing and make failover harder.

### State Design Rule

Keep compute stateless when practical, but do not pretend required state does not exist; place and protect it clearly.

---

## 9. Caching

A cache stores reused data in a faster place to reduce delay and backend work.

### Cache Locations

- Browser cache
- CDN edge cache
- Reverse-proxy cache
- Application memory
- Distributed cache
- Database page/query cache

### Common Patterns

- **Cache-aside:** Application reads cache first and loads missing data from the database.
- **Read-through:** Cache system loads missing data through a configured source.
- **Write-through:** Write updates cache and main storage together.
- **Write-back/behind:** Cache accepts writes and saves them to storage later.
- **Refresh-ahead:** Cache refreshes popular data before expiry.

### Cache-Aside Flow

```text
Read cache
  ├─ Hit  → return value
  └─ Miss → read database → place in cache → return value
```

### Cache Terms

- **Hit:** Requested value is found in cache.
- **Miss:** Requested value is not found.
- **Hit ratio:** Cache hits divided by total cache reads.
- **TTL:** Time before an entry expires.
- **Eviction:** Removal of an entry to free space.
- **Invalidation:** Removal/update because source data changed.

### Eviction Policies

- LRU: Least recently used
- LFU: Least frequently used
- FIFO: Oldest inserted
- Random: Random entry

### Cache Problems

- **Stale data:** Cache has an older value.
- **Cache stampede:** Many requests rebuild one expired key together.
- **Hot key:** One key receives too much traffic.
- **Cache penetration:** Repeated requests for missing data reach storage.
- **Cold start:** Cache begins empty and backends receive more load.

Solutions include request joining/locking, expiry jitter, negative caching, replication, and careful prewarming.

Caching improves speed but makes consistency and invalidation harder.

---

## 10. Database Selection

Choose a database from data shape, queries, transactions, scale, consistency, and operations.

### Relational Database

Good for structured data, joins, constraints, and multi-row transactions.

Examples of use: payments, orders, inventory, accounts.

### Key-Value Database

Good for fast key lookup, sessions, cache, and simple state.

### Document Database

Good for flexible nested records and application-owned aggregates.

### Column-Family Database

Good for large distributed workloads with known partition-key access.

### Graph Database

Good for deep relationship queries such as social connections or fraud paths.

### Search Engine

Good for text search, ranking, filters, and analytics; it is often a secondary index rather than the main source of truth.

### Selection Questions

- What are the main read queries?
- What are the main writes?
- Are joins needed?
- Are multi-record transactions needed?
- How much data and traffic?
- Is schema flexibility important?
- What consistency is required?
- Can the team operate this database safely?

Use one database when it meets the need; multiple database types add synchronization and operational cost.

---

## 11. Replication and Partitioning

### Replication

Replication keeps copies of data on several nodes.

Benefits:

- Better availability
- Read scaling
- Disaster protection
- Lower regional read delay

### Leader-Follower

One leader accepts writes and followers copy changes.

- Synchronous copy gives stronger durability but increases write delay.
- Asynchronous copy is faster but followers can lag and lose recent data during failure.

### Multi-Leader

Several leaders accept writes, often in different regions, but write conflicts must be handled.

### Leaderless

Clients or coordinators write to several replicas and use quorum-like rules.

### Partitioning / Sharding

Partitioning divides data into smaller groups; sharding places these groups on different nodes.

### Shard Methods

- **Range:** Nearby keys stay together but can create hot ranges.
- **Hash:** Spreads keys well but weakens range scans.
- **Directory:** A lookup service maps keys to shards.
- **Geographic:** Keeps data near a region or legal location.

### Good Shard Key

- High enough number of values
- Even traffic and data distribution
- Supports common queries
- Avoids one hot customer/time range
- Does not change often

### Sharding Problems

- Cross-shard query and join
- Distributed transaction
- Hot shard
- Rebalancing
- Global unique constraints
- Backup and recovery across shards

Start with simpler scaling when possible; sharding is powerful but expensive to operate.

---

## 12. Consistency and CAP

Consistency describes what values users can observe after writes.

### Common Models

- **Strong/linearizable consistency:** Reads act as if one current copy exists.
- **Eventual consistency:** Replicas may differ for a time but later become equal.
- **Read-your-writes:** A user sees their own accepted updates.
- **Monotonic reads:** A user does not move backward to an older observed value.
- **Causal consistency:** Related operations are seen in cause-before-effect order.

### CAP Theorem

During a network partition, a distributed system must choose between always giving a successful response and always giving one strongly current value.

- **C:** Consistency under the CAP meaning
- **A:** Availability for requests to non-failing nodes
- **P:** Partition tolerance

Network partitions can happen, so distributed designs must decide behavior during them.

CAP does not mean a normal system chooses only two letters all the time.

### PACELC

PACELC adds another trade-off: when there is no partition, systems may still choose between lower latency and stronger consistency.

### Choosing Consistency

- Money balance and seat booking often need strong rules.
- Like counts and feed order can often accept short delay.
- User profile updates may need read-your-writes.
- Explain consistency per operation, not only for the whole system.

---

## 13. Transactions and Idempotency

### Transaction

A transaction groups related operations into one controlled unit.

ACID recall:

- Atomicity: all or none
- Consistency: rules remain valid
- Isolation: concurrent effects are controlled
- Durability: committed data survives covered failures

### Distributed Transaction

A distributed transaction changes data across services or databases and is harder because nodes can fail separately.

### Two-Phase Commit

A coordinator asks participants to prepare, then tells all to commit or abort.

It gives atomic coordination but can add delay and blocking problems.

### Saga

A saga uses several local transactions with compensating actions after later failure.

Compensation is a business action and may not perfectly erase all outside effects.

### Idempotency

An idempotent operation can be repeated without creating an extra intended effect.

Example: A payment request carries an idempotency key, and repeated requests return the first result instead of charging again.

### At-Least-Once Delivery

At-least-once delivery may send duplicates, so consumers should detect repeated message IDs or use idempotent updates.

### Exactly Once

Exactly-once effect requires careful meaning and system boundaries; many systems combine retries, deduplication, transactions, and idempotency instead of magical delivery.

---

## 14. Messaging and Event-Driven Design

A message system lets producers and consumers communicate without waiting directly for each other.

### Terms

- **Producer:** Sends a message or event.
- **Consumer:** Reads and processes it.
- **Queue:** Usually gives each message to one worker group.
- **Topic/pub-sub:** Sends an event to several interested subscribers.
- **Broker:** Stores and routes messages.
- **Consumer group:** Shares topic work across consumers.
- **Offset:** Position showing consumer progress in a log.
- **Dead-letter queue:** Holds messages that repeatedly fail.

### Benefits

- Traffic smoothing
- Loose service connection
- Background work
- Retry support
- Several event consumers
- Better failure isolation

### Costs

- Delayed result
- Duplicate or out-of-order messages
- Harder debugging
- Schema/version management
- Need for idempotent consumers

### Event vs. Command

- **Command:** Asks a receiver to perform an action.
- **Event:** States that something already happened.

### Ordering

Global ordering is expensive; many systems guarantee order only inside one partition/key.

### Outbox Pattern

The outbox pattern saves business data and an outgoing event in one local transaction, then publishes the event later.

This reduces the problem where database update succeeds but event publication fails.

---

## 15. Storage Systems

### Block Storage

Block storage gives raw fixed-size volumes to a machine or database.

Good for databases, virtual-machine disks, and file systems.

### File Storage

File storage gives shared folders and path-based access.

Good for shared documents and applications needing normal file operations.

### Object Storage

Object storage stores large blobs by object key with metadata.

Good for images, videos, backups, logs, and uploaded files.

### Comparison

| Block | File | Object |
|---|---|---|
| Raw volume blocks | Directory and file paths | Object key and API |
| Low-level/flexible | Familiar shared files | Very large scalable storage |
| Database/VM disk | Shared folders | Media, backup, static content |

### Data Lifecycle

- Hot data: used often and needs fast access.
- Warm data: used sometimes.
- Cold/archive data: used rarely and can use cheaper slow storage.

### Backup vs. Replication

Replication improves availability by copying current data; backup keeps recoverable history against deletion, corruption, or disaster.

Replication is not a replacement for tested backups.

---

## 16. Availability and Reliability

### Availability

Availability is the percentage of time a service is usable.

```text
Availability ≈ Uptime / Total Time
```

| Target | Approximate Yearly Downtime |
|---:|---:|
| 99% | 3.65 days |
| 99.9% | 8.76 hours |
| 99.99% | 52.6 minutes |
| 99.999% | 5.26 minutes |

Values are approximate and depend on how downtime is measured.

### Reliability

Reliability means the system continues giving correct service over time.

### Redundancy

Redundancy keeps extra instances, copies, or paths so one failure does not stop all service.

### Single Point of Failure

A single point of failure is one component whose failure stops an important service.

Remove it through redundancy, failover, or a simpler fallback where the cost is justified.

### Active-Active vs. Active-Passive

- **Active-active:** Several sites/instances serve traffic together.
- **Active-passive:** Standby takes over after active failure.

Active-active uses capacity well but needs stronger data and traffic coordination.

### Graceful Degradation

Graceful degradation keeps core service working when a less important dependency fails.

Example: Show a basic product page even when recommendations are unavailable.

---

## 17. Fault Tolerance and Recovery

Fault tolerance lets a system continue or recover when parts fail.

### Failure Types

- Process crash
- Machine failure
- Network timeout or partition
- Database failure
- Dependency overload
- Data corruption
- Region outage
- Human configuration error

### Main Techniques

- Redundancy
- Health checks
- Failover
- Replication
- Retry with limits
- Timeout
- Circuit breaker
- Bulkhead isolation
- Backup and restore
- Disaster recovery testing

### Timeout

A timeout stops waiting after a chosen limit and releases resources.

Every remote call should have a suitable timeout.

### Retry

Retry can recover from temporary failure but can also increase overload.

Use limited retries, exponential backoff, random jitter, and idempotent operations.

### Circuit Breaker

A circuit breaker stops calls to a failing dependency for a time, then tests recovery.

### Bulkhead

Bulkhead isolation gives separate resource pools so one failure does not consume everything.

### RTO and RPO

- **RTO:** Target time to restore service.
- **RPO:** Maximum acceptable data-loss time window.

Recovery plans are useful only when they are tested.

---

## 18. Performance and Backpressure

### Performance Terms

- **Latency:** Time for one operation.
- **Throughput:** Operations completed per unit time.
- **Bandwidth:** Maximum data capacity of a path.
- **Concurrency:** Work active during the same time period.
- **Saturation:** Resource is near or beyond useful capacity.
- **Queue depth:** Number of waiting tasks or messages.

### Percentiles

```text
p50 → middle request
p95 → 95% finish at or below this time
p99 → tail latency for nearly all requests
```

Average latency can hide a bad experience for slow users, so percentiles are important.

### Common Bottlenecks

- CPU
- Memory
- Disk I/O
- Network
- Database connections
- Locks
- External API
- Queue consumers

### Backpressure

Backpressure tells producers to slow down when consumers cannot keep up.

Methods include bounded queues, request rejection, flow-control windows, delayed retry, and reduced producer rate.

### Load Shedding

Load shedding rejects or drops less important work before overload destroys all service.

### Batch Processing

Batching several operations can reduce network and storage overhead but may increase delay for one item.

### Fan-Out

Fan-out sends one request to many services or data parts; total delay and failure chance can grow with every dependency.

Set deadlines and avoid unnecessary fan-out on critical paths.

---

## 19. Observability

Observability helps teams understand system behavior using external signals.

### Three Main Signals

- **Metrics:** Numeric values over time.
- **Logs:** Records of individual events.
- **Traces:** Request paths across services.

### Useful Metrics

- Request rate
- Error rate
- Latency percentiles
- CPU and memory
- Database connection use
- Cache hit ratio
- Queue depth and age
- Retry count
- Dependency failure

### Golden Signals

- Latency
- Traffic
- Errors
- Saturation

### Structured Logging

Structured logs use named fields such as time, level, service, request ID, user-safe context, and error code.

Do not place passwords, tokens, or sensitive personal data in logs.

### Distributed Tracing

Tracing uses trace and span IDs to connect work across services.

### Alerting

Good alerts point to user impact or urgent system risk and include enough context for action.

Too many weak alerts create alert fatigue and hide real problems.

### SLI, SLO, and SLA

- **SLI:** Measured service indicator such as successful request percentage.
- **SLO:** Internal reliability target for an SLI.
- **SLA:** External agreement that may include consequences.

---

## 20. Security

Security must be included in every system-design layer.

### Main Goals

- Confidentiality
- Integrity
- Availability
- Authentication
- Authorization
- Auditability

### Authentication vs. Authorization

- Authentication asks, “Who are you?”
- Authorization asks, “What may you do?”

### Security Controls

- TLS for data in transit
- Encryption for sensitive stored data
- Strong identity and short-lived credentials
- Least-privilege service accounts
- Input validation
- Parameterized database queries
- Secret manager
- Network segmentation
- Rate limiting
- Audit logs

---

## 21. Rate Limiting

Rate limiting controls how many requests a user, key, IP, tenant, or service may send.

### Reasons

- Protect service capacity
- Reduce abuse
- Enforce fair use
- Control cost
- Support product limits

### Algorithms

- **Fixed window:** Counts requests inside fixed time blocks; simple but allows boundary bursts.
- **Sliding log:** Stores request times; accurate but memory-heavy.
- **Sliding-window counter:** Combines window counts for a useful estimate.
- **Token bucket:** Adds tokens over time and allows short bursts.
- **Leaky bucket:** Sends work at a controlled steady rate.

### Token Bucket

- Bucket has a maximum token count.
- Tokens are added at a fixed rate.
- Each request uses one or more tokens.
- Request is rejected or delayed when no token is available.

### Distributed Limiter

A distributed rate limiter needs shared or partitioned counters, atomic updates, expiry, clock rules, and failure behavior.

### Response

HTTP services commonly use status `429 Too Many Requests` and may include retry information.

Rate limiting should not block trusted health checks or internal recovery by mistake.

---

## 22. Distributed IDs and Time

Distributed systems often need unique sortable IDs without one slow central database.

### ID Choices

- Database auto-increment
- UUID
- Random string
- Time-based ID
- Snowflake-like ID
- Range allocation

### Snowflake-Like ID

```text
Timestamp | Machine/Worker ID | Sequence
```

Benefits include uniqueness, rough time order, and local generation.

Problems include clock movement, worker-ID collision, and visible timing information.

### UUID

UUIDs are widely supported and decentralized but are larger than simple integers; random UUIDs may reduce database index locality.

### Time Problems

- Machine clocks drift.
- Network delay makes exact global ordering hard.
- Time zones affect display and business rules.
- Daylight-saving changes create missing or repeated local times.

Store clear timestamps, normally in UTC for system events, and keep the original business time zone when it matters.

### Logical Time

Logical clocks order events by cause and observation without requiring perfect wall-clock agreement.

---

## 23. Common Architecture Patterns

### Layered Architecture

Separates presentation, business rules, and data access into layers.

### Monolith

Deploys the application as one main unit and is often a good simple starting point.

### Microservices

Splits business areas into independently deployable services but adds network and operations cost.

### Event-Driven Architecture

Services publish events and react asynchronously.

### CQRS

Command Query Responsibility Segregation separates write models from read models when their needs differ strongly.

CQRS adds complexity and should solve a real read/write problem.

### Event Sourcing

Event sourcing stores state changes as an event history and rebuilds current state from events.

It gives history and replay but makes schema change, debugging, and projections more complex.

### API Gateway

An API gateway gives one client entry for routing, authentication, limits, and protocol work.

Do not place all business logic in the gateway.

### Backend for Frontend

A BFF gives a separate backend interface for each client type, such as mobile and web.

### Sidecar

A sidecar runs near an application instance and provides support such as proxying, logging, or security.

### Strangler Pattern

The strangler pattern replaces an old system one area at a time instead of one risky full rewrite.

---

## 24. System Design Interview Method

### Step 1: Clarify Requirements

Ask about main features, users, scale, consistency, latency, availability, security, and scope.

### Step 2: Estimate Scale

Calculate rough RPS, storage, bandwidth, and read/write ratio.

### Step 3: Define APIs and Data

Show important endpoints, data objects, and database access patterns.

### Step 4: Draw High-Level Design

Connect clients, load balancer, services, cache, databases, storage, and queues.

### Step 5: Explain Main Flow

Walk through one read and one write from client to storage and back.

### Step 6: Find Bottlenecks

Discuss hot data, database load, large files, fan-out, queue growth, and failures.

### Step 7: Improve the Design

Add caching, replicas, partitioning, async work, redundancy, and limits only where needed.

### Step 8: Discuss Trade-Offs

Explain consistency, cost, complexity, latency, and operations.

### Interview Time Rule

Do not spend all time drawing boxes; explain decisions and go deep into the most important parts.

### Good Answer Style

- State assumptions.
- Keep the first design simple.
- Use numbers.
- Explain data ownership.
- Discuss failure paths.
- Mention security and monitoring.
- Listen and adjust when requirements change.

---

## 25. URL Shortener Design

### Requirements

- Create a short URL from a long URL.
- Redirect short URL to the original URL.
- Optional expiry and custom alias.
- Collect basic click counts.

### API

```text
POST /links
Body: { long_url, custom_alias?, expires_at? }

GET /{short_code}
Response: HTTP redirect to long URL
```

### Data

```text
Link(short_code, long_url, owner_id, created_at, expires_at)
```

### High-Level Flow

```text
Client → Load Balancer → Link Service → Cache → Database
                                  └────→ Event Queue → Analytics
```

### Short-Code Options

- Encode a unique numeric ID in Base62.
- Generate a random code and retry on collision.
- Allocate code ranges to service instances.

### Read Path

1. Read short code from request.
2. Check distributed cache.
3. On miss, read database and fill cache.
4. Return a redirect.
5. Send click event asynchronously.

### Scale Decisions

- Cache popular mappings.
- Partition database by short code hash.
- Use CDN/edge redirect for very popular links where rules allow.
- Process analytics outside the redirect path.

### Risks

- Bad or unsafe destination links
- Code guessing and scanning
- Hot popular links
- Expired links
- Abuse and spam

Add rate limits, URL checks, reporting, and access policy.

---

## 26. Chat System Design

### Requirements

- One-to-one and group messages
- Online delivery
- Offline message history
- Delivery/read status
- User presence
- Push notifications

### High-Level Design

```text
Client ↔ Connection Gateway ↔ Chat Service ↔ Message Store
                 ↓                  ↓
              Presence          Event Queue → Push Service
```

### Connection

WebSocket or another long-lived protocol supports two-way real-time messages.

### Message Data

```text
Message(message_id, conversation_id, sender_id, sequence, content, created_at)
```

### Message Flow

1. Client sends message with local request ID.
2. Service checks membership and limits.
3. Store message durably.
4. Publish event for recipients.
5. Deliver through connected gateways.
6. Store delivery/read updates.
7. Send push notification to offline users.

### Ordering

Use order per conversation rather than one global order.

Partition messages by conversation ID to keep related writes together.

### Presence

Presence is temporary state and can use an expiring distributed cache.

Presence can be eventually consistent because exact instant status is often not critical.

### Reliability

- Client request IDs prevent duplicate sends.
- Message IDs support deduplication.
- Acknowledgements show stored, delivered, and read states.
- Offline clients fetch messages after their last sequence/cursor.

---

## 27. News Feed Design

### Requirements

- Users create posts.
- Users follow others.
- Home feed shows recent or ranked posts.
- Support likes, comments, and pagination.

### High-Level Design

```text
Write: User → Post Service → Post Store → Event Queue → Feed Workers
Read:  User → Feed Service → Feed Cache/Store → Post/User Data
```

### Fan-Out on Write

When a post is created, its ID is added to follower feed lists.

**Benefit:** Fast feed reads.

**Problem:** A user with millions of followers creates huge write work.

### Fan-Out on Read

The service builds a feed by reading recent posts from followed users.

**Benefit:** Cheap post writes.

**Problem:** Feed reads become slower and need many sources.

### Hybrid Design

Fan out normal users on write, but fetch celebrity posts during feed read.

### Feed Storage

Store post IDs and rank/time information in a feed list; keep full post data in the post store/cache.

### Pagination

Use a cursor based on time/rank and ID instead of a large offset.

### Ranking

Ranking can use freshness, relationship, engagement, content quality, and user preferences.

Keep a simple chronological version available when ranking systems fail.

---

## 28. File Storage Design

### Requirements

- Upload and download files.
- Support large files.
- Share files with permissions.
- Keep metadata and versions.
- High durability.

### High-Level Design

```text
Client → API Service → Metadata Database
   └── Direct Upload/Download → Object Storage → CDN
                         ↓
                    Event Queue → Scan/Thumbnail Workers
```

### Upload Flow

1. Client requests an upload session.
2. Service checks identity, quota, and file rules.
3. Service returns a short-lived signed upload URL.
4. Client uploads directly to object storage.
5. Client/service confirms completion.
6. Background workers scan and process the file.
7. Metadata becomes ready for access.

### Large Files

Use multipart/resumable upload so failed parts can be retried without restarting everything.

### Metadata

```text
File(file_id, owner_id, object_key, name, size, checksum, version, status, created_at)
```

### Download

Use signed short-lived URLs and CDN for allowed content.

### Deduplication

A content hash can find duplicate data, but privacy, ownership, encryption, and collision handling must be designed carefully.

### Durability

- Object replication/erasure coding
- Versioning
- Checksums
- Backup and restore
- Deletion delay/tombstone
- Multi-region copy for required disaster goals

### Security

- Private objects by default
- Authorization before URL creation
- Malware scanning
- File type and size limits
- Encryption
- Audit logs

---

## 29. Interview Questions

### Q1. What is system design?

System design plans components, data, communication, and infrastructure to meet functional and quality needs.

### Q2. Functional vs. non-functional requirement?

Functional requirements describe features, while non-functional requirements describe qualities and limits.

### Q3. Scalability vs. availability?

Scalability handles more load, while availability keeps the service usable.

### Q4. Reliability vs. durability?

Reliability means correct service over time, while durability means accepted data survives covered failures.

### Q5. Vertical vs. horizontal scaling?

Vertical scaling uses a bigger machine, while horizontal scaling adds more machines.

### Q6. Layer 4 vs. Layer 7 load balancer?

Layer 4 uses connection data, while Layer 7 can route using HTTP content.

### Q7. What is a stateless service?

A stateless service can handle a request without local memory of earlier requests.

### Q8. Why use a cache?

A cache lowers read delay and reduces repeated work on slower backends.

### Q9. What is cache-aside?

The application reads cache first and loads missing data from the database.

### Q10. What is a cache stampede?

Many requests rebuild the same expired or missing cache value at one time.

### Q11. Replication vs. sharding?

Replication copies data, while sharding divides different data across nodes.

### Q12. What makes a good shard key?

A good shard key spreads data and traffic evenly and supports common queries.

### Q13. Strong vs. eventual consistency?

Strong consistency gives one current view, while eventual consistency allows short replica differences that later converge.

### Q14. What is CAP theorem?

During a network partition, a system cannot guarantee both full availability and one strongly current value for every request.

### Q15. What is idempotency?

An idempotent operation can be repeated without creating an extra intended effect.

### Q16. Why use a message queue?

A queue separates producers and consumers, smooths traffic, and supports background processing.

### Q17. Queue vs. pub-sub?

A queue normally shares work among consumers, while pub-sub sends an event to several subscriber groups.

### Q18. What is the outbox pattern?

It stores business data and an outgoing event in one local transaction, then publishes later.

### Q19. Backup vs. replication?

Replication keeps current copies for availability, while backup keeps recoverable history.

### Q20. What is graceful degradation?

It keeps core service working when a less important part fails.

### Q21. Timeout vs. retry?

A timeout limits waiting, while a retry tries failed work again under controlled rules.

### Q22. What is a circuit breaker?

It temporarily stops calls to a failing dependency to prevent repeated harm.

### Q23. What is backpressure?

Backpressure slows producers when consumers cannot handle incoming work.

### Q24. Metrics vs. logs vs. traces?

Metrics show trends, logs show events, and traces show one request across components.

### Q25. Authentication vs. authorization?

Authentication checks identity, while authorization checks allowed actions.

### Q26. What is rate limiting?

Rate limiting controls request count for protection, fairness, and cost.

### Q27. Why use cursor pagination?

Cursor pagination stays efficient and stable for large changing result sets.

### Q28. Monolith vs. microservices?

A monolith is simpler to deploy as one unit, while microservices add independent services and operational complexity.

### Q29. What is RTO vs. RPO?

RTO is target recovery time, while RPO is acceptable data-loss time.

### Q30. What makes a strong system-design answer?

It clarifies needs, estimates scale, starts simple, explains data flow, finds bottlenecks, handles failures, and discusses trade-offs.

---

## 30. MCQ Practice

Try the questions before opening the answer key.

**1. Which requirement describes uptime?**  
A. Functional  B. Non-functional  C. API method  D. Table row

**2. Which scaling method adds machines?**  
A. Vertical  B. Horizontal  C. Compression  D. Serialization

**3. Which component shares traffic across servers?**  
A. Load balancer  B. Compiler  C. Text editor  D. ORM only

**4. Which system serves cached content near users?**  
A. CDN  B. PCB  C. Stack  D. DSU

**5. Which pattern reads cache before database?**  
A. Cache-aside  B. Two-phase commit  C. Sharding  D. Tracing

**6. Which technique copies the same data to nodes?**  
A. Replication  B. Partitioning  C. Compression  D. Pagination

**7. Which technique divides data across nodes?**  
A. Replication  B. Sharding  C. Backup only  D. Logging

**8. Which consistency allows short replica delay?**  
A. Eventual  B. Strong only  C. Serial code  D. Static routing

**9. Which property makes retries safer?**  
A. Idempotency  B. Fan-out  C. Coupling  D. Latency

**10. Which system stores failed messages after retries?**  
A. Dead-letter queue  B. CDN  C. Load balancer  D. DNS

**11. Which storage is natural for images and videos?**  
A. Object storage  B. CPU register  C. Stack only  D. DNS cache

**12. Which pattern stops calls to a failing service?**  
A. Circuit breaker  B. Cursor  C. Shard key  D. Trace ID

**13. Which signal shows a request path across services?**  
A. Trace  B. Metric only  C. Backup  D. Token bucket

**14. Which rate limiter allows controlled bursts?**  
A. Token bucket  B. Fixed array  C. DFS  D. Merge sort

**15. Which value is target restore time?**  
A. RTO  B. RPO  C. TTL  D. SLI only

**16. Which pattern stores an event with business data locally?**  
A. Outbox  B. CDN  C. BFF  D. Proxy only

**17. Which architecture stores state changes as events?**  
A. Event sourcing  B. Layered only  C. DNS  D. RAID

**18. Which deployment unit is normally simpler at small scale?**  
A. Monolith  B. Hundreds of microservices  C. Global sharding  D. Multi-leader everywhere

**19. Which technique handles an overloaded consumer?**  
A. Backpressure  B. More retries only  C. No timeout  D. Infinite queue

**20. Which estimate uses daily requests divided by 86,400?**  
A. Average RPS  B. Storage size  C. Cache TTL  D. RPO

<details>
<summary><strong>Answer key</strong></summary>

1. **B** — Uptime is a quality requirement.
2. **B** — Horizontal scaling adds machines.
3. **A** — A load balancer distributes traffic.
4. **A** — A CDN serves from edge locations.
5. **A** — Cache-aside checks cache first.
6. **A** — Replication keeps copies.
7. **B** — Sharding divides data.
8. **A** — Eventual consistency allows temporary difference.
9. **A** — Idempotency avoids extra intended effects.
10. **A** — A DLQ holds repeated failures.
11. **A** — Object storage suits large blobs.
12. **A** — A circuit breaker pauses calls.
13. **A** — A trace follows one request.
14. **A** — Token bucket supports bursts.
15. **A** — RTO is recovery time target.
16. **A** — Outbox stores data and event together.
17. **A** — Event sourcing stores event history.
18. **A** — A monolith is often simpler initially.
19. **A** — Backpressure slows incoming work.
20. **A** — This calculates average requests per second.

</details>

---

## 31. Common Mistakes and Interview Tips

### Concept Mistakes

- Starting with technology before asking requirements.
- Saying scalability and availability are the same.
- Treating more servers as the answer to every bottleneck.
- Adding microservices to a small simple problem without need.
- Saying cache always has fresh data.
- Treating replication as backup.
- Confusing replication with sharding.
- Saying CAP means “choose any two” during normal operation.
- Saying eventual consistency means data never becomes correct.
- Treating a message queue as exactly-once magic.
- Using retries without timeout, limit, backoff, or idempotency.
- Using an infinite queue instead of overload control.
- Ignoring hot keys and hot shards.
- Adding global ordering when only per-user/order ordering is needed.
- Treating HTTPS as complete system security.

### Design Mistakes

- No clear scope or assumptions.
- No traffic or storage estimate.
- Drawing boxes without request flow.
- Keeping data ownership unclear.
- Choosing many databases without reason.
- Ignoring failure of dependencies.
- No monitoring, alerts, or recovery plan.
- No security or rate limits.
- No pagination for large results.
- Putting slow background work on the user request path.
- Optimizing before finding a real bottleneck.
- Giving a final design with no trade-offs.

### Interview Tips

- Ask questions before drawing.
- Write functional and non-functional requirements separately.
- Use rough numbers and units.
- Start with one simple working design.
- Explain read and write paths.
- Go deeper into two or three important areas.
- Discuss failure, recovery, security, and monitoring.
- Compare choices instead of naming popular tools.
- Listen to hints and update the design.
- Finish with bottlenecks and future improvements.

---

## 32. Rapid-Revision Cheat Sheet

### Design Flow

```text
Requirements → Scale → APIs/Data → High-Level Design
→ Read/Write Flow → Bottlenecks → Reliability/Security → Trade-Offs
```

### Core Comparisons

| Topic | Quick Difference |
|---|---|
| Functional vs. non-functional | Feature vs. quality/limit |
| Scale up vs. out | Bigger machine vs. more machines |
| Stateless vs. stateful | No local request history vs. instance-tied state |
| Cache vs. database | Fast reused copy vs. source data store |
| Replication vs. sharding | Copy data vs. divide data |
| Strong vs. eventual consistency | Current single view vs. temporary replica delay |
| Queue vs. pub-sub | Shared work vs. several subscriber groups |
| Block vs. object storage | Raw volume vs. key-based blob |
| Availability vs. reliability | Usable time vs. correct service over time |
| RTO vs. RPO | Restore time vs. data-loss window |
| Authentication vs. authorization | Identity vs. permission |
| Monolith vs. microservices | One deployment vs. independent services |

### Scale Formulas

```text
Average RPS = Daily Requests / 86,400
Peak RPS = Average RPS × Peak Factor
Storage = Items × Average Size × Retention × Copies
Bandwidth = RPS × Average Response Size
```

### Cache Recall

- Cache hit → return fast.
- Cache miss → load source and fill cache.
- TTL controls expiry.
- Invalidation controls source changes.
- Jitter and request joining reduce stampede.
- Hot keys need replication or special handling.

### Reliability Recall

```text
Timeout → stop waiting
Retry → try temporary failure again
Backoff + jitter → avoid retry storm
Circuit breaker → pause failing dependency
Bulkhead → isolate resource failure
Fallback → keep reduced service
```

### Database Recall

- Relational → joins, constraints, transactions.
- Key-value → simple fast key lookup.
- Document → flexible nested records.
- Column-family → large partitioned workloads.
- Graph → relationship traversal.
- Search engine → text and ranking.

### Observability Recall

```text
Metrics → trends and alerts
Logs    → detailed events
Traces  → request path

Golden signals: Latency, Traffic, Errors, Saturation
```

### Thirty-Second Interview Answer

> System design starts by clarifying features, scale, latency, consistency, availability, security, and cost. A simple design normally uses clients, load balancing, stateless services, suitable databases, cache, object storage, and queues. It then grows through replicas, partitioning, asynchronous work, failure protection, rate limits, observability, and tested recovery, with clear trade-offs for every added part.

### Final Checklist

- Can I clarify requirements and scope?
- Can I estimate RPS, storage, and bandwidth?
- Can I draw one clear high-level architecture?
- Can I explain read and write flows?
- Can I choose cache, database, and storage correctly?
- Can I compare replication, partitioning, and consistency?
- Can I design retries, idempotency, and messaging safely?
- Can I handle overload, failures, backup, RTO, and RPO?
- Can I include security, rate limiting, and observability?
- Can I explain trade-offs and likely bottlenecks?

**Recommended revision order:** requirements → estimates → architecture → caching/databases → replication/sharding → consistency/messaging → reliability → security/observability → design cases.
- Dependency and patch management

### Token Basics

A token carries or refers to identity/permission information and must be signed or protected from change.

Short expiry, correct audience, secure storage, and revocation strategy reduce token risk.

### Multi-Tenant Systems

A multi-tenant system serves several customers while keeping their data and limits separate.

Tenant identity should be checked at every data and operation boundary.

### Threat Modeling

Identify assets, trust boundaries, entry points, attackers, threats, and controls before finalizing the design.

Security is not solved by using HTTPS alone.

---
