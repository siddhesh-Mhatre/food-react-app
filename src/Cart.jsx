import React,{useContext} from "react";
import "react-multi-carousel/lib/styles.css";
import OrderNow from "./OrderNow";
import { Help } from "./helper/Help";


function Cart() {
const {addedItem,removeItem,incQty,decQty}=useContext(Help);
 
  let tot=0;
  addedItem.map((cval)=>{
    tot += parseFloat(cval.price_);
  })



 
  if (addedItem.length !== 0) {
    return (
      <>
        <div className="cart-cards mb">
          <h1 className="center">continue shopping 🛒 total amount {tot}$</h1>
          <div className="container">
            {addedItem.map((product, idx) => {
              return (
                <>
                  <div className="card" key={idx}>
                    <h1 className="card-heading">{product.type}</h1>
                    <img className="card-img-top" src={product.img_} alt=".." />
                    <div className="card-body">
                      <h5 className="card-title">{product.price_}$</h5>
                      <button onClick={()=>incQty(product.id)}>+</button>
                      <button> {product.quantity}</button>
                      <button onClick={()=>decQty(product.id)}>-</button>
                      <p className="card-text">{product.name_}</p>

                      <div className="row">
                        <button
                          onClick={() => removeItem(product.id)}
                          className="btn"
                        >
                          Remove
                        </button>
                  
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
