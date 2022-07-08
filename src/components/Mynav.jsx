import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import TestLoging from "./TestLoging";
import SignUp from "./SignUp";
export default function Mynav() {
  const state = useSelector((state) => {
    return state.additem;
  });
  return (
    <div>
      <nav className=" navbar fixed-top  navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm ">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            My COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <TestLoging />
              <SignUp />
              <NavLink to="/cart" className="btn btn-outline-light ms-2">
                <li className="fa fa-shopping-cart me-1"></li> Cart(
                {state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
