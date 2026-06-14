# Permutations & Combinations - Fundamentals

## 1. Formulas

**Factorial Notation (!):**

$$
n! = n \times (n-1) \times (n-2) \times \dots \times 1
$$
*(Note: $0! = 1$ and $1! = 1$)*

**Permutations (Arranging $r$ items out of $n$ items):**

$$
^nP_r = \frac{n!}{(n-r)!}
$$

**Combinations (Selections where Order DOES NOT Matter):**

$$
^nC_r = \frac{n!}{r!(n-r)!}
$$

**Arrangements with Repetitions:**
If a word has $n$ total letters, where $p$ are of one type, $q$ of another, and $r$ of a third, total arrangements:

$$
\text{Total Ways} = \frac{n!}{p! \cdot q! \cdot r!}
$$

## 2. Key Concepts

- **Permutation = Arrangement:** Order matters (e.g., passwords, seating, schedules).
- **Combination = Selection:** Order does NOT matter (e.g., teams, committees, cards).
- **The Selection-Arrangement Relationship:** To arrange a subset, first *select* them, then *arrange* them: $^nP_r = \ ^nC_r \times r!$

## 3. Shortcuts

- **Symmetrical Selection:** $^nC_r = \ ^nC_{n-r}$. Saves time! (e.g., $^{10}C_8 = \ ^{10}C_2 = 45$).
- **The Handshake Formula:** For $n$ entities interacting with each other exactly once: $\mathbf{\frac{n(n-1)}{2}}$.
- **"At Least 1" Selection:** Total ways to select *at least one* item from $n$ distinct items is $\mathbf{2^n - 1}$.
- **Circular Permutations:** Arranging $n$ items in a circle = $\mathbf{(n-1)!}$.
- **The Gap Method:** When items must *never sit next to each other*, arrange the unrestricted items first to create "gaps" ($\_ X \_ X \_ X \_$). Then place the restricted items into those gaps.

## 4. Common Mistakes

- **The Repetition Oversight:** When arranging words with identical letters (like 'APPLE'), always divide the total factorial by the factorial of the repeating counts ($\frac{5!}{2!}$).
- **"Never Together" vs "Not All Together":** "Never together" means *no two target items can be adjacent* (use the Gap Method). Subtracting "All Together" from "Total" only guarantees the *entire clump* is broken up, not individual pieces.
- **Order Overcounting:** Using Permutations ($^nP_r$) when you only need to pick a team. Picking Alice then Bob is the exact same committee as picking Bob then Alice (Use $^nC_r$).

## 5. Solved Examples

### Easy (The Handshake Shortcut)
**Problem:** At a networking event, 12 people shake hands with everyone else exactly once. How many total handshakes occur?
* **Application:** Use the handshake formula.
* **Calculation:** $\frac{n(n-1)}{2} = \frac{12 \times 11}{2} = \mathbf{66 \text{ handshakes}}$.

### Medium (The Gap Method)
**Problem:** In how many ways can 4 boys and 3 girls be seated in a row so that no two girls sit together?
* **Step 1:** Arrange the unrestricted boys first: $4! = 24 \text{ ways}$.
* **Step 2:** This creates 5 potential gaps for the girls: `_ B _ B _ B _ B _`
* **Step 3:** Place the 3 girls into these 5 gaps: $^5P_3 = 5 \times 4 \times 3 = 60 \text{ ways}$.
* **Step 4:** Multiply both arrangements: $24 \times 60 = \mathbf{1440 \text{ ways}}$.

### Placement-Level ("At Least 1" & Collinear Tricks)
**Problem 1:** A restaurant offers 6 distinct spices. In how many ways can a chef choose at least one spice to flavor a dish?
* **Application:** Use the $2^n - 1$ shortcut instead of adding $^6C_1 + \dots + ^6C_6$.
* **Calculation:** $2^6 - 1 = 64 - 1 = \mathbf{63 \text{ ways}}$.

**Problem 2:** There are 10 points in a plane, out of which 4 points are collinear. How many unique triangles can be formed?

* **Step 1:** Calculate maximum possible triangles. A triangle requires selecting any 3 points.
  $$
  \text{Total possible} = ^{10}C_3 = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120
  $$
* **Step 2:** Identify the impossible cases. You cannot form a triangle using 3 points that all lie on the exact same straight line. Subtract the triangles that would have theoretically been formed by those 4 collinear points.
  $$
  \text{Collinear selections} = ^4C_3 = \ ^4C_1 = 4
  $$
* **Step 3:** Subtract to find valid triangles.
  $$
  \text{Valid Triangles} = 120 - 4 = \mathbf{116 \text{ triangles}}
  $$

## 6. Practice Set

### Beginner Questions (10)

