import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Homeproduct from "../js/homeproduct";
import "../assets/css/home.css";

// Importaciones de imagines
import headphoneImg from '../assets/img/headphone.png';
import mobilephoneImg from '../assets/img/MobilePhone.png';
import smartwatchImg from '../assets/img/smartwatch.png';
import cpuImg from '../assets/img/cpuheat.jpg';
import sliderImg from '../assets/img/slider-img.png';

const Home = ({ detail, view, close, setClose, addtocart }) => {
  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((product) => {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={product.Img} alt={product.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{product.Cat}</h4>
                    <h2>{product.Title}</h2>
                    <p>
                      A Screen Everyone Will Love: Whether your family is
                      streaming or video chatting with friends tablet A8...{" "}
                    </p>
                    <h3>{product.Price}</h3>
                    <button>Add To Cart</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      ) : null}
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Colletion 2023</h2>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src={sliderImg} alt="sliderimg"></img>
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src={mobilephoneImg} alt="mobile"></img>
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={smartwatchImg} alt="watch"></img>
            </div>
            <div className="detail">
              <p>18 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={headphoneImg} alt="headphone"></img>
            </div>
            <div className="detail">
              <p>52 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={cpuImg} alt="cpu "></img>
            </div>
            <div className="detail">
              <p>63 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Oder above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On every Oder</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {Homeproduct.map((product) => {
            return (
              <div className="box" key={product.id}>
                <div className="img_box">
                  <img src={product.Img} alt={product.Title}></img>
                  <div className="icon">
                    <li onClick={() => addtocart(product)}>
                      <AiOutlineShoppingCart />
                    </li>
                    <li onClick={() => view(product)}>
                      <BsEye />
                    </li>
                    <li>
                      <AiOutlineHeart />
                    </li>
                  </div>
                </div>
                <div className="detail">
                  <p>{product.Cat}</p>
                  <h3>{product.Title}</h3>
                  <h4>${product.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen - 2021</h3>
            <p>$ 986</p>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src={sliderImg} alt="sliderimg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
