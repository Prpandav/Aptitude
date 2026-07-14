# Time & Work - Fundamentals

## 1. Formulas

**Core Unit Work Continuity:**

$$
\text{Total Work} = \text{Efficiency} \times \text{Time}
$$

**Combined Two-Agent Framework:**

$$
\text{Time}_{(A+B)} = \frac{A \cdot B}{A + B} \quad \text{(or use the LCM Method)}
$$

**The Group Chain Rule Equation:**

$$
\frac{M_1 \cdot D_1 \cdot H_1}{W_1} = \frac{M_2 \cdot D_2 \cdot H_2}{W_2}
$$

## 2. Key Concepts

**Simple Explanation:** Time and Work problems deal with the relationship between the number of people working, the rate at which they work, and the time taken to finish a specific task. The most critical thing to understand is that **Time and Work are inversely proportional**. If your working speed/capacity doubles, the time required to complete the task drops by half.

**Real-World Intuition:** Imagine you and your friend are assigning GitHub Issues for a project. You can resolve 4 issues per day, and your friend can resolve 2 issues per day. Your *efficiencies* are **4** and **2**. If the project backlog has 12 total issues (*Total Work*), working together you resolve **4 + 2 = 6** issues per day. It will take you exactly $\frac{12}{6} = 2$ days to clear the backlog.

- **Inverse Relationship Factor:** Time required varies inversely with operational speed capacity.
- **The LCM Benchmark Setup:** Defining total work as the least common multiple of all individual timelines eliminates fractional calculation overhead entirely.
- **Combined Productivity:** Efficiency vectors stack linearly when agents collaborate simultaneously ($E_{\text{Total}} = E_1 + E_2 + \dots$).

## 3. Shortcuts

**Mental Math Trick: The LCM Breakdown**
Forget the standard textbook fraction formula ($\frac{1}{A} + \frac{1}{B}$) for a moment. Think in units:
1. Find the **LCM** of the individual time durations given. This LCM becomes your  **Total Work Units** .
2. Divide the Total Work by individual times to get their  **Daily Efficiency Units** .
3. Add efficiencies together to find the combined daily output, then divide Total Work by this sum.

**Efficiency Proportional Scaling:**
If $A$ is $K$ times more efficient than $B$, then: 

$$
\text{Ratio of Efficiency } (A:B) = K:1 \implies \text{Ratio of Time Taken } (A:B) = 1:K
$$

**The MDH Chain Rule Shortcut**
For multi-person variable scaling problems, remember the master balance equation: 
$$
\frac{M_1 \cdot D_1 \cdot H_1 \cdot E_1}{W_1} = \frac{M_2 \cdot D_2 \cdot H_2 \cdot E_2}{W_2}
$$
Where $M$ = Men, $D$ = Days, $H$ = Hours, $E$ = Efficiency rating, and $W$ = Total Work.

## 4. Common Mistakes

- **The Direct Addition Error:** Blindly adding time variables (e.g., 10 days + 15 days = 25 days). Remember, you **add efficiencies, never absolute time counts**.
- **The "Left Before Completion" Confusion:** If a person leaves 3 days *before* completion, students often mistakenly calculate from the beginning. It's much safer to calculate the work done *alone* by the remaining person during those final 3 days first.
- Inadvertently adding day counts together instead of converting values into fractional or unit-based daily capacity rates.
- Forgetting to scale down the work denominator when a group works on a fractional component of the project.
- When using the chain rule formula, making sure the "Work" ($W$) unit base is identical. If the second group is doing *double* the work, you must put $2$ in the denominator $W_2$.

## 5. Solved Examples

### Easy

**Problem:** $A$ can complete a coding project in **10** days, and $B$ can complete the same project in **15** days. How long will they take to complete it if they work together?

* **Step 1:** Find the LCM of **10** and **15**, which is **30**. Let **Total Work = 30 units**.
* **Step 2:** Find individual daily efficiencies:
  * Efficiency of $A = \frac{30}{10} = 3$ units/day.
  * Efficiency of $B = \frac{30}{15} = 2$ units/day.
