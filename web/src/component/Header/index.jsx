import React from "react";
import { AiFillDribbbleCircle } from "react-icons/ai";

import "../../assets/css/header.scss";

const Header = () => {
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };

  showMenu("menu-toggle", "nav-menu");
  return (
    <header className="header">
      <nav className="nav bd-grid">
        <div className="nav__logo">
          <AiFillDribbbleCircle />
        </div>

        <div className="nav__menu" id="nav-menu">
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

        <div className="nav__menu--toggle" id="menu-toggle"></div>
      </nav>
    </header>
  );
};

export default Header;
