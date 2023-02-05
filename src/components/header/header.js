import React from "react";
import "./header.css";
import Carousel from "react-bootstrap/Carousel";
import createYourOwn from "./create-your-own.jpg";
import becomeMember from "./latest-products.jpg";
import buyBackSneakers from "./buy-back-sneakers.jpg";

function CarouselHeader() {
  return (
    <Carousel className="carousel-wrapper">
      <Carousel.Item style={{ backgroundColor: "black" }}>
        <img
          className="d-block w-100 "
          src={createYourOwn}
          style={{ height: "800px", display: "block", margin: "auto" }}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h1>Create your own!</h1>
          <p>Be your own designer! Customize you own Air Force 1 sneakers!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundColor: "black" }}>
        <img
          className="d-block w-100"
          src={buyBackSneakers}
          style={{ height: "800px", display: "block", margin: "auto" }}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h1>Got bored of your old sneakers?</h1>
          <p>Not a problem! Check out our buy-back programme!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundColor: "black" }}>
        <img
          className="d-block w-100"
          src={becomeMember}
          style={{ height: "800px", display: "block", margin: "auto" }}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h1>Become a member!</h1>
          <p>
            Join our club and gain access to premium offers and latest releases!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;
