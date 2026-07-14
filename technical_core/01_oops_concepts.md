# Object-Oriented Programming (OOP) — Master Notes

> A beginner-to-advanced handbook for aptitude tests, technical interviews, coding rounds, and quick revision.

Object-oriented programming organizes software around objects that combine state and behavior. OOP is not simply “writing classes,” and not every value is an object in every language. Its purpose is to model responsibilities, protect invariants, reduce coupling, and make software easier to change.

Most examples use Java-like syntax because it is common in interviews. Language-specific differences are noted where they matter.

---

## Table of Contents

1. [The Building Blocks](#1-the-building-blocks)
2. [The 4 Pillars of OOP](#2-the-4-pillars-of-oop)
3. [Deep Dive Concepts](#3-deep-dive-concepts)
4. [Object Relationships](#4-object-relationships)
5. [S.O.L.I.D Principles](#5-solid-principles)
6. [Interview FAQ &amp; Coding Scenarios](#6-interview-faq--coding-scenarios)
7. [Mock Test MCQs](#7-mock-test-mcqs)
8. [Quick Revision Cheat Sheet](#8-quick-revision-cheat-sheet)
9. [Advanced OOP Concepts](#9-advanced-oop-concepts)
10. [Language-Specific Notes](#10-language-specific-notes)
11. [Expanded Interview Questions](#11-expanded-interview-questions)
12. [Additional MCQ Practice](#12-additional-mcq-practice)
13. [Coding Interview Problems](#13-coding-interview-problems)
14. [Common Mistakes and Interview Tips](#14-common-mistakes-and-interview-tips)
15. [Final Rapid-Revision Sheet](#15-final-rapid-revision-sheet)

---

## 1. The Building Blocks

### Classes & Objects

* **Class:** Defines the structure and behavior of its instances. Loaded metadata, static fields, and method code may also consume runtime memory.
* **Object:** A runtime instance that normally has identity, state, and behavior.

### State, Behavior, Identity, and Invariants

* **State:** Data currently held by an object.
* **Behavior:** Operations the object can perform.
* **Identity:** What distinguishes one object from another, even if their values match.
* **Invariant:** A rule that must always remain true for a valid object.

Java `==` compares object references, while `equals()` represents logical equality when implemented correctly. Python `is` checks identity and `==` checks equality.

An **immutable object** cannot change its observable state after construction. A well-designed immutable class validates construction, exposes no mutators, avoids leaking mutable internals, and prevents subclasses from weakening immutability.

### Constructors & Destructors

* **Constructor:** Establishes a valid initial state. Java constructors use the class name and have no return type; syntax differs across languages. Constructors can be overloaded but cannot be overridden.
* **Destructor:** A cleanup operation tied to object destruction, notably `~ClassName()` in C++. Garbage collection reclaims managed memory but does not guarantee timely resource cleanup.

Common forms include no-argument, parameterized, copy, and private constructors. Java `this(...)` delegates to another constructor in the same class; `super(...)` calls a parent constructor. Avoid heavy I/O and overridable method calls during construction.

Use deterministic cleanup for resources: C++ RAII, Java `try-with-resources`, C# `using`, and Python context managers (`with`).

### Access Modifiers

Control the visibility of class members (variables and methods).

* **Public:** Accessible wherever the declaring type is accessible.
* **Protected:** Accessible through inheritance; package/module rules vary by language.
* **Private:** Accessible within the declaring type, subject to language-specific rules.
* **Package-private/default (Java):** Accessible in the same package.
* **Internal (C#):** Accessible in the same assembly.

Use the narrowest visibility that satisfies the requirement—the **principle of least privilege**.

---

## 2. The 4 Pillars of OOP

### I. Encapsulation (Data Hiding)

Wrapping data (variables) and code (methods) together as a single unit. It prevents external code from modifying internal data directly.

* **Real-world analogy:** A medical capsule. The chemical components (data) are hidden safely inside the shell.
* **Implementation:** Keep state private and expose operations that preserve rules. Automatic getters and setters alone do not guarantee good encapsulation.

### II. Abstraction (Implementation Hiding)

Hiding the complex implementation details and showing only the essential features to the user.

* **Real-world analogy:** Driving a car. You press the accelerator to go fast, but you don't need to understand the internal combustion engine to do so.
* **Implementation:** Abstract classes and Interfaces.

### III. Inheritance (Code Reusability)

A mechanism where a new class (Child/Derived) inherits the properties and behaviors of an existing class (Parent/Base).

* **Types:** Single, Multilevel, Hierarchical, Multiple (Not supported in Java via classes to avoid the Diamond Problem).
* **The Diamond Problem:** Occurs in Multiple Inheritance when a class inherits from two parents that both share a common grandparent, causing ambiguity in which inherited methods to use.

### IV. Polymorphism (Many Forms)

The ability of a variable, function, or object to take on multiple forms.

* **Compile-time (Static):** Method Overloading, Operator Overloading.
* **Run-time (Dynamic):** Method Overriding (using Virtual functions / Interfaces).

```Java
abstract class Shape { 
    abstract double area();
}                                                 // Abstraction

class Circle extends Shape {                     // Inheritance
    private final double radius;                  // Encapsulation
    Circle(double radius) { 
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

Shape shape = new Circle(2);
System.out.println(shape.area());                 // Runtime polymorphism
```

---

## 3. Deep Dive Concepts

### Method Overloading vs. Method Overriding (High Frequency)

| Feature               | Overloading (Compile-time)                              | Overriding (Run-time)                               |
| :-------------------- | :------------------------------------------------------ | :-------------------------------------------------- |
| **Location**    | Happens in the*same* class.                           | Happens in*Parent and Child* classes.             |
| **Signature**   | Methods have the same name but*different parameters*. | Methods have the exact*same name and parameters*. |
| **Return Type** | Can be different.                                       | Must be the same (or covariant).                    |

Changing only the return type does **not** create a valid overload in Java, C++, or C#. Java static methods may be overloaded, but a same-signature child static method **hides** rather than dynamically overrides the parent method. Private and final Java methods cannot be overridden.

### Important Keywords

* **`this`:** A reference variable that refers to the *current* object. Used to resolve ambiguity between instance variables and parameters.
* **`super`:** A reference variable used to refer to the immediate *parent* class object. Used to invoke parent class constructors or overridden methods.
* **`static`:** Belongs to the *class* rather than the object. Shared across all instances. (e.g., a counter for how many objects were created).
* **`final` / `const`:** These are language-specific. A Java final variable is assigned once, a final method cannot be overridden, and a final class cannot be extended. A final reference does not make its object immutable.

### Abstract Class vs Interface

* **Abstract Class:** Can have both implemented methods and abstract (empty) methods. A class can extend only ONE abstract class.
* **Interface:** A capability or contract. Modern Java interfaces may contain abstract, default, static, and private methods plus constants. A class can implement multiple interfaces.

| Feature              | Interface                    | Abstract Class               |
| -------------------- | ---------------------------- | ---------------------------- |
| Best use             | Capability/consumer contract | Shared family abstraction    |
| Java instance state  | No ordinary instance fields  | Supported                    |
| Constructor          | No                           | Yes                          |
| Multiple use in Java | Implement several            | Extend one class             |
| Coupling             | Usually lower                | Stronger family relationship |

Use an interface when implementations may be unrelated but share a role. Use an abstract class when related implementations share meaningful state, invariants, or template behavior.

---

## 4. Object Relationships

Understanding how objects interact is crucial for System Design rounds.

1. **Association:** A general relationship between two independent objects. (e.g., `Teacher` and `Student`). Both can exist without each other.
2. **Aggregation (Has-A Relationship | Weak):** A specialized association where one object "owns" another, but the child can still exist independently.
   * *Example:* `Department` and `Professor`. If the department closes, the professor still exists.
3. **Composition (Part-Of Relationship | Strong):** A highly restrictive relationship. The child *cannot* exist without the parent.
   * *Example:* `House` and `Room`. If the house is destroyed, the room ceases to exist.

---

## 5. S.O.L.I.D Principles

(Pro-Level: Mention these in interviews to instantly stand out).

* **S - Single Responsibility Principle:** A class should have one, and only one, reason to change (it should do only one job).
* **O - Open/Closed Principle:** Software entities should be open for extension, but closed for modification.
* **L - Liskov Substitution Principle:** Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.
* **I - Interface Segregation Principle:** Don't force a class to implement interfaces they do not use. Split large interfaces into smaller, specific ones.
* **D - Dependency Inversion Principle:** High-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces).

### SOLID Interview Detail

* **SRP** means one cohesive reason or actor for change—not one method per class.
* **OCP** often replaces growing conditionals with polymorphic strategies, but speculative abstraction can violate KISS and YAGNI.
* **LSP** forbids subtypes from strengthening preconditions, weakening postconditions, breaking invariants, or introducing surprising unsupported behavior.
* **ISP** prefers focused capabilities such as `Printable` and `Scannable` over one oversized interface.
* **DIP** is a dependency-direction principle. **Dependency injection** is one implementation technique; an IoC container is optional.

### Composition Over Inheritance

Use inheritance only for a genuine, substitutable **is-a** relationship with a stable parent contract. Prefer composition when behaviors vary independently or reuse is the main goal. Inheritance strongly couples a child to its base class.

---

## 6. Interview FAQ & Coding Scenarios

**Q1: Can we overload or override a static method?**

> We *can* overload static methods (same name, different parameters). However, we *cannot* override static methods. If a child class defines a static method with the same signature as the parent, it hides the parent's method (Method Hiding), but it does not override it for dynamic polymorphism.

**Q2: Why doesn't Java support multiple inheritance?**

> To prevent the "Diamond Problem." If Class C inherits from Class A and Class B, and both A and B have a method `print()`, the compiler won't know which `print()` Class C should inherit.

**Q3: System Design Scenario - Design a Parking Lot.**

> *Interviewer wants to see your class structures.*
>
> * `ParkingLot` (Singleton class) -> Composed of `Levels`.
> * `Level` -> Aggregates `ParkingSpots`.
> * `ParkingSpot` (Abstract) -> Extended by `CompactSpot`, `LargeSpot`, `MotorcycleSpot`.
> * `Vehicle` (Abstract) -> Extended by `Car`, `Truck`, `Bike`.

---

## 7. Mock Test MCQs

**Q1. Which of the following principles hides the complexity of a system and only displays the essential features?**
A) Encapsulation
B) Polymorphism
C) Abstraction
D) Inheritance

> **Answer: C)** Abstraction. (Encapsulation hides the *data*, Abstraction hides the *implementation/complexity*).

**Q2. Which relationship represents a "Strong Has-A" where the child object's lifecycle is strictly tied to the parent?**
A) Association
B) Aggregation
C) Composition
D) Inheritance

> **Answer: C)** Composition.

**Q3. If a class contains at least one abstract method, what must the class be declared as?**
A) Final
B) Static
C) Abstract
D) Protected

> **Answer: C)** Abstract.

