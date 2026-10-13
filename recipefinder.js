import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState(null);

  const recipes = [
    {
      name: "Chicken Biryani",
      ingredients: "Chicken, Rice, Onion, Tomato, Spices",
      method: "Cook chicken with spices and add cooked rice."
    },
    {
      name: "Masala Dosa",
      ingredients: "Rice, Urad Dal, Potato, Onion",
      method: "Prepare dosa batter and fill it with potato masala."
    },
    {
      name: "Pasta",
      ingredients: "Pasta, Tomato, Onion, Cheese",
      method: "Boil pasta and cook it with tomato sauce and cheese."
    }
  ];

  const searchRecipe = () => {
    const value = search.trim().toLowerCase();

    const result = recipes.find((item) =>
      item.name.toLowerCase().includes(value)
    );

    setRecipe(result);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Recipe Finder</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter recipe name"
        style={{ padding: "8px", width: "250px" }}
      />

      <button
        onClick={searchRecipe}
        style={{ padding: "8px 15px", marginLeft: "5px" }}
      >
        Search
      </button>

      {recipe && (
        <div style={{ marginTop: "25px" }}>
          <h2>{recipe.name}</h2>

          <h3>Ingredients</h3>
          <p>{recipe.ingredients}</p>

          <h3>Method</h3>
          <p>{recipe.method}</p>
        </div>
      )}

      {search && !recipe && (
        <p style={{ color: "red" }}>Recipe not found</p>
      )}
    </div>
  );
}

export default App;