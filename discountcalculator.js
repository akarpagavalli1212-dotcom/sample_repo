import { useState } from "react";

function App() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const discountAmount =
      (Number(price) * Number(discount)) / 100;

    const finalPrice = Number(price) - discountAmount;

    setResult(finalPrice);
  };

  return (
    <div>
      <h1>Discount Calculator</h1>

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />

      <input
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Discount %"
      />

      <button onClick={calculate}>Calculate</button>

      <h2>Final Price: ₹{result}</h2>
    </div>
  );
}

export default App;