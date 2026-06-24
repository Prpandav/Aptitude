# question_bank.py
# ---------------------------------------------------------
# APTITUDE STATIC DATA STORE (V1.0)
# Structure: Dictionary of Arrays containing Dictionary Objects
# Levels: Easy, Medium, Placement-Level (TCS/Infosys/Hexaware)
# ---------------------------------------------------------

APTITUDE_DB = {
    
    "Time & Work": [
        # EASY
        {
            "question": "A can finish a task in 10 days and B can finish it in 15 days. If they work together, how many days will it take to finish the task?",
            "hint": "*(Hint: LCM of 10 and 15 is 30. A's eff = 3, B's eff = 2.)*",
            "answer": "6 days"
        },
        # MEDIUM
        {
            "question": "A and B can do a piece of work in 20 and 30 days respectively. They start working together, but A leaves after 4 days. In how many days will B finish the remaining work?",
            "hint": "*(Hint: Total work = 60. A+B do 5 units/day. In 4 days, they do 20 units. Remaining 40 units done by B at 2 units/day.)*",
            "answer": "20 days"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "A is thrice as efficient as B. A started the work and worked for 4 days, then B joined him and they completed the remaining work in 6 days. In how many days can B alone finish the whole work?",
            "hint": "*(Hint: Eff A = 3x, Eff B = 1x. Work = (3x * 4) + (4x * 6) = 36x. B takes 36x / 1x.)*",
            "answer": "36 days"
        }
    ],

    "Profit & Loss": [
        # EASY
        {
            "question": "A man buys an article for ₹800 and sells it at a loss of 15%. What is the selling price?",
            "hint": "*(Hint: SP is 85% of CP. 10% is 80, 5% is 40.)*",
            "answer": "₹680"
        },
        # MEDIUM
        {
            "question": "A dishonest dealer professes to sell his goods at cost price, but he uses a weight of 900 grams for a kilogram. Find his gain percentage.",
            "hint": "*(Hint: Profit % = (Error / True Value - Error) * 100. Error is 100g. Base is 900g.)*",
            "answer": "11.11% (or 100/9 %)"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "A shopkeeper sells two laptops for ₹24,000 each. On one, he gains 20% and on the other, he loses 20%. What is his overall profit or loss percentage in the whole transaction?",
            "hint": "*(Hint: When SP is same and profit/loss % is same (x), there is ALWAYS a loss of (x^2)/100 %.)*",
            "answer": "4% Loss"
        }
    ],

    "Probability": [
        # EASY
        {
            "question": "A bag contains 5 red and 7 white balls. One ball is drawn at random. What is the probability that it is a white ball?",
            "hint": "*(Hint: Favorable (7) / Total sample space (12).)*",
            "answer": "7/12"
        },
        # MEDIUM
        {
            "question": "Two dice are thrown simultaneously. What is the probability of getting a sum of exactly 9?",
            "hint": "*(Hint: Favorable pairs for 9 are (3,6), (4,5), (5,4), (6,3) = 4 ways. Total ways = 36.)*",
            "answer": "4/36 or 1/9"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "A box contains 4 black, 3 red, and 5 green pens. If 3 pens are drawn at random, what is the probability that at least one of them is red?",
            "hint": "*(Hint: Use Complement. 1 - P(None are red). Non-red pens = 9. Calculate 1 - (9C3 / 12C3).)*",
            "answer": "34/55"
        }
    ],

    "Seating Arrangements": [
        # EASY
        {
            "question": "Five friends A, B, C, D, and E sit in a row facing North. A is to the immediate left of B. C is to the immediate right of D. E is at the extreme left. B is second to the right of D. Who is in the exact middle?",
            "hint": "*(Hint: Frame the fixed ends first. E is far left. D _ B frame forces D C A B. Combine: E D C A B.)*",
            "answer": "C"
        },
        # MEDIUM
        {
            "question": "Six people P, Q, R, S, T, and U sit around a circular table facing the center. P is opposite to U. Q is immediate right of R. S is opposite to T. T is not adjacent to P. Who sits to the immediate left of U?",
            "hint": "*(Hint: Draw 6 slots. Fix P bottom, U top. T must be top-left so it isn't next to P. S goes bottom-right. Q and R take remaining slots.)*",
            "answer": "S"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "Eight executives sit around a circular table. 4 face the center, 4 face outward. A sits third to the right of B (both face center). C sits immediate left of A but faces outward. D is second to the left of C. If D's neighbors face the same direction, what direction does D face?",
            "hint": "*(Hint: Draw the circle. A's left/right is normal. C's left/right is inverted because they face outward.)*",
            "answer": "Insufficient data to determine D's facing direction, but neighbors' positions can be locked."
        }
    ],
    "Time, Speed & Distance": [
        # EASY
        {
            "question": "A train 150 meters long is running at a speed of 90 km/hr. How many seconds will it take to cross a stationary telegraph post?",
            "hint": "*(Hint: Convert 90 km/hr to m/s by multiplying by 5/18. Time = Distance / Speed)*",
            "answer": "6 seconds"
        },
        # MEDIUM
        {
            "question": "A boy walks to his school at a speed of 4 km/hr and reaches 10 minutes late. Next day, he increases his speed to 5 km/hr and reaches 5 minutes early. Find the distance to the school.",
            "hint": "*(Hint: Difference in time is 15 mins (or 1/4 hr). Use equation: D/4 - D/5 = 1/4)*",
            "answer": "5 km"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "A thief is spotted by a policeman from a distance of 200 meters. When the policeman starts the chase, the thief also starts running. If the speed of the thief is 10 km/hr and that of the policeman is 12 km/hr, how far will the thief have run before he is overtaken?",
            "hint": "*(Hint: Relative speed = 2 km/hr. Time to catch = 200m / (2 * 5/18)m/s. Distance thief runs = Thief speed * Time)*",
            "answer": "1000 meters (or 1 km)"
        }
    ],

    "Mixtures & Alligations": [
        # EASY
        {
            "question": "In what ratio must a grocer mix two varieties of tea worth ₹60 per kg and ₹65 per kg so that by selling the mixture at ₹68.20 per kg, he may gain 10%?",
            "hint": "*(Hint: Convert SP to Mean CP first. Mean CP = 68.20 / 1.1 = ₹62. Then apply Alligation Cross.)*",
            "answer": "3 : 2"
        },
        # MEDIUM
        {
            "question": "A mixture of 40 liters of milk and water contains 10% water. How much water must be added to make 20% water in the new mixture?",
            "hint": "*(Hint: Base water = 4L, Milk = 36L. Let x liters of water be added. (4+x)/(40+x) = 20/100)*",
            "answer": "5 liters"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "A cask contains 60 liters of pure wine. 6 liters are drawn from this cask and replaced by water. This process is repeated two more times. What is the final volume of pure wine left in the cask?",
            "hint": "*(Hint: Use Replacement Formula: Final = Initial * (1 - Replaced/Total)^n. Here, n=3. Final = 60 * (1 - 6/60)^3)*",
            "answer": "43.74 liters"
        }
    ],

    "Permutations & Combinations": [
        # EASY
        {
            "question": "In how many different ways can the letters of the word 'APPLE' be arranged?",
            "hint": "*(Hint: Total 5 letters, but 'P' repeats twice. Total ways = 5! / 2!)*",
            "answer": "60 ways"
        },
        # MEDIUM
        {
            "question": "Out of 6 men and 4 women, a committee of 5 people is to be formed. In how many ways can this be done if the committee must contain exactly 2 women?",
            "hint": "*(Hint: You must select 2 women AND 3 men. Use Combinations: 4C2 * 6C3)*",
            "answer": "120 ways"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "In how many ways can the letters of the word 'SOFTWARE' be arranged such that all the vowels are NEVER together?",
            "hint": "*(Hint: Total arrangements = 8!. Vowels together = treat 3 vowels as 1 unit (6! * 3!). Answer = Total - Vowels Together)*",
            "answer": "36,000 ways"
        }
    ],

    "Number Systems": [
        # EASY
        {
            "question": "What is the unit digit in the product (345^153 * 231^72 * 456^64)?",
            "hint": "*(Hint: 5 raised to any power ends in 5. 1 ends in 1. 6 ends in 6. 5 * 1 * 6 = 30)*",
            "answer": "0"
        },
        # MEDIUM
        {
            "question": "Find the number of trailing zeros in 100! (100 factorial).",
            "hint": "*(Hint: Count the number of 5s. Divide 100 by 5, then divide the quotient by 5 again, and sum the quotients: 20 + 4)*",
            "answer": "24"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "What is the unit digit of the expression (7^95 - 3^58)?",
            "hint": "*(Hint: Cyclicity of 7 and 3 is 4. 7^95 ends in 7^3 (3). 3^58 ends in 3^2 (9). 3 - 9 = -6. Add 10 for positive unit digit)*",
            "answer": "4"
        }
    ],

    "Simple & Compound Interest": [
        # EASY
        {
            "question": "A sum of money at simple interest doubles itself in 8 years. In how many years will it become 4 times itself at the same rate?",
            "hint": "*(Hint: SI for 8 years = P. To become 4P, SI needed is 3P. So time required = 8 * 3)*",
            "answer": "24 years"
        },
        # MEDIUM
        {
            "question": "The difference between Simple Interest and Compound Interest on a certain sum of money for 2 years at 10% per annum is ₹65. Find the principal sum.",
            "hint": "*(Hint: 2-year difference formula: Diff = P(R/100)^2. So, 65 = P(10/100)^2)*",
            "answer": "₹6,500"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "The difference between SI and CI on a certain sum of money at 5% per annum for 3 years is ₹15.25. Find the principal sum.",
            "hint": "*(Hint: 3-year difference formula: Diff = P(R/100)^2 * (R/100 + 3). Plug in 15.25 and R=5)*",
            "answer": "₹2,000"
        }
    ],
    "Problems on Ages": [
        # EASY
        {
            "question": "The ratio of the present ages of A and B is 3:4. Five years ago, the ratio of their ages was 5:7. What is the present age of A?",
            "hint": "*(Hint: Present ages = 3x and 4x. Eq: (3x-5)/(4x-5) = 5/7. Solve for x.)*",
            "answer": "30 years"
        },
        # MEDIUM
        {
            "question": "A father is twice as old as his son. 20 years ago, the age of the father was 12 times the age of the son. Find the present age of the father.",
            "hint": "*(Hint: F = 2S. Past: (F-20) = 12(S-20). Substitute F with 2S and solve for S.)*",
            "answer": "44 years"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "The sum of the ages of a father and his son is 45 years. Five years ago, the product of their ages was 34. What is the present age of the son?",
            "hint": "*(Hint: F + S = 45. (F-5)(S-5) = 34. Substitute F = 45 - S into the second equation to form a quadratic.)*",
            "answer": "6 years (Father is 39)"
        }
    ],

    "Geometry & Mensuration": [
        # EASY
        {
            "question": "If the radius of a circle is increased by 20%, what is the percentage increase in its area?",
            "hint": "*(Hint: Area is proportional to r^2. Use successive % formula: 20 + 20 + (20*20)/100)*",
            "answer": "44%"
        },
        # MEDIUM
        {
            "question": "A cylindrical tank has a radius of 7 meters and a depth of 10 meters. How many liters of water can it hold? (Assume pi = 22/7)",
            "hint": "*(Hint: Volume = pi * r^2 * h. Convert cubic meters to liters by multiplying by 1000.)*",
            "answer": "1,540,000 liters"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "A solid metallic sphere of radius 8 cm is melted and recast into solid right circular cones of radius 2 cm and height 4 cm. How many such cones can be formed?",
            "hint": "*(Hint: Volume of Sphere = n * Volume of Cone. (4/3)*pi*R^3 = n * (1/3)*pi*r^2*h)*",
            "answer": "128 cones"
        }
    ],

    "Clocks & Calendars": [
        # EASY
        {
            "question": "What is the angle between the hour hand and the minute hand of a clock exactly at 3:40 PM?",
            "hint": "*(Hint: Use formula Angle = |30H - 5.5M|. Plug in H=3, M=40)*",
            "answer": "130 degrees"
        },
        # MEDIUM
        {
            "question": "It was Sunday on Jan 1, 2006. What was the day of the week on Jan 1, 2010?",
            "hint": "*(Hint: Count odd days. 2006 (1), 2007 (1), 2008 (leap=2), 2009 (1). Total = 5 odd days. Sunday + 5)*",
            "answer": "Friday"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "At what time between 4 and 5 o'clock will the hands of a clock be pointing in opposite directions (180 degrees apart)?",
            "hint": "*(Hint: Opposite means 30 minute spaces apart. 4 o'clock starts at 20 min spaces. 20 + 30 = 50. Formula: M = 50 * (12/11))*",
            "answer": "4:54 and 6/11 minutes"
        }
    ],

    "Blood Relations": [
        # EASY
        {
            "question": "Pointing to a man in a photograph, a woman said, 'His brother's father is the only son of my grandfather.' How is the woman related to the man in the photograph?",
            "hint": "*(Hint: 'Only son of my grandfather' = Her father. 'His brother's father' = His father. Therefore, their fathers are the same person.)*",
            "answer": "Sister"
        },
        # MEDIUM
        {
            "question": "If A + B means A is the brother of B; A - B means A is the sister of B; A * B means A is the father of B. Which of the following means that C is the son of M? \nOptions: (1) M - N * C + F \n(2) F - C + N * M \n(3) M * N - C + F",
            "hint": "*(Hint: We need M to be the parent and C to be male. In (3), M is father of N, N is sister of C, C is brother of F. So M is father of C.)*",
            "answer": "(3) M * N - C + F"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "A family consists of 6 members P, Q, R, X, Y, and Z. Q is the son of R but R is not the mother of Q. P and R are a married couple. Y is the brother of R. X is the daughter of P. Z is the brother of P. How many male members are there in the family?",
            "hint": "*(Hint: R is father (since not mother). P is mother. Q is son, X is daughter. Y is brother of R. Z is brother of P. Count the males: R, Q, Y, Z.)*",
            "answer": "4 males"
        }
    ],

    "Logical Syllogisms": [
        # EASY
        {
            "question": "Statements: All cats are dogs. All dogs are birds. \nConclusion I: All cats are birds. \nConclusion II: Some birds are cats.",
            "hint": "*(Hint: Draw a Venn diagram. Cats circle is inside Dogs circle, which is inside Birds circle. Both conclusions naturally follow.)*",
            "answer": "Both I and II follow"
        },
        # MEDIUM
        {
            "question": "Statements: Some papers are pens. All pens are scales. No scale is a marker. \nConclusion I: No marker is a paper. \nConclusion II: Some pens being markers is a possibility.",
            "hint": "*(Hint: Pens are entirely inside Scales. Scales never touch Markers. Therefore, Pens can never touch Markers (II is false). Papers can intersect Markers outside the Scale circle (I is false).)*",
            "answer": "Neither I nor II follows"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "Statements: Only a few laptops are computers. No computer is a mobile. Some mobiles are tablets. \nConclusion I: All tablets being computers is a possibility. \nConclusion II: Some laptops are not mobiles.",
            "hint": "*(Hint: 'Only a few' means Some AND Some Not. 'No computer is mobile' means they are disjoint. Tablets intersecting mobiles cannot entirely go into computers because the mobile part cannot enter computers. II is true because the laptops that are computers cannot be mobiles.)*",
            "answer": "Only Conclusion II follows"
        }
    ],
    "Pipes & Cisterns": [
        # EASY
        {
            "question": "Pipe A can fill a tank in 12 hours and Pipe B can empty the same tank in 18 hours. If both pipes are opened simultaneously in an empty tank, how long will it take to fill it completely?",
            "hint": "*(Hint: Work with absolute integers. LCM of 12 and 18 is 36. A = +3 units/hr, B = -2 units/hr. Net system speed = +1 unit/hr.)*",
            "answer": "36 hours"
        },
        # MEDIUM
        {
            "question": "A cistern can be filled by two pipes in 20 and 30 minutes respectively. However, due to a leak at the bottom, it takes 3 minutes longer to fill the cistern than expected. How long will the leak take to empty a completely full cistern?",
            "hint": "*(Hint: Normal time = (20*30)/(20+30) = 12 mins. Actual time due to leak = 15 mins. LCM of 12 and 15 is 60. Combined pipes = +5 units/min, Net system = +4 units/min. Leak = -1 unit/min.)*",
            "answer": "60 minutes"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "Pipe A and Pipe B can fill a tank in 10 hours and 12 hours respectively. A waste pipe C can empty it at the rate of 4 gallons per minute. If all three pipes are opened together, they fill the empty tank in 6 hours. What is the total capacity of the tank in gallons?",
            "hint": "*(Hint: Convert all elements to hourly matrices. LCM of 10, 12, and 6 is 60. A = +6, B = +5, Net System = +10. Therefore, C = 10 - (6 + 5) = -1 unit/hour. Pipe C takes 60 hours to empty the tank. Capacity = 60 hours * 60 minutes * 4 gallons/min.)*",
            "answer": "14,400 gallons"
        }
    ],

    "HCF_LCM_Divisibility_Rules": [
        # EASY
        {
            "question": "The HCF of two numbers is 11 and their LCM is 693. If one of the numbers is 77, find the other number.",
            "hint": "*(Hint: Apply the product identity engine: HCF * LCM = Product of the two numbers.)*",
            "answer": "99"
        },
        # MEDIUM
        {
            "question": "Find the least number which when divided by 12, 16, 18, and 30 leaves a remainder of 4 in each case.",
            "hint": "*(Hint: Find the LCM of the denominators (12, 16, 18, 30) to pinpoint the base cycle, then append the constant remainder offset (+4).)*",
            "answer": "724"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "What is the smallest 5-digit number that is exactly divisible by 11, 13, and 7?",
            "hint": "*(Hint: Numbers divisible by 7, 11, and 13 must be divisible by their LCM, which is 1001. Find the smallest 5-digit multiple of 1001 by checking 1001 * 10, 1001 * 11, etc.)*",
            "answer": "10010"
        }
    ],

    "Ratio & Proportion": [
        # EASY
        {
            "question": "If A : B = 2 : 3 and B : C = 4 : 5, find the combined ratio A : B : C.",
            "hint": "*(Hint: Standardize the bridge element B by making its value equal to the LCM of 3 and 4 (which is 12).)*",
            "answer": "8 : 12 : 15"
        },
        # MEDIUM
        {
            "question": "A bag contains ₹1, 50p, and 25p coins in the ratio 5 : 9 : 4. If the total total value of the currency in the bag is ₹210, find the exact number of 50p coins.",
            "hint": "*(Hint: Map the ratio items to their real monetary weight values: 5(1) + 9(0.5) + 4(0.25) = 10.5 units total. Set 10.5x = 210 to solve for your scaling multiplier.)*",
            "answer": "180 coins"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "The incomes of two software engineers are in the ratio 4 : 5 and their monthly expenditures are in the ratio 7 : 9. If both manage to save exactly ₹5,000 every month, what is the monthly income of the higher earner?",
            "hint": "*(Hint: Set up linear equations tracking structural shifts: (4x - 5000) / (5x - 5000) = 7 / 9. Cross-multiply to break the loop and isolate x.)*",
            "answer": "₹50,000"
        }
    ],

    "Average": [
        # EASY
        {
            "question": "The average score of a batsman in 10 matches is 42 runs. How many runs must he score in the 11th match to raise his overall average to 45?",
            "hint": "*(Hint: Total runs after 10 matches = 420. Required total runs after 11 matches = 45 * 11 = 495.)*",
            "answer": "75 runs"
        },
        # MEDIUM
        {
            "question": "The average weight of 8 members of a crew increases by 2.5 kg when a old member weighing 56 kg is replaced by a new recruit. What is the weight of this new recruit?",
            "hint": "*(Hint: Total weight added to the system = 8 members * 2.5 kg = 20 kg increase. New recruit = Old weight + total system increase.)*",
            "answer": "76 kg"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "The average expenditure of a student for the first 4 days of a week is ₹60 and for the next 3 days is ₹81. If he manages to save ₹150 out of his total weekly pocket money allowance, what is his total weekly allowance?",
            "hint": "*(Hint: Calculate total expenditure: (4 * 60) + (3 * 81). Total allowance = Total expenditure + total savings.)*",
            "answer": "₹633"
        }
    ],

    "Data Interpretation": [
        # EASY
        {
            "question": "A line chart shows that a tech firm's headcount was 1200 in 2024 and jumped to 1500 in 2025. What is the percentage growth in staff?",
            "hint": "*(Hint: Apply the DI metric standard: (Final - Initial) / Initial * 100. Denominator must be the base year 2024.)*",
            "answer": "25%"
        },
        # MEDIUM
        {
            "question": "In a pie chart representing a student's project budget allocation, the segment for 'Cloud Infrastructure hosting' is marked as 72 degrees. What percentage of the overall budget is dedicated to hosting costs?",
            "hint": "*(Hint: Convert angular space to system percentages. The complete circle matrix is 360 degrees. Pct = (72 / 360) * 100.)*",
            "answer": "20%"
        },
        # HARD (PLACEMENT LEVEL)
        {
            "question": "A complex data table shows total production and percentage defects for 3 factory units (A, B, C). Unit A produces 5000 items with 2% defects. Unit B produces 4000 items with 3% defects. Unit C produces 1000 items with 5% defects. What is the combined total percentage of non-defective items across the whole operation?",
            "hint": "*(Hint: Isolate absolute defects per sector: A = 100, B = 120, C = 50. Total defects = 270 out of 10,000 total items. Total defect rate = 2.7%. Non-defective rate = 100% - 2.7%.)*",
            "answer": "97.3%"
        }
    ]
    

}