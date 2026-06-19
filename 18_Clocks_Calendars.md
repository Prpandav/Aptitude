# Clocks & Calendars - Fundamentals

## 1. Formulas

**Clocks - The Angle Formula:**
To find the angle $\theta$ between the hour hand ($H$) and minute hand ($M$) at a specific time:
$$
\theta = |30H - 5.5M|
$$
*(If $\theta > 180^\circ$, the reflex angle is $360^\circ - \theta$)*

**Calendars - Odd Days Calculation:**
- **Ordinary Year:** 365 days = 52 weeks + **1 Odd Day**
- **Leap Year:** 366 days = 52 weeks + **2 Odd Days**
- **100 Years:** **5** Odd Days
- **200 Years:** **3** Odd Days
- **300 Years:** **1** Odd Day
- **400 Years:** **0** Odd Days

## 2. Key Concepts

**Clocks (Relative Speed):**
- A clock is a circle of $360^\circ$ divided into 60 minute-spaces ($6^\circ$ per minute).
- **Minute Hand Speed:** $6^\circ$ per minute.
- **Hour Hand Speed:** $0.5^\circ$ per minute.
- **Relative Speed:** The minute hand gains $5.5^\circ$ on the hour hand every single minute.

```text
      12 (0°)
   11      1 (30°)
 10          2 (60°)    - Total Circle = 360°
 9    ( • )-->3 (90°)   - 1 Hour space = 30°
 8           4 (120°)   - 1 Min space  = 6°
   7       5
       6 (180°)
```

**Calendars (The Odd Day Concept):**
- The calendar operates on a modulo-7 system. An "Odd Day" is simply the remainder when the total number of days is divided by 7.
- **Day Codes:** 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday.

```text
 [Modulo-7 Day Codes]
 +-----+-----+-----+-----+-----+-----+-----+
 |  0  |  1  |  2  |  3  |  4  |  5  |  6  |
 +-----+-----+-----+-----+-----+-----+-----+
 | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
 +-----+-----+-----+-----+-----+-----+-----+
```

- **Leap Year Rule:** A year is a leap year if it is perfectly divisible by 4. **Exception:** Century years (ending in 00) must be divisible by **400** to be a leap year (e.g., 2000 is a leap year; 1900 is NOT).

## 3. Shortcuts

- **Clock Hand Alignments (in 12 hours):**
  - **Coincide ($0^\circ$):** 11 times
  - **Opposite ($180^\circ$):** 11 times
  - **Right Angle ($90^\circ$):** 22 times
  *(Multiply by 2 for a full 24-hour day).*
- **Specific Time Alignment Trick:** At what time between $H$ and $H+1$ will the hands coincide? 
  $$ M = \frac{60}{11} \times H $$
  *(If they are opposite, use $\frac{60}{11} \times (H \pm 6)$)*
- **Same Calendar Year Trick:** Two years will have the exact same calendar if the total number of odd days between them equals 0 (or a multiple of 7). 
  - Add **11** to the year (if previous was ordinary) or **6** (if previous was leap). Leap years repeat exactly every **28** years.

## 4. Common Mistakes

- **The 24-Hour Alignment Trap:** Assuming hands coincide 24 times a day. They coincide exactly **22 times a day** because the alignments between 11:00 and 1:00 merge into a single event at exactly 12:00.
- **The Century Leap Year Trap:** Mindlessly dividing 1900 or 2100 by 4 and declaring them leap years. 1900 is NOT a leap year; century years must be divisible by 400!
- **Reflex Angle Oversight:** If the angle formula gives you $210^\circ$, but the multiple-choice options only have acute/obtuse angles, remember to subtract it from $360^\circ$ ($360 - 210 = 150^\circ$).

## 5. Solved Examples

### Easy (Clock Angle)
**Problem:** What is the angle between the hour and minute hands of a clock at 8:20?
* **Step 1:** Identify $H = 8$, $M = 20$.
* **Step 2:** Apply the formula: $\theta = |30(8) - 5.5(20)|$.
* **Step 3:** Calculate: $|240 - 110| = 130^\circ$.
* **Final Answer:** **$130^\circ$**.

### Medium (Calendar Odd Days)
**Problem:** What day of the week was 15th August 1947?
* **Step 1:** Break the year into chunks: $1600 + 300 + 46 \text{ completed years} + \text{days in } 1947$.
* **Step 2:** Odd days for completed centuries: 
  - 1600 years = 0 odd days.
  - 300 years = 1 odd day.
* **Step 3:** Odd days for 46 years:
  - 46 years contains 11 leap years and 35 ordinary years.
  - $(11 \times 2) + (35 \times 1) = 22 + 35 = 57$ days.
  - $57 \div 7 \implies$ remainder is **1 odd day**.
* **Step 4:** Odd days in 1947 up to Aug 15:
  - Jan(3) + Feb(0) + Mar(3) + Apr(2) + May(3) + Jun(2) + Jul(3) + Aug(15) = 31 days.
  - $31 \div 7 \implies$ remainder is **3 odd days**.
* **Step 5:** Total odd days = $1 (\text{from } 300) + 1 (\text{from } 46) + 3 (\text{from } 1947) = 5$.
* **Final Answer:** Day code 5 corresponds to **Friday**.

