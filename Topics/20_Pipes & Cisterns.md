# Phase 2: Pipes & Cisterns (Leakage Applications)

## Introduction
Pipes & Cisterns is a direct extension of **Time & Work**. If you mastered the LCM (Least Common Multiple) framework in the Time & Work module, you already know 90% of this topic. 

The critical difference here is the introduction of **Negative Efficiency**. While people generally work together to build something, pipes often work against each other (e.g., an inlet pipe filling the tank while a leak at the bottom drains it). This negative work mechanic is a favorite in TCS Digital, Capgemini, and Cognizant placement drives.

---

## 1. Core Formulas & Definitions

### Basic Definitions
* **Cistern / Tank:** The container being filled or emptied. The "Total Work" is the total volume or capacity of this tank.
* **Inlet Pipe:** A pipe connected to supply liquid *into* the tank. It performs **Positive Work** ($+$).
* **Outlet Pipe / Leak:** A pipe or hole that drains liquid *out* of the tank. It performs **Negative Work** ($-$).

### The Core Math
Instead of using complex fractional math (e.g., $\frac{1}{A} - \frac{1}{B}$), we continue using the **Absolute Integer LCM Matrix**:
$$\text{Total Tank Capacity} = \text{LCM of all given times}$$
$$\text{Efficiency of a Pipe} = \frac{\text{Total Capacity}}{\text{Time Taken}}$$

*(Note: Outlet pipe efficiencies must always be written with a minus sign).*

---

## 2. Key Concepts & Intuition

* **The Negative Efficiency Rule:** If Pipe A fills 5 units/hour, and Leak B drains 2 units/hour, the net filling rate when both are open is $5 - 2 = +3 \text{ units/hour}$.
* **The "Never Filled" Scenario:** If the total negative efficiency (draining) is greater than or equal to the total positive efficiency (filling), an empty tank will *never* fill up.
* **Real-World Analogy:** Imagine trying to save ₹1000. Earning ₹50/day is your inlet pipe. Spending ₹20/day is your leak. Your net savings rate is ₹30/day.

---

## 3. Shortcuts & Speed Anchors

* **Two Pipes Formula (Fast Mental Math):** * If Pipe A fills in $x$ hours and Pipe B fills in $y$ hours, together they take: $\frac{xy}{x+y}$
  * If Pipe A fills in $x$ hours and Outlet B empties in $y$ hours (where $y > x$), together they take: $\frac{xy}{y-x}$
* **The Capacity Extraction Hack:** Many high-level questions ask for the *exact volume* of the tank in liters. 
  1. Find the time taken to fill/empty the tank using your normal LCM ratio methods.
  2. Multiply that final time by the actual flow rate given in the problem (e.g., "Outlet drains at 5 liters/minute").
* **Cross-Sectional Area Rule:** The amount of water flowing through a pipe is directly proportional to its cross-sectional area (or the square of its radius/diameter). A pipe with double the radius will pump water *4 times* faster.

---

## 4. Mistake Analysis & Traps

* **The Alternating Pipe Peak Trap:** Similar to the "Monkey climbing a greased pole" problem. If Pipe A fills and Pipe B empties on alternate minutes, do not just divide Total Capacity by the Net Cycle Efficiency. On the *last* cycle, the filling pipe will fill the tank to the top and stop—the emptying pipe won't get a turn to drain it back down. Always subtract the filling pipe's one-minute capacity from the total before calculating alternate cycles.
* **Unit Mismatch (Hours vs. Minutes):** Pipes are often rated differently (e.g., "Pipe A fills in 2 hours, but the leak drains at 3 liters per minute"). Always convert all time frames to a uniform unit before building your LCM matrix.
* **Assuming Leaks are Linear:** A leak's efficiency only matters *if there is water in the tank*. A leak cannot drain an already empty tank into negative volume.

---

## 5. Solved Examples

### Easy (Standard LCM Framework)
**Question:** Pipe A can fill a tank in 10 hours and Pipe B can fill it in 15 hours. If both are opened together, how long will it take to fill the tank?
* **Step 1: Set Total Capacity.** LCM of 10 and 15 = $\mathbf{30 \text{ Units}}$.
* **Step 2: Find Efficiencies.**
  * A = $\frac{30}{10} = +3 \text{ units/hr}$
  * B = $\frac{30}{15} = +2 \text{ units/hr}$