**Q4. What is the output of implementing Run-time Polymorphism?**
A) Method Overloading
B) Method Overriding
C) Constructor Overloading
D) Variable Hiding

> **Answer: B)** Method Overriding.

**Q5. Which SOLID principle states that "Clients should not be forced to depend upon interfaces that they do not use"?**
A) Single Responsibility
B) Open/Closed
C) Liskov Substitution
D) Interface Segregation

> **Answer: D)** Interface Segregation Principle.

---

## 8. Quick Revision Cheat Sheet

* **Data Security?** -> Encapsulation
* **Hiding Complexity?** -> Abstraction
* **Code Reusability?** -> Inheritance
* **Dynamic Behavior?** -> Polymorphism
* **Same function name, different params?** -> Overloading (Compile-time)
* **Same function name, same params in child?** -> Overriding (Run-time)
* **Memory location?** -> Avoid universal stack/heap claims; languages, runtimes, escape analysis, and optimizers differ.

---

## 9. Advanced OOP Concepts

### Upcasting and Downcasting

```java
Animal animal = new Dog(); // Safe implicit upcast
Dog dog = (Dog) animal;    // Explicit and potentially unsafe downcast
```

Prefer polymorphic behavior over repeated type checks and downcasts.

### Dynamic Dispatch

For an overridden instance method, the runtime object type chooses the implementation. Java fields and static methods do not use the same dynamic-dispatch rule.

