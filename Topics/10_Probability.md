# Probability - Fundamentals

## 1. Formulas

**Basic Probability:**
$$
\text{Probability } P(A) = \frac{\text{Favorable Outcomes}}{\text{Total Possible Outcomes}}
$$

**Addition Rule (Overlapping Events):**
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

**The Complement Rule:**
$$
P(\text{At least one}) = 1 - P(\text{None})
$$

## 2. Key Concepts

- **Sample Space:** The complete set of all possible outcomes. For $n$ coins, it is $2^n$. For $n$ dice, it is $6^n$.
- **Complementary Events:** Events that partition the sample space completely. The probability of an event happening plus it not happening is always $1$.
- **Conditional Probability:** Adjusting the total sample space denominator to fit a pre-existing condition: $P(A|B) = \frac{P(A \cap B)}{P(B)}$.
- **Core Exam Categories:** Almost all placement questions fall into 4 buckets: Coins ($H/T$), Dice ($1-6$), Cards (52 standard), or Bag Sampling (colored balls).

## 3. Shortcuts

- **The "At Least" Trigger:** Whenever you spot the phrase **"at least one..."** in a question, your brain should instantly switch to the complement rule: **$1 - P(\text{None})$**.
- **Two-Dice Sum Frequency (Symmetry Trick):** Instead of manually listing pairs during an exam, memorize this pyramid for the number of ways to get a specific sum with two dice:
  - Sum of 2 or 12 $\rightarrow$ **1 way**
  - Sum of 3 or 11 $\rightarrow$ **2 ways**
  - Sum of 4 or 10 $\rightarrow$ **3 ways**
  - Sum of 5 or 9 $\rightarrow$ **4 ways**
  - Sum of 6 or 8 $\rightarrow$ **5 ways**
  - Sum of 7 $\rightarrow$ **6 ways** *(The most frequent sum)*
- **Independent Events Intersection:** When two events do not affect each other, $P(A \text{ and } B) = P(A) \times P(B)$. Bypass complex unions. If $A$ solves a puzzle 50% of the time, and $B$ solves it 50% of the time, the probability it gets solved is $1 - (0.5 \times 0.5) = 75\%$.

## 4. Common Mistakes

- **The Face Card Trap:** Many students accidentally include Aces as face cards. A standard deck has exactly 12 face cards (4 Jacks, 4 Queens, 4 Kings). Aces are "honors", not face cards!
- **The "At Least" Overcounting Error:** When computing "at least one red ball" directly, students often write $\binom{5}{1} \times \binom{10}{2}$. This is fundamentally incorrect because it creates duplicate counting variations. Stick to the complement method.
- **Overlap Addition:** Do not apply basic addition rules to overlapping events without subtracting their intersection ($P(A \cap B)$).
- **Year Base Miscalculation:** A non-leap year has 365 days ($52 \text{ weeks} + 1\text{ extra day}$). A leap year has 366 days ($52 \text{ weeks} + 2\text{ extra days}$).

## 5. Solved Examples

### Easy (Dice Setup)
**Problem:** Two dice are thrown simultaneously. What is the probability that the sum of the numbers on the two faces is divisible by 4 or 5?
* **Step 1:** For two dice, total outcomes = $6 \times 6 = 36$.
* **Step 2:** The possible sums range from 2 to 12. Sums divisible by 4 or 5 are: 4, 5, 8, 10, and 12.
* **Step 3:** Use the Symmetry Trick to count ways:
  * Sum 4 = 3 ways. Sum 5 = 4 ways. Sum 8 = 5 ways. Sum 10 = 3 ways. Sum 12 = 1 way.
* **Step 4:** Total favorable = $3 + 4 + 5 + 3 + 1 = 16 \text{ ways}$.
* **Final Answer:** $P = \frac{16}{36} = \mathbf{\frac{4}{9}}$.

### Medium (Cards Setup)
**Problem:** From a pack of 52 cards, two cards are drawn together at random. What is the probability that one is a spade and one is a heart?
* **Step 1:** Find Total Outcomes. $\binom{52}{2} = \frac{52 \times 51}{2} = 1326$.
* **Step 2:** Find Favorable Outcomes. 13 spades and 13 hearts. We need exactly 1 of each. $\binom{13}{1} \times \binom{13}{1} = 13 \times 13 = 169$.
* **Final Answer:** $P = \frac{169}{1326} = \mathbf{\frac{13}{102}}$.

### Placement-Level (The "At Least" Bag Trick)
**Problem:** A bag contains 4 white, 5 red, and 6 blue balls. Three balls are drawn at random from the bag. What is the probability that at least one of them is red?
* **Step 1:** Find Total Outcomes. Total balls = $15$. Selecting 3: $\binom{15}{3} = \frac{15 \times 14 \times 13}{3 \times 2} = 455$.
* **Step 2:** Apply the Complement Rule. "At least one red" = $1 - P(\text{No Red})$.
* **Step 3:** Find outcomes with No Red Balls. Choose all 3 from the 10 non-red balls: $\binom{10}{3} = \frac{10 \times 9 \times 8}{3 \times 2} = 120$.
* **Step 4:** $P(\text{No Red}) = \frac{120}{455} = \frac{24}{91}$.
* **Final Answer:** $P(\text{At least one Red}) = 1 - \frac{24}{91} = \mathbf{\frac{67}{91}}$.

