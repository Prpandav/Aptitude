# Software Engineering and SDLC - Master Notes

> Simple notes for aptitude tests, technical interviews, project work, and quick revision.

Software engineering is a planned way to build, test, deliver, and maintain useful software.

---

## Table of Contents

1. [Software Engineering Basics](#1-software-engineering-basics)
2. [Software Development Life Cycle](#2-software-development-life-cycle)
3. [Feasibility Study](#3-feasibility-study)
4. [Requirements Engineering](#4-requirements-engineering)
5. [SDLC Models](#5-sdlc-models)
6. [Agile Development](#6-agile-development)
7. [Scrum](#7-scrum)
8. [Software Design](#8-software-design)
9. [Architecture Basics](#9-architecture-basics)
10. [UML Diagrams](#10-uml-diagrams)
11. [Coding Practices](#11-coding-practices)
12. [Software Testing Basics](#12-software-testing-basics)
13. [Testing Levels and Types](#13-testing-levels-and-types)
14. [Test Design Techniques](#14-test-design-techniques)
15. [Quality Assurance and Quality Control](#15-quality-assurance-and-quality-control)
16. [Version Control](#16-version-control)
17. [CI, CD, and DevOps](#17-ci-cd-and-devops)
18. [Estimation and Planning](#18-estimation-and-planning)
19. [Project Management](#19-project-management)
20. [Risk Management](#20-risk-management)
21. [Software Maintenance](#21-software-maintenance)
22. [Configuration and Change Management](#22-configuration-and-change-management)
23. [Software Metrics](#23-software-metrics)
24. [Secure Software Development](#24-secure-software-development)
25. [Documentation and Team Work](#25-documentation-and-team-work)
26. [Interview Questions](#26-interview-questions)
27. [MCQ Practice](#27-mcq-practice)
28. [Practical Case Questions](#28-practical-case-questions)
29. [Common Mistakes and Interview Tips](#29-common-mistakes-and-interview-tips)
30. [Rapid-Revision Cheat Sheet](#30-rapid-revision-cheat-sheet)

---

## 1. Software Engineering Basics

### Important Terms

- **Software:** Programs, data, settings, and documents used by a computer system.
- **Software engineering:** A disciplined method for building and maintaining software.
- **Software product:** Software made for users or customers.
- **Software process:** The activities used to create and manage software.
- **Project:** Temporary work done to produce a defined result.
- **Stakeholder:** A person or group affected by the software.
- **Deliverable:** A result given at the end of a task or phase.
- **Constraint:** A limit on cost, time, technology, law, or resources.
- **Quality:** How well software meets needs and expected standards.
- **Defect:** A problem in software or its work product.

### Why Software Engineering Is Needed

- Large software has many connected parts.
- Requirements can change during development.
- Teams need clear communication and shared rules.
- Testing and review reduce expensive failures.
- Planning helps control time, cost, and scope.
- Maintenance often continues for many years.
- Security and privacy must be handled from the start.

### Main Software Qualities

- **Correctness:** Software gives the required result.
- **Reliability:** Software works correctly for the expected time and conditions.
- **Usability:** Users can learn and use it easily.
- **Performance:** It gives acceptable speed and resource use.
- **Maintainability:** Teams can understand and change it safely.
- **Scalability:** It handles growth without unacceptable problems.
- **Security:** It protects data and operations from misuse.
- **Portability:** It can move between supported environments.

### Software Crisis

The software crisis describes projects that become late, costly, unreliable, or difficult to maintain.

Common causes include unclear needs, weak planning, poor design, uncontrolled changes, low testing, and bad communication.

---

## 2. Software Development Life Cycle

SDLC is a structured set of phases used to plan, build, test, release, and maintain software.

```
Planning → Requirements → Design → Development → Testing → Deployment → Maintenance
```

### 1. Planning

The team defines the problem, goals, scope, people, time, cost, and major risks.

### 2. Requirements

The team learns what users need and writes clear functional and quality requirements.

### 3. Design

The team plans architecture, data, interfaces, components, security, and user experience.

### 4. Development

Developers write, review, and integrate code according to the design and standards.

### 5. Testing

The team checks whether the software works correctly and meets requirements.

### 6. Deployment

The tested software is released to a target environment and monitored.

### 7. Maintenance

The team fixes defects, improves features, updates dependencies, and supports users.

### SDLC Benefits

- Gives a clear work structure.
- Helps estimate time and cost.
- Makes roles and outputs visible.
- Supports quality checks at each phase.
- Helps control risks and changes.

SDLC phases may repeat or overlap; they do not always happen once in a straight line.

---

## 3. Feasibility Study

A feasibility study checks whether a proposed project is practical and worth doing.

### TELOS Feasibility

- **Technical:** Can available technology and skills build the system?
- **Economic:** Are expected benefits worth the total cost?
- **Legal:** Does the project follow laws, licenses, contracts, and policies?
- **Operational:** Can users and the organization use and support the system?
- **Schedule:** Can the project finish within the required time?

### Common Outputs

- Problem and goal summary
- Possible solution choices
- Cost and benefit estimate
- Major risks and limits
- Recommended decision
- High-level project plan

A technically possible project may still fail economic, legal, operational, or schedule feasibility.

---

## 4. Requirements Engineering

Requirements engineering finds, studies, writes, checks, and manages software needs.

### Requirement Types

- **Functional requirement:** Describes what the system must do.
- **Non-functional requirement:** Describes quality or limits such as speed, security, or availability.
- **Business requirement:** Explains the business goal or value.
- **User requirement:** Describes what a user needs in simple language.
- **System requirement:** Gives detailed behavior for the complete system.
- **Constraint:** Limits the solution, technology, law, cost, or process.

### Examples

```text
Functional: The user can reset a forgotten password.
Performance: 95% of search requests finish within two seconds.
Security: Account data is visible only to authorized users.
Availability: The service targets 99.9% monthly availability.
```

### Requirement Activities

- **Elicitation:** Collect needs through interviews, workshops, observation, surveys, and prototypes.
- **Analysis:** Remove conflicts, find missing details, and check priority.
- **Specification:** Write requirements in a clear agreed format.
- **Validation:** Confirm that requirements describe the right system.
- **Management:** Track versions, changes, decisions, and links.

### Good Requirement Qualities

- Clear
- Complete enough
- Consistent
- Testable
- Feasible
- Necessary
- Traceable
- Prioritized

Avoid words such as “fast,” “easy,” or “secure” without a measurable meaning.

### SRS

A Software Requirements Specification records agreed functional and non-functional requirements.

Common SRS parts include purpose, scope, users, features, interfaces, constraints, quality needs, and acceptance rules.

### User Story

```text
As a <user>, I want <goal>, so that <value>.
```

A user story should include acceptance criteria that explain when the story is complete.

### Traceability

A requirement traceability matrix links requirements to design, code, tests, and release evidence.

---

## 5. SDLC Models

### Waterfall Model

Waterfall completes major phases in sequence with strong documents and approval points.

**Good for:** Stable needs, regulated work, or fixed contracts.

**Problem:** Late feedback makes requirement changes expensive.

### V-Model

The V-Model connects each development phase with a matching testing activity.

```text
Requirements  ↔ Acceptance Testing
System Design ↔ System Testing
Architecture  ↔ Integration Testing
Module Design ↔ Unit Testing
```

It supports early test planning but can be rigid when needs change often.

### Iterative Model

The team builds the system through repeated versions and improves each version using feedback.

### Incremental Model

The product is delivered in smaller working parts, with each increment adding useful features.

### Spiral Model

Spiral development repeats planning, risk analysis, engineering, and evaluation.

It fits large high-risk work but needs strong risk skills and management.

### Prototype Model

A prototype is an early model used to learn requirements or test an idea.

- **Throwaway prototype:** Built for learning and then removed.
- **Evolutionary prototype:** Improved step by step into the product.

### RAD

Rapid Application Development uses short cycles, tools, reuse, and active user feedback for quick delivery.

### Model Selection

Choose a model from requirement stability, risk, team size, customer access, regulation, technology, and delivery needs.

No one SDLC model is best for every project.

---

## 6. Agile Development

Agile development delivers software in small steps and uses frequent feedback to guide change.

### Agile Values in Simple Words

- People and communication are more important than heavy process alone.
- Working software is more useful than documents without delivery.
- Customer cooperation is better than contract arguments.
- Responding to change is better than following an outdated plan.

The items on the right still have value; Agile gives more attention to the items on the left.

### Agile Principles

- Deliver useful software early and often.
- Welcome valuable requirement changes.
- Work closely with business users.
- Keep teams trusted and supported.
- Prefer direct clear communication.
- Measure progress mainly through working software.
- Maintain a sustainable work pace.
- Improve technical quality continuously.
- Keep solutions simple.
- Review and improve the way of working.

### Agile Terms

- **Iteration:** Short repeated development period.
- **Increment:** Working product improvement delivered by an iteration.
- **Backlog:** Ordered list of desired work.
- **MVP:** Small product version that tests important value and learning.
- **Definition of Done:** Shared quality conditions required before work is complete.
- **Velocity:** Amount of estimated work completed in an iteration; it is a planning aid, not a team-ranking score.

Agile does not mean no planning, no documentation, or no design.

---

## 7. Scrum

Scrum is an Agile framework that uses clear roles, events, and work lists.

### Accountabilities

- **Product Owner:** Maximizes value and orders the product backlog.
- **Scrum Master:** Helps the team use Scrum and remove process problems.
- **Developers:** Build a usable product increment each sprint.

### Scrum Events

- **Sprint:** Fixed period in which the team creates a useful increment.
- **Sprint Planning:** Selects a sprint goal and plans the work.
- **Daily Scrum:** Short daily planning event for developers.
- **Sprint Review:** Shows results and updates future direction with stakeholders.
- **Sprint Retrospective:** Improves team process and working methods.

### Scrum Artifacts

- **Product backlog:** Ordered product work and ideas.
- **Sprint backlog:** Sprint goal, chosen items, and delivery plan.
- **Increment:** Completed product work meeting the Definition of Done.

### Story Points

Story points compare relative effort, complexity, and uncertainty; they are not hours.

### Burndown Chart

A burndown chart shows remaining estimated work over time.

Scrum ceremonies do not fix poor engineering, unclear goals, or weak teamwork by themselves.

---

## 8. Software Design

Software design turns requirements into a clear plan for components, data, behavior, and interfaces.

### Design Levels

- **High-level design:** Defines architecture, main components, data flow, and external systems.
- **Low-level design:** Defines classes, functions, algorithms, data structures, and detailed interactions.

### Core Ideas

- **Abstraction:** Show important behavior and hide unnecessary detail.
- **Modularity:** Divide the system into focused parts.
- **Encapsulation:** Keep state and rules inside clear boundaries.
- **Separation of concerns:** Keep different responsibilities apart.
- **Information hiding:** Hide design decisions likely to change.
- **Cohesion:** Keep related responsibilities together.
- **Coupling:** Measure how strongly modules depend on one another.

Good design aims for high cohesion and low, clear coupling.

### Design Principles

- **KISS:** Keep the solution as simple as practical.
- **DRY:** Avoid repeating the same knowledge in many places.
- **YAGNI:** Do not build features before they are needed.
- **SOLID:** Use responsibility and dependency principles to guide object design.
- **Composition over inheritance:** Combine smaller behaviors when inheritance creates tight coupling.
- **Law of Demeter:** Avoid long chains through another object's internal structure.

### Interface Design

- Keep interfaces small and clear.
- Use meaningful names and consistent rules.
- Return useful errors without exposing secrets.
- Make invalid use difficult.
- Support change through versioning when external users depend on the interface.

### Design Review

A design review checks requirements, risks, security, performance, failure handling, testability, and maintenance before large coding work begins.

---

## 9. Architecture Basics

Software architecture defines the main system parts, their responsibilities, and how they communicate.

### Common Styles

- **Layered architecture:** Groups work into presentation, business, and data layers.
- **Client-server:** Clients request services from central servers.
- **Monolith:** Deploys the main application as one unit.
- **Microservices:** Deploys small independent services around business areas.
- **Event-driven:** Components publish and react to events.
- **Pipe-and-filter:** Data passes through a sequence of processing steps.
- **Hexagonal architecture:** Keeps domain logic separate from external tools through ports and adapters.
- **Serverless:** Runs managed functions or services without direct server management.

### Monolith vs. Microservices

| Monolith                                          | Microservices                                             |
| ------------------------------------------------- | --------------------------------------------------------- |
| Simple initial development and deployment         | Independent service deployment                            |
| Easier local calls and transactions               | Better service-level scaling and ownership                |
| Can become tightly connected when poorly designed | Adds network, data, monitoring, and operations complexity |

Microservices are not automatically better; a well-designed monolith is often the simpler choice.

### Architecture Qualities

- Performance
- Availability
- Scalability
- Security
- Maintainability
- Testability
- Observability
- Recoverability

Architecture decisions should connect to real quality needs and trade-offs.

### API Basics

- **API:** A defined way for software parts to communicate.
- **Contract:** Agreed inputs, outputs, errors, and behavior.
- **REST:** Style using resources and HTTP methods.
- **RPC:** Calls remote operations through messages.
- **Idempotent operation:** Repeating the same request has the same intended effect as one request.

---

## 10. UML Diagrams

UML gives standard visual diagrams for software structure and behavior.

### Structural Diagrams

- **Class diagram:** Shows classes, fields, methods, and relationships.
- **Object diagram:** Shows object instances at one time.
- **Component diagram:** Shows software components and dependencies.
- **Deployment diagram:** Shows software placed on hardware or runtime nodes.
- **Package diagram:** Shows groups and dependencies.

### Behavioral Diagrams

- **Use-case diagram:** Shows users/actors and system goals.
- **Sequence diagram:** Shows messages between participants over time.
- **Activity diagram:** Shows workflow, decisions, and parallel actions.
- **State diagram:** Shows object states and transitions.

### Relationship Symbols in Simple Words

- **Association:** General connection.
- **Aggregation:** Weak whole-part connection.
- **Composition:** Strong ownership and shared lifecycle.
- **Generalization:** Inheritance or is-a relationship.
- **Dependency:** One element temporarily uses another.

Use diagrams to explain important decisions, not to create pictures with no clear purpose.

---

## 11. Coding Practices

### Clean Code

- Use names that explain purpose.
- Keep functions focused on one clear job.
- Reduce deep nesting with simple control flow.
- Remove dead and duplicate code.
- Write comments for reasons and decisions, not obvious syntax.
- Handle errors clearly.
- Keep style consistent through automated formatting.

### Code Review

Code review checks correctness, design, tests, security, readability, and maintainability before merging.

Good review comments are specific, respectful, and explain why a change is useful.

### Refactoring

Refactoring improves internal code structure without changing expected external behavior.

Common refactoring:

- Rename unclear items
- Extract a function or class
- Remove duplication
- Simplify conditions
- Replace magic values with named constants
- Move behavior to the correct owner

Refactor with tests or other checks that protect behavior.

### Technical Debt

Technical debt is future cost created by a quick or weak technical choice.

Some debt is a clear business choice, but hidden unmanaged debt slows later delivery.

### Error Handling

- Fail clearly at the correct boundary.
- Do not hide errors without a reason.
- Add useful context while keeping original cause.
- Do not expose passwords, tokens, or personal data in errors.
- Clean up resources even when work fails.

---

## 12. Software Testing Basics

Software testing checks software behavior and gives information about quality and risk.

### Important Terms

- **Error:** Human action that creates a wrong result.
- **Defect/bug:** Problem in code, design, requirement, or another work product.
- **Failure:** Visible wrong behavior when a defect is executed.
- **Test case:** Inputs, steps, conditions, and expected result.
- **Test suite:** Group of related test cases.
- **Test data:** Values used during testing.
- **Test environment:** Hardware, software, data, and settings used for tests.
- **Test oracle:** Source used to decide the expected result.

### Verification vs. Validation

- **Verification:** Are we building the product correctly according to specification?
- **Validation:** Are we building the right product for user needs?

### Static vs. Dynamic Testing

- **Static testing:** Reviews requirements, design, or code without running it.
- **Dynamic testing:** Runs software and checks its behavior.

### Black, White, and Gray Box

- **Black-box testing:** Tests behavior without using internal code knowledge.
- **White-box testing:** Uses code structure and internal paths.
- **Gray-box testing:** Uses limited internal knowledge with external behavior tests.

Testing can show defects are present, but normal testing cannot prove that all defects are absent.

---

## 13. Testing Levels and Types

### Testing Levels

- **Unit testing:** Checks one small function, class, or module.
- **Integration testing:** Checks communication between connected parts.
- **System testing:** Checks the complete system against requirements.
- **Acceptance testing:** Confirms the product is acceptable for business or users.

### Integration Approaches

- **Big Bang:** Integrates many parts at once; failures can be hard to locate.
- **Top-down:** Starts with higher modules and uses stubs for lower modules.
- **Bottom-up:** Starts with lower modules and uses drivers for higher modules.
- **Sandwich:** Combines top-down and bottom-up work.

### Common Test Types

- **Functional testing:** Checks required features.
- **Regression testing:** Checks that changes did not break existing behavior.
- **Smoke testing:** Fast broad check that a build is stable enough for more testing.
- **Sanity testing:** Narrow check of a specific change or area.
- **Performance testing:** Measures speed, load, and resource behavior.
- **Load testing:** Checks expected or increasing workload.
- **Stress testing:** Pushes beyond expected limits to study failure and recovery.
- **Security testing:** Finds weaknesses in protection and access.
- **Usability testing:** Checks whether users can use the product well.
- **Compatibility testing:** Checks supported devices, browsers, OSs, or versions.
- **Recovery testing:** Checks return to service after failure.
- **Exploratory testing:** Tester learns and designs tests while testing.

### Alpha and Beta Testing

- **Alpha:** Internal or controlled testing before wide external use.
- **Beta:** Limited real-user testing before full release.

---

## 14. Test Design Techniques

### Equivalence Partitioning

Divide input into groups expected to behave in the same way and test one or more values from each group.

### Boundary Value Analysis

Test values at, just below, and just above important limits because defects often occur at boundaries.

Example for valid age `18–60`:

```text
17, 18, 19, 59, 60, 61
```

### Decision Table

A decision table lists conditions and actions to test combinations of business rules.

### State Transition Testing

Test valid and invalid movement between states, such as locked, active, and closed accounts.

### Use-Case Testing

Create tests from user flows, including normal, alternate, and failure paths.

### Statement and Branch Coverage

- **Statement coverage:** Percentage of executable statements run by tests.
- **Branch coverage:** Percentage of decision outcomes run by tests.
- High coverage does not guarantee good assertions or complete behavior testing.

### Test Doubles

- **Dummy:** Required object that is not used by the test.
- **Stub:** Returns prepared answers.
- **Fake:** Working but simplified implementation.
- **Mock:** Checks expected interactions.
- **Spy:** Records calls for later checks.

Use a test double only when it makes the test clearer, faster, or more controlled.

---

## 15. Quality Assurance and Quality Control

### QA vs. QC

| Quality Assurance               | Quality Control                     |
| ------------------------------- | ----------------------------------- |
| Improves and checks the process | Checks the product and results      |
| Preventive focus                | Detective focus                     |
| Standards, audits, training     | Testing, inspection, defect finding |

### Quality Activities

- Define standards and Definition of Done.
- Review requirements and designs.
- Automate builds, tests, and checks.
- Track defects and root causes.
- Measure useful quality results.
- Improve process after failures.

### Cost of Quality

- **Prevention cost:** Training, standards, design, and automation.
- **Appraisal cost:** Reviews, testing, and audits.
- **Internal failure cost:** Defects found before release.
- **External failure cost:** Defects found after release.

Finding a defect earlier is usually cheaper than fixing it after release.

### Root Cause Analysis

Root cause analysis looks beyond the visible defect to find why the process allowed it.

The Five Whys and fishbone diagrams are common tools, but they should not be used to blame individuals.

---

## 16. Version Control

Version control records changes and helps teams work safely on shared files.

### Git Terms

- **Repository:** Project history and tracked files.
- **Commit:** Saved change with a message and identifier.
- **Branch:** Movable line of development.
- **Merge:** Combines branch histories.
- **Rebase:** Replays commits on a new base.
- **Remote:** Another repository location.
- **Clone:** Local copy of a repository.
- **Pull:** Fetches and integrates remote changes according to settings.
- **Push:** Sends local commits to a remote.
- **Tag:** Named reference often used for a release.

### Good Practices

- Make small focused commits.
- Write clear commit messages.
- Review changes before commit.
- Do not commit secrets or generated noise.
- Update your branch before final integration.
- Resolve conflicts by understanding both changes.
- Protect important branches with reviews and checks.

### Merge vs. Rebase

Merge preserves branch history with a merge commit when needed; rebase creates a cleaner linear history by changing commit parents.

Do not rebase shared published history unless the team has agreed to it.

---

## 17. CI, CD, and DevOps

### Continuous Integration

CI frequently combines code changes and runs automated build, test, and quality checks.

### Continuous Delivery

Continuous delivery keeps software ready for a controlled production release.

### Continuous Deployment

Continuous deployment automatically releases every change that passes required checks.

### Pipeline Stages

```text
Source → Build → Static Checks → Tests → Package → Deploy → Verify → Monitor
```

### DevOps

DevOps joins development and operations practices to deliver reliable software through shared ownership and automation.

### Important Practices

- Infrastructure as code
- Automated testing
- Repeatable deployments
- Monitoring and logging
- Fast rollback or safe roll-forward
- Small releases
- Shared production responsibility
- Post-incident learning

### Deployment Strategies

- **Rolling:** Replaces instances in small groups.
- **Blue-green:** Switches traffic between old and new environments.
- **Canary:** Sends a small traffic part to the new version first.
- **Feature flag:** Controls feature access without a new deployment.

Deployment is putting code into an environment; release is making a feature available to users.

---

## 18. Estimation and Planning

Estimation predicts the effort, time, cost, and resources needed for work.

### Estimation Methods

- **Expert judgement:** Experienced people estimate from similar work.
- **Analogy:** Compare with a completed similar project.
- **Top-down:** Estimate the whole project and divide it into parts.
- **Bottom-up:** Estimate small tasks and add them together.
- **Three-point:** Uses optimistic, likely, and pessimistic values.
- **Planning Poker:** Team discusses and estimates Agile backlog items.
- **Function points:** Measures user-visible software functions.
- **COCOMO:** Uses software size and project factors to estimate effort.

### Three-Point Estimate

PERT-style expected value:

```text
Expected = (Optimistic + 4 × Most Likely + Pessimistic) / 6
```

### Work Breakdown Structure

A WBS divides a large project into smaller manageable deliverables and tasks.

### Estimation Problems

- Requirements are incomplete.
- New technology adds uncertainty.
- Hidden integration and testing work is missed.
- Pressure turns an estimate into an unsupported promise.
- Teams forget meetings, reviews, deployment, and support.

An estimate is a prediction with uncertainty, not a guaranteed date.

### Buffer

A buffer protects the project from known uncertainty; it should not hide poor planning or uncontrolled scope.

---

## 19. Project Management

Project management plans and controls scope, time, cost, quality, people, communication, and risk.

### Project Triangle

```text
Scope ↔ Time ↔ Cost
          ↓
        Quality
```

Changing one constraint can affect the others.

### Important Terms

- **Scope:** Work and results included in the project.
- **Milestone:** Important point or achievement with no normal duration.
- **Dependency:** Work that depends on another task or event.
- **Critical path:** Longest dependent task path that controls earliest project finish.
- **Baseline:** Approved plan used for comparison.
- **Status report:** Summary of progress, risks, decisions, and next work.

### Gantt Chart

A Gantt chart shows tasks, duration, order, and dependencies over time.

### PERT/CPM

- PERT supports uncertain activity durations.
- CPM focuses on task paths and schedule control.
- Tasks on the critical path have no normal schedule freedom without affecting the end date.

### Scope Creep

Scope creep is uncontrolled addition of work without matching changes to time, cost, or approval.

Clear requirements, priorities, and change control help manage it.

---

## 20. Risk Management

A risk is an uncertain event that may affect project goals.

### Risk Steps

1. Identify the risk.
2. Estimate probability and impact.
3. Prioritize it.
4. Choose a response.
5. Assign an owner.
6. Monitor warning signs.

### Risk Responses

- **Avoid:** Change the plan to remove the risk.
- **Reduce/mitigate:** Lower probability or impact.
- **Transfer:** Move responsibility through a contract or service.
- **Accept:** Take no preventive action but prepare if needed.

### Risk Exposure

```text
Risk Exposure = Probability × Impact
```

### Common Software Risks

- Unclear or changing requirements
- Skill or staffing gaps
- New or unstable technology
- Security and privacy failure
- Vendor or dependency failure
- Poor performance or scalability
- Integration delay
- Data migration error
- Unrealistic schedule

### Risk Register

A risk register records description, probability, impact, response, owner, status, and warning signs.

An issue has already happened; a risk may happen in the future.

---

## 21. Software Maintenance

Software maintenance changes a product after delivery to fix, improve, adapt, or prevent problems.

### Maintenance Types

- **Corrective:** Fixes discovered defects.
- **Adaptive:** Changes software for a new environment, law, or dependency.
- **Perfective:** Improves features, performance, or usability.
- **Preventive:** Reduces future risk through cleanup, tests, or redesign.

### Legacy Software

Legacy software is older software that remains important but may use outdated technology or knowledge.

Do not rewrite legacy software only because it is old; compare business value, risk, migration cost, and available tests.

### Maintenance Practices

- Keep dependencies supported.
- Add tests before risky changes.
- Improve monitoring and documentation.
- Refactor small areas safely.
- Remove unused features and code.
- Track incidents and repeated defects.
- Plan migration instead of waiting for a crisis.

### Software Reengineering

Reengineering studies and changes existing software to improve its structure, platform, or maintainability.

Reverse engineering learns the current design; forward engineering builds the improved system.

---

## 22. Configuration and Change Management

Configuration management controls versions of code, documents, settings, tools, and release items.

### Configuration Item

A configuration item is a controlled project item such as source code, requirement, test plan, build script, or environment setting.

### Main Activities

- Identification
- Version control
- Change control
- Status reporting
- Configuration audit
- Build and release management

### Change Request

A change request explains the desired change, reason, value, impact, priority, and approval.

### Change-Control Steps

```text
Request → Analyze Impact → Approve/Reject → Plan → Build/Test → Release → Verify
```

### Baseline

A baseline is an approved version used as a stable reference for later change.

### Environment Configuration

- Keep configuration separate from source code where practical.
- Do not store secrets in normal repositories.
- Version safe configuration schemas and defaults.
- Make environment differences visible and controlled.

---

## 23. Software Metrics

A metric is a measured value used to understand product, process, or project behavior.

### Product Metrics

- Code size
- Complexity
- Defect density
- Performance
- Availability
- Test coverage
- Security findings

### Process Metrics

- Lead time
- Cycle time
- Deployment frequency
- Change failure rate
- Mean time to restore
- Review time
- Defect escape rate

### Project Metrics

- Planned vs. completed work
- Cost variance
- Schedule variance
- Risk status
- Scope change

### Useful Definitions

- **Lead time:** Time from request to delivered result.
- **Cycle time:** Time from starting work to finishing it.
- **Defect density:** Defects divided by a chosen size measure.
- **Defect escape rate:** Defects found after release compared with total found.
- **Availability:** Percentage of time a service is usable.

### Metric Warnings

- A metric must support a decision or learning goal.
- Lines of code do not directly measure developer value.
- Story points should not compare different teams.
- Test coverage does not prove test quality.
- A target can cause bad behavior when people optimize the number instead of the outcome.

Use several balanced metrics with context, not one number alone.

---

## 24. Secure Software Development

Secure development handles security during planning, design, coding, testing, release, and maintenance.

### Security Principles

- Least privilege
- Secure defaults
- Defense in depth
- Complete access checks
- Input validation
- Output encoding
- Safe error handling
- Secret protection
- Dependency management
- Audit logging

### Threat Modeling

Threat modeling finds valuable assets, trust boundaries, possible attackers, threats, and controls before release.

### STRIDE

- **Spoofing:** Pretending to be another identity.
- **Tampering:** Changing data or code without permission.
- **Repudiation:** Denying an action without enough evidence.
- **Information disclosure:** Exposing private data.
- **Denial of service:** Making a service unavailable.
- **Elevation of privilege:** Getting stronger access than allowed.

### Secure Coding

- Use parameterized database queries.
- Validate input at trust boundaries.
- Encode output for its target context.
- Use proven cryptographic libraries.
- Do not write secrets into logs.
- Keep dependencies and runtimes updated.
- Set timeouts and resource limits.
- Check authorization on every protected operation.

### Security Testing

- Static application security testing checks code without running it.
- Dynamic testing checks a running application.
- Dependency scanning checks known package problems.
- Penetration testing safely tries realistic attacks.
- Security review checks design and trust boundaries.

Security is a shared team responsibility, not only the security team's job.

---

## 25. Documentation and Team Work

Good documentation records useful knowledge for users, developers, operators, and future maintainers.

### Documentation Types

- Requirements and acceptance criteria
- Architecture and design decisions
- API documentation
- User guides
- Setup and development guides
- Runbooks and recovery steps
- Test plans and release notes
- Incident reports

### Good Documentation

- Has a clear audience and purpose.
- Stays close to the code or process it explains.
- Uses examples and simple language.
- Has an owner and update process.
- Records why important decisions were made.

### ADR

An Architecture Decision Record stores the context, decision, options, and results of an important architecture choice.

### Team Communication

- Share goals and decisions clearly.
- Ask questions early.
- Give respectful specific feedback.
- Record decisions that affect others.
- Raise risks without blame.
- Use meetings only when they help a clear outcome.

### Definition of Ready and Done

- **Definition of Ready:** Optional team agreement about when work is clear enough to start.
- **Definition of Done:** Required quality conditions before work is considered complete.

### Knowledge Sharing

Pair programming, reviews, demos, short talks, guides, and rotation reduce single-person knowledge risk.

---

## 26. Interview Questions

### Q1. What is software engineering?

Software engineering is a disciplined way to plan, build, test, deliver, and maintain software.

### Q2. What is SDLC?

SDLC is the set of phases used to move from a software idea to a maintained product.

### Q3. Functional vs. non-functional requirement?

A functional requirement says what the system does, while a non-functional requirement describes quality or limits.

### Q4. Verification vs. validation?

Verification checks whether we build correctly, while validation checks whether we build the right product.

### Q5. Waterfall vs. Agile?

Waterfall uses planned sequential phases, while Agile uses short delivery cycles and frequent feedback.

### Q6. Iterative vs. incremental development?

Iterative work improves repeated versions, while incremental work adds product parts step by step.

### Q7. What is the V-Model?

The V-Model connects each development activity with a matching testing activity.

### Q8. What is a prototype?

A prototype is an early model used to learn needs, check risk, or test an idea.

### Q9. What is a user story?

A user story describes a user, goal, and value, supported by acceptance criteria.

### Q10. Product backlog vs. sprint backlog?

The product backlog holds ordered product work, while the sprint backlog holds the sprint goal and selected plan.

### Q11. What is Definition of Done?

It is the shared quality checklist that completed work must satisfy.

### Q12. High cohesion vs. low coupling?

High cohesion keeps related work together, while low coupling reduces unnecessary module dependency.

### Q13. High-level vs. low-level design?

High-level design explains architecture and components; low-level design explains detailed classes, functions, and logic.

### Q14. Monolith vs. microservices?

A monolith deploys one main unit, while microservices split business services into independent deployments with more operational complexity.

### Q15. What is refactoring?

Refactoring improves internal code structure without changing expected external behavior.

### Q16. What is technical debt?

Technical debt is future cost caused by a quick or weak technical choice today.

### Q17. Unit vs. integration testing?

Unit tests check a small part alone, while integration tests check communication between connected parts.

### Q18. Smoke vs. sanity testing?

Smoke testing broadly checks build stability, while sanity testing narrowly checks a specific change or area.

### Q19. Regression testing?

Regression testing checks that a change did not break behavior that already worked.

### Q20. QA vs. QC?

QA improves and checks the process, while QC checks the product and finds defects.

### Q21. Black-box vs. white-box testing?

Black-box testing checks visible behavior, while white-box testing uses internal code knowledge.

### Q22. What is boundary-value analysis?

It tests values at and around limits where defects often occur.

### Q23. CI vs. continuous delivery vs. deployment?

CI checks integrated changes, delivery keeps releases ready, and deployment automatically releases passed changes.

### Q24. Deployment vs. release?

Deployment puts code into an environment, while release makes a feature available to users.

### Q25. What is the critical path?

It is the longest dependent task path that controls the earliest project finish date.

### Q26. Risk vs. issue?

A risk may happen in the future, while an issue has already happened.

### Q27. Corrective vs. adaptive maintenance?

Corrective maintenance fixes defects, while adaptive maintenance supports a changed environment or rule.

### Q28. What is configuration management?

It controls versions and changes of code, documents, settings, builds, and release items.

### Q29. Why is test coverage not enough?

Coverage shows executed code, but it does not prove good assertions, correct requirements, or useful edge cases.

### Q30. What makes a good software process?

A good process gives clear value, fast feedback, built-in quality, controlled risk, and room for team improvement.

---

## 27. MCQ Practice

Try the questions before opening the answer key.

**1. Which phase collects user needs?**
A. Requirements  B. Deployment  C. Maintenance only  D. Compilation

**2. Which requirement describes response time?**
A. Functional  B. Non-functional  C. User role  D. Source code

**3. Which model connects development phases with test phases?**
A. V-Model  B. Prototype only  C. Big Bang  D. RAD only

**4. Who orders the Scrum product backlog?**
A. Product Owner  B. Scrum Master only  C. Tester only  D. Customer support

**5. Which Scrum event improves team process?**
A. Retrospective  B. Build  C. Compile  D. Release only

**6. Which principle means “do not build it yet”?**
A. YAGNI  B. DRY  C. UML  D. CPM

**7. Which diagram shows messages over time?**
A. Sequence  B. Class  C. Deployment  D. Package

**8. Which testing level checks connected modules?**
A. Unit  B. Integration  C. Acceptance only  D. Static only

**9. Which technique tests `17, 18, 19` for a minimum age of 18?**
A. Boundary value  B. Random only  C. Load testing  D. Smoke only

**10. Which test checks old features after a change?**
A. Regression  B. Alpha  C. Stress only  D. Static review only

**11. Which activity is mainly preventive?**
A. QA  B. QC only  C. Failure  D. Debug output

**12. Which Git operation replays commits on a new base?**
A. Rebase  B. Clone  C. Tag  D. Status

**13. Which practice frequently integrates and tests code?**
A. CI  B. Waterfall only  C. Manual deployment only  D. WBS

**14. Which deployment sends small traffic to a new version first?**
A. Canary  B. Big Bang only  C. Waterfall  D. Prototype

**15. Which path controls the earliest project finish?**
A. Critical path  B. Happy path  C. Data path  D. API path

**16. Which maintenance type improves performance?**
A. Perfective  B. Corrective only  C. Adaptive only  D. Legal only

**17. Which item records project risks?**
A. Risk register  B. Source map  C. Stack trace  D. Class diagram

**18. Which security activity studies threats before release?**
A. Threat modeling  B. Formatting  C. Burndown  D. Compilation

**19. Which document stores an architecture decision?**
A. ADR  B. SRS only  C. Bug report  D. Test data

**20. Which metric measures request-to-delivery time?**
A. Lead time  B. Code size  C. Branch count  D. Story title

<details>
<summary><strong>Answer key</strong></summary>

1. **A** — Requirements work collects needs.
2. **B** — Response time is a quality requirement.
3. **A** — The V-Model pairs development and testing.
4. **A** — The Product Owner orders the backlog.
5. **A** — The retrospective improves the work process.
6. **A** — YAGNI avoids unneeded future work.
7. **A** — A sequence diagram shows message order.
8. **B** — Integration testing checks connected parts.
9. **A** — These values test the boundary.
10. **A** — Regression testing protects existing behavior.
11. **A** — QA focuses on process prevention.
12. **A** — Rebase changes the commit base.
13. **A** — CI integrates and checks changes frequently.
14. **A** — Canary release starts with limited traffic.
15. **A** — Critical-path delay affects project finish.
16. **A** — Perfective maintenance improves quality/features.
17. **A** — A risk register tracks risks.
18. **A** — Threat modeling studies possible attacks.
19. **A** — ADR means Architecture Decision Record.
20. **A** — Lead time covers request to delivery.

</details>

---

## 28. Practical Case Questions

### 1. Choose an SDLC Model

**Case:** A government payroll system has stable legal rules, formal approvals, and strong audit needs.

**Answer:** Waterfall or V-Model may fit because requirements are stable and documents/test links are important.

### 2. Choose Agile

**Case:** A startup is testing a new product and needs user feedback every two weeks.

**Answer:** Iterative Agile delivery fits because learning and requirement change are high.

### 3. Write a Requirement

Weak:

```text
The search must be fast.
```

Better:

```text
For the normal production load, 95% of search requests must return within two seconds.
```

The better requirement is measurable and testable.

### 4. Write a User Story

```text
As a registered user,
I want to reset my password through a verified email link,
so that I can recover access safely.
```

Acceptance criteria should cover link expiry, one-time use, invalid users, and successful login.

### 5. Find Testing Levels

For an online payment feature:

- Unit: Calculate fees and validate amount.
- Integration: Application talks correctly to payment service.
- System: Full order-to-payment flow works.
- Acceptance: Business confirms required payment cases.

### 6. Handle a Production Defect

1. Measure impact and protect users.
2. Roll back, disable, or apply a safe fix.
3. Communicate current status.
4. Verify service recovery.
5. Find root cause.
6. Add tests, monitoring, or process improvements.

### 7. Manage Scope Change

Analyze value, effort, schedule, risks, and affected requirements before approval; then update plans and traceability.

### 8. Reduce Technical Debt

Record the debt, explain business impact, protect behavior with tests, and improve the highest-risk areas in small steps.

### 9. Design a Release Pipeline

```text
Pull Request → Review → Build → Unit Tests → Security Checks
→ Integration Tests → Package → Staging → Approval/Policy
→ Production → Health Check → Monitor
```

Add safe rollback or roll-forward steps and protect secrets.

### 10. Choose Deployment Strategy

- Blue-green for fast environment switching and clear rollback.
- Canary for gradual risk control using small traffic.
- Rolling when replacing instances step by step is acceptable.
- Feature flags when deployment and user release should happen separately.

### 11. Create a Risk Entry

```text
Risk: External payment API may be delayed.
Probability: Medium
Impact: High
Response: Build timeout, retry, fallback, and early integration test.
Owner: Integration lead
Warning: Error rate or response time crosses threshold.
```

### 12. Improve a Slow Team Process

Measure waiting points, reduce work in progress, make ownership clear, automate repeated checks, and review results in a retrospective.

### Additional Practice

1. Write five acceptance criteria for user registration.
2. Draw a sequence diagram for password reset.
3. Create a test plan for a shopping cart.
4. Compare monolith and microservices for a small college project.
5. Make a WBS for a mobile attendance application.
6. Identify risks in a database migration.
7. Choose useful metrics for a web service team.
8. Write an ADR for choosing a message queue.

---

## 29. Common Mistakes and Interview Tips

### Concept Mistakes

- Saying SDLC is only Waterfall.
- Saying Agile means no planning or documentation.
- Treating Scrum Master as the team's manager.
- Treating story points as exact hours.
- Confusing verification and validation.
- Confusing QA and testing.
- Saying high code coverage means defect-free software.
- Treating refactoring as adding new behavior.
- Assuming microservices are always better than a monolith.
- Confusing continuous delivery with continuous deployment.
- Treating deployment and release as the same action.
- Confusing a future risk with a current issue.
- Measuring developer performance by lines of code.

### Project Mistakes

- Starting coding before understanding the main problem.
- Accepting unclear requirements without questions.
- Estimating only coding and forgetting tests, review, deployment, and support.
- Changing scope without impact analysis.
- Leaving security and performance until the end.
- Making large releases with no rollback plan.
- Keeping important decisions only in meetings.
- Ignoring maintenance and dependency updates.
- Blaming people instead of improving the system after incidents.

### Interview Tips

- Start with a one-line definition.
- Give a small real example.
- Explain when a model is useful and its trade-off.
- Do not present Agile and Waterfall as simple good-versus-bad choices.
- Connect testing types to project risks.
- Mention acceptance criteria for requirement questions.
- Explain both technical and team parts of DevOps.
- Use simple diagrams for SDLC, testing levels, and CI/CD.
- State assumptions in estimation and design answers.

---

## 30. Rapid-Revision Cheat Sheet

### SDLC Flow

```text
Plan → Requirements → Design → Code → Test → Deploy → Maintain
```

### Core Comparisons

| Topic                               | Quick Difference                                 |
| ----------------------------------- | ------------------------------------------------ |
| Functional vs. non-functional       | Feature behavior vs. quality/limit               |
| Verification vs. validation         | Build correctly vs. build right product          |
| Waterfall vs. Agile                 | Planned phases vs. short feedback cycles         |
| Iterative vs. incremental           | Improve versions vs. add product parts           |
| HLD vs. LLD                         | Architecture vs. detailed design                 |
| QA vs. QC                           | Process prevention vs. product checking          |
| Unit vs. integration test           | Small part vs. connected parts                   |
| Smoke vs. sanity                    | Broad build check vs. narrow change check        |
| CI vs. CD                           | Integrate/check vs. release readiness/automation |
| Deploy vs. release                  | Put code in environment vs. expose feature       |
| Risk vs. issue                      | May happen vs. already happened                  |
| Corrective vs. adaptive maintenance | Fix defect vs. support changed environment       |

### Scrum Recall

```text
Product Owner → Value and product backlog
Scrum Master  → Framework help and improvement
Developers    → Working increment

Events: Sprint, Planning, Daily Scrum, Review, Retrospective
Artifacts: Product Backlog, Sprint Backlog, Increment
```

### Testing Recall

```text
Unit → Integration → System → Acceptance

Static: no software execution
Dynamic: run the software
Regression: protect existing behavior
Performance: measure speed and resource use
Security: check protection and threats
```

### Maintenance Recall

- Corrective → fix
- Adaptive → environment change
- Perfective → improve
- Preventive → reduce future risk

### Risk Recall

```text
Identify → Analyze → Prioritize → Respond → Own → Monitor

Responses: Avoid, Reduce, Transfer, Accept
```

### Thirty-Second Interview Answer

> Software engineering is a planned way to build and maintain quality software. SDLC covers planning, requirements, design, development, testing, deployment, and maintenance. Good teams use clear requirements, simple design, code review, automated tests, version control, safe delivery, monitoring, risk management, and regular feedback to deliver useful software reliably.

### Final Checklist

- Can I explain every SDLC phase?
- Can I compare Waterfall, V-Model, iterative, spiral, and Agile?
- Can I write a clear requirement and acceptance criteria?
- Can I explain Scrum roles, events, and artifacts?
- Can I compare architecture and design choices?
- Can I explain testing levels and techniques?
- Can I describe Git, CI/CD, and deployment strategies?
- Can I estimate work and explain uncertainty?
- Can I manage risks, changes, maintenance, and metrics?
- Can I discuss secure development and team documentation?

**Recommended revision order:** SDLC → requirements → models → Agile/Scrum → design → testing → Git/CI-CD → planning/risks → maintenance/security.