* **Step 3: Combine.** Net Efficiency = $3 + 2 = 5 \text{ units/hr}$.
* **Step 4: Calculate Time.** $\frac{30 \text{ units}}{5 \text{ units/hr}} = \mathbf{6 \text{ hours}}$.

### Medium (Introducing the Leak)
**Question:** A pipe can fill a cistern in 12 hours. Due to a leak at the bottom, it takes 15 hours to fill. If the cistern is completely full, how long will the leak take to empty it?
* **Step 1: Set Total Capacity.** LCM of 12 and 15 = $\mathbf{60 \text{ Units}}$.
* **Step 2: Find Efficiencies.**
  * Inlet Pipe (alone) = $\frac{60}{12} = +5 \text{ units/hr}$
  * Net System (Inlet + Leak) = $\frac{60}{15} = +4 \text{ units/hr}$
* **Step 3: Isolate Leak Efficiency.**
  * Since $\text{Inlet} + \text{Leak} = \text{Net System}$
  * $5 + \text{Leak} = 4 \implies \text{Leak} = \mathbf{-1 \text{ unit/hr}}$.
* **Step 4: Calculate Time for Leak.** $\frac{60 \text{ units}}{1 \text{ unit/hr}} = \mathbf{60 \text{ hours}}$.

### Placement Level (Finding Actual Capacity)
**Question:** Two pipes can fill a tank in 20 and 24 minutes respectively, and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. What is the total capacity of the tank?
* **Step 1: LCM Matrix.** LCM of 20, 24, and 15 = $\mathbf{120 \text{ Units}}$.
* **Step 2: Find Efficiencies.**
  * Pipe A = $\frac{120}{20} = +6$
  * Pipe B = $\frac{120}{24} = +5$
  * Net System (A + B + Waste) = $\frac{120}{15} = +8$
* **Step 3: Isolate Waste Pipe.**
  * $6 + 5 + \text{Waste} = 8 \implies 11 + \text{Waste} = 8 \implies \text{Waste} = \mathbf{-3 \text{ units/min}}$.
* **Step 4: Find Waste Pipe Time.** It takes the waste pipe $\frac{120}{3} = 40 \text{ minutes}$ to empty a full tank alone.
* **Step 5: Apply Real Flow Rate.** The waste pipe empties 3 gallons *every minute*.
  * $\text{Total Capacity} = 40 \text{ minutes} \times 3 \text{ gallons/minute} = \mathbf{120 \text{ gallons}}$.

---

## 6. Practice Set

### Beginner Questions
1. Pipe P can fill a tank in 20 hours and Pipe Q can fill it in 30 hours. How long will they take working together?
2. A tap can empty a tank in 4 hours. Another tap can empty it in 6 hours. If both are opened, how long will it take to empty a completely full tank?
3. An inlet pipe can fill a tank in 5 hours, but because of a leak, it takes 6 hours. How long would the leak take to empty a full tank?
4. Three pipes A, B, and C can fill a tank in 10, 12, and 15 hours respectively. How long will it take if all three are opened together?
5. Pipe X can fill a tank in 4 hours and Pipe Y can empty it in 6 hours. If both are opened, how long will it take to fill the tank?
6. A cistern is filled by Pipe A in 15 minutes and by Pipe B in 20 minutes. Both are opened together. How long does it take to fill the tank?
7. Pipe A fills a tank in 2 hours. A leak empties it in 8 hours. How long to fill the tank if both are active?
8. Two pipes can fill a tank in 10 hours and 15 hours. A third pipe empties it in 12 hours. If all three operate, how much of the tank fills in 1 hour?
9. A pipe fills a tank in 8 hours. Due to a leak, it is filled in 10 hours. How much time will the leak take to empty half the tank?
10. Taps A and B fill a bucket in 12 and 15 minutes respectively. If both are opened and A is closed after 3 minutes, how much further time will B take to fill the bucket?

### Intermediate Questions
11. Two pipes A and B can fill a tank in 24 minutes and 32 minutes respectively. If both pipes are opened together, after how much time should B be closed so that the tank is full in 18 minutes?
12. Three pipes A, B, and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. How many hours will C take alone to fill the tank?
13. A leak in the bottom of a tank can empty the full tank in 8 hours. An inlet pipe fills water at the rate of 6 liters a minute. When both are open, the tank is emptied in 12 hours. Find the capacity of the tank.
14. A cistern has two pipes. One can fill it with water in 8 hours and the other can empty it in 5 hours. In how many hours will the cistern be emptied if both the pipes are opened together when $\frac{3}{4}$ of the cistern is already full of water?
15. Pipes A and B can fill a tank in 15 and 20 hours respectively. Both are opened at 8:00 AM. At what time will the tank be full if pipe A is closed at 11:00 AM?

