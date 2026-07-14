# Aptitude Mastery

A placement-preparation workspace combining structured aptitude notes, technical interview handbooks, randomized mock-test tools, and a timed web assessment platform.

> Consistency over intensity.

## What's Inside

| Area | Description |
|---|---|
| [Aptitude Topics](Topics/) | Formulas, concepts, shortcuts, solved examples, and practice problems |
| [Technical Core](technical_core/) | Technical interview notes from beginner to advanced level |
| [CrackTheTape](aptitude-platform/) | Timed placement-assessment web application |
| [Scripts](scripts/) | Python question bank and Markdown mock-test generator |

## Technical Core

### [Object-Oriented Programming Master Notes](technical_core/01_oops_concepts.md)

A complete OOP interview handbook covering:

- Classes, objects, and the four OOP pillars
- Constructors, access modifiers, overloading, and overriding
- Interfaces, abstract classes, and object relationships
- SOLID principles and common design patterns
- Java, C++, Python, C#, JavaScript, and TypeScript notes
- Interview questions, MCQs, coding exercises, and revision sheets

## Aptitude Coverage

The topic library includes quantitative aptitude, logical reasoning, and placement-focused problem solving:

- Percentages, averages, ratios, profit and loss
- Simple and compound interest
- Time and work, pipes and cisterns
- Time, speed and distance, boats and streams
- Probability, permutations, combinations, and number systems
- Geometry, mensuration, clocks, calendars, and ages
- Data interpretation, series, seating arrangements, and logical reasoning
- HCF, LCM, and divisibility rules

Start with the [formula sheet](Topics/00_formulas.md) or browse the complete [Topics](Topics/) directory.

## CrackTheTape

The web application provides a focused placement-test experience with:

- Randomized 15-question assessments
- A 15-minute countdown timer
- Answer tracking and question navigation
- Mark-for-review support
- Automatic scoring and answer explanations
- Dynamically generated multiple-choice distractors

### Tech Stack

- Next.js and React
- TypeScript and JavaScript
- Tailwind CSS
- Framer Motion
- Lucide React

### Run Locally

```bash
cd aptitude-platform
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

Useful commands:

```bash
npm run lint
npm run build
npm start
```

## Generate a Markdown Mock Test

The Python generator selects randomized questions from the static question bank and creates a Markdown test with a hidden answer section.

```bash
cd scripts
python mock_generator.py
```

## Repository Structure

```text
Aptitude/
├── Topics/                 # Aptitude study material
├── technical_core/         # Technical interview handbooks
├── scripts/                # Question bank and mock generator
├── aptitude-platform/      # Next.js assessment application
└── README.md
```

## Suggested Learning Flow

1. Review the formula sheet and one topic guide.
2. Solve the examples without reading the solutions first.
3. Generate a Markdown mock test or start a web assessment.
4. Review mistakes and revise weak concepts.
5. Use the technical handbooks for interview preparation.

---

Built for consistent placement preparation and interview revision.
