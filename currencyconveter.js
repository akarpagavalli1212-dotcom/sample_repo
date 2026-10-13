import { useState } from "react";

function App() {
  const [rupees, setRupees] = useState("");
  const [dollars, setDollars] = useState("");

  const convert = () => {
    setDollars((Number(rupees) / 83).toFixed(2));
  };

  return (
    <div>
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="INR"
      />

      <button onClick={convert}>Convert</button>

      <h2>USD: {dollars}</h2>
    </div>
  );
}

export default App;