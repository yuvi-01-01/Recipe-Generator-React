import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol className={style.ingredients}>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <p>Calories in this recipe are <b>{calories.toFixed(2)}</b></p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
};

export default Recipe;