* **Step 3:** Combined daily efficiency of $(A + B) = 3 + 2 = 5$ units/day.
* **Step 4:** Total time taken together $= \frac{\text{Total Work}}{\text{Combined Efficiency}} = \frac{30}{5} = \mathbf{6 \text{ days}}$.

### Medium

**Problem:** $A$ and $B$ together can build a web app interface in **12** days, while $B$ alone can do it in **30** days. In how many days can $A$ alone complete the work?

* **Step 1:** Find the LCM of **12** and **30**, which is **60**. Let **Total Work = 60 units**.
* **Step 2:** Find efficiencies:
  * Efficiency of $(A + B) = \frac{60}{12} = 5$ units/day.
  * Efficiency of $B = \frac{60}{30} = 2$ units/day.
* **Step 3:** Isolate $A$'s efficiency: Efficiency of $A = \text{Combined} - B = 5 - 2 = 3$ units/day.
* **Step 4:** Time taken by $A$ alone $= \frac{60}{3} = \mathbf{20 \text{ days}}$.

### Placement-Level

**Problem:** $A$ can finish a task in **24** days, $B$ in **9** days, and $C$ in **12** days. $B$ and $C$ start the work together but are forced to leave after **3** days. In how many days will $A$ finish the remaining work?

* **Step 1:** Find the LCM of **24, 9,** and **12**, which is **72**. Let **Total Work = 72 units**.
* **Step 2:** Compute individual daily efficiencies:
  * Efficiency of $A = \frac{72}{24} = 3$ units/day.
  * Efficiency of $B = \frac{72}{9} = 8$ units/day.
  * Efficiency of $C = \frac{72}{12} = 6$ units/day.
* **Step 3:** Calculate work done by $B$ and $C$ before leaving:
  * Combined efficiency of $(B + C) = 8 + 6 = 14$ units/day.
  * Work done in 3 days $= 14 \times 3 = 42$ units.
* **Step 4:** Calculate the remaining work: $72 - 42 = 30$ units.
* **Step 5:** Time taken by $A$ to clear the remaining units $= \frac{30}{3} = \mathbf{10 \text{ days}}$.

## 6. Practice Set

### Beginner Questions (10)

1. $X$ can do a piece of work in 20 days and $Y$ can do it in 30 days. How many days will they take working together?
2. $A, B,$ and $C$ can complete a job in 6, 12, and 24 hours respectively. If they all work together, how long will it take?
3. A person can paint a server room in 15 days. With the help of an assistant, the job is completed in 9 days. How long would the assistant take alone?
4. $A$ is twice as efficient as $B$. If $B$ can complete a software testing layout in 18 days, how many days will $A$ take?
5. If 15 men can build a database network wall in 6 days, how many men are required to build it in 2 days?
6. $P$ can do $\frac{1}{4}$ of a work in 5 days. How many days will he take to complete the entire work?
7. $A$ and $B$ can complete a project in 10 days. $B$ and $C$ can do it in 15 days, and $C$ and $A$ in 12 days. Find the time taken if all three work together.
8. If 8 developers can write a module code in 12 days working 6 hours a day, how many days will 6 developers take working 8 hours a day?
9. $A$ can finish a piece of work in 16 days. He works at it for 4 days and then leaves. In how many days can $B$ finish the remaining work if his individual total time capability is 24 days?
10. Two pipes can fill a storage cooling tank in 20 and 30 minutes respectively. If both are opened together, how long will it take to fill the tank?

### Intermediate Questions (5)