### Shallow and Deep Copy

* **Shallow copy:** Copies top-level fields while referenced nested objects remain shared.
* **Deep copy:** Recursively copies owned mutable objects.

Deep copying everything may be expensive or semantically wrong. Prefer explicit ownership and immutable value objects.

### Entity vs. Value Object

* **Entity:** Defined by stable identity, such as an order with an ID.
* **Value object:** Defined by its values, such as `Money(100, INR)`; usually immutable.

### Tell, Don't Ask

Ask an object to perform behavior instead of extracting its data and changing it elsewhere.

```java
// Weak: another class owns Account's rule
if (account.getBalance() >= amount) {
    account.setBalance(account.getBalance() - amount);
}

// Better: Account protects its rule
account.withdraw(amount);
```

### Law of Demeter

Communicate with close collaborators instead of navigating long chains. `order.getCustomer().getAddress().getCity()` exposes internal structure and increases coupling.

### Dependency Injection

```java
class CheckoutService {
    private final PaymentGateway gateway;

    CheckoutService(PaymentGateway gateway) {
        this.gateway = gateway;
    }
}
```

Constructor injection makes required dependencies visible and replaceable during testing.

### Equality and Hashing

For Java:

* Equal objects must have equal hash codes.
* `equals()` should be reflexive, symmetric, transitive, consistent, and false for `null`.
* Hash-collection keys should not mutate in a way that changes equality or hashing.

