# Logical Reasoning - Fundamentals

## 1. Core Rules & Representations

Logical Reasoning doesn't use math formulas; it uses visual maps and absolute definitive logic.

**Syllogisms (Venn Diagram Mapping):**
- **"All A are B"**: Draw circle A completely inside circle B.
- **"Some A are B"**: Draw circle A overlapping with circle B.
- **"No A is B"**: Draw circle A and circle B apart, with a strict "X" line between them.
- **"Some A are not B"**: Draw circle A overlapping B, but shade a part of A and put an "X" connecting it to B.

```text
  [All A are B]       [Some A are B]        [No A is B]

     _______             ___   ___            ___       ___
    /       \           /   \ /   \          /   \     /   \
   |  B (A)  |         |  A  X  B  |        |  A  | X |  B  |
    \_______/           \___/ \___/          \___/     \___/
```

**Blood Relations (Family Tree Mapping):**
- **Male**: Box `[ ]` or Plus `(+)`
- **Female**: Circle `( )` or Minus `(-)`
- **Horizontal Line (`—`)**: Siblings (Brother/Sister)
- **Double Horizontal Line (`=`)**: Married Couple
- **Vertical Line (`|`)**: Generational Gap (Parent to Child)

*Visual Family Tree Example:*
```text
   [Grandfather] === (Grandmother)
                   |
        +----------+----------+
        |                     |
    [Father] === (Mother)  [Uncle]
               |
         +-----+-----+
         |           |
       (Me)       [Brother]
```

## 2. Key Concepts

**Syllogisms:**
- **Definite vs. Possibility:** A "Definite" conclusion must be 100% true in *every single possible* Venn diagram you can draw. A "Possibility" conclusion only needs to be true in *at least one* valid diagram.
- **The Minimum Overlap Rule:** Always draw the simplest Venn diagram with the least amount of overlap necessary to satisfy the statements. Do not assume overlaps that aren't explicitly stated.

**Blood Relations:**
- **Generational Mapping:** Always construct the tree top-down. Grandparents at the top, parents in the middle, children at the bottom.
- **"Only Son/Daughter" Concept:** If a man says "He is the only son of my father," the man is talking about *himself*.

## 3. Shortcuts

**Syllogism Shortcuts:**
- **The Positive Rule:** If all given statements are Positive ("All", "Some"), then any Definite Negative conclusion ("No", "Some not") is **immediately FALSE**.
- **The "Only a Few" Hack:** In modern placements, "Only a few A are B" means exactly two things combined: "Some A are B" AND "Some A are not B".
- **The "Some + Some" Dead End:** If Statement 1 is "Some A are B" and Statement 2 is "Some B are C", no definite relationship can ever be established between A and C.

