import React, { useState } from 'react'
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import './displayRecipe.css'
const DisplayRecipe = (props) => {
    // const navigate =useNavigate()
    let location = useLocation();
    console.log(location)
    let recipeDetails = location.state.recipe
    let recipe = location.state.recipe
    console.log(recipeDetails)
    let recipeImage = recipeDetails.image;
    let recipeName = recipeDetails.label;
    let ingredients = recipeDetails.ingredientLines
    let link=recipeDetails.url
    let Nutritions = {
        fat: recipeDetails.totalNutrients.FAT,
        sugar: recipeDetails.totalNutrients.SUGAR,
        vitamin: recipeDetails.totalNutrients.VITB12,
        link:recipeDetails.url
    }
    let obj={
        recipe,
        recipeImage,
        recipeName,
        ingredients,
        Nutritions,
        link
    }
    // console.log(Nutritions)
    // console.log(ingredients)
    // const [ingredientsArr, setingredientsArr] = useState(ingredients);

   
    const wishListBtn=()=>{
        let arr=[];
        // console.log(obj)
        let oldData=JSON.parse(localStorage.getItem('nutritions'))||[]
        
        oldData.push(obj)
        localStorage.setItem('nutritions', JSON.stringify(oldData))
        // navigate('/wishlist',{state:obj})
        // navigate('/wishlist')
    }
    return (
        <div className='displayRecipe'>
            <div className='recipeTop'>
                <img src={recipeImage} alt="" />
                <div>
                    <h3 style={{ color: "brown" }}>{recipeName}</h3>
                    <h5 style={{marginTop:"30px"}}>Nutritions</h5>
                    <div className='nutritionDiv'>

                        <p>{Nutritions.fat.label}<br/>{" "}{Math.round(Nutritions.fat.quantity)}{Nutritions.fat.unit}</p>
                        <p>{Nutritions.sugar.label}<br/>{" "}{Math.round(Nutritions.sugar.quantity)}{Nutritions.sugar.unit}</p>
                        <p>{Nutritions.vitamin.label}<br/>{" "}{Math.round(Nutritions.vitamin.quantity)}{Nutritions.vitamin.unit}</p>

                    </div>
                    <div className='btnContainer'>
                        <Link to={link}><button  className='cookingBtn'>Cooking Instruction</button></Link>
                        <button onClick={wishListBtn} className='cookingBtn'>Add To Wishlist</button>
                    </div>
                </div>
            </div>
            <div className='recipeBottom'>
                <div className='recipeIngredients'>
                    <h1>Ingredients {ingredients.length}</h1>
                    {ingredients.map((item) => {
                        return <ul>
                            <li>{item}</li>
                        </ul>
                    })}
                </div>
            </div>
        </div>
    )
}

export default DisplayRecipe
