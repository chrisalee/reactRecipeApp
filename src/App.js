import React, { useEffect, useState } from "react";
import "./App.css";
import RecipeCard from "./components/RecipeCard";

const App = () => {
  // get your api at https://www.edamam.com/
  const REACT_APP_RECIPE_APP_ID = process.env.REACT_APP_RECIPE_APP_ID;
  const REACT_APP_RECIPE_APP_KEY = process.env.REACT_APP_RECIPE_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_RECIPE_APP_ID}&app_key=${REACT_APP_RECIPE_APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  const updateSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    // console.log(search);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="app">

      <div className="app__header">
        <h1>Foodie Recipes</h1>
        <form onSubmit={getSearch} className="app__form">
          <input 
            className="app__searchBar" 
            type="text" 
            value={search}
            onChange={updateSearch}
          />
          <button
            className="app__searchButton"
            // onClick={}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="app__container">
        <div className="app__row">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
