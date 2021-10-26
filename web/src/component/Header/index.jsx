import { React, useState } from "react";

import { AiFillDribbbleCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handlerClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div class="body">
      <header className="header">
        <nav className="nav">
          <div className="nav__logo">
            <AiFillDribbbleCircle />
          </div>

          <div
            className={"nav__menu " + (showMenu ? "-show" : "")}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="">
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="">
                  About
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="">
                  Works
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="">
                  Contacts
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="">
                  Comumunity
                </a>
              </li>
            </ul>
          </div>

          <div>
            <MdShoppingCart />
          </div>

          <div
            className="nav__menu--toggle"
            id="menu-toggle"
            onClick={handlerClickMenu}
          >
            <FaBars />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
