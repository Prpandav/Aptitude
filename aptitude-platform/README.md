# CrackTheTape | Placement Simulation Engine

An enterprise-grade aptitude testing platform engineered to simulate real-world IT placement environments (e.g., TCS iON, AMCAT). Built with Next.js, this application features a custom algorithmic pipeline that dynamically generates highly realistic distractors for multiple-choice questions without requiring a static database of wrong answers.

## Architecture: The 10-Bucket Distractor Engine (Backend)

The core innovation of this platform is the `route.js` API. Instead of reading from a hardcoded set of A/B/C/D options, it utilizes a **Waterfall NLP Parsing Pipeline** to analyze the correct answer using Regex and dynamically generate mathematically or contextually deceptive options on the fly.

* **Math Variance Engine:** Isolates numbers from suffixes/prefixes (e.g., `15 km/hr`, `₹500`, `25%`) and mathematically scales realistic alternative options, stitching the units back perfectly.
* **Semantic Dictionaries:** Recognizes categorical data (Directions, Blood Relations, Days of the Week) and pulls contextually accurate distractors.
* **Logical Matrices:** Automatically intercepts and formats standardized answers for Syllogisms and Data Sufficiency problems.
* **Fraction & Ratio Mutators:** Intelligently flips, shifts, and alters ratios and fractions (e.g., automatically generating `2:3` and `4:2` when the answer is `3:2`).

## Proctor-Style Dashboard (Frontend)

The client-side application focuses heavily on professional UX and standardized test patterns:

* **Enterprise Light Theme:** A high-contrast, distraction-free UI designed to mimic actual corporate testing software to minimize eye strain.
* **Real-time State Management:** Track attempted, unattempted, and "Marked for Review" questions via a color-coded dynamic navigation palette.
* **Execution Analytics:** Auto-grades upon submission, generating a detailed report comparing user selections against true answers, alongside the engine's logic formulas.
* **Fluid Micro-interactions:** Powered by Framer Motion for tactile button feedback and smooth state transitions without sacrificing enterprise speed.

## Tech Stack

* **Framework:** Next.js (App Router API)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Data Layer:** JavaScript Objects / RegEx Pattern Matching

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/aptitude-platform.git](https://github.com/yourusername/aptitude-platform.git)