### Generics and Polymorphism

Generics provide type-safe reuse without forcing unrelated types into one inheritance tree. Java generics are invariant by default: `List<Dog>` is not a subtype of `List<Animal>`. Wildcards express safe variance.

### Object Slicing and Method Resolution

* **C++ object slicing:** Copying a derived object into a base object by value may discard the derived part.
* **Python MRO:** C3 Method Resolution Order defines how multiple base classes are searched. Cooperative classes should use `super()` consistently.

### Cohesion and Coupling

* **High cohesion:** A class contains focused, related responsibilities.
* **Low coupling:** A class knows as little as practical about concrete implementations.

Good design aims for low—not zero—coupling.

---

## 10. Language-Specific Notes

### Java

* Single class inheritance and multiple interface implementation.
* Eligible instance methods use dynamic dispatch by default.
* Garbage collection manages memory, not deterministic resource cleanup.
* Records help create data carriers, but referenced objects may remain mutable.
* Implement `equals()` and `hashCode()` consistently.

### C++

* Supports multiple class inheritance.
* Runtime polymorphism requires virtual functions.
* A polymorphic base deleted through a base pointer normally needs a virtual destructor.
* RAII ties resource lifetime to object lifetime.
* Copy/move operations matter for resource owners; prefer the Rule of Zero.

### Python

* Uses dynamic typing and duck typing.
* Supports multiple inheritance with C3 MRO.
* `__new__` creates an instance; `__init__` initializes it.
* `__name` causes name mangling, not absolute privacy.
* `abc`, `typing.Protocol`, properties, class methods, and dataclasses support OOP designs.

### C#

* Single class inheritance and multiple interfaces.
* Overridable methods use `virtual` or `abstract`; implementations use `override`.
* Properties provide controlled field-like access.
* Records support value-oriented models.
* `IDisposable` and `using` provide deterministic cleanup.
* `sealed` prevents inheritance or further overriding.

### JavaScript and TypeScript

* JavaScript is prototype-based; `class` is syntax over prototypes.
* JavaScript private fields use `#field`.
* TypeScript interfaces are structurally typed and erased at runtime.
* Composition with plain objects and functions is often preferable to deep class hierarchies.

