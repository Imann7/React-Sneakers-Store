import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className="headerLeft">
        <Link to="/">
          <img className="logo" width={50} height={50} src="basketball.png" />
        </Link>
        <div className="headerInfo">
          <h3 className="store-name">
            SNEAKER<span>HUB</span>
          </h3>
        </div>
      </div>
      <div className="headerMiddle">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="headerRight">
        <ul>
          <li>
            {" "}
            <Link to="/favourite">
              <img
                className="mr-10 cu-p"
                width={22}
                height={22}
                src="heart.svg"
              />
            </Link>
          </li>
          <li>
            <img
              onClick={props.onClickCart}
              className="mr-50 cu-p"
              width={22}
              height={22}
              src="shop.svg"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
