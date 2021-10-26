import React from "react";

import { SVG } from "../../assets/icons/SVG";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

const Home = () => {
  return (
    <div className="body">
      <div class="home bd-grid">
        <div class="home__data">
          <h1 class="home__title">Hello Dribbble</h1>

          <span class="home__name">I'am Bedimcode</span>

          <a href="#" class="button">
            Explorar
          </a>

          <div class="home__social">
            <span class="home__social-name">Siguenos</span>

            <a href="" class="home__social--icon">
              <SiGithub />
            </a>

            <a href="" class="home__social--icon">
              <BsLinkedin />
            </a>

            <a href="" class="home__social--icon">
              <SiInstagram />
            </a>
          </div>
        </div>

        <div class="home__img">
          <SVG.HomeBackground />
        </div>
      </div>
    </div>
  );
};

export default Home;
