import Card from "../Card";
import React from "react";


const Home = ({items,
    searchValue,
    searchInput,
    onFav,
    addToCart}) =>{


        return(   
      <div className="content">
        <div className="d-flex align-center justify-between">
            <h2>{searchValue ? `Search by request:  "${searchValue}"` : "Sneakers"}</h2>
        <div className="search">
        <input
      value={searchValue}
      onChange={searchInput}
      className="search-in"
      placeholder="Search..."
    />
    <img height={16} width={16} src="search.svg" alt="Search" />
  </div>
</div>
<div className="sneakers d-flex flex-wrap">
  {items
    .filter((obj) =>
      obj.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((obj, index) => (
      <Card
        key={index}
        name={obj.name}
        sex={obj.sex}
        price={obj.price}
        imageUrl={obj.imageUrl}
        onFavorite={(obj)=>onFav(obj)}
        onPlus={(obj) => addToCart(obj)}
      />
    ))}
</div>
</div>)


}


export default Home;