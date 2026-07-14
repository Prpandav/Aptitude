# Geometry & Mensuration - Fundamentals

## 1. Formulas

**2D Shapes (Area & Perimeter):**
- **Rectangle:** Area = $l \times b$, Perimeter = $2(l+b)$, Diagonal = $\sqrt{l^2 + b^2}$
- **Square:** Area = $a^2$, Perimeter = $4a$, Diagonal = $a\sqrt{2}$
- **Circle:** Area = $\pi r^2$, Circumference = $2\pi r$
- **Triangle:** Area = $\frac{1}{2} \times b \times h$
- **Equilateral Triangle:** Area = $\frac{\sqrt{3}}{4} a^2$, Height = $\frac{\sqrt{3}}{2} a$
- **Parallelogram:** Area = Base $\times$ Height
- **Rhombus:** Area = $\frac{1}{2} \times d_1 \times d_2$ (where $d$ = diagonals)
- **Trapezium:** Area = $\frac{1}{2} \times (a+b) \times h$ (where $a, b$ are parallel sides)

**3D Shapes (Volume & Surface Area):**
- **Cube:** Volume = $a^3$, Total Surface Area (TSA) = $6a^2$, Diagonal = $a\sqrt{3}$
- **Cuboid:** Volume = $l \times b \times h$, TSA = $2(lb + bh + hl)$
- **Cylinder:** Volume = $\pi r^2 h$, Curved SA = $2\pi rh$, TSA = $2\pi r(r+h)$
- **Cone:** Volume = $\frac{1}{3}\pi r^2 h$, Curved SA = $\pi rl$, TSA = $\pi r(r+l)$ *(Slant height $l = \sqrt{r^2+h^2}$)*
- **Sphere:** Volume = $\frac{4}{3}\pi r^3$, TSA = $4\pi r^2$
- **Hemisphere:** Volume = $\frac{2}{3}\pi r^3$, Curved SA = $2\pi r^2$, TSA = $3\pi r^2$

*(Note: Standard value of $\pi \approx \frac{22}{7}$ or $3.14$)*

## 2. Key Concepts

- **Area vs. Perimeter:** Perimeter is the length of the fence *around* a field (1D). Area is the amount of grass *inside* the field (2D). Volume is the amount of water a tank can hold (3D).
- **Melting & Recasting:** Whenever a 3D solid is melted and reshaped into another solid, the **Volume always remains constant**. (e.g., Volume of large sphere = $N \times$ Volume of small bullets).
- **Inradius & Circumradius:** 
  - The largest circle that fits *inside* a square of side $a$ has radius $r = \frac{a}{2}$.
  - The circle that perfectly encompasses a square of side $a$ has radius $R = \frac{a\sqrt{2}}{2} = \frac{a}{\sqrt{2}}$.

## 3. Shortcuts

- **Pythagorean Triplets:** Memorize these to skip calculating the hypotenuse:
  - **3, 4, 5** (and its multiples: 6, 8, 10 / 9, 12, 15)
  - **5, 12, 13**
  - **7, 24, 25**
  - **8, 15, 17**
- **The 2D Percentage Scaling Trick:** If the side/radius of any 2D shape is increased by $x\%$, its Area increases by exactly **$2x + \frac{x^2}{100}\%$**. *(e.g., Radius of a circle increases by 10% $\implies$ Area increases by $2(10) + \frac{100}{100} = 21\%$)*.
- **Sector Area Shortcut:** If an angle $\theta$ is cut out of a circle, the area of that slice is simply $(\frac{\theta}{360}) \times \pi r^2$.

## 4. Common Mistakes

- **Unit Mismatch:** Multiplying length in meters by breadth in centimeters. Always convert to a uniform unit before calculation.
- **Radius vs Diameter Trap:** Questions often give the *diameter*, but formulas require the *radius*. Always divide by 2 first.
- **Cone Slant Height Confusion:** Using straight height ($h$) instead of slant height ($l$) when calculating the Curved Surface Area ($\pi r l$) of a cone.
- **Hemisphere TSA Trap:** Forgetting that cutting a sphere in half exposes a new flat circular base. Therefore, the TSA of a hemisphere is $3\pi r^2$, not $2\pi r^2$.

