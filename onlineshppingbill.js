import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (item === "" || price === "" || quantity === "") return;

    setItems([
      ...items,
      {
        item: item,
        price: Number(price),
        quantity: Number(quantity)
      }
    ]);

    setItem("");
    setPrice("");
    setQuantity("");
  };

  const total = items.reduce(
    (sum, x) => sum + x.price * x.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Bill Calculator</h1>

      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Item"
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />

      <button onClick={addItem}>Add Item</button>

      <h2>Bill</h2>

      {items.map((x, index) => (
        <p key={index}>
          {x.item} - ₹{x.price} × {x.quantity}
        </p>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default App;