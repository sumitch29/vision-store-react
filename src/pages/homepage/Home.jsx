import "../homepage/Home.css";
import React from "react";
import {Link} from 'react-router-dom'
import {Navbar} from "../../components/Navbar/Navbar";
import banner from '../../assets/Home/Screenshot (323).png'
import vivo from '../../assets/Home/vivo v70.png'
import infinix from "../../assets/Home/infinixfull.png"
import motorola from "../../assets/Home/motorola edge 20 pro.png"
import redmi from "../../assets/Home/redmibrand.jpg"
import realme from "../../assets/Home/realmebrand.jpg"
import apple from "../../assets/Home/applebrand.jpg"
import oneplus from "../../assets/Home/oneplusbrand.jpg"
import oppo from "../../assets/Home/oppobrand.jpg"
import samsung from "../../assets/Home/samsung brand.jpg"

const Home = () => {
  return (
    <div>
      <Navbar />
      <main class="page">
        <div>
          <img
            class="image-box1"
            src={banner}
            alt="Banner"
          />
        </div>
        <div class="center">
          <button class="btn primary outline-primary outline-primarybtn">
            <Link to='/products'>Shop Now</Link>
          </button>
        </div>

        <div>
          <img
            class="image-box1"
            src={vivo}
            alt="Banner"
          />
        </div>

        <div class="grid-50-50-1">
          <div>
            <img
              class="image-box1"
              src={infinix}
              alt="Banner"
            />
          </div>
          <div>
            <img
              class="image-box1"
              src={motorola}
              alt="Banner"
            />
          </div>
        </div>

        <div class="heading center">Featured Brands</div>
        <div class="featured-brand">
          <div>
            <img class="brand-box" src={redmi} alt="" />
          </div>
          <div>
            <img class="brand-box" src={realme} alt="" />
          </div>
          <div>
            <img class="brand-box" src={apple} alt="" />
          </div>
          <div>
            <img class="brand-box" src={oneplus} alt="" />
          </div>
          <div>
            <img class="brand-box" src={oppo} alt="" />
          </div>
          <div>
            <img
              class="brand-box"
              src={samsung}
              alt=""
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export  {Home};
