import React, { useRef, useState } from "react";

const Quiz = () => {
  const score = useRef(0);
  const [showScore, setShowScore] = useState(false);
  const quizData = [
    {
      id: 1,
      question:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      options: ["45°", "90°", "60°"],
      answer: "90°"
    },
    {
      id: 2,
      question:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      options: ["obtuse", "acute", "right angled"],
      answer: "right angled"
    },
    {
      id: 3,
      question: "A triangle can have",
      options: ["one right angle", "two right angles"],
      answer: "one right angle"
    },
    {
      id: 4,
      question: "Which of the following can form a right angled triangle?",
      options: ["14, 15, 26", "12, 16, 20"],
      answer: "12, 16, 20"
    },
    {
      id: 5,
      question: "Which of the following triangles are always similar?",
      options: ["Equilateral triangle", "Isosceles triangle"],
      answer: "Equilateral triangle"
    },
    {
      id: 6,
      question:
        "If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?",
      options: ["100°", "85°"],
      answer: "100°"
    },
    {
      id: 7,
      question:
        "If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?",
      options: ["30°", "10°"],
      answer: "30°"
    },
    {
      id: 8,
      question: "The perimeter of scalene triangle with sides a, b, c is",
      options: ["a + b + c", "2a", "None of these"],
      answer: "a + b + c"
    },
    {
      id: 9,
      question: "A scalene triangle has ___ lines of symmetry",
      options: ["two", "no", "15"],
      answer: "no"
    },
    {
      id: 10,
      question:
        "There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",
      options: ["85°", "65°", "45°"],
      answer: "45°"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowScore(true);
  };
  const handleChange = (value, answer) => {
    if (value === answer) {
      score.current += 1;
    }
    return;
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="form-data">
        {quizData.map((quiz) => (
          <div className="mt-1" key={quiz.id}>
            <p>{quiz.question}</p>
            {quiz.options.map((opt, i) => (
              <label key={opt + i}>
                <input
                  onChange={(e) => handleChange(e.target.value, quiz.answer)}
                  value={opt}
                  name={`question${quiz.id}`}
                  type="radio"
                />
                {opt}
              </label>
            ))}
          </div>
        ))}
        <button className="btn mt-1" type="submit">
          Check Answers
        </button>
      </form>
      {showScore && <p>{"your score is " + score.current}</p>}
    </div>
  );
};
export default Quiz;
