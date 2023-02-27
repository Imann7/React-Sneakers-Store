import React from "react";

const Overlay = ({ onClickClose, items }) => {
  return (
    <div className="overlay">
      <div className="basket">
        <h2 className=" mb-50 d-flex justify-between">
          Cart
          <img
            height={32}
            width={32}
            className=" remove "
            src="remove.svg"
            alt="remove"
            onClick={onClickClose}
          />
        </h2>

        <div className="items">
          {items.map((item) => {
            return (
              <div className="item d-flex align-center mb-30">
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
                <img className=" remove" src="remove.svg" alt="remove" />
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
        </div>
        <button className="order-btn">CONFIRM ORDER ➜</button>
      </div>
    </div>
  );
};

export default Overlay;
