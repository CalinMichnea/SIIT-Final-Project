import React from "react";
import "./footer.css";
import { ReactSVG } from "react-svg";
import Instagram from "./instagram-svg.svg";
import Facebook from "./facebook-svg.svg";
import Linkedin from "./linkedin-svg.svg";
import Youtube from "./youtube-svg.svg";

function Footer() {
  return (
    <div className="my-footer-wrapper">
      <div className="links-column">
        <p>
          <b>Find A Store</b>
        </p>
        <p>
          <b>Sneak-It Journal</b>
        </p>
        <p>
          <b>Become A Member</b>
        </p>
        <p>
          <b>Feedback</b>
        </p>
        <p>
          <b>Promo Codes</b>
        </p>
      </div>
      <div className="links-column">
        <p>
          <b>Get Help</b>
        </p>
        <span>Order Status</span>
        <span>Shipping and Delivery</span>
        <span>Returns</span>
        <span>Payment Options</span>
        <span>Contact Us</span>
      </div>
      <div className="links-column">
        <p>
          <b>About Sneak-It</b>
        </p>
        <span>News</span>
        <span>Careers</span>
        <span>Investors</span>
        <span>Sustainabillity</span>
      </div>
      <div className="links-column">
        <p>
          <b>Join Us</b>
        </p>
        <span>Sneak-It App</span>
        <span>Sneak-It Run Club</span>
        <span>Sneak-It Training Club</span>
        <span>SNKRS</span>
      </div>
      <div className="svg-list">
        <a href="https://www.instagram.com/">
          <ReactSVG src={Instagram}></ReactSVG>
        </a>
        <a href="https://www.facebook.com/">
          <ReactSVG src={Facebook}></ReactSVG>
        </a>
        <a href="https://www.linkedin.com/">
          <ReactSVG src={Linkedin}></ReactSVG>
        </a>
        <a href="https://www.youtube.com/">
          <ReactSVG src={Youtube}></ReactSVG>
        </a>
      </div>
    </div>
  );
}

export default Footer;
