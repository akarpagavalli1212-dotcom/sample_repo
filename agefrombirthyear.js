import { useState } from "react";

function App() {
  const [year, setYear] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    setAge(currentYear - Number(year));
  };

  return (
    <div>
      <h1>Age Calculator</h1>

      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Birth Year"
      />

      <button onClick={calculateAge}>Calculate</button>

      <h2>Age: {age}</h2>
    </div>
  );
}

export default App;