---

## 11. Expanded Interview Questions

### Q1. Is everything an object?

Not universally. Python values and classes are objects. Java has primitive values that are not objects, though wrapper types exist. Always state the language context.

### Q2. Does a class consume memory?

“A class consumes no memory” is too absolute. Instances consume per-object memory, while loaded metadata, static fields, method code, and runtime structures also occupy memory.

### Q3. Can constructors be inherited or overridden?

Constructors are not ordinary dynamically dispatched methods and cannot be overridden. Some languages can expose or forward base constructors, but that is not runtime overriding.

### Q4. Can constructors be overloaded?

Yes in Java, C++, and C# when parameter lists differ. Python commonly uses defaults or alternative class methods rather than signature-based constructor overloading.

### Q5. Why can inheritance be harmful?

It tightly couples children to base behavior, may expose fragile protected state, and can model invalid is-a relationships. Composition often varies behavior with less coupling.

### Q6. What is the fragile base-class problem?

A seemingly safe base-class change unexpectedly breaks subclasses that rely on its internal behavior. Small stable contracts and composition reduce this risk.

### Q7. What is Liskov substitution in practical terms?

A subtype must preserve its parent's promises. A read-only file should not subtype a contract promising `write()` and then throw “unsupported.”

### Q8. What happens if a constructor calls an overridable method?

Dynamic dispatch may reach child code before child fields are initialized. Avoid calling overridable methods during construction.

### Q9. What is a marker interface?

An interface with no methods that conveys semantic metadata, historically exemplified by Java `Serializable`. An annotation is often clearer when no polymorphic contract is required.

### Q10. Is Singleton an OOP principle?

No. It is a creational pattern that restricts instance count. It can introduce global state and testing difficulties, so use it only for genuine single-instance semantics.

### Q11. Object vs. reference?

An object is the runtime entity; a reference is a value used to access it. Several references may point to one object, and a reference may be null where the language permits it.

### Q12. Compile-time vs. runtime polymorphism?

Overloading is commonly resolved at compile time using declared types and arguments. Overriding is resolved at runtime from the actual receiver when dynamic dispatch applies.

### Q13. Abstraction vs. encapsulation?

Abstraction presents a simplified, relevant contract. Encapsulation protects state, rules, and implementation boundaries.

### Q14. Interface vs. abstract class?

Use an interface for a role across potentially unrelated implementations. Use an abstract class for a related family sharing state, invariants, or template behavior.

### Q15. What is good OOP design in one sentence?

Place behavior with the state and rules it governs, expose small meaningful contracts, and make dependencies and ownership explicit.

---

## 12. Additional MCQ Practice

Try these before opening the answer key.

**1. What is required for Java method overloading?**
A. Different return only  B. Different access only  C. Different parameters  D. A child class

**2. For `Animal a = new Dog()`, what selects an overridden `speak()`?**
A. Declared type only  B. Runtime type  C. Return type  D. Package

**3. A Java final reference means:**
A. Object is immutable  B. Reference cannot be reassigned  C. Object is destroyed  D. Member is static

**4. A child Java static method with the parent's signature is:**
A. Overriding  B. Chaining  C. Hiding  D. Casting

**5. What best decouples checkout from payment providers?**
A. Construct provider internally  B. Inherit from provider  C. Inject provider interface  D. Use global state

**6. Modern Java interfaces can contain:**
A. Abstract methods only  B. Default and static methods  C. Constructors  D. Instance fields

**7. Which is potentially unsafe?**
A. Dog-to-Animal upcast  B. Interface call  C. Arbitrary Animal-to-Dog downcast  D. Immutable object

**8. If Java objects are equal under `equals()`, they must:**
A. Be identical references  B. Have equal hash codes  C. Be immutable  D. Have public fields

**9. A shallow copy normally shares:**
A. Top-level identity  B. Nested object references  C. Source variable  D. All primitive addresses

**10. Best reason for inheritance:**
A. Similar method  B. Substitutable is-a relationship  C. Fewer lines  D. Avoiding one field

