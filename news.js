import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);

  const searchNews = () => {
    setNews([
      "AI technology is growing rapidly",
      "New web development tools are available",
      "Students are developing new projects"
    ]);
  };

  return (
    <div>
      <h1>News App</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search news"
      />

      <button onClick={searchNews}>Search</button>

      {news.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default App;