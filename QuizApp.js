import { useState } from "react";

function App() {
  const questions = [
    {
      question: "What is React?",
      options: ["Library", "Database", "Language", "OS"],
      answer: "Library"
    },
    {
      question: "Which hook is used for state?",
      options: ["useState", "useData", "useValue", "useReact"],
      answer: "useState"
    },
    {
      question: "React is developed by?",
      options: ["Google", "Meta", "Microsoft", "Amazon"],
      answer: "Meta"
    }
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const checkAnswer = (option) => {
    if (option === questions[index].answer) {
      setScore(score + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>

      {finished ? (
        <h2>Score: {score} / {questions.length}</h2>
      ) : (
        <div>
          <h2>{questions[index].question}</h2>

          {questions[index].options.map((option) => (
            <button
              key={option}
              onClick={() => checkAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;