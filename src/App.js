import axios from "axios";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Favourite from "./components/pages/Favourite";

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearch] = React.useState("");
  const [cartOpen, setCart] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourite, setFavourite] = React.useState([]);
  const [favItems, setFavItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
    axios
      .get("https://63fb60872027a45d8d656477.mockapi.io/items")
      .then((response) => {
        setItems(response.data);
      });
    axios
      .get("https://63fb60872027a45d8d656477.mockapi.io/cart")
      .then((response) => {
        setCartItems(response.data);
      });
    axios
      .get("https://63fe76d6571200b7b7cb49bf.mockapi.io/favourite")
      .then((response) => {
        setFavourite(response.data);
      });
  }, []);

  const addToCart = (item) => {
    console.log(item);
    if (cartItems.find((obj) => Number(obj.id) === Number(item.id))) {
      axios
        .delete(`https://63fb60872027a45d8d656477.mockapi.io/cart/${item.id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setCartItems((prev) =>
        prev.filter((obj) => Number(obj.id) !== Number(item.id))
      );
    } else {
      axios.post("https://63fb60872027a45d8d656477.mockapi.io/cart", item);
      setCartItems([...cartItems, item]);
    }
  };

  const onFav = (obj) => {
    if (favourite.find((favObj) => favObj.id === obj.id)) {
      axios.delete(
        `https://63fe76d6571200b7b7cb49bf.mockapi.io/favourite/${obj.id}`
      );
      setFavItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post("https://63fe76d6571200b7b7cb49bf.mockapi.io/favourite", obj);

      setFavItems([...favItems, obj]);
    }
  };

  const searchInput = (event) => {
    setSearch(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63fb60872027a45d8d656477.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      {cartOpen && (
        <Overlay
          onRemove={onRemoveItem}
          items={cartItems}
          onClickClose={() => setCart(false)}
        />
      )}

      <Header onClickCart={() => setCart(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              searchInput={searchInput}
              onFav={onFav}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/favourite"
          element={<Favourite onFav={onFav} items={favourite} />}
        />
      </Routes>
    </div>
  );
}

export default App;
