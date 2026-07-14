# Number Series & Coding - Fundamentals

## 1. Formulas & Patterns

Number series and coding do not rely on standard mathematical formulas, but rather on recognizing logical sequences and positional values.

**Common Number Series Structures:**
- **Squares / Cubes:** $n^2$, $n^3$, $n^2 \pm 1$, $n^3 \pm 1$.
- **Arithmetic:** $n, n+a, n+2a$ (Constant addition/subtraction).
- **Geometric:** $n, na, na^2$ (Constant multiplication/division).
- **Mixed Operator:** $(\times a + b), (\times a - b)$.
- **Step-Difference:** The difference between the numbers forms its own logical series.

**Alphabet Positional Values (A to Z):**
- **Forward:** A=1, B=2, C=3 ... X=24, Y=25, Z=26
- **Reverse:** A=26, B=25, C=24 ... X=3, Y=2, Z=1
*Formula for Reverse Value:* $\text{Reverse Pos} = 27 - \text{Forward Pos}$.

## 2. Key Concepts

- **The Difference of Difference (Tiered Series):** If the gap between numbers doesn't make sense, find the gap between the gaps. Most complex TCS series problems resolve at the second or third tier of differences.
- **Interleaved / Alternating Series:** Sometimes, a single sequence is actually two separate sequences woven together (e.g., positions 1, 3, 5 follow one rule; positions 2, 4, 6 follow another).
- **Opposite Letters:** In coding-decoding, letters are often replaced by their opposite alphabet pair (A & Z, B & Y). The sum of their positions is always 27.

## 3. Shortcuts

- **The EJOTY Trick:** Memorize the 5-multiples of the alphabet to instantly find nearby letters:
  **E** (5) - **J** (10) - **O** (15) - **T** (20) - **Y** (25).
  *(Example: What is the 18th letter? 'T' is 20, so 19 is S, 18 is R).*
- **Reverse Pair Mnemonics:** 
  **A-Z** (AZ), **B-Y** (Boy), **C-X** (CruX), **D-W** (DoWn), **E-V** (EVen), **F-U** (FUll), **G-T** (GT Road), **H-S** (High School), **I-R** (Indian Railways), **J-Q** (Jungle Queen), **K-P** (KanPur), **L-O** (LOve), **M-N** (MaN).
- **Growth Rate Visual Check:** 
  - If the series grows *slowly*, it is an Addition/Difference series.
  - If the series grows *explosively* (e.g., 2, 10, 40, 180), it is a Multiplication/Exponential series. Don't waste time checking addition gaps!

## 4. Common Mistakes

