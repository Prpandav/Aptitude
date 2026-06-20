# Phase 2: Boats & Streams (Advanced TSD)

## Introduction
Boats & Streams problems are a direct application of Time, Speed & Distance (TSD) concepts. These questions introduce a relative speed dynamic where the medium itself (the water) is moving. 

This topic is highly favored in placement aptitude tests (especially TCS, Infosys, and banking exams) because it combines basic algebra with logical relative motion mapping.

---

## 1. Core Formulas & Definitions

### Basic Definitions
* **Speed of Boat in Still Water ($B$):** The inherent engine or rowing speed when there is no water current.
* **Speed of Stream ($S$):** The speed of the flowing water (also called current).

### Relative Motion Equations
1. **Downstream Speed ($D$):** When the boat moves *with* the direction of the stream. The water pushes the boat forward.
   $$D = B + S$$

2. **Upstream Speed ($U$):** When the boat moves *against* the direction of the stream. The water resists the boat's movement.
   $$U = B - S$$

### Reverse Extraction Formulas
If an exam gives you the overall Upstream and Downstream speeds, you can instantly extract the individual Boat and Stream speeds:
* **Boat Speed:** $$B = \frac{D + U}{2}$$
* **Stream Speed:** $$S = \frac{D - U}{2}$$

---

## 2. Key Concepts & Intuition

* **The Dominance Rule:** A boat can only travel upstream if its inherent speed is greater than the stream's speed ($B > S$). If $S > B$, the boat will be pushed backward regardless of its effort.
* **Speed Hierarchy:** $\text{Downstream Speed} > \text{Boat Speed (Still Water)} > \text{Upstream Speed}$
* **Real-Life Analogy:** Imagine cycling. Riding with the wind at your back is Downstream (faster, less effort). Riding directly into a strong headwind is Upstream (slower, more effort).

---

## 3. Shortcuts & Speed Anchors

* **The Average Shortcut:** The speed of the boat in still water ($B$) is always the exact mathematical average of its downstream and upstream speeds. 
* **The Difference Shortcut:** The speed of the stream ($S$) is always exactly half of the difference between the downstream and upstream speeds.
* **Constant Distance Ratio:** If the distance traveled upstream and downstream is the same, then Speed and Time are inversely proportional. 
  $$\frac{T_{upstream}}{T_{downstream}} = \frac{D}{U} = \frac{B + S}{B - S}$$

---

## 4. Mistake Analysis & Traps

* **The Addition Trap:** When calculating Upstream speed, students accidentally add the stream speed instead of subtracting it. Remember: Upstream is an uphill battle; speed must decrease ($B - S$).
* **The "Still Water" Phrasing Trap:** If a question says "A man can row at 10 km/hr in still water," this is $B$, NOT $D$ or $U$. Read carefully to see if the speed given includes the water's effect or not.
* **The Average Speed Trap:** The average speed for a round trip (going downstream and returning upstream) is NOT $\frac{D + U}{2}$. Since distances are equal, use the standard TSD average formula: $\frac{2DU}{D + U}$.

---

## 5. Solved Examples

### Easy (Direct Formula)
**Question:** A boat travels downstream at 18 km/hr and upstream at 10 km/hr. Find the speed of the boat in still water and the speed of the stream.
* **Step 1:** Identify knowns. $D = 18$, $U = 10$.
* **Step 2:** Apply extraction formulas.
  * $$B = \frac{18 + 10}{2} = \frac{28}{2} = 14 \text{ km/hr}$$
  * $$S = \frac{18 - 10}{2} = \frac{8}{2} = 4 \text{ km/hr}$$

### Medium (Time & Distance Conversion)
**Question:** A boat covers 48 km downstream in 3 hours, and the same distance upstream in 6 hours. Find the stream speed.
* **Step 1:** Convert distances and times into Speeds.
  * $D = \frac{48}{3} = 16 \text{ km/hr}$
  * $U = \frac{48}{6} = 8 \text{ km/hr}$
* **Step 2:** Apply stream extraction formula.
  * $$S = \frac{16 - 8}{2} = 4 \text{ km/hr}$$

