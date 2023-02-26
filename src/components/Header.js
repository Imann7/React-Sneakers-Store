import React from "react";

const Header = (props) => {
  return (
    <header>
      <div className="headerLeft">
        <img className="logo" width={60} height={60} src="logo2.jpg" />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <span>The best sneakers store</span>
        </div>
      </div>
      <div className="headerRight">
        <ul>
          <li  >
            <img   onClick = {props.onClickCart} className="mr-10 cu-p" width={18} height={18} src="shop.svg" />
           $600
          </li>
          <li>
            {" "}
            <img width={18} height={18} src="user.svg" />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
