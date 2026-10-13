import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    if (name === "" || email === "" || password === "") {
      setMessage("All fields are required");
    } else if (password.length < 6) {
      setMessage("Password must have 6 characters");
    } else {
      setMessage("Form submitted successfully");
    }
  };

  return (
    <div>
      <h1>Form Validation</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button onClick={submitForm}>Submit</button>

      <h3>{message}</h3>
    </div>
  );
}

export default App;