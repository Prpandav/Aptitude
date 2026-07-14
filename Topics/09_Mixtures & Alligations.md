# Mixtures & Alligations - Fundamentals

## 1. Formulas

**The Rule of Alligation (Ratio Calculation):**

$$
\frac{\text{Quantity of Cheaper}}{\text{Quantity of Dearer}} = \frac{\text{Dearer Price} - \text{Mean Price}}{\text{Mean Price} - \text{Cheaper Price}}
$$

**Repeated Replacement Formula:**

$$
\text{Remaining Pure Liquid} = \text{Initial Quantity} \times \left(1 - \frac{x}{V}\right)^n
$$

*(Where $x$ = replaced volume, $V$ = total volume, $n$ = number of repeated operations)*

## 2. Key Concepts

**Simple Explanation:** A **Mixture** is exactly what it sounds like: combining two or more ingredients (like milk and water, or cheap rice and expensive rice) to create a new blend. **Alligation** is not a different topic; it is a **mathematical tool (a shortcut grid)** used to determine the ratio in which two ingredients of different prices or concentrations must be mixed to achieve a desired target price or concentration.

**Real-World Intuition:** Imagine you have a cup of very weak, cheap coffee (**₹10/cup**) and a cup of premium, strong espresso (**₹50/cup**). If you mix them equally, the price and strength will land exactly in the middle (**₹30**).

* If you want the final blend to cost **₹20** (closer to the cheap coffee), you must use **more** cheap coffee and **less** premium espresso.
* Alligation helps us find the *exact* ratio needed to hit that target.

- **Homogeneous Units:** Units across all elements ($C$, $D$, $M$) must be identical. You cannot mix Cost Price with Selling Price or grams with kilograms. $C$ must also strictly be less than $M$, which is less than $D$ ($C < M < D$).
- **The Alligation Cross-Diagram:** The difference $(D - M)$ mathematically maps to the quantity required of the *Cheaper* ingredient, and $(M - C)$ maps to the *Dearer* ingredient. 

**Visualizing the Cross:**
```text
  Cheaper Price (C)               Dearer Price (D)
                   \             /
                    \           /
                     Mean Price (M)
                    /           \
                   /             \
              (D - M)       :     (M - C)
   (Cheaper Qty Mapping)       (Dearer Qty Mapping)
```

## 3. Shortcuts

**The Selling Price Normalization Trick**
If the selling price (with profit) is given for the final mixture, you cannot plug it directly into the alligation grid. Convert it to the Mean Cost Price first using:

$$
CP = \frac{SP \times 100}{100 + \text{Profit}\%}
$$

- **Approximation Trick:** If the math involves complex decimals (e.g., ₹14.85, ₹18.20, Mean ₹16.10), scale all values up by multiplying by 10 or 100 to convert them into whole integers before processing the cross-subtraction.
- **Elimination Technique:** If the target Mean Price is closer to the cheaper variant, immediately eliminate any multiple-choice options where the cheaper variant's ratio part is smaller than the dearer one.

## 4. Common Mistakes

- **The Cost Price (CP) Trap:** Students often mix Cost Price of one item, Selling Price of another, and Mean Selling Price directly in the diagram. **Alligation only works if all three metrics are uniform.** 
- **Ratio Inversion:** Swapping the final positions of Cheaper and Dearer quantities. Remember: the value under the Cheaper column corresponds to the Dearer quantity scale, and vice versa.
- **The Replacement Formula Trap:** For repeated replacement questions, don't try to use standard alligation frames. Use the repeated operations formula ($V \times (1 - x/V)^n$).

## 5. Solved Examples

### Easy

**Problem:** In what ratio must a grocer mix rice at ₹20 per kg and rice at ₹28 per kg so that the mixture is worth ₹25 per kg?

* **Step 1:** Identify components. $C = 20$, $D = 28$, $M = 25$.
* **Step 2:** Apply the cross-diagram.
  * Left side (Cheaper part mapping): $D - M = 28 - 25 = 3$
  * Right side (Dearer part mapping): $M - C = 25 - 20 = 5$
