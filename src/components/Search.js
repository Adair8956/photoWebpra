import React , { useState} from 'react'

const Search = ({search,setInput}) => {

  const inputHandler = (e) =>{
    setInput(e.target.value);

  }

  return (
    <div className='search'>
        <input onChange={inputHandler} type="text" />
        <button onClick={search}>Serach</button>
    </div>
  )
}

export default Search