## 5. Solved Examples

### Easy (2D Area)
**Problem:** The length of a rectangular plot is 20m and its breadth is 15m. Find the cost of fencing the plot at ₹12 per meter.
* **Step 1:** "Fencing" implies finding the Perimeter. 
* **Step 2:** Perimeter $= 2(l+b) = 2(20 + 15) = 2(35) = 70\text{m}$.
* **Step 3:** Total Cost $= \text{Perimeter} \times \text{Rate} = 70 \times 12 = \mathbf{₹840}$.

### Medium (3D Volume & Melting)
**Problem:** A solid metallic cylinder of base radius 3 cm and height 5 cm is melted to form solid cones of height 1 cm and base radius 1 cm. How many cones are formed?
* **Step 1:** Recognize the core rule: $\text{Volume of Cylinder} = N \times \text{Volume of one Cone}$.
* **Step 2:** Calculate Volume of Cylinder $= \pi r^2 h = \pi \times 3^2 \times 5 = 45\pi$.
* **Step 3:** Calculate Volume of one Cone $= \frac{1}{3}\pi r^2 h = \frac{1}{3} \times \pi \times 1^2 \times 1 = \frac{\pi}{3}$.
* **Step 4:** Equate: $45\pi = N \times \frac{\pi}{3}$.
* **Step 5:** Solve for $N$: $N = 45 \times 3 = \mathbf{135 \text{ cones}}$.

### Placement-Level (Embedded Shapes)
**Problem:** A square is inscribed perfectly inside a circle of radius 7 cm. Find the area of the circle that lies *outside* the square. (Use $\pi = \frac{22}{7}$)
* **Step 1:** Calculate the area of the circle. $A_C = \pi r^2 = \frac{22}{7} \times 7 \times 7 = 154 \text{ cm}^2$.
* **Step 2:** Relate the circle to the square. Since the square is inscribed, the *diagonal* of the square equals the *diameter* of the circle.
  - Diameter $= 2 \times 7 = 14 \text{ cm}$. So, diagonal $d = 14$.
* **Step 3:** Calculate the area of the square. We know diagonal $d = a\sqrt{2} \implies a = \frac{14}{\sqrt{2}}$.
  - Area of Square $= a^2 = (\frac{14}{\sqrt{2}})^2 = \frac{196}{2} = 98 \text{ cm}^2$.
* **Step 4:** Subtract to find the outside area. $154 - 98 = \mathbf{56 \text{ cm}^2}$.

## 6. Practice Set

### Beginner Questions (10)
1. Find the area of a triangle whose base is 12 cm and height is 8 cm.
2. What is the circumference of a circle with a radius of 14 cm? (Use $\pi = \frac{22}{7}$)
3. Find the longest pole that can be placed in a room of dimensions $10\text{m} \times 8\text{m} \times 6\text{m}$. (Hint: Diagonal of a cuboid $= \sqrt{l^2+b^2+h^2}$)
4. The side of a square is 5 cm. Find its diagonal.
5. Calculate the volume of a cube with a side length of 4 cm.
6. The area of a rectangle is $120 \text{ cm}^2$ and its length is 15 cm. Find its perimeter.
7. Find the area of an equilateral triangle with a side of 6 cm.
8. What is the total surface area of a sphere of radius 7 cm?
9. A right-angled triangle has a base of 6 cm and height of 8 cm. Find its hypotenuse.
10. Find the volume of a cylinder with radius 7 cm and height 10 cm.

