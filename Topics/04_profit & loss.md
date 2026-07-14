# Profit & Loss - Fundamentals

## 1. Formulas

**Profit Target:**

$$
SP = CP \times \left( \frac{100 + P\%}{100} \right)
$$

**Loss Target:**

$$
SP = CP \times \left( \frac{100 - L\%}{100} \right)
$$

**Marked Price Relationship:**

$$
MP \times (100 - \text{Discount}\%) = CP \times (100 + \text{Profit}\%)
$$

**Two Identical SPs ($+K\%$ and $-K\%$):** Always a net loss of

$$
\left(\frac{K}{100}\right)^2\%
$$

## 2. Key Concepts

**Simple Explanation:** Profit and Loss is simply the mathematical tracking of financial transactions. Every transaction revolves around two baseline values: how much you paid to get an item (**Cost Price**), and how much you sold it for (**Selling Price**). If you sell for more than you paid, you made a **Profit**. If you sell for less, you took a **Loss**.
**Real-World Intuition:** Imagine you build a custom mechanical keyboard. If the PCB, switches, and keycaps cost you ₹4000 total ($CP$) and you sell the completed build for ₹5000 ($SP$), you made a raw profit of ₹1000. Relative to your initial investment, your return is $\frac{1000}{4000} = 25\%$.
- **Cost Price (CP):** The absolute financial baseline. All basic performance percentages anchor here.
- **Marked Price (MP):** The listed or printed retail price. **Discounts are always deducted from the MP.**
- **False Weight Mechanics:** Profit is generated not by raising prices, but by shrinking the true investment denominator ($CP$ weight).

## 3. Shortcuts

**The Price-Quantity Inversion Principle:** If you see a problem stating: *"The cost price of X items equals the selling price of Y items,"* do not waste time writing tracking variables. Simply invert the values: Let $CP = Y$ and $SP = X$.
**The Multiplying Factor (MF):** Instead of using long algebraic equations to find the SP, use decimal or fractional multipliers directly. If profit is $20\%$, $SP = 1.2 \times CP$. If loss is $16.66\%$ ($\frac{1}{6}$), $SP = \frac{5}{6} \times CP$.
- **Object Equivalency Flip:** If $A \cdot CP = B \cdot SP$, swap coefficients directly to read $CP = B$ and $SP = A$.
- **Successive Discount Compound:** Combined value of discounts $D_1$ and $D_2 = D_1 + D_2 - \frac{D_1 \cdot D_2}{100}$.

## 4. Common Mistakes

**The Symmetrical SP Myth:** If two identical items are sold for the exact same selling price—one at a gain of $K\%$ and another at a loss of $K\%$, the transaction **always results in a net loss**. It is *never* a break-even scenario. The absolute loss is $\left(\frac{K}{100}\right)^2\%$.
**Base Inflation Error:** Calculating discounts on the Cost Price instead of the **Marked Price (MP)**, or calculating profits on the Selling Price out of habit.
- Computing raw margin percentages over Selling Price values during fast multivariable sweeps.
- Forgetting that when a cash discount value is introduced, it must be subtracted directly from Marked Price before trying to compute the final transaction yield.
**Shortcut Dangers:** When working with successive discounts (e.g., $30\%$ off + $20\%$ off), never add them up directly to call it a $50\%$ discount. The second discount applies to the *already reduced* price.

## 5. Solved Examples

### Easy

**Problem:** An item bought for **$₹800$** is sold at a profit of **$12.5\%$**. Find its selling price.

* **Step 1:** Identify the Cost Price: **$CP = ₹800$**.
* **Step 2:** Convert the profit percentage to its standard fraction: **$12.5\% = \frac{1}{8}$**.
* **Step 3:** Calculate the absolute profit value: **$\text{Profit} = \frac{1}{8} \times 800 = ₹100$**.
* **Step 4:** Calculate Selling Price: **$SP = CP + \text{Profit} = 800 + 100 = \mathbf{₹900}$**.

### Medium

**Problem:** By selling an article for **$₹1440$**, a shopkeeper suffers a loss of **$10\%$**. At what price should he sell it to gain **$15\%$**?

* **Step 1:** The **$SP$** of **$₹1440$** represents a **$10\%$** loss, meaning it equals **$90\%$** of the original **$CP$**.
  $$
  90\% \text{ of } CP = 1440 \implies CP = \frac{1440 \times 100}{90} = ₹1600
  $$
* **Step 2:** Now, you want a new selling price (**$SP_2$**) that yields a **$15\%$** gain. This means **$SP_2$** must be **$115\%$** of the **$CP$**.
  $$
  SP_2 = 115\% \text{ of } 1600 = \frac{115}{100} \times 1600
  $$
* **Step 3:** Multiply mentally: **$115 \times 16 = (115 \times 10) + (115 \times 6) = 1150 + 690 = \mathbf{₹1840}$**.

### Placement-Level

**Problem:** A dishonest dealer professes to sell his goods at cost price, but he uses a false weight of **$920 \text{ grams}$** for a **$1 \text{ kg}$** weight. Find his actual gain percentage.

* **Step 1:** Identify the core trick. The dealer tells the customer he is charging them exactly what he paid for **$1 \text{ kg}$** (**$1000\text{g}$**).
* **Step 2:** In reality, he only hands over **$920\text{g}$** of goods. Therefore, his internal cost (**$CP$**) is only for **$920\text{g}$**, while his revenue (**$SP$**) matches the value of **$1000\text{g}$**.
* **Step 3:** Absolute profit in terms of material weight = **$1000\text{g} - 920\text{g} = 80\text{g}$**.
* **Step 4:** Calculate gain percentage based on the *actual weight given out* (his real investment):
  $$
  \text{Gain } \% = \left( \frac{\text{Error Weight}}{\text{Actual Weight Sold}} \right) \times 100 = \left( \frac{80}{920} \right) \times 100 = \frac{2}{23} \times 100 \approx \mathbf{8.69\%}
  $$