**11. Garbage collection:**
A. Immediately closes files  B. Removes resource management  C. Reclaims unreachable managed memory nondeterministically  D. Equals C++ destruction

**12. Which pattern encapsulates interchangeable algorithms?**
A. Strategy  B. Singleton  C. Observer  D. Builder

**13. Why avoid overridable calls in constructors?**
A. Constructors are static  B. Subclass state may be uninitialized  C. Overrides are private  D. Multiple inheritance

**14. Dependency injection means:**
A. Replacing polymorphism  B. Supplying dependencies externally  C. Copying parent fields  D. Making dependencies static

**15. Which SOLID principle favors client-focused interfaces?**
A. SRP  B. ISP  C. DIP  D. LSP

<details>
<summary><strong>Answer key and explanations</strong></summary>

1. **C:** Return type alone cannot distinguish an overload.
2. **B:** Dynamic dispatch uses the runtime type.
3. **B:** The reference cannot be reassigned; its object may remain mutable.
4. **C:** Java static methods are hidden, not dynamically overridden.
5. **C:** Injecting a contract separates policy from provider detail.
6. **B:** Modern Java interfaces support default and static methods.
7. **C:** The object may not actually be a `Dog`.
8. **B:** Equal objects must have equal hash codes.
9. **B:** Nested references are copied, not their objects.
10. **B:** Inheritance requires a valid subtype contract.
11. **C:** Resource cleanup still needs deterministic mechanisms.
12. **A:** Strategy makes algorithms replaceable.
13. **B:** Child construction may not be complete.
14. **B:** Dependencies arrive through constructors, methods, or properties.
15. **B:** ISP prevents clients from depending on irrelevant operations.

</details>

---

## 13. Coding Interview Problems

### 1. Parking Lot

Clarify vehicle types, spot types, floors, tickets, pricing, and concurrency.

```text
ParkingLot
 ├── List<Level>
 ├── PricingStrategy
 └── TicketRepository

Level ──composes──> ParkingSpot
ParkingSpot <|── CompactSpot, LargeSpot, MotorcycleSpot
Vehicle     <|── Car, Truck, Motorcycle
```

Use `canFit(Vehicle)` instead of scattered type checks, inject pricing as a Strategy, and keep occupancy updates atomic. Do not force Singleton without a requirement.

### 2. Extensible Notification Service

Define `NotificationChannel.send(Message, Recipient)`, implement email and SMS, and inject a channel registry. Add retries and logging through decorators.

**Tests:** interfaces, OCP, DIP, Strategy, Decorator, and failure boundaries.

### 3. Library Management System

Separate `Book` bibliographic information from each `BookCopy` identity and lending state. Add `Member`, `Loan`, `Catalog`, and `LoanPolicy`.

**Tests:** entities, value objects, composition, invariants, and SRP.

### 4. Immutable Money Type

Implement `Money(amount, currency)` with validation, value equality, addition only for matching currencies, no setters, and a deliberate decimal/rounding policy.

**Tests:** immutability, equality/hash contract, and domain modeling.

### 5. Shape Area Calculator

Avoid a central type switch. Give each shape an `area()` behavior. Discuss Visitor only if the stability of operations versus shape types justifies it.

**Tests:** polymorphism, OCP, and avoiding downcasts.

### 6. Board Game Model

Model `Board`, `Position`, `Move`, `Piece`, and movement policies. Separate validation from UI and persistence. Compare subclass-based movement with composed rule strategies.

### 7. Rate Limiter

Define a `RateLimiter` contract with fixed-window and token-bucket strategies. Inject a clock abstraction for deterministic tests.

**Tests:** Strategy, DIP, concurrency, and test design.

### 8. Refactor Payment Conditionals

Replace checkout conditionals for card, UPI, wallet, and cash with polymorphic payment methods while preserving failure reporting and transaction boundaries.

### Design-Round Answer Framework

