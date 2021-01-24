import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ index, title, calories, image, ingredients }) => {
  const roundedCalories = Math.round(calories);

  return (
    <div className="recipeCard">
      <div className="recipe__container">
        <h1 className="recipeCard__title">{title}</h1>
        <p className="recipeCard__calories">{roundedCalories} Calories</p>
        <img src={image} alt={title} className="recipeCard__image" />
        <ul>
          {ingredients.map((ingredient) => (
            <li className="recipeCard__ingredients">{ingredient.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
