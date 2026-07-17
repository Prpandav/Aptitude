# Data Structures and Algorithms (DSA) — Master Notes

> Simple notes for aptitude tests, technical interviews, coding rounds, and quick revision.

A data structure organizes data, while an algorithm gives clear steps to solve a problem.

These notes use simple English. Examples use common programming-style pseudocode.

---

## Table of Contents

1. [DSA Fundamentals](#1-dsa-fundamentals)
2. [Time and Space Complexity](#2-time-and-space-complexity)
3. [Recursion](#3-recursion)
4. [Arrays](#4-arrays)
5. [Strings](#5-strings)
6. [Linked Lists](#6-linked-lists)
7. [Stacks](#7-stacks)
8. [Queues and Deques](#8-queues-and-deques)
9. [Hashing](#9-hashing)
10. [Trees](#10-trees)
11. [Binary Search Trees](#11-binary-search-trees)
12. [Heaps and Priority Queues](#12-heaps-and-priority-queues)
13. [Tries](#13-tries)
14. [Graphs](#14-graphs)
15. [Searching Algorithms](#15-searching-algorithms)
16. [Sorting Algorithms](#16-sorting-algorithms)
17. [Two Pointers and Sliding Window](#17-two-pointers-and-sliding-window)
18. [Prefix Sum and Difference Array](#18-prefix-sum-and-difference-array)
19. [Divide and Conquer](#19-divide-and-conquer)
20. [Greedy Algorithms](#20-greedy-algorithms)
21. [Dynamic Programming](#21-dynamic-programming)
22. [Backtracking](#22-backtracking)
23. [Bit Manipulation](#23-bit-manipulation)
24. [Disjoint Set Union](#24-disjoint-set-union)
25. [Advanced Range Structures](#25-advanced-range-structures)
26. [Problem-Solving Method](#26-problem-solving-method)
27. [Language-Specific Notes](#27-language-specific-notes)
28. [Interview Questions](#28-interview-questions)
29. [MCQ Practice](#29-mcq-practice)
30. [Coding Interview Problems](#30-coding-interview-problems)
31. [Common Mistakes and Interview Tips](#31-common-mistakes-and-interview-tips)
32. [Rapid-Revision Cheat Sheet](#32-rapid-revision-cheat-sheet)

---

## 1. DSA Fundamentals

### Important Terms

- **Data structure:** A way to organize data for useful operations.
- **Algorithm:** A finite set of clear steps that solves a problem.
- **Correctness:** The algorithm gives the required answer for every valid input.
- **Efficiency:** The algorithm uses reasonable time and memory.
- **In-place algorithm:** Uses only a small amount of extra memory beyond the input.
- **Stable algorithm:** Keeps equal items in their original relative order.
- **Adaptive algorithm:** Becomes faster when input already has useful order.
- **Online algorithm:** Processes input as it arrives without needing all data first.

### Structure Types

- **Linear:** Items form a sequence, such as an array or linked list.
- **Non-linear:** Items form branches or connections, such as trees and graphs.
- **Static:** Size is fixed or difficult to change after creation.
- **Dynamic:** Size can grow or shrink during execution.

### Abstract Data Type

An ADT defines allowed operations and behavior without fixing one implementation.

- A stack ADT supports push, pop, and top.
- A queue ADT supports enqueue, dequeue, and front.
- A map ADT stores key-value pairs.

The same ADT can have different implementations and performance.

---

## 2. Time and Space Complexity

Complexity describes how resource use grows when input size `n` grows.

### Asymptotic Notation

- **Big O:** Gives an upper growth bound and commonly describes worst-case growth.
- **Big Omega (`Ω`):** Gives a lower growth bound.
- **Big Theta (`Θ`):** Gives a tight growth bound.
- Constants and lower-growth terms are removed.

```text
3n² + 5n + 10 → O(n²)
```

### Common Growth Rates

| Complexity | Simple Meaning | Example |
|---|---|---|
| `O(1)` | Constant work | Array index access |
| `O(log n)` | Input reduces by a factor | Binary search |
| `O(n)` | One full pass | Find maximum |
| `O(n log n)` | Divide plus combine | Merge sort |
| `O(n²)` | Pair-like nested work | Basic bubble sort |
| `O(2^n)` | Two choices per level | Many subset searches |
| `O(n!)` | All orderings | Brute-force permutations |

### Rules

- Consecutive blocks add, and the largest growth normally remains.
- Nested independent loops multiply their iteration counts.
- A loop that halves or doubles its value is often logarithmic.
- Recursive complexity is written as a recurrence.
- Worst, average, and best cases may differ.

### Space Complexity

- **Input space:** Memory used for the given input.
- **Auxiliary space:** Extra memory used by the algorithm.
- Recursive calls use stack space.
- Dynamic-array append is usually `O(1)` amortized because rare resize costs are spread over many appends.

---

## 3. Recursion

Recursion solves a problem by calling the same function on a smaller form of the problem.

### Main Parts

- **Base case:** Stops recursive calls.
- **Recursive case:** Reduces the problem and calls again.
- **Call stack:** Stores state for each unfinished call.

```text
factorial(n):
    if n <= 1: return 1
    return n * factorial(n - 1)
```

### Types

- **Direct recursion:** A function calls itself.
- **Indirect recursion:** Functions call one another in a cycle.
- **Tail recursion:** The recursive call is the final operation.
- **Tree recursion:** One call creates several recursive calls.

### Risks

- Missing base case
- Input does not become smaller
- Repeated work creates exponential time
- Large depth causes stack overflow
- Hidden stack memory is ignored

Memoization stores repeated results, and not every language performs tail-call optimization.

---

## 4. Arrays

An array stores items in continuous indexed positions and gives fast direct access.

| Operation | Typical Cost |
|---|---:|
| Read/update by index | `O(1)` |
| Search unsorted array | `O(n)` |
| Append to dynamic array | `O(1)` amortized |
| Insert/delete in middle | `O(n)` |
| Binary search when sorted | `O(log n)` |

### Main Points

- Arrays have fast index access and good memory locality.
- Middle changes need item shifting.
- Dynamic arrays sometimes resize and copy all items.
- Common patterns include two pointers, sliding window, prefix sum, and binary search.

### Rotate Right by `k`

```text
k = k mod n
reverse whole array
reverse first k items
reverse remaining items
```

This uses `O(n)` time and `O(1)` extra space.

---

## 5. Strings

A string is an ordered sequence of characters or text units.

- Some languages make strings immutable, so changes create new strings.
- Character count and byte count can differ under Unicode.
- Repeated joining may need a builder or list for good performance.
- Common problems include palindrome, anagram, substring, parsing, and pattern matching.

### Palindrome

```text
left = 0, right = length - 1
while left < right:
    if text[left] != text[right]: return false
    left += 1, right -= 1
return true
```

Time is `O(n)` and extra space is `O(1)` for indexed text.

### Anagram

- Sorting both strings takes `O(n log n)`.
- Frequency counting can take `O(n)` with suitable storage.

### Pattern Search

- **Naive:** Checks the pattern at each position.
- **KMP:** Uses a prefix table to avoid repeated comparisons.
- **Rabin–Karp:** Uses rolling hashes for candidates.
- **Z algorithm:** Stores prefix-match length at each position.

---

## 6. Linked Lists

A linked list stores items in nodes connected through references.

- **Singly list:** Each node points to the next node.
- **Doubly list:** Each node points to previous and next nodes.
- **Circular list:** The last node connects back to the first.

| Operation | Typical Cost |
|---|---:|
| Access by position | `O(n)` |
| Search | `O(n)` |
| Insert/delete at known node | `O(1)` |
| Insert at head | `O(1)` |

### Reverse a List

```text
previous = null
current = head
while current is not null:
    next_node = current.next
    current.next = previous
    previous = current
    current = next_node
head = previous
```

Floyd's cycle method uses a slow pointer and a fast pointer; if they meet, a cycle exists.

---

## 7. Stacks

A stack follows Last In, First Out (LIFO) order.

- **Push:** Add to the top.
- **Pop:** Remove the top.
- **Peek/top:** Read the top without removal.
- These operations are normally `O(1)`.

### Uses

- Function calls and recursion
- Undo and browser history
- Parenthesis matching
- Expression evaluation
- Depth-first search
- Monotonic-stack problems

### Balanced Brackets

Push opening brackets; for each closing bracket, check and remove the matching top bracket.

A monotonic stack keeps increasing or decreasing order and solves next-greater, stock-span, and histogram problems in `O(n)`.

---

## 8. Queues and Deques

A queue follows First In, First Out (FIFO) order.

- **Enqueue:** Add at the rear.
- **Dequeue:** Remove from the front.
- **Front:** Read the first item.
- **Circular queue:** Reuses array positions by wrapping indices.
- **Deque:** Adds and removes at both ends.
- **Priority queue:** Removes by priority instead of arrival only.

### Uses

- Breadth-first search
- Task scheduling
- Buffers and message queues
- Level-order tree traversal
- Sliding-window maximum

```text
next_index = (current_index + 1) mod capacity
```

A monotonic deque can find all sliding-window maximums in total `O(n)` time.

---

## 9. Hashing

Hashing converts a key into a table position for fast average lookup.

### Terms

- **Hash function:** Converts a key into a numeric hash value.
- **Hash table:** Stores keys or key-value pairs in buckets.
- **Collision:** Two different keys map to the same bucket.
- **Load factor:** Number of stored items divided by bucket count.
- **Rehashing:** Creates a larger table and inserts items again.

### Collision Handling

- **Chaining:** Each bucket stores a small collection of entries.
- **Open addressing:** Entries stay in the main table and probing finds an empty position.
- **Linear probing:** Checks the next positions in order.
- **Quadratic probing:** Uses growing square-like jumps.
- **Double hashing:** Uses a second hash to choose jump size.

### Complexity

| Operation | Average | Worst |
|---|---:|---:|
| Insert | `O(1)` | `O(n)` |
| Search | `O(1)` | `O(n)` |
| Delete | `O(1)` | `O(n)` |

Good hashing, controlled load, and correct equality rules support average constant time.

### Uses

- Frequency counting
- Duplicate detection
- Caching
- Sets and maps
- Two Sum
- Grouping anagrams

Hash tables do not normally keep sorted key order.

---

## 10. Trees

A tree is a connected structure with parent-child relationships and no cycle.

### Terms

- **Root:** Top node with no parent.
- **Parent:** Node directly above another node.
- **Child:** Node directly below another node.
- **Leaf:** Node with no children.
- **Sibling:** Nodes with the same parent.
- **Depth:** Number of edges from root to a node.
- **Height:** Longest downward edge path to a leaf.
- **Subtree:** A node together with all descendants.

### Binary Tree

A binary-tree node has at most two children, called left and right.

- **Full:** Every node has zero or two children.
- **Complete:** All levels are full except possibly the last, filled left to right.
- **Perfect:** Every internal node has two children and all leaves share a level.
- **Balanced:** Height stays close to logarithmic under a defined balance rule.
- **Skewed:** Most nodes have only one child, creating near-linear height.

### Traversals

```text
Preorder:  Root → Left → Right
Inorder:   Left → Root → Right
Postorder: Left → Right → Root
Level:     Level by level using a queue
```

Each full traversal takes `O(n)` time.

### Uses

- File and document hierarchy
- Expression trees
- Search indexes
- Syntax trees
- Decision structures
- Priority and range structures

---

## 11. Binary Search Trees

A BST keeps smaller keys in the left subtree and larger keys in the right subtree under its duplicate rule.

### Complexity

| Operation | Balanced | Skewed Worst Case |
|---|---:|---:|
| Search | `O(log n)` | `O(n)` |
| Insert | `O(log n)` | `O(n)` |
| Delete | `O(log n)` | `O(n)` |

Inorder traversal of a BST returns keys in sorted order.

### Delete Cases

1. Leaf: remove it directly.
2. One child: connect the parent to the child.
3. Two children: replace with inorder successor/predecessor and delete that node.

### Balanced BSTs

- **AVL tree:** Uses strict height balance and rotations.
- **Red-black tree:** Uses color rules for looser balance and fewer updates.
- Both keep core operations `O(log n)`.

### Common Problems

- Validate BST
- Find lowest common ancestor
- Find kth smallest key
- Convert sorted array to balanced BST
- Find predecessor and successor

---

## 12. Heaps and Priority Queues

A heap is a complete binary tree that follows a heap-order rule.

- **Min-heap:** Parent is no larger than its children.
- **Max-heap:** Parent is no smaller than its children.
- A priority queue is an ADT commonly implemented with a heap.

### Array Positions

For zero-based index `i`:

```text
left child  = 2i + 1
right child = 2i + 2
parent      = floor((i - 1) / 2)
```

### Complexity

| Operation | Cost |
|---|---:|
| Read min/max root | `O(1)` |
| Insert | `O(log n)` |
| Remove root | `O(log n)` |
| Build heap | `O(n)` |
| Search arbitrary value | `O(n)` |

### Uses

- Task scheduling
- Top K items
- Merge K sorted lists
- Dijkstra's algorithm
- Heap sort
- Running median using two heaps

A heap gives fast access to one extreme value, not complete sorted order.

---

## 13. Tries

A trie stores keys by characters or symbols along root-to-node paths.

### Operations

- Insert word
- Search full word
- Check prefix
- Delete word carefully
- List words with a prefix

For key length `L`, common operations take `O(L)` time, independent of the number of stored words in the simple model.

### Uses

- Autocomplete
- Dictionary search
- Prefix counting
- Spell checking
- IP prefix routing with binary tries

### Trade-off

Tries give fast prefix operations but may use much more memory than a hash table.

Compressed tries combine single-child paths to reduce memory.

---

## 14. Graphs

A graph contains vertices connected by edges.

### Types

- **Directed:** Edges have direction.
- **Undirected:** Edges connect both ways.
- **Weighted:** Edges carry cost or distance.
- **Unweighted:** Edges have no separate weight.
- **Cyclic:** Contains at least one cycle.
- **Acyclic:** Contains no cycle.
- **Connected:** Every pair has a path in an undirected graph.
- **DAG:** Directed acyclic graph.

### Representations

| Representation | Space | Best Use |
|---|---:|---|
| Adjacency matrix | `O(V²)` | Dense graphs, fast edge check |
| Adjacency list | `O(V + E)` | Sparse graphs, neighbor traversal |
| Edge list | `O(E)` | Algorithms that process edges |

### BFS

Breadth-first search uses a queue and visits nodes level by level.

```text
mark source visited
enqueue source
while queue not empty:
    node = dequeue
    for each unvisited neighbor:
        mark visited
        enqueue neighbor
```

BFS finds shortest path by edge count in an unweighted graph.

### DFS

Depth-first search uses recursion or an explicit stack and explores deeply before returning.

Uses include cycle detection, connected components, topological work, and path exploration.

BFS and DFS take `O(V + E)` with adjacency lists.

### Important Graph Algorithms

- **Topological sort:** Orders DAG vertices so every directed edge goes forward.
- **Dijkstra:** Finds shortest paths with non-negative edge weights.
- **Bellman–Ford:** Handles negative weights and can detect reachable negative cycles.
- **Floyd–Warshall:** Finds all-pairs shortest paths in `O(V³)`.
- **Prim/Kruskal:** Build a minimum spanning tree in a connected weighted undirected graph.
- **Kosaraju/Tarjan:** Find strongly connected components.

Dijkstra is not correct for general negative edge weights.

---

## 15. Searching Algorithms

### Linear Search

Linear search checks items one by one.

- Works on sorted or unsorted data.
- Time is `O(n)` and extra space is `O(1)`.

### Binary Search

Binary search repeatedly removes half of a sorted search range.

```text
low = 0, high = n - 1
while low <= high:
    mid = low + (high - low) // 2
    if a[mid] == target: return mid
    if a[mid] < target: low = mid + 1
    else: high = mid - 1
return not found
```

Time is `O(log n)` and the data must satisfy a monotonic/sorted condition.

### Binary Search Forms

- Find exact value
- Find first or last occurrence
- Find first true condition
- Find lower bound or upper bound
- Search rotated sorted array
- Binary search on the answer

When searching an answer, define a monotonic yes/no condition and prove the search boundaries.

---

## 16. Sorting Algorithms

| Algorithm | Best | Average | Worst | Stable | Extra Space |
|---|---:|---:|---:|---|---:|
| Bubble | `O(n)` optimized | `O(n²)` | `O(n²)` | Yes | `O(1)` |
| Selection | `O(n²)` | `O(n²)` | `O(n²)` | Usually no | `O(1)` |
| Insertion | `O(n)` | `O(n²)` | `O(n²)` | Yes | `O(1)` |
| Merge | `O(n log n)` | `O(n log n)` | `O(n log n)` | Yes | `O(n)` |
| Quick | `O(n log n)` | `O(n log n)` | `O(n²)` | Usually no | `O(log n)` average stack |
| Heap | `O(n log n)` | `O(n log n)` | `O(n log n)` | No | `O(1)` |
| Counting | `O(n + k)` | `O(n + k)` | `O(n + k)` | Can be | `O(k)` |

### Simple Theory

- **Bubble sort:** Repeatedly swaps neighboring items in wrong order.
- **Selection sort:** Repeatedly places the smallest remaining item.
- **Insertion sort:** Inserts each item into the sorted left part.
- **Merge sort:** Divides, sorts halves, and merges them.
- **Quick sort:** Partitions around a pivot and sorts the parts.
- **Heap sort:** Builds a heap and repeatedly removes the extreme.
- **Counting sort:** Counts bounded integer keys instead of comparing items.

Comparison sorting has a general lower bound of `Ω(n log n)` in the comparison decision model.

Insertion sort is useful for small or nearly sorted input; quick sort needs good pivot handling; merge sort is reliable and stable but uses extra array space.

---

## 17. Two Pointers and Sliding Window

### Two Pointers

Two pointers track two positions and move them using problem rules.

Common forms:

- One pointer at each end
- Slow and fast pointers
- Read and write pointers
- Pointers over two sorted arrays

### Example: Pair Sum in Sorted Array

```text
left = 0, right = n - 1
while left < right:
    sum = a[left] + a[right]
    if sum == target: return pair
    if sum < target: left += 1
    else: right -= 1
```

Time is `O(n)` after data is sorted.

### Sliding Window

A sliding window keeps a continuous section while its boundaries move.

- **Fixed window:** Window size stays constant.
- **Variable window:** Window grows and shrinks based on a condition.

### Longest Valid Window Pattern

```text
left = 0
for right from 0 to n - 1:
    add a[right]
    while window is invalid:
        remove a[left]
        left += 1
    update answer
```

This is often `O(n)` because each item enters and leaves once.

Sliding windows work for continuous ranges, not arbitrary subsets.

---

## 18. Prefix Sum and Difference Array

### Prefix Sum

A prefix sum stores the total from the beginning up to each position.

```text
prefix[0] = 0
prefix[i + 1] = prefix[i] + a[i]
sum(left, right) = prefix[right + 1] - prefix[left]
```

Building takes `O(n)`, and each range-sum query takes `O(1)`.

### Two-Dimensional Prefix Sum

It answers rectangle-sum queries using inclusion and exclusion of overlapping areas.

### Difference Array

A difference array stores changes between neighboring values and supports fast range updates.

To add `x` to range `[l, r]`:

```text
difference[l] += x
if r + 1 < n: difference[r + 1] -= x
```

One prefix pass rebuilds final values after all updates.

### Uses

- Many range-sum queries
- Subarray balance
- Range update problems
- Counting intervals
- Cumulative frequency

---

## 19. Divide and Conquer

Divide and conquer splits a problem, solves smaller parts, and combines their answers.

```text
Divide → Conquer → Combine
```

### Examples

- Merge sort
- Quick sort
- Binary search
- Closest pair of points
- Fast exponentiation

### Recurrence

Merge sort follows:

```text
T(n) = 2T(n/2) + O(n) = O(n log n)
```

### Master-Theorem Form

```text
T(n) = aT(n/b) + f(n)
```

- `a` is number of subproblems.
- `n/b` is subproblem size.
- `f(n)` is divide/combine work.

The Master Theorem applies only when the recurrence fits its required form.

---

## 20. Greedy Algorithms

A greedy algorithm chooses the best-looking current option and does not normally undo it.

### When Greedy Works

- **Greedy-choice property:** A safe local choice can be part of an optimal answer.
- **Optimal substructure:** An optimal solution contains optimal solutions to smaller parts.
- A proof is required; a natural-looking local choice can still be wrong.

### Common Examples

- Activity selection
- Fractional knapsack
- Huffman coding
- Kruskal's MST
- Prim's MST
- Dijkstra with non-negative weights
- Interval merging or scheduling forms

### Fractional vs. 0/1 Knapsack

- Fractional knapsack supports taking item parts and has a greedy ratio solution.
- 0/1 knapsack takes whole items and normally needs dynamic programming for a general exact solution.

### Proof Methods

- Exchange argument
- Staying-ahead argument
- Cut property
- Contradiction

---

## 21. Dynamic Programming

Dynamic programming stores answers to repeated subproblems.

### Required Ideas

- **Overlapping subproblems:** The same smaller problem appears many times.
- **Optimal substructure:** A best answer can be built from best smaller answers.
- **State:** Information needed to describe one subproblem.
- **Transition:** Rule connecting one state to smaller states.

### Memoization vs. Tabulation

| Memoization | Tabulation |
|---|---|
| Top-down recursion | Bottom-up loops |
| Calculates needed states | Often calculates all planned states |
| Uses recursion stack | Easier space optimization in many cases |

### DP Steps

1. Define the state in words.
2. Write the transition.
3. Set base cases.
4. Choose calculation order.
5. Find the final state.
6. Reduce memory if only recent states are needed.

### Fibonacci

```text
previous = 0, current = 1
repeat n times:
    previous, current = current, previous + current
```

This uses `O(n)` time and `O(1)` extra space.

### Common DP Problems

- Fibonacci and climbing stairs
- 0/1 knapsack
- Coin change
- Longest common subsequence
- Longest increasing subsequence
- Edit distance
- Grid paths
- Matrix-chain multiplication
- Interval DP

DP is not simply “use an array”; it needs correct state and transition design.

---

## 22. Backtracking

Backtracking builds a candidate, explores it, and removes the choice when returning.

```text
search(state):
    if complete:
        record answer
        return
    for each valid choice:
        make choice
        search(new state)
        undo choice
```

### Uses

- Generate subsets and permutations
- N-Queens
- Sudoku
- Word search
- Combination sum
- Graph coloring

### Pruning

Pruning stops a branch when it cannot produce a valid or better answer.

Backtracking worst-case time is often exponential, but strong pruning may make practical input manageable.

### Backtracking vs. DP

- Backtracking explores choices and may list many valid answers.
- DP stores repeated state results and usually finds a value/count/decision efficiently.
- Some problems can use both memoization and backtracking.

---

## 23. Bit Manipulation

Bit operations work directly on binary representations.

| Operation | Meaning |
|---|---|
| `a & b` | AND: bit is 1 in both |
| `a | b` | OR: bit is 1 in either |
| `a ^ b` | XOR: bit differs |
| `~a` | NOT: flips bits under fixed width |
| `a << k` | Shift left by `k` positions |
| `a >> k` | Shift right by `k` positions |

### Common Tricks

```text
Check bit k:       (n & (1 << k)) != 0
Set bit k:         n | (1 << k)
Clear bit k:       n & ~(1 << k)
Toggle bit k:      n ^ (1 << k)
Remove lowest 1:   n & (n - 1)
Power of two:      n > 0 and (n & (n - 1)) == 0
```

XOR properties:

```text
x ^ x = 0
x ^ 0 = x
XOR order does not change the result
```

Be careful with signed numbers, shift rules, overflow, and language integer width.

---

## 24. Disjoint Set Union

DSU maintains groups of connected items under union and find operations.

- **Find:** Returns the representative of an item's set.
- **Union:** Joins two sets.
- **Path compression:** Makes visited nodes point closer to the root.
- **Union by rank/size:** Attaches the smaller tree under the larger tree.

```text
find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]
```

With both optimizations, operations are almost constant amortized time, written `O(α(n))`.

### Uses

- Kruskal's minimum spanning tree
- Dynamic connectivity
- Cycle detection in undirected graphs
- Connected components under edge additions
- Account or group merging

Basic DSU does not support general edge deletion easily.

---

## 25. Advanced Range Structures

### Segment Tree

A segment tree stores information about ranges in a balanced tree.

- Build: `O(n)`
- Range query: `O(log n)`
- Point update: `O(log n)`
- Range update with lazy propagation: often `O(log n)`

It can store sums, minimums, maximums, gcd, or other mergeable information.

### Fenwick Tree

A Fenwick/Binary Indexed Tree supports prefix sums and point updates using binary index movement.

- Update: `O(log n)`
- Prefix sum: `O(log n)`
- Space: `O(n)`

It is simpler and smaller than a segment tree but supports fewer operation types.

### Sparse Table

A sparse table answers static idempotent range queries such as minimum in `O(1)` after `O(n log n)` preprocessing.

It is not a natural choice when values change often.

---

## 26. Problem-Solving Method

### Step-by-Step Method

1. Restate the problem in simple words.
2. List inputs, outputs, and limits.
3. Test small examples and edge cases.
4. Write the simple brute-force idea.
5. Find repeated work or useful structure.
6. Choose a pattern or data structure.
7. Prove why the algorithm works.
8. Calculate time and space complexity.
9. Write clean code.
10. Test normal, boundary, and invalid cases.

### Clues from Constraints

- `n <= 20` may allow subset or backtracking work.
- `n` near `10^3` may allow some `O(n²)` solutions.
- `n` near `10^5` often needs `O(n log n)` or `O(n)`.
- Exact limits depend on language, constants, operations, and environment.

### Common Pattern Clues

- Sorted data → binary search or two pointers
- Continuous subarray/substring → sliding window or prefix sum
- Top K → heap
- Fast membership/frequency → hash set/map
- Level distance → BFS
- Explore all paths → DFS/backtracking
- Repeated states → DP/memoization
- Connectivity under unions → DSU
- Many range queries → prefix sum, Fenwick, or segment tree

### Edge Cases

- Empty input
- One item
- All items equal
- Already sorted or reverse sorted
- Negative, zero, and large values
- Duplicates
- Overflow
- Disconnected graph
- Cycle
- Deep recursion

---

## 27. Language-Specific Notes

### Java

- `ArrayList` is a dynamic array and `LinkedList` is a doubly linked list.
- `ArrayDeque` is usually preferred over legacy `Stack` for stack/queue work.
- `HashMap` and `HashSet` need correct `equals()` and `hashCode()` for custom keys.
- `PriorityQueue` is a min-heap by default.
- Use `long` when `int` may overflow.

### Python

- `list` is a dynamic array, not a linked list.
- `collections.deque` gives fast operations at both ends.
- `dict` and `set` are hash-based and keep insertion order where the language promises it.
- `heapq` provides a min-heap over a list.
- Deep recursion can hit the recursion limit; iteration may be safer.

### C++

- `vector` is a dynamic array and `list` is a linked list.
- `unordered_map` is hash-based; `map` is ordered and usually tree-based.
- `priority_queue` is a max-heap by default.
- Iterators/references may become invalid after container changes.
- Prefer standard containers and RAII over manual memory management.

### JavaScript/TypeScript

- Arrays are dynamic and support stack methods efficiently at the end.
- Removing from the beginning with `shift()` is generally linear.
- `Map` supports general keys; plain objects have different key rules.
- Numbers are floating-point values by default, while `BigInt` handles larger integers with separate rules.

---

## 28. Interview Questions

### Q1. What is a data structure?

A data structure is a method of organizing data so required operations can be performed clearly and efficiently.

### Q2. What is an algorithm?

An algorithm is a finite set of clear steps that converts valid input into the required output.

### Q3. Big O vs. Big Theta?

Big O gives an upper growth bound, while Big Theta gives a tight growth bound.

### Q4. Array vs. linked list?

An array gives fast indexing and good locality, while a linked list gives easy link changes at known nodes.

### Q5. Stack vs. queue?

A stack removes the latest item first, while a queue removes the earliest item first.

### Q6. What is amortized complexity?

It spreads rare expensive operations across a long sequence to find average cost per operation.

### Q7. Why is hash-table lookup not always `O(1)`?

Collisions, poor hashing, or high load can place many keys in the same search path and cause `O(n)` worst case.

### Q8. Binary tree vs. BST?

A binary tree only limits children to two, while a BST also follows an ordering rule.

### Q9. Complete vs. full binary tree?

A complete tree fills levels left to right, while a full tree gives every node zero or two children.

### Q10. Why can a BST become `O(n)`?

Ordered insertions can create a skewed tree with height `n` when no balancing is used.

### Q11. Heap vs. sorted array?

A heap gives fast access to one extreme and fast updates, while a sorted array gives ordered traversal and binary search but costly middle updates.

### Q12. BFS vs. DFS?

BFS explores by levels using a queue, while DFS explores deeply using recursion or a stack.

### Q13. When does BFS find a shortest path?

BFS finds a path with the fewest edges in an unweighted graph or a graph with equal edge costs.

### Q14. Why does Dijkstra fail with negative edges?

A later negative edge can improve a node already treated as final, breaking Dijkstra's greedy rule.

### Q15. What is topological sorting?

It orders vertices of a DAG so every directed edge goes from an earlier vertex to a later one.

### Q16. Stable vs. unstable sort?

A stable sort keeps equal items in original order, while an unstable sort may change their order.

### Q17. Merge sort vs. quick sort?

Merge sort has reliable `O(n log n)` time and extra memory, while quick sort is often fast in place but has `O(n²)` worst case.

### Q18. What is a monotonic stack?

It keeps elements in one order and removes items that cannot help future answers.

### Q19. Sliding window vs. two pointers?

Sliding window manages a continuous range, while two pointers is a broader method for two moving positions.

### Q20. Greedy vs. dynamic programming?

Greedy commits to safe local choices, while DP compares and stores results of related subproblems.

### Q21. Memoization vs. tabulation?

Memoization is top-down cached recursion, while tabulation fills states bottom-up.

### Q22. Backtracking vs. brute force?

Backtracking is organized brute force that builds choices and prunes invalid or useless branches early.

### Q23. What is path compression?

It makes DSU find operations point visited nodes closer to the set root.

### Q24. Segment tree vs. Fenwick tree?

A segment tree supports more range operations, while a Fenwick tree is simpler for prefix-based sums and related operations.

### Q25. Why use a trie?

A trie gives operations based on key length and supports prefix search directly.

### Q26. What is an in-place algorithm?

It uses only a small amount of extra memory beyond the input, under the problem's definition.

### Q27. What is recursion-stack complexity in DFS?

It can be `O(V)` in a graph or `O(h)` in a tree, where `h` is tree height.

### Q28. Why use `mid = low + (high - low) / 2`?

It avoids possible overflow from adding two large boundary values first.

### Q29. What is a proof of correctness?

It is a clear argument that the algorithm always returns the required result for every valid input.

### Q30. How should you choose a data structure?

Choose from required operations, constraints, ordering, memory, update rate, and worst-case needs.

---

## 29. MCQ Practice

Try the questions before opening the answer key.

**1. Which operation is normally `O(1)` for an array?**  
A. Index access  B. Middle insertion  C. Unsorted search  D. Full sort

**2. Which structure follows LIFO?**  
A. Queue  B. Stack  C. Heap  D. Graph

**3. Which structure is used by BFS?**  
A. Queue  B. Stack only  C. Trie  D. Heap always

**4. Which traversal of a BST returns sorted keys?**  
A. Preorder  B. Inorder  C. Postorder  D. Level only

**5. What is binary search complexity?**  
A. `O(1)`  B. `O(log n)`  C. `O(n)`  D. `O(n²)`

**6. Which sorting algorithm is stable with `O(n log n)` worst time?**  
A. Merge sort  B. Selection sort  C. Basic quick sort  D. Heap sort

**7. Which structure commonly implements a priority queue?**  
A. Heap  B. Plain stack  C. Trie  D. Linked list only

**8. Which algorithm handles negative edge weights?**  
A. Dijkstra always  B. Bellman–Ford  C. Binary search  D. Prim only

**9. Which algorithm finds an MST?**  
A. KMP  B. Kruskal  C. LRU  D. Rabin–Karp

**10. Which pattern is useful for continuous subarrays?**  
A. Sliding window  B. DSU only  C. Trie only  D. Topological sort

**11. Which technique stores repeated subproblem answers?**  
A. Dynamic programming  B. Linear probing only  C. Selection sort  D. Spooling

**12. Which data structure gives average `O(1)` key lookup?**  
A. Hash table  B. Unsorted list  C. Stack  D. Matrix only

**13. Which graph has a topological order?**  
A. Every undirected graph  B. DAG  C. Every cyclic graph  D. Complete graph only

**14. Which removes the lowest set bit?**  
A. `n & (n - 1)`  B. `n | n`  C. `n + 1`  D. `n << 0`

**15. Which structure supports set union and connectivity?**  
A. DSU  B. String builder  C. Circular queue only  D. Merge sort

**16. Build-heap complexity is:**  
A. `O(1)`  B. `O(log n)`  C. `O(n)`  D. `O(n²)`

**17. Which algorithm can have `O(n²)` worst time?**  
A. Quick sort  B. Merge sort  C. Heap sort  D. Counting sort under bounded `k`

**18. Which method is best for many static range-sum queries?**  
A. Prefix sum  B. Bubble sort  C. DFS  D. Trie

**19. Which method tries choices and undoes them?**  
A. Backtracking  B. Hashing  C. BFS only  D. Binary search

**20. Which tree gives fast prefix word search?**  
A. Trie  B. Heap  C. Segment tree  D. Expression tree

<details>
<summary><strong>Answer key</strong></summary>

1. **A** — Arrays give direct index access.
2. **B** — A stack is Last In, First Out.
3. **A** — BFS uses a queue.
4. **B** — Inorder visits BST keys in order.
5. **B** — Each step removes half the range.
6. **A** — Merge sort is stable with reliable `O(n log n)` time.
7. **A** — A binary heap is a common implementation.
8. **B** — Bellman–Ford supports negative weights.
9. **B** — Kruskal builds a minimum spanning tree.
10. **A** — Sliding window tracks a continuous range.
11. **A** — DP stores subproblem results.
12. **A** — Hash tables have average constant lookup.
13. **B** — A DAG has a topological order.
14. **A** — The expression clears the lowest set bit.
15. **A** — DSU maintains disjoint groups.
16. **C** — Bottom-up heap building is `O(n)`.
17. **A** — Poor pivots can make quick sort quadratic.
18. **A** — Prefix sums answer each query in `O(1)`.
19. **A** — Backtracking makes and removes choices.
20. **A** — A trie stores prefix paths.

</details>

---

## 30. Coding Interview Problems

### 1. Two Sum

Store each visited value and its index in a hash map; check whether `target - current` was seen.

Time is `O(n)` average and space is `O(n)`.

### 2. Maximum Subarray

Kadane's algorithm keeps the best sum ending at the current position and the best overall sum.

```text
current = best = a[0]
for each later value x:
    current = max(x, current + x)
    best = max(best, current)
```

Time is `O(n)` and extra space is `O(1)`.

### 3. Merge Intervals

Sort intervals by start, then merge when the next start is not after the current end.

Time is `O(n log n)` because of sorting.

### 4. Longest Substring Without Repeating Characters

Use a variable sliding window and store each character's latest valid position.

Time is `O(n)` with suitable hash storage.

### 5. Reverse Linked List

Use `previous`, `current`, and `next` pointers and reverse each link in one pass.

### 6. Detect Linked-List Cycle

Use slow and fast pointers; meeting proves a cycle without extra set memory.

### 7. Valid Parentheses

Push opening brackets and match each closing bracket with the stack top.

### 8. Min Stack

Store the current minimum with each pushed value or use a second minimum stack.

All normal stack operations remain `O(1)`.

### 9. Binary-Tree Level Order

Use BFS with a queue and process the current queue size as one level.

### 10. Validate BST

Pass allowed lower and upper limits down the tree, or check strict inorder ordering.

Use wide enough bounds and a clear duplicate policy.

### 11. Lowest Common Ancestor

In a BST, move left or right using key order; in a general binary tree, combine answers returned by subtrees.

### 12. Top K Frequent Elements

Count with a hash map, then use a heap of size `k` or bucket frequencies.

### 13. Number of Islands

Visit each unvisited land cell with DFS/BFS and count each new traversal.

Time is `O(rows × columns)`.

### 14. Course Schedule

Build a directed prerequisite graph and detect a cycle using indegrees/Kahn's algorithm or DFS colors.

### 15. Shortest Path

- Unweighted graph → BFS
- Non-negative weights → Dijkstra
- Negative weights → Bellman–Ford when suitable
- DAG → topological relaxation

### 16. Coin Change

Define `dp[x]` as the minimum number of coins needed for amount `x`, then try each coin transition.

### 17. Longest Common Subsequence

Use `dp[i][j]` for prefixes; equal characters extend the answer, otherwise take the best after skipping one side.

### 18. Generate Subsets

At each item, choose to include or exclude it using backtracking, or use bit masks.

There are `2^n` subsets, so output itself is exponential.

### 19. LRU Cache

Combine a hash map with a doubly linked list so lookup, update, and eviction are `O(1)` average.

### 20. Median from Data Stream

Use a max-heap for the lower half and a min-heap for the upper half, keeping sizes balanced.

### Practice Order

1. Arrays and hashing
2. Two pointers and windows
3. Linked lists
4. Stacks and queues
5. Trees and heaps
6. Graph BFS/DFS
7. Binary search
8. Greedy and intervals
9. Dynamic programming
10. Backtracking and advanced structures

---

## 31. Common Mistakes and Interview Tips

### Concept Mistakes

- Saying Big O always means exact worst-case time.
- Ignoring recursion-stack space.
- Saying hash-table operations are guaranteed `O(1)`.
- Treating a binary tree as automatically a BST.
- Saying a heap is fully sorted.
- Using BFS shortest-path claims on weighted graphs without conditions.
- Running Dijkstra with negative weights.
- Calling every recursive solution dynamic programming.
- Using greedy choice without a correctness reason.
- Confusing subsequence, subset, and subarray.
- Confusing stable sorting with in-place sorting.
- Saying build-heap is `O(n log n)` instead of the tighter `O(n)`.

### Coding Mistakes

- Off-by-one errors in loops and binary search.
- Overflow in sums, products, and midpoint calculation.
- Forgetting empty or one-item input.
- Losing linked-list nodes before saving the next pointer.
- Marking graph nodes visited too late and adding duplicates to the queue.
- Reusing mutable state across backtracking answers without copying.
- Missing base cases or state dimensions in DP.
- Using the wrong tie behavior in heaps or sorting.
- Modifying a collection while iterating unsafely.
- Assuming input order when the problem does not promise it.

### Interview Tips

- Begin with a clear brute-force solution.
- Use constraints to explain why optimization is needed.
- State data-structure operations and complexity.
- Speak through one example before coding.
- Name and protect invariants.
- Test empty, small, duplicate, sorted, and overflow cases.
- Explain why the algorithm is correct, not only why it is fast.
- If stuck, simplify the problem and solve a smaller form.
- Write readable code before micro-optimizing.

---

## 32. Rapid-Revision Cheat Sheet

### Complexity Order

```text
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n) < O(n!)
```

### Structure Recall

| Need | Useful Structure |
|---|---|
| Fast index | Array |
| Fast membership/frequency | Hash set/map |
| Last item first | Stack |
| First item first | Queue |
| Both ends | Deque |
| Best-priority item | Heap |
| Prefix words | Trie |
| Ordered dynamic keys | Balanced BST |
| Relationships | Graph |
| Connectivity unions | DSU |
| Range update/query | Fenwick or segment tree |

### Traversal Recall

```text
Tree preorder:  Root Left Right
Tree inorder:   Left Root Right
Tree postorder: Left Right Root
BFS: Queue
DFS: Stack or recursion
```

### Sorting Recall

- Insertion: good for small or nearly sorted input.
- Merge: stable, reliable `O(n log n)`, extra memory.
- Quick: fast average, poor pivot can cause `O(n²)`.
- Heap: `O(n log n)` worst time and in-place array form.
- Counting: fast when integer key range is small.

### Pattern Recall

- Sorted pair → two pointers
- Continuous range → sliding window
- Many range sums → prefix sum
- Monotonic condition → binary search
- Top K → heap
- Next greater/smaller → monotonic stack
- Shortest unweighted path → BFS
- Repeated states → DP
- All choices → backtracking
- Safe local choice → greedy with proof

### Graph Recall

```text
BFS/DFS:              O(V + E)
Dijkstra:             non-negative weights
Bellman–Ford:         negative weights allowed
Topological sort:     DAG only
Prim/Kruskal:         minimum spanning tree
DSU:                  dynamic union connectivity
```

### DP Checklist

1. Define state.
2. Write transition.
3. Set base cases.
4. Choose order.
5. Return final state.
6. Optimize space if possible.

### Thirty-Second Interview Answer

> Data structures organize information for useful operations, and algorithms turn input into output through correct steps. Good DSA work starts from constraints, chooses the right structure, proves correctness, and measures time and space. Common tools include arrays, hashing, stacks, queues, trees, heaps, graphs, binary search, greedy methods, dynamic programming, and backtracking.

### Final Checklist

- Can I calculate time and space complexity?
- Can I implement arrays, lists, stacks, queues, and hashing patterns?
- Can I traverse trees and graphs using BFS and DFS?
- Can I compare sorting and searching algorithms?
- Can I solve two-pointer, window, prefix-sum, and binary-search problems?
- Can I explain heap, trie, DSU, and range structures?
- Can I design greedy and DP states correctly?
- Can I write backtracking with clean choose/explore/undo steps?
- Can I explain correctness and edge cases?
- Can I improve brute force using input constraints?

**Recommended revision order:** complexity → arrays/strings → hashing → lists/stacks/queues → trees/heaps → graphs → search/sort → patterns → greedy/DP/backtracking.
