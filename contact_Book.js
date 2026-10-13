import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState([]);

  const addContact = () => {
    if (name === "" || phone === "") return;

    setContacts([...contacts, { name, phone }]);

    setName("");
    setPhone("");
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const filtered = contacts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Contact Book</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />

      <button onClick={addContact}>Add</button>

      <br />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />

      {filtered.map((item, index) => (
        <p key={index}>
          {item.name} - {item.phone}
          <button onClick={() => deleteContact(index)}>Delete</button>
        </p>
      ))}
    </div>
  );
}

export default App;