1. Clarify use cases and constraints.
2. Identify entities, value objects, and services.
3. Assign responsibilities and invariants.
4. Define relationships and lifecycle ownership.
5. Add abstractions only at genuine variation points.
6. Walk through one important scenario.
7. Discuss errors, concurrency, persistence, and testing.
8. State trade-offs rather than claiming one perfect design.

---

## 14. Common Mistakes and Interview Tips

### Conceptual Mistakes

* Saying “everything is an object” without naming the language.
* Saying a class never consumes memory.
* Treating encapsulation as automatic getters and setters.
* Confusing abstraction with data hiding.
* Using inheritance only for code reuse.
* Claiming modern Java interfaces contain only abstract methods.
* Saying Java static methods are overridden.
* Saying constructors are inherited or overridden.
* Assuming `final` makes an object immutable.
* Assuming garbage collection immediately closes resources.
* Treating protected visibility as identical across languages.
* Making universal stack/heap claims.
* Naming a design pattern before understanding the requirement.

### Coding Mistakes

* Exposing mutable collections directly.
* Validating only in the UI.
* Implementing `equals()` without compatible `hashCode()`.
* Repeated downcasting instead of polymorphism.
* Keeping business rules in controllers or UI classes.
* Constructing dependencies internally and harming tests.
* Using mutable global/static state.
* Calling overridable methods from constructors.
* Letting subclasses weaken parent invariants.

### Interview Tips

* Give a definition, purpose, and small example.
* State the language for rules that vary.
* Explain why an abstraction helps its consumer.
* Discuss composition before inheritance.
* Identify invalid states and invariants.
* Use SOLID to diagnose a concrete problem, not as buzzwords.
* State trade-offs: flexibility adds indirection and complexity.

---

## 15. Final Rapid-Revision Sheet

### Four Pillars

| Need                         | Principle     | Memory Hook              |
| ---------------------------- | ------------- | ------------------------ |
| Protect state and rules      | Encapsulation | Guard the inside         |
| Show essential capabilities  | Abstraction   | Hide irrelevant detail   |
| Model valid subtype families | Inheritance   | Is-a and substitutable   |
| Swap implementations         | Polymorphism  | One contract, many forms |

### High-Frequency Comparisons

| Topic                         | Key Distinction                                     |
| ----------------------------- | --------------------------------------------------- |
| Overloading vs. overriding    | Different parameters vs. subtype replacement        |
| Interface vs. abstract class  | Capability contract vs. shared family base          |
| Aggregation vs. composition   | Independent part vs. lifecycle-owned part           |
| Java`==` vs. `equals()`   | Reference identity vs. logical equality             |
| Shallow vs. deep copy         | Shared nested references vs. copied owned graph     |
| Static vs. instance           | Class-level vs. object-level                        |
| Encapsulation vs. abstraction | Protect rules vs. simplify view                     |
| DIP vs. DI                    | Design principle vs. dependency-supplying technique |

### SOLID in One Line

* **S:** Group behavior that changes for one responsibility.
* **O:** Extend stable behavior without repeatedly editing it.
* **L:** Subtypes preserve the parent contract.
* **I:** Expose focused interfaces for actual clients.
* **D:** Policy does not depend directly on volatile detail.

### Thirty-Second Interview Answer

> OOP models software as objects with state, behavior, and clear responsibilities. Encapsulation protects invariants, abstraction exposes useful contracts, inheritance models valid subtype relationships, and polymorphism lets implementations vary behind those contracts. Good OOP favors high cohesion, low coupling, explicit ownership, and composition when inheritance would create unnecessary rigidity.

### Final Checklist

* Can I explain all four pillars with examples?
* Can I compare overloading and overriding?
* Can I choose between an interface and an abstract class?
* Can I distinguish association, aggregation, and composition?
* Can I explain each SOLID principle with a violation and improvement?
* Can I identify language-specific exceptions?
* Can I model a small system and justify its relationships?
* Can I identify invariants and keep objects valid?

**Recommended revision order:** four pillars → overloading/overriding → interfaces/abstract classes → relationships → SOLID → language-specific rules → design exercises.
