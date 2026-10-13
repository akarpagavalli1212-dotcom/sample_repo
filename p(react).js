import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  const dictionary = {
    react: {
      meaning: "A JavaScript library used to build user interfaces.",
      example: "React is used to create interactive web applications.",
      type: "Technology"
    },
    computer: {
      meaning: "An electronic device that processes and stores data.",
      example: "A computer can perform many tasks quickly.",
      type: "Noun"
    },
    algorithm: {
      meaning: "A step-by-step procedure used to solve a problem.",
      example: "Sorting is a common algorithm problem.",
      type: "Noun"
    },
    javascript: {
      meaning: "A programming language used to create interactive websites.",
      example: "JavaScript makes web pages interactive.",
      type: "Technology"
    }
  };

  const searchWord = () => {
    const data = dictionary[word.toLowerCase()];

    if (data) {
      setResult(data);
    } else {
      setResult({
        meaning: "Word not found",
        example: "Try searching React, Computer, Algorithm or JavaScript.",
        type: "-"
      });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px #ccc"
        }}
      >
        <h1 style={{ textAlign: "center" }}>📖 Dictionary</h1>

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            style={{
              flex: 1,
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Search a word..."
          />

          <button
            onClick={searchWord}
            style={{
              padding: "12px 20px",
              background: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "8px"
            }}
          >
            Search
          </button>
        </div>

        {result && (
          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              background: "#f8f9ff",
              borderRadius: "12px"
            }}
          >
            <h2>{word}</h2>
            <p><b>Type:</b> {result.type}</p>
            <p><b>Meaning:</b> {result.meaning}</p>
            <p><b>Example:</b> {result.example}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;