## 6. Practice Set

### Beginner Questions (10)
1. A fair coin is tossed three times. What is the probability of getting at least two heads?
2. A single die is rolled. What is the probability of getting a number that is a prime factor of 6?
3. From a box containing cards numbered 1 to 25, one card is drawn at random. What is the probability that the number on the drawn card is a multiple of 3 or 5?
4. One card is randomly drawn from a well-shuffled pack of 52 playing cards. Find the probability that the card drawn is a face card (Jack, Queen, or King).
5. A bag contains 6 black and 8 white balls. One ball is drawn at random. What is the probability that the drawn ball is white?
6. Two dice are thrown simultaneously. What is the probability that the product of the numbers appearing on the top faces is an odd number?
7. In a lottery, there are 10 prizes and 25 blanks. A ticket is chosen at random. What is the probability of winning a prize?
8. What is the probability that a non-leap year selected at random will contain 53 Sundays?
9. A letter is chosen at random from the word 'ASSASSINATION'. Find the probability that the chosen letter is a vowel.
10. Two coins are tossed together. What is the probability of getting at most one tail?

### Intermediate Questions (5)
11. A bag contains 4 white, 5 black, and 6 green balls. If 3 balls are drawn at random, what is the probability that they are all of different colors?
12. Two cards are drawn from a standard deck of 52 cards one after another without replacement. Find the probability that both cards are Aces.
13. The probability that A can solve a placement puzzle is $\frac{2}{3}$ and the probability B can solve it is $\frac{3}{5}$. If both try independently, what is the probability that the puzzle gets solved?
14. In a class, 40% of students study Python, 25% study Java, and 15% study both. If a student is selected at random, what is the probability that they study Python given that they already study Java?
15. A box contains 20 light bulbs, out of which 4 are defective. If a sample of 3 bulbs is chosen at random, find the probability that exactly one bulb is defective.

### Challenge Questions (2)
16. An urn contains 3 red, 4 white, and 5 blue marbles. If 4 marbles are drawn simultaneously, what is the probability that at least two of them are white?
17. A man speaks the truth in 75% of cases, and a woman speaks the truth in 80% of cases. In what percentage of cases are they likely to contradict each other when stating the same fact?

## 7. Answers & Hints

**Beginner:**
1. **1/2** (HHT, HTH, THH, HHH. 4 out of 8 outcomes).
2. **1/3** (Factors of 6 are 1, 2, 3, 6. Prime factors are only 2 and 3. So, 2 out of 6 outcomes).
3. **12/25** (Multiples of 3 = 8. Multiples of 5 = 5. Multiple of 15 (intersection) = 1. Total = $8 + 5 - 1 = 12$).
4. **3/13** (12 Face cards out of 52 total. $12/52$).
5. **4/7** (8 white out of 14 total. $8/14$).
6. **1/4** (To get an odd product, both numbers must be odd. 3 odd numbers per die. $3 \times 3 = 9$ favorable out of 36).
7. **2/7** (10 prizes out of 35 total tickets. $10/35$).
8. **1/7** (A non-leap year has 52 full weeks + 1 extra day. That 1 day has a 1 in 7 chance of being Sunday).
9. **6/13** (Vowels are A, A, I, A, I, O = 6. Total letters = 13).
10. **3/4** ("At most one tail" means 0 tails or 1 tail. HH, HT, TH. 3 out of 4 outcomes).

**Intermediate:**
11. **24/91** (One of each color: $\binom{4}{1} \times \binom{5}{1} \times \binom{6}{1} = 120$. Total = $\binom{15}{3} = 455$. $120/455$).
12. **1/221** (First ace: $4/52$. Second ace: $3/51$. Multiply them: $\frac{1}{13} \times \frac{1}{17}$).
13. **13/15** (Use complement trick. Prob nobody solves = $(1/3) \times (2/5) = 2/15$. Prob solved = $1 - 2/15$).
14. **3/5 or 60%** (Conditional Probability: $P(P|J) = P(P \cap J) / P(J) = 15\% / 25\% = 3/5$).
15. **8/19** (Need 1 defective and 2 non-defective. $\binom{4}{1} \times \binom{16}{2} = 4 \times 120 = 480$. Total = $\binom{20}{3} = 1140$. $480/1140 = 48/114 = 8/19$).

**Challenge:**
16. **67/165** (Calculate exactly 2 white + exactly 3 white + exactly 4 white. $P(2W) = \binom{4}{2} \times \binom{8}{2} = 168$. $P(3W) = \binom{4}{3} \times \binom{8}{1} = 32$. $P(4W) = \binom{4}{4} = 1$. Favorable = 201. Total = $\binom{12}{4} = 495$. $P = 201/495 = 67/165$).
17. **35%** (Contradiction happens when A tells truth and B lies, OR A lies and B tells truth. $(0.75 \times 0.20) + (0.25 \times 0.80) = 0.15 + 0.20 = 0.35$).
