import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const style = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    minHeight: "100vh",
    padding: "20px"
  };

  return (
    <div style={style}>
      <h1>Theme App</h1>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;