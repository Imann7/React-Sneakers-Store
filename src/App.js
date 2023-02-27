import Card from "./components/Card";

import Header from "./components/Header";
import Overlay from "./components/Overlay";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearch] = React.useState("");
  const [cartOpen, setCart] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://63fb60872027a45d8d656477.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const addToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  const searchInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpen && (
        <Overlay items={cartItems} onClickClose={() => setCart(false)} />
      )}

      <Header onClickCart={() => setCart(true)} />

      <div className="content">
        <div className="d-flex align-center justify-between">
          <h2>
            {searchValue ? `Search by request:  "${searchValue}"` : "Sneakers"}
          </h2>

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
                onPlus={(obj) => addToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