- **The False Pattern Assumption:** Checking only the first two numbers and assuming the pattern (e.g., 2, 4 -> assumes $+2$. But if the next is 8, it's actually $\times 2$). Always verify the pattern across at least three transitions.
- **"What is coded as" vs "How is it coded":** 
  - "How is CAT coded?" -> Apply the logic forward to CAT.
  - "What is coded as CAT?" -> The answer *results* in CAT. Apply the logic *backward* to find the source word.
- **Ignoring Primes:** Assuming a sequence of 2, 3, 5, 7, 11 is an irregular addition series, rather than recognizing it as prime numbers.

## 5. Solved Examples

### Easy (Constant Shift Coding)
**Problem:** If **WATER** is coded as **YCVGT**, how is **FIRE** coded?
* **Step 1:** Map the positional shifts for WATER -> YCVGT.
  - W (23) -> Y (25) : $+2$
  - A (1) -> C (3) : $+2$
  - T (20) -> V (22) : $+2$
  - E (5) -> G (7) : $+2$
  - R (18) -> T (20) : $+2$
* **Step 2:** Apply a strictly $+2$ shift to FIRE.
  - F(6)+2 = 8 (H), I(9)+2 = 11 (K), R(18)+2 = 20 (T), E(5)+2 = 7 (G).
* **Final Answer:** **HKTG**.

### Medium (Multiplicative Mixed Series)
**Problem:** Find the next number in the series: 5, 11, 24, 51, 106, ?
* **Step 1:** The numbers are roughly doubling. Let's test the $\times 2$ framework.
* **Step 2:** Break down each transition:
  - $5 \times 2 + 1 = 11$
  - $11 \times 2 + 2 = 24$
  - $24 \times 2 + 3 = 51$
  - $51 \times 2 + 4 = 106$
* **Step 3:** Apply the established pattern to the final number: $106 \times 2 + 5$.
* **Final Answer:** $212 + 5 = \mathbf{217}$.

### Placement-Level (Difference of Difference)
**Problem:** Find the missing term: 4, 9, 20, 43, 90, ?
* **Step 1:** Calculate Tier 1 differences (gaps between the numbers).
  - $9 - 4 = 5$
  - $20 - 9 = 11$
  - $43 - 20 = 23$
  - $90 - 43 = 47$
  - (Tier 1 sequence: 5, 11, 23, 47)
* **Step 2:** Calculate Tier 2 differences (gaps between the Tier 1 numbers).
  - $11 - 5 = 6$
  - $23 - 11 = 12$
  - $47 - 23 = 24$
  - (Tier 2 sequence: 6, 12, 24 -> Clearly doubling!)
* **Step 3:** Project the next gaps.
  - Next Tier 2 gap $= 48$.
  - Next Tier 1 gap $= 47 + 48 = 95$.
* **Step 4:** Add the final Tier 1 gap to the last sequence number. $90 + 95$.
* **Final Answer:** $\mathbf{185}$.

## 6. Practice Set

### Beginner Questions (10)
1. Find the next number: 3, 8, 15, 24, ?
2. Find the next number: 8, 27, 64, 125, ?
3. Find the missing term: 2, 3, 5, 7, 11, 13, ?
4. If **CAT** is coded as **DBU**, how is **DOG** coded?
5. Find the next number: 10, 10, 20, 60, 240, ?
6. Find the next letter in the series: B, E, H, K, ?
7. If **RED** is coded as **27**, what is the code for **CAT**?
8. Find the missing term: 7, 10, 8, 11, 9, 12, ?
9. If **SUN** is coded as **NUS**, how is **MOON** coded?
10. Find the next number: 120, 99, 80, 63, 48, ?

### Intermediate Questions (5)
11. Find the missing term: 4, 18, 48, 100, 180, ?
12. If **MAN** is coded as **NZM**, how is **BOYS** coded?
13. In a certain code language, "123" means "hot filtered coffee", "356" means "very hot day", and "589" means "day and night". Which digit stands for "very"?
14. Find the missing term: 2, 12, 36, 80, 150, ?
15. If **MACHINE** is coded as **LBBIHOD**, how is **PROBLEM** coded?

### Challenge Questions (2)
16. Find the wrong number in the series: 3, 10, 29, 66, 127, 218, 346, 514
17. If **SYSTEM** is coded as **SYSMET** and **NEARER** is coded as **AENRER**, how is **FRACTION** coded?

## 7. Answers & Hints

**Beginner:**
1. **35** (Pattern is $n^2 - 1$. $2^2-1=3$, $3^2-1=8 \dots 6^2-1=35$. Alternately: gaps are +5, +7, +9, +11)
2. **216** (Perfect cubes: $2^3, 3^3, 4^3, 5^3$. Next is $6^3$)
3. **17** (Continuous prime numbers)
4. **EPH** (Straight $+1$ shift for all letters)
5. **1200** (Pattern is $\times 1, \times 2, \times 3, \times 4$. Next is $240 \times 5 = 1200$)
6. **N** (Forward $+3$ skip: 2, 5, 8, 11. Next is 14=N)
7. **24** (Sum of positional values. R(18) + E(5) + D(4) = 27. C(3) + A(1) + T(20) = 24)
8. **10** (Alternating series: [7, 8, 9, ?] and [10, 11, 12]. Next in first sequence is 10)
9. **NOOM** (Simply reverse the word)
10. **35** (Pattern is $n^2 - 1$ counting down: $11^2-1, 10^2-1 \dots 6^2-1=35$. Or gaps of -21, -19, -17, -15, -13)

**Intermediate:**
11. **294** (Pattern is $n^3 - n^2$. $2^3-2^2=4 \dots 6^3-6^2=180$. Next is $7^3 - 7^2 = 343 - 49 = 294$)
12. **YLBH** (Opposite reverse letters. M->N, A->Z, N->M. B->Y, O->L, Y->B, S->H)
13. **6** ("hot" is common to 1st & 2nd, digit 3 is common. "day" is common to 2nd & 3rd, digit 5 is common. The remaining word in 2nd is "very", remaining digit is 6)
14. **252** (Pattern is $n^3 + n^2$. $1^3+1^2=2 \dots 5^3+5^2=150$. Next is $6^3+6^2 = 216+36 = 252$)
15. **OSNCKFL** (Alternating shifts: -1, +1, -1, +1. M(-1)L, A(+1)B, C(-1)B... For PROBLEM: P(-1)O, R(+1)S, O(-1)N, B(+1)C, L(-1)K, E(+1)F, M(-1)L)

**Challenge:**
16. **346** (The pattern is $n^3 + 2$. e.g., $1^3+2=3, 2^3+2=10, 3^3+2=29 \dots 7^3+2=345$. Therefore, 346 is the incorrect number in the sequence.)
17. **CARFNOIT** (The word is split into two equal halves, and each half is reversed. SYS|TEM -> SYS|MET. NEA|RER -> AEN|RER. FRAC|TION -> CARF|NOIT)