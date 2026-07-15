# Database Management Systems (DBMS) - Master Notes

> A beginner-to-advanced handbook for aptitude tests, technical interviews, SQL rounds, and quick revision.

A Database Management System stores, organizes, retrieves, protects, and manages data while providing controlled access, consistency, concurrency, and recovery.

Most examples use standard SQL; engine-specific behavior is identified where MySQL, PostgreSQL, Oracle, SQL Server, or SQLite may differ.

---

## Table of Contents

1. [DBMS Fundamentals](#1-dbms-fundamentals)
2. [Database Architecture](#2-database-architecture)
3. [Data Models](#3-data-models)
4. [ER Model](#4-er-model)
5. [Relational Model](#5-relational-model)
6. [Keys and Constraints](#6-keys-and-constraints)
7. [Relational Algebra](#7-relational-algebra)
8. [SQL Fundamentals](#8-sql-fundamentals)
9. [Joins and Subqueries](#9-joins-and-subqueries)
10. [Functions, Views, and Stored Programs](#10-functions-views-and-stored-programs)
11. [Functional Dependencies](#11-functional-dependencies)
12. [Normalization](#12-normalization)
13. [Transactions and ACID](#13-transactions-and-acid)
14. [Schedules and Serializability](#14-schedules-and-serializability)
15. [Concurrency Control](#15-concurrency-control)
16. [Deadlocks](#16-deadlocks)
17. [Recovery](#17-recovery)
18. [Storage and Indexing](#18-storage-and-indexing)
19. [Query Processing and Optimization](#19-query-processing-and-optimization)
20. [Distributed Databases](#20-distributed-databases)
21. [NoSQL Databases](#21-nosql-databases)
22. [Database Security](#22-database-security)
23. [Design Best Practices](#23-design-best-practices)
24. [Database-Specific Notes](#24-database-specific-notes)
25. [Interview Questions](#25-interview-questions)
26. [MCQ Practice](#26-mcq-practice)
27. [SQL Coding Problems](#27-sql-coding-problems)
28. [Common Mistakes and Interview Tips](#28-common-mistakes-and-interview-tips)
29. [Rapid-Revision Cheat Sheet](#29-rapid-revision-cheat-sheet)

---

## 1. DBMS Fundamentals

### Core Terms in One Line

- **Data:** Raw facts such as names, dates, prices, or measurements.
- **Information:** Processed data that carries meaning and supports decisions.
- **Database:** An organized collection of related data designed for efficient access.
- **DBMS:** Software that defines, stores, queries, secures, and recovers databases.
- **RDBMS:** A DBMS primarily based on tables, relationships, keys, and relational rules.
- **Schema:** The logical definition of database structures and constraints.
- **Instance:** The actual data stored in a database at a particular moment.
- **Metadata:** Data describing tables, columns, types, constraints, and other database objects.
- **Catalog/Data Dictionary:** A system-managed repository containing database metadata.
- **Query:** A request to retrieve or manipulate data.
- **Transaction:** A logical unit of work that should complete according to consistency guarantees.

### DBMS vs. File System

| DBMS                                    | Traditional File System                    |
| --------------------------------------- | ------------------------------------------ |
| Centralized control of shared data      | Application-specific files                 |
| Constraints protect consistency         | Validation is usually repeated in programs |
| Transactions support reliable updates   | Partial writes are harder to manage        |
| Concurrency control coordinates users   | Concurrent updates may conflict            |
| Query languages support flexible access | Access logic is custom coded               |
| Recovery mechanisms handle failures     | Recovery is mostly application-managed     |

### Advantages

- **Reduced redundancy:** Shared structured data limits unnecessary duplication.
- **Consistency:** Constraints and transactions help keep related values valid.
- **Data sharing:** Multiple authorized users and applications can use the same data.
- **Security:** Roles and privileges restrict operations and visibility.
- **Recovery:** Logs, backups, and checkpoints help restore data after failure.
- **Data independence:** Applications can be insulated from some storage or schema changes.

### Limitations

- **Cost:** Infrastructure, administration, licensing, and operations may be expensive.
- **Complexity:** Correct design, tuning, security, and recovery need specialized knowledge.
- **Overhead:** Small single-purpose programs may not need full DBMS machinery.
- **Central risk:** Poor availability design can make the database a critical failure point.

### Database Users

- **DBA:** Manages security, availability, backup, recovery, capacity, and performance.
- **Designer/Architect:** Defines schemas, relationships, constraints, and data strategy.
- **Developer:** Builds applications and queries that use the database.
- **Analyst:** Queries data to produce reports and insights.
- **End user:** Uses data through an application or approved interface.

### Database Languages

| Category | Purpose               | Common Commands                               |
| -------- | --------------------- | --------------------------------------------- |
| DDL      | Define structures     | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` |
| DML      | Insert or modify rows | `INSERT`, `UPDATE`, `DELETE`, `MERGE` |
| DQL      | Retrieve rows         | `SELECT`                                    |
| DCL      | Manage privileges     | `GRANT`, `REVOKE`                         |
| TCL      | Control transactions  | `COMMIT`, `ROLLBACK`, `SAVEPOINT`       |

Command classification and transaction behavior can vary slightly between products.

---

## 2. Database Architecture

### Three-Schema Architecture

```text
External Views
      ↓
Conceptual Schema
      ↓
Internal Schema
```

- **External level:** Presents user- or application-specific views of data.
- **Conceptual level:** Defines the complete logical database independent of physical storage.
- **Internal level:** Describes files, pages, indexes, and physical access paths.

### Data Independence

- **Physical data independence:** Storage changes should not require conceptual-schema or application changes.
- **Logical data independence:** Conceptual-schema changes should minimize changes to external views and applications.
- Logical data independence is generally harder to achieve than physical data independence.

### Deployment Architectures

- **One-tier:** UI, logic, and database access run in one environment.
- **Two-tier:** A client communicates directly with a database server.
- **Three-tier:** Presentation calls an application layer that controls database access.
- **N-tier:** Responsibilities are distributed across multiple services and infrastructure layers.

Three-tier designs improve separation, security control, reuse, and scalability.

---

## 3. Data Models

| Model             | One-Line Theory                                                               |
| ----------------- | ----------------------------------------------------------------------------- |
| Hierarchical      | Organizes records as a parent-child tree with one parent per child.           |
| Network           | Connects records as a graph and permits multiple parents.                     |
| Relational        | Represents data as relations/tables connected through values and constraints. |
| Object-oriented   | Stores objects with identity, state, behavior, and type relationships.        |
| Object-relational | Extends relational systems with richer user-defined types and structures.     |
| Key-value         | Retrieves opaque values through unique keys.                                  |
| Document          | Stores self-contained semi-structured documents such as JSON.                 |
| Column-family     | Groups wide, sparse data by column families for distributed workloads.        |
| Graph             | Stores vertices and edges for relationship-heavy traversal.                   |

Choose a model from access patterns, consistency needs, relationships, scale, and operational constraints—not popularity alone.

---

## 4. ER Model

The Entity-Relationship model describes data concepts and their relationships before physical implementation.

### ER Terms in One Line

- **Entity:** A distinguishable real-world or conceptual object.
- **Entity set:** A collection of similar entities.
- **Attribute:** A property describing an entity or relationship.
- **Relationship:** An association among entities.
- **Cardinality:** The number of instances that may participate in a relationship.
- **Participation:** Whether relationship membership is mandatory or optional.
- **Strong entity:** An entity identified by its own key.
- **Weak entity:** An entity identified partly through an owning entity.

### Attribute Types

- **Simple attribute:** Cannot be meaningfully divided into smaller components.
- **Composite attribute:** Contains components such as street, city, and postal code.
- **Single-valued attribute:** Holds at most one value per entity.
- **Multivalued attribute:** May contain several values per entity.
- **Stored attribute:** Physically retained in the database.
- **Derived attribute:** Calculated from other stored values.
- **Key attribute:** Participates in unique entity identification.

### Cardinality

```text
One-to-One:   Person 1 ─── 1 Passport
One-to-Many:  Department 1 ─── N Employee
Many-to-Many: Student M ─── N Course
```

A many-to-many relationship normally becomes an associative/junction table containing foreign keys and relationship attributes.

### Enhanced ER Concepts

- **Generalization:** Combines similar lower-level entities into a broader supertype.
- **Specialization:** Divides a supertype into subtypes based on distinguishing properties.
- **Disjoint constraint:** An entity may belong to only one listed subtype.
- **Overlapping constraint:** An entity may belong to multiple subtypes.
- **Aggregation:** Treats a relationship set as a higher-level entity for another relationship.

### ER-to-Relational Mapping

- Map each strong entity to a table with its key as the primary key.
- Include an owner's key in a weak-entity table and combine it with the partial key.
- Put the foreign key on the many side of a one-to-many relationship.
- Create a junction table for a many-to-many relationship.
- Move repeating multivalued attributes into separate tables.

---

## 5. Relational Model

| Formal Term | SQL-Oriented Meaning              |
| ----------- | --------------------------------- |
| Relation    | Table-like set of tuples          |
| Tuple       | Row                               |
| Attribute   | Column                            |
| Domain      | Permitted values for an attribute |
| Degree      | Number of attributes/columns      |
| Cardinality | Number of tuples/rows             |

### Relational Properties

- Each cell should represent one value from its attribute domain.
- Duplicate tuples are not part of the pure relational model, though SQL tables may contain duplicate rows.
- Row and column ordering has no logical meaning unless a query explicitly imposes ordering.
- Relations are connected through values rather than physical pointers.

### Integrity Rules

- **Domain integrity:** Attribute values must belong to their defined domains.
- **Entity integrity:** Primary-key attributes cannot be null.
- **Referential integrity:** A foreign key must match a referenced key or be null when allowed.
- **Business integrity:** Application-specific rules are enforced with constraints and transactional logic.

---

## 6. Keys and Constraints

### Keys in One Line

- **Super key:** Any attribute set that uniquely identifies a row.
- **Candidate key:** A minimal super key with no unnecessary attribute.
- **Primary key:** The candidate key selected as the main row identifier.
- **Alternate key:** A candidate key not selected as the primary key.
- **Composite key:** A key containing more than one attribute.
- **Foreign key:** Attribute set referencing a candidate/unique key in another or the same table.
- **Natural key:** A key derived from meaningful domain data.
- **Surrogate key:** A system-generated identifier without business meaning.

### SQL Constraints

```sql
CREATE TABLE Department (
    department_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Employee (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10, 2) CHECK (salary >= 0),
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES Department(department_id)
);
```

- `NOT NULL` rejects missing values in a column.
- `UNIQUE` prevents duplicate non-null key values subject to engine-specific null behavior.
- `PRIMARY KEY` combines uniqueness and non-null identity.
- `FOREIGN KEY` protects references between tables.
- `CHECK` enforces a Boolean row condition where supported.
- `DEFAULT` supplies a value when an insert omits the column.

### Natural vs. Surrogate Keys

- Natural keys carry domain meaning but can be large, sensitive, or changeable.
- Surrogate keys are compact and stable but need additional unique constraints for business identity.
- A surrogate primary key does not remove the need to enforce natural uniqueness.

---

## 7. Relational Algebra

Relational algebra is a procedural query foundation whose operators take relations as input and produce relations as output.

| Operation         | Symbol | One-Line Theory                                                       |
| ----------------- | ------ | --------------------------------------------------------------------- |
| Selection         | `σ` | Filters tuples satisfying a predicate.                                |
| Projection        | `π` | Selects attributes and removes duplicates in pure relational algebra. |
| Union             | `∪` | Combines union-compatible relations.                                  |
| Intersection      | `∩` | Returns tuples present in both compatible relations.                  |
| Difference        | `−` | Returns tuples present in the first relation but not the second.      |
| Cartesian product | `×` | Pairs every tuple of one relation with every tuple of another.        |
| Rename            | `ρ` | Renames a relation or its attributes.                                 |
| Join              | `⋈` | Combines related tuples according to a condition.                     |
| Division          | `÷` | Answers “for all” queries involving related sets.                   |

```text
σ department = 'IT' (Employee)      -- rows from IT
π name, salary (Employee)           -- selected attributes
Employee ⋈ Department               -- related employee/department tuples
```

Union, intersection, and difference require compatible attribute counts and domains.

---

## 8. SQL Fundamentals

### Basic Query Order

```sql
SELECT department_id, COUNT(*) AS employee_count
FROM Employee
WHERE salary >= 50000
GROUP BY department_id
HAVING COUNT(*) >= 3
ORDER BY employee_count DESC;
```

Conceptual processing order:

```text
FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT/FETCH
```

The optimizer may physically execute operations differently while preserving query semantics.

### Core Clauses in One Line

- `SELECT` chooses expressions or columns for the result.
- `FROM` identifies source relations.
- `WHERE` filters individual rows before grouping.
- `GROUP BY` forms groups sharing selected values.
- `HAVING` filters groups after aggregation.
- `ORDER BY` defines result ordering.
- `DISTINCT` removes duplicate result rows.
- `LIMIT`, `FETCH`, or `TOP` restricts returned rows using product-specific syntax.

### Data Modification

```sql
INSERT INTO Department (department_id, name)
VALUES (10, 'Engineering');

UPDATE Employee
SET salary = salary * 1.10
WHERE department_id = 10;

DELETE FROM Employee
WHERE employee_id = 101;
```

Always preview an `UPDATE` or `DELETE` predicate with `SELECT` when working manually on important data.

### Null Semantics

- `NULL` represents missing or unknown information, not zero or an empty string.
- Comparisons with `NULL` produce unknown rather than true or false.
- Use `IS NULL` and `IS NOT NULL`, not `= NULL` or `<> NULL`.
- Most aggregate functions ignore null values; `COUNT(*)` counts rows.
- `COALESCE(a, b, c)` returns the first non-null expression.

### Aggregates

- `COUNT` counts rows or non-null expressions.
- `SUM` totals numeric values.
- `AVG` returns the average of non-null numeric values.
- `MIN` and `MAX` return extreme non-null values.

### Set Operations

- `UNION` combines results and removes duplicates.
- `UNION ALL` combines results and preserves duplicates.
- `INTERSECT` returns common rows where supported.
- `EXCEPT`/`MINUS` returns rows found only in the first result, depending on the product.

### `DELETE`, `TRUNCATE`, and `DROP`

| Command      | Effect                                                                        |
| ------------ | ----------------------------------------------------------------------------- |
| `DELETE`   | Removes selected rows and supports a`WHERE` clause.                         |
| `TRUNCATE` | Quickly removes all rows with product-specific transaction/identity behavior. |
| `DROP`     | Removes the database object definition and its data.                          |

Do not memorize universal rollback or logging claims for `TRUNCATE`; behavior varies by DBMS.

---

## 9. Joins and Subqueries

### Join Types

- **Inner join:** Returns only rows satisfying the join condition.
- **Left outer join:** Keeps every left row and null-extends unmatched right columns.
- **Right outer join:** Keeps every right row and null-extends unmatched left columns.
- **Full outer join:** Keeps matched and unmatched rows from both sides.
- **Cross join:** Produces the Cartesian product.
- **Self join:** Joins a table to another logical instance of itself.
- **Natural join:** Automatically joins same-named columns and is often avoided in production because schema changes alter behavior.

```sql
SELECT e.name, d.name AS department
FROM Employee AS e
LEFT JOIN Department AS d
  ON d.department_id = e.department_id;
```

Placing a right-table filter in `WHERE` after a left join may remove null-extended rows and effectively produce inner-join behavior.

### Subqueries

- **Scalar subquery:** Returns one value.
- **Row subquery:** Returns one row containing several values.
- **Table subquery:** Returns a relation usable by an outer query.
- **Correlated subquery:** Refers to values from the current outer-query row.
- `EXISTS` checks whether a subquery returns at least one row.
- `IN` checks membership but needs care with `NULL`, particularly under `NOT IN`.

```sql
SELECT e.name
FROM Employee AS e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM Employee AS e2
    WHERE e2.department_id = e.department_id
);
```

### Common Table Expression

```sql
WITH DepartmentAverage AS (
    SELECT department_id, AVG(salary) AS average_salary
    FROM Employee
    GROUP BY department_id
)
SELECT e.name
FROM Employee AS e
JOIN DepartmentAverage AS a
  ON a.department_id = e.department_id
WHERE e.salary > a.average_salary;
```

A CTE improves expression and can support recursion, but it is not automatically materialized in every DBMS.

---

## 10. Functions, Views, and Stored Programs

### Functions

- **Scalar function:** Returns one value for an invocation.
- **Aggregate function:** Summarizes a group of rows.
- **Window function:** Calculates across related rows without collapsing them into one row.

```sql
SELECT name,
       department_id,
       salary,
       RANK() OVER (
           PARTITION BY department_id
           ORDER BY salary DESC
       ) AS salary_rank
FROM Employee;
```

Window concepts:

- `PARTITION BY` divides rows into independent calculation groups.
- Window `ORDER BY` establishes sequence inside each partition.
- A window frame limits rows used around the current row.
- `ROW_NUMBER`, `RANK`, and `DENSE_RANK` handle ties differently.

### Views

- **View:** A stored query that exposes a logical table-like interface.
- **Materialized view:** A physically stored query result refreshed according to product rules.
- Views can simplify access and restrict columns but do not automatically provide complete security.
- View updatability depends on query shape and DBMS rules.

### Stored Programs

- **Stored procedure:** A named database-side program that performs operations and may return several results.
- **Stored function:** A database-side routine intended to return a value or table under product rules.
- **Trigger:** Code executed automatically by specified data events.
- Triggers can enforce cross-cutting rules but may hide control flow and complicate debugging.

---

## 11. Functional Dependencies

A functional dependency `X → Y` means that equal `X` values must determine equal `Y` values.

### Dependency Types

- **Trivial FD:** `Y` is a subset of `X` in `X → Y`.
- **Non-trivial FD:** `Y` contains an attribute not included in `X`.
- **Full dependency:** Removing any attribute from the determinant breaks the dependency.
- **Partial dependency:** A non-key attribute depends on part of a composite candidate key.
- **Transitive dependency:** A non-key attribute depends on a key through another non-key determinant.

### Armstrong's Axioms

- **Reflexivity:** If `Y ⊆ X`, then `X → Y`.
- **Augmentation:** If `X → Y`, then `XZ → YZ`.
- **Transitivity:** If `X → Y` and `Y → Z`, then `X → Z`.

Useful derived rules include union, decomposition, and pseudotransitivity.

### Attribute Closure

`X+` is the set of all attributes functionally determined by `X` under the given dependencies.

Candidate-key method:

1. Start with attributes that never appear on a dependency's right side.
2. Compute their closure under all dependencies.
3. Add attributes until the closure covers the relation.
4. Remove any unnecessary attributes to ensure minimality.

### Minimal Cover

A minimal cover has one right-side attribute per FD, no extraneous determinant attributes, and no redundant dependencies.

---

## 12. Normalization

Normalization decomposes relations to reduce update anomalies while preserving correct reconstruction and, where possible, dependencies.

### Anomalies

- **Insertion anomaly:** A fact cannot be recorded without an unrelatoed fact.
- **Update anomaly:** The same fact must be changed in several rows.
- **Deletion anomaly:** Removing one fact accidentally removes another.

### Normal Forms

| Form | One-Line Requirement                                                  |
| ---- | --------------------------------------------------------------------- |
| 1NF  | Attribute values are atomic for the chosen relational design.         |
| 2NF  | 1NF plus no non-prime attribute partially depends on a candidate key. |
| 3NF  | For every FD`X → A`, `X` is a super key or `A` is prime.       |
| BCNF | Every non-trivial determinant is a super key.                         |
| 4NF  | Every non-trivial multivalued determinant is a super key.             |
| 5NF  | Every non-trivial join dependency follows from candidate keys.        |

### Example

```text
Enrollment(StudentID, CourseID, StudentName, CourseName, Instructor)
Key: (StudentID, CourseID)

StudentID → StudentName
CourseID  → CourseName, Instructor
```

`StudentName` and course details depend on only part of the composite key, so the relation violates 2NF.

Decomposition:

```text
Student(StudentID, StudentName)
Course(CourseID, CourseName, Instructor)
Enrollment(StudentID, CourseID)
```

### Decomposition Properties

- **Lossless decomposition:** Joining decomposed relations reconstructs exactly the original valid relation.
- **Dependency preservation:** Original dependencies can be enforced without joining decomposed relations.
- BCNF is stricter than 3NF, but a BCNF decomposition may sacrifice dependency preservation.
- **Denormalization:** Intentionally duplicates or combines data for measured performance or operational needs.

---

## 13. Transactions and ACID

A transaction is a logical unit of database work whose operations succeed or fail according to transactional guarantees.

```sql
BEGIN;

UPDATE Account
SET balance = balance - 500
WHERE account_id = 1;

UPDATE Account
SET balance = balance + 500
WHERE account_id = 2;

COMMIT;
```

### ACID in One Line

- **Atomicity:** A transaction's operations take effect as one logical unit or are undone.
- **Consistency:** A transaction moves the database between states satisfying declared rules.
- **Isolation:** Concurrent transactions have controlled visibility and interference.
- **Durability:** Committed effects survive failures covered by the durability model.

Consistency is a shared responsibility of constraints, transaction logic, and application rules; a DBMS cannot infer every business invariant.

### Transaction States

- **Active:** The transaction is executing operations.
- **Partially committed:** Its last statement finished but commit durability is not complete.
- **Committed:** Its successful effects are accepted as durable.
- **Failed:** The transaction cannot continue normally.
- **Aborted:** Its effects have been rolled back.
- **Terminated:** Processing and cleanup have finished.

### Transaction Commands

- `COMMIT` accepts the current transaction's changes.
- `ROLLBACK` reverses uncommitted changes.
- `SAVEPOINT` creates an intermediate rollback target.
- Autocommit behavior differs between drivers, tools, and database products.

---

## 14. Schedules and Serializability

A schedule is an ordering of operations from one or more transactions that preserves each transaction's internal order.

### Schedule Types

- **Serial schedule:** Completes one transaction before starting another.
- **Concurrent schedule:** Interleaves operations from multiple transactions.
- **Serializable schedule:** Produces an outcome equivalent to an accepted serial ordering.
- **Conflict-serializable schedule:** Can become serial by swapping non-conflicting operations.
- **View-serializable schedule:** Is view-equivalent to a serial schedule and includes some non-conflict-serializable cases.

Operations conflict when they belong to different transactions, access the same item, and at least one is a write.

### Precedence Graph Test

1. Create one node per transaction.
2. Add edge `Ti → Tj` when a conflicting operation of `Ti` precedes one of `Tj` on the same item.
3. The schedule is conflict serializable exactly when the graph is acyclic.
4. A topological ordering gives an equivalent serial order.

### Recovery Properties

- **Recoverable:** A transaction commits only after transactions whose values it read have committed.
- **Cascadeless:** Transactions read only committed values, preventing cascading rollbacks.
- **Strict:** No transaction reads or writes an item written by an uncommitted transaction.
- Strict schedules are cascadeless, and cascadeless schedules are recoverable.

---

## 15. Concurrency Control

Concurrency control preserves required isolation while allowing useful parallel transaction execution.

### Common Anomalies

- **Lost update:** One transaction overwrites another transaction's update.
- **Dirty read:** A transaction reads a value written by an uncommitted transaction.
- **Non-repeatable read:** Re-reading a row produces a changed committed value.
- **Phantom read:** Repeating a predicate query returns a changed set of rows.
- **Dirty write:** A transaction overwrites another transaction's uncommitted value.
- **Write skew:** Transactions update different rows after reading a shared condition and jointly violate an invariant.

### Isolation Levels

| Standard Level   | General Guarantee                                           |
| ---------------- | ----------------------------------------------------------- |
| Read Uncommitted | Permits the weakest standard read isolation.                |
| Read Committed   | Prevents dirty reads.                                       |
| Repeatable Read  | Stabilizes previously read rows under standard definitions. |
| Serializable     | Requires behavior equivalent to a valid serial execution.   |

Exact anomalies and implementation behavior vary across DBMS engines, particularly with MVCC.

### Lock Types

- **Shared lock:** Allows compatible readers but blocks conflicting writers.
- **Exclusive lock:** Blocks other conflicting reads or writes according to the isolation model.
- **Update lock:** Some systems use it to reduce conversion deadlocks.
- **Intention lock:** Announces lower-level locking intent in a hierarchy.
- **Row/page/table lock:** Indicates the resource granularity being protected.

### Two-Phase Locking

- **Growing phase:** A transaction acquires locks and releases none.
- **Shrinking phase:** A transaction releases locks and acquires no new ones.
- **Basic 2PL:** Guarantees conflict serializability but may allow cascading rollback.
- **Strict 2PL:** Holds exclusive/write locks until commit or abort.
- **Rigorous 2PL:** Holds both shared and exclusive locks until commit or abort.

### Other Techniques

- **Timestamp ordering:** Orders conflicting operations using transaction timestamps.
- **Optimistic control:** Validates at commit and works well when conflicts are uncommon.
- **Pessimistic control:** Prevents conflicts early, commonly through locks.
- **MVCC:** Maintains multiple row versions so readers and writers can interfere less.

MVCC does not mean “no locks”; writes and schema operations still require coordination.

---

## 16. Deadlocks

A deadlock occurs when transactions wait indefinitely in a cycle for resources held by one another.

### Necessary Conditions

1. **Mutual exclusion:** A resource cannot be used compatibly by every requester.
2. **Hold and wait:** A transaction holds one resource while waiting for another.
3. **No preemption:** A held resource is not forcibly taken under normal rules.
4. **Circular wait:** A cycle of transactions waits on one another.

### Handling Approaches

- **Prevention:** Design acquisition rules so at least one necessary condition cannot hold.
- **Avoidance:** Grant requests only when the resulting state is considered safe.
- **Detection:** Build a wait-for graph and search for cycles.
- **Timeout:** Abort work that waits beyond a configured limit.
- **Recovery:** Select a victim, roll it back, release resources, and retry safely.

Practical prevention includes short transactions, consistent resource order, proper indexes, and retry logic for chosen deadlock victims.

Deadlock differs from starvation: deadlock is cyclic waiting, while starvation is indefinite delay caused by scheduling or repeated victimization.

---

## 17. Recovery

Recovery restores a correct database state after transaction, system, media, or communication failures.

### Core Concepts

- **Log:** An ordered record of transaction and data-change events.
- **Write-ahead logging:** Required log information reaches durable storage before the corresponding changed data page.
- **Undo:** Reverses effects of transactions that did not commit.
- **Redo:** Reapplies committed effects missing from persisted data pages.
- **Checkpoint:** Records recovery progress to limit how much history must be processed.
- **Backup:** A recoverable copy of database data and required metadata.
- **Point-in-time recovery:** Restores a backup and replays logs to a chosen time.

### Update Approaches

- **Deferred update:** Database pages are not updated until commit, so recovery primarily redoes committed work.
- **Immediate update:** Pages may be written before commit, so recovery may require undo and redo.
- **Shadow paging:** Updates new page copies and atomically changes the page-map root, avoiding traditional undo/redo for those pages.

### Failure Types

- **Transaction failure:** Logic, constraint, deadlock, or explicit abort affects one transaction.
- **System crash:** Volatile state is lost while durable storage generally survives.
- **Media failure:** Durable storage is damaged or unavailable.
- **Distributed failure:** Network partitions or node failures leave cross-node work uncertain.

Backups are useful only when restoration is regularly tested.

---

## 18. Storage and Indexing

### Storage Terms

- **Page/block:** The primary fixed-size unit transferred between storage and memory.
- **Record:** A stored representation of a row or tuple.
- **Heap file:** Stores records without maintaining a search-key order.
- **Sorted file:** Maintains physical order by a search key at higher update cost.
- **Buffer pool:** Memory used to cache database pages.

### Index Types

- **Primary index:** Built on an ordering primary key in classical terminology.
- **Secondary index:** Provides an additional access path independent of primary storage order.
- **Clustered index:** Determines or closely follows physical row organization according to product implementation.
- **Non-clustered index:** Stores keys plus row locators separately from base-row organization.
- **Dense index:** Contains an entry for every search-key value or record.
- **Sparse index:** Contains entries for only selected keys and requires ordered data.
- **Composite index:** Uses more than one indexed column in a defined order.
- **Covering index:** Contains every column required by a query, enabling an index-only plan where supported.
- **Partial/filtered index:** Indexes only rows satisfying a predicate.

### B-tree, B+ Tree, and Hashing

- **B-tree:** Balanced search tree storing keys and records/pointers across nodes.
- **B+ tree:** Keeps data pointers at leaves and links leaves for efficient range scans.
- **Hash index:** Maps keys to buckets and is strongest for equality lookup rather than ordered ranges.
- **Bitmap index:** Represents values with bitmaps and can suit low-cardinality analytical workloads.

### Composite Index Rule

An index on `(department_id, salary)` is naturally useful for leading-prefix searches on `department_id` and may support salary conditions within that prefix.

Indexes improve selected reads but consume storage and add maintenance work to inserts, updates, and deletes.

Do not assume every primary key is physically clustered; product defaults and storage engines differ.

---

## 19. Query Processing and Optimization

### Query Pipeline

1. **Parse:** Check syntax and build an internal representation.
2. **Bind/validate:** Resolve names, types, privileges, and semantics.
3. **Rewrite:** Apply equivalent logical transformations.
4. **Optimize:** Compare physical plans using estimated cost.
5. **Execute:** Run the selected operators and return results.

### Core Terms

- **Selectivity:** Fraction of rows expected to satisfy a predicate.
- **Cardinality estimate:** Predicted row count at an execution-plan step.
- **Statistics:** Data distributions used by the optimizer to estimate cost.
- **Sargable predicate:** A search condition usable as an efficient index access boundary.
- **Predicate pushdown:** Moves filtering closer to data access to reduce intermediate rows.

### Join Algorithms

- **Nested-loop join:** Repeatedly probes one input for rows from another and can excel with an indexed inner side.
- **Hash join:** Hashes one equality-join input and probes it with the other.
- **Sort-merge join:** Sorts or consumes ordered inputs and merges matching key ranges.

### Practical Tuning

- Select only required columns rather than defaulting to `SELECT *`.
- Index frequent selective predicates and join keys based on measured workloads.
- Avoid functions on indexed columns when they make predicates non-sargable.
- Inspect actual execution plans rather than guessing.
- Keep statistics current according to product needs.
- Batch work where appropriate and avoid application-side N+1 queries.
- Treat premature indexing and denormalization as trade-offs requiring evidence.

---

## 20. Distributed Databases

A distributed database stores or processes logically related data across multiple networked nodes.

### Core Concepts

- **Replication:** Maintains copies of data on multiple nodes for availability, locality, or read scale.
- **Partitioning:** Divides data into subsets managed separately.
- **Sharding:** Distributes horizontal partitions across nodes using a shard key.
- **Horizontal partitioning:** Splits rows by ranges, hashes, or lists.
- **Vertical partitioning:** Splits columns or related table groups.
- **Leader-based replication:** A designated leader accepts writes and propagates them to replicas.
- **Leaderless replication:** Multiple replicas accept operations using quorum and reconciliation mechanisms.
- **Synchronous replication:** Waits for selected replicas before acknowledging success.
- **Asynchronous replication:** Acknowledges before every replica applies the change, allowing lag.

### CAP Theorem

During a network partition, a distributed system cannot guarantee both linearizable consistency and availability for every request.

- **Consistency (CAP):** Every successful read observes a single up-to-date logical value under the chosen model.
- **Availability (CAP):** Every request to a non-failing node receives a non-error response.
- **Partition tolerance:** The system continues operating despite lost or delayed messages between node groups.

CAP consistency is not the same concept as ACID consistency.

### Distributed Transactions

- **Two-phase commit:** A coordinator first prepares participants and then tells them to commit or abort.
- **Saga:** A long workflow uses local transactions plus compensating actions instead of one global atomic transaction.
- **Eventual consistency:** Replicas may temporarily differ but converge if updates stop and delivery succeeds.
- **Quorum:** Reads and writes contact selected replica counts to obtain a chosen trade-off.

A poor shard key creates hotspots, cross-shard joins, and expensive rebalancing.

---

## 21. NoSQL Databases

NoSQL describes non-relational database families optimized for particular structures, access patterns, or distribution models.

| Family        | Model                                | Typical Strength                           |
| ------------- | ------------------------------------ | ------------------------------------------ |
| Key-value     | Key maps to an opaque value          | Caching, sessions, fast lookup             |
| Document      | Flexible nested documents            | Application aggregates and evolving fields |
| Column-family | Sparse rows grouped by column family | Large distributed write-heavy workloads    |
| Graph         | Vertices, edges, and properties      | Relationship traversal and path queries    |

### SQL vs. NoSQL

- Relational databases excel at constraints, joins, transactions, and structured querying.
- NoSQL systems may offer flexible schemas, specialized access, and horizontal distribution.
- “Schema-less” usually means schema is enforced by applications or conventions rather than absent.
- Polyglot persistence uses multiple database types when distinct workloads justify operational complexity.

### BASE

- **Basically available:** The system prioritizes continuing to serve responses.
- **Soft state:** Replicated state may change as asynchronous updates propagate.
- **Eventually consistent:** Replicas converge under the system's assumptions.

BASE and ACID are not strict opposites; modern systems can combine features from both descriptions.

---

## 22. Database Security

Database security protects data confidentiality, integrity, and availability through identity, privileges, encryption, auditing, and safe application access.

### Security Principles

- **Authentication:** Verifies who a user or service is.
- **Authorization:** Determines which actions an identity may perform.
- **Least privilege:** Grants only permissions required for a task.
- **Role-based access:** Assigns privileges to roles and users to roles.
- **Separation of duties:** Divides sensitive powers among independent roles.
- **Auditing:** Records security-relevant access and changes.
- **Encryption in transit:** Protects data moving across networks.
- **Encryption at rest:** Protects stored media and backups under the threat model.
- **Data masking:** Obscures sensitive values in approved contexts.
- **Row-level security:** Restricts visible rows according to identity or policy.

### SQL Injection

Unsafe string construction combines SQL code and untrusted input; parameterized queries keep values separate from executable query structure.

```sql
SELECT * FROM users WHERE name = ?;
```

Input validation alone is not a substitute for query parameterization.

### Security Checklist

- Do not expose the database directly to untrusted clients.
- Use separate service accounts with narrowly scoped privileges.
- Rotate and securely store credentials.
- Patch supported database versions and drivers.
- Encrypt and test backups.
- Audit privileged operations and sensitive reads.
- Minimize collection and retention of sensitive data.

---

## 23. Design Best Practices

- Name tables, columns, and constraints consistently and meaningfully.
- Choose correct data types instead of storing every value as text.
- Enforce durable invariants in the database where practical.
- Normalize transactional data first and denormalize only with measured justification.
- Keep transactions short while preserving business atomicity.
- Store timestamps with deliberate timezone and precision semantics.
- Use decimal types rather than binary floating point for exact monetary values.
- Model many-to-many relationships with explicit junction tables.
- Add indexes from real access patterns, not to every column.
- Treat migrations as reviewed, versioned operational changes.
- Test backup restoration, failover, and disaster-recovery objectives.
- Avoid soft deletion unless retention, uniqueness, and queries are designed around it.
- Prevent N+1 queries with joins, batching, or appropriate loading strategies.

```sql
CREATE TABLE AppUser (
    user_id BIGINT PRIMARY KEY,
    email VARCHAR(320) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL
);
```

The surrogate key provides stable identity while the unique constraint protects business uniqueness.

---

## 24. Database-Specific Notes

### PostgreSQL

- Uses MVCC and offers rich standard SQL, JSON types, partial indexes, and transactional DDL for many operations.
- Identity columns are standard-oriented for generated numeric keys compared with legacy `SERIAL` convenience syntax.

### MySQL

- Behavior depends on the storage engine; InnoDB provides transactions, MVCC, foreign keys, and clustered primary-key organization.
- SQL mode affects validation and coercion behavior, so production mode should be explicit.

### Oracle Database

- Provides product-specific features such as packages, extensive PL/SQL, and `MINUS`.
- Empty strings in character contexts are treated as null, an important portability difference.

### SQL Server

- Uses T-SQL features such as `TOP`, `IDENTITY`, and product-specific isolation options.
- A primary key is not inherently a clustered index, even if defaults often combine them.

### SQLite

- Is an embedded, serverless database stored mainly in a local file and uses dynamic type affinity.
- It suits local workloads but has a different concurrency model from client-server systems.

Standard SQL improves portability, but data types, null rules, generated keys, dates, procedural code, locking, and DDL transactions still vary.

---

## 25. Interview Questions

### Q1. What is a DBMS?

A DBMS is software that defines, stores, queries, secures, coordinates, and recovers databases.

### Q2. DBMS vs. RDBMS?

DBMS is the broader category; an RDBMS primarily organizes data as relations and enforces relational keys, constraints, and operations.

### Q3. Schema vs. instance?

A schema defines database structure, while an instance is the data present at a particular time.

### Q4. Primary key vs. unique key?

A primary key is the selected non-null row identifier; a unique constraint enforces an additional candidate/business key with product-specific null behavior.

### Q5. Candidate key vs. super key?

A candidate key is a minimal super key, whereas a super key may include unnecessary identifying attributes.

### Q6. What is referential integrity?

It requires each non-null foreign-key value to reference an existing permitted key value.

### Q7. `WHERE` vs. `HAVING`?

`WHERE` filters rows before grouping, while `HAVING` filters groups after aggregation.

### Q8. `UNION` vs. `UNION ALL`?

`UNION` removes duplicate result rows, while `UNION ALL` preserves them and usually avoids duplicate-elimination work.

### Q9. Inner join vs. left join?

An inner join keeps matches only; a left join also keeps unmatched left rows with null-extended right columns.

### Q10. Subquery vs. correlated subquery?

A normal subquery can execute independently, while a correlated subquery refers to the current outer-query row.

### Q11. What is normalization?

Normalization organizes relations using dependencies to reduce anomalies and improve integrity through suitable decomposition.

### Q12. 3NF vs. BCNF?

3NF permits an FD whose right side is prime even when its determinant is not a super key; BCNF requires every non-trivial determinant to be a super key.

### Q13. What is a functional dependency?

`X → Y` means equal `X` values always determine equal `Y` values in every valid relation state.

### Q14. What makes decomposition lossless?

A lossless decomposition reconstructs exactly the original valid relation without creating spurious tuples.

### Q15. Explain ACID.

ACID means atomic all-or-nothing work, rule-preserving consistency, controlled concurrent isolation, and durable committed effects.

### Q16. What is conflict serializability?

A schedule is conflict serializable when non-conflicting swaps can transform it into a serial schedule, equivalently when its precedence graph is acyclic.

### Q17. Recoverable vs. cascadeless vs. strict schedule?

Recoverable delays dependent commits, cascadeless forbids dirty reads, and strict additionally blocks access to uncommitted written items.

### Q18. What is MVCC?

MVCC maintains multiple row versions so transactions can read appropriate snapshots while reducing reader-writer blocking.

### Q19. What is a deadlock?

A deadlock is a cycle in which transactions indefinitely wait for resources held by one another.

### Q20. Clustered vs. non-clustered index?

A clustered index controls or follows base-row organization, while a non-clustered index is a separate key-to-row access structure under product-specific implementations.

### Q21. Why is a B+ tree suitable for databases?

Its high fan-out keeps tree height small, balanced operations are predictable, and linked leaves efficiently support range scans.

### Q22. Why might an index not be used?

Low selectivity, stale estimates, non-sargable predicates, type conversions, small tables, or cheaper sequential access may make another plan preferable.

### Q23. What is a dirty read?

A dirty read observes another transaction's uncommitted value, which may later be rolled back.

### Q24. Replication vs. sharding?

Replication copies data across nodes, while sharding divides different data subsets among nodes.

### Q25. CAP consistency vs. ACID consistency?

CAP consistency concerns a single current distributed value, while ACID consistency concerns preserving declared database rules across transactions.

### Q26. View vs. materialized view?

A view stores a query definition, while a materialized view stores and refreshes the query result.

### Q27. Procedure vs. trigger?

A procedure is explicitly invoked, while a trigger automatically runs for configured database events.

### Q28. What is SQL injection?

SQL injection occurs when untrusted input changes query structure, and parameterized queries are the primary defense.

### Q29. Why can `NOT IN` be dangerous with nulls?

A null in the compared set can make membership comparisons unknown, so `NOT EXISTS` is often clearer and safer.

### Q30. When should a database be denormalized?

Denormalize only when measured workload needs justify duplication and the consistency-maintenance strategy is explicit.

---

## 26. MCQ Practice

Try the questions before opening the answer key.

**1. Which key is a minimal super key?**
A. Foreign key  B. Candidate key  C. Composite attribute  D. Secondary index

**2. Which clause filters groups?**
A. `WHERE`  B. `ORDER BY`  C. `HAVING`  D. `DISTINCT`

**3. Which normal form removes partial dependency on a candidate key?**
A. 1NF  B. 2NF  C. 3NF  D. 4NF

**4. Which ACID property preserves committed work after failure?**
A. Atomicity  B. Consistency  C. Isolation  D. Durability

**5. An acyclic precedence graph indicates:**
A. Deadlock  B. Conflict serializability  C. Dirty read  D. Denormalization

**6. Which schedule type prevents reading uncommitted values?**
A. Recoverable only  B. Cascadeless  C. Non-serial  D. View-only

**7. Which structure is generally strong for range queries?**
A. Hash index  B. B+ tree  C. Heap only  D. Stack

**8. Which join preserves all left-side rows?**
A. Inner join  B. Cross join  C. Left outer join  D. Self join

**9. `COUNT(column)` normally ignores:**
A. Duplicates  B. Null values  C. Negative values  D. Zero

**10. Which command removes the table definition?**
A. `DELETE`  B. `TRUNCATE`  C. `DROP`  D. `ROLLBACK`

**11. Which lock generally permits compatible concurrent readers?**
A. Shared  B. Exclusive  C. Write-only  D. Deadlock

**12. A cycle in a wait-for graph indicates:**
A. Normalization  B. Deadlock  C. Projection  D. Replication

**13. Which technique keeps multiple row versions?**
A. DDL  B. MVCC  C. RAID  D. ETL

**14. Which operation preserves duplicates?**
A. `UNION`  B. `UNION ALL`  C. `INTERSECT`  D. Projection

**15. Which relationship normally needs a junction table?**
A. One-to-one  B. Many-to-many  C. Unary attribute  D. Derived attribute

**16. Which is safest against SQL injection?**
A. Escaping by hand  B. Parameterized query  C. Longer password  D. `DISTINCT`

**17. Which partitioning divides rows?**
A. Vertical  B. Horizontal  C. Column projection  D. Replication

**18. Which index is strongest for equality lookup but weak for ordered ranges?**
A. Hash  B. B+ tree  C. Bitmap always  D. Covering always

**19. Which anomaly changes a predicate result set between reads?**
A. Phantom read  B. Dirty write  C. Checkpoint  D. Projection

**20. Which command permanently accepts a transaction's changes?**
A. `SAVEPOINT`  B. `ROLLBACK`  C. `COMMIT`  D. `GRANT`

<details>
<summary><strong>Answer key</strong></summary>

1. **B** — A candidate key is a minimal super key.
2. **C** — `HAVING` filters groups after aggregation.
3. **B** — 2NF removes partial dependency of non-prime attributes.
4. **D** — Durability protects committed effects.
5. **B** — An acyclic precedence graph proves conflict serializability.
6. **B** — Cascadeless schedules read committed values only.
7. **B** — B+ tree leaves support ordered range traversal.
8. **C** — A left join preserves every left row.
9. **B** — `COUNT(column)` counts non-null expressions.
10. **C** — `DROP` removes the object definition.
11. **A** — Shared locks are compatible with other shared locks.
12. **B** — A wait-for cycle represents deadlock.
13. **B** — MVCC maintains row versions.
14. **B** — `UNION ALL` retains duplicates.
15. **B** — A junction table represents a many-to-many relation.
16. **B** — Parameters separate values from query structure.
17. **B** — Horizontal partitioning divides rows.
18. **A** — Hashing naturally supports equality lookup.
19. **A** — A phantom changes rows matching a predicate.
20. **C** — `COMMIT` accepts transaction changes.

</details>

---

## 27. SQL Coding Problems

Assume tables `Employee(employee_id, name, salary, department_id, manager_id)`, `Department(department_id, name)`, and `Orders(order_id, customer_id, order_date, amount)`.

### 1. Second-Highest Distinct Salary

```sql
SELECT MAX(salary) AS second_highest_salary
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee);
```

This returns null when no second distinct salary exists.

### 2. Nth-Highest Distinct Salary

```SQL
WITH RankedSalary AS (
    SELECT salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank
    FROM Employee
)
SELECT DISTINCT salary
FROM RankedSalary
WHERE salary_rank = :n;
```

`DENSE_RANK` assigns the same rank to equal salaries without gaps.

### 3. Employees Above Their Department Average

```sql
SELECT e.employee_id, e.name, e.salary
FROM Employee AS e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM Employee AS e2
    WHERE e2.department_id = e.department_id
);
```

The correlated subquery calculates the relevant department average for each employee.

### 4. Highest-Paid Employee in Each Department

```sql
WITH RankedEmployee AS (
    SELECT e.*,
           DENSE_RANK() OVER (
               PARTITION BY department_id
               ORDER BY salary DESC
           ) AS salary_rank
    FROM Employee AS e
)
SELECT employee_id, name, salary, department_id
FROM RankedEmployee
WHERE salary_rank = 1;
```

Using `DENSE_RANK` returns every employee tied for highest salary.

### 5. Customers Without Orders

```sql
SELECT c.customer_id, c.name
FROM Customer AS c
WHERE NOT EXISTS (
    SELECT 1
    FROM Orders AS o
    WHERE o.customer_id = c.customer_id
);
```

`NOT EXISTS` avoids the null-related surprises possible with `NOT IN`.

### 6. Detect Duplicate Emails

```sql
SELECT email, COUNT(*) AS occurrences
FROM AppUser
GROUP BY email
HAVING COUNT(*) > 1;
```

Prevent future duplicates with a unique constraint after cleaning existing data.

### 7. Running Order Total Per Customer

```sql
SELECT customer_id,
       order_id,
       order_date,
       amount,
       SUM(amount) OVER (
           PARTITION BY customer_id
           ORDER BY order_date, order_id
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS running_total
FROM Orders;
```

The explicit row frame makes accumulation semantics clear when ordering values tie.

### 8. Employee and Manager Names

```sql
SELECT e.name AS employee_name,
       m.name AS manager_name
FROM Employee AS e
LEFT JOIN Employee AS m
  ON m.employee_id = e.manager_id;
```

This self join keeps top-level employees whose manager is null.

### 9. Department Employee Counts Including Empty Departments

```sql
SELECT d.department_id,
       d.name,
       COUNT(e.employee_id) AS employee_count
FROM Department AS d
LEFT JOIN Employee AS e
  ON e.department_id = d.department_id
GROUP BY d.department_id, d.name;
```

Count a non-null employee column rather than `COUNT(*)` to return zero for empty departments.

### 10. Transaction-Safe Transfer

```sql
BEGIN;

UPDATE Account
SET balance = balance - :amount
WHERE account_id = :from_id
  AND balance >= :amount;

-- Application verifies exactly one source row was updated.

UPDATE Account
SET balance = balance + :amount
WHERE account_id = :to_id;

COMMIT;
```

Production code must validate both affected-row counts, roll back on failure, and use an isolation/locking strategy appropriate to concurrent transfers.

### Additional Practice

1. Find employees earning more than their managers.
2. Return the top three salaries in every department.
3. Find customers who ordered on three consecutive dates.
4. Calculate monthly revenue growth using `LAG`.
5. Delete duplicate rows while retaining the lowest ID.
6. Traverse an employee hierarchy with a recursive CTE.
7. Find products never ordered.
8. Produce a seven-day moving average.

---

## 28. Common Mistakes and Interview Tips

### Conceptual Mistakes

- Treating DBMS and RDBMS as identical terms.
- Saying a primary key is always physically clustered.
- Confusing candidate keys with arbitrary super keys.
- Claiming `NULL` equals zero or an empty string.
- Saying 3NF and BCNF are always identical.
- Confusing ACID consistency with CAP consistency.
- Assuming MVCC eliminates all locks.
- Treating every concurrent schedule as incorrect.
- Confusing deadlock with starvation.
- Claiming `TRUNCATE` has universal rollback behavior.
- Assuming an index always makes a query faster.
- Calling every non-relational database schema-less.

### SQL Mistakes

- Using `= NULL` instead of `IS NULL`.
- Filtering a right table in `WHERE` after a left join without considering lost unmatched rows.
- Using `NOT IN` when the subquery may contain null.
- Selecting non-grouped, non-aggregated columns without valid functional support.
- Using `COUNT(*)` when counting matched rows from an outer join.
- Forgetting tie behavior when choosing `ROW_NUMBER`, `RANK`, or `DENSE_RANK`.
- Running `UPDATE` or `DELETE` without first verifying its predicate.
- Building SQL through string concatenation.
- Omitting a deterministic `ORDER BY` when row order matters.
- Using binary floating point for exact currency calculations.

### Design Mistakes

- Storing comma-separated lists in one relational column.
- Adding indexes to every column without workload evidence.
- Omitting unique constraints because the application checks duplicates.
- Keeping transactions open during user interaction or slow network calls.
- Choosing mutable business values as primary keys without considering change.
- Denormalizing before measuring a performance problem.
- Storing derived values without a consistency strategy.
- Depending on backups that have never been restored in a test.

### Interview Tips

- Define the term in one line before explaining its purpose and example.
- State when behavior is product-specific rather than presenting it as universal SQL.
- Draw dependencies before attempting a normalization answer.
- Build a precedence graph for serializability instead of guessing.
- Discuss nulls and ties in SQL answers.
- Explain index selectivity and write cost, not only faster reads.
- Mention constraints, transactions, security, and recovery in design rounds.
- Prefer a correct simple query before presenting an optimized variation.

---

## 29. Rapid-Revision Cheat Sheet

### Core Comparisons

| Topic                       | Quick Difference                                                |
| --------------------------- | --------------------------------------------------------------- |
| DBMS vs. RDBMS              | General database manager vs. relational implementation          |
| Schema vs. instance         | Structure vs. current data                                      |
| Super vs. candidate key     | Unique attribute set vs. minimal unique set                     |
| Primary vs. foreign key     | Row identity vs. reference to another key                       |
| `WHERE` vs. `HAVING`    | Filter rows vs. filter groups                                   |
| `UNION` vs. `UNION ALL` | Remove vs. preserve duplicates                                  |
| Inner vs. left join         | Matches only vs. preserve all left rows                         |
| View vs. materialized view  | Stored query vs. stored query result                            |
| 3NF vs. BCNF                | Allows prime RHS exception vs. every determinant is a super key |
| Recoverable vs. strict      | Safe commit order vs. no access to uncommitted writes           |
| Replication vs. sharding    | Copy data vs. divide data                                       |
| Clustered vs. non-clustered | Base-row organization vs. separate access path                  |

### Normal Forms

- **1NF:** Atomic values for the chosen relational design.
- **2NF:** No partial dependency of non-prime attributes on a candidate key.
- **3NF:** No improper transitive dependency; formal prime-attribute exception applies.
- **BCNF:** Every non-trivial determinant is a super key.
- **4NF:** No improper multivalued dependency.
- **5NF:** No improper join dependency.

### ACID

- **A:** All or nothing.
- **C:** Declared rules remain valid.
- **I:** Concurrent interference is controlled.
- **D:** Committed work survives covered failures.

### Isolation Anomalies

- **Dirty read:** Read uncommitted data.
- **Non-repeatable read:** Same row changes between reads.
- **Phantom:** Matching row set changes between predicate reads.
- **Lost update:** One write overwrites another.
- **Write skew:** Separate writes jointly violate a read invariant.

### Index Selection

- B+ tree supports equality, ordering, and ranges.
- Hash naturally favors equality lookup.
- Composite-index order affects useful leading prefixes.
- Covering indexes can avoid base-table access.
- Every index adds storage and write maintenance.

### One-Line SQL Order

```text
FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT
```

### Thirty-Second Interview Answer

> A DBMS manages structured data through schemas, constraints, queries, transactions, concurrency control, recovery, security, and physical access paths. Relational design uses keys and dependencies to preserve integrity, SQL to manipulate data, ACID and isolation to coordinate work, logs to recover failures, and indexes plus optimization to execute queries efficiently.

### Final Checklist

- Can I identify every common key and constraint?
- Can I map an ER model to relations?
- Can I write joins, subqueries, CTEs, and window queries?
- Can I normalize a relation through 3NF or BCNF?
- Can I calculate attribute closure and candidate keys?
- Can I test conflict serializability with a graph?
- Can I explain ACID, isolation anomalies, and deadlocks?
- Can I compare B+ tree, hash, and composite indexes?
- Can I distinguish replication, sharding, SQL, and NoSQL?
- Can I explain security, backup, and recovery choices?

**Recommended revision order:** keys and SQL → joins → normalization → transactions → serializability → indexing → distributed databases → interview practice.

### More Resources

- [Database System Concepts](https://www.db-book.com/) by Silberschatz, Korth, and Sudarshan
- [SQL Practice Problems](https://sqlzoo.net/wiki/SQL_Tutorial) on SQLZoo
- [LeetCode Database Problems](https://leetcode.com/tag/database/)
