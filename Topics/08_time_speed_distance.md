# Time, Speed & Distance - Fundamentals

## 1. Formulas

**Core Vector Metric:** 

$$
\text{Distance} = \text{Speed} \times \text{Time}
$$

**Unit Conversion Scalers (The 5/18 Rule):**
* To convert **km/h** to **m/s**, multiply by $\mathbf{\frac{5}{18}}$.
* To convert **m/s** to **km/h**, multiply by $\mathbf{\frac{18}{5}}$.

**Constant Distance Average Speed:** 

$$
\text{Avg Speed} = \frac{2 \cdot S_1 \cdot S_2}{S_1 + S_2}
$$

**Relative Speed Vectors:**
* **Same Direction:** $\Delta S = |S_1 - S_2|$
* **Opposite Direction:** $\Delta S = S_1 + S_2$

## 2. Key Concepts

**Simple Explanation:** Time, Speed, and Distance tracks how an object moves through space over time.
* **Distance** is the total space covered.
* **Time** is how long the journey takes.
* **Speed** is the rate of travel—how much distance is covered in a single, standard unit of time.

**Real-World Intuition:** Imagine driving down a highway. If your speedometer says **60 km/h**, it means if you maintain this exact pace for **1 hour**, you will travel exactly **60 kilometers**. If you travel for **2 hours** at that speed, your total distance scales linearly: **$60 \times 2 = 120 \text{ km}$**.

- **Inverse Ratio Shifts:** If distance is held fixed, the ratio of times taken will be the exact inverse of the ratio of travel speeds ($S_A : S_B = x : y \implies T_A : T_B = y : x$).
- **Proportionality Scaling:** If time is constant, Distance and Speed are directly proportional ($D \propto S$). Driving 20% faster for an hour covers 20% more ground.
- **Object Spatial Traversals:** A train clearing an infrastructure asset (platform/bridge) must cover its own structural length plus the asset's total length ($D_{\text{total}} = L_{\text{train}} + L_{\text{platform}}$).

## 3. Shortcuts

**The Stoppage Reduction Trick (Mental Equation)**
For bus or train problems where halting reduces the effective average speed, calculate the stoppage time per hour directly:

$$
\text{Stoppage Time (mins/hr)} = \frac{\text{Fast Speed} - \text{Slow Speed}}{\text{Fast Speed}} \times 60
$$

*Example:* Speed without stops = 54 km/h. Speed with stops = 45 km/h. 
Stoppage time = $\frac{54 - 45}{54} \times 60 = \frac{9}{54} \times 60 = \mathbf{10 \text{ mins/hr}}$.

## 4. Common Mistakes

- **The Average Speed Trap:** Never simply add two speeds and divide by two ($\frac{S_1 + S_2}{2}$) unless the *time* spent traveling at both speeds is explicitly stated to be identical. If *distances* are identical, you must use the harmonic mean formula.
- **Unit Mismatch:** Trying to divide a distance in kilometers by a time in seconds. Always synchronize variables into standard clusters (km & hours OR meters & seconds) before applying equations.
- **Relative Speed Confusion:** Adding speeds when objects travel in the same direction. Remember: **Same Direction = Subtract**. **Opposite Direction = Add**.
- **The Point Object Oversight:** When a train crosses a pole, a standing man, or a tree, it only needs to cover its *own* length. Do not search the problem for a platform length.

## 5. Solved Examples

### Easy

**Problem:** A train is running at a speed of **90 km/h**. How many meters does it travel in **22** seconds?

* **Step 1:** Notice the unit mismatch (km/h vs. seconds). Convert the speed to m/s.

  $$
  \text{Speed} = 90 \times \frac{5}{18} = 5 \times 5 = 25 \text{ m/s}
  $$
* **Step 2:** Apply the distance formula.

  $$
  \text{Distance} = 25 \times 22 = \mathbf{550 \text{ meters}}
  $$

### Medium

**Problem:** A motorist travels from town A to town B at an average speed of **40 km/h** and returns along the same route at a speed of **60 km/h**. Find his average speed for the entire round trip.

