# Phase 2: Probability

## Formula

$$
\text{Probability } P(A) = \frac{\text{Favorable Outcomes } n(E)}{\text{Total Outcomes } n(S)}
$$

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

$$
P(\text{At least one}) = 1 - P(\text{None})
$$

## Key Concepts

* **Sample Space:** The complete set of all possible outcomes ($2^n$ for coins, $6^n$ for dice).
* **Complementary Events:** Events that partition the sample space completely; their sum is always exactly 1.
* **Conditional Probability:** Adjusting the total sample space denominator to fit a pre-existing condition: $P(A|B) = \frac{P(A \cap B)}{P(B)}$.

## Shortcuts

* Symmetrical distribution of two dice sums allows fast mental calculations without listing coordinates.
* "Without replacement" requires you to decrement both the numerator and denominator counts on successive fraction multiplications.

## Mistakes to Avoid

* Never count Aces as face cards.
* Do not apply basic addition rules to overlapping events without subtracting their intersection ($P(A \cap B)$).


# 1. Concept Explanation

### Simple Explanation

Probability is the mathematical measurement of uncertainty. It calculates how likely an event is to happen on a scale from **0** (absolutely impossible) to **1** (absolutely certain).

### The Core Formula

To calculate basic probability, you only need to master two counting tasks:

$$
\text{Probability of an Event } P(A) = \frac{\text{Number of Favorable Outcomes}}{\text{Total Number of Possible Outcomes}}
$$

### Real-World Intuition & Core Categories

Most placement aptitude rounds restrict their questions to four highly predictable setups:

1. **Coins:** Each fair coin has 2 outcomes: Head (**$H$**) or Tail (**$T$**). For **$n$** coins, total outcomes = **$2^n$**.
2. **Dice:** Each standard die has 6 outcomes (**$1$** to **$6$**). For **$n$** dice, total outcomes = **$6^n$**.
3. **Cards:** A standard deck contains 52 cards, split into 4 suits of 13 cards each.
4. **Sampling (Balls/Marbles in a Bag):** Selecting items out of a group, usually  *without replacement* .

### The "Complement" Shortcut

If counting the number of ways an event *can* happen seems too tedious or complex, count the ways it **cannot** happen instead, then subtract that value from 1.

$$
P(\text{Happening}) = 1 - P(\text{Not Happening})
$$

 **Mentor Hint:** Whenever you spot the phrase **"at least one..."** in a question, your brain should instantly switch to the complement rule: **$1 - P(\text{None})$**.

# 2. Solved Examples

### Easy (Dice Setup)

**Question:** Two dice are thrown simultaneously. What is the probability that the sum of the numbers on the two faces is divisible by 4 or 5?

* **Step 1: Total Outcomes.** For two dice, total outcomes = **$6 \times 6 = 36$**.
* **Step 2: Find Favorable Sums.** The possible sums range from 2 to 12. Sums divisible by 4 or 5 are: 4, 5, 8, 10, and 12.
* **Step 3: Count the combinations for each sum:**
  * Sum = 4: **$(1,3), (2,2), (3,1) \rightarrow 3 \text{ ways}$**
  * Sum = 5: **$(1,4), (2,3), (3,2), (4,1) \rightarrow 4 \text{ ways}$**
  * Sum = 8: **$(2,6), (3,5), (4,4), (5,3), (6,2) \rightarrow 5 \text{ ways}$**
  * Sum = 10: **$(4,6), (5,5), (6,4) \rightarrow 3 \text{ ways}$**
  * Sum = 12: **$(6,6) \rightarrow 1 \text{ way}$**
* **Step 4: Sum the favorable outcomes.** Total = **$3 + 4 + 5 + 3 + 1 = 16 \text{ ways}$**.
* **Step 5: Apply formula.** **$P = \frac{16}{36} = \mathbf{\frac{4}{9}}$**.

### Medium (Cards Setup)

**Question:** From a pack of 52 cards, two cards are drawn together at random. What is the probability that one is a spade and one is a heart?

* **Step 1: Find Total Outcomes.** Selecting 2 cards out of 52 uses combinations (**$nCr$**):
  $$
  \text{Total} = \binom{52}{2} = \frac{52 \times 51}{2 \times 1} = 1326
  $$
