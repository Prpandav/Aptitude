# Number Systems - Fundamentals

## 1. Formulas

**The Division Algorithm:**

$$
\text{Dividend} = (\text{Divisor} \times \text{Quotient}) + \text{Remainder}
$$

**Sum of Series:**
- First $n$ natural numbers: $\mathbf{\frac{n(n+1)}{2}}$
- First $n$ odd numbers: $\mathbf{n^2}$
- First $n$ even numbers: $\mathbf{n(n+1)}$

**Number of Factors:**
If a number $N$ is prime factorized as $N = a^p \times b^q \times c^r$ (where $a, b, c$ are prime numbers):

$$
\text{Total Factors} = (p+1)(q+1)(r+1)
$$

## 2. Key Concepts

- **Prime vs Composite:** A prime number has exactly two distinct factors (1 and itself). A composite number has more than two. 
- **Co-Primes:** Two numbers are co-prime if their Highest Common Factor (HCF) is exactly 1 (e.g., 8 and 15 are co-prime, even though neither is prime).
- **Face Value vs Place Value:** In the number 456, the *Face Value* of 5 is 5. The *Place Value* of 5 is 50.
- **Cyclicity (Unit Digits):** The last digit of numbers raised to a power repeats in a predictable cycle of 4.

## 3. Shortcuts

- **Unit Digit Shortcut ($x^n$):** To find the unit digit of any large power:
  1. Divide the power $n$ by 4 and find the remainder $r$.
  2. If $r = 1, 2,$ or $3$, the unit digit is the same as $x^r$.
  3. If $r = 0$, the unit digit is the same as $x^4$.
- **Divisibility of 3 & 9:** A number is divisible by 3 (or 9) if the *sum of its digits* is divisible by 3 (or 9).
- **Divisibility of 11:** Sum the alternate digits. If the difference between the sum of the odd-placed digits and the even-placed digits is $0$ or a multiple of $11$, the number is divisible by 11.
- **Trailing Zeros Shortcut:** To find the number of trailing zeros in a factorial ($n!$), keep dividing $n$ by 5 and sum the quotients until the quotient is less than 5. (e.g., $100! \implies \frac{100}{5} = 20, \frac{20}{5} = 4 \implies 20+4 = \mathbf{24 \text{ zeros}}$).

## 4. Common Mistakes

- **The Prime Number Trap:** `1` is **neither** prime nor composite. `2` is the only even prime number.
- **Confusing Factors with Prime Factors:** Asking for "total factors" uses the $(p+1)(q+1)$ formula. Asking for "total prime factors" of $a^p \cdot b^q$ just means adding the powers: $p + q$.
- **The Remainder zero ($r=0$) cyclicity trap:** When dividing the power by 4, if the remainder is 0, students often mistakenly raise the number to the power of 0 (which is 1). Always raise to the power of **4** instead.
- **Basic Remainder Theorem Addition:** If $N$ gives a remainder of $R$ when divided by $D$, then $2N$ will give a remainder of $2R$ (adjust if $2R > D$).

## 5. Solved Examples

### Easy (Divisibility Trick)
**Problem:** What is the smallest value of $x$ for which the number $517x324$ is divisible by 3?
* **Application:** The sum of digits must be divisible by 3.
* **Calculation:** Sum $= 5+1+7+x+3+2+4 = 22+x$. The next multiple of 3 after 22 is 24.
* **Final Answer:** $x = 24 - 22 = \mathbf{2}$.

### Medium (Unit Digit Cyclicity)
**Problem:** Find the unit digit of $7^{105}$.
* **Step 1:** Divide the power (105) by 4 to find the remainder. $\frac{105}{4}$ gives a remainder of $r=1$.
* **Step 2:** Raise the base unit digit (7) to the power of the remainder (1).
* **Final Answer:** $7^1 = \mathbf{7}$.

### Placement-Level (Total Factors & Remainders)
**Problem 1:** Find the total number of factors of 120.
* **Step 1:** Prime factorize 120. $120 = 12 \times 10 = (2^2 \times 3) \times (2 \times 5) = 2^3 \times 3^1 \times 5^1$.
* **Step 2:** Add 1 to each of the powers and multiply.
* **Calculation:** $(3+1)(1+1)(1+1) = 4 \times 2 \times 2 = \mathbf{16 \text{ factors}}$.

