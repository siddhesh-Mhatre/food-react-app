import { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";


import Button from "@material-ui/core/Button";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";
function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addToCart = (product) => {
    const found = cart.some((el) => el.id === product.id);
    if (!found) {
      setCart([...cart, { ...product }]);
    } else if (found) {
      alert("allredy added");
    }
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    if (nextPage === "cart" && cart.length !== 0) {
      setPage(nextPage);
    } else if (nextPage === "products") {
      setPage(nextPage);
    } else if (nextPage === "cart" && cart.length === 0) {
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
            Go to cart ({cart.length})
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
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
    </>
  );
}

export default App;
