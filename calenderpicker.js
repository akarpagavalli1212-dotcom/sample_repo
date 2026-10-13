import { useState } from "react";

function App() {
  const [date, setDate] = useState("");

  return (
    <div>
      <h1>Calendar Picker</h1>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <h2>Selected Date: {date}</h2>
    </div>
  );
}

export default App;