* **Step 1:** Identify the trap. Since the distance going and coming back is constant, use the harmonic mean shortcut.

  $$
  \text{Average Speed} = \frac{2 \cdot S_1 \cdot S_2}{S_1 + S_2}
  $$
* **Step 3:** Plug in the values:

  $$
  \text{Average Speed} = \frac{2 \times 40 \times 60}{40 + 60} = \frac{4800}{100} = \mathbf{48 \text{ km/h}}
  $$

### Placement-Level

**Problem:** A thief steals a car at **1:30 PM** and drives it at a speed of **40 km/h**. The theft is discovered at **2:00 PM** and the owner sets off in another car at a speed of **50 km/h** to catch him. At what time will the owner overtake the thief?

* **Step 1:** Calculate the head start. The thief has a 30-minute (0.5 hour) lead before the owner starts.

  $$
  \text{Lead Distance} = \text{Speed of Thief} \times \text{Lead Time} = 40 \times \frac{1}{2} = 20 \text{ km}
  $$
* **Step 2:** Determine Relative Speed. Since both move in the **same direction**, subtract the speeds:

  $$
  \text{Relative Speed} = 50 \text{ km/h} - 40 \text{ km/h} = 10 \text{ km/h}
  $$
* **Step 3:** Calculate the time needed to close the 20 km gap:

  $$
  \text{Time to Catch} = \frac{\text{Lead Distance}}{\text{Relative Speed}} = \frac{20 \text{ km}}{10 \text{ km/h}} = 2 \text{ hours}
  $$
* **Step 4:** Add this time to the owner's start time (**2:00 PM**):

  $$
  2:00 \text{ PM} + 2 \text{ hours} = \mathbf{4:00 \text{ PM}}
  $$

## 6. Practice Set

### Beginner Questions (10)

1. Express a speed of **15 m/s** in kilometers per hour.
2. An express bus travels a distance of **240 km** in **4** hours. Calculate its speed in **m/s**.
3. How long will a cyclist take to cover a distance of **500 meters** if he rides at a speed of **20 km/h**?
4. Walking at **$\frac{3}{4}$** of his usual speed, a man is **20 minutes** late to his office. Find his usual time to reach the office.
5. A car covers a certain distance in **8** hours at a speed of **50 km/h**. At what speed must it travel to cover the same distance in **5** hours?
6. A train **150 meters** long passes a stationary telegraph post in **9** seconds. Find the speed of the train in **km/h**.
7. Two cars start at the same time from a point moving in opposite directions at **60 km/h** and **80 km/h** respectively. What will be the distance between them after **1.5** hours?
8. A person crosses a **600 meter** long street in **5** minutes. What is his speed in **km/h**?
9. If a running athlete covers **200 meters** in **24** seconds, find his speed in km/h.
10. A plane flies a distance of **1200 km** at a constant speed. If it flies for **2.5** hours, find its cruise speed.

### Intermediate Questions (5)

11. A train **240 meters** long passes a platform **360 meters** long in **30** seconds. Find the speed of the train in **km/h**.
12. Excluding stoppages, the speed of a bus is **54 km/h**, and including stoppages, it is **45 km/h**. For how many minutes does the bus stop per hour?
13. A boy walks from his house to school at a speed of **3 km/h** and returns at a speed of **2 km/h**. If he takes **5** hours in total, find the distance between his house and the school.
14. Two trains **100 m** and **120 m** long are running in opposite directions on parallel tracks. If their speeds are **42 km/h** and **50 km/h** respectively, how long will they take to clear each other completely from the moment they meet?
15. A man can row upstream at **8 km/h** and downstream at **12 km/h**. Find the speed of the man in still water and the speed of the current.

### Challenge Questions (2)

16. Driven by a fast motor, a boat travels downstream along a river and covers a distance between two ports in **4** hours. Moving back upstream against the current at the exact same power setting, it takes **5** hours to cover the same distance. If a piece of driftwood is dropped into the river at the first port, how many hours will it take to float down to the second port purely carried by the current?
17. A courier driver sets off from a logistics hub to deliver a high-priority package to a remote tech park. After driving for **1 hour**, an engine component malfunction forces him to reduce his speed to **$\frac{3}{5}$** of his original pace. He arrives at the destination **2 hours** late. If the malfunction had occurred **30 km** further down the road, he would have been only **1 hour** late. Find the total distance between the hub and the tech park.

