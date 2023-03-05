import React from "react";
import ContentLoader from "react-content-loader";

const Card = ({
  id,
  onPlus,
  onFavorite,
  name,
  sex,
  price,
  imageUrl,
  favorited = false,
  loading = false,
}) => {
  const [added, setAdded] = React.useState(false);
  const [addFav, setAddedFav] = React.useState(favorited);

  const plusClick = () => {
    onPlus({ id, name, sex, price, imageUrl });

    setAdded(!added);

    if (added == true) alert(name + " is removed from your cart");
    else alert(name + " is added to your cart");
  };

  const favClick = () => {
    onFavorite({ id, name, sex, price, imageUrl });
    setAddedFav(!addFav);
  };

  return (
    <div className="card">
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <div>
          <img
            onClick={favClick}
            height={38}
            width={38}
            className="fav"
            src={addFav ? "liked.svg" : "unliked.svg"}
            alt="Fav"
          />
          <img className="card-img" width={190} height={190} src={imageUrl} />
          <p>{name}</p>
          <span>{sex}</span>
          <div className="cardBottom">
            <div>
              <b>{price}</b>
            </div>
            <button className="plus">
              <img
                onClick={plusClick}
                width={20}
                height={20}
                src={added ? "btn-checked.svg" : "plus.png"}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
