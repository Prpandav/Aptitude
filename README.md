# Aptitude

Welcome to the Aptitude Preparation repository! This project contains study materials, formulas, shortcuts, and practice questions to help you master various aptitude topics for placements, academic tests, and competitive exams.

**Consistency over intensity.** One optimized push a day keeps the placement anxiety away.

Every topic is mapped out linearly.

## Table of Contents

<div align="center">

|  #  | Topic                                                                                  | Tags                                        |
| :-: | :------------------------------------------------------------------------------------- | :------------------------------------------ |
|  00 | 🧮 [Formulas](./00_formulas.md)                                           | Pre-Exam Revision          |
|  01 | 📊 [Percentages - Fundamentals](./01_percentages.md)                                   | 🌱 Beginner Friendly · ⭐ Must Know          |
|  02 | ⚖️ [Ratio & Proportion - Fundamentals](./02_Ratio%20&%20Proportion.md)                 | 🔥 Frequently Asked · ⭐ Must Know           |
|  03 | 📈 [Averages - Fundamentals](./03_Average.md)                                          | ⚡ Quick Win · ⭐ Must Know                  |
|  04 | 💰 [Profit & Loss - Fundamentals](./04_Profit%20&%20Loss.md)                           | 🔥 Frequently Asked · 🏆 Placement Favorite |
|  05 | 🏦 [Simple Interest - Fundamentals](./05_Simple%20Interest.md)                         | 🌱 Beginner Friendly                        |
|  06 | 💎 [Compound Interest - Fundamentals](./06_Compound%20Interest.md)                     | 🎯 Exam Favorite                            |
|  07 | ⏳ [Time & Work - Fundamentals](./07_Time%20&%20Work.md)                                | 🔥 Frequently Asked · 🏆 Placement Favorite |
|  08 | 🚗 [Time, Speed & Distance - Fundamentals](./08_time_speed_distance.md)                | 🔥 Frequently Asked · ⭐ Must Know           |
|  09 | 🧪 [Mixtures & Alligations - Fundamentals](./09_Mixtures%20&%20Alligations.md)         | 🎯 Exam Favorite                            |
|  10 | 🎲 [Probability - Fundamentals](./10_Probability.md)                                   | 🎯 Exam Favorite · 🚀 Advanced Topic        |
|  11 | 🔀 [Permutations & Combinations - Fundamentals](./11_Permutations_Combinations.md)     | 🚀 Advanced Topic                           |
|  12 | 🔢 [Number Systems - Fundamentals](./12_Number_Systems.md)                             | ⭐ Must Know · 💡 Concept Builder            |
|  13 | 📉 [Data Interpretation - Fundamentals](./13_Data_Interpretation.md)                   | 🏆 Placement Favorite · 📈 High ROI         |
|  14 | 🔍 [Number Series & Coding - Fundamentals](./14_Number_Series.md)                      | 🧩 Problem Solving                          |
|  15 | 🧠 [Logical Reasoning - Fundamentals](./15_Logical_Reasoning.md)                       | 🏆 Placement Favorite · 🧩 Problem Solving  |
|  16 | 🪑 [Seating Arrangement & Puzzles - Fundamentals](./16_Seating_Arrangement_Puzzles.md) | 🧩 Problem Solving · 🚀 Advanced Topic      |
|  17 | 📐 [Geometry & Mensuration - Fundamentals](./17_Geometry_Mensuration.md)               | ⭐ Must Know                                 |
|  18 | 🕒 [Clocks & Calendars - Fundamentals](./18_Clocks_Calendars.md)                       | ⚡ Quick Win                                 |
|  19 | 🚤 [Boats & Streams - Fundamentals](./19_Boats%20&%20Streams.md)                       | 🎯 Exam Favorite                            |
|  20 | 🚰 [Pipes & Cisterns - Fundamentals](./20_Pipes%20&%20Cisterns.md)                     | 🔥 Frequently Asked                         |
|  21 | 👨‍👩‍👧 [Ages - Fundamentals](./21_Problems_on_Ages.md)                               | 🌱 Beginner Friendly · ⚡ Quick Win          |
|  22 | 🔢 [HCF & LCM & Divisibility Rules - Fundamentals](./22_HCF_LCM_Divisibility_Rules.md)                     | ⭐ Must Know · 💡 Concept Builder            |
</div>

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
* **`mock_generator.py` (The Compiler):** A Python script that shuffles the active database, pulls a randomized subset of questions across different topics, and compiles a fresh Markdown exam.

### How to Execute a Mock Simulation

To test your speed and accuracy, run the Python automation script from your terminal:

```bash
# Execute the mock generation engine
python scripts/mock_generator.py