### Intermediate Questions (5)
11. A rectangular grassy plot is $110\text{m} \times 65\text{m}$. It has a uniform gravel path 2.5m wide running all around it on the *inside*. Find the area of the path.
12. If the radius of a circle is increased by 20%, what is the percentage increase in its area?
13. A solid metallic sphere of radius 8 cm is melted and recast into small solid spherical balls of radius 2 cm. How many balls can be made?
14. The slant height of a right circular cone is 10 m and its height is 8 m. Find the area of its curved surface.
15. The ratio of the radii of two cylinders is 2:3, and the ratio of their heights is 5:3. Find the ratio of their volumes.

### Challenge Questions (2)
16. A wire when bent in the form of a square encloses an area of $484 \text{ cm}^2$. What will be the enclosed area if the exact same wire is bent into the form of a circle?
17. A hemispherical bowl of internal radius 9 cm is full of liquid. This liquid is to be filled into cylindrical small bottles each of diameter 3 cm and height 4 cm. How many bottles are necessary to empty the bowl?

## 7. Answers & Hints

**Beginner:**
1. **$48 \text{ cm}^2$** ($\frac{1}{2} \times 12 \times 8$)
2. **$88 \text{ cm}$** ($2 \times \frac{22}{7} \times 14$)
3. **$14.14 \text{ m}$** ($\sqrt{10^2 + 8^2 + 6^2} = \sqrt{100+64+36} = \sqrt{200} \approx 14.14$)
4. **$5\sqrt{2} \text{ cm}$** ($a\sqrt{2}$)
5. **$64 \text{ cm}^3$** ($4^3$)
6. **$46 \text{ cm}$** (Breadth $= 120/15 = 8$. Perimeter $= 2(15+8) = 46$)
7. **$9\sqrt{3} \text{ cm}^2$** ($\frac{\sqrt{3}}{4} \times 36$)
8. **$616 \text{ cm}^2$** ($4 \times \frac{22}{7} \times 7^2$)
9. **$10 \text{ cm}$** ($\sqrt{6^2 + 8^2} = \sqrt{100} = 10$. Or use 3-4-5 triplet scaled by 2).
10. **$1540 \text{ cm}^3$** ($\frac{22}{7} \times 7^2 \times 10$)

**Intermediate:**
11. **$850 \text{ m}^2$** (Outer Area $= 110 \times 65 = 7150$. Inner length $= 110 - 2.5 - 2.5 = 105$. Inner breadth $= 65 - 2.5 - 2.5 = 60$. Inner Area $= 105 \times 60 = 6300$. Area of path $= 7150 - 6300 = 850$)
12. **$44\%$** (Use shortcut: $2(20) + \frac{400}{100} = 40 + 4 = 44\%$)
13. **$64 \text{ balls}$** ($N = \frac{\text{Vol Large}}{\text{Vol Small}} = \frac{\frac{4}{3}\pi 8^3}{\frac{4}{3}\pi 2^3} = \frac{512}{8} = 64$)
14. **$188.5 \text{ m}^2$** ($l=10, h=8 \implies r = \sqrt{100-64} = 6$. Curved SA $= \pi r l = \pi \times 6 \times 10 = 60\pi \approx 188.5$)
15. **$20 : 27$** ($\frac{V_1}{V_2} = \frac{\pi (2x)^2 (5y)}{\pi (3x)^2 (3y)} = \frac{4 \times 5}{9 \times 3} = \frac{20}{27}$)

**Challenge:**
16. **$616 \text{ cm}^2$** (Area of square $= 484 \implies \text{side } a = 22$. Perimeter (length of wire) $= 4 \times 22 = 88\text{cm}$. For circle, circumference $= 88 \implies 2 \times \frac{22}{7} \times r = 88 \implies r = 14$. Area of circle $= \frac{22}{7} \times 14^2 = 616$)
17. **$54 \text{ bottles}$** (Vol of Hemisphere $= \frac{2}{3}\pi (9)^3 = 486\pi$. Vol of one bottle (cylinder) $= \pi (\frac{3}{2})^2 (4) = \pi \times \frac{9}{4} \times 4 = 9\pi$. Number of bottles $= \frac{486\pi}{9\pi} = 54$)