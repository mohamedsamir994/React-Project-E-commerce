import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function TestLoging() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-light ms-2" onClick={handleShow}>
        <li className="fa fa-sign-in me-1"></li> Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <h1 class="h3 mb-3 fw-normal">Sign Up</h1>

            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">User Name</label>
            </div>

            <div class="form-floating mt-2">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mt-2">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3 mt-2">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="w-20 btn btn-lg btn-primary" type="submit">
              Sign Up
            </button>
            <p class="mt-5 mb-3 text-muted ">© 2022</p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
