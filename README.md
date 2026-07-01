# Aptitude Mastery & Placement Simulation Engine

Welcome to the ultimate placement preparation repository! This project is a dual-purpose ecosystem: it contains **comprehensive theoretical study materials** for mastering quantitative aptitude, and **CrackTheTape**, an enterprise-grade web application engineered to simulate real-world IT placement environments (e.g., TCS iON, AMCAT).

**Consistency over intensity.** One optimized push a day keeps the placement anxiety away.

---

### Architecture: The 10-Bucket NLP Engine (Backend)

The core innovation is the `route.js` API. It utilizes a **Waterfall NLP Parsing Pipeline** to analyze the correct answer using Regex and dynamically generate deceptive options on the fly.

* **Math Variance Engine:** Isolates numbers from suffixes/prefixes (e.g., `15 km/hr`, `25%`) and mathematically scales realistic alternative options.
* **Semantic Dictionaries:** Recognizes categorical data (Directions, Blood Relations) and pulls contextually accurate distractors.
* **Logical Matrices:** Automatically formats standardized answers for Syllogisms and Data Sufficiency.
* **Fraction & Ratio Mutators:** Intelligently flips, shifts, and alters ratios and fractions.

### Proctor-Style Dashboard (Frontend)

* **Enterprise Light Theme:** A high-contrast, distraction-free UI mimicking corporate testing software.
* **Real-time State Management:** Track attempted, unattempted, and "Marked for Review" questions.
* **Execution Analytics:** Auto-grades upon submission with detailed reports and engine logic formulas.
* **Fluid Micro-interactions:** Powered by Framer Motion for tactile feedback.

### Booting the Web Engine

```bash
# Navigate to the platform directory
cd aptitude-platform

# Install dependencies
npm install

# Initialize the local server
npm run dev
```

## Table of Contents

<div align="center">

## How to Use This Repository

Each topic is covered in its own Markdown file. Inside, you will generally find:

1. **Formulas:** Core mathematical formulas needed.
2. **Key Concepts:** Basic intuition, rules, and real-world analogies.
3. **Shortcuts:** Mental math tricks and speed-building techniques.
4. **Common Mistakes:** Pitfalls, traps, and calculation errors to avoid.
5. **Solved Examples:** Step-by-step solutions categorized by difficulty.
6. **Practice Set:** A categorized set of questions for you to test your knowledge.
7. **Answers & Hints:** Quick keys to verify your practice work.

Grab a notebook, read through the concepts, and try to solve the practice problems before checking the solutions!

Happy studying!

---

### The Engineering Architecture (`/scripts`)

* **`question_bank.py` (The Database):** A massive static data store (NoSQL-style dictionary) containing placement-level questions mapped by topic and difficulty level.
* **`mock_generator.py` (The Compiler):** A Python script that shuffles the active database, pulls a randomized subset of questions across different topics, and compiles a fresh Markdown exam 
