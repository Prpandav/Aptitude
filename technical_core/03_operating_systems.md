# Operating Systems (OS) — Master Notes

> A beginner-to-advanced handbook for aptitude tests, technical interviews, coding rounds, and quick revision.

An Operating System manages hardware resources, provides execution environments for programs, and exposes safe abstractions for processing, memory, storage, devices, and communication.

Examples use general OS terminology with Linux, Windows, and Unix-specific notes where behavior differs.

---

## Table of Contents

1. [OS Fundamentals](#1-os-fundamentals)
2. [OS Architecture](#2-os-architecture)
3. [Kernel and System Calls](#3-kernel-and-system-calls)
4. [Processes](#4-processes)
5. [Threads](#5-threads)
6. [Process Scheduling](#6-process-scheduling)
7. [Interprocess Communication](#7-interprocess-communication)
8. [Process Synchronization](#8-process-synchronization)
9. [Classical Synchronization Problems](#9-classical-synchronization-problems)
10. [Deadlocks](#10-deadlocks)
11. [Memory Management](#11-memory-management)
12. [Paging and Segmentation](#12-paging-and-segmentation)
13. [Virtual Memory](#13-virtual-memory)
14. [Page-Replacement Algorithms](#14-page-replacement-algorithms)
15. [File Systems](#15-file-systems)
16. [I/O Systems](#16-io-systems)
17. [Disk Scheduling](#17-disk-scheduling)
18. [Protection and Security](#18-protection-and-security)
19. [Virtualization and Containers](#19-virtualization-and-containers)
20. [Real-Time and Distributed Systems](#20-real-time-and-distributed-systems)
21. [Linux and Unix Essentials](#21-linux-and-unix-essentials)
22. [Performance and Reliability](#22-performance-and-reliability)
23. [Design Principles and Best Practices](#23-design-principles-and-best-practices)
24. [Interview Questions](#24-interview-questions)
25. [MCQ Practice](#25-mcq-practice)
26. [Coding and Algorithm Problems](#26-coding-and-algorithm-problems)
27. [Common Mistakes and Interview Tips](#27-common-mistakes-and-interview-tips)
28. [Rapid-Revision Cheat Sheet](#28-rapid-revision-cheat-sheet)

---

## 1. OS Fundamentals

### Core Terms in One Line

- **Operating system:** System software that manages hardware and provides services to programs.
- **Kernel:** The privileged core responsible for resource management and hardware control.
- **User space:** The restricted execution environment containing ordinary applications and services.
- **Program:** A passive file containing executable instructions and data.
- **Process:** A running program together with its execution state and resources.
- **Thread:** A schedulable execution path inside a process.
- **Resource:** A processor, memory region, file, device, lock, or other managed facility.
- **Interrupt:** A hardware-originated event that redirects CPU control to a handler.
- **Exception:** A synchronous event caused by the current instruction, such as a fault or trap.
- **System call:** A controlled request from user space for a kernel service.
- **Shell:** A command interpreter that launches programs and connects their input and output.

### Main Responsibilities

- **Process management:** Creates, schedules, synchronizes, and terminates execution units.
- **Memory management:** Allocates, maps, protects, shares, and reclaims memory.
- **Storage management:** Organizes persistent data through file systems and block devices.
- **Device management:** Coordinates hardware through drivers, interrupts, and I/O frameworks.
- **Protection:** Isolates users, processes, and resources according to policy.
- **Networking:** Provides communication protocols and socket abstractions.
- **Accounting:** Measures resource usage for monitoring, limits, or billing.

### OS Goals

- **Convenience:** Present usable abstractions over complex hardware.
- **Efficiency:** Use processors, memory, and devices effectively.
- **Fairness:** Share resources according to explicit policy.
- **Reliability:** Contain faults and recover from expected failures.
- **Security:** Prevent unauthorized access and limit damage.
- **Scalability:** Remain useful as workloads and hardware grow.

### OS Types

| Type | One-Line Theory |
|---|---|
| Batch | Executes queued jobs with minimal interactive input. |
| Multiprogramming | Keeps several jobs in memory to improve CPU utilization. |
| Time-sharing | Rapidly switches among users or tasks for interactive response. |
| Multiprocessing | Uses more than one processor or core. |
| Multitasking | Allows several tasks to make progress during one period. |
| Real-time | Targets bounded timing behavior for deadline-sensitive work. |
| Distributed | Coordinates resources across networked machines. |
| Embedded | Serves a dedicated device under constrained resources. |
| Mobile | Manages battery-aware, sensor-rich, application-sandboxed devices. |

---

## 2. OS Architecture

### Architecture Styles

- **Monolithic kernel:** Places many OS services in one privileged address space for efficient direct interaction.
- **Layered system:** Organizes services into levels that depend mainly on lower layers.
- **Microkernel:** Keeps a small privileged core and moves more services into user-space processes.
- **Modular kernel:** Supports loadable components while retaining monolithic-kernel performance characteristics.
- **Hybrid kernel:** Combines design ideas from monolithic and microkernel architectures.
- **Exokernel:** Securely exposes low-level resources so library operating systems define abstractions.

### Comparison

| Architecture | Strength | Trade-off |
|---|---|---|
| Monolithic | Fast in-kernel communication | Large trusted code base |
| Microkernel | Isolation and replaceable services | IPC/context-switch overhead |
| Layered | Clear organization | Rigid boundaries may cost flexibility |
| Modular | Extensible with practical speed | Faulty privileged modules remain dangerous |

Linux is commonly described as a modular monolithic kernel; Windows NT and Apple's XNU are commonly described as hybrid designs.

### Boot Process

```text
Firmware → Bootloader → Kernel → Init/System Manager → Services → User Session
```

- **Firmware:** Initializes hardware and selects a boot target.
- **Bootloader:** Loads the kernel and initial boot data into memory.
- **Kernel initialization:** Configures memory, processors, drivers, and core subsystems.
- **Init/system manager:** Starts services and establishes the user-space environment.

---

## 3. Kernel and System Calls

### Execution Modes

- **User mode:** Restricts privileged instructions and direct hardware access.
- **Kernel mode:** Permits privileged operations needed for system control.
- **Mode bit/privilege level:** Hardware state used to enforce execution privilege.

A mode switch changes privilege context; a context switch changes the executing thread or process, so the terms are not identical.

### System-Call Categories

- **Process control:** Create, execute, wait for, signal, and terminate processes.
- **File management:** Open, read, write, seek, close, and inspect files.
- **Device management:** Request operations and configure devices.
- **Information maintenance:** Read time, identifiers, limits, and system state.
- **Communication:** Create pipes, shared memory, sockets, and message channels.
- **Protection:** Set identities, permissions, capabilities, and access controls.

### Typical Unix-Like Flow

```text
Application → Library Wrapper → System-Call Interface → Kernel → Driver/Subsystem
```

- `fork()` creates a child process with inherited state using copy-on-write optimizations on modern systems.
- `exec()` replaces the current process image with a new program.
- `wait()` waits for child state changes and helps reap terminated children.
- `open()`, `read()`, `write()`, and `close()` operate through file descriptors.

### Interrupts, Traps, and Faults

- **Interrupt:** Asynchronous event normally raised by hardware.
- **Trap:** Intentional synchronous transfer, often used for system calls or debugging.
- **Fault:** Potentially recoverable exception such as a page fault.
- **Abort:** Severe exception generally not restartable at the same instruction.

---

## 4. Processes

A process is a protected execution environment containing an address space, resources, credentials, and at least one thread.

### Process Components

- **Text/code:** Executable machine instructions.
- **Data:** Initialized global and static variables.
- **BSS:** Zero-initialized or uninitialized static storage.
- **Heap:** Dynamically managed process memory.
- **Stack:** Function frames, local values, and return information for each thread.
- **PCB:** Kernel metadata used to manage a process.

### Process Control Block

- Process identifier and parent relationship
- Current state and scheduling information
- Saved register and program-counter values
- Address-space metadata
- Open-file and I/O state
- Credentials, limits, and accounting information

### Process States

```text
New → Ready → Running → Terminated
        ↑       ↓
        └── Waiting/Blocked
```

- **New:** Creation is in progress.
- **Ready:** Able to run but waiting for CPU time.
- **Running:** Currently executing on a processor.
- **Waiting/blocked:** Waiting for an event or resource.
- **Terminated:** Execution has ended but cleanup may remain.
- **Suspended:** Temporarily prevented from being scheduled, depending on the OS model.

### Context Switch

A context switch saves the current execution state and restores another task's state so scheduling can continue.

Context-switch cost includes scheduler work, register state, cache/TLB disruption, and lost pipeline locality; it is overhead but necessary for multitasking.

### Process Relationships

- **Parent process:** Creates or supervises another process.
- **Child process:** Is created by a parent and may inherit selected resources.
- **Zombie:** A terminated Unix-like child whose exit status has not been collected.
- **Orphan:** A process whose parent terminated and which is adopted/reparented by a system process.
- **Daemon/service:** A long-running background process providing system or application functionality.

---

## 5. Threads

A thread is the smallest common unit of CPU scheduling and shares its process resources with peer threads.

### Shared and Private State

Threads in one process usually share code, heap, global data, and open resources, while each thread has its own registers, program counter, stack, and scheduling state.

### Benefits

- **Responsiveness:** One thread can continue while another waits.
- **Resource sharing:** Threads communicate through a shared address space.
- **Economy:** Creation and switching can cost less than separate processes.
- **Parallelism:** Threads can run simultaneously on multiple cores.

### Thread Models

- **Many-to-one:** Many user threads map to one kernel thread and cannot run in parallel on multiple cores.
- **One-to-one:** Each user thread maps to a kernel thread, enabling parallelism with higher kernel cost.
- **Many-to-many:** Many user threads are multiplexed over a set of kernel threads.
- **Thread pool:** Reuses a bounded set of workers to execute submitted tasks.

### User vs. Kernel Threads

| User-Level Threads | Kernel-Level Threads |
|---|---|
| Managed primarily by a runtime/library | Managed and scheduled by the kernel |
| Can switch without a kernel scheduler | Kernel can schedule them across cores |
| Blocking behavior depends on mapping | One blocked thread need not block peers |

### Concurrency vs. Parallelism

- **Concurrency:** Multiple tasks make progress during overlapping time periods.
- **Parallelism:** Multiple tasks execute literally at the same instant on different processing units.
- Concurrent code is not automatically parallel, and parallel code must still coordinate shared state.

---

## 6. Process Scheduling

Scheduling selects which ready task receives processor time according to system policy.

### Scheduling Terms

- **Arrival time:** Time a process enters the ready workload.
- **Burst time:** CPU execution time required in the model.
- **Completion time:** Time execution finishes.
- **Turnaround time:** `Completion Time − Arrival Time`.
- **Waiting time:** `Turnaround Time − CPU Burst Time` in a simple single-burst model.
- **Response time:** Time from arrival until first CPU service.
- **Throughput:** Completed work per unit time.
- **CPU utilization:** Fraction of time the processor performs useful work.

### Preemption

- **Preemptive scheduling:** The OS may interrupt a running task to schedule another.
- **Non-preemptive scheduling:** A running task keeps the CPU until it blocks, yields, or finishes.

### Algorithms

| Algorithm | One-Line Theory |
|---|---|
| FCFS | Runs ready processes in arrival order and may cause a convoy effect. |
| SJF | Selects the shortest predicted CPU burst and minimizes average waiting under ideal assumptions. |
| SRTF | Preemptive SJF chooses the process with least remaining time. |
| Priority | Selects the highest-priority task and may starve low-priority work. |
| Round Robin | Gives each ready task a time quantum in cyclic order. |
| Multilevel Queue | Separates fixed workload classes into queues with distinct policies. |
| MLFQ | Moves tasks between priority queues based on observed behavior and feedback. |

### Important Effects

- **Convoy effect:** Short tasks wait behind a long CPU-bound task under FCFS.
- **Starvation:** A ready task waits indefinitely because policy repeatedly favors others.
- **Aging:** Gradually raises waiting-task priority to reduce starvation.
- **Quantum:** A very large Round Robin quantum approaches FCFS, while a very small quantum increases switching overhead.

### CPU-Burst Prediction

```text
τ(n+1) = α × t(n) + (1 − α) × τ(n)
```

Exponential averaging weights the latest measured burst and the previous prediction.

---

## 7. Interprocess Communication

IPC allows isolated processes to exchange data and coordinate activity.

### IPC Mechanisms

- **Pipe:** Unidirectional byte stream commonly connecting related processes.
- **Named pipe/FIFO:** File-system-named pipe usable by unrelated processes under permission rules.
- **Message queue:** Kernel- or broker-managed discrete messages.
- **Shared memory:** Maps the same physical memory into several processes for fast data exchange.
- **Socket:** Bidirectional communication endpoint for local or network communication.
- **Signal:** Lightweight asynchronous event notification with limited payload.
- **Memory-mapped file:** Maps file contents into an address space for file access or sharing.
- **RPC:** Makes remote communication resemble procedure calls while hiding transport details.

### Message-Passing Dimensions

- **Direct:** Sender names the receiver explicitly.
- **Indirect:** Processes communicate through mailboxes, ports, or queues.
- **Blocking:** The operation waits for completion or data.
- **Non-blocking:** The operation returns without waiting for the full event.
- **Buffered:** Messages wait in finite or unbounded storage.
- **Unbuffered:** Sender and receiver rendezvous directly.

Shared memory is fast after setup but requires explicit synchronization; message passing provides stronger separation but adds copying, serialization, or kernel/broker overhead.

---

## 8. Process Synchronization

Synchronization controls access and ordering when concurrent execution shares mutable state or resources.

### Race Condition

A race condition occurs when correctness depends on unpredictable relative timing between concurrent operations.

```text
Thread A reads counter = 5
Thread B reads counter = 5
Thread A writes 6
Thread B writes 6       ← one increment is lost
```

### Critical-Section Requirements

- **Mutual exclusion:** At most one participant executes the protected critical section at a time.
- **Progress:** If no participant is inside, eligible contenders should not be postponed without reason.
- **Bounded waiting:** A requester should not be bypassed indefinitely after requesting entry.

### Synchronization Primitives

- **Mutex:** Ownership-based lock allowing one thread into a critical section.
- **Binary semaphore:** Semaphore restricted to values representing available/unavailable state.
- **Counting semaphore:** Tracks multiple interchangeable resource units.
- **Spinlock:** Repeatedly checks a lock and can suit very short waits where sleeping is costly.
- **Read-write lock:** Permits concurrent readers or one exclusive writer.
- **Condition variable:** Lets threads sleep until a predicate may have become true.
- **Monitor:** Combines shared state, mutual exclusion, and condition synchronization.
- **Barrier:** Holds participants until a required group reaches the same phase.
- **Atomic operation:** Appears indivisible relative to other participating operations.

### Semaphore Operations

```text
wait(S):   decrement when available; otherwise block
signal(S): increment and wake an eligible waiter
```

Semaphore operations must themselves be atomic.

### Mutex vs. Semaphore

| Mutex | Semaphore |
|---|---|
| Represents ownership of a critical section | Represents permits or event counts |
| Normally unlocked by its owner | May be signaled by another participant |
| Commonly initialized unlocked | Initialized to an available permit count |

### Busy Waiting vs. Blocking

- **Busy waiting:** Consumes CPU while repeatedly checking a condition.
- **Blocking:** Suspends execution until a wake-up event, saving CPU at scheduling cost.
- Spinlocks are appropriate only when expected waits are sufficiently short and preemption behavior is understood.

### Memory Ordering

Locks and atomics must provide required visibility and ordering; `volatile` alone is not a universal replacement for mutual exclusion or atomic compound operations.

---

## 9. Classical Synchronization Problems

### Producer–Consumer / Bounded Buffer

Producers add items and consumers remove items while synchronization prevents overflow, underflow, and races.

```text
empty = N, full = 0, mutex = 1

Producer: wait(empty) → wait(mutex) → insert → signal(mutex) → signal(full)
Consumer: wait(full)  → wait(mutex) → remove → signal(mutex) → signal(empty)
```

The semaphore order matters: waiting for a count before locking the buffer avoids holding the mutex while waiting for capacity/data.

### Readers–Writers

The problem coordinates shared-data readers and writers, allowing safe reader concurrency while writers require exclusivity.

- **Reader-preference:** Maximizes reader access but can starve writers.
- **Writer-preference:** Prevents writer starvation but may delay readers.
- **Fair solution:** Orders arrivals to bound waiting for both groups.

### Dining Philosophers

Philosophers alternate between thinking and acquiring two shared forks, illustrating deadlock and starvation risks.

Solutions include ordering fork acquisition, limiting simultaneous contenders, using a waiter, or atomically acquiring both resources.

### Sleeping Barber

The problem models a service provider, limited waiting seats, and arriving customers using semaphores and mutual exclusion.

### Cigarette Smokers

The problem demonstrates condition synchronization among agents with different resource combinations.

---

## 10. Deadlocks

A deadlock is a state in which a set of tasks cannot progress because each waits for a resource or event held by another in the set.

### Coffman Conditions

1. **Mutual exclusion:** At least one resource has non-shareable use.
2. **Hold and wait:** A task holds resources while requesting more.
3. **No preemption:** Resources are not forcibly reclaimed under normal rules.
4. **Circular wait:** A cycle exists in the wait-for relationship.

All four conditions are necessary for classical reusable-resource deadlock.

### Resource-Allocation Graph

- A process-to-resource edge represents a request.
- A resource-to-process edge represents an assignment.
- With one instance per resource type, a cycle indicates deadlock.
- With multiple instances, a cycle is necessary but not always sufficient.

### Handling Strategies

- **Ignore:** Accept rare deadlocks and rely on operational recovery.
- **Prevention:** Structurally break at least one necessary condition.
- **Avoidance:** Grant requests only when the state remains safe.
- **Detection:** Allow deadlocks, identify cycles, and recover.
- **Recovery:** Abort tasks, preempt resources where safe, or restore checkpoints.

### Safe State and Banker's Algorithm

- **Safe state:** At least one completion order exists satisfying every process's remaining maximum need.
- **Unsafe state:** No safe sequence is currently known, though deadlock may not yet exist.
- **Need:** `Maximum − Allocation`.
- Banker's Algorithm checks whether granting a request leaves a safe state.

### Deadlock vs. Starvation vs. Livelock

- **Deadlock:** Participants wait in a cycle and make no progress.
- **Starvation:** A participant is repeatedly denied resources or scheduling.
- **Livelock:** Participants actively respond to one another but still make no useful progress.

Consistent lock ordering is a common practical deadlock-prevention technique.

---

## 11. Memory Management

Memory management maps process address spaces to physical memory while enforcing protection, sharing, allocation, and reclamation.

### Address Terms

- **Logical/virtual address:** Address generated in a process's virtual address space.
- **Physical address:** Address used to access actual main memory.
- **Address binding:** Maps program addresses to memory locations at compile, load, or execution time.
- **MMU:** Hardware that translates virtual addresses and checks permissions.
- **Relocation:** Adjusts or translates addresses so a program can execute at a chosen location.

### Allocation Strategies

- **Contiguous allocation:** Gives a process one continuous physical-memory region.
- **Fixed partitioning:** Divides memory into predetermined regions and causes internal fragmentation.
- **Variable partitioning:** Creates regions sized to requests and can cause external fragmentation.
- **First fit:** Chooses the first sufficiently large free region.
- **Best fit:** Chooses the smallest adequate region and may create tiny holes.
- **Worst fit:** Chooses the largest free region to leave a large remainder.
- **Next fit:** Continues searching from the previous allocation position.

### Fragmentation

- **Internal fragmentation:** Allocated space exceeds requested space inside an allocation unit.
- **External fragmentation:** Free memory exists but is divided into unusable non-contiguous holes.
- **Compaction:** Moves allocations together to combine free space, requiring relocation support and significant copying.

### Swapping

Swapping moves process memory between RAM and secondary storage, though modern systems more commonly page selected regions rather than swap complete processes.

---

## 12. Paging and Segmentation

### Paging

Paging divides virtual memory into fixed-size pages and physical memory into equal-size frames.

```text
Virtual address = Page number + Offset
Physical address = Frame number + Offset
```

- **Page table:** Maps virtual page numbers to physical frames and stores status/protection bits.
- **Page-table entry:** Commonly contains a frame number, valid/present bit, access permissions, referenced bit, and dirty bit.
- **Page size:** Trades page-table size and I/O efficiency against internal fragmentation and locality granularity.

### Translation Lookaside Buffer

A TLB is a small associative cache containing recent virtual-to-physical translations.

With hit ratio `h`, lookup time `t`, and memory time `m`, a simplified effective-access model is:

```text
EAT = h(t + m) + (1 − h)(t + 2m)
```

Exact translation cost depends on caches, page-table levels, and hardware overlap.

### Page-Table Designs

- **Single-level:** Simple but potentially large for sparse address spaces.
- **Multilevel:** Allocates lower page-table levels only for populated address ranges.
- **Hashed:** Hashes virtual page numbers and can support large sparse spaces.
- **Inverted:** Uses entries based primarily on physical frames rather than one table per virtual page.

### Segmentation

Segmentation divides an address space into variable-sized logical units such as code, stack, and data.

```text
Logical address = Segment number + Offset
```

- Segmentation matches programmer-visible logical units and supports distinct protection/sharing.
- Variable segment sizes create external fragmentation.
- Some designs combine segmentation with paging.

### Paging vs. Segmentation

| Paging | Segmentation |
|---|---|
| Fixed-size units | Variable-size logical units |
| Mostly transparent to programmer | Reflects program structure |
| Internal fragmentation possible | External fragmentation possible |
| Page number plus offset | Segment number plus offset |

---

## 13. Virtual Memory

Virtual memory gives each process a protected address space that can exceed currently resident physical memory.

### Demand Paging

Demand paging loads a page only when execution first requires it.

### Page-Fault Handling

1. Hardware detects a missing or disallowed translation.
2. Control transfers to the kernel page-fault handler.
3. The kernel validates whether the access is legal.
4. A free frame is found or a victim page is selected.
5. Dirty victim data is written back if required.
6. The requested page is loaded or created.
7. Tables/TLB are updated and the instruction restarts.

An invalid access terminates or signals the process instead of loading a page.

### Copy-on-Write

Copy-on-write initially shares protected pages and creates a private copy only when a participant attempts modification.

### Locality

- **Temporal locality:** Recently accessed data is likely to be accessed again.
- **Spatial locality:** Data near a recent access is likely to be accessed soon.
- **Working set:** Pages actively used during a recent execution window.

### Thrashing

Thrashing occurs when excessive page faults dominate useful execution because active working sets do not fit available frames.

Controls include working-set allocation, page-fault-frequency monitoring, reduced multiprogramming, or more physical memory.

### Frame Allocation

- **Equal allocation:** Gives processes equal frame counts.
- **Proportional allocation:** Allocates according to process size or weight.
- **Local replacement:** Selects victims only from the faulting process's frames.
- **Global replacement:** May select frames belonging to other processes.

---

## 14. Page-Replacement Algorithms

Page replacement chooses a victim when a demanded page needs a frame and no free frame is available.

| Algorithm | One-Line Theory |
|---|---|
| FIFO | Replaces the page resident for the longest time. |
| Optimal | Replaces the page whose next use is farthest in the future. |
| LRU | Replaces the page not used for the longest past time. |
| Second Chance | Gives recently referenced FIFO candidates another opportunity. |
| Clock | Implements Second Chance efficiently with a circular pointer. |
| LFU | Replaces the least frequently used page under maintained counts. |
| MFU | Replaces the most frequently used page under a different recency assumption. |

### Important Properties

- Optimal provides a theoretical minimum fault count for a fixed reference string but requires future knowledge.
- LRU uses past recency as an approximation of future behavior and needs tracking support.
- FIFO can show **Belady's anomaly**, where more frames produce more page faults.
- Stack algorithms such as Optimal and true LRU do not exhibit Belady's anomaly.
- Dirty-page preference can reduce write-back cost but must remain compatible with replacement policy.

---

## 15. File Systems

A file system names, organizes, stores, protects, and retrieves persistent data on storage media.

### Core Terms

- **File:** Named persistent sequence or structured collection of data.
- **Directory:** Mapping from names to files or subordinate directories.
- **Path:** Name sequence locating an object in a directory hierarchy.
- **Metadata:** File type, size, ownership, permissions, timestamps, and block mapping.
- **File descriptor/handle:** Process-local reference to an open file object.
- **Inode:** Unix-like metadata structure identifying a file independently of directory names.
- **Mount:** Attaches a file-system namespace at a directory location.
- **VFS:** Kernel abstraction providing one interface over different file-system implementations.

### File Operations

- Create, open, read, write, append, seek, truncate, close, rename, and delete.
- Opening validates access and creates kernel/process state for later operations.
- Deleting a Unix-like directory entry unlinks a name; storage is reclaimed when no links/open references require the file.

### Directory Structures

- **Single-level:** Places every file in one directory and causes naming conflicts.
- **Two-level:** Gives each user a separate directory.
- **Tree:** Organizes nested directories under one root.
- **Acyclic graph:** Allows shared files/directories without cycles.
- **General graph:** Permits cycles and needs traversal/reclamation safeguards.

### Allocation Methods

- **Contiguous allocation:** Stores file blocks together for fast sequential/random access but complicates growth.
- **Linked allocation:** Links scattered blocks and favors sequential access but weakens random access.
- **Indexed allocation:** Uses index blocks or tree structures to locate file blocks.
- **Extent allocation:** Describes files as ranges of contiguous blocks and balances locality with growth.

### Free-Space Management

- **Bitmap:** Uses one bit per allocation unit for compact status and contiguous-run search.
- **Free list:** Links free blocks with simple allocation but slower large-run discovery.
- **Grouping/counting:** Stores batches or runs of free blocks.

### Links

- **Hard link:** Another directory entry referencing the same underlying file object.
- **Symbolic link:** A separate file containing a path to another object.
- Hard links usually cannot cross file systems and are commonly restricted for directories.

### Crash Consistency

- **Journaling:** Logs metadata or data changes to support consistent recovery.
- **Copy-on-write file system:** Writes new blocks and atomically redirects metadata rather than overwriting live blocks.
- `fsync`-style operations request durability, but guarantees depend on the OS, file system, device, and application protocol.

---

## 16. I/O Systems

The I/O subsystem provides controlled, efficient access to devices with widely different speed and behavior.

### I/O Components

- **Device controller:** Hardware interface controlling a device.
- **Device driver:** Kernel software translating generic requests into device-specific operations.
- **Interrupt handler:** Responds to device completion or status events.
- **DMA:** Transfers data between a device and memory with limited CPU copying involvement.
- **Buffering:** Temporarily stores data to absorb producer/consumer speed differences.
- **Caching:** Retains reusable data to avoid slower access.
- **Spooling:** Queues complete jobs for serial devices or services such as printers.

### I/O Methods

- **Programmed I/O:** CPU repeatedly checks and moves data under instruction control.
- **Interrupt-driven I/O:** Device interrupts the CPU when service or completion is needed.
- **DMA:** A controller transfers blocks while the CPU performs other work.
- **Memory-mapped I/O:** Device registers appear at assigned memory addresses.

### Blocking Models

- **Blocking I/O:** The calling thread waits until the operation can complete.
- **Non-blocking I/O:** The call returns immediately with available progress/status.
- **Asynchronous I/O:** Completion is delivered later through an event, callback, future, or queue.
- **I/O multiplexing:** One thread monitors several descriptors for readiness.

---

## 17. Disk Scheduling

Disk scheduling orders pending storage requests to balance latency, throughput, and fairness; classical seek algorithms mainly describe rotating disks.

| Algorithm | One-Line Theory |
|---|---|
| FCFS | Services requests in arrival order with simple fairness. |
| SSTF | Services the request nearest the current head and may starve distant requests. |
| SCAN | Moves like an elevator, servicing requests in both directions. |
| C-SCAN | Services in one direction and returns to the beginning without serving on return. |
| LOOK | Reverses at the last pending request rather than the physical disk end. |
| C-LOOK | Services one direction only and jumps between extreme pending requests. |

### Disk Timing

- **Seek time:** Time to position the head over a target track.
- **Rotational latency:** Time waiting for the target sector to rotate under the head.
- **Transfer time:** Time to move the actual data.
- **Access time:** Approximate sum of seek, rotation, transfer, and controller/queue delays.

SSDs have no mechanical seek or rotation, so their schedulers focus more on queueing, parallelism, fairness, and device behavior.

### RAID in One Line

- **RAID 0:** Stripes data for performance with no redundancy.
- **RAID 1:** Mirrors data for redundancy at capacity cost.
- **RAID 5:** Stripes data with distributed single parity and tolerates one disk failure.
- **RAID 6:** Uses dual distributed parity and tolerates two disk failures.
- **RAID 10:** Stripes across mirrored pairs for performance and redundancy.

RAID improves availability/performance under its design but does not replace backups.

---

## 18. Protection and Security

Protection controls how authenticated subjects access system objects, while security addresses broader threats to confidentiality, integrity, and availability.

### Principles

- **Least privilege:** Give only permissions needed for the current responsibility.
- **Separation of privilege:** Require independent conditions or roles for sensitive operations.
- **Fail-safe defaults:** Deny access unless permission is explicitly granted.
- **Complete mediation:** Check every relevant access through trusted enforcement.
- **Defense in depth:** Use multiple independent protective layers.
- **Economy of mechanism:** Keep trusted security mechanisms small and understandable.

### Access Models

- **Access matrix:** Conceptual table mapping subjects and objects to permitted operations.
- **ACL:** Stores permitted subjects/groups with each object.
- **Capability:** Unforgeable token granting a subject authority over an object.
- **DAC:** Owners can delegate permissions under discretionary policy.
- **MAC:** Central labels and policy govern access beyond owner discretion.
- **RBAC:** Permissions attach to roles assigned to users.

### Common Threats

- Privilege escalation, code injection, memory corruption, credential theft, race attacks, malware, denial of service, and insecure configuration.
- **TOCTOU:** A resource changes between a security check and its later use.
- **ASLR:** Randomizes memory locations to make exploitation less predictable.
- **DEP/NX:** Marks memory regions non-executable to limit code injection.
- **Sandbox:** Restricts a program's accessible resources and operations.

Security patches, secure defaults, minimal services, isolation, monitoring, and tested recovery all contribute to OS security.

---

## 19. Virtualization and Containers

Virtualization abstracts computing resources so multiple isolated environments can share physical hardware.

### Virtual Machines

- **Hypervisor:** Creates and manages virtual machines.
- **Type 1 hypervisor:** Runs directly on hardware or as the primary system layer.
- **Type 2 hypervisor:** Runs as an application on a host OS.
- **Full virtualization:** Presents virtual hardware capable of running an unmodified guest OS.
- **Paravirtualization:** Uses guest awareness or special interfaces for efficient cooperation.
- **Hardware assistance:** CPU features support privileged instruction and memory virtualization.

### Containers

Containers isolate processes while sharing the host kernel.

- **Namespace:** Gives a process group an isolated view of IDs, mounts, networking, and other resources.
- **Control group/cgroup:** Accounts for and limits CPU, memory, I/O, and process resources on Linux.
- **Container image:** Layered package containing an application and user-space dependencies.
- **Container runtime:** Creates and manages container processes using kernel isolation features.

### VM vs. Container

| Virtual Machine | Container |
|---|---|
| Includes a guest kernel | Shares the host kernel |
| Strong hardware-level boundary | Process-level OS isolation |
| Heavier startup and memory use | Usually lighter and faster to start |
| Can run a different guest OS family | Requires kernel compatibility |

Containers are not inherently secure by default; capabilities, namespaces, seccomp, images, and host configuration must be hardened.

---

## 20. Real-Time and Distributed Systems

### Real-Time Systems

- **Hard real-time:** Missing a deadline is considered system failure.
- **Soft real-time:** Occasional deadline misses reduce quality but are tolerated.
- **Periodic task:** Repeats at a known interval.
- **Aperiodic task:** Arrives irregularly without a fixed period.
- **Deadline:** Latest acceptable completion time.
- **Jitter:** Variation in timing or response latency.

### Real-Time Scheduling

- **Rate Monotonic:** Fixed-priority scheduling gives shorter-period tasks higher priority.
- **Earliest Deadline First:** Dynamically selects the task with the nearest deadline.
- Priority inversion occurs when a high-priority task waits for a lock held by a lower-priority task.
- Priority inheritance temporarily raises a lock holder's priority to reduce inversion.

### Distributed-System Concepts

- **Transparency:** Hides selected distribution details from users or applications.
- **Remote communication:** Exchanges messages across independently failing machines.
- **Partial failure:** Some nodes or links fail while others continue.
- **Clock synchronization:** Estimates a common time despite drift and network delay.
- **Logical clock:** Orders events without requiring perfectly synchronized physical clocks.
- **Consensus:** Nodes agree on a value despite delays and permitted failures.

A networked collection of computers is not automatically one distributed operating system; coordination and unified resource abstractions define the stronger concept.

---

## 21. Linux and Unix Essentials

### Process and File Concepts

- Linux exposes many resources through file-descriptor interfaces.
- `/proc` provides a virtual view of process and kernel information.
- `/sys` exposes device and kernel-object information through sysfs.
- File permissions use owner, group, and other read/write/execute bits plus optional ACLs.
- Signals notify processes of events, but handlers must obey strict safety rules.

### Common Commands

| Command | Purpose |
|---|---|
| `ps` | Display process information. |
| `top`/`htop` | Monitor processes and resource usage. |
| `kill` | Send a signal to a process. |
| `nice`/`renice` | Influence scheduling priority. |
| `free` | Show memory statistics. |
| `vmstat` | Report processes, memory, paging, and CPU activity. |
| `df` | Show mounted file-system space. |
| `du` | Estimate file/directory space usage. |
| `ls -l` | Show file metadata and permissions. |
| `chmod` | Change mode bits. |
| `chown` | Change ownership. |
| `lsof` | List open files and associated processes. |
| `strace` | Trace system calls and signals on Linux. |

### Unix Process Creation

```text
fork() → child process
exec() → replace process image
wait() → collect child status
exit() → terminate process
```

`fork()` returns different values to parent and child, allowing both to follow distinct control paths.

### Permission Recall

```text
r = 4, w = 2, x = 1
chmod 754 file → owner rwx, group r-x, others r--
```

Directory read lists names, write modifies entries, and execute permits traversal/search.

---

## 22. Performance and Reliability

### Performance Terms

- **Latency:** Time taken to complete one operation.
- **Throughput:** Number of operations completed per unit time.
- **Utilization:** Fraction of resource capacity in use.
- **Scalability:** Ability to handle growth without unacceptable degradation.
- **Contention:** Competition for a shared resource that limits progress.
- **Bottleneck:** Resource or stage limiting overall performance.

### Measurement Rules

- Measure before optimizing and retain a reproducible baseline.
- Use percentiles for latency because averages can hide severe tail behavior.
- Separate CPU, memory, storage, network, lock, and scheduler symptoms.
- High utilization may indicate efficiency or saturation depending on queueing and latency.
- More threads can reduce performance through contention, switching, and cache disruption.

### Reliability Concepts

- **Fault:** Underlying defect or abnormal condition.
- **Error:** Incorrect internal state produced by a fault.
- **Failure:** Externally visible deviation from expected service.
- **Availability:** Fraction of time service is usable.
- **MTTF:** Mean time to failure.
- **MTTR:** Mean time to repair or restore.

```text
Availability ≈ MTTF / (MTTF + MTTR)
```

Redundancy improves resilience only when common-mode failures, detection, failover, and recovery are designed and tested.

---

## 23. Design Principles and Best Practices

- Keep critical sections small and protect clear invariants.
- Prefer high-level synchronization primitives over hand-written lock-free code unless evidence demands otherwise.
- Establish and document one lock-acquisition order.
- Avoid blocking I/O while holding widely contended locks.
- Bound thread pools and queues to prevent resource exhaustion.
- Treat cancellation, timeout, retry, and cleanup as normal control paths.
- Close files, sockets, mappings, and handles deterministically.
- Use asynchronous designs for concurrency needs, not as an automatic performance guarantee.
- Choose IPC from trust boundaries, failure behavior, throughput, and data ownership.
- Use least privilege and isolate risky components.
- Design for partial failure in distributed work.
- Benchmark realistic workloads and inspect tail latency.
- Test overload, recovery, race conditions, and failure injection—not only happy paths.

---

## 24. Interview Questions

### Q1. What is an operating system?

An OS manages hardware resources and provides protected abstractions and services for program execution.

### Q2. Kernel vs. operating system?

The kernel is the privileged core, while the complete OS also includes system libraries, services, tools, and interfaces.

### Q3. Program vs. process?

A program is passive executable content, while a process is a running instance with state and resources.

### Q4. Process vs. thread?

Processes have separate protected address spaces, while threads share a process's resources but keep independent execution state and stacks.

### Q5. Concurrency vs. parallelism?

Concurrency overlaps progress among tasks, whereas parallelism executes tasks simultaneously on different processing units.

### Q6. What is a context switch?

A context switch saves one execution context and restores another so the CPU can run a different task.

### Q7. User mode vs. kernel mode?

User mode restricts privileged instructions and hardware access, while kernel mode permits trusted system control.

### Q8. System call vs. function call?

A function call transfers control within a program, while a system call crosses a protection boundary to request a kernel service.

### Q9. Interrupt vs. exception?

An interrupt is usually asynchronous and hardware-originated, while an exception is synchronous with the current instruction.

### Q10. Preemptive vs. non-preemptive scheduling?

Preemptive scheduling may interrupt a running task, while non-preemptive scheduling waits for it to block, yield, or finish.

### Q11. Turnaround vs. waiting vs. response time?

Turnaround covers arrival to completion, waiting covers ready-queue delay, and response covers arrival to first service.

### Q12. Why can SJF minimize average waiting time?

Running shorter known bursts first prevents many short jobs from waiting behind long jobs under the ideal burst-knowledge model.

### Q13. What is starvation and how does aging help?

Starvation is indefinite postponement, and aging gradually increases a waiting task's priority.

### Q14. Mutex vs. semaphore?

A mutex expresses ownership-based exclusion, while a semaphore represents permits or event counts and need not have owner-only signaling.

### Q15. What is a race condition?

A race condition makes correctness depend on uncontrolled timing among concurrent operations.

### Q16. Deadlock vs. starvation?

Deadlock is cyclic waiting among participants, while starvation is repeated denial caused by policy or competition.

### Q17. Safe state vs. deadlock state?

A safe state has a completion sequence for remaining needs, while a deadlock state already contains tasks that cannot progress.

### Q18. Paging vs. segmentation?

Paging uses fixed-size implementation-oriented units, while segmentation uses variable-size logical program units.

### Q19. Internal vs. external fragmentation?

Internal fragmentation wastes space inside allocations, while external fragmentation divides free space into unusable holes.

### Q20. What is virtual memory?

Virtual memory provides protected address spaces whose mappings and resident pages are managed independently of current physical-memory capacity.

### Q21. What is a page fault?

A page fault is an exception raised when translation or permission state requires kernel handling, possibly loading a missing page.

### Q22. What is thrashing?

Thrashing is excessive paging caused when active working sets do not fit available frames.

### Q23. Why is Optimal replacement not implementable online?

It requires exact knowledge of future page references, so it serves as a theoretical benchmark.

### Q24. Does LRU show Belady's anomaly?

True LRU is a stack algorithm and does not show Belady's anomaly, unlike FIFO.

### Q25. Hard link vs. symbolic link?

A hard link names the same underlying file object, while a symbolic link is a separate file containing a target path.

### Q26. Buffering vs. caching vs. spooling?

Buffering absorbs transfer-rate differences, caching retains reusable data, and spooling queues jobs for serialized service.

### Q27. VM vs. container?

A VM includes a guest kernel over virtual hardware, while a container isolates processes sharing the host kernel.

### Q28. Zombie vs. orphan process?

A zombie has terminated but awaits status collection, while an orphan continues after its parent terminates and is reparented.

### Q29. What is copy-on-write?

Copy-on-write shares protected data initially and creates a private copy only when modification occurs.

### Q30. Why are more threads not always faster?

Excess threads increase scheduling, contention, memory, and cache costs and may overwhelm downstream resources.

---

## 25. MCQ Practice

Try the questions before opening the answer key.

**1. Which component runs with the highest OS privilege?**  
A. Shell  B. Kernel  C. Text editor  D. Compiler

**2. Which state means a process can run but lacks CPU time?**  
A. Ready  B. Blocked  C. Terminated  D. New only

**3. Which scheduler may cause a convoy effect?**  
A. FCFS  B. SRTF  C. EDF  D. MLFQ only

**4. Which technique reduces scheduling starvation?**  
A. Paging  B. Aging  C. Spooling  D. Journaling

**5. Which primitive represents multiple resource permits?**  
A. Counting semaphore  B. Program counter  C. TLB  D. Inode

**6. Which is not a Coffman deadlock condition?**  
A. Mutual exclusion  B. Hold and wait  C. Circular wait  D. Aging

**7. Which algorithm checks whether resource allocation remains safe?**  
A. Banker's  B. Round Robin  C. Clock  D. SSTF

**8. Which memory scheme uses fixed-size pages and frames?**  
A. Segmentation  B. Paging  C. Spooling  D. Buffering

**9. Which cache stores recent address translations?**  
A. PCB  B. TLB  C. ACL  D. DMA

**10. Which replacement algorithm may show Belady's anomaly?**  
A. FIFO  B. Optimal  C. True LRU  D. Every stack algorithm

**11. Which situation describes thrashing?**  
A. Excess page faults  B. Dead file handle  C. Disk mirroring  D. CPU overclocking

**12. Which file allocation method is naturally strongest for simple sequential access but weak random access?**  
A. Linked  B. Indexed  C. Contiguous  D. Extent

**13. Which mechanism moves blocks between a device and memory with limited CPU copying?**  
A. DMA  B. ACL  C. MLFQ  D. RPC

**14. Which disk algorithm services the nearest pending track?**  
A. FCFS  B. SSTF  C. C-SCAN  D. LOOK only

**15. Which RAID level provides striping without redundancy?**  
A. RAID 0  B. RAID 1  C. RAID 5  D. RAID 10

**16. Which object stores Unix-like file metadata?**  
A. Semaphore  B. Inode  C. Socket only  D. Quantum

**17. Which structure maps subjects/objects to permissions conceptually?**  
A. Access matrix  B. Page frame  C. Ready queue  D. Journal

**18. Which environment shares the host kernel?**  
A. Full VM  B. Container  C. Firmware  D. Bootloader

**19. Which command traditionally creates a Unix-like child process?**  
A. `exec`  B. `fork`  C. `wait`  D. `open`

**20. Which metric measures completed work per unit time?**  
A. Latency  B. Throughput  C. Jitter  D. Seek distance

<details>
<summary><strong>Answer key</strong></summary>

1. **B** — The kernel executes privileged system control.
2. **A** — A ready process waits for processor service.
3. **A** — FCFS can place short work behind a long burst.
4. **B** — Aging raises the priority of waiting tasks.
5. **A** — A counting semaphore tracks several permits.
6. **D** — Aging is a starvation-control technique.
7. **A** — Banker's Algorithm tests safe-state preservation.
8. **B** — Paging uses equal-sized pages and frames.
9. **B** — The TLB caches virtual translations.
10. **A** — FIFO can produce more faults with more frames.
11. **A** — Thrashing spends most time paging.
12. **A** — Linked allocation follows blocks sequentially.
13. **A** — DMA handles block transfer with reduced CPU involvement.
14. **B** — SSTF chooses the nearest current request.
15. **A** — RAID 0 has no redundancy.
16. **B** — An inode stores file metadata and block mapping.
17. **A** — The access matrix models permissions.
18. **B** — Containers share the host kernel.
19. **B** — `fork()` creates the child process.
20. **B** — Throughput measures completions per time unit.

</details>

---

## 26. Coding and Algorithm Problems

### 1. FCFS Scheduling

Given processes in arrival order, advance current time to each arrival if idle, run the complete burst, and calculate completion, turnaround, and waiting times.

```text
completion = max(current_time, arrival) + burst
turnaround = completion - arrival
waiting    = turnaround - burst
```

Time complexity after sorting by arrival is `O(n log n)`; already sorted input can be processed in `O(n)`.

### 2. Round Robin Scheduling

Use a FIFO ready queue, enqueue newly arrived processes, execute at most one quantum, and requeue unfinished work after processing new arrivals.

Important edge cases:

- CPU idle before the next arrival
- arrivals during the current quantum
- processes finishing before a full quantum
- deterministic queue insertion order

### 3. Priority Scheduling with Aging

Maintain effective priority as a function of base priority and waiting time so a long-waiting process eventually competes successfully.

State whether a smaller or larger number represents higher priority and whether scheduling is preemptive.

### 4. Banker's Safety Algorithm

```text
Need = Maximum - Allocation
Work = Available
Finish[i] = false

Repeatedly find i where Finish[i] is false and Need[i] <= Work:
    Work += Allocation[i]
    Finish[i] = true
```

The state is safe when every process can be marked finished; the discovered order is a safe sequence.

### 5. FIFO Page Replacement

Maintain a set plus a queue of resident pages; on a miss with full capacity, evict the queue front and append the demanded page.

### 6. LRU Page Replacement

An `O(1)` implementation combines a hash map with a doubly linked list ordered by recent use.

```text
get(page): move existing node to most-recent position
put(page): insert/move page; evict least-recent node when full
```

### 7. Producer–Consumer Buffer

Implement a bounded queue using one mutex plus `not_empty` and `not_full` condition variables.

Correct waiting uses a loop because wake-ups do not prove the predicate remains true:

```text
lock
while buffer is full: wait(not_full)
insert item
signal(not_empty)
unlock
```

### 8. Reader–Writer Lock

Design a fair read-write lock that allows concurrent readers, excludes writers, and prevents either group from starving.

Track active readers, active writer state, and queued writers/readers under one internal mutex and conditions.

### 9. Dining Philosophers

Prevent deadlock by ordering fork acquisition using fork IDs, or allow at most `N − 1` philosophers to contend simultaneously.

Discuss starvation separately because deadlock freedom alone does not guarantee fairness.

### 10. Thread-Safe Singleton/Initialization

Prefer language/runtime one-time initialization primitives over hand-written double-checked locking unless the memory model and publication rules are fully understood.

### 11. Detect a Wait-For Cycle

Represent transactions as graph nodes and wait dependencies as directed edges; use DFS colors or Kahn's topological algorithm to detect a cycle in `O(V + E)`.

### 12. Disk-Scheduling Simulator

Given request tracks and an initial head, calculate service order and total movement for FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK.

Always state disk range, initial direction, and whether endpoint travel counts.

### Additional Practice

1. Simulate SRTF with arrival times.
2. Calculate average waiting time under SJF.
3. Count page faults for FIFO, LRU, and Optimal.
4. Implement a reusable barrier.
5. Build a thread pool with a bounded task queue.
6. Create a deadlock-free bank-transfer locking strategy.
7. Implement a toy memory allocator with free-list coalescing.
8. Traverse a file tree without following symbolic-link cycles.

---

## 27. Common Mistakes and Interview Tips

### Conceptual Mistakes

- Treating the kernel and complete operating system as identical.
- Saying a process is simply a program stored on disk.
- Confusing a mode switch with a process context switch.
- Claiming concurrency always means parallel execution.
- Saying threads share their stacks and registers.
- Treating a mutex and binary semaphore as universally interchangeable.
- Assuming `volatile` makes compound operations atomic.
- Confusing deadlock, starvation, and livelock.
- Saying every cycle means deadlock when resource types have multiple instances.
- Treating an unsafe state as an already deadlocked state.
- Confusing logical addresses with physical addresses.
- Claiming every page fault requires disk I/O.
- Saying LRU exhibits Belady's anomaly.
- Treating RAID as a backup.
- Assuming containers provide the same boundary as full VMs.

### Algorithm Mistakes

- Ignoring arrival times in scheduling calculations.
- Calculating response time as turnaround time.
- Requeueing a Round Robin process before newly arrived tasks without stating the convention.
- Omitting idle CPU intervals from a Gantt chart.
- Counting an initial empty-frame page load as a hit.
- Applying FIFO replacement order to LRU.
- Forgetting the initial disk-head direction or endpoint policy.
- Declaring Banker's state safe without producing a complete sequence.
- Checking a condition variable predicate with `if` instead of a loop.
- Holding one lock while waiting indefinitely for another without a lock order.

### Interview Tips

- Define the term in one line, then explain mechanism, advantage, and trade-off.
- Draw process-state and resource-allocation diagrams when useful.
- State scheduling assumptions before calculating results.
- Distinguish correctness, fairness, throughput, and response-time goals.
- Explain why a synchronization solution is safe and whether it can starve.
- Walk through page-table translation step by step.
- Mention locality and TLB behavior when discussing virtual memory.
- State whether an answer is general, Linux-specific, Windows-specific, or runtime-specific.
- Discuss failure paths, cleanup, cancellation, and bounded resources in coding designs.

---

## 28. Rapid-Revision Cheat Sheet

### Core Comparisons

| Topic | Quick Difference |
|---|---|
| Program vs. process | Passive executable vs. running resource container |
| Process vs. thread | Isolated address space vs. shared-process execution path |
| Concurrency vs. parallelism | Overlapping progress vs. simultaneous execution |
| User vs. kernel mode | Restricted execution vs. privileged control |
| Function vs. system call | In-process call vs. protected kernel request |
| Interrupt vs. exception | Asynchronous hardware event vs. synchronous instruction event |
| Mutex vs. semaphore | Ownership lock vs. permits/events |
| Deadlock vs. starvation | Cyclic waiting vs. indefinite denial |
| Paging vs. segmentation | Fixed-size mapping vs. logical variable-size regions |
| Internal vs. external fragmentation | Waste inside units vs. scattered free holes |
| VM vs. container | Guest kernel vs. shared host kernel |
| Buffer vs. cache | Smooth transfer vs. reuse data |

### Scheduling Formulas

```text
Turnaround Time = Completion Time - Arrival Time
Waiting Time    = Turnaround Time - Burst Time
Response Time   = First Run Time - Arrival Time
Throughput      = Completed Processes / Time
```

### Scheduling Recall

- **FCFS:** Arrival order; convoy effect.
- **SJF:** Shortest predicted burst; ideal minimum average waiting.
- **SRTF:** Preemptive shortest remaining time.
- **Priority:** Highest priority; starvation possible.
- **Round Robin:** Time quantum; interactive fairness.
- **MLFQ:** Feedback-based dynamic priorities.

### Deadlock Recall

```text
Mutual Exclusion + Hold and Wait + No Preemption + Circular Wait
```

- Prevention breaks a condition.
- Avoidance preserves a safe state.
- Detection finds existing cycles.
- Recovery aborts/preempts/restores selected work.

### Memory Recall

- Page = virtual fixed-size unit.
- Frame = physical fixed-size unit.
- TLB = translation cache.
- Page fault = translation/permission event requiring kernel handling.
- Thrashing = page-fault work overwhelms useful execution.
- FIFO can show Belady's anomaly; Optimal and true LRU cannot.

### Synchronization Recall

- Protect invariants, not arbitrary lines of code.
- Keep critical sections short.
- Wait on condition predicates in loops.
- Establish one lock order.
- Deadlock freedom does not guarantee starvation freedom.

### File and I/O Recall

- Hard link shares an underlying file object.
- Symbolic link stores a target path.
- Buffering handles rate mismatch.
- Caching avoids repeated slow work.
- Spooling queues jobs for serial service.
- DMA transfers blocks with limited CPU involvement.

### Thirty-Second Interview Answer

> An operating system is the trusted software layer that manages processors, memory, storage, devices, communication, and protection. It represents programs as processes and threads, schedules CPU work, synchronizes shared state, maps virtual memory, organizes persistent files, handles I/O through drivers and interrupts, and isolates resources through hardware-supported privilege boundaries.

### Final Checklist

- Can I draw and explain process states?
- Can I calculate FCFS, SJF, SRTF, priority, and Round Robin metrics?
- Can I compare processes, threads, concurrency, and parallelism?
- Can I solve semaphore and monitor problems safely?
- Can I identify, avoid, and detect deadlocks?
- Can I translate paging addresses and explain TLB behavior?
- Can I count FIFO, LRU, and Optimal page faults?
- Can I compare file allocation and disk-scheduling algorithms?
- Can I explain protection, virtualization, containers, and Linux basics?
- Can I discuss performance using latency, throughput, contention, and measurement?

**Recommended revision order:** processes and threads → scheduling → synchronization → deadlocks → paging → virtual memory → file systems → I/O → security → interview practice.