* **Step 3:** Write the ratio. **Ratio (Cheaper : Dearer) = 3 : 5**.

### Medium

**Problem:** A 20-litre mixture of milk and water contains 10% water. How much water must be added to make it 20% water in the new mixture?

* **Step 1:** Use Alligation based on water percentage.
  * Current mixture water content ($C$) = 10%
  * Pure water being added ($D$) = 100%
  * Target water content ($M$) = 20%
* **Step 2:** Calculate cross differences.
  * $D - M = 100 - 20 = 80$
  * $M - C = 20 - 10 = 10$
  * **Ratio = 80 : 10 = 8 : 1**
* **Step 3:** Relate to actual quantity.
  * The 8 parts represent the initial 20 litres.
  * $8 \text{ parts} = 20 \text{ litres} \implies 1 \text{ part} = 2.5 \text{ litres}$.
* **Final Answer:** **2.5 litres** of water must be added.

### Placement-Level

**Problem:** A merchant has 1000 kg of sugar, part of which he sells at 8% profit and the rest at 18% profit. He gains 14% on the whole. What is the quantity sold at 18% profit? (TCS / Infosys repeatable pattern)

* **Step 1:** Identify values. $C = 8\%$, $D = 18\%$, Mean $M = 14\%$.
* **Step 2:** Apply Alligation.
  * $D - M = 18 - 14 = 4$
  * $M - C = 14 - 8 = 6$
  * **Ratio = 4 : 6 = 2 : 3**.
* **Step 3:** Divide total quantity (1000 kg) into the ratio **$2 : 3$**.
  * Total parts = $2 + 3 = 5 \text{ parts}$.
  * $5 \text{ parts} = 1000 \text{ kg} \implies 1 \text{ part} = 200 \text{ kg}$.
  * Quantity at 18% profit (3 parts) = $3 \times 200 = \mathbf{600\text{ kg}}$.

## 6. Practice Set

### Beginner Questions (10)

1. In what ratio must tea at ₹62/kg be mixed with tea at ₹72/kg so that the mixture is worth ₹64/kg?
2. A mixture of a certain quantity of milk with 16 litres of water is worth ₹90 per litre. If pure milk is worth ₹108 per litre, how much milk is there in the mixture?
3. In what ratio must water be mixed with milk to gain $16 \frac{2}{3}\%$ by selling the mixture at cost price?
4. A jar contains a blend of two liquids A and B in the ratio $4 : 1$. If the cost of A is ₹12/litre and B is ₹7/litre, find the cost of the mixture per litre.
5. Gold is 19 times as heavy as water and copper is 9 times as heavy as water. In what ratio should these metals be mixed so that the mixture may be 15 times as heavy as water?
6. How many kilograms of sugar costing ₹9/kg must be mixed with 27 kg of sugar costing ₹7/kg so that there may be a gain of 10% by selling the mixture at ₹9.24/kg?
7. A solution of 40 litres of vinegar and water contains 10% vinegar. How much vinegar must be added to make it 20% vinegar?
8. In what ratio must a wholesale merchant mix two varieties of pulses costing ₹15 and ₹20 per kg respectively, so that the resulting mixture costs ₹16.50 per kg?
9. A vessel contains 60 litres of milk. 12 litres of milk are taken out and replaced by water. What is the final ratio of milk and water?
10. Two vessels contain milk and water in the ratio $3:2$ and $4:1$. If they are mixed in equal quantities, what is the new ratio of milk and water?

### Intermediate Questions (5)

11. A container contains 40 litres of pure milk. From this container, 4 litres of milk were taken out and replaced by water. This process was repeated two more times. How much milk is now contained by the container?
12. A liquid solution contains 20% alcohol. Another solution contains 30% alcohol. In what ratio should they be mixed to get a new solution containing 24% alcohol?
13. A man bought a horse and a carriage for ₹40,000. He sold the horse at a gain of 20% and the carriage at a loss of 10%. Overall, he gained 2% on the whole transaction. Find the cost price of the horse.
14. Two alloys of aluminum and iron contain components in the ratios $5:3$ and $5:11$ respectively. If equal quantities of these two alloys are melted to form a third alloy, find the ratio of aluminum and iron in the new alloy.
15. A bartender steals whiskey from a bottle containing 40% alcohol and replaces it with another whiskey containing 16% alcohol. The strength of the whiskey drops to 24%. What fraction of the original bottle did he steal?