1. Evaluate the value of $^{50}C_{48}$ mentally.
2. In how many different ways can the letters of the word 'APPLE' be arranged?
3. In a business meeting, everyone shakes hands with everyone else exactly once. If there are 12 people in the room, how many total handshakes take place?
4. A restaurant offers 5 different fresh herbs. In how many ways can a chef choose at least one herb to garnish a dish?
5. How many 4-digit numbers can be formed using the digits 1, 2, 3, 5, 7, 8 if repetition of digits is not allowed?
6. In how many ways can a cricket captain select a playing XI (11 players) out of a squad of 15 players?
7. In how many ways can the letters of the word 'ORANGE' be arranged so that the consonants occupy only the odd positions?
8. Out of 6 men and 4 women, a committee of 5 people is to be formed. In how many ways can this be done if the committee must contain exactly 2 women?
9. How many 3-letter words (meaningful or meaningless) can be formed using the letters of the word 'COMPUTER' without repetition?
10. Find the number of ways in which 5 people can be seated around a circular table.

### Intermediate Questions (5)

11. In how many ways can the letters of the word 'SOFTWARE' be arranged such that the vowels *never* sit next to each other? (Use the Gap Method).
12. A bag contains 4 red, 3 black, and 2 white keys. In how many ways can 3 keys be drawn from the bag if at least one black key must be included in the selection?
13. Out of 7 consonants and 4 vowels, how many unique words can be formed consisting of 3 consonants and 2 vowels?
14. How many 4-digit numbers greater than 5000 can be formed using the digits 3, 5, 6, 7, 8 when repetition of digits is allowed?
15. In how many ways can a pack of 52 cards be divided equally among 4 players?

### Challenge Questions (2)

16. There are 12 points in a plane, no three of which are in the same straight line except 5 points which are collinear. Find the total number of straight lines that can be formed by joining these points.
17. A question paper consists of two sections, each containing 5 questions. A candidate is required to attempt 6 questions in total, selecting at least 2 questions from each section. In how many ways can the candidate select the questions?

## 7. Answers & Hints

**Beginner:**
1. **1225** (Using symmetry: $^{50}C_{48} = \ ^{50}C_2 = \frac{50 \times 49}{2}$)
2. **60** (Total letters = 5. 'P' repeats twice $\implies \frac{5!}{2!} = \frac{120}{2}$)
3. **66** (Handshake formula shortcut: $\frac{12 \times 11}{2}$)
4. **31** (At least 1 shortcut: $2^5 - 1$)
5. **360** (Arranging 4 out of 6 distinct digits $\implies ^6P_4 = 6 \times 5 \times 4 \times 3$)
6. **1365** (Using symmetry: $^{15}C_{11} = \ ^{15}C_4 = \frac{15 \times 14 \times 13 \times 12}{4 \times 3 \times 2 \times 1}$)
7. **36** (Word has 6 spots. 3 odd spots for 3 consonants = $3! = 6$ ways. Remaining 3 spots for 3 vowels = $3! = 6$ ways. Total = $6 \times 6$)
8. **120** (Select 2 women ($^4C_2 = 6$) AND select 3 men ($^6C_3 = 20$). Total $= 6 \times 20$)
9. **336** (Arranging 3 out of 8 distinct letters $\implies ^8P_3 = 8 \times 7 \times 6$)
10. **24** (Circular permutation formula shortcut: $(n-1)! = 4! = 24$)

**Intermediate:**
11. **14,400** (Gap Method: Arrange 5 consonants first $= 5! = 120$. This creates 6 gaps: `_C_C_C_C_C_`. Place the 3 vowels in these 6 gaps $\implies ^6P_3 = 120$. Total $= 120 \times 120$)
12. **64** (Complement Method: $\text{Total Ways} - \text{Ways with NO Black keys}$. Total $= ^9C_3 = 84$. No black keys means picking 3 from the 6 non-black keys $\implies ^6C_3 = 20$. At least one $= 84 - 20 = 64$)
13. **25,200** (Step 1: Select letters $\implies ^7C_3 \times ^4C_2 = 35 \times 6 = 210$. Step 2: Arrange the 5 chosen letters $\implies 5! = 120$. Total $= 210 \times 120$)
14. **500** (First digit must be 5, 6, 7, or 8 $\implies$ 4 choices. The next three digits can be anything since repetition is allowed $\implies$ 5 choices each. Total $= 4 \times 5 \times 5 \times 5$)
15. **$\frac{52!}{(13!)^4}$** (Select 13 for P1, 13 for P2, 13 for P3... $\implies ^{52}C_{13} \times ^{39}C_{13} \times ^{26}C_{13} \times ^{13}C_{13}$)

**Challenge:**
16. **57** (A line requires 2 points. Max lines $= ^{12}C_2 = 66$. Subtract lines that *would* have formed from the 5 collinear points $= ^5C_2 = 10$. Finally, add back the **1** actual straight line that the 5 collinear points exist on. Total $= 66 - 10 + 1 = 57$)
17. **200** (The candidate can choose (2 from A, 4 from B), OR (3 from A, 3 from B), OR (4 from A, 2 from B). Case 1: $^5C_2 \times ^5C_4 = 10 \times 5 = 50$. Case 2: $^5C_3 \times ^5C_3 = 10 \times 10 = 100$. Case 3: $^5C_4 \times ^5C_2 = 5 \times 10 = 50$. Total $= 50 + 100 + 50 = 200$)