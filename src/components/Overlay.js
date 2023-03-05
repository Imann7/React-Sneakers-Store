import React from "react";

const Overlay = ({ onClickClose, onRemove, items }) => {
  return (
    <div className="overlay">
      <div className="basket">
        <h2 className=" mb-50 d-flex justify-between">
         CART
          <img
            height={32}
            width={32}
            className=" remove "
            src="remove.svg"
            alt="remove"
            onClick={onClickClose}
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((item) => {
                return (
                  <div key={item.id} className="item d-flex align-center mb-30">
                    <img
                      width={100}
                      height={100}
                      src={item.imageUrl}
                      alt={item.name}
                    />
                    <div className="ml-20">
                      <h3>{item.name}</h3>
                      <p className="sex">{item.sex}</p>
                      <b>{item.price}</b>
                    </div>
                    <img
                      onClick={() => onRemove(item.id)}
                      className=" remove"
                      src="remove.svg"
                      alt="remove"
                    />
                  </div>
                );
              })}
            </div>

            <div className="bottomItems mt-50">
              <div className="d-flex justify-between mb-20">
                <b>SUBTOTAL:</b>
                <b>$600</b>
              </div>
              <div className="d-flex justify-between">
                <b>VAT 1%:</b>
                <b>$2</b>
              </div>
              <button className="greenButton mt-50">CONFIRM ORDER ➜</button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty  d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="empty-cart.jpg"
            />
            <h2>Cart is empty</h2>
            <p>Add at least one sneaker, for making order.</p>
            <button onClick={onClickClose} className="greenButton">
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overlay;
