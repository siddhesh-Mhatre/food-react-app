import React from "react";
import { useState, useContext } from "react";
import { Help } from "./helper/Help";
import Items from "./Items";
import Footer from "./Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Products({ addToCart }) {
  const { addedItem } = useContext(Help);
  const [products] = useState(Items);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="order-food">
        <div className="container">
          <Carousel
            responsive={responsive}
            draggable={true}
            swipeable={true}
            infinite={true}
          >
            {products.map((product, idx) => {
              if (product.type === "Veg") {
                return (
                  <>
                    <div className="vag-cards mb" key={idx}>
                      <h1 className="card-heading">Veg Pizaa</h1>

                      <div className="card">
                        <img
                          className="card-img-top" 
                          src={product.img_}
                          alt=".."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.price_}$</h5>
                          <p className="card-text">{product.name_}</p>

                          {addedItem.some((ele) => ele.id === product.id) ? (
                            <>
                        
                        <button
                  
                          className="btn"
                          disabled
                        >
                        added
                        </button>
                      </>
                          ) : (
                            <>
                        
                              <button
                                onClick={() => addToCart(product)}
                                className="btn"
                              >
                                Add to cart
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </Carousel>

          <Carousel
            responsive={responsive}
            draggable={true}
            swipeable={true}
            infinite={true}
          >
            {products.map((product, idx) => {
              if (product.type === "NonVeg") {
                return (
                  <>
                    <div className="vag-cards mb">
                      <h1 className="card-heading">NonVeg</h1>

                      <div className="card" key={idx}>
                        <img
                          className="card-img-top"
                          src={product.img_}
                          alt=".."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.price_}</h5>
                          <p className="card-text">{product.name_}</p>
                          <button
                            onClick={() => addToCart(product)}
                            className="btn"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </Carousel>

          <Carousel
            responsive={responsive}
            draggable={true}
            swipeable={true}
            infinite={true}
          >
            {products.map((product, idx) => {
              if (product.type === "Cold") {
                return (
                  <>
                    <div className="vag-cards mb">
                      <h1 className="card-heading">cold</h1>

                      <div className="card" key={idx}>
                        <img
                          className="card-img-top"
                          src={product.img_}
                          alt=".."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.price_}</h5>
                          <p className="card-text">{product.name_}</p>
                          <button
                            onClick={() => addToCart(product)}
                            className="btn"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </Carousel>
        </div>
      </section>
      <Footer />
    </>
  );
}
