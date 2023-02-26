import React from "react";

const Overlay = (props) => {
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
            onClick={props.onClickClose}
          />
        </h2>

        <div className="items">
          {props.items.map((obj) => {
            <div className="item d-flex align-center mb-30">
              <img src={obj.imageUrl} width={90} height={90} />

              <div className="ml-30  ">
                <p>{obj.name} </p>
                <span>{obj.sex}</span>
                <div className="mt-10">
                  <b>{obj.price}</b>
                </div>
              </div>

              <img className=" remove ml-50" src="remove.svg" alt="remove" />
            </div>;
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
