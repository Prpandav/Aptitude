# Topic Name: Averages - Fundamentals

## Formula

- **Arithmetic Mean:**
  $$
  \text{Average} = \frac{\text{Sum of Observations}}{\text{Total Count}}
  $$
- **Missing/Replaced Value:**
  $$
  \text{New Value} = \text{Old Value} + (\text{Total Count} \times \text{Change in Average})
  $$
- **Average of Consecutive Arithmetic Progression (AP):**
  $$
  \text{Average} = \frac{\text{First Term} + \text{Last Term}}{2}
  $$

## Key Concepts

- **The Central Baseline:** An average acts as the mathematical center of gravity for a data array.
- **The Displacement Impact:** Adding or removing an outlier shifts the total sum by an amount distributed completely evenly across the entire group count.
- **Uniform Operations:** If every single element in a dataset is increased, decreased, multiplied, or divided by a constant $K$, the net average changes by that exact same constant $K$.

## Shortcuts

- **Assumed Mean Method:** Pick a round benchmark value, total up individual positive/negative offsets, divide the offset sum by total count, and append the result to the benchmark.
- **Consecutive Arrays:** For any odd number of elements in a perfect uniform progression (like consecutive odd/even numbers), the exact middle term *is* the average.

## Mistakes

- Blindly calculating the average of averages without considering if the underlying group weights or sample sizes are identical.
- Forgetting to adjust the total count denominator when an element is added or removed from the system.

## 1. Concept Explanation

### Simple Explanation

An **Average** (specifically the arithmetic mean) is the value that represents a set of numbers as if they were all equalized. Imagine you have 3 blocks of different heights. If you melt them down and recreate 3 blocks of identical height using the same amount of material, that uniform height is the average.

### Real-World Intuition

Think of a group of friends ordering food. Some order expensive dishes, others order small sides, but at the end, they decide to "split the bill evenly." The amount each person pays is the **average cost** of the meal. It smooths out individual variations to find a central baseline.

### Mental Math Trick: The Deviation (Assumed Mean) Method

Instead of adding massive numbers together to find an average, guess a reasonable average first (called an assumed mean), find how much each number deviates from it, average the deviations, and add it back.

 **Example:** Find the average of **$88, 92, 85, 94,$** and **$91$**.

 * Step 1: Assume an average close to the numbers. Let's pick  **$90$** .
 * Step 2: Find the deviation of each number from 90:

   $$
   (88-90) + (92-90) + (85-90) + (94-90) + (91-90)
   $$

   $$
   = -2 + 2 - 5 + 4 + 1 = \mathbf{0}
   $$
 * Step 3: Since the net deviation is **$0$**, your assumed average is the exact average:  **$90$** .

## 2. Solved Examples

### Easy

**Problem:** The weights of 5 students in a college group are 42 kg, 45 kg, 48 kg, 50 kg, and 55 kg. Find their average weight.

* **Step 1:** Calculate the sum of all weights: **$42 + 45 + 48 + 50 + 55 = 240 \text{ kg}$**.
* **Step 2:** Count the number of observations: **$5$**.
* **Step 3:** Apply the formula: **$\text{Average} = \frac{240}{5} = \mathbf{48 \text{ kg}}$**.

### Medium

**Problem:** The average age of a class of 30 students is 15 years. If the age of the teacher is included, the average age increases by 1 year. Find the age of the teacher.

* **Step 1:** Find the initial total sum of ages: **$\text{Sum}_{30} = 30 \times 15 = 450 \text{ years}$**.
* **Step 2:** Find the new total number of people: **$30 + 1 = 31$**.
* **Step 3:** Find the new average: **$15 + 1 = 16 \text{ years}$**.
* **Step 4:** Find the new total sum of ages: **$\text{Sum}_{31} = 31 \times 16 = 496 \text{ years}$**.
* **Step 5:** The teacher's age is the difference between the two sums: **$496 - 450 = \mathbf{46 \text{ years}}$**.

### Placement-Level

**Problem:** The average expenditure of a man for the first 5 months of a year is ₹5000 and for the next 7 months it is ₹5400. If he saves ₹2300 during the entire year, find his average monthly income.

* **Step 1:** Find the total expenditure for the first 5 months: **$5 \times 5000 = ₹25,000$**.
* **Step 2:** Find the total expenditure for the remaining 7 months: **$7 \times 5400 = ₹37,800$**.
* **Step 3:** Calculate the total expenditure for the whole year: **$25000 + 37800 = ₹62,800$**.
* **Step 4:** Find the total income for the year (Total Expenditure + Total Savings): **$62800 + 2300 = ₹65,100$**.
* **Step 5:** Calculate the average monthly income over the 12 months: **$\frac{65100}{12} = \mathbf{₹5425}$**.

## 3. Practice Set

### Beginner Questions (10)

1. Find the average of the first 10 natural numbers.
2. The marks obtained by a student in 4 subjects are 78, 85, 92, and 65. Find the average marks.
3. If the average of 5 consecutive odd numbers is 25, find the smallest number.
4. The average of 8 numbers is 12. If each number is multiplied by 3, what will be the new average?
5. The average salary of 6 workers is ₹12,000. If one worker leaves and the average salary drops to ₹11,500, find the salary of the worker who left.
6. Find the average of all prime numbers between 10 and 20.
7. The average age of 4 brothers is 12 years. If the age of their mother is added, the average increases by 5 years. Find the mother's age.
8. If the sum of 7 numbers is 1050, find their average.
9. The average of three numbers **$A, B,$** and **$C$** is 45. If **$A + B = 90$**, find the value of **$C$**.
10. Find the average of the first 5 multiples of 4.

