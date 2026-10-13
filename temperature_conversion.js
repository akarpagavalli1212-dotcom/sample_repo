import { useState } from "react";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convert = () => {
    const result = (Number(celsius) * 9) / 5 + 32;
    setFahrenheit(result);
  };

  return (
    <div>
      <h1>Temperature Conversion</h1>

      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Celsius"
      />

      <button onClick={convert}>Convert</button>

      <h2>Fahrenheit: {fahrenheit}</h2>
    </div>
  );
}

export default App;