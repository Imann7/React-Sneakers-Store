import React from "react";
import Card from "./Card";

const Content = () => {

  
  const[items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(()=>{
    
  fetch("https://63fb60872027a45d8d656477.mockapi.io/items").then(response => {

  return response.json();
  }).then(json=>{
    setItems(json);
  });
  },[]);

  const addToCart = (obj) =>{

setCartItems([...cartItems,obj])

  }
  
  return (
    <div className="content">
      <div className="d-flex align-center justify-between">
        <h2>Sneakers</h2>

        <div className="search">
          
          <input className="search-in" placeholder="Search..." />
          <img height={16} width={16} src="search.svg" alt="Search" />
        </div>
      </div>
      <div className="sneakers d-flex flex-wrap">
        {items.map((obj) => (
          <Card 
            name={obj.name}
            sex={obj.sex}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onPlus={(obj)=>addToCart(obj)}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
