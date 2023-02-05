import React from "react";
import "./checkout.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Checkout(props) {
  const numberOfItems = props.cartLength;
  const totalprice = props.total;

  return (
    <div className="checkout-container">
      <div className="side-nav">
        <h1>Checkout</h1>
      </div>
      <div className="form-wrapper">
        <Form>
          <h2>Shipping Details</h2>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Name *</Form.Label>
            <Form.Control
              placeholder="Enter name"
              className="form-control-class"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Surname *</Form.Label>
            <Form.Control
              placeholder="Surname"
              className="form-control-class"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Phone Number</Form.Label>
            <Form.Control
              placeholder="Phone Number"
              className="form-control-class"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Country *</Form.Label>
            <Form.Control
              placeholder="Country"
              className="form-control-class"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">City *</Form.Label>
            <Form.Control placeholder="City" className="form-control-class" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Address *</Form.Label>
            <Form.Control
              placeholder="Address"
              className="form-control-class"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Postal Code *</Form.Label>
            <Form.Control
              placeholder="Postal Code"
              className="form-control-class"
            />
          </Form.Group>
          <h2>Shipping Method</h2>
          <div
            className="mb-3"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Form.Group>
              <Form.Check type="radio" label="Urgent Cargus /19$ fee" />
              <br></br>
              <Form.Check type="radio" label="EasyBox /12$ fee" />
            </Form.Group>
          </div>
          <h2>Payment Method</h2>
          <div
            className="mb-3"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Form.Group>
              <Form.Check type="radio" label="On pickup" />
              <br></br>
              <Form.Check type="radio" label="Online /Credit Card" />
            </Form.Group>
          </div>
        </Form>
      </div>
      <div className="right-form-section">
        <h3>Total number of items: {numberOfItems}</h3>
        <h3>Total price of your order: {totalprice} Eur</h3>
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-label">Email address *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="form-control-class"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-label">Password *</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="form-control-class"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Form.Check
              type="checkbox"
              label="I agree with the terms and conditions *"
            />
            <Form.Check
              type="checkbox"
              label="I want to receive commercial ads to my email"
            />
            <Form.Check type="checkbox" label="Sign up for NewsLetter" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Finalize Order/ Proceed to payment
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Checkout;
