import Card from "./components/Card";
import Content from "./components/Content";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import React from "react";

function App() {



const [cartOpen, setCart] = React.useState(false);
const [cartItems, setCartItems] = React.useState([]);

  return (
    <div className="wrapper">

     {cartOpen &&<Overlay items= {cartItems} onClickClose = { () =>setCart(false)}/> }
      <Header onClickCart = { () =>setCart(true)}  />
      <Content />
      
    </div>
  );
}

export default App;