### Challenge Questions (2)

16. Container A contains milk and water in the ratio $7:2$ and Container B contains them in the ratio $5:3$. In what ratio must liquids be drawn from both containers to create a new mixture where the ratio of milk to water is $4:1$?
17. A vessel is full of 80 litres of milk. 8 litres are taken out and replaced with water. Again, 8 litres of the mixture are taken out and replaced with water. Find the final ratio of milk to water left in the vessel.

## 7. Answers & Hints

**Beginner:**
1. **4 : 1** ($C=62, D=72, M=64$. Ratio $= (72-64) : (64-62) = 8 : 2$)
2. **80 Litres** (Water CP=0, Milk CP=108, Mean=90. W:M ratio $= 18:90 = 1:5$. If Water is 16, Milk is $16 \times 5$)
3. **1 : 6** (Gain $1/6 \implies \text{Mean CP} = 6/7$. Water CP=0, Milk CP=1. Ratio $= (1 - 6/7) : (6/7 - 0)$)
4. **₹11/litre** ($(4 \times 12 + 1 \times 7) / 5 = 55 / 5$)
5. **3 : 2** (Gold=19, Copper=9, Mean=15. Ratio $= (15-9) : (19-15) = 6 : 4$)
6. **63 kg** ($\text{Target CP} = 9.24 / 1.1 = 8.4$. $C=7, D=9, M=8.4$. Ratio $= 0.6 : 1.4 = 3 : 7$. Since cheaper sugar is 27kg, 3 parts = 27 $\implies$ 1 part = 9. So dearer sugar = 7 $\times$ 9)
7. **5 Litres** (Vinegar=100%, Target=20%, Current=10%. Ratio $(100-20):(20-10) = 80:10 = 8:1$. 8 parts = 40L $\implies$ 1 part = 5L)
8. **7 : 3** ($C=15, D=20, M=16.5$. Ratio $= 3.5 : 1.5$)
9. **4 : 1** (Milk left $= 60 \times (1 - 12/60) = 48$. Water $= 12$)
10. **7 : 3** (Milk $= (3/5 + 4/5)/2 = 7/10$. Water $= 3/10$)

**Intermediate:**
11. **29.16 Litres** ($40 \times (1 - 4/40)^3 = 40 \times (0.9)^3 = 40 \times 0.729$)
12. **3 : 2** ($C=20, D=30, M=24$. Ratio $= 6:4$)
13. **₹16,000** (Horse=+20, Carriage=-10, Mean=2. Ratio H:C $= (2 - (-10)) : (20 - 2) = 12 : 18 = 2 : 3$. Horse $= \frac{2}{5} \times 40000$)
14. **15 : 17** ($\text{Al} = 5/8 + 5/16 = 15/16$. $\text{Fe} = 3/8 + 11/16 = 17/16$)
15. **2/3** (Original=40, Replaced=16, Mean=24. Ratio Orig:Rep $= (24-16) : (40-24) = 8 : 16 = 1 : 2$. Fraction replaced $= \frac{2}{1+2}$)

**Challenge:**
16. **Mathematically Impossible / Trick Question** (Container A milk concentration is $7/9 \approx 77.7\%$. Container B is $5/8 = 62.5\%$. The target is $4:1$, which is $4/5 = 80\%$. You cannot mix two liquids with less than 80% concentration to yield a mixture of 80% concentration!)
17. **81 : 19** (Milk left $= 80 \times (1 - 8/80)^2 = 80 \times (0.9)^2 = 64.8$L. Water $= 80 - 64.8 = 15.2$L. Ratio $= 64.8 : 15.2 \implies 648 : 152 \implies 81 : 19$)
