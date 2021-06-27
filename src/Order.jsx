import React from "react";
import Footer from "./Footer";
import { Scrollbars } from "react-custom-scrollbars-2";
import Button from '@material-ui/core/Button';
const Order = ({ img_, price_, name_ }) => {
  return (
    <>
      <section className="checkout">
        <div className="container">
          <div className="row">
            <div className="left-part">
              <img src={img_} />
             <h1> {name_}</h1>
            </div>

            <div className="right-content">
              <h1 className="item-head"> {name_} Making Steps</h1>

              <Scrollbars>
                <p className="item-steps">
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.

                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                
                </p>
              </Scrollbars>

              <h4> price {price_}$</h4>
              <Button type="submit"  variant="contained" color="secondary">
              order Now
          </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Order;