**Blood Relation Shortcuts:**
- **The "Reverse Reading" Trick:** For "pointing to a photograph" questions, read the sentence strictly backwards. Break it at the word "my". 
  *(e.g., "She is the mother of the father of my wife." -> 1. My wife. 2. Father of my wife = My Father-in-law. 3. Mother of him = My Wife's Grandmother).*
- **Coded Inequality Elimination:** In coded relations (e.g., $A + B$ means $A$ is father of $B$), immediately check the gender of the target person using the last symbol. Eliminate any multiple-choice options that have the wrong gender.

## 4. Common Mistakes

- **Assuming Gender by Name:** "Kamal", "Alex", or "Sam" could be Male or Female. In blood relation logic puzzles, if the gender isn't explicitly stated via relationships (e.g., "brother", "mother"), you cannot assume it. The answer is often "Cannot be determined".
- **The "All B are A" Reversal Trap:** If a statement says "All Cats are Dogs", students often falsely assume "All Dogs are Cats". The only valid reverse is "Some Dogs are Cats".
- **Confusing "Some" with "Exactly Some":** In pure logic, "Some A are B" leaves open the possibility that "All A are B". "Some" just means *at least one*.

## 5. Solved Examples

### Easy (Standard Syllogism)
**Statements:** 
1. All Cars are Buses. 
2. Some Buses are Trains.
**Conclusions:** 
I. Some Cars are Trains. 
II. Some Buses are Cars.

* **Step 1:** Draw the minimum overlap diagram. Circle "Cars" is inside "Buses". Circle "Trains" overlaps with "Buses", but *not* with "Cars".
* **Step 2:** Check Conclusion I (Some Cars are Trains). In our diagram, Cars and Trains do not touch. Since it's not 100% true, it is **False**.
* **Step 3:** Check Conclusion II (Some Buses are Cars). Since all Cars are inside Buses, a portion of the Bus circle is occupied by Cars. This is 100% true. **True**.
* **Final Answer:** **Only Conclusion II follows.**

### Medium (Pointing to a Photograph)
**Problem:** Pointing to a man in a photograph, a woman says, "His mother's only daughter is my mother." How is the man related to the woman?
* **Step 1:** Break the sentence at "is". 
  - Left side: "His mother's only daughter"
  - Right side: "my mother"
* **Step 2:** Analyze the Left side. The man's mother has an *only daughter*. That daughter is the man's **sister**.
* **Step 3:** Set the Left side equal to the Right side. "The man's sister" = "my mother".
* **Step 4:** If the man's sister is the woman's mother, then the man is the mother's brother.
* **Final Answer:** The man is the woman's **Maternal Uncle**.

### Placement-Level (Coded Blood Relations)
**Problem:** Read the codes: 
`P $ Q` means P is the brother of Q. 
`P # Q` means P is the mother of Q. 
`P * Q` means P is the daughter of Q.
In the expression `A # B $ C * D`, who is the father?
* **Step 1:** Map `A # B`: A is the mother of B. (A is Female, Parent generation).
* **Step 2:** Map `B $ C`: B is the brother of C. (B is Male, Sibling to C).
* **Step 3:** Map `C * D`: C is the daughter of D. (C is Female, D is her parent).
* **Step 4:** Deduce. A is the mother of B and C. If D is also the parent of C, then A and D must be married. Since A is the mother, D must be the father.
* **Final Answer:** **D** is the father.

## 6. Practice Set

### Beginner Questions (10)
**Directions for Q1-Q5:** Choose: (A) Only I follows, (B) Only II follows, (C) Both follow, (D) Neither follows.
1. **Statements:** All Pens are Pencils. No Pencil is an Eraser.
   **Conclusions:** I. No Pen is an Eraser. II. Some Pencils are Pens.
2. **Statements:** Some Dogs are Cats. Some Cats are Rats.
   **Conclusions:** I. Some Dogs are Rats. II. No Dog is a Rat.
3. **Statements:** All A are B. All B are C.
   **Conclusions:** I. All A are C. II. Some C are A.
4. **Statements:** Some Trees are Forests. No Forest is a Wood.
   **Conclusions:** I. Some Trees are not Woods. II. All Trees are Woods.
5. **Statements:** All Books are Papers. Some Papers are Files.
   **Conclusions:** I. All Books are Files. II. Some Books are Files.

6. Pointing to a boy, a girl says, "He is the son of the daughter of my father." How is the boy related to the girl?
7. A is the brother of B. C is the father of A. D is the brother of E. E is the daughter of B. How is D related to A?
8. Pointing to a photograph, a man said, "I have no brother or sister but that man's father is my father's son." Whose photograph was it?
9. X is the husband of Y. W is the daughter of X. Z is the husband of W. N is the daughter of Z. What is the relationship of Y to N?
10. Pointing to a woman, a man says, "Her mother is the only daughter of my mother-in-law." How is the man related to the woman?

### Intermediate Questions (5)
11. **Statements:** Only a few Reds are Greens. All Greens are Blues.
    **Conclusions:** I. Some Reds are Blues. II. All Reds being Greens is a possibility.
12. **Statements:** No Apple is a Mango. No Mango is an Orange.
    **Conclusions:** I. No Apple is an Orange. II. Some Apples are Oranges.
13. `P @ Q` = P is wife of Q. `P % Q` = P is father of Q. `P & Q` = P is sister of Q.
    In the expression `M @ N % T & Y`, how is M related to Y?
14. If A + B means A is the brother of B; A - B means A is the sister of B, and A x B means A is the father of B. Which of the following means that C is the son of M?
    (A) M - N x C + F
    (B) F - C + N x M
    (C) M x N - C + F
    (D) M x C - N + F
15. Pointing to a girl, a man said, "She is the daughter of the only sister of my father." How is the man related to the girl?

### Challenge Questions (2)
16. **Statements:** Only a few Laptops are Computers. No Computer is a Mobile. Some Mobiles are Tablets.
    **Conclusions:** I. Some Laptops are not Mobiles. II. All Tablets being Computers is a possibility. III. All Laptops being Computers is a possibility.
    *(Find which of the three follow).*
17. In a family of six persons A, B, C, D, E, and F, there are two married couples. D is the grandmother of A and mother of B. C is the wife of B and mother of F. F is the grand-daughter of E. How is A related to E?

## 7. Answers & Hints

**Beginner:**
1. **C (Both follow)** (Pens are strictly inside Pencils. Erasers cannot touch Pencils, so they cannot touch Pens. I is true. Reverse of All is Some, II is true).
2. **D (Neither follows)** (Some + Some = No definite relationship between Dogs and Rats. However, note that these form an *Either/Or* pair if offered as an option!).
3. **C (Both follow)** (A is inside B, B is inside C. Therefore A is inside C. Reverse overlap is true).
4. **A (Only I follows)** (The part of the Trees circle that overlaps with Forests can never be Woods. Hence, Some Trees are not Woods is definitely true).
5. **D (Neither follows)** (Books and Files do not definitely touch in the minimum overlap diagram).
6. **Son or Nephew** (If the girl is the only daughter, he is her son. If she has a sister, he is her nephew. Since "only" is not stated, data is technically inadequate, but usually "Nephew/Son" is the paired option).
7. **Nephew** (D is E's brother. E is B's daughter. So D is B's son. A is B's brother. A is the uncle of D).
8. **His Son's** ("My father's son" = the man speaking (since he has no siblings). So, "that man's father is ME". Therefore, it's a photo of his son).
9. **Maternal Grandmother** (Y is wife of X. W is their daughter. N is W's daughter. Y is N's grandmother).
10. **Father** ("Only daughter of my mother-in-law" = My wife. "Her mother is my wife" means the woman is his daughter. The man is her father).

