import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [book, setBook] = useState(null);

  const books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      category: "Fiction"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      year: 2018,
      category: "Self Help"
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      category: "Programming"
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      year: 1997,
      category: "Finance"
    }
  ];

  const searchBook = () => {
    const value = search.trim().toLowerCase();

    const result = books.find((item) =>
      item.title.toLowerCase().includes(value)
    );

    setBook(result);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Book Finder</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter book name"
        style={{ padding: "8px", width: "250px" }}
      />

      <button
        onClick={searchBook}
        style={{ padding: "8px 15px", marginLeft: "5px" }}
      >
        Search
      </button>

      {book && (
        <div style={{ marginTop: "25px" }}>
          <h2>{book.title}</h2>

          <p>
            <b>Author:</b> {book.author}
          </p>

          <p>
            <b>Published Year:</b> {book.year}
          </p>

          <p>
            <b>Category:</b> {book.category}
          </p>
        </div>
      )}

      {search && !book && (
        <p style={{ color: "red" }}>Book not found</p>
      )}
    </div>
  );
}

export default App;