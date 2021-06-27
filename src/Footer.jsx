import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="center">
            <h1>COME GRAB A SLICE!</h1>
          </div>
          <div className="row">
            <div className="address">
              <ul>
                <li>500 Terry Francois St. San Francisco, CA 94158</li>

                <li>
                  Monday – Friday 07:00AM – 10:00PM Saturday 09:00AM – 10:00PM
                  Sunday 08:00PM –11:00PM
                </li>

                <li>Tel: 123-456-7890 Email: info@mysite.com</li>
              </ul>
            </div>

            <div className="from-2">
              <h3>join our miling</h3>
              <form className="sub">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="sub" name="sub" placeholder="sub" />
                <input type="submit" value="suscrieb" className="btn-f" />
              </form>
            </div>
          </div>
          <div className="cpy-right">
            <ul className="icons">
              <li>
                <TwitterIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
            </ul>
            <p>© 2023 by The Pizza Shop. Proudly created with Wix.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