**Problem 2:** A number when divided by 899 gives a remainder of 63. What will be the remainder if the same number is divided by 29?
* **Shortcut Application:** Since 899 is perfectly divisible by 29, just divide the first remainder (63) by 29.
* **Calculation:** $\frac{63}{29} \implies$ Quotient is 2, Remainder is $63 - 58 = \mathbf{5}$.

## 6. Practice Set

### Beginner Questions (10)

1. Find the sum of the first 20 natural numbers.
2. Is 1 a prime number?
3. Find the unit digit of $2^{43}$.
4. What is the difference between the place value and face value of 5 in the number 8532?
5. Find the total number of prime factors in $2^4 \times 3^5 \times 7^2$.
6. Is the number 45672 divisible by 4?
7. Find the sum of the first 10 even numbers.
8. What is the smallest digit to replace 'y' in $3y45$ to make it divisible by 9?
9. Find the unit digit of $4^{100}$.
10. If a number is divisible by both 3 and 4, what is the smallest number it must also be completely divisible by?

### Intermediate Questions (5)

11. Find the unit digit of the expression: $3^{41} \times 7^{42} \times 8^{43}$.
12. Find the total number of trailing zeros in $125!$.
13. A number divided by 114 leaves a remainder of 21. If the same number is divided by 19, what will be the remainder?
14. Find the total number of factors of 360.
15. What is the least number by which 72 must be multiplied to make it a perfect square?

### Challenge Questions (2)

16. Find the remainder when $2^{256}$ is divided by 17.
17. Find the total number of prime factors in the expression: $6^7 \times 35^5 \times 11^{10}$. (Hint: Break down composite bases first!)

## 7. Answers & Hints

**Beginner:**
1. **210** ($\frac{20 \times 21}{2}$)
2. **No** (1 has only one factor, itself. Primes require exactly two).
3. **8** ($43/4 \implies r=3 \implies 2^3 = 8$)
4. **495** (Place value is 500, Face value is 5. $500 - 5 = 495$)
5. **11** (Just sum the powers: $4 + 5 + 2 = 11$)
6. **Yes** (Divisibility of 4 checks only the last two digits. 72 is divisible by 4)
7. **110** (Sum of first $n$ even numbers = $n(n+1) = 10 \times 11 = 110$)
8. **6** (Sum = $3+y+4+5 = 12+y$. Next multiple of 9 is 18. $y = 18-12 = 6$)
9. **6** ($100/4 \implies r=0$. Use $4^4 \implies \text{Unit digit is } 6$)
10. **12** (Because 3 and 4 are co-prime, the number is divisible by their product)

**Intermediate:**
11. **4** (Break it down: $3^{41} \implies r=1 \implies 3^1=3$. $7^{42} \implies r=2 \implies 7^2=9$. $8^{43} \implies r=3 \implies 8^3=2$. Product of units $= 3 \times 9 \times 2 = 54$. Unit digit is 4)
12. **31** ($\frac{125}{5} = 25$. $\frac{25}{5} = 5$. $\frac{5}{5} = 1$. Total zeros $= 25 + 5 + 1 = 31$)
13. **2** (114 is divisible by 19. Just divide 21 by 19. Remainder is 2)
14. **24** ($360 = 36 \times 10 = 2^3 \times 3^2 \times 5^1$. Factors $= (3+1)(2+1)(1+1) = 4 \times 3 \times 2 = 24$)
15. **2** (Prime factorize 72: $2^3 \times 3^2$. To be a perfect square, all powers must be even. It needs one more '2' to become $2^4 \times 3^2$, which is 144)

**Challenge:**
16. **1** (Fermat's little theorem / Pattern recognition. $2^4 = 16$. Divide by 17 gives remainder $-1$. $(2^4)^{64} = (-1)^{64} = 1$)
17. **34** (You cannot sum powers until bases are prime! $6^7 = (2 \times 3)^7 = 2^7 \times 3^7$. $35^5 = (5 \times 7)^5 = 5^5 \times 7^5$. $11^{10}$ is already prime. Expression is $2^7 \times 3^7 \times 5^5 \times 7^5 \times 11^{10}$. Sum of powers $= 7+7+5+5+10 = 34$)