## 7. Answers & Hints

**Beginner:**
1. **54 km/h** ($15 \times \frac{18}{5}$)
2. **16.66 m/s** ($S = \frac{240}{4} = 60 \text{ km/h} \implies 60 \times \frac{5}{18} = \frac{50}{3}$)
3. **1.5 minutes or 90 secs** ($T = \frac{0.5}{20} = \frac{1}{40} \text{ hours} \implies \frac{1}{40} \times 60 = 1.5$)
4. **60 minutes** (Speed drops to $\frac{3}{4} \implies$ Time becomes $\frac{4}{3}$. Diff is $\frac{1}{3}$ of usual time. $\frac{1}{3}T = 20 \implies T = 60$)
5. **80 km/h** ($D = 8 \times 50 = 400 \text{ km}$. New Speed $= \frac{400}{5}$)
6. **60 km/h** ($S = \frac{150}{9} = \frac{50}{3} \text{ m/s} \implies \frac{50}{3} \times \frac{18}{5}$)
7. **210 km** (Opposite dir $\implies \text{Rel Speed} = 60+80=140$. $D = 140 \times 1.5$)
8. **7.2 km/h** ($S = \frac{600}{300\text{s}} = 2 \text{ m/s} \implies 2 \times \frac{18}{5} = \frac{36}{5}$)
9. **30 km/h** ($S = \frac{200}{24} = \frac{25}{3} \text{ m/s} \implies \frac{25}{3} \times \frac{18}{5}$)
10. **480 km/h** ($S = \frac{1200}{2.5}$)

**Intermediate:**
11. **72 km/h** ($D = 240+360 = 600\text{m}$. $S = \frac{600}{30} = 20 \text{ m/s} \implies 20 \times \frac{18}{5}$)
12. **10 mins** ($\frac{54 - 45}{54} \times 60$)
13. **6 km** (Avg Speed $= \frac{2(3)(2)}{5} = 2.4 \text{ km/h}$. Total round trip $D = 2.4 \times 5 = 12\text{km}$. One way $= 6\text{km}$)
14. **$\approx$ 8.6 seconds** ($D = 220\text{m}$. Rel Speed $= 42+50=92 \text{ km/h} \implies 92 \times \frac{5}{18} = \frac{230}{9} \text{ m/s}$. $T = \frac{220}{230/9} = \frac{198}{23}$)
15. **Man = 10 km/h, Stream = 2 km/h** ($\text{Man} = \frac{\text{Down} + \text{Up}}{2}$. $\text{Stream} = \frac{\text{Down} - \text{Up}}{2}$)

**Challenge:**
16. **40 hours** (Let $B$ = boat, $C$ = current. $D/(B+C) = 4$ and $D/(B-C) = 5$. Equating $D \implies 4B+4C = 5B-5C \implies B = 9C$. Distance $D = 4(9C+C) = 40C$. Driftwood only has speed $C$. Time $= \frac{40C}{C} = 40$)
17. **80 km** (Let normal speed = $S$. Time delay is caused by speed dropping to $\frac{3S}{5}$, meaning remaining journey takes $\frac{5}{3}$ times as long. The $\frac{2}{3}$ extra time = 2 hrs $\implies$ normal remaining time = 3 hrs. So Total Time $= 1 + 3 = 4 \text{ hrs}$, meaning $D = 4S$. If delay is 30km further, extra time is 1 hr $\implies$ normal time for *that* segment is 1.5 hrs. The 30km stretch at normal speed $S$ bridges the 1.5 hr difference between normal remaining times ($3 - 1.5 = 1.5$). So $S \times 1.5 = 30 \implies S = 20 \text{ km/h}$. Total distance $D = 4 \times 20 = 80 \text{ km}$.)