### Placement Level (Algebraic Framework)
**Question:** A boat's speed in still water is 15 km/hr. It goes 30 km downstream and returns to the starting point in a total of 4.5 hours. Find the speed of the stream.
* **Step 1:** Set up the total time equation. $\text{Total Time} = T_{down} + T_{up}$
* **Step 2:** Substitute $\text{Time} = \frac{\text{Distance}}{\text{Speed}}$.
  $$\frac{30}{15 + S} + \frac{30}{15 - S} = 4.5$$
* **Step 3:** Solve the equation. Divide by 30 to simplify:
  $$\frac{1}{15 + S} + \frac{1}{15 - S} = \frac{4.5}{30} = \frac{3}{20}$$
  $$\frac{(15 - S) + (15 + S)}{225 - S^2} = \frac{3}{20}$$
  $$\frac{30}{225 - S^2} = \frac{3}{20} \implies 225 - S^2 = 200 \implies S^2 = 25 \implies S = 5 \text{ km/hr}$$

---

## 6. Practice Set

### Beginner Questions
1. Upstream speed is 8 km/hr and downstream speed is 12 km/hr. Find the boat speed in still water.
2. Boat speed is 15 km/hr and stream speed is 5 km/hr. Find the upstream speed.
3. Boat speed is 20 km/hr and stream speed is 4 km/hr. Find the downstream speed.
4. Downstream speed is 30 km/hr and upstream speed is 20 km/hr. Find the stream speed.
5. Boat speed is 18 km/hr and downstream speed is 22 km/hr. Find the stream speed.
6. Upstream speed is 14 km/hr and stream speed is 3 km/hr. Find the boat speed in still water.
7. Downstream speed is 25 km/hr and stream speed is 4 km/hr. Find the boat speed in still water.
8. Boat speed is 12 km/hr and stream speed is 3 km/hr. Find the distance covered downstream in 2 hours.
9. Boat speed is 10 km/hr and stream speed is 2 km/hr. Find the time taken to cover 24 km upstream.
10. Upstream speed is 10 km/hr and downstream speed is 20 km/hr. Find the boat speed in still water.

### Intermediate Questions
11. A boat travels 30 km downstream in 2 hours, and 20 km upstream in 2 hours. Find the speed of the boat in still water.
12. Downstream speed is 24 km/hr and upstream speed is 16 km/hr. Find the stream speed.
13. The speed of a boat in still water is 18 km/hr. The stream speed is 6 km/hr. Find the time taken to travel 72 km upstream.
14. A man rows 40 km upstream in 8 hours and 36 km downstream in 6 hours. Find the stream speed.
15. A boat takes half the time to travel downstream compared to traveling the same distance upstream. If the boat speed is 15 km/hr, find the stream speed.

### Challenge Questions
16. A boat takes 4 hours downstream and 6 hours upstream to cover the same specific distance. If the stream speed is 4 km/hr, find the speed of the boat in still water.
17. The downstream speed of a boat is exactly twice its upstream speed. If the boat's speed in still water is 12 km/hr, find the speed of the stream.

---

## 7. Answers & Hints

**Beginner:**
1. **10 km/hr** *(B = (12+8)/2)*
2. **10 km/hr** *(U = 15 - 5)*
3. **24 km/hr** *(D = 20 + 4)*
4. **5 km/hr** *(S = (30-20)/2)*
5. **4 km/hr** *(22 = 18 + S)*
6. **17 km/hr** *(14 = B - 3)*
7. **21 km/hr** *(25 = B + 4)*
8. **30 km** *(D = 15 km/hr; Distance = 15 × 2)*
9. **3 hours** *(U = 8 km/hr; Time = 24 / 8)*
10. **15 km/hr** *(B = (20+10)/2)*

**Intermediate:**
11. **12.5 km/hr** *(D = 15, U = 10. B = 25/2)*
12. **4 km/hr** *(S = (24-16)/2)*
13. **6 hours** *(U = 12. Time = 72 / 12)*
14. **0.5 km/hr** *( = 5, D = 6. S = (6-5)/2)*

**Challenge:**
15. **5 km/hr** *(T_up = 2 × T_down implies D = 2U. So 15+S = 2(15-S))*
16. **20 km/hr** *(D × 4 = U × 6. (B+4)×4 = (B-4)×6. Solve for B)*
17. **4 km/hr** *(D = 2U. B+S = 2(B-S). 12+S = 2(12-S). 12+S = 24-2S. 3S = 12)*