## 6. Practice Set

### Beginner Questions (10)

1. A book purchased for **$₹450$** is sold for **$₹540$**. Find the profit percentage.
2. Find the cost price of an article sold for **$₹1200$** at a loss of **$20\%$**.
3. If an engineering textbook is sold at a loss of **$15\%$**, find the ratio of its Cost Price to its Selling Price.
4. By selling a calculator for **$₹650$**, a dealer makes a profit of **$30\%$**. What was the cost price?
5. A laptop repair engineer sells a spare component for **$₹2400$**, losing **$4\%$** in the transaction. Find the cost price of the component.
6. The cost price of 10 pens is equal to the selling price of 8 pens. Find the profit percentage.
7. A trader sells an item at a profit of **$20\%$**. If he had bought it for **$10\%$** less and sold it for **$₹30$** less, he would have gained **$20\%$**. Find the initial cost price.
8. If the profit on an item is equal to **$\frac{1}{5}$** of its selling price, find the actual profit percentage (calculated on CP).
9. An application subscription is sold for **$₹990$** with a profit of **$10\%$**. What would be the loss percentage if it were sold for **$₹800$**?
10. Find the single discount equivalent to two successive discounts of **$20\%$** and **$10\%$**.

### Intermediate Questions (5)

11. A man sells two smartwatches for **$₹2970$** each. On one he gains **$10\%$** and on the other he loses **$10\%$**. Find his total gain or loss percentage across the entire transaction.
12. A wholesaler buys 50 coding monitors for **$₹5,00,000$**. He sells 20 of them at a profit of **$10\%$**. At what profit percentage must he sell the remaining monitors to achieve an overall profit target of **$18\%$**?
13. A shopkeeper marks his goods **$40\%$** above the cost price and then allows a discount of **$25\%$** on the marked price. Find his net profit or loss percentage.
14. A fruit vendor buys oranges at the rate of 5 for **$₹10$** and sells them at the rate of 4 for **$₹12$**. Find his total gain percentage.
15. If the selling price of an article is doubled, the profit triples. Find the original profit percentage.

### Challenge Questions (2)

16. A manufacturing unit produces automated IoT switches. The cost of production consists of raw materials, labor, and overheads in the ratio **$4 : 3 : 2$**. If the cost of raw materials increases by **$10\%$**, labor costs go up by **$20\%$**, and overheads drop by **$5\%$**, find the percentage increase in the price of the switch if the company wants to maintain its original profit margin of **$20\%$** on production cost.
17. A dealer marks an enterprise server rack at **$50\%$** above its cost price. He sells it to a distributor at a discount of **$X\%$**. The distributor then sells it to an IT firm at a further discount of **$10\%$** on the price he paid. If the IT firm pays exactly the original cost price of the server rack, find the value of **$X$**.

## 7. Answers & Hints

**Beginner:**
1. **20%** ($\frac{90}{450} \times 100$)
2. **₹1500** ($80\% \text{ of } CP = 1200$)
3. **20 : 17** ($SP = 85\% \text{ of } CP \implies \frac{CP}{SP} = \frac{100}{85}$)
4. **₹500** ($130\% \text{ of } CP = 650$)
5. **₹2500** ($96\% \text{ of } CP = 2400$)
6. **25%** ($CP=8, SP=10 \implies \frac{2}{8} \times 100$)
7. **₹250** ($CP_1=100x, SP_1=120x$. $CP_2=90x, SP_2=120x-30$. $1.2(90x) = 120x-30 \implies x=2.5$. $100x=250$)
8. **25%** ($P = 1 \text{ part}, SP = 5 \text{ parts} \implies CP = 4 \text{ parts}$. $\frac{1}{4} \times 100$)
9. **11.11% loss** ($110\% CP = 990 \implies CP=900$. Loss = $900-800=100$. $\frac{100}{900} \times 100$)
10. **28%** ($20 + 10 - \frac{200}{100} = 28\%$)

**Intermediate:**
11. **1% loss** (Same SP, $+10\%$ and $-10\% \implies \text{Loss} = \frac{10^2}{100}\% = 1\%$)
12. **23.33%** (Total Target SP = $5,00,000 \times 1.18 = 5,90,000$. SP of first 20 = $2,00,000 \times 1.1 = 2,20,000$. Remaining SP needed = $3,70,000$ on CP of $3,00,000$. Profit = $70,000$. $\frac{70}{300} \times 100$)
13. **5% profit** (Let $CP=100 \implies MP=140$. Discount $25\%$ of $140 = 35$. $SP = 105$)
14. **50% profit** ($CP = \frac{10}{5} = 2$. $SP = \frac{12}{4} = 3$. Profit = $1$. $\frac{1}{2} \times 100$)
15. **100%** (New Profit = $3 \times$ Old Profit $\implies 2SP - CP = 3(SP - CP) \implies SP = 2CP$. Profit = $100\%$)

**Challenge:**
16. **10%** (Let costs be 40, 30, 20 $\implies CP=90$. Target $SP=108$. New CP = $44 + 36 + 19 = 99$. New $SP = 99 \times 1.2 = 118.8$. Increase in SP = $10.8$. $\frac{10.8}{108} \times 100$)
17. **25.92%** (Let $CP=100 \implies MP=150$. Distributor $SP = 150(1 - \frac{X}{100})$. IT Firm $CP = 0.9 \times SP_{distributor} = 100$. $135(1 - \frac{X}{100}) = 100 \implies X = \frac{700}{27}$)
