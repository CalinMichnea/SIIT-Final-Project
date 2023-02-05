import React, { useState } from "react";
import "./women-articles.css";
import Card from "react-bootstrap/Card";
import { ReactSVG } from "react-svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Heart from "./heart-svg.svg";
import ShoppingBag from "./shopping-bag-svg.svg";
import Dropdown from "react-bootstrap/Dropdown";
import Sneaker1 from "./firstsneaker.JPG";
import Sneaker2 from "./secondsneaker.JPG";
import Sneaker3 from "./thirdsneaker.JPG";
import Sneaker4 from "./forthsneaker.JPG";
import Sneaker5 from "./fifthsneaker.JPG";
import Pagination from "react-bootstrap/Pagination";
import SortBy from "./sort-by-svg.svg";
import Filter from "./filter-svg.svg";

function WomenArticles(props) {
  const handleAddToCart = () => {
    toast("Item added to cart!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "black-toast",
    });
  };

  class ShopItem {
    constructor(name, price, image) {
      this.name = name;
      this.price = price;
      this.image = image;
    }
  }

  let shopitems = [];

  let sneaker1 = new ShopItem("Air Force 1 Mid LE GS", 130.0, Sneaker1);
  let sneaker2 = new ShopItem("Air Force 1 Hi Utility 2.0", 180.99, Sneaker2);
  let sneaker3 = new ShopItem("Air Force 1 GS", 110.0, Sneaker3);
  let sneaker4 = new ShopItem("W Dunk High Up", 160.5, Sneaker4);
  let sneaker5 = new ShopItem("W Air Force 1 PRM", 200.0, Sneaker5);

  shopitems = [sneaker1, sneaker2, sneaker3, sneaker4, sneaker5];

  const tooltipInfo = {
    addToCart: "Add to cart",
    addToFav: "Add to favourites",
  };

  return (
    <div className="wrapper">
      <div className="side-navi">
        <h2 style={{ color: "white", margin: "30px" }}>Women's Sneakers</h2>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="dark"
            className="dropdown-toggle-class"
          >
            <ReactSVG src={SortBy}></ReactSVG>Sort by
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark" className="dropdown-items">
            <Dropdown.Item>Price Up</Dropdown.Item>
            <Dropdown.Item>Price Down</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Release Date</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Popularity</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="dark"
            className="dropdown-toggle-class"
          >
            <ReactSVG src={Filter}></ReactSVG>Filter
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item>Brand</Dropdown.Item>
            <Dropdown.Item>Size</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Safety Footwear</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Casual</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Running</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Gym</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="women-article-container">
        <ToastContainer />
        <Card
          style={{ width: "18rem", maxHeight: "450px" }}
          className="card-item"
          text="dark"
        >
          <Card.Img variant="top" src={Sneaker1} className="card-img" />
          <Card.Body>
            <Card.Title>NIKE</Card.Title>
            <Card.Text>
              <b>{shopitems[0].name}</b>
              <br></br>
              <b>Available Sizes: </b>
              <button>36</button>,<button>36.5</button>, <button>37.5</button>,{" "}
              <button>38</button>
              <br></br>
              <br></br>
              <br></br>
              <b>Price: {shopitems[0].price} EUR</b>
            </Card.Text>
            <div className="card-buttons-wrapper">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                addToCart={props.addToCart}
                item={props.item}
                overlay={
                  <Tooltip id="logo-1-tooltip">{tooltipInfo.addToCart}</Tooltip>
                }
              >
                <ReactSVG
                  src={ShoppingBag}
                  className="bag-svg"
                  onClick={() => {
                    handleAddToCart();
                    props.addToCart(shopitems[0]);
                  }}
                ></ReactSVG>
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="logo-1-tooltip">{tooltipInfo.addToFav}</Tooltip>
                }
              >
                <ReactSVG src={Heart} className="heart-svg"></ReactSVG>
              </OverlayTrigger>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", maxHeight: "450px" }}
          className="card-item"
          text="dark"
        >
          <Card.Img variant="top" src={Sneaker2} className="card-img" />
          <Card.Body>
            <Card.Title>NIKE</Card.Title>
            <Card.Text>
              <b>{shopitems[1].name}</b>
              <br></br> <b>Available Sizes: </b> <button>36</button>,
              <button>36.5</button>, <button>39</button>, <button>40.5</button>
              <br></br>
              <br></br>
              <br></br>
              <b>Price: {shopitems[1].price} EUR</b>
            </Card.Text>
            <div className="card-buttons-wrapper">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                addToCart={props.addToCart}
                item={props.item}
                overlay={
                  <Tooltip id="logo-1-tooltip">{tooltipInfo.addToCart}</Tooltip>
                }
              >
                <ReactSVG
                  src={ShoppingBag}
                  className="bag-svg"
                  onClick={() => {
                    handleAddToCart();
                    props.addToCart(shopitems[1]);
                  }}
                ></ReactSVG>
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                addToCart={props.addToCart}
                item={props.item}
                overlay={
                  <Tooltip id="logo-1-tooltip">{tooltipInfo.addToFav}</Tooltip>
                }
              >
                <ReactSVG src={Heart} className="heart-svg"></ReactSVG>
              </OverlayTrigger>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", maxHeight: "450px" }}
          className="card-item"
          text="dark"
        >
          <Card.Img variant="top" src={Sneaker3} className="card-img" />
          <Card.Body>
            <Card.Title>NIKE</Card.Title>
            <Card.Text>
              <b>{shopitems[2].name}</b>
              <br></br> <b>Available Sizes: </b> <button>36</button>,
              <button>36.5</button>, <button>38</button>, <button>40</button>
              <br></br>
              <br></br>
              <br></br>
              <b>Price: {shopitems[2].price} EUR</b>
            </Card.Text>
            <div className="card-buttons-wrapper">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                addToCart={props.addToCart}
                item={props.item}
                overlay={
                  <Tooltip id="logo-1-tooltip">{tooltipInfo.addToCart}</Tooltip>
                }
              >
                <ReactSVG
                  src={ShoppingBag}
                  className="bag-svg"
                  onClick={() => props.addToCart(shopitems[2])}
                ></ReactSVG>
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="logo-1-tooltip">{tooltipInfo.addToFav}</Tooltip>
                }
              >
                <ReactSVG
                  src={Heart}
                  className="heart-svg"
                  onClick={() => {
                    handleAddToCart();
                    props.addToCart(shopitems[2]);
                  }}
                ></ReactSVG>
              </OverlayTrigger>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", maxHeight: "450px" }}
          className="card-item"
          text="dark"
        >
          <Card.Img variant="top" src={Sneaker4} className="card-img" />
          <Card.Body>
            <Card.Title>NIKE</Card.Title>
            <Card.Text>
              <b>{shopitems[3].name}</b>
              <br></br> <b>Available Sizes: </b> <button>35.5</button>,
              <button>36</button> , <button>39</button>, <button>40</button> ,
              <button>41</button>
              <br></br>
              <br></br>
              <br></br>
              <b>Price: {shopitems[3].price} EUR</b>
            </Card.Text>
            <div className="card-buttons-wrapper">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                addToCart={props.addToCart}
                item={props.item}
                overlay={
                  <Tooltip id="logo-1-tooltip">{tooltipInfo.addToCart}</Tooltip>
                }
              >
                <ReactSVG
                  src={ShoppingBag}
                  className="bag-svg"
                  onClick={() => {
                    handleAddToCart();
                    props.addToCart(shopitems[3]);
                  }}
                ></ReactSVG>
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="logo-1-tooltip">{tooltipInfo.addToFav}</Tooltip>
                }
              >
                <ReactSVG src={Heart} className="heart-svg"></ReactSVG>
              </OverlayTrigger>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", maxHeight: "450px" }}
          className="card-item"
          text="dark"
        >
          <Card.Img variant="top" src={Sneaker5} className="card-img" />
          <Card.Body>
            <Card.Title>NIKE</Card.Title>
            <Card.Text>
              <b>{shopitems[4].name}</b>
              <br></br> <b>Available Sizes: </b> <button>36</button>,
              <button>36.5</button>, <button>37.5</button>,{" "}
              <button>38.5</button>
              <br></br>
              <br></br>
              <br></br>
              <b>Price: {shopitems[4].price} EUR</b>
            </Card.Text>
            <div className="card-buttons-wrapper">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                addToCart={props.addToCart}
                item={props.item}
                overlay={
                  <Tooltip id="logo-1-tooltip">{tooltipInfo.addToCart}</Tooltip>
                }
              >
                <ReactSVG
                  src={ShoppingBag}
                  className="bag-svg"
                  onClick={() => {
                    handleAddToCart();
                    props.addToCart(shopitems[4]);
                  }}
                ></ReactSVG>
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="logo-1-tooltip">{tooltipInfo.addToFav}</Tooltip>
                }
              >
                <ReactSVG src={Heart} className="heart-svg"></ReactSVG>
              </OverlayTrigger>
            </div>
          </Card.Body>
        </Card>
        <div className="pagination-div">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default WomenArticles;
