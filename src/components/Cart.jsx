import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dellitem } from "../redux/actions";
import { NavLink } from "react-router-dom";
export default function Cart() {
  const state = useSelector((state) => {
    return state.additem;
  });
  const dispatch = useDispatch();
  const close = (product) => {
    dispatch(dellitem(product));
  };
  const products = (product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container py-2">
          <button
            onClick={() => {
              close(product);
            }}
            className="btn-close float-end"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={product.image} width="180px" height={200} alt="" />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emptycart = () => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3">
          <div className="container">
            <div className=" row">
              <div className="col-md-4 py-5">
                <h3>Cart is Empty!</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const checkout = () => {
    return (
      <div className="container">
        <NavLink
          to="/checkout"
          className="btn btn-outline-success py-2 px-5 mt-2 mb-5 "
        >
          Proceed To Check Out
        </NavLink>
      </div>
    );
  };
  return (
    <>
      <div className="py-5 my-5">
        {state.length === 0 && emptycart()}
        {state.length !== 0 && state.map(products)}
        {state.length !== 0 && checkout()}
      </div>
    </>
  );
}