### Placement-Level (Clock Coincidence)
**Problem:** At what exact time between 4 o'clock and 5 o'clock will the hands of a watch point in opposite directions ($180^\circ$)?
* **Step 1:** Use the opposite alignment shortcut: $M = \frac{60}{11} \times (H \pm 6)$.
* **Step 2:** Since $H = 4$ (which is less than 6), we use $(H + 6)$.
* **Step 3:** $M = \frac{60}{11} \times (4 + 6) = \frac{60}{11} \times 10 = \frac{600}{11}$.
* **Step 4:** Convert to a mixed fraction: $\frac{600}{11} = 54 \frac{6}{11}$ minutes.
* **Final Answer:** **54 $\frac{6}{11}$ minutes past 4**.

## 6. Practice Set

### Beginner Questions (10)
1. What is the angle between the hour and minute hands at 3:40?
2. How many times in a day do the hands of a clock coincide?
3. Today is Monday. After 61 days, it will be which day?
4. Find the angle between the hands at 5:15.
5. How many odd days are there in an ordinary year?
6. Is the year 1800 a leap year?
7. The last day of a century cannot be which of the following: Monday, Wednesday, Tuesday, or Friday?
8. What is the reflex angle between the hands of a clock at 10:25?
9. If 1st Jan 2001 was a Monday, what day of the week was 1st Jan 2002?
10. How many times are the hands of a clock at right angles in a full day?

### Intermediate Questions (5)
11. At what time between 7 and 8 o'clock will the hands of a clock be together?
12. If 8th Feb 2005 was a Tuesday, what was the day of the week on 8th Feb 2004?
13. A clock is started at noon. By 10 minutes past 5, through what angle has the hour hand turned?
14. How many leap years are there in a continuous period of 100 years?
15. At what time between 2 and 3 o'clock will the hands of a clock form an angle of $90^\circ$?

### Challenge Questions (2)
16. A watch gains 5 minutes uniformly every 24 hours. It was set right at 10:00 AM on Monday. What will be the true time when the watch indicates 10:30 AM on the following Wednesday?
17. What was the day of the week on 28th May 2006?

## 7. Answers & Hints

**Beginner:**
1. **$130^\circ$** ($\theta = |30(3) - 5.5(40)| = |90 - 220| = |-130| = 130$)
2. **22 times** (Standard rule. 11 times in 12 hours)
3. **Saturday** ($61 \div 7 = 8$ weeks + 5 odd days. Monday + 5 days = Saturday)
4. **$67.5^\circ$** ($\theta = |30(5) - 5.5(15)| = |150 - 82.5| = 67.5$)
5. **1 odd day** ($365 \div 7 \implies$ remainder 1)
6. **No** (Century years must be divisible by 400. 1800 is not)
7. **Tuesday** (A century ends on 0, 1, 3, or 5 odd days. These correspond to Sun, Mon, Wed, Fri. It cannot end on Tue, Thu, or Sat)
8. **$197.5^\circ$** (Internal angle: $|30(10) - 5.5(25)| = |300 - 137.5| = 162.5^\circ$. Reflex = $360 - 162.5 = 197.5^\circ$)
9. **Tuesday** (2001 is an ordinary year, so it adds 1 odd day. Monday + 1 = Tuesday)
10. **44 times** (22 times every 12 hours)

**Intermediate:**
11. **38 $\frac{2}{11}$ min past 7** ($M = \frac{60}{11} \times 7 = \frac{420}{11} = 38\frac{2}{11}$)
12. **Sunday** (2004 was a leap year. Feb 8th 2004 is *before* Feb 29th 2004, so the period from 8th Feb 2004 to 8th Feb 2005 crosses the leap day. Subtract 2 days from Tuesday $\implies$ Sunday)
13. **$155^\circ$** (Total time = 5 hours 10 mins = $310$ minutes. Hour hand moves $0.5^\circ$ per minute. $310 \times 0.5 = 155^\circ$)
14. **24** (100 divided by 4 is 25. But the 100th year is a century year and not divisible by 400, so subtract 1. $25 - 1 = 24$)
15. **27 $\frac{3}{11}$ min past 2** ($M = \frac{2}{11}(30H \pm \text{Angle})$. For right angle, angle=90. $M = \frac{2}{11}(30(2) + 90) = \frac{2}{11}(150) = \frac{300}{11} = 27\frac{3}{11}$)

**Challenge:**
16. **10:00 AM** (Watch gains 5 mins in 24 hrs. This means 24 hours 5 minutes (or $\frac{289}{12}$ hours) of this incorrect watch = 24 hours of a correct watch. Time passed from Mon 10 AM to Wed 10:30 AM = 48 hours 30 mins = $\frac{97}{2}$ hours. $\frac{289}{12}$ hrs incorrect = 24 hrs correct $\implies 1$ hr incorrect = $\frac{24 \times 12}{289}$ hrs correct. Therefore, $\frac{97}{2}$ hrs incorrect = $\frac{24 \times 12}{289} \times \frac{97}{2} \approx 48$ hours exactly! True time is exactly 48 hours later = Wednesday 10:00 AM)
17. **Sunday** (Years up to 2000 = 0 odd days. 5 completed years = 1 leap + 4 ordinary = 6 odd days. 2006 up to May 28: Jan(3) + Feb(0) + Mar(3) + Apr(2) + May(28) = 36 days $\implies$ 1 odd day. Total odd days = $0 + 6 + 1 = 7 \implies 0$ odd days. Code 0 = Sunday)