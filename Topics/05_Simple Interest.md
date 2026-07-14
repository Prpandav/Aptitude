# Simple Interest - Fundamentals

## 1. Formulas

**Simple Interest Calculation:**

$$
\text{Simple Interest (SI)} = \frac{P \times R \times T}{100}
$$

Where:
* **$P$** = **Principal** (The initial money invested or borrowed)
* **$R$** = **Rate of Interest** (Percentage charged per year)
* **$T$** = **Time** (Must always be expressed in years)

**Total Maturity Amount:**

$$
A = P + \text{SI} = P\left(1 + \frac{R \times T}{100}\right)
$$

**The $n$-times Scaling Rule:**
If a sum of money becomes $n$ times itself in a given timeframe:

$$
(n - 1) \times 100 = R \times T
$$

## 2. Key Concepts

**Simple Explanation:** When you borrow or lend money, a fee is charged for using that money over time. This fee is called **Interest**. **Simple Interest** means the interest is calculated *only* on the original amount of money you started with. No matter how many years pass, the interest earned each year remains exactly the same because the base amount never changes.

**Real-World Intuition:** Imagine you lend **₹10,000** to a college friend to buy an IoT development kit, charging a simple interest rate of **10%** per year.
* In Year 1, they owe you **10%** of **10,000 = ₹1000** in interest.
* In Year 2, they owe another **₹1000** in interest.
* If they pay you back after 3 years, they owe you the original principal (**₹10,000**) plus 3 years of uniform interest (**₹3000**), totaling **₹13,000**.

- **Linear Interest Growth:** Interest builds up strictly on the initial Principal. The interest added in Year 1 matches the interest added in Year 100 perfectly.
- **Time Harmonization:** Time ($T$) is an absolute annualized metric. Months must be normalized over 12, and days normalized over 365.
- **Constant Principal Value:** The underlying financial asset baseline remains completely static throughout the life of the transaction.

## 3. Shortcuts

**Mental Math Trick: The $R \times T$ Net Percentage**
Instead of plugging numbers into the fraction formula every time, mentally multiply $R$ and $T$ to find the *Total Interest Percentage*.
*Example:* Find the SI on ₹5000 at 6% per annum for 4 years.
* Net Interest Percentage = $6\% \times 4 \text{ years} = 24\%$.
* Calculate 24% of 5000: Total Interest = ₹1200.

**The "Money Multiplier" Framework $(n-1)$**
If a sum of money becomes $n$ times itself in a given timeframe under simple interest, the rate or time can be directly solved without tracking variables:
$$
(n - 1) \times 100 = R \times T
$$
*Example:* A sum becomes 6 times itself in 20 years. Find $R$.
* $n = 6 \implies (6 - 1) = 5$.
* $5 \times 100 = R \times 20 \implies 500 = 20R \implies R = 25\%$.

- **73-Day Divisor:** Recognise that 73 days translates to precisely $\frac{1}{5}$ of a standard year ($73 / 365 = 0.2$).
- **Delta Income Method:** If interest rates go up by $\Delta R\%$, the absolute interest income expands by exactly: 
  $$
  \Delta \text{SI} = \frac{P \times \Delta R \times T}{100}
  $$

## 4. Common Mistakes

- **The Time-Unit Trap:** The value of $T$ in the equation **must be in years**. If the question gives time as 6 months, convert it to years first ($\frac{6}{12} = 0.5$). Similarly, days must be divided by 365.
- **Confusing Amount with Interest:** Read carefully whether a phrase says "the money *becomes* ₹X" (meaning Amount = Principal + Interest) or "the money *earns* ₹X" (meaning Interest = ₹X).
- **Shortcut Dangers:** When using the scaling trick (e.g., money doubling in $N$ years), remember that it is the **Interest** that grows linearly, not the total amount. If a sum doubles ($A=2P$), it earned exactly $1P$ in interest. To triple ($A=3P$), it must earn $2P$ in interest, taking exactly twice the initial time.
- Unintentionally tracking the growth rate using Compound Interest paradigms.

## 5. Solved Examples

### Easy

**Problem:** A student takes a loan of **₹20,000** to purchase a laptop for a full-stack web development course at an annual simple interest rate of **5%**. How much interest will accumulate over **3** years?

* **Step 1:** Extract the variables: **$P = 20000$**, **$R = 5$**, **$T = 3$**.
* **Step 2:** Apply the SI formula: **$\text{SI} = \frac{20000 \times 5 \times 3}{100}$**
* **Step 3:** Simplify: **$200 \times 15 = \mathbf{₹3000}$**.

### Medium

**Problem:** A sum of money triples itself in **8** years at a certain rate of simple interest. Find the rate of interest per annum.

* **Step 1:** Use an assumed clean base value. Let the initial Principal (**$P$**) = **100**.
* **Step 2:** If the money triples, the final Amount (**$A$**) = **300**.
* **Step 3:** Calculate the accumulated Simple Interest: **$\text{SI} = A - P = 300 - 100 = 200$**.
* **Step 4:** Substitute into the SI formula with **$T = 8$**:

  $$
  200 = \frac{100 \times R \times 8}{100} \implies 200 = 8R
  $$
* **Step 5:** Isolate **$R$**: **$R = \frac{200}{8} = \mathbf{25\% \text{ per annum}}$**.

### Placement-Level

**Problem:** A sum of ₹4000 is split into two parts such that if one part is invested at **3%** simple interest and the other at **5%**, the total annual interest received is ₹144. Find the amount invested at **3%**.

