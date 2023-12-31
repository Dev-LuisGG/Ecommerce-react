import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import Productdetail from "../js/productdetail";
import "../assets/css/product.css";
const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(Productdetail);
  };
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
                    <button>Añadir Al Carrito</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      ) : null}
      <div className="products">
        <h2># Productos</h2>
        <p>Inicio . productos</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categorias</h3>
              <ul>
                <li onClick={() => AllProducts()}>Todos los Productos</li>
                <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filtterproduct("Headphone")}>Headphone</li>
                <li onClick={() => filtterproduct("Camera")}>Cámara</li>
                <li onClick={() => filtterproduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((product) => {
                return (
                  <>
                    <div className="box" key={product.id}>
                      <div className="img_box">
                        <img src={product.Img} alt={product.Title}></img>
                        <div className="icon">
                          {isAuthenticated ? (
                            <li onClick={() => addtocart(product)}>
                              <AiOutlineShoppingCart />
                            </li>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <AiOutlineShoppingCart />
                            </li>
                          )}
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
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