11. $A$ is $50\%$ more efficient than $B$. If $B$ takes 15 days to finish a coding layout, how many days will they take if they work together?
12. $A$ can complete a piece of work in 14 days, while $B$ takes 21 days. They begin together, but $A$ leaves 3 days before the work is expected to be completed. Find the total number of days taken to finish the task.
13. 12 men or 18 women can complete an enterprise architecture design project in 14 days. How many days will 8 men and 16 women take to finish the same work?
14. $A, B,$ and $C$ can complete a job in 10, 20, and 30 days respectively. $A$ starts the work, and he is assisted by $B$ on the second day and by $C$ on the third day alternately. On which day will the work be completed?
15. A contractor undertook to complete a college lab renovation setup in 40 days and deployed 100 men. After 35 days, he employed 100 more men and finished the work exactly on schedule. If he hadn't added the extra men, by how many days would the project have been delayed?

### Challenge Questions (2)

16. $A$ and $B$ working together can complete a complex ML pipeline engine build in 12 days. If $A$ works at half of his actual efficiency and $B$ works at triple his actual efficiency, the project is completed in 9 days instead. Find the time $A$ alone would take at his original efficiency.
17. Three teams work on an automation task. Team 1 and Team 2 together can complete it in 20 days. Team 2 and Team 3 together take 30 days. If Team 1 is twice as efficient as Team 3, find the absolute number of days Team 2 would take to finish the entire task alone.

## 7. Answers & Hints

**Beginner:**
1. **12 days** (LCM 60. Efficiencies: X=3, Y=2. $\frac{60}{5}$)
2. **$3\frac{3}{7}$ hours** (LCM 24. Eff: A=4, B=2, C=1. Total eff = 7. $\frac{24}{7}$)
3. **22.5 days** (LCM 45. Eff: P=3, P+A=5. Assistant eff = 2. $\frac{45}{2}$)
4. **9 days** (A works twice as fast, so he takes half the time $18/2$)
5. **45 men** ($15 \times 6 = M \times 2 \implies M = 45$)
6. **20 days** ($5 \times 4 = 20$)
7. **8 days** (LCM 60. $2(A+B+C) = 6+4+5 = 15 \implies A+B+C = 7.5$. $\frac{60}{7.5}$)
8. **12 days** ($8 \times 12 \times 6 = 6 \times D \times 8$)
9. **18 days** (A works 4 days = $\frac{4}{16} = \frac{1}{4}$ work. Remaining $\frac{3}{4}$ done by B: $\frac{3}{4} \times 24$)
10. **12 minutes** (Identical to Q1 logic)

**Intermediate:**
11. **6 days** (Efficiency ratio A:B = 3:2. Total work = $15 \times 2 = 30$. Together = $30/5$)
12. **$10\frac{1}{5}$ days** (LCM 42. A=3, B=2. B works alone for last 3 days = 6 units. 36 units done together in $36/5 = 7.2$ days. Total $7.2 + 3 = 10.2$)
13. **9 days** ($12M = 18W \implies 2M = 3W$. Total work = $18W \times 14 = 252W$. Group = $8M+16W = 12W+16W = 28W$. $\frac{252}{28} = 9$)
14. **8th day** (LCM 60. A=6, B=3, C=2. Cycle (3 days): $6 + 9 + 8 = 23$. Two cycles (6 days) = 46. Day 7 (A) = $46+6=52$. Day 8 (A+B) finishes the rest)
15. **5 days** (Work done by extra 100 men in last 5 days = 500 man-days. Original 100 men would need 5 extra days to do this work)

**Challenge:**
16. **18 days** ($(A+B)12 = W$. $(0.5A+3B)9 = W \implies 12A+12B = 4.5A+27B \implies 7.5A = 15B \implies A = 2B$. Work = $12(2B+B) = 36B$. A's time = $36B/2B$)
17. **60 days** ($T_1+T_2 = \frac{1}{20}$ and $T_2+T_3 = \frac{1}{30}$. Subtracting gives $T_1 - T_3 = \frac{1}{60}$. Since $T_1 = 2T_3$, $T_3 = \frac{1}{60}$, $T_1 = \frac{2}{60}$. $T_2 = \frac{1}{20} - \frac{2}{60} = \frac{1}{60}$)