* **Step 1:** Let the amount invested at **3%** be **$x$**. Therefore, the amount invested at **5%** is **$(4000 - x)$**.
* **Step 2:** Set up the total interest equation for **$T = 1 \text{ year}$**:

  $$
  \left( \frac{x \times 3 \times 1}{100} \right) + \left( \frac{(4000 - x) \times 5 \times 1}{100} \right) = 144
  $$
* **Step 3:** Clear the common denominator by multiplying the entire equation by 100:

  $$
  3x + 5(4000 - x) = 14400
  $$

  $$
  3x + 20000 - 5x = 14400
  $$
* **Step 4:** Solve for **$x$**:

  $$
  -2x = 14400 - 20000 \implies -2x = -5600 \implies x = \mathbf{₹2800}.
  $$

  *(Thus, ₹2800 was invested at 3% and ₹1200 at 5%.)*

## 6. Practice Set

### Beginner Questions (10)

1. Find the simple interest on ₹8000 at **7%** per annum for 2 years.
2. What will be the final amount if ₹15,000 is borrowed at **9% p.a.** simple interest for 4 years?
3. At what rate of simple interest will ₹5000 yield ₹1000 as interest in 2 years?
4. How many years will it take for ₹3000 to earn ₹900 in interest at an **10%** annual rate?
5. Find the simple interest on ₹12,000 invested at **6%** per annum for exactly 8 months.
6. A sum of money doubles itself in 5 years at simple interest. Find the annual interest rate.
7. If **SI = ₹450**, **$R = 5\%$**, and **$T = 3 \text{ years}$**, calculate the principal value.
8. Find the simple interest on ₹7300 at **12%** per annum from January 1st to March 15th of a non-leap year (exactly 73 days).
9. The simple interest earned on a sum is **$\frac{1}{9}$** of the principal. If the numerical value of the rate percent matches the time in years, find the rate percent.
10. If an amount of ₹1120 is received after investing a principal of ₹1000 for 2 years, find the annual interest rate.

### Intermediate Questions (5)

11. A sum of money amounts to ₹920 in 3 years and to ₹1040 in 5 years under simple interest. Find the original principal sum.
12. A man invests one-third of his capital at **7%**, one-fourth at **8%**, and the remainder at **10%** simple interest. If his annual interest income is ₹561, find his total capital.
13. If the simple interest for 4 years on a certain sum is ₹600, and for the next 4 years the principal is made 3 times, find the total interest earned at the end of 8 years.
14. A person borrows ₹5000 for 2 years at **4%** simple interest. He immediately lends it to another person at **6.25%** simple interest for 2 years. Find his total gain in the transaction per year.
15. A sum was put at simple interest at a certain rate for 3 years. Had it been put at a **2%** higher rate, it would have fetched ₹360 more. Find the initial principal.

### Challenge Questions (2)

16. An enterprise software system can be purchased upfront for ₹50,000 cash, or down-paid for ₹20,000 followed by two equal annual installments of ₹16,500. Find the rate of simple interest charged under the installment plan.
17. A person invested a total of ₹1,20,000 in three different simple interest schemes yielding **4%, 6%, and 9%** annual interest respectively. At the end of the year, the interest earned from all three schemes was found to be identical. Find the amount invested in the **9%** interest scheme.

## 7. Answers & Hints

**Beginner:**
1. **₹1120** ($8000 \times 0.07 \times 2$)
2. **₹20,400** ($15000 + (15000 \times 0.09 \times 4) = 15000 + 5400$)
3. **10%** ($1000 = \frac{5000 \times R \times 2}{100}$)
4. **3 years** ($900 = \frac{3000 \times 10 \times T}{100}$)
5. **₹480** ($12000 \times \frac{6}{100} \times \frac{8}{12}$)
6. **20%** ($(2-1) \times 100 = 5 \times R$)
7. **₹3000** ($450 = \frac{P \times 5 \times 3}{100}$)
8. **₹175.20** ($7300 \times \frac{12}{100} \times \frac{73}{365} = 7300 \times 0.12 \times 0.2$)
9. **3.33%** ($\frac{P}{9} = \frac{P \times R^2}{100} \implies R^2 = \frac{100}{9} \implies R = \frac{10}{3}$)
10. **6%** ($SI = 120$. $120 = \frac{1000 \times R \times 2}{100}$)

**Intermediate:**
11. **₹740** ($SI_{2\text{yrs}} = 1040 - 920 = 120$. $SI_{1\text{yr}} = 60$. $P = 920 - 180$)
12. **₹6,600** ($P(\frac{1}{3} \times 0.07 + \frac{1}{4} \times 0.08 + \frac{5}{12} \times 0.10) = 561$)
13. **₹2,400** (First 4 yrs SI = 600. Next 4 yrs $P$ is tripled, so SI = 1800. Total = 2400)
14. **₹112.50** ($\text{Gain} = \frac{5000 \times (6.25 - 4) \times 1}{100}$)
15. **₹6,000** ($\Delta \text{SI} = 360 = \frac{P \times 2 \times 3}{100}$)

**Challenge:**
16. **6.89%** ($P_{\text{balance}} = 30000$. Debt Amount = $30000 + 600R$. Installment Value = $16500 \times 2 + 165R = 33000 + 165R$. $435R = 3000 \implies R \approx 6.89\%$)
17. **₹25,263.15** ($P_1 \times 4\% = P_2 \times 6\% = P_3 \times 9\%$. Ratio $= 9:6:4$. Amount $= \frac{4}{19} \times 120000$)
