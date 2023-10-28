import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  // console.log(process.env.API_ID)
  const searchRef =useRef()
  const [data, setData] = useState([]);
  const [search, setsearchValue] = useState("");
  // console.log(search)
  // let search = "chicken"
  useEffect(() => {
    let fetchdata = async () => {
      // let response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${env.API_ID}&app_key=${env.APP_KEY}`)
      let response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=249b8c77&app_key=accc417489d9e0dfa317fbc0cb7be4c8`)

      let data = await response.json()
      // console.log(data.hits[0].recipe.image)
      setData([data.hits])
    }
    fetchdata()
  }, [search])
  // console.log(data[0])
  const handleSearch = ()=>{
    let searchValue = searchRef.current.value
    // console.log(searchValue)
    setsearchValue(searchValue)
  }
  return (
    <div >

      <div className='searchDiv'>
        <input type="text" ref={searchRef}  style={{border:"1px solid"}}/>
        <button onClick={handleSearch} style={{ width: "150px", backgroundColor: "orange", padding: "10px", border: "none", borderRadius: "5px" }}>search recipe</button>
      </div>
      <div className='containerItems'>
        {data[0]?.map((items) => {
          return <Link to="/recipe" state={items}>
          <div className='itemsBox'>
            <img src={items.recipe.image} alt="" />
            <p>{items.recipe.label}</p>
          </div>
          </Link>
        
        })}
      </div>

    </div>
  )
}

export default Home
