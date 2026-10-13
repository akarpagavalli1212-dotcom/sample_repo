import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    const h = Number(height) / 100;
    const result = Number(weight) / (h * h);

    setBmi(result.toFixed(2));
  };

  return (
    <div>
      <h1>BMI Calculator</h1>

      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight (kg)"
      />

      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height (cm)"
      />

      <button onClick={calculateBMI}>Calculate</button>

      <h2>BMI: {bmi}</h2>
    </div>
  );
}

export default App;