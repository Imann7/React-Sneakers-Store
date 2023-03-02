import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

const Favourite = ({ items, onFav, onClickClose, addToCart }) => {
  return (
    <div className="content  ">
      <div className="d-flex  align-center ">
        <h2>Favourites</h2>
      </div>

      {items.length > 0 ? (
        <div>
          <div className=" d-flex flex-wrap">
            {items.map((obj, index) => (
              <Card
                key={index}
                id={obj.id}
                name={obj.name}
                sex={obj.sex}
                price={obj.price}
                imageUrl={obj.imageUrl}
                favorited={true}
                onFavorite={onFav}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="cartEmpty  d-flex align-center justify-center flex-column flex m-50">
          <img
            className="mb-20"
            width={120}
            height={120}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLlJJoQh7Lu1yWI_ICOA6iHqoq7c9sOgukw&usqp=CAU"
          />
          <h2>You don't have Favourites yet.</h2>
          <p>
            Tap the heart on any sneaker to make it as a favourite. All your
            favourite sneakers will apper here.
          </p>
          <Link to="/">
            <button className="greenButton">Go back</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Favourite;