**Intermediate:**
11. **Only I follows** (Since All Greens are Blues, the part of Reds overlapping with Greens is also Blue. True. However, "Only a few Reds are Greens" means some Reds *cannot* be Greens. Therefore, All Reds being Greens is a False possibility).
12. **Neither follows** (No Apple is Mango, No Mango is Orange. Apple and Orange have no definite connection. They *might* touch, they *might not*).
13. **Mother** (M is wife of N. N is father of T. So M is mother of T. T is sister of Y. So M is also mother of Y).
14. **C** (M x N = M is father of N. N - C = N is sister of C. C + F = C is brother of F. Since C is a brother, C is male. M is the father of the siblings N, C, F. Thus C is the son of M).
15. **Cousin** (Only sister of his father = His Aunt. Daughter of his Aunt = His Cousin).

**Challenge:**
16. **Only I follows** (I: The part of Laptops that are Computers can never be Mobiles. True. II: Some Mobiles are Tablets, and No Mobile is Computer. Thus, the part of Tablets that are Mobiles can never be Computers. False possibility. III: "Only a few Laptops are Computers" strictly prevents All Laptops from being Computers. False possibility.)
17. **Grandson or Grand-daughter** (D is mother of B. B is married to C (wife). So B is male. D is grandmother of A. C is mother of F. Thus, A and F are siblings, children of B & C. F is granddaughter of E. Since D is already the grandmother (mother of B), E must be the grandfather (father of B). A's gender is completely unknown. Thus, A is E's Grandson or Grand-daughter).