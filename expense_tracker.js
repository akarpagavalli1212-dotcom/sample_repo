import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const saveExpense = () => {
    if (name === "" || amount === "") return;

    const data = {
      name: name,
      amount: amount
    };

    if (editIndex === null) {
      setExpenses([...expenses, data]);
    } else {
      const updated = [...expenses];
      updated[editIndex] = data;
      setExpenses(updated);
      setEditIndex(null);
    }

    setName("");
    setAmount("");
  };

  const editExpense = (index) => {
    setName(expenses[index].name);
    setAmount(expenses[index].amount);
    setEditIndex(index);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Expense name"
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />

      <button onClick={saveExpense}>
        {editIndex === null ? "Add" : "Update"}
      </button>

      {expenses.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.amount}
          <button onClick={() => editExpense(index)}>Edit</button>
          <button onClick={() => deleteExpense(index)}>Delete</button>
        </p>
      ))}
    </div>
  );
}

export default App;