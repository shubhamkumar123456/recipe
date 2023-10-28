import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './wishlist.css'

const WishlistPage = (props) => {
    let items =JSON.parse(localStorage.getItem('nutritions'))||[]
    console.log(items)
    let recipe=items.recipe
   
   
    
  return (
    <div className='wishlist'>
      {items.map((value)=>{
     
        return <Link to={"/recipe"} state={{recipe:value.recipe}}>
            <div className='wishlistBox'>
                <img src={value.recipeImage} alt="" />
                <p>{value.recipeName}</p>
            </div>
        </Link>
      })}
    </div>
  )
}

export default WishlistPage
