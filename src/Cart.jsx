import React from "react";
import "react-multi-carousel/lib/styles.css";
import OrderNow from "./OrderNow";
function Cart({ cart, removeFromCart }) {


  let tot=0;
  cart.map((cval)=>{
    tot += parseFloat(cval.price_);
  })











console.log(tot);
  if (cart.length !== 0) {
    return (
      <>
        <div className="cart-cards mb">
          <h1 className="center">continue shopping 🛒 total amount {tot}$</h1>
          <div className="container">
            {cart.map((product, idx) => {
              return (
                <>
                  <div className="card" key={idx}>
                    <h1 className="card-heading">{product.type}</h1>
                    <img className="card-img-top" src={product.img_} alt=".." />
                    <div className="card-body">
                      <h5 className="card-title">{product.price_}$</h5>
                      <p className="card-text">{product.name_}</p>

                      <div className="row">
                        <button
                          onClick={() => removeFromCart(product)}
                          className="btn"
                        >
                          Remove
                        </button>
                       
                        {/* <button className="btn" onClick={order}>
                          Order Now
                        </button> */}
                        <OrderNow prod_detail={product}/>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="cart-cards mb">
          <h1>OOps your cart is empty !!!!!</h1>
        </div>
      </>
    );
  }
}

export default Cart;
