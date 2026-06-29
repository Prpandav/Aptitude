import { NextResponse } from "next/server";
import { questionBank } from "../../../data/questionbank"; // Update path if needed

// --- HELPER: Shuffle Array ---
const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

// --- STATIC DICTIONARIES (Buckets 3, 4, 5) ---
const DICTIONARIES = {
  directions: [
    "North",
    "South",
    "East",
    "West",
    "North-East",
    "North-West",
    "South-East",
    "South-West",
  ],
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  relations: [
    "Father",
    "Mother",
    "Brother",
    "Sister",
    "Uncle",
    "Aunt",
    "Nephew",
    "Niece",
    "Cousin",
    "Grandfather",
    "Grandmother",
    "Son",
    "Daughter",
    "Brother-in-law",
    "Sister-in-law",
  ],
};

const MATRICES = {
  syllogism: [
    "Only conclusion I follows",
    "Only conclusion II follows",
    "Both I and II follow",
    "Neither I nor II follows",
    "Either I or II follows",
  ],
  dataSufficiency: [
    "Statement I alone is sufficient",
    "Statement II alone is sufficient",
    "Both statements together are sufficient",
    "Neither statement is sufficient",
    "Either statement alone is sufficient",
  ],
};

// -------------------------------------------------------------
// THE WATERFALL ENGINE (9-Bucket Routing)
// -------------------------------------------------------------
function getSmartOptions(correctAnswer, topicQuestions) {
  const strAns = String(correctAnswer).trim();
  const lowerAns = strAns.toLowerCase();

  // 🪣 BUCKET 1: Syllogisms & Conclusions
  if (/only i |both i |neither i |follows/i.test(lowerAns)) {
    const wrongOptions = shuffle(
      MATRICES.syllogism.filter((opt) => opt.toLowerCase() !== lowerAns),
    ).slice(0, 3);
    return shuffle([correctAnswer, ...wrongOptions]);
  }

  // 🪣 BUCKET 2: Data Sufficiency
  if (
    /statement i|alone is sufficient|together are sufficient/i.test(lowerAns)
  ) {
    const wrongOptions = shuffle(
      MATRICES.dataSufficiency.filter((opt) => opt.toLowerCase() !== lowerAns),
    ).slice(0, 3);
    return shuffle([correctAnswer, ...wrongOptions]);
  }

  // 🪣 BUCKET 3, 4, 5: Semantic Dictionaries
  for (const [category, arr] of Object.entries(DICTIONARIES)) {
    const match = arr.find((item) => item.toLowerCase() === lowerAns);
    if (match) {
      const wrongOptions = shuffle(arr.filter((item) => item !== match)).slice(
        0,
        3,
      );
      return shuffle([correctAnswer, ...wrongOptions]);
    }
  }

  // 🪣 BUCKET 6: Ratios (e.g., "3:2")
  const ratioMatch = strAns.match(/^(\d+):(\d+)$/);
  if (ratioMatch) {
    const [_, n1, n2] = ratioMatch;
    const num1 = parseInt(n1),
      num2 = parseInt(n2);
    const pool = new Set([
      `${num2}:${num1}`, // Flipped
      `${num1 + 1}:${num2}`,
      `${num1}:${num2 + 1}`,
      `${Math.max(1, num1 - 1)}:${num2}`,
      `${num1 * 2}:${num2 * 2 + 1}`,
    ]);
    pool.delete(strAns); // Ensure true answer isn't duplicated
    const wrongOptions = shuffle(Array.from(pool)).slice(0, 3);
    return shuffle([correctAnswer, ...wrongOptions]);
  }

  // 🪣 BUCKET 7: Fractions (e.g., "3/4")
  const fractionMatch = strAns.match(/^(\d+)\/(\d+)$/);
  if (fractionMatch) {
    const [_, n1, n2] = fractionMatch;
    const num1 = parseInt(n1),
      num2 = parseInt(n2);
    const pool = new Set([
      `${num2}/${num1}`, // Flipped
      `${num1 + 1}/${num2}`,
      `${num1}/${num2 + 1}`,
      `${Math.max(1, num1 - 1)}/${num2}`,
    ]);
    pool.delete(strAns);
    const wrongOptions = shuffle(Array.from(pool)).slice(0, 3);
    return shuffle([correctAnswer, ...wrongOptions]);
  }

  // 🪣 BUCKET 8 & 9: Units, Percentages, and Pure Numbers
  // Regex isolates: Prefix (₹), Number (500), Suffix (% or km)
  const mathMatch = strAns.match(
    /^([^\d\s-]*\s?)(-?\d+(?:\.\d+)?)(\s?[^\d\s]*)$/,
  );
  if (mathMatch) {
    const [_, prefix = "", numStr, suffix = ""] = mathMatch;
    const num = parseFloat(numStr);

    // Variance Logic
    let v =
      num > 1000 ? 100 : num > 100 ? 10 : num > 10 ? 2 : num >= 1 ? 1 : 0.1;

    const generateNum = (val) => {
      // Fixes trailing zeroes unless it's a decimal base
      return val % 1 !== 0 ? val.toFixed(1) : Math.round(val);
    };

    const pool = new Set([
      `${prefix}${generateNum(num + v)}${suffix}`,
      `${prefix}${generateNum(Math.max(0, num - v))}${suffix}`,
      `${prefix}${generateNum(num + v * 2)}${suffix}`,
      `${prefix}${generateNum(Math.max(0, num - v * 2))}${suffix}`,
    ]);
    pool.delete(strAns);
    const wrongOptions = shuffle(Array.from(pool)).slice(0, 3);
    return shuffle([correctAnswer, ...wrongOptions]);
  }

  // 🪣 BUCKET 10: Fallback Contextual Stealing
  const pool = topicQuestions
    .filter((q) => q.answer !== correctAnswer)
    .map((q) => q.answer);

  const distractors = [...new Set(pool)].filter(Boolean); // Unique, non-empty values
  const shuffledDistractors = shuffle(distractors).slice(0, 3);

  while (shuffledDistractors.length < 3) {
    shuffledDistractors.push(`Option ${shuffledDistractors.length + 1}`);
  }

  return shuffle([correctAnswer, ...shuffledDistractors]);
}

// -------------------------------------------------------------
// MAIN API ROUTE
// -------------------------------------------------------------
export async function GET() {
  const activeTopics = Object.keys(questionBank).filter(
    (t) => questionBank[t].length > 0,
  );
  if (activeTopics.length === 0)
    return NextResponse.json({ error: "DB Empty" }, { status: 500 });

  let selectedQuestions = [];
  const numQuestions = 15;

  for (let i = 0; i < numQuestions; i++) {
    const topic = activeTopics[Math.floor(Math.random() * activeTopics.length)];
    const qList = questionBank[topic];
    const q = qList[Math.floor(Math.random() * qList.length)];

    selectedQuestions.push({
      id: `q_${i}`,
      topic: topic,
      question: q.question,
      options:
        q.options && q.options.length === 4
          ? q.options
          : getSmartOptions(q.answer, qList),
      trueAnswer: q.answer,
      hint: q.hint || "No logic formula provided for this question.",
    });
  }

  return NextResponse.json(shuffle(selectedQuestions));
}
