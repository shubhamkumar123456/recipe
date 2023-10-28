import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const WishlistPage = (props) => {
    let items =JSON.parse(localStorage.getItem('nutritions'))||[]
    console.log(items)
   
    
  return (
    <div>
      {items.map((value)=>{
        return <Link to={"/recipe"} state={items.recipe}>
            <div>
                <img src={value.recipeImage} alt="" />
                <p>{value.recipeName}</p>
            </div>
        </Link>
      })}
    </div>
  )
}

export default WishlistPage