### Challenge Questions
16. **The Alternating Cycle:** Pipe A can fill a tank in 12 minutes and Pipe B can empty it in 15 minutes. If both are opened on alternate minutes starting with Pipe A, how long will it take to fill the tank?
17. **Radius Proportionality:** Three pipes have diameters of 1 cm, 2 cm, and 3 cm. The amount of water flowing through them is proportional to the square of their diameters. If the largest pipe alone can fill a tank in 61 minutes, how long will it take for all three pipes operating together to fill the tank?

---

## 7. Answers & Hints

**Beginner:**
1. **12 hours** *(Hint: LCM of 20, 30 is 60. Efficiencies: 3, 2. Time = 60/5)*
2. **2.4 hours (or 2 hours 24 mins)** *(Hint: Both are negative work. LCM = 12. Eff: -3, -2. Time = 12/5)*
3. **30 hours** *(Hint: Inlet = 6. Net = 5. Leak = -1. Time = 30/1)*
4. **4 hours** *(Hint: LCM = 60. Effs: 6, 5, 4. Net = 15. Time = 60/15)*
5. **12 hours** *(Hint: LCM = 12. X = +3, Y = -2. Net = +1)*
6. **$8 \frac{4}{7}$ minutes** *(Hint: LCM = 60. Effs: 4, 3. Net = 7. Time = 60/7)*
7. **2 hrs 40 mins (8/3 hours)** *(Hint: LCM = 8. A = +4, Leak = -1. Net = 3. Time = 8/3)*
8. **1/4th of the tank** *(Hint: LCM = 60. Effs: +6, +4, -5. Net = 5/hr. 5/60 = 1/12th. Wait, let me re-verify. A=6, B=4, C=-5. Net = 5. Yes, 5 units out of 60 is 1/12th of the tank.)* -> *Correction: 1/12th is the correct answer.*
9. **20 hours** *(Hint: Full leak time = 40 hours. Half tank = 20 hours)*
10. **8.25 minutes** *(Hint: LCM = 60. A=5, B=4. In 3 mins, they do 27 units. Remaining = 33. B takes 33/4 = 8.25 mins)*

**Intermediate:**
11. **8 minutes** *(Hint: A operates for the full 18 mins. A does 18 × 4 = 72 units. Remaining 24 units done by B. Time for B = 24/3 = 8 mins)*
12. **14 hours** *(Hint: (A+B+C) 1 hr work = 1/6. In 2 hrs = 1/3 done. Remaining 2/3 done by (A+B) in 7 hrs. So (A+B) alone takes 10.5 hrs. Subtract (A+B) from (A+B+C) to get C)*
13. **8640 Liters** *(Hint: L = -1/8. Net = -1/12. Inlet = 1/24. Inlet takes 24 hrs. 24 hrs × 60 mins × 6 L/min = 8640)*
14. **10 hours** *(Hint: Net = -3 units. Capacity = 40. 3/4th of 40 = 30 units. Time to empty 30 units = 30/3 = 10 hrs)*
15. **12:00 Midnight** *(Hint: LCM = 60. A=4, B=3. From 8 to 11, A+B do 21 units. Remaining 39 units done by B alone. 39/3 = 13 hours after 11:00 AM)*

**Challenge:**
16. **113 minutes** *(Hint: LCM=60. A=+5, B=-4. 2 min cycle = 1 unit. Do NOT go to 60 cycles. Stop at 55 units = 110 mins. Min 111: A fills 5, total 60. No need for B. Answer is 111. Wait, re-verify: Capacity is 60. Net 2-min cycle = +1. 55 cycles of 2 mins = 110 mins (55 units). Next min A fills 5 units = 60 units. Total = 111 minutes.)* -> *Final Answer: 111 mins.*
17. **39.3 minutes** *(Hint: Efficiencies proportional to $D^2$. Effs = $1^2, 2^2, 3^2$ = 1, 4, 9. Largest pipe eff = 9. Total Cap = 9 × 61 = 549 units. Total combined eff = 14. Time = 549 / 14 = 39.21 mins)*