* **Step 2: Find Favorable Outcomes.** There are 13 spades and 13 hearts in a deck. We need exactly 1 from each suit:
  $$
  \text{Favorable} = \binom{13}{1} \times \binom{13}{1} = 13 \times 13 = 169
  $$
* **Step 3: Calculate.** **$P = \frac{169}{1326} = \mathbf{\frac{13}{102}}$**.

### Placement-Level (The "At Least" Bag Trick)

**Question:** A bag contains 4 white, 5 red, and 6 blue balls. Three balls are drawn at random from the bag. What is the probability that at least one of them is red?

* **Step 1: Find Total Outcomes.** Total balls = **$4 + 5 + 6 = 15$**. Selecting any 3 balls:

  $$
  \text{Total} = \binom{15}{3} = \frac{15 \times 14 \times 13}{3 \times 2 \times 1} = 455
  $$
* **Step 2: Apply the Complement Rule.** "At least one red" = **$1 - P(\text{No Red Balls})$**.
* **Step 3: Find outcomes with No Red Balls.** To get zero red balls, all 3 balls must be chosen from the remaining 10 non-red balls (4 white + 6 blue):

  $$
  \text{Favorable (No Red)} = \binom{10}{3} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120
  $$
* **Step 4: Execute the math.**

  $$
  P(\text{No Red}) = \frac{120}{455} = \frac{24}{91}
  $$

  $$
  P(\text{At least one Red}) = 1 - \frac{24}{91} = \mathbf{\frac{67}{91}}
  $$

# 3. Practice Set

### Beginner Questions

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

### Intermediate Questions

11. A bag contains 4 white, 5 black, and 6 green balls. If three balls are drawn out at random, what is the probability that they are all of different colors?
12. Two cards are drawn from a standard deck of 52 cards one after another without replacement. Find the probability that both cards are Aces.
13. The probability that A can solve a specific placement puzzle is **$\frac{2}{3}$** and the probability that B can solve it is **$\frac{3}{5}$**. If both try independently, what is the probability that the puzzle gets solved?
14. In a class, 40% of students study Python, 25% study Java, and 15% study both. If a student is selected at random, what is the probability that they study Python given that they already study Java?
15. A box contains 20 light bulbs, out of which 4 are defective. If a sample of 3 bulbs is chosen at random, find the probability that exactly one bulb is defective.

### Challenge Questions

16. An urn contains 3 red, 4 white, and 5 blue marbles. If 4 marbles are drawn simultaneously, what is the probability that at least two of them are white?
17. A man speaks the truth in 75% of cases, and a woman speaks the truth in 80% of cases. In what percentage of cases are they likely to contradict each other when stating the same fact?

# 4. Mistake Analysis

* **The Face Card Trap:** Many students accidentally include Aces as face cards. A standard deck has exactly 12 face cards (4 Jacks, 4 Queens, 4 Kings). Aces are considered honors, but **not** face cards.
* **The "At Least" Overcounting Error:** When computing "at least one red ball" directly, students often write **$\binom{5}{1} \times \binom{10}{2}$**. This is fundamentally incorrect because it creates duplicate counting variations when multiple red balls are drawn. Stick to the complement method (**$1 - \text{None}$**) to stay safe.
* **Year Base Miscalculation:** Forgetting that a non-leap year has 365 days (**$52 \text{ weeks} + 1\text{ extra day}$**), meaning only 1 specific day of the week gets a 53rd occurrence. A leap year has 366 days (**$52 \text{ weeks} + 2\text{ extra days}$**).

# 5. Speed Building

* **Two-Dice Sum Frequency (Symmetry Trick):** Instead of manually listing pairs during an exam, memorize this pyramid for the number of ways to get a specific sum with two dice:
  * Sum of 2 or 12 **$\rightarrow$** **1 way**
  * Sum of 3 or 11 **$\rightarrow$** **2 ways**
  * Sum of 4 or 10 **$\rightarrow$** **3 ways**
  * Sum of 5 or 9 **$\rightarrow$** **4 ways**
  * Sum of 6 or 8 **$\rightarrow$** **5 ways**
  * Sum of 7 **$\rightarrow$** **6 ways** *(The most frequent sum)*
* **Independent Events Intersection:** When two events are independent, **$P(A \text{ and } B) = P(A) \times P(B)$**. For problem 13 (puzzle solved), bypass complex unions by simply calculating: **$1 - P(\text{A fails}) \times P(\text{B fails})$**.