### Intermediate Questions (5)

11. The average temperature for Monday, Tuesday, and Wednesday was **$38^\circ\text{C}$**. The average for Tuesday, Wednesday, and Thursday was **$40^\circ\text{C}$**. If the temperature on Thursday was **$39^\circ\text{C}$**, find the temperature on Monday.
12. Out of 9 persons, 8 persons spent ₹30 each for their meals. The 9th person spent ₹20 more than the average expenditure of all the nine. Find the total money spent by all of them.
13. The average weight of 8 sailors in a boat is increased by **$1.5 \text{ kg}$** when a sailor weighing **$56 \text{ kg}$** is replaced by a new man. Find the weight of the new sailor.
14. A batsman makes a score of 87 runs in his 17th inning and thus increases his career average by 3 runs. Find his average after the 17th inning.
15. The average age of a husband and wife was 23 years when they were married 5 years ago. The average age of the husband, wife, and their child today is 20 years. Find the present age of the child.

### Challenge Questions (2)

16. In an IT team of 20 developers, the average salary is ₹60,000 per month. The highest-paid Senior Architect and the lowest-paid Intern are excluded from a data audit. The average salary of the remaining 18 developers drops to ₹58,500. If the Senior Architect earns ₹1,50,000 per month, find the monthly salary of the intern.
17. The average of 50 numbers is 38. If two numbers, namely 45 and 55, are discarded, find the average of the remaining numbers (correct to two decimal places).

## 4. Mistake Analysis

### Common Traps

* **The Direct Average Trap:** If a car travels from point A to B at **$40 \text{ km/h}$** and returns at **$60 \text{ km/h}$**, the average speed is **not** **$\frac{40+60}{2} = 50 \text{ km/h}$**. Because the time taken for both journeys is different, this requires a harmonic mean approach (which we will dive deeper into during Phase 2).
* **The "Consecutive" Miscount:** When dealing with consecutive even or odd numbers, students often forget that the gap between consecutive terms is **$2$**, not **$1$**.

### Shortcut Dangers

* When using the substitution/replacement shortcut, make sure you note whether the net average *increased* or  *decreased* . A common sign error will make you add weight instead of subtracting it.

## 5. Speed Building

### Concept of Balanced Deviation (Net Zero)

For any group of numbers, the sum of deviations below the average must perfectly equal the sum of deviations above the average.

If an exam score average for 5 students is 70, and four students scored -5, -3, +6, and +4 relative to 70, the net deviation so far is **$+2$**. The fifth student **must** be **$-2$** relative to the average (**$70 - 2 = 68$**) to keep the system balanced. You don't need to add up the absolute scores to find the missing variable.

---

# Answers & Hints

**Beginner:**
1. **5.5** ($\frac{n+1}{2} \implies \frac{10+1}{2} = 5.5$)
2. **80** ($\frac{78 + 85 + 92 + 65}{4} = \frac{320}{4}$)
3. **21** (Average of odd AP is the middle term. Terms: 21, 23, [25], 27, 29)
4. **36** (If each number is multiplied by $K$, new avg is multiplied by $K$. $12 \times 3$)
5. **₹14,500** ($Total_{6} = 72,000$. $Total_{5} = 57,500$. Difference = $14,500$)
6. **15** (Primes: 11, 13, 17, 19. $\frac{60}{4} = 15$)
7. **37 years** ($Total_{4} = 48$. $Total_{5} = 5 \times 17 = 85$. $85 - 48 = 37$)
8. **150** ($\frac{1050}{7}$)
9. **45** ($A+B+C = 45 \times 3 = 135$. $C = 135 - 90 = 45$)
10. **12** (Multiples: 4, 8, 12, 16, 20. Middle term is the average)

**Intermediate:**
11. **$33^\circ\text{C}$** ($M+T+W = 114$. $T+W+Th = 120$. $Th = 39 \implies T+W = 81$. $M = 114 - 81 = 33$)
12. **₹292.5** (Let avg be $A$. Total $= 9A$. $8(30) + (A + 20) = 9A \implies 8A = 260 \implies A = 32.5$. Total $= 9 \times 32.5$)
13. **68 kg** (Increase = $8 \times 1.5 = 12 \text{ kg}$. New man = $56 + 12 = 68$)
14. **39 runs** ($16x + 87 = 17(x+3) \implies x=36$. New avg = $36+3=39$)
15. **4 years** ($H+W$ present = $2 \times (23+5) = 56$. $H+W+C$ present = $3 \times 20 = 60$. $C = 60 - 56 = 4$)

**Challenge:**
16. **-₹3,000** ($Total_{20} = 12,00,000$. $Total_{18} = 10,53,000$. Sum of excluded = $1,47,000$. $1,50,000 + Intern = 1,47,000 \implies -3,000$. *Note: Intentional trick or flawed problem data!*)
17. **37.50** (New Sum = $1900 - (45+55) = 1800$. New Avg = $\frac{1800}{48} = 37.5$)
