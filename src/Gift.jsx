import { useState,useContext } from "react";
import Products from "./Products";
import Cart from "./Cart";
import { Help } from "./helper/Help";

import Button from "@material-ui/core/Button";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";
function App() {

  const {addedItem,setAddedItem}=useContext(Help);
 
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addToCart = (product) => {
    const found = addedItem.some((el) => el.id === product.id);
    if (!found) {
      setAddedItem([...addedItem,product]);
    } else if (found) {
      alert("allredy added");
    }
  };

 

  const navigateTo = (nextPage) => {
    if (nextPage === "cart" && addedItem.length !== 0) {
      setPage(nextPage);
    } else if (nextPage === "products") {
      setPage(nextPage);
    } else if (nextPage === "cart" && addedItem.length === 0) {
      alert("add the item");
    }
  };

  return (
    <>
      <div className="shop-div">
        <div className="container">
          <Button
            variant="contained"
            color="primary"
            className="shop-btn"
            onClick={() => navigateTo(PAGE_CART)}
          >
            Go to cart ({addedItem.length})
          </Button>

          <Button
            variant="contained"
            color="primary"
            className="shop-btn"
            onClick={() => navigateTo(PAGE_PRODUCTS)}
          >
            View products
          </Button>
        </div>
      </div>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}

      {page === PAGE_CART && (
        <Cart cart={addedItem} />
      )}
    </>
  );
}

export default App;
