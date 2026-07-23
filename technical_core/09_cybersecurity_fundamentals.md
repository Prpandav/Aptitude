# Cybersecurity Fundamentals Master Notes

Simple notes for technical interviews, aptitude tests, safe development, and quick revision.

## Table of Contents

1. [Cybersecurity Basics](#1-cybersecurity-basics)
2. [Security Goals](#2-security-goals)
3. [Threats, Vulnerabilities, and Risk](#3-threats-vulnerabilities-and-risk)
4. [Common Types of Attackers](#4-common-types-of-attackers)
5. [Malware](#5-malware)
6. [Social Engineering](#6-social-engineering)
7. [Authentication and Authorization](#7-authentication-and-authorization)
8. [Passwords and Multi-Factor Authentication](#8-passwords-and-multi-factor-authentication)
9. [Access Control](#9-access-control)
10. [Cryptography Basics](#10-cryptography-basics)
11. [Hashing and Digital Signatures](#11-hashing-and-digital-signatures)
12. [Network Security](#12-network-security)
13. [Web Application Security](#13-web-application-security)
14. [Secure Software Development](#14-secure-software-development)
15. [Operating System and Endpoint Security](#15-operating-system-and-endpoint-security)
16. [Database and Data Security](#16-database-and-data-security)
17. [Cloud Security](#17-cloud-security)
18. [Mobile and Wireless Security](#18-mobile-and-wireless-security)
19. [Security Monitoring and Incident Response](#19-security-monitoring-and-incident-response)
20. [Business Continuity and Recovery](#20-business-continuity-and-recovery)
21. [Security Policies and Human Safety](#21-security-policies-and-human-safety)
22. [Common Security Tools](#22-common-security-tools)
23. [Interview Questions](#23-interview-questions)
24. [MCQ Practice](#24-mcq-practice)
25. [Practical Exercises](#25-practical-exercises)
26. [Common Mistakes and Interview Tips](#26-common-mistakes-and-interview-tips)
27. [Rapid-Revision Cheat Sheet](#27-rapid-revision-cheat-sheet)

---

## 1. Cybersecurity Basics

Cybersecurity protects computers, networks, applications, and data from unauthorized access, damage, theft, or interruption.

Security is a continuous process. No system is perfectly secure, so teams reduce risk through several controls and regular improvement.

### Important terms

- **Asset:** Something valuable, such as data, software, devices, money, or reputation.
- **Threat:** Anything that may cause harm.
- **Vulnerability:** A weakness that can be used by a threat.
- **Exploit:** A method that uses a vulnerability.
- **Attack:** An attempt to harm or gain unauthorized access.
- **Control:** A safeguard that reduces risk.
- **Incident:** An event that harms or may harm security.

### Defense in depth

Defense in depth means using several security layers. If one control fails, another control can still reduce the damage.

Example: a company may use MFA, a firewall, encryption, endpoint protection, backups, monitoring, and staff training together.

---

## 2. Security Goals

The three main goals are called the CIA triad.

| Goal            | Meaning                                    | Example                              |
| --------------- | ------------------------------------------ | ------------------------------------ |
| Confidentiality | Only allowed people can read information   | Encrypting customer data             |
| Integrity       | Information remains correct and trusted    | Detecting a changed file with a hash |
| Availability    | Systems and data remain usable when needed | Redundant servers and backups        |

Other useful goals are:

- **Authenticity:** Confirms that a user, device, or message is genuine.
- **Accountability:** Actions can be connected to the responsible identity.
- **Non-repudiation:** Strong evidence makes it difficult to deny an action.
- **Privacy:** Personal data is collected and used in a fair, limited, and protected way.

A security decision often balances protection, cost, usability, and business need.

---

## 3. Threats, Vulnerabilities, and Risk

A threat may use a vulnerability to damage an asset.

```text
Risk depends on likelihood and impact
```

- **Likelihood** is the chance that the harmful event will happen.
- **Impact** is the amount of damage it may cause.

### Risk treatment

| Method   | Meaning                                              |
| -------- | ---------------------------------------------------- |
| Avoid    | Stop the risky activity                              |
| Reduce   | Add controls to lower likelihood or impact           |
| Transfer | Share financial risk through a contract or insurance |
| Accept   | Record and knowingly keep the remaining risk         |

The risk that remains after controls are applied is called **residual risk**.

### Control types

- **Preventive controls** try to stop an incident.
- **Detective controls** find suspicious activity.
- **Corrective controls** repair damage.
- **Deterrent controls** discourage attacks.
- **Compensating controls** provide another safeguard when the preferred control is not possible.

---

## 4. Common Types of Attackers

| Attacker           | Common purpose                                               |
| ------------------ | ------------------------------------------------------------ |
| Cybercriminal      | Money, fraud, or stolen information                          |
| Nation-state group | Intelligence, disruption, or political goals                 |
| Insider            | Personal gain, revenge, or an accidental mistake             |
| Hacktivist         | Social or political message                                  |
| Competitor         | Business information or advantage                            |
| Script user        | Learning, curiosity, or easy disruption using existing tools |

An insider can have valid access, so technical controls alone are not enough. Least privilege, separation of duties, monitoring, and clear processes help reduce insider risk.

---

## 5. Malware

Malware is software made to harm, spy, steal, or gain unauthorized control.

| Type       | Simple meaning                                                   |
| ---------- | ---------------------------------------------------------------- |
| Virus      | Attaches to another file and usually needs user action to spread |
| Worm       | Spreads across systems without attaching to a host file          |
| Trojan     | Pretends to be useful software                                   |
| Ransomware | Locks or steals data and demands payment                         |
| Spyware    | Secretly collects information                                    |
| Rootkit    | Hides malicious access deep in a system                          |
| Bot        | Makes a device part of a remotely controlled network             |
| Keylogger  | Records keyboard input                                           |

Reduce malware risk with supported software, updates, safe downloads, limited privileges, endpoint protection, network controls, and tested backups.

---

## 6. Social Engineering

Social engineering manipulates people into giving information, money, or access.

- **Phishing:** A false message sent to many people.
- **Spear phishing:** A targeted message prepared for one person or group.
- **Smishing:** Phishing through text messages.
- **Vishing:** Phishing through voice calls.
- **Pretexting:** A false story used to gain trust.
- **Baiting:** An attractive offer or device used as a trap.
- **Tailgating:** Following an authorized person into a protected area.

Check the sender, domain, request, attachment, and destination link. Confirm unusual requests through a separate trusted channel. Do not let urgency replace verification.

---

## 7. Authentication and Authorization

- **Identification:** A user claims an identity.
- **Authentication:** The system verifies that claim.
- **Authorization:** The system decides what the verified identity may do.
- **Accounting:** The system records actions for review.

Authentication happens before authorization. A logged-in user may still be forbidden from opening an administrator page.

### Authentication factors

| Factor             | Example                       |
| ------------------ | ----------------------------- |
| Something you know | Password or PIN               |
| Something you have | Phone, token, or security key |
| Something you are  | Fingerprint or face           |
| Somewhere you are  | Approved location or network  |
| Something you do   | Typing or behavior pattern    |

Single sign-on lets one identity access several approved services. Federation allows separate organizations or systems to trust identity information through standards such as SAML or OpenID Connect.

---

## 8. Passwords and Multi-Factor Authentication

A strong password should be long, unique, and difficult to guess. A password manager can create and store unique passwords.

Systems should never store plain-text passwords. They should store a salted result from a slow password-hashing function designed for password storage.

- A **salt** is random data added before hashing. It prevents equal passwords from having equal stored values.
- A **pepper** is an optional secret stored separately from the password database.
- Rate limits and temporary lockouts slow repeated login attempts.

MFA uses more than one different factor. Two passwords are not MFA because both are knowledge factors. Security keys and passkeys can give strong protection against phishing.

---

## 9. Access Control

The principle of least privilege gives each identity only the access needed for its work.

| Model | Main idea                                  |
| ----- | ------------------------------------------ |
| DAC   | An owner decides access to an object       |
| MAC   | Central labels and rules control access    |
| RBAC  | Permissions are assigned through job roles |
| ABAC  | Attributes and policies decide access      |

### Related principles

- **Need to know:** Give sensitive information only when required.
- **Separation of duties:** Split a risky action between different people.
- **Default deny:** Reject access unless a rule clearly allows it.
- **Periodic review:** Remove unused, old, or incorrect permissions.
- **Zero trust:** Verify each access request using identity, device, context, and policy; do not trust only because it is inside a network.

---

## 10. Cryptography Basics

Cryptography protects information using mathematical methods and keys.

### Symmetric encryption

The same secret key encrypts and decrypts data. It is fast and useful for large amounts of data, but the key must be shared safely.

Examples include AES and ChaCha20.

### Asymmetric encryption

A public key and a private key form a pair. The public key may be shared; the private key must remain secret.

It supports secure key exchange and digital signatures, but is slower than symmetric encryption.

Examples include RSA and elliptic-curve systems.

### Encryption in use

- **Data at rest:** Stored files, disks, or databases.
- **Data in transit:** Data moving over a network, commonly protected by TLS.
- **Data in use:** Data being processed in memory; this is harder to protect.

Encryption strength depends on the algorithm, key size, mode, implementation, and key management. Do not invent a custom encryption method.

---

## 11. Hashing and Digital Signatures

A cryptographic hash converts input into a fixed-size value. It is designed to be one-way and sensitive to small input changes.

Hashing is not encryption because there is no normal decryption key.

### Common uses of hashes

- Checking file integrity.
- Supporting digital signatures.
- Addressing content.
- Storing passwords with a password-specific hashing function.

Old algorithms such as MD5 and SHA-1 are not suitable for modern collision-resistant security uses.

### Digital signature

The sender signs data using a private key. Others verify the signature using the matching public key. A valid signature supports authenticity, integrity, and non-repudiation evidence.

A digital certificate connects a public key to an identity. A certificate authority signs certificates in a public key infrastructure.

---

## 12. Network Security

Network security protects communication, devices, and services.

- A **firewall** allows or blocks traffic using rules.
- An **IDS** detects suspicious activity and sends alerts.
- An **IPS** can detect and block suspicious traffic.
- A **VPN** creates an encrypted connection across an untrusted network.
- **Segmentation** separates systems to limit movement after a breach.
- A **proxy** acts between a client and another service.
- A **WAF** filters web application traffic.

### Common network attacks

| Attack            | Meaning                            | Common defense                                |
| ----------------- | ---------------------------------- | --------------------------------------------- |
| DoS or DDoS       | Overloads a service                | Rate limits, filtering, scaling, DDoS service |
| Spoofing          | Pretends to be another source      | Authentication and validation                 |
| Man-in-the-middle | Reads or changes communication     | Correct TLS and certificate checks            |
| DNS poisoning     | Sends users to a false address     | Protected resolvers and DNSSEC where suitable |
| ARP spoofing      | Sends false local address mappings | Segmentation and switch protections           |
| Port scanning     | Searches for open services         | Reduce exposed services and monitor traffic   |

Close unused ports, disable unused services, patch network devices, and use secure protocols.

## 13. Web Application Security

Web security must be designed in the browser, server, API, database, and deployment layers.

### Common web risks

| Risk                  | Simple meaning                                        | Main protection                               |
| --------------------- | ----------------------------------------------------- | --------------------------------------------- |
| Injection             | Untrusted input changes a command or query            | Parameterized queries and safe APIs           |
| XSS                   | Attacker-controlled script runs in a browser          | Output encoding, sanitization, and CSP        |
| CSRF                  | A logged-in browser is tricked into sending a request | CSRF tokens and suitable cookie settings      |
| Broken access control | A user reaches data or actions without permission     | Server-side authorization on every request    |
| SSRF                  | A server is tricked into making an unsafe request     | Destination allowlists and network limits     |
| Path traversal        | Input escapes an allowed directory                    | Safe path handling and allowlists             |
| Insecure upload       | A harmful or unexpected file is accepted              | Type, size, name, storage, and content checks |

Validate input, but also use the correct safe output handling for its destination. Client-side checks improve usability, but security checks must also happen on the server.

### Session safety

- Use random, unpredictable session identifiers.
- Send cookies with Secure, HttpOnly, and suitable SameSite settings.
- Rotate the session after login or privilege change.
- Expire inactive and old sessions.
- Use HTTPS for the entire session.

---

## 14. Secure Software Development

Security should be part of every software development phase.

1. Define security and privacy requirements.
2. Identify threats during design.
3. Use approved libraries and safe coding patterns.
4. Review code and dependencies.
5. Run security tests.
6. Protect build and deployment systems.
7. Monitor the released system and fix problems.

### Important practices

- Threat modelling finds assets, trust boundaries, possible attacks, and controls.
- Static testing examines code without running it.
- Dynamic testing examines a running application.
- Dependency scanning finds known problems in third-party packages.
- Secret scanning finds credentials accidentally placed in source.
- Fuzz testing sends unusual input to discover crashes or unsafe behavior.

Security testing reduces risk but cannot prove that software has no weakness.

---

## 15. Operating System and Endpoint Security

An endpoint is a user or server device connected to a network.

- Install security updates promptly based on risk.
- Remove unused software, services, and accounts.
- Use least privilege instead of daily administrator access.
- Enable disk encryption and secure boot where supported.
- Use endpoint detection and response tools.
- Control removable devices when needed.
- Lock screens and protect physical access.
- Keep tested backups of important data.

**Hardening** means reducing unnecessary features and setting secure defaults. A standard secure configuration makes systems easier to manage and audit.

Patch management includes finding assets, checking available fixes, testing, deployment, and verification. Emergency fixes may need a faster process.

---

## 16. Database and Data Security

Data should be protected throughout collection, use, sharing, storage, backup, and deletion.

### Core controls

- Classify data by sensitivity.
- Collect only the data that is needed.
- Use parameterized queries.
- Give application accounts limited permissions.
- Encrypt sensitive data at rest and in transit.
- Protect and test backups.
- Mask or replace sensitive test data.
- Log important access without exposing secrets.
- Keep data only for the approved retention period.

Backups must be protected because they often contain the same sensitive information as the live database.

### Data concepts

- **Data masking:** Hides part of a value from users.
- **Tokenization:** Replaces sensitive data with a token and stores the mapping securely.
- **Anonymization:** Changes data so a person should no longer be identifiable.
- **Pseudonymization:** Replaces direct identifiers, but reconnection may still be possible with separate information.

---

## 17. Cloud Security

Cloud security uses shared responsibility. The provider protects some layers, while the customer remains responsible for other layers. The exact division depends on the service model.

| Model | Customer manages more of                              |
| ----- | ----------------------------------------------------- |
| IaaS  | Operating systems, applications, identities, and data |
| PaaS  | Applications, identities, settings, and data          |
| SaaS  | Identities, access, configuration, and data use       |

Common cloud problems include public storage, excessive permissions, exposed keys, unsafe network rules, and missing logs.

Use strong identity controls, short-lived credentials, encryption, private networking where needed, configuration checks, and centralized logging. Infrastructure as code can make settings repeatable and reviewable.

---

## 18. Mobile and Wireless Security

### Mobile safety

- Install applications from trusted sources.
- Keep the device and apps updated.
- Use a screen lock and device encryption.
- Review application permissions.
- Do not store secrets in application code.
- Protect local data and API communication.
- Support remote lock or wipe for managed devices.

### Wireless safety

Use modern Wi-Fi protection such as WPA3 where supported, a strong administrator password, updated router software, and a separate guest network.

Public Wi-Fi should be treated as untrusted. HTTPS protects supported application traffic, and an approved VPN may add protection for network traffic.

---

## 19. Security Monitoring and Incident Response

Monitoring collects and studies events so unusual activity can be found.

- Logs should include useful time, identity, action, source, and result information.
- System clocks should be synchronized.
- Access to logs should be limited.
- Important logs should be protected from change and kept for an approved period.
- Alerts should be tested and tuned so important signals are not hidden by noise.

A SIEM collects and connects events from many sources. A SOC is a team or function that monitors, investigates, and responds to security events.

### Incident response phases

1. **Preparation:** Set roles, tools, contacts, and procedures.
2. **Detection and analysis:** Confirm what happened and measure its scope.
3. **Containment:** Limit further damage.
4. **Eradication:** Remove the cause and attacker access.
5. **Recovery:** Restore safe service and monitor it.
6. **Lessons learned:** Improve controls and the response process.

Preserve evidence carefully. Record who handled it, when, where, and why. This record is called chain of custody.

---

## 20. Business Continuity and Recovery

Business continuity keeps important work running during disruption. Disaster recovery restores technology and data after a major failure.

- **RTO:** Maximum target time to restore a service.
- **RPO:** Maximum target amount of data loss measured in time.

If the RPO is one hour, backups or replication should make it possible to lose no more than about one hour of data under the designed event.

### Backup rule

A common plan keeps at least three copies of data, on two different storage types, with one copy off-site. Modern plans may also include an offline or immutable copy.

A backup is useful only if it can be restored. Test restoration, permissions, dependencies, and recovery time regularly.

---

## 21. Security Policies and Human Safety

A policy states what an organization expects. A standard gives required rules, a procedure gives steps, and a guideline gives recommended practice.

Common policies cover acceptable use, passwords, access, data handling, remote work, backups, incidents, vendors, and secure development.

Training should teach people how to recognize and report suspicious events. A safe reporting culture helps people report mistakes quickly instead of hiding them.

Security awareness does not replace technical controls. Systems should be designed so that one human mistake does not cause a large breach.

---

## 22. Common Security Tools

| Tool category | Purpose |
|---|---|
| Vulnerability scanner | Finds known weaknesses and unsafe settings |
| Port scanner | Finds reachable network ports and services |
| Packet analyzer | Captures and studies network traffic |
| SAST | Examines source or compiled code without running the full app |
| DAST | Tests a running application from the outside |
| SCA | Finds third-party components and known dependency risk |
| SIEM | Collects and connects security events |
| EDR | Monitors and responds to endpoint behavior |
| DLP | Helps detect or block unsafe movement of sensitive data |
| Password manager | Stores and creates unique credentials |

Use security tools only on systems you own or have clear permission to test. A tool report needs human review because it may contain false positives or miss real problems.

---

## 23. Interview Questions

### 1. What is the CIA triad?

Confidentiality prevents unauthorized reading, integrity protects correctness, and availability keeps systems usable.

### 2. What is the difference between a threat and vulnerability?

A threat may cause harm. A vulnerability is a weakness that the threat may use.

### 3. What is risk?

Risk is the possible loss when a threat affects an asset, commonly judged using likelihood and impact.

### 4. What is defense in depth?

It is the use of several independent security layers so one failed control does not expose everything.

### 5. Authentication versus authorization?

Authentication verifies identity. Authorization decides what that identity may access or do.

### 6. What is MFA?

MFA verifies identity with at least two different factor types, such as a password and a security key.

### 7. What is least privilege?

It gives a person, application, or device only the permissions needed for its work.

### 8. Encryption versus hashing?

Encryption is reversible with the correct key. Secure hashing is designed as a one-way transformation.

### 9. Symmetric versus asymmetric encryption?

Symmetric encryption uses one shared secret key and is fast. Asymmetric encryption uses a public-private key pair and supports signatures and key exchange.

### 10. What is a digital signature?

It is created with a private key and verified with a public key to support authenticity and integrity.

### 11. What is salting a password?

It adds unique random data before password hashing so equal passwords do not produce equal stored results.

### 12. IDS versus IPS?

An IDS detects and alerts. An IPS can also block traffic, depending on its position and rules.

### 13. What is SQL injection?

It happens when untrusted input changes the meaning of a database query. Parameterized queries are a main defense.

### 14. What is XSS?

Cross-site scripting lets attacker-controlled script run in another user's browser. Context-aware output encoding is a main defense.

### 15. What is CSRF?

It tricks an authenticated browser into sending an unwanted request. Anti-CSRF tokens and suitable cookie settings help prevent it.

### 16. What is zero trust?

It continuously checks access using identity, device, context, and policy instead of trusting a network location alone.

### 17. What is a zero-day vulnerability?

It is a vulnerability for which defenders have had no practical time to apply an official fix, often because it is newly discovered or exploited.

### 18. What are RTO and RPO?

RTO is the target restoration time. RPO is the target maximum data loss measured in time.

### 19. What should happen after a security incident?

Contain damage, preserve evidence, remove the cause, recover safely, communicate through the plan, and improve controls.

### 20. Why is HTTPS important?

HTTPS uses TLS to protect web traffic confidentiality and integrity and to authenticate the server through certificates.

---

## 24. MCQ Practice

### 1. Which CIA goal prevents unauthorized reading?

A. Availability  
B. Confidentiality  
C. Accounting  
D. Recovery

### 2. Which item is a vulnerability?

A. An unlocked administrator account  
B. A customer database  
C. A security policy  
D. A backup test

### 3. Which control finds suspicious activity?

A. Detective control  
B. Preventive control only  
C. Asset  
D. Threat

### 4. Which attack uses a targeted false message?

A. Worm  
B. Spear phishing  
C. DDoS  
D. Hashing

### 5. Which pair uses different authentication factors?

A. Password and PIN  
B. Two passwords  
C. Password and security key  
D. PIN and security question

### 6. Which principle gives only required permission?

A. Open access  
B. Least privilege  
C. Availability  
D. Repudiation

### 7. Which encryption uses one shared secret key?

A. Symmetric encryption  
B. Asymmetric encryption  
C. Hashing  
D. Tokenization

### 8. Which method is designed to be one-way?

A. Decryption  
B. Hashing  
C. Compression  
D. Encoding

### 9. Which tool can detect and block network traffic?

A. IPS  
B. Backup  
C. Password manager  
D. Compiler

### 10. What mainly prevents SQL injection?

A. Longer URLs  
B. Parameterized queries  
C. Hidden buttons  
D. Client-side color checks

### 11. Which cookie setting prevents JavaScript from reading a cookie?

A. HttpOnly  
B. Public  
C. Compress  
D. Visible

### 12. Which testing examines a running application?

A. DAST  
B. SAST  
C. Hashing  
D. RBAC

### 13. Who remains responsible for identity and data use in SaaS?

A. Nobody  
B. The customer  
C. Only an internet provider  
D. Only a certificate authority

### 14. Which phase limits ongoing incident damage?

A. Containment  
B. Planning  
C. Procurement  
D. Coding

### 15. What does an RPO describe?

A. Target maximum data loss in time  
B. Password length  
C. Number of firewall rules  
D. Encryption key type

<details>
<summary>Answer key</summary>

1. B — Confidentiality limits who can read data.  
2. A — An unsafe account is a weakness.  
3. A — Detective controls identify suspicious events.  
4. B — Spear phishing is prepared for a target.  
5. C — A password is knowledge and a key is possession.  
6. B — Least privilege limits permissions to a need.  
7. A — Symmetric systems use the same secret key.  
8. B — A secure hash is designed as one-way.  
9. A — An IPS can detect and block traffic.  
10. B — Parameters keep data separate from query instructions.  
11. A — HttpOnly blocks normal script access to the cookie.  
12. A — DAST tests a running application.  
13. B — Customers still control their identities and data use.  
14. A — Containment limits spread and damage.  
15. A — RPO measures acceptable data loss in time.

</details>

---

## 25. Practical Exercises

### Exercise 1: Asset and risk list

Choose a small web application. List five assets, possible threats, vulnerabilities, impact, and one control for each risk.

### Exercise 2: Access review

Create three job roles for a library system. Give each role only the actions it needs and explain least privilege.

### Exercise 3: Threat model

Draw a login flow with the browser, server, identity service, and database. Mark trust boundaries and possible attacks.

### Exercise 4: Password storage

Explain why plain text, reversible encryption, and a fast general hash are poor password-storage choices.

### Exercise 5: Secure query

Compare a query made by joining user input with a parameterized query. Identify where instructions and data become mixed.

### Exercise 6: Phishing review

Write a safe checklist for checking an urgent payment-change email without opening its link or attachment.

### Exercise 7: Incident table-top

Assume ransomware is found on one employee device. List detection, containment, evidence, recovery, and communication actions.

### Exercise 8: Backup plan

Choose RTO and RPO values for a student portal. Design backups and a restoration test that support them.

### Exercise 9: Secure configuration

Review a disposable local machine or lab image. List unnecessary services, old accounts, missing updates, and weak settings.

### Exercise 10: Log design

Design useful login event fields. Avoid storing passwords, full tokens, or other unnecessary private data.

Use only your own lab systems or systems for which you have clear testing permission.

---

## 26. Common Mistakes and Interview Tips

### Common mistakes

- Treating security as a final testing step.
- Trusting all users or devices inside a company network.
- Reusing passwords or sharing accounts.
- Giving applications administrator access.
- Storing passwords or secrets in source code.
- Building custom cryptography.
- Depending only on client-side validation.
- Logging passwords, tokens, or sensitive personal data.
- Ignoring dependency and device updates.
- Keeping backups without testing restoration.
- Collecting data without a clear need or retention period.
- Hiding incidents instead of reporting them quickly.

### Interview tips

- Start with the asset, threat, vulnerability, likelihood, and impact.
- Explain authentication before authorization.
- Do not confuse hashing, encryption, and encoding.
- Give both a preventive and detective control when possible.
- Say that access control must be checked on the server.
- Mention key management when discussing encryption.
- Use defense in depth instead of one perfect control.
- Explain the business reason and usability trade-off.
- Keep answers legal, defensive, and permission-based.

---

## 27. Rapid-Revision Cheat Sheet

| Concept | One-line revision |
|---|---|
| Confidentiality | Stops unauthorized reading |
| Integrity | Protects correctness and detects change |
| Availability | Keeps systems usable |
| Threat | Something that may cause harm |
| Vulnerability | A weakness that may be used |
| Risk | Possible loss based on likelihood and impact |
| Authentication | Verifies identity |
| Authorization | Decides allowed actions |
| Least privilege | Gives only needed access |
| MFA | Uses different authentication factor types |
| Symmetric encryption | Uses one shared secret key |
| Asymmetric encryption | Uses a public-private key pair |
| Hash | One-way fixed-size result |
| Digital signature | Supports authenticity and integrity |
| Salt | Unique random value used in password hashing |
| Firewall | Filters network traffic |
| IDS | Detects and alerts |
| IPS | Detects and may block |
| XSS | Runs attacker-controlled script in a browser |
| CSRF | Tricks a logged-in browser into a request |
| SQL injection | Untrusted input changes a database query |
| SIEM | Collects and connects security events |
| RTO | Target time to restore service |
| RPO | Target maximum data loss in time |
| Defense in depth | Uses several security layers |
| Zero trust | Verifies each request using context and policy |

### Final memory points

1. Protect confidentiality, integrity, and availability.
2. Risk depends on the asset, threat, weakness, likelihood, and impact.
3. Authenticate identity, then authorize every protected action.
4. Store passwords with a salted password-hashing function.
5. Encrypt sensitive data and manage keys safely.
6. Treat every external input as untrusted.
7. Patch, harden, monitor, and back up systems.
8. Prepare and practise incident response.
9. People need training, but systems also need technical controls.
10. Perform security testing only with clear permission.

---

Security is shared work. Use simple controls consistently, verify them often, and improve them after every lesson.
