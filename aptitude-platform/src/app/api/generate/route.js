import { NextResponse } from "next/server";
// Make sure this path matches your working setup (e.g., "../../../data/questionBank" or "@/data/questionBank")
import { questionBank } from "../../../data/questionbank";

// -------------------------------------------------------------
// AI-STYLE DISTRACTOR GENERATOR ALGORITHM
// -------------------------------------------------------------
function generateSmartOptions(correctAnswer) {
  const strAnswer = String(correctAnswer);

  // Find the first number in the answer string (handles decimals too)
  const numberMatch = strAnswer.match(/[\d.]+/);

  if (numberMatch) {
    const numStr = numberMatch[0];
    const num = parseFloat(numStr);

    // Determine how much to vary the wrong answers based on how big the number is
    let variance = 1;
    if (num > 10) variance = 2;
    if (num > 50) variance = 5;
    if (num > 100) variance = 10;
    if (num > 500) variance = 50;
    if (num > 1000) variance = 100;

    // Generate 3 tricky math variations
    const wrongNum1 = num + variance;
    const wrongNum2 = num > variance ? num - variance : num + variance * 2;
    const wrongNum3 = num + variance * 3;

    // Reconstruct the strings (e.g., "6 days" becomes "7 days")
    const opt1 = strAnswer.replace(numStr, wrongNum1);
    const opt2 = strAnswer.replace(numStr, wrongNum2);
    const opt3 = strAnswer.replace(numStr, wrongNum3);

    return [correctAnswer, opt1, opt2, opt3];
  }

  // Fallback for purely text-based logical reasoning answers (e.g., "North", "Uncle")
  return [
    correctAnswer,
    "Data Insufficient",
    "None of the above",
    "Cannot be determined",
  ];
}

export async function GET() {
  const activeTopics = Object.keys(questionBank).filter(
    (topic) => questionBank[topic].length > 0,
  );

  if (activeTopics.length === 0) {
    return NextResponse.json(
      { error: "Question bank is empty" },
      { status: 500 },
    );
  }

  const numQuestions = 15;
  let selectedQuestions = [];

  for (let i = 0; i < numQuestions; i++) {
    const randomTopic =
      activeTopics[Math.floor(Math.random() * activeTopics.length)];
    const questionsInTopic = questionBank[randomTopic];
    const randomQuestion =
      questionsInTopic[Math.floor(Math.random() * questionsInTopic.length)];

    // 🔥 If the DB already has options, use them. If not, use the smart generator!
    let finalOptions = randomQuestion.options;

    if (!finalOptions || finalOptions.length === 0) {
      finalOptions = generateSmartOptions(randomQuestion.answer);
    }

    // Shuffle the final options so the correct answer isn't always 'A'
    finalOptions = finalOptions.sort(() => Math.random() - 0.5);

    selectedQuestions.push({
      id: `q_${i}`,
      topic: randomTopic,
      question: randomQuestion.question,
      options: finalOptions,
      trueAnswer: randomQuestion.answer,
      hint: randomQuestion.hint,
    });
  }

  // Shuffle the final list of questions
  selectedQuestions = selectedQuestions.sort(() => Math.random() - 0.5);

  return NextResponse.json(selectedQuestions);
}
